# Abstract Algebra diagram supplement — lane 02

## Reviewed item

`thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules` is mathematically consistent under the source's function model and action conventions. I read the bound snapshot and viewed both listed local screenshots at original resolution. The statement and formulas render legibly; the second tile contains the proof's closing line. The capture contains no TikZ diagram.

The isomorphism has the stated direction
\[
\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)\longrightarrow
\operatorname{Hom}_H(W,\operatorname{Res}_H^G V),\qquad
\Phi\longmapsto (w\mapsto\Phi(\eta_w)),
\]
and inverse
\[
\psi\longmapsto\left(f\longmapsto\sum_{t\in T}t\cdot\psi(f(t))\right),
\]
where \(T\) is a left transversal for \(G/H\). These expressions have the stated domains and codomains. The equivariance calculation uses \(x^{-1}t=t'h\), covariance \(f(t'h)=h^{-1}f(t')\), and \(H\)-equivariance of \(\psi\) consistently. The two inverse identities follow from \(e\in T\) and the same covariance. Since \(G\) is finite, the sum is finite. No tensor balancing or double-coset indexing occurs.

The construction is natural in both variables: contravariantly in \(W\), by precomposition with \(\operatorname{Ind}(u)\) on the left and \(u\) on the right for an \(H\)-map \(u\); covariantly in \(V\), by postcomposition with a \(G\)-map on both sides. A compact pair of naturality squares could make the adjunction easier to scan, with \(\alpha\) and \(\beta\) labeled by their explicit formulas. This is an optional explanatory addition: the text already gives a self-contained construction, and the missing diagram alone is not a defect.

The machine-readable checks and screenshot paths are in [lane-02.json](lane-02.json).
