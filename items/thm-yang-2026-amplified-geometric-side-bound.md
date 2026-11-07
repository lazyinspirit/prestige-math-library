---
dependency_level: 9
id: thm-yang-2026-amplified-geometric-side-bound
kind: theorem
title: "Yang Amplified Geometric-Side Bound"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - def-yang-2026-amplified-test-function-data
  - lem-yang-off-diagonal-amplification-support-classification
  - lem-yang-diagonal-amplification-support-classification
  - thm-yang-2026-archimedean-microlocal-test-vector-estimates
  - def-yang-regularized-relative-trace-distributions
  - thm-yang-2023-regularization-and-singularity-matching
  - thm-yang-relative-trace-formula-glnplus1-gln
  - thm-nelson-stable-orbit-volume-bound-for-glnplus1-gln
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), equation (1.11) and Theorem 9.1"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Paul D. Nelson, Spectral Aspect Subconvex Bounds for U(n+1) × U(n), Theorems 15.1–15.2 and 16.3"
      url: "https://arxiv.org/pdf/2012.02187v4"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $\Pi$ be a fixed unitary pure isobaric representation of $\mathrm{GL}_{n+1}(\mathbb A_\mathbb Q)$ with level parameter $M$ and uniform archimedean parameters satisfying $c_\infty T\leq|\lambda_j|\leq C_\infty T$, and let $\pi'$ be a fixed unitary cuspidal generic representation of $\mathrm{GL}_n(\mathbb A_\mathbb Q)$ with level parameter $M'$. Put

$$M^\dagger=\prod_{p\mid M,\ p\nmid M'}p^{v_p(M)},\qquad R=M/M^\dagger.$$

Fix an auxiliary prime $p^\circ\nmid MM'$, a real number $L\geq1$, and the prime set $\mathcal P=\{p:L<p\leq2L,\ p\nmid p^\circ MM'\}$. Choose $1\leq\ell_p\leq n+1$ and $\alpha_p\in\mathbb C$ with $|\alpha_p|\leq1$, and form the diagonal and off-diagonal test functions and the amplified test function from the preceding definition. Let $\varphi'$ be the associated cuspidal test vector and use the Petersson norm $\langle\varphi',\varphi'\rangle=\int_{Z'(\mathbb A)G'(\mathbb Q)\backslash G'(\mathbb A)}|\varphi'(g)|^2\,dg$. Define $M^\dagger$ and $R$ as displayed, so $R$ is the factor of $M$ supported on primes dividing $M'$. Define the corrected amplified geometric distribution

$$J_{\mathrm{Geo}}^\heartsuit(\alpha,\ell)=\sum_{p_1\ne p_2\in\mathcal P}\alpha_{p_1}\overline{\alpha_{p_2}}J_{\mathrm{Geo}}^{\mathrm{Reg},\heartsuit}(f^{\mathrm{off}}_{p_1,p_2},0)+\sum_{p\in\mathcal P}\sum_{i=0}^{\ell_p}c_{p,i}|\alpha_p|^2J_{\mathrm{Geo}}^{\mathrm{Reg},\heartsuit}(f^{\mathrm{diag}}_{p,i},0),$$

where $J_{\mathrm{Geo}}^{\mathrm{Reg},\heartsuit}$ is the corrected geometric distribution in the relative trace formula, and $c_\infty,C_\infty$ are the fixed archimedean comparability constants. For every $\varepsilon>0$,

$$\frac{|J_{\mathrm{Geo}}^\heartsuit(\alpha,\ell)|}{\langle\varphi',\varphi'\rangle T^{n/2}}\ll_{\varepsilon,c_\infty,C_\infty,\pi',p^\circ}(TMM')^\varepsilon\left(M^nR^nL+\frac{M^{n-1}R^{n+1}L^{n(n+1)+2}}{T^{1/2}}+\frac{R^{2n}L^{(3n-2)(n+1)+2}}{T^{1/2}}\right).$$

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, equation (1.11), Theorem 9.1 and §§7–9](https://arxiv.org/pdf/2309.07534v2)

[Paul D. Nelson, *Spectral Aspect Subconvex Bounds for U(n+1) × U(n)*, Theorems 15.1–15.2 and 16.3](https://arxiv.org/pdf/2012.02187v4)

## Proof status

Yang's bound combines the small-cell, dual, and regular-orbital contributions. The regular-orbital part uses the off-diagonal and diagonal support classifications, rational-point counting, and an archimedean stable-orbit volume estimate. The off-diagonal support classification now has a complete finite-matrix proof in the source-correct upper-column coordinates. The diagonal classification now has a complete constructive finite-matrix proof with corrected source congruences. The printed arbitrary-decomposition claim and the A.2/B.1 congruence bounds have explicit counterexamples; the global counting and volume argument must be established using the corrected conditions, so no original saving follows merely from citing the printed lemma. The full Nelson Theorem 15.1-to-15.2-to-16.3 chain is not supplied, and the corrected relative-trace-formula suppliers remain escalated. Step 1 is escalated; the exact missing stable-orbit interface is `thm-nelson-stable-orbit-volume-bound-for-glnplus1-gln`.


The invocation of the batch49 trace distributions remains conditional on extending their compact-type-finite test class to the smooth microlocal data here, with uniform convergence of every regularized spectral and geometric term. Their normalized central characters and rational central quotient must be matched before evaluating these distributions. In particular no spherical finite basis or spectral positivity for arbitrary smooth test functions is inferred from that earlier interface. The general proper-Levi continuation and uniform spectral domination needed by its full generic expansion also remain held.
