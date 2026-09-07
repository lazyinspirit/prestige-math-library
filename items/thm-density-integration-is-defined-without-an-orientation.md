---
id: thm-density-integration-is-defined-without-an-orientation
title: "Orientation-free density integration and its properties"
kind: theorem
status: draft
origin: pipeline
deps: ["def-integral-of-a-compactly-supported-smooth-density", "prop-density-pullback-under-local-diffeomorphisms", "thm-oriented-chart-integrals-are-coordinate-independent", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form", "thm-multidimensional-integral-properties", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Propositions 16.41–16.42 and Exercises 16.43–16.44, pp.431–432; Nicolaescu Proposition 3.4.3"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Compactly supported smooth density integration is independent of charts and partition, linear, local, nonnegative on nonnegative densities and strictly positive for a nonzero nonnegative density. It is invariant under every diffeomorphism, without choosing an orientation. The finite-parametrization formula holds under the hypotheses of [[prop-integration-of-top-forms-by-finite-parametrizations]], with orientation preservation omitted and absolute Jacobians used.

## Facts & Assumptions

[F1] [[def-integral-of-a-compactly-supported-smooth-density]]: Assume $\mathrm{AC}_\omega$. Let $\delta$ be a compactly supported smooth density on $M^n$, with boundary allowed. Choose a chart partition $(\rho_i)$ and write $\rho_i\delta=f_i|dx_i|$. For $n\geq1$ define $$\int_M\delta=\sum_i\int_{\mathbb R^n}\widetilde f_i(x_i)\,dx_i.$$ The zero extensions are Riemann integrable, including at genuine faces, by lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. The compact-support/local-finiteness argument of lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form applies to density supports as closed sets, so the sum is finite. For $n=0$ sum the scalar density values over the finite support, without orientation signs. Empty support gives zero. Choice independence is discharged by thm-density-integration-is-defined-without-an-orientation.

[F2] [[prop-density-pullback-under-local-diffeomorphisms]]: For a local diffeomorphism $F:M^n\to N^n$, pullback of smooth densities is smooth and in coordinates satisfies $$F^*(f|dy|)=(f\circ F)|\det DF|\,|dx|.$$ It is real-linear, obeys $F^*(a\delta)=(a\circ F)F^*\delta$ for smooth functions $a$ on $N$, and $(F\circ G)^*=G^*F^*$ for composable local diffeomorphisms.

[F3] [[thm-oriented-chart-integrals-are-coordinate-independent]]: On an oriented smooth $n$-manifold, including $n=0$ and genuine boundary, a smooth top form with compact support contained in two connected charts has the same signed chart integral in both charts.

[F4] [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]: If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

[F5] [[thm-multidimensional-integral-properties]]: Let $Q=\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable $f,g:Q\to\mathbb R$ and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable and its integral is $\alpha\int_Qf+\beta\int_Qg$. If $f\le g$, then $\int_Qf\le\int_Qg$. Also $|f|$ is integrable and $|\int_Qf|\le\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate hyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on $Q$ is equivalent to integrability on both restrictions, and their integral values add to the integral over $Q$.

[F6] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 For a coordinate transition $G$, the coefficient law is $f_x=(f_y\circ G)|\det DG|$. On its local Euclidean extension neighborhoods, precisely the zero-extension change-of-variables argument used to prove chart independence of form integrals applies. The absolute determinant is already present, so no sign is inserted. This gives equality of each chart-supported density integral even at genuine faces. [F2, F3]

2.1 For two partitions $(\rho_i)$ and $(\tau_j)$ near the compact support, all relevant sums are finite. Expand each original sum using the products $\rho_i\tau_j$; each product is chart-supported and has the same integral in either chart by the previous step. Both sums equal the same double sum. Restricting the charts to an open neighborhood of the support proves locality. [F1, F4, step 1.1]

3.1 A common partition and Riemann linearity prove linearity. Nonnegative coefficients give nonnegative chart integrals. For a nonzero nonnegative density some weighted coefficient is positive at a point, hence bounded below by a positive constant on a small positive-volume rectangle inside a ball or half-ball. Its integral is positive by monotonicity and all remaining summands are nonnegative. [F5, step 2.1]

3.2 If $F:M\to N$ is a diffeomorphism, the pullback support is the compact inverse image of the target support. Pull back a target chart partition. The coordinate change equality in the first step identifies corresponding integrals, and summation proves invariance. This uses no sign assumption on $F$. [F2, step 1.1, step 2.1]

3.3 For finite parametrizations, repeat the null-boundary and compact-interior exhaustion argument in the proof of the cited parametrization result. Its boundary-image estimates are orientation-free. In a target chart a density coefficient is an ordinary smooth real function, and the substitution on each nonsingular compact interior piece uses $|\det DF_i|$; the bounded parameter coefficients and null image collars make the omitted errors tend to zero exactly as there. Thus summing gives $\int_M\delta=\sum_i\int_{D_i}F_i^*\delta$. This is an adaptation of that proof, not an application of an oriented-manifold conclusion to a nonorientable manifold. [F2, F6, step 2.1]

4.1 In dimension zero all assertions except the positive-dimensional parametrization statement follow from a finite unsigned sum of scalar coefficients. Empty support and the zero density have value zero; a singleton has its scalar value. This completes the stated cases. [F1, step 3.1, step 3.2] ∎
