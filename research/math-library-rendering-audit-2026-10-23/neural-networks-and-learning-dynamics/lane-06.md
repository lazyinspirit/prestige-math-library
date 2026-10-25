# Neural Networks and Learning Dynamics rendering audit — lane 06

Reviewed all 44 assigned items and all 80 assigned screenshot tiles individually at original resolution. Each title and complete rendered ItemBody was checked against the frozen snapshot and assigned local HTML, including literal ASCII math/carets/underscores, TeX/KaTeX, TikZ, reference-title leaks, Scratch/technique presentation, and any existing diagram. Exact item and tile coverage with SHA-256 hashes is recorded in `lane-06.json`.

## Confirmed findings

None. No rendering defects were confirmed in the assigned local previews.

## Diagram candidates

1. **def-linear-state-space-model** — Definition, snapshot line 28 (editorial). Add a continuous-time state-space block diagram: input $u(t)$ branches through $B$ into $x'(t)=Ax(t)+Bu(t)$ and through direct feedthrough $D$ to output $y(t)=Cx(t)+Du(t)$; state $x(t)$ passes through $C$ to the output. Label $x(t_0)=x_0$, and distinguish the direct $Du(t)$ path from state contribution $Cx(t)$.
2. **def-scaled-dot-product-attention** — Definition, snapshot lines 29, 32, 35 (editorial). Add a query-key-value dataflow schematic showing $Q$ ($n_q\times d_k$) and $K$ ($n_k\times d_k$) forming $QK^{\mathsf T}/\sqrt{d_k}$ ($n_q\times n_k$), optional mask $M$ added before row softmax, and multiplication by $V$ ($n_k\times d_v$) yielding $n_q\times d_v$. Mark allowed pairs by $0$, disallowed pairs by $-\infty$, and require at least one allowed key per row.

## Coverage notes

- All 44 frozen snapshot hashes and local HTML hashes match the assignment.
- All 80 assigned PNG tiles were opened individually at original resolution. No standalone-image clipping was found.
- No assigned item contains authored TikZ diagrams. Existing rendered mathematical SVGs were legible and consistent with their statements.
- The uppercase technique banner is intended; its content displayed no raw-math issue. Reference-title links render as blocks by design. No Scratch sections or reference-title leaks were observed.
- Review scope was limited to local frozen artifacts; no production route claims are made.
