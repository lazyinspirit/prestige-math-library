---
id: thm-knot-wirtinger-presentation-correctness
kind: theorem
title: "Correctness of the Wirtinger presentation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps: [def-knot-planar-code,
       lem-wirtinger-crossing-ball-cover,
       lem-wirtinger-local-meridian-conjugacy,
       lem-knot-group-infinity-collar,
       alg-knot-wirtinger-presentation-from-code,
       thm-seifert-van-kampen,
       thm-group-pushout-as-an-amalgamated-quotient,
       def-group-presentation,
       def-free-group,
       thm-quotient-group-universal-property,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-of-finite-wedge-of-circles,
       thm-fundamental-group-of-the-circle]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§2–3"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
verification: {precheck: pass}
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot, let $D$ be a valid finite planar code for a regular diagram of $K$, choose a basepoint $b$ in the complement, and designate a starting under-arc. The finite procedure $\mathsf{Wirtinger}(D,a_0)$ terminates and returns a presentation with one positive-meridian generator for each under-arc and one crossing conjugacy relator for each crossing. For the based meridians determined by the diagram's common upper-collar paths from $b$, the homomorphism from the presented group to $\pi_1(S^3\setminus K,b)$ that sends each generator to its corresponding based positive meridian is an isomorphism. Changing the designated starting under-arc only relabels the same finite cyclic arc set and gives an isomorphic presentation. If all basing paths are changed by prepending the same based loop, every generator image is conjugated by the same element, so the isomorphism type is unchanged.

## Statement references

[[def-knot-planar-code|Finite code, crossings, and under-arcs]]

[[alg-knot-wirtinger-presentation-from-code|Finite Wirtinger constructor]]

## Facts & Assumptions

**Given:** A smooth oriented knot, its valid finite diagram code, a basepoint in the complement, and a designated base under-arc.

[F1] For $c>0$, the exterior retracts to a cover by the meridian region and contractible crossing regions with annular overlaps; the meridian region retracts to the free meridian wedge. For $c=0$, the Euclidean complement has homotopy type $S^1\vee S^2$, with the circle represented by the positive meridian; its fundamental group is infinite cyclic on that meridian. [[lem-wirtinger-crossing-ball-cover]]

[F2] The annular core at each crossing imposes exactly the local conjugacy relation read by the constructor; reversed meridian orientation gives the inverse, and common basing-path change conjugates all generators simultaneously. [[lem-wirtinger-local-meridian-conjugacy]]

[F3] The open-cover fundamental group is the pushout of the inclusion maps. [[thm-seifert-van-kampen]]

[F4] The pushout with a trivial crossing-piece group kills the normal closure of the annular-core image. [[thm-group-pushout-as-an-amalgamated-quotient]]

[F5] The fundamental group of the meridian-region wedge is free on its standard loops. [[thm-fundamental-group-of-finite-wedge-of-circles]]

[F6] A free group is the free object on its declared generator set. [[def-free-group]]

[F7] The returned presentation is the free group on its generators modulo the normal closure of its relators. [[def-group-presentation]]

[F8] A quotient by the relator normal closure has the presentation's universal property. [[thm-quotient-group-universal-property]]

[F9] The inclusion from the Euclidean knot complement into the three-sphere complement induces an isomorphism. [[lem-knot-group-infinity-collar]]

[F10] The constructor checks the finite planar code, traverses its one component from the designated arc, and appends the stated meridian generators and crossing relators. [[alg-knot-wirtinger-presentation-from-code]]

[F11] The fundamental group of a circle is infinite cyclic on its once-around loop. [[thm-fundamental-group-of-the-circle]]

[F12] Fundamental-group multiplication is induced by path concatenation, and inverse classes are represented by reversed loops. [[thm-fundamental-group-laws]]

## Proof

1.1 The input code has finite vertex, edge, segment and crossing lists, so the rational-coordinate, incidence, cyclic-order and starting-arc checks are finite. Each pairwise segment test uses terminating rational determinant, intersection and endpoint-order operations. A failed validation returns invalid-input. If validation succeeds, the one-component tracing follows the finite cyclic list of edges and paired half-edges from $a_0$, returns to $a_0$ after finitely many steps, and labels each maximal under-arc once. The crossing pass then visits the finite crossing list once, reads each source and target from its verified cyclic order, appends exactly the corresponding positive-meridian relator, and returns the finite presentation. Thus the procedure terminates with one generator per under-arc and one relator per crossing, as claimed. If $c=0$, the explicit punctured-product model in [F1] gives its fundamental group as infinite cyclic on the positive meridian (the sphere factor is simply connected), while [F6]–[F8] identify the returned one-generator empty-relator presentation with the same free cyclic group. If $c>0$, [F1] and [F5] give the free meridian basis for the meridian region. [F1, F5, F6, F7, F8, F10, F11, given, construct, algebra]

2.1 Assume $c>0$ and order the crossings $v_1,\ldots,v_c$. Let $b_*$ be the common collar basepoint in $U$, and let $X_0=U$ and $X_i=U\cup V_1\cup\cdots\cup V_i$. For each $i$, the relative-open cover $X_i=X_{i-1}\cup V_i$ has intersection $A_i=U\cap V_i$, the annulus specified in [F1]. Choose $q_i$ on its core and use the supplied collar access path $\gamma_i$ in $U$ from $b_*$ to $q_i$. Concatenation and reparameterization make $[\alpha]\mapsto[\bar\gamma_i*\alpha*\gamma_i]$ a well-defined homomorphism from loops based at $b_*$ to loops based at $q_i$. Its inverse uses $\bar\gamma_i$, since the inserted path-reversal pairs contract by the piecewise retracing homotopy. The same concatenation formula commutes with inclusion. Apply [F3] at $q_i$: since $V_i$ is contractible, [F4] identifies $\pi_1(X_i,q_i)$ with $\pi_1(X_{i-1},q_i)$ modulo the normal closure of the annular-core image. Rebased to $b_*$, this image is conjugate to the common-based crossing word; conjugation does not change its normal closure. By [F2], that word is exactly the relator emitted for $v_i$. Distinct $V_i$ are disjoint, so these are precisely the intersections at every stage. Repeating over the finite crossing list kills exactly the normal closure of the constructor's relators. [F1, F2, F3, F4, F12, step 1.1, construct, algebra]

3.1 By [F6] and [F7], the quotient in step 2.1 is the returned presentation group; [F8] identifies the quotient map with the homomorphism sending each symbol to its positive meridian. It is an isomorphism onto the group of the covered exterior by the pushout construction. [F3, F4, F6, F7, F8, step 2.1, algebra]

4.1 For $c=0$, step 1.1 already identifies the returned cyclic presentation with the Euclidean complement group on the positive meridian. For $c>0$, step 3.1 identifies the presentation with the covered exterior group, and the compact-tube retraction identifies that group with $\pi_1(\mathbb R^3\setminus K)$. In both cases [F9] then gives the isomorphism to $\pi_1(S^3\setminus K)$, with exactly the stated positive-meridian assignment. [F1, F9, step 1.1, step 3.1, algebra]

5.1 By [F2], replacing the common basing path conjugates every generator image by the same element. Simultaneous conjugation is an inner automorphism of the target group, so the resulting presentation group remains isomorphic to $\pi_1(S^3\setminus K)$. [F2, step 4.1, algebra]

6.1 Changing the designated start arc reindexes the same finite list of under-arcs. The induced bijection of generator symbols carries each crossing's over/under labels, and therefore each constructor relator, to the corresponding relator in the new indexing. It extends to an isomorphism of the free groups and carries one relator normal closure onto the other; [F7] and [F8] give an isomorphism of the presented quotients. [F7, F8, F10, algebra] ∎
