---
id: thm-proper-varieties-admit-smooth-projective-hyperresolutions
kind: theorem
title: "Smooth projective proper hyperresolutions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-axiom-of-choice, def-closed-immersion-schemes,
       def-fibre-product-schemes-universal-property, def-projective-morphism-pre-proj,
       def-proper-morphism, def-separated-morphism-schemes, def-reduction-of-scheme,
       def-simplicial-object-and-simplicial-commutative-ring,
       def-split-augmented-simplicial-objects-and-matching-objects,
       cor-segre-veronese-embedding, cor-product-schemes-over-base-exists,
       lem-blowups-of-projective-schemes-are-projective,
       lem-chow-lemma-proper-noetherian, lem-proper-stable-base-change,
       lem-proper-stable-composition, lem-base-change-surjective-morphisms, lem-proper-source-to-separated-target-proper,
       lem-closed-immersion-proper, thm-projective-morphism-proper,
       thm-weak-embedded-desingularization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (6.2.5)-(6.2.8)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "printed pp. 19-21, (6.2.1)-(6.2.5), (6.2.8): the nondegenerate-part splitting and inductive construction of proper split hypercoverings, the domination of two systems by a third and the lifting of morphisms"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures (Srni, January 2005), Sections 4.1-4.2"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "hypercoverings as simplicial varieties, comparability, printed pp. 9-10"
---

## Statement

Assume AC. Every proper complex algebraic variety $Y$ admits a split simplicial
proper hypercover $a:Y_\bullet\to Y$ with every $Y_p$ smooth projective. Here
proper hypercover means that $Y_0\to Y$ and each map
$Y_p\to(\operatorname{cosk}_{p-1}Y_\bullet)_p$ is proper and surjective. Two
such systems admit a third smooth projective proper hypercover mapping to both
over $Y$. Every morphism between proper varieties can be lifted to a morphism
between such hypercovers after refining the source. Degree-$n$ cohomology uses
only the finite skeleton through degree $n+1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a proper complex algebraic variety $Y$, i.e. a separated finite-type $\mathbb C$-scheme $Y$ whose structure morphism to $\operatorname{Spec}\mathbb C$ is universally closed ([[def-proper-morphism]]).

[F1] [[thm-weak-embedded-desingularization]] and [[lem-blowups-of-projective-schemes-are-projective]]: for a smooth finite-type $\mathbb C$-scheme $X$ and a reduced closed subscheme $Z\subseteq X$, the embedded desingularization is a tower of blowups of $X$ along regular centers whose strict transform $\widetilde Z$ is smooth, maps to $Z$ properly and birationally on every irreducible component, and is an isomorphism over the smooth locus. When $X=\mathbb P^N_{\mathbb C}$, induction using the blowup lemma makes every ambient stage integral projective: each center has a nonzero finite-type ideal sheaf (the empty center giving the identity). Thus in this case the closed strict transform $\widetilde Z$ is smooth projective and $\widetilde Z\to Z$ is proper and surjective.

[F2] [[lem-chow-lemma-proper-noetherian]]: for a Noetherian base $S$ and a separated finite-type $S$-scheme $T$ there are a scheme $T'$ and morphisms $\pi:T'\to T$ proper surjective and $\iota:T'\to\mathbb P^N_S$ an immersion over $S$; if $T\to S$ is proper then $\iota$ is a closed immersion, so $T'$ is projective over $S$.

[F3] [[def-split-augmented-simplicial-objects-and-matching-objects]], [[def-simplicial-object-and-simplicial-commutative-ring]] and [[cor-product-schemes-over-base-exists]]: the matching object $M_p$ is the finite limit of the boundary diagram over the augmentation base. A splitting is a collection of nondegenerate summands $N_q\subseteq Y_q$ with $Y_p=\coprod_{[p]\twoheadrightarrow[q]}N_q$. The structure maps are contravariant ordinal maps, and every ordinal map factors uniquely as a surjection followed by an injection.

[F4] [[lem-proper-stable-base-change]], [[lem-proper-stable-composition]], [[lem-proper-source-to-separated-target-proper]], [[lem-closed-immersion-proper]] and [[thm-projective-morphism-proper]]: proper morphisms are stable under base change and composition; closed immersions and projective morphisms are proper; a morphism from a proper complex scheme to a separated complex scheme is proper. Surjectivity is stable under base change by [[lem-base-change-surjective-morphisms]] and under composition directly.

[F5] [[def-projective-morphism-pre-proj]], [[cor-segre-veronese-embedding]], [[def-fibre-product-schemes-universal-property]], [[def-separated-morphism-schemes]] and [[def-closed-immersion-schemes]]: finite products of projective complex schemes are projective by the Segre embedding. Finite limits with separated targets are closed in those products, since each equality of two maps is the inverse image of a closed diagonal. Finite disjoint unions are also projective: embed the components in mutually disjoint coordinate linear subspaces of one projective space, and take their closed union. These subspaces have no common geometric point, so the union is the scheme coproduct.

[F6] [[def-axiom-of-choice]]: the Axiom of Choice is the standing hypothesis, inherited here from Chow's lemma, from the embedded desingularization and from the countably many selections of smooth projective covers in the induction (finitely many for each truncation).

## Proof

1.1 Smooth projective covers. Let $Z$ be a reduced projective complex scheme with its closed immersion $Z\hookrightarrow\mathbb P^N_{\mathbb C}$. The ambient scheme $\mathbb P^N_{\mathbb C}$ is smooth of finite type over the characteristic-zero field $\mathbb C$, so [F1] applies to the reduced closed subscheme $Z$: the embedded desingularization is a tower $\mathbb P^N_{\mathbb C}=X_0\leftarrow X_1\leftarrow\dots\leftarrow X_r$ of blowups along regular centers with strict transform $\widetilde Z=Z_r$ smooth, mapping to $Z$ properly and birationally on every irreducible component and isomorphically over the smooth locus. Each $X_i$ is integral projective over $\mathbb C$ by [[lem-blowups-of-projective-schemes-are-projective]], so the closed subscheme $\widetilde Z\subseteq X_r$ is smooth projective, and $\widetilde Z\to Z$ is surjective because its image is closed and contains a dense open of every irreducible component of the reduced $Z$. [F1, given, construct]

2.1 Degree zero. Apply [F2] with $S=\operatorname{Spec}\mathbb C$ Noetherian and $T=Y$ proper, hence separated and of finite type: there are a projective $X'$ over $\mathbb C$ and a proper surjective $\pi:X'\to Y$. Replacing $X'$ by its reduction ([[def-reduction-of-scheme]]) is a closed immersion $X'_{\mathrm{red}}\hookrightarrow X'$ that is proper and surjective onto $X'$, and the reduced projective $Z=X'_{\mathrm{red}}$ still maps properly and surjectively to $Y$; step 1.1 applied to $Z$ produces a smooth projective $Y_0$ with a proper surjective $Y_0\to Y$. This is the degree-zero term of the construction, and the one-term object $\{Y_0\to Y\}$ is a split $0$-truncated proper hypercover in the sense of [F3], its only boundary map being the augmentation. [F2, F3, step 1.1, construct]

3.1 Matching objects are projective. Suppose a split $(p-1)$-truncated proper hypercover $Y_0,\dots,Y_{p-1}$ of $Y$ with all terms smooth projective has been constructed, for some $p\ge1$. Let $B_p$ be the finite set of order-preserving injections $\theta:[q]\hookrightarrow[p]$ with $q<p$, and write $q(\theta)=q$. The matching object $M_p$ is cut out in $\prod_{\theta\in B_p,Y}Y_{q(\theta)}$ by the boundary compatibility equations. Each equation is an equality into a separated lower term, so [F5] makes it closed. This fibre product is closed in $\prod_{\theta\in B_p,\mathbb C}Y_{q(\theta)}$ by the closed diagonal of $Y$. The factors are projective over $\mathbb C$; their finite product and its closed subscheme $M_p$ are projective by [F5]. Hence $M_p$ is projective over $\mathbb C$. [F3, F5, step 2.1, algebra]

4.1 Extension step. Choose a smooth projective proper surjection $N_p\to M_p$ by applying step 1.1 to the reduction of the projective $M_p$; the reduction inclusion is proper surjective by [F4]. Set $Y_p=\coprod_{\delta:[p]\twoheadrightarrow[q],\,q\le p}N_q$, using the previously chosen $N_q$ for $q<p$. Here is the explicit extension of the structure maps. Write $i_q:N_q\to Y_q$ for the summand inclusions. For any $\alpha:[m]\to[n]$ with $m,n\le p$, on the summand $N_q$ of $Y_n$ indexed by $\delta:[n]\twoheadrightarrow[q]$, factor $\delta\alpha=\iota\epsilon$ with $\epsilon:[m]\twoheadrightarrow[t]$ and $\iota:[t]\hookrightarrow[q]$. Its map into $Y_m$ is $Y(\epsilon)Y(\iota)i_q$. The injection part is an old structure map if $q<p$, a component of the chosen boundary tuple if $q=p$ and $t<p$, and the identity if $t=q=p$. The surjection part, when $m=p$ and $t<p$, sends each old summand $N_u$ indexed by $\eta:[t]\twoheadrightarrow[u]$ into the new summand indexed by $\eta\epsilon$; otherwise it is old or the identity. Boundary compatibility supplies the relations between injections; concatenation supplies the relations between surjections; refactoring their composites gives the mixed relations. Thus these prescriptions obey contravariant composition and define the $p$-truncated simplicial object. Its splitting is precisely the displayed coproduct. Each summand is smooth projective, and each map to the separated projective $M_p$ is proper by [F4]. The finite union map is proper (finite type and separatedness hold on its open-and-closed summands, and every base change has closed image as a finite union of closed images); it is surjective on the $N_p$ summand. This extends the proper hypercover through degree $p$. [F3, F4, F5, step 3.1, construct, algebra]

5.1 Existence and finite stages. AC permits successive choices in step 4.1 for all $p$, giving one compatible augmented simplicial object; each term is smooth projective and each matching map proper surjective. In a first-quadrant cochain simple complex $K^{p,q}$ attached to this object, total degrees $n-1,n,n+1$ involve only $p\le n+1$. Thus its degree-$n$ cohomology uses only this finite skeleton. No splitness of the higher terms of $\operatorname{cosk}_N\operatorname{sk}_NY_\bullet$ is asserted or needed. [F3, F6, step 4.1, algebra]

6.1 Relative refinement construction. More generally let $T_\bullet\to Y$ be a proper hypercover with projective complex terms, without a smoothness or splitting assumption. Construct a split smooth projective $V_\bullet\to Y$ with a map to $T_\bullet$. At degree zero take a smooth projective proper cover of $T_0$. Once the lower degrees and their maps are constructed, form $P_p=T_p\times_{M_p(T)}M_p(V)$. This is projective by [F5], and $P_p\to M_p(V)$ is a proper surjection by base change of the matching map of $T$. Choose a smooth projective proper cover $N_p\to P_p$, and apply step 4.1 to its composite into $M_p(V)$. On $N_p$ define the map into $T_p$ by the other projection; on each degenerate summand $N_q$ define it by its existing map to $T_q$ followed by the corresponding degeneracy of $T$. The fibre-product condition and the composition check of step 4.1 give a simplicial map. Its new matching map is proper surjective on $N_p$, so the induction constructs the required $V$. This uses no inference that termwise surjections induce surjections on matching limits. [F3, F4, F5, step 4.1, step 5.1, construct]

7.1 Common refinements and morphisms. For two given hypercovers $A_\bullet,B_\bullet$ of $Y$, put $T_p=A_p\times_YB_p$. Matching limits commute with these products, so the matching map of $T$ is the product over $Y$ of the matching maps of $A,B$; it is proper surjective by [F4]. Its terms are projective by [F5]. Step 6.1 gives a split smooth projective hypercover mapping to $T$ and hence to both given systems. For a morphism $g:Y\to Z$, and fixed hypercovers $A_\bullet\to Y$ and $B_\bullet\to Z$, instead put $T_p=A_p\times_ZB_p$, using $A_p\to Y\xrightarrow{g}Z$. This is the product over $Y$ of $A$ with the base-changed hypercover $Y\times_ZB$, so its matching maps are again proper surjective; its terms are closed in $A_p\times_{\mathbb C}B_p$ by separatedness of $Z$, hence projective. Apply step 6.1 over $Y$. The resulting maps to $A$ and $B$ give the required refinement of the source and lift of $g$. [F3, F4, F5, step 6.1, construct, algebra]

8.1 Boundaries and Choice accounting. For empty $Y$ take every term empty; degree zero is step 2.1. If $Y$ is a point, the constant one-point hypercover is allowed (its $N_p$ are empty for $p>0$). Zero-dimensional and mixed-dimensional smooth terms are finite disjoint unions covered by [F5]. AC is inherited from Chow's lemma and desingularization and permits the countable sequence of cover choices, including the relative constructions; any fixed finite truncation uses only finitely many such choices. [F1, F2, F3, F5, F6, step 5.1, step 7.1, cases: empty zero one degenerate endpoints] ∎

## Remarks

The theorem constructs the hypercover; cohomological descent is supplied separately. Degenerate summands are copies of the nondegenerate $N_q$, not copies of entire lower terms. Projectivity of matching objects and properness of maps from the smooth projective summands allow the relative construction without requiring matching objects to be smooth. The finite-stage clause is first-quadrant degree bookkeeping, rather than a convergence claim.
