---
id: thm-mod-two-reduction-of-chern-classes
kind: theorem
title: Mod-two reduction of Chern classes
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-complex-splitting-principle-with-integral-injective-pullback", "thm-naturality-normalization-and-whitney-sum-for-chern-classes", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "prop-first-stiefel-whitney-class-classifies-orientability", "lem-complex-orientation-of-underlying-real-bundles", "def-chern-classes-from-the-projective-bundle-relation", "def-axiom-of-choice", "thm-naturality-of-stiefel-whitney-classes", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "def-complex-flag-bundle-and-chern-roots", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "prop-singular-cohomology-is-contravariantly-functorial", "def-singular-cup-product-on-cochains", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles"]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle over a
path-connected paracompact Hausdorff CW complex and let $\rho_2$ denote reduction
of coefficients modulo two. Then
$$w_{2i+1}(E_{\mathbb R})=0,\qquad w_{2i}(E_{\mathbb R})=\rho_2c_i(E) \qquad(i\geq0),$$
where $w$ denotes the total Stiefel-Whitney class of the underlying real
bundle.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the splitting and characteristic-class suppliers ([[def-axiom-of-choice]]).

[F1] For positive rank on the stated CW base, the flag projection splits $q^*E=L_1\oplus\cdots\oplus L_n$ into lines and $q^*$ is injective on cohomology with every field $\mathbb F_p$ coefficient, in particular mod two ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F2] On path-connected CW bases total Chern classes are natural and multiplicative over Whitney sums, with $c(L)=1+c_1(L)$ on a line ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F3] For an integrally oriented rank-$k$ bundle, reduction of the Euler class equals the top Stiefel-Whitney class, $w_k=\rho_2e$; with the canonical $\mathbb F_2$-orientation one has $w_k=e_2$ ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] Total Stiefel-Whitney classes are multiplicative over Whitney sums: $w(E\oplus F)=w(E)w(F)$ ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]). They are natural under pullback ([[thm-naturality-of-stiefel-whitney-classes]]) and have $w_0=1$ and no terms above the real rank ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F5] The first Stiefel-Whitney class classifies orientability: an orientable real bundle has $w_1=0$ ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F6] The underlying real bundle of a complex line carries the complex orientation, and for a complex line $c_1(L)=e(L_{\mathbb R})$ ([[lem-complex-orientation-of-underlying-real-bundles]], [[def-chern-classes-from-the-projective-bundle-relation]]).

[F7] The flag construction gives a paracompact Hausdorff CGWH space of CW homotopy type ([[def-complex-flag-bundle-and-chern-roots]]). A homotopy equivalence induces an isomorphism on cohomology ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F8] Coefficient reduction commutes with pullback ([[prop-singular-cohomology-is-contravariantly-functorial]]). The simplex formula for cup products is multiplication of front-face and back-face values ([[def-singular-cup-product-on-cochains]]). Underlying real bundles commute with pullback and sums by their transition matrices ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable complex rank-$n$ bundle $E\to B$ over a path-connected paracompact Hausdorff CW complex.

1.1 For a complex line $L$ on a path-connected CW base: the underlying real bundle $L_{\mathbb R}$ is oriented by the complex orientation, so $w_1(L_{\mathbb R})=0$ by [F5]; and by [F3] applied to the rank-two oriented bundle $L_{\mathbb R}$ together with [F6], $w_2(L_{\mathbb R})=\rho_2e(L_{\mathbb R})=\rho_2c_1(L)$. Hence $w(L_{\mathbb R})=1+\rho_2c_1(L)$. [F3, F4, F5, F6]

1.2 If $n=0$, then $E_{\mathbb R}$ is the zero bundle and both total classes are $1$, so the theorem holds directly. Assume henceforth that $n\geq1$. Pulling back to the flag bundle gives $q^*E=L_1\oplus\cdots\oplus L_n$ with all lines complex, by [F1]. By [F7] choose a CW model $h:W\to\operatorname{Fl}(E)$ that is a homotopy equivalence, and put $r=qh$ and $M_i=h^*L_i$. The flag space is path connected: each projective stage has path-connected fiber and local path lifting, so a base path followed by a path in its endpoint fiber joins any two points. Thus $W$ is path connected. By [F8], $r^*E\cong\bigoplus_i M_i$, and $r^*=h^*q^*$ is injective over $\mathbb F_2$ by [F1] and [F7]. Both bases for Chern multiplicativity and line normalization are now actual CW complexes. [F1, F2, F7, F8]

2.1 On $W$, multiplicativity [F4] and step 1.1 give $w((r^*E)_{\mathbb R})=\prod_i(1+\rho_2c_1(M_i))=\rho_2\prod_i(1+c_1(M_i))=\rho_2r^*c(E)=r^*\rho_2c(E)$. Here reduction preserves products since the formula of [F8] gives $\rho_2(uv)=\rho_2(u)\rho_2(v)$ on every simplex; it preserves the unit as well. Pullback compatibility is [F8], and the Chern identities on the actual CW base are [F2]. [F2, F4, F8, step 1.1, step 1.2]

3.1 By [F8], $(r^*E)_{\mathbb R}\cong r^*(E_{\mathbb R})$, so Stiefel–Whitney naturality [F4] identifies the left side of step 2.1 with $r^*w(E_{\mathbb R})$. Comparing degrees gives $r^*w_{2i}(E_{\mathbb R})=r^*\rho_2c_i(E)$ and $r^*w_{2i+1}(E_{\mathbb R})=0$, because each $c_i$ has degree $2i$. [F2, F4, F8, step 2.1]

4.1 Injectivity of $r^*$ over $\mathbb F_2$ from step 1.2 gives $w_{2i+1}(E_{\mathbb R})=0$ and $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$. [step 1.2, step 3.1]

5.1 Boundary cases. For $n=0$ both sides are $1$; for $n=1$ the assertion is step 1.1 specialized to the bundle itself. The empty base is excluded by the path-connected hypothesis, the coefficient field $\mathbb F_2$ is nonzero, and degrees $i$ above the rank give $c_i=0$ on the right and $w_{2i}=0$ on the left because $2i>2n$ exceeds the real rank. AC is used only through [A1] in the splitting and characteristic-class suppliers. [A1, F1, F2, F4, step 1.1, step 4.1] ∎

## Source notes

The identities $w_{2i}=\rho_2c_i$ and $w_{2i+1}=0$ are the classical mod-two comparison of Milnor-Stasheff section 14: after splitting, each complex line contributes a factor $1+\rho_2c_1$ with no odd Stiefel-Whitney class, and the product descends by mod-two injectivity of the flag pullback.
