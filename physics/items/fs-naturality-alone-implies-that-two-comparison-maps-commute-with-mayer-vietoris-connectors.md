---
id: "fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors"
kind: "false-statement"
title: "Naturality alone gives Mayer–Vietoris connector compatibility"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors","thm-a-regular-level-set-is-an-embedded-submanifold","thm-zero-th-de-rham-cohomology-is-locally-constant-functions","thm-mayer-vietoris-sequence-in-de-rham-cohomology","def-countable-choice"]
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, Proposition 3.2, PDF p.6
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "counterexample"
---

## Statement

**False.** If degreewise comparison maps commute with all ordinary restriction maps, then naturality alone forces them to commute with Mayer–Vietoris connecting homomorphisms.

## Facts & Assumptions

[F1] The unit circle is a smooth manifold by [[thm-a-regular-level-set-is-an-embedded-submanifold]], applied to the regular level $x^2+y^2=1$. [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]] identifies degree-zero classes with locally constant real functions. Under $\mathrm{AC}_\omega$, [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]] makes the sequence for a two-open-set cover exact at $H^0_{\mathrm{dR}}(U\cap V)$; its next map is the connector $\Delta$.

[F2] [[lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors]] states connector compatibility for integration with the second-minus-first sign convention. It is choice-free when a subordinate partition is supplied, while its unsupplied-partition branch assumes [[def-countable-choice]].

## Refutation

**Given:** Assume $\mathrm{AC}_\omega$ and use the standard unit circle with the two-open-arc cover constructed in step 1.1.

1.1 On the unit circle let $U=S^1\setminus\{(1,0)\}$ and $V=S^1\setminus\{(-1,0)\}$. Each is a connected open arc, while $U\cap V$ has two connected open-arc components. By [F1], $H^0_{\mathrm{dR}}(U)\cong H^0_{\mathrm{dR}}(V)\cong\mathbb R$ and $H^0_{\mathrm{dR}}(U\cap V)\cong\mathbb R^2$. The difference of the restrictions of any two constants is diagonal, so the image of $H^0(U)\oplus H^0(V)\to H^0(U\cap V)$ is $\{(c,c):c\in\mathbb R\}$. Let $a=(0,1)$. It is not diagonal, and exactness in [F1] therefore gives $\Delta a\ne0$ in $H^1_{\mathrm{dR}}(S^1)$. Now define degreewise maps $T_X^q=(-1)^q\operatorname{id}_{H^q_{\mathrm{dR}}(X)}$ for every manifold or open submanifold $X$. For every inclusion $j:X\hookrightarrow Y$, scalar linearity gives $j^*T_Y^q=(-1)^qj^*=T_X^qj^*$. Thus $T$ commutes with every ordinary restriction map in every degree. [F1, given, construct, algebra]

2.1 For the class $a$ of step 1.1, however, $$T_{S^1}^{1}(\Delta a)=-\Delta a,\qquad \Delta(T_{U\cap V}^{0}a)=\Delta a.$$ These values are unequal because $\Delta a\ne0$ in a real vector space. Hence restriction naturality alone does not imply connector compatibility. [step 1.1]

3.1 The actual integration comparison is not the artificial family $T$: [F2] establishes its connector square, including the second-minus-first sign. That theorem is genuinely additional information beyond ordinary restriction naturality, precisely as the counterexample shows. If the overlap, class, or connector is zero, the square may commute vacuously and does not rescue the universal assertion. The counterexample uses $q=0$ and a nonempty disconnected overlap; it has no boundary endpoint or degenerate-chain issue. The displayed counterexample is conditional on the stated $\mathrm{AC}_\omega$ branch because [F1] obtains an exact Mayer–Vietoris sequence under that assumption; with a supplied partition the same finite calculation is choice-free by [F2]. [F1, F2, step 1.1, step 2.1] ∎
