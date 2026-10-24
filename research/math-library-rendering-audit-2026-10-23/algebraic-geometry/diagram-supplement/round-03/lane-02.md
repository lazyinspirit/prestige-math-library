# Algebraic Geometry diagram supplement — round 03, lane 02

Reviewed the sole assigned item against its bound current snapshot and all three listed local screenshot tiles at original resolution. The snapshot SHA256 matches the current item source. The screenshots show no existing TikZ diagram (primary capture lane 05; receipt `tikz_count: 0`).

## Candidate

**lem-arith-dilatations-and-defect-of-smoothness** — **warranted**, optional dilatation chart and universal-property schematic (**uncertain**, editorial only; no confirmed defect). The statement is at lines 41–44; the chart construction and universal lift are at line 63; unramified flat base change, products, and the closed-immersion caveat are checked at line 65.

The figure could show the affine chart
\[
\operatorname{Spec} A[I/\pi]=\operatorname{Spec}\bigl(A[t_j]/(\pi t_j-g_j)\bigr)\quad\text{modulo }\pi\text{-power torsion}
\]
over \(X\), and the universal lift \(B\to D_Y(X)\to X\) of a flat \(R\)-scheme \(B\to X\) whose special-fibre map factors through \(Y\). In local algebra, mark \(g_j=\pi h_j\) in \(B\) and \(t_j\mapsto h_j\). The flatness of \(B\) makes multiplication by \(\pi\) injective, giving the uniqueness of each \(h_j\) and of the lift.

A second panel could show unramified flat DVR base change \(R\to R'\), with \(\pi\) remaining a uniformizer up to a unit, and the induced isomorphism between the base-changed dilatation and the dilatation of the base change. A product panel may label the product center by the sum of the two extended ideals. For flat closed immersion \(X_1\hookrightarrow X\), show only the induced closed immersion of dilatations. The source expressly cautions that this does **not** assert an arbitrary closed-base-change square is cartesian.

Checks for any drawing: keep the \(\pi\)-power torsion quotient in the chart algebra; require flatness of the test scheme and factorization of its special fibre through \(Y\); direct the lift from \(B\) to the dilatation over \(X\); restrict the base-change isomorphism to unramified flat DVR extensions; use the sum ideal for products; and do not mark the arbitrary closed-base-change square cartesian. No inconsistency was found, and no proof should depend on the diagram. Exact source lines, hashes, and tile evidence are in `lane-02.json`.
