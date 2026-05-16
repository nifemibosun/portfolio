export interface Project {
  id: string
  name: string
  lang: string
  description: string
  tags: string[]
  status: 'active' | 'stable' | 'in-progress'
  github?: string
}

export interface Paper {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  status: 'submitted' | 'in-progress' | 'draft'
  year: number
  link?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'gyro',
    name: 'Gyro',
    lang: 'TypeScript',
    description:
      'A VM-based programming language with ~73 opcodes and a custom bytecode format (GBC). Being redesigned as a proper intermediate representation supporting multiple backends: VM, native code generation, and WebAssembly.',
    tags: ['compiler', 'vm', 'bytecode', 'ir', 'wasm'],
    status: 'active',
  },
  {
    id: 'bytechain',
    name: 'Byte Chain',
    lang: 'TypeScript',
    description:
      'A blockchain library with full transaction signing via secp256k1 using @noble/curves. Ecosystem includes bc-web3.js (web3 interface), BC Scan (block explorer), and  (P2P encrypted messaging).',
    tags: ['blockchain', 'cryptography', 'secp256k1', 'p2p'],
    status: 'active',
  },
  {
    id: 'edt',
    name: 'edt',
    lang: 'TypeScript',
    description:
      'An HTML-like markup language that compiles to LaTeX. Full TypeScript pipeline: tokenizer → parser → emitter → CLI. Zero runtime dependencies. Used to typeset my own mathematical papers.',
    tags: ['compiler', 'latex', 'markup', 'cli', 'dsl'],
    status: 'stable',
  },
  {
    id: 'ciphercast',
    name: 'CipherCast',
    lang: 'TypeScript',
    description:
      'Peer-to-peer encrypted messaging built on top of the Byte Chain cryptographic stack. End-to-end encrypted with no central server.',
    tags: ['p2p', 'encryption', 'messaging', 'privacy'],
    status: 'in-progress',
  },
]

export const PAPERS: Paper[] = [
  {
    id: 'zeta-identity',
    title: 'On the Identity Σ(ζ(k) − 1) = 1',
    subtitle: 'k ranging from 2 to ∞',
    description:
      'An independent rediscovery and elementary proof of a classical zeta-function identity. Derived through a double-sum construction inspired by Zeno\'s paradox, then collapsed via order-of-summation interchange. Targets The American Mathematical Monthly.',
    tags: ['number theory', 'zeta function', 'series'],
    status: 'submitted',
    year: 2024,
  },
  {
    id: 'goldbach',
    title: 'Toward a Set-Theoretic Proof of the Goldbach Conjecture',
    subtitle: 'Showing P ∩ Q ≠ ∅ where Q = {2m − p : p ∈ P}',
    description:
      'A set-theoretic reformulation of Goldbach\'s conjecture. Explores the parity barrier in classical sieve methods, union-bounding strategies, connections to the Hardy–Littlewood circle method, and a generalized theorem on reflective set intersections.',
    tags: ['number theory', 'additive combinatorics', 'sieve theory'],
    status: 'in-progress',
    year: 2024,
  },
  {
    id: 'ellipse',
    title: 'Sharp Bounds on the Ellipse Perimeter Integral',
    subtitle: '2√(2πab) ≤ I ≤ π√(2(a²+b²))',
    description:
      'Derivation of tight lower and upper bounds on the complete elliptic integral arising from the arc-length formula for an ellipse. Produces closed-form inequalities with elementary proofs.',
    tags: ['real analysis', 'elliptic integrals', 'geometry'],
    status: 'draft',
    year: 2024,
  },
]
