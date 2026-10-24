# Algebraic Geometry diagram supplement — round 02, lane 02

Reviewed the sole assigned item against its bound current snapshot and all five listed local screenshot tiles at original resolution. The snapshot SHA256 matches the current source. The tiles show no existing TikZ diagram (receipt capture lane 06; `tikz_count: 0`).

## Candidate

**lem-smooth-immersion-normal-sequence-and-deformation-charts** — **warranted**, optional conormal/tangent-normal and deformation-blowup schematic (**uncertain**, editorial only; no confirmed defect). The exact statement is at lines 63–79; the proof's exact-sequence and coordinate discussion is at lines 115 and 117, and the chart and base-change discussion is at line 121. Source and tile hashes and quoted line excerpts are in `lane-02.json`.

A useful figure could connect:

- The conormal sequence \(0\to\mathcal I/\mathcal I^2\to i^*\Omega^1_{Y/k}\to\Omega^1_{X/k}\to0\), then its dual \(0\to T_X\to i^*T_Y\to N_{X/Y}\to0\), where \(N_{X/Y}=(\mathcal I/\mathcal I^2)^\vee\).
- The rank labels \(d,m,n\), with \(d=m-n\), and the étale-local chart \(\varphi:U\to\mathbb A^m\) whose coordinates are \((f_1,\ldots,f_d,u_1,\ldots,u_n)\); \(X\cap U\) is cut out by \(f_1=\cdots=f_d=0\), the inverse image of \(\mathbb A^n\subset\mathbb A^m\).
- The deformation blowup center \(X\times\{\infty\}\subset Y\times\mathbb P^1\), its local model center \((f_1,\ldots,f_d,t)\subset\mathbb A^m\times\mathbb A^1\), and the étale flat base-change map \(\psi=\varphi\times\mathrm{id}_{\mathbb P^1}\).
- If chart details are included, the \(t\)-chart coordinates \((f_1/t,\ldots,f_d/t,t,u_1,\ldots,u_n)\) and the \(f_j\)-chart coordinates \((f_j,f_l/f_j\ (l\ne j),t/f_j,u_1,\ldots,u_n)\). Each chart has dimension \(d+1+n=m+1\).

Keep the dual arrows reversed from the conormal sequence and the normal bundle equal to the dual conormal bundle. Preserve the center parameter \(t=0\) at \(\infty\), the \(d+1\) chart types, and the flat base-change direction. The local model illustrates the actual blowup; it is not globally equal to the affine-space model. I found no inconsistency in the sequences, ranks, coordinates, chart ratios, or base change. The diagram is an explanatory aid and must not carry any proof.
