export default function MethionineMolecule() {
  const atoms = [
    // Backbone (Right side)
    { id: 'ca', type: 'C', x: 40, y: 0 },
    { id: 'n', type: 'N', x: 40, y: -60 },
    { id: 'cc', type: 'C', x: 100, y: 30 },
    { id: 'od', type: 'O', x: 100, y: 90 },
    { id: 'os', type: 'O', x: 160, y: -10 },
    // Side chain (Left side zig-zag)
    { id: 'cb', type: 'C', x: -20, y: 40 },
    { id: 'cg', type: 'C', x: -90, y: 0 },
    { id: 'sd', type: 'S', x: -160, y: 50 },
    { id: 'ce', type: 'C', x: -230, y: 0 },

    // Hydrogens for backbone
    { id: 'hn1', type: 'H', x: 10, y: -90 },
    { id: 'hn2', type: 'H', x: 70, y: -90 },
    { id: 'ho', type: 'H', x: 200, y: 20 },
    { id: 'hca', type: 'H', x: 20, y: 30 },
    
    // Hydrogens for side chain (simplified for visual clarity)
    { id: 'hcb1', type: 'H', x: -20, y: 90 },
    { id: 'hcg1', type: 'H', x: -90, y: -50 },
    { id: 'hce1', type: 'H', x: -230, y: -50 },
    { id: 'hce2', type: 'H', x: -280, y: -10 },
    { id: 'hce3', type: 'H', x: -250, y: 40 },
  ];

  const bonds = [
    { from: 'ca', to: 'n', type: 'single' },
    { from: 'ca', to: 'cc', type: 'single' },
    { from: 'cc', to: 'od', type: 'double' },
    { from: 'cc', to: 'os', type: 'single' },
    { from: 'ca', to: 'cb', type: 'single' },
    { from: 'cb', to: 'cg', type: 'single' },
    { from: 'cg', to: 'sd', type: 'single' },
    { from: 'sd', to: 'ce', type: 'single' },
    
    { from: 'n', to: 'hn1', type: 'single' },
    { from: 'n', to: 'hn2', type: 'single' },
    { from: 'os', to: 'ho', type: 'single' },
    { from: 'ca', to: 'hca', type: 'single' },
    { from: 'cb', to: 'hcb1', type: 'single' },
    { from: 'cg', to: 'hcg1', type: 'single' },
    { from: 'ce', to: 'hce1', type: 'single' },
    { from: 'ce', to: 'hce2', type: 'single' },
    { from: 'ce', to: 'hce3', type: 'single' },
  ];

  const getAtomColor = (type: string) => {
    switch (type) {
      case 'C': return 'radial-gradient(circle at 30% 30%, #4b5563, #111827)'; // dark grey/black
      case 'O': return 'radial-gradient(circle at 30% 30%, #ef4444, #991b1b)'; // red
      case 'N': return 'radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8)'; // blue
      case 'S': return 'radial-gradient(circle at 30% 30%, #facc15, #a16207)'; // yellow
      case 'H': return 'radial-gradient(circle at 30% 30%, #ffffff, #d1d5db)'; // white/silver
      default: return '#000';
    }
  };

  const getAtomSize = (type: string) => {
    switch (type) {
      case 'C': return 44;
      case 'O': return 40;
      case 'N': return 42;
      case 'S': return 50; // Sulfur is larger
      case 'H': return 24;
      default: return 30;
    }
  };

  return (
    <div className="glycine-3d-container">
      <div className="glycine-scene">
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
                color: atom.type === 'H' ? '#4b5563' : (atom.type === 'S' ? '#111827' : '#ffffff'),
                fontSize: `${size * 0.45}px`,
                fontWeight: '700',
                fontFamily: 'var(--font-heading)'
              }}>
                {atom.type}
              </div>
            </div>
          );
        })}
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
        DL METHIONINE
      </div>
    </div>
  );
}
