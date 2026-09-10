---
id: lem-baire-property-sigma-algebra-and-borel-regularity
kind: lemma
title: "Baire property sigma-algebra and Borel regularity"
status: published
origin: pipeline
deps: ["def-property-of-baire-for-subsets", "def-countable-borel-hierarchy", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions 2.46/2.53/2.55, Exercises 2.48–2.50/2.54 and Lemmas 2.51/2.56, Corollary 2.57 and Exercise 2.58, printed pp26–27"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, in every topological space X the sets with the Baire property form a sigma-algebra containing all Borel sets. Every meagre subset has the Baire property. Every Baire-property set differs from both an $F_\sigma$ set and a $G_\delta$ set by a meagre set.

## Facts & Assumptions

[F1] [[def-property-of-baire-for-subsets]] defines Baire-property sets by meagre error from an open set.

[F2] [[def-countable-borel-hierarchy]] defines the least sigma-algebra containing the opens.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** An arbitrary topological X. Here $F_\sigma$ means a countable union of closed sets, and $G_\delta$ a countable intersection of open sets.

1.1 A subset of a nowhere dense set is nowhere dense since closure is monotone. A finite union of nowhere dense sets is nowhere dense: inside any nonempty open, successively refine to a nonempty open avoiding each of the finitely many closures; the final refinement avoids their union. Subsets of meagre sets retain the same covering witnesses. For a sequence of meagre sets, A1 chooses a nowhere dense covering sequence for each; the diagonal pairing of their two natural indices yields a covering sequence for the union. Thus meagre sets form an ideal closed under countable unions. The empty set has the all-empty witness sequence. [F1, A1]

1.2 For closed F, $F\setminus\operatorname{int}F$ is closed with empty interior: a nonempty open contained in it would be contained in F and hence in its interior, a contradiction. Thus F differs from its open interior by a nowhere dense set and has the Baire property. If U is open, its boundary $\overline U\setminus U$ is closed nowhere dense: any nonempty open inside $\overline U$ must meet U, precluding containment in that difference. These statements use only the closure and interior definitions, so hold without separation axioms. [F1]

2.1 Suppose $A\triangle U$ is meagre with U open. Its complementary set differs from closed $X\setminus U$ by the same error; step 1.2 replaces that closed set by its open interior at a further nowhere dense error. Step 1.1 therefore makes the complement Baire-property. For a sequence of Baire-property $A_n$, A1 selects witnessing opens U_n. The error $(\bigcup_n A_n)\triangle(\bigcup_n U_n)$ is contained in $\bigcup_n(A_n\triangle U_n)$, meagre by step 1.1. Thus this class is a sigma-algebra, containing opens and all meagre sets by F1. F2's leastness puts every Borel set in it. [F1, F2, A1, step 1.1, step 1.2]

3.1 Enclose $A\triangle U$ in a meagre $F_\sigma$ set $M=\bigcup_n\overline{N_n}$ by closing its specified nowhere dense witnesses. Put $G=U\setminus M$ and $H=\overline U\cup M$. Then G is $G_\delta$, since $G=\bigcap_n(U\setminus\overline{N_n})$, and H is $F_\sigma$. We have $G\subseteq A\subseteq H$. Moreover $A\setminus G\subseteq M$ and $H\setminus A\subseteq M\cup(\overline U\setminus U)$, both meagre by steps 1.1–1.2. These give the two required meagre symmetric differences, also when X, U or M is empty. QED. [F1, step 1.1, step 1.2]
