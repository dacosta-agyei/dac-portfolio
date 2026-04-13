import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const profileData = await readFile(join(process.cwd(), 'public', 'profile.png'))
  const profileSrc = `data:image/png;base64,${profileData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #020817 0%, #0F172A 50%, #1E1B4B 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow orb */}
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          top: -200, left: -200,
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          bottom: -100, right: -100,
        }} />

        {/* Profile photo */}
        <img
          src={profileSrc}
          width={120}
          height={120}
          style={{
            borderRadius: '50%',
            border: '3px solid rgba(59,130,246,0.5)',
            marginBottom: 20,
          }}
        />

        {/* Available badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)',
          borderRadius: 20, padding: '6px 16px', marginBottom: 20,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
          <span style={{ color: '#10B981', fontSize: 18, fontWeight: 600 }}>Available for Remote Work</span>
        </div>

        {/* Name */}
        <div style={{
          fontSize: 72, fontWeight: 900, letterSpacing: -2,
          background: 'linear-gradient(135deg, #F1F5F9 30%, #93C5FD 70%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          DaCosta Agyei
        </div>

        {/* Title */}
        <div style={{
          fontSize: 28, fontWeight: 600, marginTop: 8,
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          AI Engineer  ·  Full-Stack Developer
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          {['Machine Learning', 'React', 'Flutter', 'FastAPI', 'PyTorch'].map(t => (
            <div key={t} style={{
              background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: 8, padding: '4px 14px',
              color: '#93C5FD', fontSize: 18,
            }}>{t}</div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          position: 'absolute', bottom: 32,
          color: '#475569', fontSize: 18,
        }}>
          dacostaagyei.com
        </div>
      </div>
    ),
    { ...size }
  )
}
