---
id: thm-ad-implies-baire-property
kind: theorem
title: "AD implies the Baire property for subsets of sequence spaces and the real line"
status: published
origin: pipeline
deps: ["lem-banach-mazur-game-category-characterization", "thm-ad-implies-countable-choice-for-baire-space", "def-property-of-baire-for-subsets", "def-axiom-of-determinacy-for-natural-number-games"]
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
    - title: "Theorem 7.8 and its preceding local-to-global claim, p24; weak-choice witness selection supplied explicitly here; complete relevant proof read 2026-09-09. Rational-interval version proved locally."
      url: "https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf"
---
## Statement

In ZF+AD every subset of $\mathbb N^{\mathbb N}$, $2^{\mathbb N}$ or $\mathbb R$ has the Baire property. Only countable choice for sets of Baire-real codes, obtained from AD, is used; neither AC nor unrestricted DC is assumed.

## Facts & Assumptions

[F1] [[lem-banach-mazur-game-category-characterization]] gives both strategy characterizations, specified witnesses, open-subspace transfer and nonmeagreness of nonempty basic opens. Its games have the explicit natural-number coding described there.

[F2] [[thm-ad-implies-countable-choice-for-baire-space]] gives countable choice for nonempty sets of Baire reals under AD.

[F3] [[def-property-of-baire-for-subsets]] defines the property by meagre symmetric difference from an open set.

[A1] Assume [[def-axiom-of-determinacy-for-natural-number-games]] for the coded category games and the real-code selection theorem.

**Given:** ZF+AD, one of the three stated spaces X and $A\subseteq X$, with its enumerated basic opens $(V_i)$.

## Proof

1.1 Let U be the union of the basis opens V on which A is comeagre. For each contributing V, F1's open-subspace transfer gives a sequence of ambient closed nowhere dense sets covering $V\setminus A$. Such a sequence has a Baire-real code: each closed F is determined by the set of basis indices whose opens miss F, since their union is exactly $X\setminus F$. Code this binary index set, and pair its coordinates with the sequence index to code the whole sequence in $\mathbb N^{\mathbb N}$. For each contributing V the set of valid covering codes is nonempty; for every other V take the singleton code of the all-empty sequence. F2 under the assumed AD selects one code per basis index. Decode and pair the two sequence indices. This gives an actual closed nowhere dense covering sequence for $U\setminus A$. [F1, F2, A1]

1.2 Put $E=A\setminus U$. AD determines its coded category game. If I won, F1 would make E comeagre in some nonempty basic V. Since $E\subseteq A$, the same witnesses show A comeagre in V; hence $V\subseteq U$ by definition of U. But then $E\cap V=\varnothing$, so the same witnesses would make V meagre in itself, contradicting F1. Thus I cannot win, and determinacy gives a winning II strategy. F1 provides a specified nowhere dense covering sequence for E. [F1, A1, given]

2.1 Interleave that sequence with step 1.1's sequence for $U\setminus A$. Their union covers $A\triangle U=E\cup(U\setminus A)$ and each term is nowhere dense. Hence the symmetric difference is meagre; U is open by its definition, so F3 proves the Baire property. This construction works with rational interval codes for the real line as well as with the two cylinder bases; it requires no homeomorphic transfer. Empty A gives U empty and the same argument, while A=X gives U=X. QED. [F3, step 1.1, step 1.2]
