---
id: ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space
kind: example
title: "A finite subset of any space is compact, so the compact separation clauses specialise to separating a point from a finite set in a Hausdorff space"
status: published
origin: session
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       def-subspace-topology-top, def-hausdorff-space, def-countable,
       lem-finite-choice, def-choice-function, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "finite sets are compact; separating a point from a finite set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $X$ be a topological space ([[def-topological-space]]) and let
$F \subseteq X$ be finite ([[def-countable]]), with the subspace topology
([[def-subspace-topology-top]]). Then:

1. $F$ is compact ([[def-compact-space]]), whatever $X$ is and whatever topology
   it carries.
2. Consequently, if $X$ is Hausdorff ([[def-hausdorff-space]]) then a point
   $x \in X \setminus F$ and the set $F$ have disjoint open neighbourhoods, and
   two disjoint finite subsets of $X$ have disjoint open neighbourhoods
   ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); in particular $F$ is
   closed in $X$.

Clause 1 spends a choice principle, and exactly one: finite choice
([[lem-finite-choice]]), which is a theorem of ZF. The naive phrasing of the same
argument — "for each $y \in F$ pick a member of the cover containing it" — is a
selection over the index set of $F$, and because that index set is a natural
number the selection is licensed outright.

## Facts & Assumptions

**Given:** A topological space $X$, a finite subset $F \subseteq X$ with the subspace topology, and, where clause 2 is at issue, the hypothesis that $X$ is Hausdorff.

[A1] $F$ is finite, so $F$ is equinumerous with a natural number $n$ and may be listed as $y_0, \dots, y_{n-1}$ ([[def-countable]]).

[A2] A space is compact when every family of its open sets whose union is the whole space has a finite subfamily whose union is the whole space; a subset is compact when it is compact as a subspace ([[def-compact-space]], [[def-subspace-topology-top]]).

[L1] If $G$ is a function with domain a natural number $n$ all of whose values are nonempty sets, then the family of its values has a choice function; this is a theorem of ZF ([[lem-finite-choice]], [[def-choice-function]]).

[L2] In a Hausdorff space a point and a disjoint compact set have disjoint open neighbourhoods, two disjoint compact sets have disjoint open neighbourhoods, and every compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Verification

**Proof technique:** direct.

1.1 List $F$ as $y_0, \dots, y_{n-1}$ for a natural number $n$, and let $\mathcal{U}$ be a family of sets open in the subspace $F$ whose union is $F$. [A1, A2]

2.1 For each $i < n$ the set $\mathcal{U}_i := \{\, O \in \mathcal{U} : y_i \in O \,\}$ is nonempty, since the union of $\mathcal{U}$ is $F$ and $y_i \in F$; so by [L1] applied to the function $i \mapsto \mathcal{U}_i$ on $n$ there is a choice function on the family of these sets, and it supplies $O_i \in \mathcal{U}_i$ for every $i < n$. [step 1.1, L1, choose]

3.1 The finitely many sets $O_0, \dots, O_{n-1}$ lie in $\mathcal{U}$ and their union contains every $y_i$, hence is $F$; as $\mathcal{U}$ was arbitrary, $F$ is compact, which is claim 1. [step 1.1, step 2.1, A2]

4.1 If $X$ is Hausdorff then, $F$ being compact by step 3.1, [L2] separates $F$ from any point of $X \setminus F$ by disjoint open sets, separates $F$ from any disjoint finite subset of $X$ likewise, and makes $F$ closed in $X$. This is claim 2. [step 3.1, L2] ∎

## Remarks

- **Clause 2 recovers the $T_1$ behaviour of a Hausdorff space by a different route.** That every finite subset of a Hausdorff space is closed is usually read off from the separation axioms; here it arrives as a special case of a compactness statement, and the two readings agree, as they must.

- **Where the finiteness of $F$ is used.** Only in step 2.1, and only to make the selection a finite one. The same argument with an infinite $F$ would need a genuine choice principle and would in any case fail at step 3.1, an infinite index set producing no finite subcover.

- **The example is the smallest non-trivial instance of the compact separation clauses.** It needs no compactness hypothesis on $X$ and no cover argument beyond the one above, so it is the case in which the clauses of [[thm-compact-subset-of-a-hausdorff-space-is-closed]] can be checked against intuition before being used on genuinely compact sets.
