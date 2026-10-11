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
       def-proper-morphism, def-separated-morphism-schemes,
       def-simplicial-object-and-simplicial-commutative-ring,
       def-split-augmented-simplicial-objects-and-matching-objects,
       cor-segre-veronese-embedding, cor-product-schemes-over-base-exists,
       lem-blowups-of-projective-schemes-are-projective,
       lem-chow-lemma-proper-noetherian, lem-proper-stable-base-change,
       lem-proper-stable-composition,
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
      locator: "printed pp. 19-21: the inductive construction of proper split hypercoverings, the domination of two systems by a third and the lifting of morphisms"
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

[F1] [[thm-weak-embedded-desingularization]] and [[lem-blowups-of-projective-schemes-are-projective]]: for a smooth finite-type $\mathbb C$-scheme $X$ and a reduced closed subscheme $Z\subseteq X$, the embedded desingularization is a tower of blowups of $X$ along regular centers whose strict transform $\widetilde Z$ is smooth, maps to $Z$ properly and birationally on every irreducible component, and is an isomorphism over the smooth locus; each stage of the tower is a blowup of an integral projective scheme along a finite-type ideal sheaf (the empty center giving the identity), so if $X=\mathbb P^N_{\mathbb C}$ the strict transform $\widetilde Z$ is smooth projective and $\widetilde Z\to Z$ is proper and surjective.

[F2] [[lem-chow-lemma-proper-noetherian]]: for a Noetherian base $S$ and a separated finite-type $S$-scheme $T$ there are a scheme $T'$ and morphisms $\pi:T'\to T$ proper surjective and $\iota:T'\to\mathbb P^N_S$ an immersion over $S$; if $T\to S$ is proper then $\iota$ is a closed immersion, so $T'$ is projective over $S$.

[F3] [[def-split-augmented-simplicial-objects-and-matching-objects]], [[def-simplicial-object-and-simplicial-commutative-ring]] and [[cor-product-schemes-over-base-exists]]: an augmented simplicial $\mathbb C$-scheme has face and degeneracy maps over $\mathbb C$; its matching object is $M_p=(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p=(\operatorname{cosk}_{p-1}X_\bullet)_p$; it is split when the $N$-construction map $m_p$ from the disjoint union of $X_p$ with one copy of $X_q$ per order-preserving surjection $[p]\twoheadrightarrow[q]$, $q<p$, to $X_p$ is an isomorphism; and it is a proper hypercover of $Y$ when $X_0\to Y$ and all canonical boundary maps $X_p\to M_p$ are proper and surjective.

[F4] [[def-proper-morphism]], [[lem-proper-stable-base-change]] and [[lem-proper-stable-composition]]: properness and surjectivity are each stable under arbitrary base change and under composition, so a fibre product over a common base of proper surjective morphisms is proper surjective; properness of a morphism out of a disjoint union is equivalent to properness on each summand, sums being open and closed.

[F5] [[def-projective-morphism-pre-proj]], [[cor-segre-veronese-embedding]], [[def-fibre-product-schemes-universal-property]], [[def-separated-morphism-schemes]] and [[def-closed-immersion-schemes]]: finite products of projective $\mathbb C$-schemes are projective; a closed subscheme of a projective scheme is projective; a finite limit of projective $\mathbb C$-schemes whose structure maps land in a separated $\mathbb C$-scheme is a closed subscheme of the corresponding finite product, because the equality conditions comparing composites are equalities into a separated target; and a section of a separated morphism is a closed immersion.

[F6] [[def-axiom-of-choice]]: the Axiom of Choice is the standing hypothesis, inherited here from Chow's lemma, from the embedded desingularization and from the finitely many selections of smooth projective covers in the induction.

## Proof

1.1 Smooth projective covers. Let $Z$ be a reduced projective complex scheme with its closed immersion $Z\hookrightarrow\mathbb P^N_{\mathbb C}$. The ambient scheme $\mathbb P^N_{\mathbb C}$ is smooth of finite type over the characteristic-zero field $\mathbb C$, so [F1] applies to the reduced closed subscheme $Z$: the embedded desingularization is a tower $\mathbb P^N_{\mathbb C}=X_0\leftarrow X_1\leftarrow\dots\leftarrow X_r$ of blowups along regular centers with strict transform $\widetilde Z=Z_r$ smooth, mapping to $Z$ properly and birationally on every irreducible component and isomorphically over the smooth locus. Each $X_i$ is integral projective over $\mathbb C$ by [[lem-blowups-of-projective-schemes-are-projective]], so the closed subscheme $\widetilde Z\subseteq X_r$ is smooth projective, and $\widetilde Z\to Z$ is surjective because its image is closed and contains a dense open of every irreducible component of the reduced $Z$. [F1, given, construct]

2.1 Degree zero. Apply [F2] with $S=\operatorname{Spec}\mathbb C$ Noetherian and $T=Y$ proper, hence separated and of finite type: there are a projective $X'$ over $\mathbb C$ and a proper surjective $\pi:X'\to Y$. Replacing $X'$ by its reduction is a closed immersion $X'_{\mathrm{red}}\hookrightarrow X'$ that is proper and surjective onto $X'$, and the reduced projective $Z=X'_{\mathrm{red}}$ still maps properly and surjectively to $Y$; step 1.1 applied to $Z$ produces a smooth projective $Y_0$ with a proper surjective $Y_0\to Y$. This is the degree-zero term of the construction, and the one-term object $\{Y_0\to Y\}$ is a split $0$-truncated proper hypercover in the sense of [F3], its only boundary map being the augmentation. [F2, F3, step 1.1, construct]

3.1 Matching objects are projective. Suppose a split $(p-1)$-truncated proper hypercover $Y_0,\dots,Y_{p-1}$ of $Y$ with all terms smooth projective has been constructed, for some $p\ge1$. Its matching object $M_p$ is the finite limit of the boundary diagram of the terms $Y_q$, $q<p$, which are projective over the separated scheme $Y$; by [F5] $M_p$ is a closed subscheme of the finite fibre product $\prod_{q<p}Y_q$ over $Y$, that fibre product is a closed subscheme of the finite product $\prod_{q<p}Y_q$ over $\mathbb C$ because the diagonal of the separated $Y$ is closed, finite products of projective $\mathbb C$-schemes are projective by the Segre embedding, and closed subschemes of projective schemes are projective. Hence $M_p$ is projective over $\mathbb C$. [F3, F5, step 2.1, algebra]

4.1 Extension step. Step 1.1 applied to the reduced scheme $M_p^{\mathrm{red}}$ gives a smooth projective $N_p$ and a proper surjective $N_p\to M_p$. Define $Y_p$ as the disjoint union of $N_p$ with one copy of $Y_q$ for each order-preserving surjection $\delta:[p]\twoheadrightarrow[q]$, $q<p$; this is a scheme over $\mathbb C$ by [F3]. The structure maps are defined as follows: on the summand $N_p$ the face maps are the chosen morphism $N_p\to M_p$, whose components are the maps to the terms $Y_q$; on the summand indexed by $\delta:[p]\twoheadrightarrow[q]$ the face and degeneracy maps are the composites of the corresponding maps in the simplex category with the already constructed structure maps, using the unique factorisation of every ordinal map as a surjection followed by an injection and applying the simplicial identities of $\Delta$ to check that the outcome is a simplicial object. Every $p$-simplex is then uniquely a degeneracy $s_\delta(y)$ of a simplex of degree $q<p$ or an element of the nondegenerate summand, so the map $m_p$ of the $N$-construction is an isomorphism and the object is split through degree $p$ [F3]. The canonical boundary map $Y_p\to M_p$ restricts on $N_p$ to the chosen proper surjection, and on the summand indexed by $\delta$ it is the section $Y_q\to M_p$ of the projection $M_p\to Y_q$ induced by $\delta$; that section is a closed immersion because the composite with the projection is the identity and $M_p\to Y_q$ is separated by [F5]. The summands being open and closed, the whole map $Y_p\to M_p$ is proper by [F4], and it is surjective because it is already surjective on the summand $N_p$. [F3, F4, F5, step 3.1, construct, algebra]

5.1 Existence and finite stages. Induction over $p$ starting from step 2.1 produces terms $Y_0,Y_1,\dots$ with compatible face and degeneracy maps over $Y$, every finite truncation split and satisfying the proper hypercover condition, and every $Y_p$ smooth projective; the resulting augmented simplicial object $Y_\bullet\to Y$ is therefore a split simplicial proper hypercover with smooth projective terms, which is the first clause. For the finite-stage clause, for each $N$ the truncation $\operatorname{cosk}_N\operatorname{sk}_N Y_\bullet$ is again a split proper hypercover with the same terms and the same structure maps through simplicial degree $N$ [F3], and in the normalized cochain simple complex attached to $Y_\bullet$ the terms of simplicial degree $p$ contribute only to total degrees at least $p$, so the cohomology and differentials in degrees through $n$ involve only simplicial degrees $p\le n+1$; hence degree-$n$ cohomology is computed by the finite skeleton $Y_0,\dots,Y_{n+1}$. [F3, step 4.1, given, algebra]

6.1 Common refinements. Let $Y_\bullet\to Y$ and $Z_\bullet\to Y$ be two split proper hypercovers with smooth projective terms, and form the levelwise fibre product $W_p=Y_p\times_YZ_p$ over $Y$. Because finite products of split objects are split and a product of isomorphisms is an isomorphism, $W_\bullet$ is a split augmented simplicial $Y$-scheme [F3]; its matching objects satisfy $M_p(W)\cong M_p(Y)\times_YM_p(Z)$ because finite limits commute with finite limits, so the matching maps $W_p\to M_p(W)$ are fibre products over $Y$ of the matching maps of $Y_\bullet$ and $Z_\bullet$ and are proper surjective by [F4], and the augmentation $W_0\to Y$ is proper surjective as a fibre product of proper surjections. Apply the construction of steps 1.1-4.1 relative to $W$: at degree zero take a smooth projective proper cover $W_0'$ of $W_0$, and at stage $p$ form the relative matching object $P_p=W_p\times_{M_p(W)}M_p(W')$, which is a fibre product of projective $\mathbb C$-schemes over a projective one, hence projective by [F5], and receives a proper surjective map $M_p(W')\to M_p(W)$ induced by the already constructed surjections $W_q'\to W_q$ [F4]; step 1.1 applied to the reduction of $P_p$ produces a smooth projective $W_p'$ with a proper surjection $W_p'\to P_p$ whose composites with the projections exhibit $W_\bullet'$ as a split proper hypercover over $Y$ mapping to $W_\bullet$, hence to $Y_\bullet$ and to $Z_\bullet$ over $Y$. This is the required third smooth projective proper hypercover dominating both. [F3, F4, F5, step 4.1, step 5.1, construct]

6.2 Lifting morphisms. Let $g:Y\to Z$ be a morphism of proper complex algebraic varieties, with split proper hypercovers $Y_\bullet\to Y$ and $Z_\bullet\to Z$ with smooth projective terms. Build a split proper hypercover $W_\bullet\to Y$ together with morphisms $W_p\to Y_p$ and $W_p\to Z_p$ compatible with $g$: at degree zero let $W_0$ be a smooth projective proper cover of the fibre product $Y_0\times_YZ_0$ over $Z$; at stage $p$, form the relative matching object that records a compatible family of previously constructed maps and a lifting of the boundary of a $Y_p$-simplex to $Z_p$, namely the fibre product of $M_p(W)$ over $M_p(Y)$ with $Y_p$ and over the induced map $M_p(Y)\to M_p(Z)$ with $M_p(Z)$, and then with $Z_p$; finite limits of projective $\mathbb C$-schemes over the separated $Z$ are projective and proper by [F4], [F5], and step 1.1 applied to the reduction of this limit produces a smooth projective $W_p$ mapping to it. Its structure maps exhibit $W_\bullet'\to W_\bullet\to Y_\bullet$ as a refinement of the source hypercover and $W_\bullet\to Z_\bullet$ as a lift of $g$, since each stage was chosen to make the boundary diagrams commute and the split $N$-construction determines the remaining structure. [F3, F4, F5, step 4.1, step 5.1, construct]

7.1 Boundaries and Choice accounting. If $Y=\varnothing$ the empty simplicial object with one term $\varnothing$ is a split proper hypercover with all terms smooth projective, and the empty case of the construction is included; the case $p=0$ is step 2.1 and the case of a single generator of the boundary diagram is contained in the definition of $M_p$; degenerate data, meaning identity face and degeneracy maps on a one-point object, are excluded by the requirement that the augmentation be surjective whenever $Y\ne\varnothing$. The Axiom of Choice [F6] is used exactly for the finitely many successive selections of smooth projective covers of the matching objects (steps 1.1, 2.1, 4.1, 6.1, 6.2), each from a nonempty class of covers, and is inherited by Chow's lemma and the embedded desingularization; all remaining constructions are finite limits, coproducts and blowup towers, which make no further selections. [F6, F1, F2, step 5.1, given, cases: empty zero degenerate endpoints] ∎

## Remarks

The theorem is the geometric input for the proper-weight theorem on the same
page: it constructs the hypercover only, and cohomological descent onto $Y$ is
supplied separately. The splitting is used to keep the matching maps proper and
surjective on the nondegenerate parts; the degenerate summands contribute
closed-immersion sections to the matching objects, so no smoothness or
projectivity is required of the matching objects themselves beyond the
projective reduction supplied in step 3.1. The finite-stage clause is degree
bookkeeping of the normalized complex, not a convergence statement; convergence
belongs to the descent theorem of the companion pair.
