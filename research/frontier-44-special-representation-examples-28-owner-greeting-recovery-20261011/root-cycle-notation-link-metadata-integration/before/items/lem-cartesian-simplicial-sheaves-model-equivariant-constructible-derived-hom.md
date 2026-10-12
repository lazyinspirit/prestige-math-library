---
id: lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom
kind: lemma
title: "Cartesian simplicial sheaves model actual equivariant derived Hom"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-sheaf-hom,
       def-sheaf-on-topological-space,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-field-module-sheaves-have-injective-derived-models,
       lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "Appendix B1-B6 (simplicial description of D^b_G(X) and the Cartesian subcategory), 2.4.1-2.4.6 and 2.5.1-2.5.4 (fibered-category description and triangulated structure)"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "1.4.3 and 2.1.1-2.1.3 (ordinary t-structure input)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The definition
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]
gives a locally small triangulated category $D^b_{G,c}(X;k)$ with conservative
restriction to $X$ and the stated ordinary shift, and its morphism groups are
computed by the coinduced simplicial injectives of
[[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]. Locally
split free-action descent identifies its finite general linear Stiefel
resolution with the full bounded resolution-triple subcategory on $X_N$, and
the bounded Hom and image comparisons, the degree-zero ring comparison and
retract closure of
[[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]
hold for it. The category is idempotent complete. No derived full faithfulness
of restriction to $X$ is asserted.

## Facts & Assumptions

**Given:** The field $k$ of characteristic zero, the product
$G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ acting on the separated
finite-type complex algebraic variety $X$, the action nerve
$Z_\bullet=G^\bullet\times X$ and the category $D^b_{G,c}(X;k)$ of
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]];
the Axiom of Choice [[def-axiom-of-choice]].

[F1] The simplicial model
([[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]): the
category $\operatorname{Sh}_k(Z_\bullet)$ of simplicial sheaves is abelian with
levelwise kernels, cokernels and exactness; under AC it has explicit coinduced
injective resolutions $N_pI$, evaluation at each degree is exact with a
coinductive right adjoint, and the bounded-below injective model computes
$D^b(\operatorname{Sh}_k(Z_\bullet))$, so Hom groups are set-sized. For a
locally split Čech nerve, inverse image is an equivalence onto the full derived
subcategory with Cartesian cohomology, and composition of derived right
adjoints is computed by the total model.

[F2] The definition and its closure properties
([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]],
[[def-algebraically-constructible-complex-of-analytic-field-sheaves]],
[[lem-field-module-sheaves-have-injective-derived-models]]): $D^b_{G,c}(X;k)$
consists of the bounded complexes with Cartesian cohomology whose degree-zero
restriction has algebraically constructible cohomology; bounded algebraically
constructible complexes admit one common finite smooth algebraic frontier
stratification for cone closure inside the finite constructible setting, and
the derived category with shift $[1]$ and cone triangles is triangulated
([[def-derived-category-of-an-abelian-category]]); an object of a bounded
derived category is zero exactly when all its cohomology objects vanish.

[F3] The Stiefel resolution
([[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]):
for $N_i\ge n_i+1$, the finite frame resolutions $U_N\to B_N$, the associated
varieties $X_N=(U_N\times X)/G$ and the functor $Q_N$ identify the equivariant
Hom groups with ordinary Hom groups on $X_N$ in the range
$m\le b+r_N-a$, the functor is fully faithful on intervals of width at most
$r_N$, and its image is the full resolution-triple subcategory of
$D_c^{[b,a]}(X_N;k)$ with retract closure and extension closure under the
strict bound.

[A1] AC is used exactly through the injective replacements and finite models of
[F1] and [F2]; the telescope of step 2.3 uses exact countable coproducts in
the ambient simplicial category and is otherwise choice-free
([[def-axiom-of-choice]]).

## Proof

1.1 **The ambient category and its Hom groups.** By [F1] the category $\operatorname{Sh}_k(Z_\bullet)$ is abelian with levelwise exactness, has enough injectives under AC via the coinduced objects $N_pI$, and its bounded derived category is actual with set-sized Hom groups computed by bounded-below injective replacements. This is the ambient category of the definition, with the ordinary shift and cone triangles of [[def-derived-category-of-an-abelian-category]]. [given, F1]

1.2 **Closure under the triangulated operations.** Shifts and isomorphisms preserve Cartesian cohomology and the constructibility of the degree-zero restriction because the structure maps of a shifted or isomorphic complex are the shifts or conjugates of the original structure maps. For a cone $C(f)$ of a morphism $f:A\to B$ of $D^b_{G,c}(X;k)$, the structure maps of $C(f)$ are the cones of the levelwise structure maps, and exactness of simplicial inverse image identifies the structural comparison for $C(f)$ with the map of cones of the structural comparisons for $A$ and $B$. Those two comparisons are quasi-isomorphisms by Cartesianity, so their cone comparison is a quasi-isomorphism by the long exact cohomology sequences. Thus $C(f)$ has Cartesian cohomology. The degree-zero restriction $C(f)_0$ is the cone of $f_0$ between constructible complexes, and by the common-stratification closure of [F2] it is again constructible. Hence $D^b_{G,c}(X;k)$ is a full triangulated subcategory of the ambient bounded derived category. [F1, F2]

2.1 **Conservative restriction.** Let $A\in D^b_{G,c}(X;k)$ with $A_0\cong0$ in $D^b(\operatorname{Sh}_k(X))$. All cohomology sheaves of $A_0$ vanish, and by Cartesianity the structure morphism of $H^j(A)$ along the projection $d_0^p:Z_p\to Z_0=X$ identifies $H^j(A)_p$ with the pullback of $H^j(A_0)$ for every $p$, so every cohomology simplicial sheaf of $A$ vanishes. An object of the bounded derived category with vanishing cohomology objects is zero by [F2], so $A\cong0$. Restriction to $X$ is thus conservative. [F1, F2, step 1.2]

2.2 **The finite resolution triples.** Apply [F3] to the frame resolution of $G$: the simplicial map $p_N:G^\bullet\times P_N\to G^\bullet\times X$ is levelwise a locally trivial bundle with $r_N$-acyclic fiber, its induced pullback is compatible with the simplicial structure, and the locally split Čech descent of [F1] for the principal bundle $P_N\to X_N$ identifies the Cartesian-cohomology derived category of the nerve of $P_N$ with $D_c^b(X_N;k)$. Composing with $Q_N$ gives the identification of $D^b_{G,c}(X;k)$ with the full bounded resolution-triple subcategory of $D_c^{[b,a]}(X_N;k)$ in the stated range: an equivariant object $A$ corresponds to the triple $(Q_N(A),\ p_N^*A\cong q_N^*Q_N(A))$, and conversely a triple whose frame pullback comes from $X$ arises from an equivariant object. The bounded Hom comparison of [F3] is induced by pullback along $p_N$ and the descent equivalence, hence carries composition to composition; at $m=0$ it is a ring comparison $\operatorname{End}_G(K)\cong\operatorname{End}_{X_N}(Q_NK)$ for objects in the interval, and retract closure is inherited from [F3]. [F1, F3, step 1.2]

2.3 **Idempotent completeness.** Let $e:K\to K$ be an idempotent endomorphism of a bounded object $K\in D^b_{G,c}(X;k)$. Form the telescope in the bounded-below derived category of all simplicial sheaves: let $S=\bigoplus_{j\ge0}K$ be the countable sum with the shift map $1-\operatorname{shift}(e):S\to S$ sending the $j$-th summand to the $j$-th summand by $\mathrm{id}$ and to the $(j+1)$-st by $-e$, and let $T=\operatorname{Cone}(1-\operatorname{shift}(e))$. Countable coproducts in $\operatorname{Sh}_k(Z_\bullet)$ exist levelwise and are exact, and the cone is levelwise, so $H^j(T)=\operatorname{colim}_j\bigl(H^j(K)\xrightarrow{H^j(e)}H^j(K)\xrightarrow{H^j(e)}\cdots\bigr)=\operatorname{im}H^j(e)$: the colimit of an idempotent is its image, and because $H^j(e)$ is an idempotent endomorphism of the simplicial sheaf $H^j(K)$ its image is a direct summand. The image of an idempotent of a simplicial sheaf is again a simplicial sheaf, is bounded, is Cartesian because it is a summand of a Cartesian object, and restricts on $X$ to the image of the idempotent $H^j(e)_0$, a summand of a constructible sheaf and hence constructible of finite rank. Thus $T$ is an object of the bounded-below ambient derived category with bounded Cartesian constructible cohomology, and by truncation it defines an object of $D^b_{G,c}(X;k)$. The first-summand inclusion $i:K\to T$ satisfies $ie=i$ by the telescope relations, and the map $S\to K$ with every component $e$ annihilates $1-\operatorname{shift}(e)$, so the triangle yields $p:T\to K$ with $pi=e$. Then $ip$ is an isomorphism on cohomology, hence by [F2] an isomorphism; replacing $p$ by $p(ip)^{-1}$ gives $ip=\mathrm{id}_T$ and $pi=e$, splitting the idempotent inside $D^b_{G,c}(X;k)$. Hence the category is idempotent complete. [F1, F2, step 1.2]

3.1 **Triangulated, locally small, conservative.** Steps 1.1, 1.2 and 2.1 exhibit the ambient category and its Hom groups, the triangulated structure of $D^b_{G,c}(X;k)$, and conservativity of restriction; step 2.2 gives the finite resolution identification and the degree-zero ring and retract comparisons. No derived full faithfulness of restriction to $X$ is asserted or used. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 2.2]

4.1 **Conclusion.** Steps 1.1, 1.2, 2.1 and 2.2 give the triangulated, locally small model with conservative restriction and the finite resolution comparisons; step 2.3 gives idempotent completeness. AC is consumed exactly as recorded in [A1]. [given, A1, step 2.2, step 3.1, step 2.3] ∎

## Remarks

- The telescope argument splits idempotents inside the actual bounded
  constructible category without importing a Karoubi completion and without
  arbitrary coproducts inside the constructible subcategory: the countable sum
  is formed in the ambient simplicial derived category and the resulting
  object is shown to lie in the subcategory.

- Restriction to $X$ is conservative but is deliberately not claimed to be
  derived fully faithful; the finite Stiefel comparisons supply the quantitative
  substitute used by the later perverse and Ext arguments.
