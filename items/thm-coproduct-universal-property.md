---
id: thm-coproduct-universal-property
kind: theorem
title: "A map out of a disjoint union is continuous iff each of its restrictions is; the canonical injections are open and closed embeddings; and each summand is clopen in the union"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-disjoint-union-topology, thm-initial-and-final-characteristic-properties,
       def-continuous-map-top, def-homeomorphism-and-open-maps, def-subspace-topology-top,
       lem-homeomorphism-criteria, def-injection-surjection-bijection, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "universal property of the coproduct"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Disjoint union (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Disjoint_union_(topology)"
    - title: "Coproduct (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coproduct"
    - title: "J. Munkres, Topology, 2nd ed., §22"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$S := \bigsqcup_{i \in I} X_i$ carry the disjoint union topology, with canonical
injections $\kappa_j$ ([[def-disjoint-union-topology]]). Then:

1. **Characteristic property.** For every space $W$ and every function
   $k : S \to W$,
   $$k \text{ is continuous } \iff k \circ \kappa_i \text{ is continuous for every } i \in I ,$$
   and every family of continuous maps $k_i : X_i \to W$ arises from exactly one
   such $k$, namely $k(x,i) := k_i(x)$.
2. **The injections are continuous, open and closed** and injective
   ([[def-homeomorphism-and-open-maps]],
   [[def-injection-surjection-bijection]]); consequently each $\kappa_j$ is an
   **embedding**, and the subspace topology on $\kappa_j[X_j]$ is the image of
   $\mathcal{T}_j$ under $\kappa_j$ ([[def-subspace-topology-top]]).
3. **Each summand is clopen.** $\kappa_j[X_j] = X_j \times \{j\}$ is both open
   and closed in $S$, and the sets $\kappa_j[X_j]$, $j \in I$, are pairwise
   disjoint with union $S$.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the set $S = \bigsqcup_i X_i$ with the disjoint union topology, the injections $\kappa_j(x) = (x,j)$, an index $j \in I$, a space $W$ and a function $k : S \to W$.

[A1] $S = \bigcup_i (X_i \times \{i\})$; each $\kappa_i$ is injective; the sets $X_i \times \{i\}$ are pairwise disjoint with union $S$; and $U \subseteq S$ is open exactly when $\kappa_i^{-1}[U]$ is open in $X_i$ for every $i$, closed exactly when every $\kappa_i^{-1}[U]$ is closed ([[def-disjoint-union-topology]], [[def-injection-surjection-bijection]]).

[A2] The disjoint union topology is the final topology of the family $(\kappa_i)_{i \in I}$ ([[def-disjoint-union-topology]]).

[L1] For a final topology of a family $(g_i)$: each $g_i$ is continuous, and a map $k$ out of the space is continuous exactly when every $k \circ g_i$ is ([[thm-initial-and-final-characteristic-properties]], claims 3 and 4; [[def-continuous-map-top]]).

[L2] $f$ is an open map when images of open sets are open, a closed map when images of closed sets are closed, and an embedding when it is injective and its corestriction to its image, with the subspace topology, is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[def-subspace-topology-top]]).

[L3] A map into a subspace is continuous exactly when its composite with the inclusion is ([[def-subspace-topology-top]]); a continuous bijection is a homeomorphism exactly when it is open ([[lem-homeomorphism-criteria]], claim 1).

[L4] A topology contains the empty set and the whole space ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A2] and [L1] the injections are continuous and claim 1's equivalence holds. [A2, L1]

1.2 A family of functions $k_i : X_i \to W$ determines exactly one $k : S \to W$ with $k \circ \kappa_i = k_i$ for every $i$: every element of $S$ is $(x,i)$ for exactly one pair by [A1], so $k(x,i) := k_i(x)$ is a well defined function, and any $k'$ with $k' \circ \kappa_i = k_i$ agrees with it at every $(x,i)$. [A1]

1.3 Let $V \subseteq X_j$ and compute the traces of $\kappa_j[V] = V \times \{j\}$: for $i = j$ the trace is $V$, and for $i \ne j$ it is $\varnothing$, since $(x,i) \in V \times \{j\}$ forces $i = j$. [A1]

2.1 If $V$ is open in $X_j$, then by step 1.3 all traces of $\kappa_j[V]$ are open, $\varnothing$ being open by [L4]; so $\kappa_j[V]$ is open in $S$ by [A1] and $\kappa_j$ is an open map. [step 1.3, A1, L2, L4]

2.2 If $F$ is closed in $X_j$, then by step 1.3 the traces of $\kappa_j[F]$ are $F$ and $\varnothing$, both closed, $\varnothing$ being closed by [L4]; so $\kappa_j[F]$ is closed in $S$ by [A1] and $\kappa_j$ is a closed map. [step 1.3, A1, L2, L4]

2.3 The corestriction $\kappa_j^0 : X_j \to \kappa_j[X_j]$ is a bijection, being injective by [A1] and surjective onto its image, and it is continuous by [L3], since $\kappa_j$ is continuous by step 1.1. [step 1.1, A1, L3]

3.1 Taking $V := X_j$ in step 2.1 and $F := X_j$ in step 2.2 shows that $\kappa_j[X_j]$ is open and closed in $S$; with the disjointness and the covering property of [A1] this is claim 3. [step 2.1, step 2.2, A1, L4]

3.2 $\kappa_j^0$ is an open map into the subspace $\kappa_j[X_j]$: for $V$ open in $X_j$ the set $\kappa_j[V]$ is open in $S$ by step 2.1 and is contained in $\kappa_j[X_j]$, so it equals its own trace on $\kappa_j[X_j]$ and is open there. [step 2.1, L2]

4.1 By steps 2.3 and 3.2 with [L3] the map $\kappa_j^0$ is a homeomorphism onto the subspace $\kappa_j[X_j]$, so $\kappa_j$ is an embedding and the subspace topology on $\kappa_j[X_j]$ is the image of $\mathcal{T}_j$; with steps 1.1, 2.1 and 2.2 this is claim 2. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.2, L2, L3]

5.1 Step 1.1 and step 1.2 give claim 1, step 4.1 gives claim 2 and step 3.1 gives claim 3. [step 1.1, step 1.2, step 3.1, step 4.1] ∎

## Remarks

- **The coproduct is where "define a map piecewise" becomes a theorem.** Claim 1
  says that specifying a continuous map on each summand separately, with no
  compatibility condition whatever, specifies a continuous map on the union. The
  absence of a compatibility condition is exactly what the disjointness buys; the
  pasting lemma ([[lem-continuity-is-local-and-pastes]]) is the corresponding
  statement for covers that do overlap, and it needs the pieces to agree.

- **Being open *and* closed is unusual, and it is what separates the summands.**
  A continuous map out of $S$ can be constant on one summand and wild on
  another, so no summand is topologically attached to any other. This is the
  reason the disjoint union appears in the construction of an adjunction space:
  the gluing is put in afterwards, by a quotient, and the coproduct contributes
  no gluing of its own.

- **Nothing here needs the index set to be small.** Claims 1 to 3 hold for an
  arbitrary index set and no choice principle is used, the maps in every step
  being given by explicit formulas.
