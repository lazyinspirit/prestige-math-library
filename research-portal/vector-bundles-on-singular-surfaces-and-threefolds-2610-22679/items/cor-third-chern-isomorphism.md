---
id: cor-third-chern-isomorphism
kind: corollary
title: Third Chern isomorphism
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-third-edge-map
  - thm-smooth-point-generation
  - lem-third-chern-additive
  - prop-smooth-point-third-chern-factor
  - prop-smooth-cycle-unique-divisibility
  - prop-third-edge-isomorphism
  - math:def-axiom-of-choice
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-3cde9692a7e9-actual-total-cartan
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-perfect-field
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-third-edge-map: mathematical-premise
  thm-smooth-point-generation: mathematical-premise
  lem-third-chern-additive: mathematical-premise
  prop-smooth-point-third-chern-factor: mathematical-premise
  prop-smooth-cycle-unique-divisibility: mathematical-premise
  prop-third-edge-isomorphism: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  lem-author-3cde9692a7e9-actual-total-cartan: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 1, abstract; p. 17, Corollary 6.9 and proof
      statement: The third Chern class followed by the third edge map is
        multiplication by two on the third motivic image piece, and the third
        Chern class is an isomorphism.
      hypotheses: X is a normal affine threefold over an algebraically closed field.
      reading_limits: Read the supplied article extraction at the abstract and PDF p.
        17, Corollary 6.9 and its proof. For this repair, read the entire
        assigned generated item, its ten original direct suppliers, the added
        actual-total-Cartan supplier, the seven added Math definition
        interfaces, and the three direct consumers. The proof below is a local
        composition of those supplier contracts. The underlying Elmanto–Morrow,
        supported Riemann–Roch and Krishna proofs were not independently
        reconstructed, and KM82 was not read. No new external theorem,
        original-author defect, publication or independent acceptance is
        claimed.
dependency_level: 36
formulation_deps:
  - def-motivic-filtration
  - def-third-edge-map
  - lem-third-chern-additive
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-motivic-filtration
  - def-third-edge-map
  - thm-smooth-point-generation
  - lem-third-chern-additive
  - prop-smooth-point-third-chern-factor
  - prop-smooth-cycle-unique-divisibility
  - prop-third-edge-isomorphism
  - math:def-axiom-of-choice
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-3cde9692a7e9-actual-total-cartan
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-perfect-field
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration and support constructions. Let $k$ be an algebraically closed field, of arbitrary characteristic, and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension three. Then the composite
$$F^3_{\mathrm{mot}}K_0(X)\xrightarrow{\ c_3\ }H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\xrightarrow{\ \epsilon_3\ }F^3_{\mathrm{mot}}K_0(X)$$
is multiplication by $2$, and $c_3$ is an isomorphism of abelian groups.

Here normal means that every local ring is an integrally closed domain; affine finite type means $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$; and Krull dimension is the supremum of lengths of chains of distinct irreducible closed subsets. A perfect complex is a complex locally quasi-isomorphic to a bounded complex of finite locally free sheaves. Write $K(X)$ for the nonconnective $K$-theory spectrum of perfect complexes and $K_0(X)=\pi_0K(X)$. The group $F^3_{\mathrm{mot}}K_0(X)$ is the image of $\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$, where $F^3_{\mathrm{mot}}K(X)$ is the third stage of the motivic filtration. The group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex, and $c_3$ is the actual third Chern operation on perfect $K$-classes. The edge map $\epsilon_3$ is the inverse of the actual third-stage-to-graded isomorphism followed by the stage-to-$K_0$ map with codomain restricted to its image. The Axiom of Choice says that every family of nonempty sets has a choice function; the size bounds fix the sites and universes used by the constructions.

## Statement references

[[def-motivic-filtration]]

[[def-third-edge-map]]

## Facts & Assumptions

**Given:** The field, scheme, choice and size hypotheses in the statement.

**Goal:** Prove the displayed composite is multiplication by $2$ and that $c_3$ is an isomorphism.

[F0] Algebraically closed has the polynomial-root meaning of [[math:def-algebraically-closed-field]]. A $k$-scheme has a specified structure morphism to $\operatorname{Spec}k$, as in [[math:def-scheme-over-base]]. Affineness has the spectrum-with-structure-sheaf meaning of [[math:def-affine-scheme]]; finite type refers to that structure morphism, as in [[math:def-locally-finite-type-and-finite-type-morphism]], and the affine presentation in the Statement uses a finitely generated $k$-algebra. Normality is the local-ring condition stated there: an integrally closed domain contains every element of its fraction field satisfying a monic polynomial over it. An irreducible closed subset is nonempty and cannot be the union of two proper closed subsets; lengths count strict inclusions. Pure dimension three means that each irreducible component has dimension three, and clopen means both open and closed. Smoothness is the morphism notion of [[math:def-smooth-morphism-schemes]] applied to the structure map; a closed point has closed singleton. A perfect field means that every nonconstant irreducible polynomial is separable, as in [[math:def-perfect-field]]. Here every such polynomial has a root and is therefore linear, so the algebraically closed $k$ is perfect.

[A1] Assume Choice as in [[math:def-axiom-of-choice]]. The fixed compatible site and universe bounds include nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, the field, scheme and site data in the designated universes, and compatible enlargements for the enhanced derived categories and spectra required by the suppliers. The closure convention is [[math:def-grothendieck-universe-closure-convention]]. Existence of these universes and the required site-size bounds are separate assumptions, not consequences of Choice. These inherited assumptions are used when invoking the filtration, edge, supported operations, Cartan, generation and divisibility suppliers below; the finite generator and group calculations add no choice principle.

[F1] [[thm-smooth-point-generation]] identifies $F^3_{\mathrm{mot}}K_0(X)$ with the subgroup generated by classes of smooth closed points on the three-dimensional components, extended by zero. In the pure-dimensional case this is the subgroup generated by all smooth closed points. A point is smooth when $X\to\operatorname{Spec}k$ is smooth in a neighbourhood of it; its generator is the class of its perfect residue sheaf.

[F2] [[lem-third-chern-additive]] says that the actual $c_3$ is a group homomorphism on the third image piece. [[def-third-edge-map]] defines $\epsilon_3$ as a group homomorphism.

[F3] Apply [[prop-smooth-point-third-chern-factor]] on the pure threefold $X_3$, the union of the three-dimensional clopen components of $X$. For every smooth closed point $x\in X_3$, it identifies the positive supported residue class $u_x$ and positive motivic point class $\delta_x$ and proves $c_{3,x}(u_x)=2\delta_x$ and $\epsilon_{3,x}(\delta_x)=u_x$. Both operations commute with support-to-global maps on $X_3$. No point on a lower-dimensional component is used.

[F4] [[prop-smooth-cycle-unique-divisibility]] says that the top-dimensional smooth-point subgroup is uniquely divisible: multiplication by each positive integer is an isomorphism. [[prop-third-edge-isomorphism]] says that the specified $\epsilon_3$ is an isomorphism for the given normal affine finite-type threefold. The cited constructions use the stated choice and size conventions; [[math:def-axiom-of-choice]] states the choice assumption.

[F5] [[lem-author-80f982ded420-normal-point-strata]] gives the finite clopen dimension partition and zero extension of its perfect residue classes. Its proof step 1.1 verifies Noetherianity of $X$ and affineness and qcqs for its clopen unions and complements. Thus $X_3$ is the pure normal affine finite-type threefold used in [F3]; normality restricts to an open subscheme and each clopen affine piece is a localization of the finite-type coordinate algebra at an idempotent. Here qcqs means that every open cover has a finite subcover and intersections of affine opens are quasi-compact. [[lem-author-80f982ded420-clopen-filtered-products]] gives the actual restriction product decompositions of augmented stages and image subgroups; its proof step 2.1 also gives the corresponding actual restriction products on motivic cohomology. Under [A1], [[lem-author-3cde9692a7e9-actual-total-cartan]] supplies natural actual perfect Chern operations on Noetherian finite-dimensional schemes and their pointedness in positive degrees, so $c_3$ commutes with these clopen restrictions and sends zero to zero. For the edge, the stage-to-graded map $p_3$ and augmentation used in [[def-third-edge-map]] commute with the same restrictions. The resulting $p_3$ is a product of its component maps, and its inverse respects the product: the product is bijective, hence each factor is bijective, and the tuple of factor inverses is its inverse. Therefore the edge on $X$ preserves a zero complementary coordinate and restricts on $X_3$ to the edge there. No separately defined edge on a lower-dimensional complement is required. Thus an identity for a zero-extended top-dimensional point class can be checked on $X_3$ and its clopen complement.

## Proof

**Proof technique:** Compute on smooth-point generators and use the edge isomorphism and unique divisibility.

1.1 Use [F0] and [A1] for the field, scheme and inherited construction conventions. Set $G=F^3_{\mathrm{mot}}K_0(X)$ and $H=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. By [F1], $G$ is generated by the residue-sheaf classes of smooth closed points on the three-dimensional components, with the stated zero extensions. By [F2], $c_3:G\to H$ and $\epsilon_3:H\to G$ are homomorphisms. Let $g_x$ be one of these generators, so $x\in X_3$. On the pure threefold $X_3$, [F3] gives $u_x\mapsto2\delta_x\mapsto2u_x$ in the supported groups; the support-to-global squares give $\epsilon_3c_3(g_x|_{X_3})=2g_x|_{X_3}$. On the clopen complement $g_x$ is zero, and the natural pointed $c_3$ has zero restriction there. By the product and inverse compatibility in [F5], applying the edge on $X$ retains that zero coordinate and has the calculated value on $X_3$. The actual restriction product is injective, so $\epsilon_3c_3(g_x)=2g_x$ on $X$. This remains true if $g_x$ vanishes globally. [A1, F0, F1, F2, F3, F5, given]

2.1 Every element of $G$ is a finite integer linear combination of the generators in step 1.1. Since the composite is a homomorphism, that step gives $\epsilon_3c_3=2\operatorname{id}_G$ on all of $G$. By [F4] and [F1], multiplication by $2$ is an automorphism of $G$, and $\epsilon_3:H\to G$ is an isomorphism. Its inverse preserves addition: if $u=\epsilon_3(a)$ and $v=\epsilon_3(b)$, then $\epsilon_3^{-1}(u+v)=a+b=\epsilon_3^{-1}(u)+\epsilon_3^{-1}(v)$. Consequently $c_3=\epsilon_3^{-1}\circ(2\operatorname{id}_G)$ is a homomorphism with two-sided inverse $(2\operatorname{id}_G)^{-1}\circ\epsilon_3$. This proves both assertions. [F1, F2, F4, step 1.1, algebra] ∎
