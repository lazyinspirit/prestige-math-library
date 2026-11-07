---
dependency_level: 9
id: thm-yang-2026-amplified-spectral-lower-bound
kind: theorem
title: "Yang Amplified Spectral Lower Bound"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - thm-yang-2026-archimedean-microlocal-test-vector-estimates
  - thm-yang-2026-ramified-local-period-estimates
  - thm-yang-zero-avoidance-for-rankin-selberg-shifts
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
  - thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation
  - thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs
  - thm-yang-relative-trace-formula-glnplus1-gln
  - def-pure-isobaric-automorphic-sum
  - def-adjoint-l-function-for-gln
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unramified-satake-parameter-for-gln
  - def-yang-2026-amplified-test-function-data
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Theorem 5.1 and Proposition 5.5"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–4"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0 and 8–9"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $\Pi=\pi_1\boxplus\cdots\boxplus\pi_m$ be unitary pure isobaric on $\mathrm{GL}_{n+1}(\mathbb A_\mathbb Q)$ with uniform archimedean parameter growth $c_\infty T\leq|\lambda_j|\leq C_\infty T$, and let $\pi'$ be a fixed unitary cuspidal generic representation of $\mathrm{GL}_n(\mathbb A_\mathbb Q)$. For $m=1$ set $\mu=0$. For $m\geq2$, put $c_j=2^{-j}$ for $j<m$, $c_m=-\sum_{j<m}c_j$, and let $\mu=it_\mu c$ be the zero-avoidance deformation provided by the preceding zero-avoidance theorem; set $\Pi_\mu=\boxplus_j\pi_j|\det|^{\mu_j}$. Use the amplified data $\mathcal P$, $\ell_p$, $\alpha_p$, $f^{\mathrm{off}}_{p_1,p_2}$, and $f^{\mathrm{diag}}_{p,i}$ defined previously, and let $c_{p,i}$ be the coefficients in the displayed Hecke relation there. Define

$$J_{\mathrm{Spec}}^\heartsuit(\alpha,\ell)=\sum_{p_1\ne p_2\in\mathcal P}\alpha_{p_1}\overline{\alpha_{p_2}}J_{\mathrm{Spec}}^{\mathrm{Reg},\heartsuit}(f^{\mathrm{off}}_{p_1,p_2},0)+\sum_{p\in\mathcal P}\sum_{i=0}^{\ell_p}c_{p,i}|\alpha_p|^2J_{\mathrm{Spec}}^{\mathrm{Reg},\heartsuit}(f^{\mathrm{diag}}_{p,i},0).$$

If $|L(1/2,\Pi\times\pi')|\geq2$, then, with the zero-avoidance parameter $\mu$ from the preceding definition (and $\mu=0$ for $m=1$),

$$J_{\mathrm{Spec}}^\heartsuit(\alpha,\ell)\gg_{\varepsilon,c_\infty,C_\infty,\pi'_\infty}T^{-n^2/2-\varepsilon}|L(1/2,\Pi\times\pi')|^2\left|\sum_{p\in\mathcal P}\alpha_p\lambda_{\Pi_\mu}(p^{\ell_p})\right|^2\prod_{j=1}^m L(1,\pi_j,\operatorname{Ad})^{-1}.$$

Here, at an unramified prime $p$, $\lambda_{\Pi_\mu}(p^j)$ is the coefficient of $X^j$ in $\prod_{a=1}^{n+1}(1-\alpha_{a,p}(\Pi_\mu)X)^{-1}$, where $\alpha_{a,p}(\Pi_\mu)$ are its Satake parameters; $L(1,\pi_j,\operatorname{Ad})$ is the adjoint value. The constant in $\gg$ depends on $\varepsilon,c_\infty,C_\infty,\pi'_\infty$.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Theorem 5.1 and Proposition 5.5, §§5.4–5.5](https://arxiv.org/pdf/2309.07534v2)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–4](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0 and 8–9](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Proof status

The source proves this by expanding the full generic spectrum, retaining a nonnegative cuspidal datum, applying the archimedean and ramified local period estimates, and handling noncuspidal isobaric data by a zero-avoidance deformation. The actual local suppliers are escalated. In addition, the spectral expansion needs global Rankin–Selberg continuation and factorization for pairs of constituent ranks $(a,n)$ with $1\leq a\leq n-2$; the existing Cogdell adjacent-rank and same-rank statements do not supply those cases. Step 1 is escalated with exact unresolved supplier ID `thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs`.


The invocation of the batch49 trace distributions remains conditional on extending their compact-type-finite test class to the smooth microlocal data here, with uniform convergence of every regularized spectral and geometric term. Their normalized central characters and rational central quotient must be matched before evaluating these distributions. In particular no spherical finite basis or spectral positivity for arbitrary smooth test functions is inferred from that earlier interface. The general proper-Levi continuation and uniform spectral domination needed by its full generic expansion also remain held.

The local Rankin–Selberg factors use opposite Whittaker characters, the conjugated involution and the central quotient convolution of the corrected test data. For constituent ranks $r_j$, the deformation has central norm exponent $\sum_jr_j\mu_j$; the condition $\sum_j\mu_j=0$ alone does not make that exponent zero. Passing to the split-center-normalized batch49 spectrum therefore requires an explicit common norm twist and the corresponding $L$-argument transport. That transport is not proved here, and no change of the full source lower-bound claim is inferred.
