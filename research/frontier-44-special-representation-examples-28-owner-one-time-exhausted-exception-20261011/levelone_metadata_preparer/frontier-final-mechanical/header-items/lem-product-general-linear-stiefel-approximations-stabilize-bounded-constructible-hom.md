---
id: lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
kind: lemma
title: "General linear Stiefel approximations stabilize bounded constructible Hom"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-canonical-t-structure-on-a-derived-category,
       def-classical-algebraic-prevariety-regular-maps-and-varieties,
       def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-free-group-action, def-invertible-matrix-and-general-linear-group,
       def-inverse-image-presheaf-and-sheaf, def-locally-trivial-fiber-bundle,
       def-principal-g-bundle-and-associated-fiber-bundle,
       def-sheaf-on-topological-space, def-sheaf-tensor-product,
       def-smooth-partition-of-unity-subordinate-to-an-open-cover,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       def-algebraic-group-action-and-scheme-theoretic-stabilizer,
       lem-complex-algebraic-stratifications-have-finite-conical-cochain-models,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap,
       lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent,
       lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-cohomological-serre-spectral-sequence,
       thm-gram-schmidt-orthonormalisation,
       thm-numerable-fiber-bundles-are-hurewicz-fibrations,
       thm-the-derived-category-inherits-a-triangulated-structure]
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
      locator: "3.1 (Stiefel resolutions of a linear group), 2.2.1-2.2.5 (limits over resolutions and the free-quotient equivalence), 2.7.1-2.7.2 (finite approximations), 2.4.1-2.4.6 (fibered-category description)"
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, cited sections read in the extracted text"
      url: "https://www.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.2 pp. 375-378 (Theorem 4.41: numerable bundles over paracompact bases are fibrations)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ be a finite product of complex
general linear groups with $n_i\ge1$
([[def-invertible-matrix-and-general-linear-group]]), acting algebraically on a
separated finite-type complex algebraic variety $X$
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]],
[[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). For integers
$N_i\ge n_i+1$ put
$$U_N=\prod_i\operatorname{Inj}(\mathbb C^{n_i},\mathbb C^{N_i}),\qquad B_N=\prod_i\operatorname{Gr}(n_i,N_i),\qquad X_N=(U_N\times X)/G,$$
where $G$ acts on $U_N$ by precomposition of frames and on $U_N\times X$
diagonally, and set $r_N=2\min_i(N_i-n_i)$. Let
$p_N:G^\bullet\times P_N\to G^\bullet\times X$, with
$P_N=U_N\times X$ and $p_N=(\mathrm{id},\operatorname{pr}_X)$, be the
simplicial map of the two action nerves
([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]),
and let $Q_N:D^b_{G,c}(X;k)\to D_c^b(X_N;k)$ be the composite of $p_N^*$ with
the locally split Čech descent equivalence for the principal bundle
$P_N\to X_N$
([[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]).
Then, for bounded algebraically constructible $A,B$ in $D^b_{G,c}(X;k)$:

1. **Hom comparison.** If $A\in D_c^{\le a}$ and $B\in D_c^{\ge b}$, then
   pullback induces an isomorphism
   $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$
   whenever $m\le b+r_N-a$;
2. **full faithfulness.** On an ordinary cohomological interval
   $D_c^{[b,a]}$ of width $a-b\le r_N$, the functor $Q_N$ is fully faithful;
3. **image.** On such an interval the image of $Q_N$ consists exactly of the
   objects $H$ whose principal-bundle pullback $q_N^*H$ lies in the image of
   $\operatorname{pr}_X^*:D_c^{[b,a]}(X;k)\to D_c^{[b,a]}(P_N;k)$, i.e. of
   the resolution triples whose frame-bundle pullback comes from $X$; the
   image is closed under retracts, and under extensions when
   $r_N\ge a-b+1$;
4. **coherence.** For two resolutions $N,M$, use the common product resolution
   $U_N\times U_M$ and its associated quotient
   $X_{N,M}=(U_N\times U_M\times X)/G$ with projections
   $\pi_N:X_{N,M}\to X_N$ and $\pi_M:X_{N,M}\to X_M$.
   The pullbacks $\pi_N^*Q_N(A)$ and $\pi_M^*Q_M(A)$ are canonically
   identified on intervals of width at most $\min(r_N,r_M)$, and their
   Hom comparisons commute with natural transformations and satisfy the
   cocycle identity after pullback to a triple product resolution.
   No identification of $U_N\times U_M$ with $U_{N+M}$ or direct
   isomorphism of functors with different target categories is asserted;
5. **trivial group.** If $G$ is trivial then $U_N$, $B_N$ and $X_N$ are $X$
   or a point, $r_N=\infty$, and $Q_N$ is the identity of $D_c^b(X;k)$.

No global tensor splitting
$Ra_{N*}a_N^*B\simeq B\otimes_kR\Gamma(U_N;k)$ is asserted for the
frame-bundle projection $a_N:P_N\to B_N$; the comparison is used only on the
nerve and through the finite local models.

## Facts & Assumptions

**Given:** The group $G$, the variety $X$, the integers $N_i\ge n_i+1$, the
spaces $U_N,B_N,P_N,X_N$, the action nerve of the definition, the simplicial
map $p_N$, and the functor $Q_N$ of the Statement; the Axiom of Choice
[[def-axiom-of-choice]]; the bounded derived category conventions of
[[def-derived-category-of-an-abelian-category]] and
[[def-derived-hom-in-the-bounded-setting]].

[F1] Stiefel frame space
([[def-stiefel-space-grassmannian-and-tautological-bundle]],
[[thm-gram-schmidt-orthonormalisation]]): $U_N$ is the open full-rank locus in
$\prod_i\mathbb C^{N_i\times n_i}$; the graph charts of nonvanishing pivot
minors give algebraic sections of $U_N\to B_N$, exhibiting it as a locally
trivial principal $G$-bundle with algebraic transition maps; the $G$-action on
$U_N$ is free ([[def-free-group-action]]), and $X_N=(U_N\times X)/G$ is the
associated fiber bundle of [[def-principal-g-bundle-and-associated-fiber-bundle]]
with local charts $V\times X$ over $B_N$.

[F2] Fiber gap
([[lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap]]): each
factor and the product carry the finite models whose cohomology satisfies
$H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, and the frame
space is homotopy equivalent to the product of Stiefel manifolds.

[F3] The acyclic-fiber lemma
([[lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences]]):
for a locally trivial bundle in the finite constructible local-product setting
with $r$-acyclic fiber, the cone of the unit of the adjunction lies in
$D^{\ge b+r+1}$ on $D_c^{\ge b}$, the induced pullback map on Hom groups is an
isomorphism in the stated range, the functor is fully faithful on intervals of
width at most $r$, and the image is characterized by the truncated counit and
closed under retracts, with extension closure for width strictly below $r$.

[F4] The finite constructible local-product setting
([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]],
[[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]):
bounded algebraically constructible complexes on separated finite-type complex
varieties have bounded finite cochain models with coefficient-extension
compatibility, and the local product comparison identifies the pushforward of
a pullback along a product projection with the tensor product with the finite
fiber model.

[F5] Locally split descent
([[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]): for a
strict augmented simplicial space the abelian category of simplicial sheaves
has explicit coinduced injective resolutions and a bounded derived category;
if the augmentation admits local sections, inverse image is an equivalence
onto the full derived subcategory with Cartesian cohomology, and for algebraic
principal bundles it restricts to the algebraically constructible
subcategories. Evaluation at each simplicial degree is exact, its right
adjoint is coinduction, and composition of derived right adjoints is computed
by the total model.

[F6] The definition of the equivariant category
([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]):
$D^b_{G,c}(X;k)$ is the full subcategory of the bounded derived category of
simplicial sheaves on $G^\bullet\times X$ with Cartesian cohomology and
constructible degree-zero restriction, with the ordinary shift; restriction to
$X$ is conservative and the Hom groups are set-sized.

[F7] The canonical t-structure
([[def-canonical-t-structure-on-a-derived-category]],
[[thm-the-derived-category-inherits-a-triangulated-structure]]): the bounded
derived category of an abelian category is triangulated and carries the
canonical t-structure with $\operatorname{Hom}(D^{\le m},D^{\ge m+1})=0$; the
aisles are defined by the vanishing of cohomology objects.

[A1] AC is used exactly through the injective replacements, the finite models
and the Serre-spectral-sequence supplier recorded in [F2], [F4] and [F5]; the
frame charts, the descent geometry and the image argument below are otherwise
choice-free ([[def-axiom-of-choice]]).

## Proof

1.1 **The frame bundle and its nerve.** By [F1] the map $U_N\to B_N$ is a locally trivial principal $G$-bundle with algebraic graph-chart sections, the action on $U_N$ is free, and $X_N=(U_N\times X)/G$ is the associated bundle with local charts $V\times X$; the quotient map $q_N:P_N=U_N\times X\to X_N$ is the associated bundle projection. The nerve $G^\bullet\times P_N$ is the Čech nerve of $q_N$, so [F5] applies to it. The simplicial map $p_N:G^\bullet\times P_N\to G^\bullet\times X$ is $(\mathrm{id},\operatorname{pr}_X)$ in every degree; in degree $m$ it is the projection $G^m\times U_N\times X\to G^m\times X$, a trivial fiber bundle with fiber $U_N$ and constructible product charts $V\times U_N$; this is the action nerve and ambient simplicial category of [F6]. [given, F1, F5, F6]

2.1 **The fiber is $r_N$-acyclic with finite models.** By [F2], $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, and the product of Stiefel models supplies the bounded finite cochain model of the fiber with coefficient-field compatibility. By [F4] the base $G^m\times X$ carries the finite conical cochain models, so each levelwise projection of step 1.1 is a locally trivial bundle in the finite constructible local-product setting with $r_N$-acyclic fiber. [F2, F4, step 1.1]

3.1 **The levelwise cone bound.** Fix $m$ and put $p_{N,m}=p_N$ in degree $m$. For $B_m\in D_c^{\ge b}(G^m\times X;k)$ the cone of the unit $B_m\to Rp_{N,m*}p_{N,m}^*B_m$ lies in $D^{\ge b+r_N+1}$ by [F3] applied in the setting of step 2.1. Because $Rp_{N,m*}$ is computed levelwise and cohomological bounds of complexes of simplicial sheaves are decided levelwise, the cone of the unit $B\to Rp_{N*}p_N^*B$ in the simplicial derived category lies in $D^{\ge b+r_N+1}$ as well. [F3, F5, step 2.1]

4.1 **The simplicial Hom comparison.** The simplicial category has the exact levelwise inverse image $p_N^*$ left adjoint to the levelwise direct image $Rp_{N*}$ and carries the canonical t-structure of [F7], whose aisles are defined cohomology-objectwise and hence are the levelwise aisles. With the cone bound of step 3.1 in place, the argument of [F3] — its Hom comparison, image criterion, full faithfulness and its retract and extension clauses — applies verbatim inside the simplicial bounded derived category: for $A\in D^{\le a}$ and $B\in D^{\ge b}$ the long exact Hom sequence of the unit triangle and the orthogonality $\operatorname{Hom}(D^{\le a},D^{\ge a+1})=0$ identify the pullback map $\operatorname{Hom}(A,B[m'])\to\operatorname{Hom}(p_N^*A,p_N^*B[m'])$ as an isomorphism for $m'\le b+r_N-a$; for $a-b\le r_N$ it is fully faithful on the full subcategory $D^{[b,a]}$; and on that interval an object lies in the image exactly when the truncated counit $p_N^*\tau^{\le a}Rp_{N*}C\to C$ is an isomorphism, the image being closed under retracts and under extensions when $r_N\ge a-b+1$. Every input of that argument is an input already verified here: the adjunction and levelwise model [F5], the cone bound of step 3.1, and the t-structure orthogonality [F7]. [F3, F5, F7, step 3.1]

5.1 **Descent and the functor $Q_N$.** Restricting the conclusion of step 4.1 to the full subcategory of Cartesian objects identified with $D_c^b(X_N;k)$ by [F5], the functor $p_N^*$ followed by descent is $Q_N$: for $F\in D^b_{G,c}(X;k)$ the object $p_N^*F$ has Cartesian cohomology because $p_N$ is a simplicial map and the structure squares of $p_N^*$ are Cartesian by naturality of inverse image; descent produces $Q_N(F)\in D_c^b(X_N;k)$, and $q_N^*Q_N(F)\cong p_N^*F$ canonically. Hence, for $A\le a$, $B\ge b$ and $m\le b+r_N-a$, the isomorphisms of step 4.1 compose with the descent equivalence to give $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$, proving claim 1; the same composition proves claim 2 on intervals of width at most $r_N$. [F5, step 4.1]

6.1 **The image.** Let $H\in D_c^{[b,a]}(X_N;k)$ with $a-b\le r_N$. By the characterization of step 4.1 applied to $C=q_N^*H$, the object $q_N^*H$ lies in the image of $p_N^*$ on $D_c^{[b,a]}(G^\bullet\times X;k)$ if and only if $p_N^*\tau^{\le a}Rp_{N*}q_N^*H\to q_N^*H$ is an isomorphism, and this is an isomorphism exactly on the objects glued from $X$ by descent; equivalently $H$ lies in the image of $Q_N$ precisely when $q_N^*H$ is the pullback of an object of $D_c^{[b,a]}(X;k)$, which is the resolution-triple description: an object of $D_c^{[b,a]}(X_N;k)$ together with an isomorphism $q_N^*H\cong\operatorname{pr}_X^*F$ for some $F\in D_c^{[b,a]}(X;k)$. Closure under retracts and, for $r_N\ge a-b+1$, under extensions follows from the corresponding clauses of step 4.1 and the exactness and conservativity of $q_N^*$ in descent; this proves claim 3. [F5, step 4.1, step 5.1]

7.1 **Coherence and the trivial group.** The product $U_N\times U_M$ is a free smooth $G$-resolution in its own right. Its projections to $U_N$ and $U_M$ descend to $\pi_N:X_{N,M}\to X_N$ and $\pi_M:X_{N,M}\to X_M$, locally trivial bundles with fibres $U_M$ and $U_N$. Their pullbacks are fully faithful on the stated intervals by [F3] and the bounds $r_M,r_N$. On the common principal bundle $U_N\times U_M\times X$, both pulled-back representatives have the canonical descent identification with the same pullback of $A$ from $X$; these identifications are compatible with the principal-bundle nerve maps, so [F5]'s descent equivalence yields a canonical isomorphism $\pi_N^*Q_N(A)\simeq\pi_M^*Q_M(A)$. Naturality is inherited from those same inverse-image and descent maps. On the triple product all comparisons identify the representatives with the same pullback of $A$, so their two compositions agree and the cocycle law follows. This compares objects and Hom maps in the common category, without equating the two different target categories or identifying the product with a larger frame space. If $G$ is trivial, take the point as its resolution; then $X_N=X$, the action nerve is constant at $X$, $r_N=\infty$ and $Q_N$ is the identity. This proves claims 4 and 5. [F1, F3, F5, step 5.1, step 6.1]

8.1 **Conclusion.** Steps 3.1 to 5.1 prove claims 1 and 2, step 6.1 claim 3, and step 7.1 claims 4 and 5. The comparison is used only on the nerve and through the finite local models: no global splitting of $Ra_{N*}a_N^*B$ is asserted, so genuine characteristic-class transgressions are preserved. AC enters only through [A1]. [given, A1, step 5.1, step 6.1, step 7.1] ∎

## Remarks

- The finite resolution bound is $r_N=2\min_i(N_i-n_i)$: the factor $2$ is the
  complex dimension of the sphere fibers of the Stiefel bundles, and the
  minimum is taken because the product of the frame spaces is only as acyclic
  as its least acyclic factor.

- The comparison functor is not asserted to be independent of $N$ as a single
  functor without passing to products of resolutions; claim 4 records exactly
  the coherent comparison that the products supply.
