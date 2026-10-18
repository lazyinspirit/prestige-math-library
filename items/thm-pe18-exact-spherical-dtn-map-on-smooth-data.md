---
id: thm-pe18-exact-spherical-dtn-map-on-smooth-data
kind: theorem
title: The spherical modal DtN map is well-defined and exact for smooth data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe18-exact-spherical-dtn-map, lem-pe18-spherical-harmonic-structure-and-density, lem-pe18-spherical-hankel-radial-identities, lem-pe18-spherical-hankel-modulus-and-radiation-bounds, lem-pe18-outgoing-spherical-mode-expansion]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the defining series is indexed by canonical orthogonal projections and all limits follow from summable bounds."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "NIST Digital Library of Mathematical Functions, §§10.49–10.52"
      url: "https://dlmf.nist.gov/10"
---

## Statement

For every $k,R>0$ and smooth $g$ on $\mathbb S^2$, the series in [[def-pe18-exact-spherical-dtn-map]] converges in $C^\infty(\mathbb S^2)$ to $T_{k,R}g$, and $|\tau_\ell(k,R)|\le k+(\ell+1)/R$. Its outgoing extension converges in $C^2$ on each compact annulus $R\le r\le R_1$, solves $(\Delta+k^2)v=0$, has trace $v(R,\cdot)=g$ and radial derivative $\partial_rv(R,\cdot)=T_{k,R}g$, and satisfies the uniform outgoing Sommerfeld condition as $r\to\infty$. It is the unique classical outgoing extension of $g$.

## Facts & Assumptions

**Given:** $k,R>0$, smooth $g$, and the modal definition [F1].

[F1] [[def-pe18-exact-spherical-dtn-map]]: $T_{k,R}g=\sum_\ell \tau_\ell g_\ell$ and $v=\sum_\ell h_\ell(kr)g_\ell/h_\ell(kR)$.

[F2] [[lem-pe18-spherical-harmonic-structure-and-density]]: $\|g_\ell\|_2$ decays faster than every inverse power of $1+\ell$, and $\|w_\ell\|_\infty\le\sqrt{(2\ell+1)/(4\pi)}\|w_\ell\|_2$.

[F3] [[lem-pe18-spherical-hankel-radial-identities]] and [[lem-pe18-spherical-hankel-modulus-and-radiation-bounds]]: $h_\ell(kR)\ne0$, $|h_\ell(kr)/h_\ell(kR)|\le1$ for $r\ge R$, $|h_\ell'|\le(1+(\ell+1)/z)|h_\ell|$, and $|z(h_\ell'-ih_\ell)|/|h_\ell(kR)|\le(\ell+1)e^{2kR}$ for $z\ge kR$.

[F4] [[lem-pe18-outgoing-spherical-mode-expansion]]: every classical outgoing solution has precisely the outgoing radial mode in each degree.

[F5] [[lem-pe18-spherical-harmonic-structure-and-density]]: $\Delta=\partial_{rr}+2r^{-1}\partial_r+r^{-2}\Delta_{\mathbb S^2}$, $\Delta_{\mathbb S^2}w_\ell=-\ell(\ell+1)w_\ell$, and $\|w_\ell\|_{C^p}\le C_p(1+\ell)^{p+1/2}\|w_\ell\|_2$ for every fixed $p$.

## Proof

**Given:** $k,R>0$, $g\in C^\infty(\mathbb S^2)$, and [F1]–[F5].

1.1 By [F3], $|\tau_\ell|\le k+(\ell+1)/R$. The $C^p$ estimate in [F5] and the super-polynomial decay in [F2] show that for every $p$, $\sum_\ell\|\tau_\ell g_\ell\|_{C^p}<\infty$. Thus the defining series converges in every smooth norm to a smooth function $T_{k,R}g$. [F2, F3, F5, algebra]

2.1 For $r\ge R$, the positive coefficient formula for $|h_\ell(z)|^2$ in [F3] makes $|h_\ell(kr)/h_\ell(kR)|\le1$. The derivative estimate in [F3] bounds one radial derivative of the ratio by $k+(\ell+1)/r$ times this ratio; repeated radial derivatives are bounded by polynomials in $1+\ell$ on each compact annulus by differentiating the radial ODE in [F5]. Angular derivatives likewise contribute only polynomial factors. Thus [F2] and the evaluation bound make the extension series and its derivatives through order two uniformly convergent on $R\le r\le R_1$. Termwise differentiation is valid; each summand solves the Helmholtz equation by [F5], its trace is $g_\ell$, and its radial derivative at $R$ is $\tau_\ell g_\ell$. Summing proves the trace, derivative, and PDE claims. [F1, F2, F3, F5, step 1.1, algebra]

3.1 For each fixed $\ell$, the finite formula in [F3] gives $r(\partial_r-ik)\bigl(h_\ell(kr)/h_\ell(kR)\bigr)\to0$. The last bound in [F3], multiplied by $\|g_\ell\|_\infty$, dominates the absolute value of this degree's radiation residual by $(\ell+1)e^{2kR}\sqrt{(2\ell+1)/(4\pi)}\|g_\ell\|_2$, a summable sequence by [F2]. Dominated convergence for this series proves uniform convergence of the full radiation residual to zero. [F1, F2, F3, step 2.1, algebra]

4.1 Let $w$ be any other classical outgoing extension of $g$. By [F4], its degree-$\ell$ projection is $d_\ell h_\ell^{(1)}(kr)$ for a fixed $d_\ell\in\mathcal H_\ell$. Its trace at $R$ is $g_\ell$, so $d_\ell h_\ell^{(1)}(kR)=g_\ell$. Nonvanishing in [F3] forces $d_\ell=g_\ell/h_\ell^{(1)}(kR)$, the same coefficient as the constructed extension in [F1]. Their difference has every harmonic projection zero and is continuous; density in [F2] implies the difference vanishes. This proves uniqueness and the well-definedness claimed in [F1]. [F1, F2, F3, F4, step 2.1] ∎
