---
page: riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples
title: "Riesz Potentials and the Hardy–Littlewood–Sobolev Inequality: Examples"
status: published
items: []
examples: [ex-riesz-potential-scaling-determines-the-target-exponent,
           cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint,
           cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]
---

These examples test the sharpness of the strict-range theory of the companion
page, in the same unit normalization and complex-scalar conventions and with
Countable Choice declared on each item.

The dilation example shows that the exponent relation
$1/q=1/p-\alpha/n$ is forced by homogeneity alone: if a uniform bound
$\|I_\alpha f\|_q\le C\|f\|_p$ held on all complex smooth compactly supported
functions, then applying it to the dilates $f_\lambda(x)=f(\lambda x)$ of a
nonzero nonnegative bump and comparing the scalings
$\|f_\lambda\|_p=\lambda^{-n/p}\|f\|_p$ and
$\|I_\alpha f_\lambda\|_q=\lambda^{-\alpha-n/q}\|I_\alpha f\|_q$ would force
$n/p-\alpha-n/q=0$. The strict theorem is not used as a premise there.

The two counterexamples show that neither endpoint can be added to the strong
theorem. Normalized ball densities $1_{B(0,\epsilon)}/\lambda(B(0,\epsilon))$
have unit $L^1$ norm, are approximate point masses, and their potentials obey
$I_\alpha f_\epsilon(x)\ge(3/2)^{\alpha-n}|x|^{\alpha-n}$ outside
$B(0,2\epsilon)$; raising this to $q_0=n/(n-\alpha)$ produces the divergent
radial tail $|x|^{-n}$, so no strong $L^1\to L^{q_0}$ estimate holds. At the
critical exponent $p_0=n/\alpha$, the logarithmically corrected radial function
$f(y)=|y|^{-\alpha}(\log(e/|y|))^{-1}$ on $0<|y|<e^{-1}$ belongs to
$L^{p_0}$, while its potential diverges at the origin and is essentially
unbounded on every neighbourhood of it, so no raw
$L^{p_0}\to L^\infty$ bound holds. The endpoint remark on the companion page
records the weak-type and mean-oscillation substitutes without proving them.
