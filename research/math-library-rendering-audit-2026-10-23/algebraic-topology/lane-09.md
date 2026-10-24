# Algebraic Topology rendering audit — lane 09

Reviewed all 91 assigned items and opened every listed revision-2 screenshot at original resolution. All rendered sections represented in the frozen snapshots were checked, including the zero-stem example.

**Findings:** 6 confirmed rendering issues.

| Item | Finding |
|---|---|
| `def-abs-cokernel-and-clifford-symbol` | The screenshot renders the formula notation as ordinary ASCII text (including C_n, M^0, π^*, c(v), and C_(n+1)) rather than typeset mathematics throughout the definition. |
| `def-clifford-module-restriction-cokernel-a-n` | The screenshot shows the notation in the entire definition as plain ASCII (for example C_n, r_n, M_{n+1}, and A_n=coker(r_n)) rather than typeset mathematics. |
| `ex-the-zero-stem-is-the-integers` | The rendered verification shows the entire inline \begin{CD} diagram as literal red LaTeX on its own line instead of a commutative square. |
| `lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres` | The screenshot displays the statement’s mathematical notation as plain text (e.g. π_i(W)⊗Q, H_i(W;Q), and the range 1≤i≤2c−2), without mathematical typesetting. |
| `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1` | The screenshot renders the statement formulas as unstyled literal text, including f_r, f_{r*}, H_i, and the endpoint range, rather than typeset mathematics. |
| `thm-integral-finite-generation-of-mo-and-mso-homology` | The screenshot shows the statement’s formula-heavy notation as ordinary unformatted characters, including H_i, MO(r), MSO(r), γ_r, and O_Z(γ_r). |

Coverage and exact screenshot paths are recorded in `lane-09.json`. The screenshot inventory was checked against every assignment row; no tiles were omitted.
