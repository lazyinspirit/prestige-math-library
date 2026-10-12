---
id: thm-proper-hypercovers-compute-constructible-derived-cohomology
kind: theorem
title: "Proper hypercovers compute constructible derived cohomology"
status: draft
origin: session
deps: [def-axiom-of-choice, lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves, lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dugger, Hollander and Isaksen, Hypercovers and simplicial presheaves"
      url: "https://arxiv.org/abs/math/0205027"
    - title: "The Stacks Project, Hypercoverings"
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the supplied six-functor resolutions. Let $X_\bullet\to X$ be an augmented simplicial finite-type complex algebraic variety. Assume $X_0\to X$ is proper surjective and, for each $p>0$, $X_p\to(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p$ is proper surjective over $X$. Such an object is a proper hypercover; no smoothness or fiber acyclicity is assumed. For $F\in D^b_c(X;k)$ over a field, and $a_p:X_p\to X$, the augmentation gives
$$F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Ra_{p*}a_p^*F,\qquad R\Gamma(X,F)\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}R\Gamma(X_p,a_p^*F).$$
There is a natural strongly convergent spectral sequence $E_1^{p,q}=H^q(X_p,a_p^*F)\Rightarrow H^{p+q}(X,F)$. If $F$ has cochain lower bound $a$, every diagonal $p+q=m$ is finite; degree $m$ and its differential are determined by levels through $p=m-a+1$. All proper-hypercover refinements induce the same comparison via the base object; any two such hypercovers have a proper common refinement. For $F=k_X$, $a=0$, this is the first-quadrant spectral sequence required for smooth-projective hyperresolutions.

## Facts & Assumptions

**Given:** $X_\bullet\to X,F,k$ and the supplied construction inputs in the Statement.

[F1] [[lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves]] proves actual proper Čech descent, including arbitrary base change and constructible coefficient complexes.

[F2] [[lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization]] supplies natural alternating-face diagonal/double-total homotopy equivalence.

[F3] [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] and [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] supply coherent ordinary operations and right-derived composition on bounded algebraically constructible complexes over an arbitrary field. [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] supplies the functorial simplicial-derived diagrams, strict resolutions, and their uniformly bounded-below total model; its local-section descent conclusion is not substituted for proper descent.

[F4] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] gives convergence for degreewise finite filtrations.

[A1] [[def-axiom-of-choice]] is inherited only through the resolution inputs and [F1]; the finite coskeleton, product and retract constructions below make no new arbitrary selections.

## Proof

1.1 First let $U\to X$ be a bounded proper hypercover of height zero, that is $U=\operatorname{cosk}_0U_0$. This is the Čech nerve of the proper surjection $U_0\to X$, so [F1] proves both the sheaf and global augmentations. Suppose inductively they are proved for all bounded heights at most $n$, and let $U=\operatorname{cosk}_{n+1}U$ have height $n+1$. Put $V=\operatorname{cosk}_nU$. It is a proper hypercover of height at most $n$: its original matching maps through degree $n$ are unchanged, and its later matching maps are isomorphisms. The inductive hypothesis applies to $V$. [F1, given, construct]

2.1 For every $j$, $U_j\to V_j$ is proper surjective. For $j\leq n$ it is the identity. In higher degree write its map as $\operatorname{Hom}(\operatorname{sk}_{n+1}\Delta[j],U)\to\operatorname{Hom}(\operatorname{sk}_n\Delta[j],U)$: both objects are finite matching limits. Attach the finitely many nondegenerate $(n+1)$-faces of $\Delta[j]$ to its $n$-skeleton. Their boundaries are already in that skeleton, so extension is a Cartesian pullback of the finite product of the matching map $U_{n+1}\to M_{n+1}U$. A finite product over $X$ of proper surjections and any base change thereof is proper surjective. This proves the claim without asking these maps to have local sections. [step 1.1, construct, algebra]

3.1 Form the bisimplicial object $W_{r,j}=U_j\times_{V_j}\cdots\times_{V_j}U_j$ with $r+1$ factors, horizontally the Čech nerve of $U_j\to V_j$. Pull coefficients from $X$ throughout. By [F1] and step 2.1 every horizontally augmented derived row computes the coefficient complex on $V_j$, both before and after pushing to $X$. Thus the induced augmentation into the double total is a quasi-isomorphism: use [F4] on the triple-complex model of [F3], since its degrees are $r,j\geq0,q\geq a$ and each total diagonal is finite. The inductive augmentation for $V$ then gives $F\simeq\operatorname{Tot}_{r,j}Ra_{W_{r,j}*}F_{W_{r,j}}$ and the analogous global statement. By [F2] this double total is naturally equivalent to that on the diagonal $D_j=W_{j,j}$. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 The bounded hypercover $U$ is a retract over $X$ of $D$. The map $i:U\to D$ repeats the same $U_j$ point in all $j+1$ horizontal factors. Through degree $n$ the map $U_j\to V_j$ is identity, so $D_j=U_j$ there. In degree $n+1$, choose the first projection $D_{n+1}\to U_{n+1}$. Its faces and degeneracies agree with the degree-$\leq n$ identity maps, because every horizontal factor has the same image in $V$ and those lower-degree maps are identities. This defines a map of $(n+1)$-truncations; the universal property $U=\operatorname{cosk}_{n+1}U$ extends it uniquely to $r:D\to U$. Since the composite $ri$ is identity through degree $n+1$, it is identity in every degree by that same universal property. Coefficient pullback reverses these maps, so the augmented total for $U$ is a retract of the augmented total for $D$. A retract of an acyclic cone is acyclic. Step 3.1 therefore proves the required augmentations for height $n+1$, completing bounded-height induction. [F2, F3, step 1.1, step 3.1, construct]

5.1 For an arbitrary proper hypercover $U$, its $N$-coskeleton $U^{(N)}=\operatorname{cosk}_N\operatorname{sk}_NU$ is a bounded proper hypercover, so step 4.1 applies to it. The map $U\to U^{(N)}$ is identity through simplicial degree $N$. In the strict derived total model every internal degree is at least $a$; hence total degrees $m-1,m,m+1$ use only simplicial degrees at most $m-a+1$. Choose $N\geq\max(0,m-a+1)$, and the totals for $U$ and $U^{(N)}$ have the same objects and differentials in these three degrees. Their degree-$m$ cohomology is identical, as are their augmentation maps. Since this is true for every $m$, the augmentation for $U$ is a quasi-isomorphism. This is a finite-degree truncation argument, not an interchange of stalks or cohomology with an unjustified infinite product. [F3, step 4.1, construct]

6.1 Filter the global total by simplicial degree. Its first page is $H^q(X_p,a_p^*F)$ and the first differential is alternating pullback by faces. In degree $m$, its filtration has only $0\leq p\leq m-a$ nonzero pieces; [F4] therefore identifies the stationary page with the finite associated graded of $H^m(X,F)$, proving strong convergence. No finite-dimensionality of the individual $H^q$ groups is needed for this convergence. Naturality of face maps, augmentations and the strict resolutions in [F3] gives the refinement comparisons. [F3, F4, step 5.1]

7.1 For two proper hypercovers $U,V$ over $X$, their levelwise product $R_j=U_j\times_XV_j$ is a common proper hypercover. Finite matching limits commute with products, so each matching map of $R$ is the product over $X$ of the matching maps of $U,V$ and is proper surjective; its projections give the two refinements. By step 5.1 both augmentations identify their totals with the same coefficient complex on $X$, so the comparison maps coincide after those identifications. If a smooth-projective refinement is desired, the product alone need not be smooth; resolution of its successive matching spaces is a separate supplied construction. The coefficient $k_X$ case has $a=0$ and exactly the stated first-quadrant page. AC is inherited precisely through [A1]. [F3, A1, step 5.1, step 6.1, construct] ∎
