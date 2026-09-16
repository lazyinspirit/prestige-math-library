---
id: ex-dmc-urysohn-finite-menu-intersection
kind: example
title: "Finite-menu intersection in the DMC Urysohn construction"
status: draft
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, def-dependent-multiple-choice-finite-level-tree, def-interior-closure-boundary-top, lem-interior-closure-boundary-identities, def-topological-space, def-normal-and-t4-spaces, def-natural-numbers]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Schechter, Urysohn's lemma and the axiom of choice"
      url: "https://alg-d.com/math/ac/urysohn.pdf"
      locator: "Theorems 4-5, pp. 2-3"
---

## Example

In the DMC construction of [[thm-dmc-implies-urysohn-lemma]] each level $n$ of
the dyadic scale is obtained by intersecting, coordinatewise, the finitely many
nodes of the menu at that level. The example computes the first two levels and
verifies that the closure inclusions survive the intersection and that the
predecessor coherence of the menus is preserved.

## Facts & Assumptions

**Given:** A normal space $X$ with disjoint closed sets $F,G$; nodes $\langle U_1,\dots,U_{2^n}\rangle$ of open sets with $\overline{U_i} \subseteq U_{i+1}$ for $1 \le i < 2^n$, $F \subseteq U_1$ and $U_{2^n} = X \setminus G$; a menu $\{a^{(1)},\dots,a^{(m)}\}$ of such nodes at one level.

[F1] The closure of a finite union is the union of the closures, and for finitely many sets the closure of an intersection is contained in the intersection of the closures; $A \subseteq \overline{A}$ ([[def-interior-closure-boundary-top]], [[lem-interior-closure-boundary-identities]]).

[F2] A finite intersection of open sets is open, and the entries of a node satisfy the closure inclusions displayed above ([[def-topological-space]], [[def-normal-and-t4-spaces]]).

[F3] DMC supplies nonempty finite menus at every level with the successor property, and the menus can be pruned so that every element of the next menu has a predecessor in the current one ([[def-dependent-multiple-choice-finite-level-tree]], [[def-natural-numbers]]).

## Verification

1.1 Let $a^{(1)},\dots,a^{(m)}$ be the nodes of the menu at level $n$, with entries $a^{(j)}_i$, and put $U_i := \bigcap_{j \le m} a^{(j)}_i$ for $1 \le i \le 2^n$; each $U_i$ is a finite intersection of open sets, hence open. [given, F2]

2.1 For each $i$ the inclusion $\overline{U_i} \subseteq U_{i+1}$ holds: $\overline{U_i}$ is contained in $\bigcap_j \overline{a^{(j)}_i}$ by [F1], and each $\overline{a^{(j)}_i} \subseteq a^{(j)}_{i+1}$ by hypothesis, so $\overline{U_i} \subseteq \bigcap_j a^{(j)}_{i+1} = U_{i+1}$. [step 1.1, F1]

2.2 The boundary values are preserved: $F \subseteq U_1$ because $F$ is contained in every $a^{(j)}_1$, and $U_{2^n} = X \setminus G$ because every $a^{(j)}_{2^n}$ equals $X \setminus G$. [step 1.1, F2]

3.1 Predecessor coherence is preserved: if every element of the level-$(n+1)$ menu has a predecessor in the level-$n$ menu by [F3], then the entry at position $2i$ of the level-$(n+1)$ intersection is the entry at position $i$ of the level-$n$ intersection, since for each node of the larger menu its $2i$-th entry is the $i$-th entry of its predecessor and each predecessor occurs. [step 1.1, F3] ∎
