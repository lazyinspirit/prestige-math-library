---
id: def-equivariant-constructible-derived-category-for-complex-algebraic-varieties
kind: definition
title: "Equivariant constructible derived category of complex varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice,
       def-classical-algebraic-prevariety-regular-maps-and-varieties,
       def-derived-category-of-an-abelian-category,
       def-invertible-matrix-and-general-linear-group,
       def-module-on-ringed-space, def-sheaf-on-topological-space,
       lem-field-module-sheaves-have-injective-derived-models,
       lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent,
       def-algebraic-group-action-and-scheme-theoretic-stabilizer,
       def-simplicial-object-and-simplicial-commutative-ring]
justified_by: [lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "2.1.1-2.1.7 (resolutions and the categories D^b(X,P)), 2.2.1-2.2.5 (the limit definition of D^b_G(X) and the free-quotient equivalence), 2.8 (constructible objects), Appendix B1-B4 (simplicial sheaves on [G\\X]_bullet, the Cartesian subcategory Sh_eq, and the equivalence with D^b_G(X))"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "1.4.3 and 2.1.1-2.1.3 (the ordinary t-structure and shift conventions used for the bounded derived category)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field of
characteristic zero, let $X$ be a separated finite-type complex algebraic
variety ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]),
regarded with its analytic topology as in
[[def-algebraically-constructible-complex-of-analytic-field-sheaves]], and let
$G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ be a finite product of complex
general linear groups ([[def-invertible-matrix-and-general-linear-group]])
acting algebraically on $X$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). Equip the
finite product $G$ with its usual topology and the product $G^p\times X$ with
the product topology.

**The action nerve.** For $p\ge0$ put $Z_p=G^p\times X$, where $G^0$ is a
one-point space, so that $Z_0=X$, and let
$d_i:Z_p\to Z_{p-1}$ for $p\ge1$ $(0\le i\le p)$ and $s_i:Z_p\to Z_{p+1}$ for $p\ge0$
$(0\le i\le p)$ be the face and degeneracy maps of the nerve of the
translation groupoid $G\times X\rightrightarrows X$: writing
$(g_1,\ldots,g_p,x)\in Z_p$,
$$d_0(g_1,\ldots,g_p,x)=(g_2,\ldots,g_p,x),\qquad d_p(g_1,\ldots,g_p,x)=(g_1,\ldots,g_{p-1},g_px),$$
$$d_i(g_1,\ldots,g_p,x)=(g_1,\ldots,g_{i-1},g_ig_{i+1},g_{i+2},\ldots,g_p,x)\quad(0<i<p),$$
$$s_i(g_1,\ldots,g_p,x)=(g_1,\ldots,g_i,e,g_{i+1},\ldots,g_p,x).$$
These are continuous and satisfy the simplicial identities, so $Z_\bullet$ is a
simplicial space in the sense of
[[def-simplicial-object-and-simplicial-commutative-ring]]; equivalently, a
simplicial operator $\alpha:[p]\to[m]$ acts by a continuous map
$Z_\alpha:Z_m\to Z_p$. In general this action nerve has no augmentation to
$X$: already the two faces $G\times X\rightrightarrows X$ are projection and
action and need not agree. For a free action with principal quotient
$P\to P/G$, its action nerve is instead augmented over $P/G$, as in
[[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]].

**Simplicial sheaves.** A simplicial sheaf of $k$-vector spaces on
$Z_\bullet$ is a family $F=(F_p)_{p\ge0}$ in which $F_p$ is a sheaf of
$k$-vector spaces on $Z_p$ ([[def-sheaf-on-topological-space]],
[[def-module-on-ringed-space]]) together with structure morphisms
$Z_\alpha^{-1}F_p\to F_m$ for every monotone $\alpha:[p]\to[m]$, subject to
the identity and composition identities; a morphism $F\to G$ is a levelwise
family of $k$-linear sheaf maps commuting with the structure morphisms.
Kernels and cokernels are formed levelwise (cokernels after sheafification of
the presheaf cokernel) and exactness is checked levelwise, so the category
$\operatorname{Sh}_k(Z_\bullet)$ of simplicial sheaves is abelian; under AC it
carries explicit coinduced injective resolutions and a bounded derived
category, with the conventions recorded in
[[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]], whose
bounded-below injective model uses
[[lem-field-module-sheaves-have-injective-derived-models]]. Write
$D^b(\operatorname{Sh}_k(Z_\bullet))$ for that bounded derived category
([[def-derived-category-of-an-abelian-category]]), with its ordinary shift
$[1]$ and cone triangles.

**Cartesian cohomology.** A complex $A$ of simplicial sheaves has **Cartesian
cohomology** if for every monotone $\alpha:[p]\to[m]$ the structure morphism
$Z_\alpha^{-1}H^j(A_p)\to H^j(A_m)$ is an isomorphism for every $j$; this is
the condition that all structure morphisms of the simplicial sheaf $H^j(A)$
are isomorphisms, in the notation of
[[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]].

**Definition.** The **equivariant constructible derived category**
$D^b_{G,c}(X;k)$ is the full subcategory of
$D^b(\operatorname{Sh}_k(Z_\bullet))$ consisting of the complexes $A$
satisfying:

1. $A$ is bounded: the single complex $A$ has only finitely many nonzero
   cohomology simplicial sheaves $H^j(A)$, i.e. there are integers $a\le b$
   with $H^j(A)=0$ for $j<a$ and $j>b$. This is uniform cohomological
   boundedness in the simplicial sheaf category; it is not a degreewise bound
   on the components $A_p$;
2. $A$ has Cartesian cohomology; and
3. the restriction $A_0$ of $A$ to the degree-zero space $Z_0=X$ has
   cohomology sheaves that are algebraically constructible with
   finite-dimensional stalks
   ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]).

**Ext and restriction.** Morphisms in $D^b_{G,c}(X;k)$ are morphisms in the
ambient category $D^b(\operatorname{Sh}_k(Z_\bullet))$; they are not morphisms
in the derived category of naive $G$-equivariant sheaves. Set
$\operatorname{Ext}_G^m(A,B)=\operatorname{Hom}(A,B[m])$ with the ordinary
cochain shift. Evaluation at $p=0$ is exact because kernels, cokernels and
cohomology of complexes of simplicial sheaves are formed levelwise, so it
induces the **forgetful functor** (restriction to $X$)
$D^b_{G,c}(X;k)\to D^b(\operatorname{Sh}_k(X))$, $A\mapsto A_0$; its target is
the bounded constructible category $D_c^b(X;k)$ of
[[def-algebraically-constructible-complex-of-analytic-field-sheaves]].

**Well-formedness.** This definition fixes only the ambient category, the
object class and the conventions; the statements that make it usable — that
$D^b_{G,c}(X;k)$ is a locally small triangulated category, that restriction to
$X$ is conservative, that coinduced simplicial injectives compute its derived
morphism groups, and that the finite general linear Stiefel resolutions realize
it inside the bounded resolution triples on $X_N$ — are the content of
[[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]],
which is recorded in `justified_by` rather than in `deps` because that lemma
depends on this definition. AC is inherited from the two construction
suppliers named above and is used there for injective replacements; no further
choice principle is introduced here, and the shift convention is the ordinary
one of [[def-derived-category-of-an-abelian-category]].
