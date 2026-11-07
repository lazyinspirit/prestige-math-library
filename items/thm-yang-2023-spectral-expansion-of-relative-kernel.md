---
dependency_level: 7
id: thm-yang-2023-spectral-expansion-of-relative-kernel
kind: theorem
title: "Yang Spectral Expansion of the Relative Kernel"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - def-glnplus1-gln-period-and-relative-trace-kernel
  - def-yang-regularized-relative-trace-distributions
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§6.1–6.3, 8.1, 8.4"
      url: "https://arxiv.org/pdf/2303.02225v1"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–4"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center. Level spaces use the nebentypus character $\kappa$ defined with the test class, so they mean isotypic spaces when the central character is ramified.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, $G'=\mathrm{GL}_n$, and use the period, kernel, measure, and regularization conventions already defined on this page. Fix unitary cuspidal generic representations $\pi'_1,\pi'_2$ of $G'(\mathbb A_F)$ with unitary central characters $\omega'_1,\omega'_2$, cusp forms $\phi'_i\in\pi'_i$, a finite set $S$ containing the archimedean places and the ramified places of $\pi'_1,\pi'_2$, and a proper integral ideal $\mathfrak N$ supported outside $S$. Let $\omega$ be a unitary Hecke central character for $G$ of finite conductor dividing $\mathfrak N$. Take $f\in\mathcal F_S(\mathfrak N,\omega^{-1})$, with the test class defined in the preceding distribution definition. Let $\mathcal G^{\mathrm{gen}}(\mathfrak N,\omega)$ be the generic part of the unitary automorphic spectrum occurring in $L^2([G],\omega)$ with level-$\mathfrak N$ vectors; it includes both cuspidal and proper-Levi Eisenstein/residual spectral data. Let $B_\pi$ be the finite orthonormal set of $(K_0(\mathfrak N),\kappa)$-isotypic vectors in the archimedean compact types selected by the left and right compact-type support of $f$ for the spectral parameter $\pi$, and let $d\mu_\pi$ be the corresponding automorphic Plancherel measure.

For $\operatorname{Re}(s_1),\operatorname{Re}(s_2)>1/2$, the regularized spectral side is the absolutely convergent integral

$$J^{\mathrm{Reg}}_{\mathrm{Spec}}(f,s;\phi'_1,\phi'_2)=\int_{\mathcal G^{\mathrm{gen}}(\mathfrak N,\omega)}\sum_{\phi\in B_\pi}\Psi(s_1,\pi(f)W_\phi,W'_{\phi'_1})\Psi(s_2,\widetilde W_\phi,\widetilde W'_{\phi'_2})\,d\mu_\pi,$$

where $\pi(f)$ is convolution by $f$, $W_\phi$ and $W'_{\phi'_i}$ are the Whittaker functions defined in the preceding period definition, and $\widetilde W(g)=W(w_m\,{}^tg^{-1})$ is the contragredient Whittaker function in rank $m$. The noncuspidal part has the absolutely convergent proper-Levi spectral expansion, for sufficiently large $\operatorname{Re}(s_i)$,

$$J^{\mathrm{Reg}}_{\mathrm{Eis}}(f,s)=\sum_{Q,\chi}\frac{1}{n_Q}\int_{i\mathfrak a_Q^*/i\mathfrak a_G^*}\sum_{\phi\in B_{Q,\chi}}\Psi_\lambda(s_1,I(\lambda,f)\phi,\phi'_1)\Psi_\lambda(s_2,\phi,\phi'_2)\,d\lambda,$$

where $Q$ ranges over proper standard parabolic subgroups, $\chi=\{(M_Q,\sigma)\}$ ranges over their cuspidal Levi data, $\mathfrak a_Q^*$ and $\mathfrak a_G^*$ are the real duals of the split centers of the corresponding Levi subgroups, $n_Q$ is the number of Weyl chambers in $\mathfrak a_Q$, $B_{Q,\chi}$ is the associated orthonormal basis of the induced spectral subspace, $I(\lambda,f)$ is the induced action of $f$, and $\Psi_\lambda$ is the Whittaker period of the associated Eisenstein series. Its regular, semi-singular, and singular Levi contributions continue respectively as an entire function, a holomorphic function, and a meromorphic function on $\mathbb C^2$; the singular contribution has at most simple poles on $s_1+s_2\in\{0,1\}$. Consequently $J^{\mathrm{Reg}}_{\mathrm{Spec}}$ continues meromorphically to $R=\{\operatorname{Re}(s_i)>-1/(n+1)\}$.

## Statement references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, §§6.1–6.3, 8.1, and 8.4](https://arxiv.org/pdf/2303.02225v1)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–4](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Current proof boundary

The declared Cogdell supplier is locally unproved and has only cuspidal adjacent-rank scope. The proper-Levi calculation requires all cuspidal pairs $\mathrm{GL}_n\times\mathrm{GL}_r$, $1\leq r\leq n$, and the normalizing factors $\mathrm{GL}_{r_i}\times\mathrm{GL}_{r_j}$ with $r_i+r_j\leq n+1$, including equal-rank poles, twists, nonvanishing normalizers and uniform spectral domination. Pointwise analytic continuation of a fixed pair is insufficient to justify the infinite Levi sums and contour shifts. No such full local chain is supplied here.

For general compact-type-finite $f$, the selected archimedean types need not be spherical. Finite-dimensionality/admissibility and the explicit inducing-section-to-cusp-series normalization are still analytic supplier obligations. An extension from compact-type-finite to general smooth microlocal tests remains held.
