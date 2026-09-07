---
id: lem-half-space-stokes-for-a-compactly-supported-form
title: "Compact-support Stokes on the upper half-space"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-euclidean-stokes-for-a-compactly-supported-form", "def-induced-boundary-orientation", "def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold", "prop-integration-over-an-oriented-embedded-submanifold"]
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
    - title: "Lee Theorem 16.11 proof, pp.412–413"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then
$$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$
With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

## Facts & Assumptions

[F1] [[lem-euclidean-stokes-for-a-compactly-supported-form]]: For $n\geq1$ and $\eta\in\Omega_c^{n-1}(\mathbb R^n)$, with the standard orientation, $\int_{\mathbb R^n}d\eta=0$.

[F2] [[def-induced-boundary-orientation]]: For an oriented manifold with boundary, orient $T_p\partial M$ by the **outward-normal-first** rule: an outward vector first, followed by a positive boundary determinant, is a positive determinant of $T_pM$.

[F3] [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]: Assume $\mathrm{AC}_\omega$. For an oriented smooth manifold $M^n$, possibly with boundary, and $\omega\in\Omega_c^n(M)$, choose a smooth partition $(\rho_i)$ subordinate to connected interior or boundary charts $(U_i,\phi_i)$. For $n\geq1$ set $$\int_M\omega=\sum_i I_{\phi_i}(\rho_i\omega).$$ Each product has compact support in its chart and only finitely many are nonzero, by lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form. For $n=0$ set $$\int_M\omega=\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p).$$ A zero-manifold is discrete; the singleton open cover of a compact subset has a finite subcover. Thus this sum too is finite. Empty support or empty $M$ gives zero. Independence of the choices is discharged by thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement.

[F4] [[prop-integration-over-an-oriented-embedded-submanifold]]: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Choose a rectangle $[-R,R]^{n-1}\times[0,R]$ with the support away from all artificial faces. Use the omitted-coordinate expansion and the repeated-integral/FTC calculation in the Euclidean lemma’s proof on this half-rectangle. Its derivative coefficients are continuous up to the face. For $i<n$ both coordinate endpoint values vanish. For $i=n$ the endpoint difference is $-a_n(x^{\prime},0)$. With the derivative sign $(-1)^{n-1}$, the integral is $(-1)^n\int a_n(x^{\prime},0)\,dx^{\prime}$. [F1, F3]

2.1 Pullback to the face kills every term containing $dx^n$, leaving $a_n(x^{\prime},0)\,dx^1\wedge\cdots\wedge dx^{n-1}$. The outward vector is $-e_n$, and $(-e_n,e_1,\ldots,e_{n-1})$ has determinant $(-1)^n$ in the ambient standard frame. Thus the face coordinate sign is $(-1)^n$, exactly the sign found above. [F2, F4, step 1.1]

3.1 For $n=1$, the outward vector at zero is $-e_1$, so the induced determinant-line point sign is $-1$ and the boundary integral is $-a_1(0)$. This is the same FTC endpoint difference. If the form is zero or its support misses the face, both expressions are zero. [F2, F3, step 2.1] ∎
