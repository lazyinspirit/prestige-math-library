---
id: thm-general-stokes-theorem
title: "The general Stokes theorem"
kind: theorem
status: draft
origin: pipeline
deps: ["lem-half-space-stokes-for-a-compactly-supported-form", "lem-partition-localization-of-stokes", "thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "prop-integration-over-an-oriented-embedded-submanifold", "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold"]
landmark: true
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
    - title: "Lee Theorem 16.11, pp.411–414; Merry Theorem 26.16"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation,
$$\int_M d\eta=\int_{\partial M}j^*\eta.$$
An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

## Facts & Assumptions

[F1] [[lem-half-space-stokes-for-a-compactly-supported-form]]: Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then $$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$ With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

[F2] [[lem-partition-localization-of-stokes]]: Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, $\eta\in\Omega_c^{n-1}(M)$, and $(\rho_i)$ a smooth chart partition. Then $$\eta=\sum_i\rho_i\eta,\qquad d\eta=\sum_i d(\rho_i\eta),\qquad \sum_i d\rho_i\wedge\eta=0,$$ with only finitely many nonzero form summands. Boundary restrictions have the corresponding finite localization and compact support, so these identities can be integrated termwise.

[F3] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]: Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

[F4] [[prop-integration-over-an-oriented-embedded-submanifold]]: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

[F5] [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]: If $M$ has dimension $n\ge1$, the restrictions of boundary charts to their faces give $\partial M$ the structure of a closed embedded smooth boundaryless $(n-1)$-manifold. For $n=0$, $\partial M=\varnothing$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Choose a chart partition and write the finite localization $\eta=\sum_i\eta_i$ with $\eta_i=\rho_i\eta$. Its derivative localizes by the partition cancellation lemma. The boundary is closed, so the restriction support lies in the compact set $\operatorname{supp}\eta\cap\partial M$; both integrals are defined. [F2, F4, F5]

1.2 For a boundary-chart term, extend the coordinate primitive by zero across artificial edges within $H^n$. It remains smooth there, has compact support, and exterior differentiation commutes with its chart pullback by the local calculus used in the localization lemma. Apply half-space Stokes. Multiplication by the ambient chart sign multiplies the induced boundary sign by the same number: the transition preserves the outward side, and outward-first compares the two determinant rays. The signed change-of-variables formula therefore turns the local equality into $\int_Md\eta_i=\int_{\partial M}j^*\eta_i$. [F1, F2, F3]

2.1 For an interior-chart term the Euclidean calculation in the half-space lemma’s dependency gives zero integral and zero boundary restriction. Equivalently translate its compact Euclidean support into the interior of $H^n$ and use the half-space identity with zero face value. Sum all finitely many equalities and use the localization identities to obtain Stokes. Empty support and empty boundary are included. For $n=1$ the local formula is the negative point value, transported with its chart sign; hence the boundary integral is exactly the specified signed sum. [F1, F2, F3, step 1.1, step 1.2] ∎
