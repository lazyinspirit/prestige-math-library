# Neural Networks and Learning Dynamics rendering audit — lane 02

Reviewed all 44 assigned items and all 77 local screenshot tiles individually at original resolution. Each item was reviewed from title through its full rendered ItemBody against its frozen source snapshot and local HTML, including formulas, reference-title links, Scratch/technique presentation, and any existing diagram. The assignment and local artifact hashes are recorded per item and per tile in `lane-02.json`.

## Confirmed finding

1. **def-du-overparameterized-network-architectures-and-gram-kernels** — Definition, snapshot lines 77–89. The authored residual recurrence TikZ block is rendered as a failure box containing literal TikZ source in the local HTML. Repair the diagram rendering and check the identity skip, nonlinear branch, and output labels stated at lines 77–88. The diagram is explicitly illustrative and does not enter the proof. Screenshot: `screenshots/def-du-overparameterized-network-architectures-and-gram-kernels--02.png`.

## Diagram candidate

1. **def-group-convolution** — Definition, snapshot lines 31–43 (editorial). Consider a two-row indexed dataflow schematic comparing group-to-group and image-to-group cross-correlation. Label inputs f(h), Psi(g⁻¹h), sum over h∈G, output (CΨf)(g); and f(x), Psi(g⁻¹·x), sum over x∈Z², output (EΨf)(g). Show both outputs indexed by g∈G, the left lattice action, and channel dimensions C_in/C_out. Preserve the displayed filter arguments; do not suggest commutativity, finite G, or convergence beyond the stated finite-support/absolute-convergence condition.

## Coverage notes

- All 44 source snapshot hashes and all 44 local HTML hashes match the frozen assignment. All 77 assigned PNG tiles were individually opened at original resolution; paths and SHA-256 hashes are recorded in JSON.
- The existing spectral-network-complexity recurrence diagram renders correctly and matches its schematic description.
- The uppercase technique banner is intentional. Reference-title links render as blocks by design. No standalone-image clipping issue was found.
