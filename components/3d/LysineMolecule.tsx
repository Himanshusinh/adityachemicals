export default function LysineMolecule() {
  const atoms = [
    // Backbone
    { id: 'ca', type: 'C', x: 20, y: 0 },
    { id: 'n_alpha', type: 'N', x: 20, y: 60 },
    { id: 'cc', type: 'C', x: 80, y: -40 },
    { id: 'od', type: 'O', x: 80, y: -100 },
    { id: 'os', type: 'O', x: 140, y: -10 },

    // Side chain (Left side zig-zag)
    { id: 'cb', type: 'C', x: -40, y: 30 },
    { id: 'cg', type: 'C', x: -100, y: -20 },
    { id: 'cd', type: 'C', x: -160, y: 30 },
    { id: 'ce', type: 'C', x: -220, y: -20 },
    { id: 'nz', type: 'N', x: -280, y: 20 },

    // Hydrogens for backbone
    { id: 'hn1', type: 'H', x: 0, y: 100 },
    { id: 'hn2', type: 'H', x: 40, y: 100 },
    { id: 'ho', type: 'H', x: 180, y: 20 },
    { id: 'hca', type: 'H', x: 40, y: -20 },

    // Hydrogens for side chain (simplified for visual clarity)
    { id: 'hcb1', type: 'H', x: -40, y: 80 },
    { id: 'hcg1', type: 'H', x: -100, y: -70 },
    { id: 'hcd1', type: 'H', x: -160, y: 80 },
    { id: 'hce1', type: 'H', x: -220, y: -70 },
    { id: 'hnz1', type: 'H', x: -310, y: -10 },
    { id: 'hnz2', type: 'H', x: -300, y: 60 },
  ];

  const bonds = [
    { from: 'ca', to: 'n_alpha', type: 'single' },
    { from: 'ca', to: 'cc', type: 'single' },
    { from: 'cc', to: 'od', type: 'double' },
    { from: 'cc', to: 'os', type: 'single' },
    { from: 'ca', to: 'cb', type: 'single' },
    { from: 'cb', to: 'cg', type: 'single' },
    { from: 'cg', to: 'cd', type: 'single' },
    { from: 'cd', to: 'ce', type: 'single' },
    { from: 'ce', to: 'nz', type: 'single' },

    { from: 'n_alpha', to: 'hn1', type: 'single' },
    { from: 'n_alpha', to: 'hn2', type: 'single' },
    { from: 'os', to: 'ho', type: 'single' },
    { from: 'ca', to: 'hca', type: 'single' },
    { from: 'cb', to: 'hcb1', type: 'single' },
    { from: 'cg', to: 'hcg1', type: 'single' },
    { from: 'cd', to: 'hcd1', type: 'single' },
    { from: 'ce', to: 'hce1', type: 'single' },
    { from: 'nz', to: 'hnz1', type: 'single' },
    { from: 'nz', to: 'hnz2', type: 'single' },
  ];

  const getAtomColor = (type: string) => {
    switch (type) {
      case 'C': return 'radial-gradient(circle at 30% 30%, #4b5563, #111827)'; // dark grey/black
      case 'O': return 'radial-gradient(circle at 30% 30%, #ef4444, #991b1b)'; // red
      case 'N': return 'radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8)'; // blue
      case 'H': return 'radial-gradient(circle at 30% 30%, #ffffff, #d1d5db)'; // white/silver
      default: return '#000';
    }
  };

  const getAtomSize = (type: string) => {
    switch (type) {
      case 'C': return 44;
      case 'O': return 40;
      case 'N': return 42;
      case 'H': return 24;
      default: return 30;
    }
  };

  return (
    <div className="glycine-3d-container">
      <div className="glycine-scene" style={{ transform: 'scale(0.9)' }}>
        {bonds.map((bond, i) => {
          const a1 = atoms.find(a => a.id === bond.from)!;
          const a2 = atoms.find(a => a.id === bond.to)!;
          const dx = a2.x - a1.x;
          const dy = a2.y - a1.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          return (
            <div key={`bond-${i}`} className={`bond-3d ${bond.type === 'double' ? 'double-bond' : ''}`} style={{
              width: `${length}px`,
              transform: `translate3d(${a1.x}px, ${a1.y}px, 0) rotateZ(${angle}deg)`
            }}></div>
          );
        })}
        {atoms.map((atom, i) => {
          const size = getAtomSize(atom.type);
          return (
            <div key={`atom-${i}`} className="atom-wrapper" style={{
              transform: `translate3d(${atom.x}px, ${atom.y}px, 0)`
            }}>
              <div className="atom-sphere" style={{
                width: `${size}px`,
                height: `${size}px`,
                background: getAtomColor(atom.type),
                marginTop: `${-size / 2}px`,
                marginLeft: `${-size / 2}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: atom.type === 'H' ? '#4b5563' : '#ffffff',
                fontSize: `${size * 0.45}px`,
                fontWeight: '700',
                fontFamily: 'var(--font-heading)'
              }}>
                {atom.type}
              </div>
            </div>
          );
        })}

        {/* HCl Addition */}
        <div style={{
          position: 'absolute',
          transform: `translate3d(190px, -20px, 0)`,
          fontSize: '1.8rem',
          fontWeight: '700',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '2rem' }}>•</span> HCl
        </div>

      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '800',
        letterSpacing: '0.1em',
        color: 'var(--color-primary)'
      }}>
        L LYSINE HCL
      </div>
    </div>
  );
}
