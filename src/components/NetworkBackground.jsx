import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = { x: null, y: null }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e) => {
      mouse.x = e.x
      mouse.y = e.y
    }

    window.addEventListener('mousemove', handleMouseMove)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000 // Depth
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = (Math.random() - 0.5) * 2
        this.radius = Math.random() * 3 + 2
        this.hue = Math.random() * 360
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z += this.vz

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        if (this.z < 0 || this.z > 1000) this.vz *= -1

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            const force = (150 - distance) / 150
            const angle = Math.atan2(dy, dx)
            this.vx -= Math.cos(angle) * force * 0.3
            this.vy -= Math.sin(angle) * force * 0.3
          }
        }
      }

      draw() {
        const scale = 1000 / (1000 + this.z)
        const x = this.x * scale + canvas.width / 2 * (1 - scale)
        const y = this.y * scale + canvas.height / 2 * (1 - scale)
        const r = this.radius * scale
        const opacity = 1 - this.z / 1000

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${opacity * 0.8})`
        ctx.shadowBlur = 15 * scale
        ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Sort particles by z-index for depth
      particles.sort((a, b) => b.z - a.z)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dz = particles[i].z - particles[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 150) {
            const scale1 = 1000 / (1000 + particles[i].z)
            const scale2 = 1000 / (1000 + particles[j].z)
            const x1 = particles[i].x * scale1 + canvas.width / 2 * (1 - scale1)
            const y1 = particles[i].y * scale1 + canvas.height / 2 * (1 - scale1)
            const x2 = particles[j].x * scale2 + canvas.width / 2 * (1 - scale2)
            const y2 = particles[j].y * scale2 + canvas.height / 2 * (1 - scale2)
            const opacity = (1 - distance / 150) * 0.5
            const avgHue = (particles[i].hue + particles[j].hue) / 2

            ctx.beginPath()
            ctx.strokeStyle = `hsla(${avgHue}, 70%, 50%, ${opacity})`
            ctx.lineWidth = 1.5
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="network-background"
    />
  )
}
