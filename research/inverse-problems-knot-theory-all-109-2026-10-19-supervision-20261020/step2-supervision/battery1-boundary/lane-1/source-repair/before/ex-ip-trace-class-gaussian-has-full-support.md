---
id: ex-ip-trace-class-gaussian-has-full-support
kind: example
title: "A trace-class Gaussian with full support and a proper Cameron–Martin space"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-forward-map-and-solution-classes
  - lem-ip-gaussian-series-prior-regularity
  - def-ip-prior-on-a-forward-domain
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - thm-every-borel-probability-on-a-polish-space-is-tight
  - lem-square-summable-sequences-form-a-hilbert-space
  - lem-ip-coordinate-vectors-form-a-basis-of-ell-two
  - def-separable-space
  - def-polish-space
  - thm-riesz-representation-for-hilbert-space
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
forward_refs: []
aliases: []
generation:
  role: example
proof_strategy: direct
axiom_use: "AC and countable choice are assumed for the Gaussian-series law, covariance/RKHS construction, tightness, and support theorem. The coordinate-basis and weighted RKHS calculations use no further choice."
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§2.4, Theorem 2.4, Remarks 2.5, and the Karhunen–Loève covariance convention."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§2.6, reproducing-kernel Hilbert spaces of Gaussian laws."
---

## Example

Assume the Axiom of Choice and countable choice. In $H=\ell^2$, define $e_j$ to be the sequence with value $1$ at coordinate $j$ and $0$ at every other coordinate. Let $\xi_j$ be independent $N(0,1)$ variables and set
$$W=\sum_{j\ge1}j^{-1}\xi_j e_j.$$
Take the parameter and data spaces both to be $H$ with their Borel sigma-algebras, the admissible truth set and forward domain to be $U=D=H$, and the forward map to be the identity. The law $\mu$ of $W$ is a centered Borel Gaussian prior on $D$. Its covariance is diagonal with positive eigenvalues $j^{-2}$, whose finite sum $\sum_{j\ge1}j^{-2}$ makes it trace class, meaning that the sum of these nonnegative eigenvalues is finite. Its covariance reproducing-kernel Hilbert space is the dense proper subspace of $H$
$$\left\{x\in\ell^2:\sum_{j\ge1}j^2x_j^2<\infty\right\},$$
which is not all of $H$. The topological support of $\mu$, defined as the set of points every open neighborhood of which has positive $\mu$-measure, is all of $H$.

## Example references

[[lem-ip-gaussian-series-prior-regularity|summable weighted Gaussian series converge in the selected Hilbert norm]]

[[def-ip-prior-on-a-forward-domain|a prior requires full measure on the forward-map domain]]

[[def-ip-forward-map-and-solution-classes|the parameter and data spaces, admissible truth set, and forward map]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the covariance quotient completion defining the covariance RKHS]]

[[thm-banach-gaussian-covariance-rkhs-is-well-defined|well-definedness of the covariance and RKHS construction]]

[[thm-bounded-linear-maps-commute-with-bochner-integration|bounded linear coordinates commute with Bochner integration]]

[[thm-riesz-representation-for-hilbert-space|under countable choice, bounded Hilbert functionals are inner products]]

[[thm-every-borel-probability-on-a-polish-space-is-tight|Borel probabilities on Polish spaces are tight under AC]]

[[lem-square-summable-sequences-form-a-hilbert-space|real square-summable sequences form a complete Hilbert space]]

[[lem-ip-coordinate-vectors-form-a-basis-of-ell-two|the coordinate vectors form a complete orthonormal basis of real ell-two]]

[[thm-support-of-banach-gaussian-is-closure-of-rkhs|the support of a centered tight Banach Gaussian is the Banach closure of its RKHS]]

[[def-axiom-of-choice|the Axiom of Choice]]

[[def-countable-choice|the Axiom of Countable Choice]]

[Dashti and Stuart, §2.4, Theorem 2.4 and covariance convention](https://arxiv.org/pdf/1302.6989)

[Giné and Nickl, §2.6, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** AC and countable choice, a probability space carrying independent $N(0,1)$ variables $(\xi_j)_{j\ge1}$, $H=\ell^2$ with standard basis $(e_j)$, and $X$ as in the Example.

[A1] AC is required by the Borel Gaussian, covariance/RKHS, tightness, and support interfaces. [[def-axiom-of-choice]]

[A2] Countable choice is required by the Gaussian-law, Hilbert Riesz, and support interfaces. [[def-countable-choice]]

[F1] For a separable Hilbert space with basis $e_j$, weights $w_j=1$, and $\lambda_j=j^{-2}$, if $\sum_j\lambda_j<\infty$ then the series converges in the Hilbert norm and its law is a centered Borel Gaussian with these covariance eigenvalues. [[lem-ip-gaussian-series-prior-regularity]]

[F2] A Borel probability on a parameter space is a prior on $D$ only when it assigns $D$ probability one. [[def-ip-prior-on-a-forward-domain]]

[F3] For a centered Borel Gaussian, the covariance is $C\ell=\mathbb E[\ell(X)X]$ and the covariance RKHS completes the quotient of $H^*$ by the nullspace of $Q(\ell,m)=\mathbb E[\ell(X)m(X)]$. [[def-banach-gaussian-covariance-operator-and-rkhs]]

[F4] Under AC, each covariance $C\ell$ exists as a Bochner integral and the completed covariance map embeds continuously and injectively into the Banach space. [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]

[F5] Under countable choice, every bounded linear functional on a Hilbert space is represented uniquely by inner product with a vector, with equal dual and vector norms. [[thm-riesz-representation-for-hilbert-space]]

[F6] Under AC, every Borel probability on a Polish space is tight. [[thm-every-borel-probability-on-a-polish-space-is-tight]]

[F7] For a centered tight Borel Gaussian on a real separable Banach space, assuming AC and countable choice, its topological support is the Banach closure of its covariance RKHS. [[thm-support-of-banach-gaussian-is-closure-of-rkhs]]

[F8] A bounded linear map commutes with the Bochner integral over every measurable set. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F9] The real square-summable sequence space with its canonical inner product is complete and hence Hilbert. [[lem-square-summable-sequences-form-a-hilbert-space]]

[F10] The coordinate vectors of real $\ell^2$ form a complete orthonormal basis and their partial sums converge in norm. [[lem-ip-coordinate-vectors-form-a-basis-of-ell-two]]

[F11] A Polish space is separable and completely metrizable. [[def-polish-space]]

## Verification

**Given:** The series, basis, probability space, and axioms in the Example.

1.1 Group the positive terms by dyadic blocks. For each $m\ge0$, there are $2^m$ integers $j$ with $2^m\le j<2^{m+1}$, and each has $j^{-2}\le2^{-2m}$. Hence $\sum_{j\ge1}j^{-2}\le\sum_{m\ge0}2^m2^{-2m}=\sum_{m\ge0}2^{-m}<\infty$. [given, algebra]

2.1 By [F10], the coordinate vectors are a complete orthonormal basis of $H$. Apply [F1] using step 1.1 under the stated AC and countable-choice assumptions [A1]–[A2]. This gives the centered Borel Gaussian law $\mu$ on $H$, with covariance operator eigenvalues $j^{-2}$. The domain is $D=H$ and the identity map is measurable, so $\mu(D)=1$ and [F2] makes $\mu$ a prior on $D$. [A1, A2, F1, F2, F10, step 1.1, given, construct]

3.1 By [F5], every $\ell\in H^*$ has the form $\ell_z(x)=\langle x,z\rangle$ for a unique $z\in\ell^2$. The covariance operator supplied by [F1] in step 2.1 is diagonal under this Riesz identification. By the covariance definition [F3] and commutation of bounded functionals with the Bochner integral [F8], $Q(\ell_z,\ell_y)=\ell_y(C\ell_z)=\sum_jj^{-2}z_jy_j$; this sum converges absolutely by Cauchy–Schwarz and $j^{-2}\le1$. The well-definedness theorem [F4] supplies $C\ell_z$ and the quotient completion. In particular, applying the coordinate functional $m_j(x)=\langle x,e_j\rangle$ commutes with the Bochner integral by [F8], so $\langle C\ell_z,e_j\rangle=m_j(C\ell_z)=Q(\ell_z,m_j)=j^{-2}z_j$. Thus the canonical covariance map sends $z$ to the vector with coordinates $x_j=j^{-2}z_j$. Its quotient norm satisfies $\|z\|_Q^2=Q(\ell_z,\ell_z)=\sum_jj^{-2}z_j^2=\sum_jj^2x_j^2$. The nullspace is zero because every $j^{-2}>0$. Finite truncations of Riesz vectors are dense in the quotient completion since their weighted-square tails tend to zero; conversely, for any $x\in\ell^2$ with $\sum_jj^2x_j^2<\infty$, the truncations of $z_j=j^2x_j$ converge in that norm and their images converge to $x$ in $\ell^2$. Therefore the covariance RKHS is exactly the displayed weighted subspace. [A1, A2, F1, F3, F4, F5, F8, step 2.1, given, algebra]

3.2 By [F9], $\ell^2$ is a complete real Hilbert space, and [F10] gives a countable complete orthonormal basis. Its finite real linear span is dense; approximating each finite list of real coefficients by rationals shows that finite rational combinations are dense as well. They form a countable set, so [F11] makes $\ell^2$ Polish. Step 2.1 gives a Borel probability $\mu$ on this space; [F6] makes $\mu$ tight under AC [A1]. [A1, A2, F6, F9, F10, F11, step 2.1, given, construct, algebra]

4.1 By [F10], finite-support sequences are dense in $\ell^2$; each lies in the RKHS identified in step 3.1, so the RKHS is dense. The vector $x=(1/j)_{j\ge1}$ belongs to $\ell^2$ by step 1.1 but not to the RKHS, since $\sum_j j^2(1/j)^2=\sum_j1=\infty$. Therefore the RKHS is proper. [F10, step 1.1, step 3.1, algebra]

5.1 The hypotheses of [F7] hold: step 2.1 gives a centered Borel Gaussian, step 3.2 gives tightness, and AC and countable choice [A1]–[A2] are assumed. By step 4.1 the covariance RKHS has closure $H$, so [F7] gives $\operatorname{supp}\mu=H$. [A1, A2, F7, step 2.1, step 3.2, step 4.1] ∎
