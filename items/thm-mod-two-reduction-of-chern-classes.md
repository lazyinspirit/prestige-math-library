---
id: thm-mod-two-reduction-of-chern-classes
kind: theorem
title: Mod-two reduction of Chern classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-mod-two-euler-class-is-the-top-stiefel-whitney-class, thm-whitney-sum-formula-for-stiefel-whitney-classes, prop-first-stiefel-whitney-class-classifies-orientability, lem-complex-orientation-of-underlying-real-bundles, def-chern-classes-from-the-projective-bundle-relation, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle and Stiefel-Whitney suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes, section 14"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Complex bundles and Stiefel-Whitney classes, printed pp.171-175"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle over a
path-connected CW complex and let $\rho_2$ denote reduction
of coefficients modulo two. Then
$$w_{2i+1}(E_{\mathbb R})=0,\qquad w_{2i}(E_{\mathbb R})=\rho_2c_i(E) \qquad(i\geq0),$$
where $w$ denotes the total Stiefel-Whitney class of the underlying real
bundle.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the splitting and characteristic-class suppliers ([[def-axiom-of-choice]]).

[F1] The flag projection splits $q^*E=L_1\oplus\cdots\oplus L_n$ into lines and $q^*$ is injective on cohomology with every field $\mathbb F_p$ coefficient, in particular mod two ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F2] Total Chern classes are natural and multiplicative over Whitney sums, with $c(L)=1+c_1(L)$ on a line ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F3] For an integrally oriented rank-$k$ bundle, reduction of the Euler class equals the top Stiefel-Whitney class, $w_k=\rho_2e$; with the canonical $\mathbb F_2$-orientation the same identity holds ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] Total Stiefel-Whitney classes are multiplicative over Whitney sums: $w(E\oplus F)=w(E)w(F)$ ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F5] The first Stiefel-Whitney class classifies orientability: an orientable real bundle has $w_1=0$ ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F6] The underlying real bundle of a complex line carries the complex orientation, and for a complex line $c_1(L)=e(L_{\mathbb R})$ ([[lem-complex-orientation-of-underlying-real-bundles]], [[def-chern-classes-from-the-projective-bundle-relation]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable complex rank-$n$ bundle $E\to B$ over a path-connected CW complex.

1.1 For a complex line $L$: the underlying real bundle $L_{\mathbb R}$ is oriented by the complex orientation, so $w_1(L_{\mathbb R})=0$ by [F5]; and by [F3] applied to the rank-two oriented bundle $L_{\mathbb R}$ together with [F6], $w_2(L_{\mathbb R})=\rho_2e(L_{\mathbb R})=\rho_2c_1(L)$. Hence $w(L_{\mathbb R})=1+\rho_2c_1(L)$. [F3, F5, F6]

1.2 If $n=0$, then $E_{\mathbb R}$ is the zero bundle and both total classes are $1$, so the theorem holds directly. Assume henceforth that $n\geq1$. Pulling back to the flag bundle gives $q^*E=L_1\oplus\cdots\oplus L_n$ with all lines complex, by [F1]. [F1]

2.1 Multiplicativity [F4] and step 1.1 give $w((q^*E)_{\mathbb R})=\prod_i(1+\rho_2c_1(L_i))=\rho_2\prod_i(1+c_1(L_i))=\rho_2q^*c(E)=q^*\rho_2c(E)$, where the last two equalities use multiplicativity and naturality of the Chern class [F2]. [F2, F4, step 1.1, step 1.2]

3.1 Comparing homogeneous components in step 2.1, $q^*w_{2i}(E_{\mathbb R})=q^*\rho_2c_i(E)$ and $q^*w_{2i+1}(E_{\mathbb R})=0$. [step 2.1]

4.1 Injectivity of $q^*$ over $\mathbb F_2$ from [F1] gives $w_{2i+1}(E_{\mathbb R})=0$ and $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$, which is the assertion. [F1, step 3.1]

5.1 Boundary cases. For $n=0$ both sides are $1$; for $n=1$ the assertion is step 1.1 specialized to the bundle itself. The empty base is excluded by the path-connected hypothesis, the coefficient field $\mathbb F_2$ is nonzero, and degrees $i$ above the rank give $c_i=0$ on the right and $w_{2i}=0$ on the left because $2i>2n$ exceeds the real rank. AC is used only through [A1] in the splitting and characteristic-class suppliers. [A1, F1, step 1.1, step 4.1] ∎

## Source notes

The identities $w_{2i}=\rho_2c_i$ and $w_{2i+1}=0$ are the classical mod-two comparison of Milnor-Stasheff section 14: after splitting, each complex line contributes a factor $1+\rho_2c_1$ with no odd Stiefel-Whitney class, and the product descends by mod-two injectivity of the flag pullback.
