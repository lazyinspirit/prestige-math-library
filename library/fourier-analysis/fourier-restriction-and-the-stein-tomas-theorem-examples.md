---
page: "fourier-restriction-and-the-stein-tomas-theorem-examples"
title: "Fourier Restriction and the Stein–Tomas Theorem — Examples"
status: draft
items: []
examples: ["cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise",
           "ex-knapp-cap-and-tube-volume-calculation",
           "cex-knapp-rules-out-extension-below-the-tomas-exponent",
           "cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay",
           "ex-circle-stein-tomas-exponents"]
---

These companions test the conventions, the sharpness and the boundary of the
main page. The first counterexample exhibits two representatives of one
$L^{p'}$ class, differing only on the Lebesgue-null sphere, whose pointwise
restrictions to $S^{n-1}$ differ everywhere: pointwise restriction cannot be
read off an ambient equivalence class, which is why $R_0$ starts on Schwartz
data. The Knapp example then computes the two quantities behind the
obstruction — the cap measure $\sigma(C_\delta)\asymp\delta^{n-1}$ and the
dual slab volume $\asymp\delta^{-(n+1)}$ — and shows that the cap wave packet
forces $\|E\mathbf 1_{C_\delta}\|_q\gtrsim
\delta^{n-1-(n+1)/q}$ for every $1\le q\le\infty$; comparing the powers as
$\delta\downarrow0$ gives the necessary condition $q\ge
2(n+1)/(n-1)$ and rules out every extension estimate below the Stein–Tomas
exponent.

On the flat hyperplane the localized measure transform is computed exactly:
$\check\mu(x)=\prod_{j<n}\sin(2\pi x_j)/(\pi x_j)$ is independent of the
normal coordinate and equals $2^{n-1}$ at the origin, so no decay holds along
the normal direction and no finite-$q$ extension estimate survives; the
curvature hypothesis of the main page is therefore indispensable. The final
example evaluates the endpoint formulas on the circle, where
$p_0=6/5$ and $q_0=6$, verifying conjugacy $(6/5)'=6$ and the identity
$1/p_0-1/q_0=2/3$ used in the fractional-integration step.
