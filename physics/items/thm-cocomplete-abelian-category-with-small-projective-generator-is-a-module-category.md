---
id: thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category
kind: theorem
title: "Module reconstruction from a small projective generator with supplied copowers and cokernels"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
deps: [lem-copower-presentation-construction-is-left-adjoint-to-generator-hom, lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful, def-small-projective-generator-and-progenerator, thm-an-abelian-category-is-balanced, def-adjunction-by-unit-counit-and-triangle-identities, def-equivalence-and-adjoint-equivalence-of-categories, thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels, def-module-homomorphism-kernel-image-and-cokernel, def-abelian-category, lem-endomorphism-ring-of-an-object-in-a-preadditive-category, lem-canonical-free-presentation-controls-eilenberg-watts-comparison]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12, Theorem and proof (A is cocomplete with a finitely generated projective generator iff A is equivalent to R-Mod)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "P. Etingen, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, printed p.10 (finite-dimensional special case of the reconstruction)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a locally small cocomplete abelian category and let $P$ be a small projective generator of $\mathcal C$. Assume in addition that definable assignments of copowers of $P$ (including their injections) for every set, and of cokernels (including their quotient maps) for every morphism of $\mathcal C$, are supplied. Cocompleteness alone asserts their existence individually, not such simultaneous choices. Put $E=\operatorname{End}_{\mathcal C}(P)$ and $A=E^{\mathrm{op}}$, and let $H=\mathcal C(P,-):\mathcal C\to A\text{-Mod}$ and $L:A\text{-Mod}\to\mathcal C$ be the functors of [[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]], so that $L\dashv H$. Then the unit $\eta:1_{A\text{-}\mathrm{Mod}}\Rightarrow HL$ and the counit $\varepsilon:LH\Rightarrow1_{\mathcal C}$ of this adjunction are natural isomorphisms. Consequently $H$ is an equivalence of categories with quasi-inverse $L$, and $\mathcal C$ is equivalent to the module category $A\text{-Mod}$ ([[def-equivalence-and-adjoint-equivalence-of-categories]]). No commutativity of rings is assumed and no choice is used.

## Facts & Assumptions

**Given:** A locally small cocomplete abelian category $\mathcal C$, a small projective generator $P$ of $\mathcal C$, the supplied definable copower and cokernel assignments of the Statement, $E=\operatorname{End}_{\mathcal C}(P)$, $A=E^{\mathrm{op}}$, $H=\mathcal C(P,-)$, and the functor $L:A\text{-Mod}\to\mathcal C$ of [[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]] with its natural bijections and the adjunction $L\dashv H$ with unit $\eta$ and counit $\varepsilon$.

[F1] $H$ is additive, exact, preserves every set-indexed coproduct, is faithful and satisfies $H(Z)=0\Rightarrow Z=0$ ([[lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful]], [[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]], [[def-small-projective-generator-and-progenerator]]).

[F2] $L(V)$ is constructed as the cokernel of the transposed canonical presentation of $V$, so that $L$ is left adjoint to $H$ with unit $\eta:1_{A\text{-}\mathrm{Mod}}\Rightarrow HL$ and counit $\varepsilon:LH\Rightarrow1_{\mathcal C}$ satisfying the triangle identities ([[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]], [[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F3] $H(P)\cong{}_AA$ and $H(P^{(I)})\cong A^{(I)}$ for every set $I$, and the adjunction bijection $\mathcal C(L(V),Y)\cong\operatorname{Hom}_A(V,H(Y))$ identifies the unit at $V$ with the transpose of $1_{L(V)}$ ([[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]]).

[F4] A left $A$-module $V$ has a canonical presentation $A^{(J)}\xrightarrow{d}A^{(I)}\xrightarrow{q}V\to0$ with $V\cong\operatorname{coker}d$; a functor preserving cokernels carries it to $\operatorname{coker}H(\tau)$ for the transposed map $\tau$, and the transposition is the identity on the matrix entries under $H(P^{(I)})\cong A^{(I)}$ ([[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]], [[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]]).

[F5] An additive functor is exact exactly when it preserves kernels and cokernels ([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]], [[def-abelian-category]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[F6] An adjoint equivalence is an adjunction whose unit and counit are natural isomorphisms ([[def-equivalence-and-adjoint-equivalence-of-categories]], [[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F7] In an abelian category a monic and epic morphism is an isomorphism ([[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 (The unit at free modules.) For every set $I$, the copower universal property gives $\mathcal C(P^{(I)},Y)\cong\operatorname{Hom}_A(A^{(I)},H(Y))$. Explicitly a map $t:P^{(I)}\to Y$ corresponds to the map sending the basis vector $e_i$ to $t\jmath_i$. This is the representation used to define $L$ in [F2], so uniqueness of representing objects identifies $L(A^{(I)})$ with $P^{(I)}$ compatibly with that bijection. The transpose of its identity is therefore $e_i\mapsto\jmath_i$ in $H(P^{(I)})$, the canonical isomorphism $A^{(I)}\to H(P^{(I)})$ of [F3]. Hence $\eta_{A^{(I)}}$ is an isomorphism, including $I=\varnothing$. [F2, F3, given, algebra]

2.1 (The unit is an isomorphism at every module.) Let $V$ be a left $A$-module with canonical presentation $A^{(J)}\xrightarrow{d}A^{(I)}\xrightarrow{q}V\to0$ of [F4], so $V\cong\operatorname{coker}d$ and, by construction of $L$, the object $L(V)$ is the cokernel of the transposed map $\tau=\tau(d)$. Since $H$ preserves cokernels by [F1] and [F5], $H(L(V))\cong\operatorname{coker}H(\tau)$, and by [F4] the map $H(\tau)$ corresponds to $d$ under the free identifications $H(P^{(I)})\cong A^{(I)}$, $H(P^{(J)})\cong A^{(J)}$; hence $H(L(V))\cong\operatorname{coker}d\cong V$. The unit $\eta_V$ is natural and its component at $A^{(I)}$ is an isomorphism by step 1.1; the cokernel descriptions identify $\eta_V$ with the identity of $\operatorname{coker}d$ up to these isomorphisms, so $\eta_V$ is an isomorphism for every $V$. [F1, F2, F3, F4, F5, step 1.1, given, algebra]

3.1 (The counit is an isomorphism.) Let $X\in\mathcal C$. The triangle identity gives $H(\varepsilon_X)\circ\eta_{H(X)}=1_{H(X)}$ by [F2]; since $\eta_{H(X)}$ is an isomorphism by step 2.1, $H(\varepsilon_X)$ is an isomorphism. Exactness of $H$ [F1] gives $H(\ker\varepsilon_X)\cong\ker H(\varepsilon_X)=0$ and $H(\operatorname{coker}\varepsilon_X)\cong\operatorname{coker}H(\varepsilon_X)=0$; by the zero-detection property of [F1], $\ker\varepsilon_X=0$ and $\operatorname{coker}\varepsilon_X=0$, so $\varepsilon_X$ is monic and epic and therefore an isomorphism by [F7]. [F1, F2, F5, F7, step 2.1, given]

4.1 (The equivalence.) Steps 2.1 and 3.1 show that the unit and counit of the adjunction $L\dashv H$ of [F2] are natural isomorphisms, so $L$ and $H$ form an adjoint equivalence and in particular an equivalence of categories by [F6]; hence $\mathcal C$ is equivalent to the module category $A\text{-Mod}$ through $H=\mathcal C(P,-)$ with quasi-inverse $L$. No commutativity of rings is assumed, all objects used are the given $P$, its copowers and the supplied cokernels, and no choice principle is used. [F2, F6, step 2.1, step 3.1] ∎
