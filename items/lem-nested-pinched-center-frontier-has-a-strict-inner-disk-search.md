---
id: lem-nested-pinched-center-frontier-has-a-strict-inner-disk-search
kind: lemma
title: "A nested pinched center frontier has a strict inner-disk search"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle, lem-finitely-cornered-regular-plane-curve-separates-without-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds; local refinements of class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3, finite center/saddle extraction; complete local construction in the strategy"
---

## Statement

Suppose the frontier of a center basin is two simple homoclinic loops through the same saddle q, with one loop nested inside the other. Their inner bounded disk K occupies one saddle quadrant, contains a center, and does not contain the selected basin center. Searching from any center of K remains inside K. If another nested two-loop frontier occurs in that search, its inner disk K′ is properly contained in K and has strictly fewer interior saddles. This is a selection statement in the original source disk; it does not assign an essential boundary class to K.

## Facts & Assumptions

**Given:** A generic characteristic disk with a selected center basin whose frontier is two simple homoclinic loops of the characteristic field through the same nondegenerate saddle $q$, the inner loop nested inside the outer one, with inner bounded disk $K$; $K$ lies in one saddle quadrant of $q$, does not contain the selected basin center, and its own field restricts to it.

[F1] A simple directed one-quadrant homoclinic disk of a nondegenerate saddle has one more strict-interior center than strict-interior saddles, and therefore contains a center (the sibling item `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle`). No additional saddle-sector classification is attributed to this count.

[F2] A finitely cornered simple regular plane curve separates the plane into a bounded and an unbounded component, without choice ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F3] Trajectories of the characteristic field are uniquely determined by their initial points, so a trajectory cannot cross an invariant set such as a union of trajectories, and the interior of a Jordan disk bounded by trajectories is invariant under the field's local flow wherever the field is regular.

## Proof

**Proof technique:** direct.

1.1 The given inner disk $K$ is bounded by the simple directed inner homoclinic loop and occupies one saddle quadrant at $q$. These are exactly the hypotheses of [F1], so $c_K-s_K=1$ and there is a center $c$ strictly inside $K$. The boundary saddle $q$ is not counted. No half-branch classification is needed for this application. [F1, given]

2.1 The selected basin center does not lie in $K$ by hypothesis, so the center $c$ found in step 1.1 is a center different from the selected one; the search that starts from $c$ is therefore a search in a strictly smaller region of the source disk. [F1, step 1.1, given]

3.1 The boundary $\partial K$ is a union of trajectories, hence invariant; by uniqueness of trajectories [F3] no regular trajectory crosses it. Consequently every nested periodic disk around $c$ lies inside $K$: its frontier cannot reach the exterior of $K$ without crossing $\partial K$, and if its frontier reaches $\partial K$ it must coincide with one of the two boundary circuits, which is the original single circuit rather than a new nested two-loop frontier. [F2, F3, step 2.1]

4.1 Let a new nested two-loop frontier occur in the search from $c$; by step 3.1 its two loops, and in particular its saddle $r$, lie in $K$, and it cannot be the original frontier, so $r$ is strictly interior to $K$. Its inner disk $K'$ is bounded by its inner loop and, by [F2], is the bounded component of the complement of that loop; since the loop lies in the interior region swept by the search and $K'$ is the smaller bounded side, $K'\subseteq K$ and $r\notin K'$. Every saddle interior to $K'$ is then interior to $K$, while the interior saddle $r$ of $K$ is not available inside $K'$; hence the number of interior saddles of $K'$ is strictly smaller than that of $K$. [F1, F2, step 3.1]

5.1 Collecting steps 1.1-4.1, a search from any center of $K$ remains inside $K$, and every nested two-loop frontier encountered has an inner disk properly contained in $K$ with strictly fewer interior saddles; no essential boundary class was used or assigned to $K$, and only the two cited suppliers and the local uniqueness of trajectories were consumed. [F1, F2, F3, step 4.1] ∎
