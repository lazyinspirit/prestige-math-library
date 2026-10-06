---
page: muckenhoupt-weights-and-weighted-estimates-examples
title: "Muckenhoupt Weights and Weighted Estimates — Examples"
status: draft
requires: [muckenhoupt-weights-and-weighted-estimates]
items: []
examples: [ex-power-weight-a-p-range, cex-power-weight-fails-at-both-a-p-endpoints, ex-a-one-power-weight-range, ex-weighted-norm-of-an-interval-indicator]
---

These examples calibrate the weighted classes of the companion page on the
power weights $w(x)=|x|^\alpha$. The first computes the full $A_p$ range
$-n<\alpha<n(p-1)$ together with the divergence of the characteristic outside
it, splitting the computation into the local singularity at the origin and the
growth at infinity; the second records the two endpoint failures, where the
weight either is not locally integrable or makes the second factor of the
$A_p$ product diverge logarithmically, so that the admissible interval is open
at both ends. The third example identifies the $A_1$ range
$-n<\alpha\le0$ and exhibits the $p\downarrow1$ limit of the $A_p$ intervals.

The last example computes the weighted norm of an interval indicator exactly,
$\|\mathbf 1_{(0,r)}\|_{L^p(w)}=(r^{\alpha+1}/(\alpha+1))^{1/p}$ on the line,
and records its divergence as $\alpha\downarrow-1$, tying the abstract
integrability thresholds to an explicit weighted integral.
