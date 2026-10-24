---
id: lem-copower-presentation-construction-is-left-adjoint-to-generator-hom
kind: lemma
title: "The copower presentation construction is left adjoint to the generator Hom functor"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
justified_by: []
aliases: []
deps: [def-small-projective-generator-and-progenerator, lem-endomorphism-ring-of-an-object-in-a-preadditive-category, lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful, def-power-and-copower-by-a-set, def-products-and-coproducts, def-abelian-category, def-kernels-and-cokernels-as-equalizers-and-coequalizers, cor-every-module-is-a-quotient-of-a-free-module, lem-canonical-free-presentation-controls-eilenberg-watts-comparison, def-adjunction-by-unit-counit-and-triangle-identities, thm-the-adjunction-hom-set-bijection-under-local-smallness, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, def-natural-transformation, def-direct-sum-of-a-family-of-modules, thm-universal-property-of-module-direct-sums, prop-modules-and-homomorphisms-form-category-rmod, thm-modules-over-a-ring-form-an-abelian-category, thm-rmod-is-complete-and-cocomplete, def-functor-and-contravariant-functor, def-category]
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12, proof of 'A is equivalent to R-Mod iff A is cocomplete with a finitely generated projective generator P, R = End(P)^op', printed pp.68-69"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "P. Etingen, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, printed p.10 (Hom_C(P,-) and the algebra End(P)^op)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a locally small cocomplete abelian category and $P$ a small projective generator of $\mathcal C$. Assume in addition that definable assignments of copowers of $P$ (including their injections) for every set, and of cokernels (including their quotient maps) for every morphism of $\mathcal C$, are supplied. Cocompleteness alone asserts their existence individually, not such simultaneous choices. Put $E=\operatorname{End}_{\mathcal C}(P)$, $A=E^{\mathrm{op}}$ (a unital ring by [[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]]), and $H=\mathcal C(P,-):\mathcal C\to A\text{-Mod}$ with the left action $(e^{\mathrm{op}}\cdot h)=h\circ e$. Then there is a functor
$$L:A\text{-Mod}\longrightarrow\mathcal C$$
and natural bijections
$$\mathcal C(L(V),Y)\;\cong\;\operatorname{Hom}_A(V,H(Y))$$
for every left $A$-module $V$ and every $Y\in\mathcal C$; equivalently $L\dashv H$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]). The construction is explicit: for the canonical presentation $A^{(J)}\xrightarrow{d}A^{(I)}\xrightarrow{q}V\to0$ of [[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]] (free cover of [[cor-every-module-is-a-quotient-of-a-free-module]], the first map not required to be monic), replace the free modules by the copowers $P^{(I)}$ and $P^{(J)}$ ([[def-power-and-copower-by-a-set]]), replace every matrix entry $e^{\mathrm{op}}$ of $d$ by $e:P\to P$, and take the cokernel; the resulting object $L(V)$ is independent of the presentation up to canonical isomorphism, and the universal property defines $L$ on morphisms and proves its identity and composition laws. No choice is used beyond the supplied copowers, cokernels, and canonical presentations.

## Facts & Assumptions

**Given:** A locally small cocomplete abelian category $\mathcal C$, a small projective generator $P$ of $\mathcal C$, the supplied definable copower and cokernel assignments of the Statement, $E=\operatorname{End}_{\mathcal C}(P)$, $A=E^{\mathrm{op}}$, and $H=\mathcal C(P,-):\mathcal C\to A\text{-Mod}$ with the left action $(e^{\mathrm{op}}\cdot h)=h\circ e$ of [[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]].

[F1] $A$ is a unital ring, $A\text{-Mod}$ is locally small and cocomplete, and $H$ is an additive functor that is exact, preserves every set-indexed coproduct, is faithful, and satisfies $H(Z)=0\Rightarrow Z=0$ ([[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]], [[prop-modules-and-homomorphisms-form-category-rmod]], [[thm-rmod-is-complete-and-cocomplete]], [[lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful]]).

[F2] For a set $I$, the copower $P^{(I)}$ of $P$ by $I$ has the universal property that maps $P^{(I)}\to Y$ correspond bijectively and naturally to functions $I\to\mathcal C(P,Y)$, i.e. to families $(h_i)_{i\in I}$ in $H(Y)$; in particular no finite-support restriction is imposed on maps out of a copower ([[def-power-and-copower-by-a-set]], [[def-products-and-coproducts]]).

[F3] By smallness, $H(P^{(I)})=\mathcal C(P,P^{(I)})\cong\bigoplus_{i\in I}\mathcal C(P,P)=\bigoplus_{i\in I}E$ naturally in $I$, and the identification $E\to A$, $e\mapsto e^{\mathrm{op}}$, is an isomorphism of left $A$-modules $H(P)\cong{}_AA$; hence $H(P^{(I)})\cong A^{(I)}$ ([[lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful]], [[def-direct-sum-of-a-family-of-modules]]).

[F4] Every left $A$-module $V$ has a canonical presentation $A^{(J)}\xrightarrow{d}A^{(I)}\xrightarrow{q}V\to0$ that is exact at $A^{(I)}$ and has $q$ surjective, the first map $d$ not being required to be monic; explicitly $I$ is the underlying set of $V$, $J$ the underlying set of $\ker q$, $q(e_v)=v$ and $d$ is a canonical surjection onto $\ker q$ followed by the inclusion ([[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]], [[cor-every-module-is-a-quotient-of-a-free-module]]).

[F5] A map $A^{(I)}\to W$ into a left $A$-module is uniquely determined by the family $(w_i)_{i\in I}\in W^I$ of its values on the standard basis, and every family arises; a cokernel of $u:X\to Y$ is a map $\operatorname{cok}u:Y\to\operatorname{coker}u$ with $(\operatorname{cok}u)\circ u=0$ through which every map annihilating $u$ factors uniquely ([[thm-universal-property-of-module-direct-sums]], [[def-kernels-and-cokernels-as-equalizers-and-coequalizers]], [[def-abelian-category]]).

[F6] Representing objects of a functor are unique up to a unique compatible isomorphism ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]), and $\mathcal C(a,b)\cong\operatorname{Nat}(\mathcal C(b,-),\mathcal C(a,-))$ directly: a transformation $\theta$ gives $t=\theta_b(1_b):a\to b$ and naturality at $h:b\to Y$ gives $\theta_Y(h)=h\circ t$; this also proves compatibility with identities and composition.

[F7] A natural family of bijections $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ determines a unique adjunction $F\dashv G$ with unit and counit satisfying the triangle identities ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]], [[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** constructive.

1.1 (Transposing the presentation.) Write the canonical presentation of [F4] as $A^{(J)}\xrightarrow{d}A^{(I)}\xrightarrow{q}V\to0$, and let $d(e_j)=\sum_i a_{ji}e_i$ be its finite-column description with $a_{ji}\in A$ for $j\in J$ and $i\in I$, only finitely many $a_{ji}$ nonzero for each $j$ by [F5]. Using the identifications $A=E^{\mathrm{op}}$ and $H(P)\cong A$ of [F3], each entry $a_{ji}=e_{ji}^{\mathrm{op}}$ corresponds to the endomorphism $e_{ji}:P\to P$, and the finite family $(e_{ji})_{i\in I}$ corresponds under [F3] to an element of $H(P^{(I)})$, i.e. to a map $\delta_j:P\to P^{(I)}$. The copower universal property [F2] turns the family $(\delta_j)_{j\in J}$ into a unique map $\tau(d):P^{(J)}\to P^{(I)}$ whose $j$-th component is $\delta_j$. Define $L(V):=\operatorname{coker}\tau(d)$, the object of $\mathcal C$ returned by the supplied cokernel assignment; the construction uses only the canonical presentation and supplied copowers and cokernels. [F1, F2, F3, F4, F5, given, construct]

2.1 (Identification of the represented functor.) Let $Y\in\mathcal C$. By [F2] a map $\varphi:P^{(I)}\to Y$ corresponds to a family $(h_i)_{i\in I}$ in $H(Y)$ with $h_i=\varphi\circ\jmath_i$, and by the component computation of step 1.1 $\varphi\circ\tau(d)\circ\jmath_j=\sum_i h_i\circ e_{ji}=\sum_i a_{ji}\cdot h_i$ for every $j$, the sum being finite. Hence the cokernel universal property [F5] gives a natural bijection
$$\mathcal C(L(V),Y)\;\cong\;\Bigl\{(h_i)\in\prod_{i\in I}H(Y):\sum_i a_{ji}\cdot h_i=0\text{ for all }j\Bigr\}.$$
On the other side, an $A$-linear map $\psi:V\to H(Y)$ gives the family $h_i:=\psi(q(e_i))$, which satisfies $\sum_i a_{ji}h_i=\psi(q(d(e_j)))=0$ for every $j$ because $q\circ d=0$, and conversely [F5] turns any family satisfying these relations into an $A$-linear $\widetilde\psi:A^{(I)}\to H(Y)$ that annihilates $\operatorname{im}d$ and hence factors uniquely as $\psi\circ q$ for an $A$-linear $\psi:V\to H(Y)$ by [F4] and the cokernel property in $A\text{-Mod}$; the two constructions are inverse. Composing the two identifications gives a bijection
$$\Phi_V:\mathcal C(L(V),Y)\;\cong\;\operatorname{Hom}_A(V,H(Y))$$
that is natural in $Y$, because postcomposition with a map $g:Y\to Y'$ acts componentwise on both families. [F2, F3, F4, F5, given, algebra]

3.1 (Independence of the presentation.) The bijection of step 2.1 exhibits $L(V)$ as a representing object of the functor $Y\mapsto\operatorname{Hom}_A(V,H(Y))$, a functor independent of the chosen presentation of $V$; by [F6] any other representing object is canonically isomorphic to $L(V)$ through a unique isomorphism compatible with the universal elements. Hence $L(V)$ is independent of the presentation up to canonical isomorphism. [F6, step 2.1, given]

4.1 (Functoriality.) For a map $u:V\to V'$ of left $A$-modules, precomposition with $u$ gives a natural transformation $G_{V'}\Rightarrow G_V$ between the functors $G_W=\operatorname{Hom}_A(W,H(-))$. Transporting it through the representations $\Phi_W$ of step 2.1 gives a natural transformation $\mathcal C(L(V'),-)\Rightarrow\mathcal C(L(V),-)$, which by the Yoneda bijection [F6] corresponds to a unique map $L(u):L(V)\to L(V')$ with $\Phi_V^{-1}(\psi\circ u)=\Phi_{V'}^{-1}(\psi)\circ L(u)$ for all $\psi$. The Yoneda correspondence is compatible with composition and identities, so $L(1_V)=1_{L(V)}$ and $L(u'\circ u)=L(u')\circ L(u)$; together with the object assignment $V\mapsto L(V)$ this is a functor $L:A\text{-Mod}\to\mathcal C$ ([[def-functor-and-contravariant-functor]], [[def-category]]). [F6, step 2.1, step 3.1, given, construct]

5.1 (The adjunction.) The bijections $\Phi_V:\mathcal C(L(V),Y)\cong\operatorname{Hom}_A(V,H(Y))$ of step 2.1 are natural in $Y$ and, by the defining property of $L(u)$ in step 4.1, natural in $V$ as well. Since both categories are locally small, [F7] turns this natural family into a unique adjunction $L\dashv H$ with unit $\eta:1_{A\text{-}\mathrm{Mod}}\Rightarrow HL$ and counit $\varepsilon:LH\Rightarrow1_{\mathcal C}$ satisfying the triangle identities. [F7, step 2.1, step 4.1, given]

6.1 Steps 1.1 and 2.1 construct $L(V)$ from a canonical presentation and prove the natural bijection $\mathcal C(L(V),Y)\cong\operatorname{Hom}_A(V,H(Y))$; step 3.1 proves the construction is independent of the presentation, step 4.1 constructs $L$ on maps with its identity and composition laws, and step 5.1 converts the natural bijections into the adjunction $L\dashv H$. The only data used are the canonical presentation determined by $V$, the supplied copowers $P^{(I)}$, $P^{(J)}$ and the supplied cokernel, so nothing is selected from a nonempty family and no choice principle is used. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-construct: the cokernel $L(V)$ and the adjunction $L\dashv H$] ∎
