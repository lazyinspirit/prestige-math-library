---
id: lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
kind: lemma
title: "General linear Stiefel approximations stabilize bounded constructible Hom"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [thm-the-canonical-pair-is-a-t-structure, def-algebraically-constructible-complex-of-analytic-field-sheaves,
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
where $U_N$ has the right action $u\cdot g=u\circ g$ and the quotient uses
$(u,x)\cdot g=(ug,g^{-1}x)$. For the action nerve use the equivalent left
action $g\cdot(u,x)=(ug^{-1},gx)$, and set $r_N=2\min_i(N_i-n_i)$. Let
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
5. **trivial group.** If $G$ is trivial then $U_N$ and $B_N$ are points and $X_N=X$, $r_N=\infty$, and $Q_N$ is the identity of $D_c^b(X;k)$.

The finite local comparisons do not assert a global tensor splitting for an
arbitrary bundle with fibre $U_N$, such as the comparison projections
$X_{N,M}\to X_N$ and $X_{N,M}\to X_M$.

## Facts & Assumptions

**Given:** The group $G$, the variety $X$, the integers $N_i\ge n_i+1$, the spaces $U_N,B_N,P_N,X_N$, the action nerve of the definition, the simplicial map $p_N$, and the functor $Q_N$ of the Statement; the Axiom of Choice [[def-axiom-of-choice]]; the bounded derived category conventions of [[def-derived-category-of-an-abelian-category]] and [[def-derived-hom-in-the-bounded-setting]].

[F1] Frame and quotient conventions are those of [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-free-group-action]] and [[def-principal-g-bundle-and-associated-fiber-bundle]]. Full-rank frames are an open matrix locus. The algebraic principal charts and the associated quotient charts are constructed directly in step 1.1; they are not inferred from the orthonormal Stiefel-space definition.

[F2] Fiber gap ([[lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap]]): each factor and the product carry the finite models whose cohomology satisfies $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, and the frame space is homotopy equivalent to the product of Stiefel manifolds.

[F3] The acyclic-fiber lemma ([[lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences]]): for a locally trivial bundle in the finite constructible local-product setting with $r$-acyclic fiber, the cone of the unit of the adjunction lies in $D^{\ge b+r+1}$ on $D_c^{\ge b}$, the induced pullback map on Hom groups is an isomorphism in the stated range, the functor is fully faithful on intervals of width at most $r$, and the image is characterized by the truncated counit and closed under retracts, with extension closure for width strictly below $r$.

[F4] The finite constructible local-product setting ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]], [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]): bounded algebraically constructible complexes on separated finite-type complex varieties have bounded finite cochain models with coefficient-extension compatibility, and the local product comparison identifies the pushforward of a pullback along a product projection with the tensor product with the finite fiber model.

[F5] Locally split descent ([[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]): for a strict augmented simplicial space the abelian category of simplicial sheaves has explicit coinduced injective resolutions and a bounded derived category; for the Čech nerve of a map admitting local sections, inverse image is an equivalence onto the full derived subcategory with Cartesian cohomology, and for algebraic principal bundles it restricts to the algebraically constructible subcategories. Evaluation at each simplicial degree is exact, its right adjoint is coinduction, and composition of derived right adjoints is computed by the total model.

[F6] The definition of the equivariant category ([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]): $D^b_{G,c}(X;k)$ is the full subcategory of the bounded derived category of simplicial sheaves on $G^\bullet\times X$ with Cartesian cohomology and constructible degree-zero restriction, with the ordinary shift; cohomological bounds are read levelwise. Cartesianity identifies each cohomology component with inverse image of its degree-zero component, so restriction detects zero objects.

[F7] The canonical t-structure ([[def-canonical-t-structure-on-a-derived-category]], [[thm-the-canonical-pair-is-a-t-structure]], [[thm-the-derived-category-inherits-a-triangulated-structure]]): the bounded derived category of an abelian category is triangulated and carries the canonical t-structure with $\operatorname{Hom}(D^{\le m},D^{\ge m+1})=0$; the aisles are defined by the vanishing of cohomology objects.

[A1] AC is used exactly through the injective replacements, the finite models and the Serre-spectral-sequence supplier recorded in [F2], [F4] and [F5]; the frame charts, the descent geometry and the image argument below are otherwise choice-free ([[def-axiom-of-choice]]).

## Proof

1.1 **The frame bundle and its nerve.** On a Grassmannian chart determined by an invertible $n\times n$ pivot minor, a frame is uniquely $\binom{I_n}{T}h$, with $h\in\operatorname{GL}_n(\mathbb C)$ and $T$ the graph coordinates. These formulas and their inverses are regular, so they give algebraic principal-bundle charts for $U_N\to B_N$. In these charts the diagonal quotient is $V\times X$, with $(\binom{I}{T}h,x)$ mapping to $(T,hx)$, and the principal quotient $q_N:P_N\to X_N$ has section $(T,y)\mapsto(\binom{I}{T},y)$. The finitely many charts glue by the regular change-of-frame maps; they exhibit $X_N$ as a separated finite-type variety and $q_N$ as a principal $G$-bundle. Its action nerve is its Čech nerve, so [F5] applies. Projection to $X$ is equivariant for the left action specified in the Statement, and induces the simplicial map $p_N$. In degree $m$ this is a product projection $G^m\times U_N\times X\to G^m\times X$ with fibre $U_N$; its structure squares are Cartesian, since group action on the frame factor is invertible. [given, F1, F5, F6]

2.1 **The fiber is $r_N$-acyclic with finite models.** By [F2], $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, and the product of Stiefel models supplies the bounded finite cochain model of the fiber with coefficient-field compatibility. By [F4] the base $G^m\times X$ carries the finite conical cochain models, so each levelwise projection of step 1.1 is a locally trivial bundle in the finite constructible local-product setting with $r_N$-acyclic fiber. [F2, F4, step 1.1]

3.1 **The simplicial unit bound.** For a map of these nerves, the levelwise direct images acquire simplicial structure by the canonical sheaf base-change maps followed by the source structure maps. The levelwise adjunction gives $p_N^*\dashv p_{N*}$, with exact inverse image. Evaluation of a simplicial injective at degree $m$ is injective: evaluation has an exact left adjoint, whose degree-$l$ term is the direct sum over operators $[m]\to[l]$ of their inverse images of the given sheaf. These sums and inverse images are exact. Thus a bounded-below simplicial injective replacement evaluates to an injective replacement at every level, and $(Rp_{N*}C)_m=Rp_{N,m*}C_m$. For $B\ge b$, [F3] and step 2.1 give that the cone of $B_m\to Rp_{N,m*}p_{N,m}^*B_m$ lies in $D^{\ge b+r_N+1}$ at every level. The same bound therefore holds for the simplicial unit cone in the bounded-below derived category; no augmentation of the action nerve to $X$ is used. [F3, F5, F7, step 1.1, step 2.1]

4.1 **The simplicial Hom comparison.** The simplicial category has the exact levelwise inverse image $p_N^*$ left adjoint to the levelwise direct image $Rp_{N*}$ and carries the canonical t-structure of [F7], whose aisles are defined cohomology-objectwise and hence are the levelwise aisles. With the cone bound of step 3.1 in place, the argument of [F3] — its Hom comparison, image criterion, full faithfulness and its retract and extension clauses — applies verbatim inside the simplicial bounded-below derived category, with its bounded full subcategory: for $A\in D^{\le a}$ and $B\in D^{\ge b}$ the long exact Hom sequence of the unit triangle and the orthogonality $\operatorname{Hom}(D^{\le a},D^{\ge a+1})=0$ identify the pullback map $\operatorname{Hom}(A,B[m'])\to\operatorname{Hom}(p_N^*A,p_N^*B[m'])$ as an isomorphism for $m'\le b+r_N-a$; for $a-b\le r_N$ it is fully faithful on the full subcategory $D^{[b,a]}$; and on that interval an object lies in the image exactly when the truncated counit $p_N^*\tau^{\le a}Rp_{N*}C\to C$ is an isomorphism, the image being closed under retracts and under extensions when $r_N\ge a-b+1$. Every input of that argument is an input already verified here: the adjunction and levelwise model [F5], the cone bound of step 3.1, and the t-structure orthogonality [F7]. [F3, F5, F7, step 3.1]

5.1 **Descent and the functor $Q_N$.** Restricting the conclusion of step 4.1 to the full subcategory of Cartesian objects identified with $D_c^b(X_N;k)$ by [F5], the functor $p_N^*$ followed by descent is $Q_N$: for $F\in D^b_{G,c}(X;k)$ the object $p_N^*F$ has Cartesian cohomology because $p_N$ is a simplicial map and the structure squares of $p_N^*$ are Cartesian by naturality of inverse image; descent produces $Q_N(F)\in D_c^b(X_N;k)$, and $q_N^*Q_N(F)\cong p_N^*F$ canonically. Hence, for $A\le a$, $B\ge b$ and $m\le b+r_N-a$, the isomorphisms of step 4.1 compose with the descent equivalence to give $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$, proving claim 1; the same composition proves claim 2 on intervals of width at most $r_N$. [F5, step 4.1]

6.1 **The image and Cartesian descent.** Necessity follows from $q_N^*Q_N(A)=\operatorname{pr}_X^*A_0$ at degree zero. Conversely suppose $H\in D_c^{[b,a]}(X_N;k)$ and $q_N^*H\cong\operatorname{pr}_X^*F$ for $F\in D_c^{[b,a]}(X;k)$. Let $C$ be the Cartesian simplicial pullback of $H$ to the principal-bundle nerve, and put $E=\tau^{\le a}Rp_{N*}C$ in the ambient simplicial category. It lies in $[b,a]$ because derived direct image preserves lower bounds. At every level $m$, Cartesianity identifies $C_m$ with the pullback of $C_0$, hence with $p_{N,m}^*\operatorname{pr}_{X,m}^*F$, where $\operatorname{pr}_{X,m}:G^m\times X\to X$ is projection. The levelwise image criterion [F3] therefore makes the truncated counit $p_N^*E\to C$ an isomorphism in every degree. Its naturality compares the structure maps of $p_N^*E$ with the Cartesian maps of $C$. Each $p_{N,m}$ is surjective and its structure squares are Cartesian, so its exact pullback reflects these quasi-isomorphisms; hence $E$ has Cartesian cohomology. Moreover $E_0\cong F$ by the truncated unit and $C_0\cong\operatorname{pr}_X^*F$, so it is algebraically constructible. Thus $E\in D^b_{G,c}(X;k)$ and Čech descent gives $Q_N(E)\cong H$. Retracts and extensions under $r_N\ge a-b+1$ lift by the degree-zero and degree-one Hom comparisons of step 4.1; their cones and summands have bounded Cartesian constructible cohomology, and the same counit argument gives the image. This proves claim 3 without assuming that ordinary descent data automatically strictify. [F3, F5, F7, step 3.1, step 4.1, step 5.1]

7.1 **Coherence and the trivial group.** The product $U_N\times U_M$ is a free smooth $G$-resolution in its own right. Its projections to $U_N$ and $U_M$ descend to $\pi_N:X_{N,M}\to X_N$ and $\pi_M:X_{N,M}\to X_M$, locally trivial bundles with fibres $U_M$ and $U_N$. Their pullbacks are fully faithful on the stated intervals by [F3] and the bounds $r_M,r_N$. On the common principal bundle $U_N\times U_M\times X$, both pulled-back representatives have the canonical descent identification with the same pullback of $A$ from $X$; these identifications are compatible with the principal-bundle nerve maps, so [F5]'s descent equivalence yields a canonical isomorphism $\pi_N^*Q_N(A)\simeq\pi_M^*Q_M(A)$. Naturality is inherited from those same inverse-image and descent maps. On the triple product all comparisons identify the representatives with the same pullback of $A$, so their two compositions agree and the cocycle law follows. This compares objects and Hom maps in the common category, without equating the two different target categories or identifying the product with a larger frame space. If $G$ is trivial, take the point as its resolution; then $X_N=X$, the action nerve is constant at $X$, $r_N=\infty$ and $Q_N$ is the identity. This proves claims 4 and 5. [F1, F3, F5, step 5.1, step 6.1]

8.1 **Conclusion.** Steps 3.1 to 5.1 prove claims 1 and 2, step 6.1 claim 3, and step 7.1 claims 4 and 5. The comparison is used only on the nerve and through the finite local models: no global splitting of $Ra_{N*}a_N^*B$ is asserted, so genuine characteristic-class transgressions are preserved. AC enters only through [A1]. [given, A1, step 5.1, step 6.1, step 7.1] ∎

## Remarks

- The finite resolution bound is $r_N=2\min_i(N_i-n_i)$: the factor $2$ comes from the real dimension of complex vector spaces in the sphere-fibre calculation, and the minimum is taken because the product of the frame spaces is only as acyclic as its least acyclic factor.

- The comparison functor is not asserted to be independent of $N$ as a single functor without passing to products of resolutions; claim 4 records exactly the coherent comparison that the products supply.
