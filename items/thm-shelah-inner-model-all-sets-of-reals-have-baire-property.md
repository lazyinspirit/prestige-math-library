---
id: thm-shelah-inner-model-all-sets-of-reals-have-baire-property
kind: theorem
title: Every real set in the Shelah inner model has the Baire property
status: draft
origin: pipeline
deps: [thm-shelah-inner-model-satisfies-zf-and-dependent-choice, lem-shelah-homogeneous-truth-has-baire-representatives, def-property-of-baire-for-subsets, def-shelah-hereditarily-ordinal-sequence-definable-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.8-2.10, p. 52"}
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.16 and 7.17(3), pp. 43-44"}
---

## Statement

$N$ satisfies: every subset of the reals has the property of Baire. Explicitly,
for each $A\in N$ there are in $N$ an open set $U$ and a meagre set $M$ such that
$A$ is the symmetric difference of $U$ and a subset of $M$.

## Facts & Assumptions

**Given:** A set $A\subseteq\mathbb R$ with $A\in N$ in the ambient Shelah extension.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]]: $A$ has a rank-bounded definition from one $s\in S$ and finitely many ordinals; over the constructible ground this is equivalent to definability from one real and finitely many ordinals.

[F2] [[lem-shelah-homogeneous-truth-has-baire-representatives]]: for every formula with a countable ordinal-sequence parameter, the set of reals satisfying it differs from an open set by a meagre set, and both the open code and the meagre-error code lie in the final extension.

[F3] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]: $N$ is transitive and has the same reals as the ambient extension.

[F4] [[def-property-of-baire-for-subsets]]: the property of Baire is the existence of an open set differing from the given set by a meagre set.

## Proof

1.1 By [F1] the set $A$ has a rank-bounded definition from one parameter $s\in S$ and finitely many ordinals; applying [F2] to that defining formula yields an open set $W\subseteq 2^\omega$ and a meagre set $E$ with $A\mathbin\triangle W\subseteq E$, both coded in the ambient extension. [F1, F2]

1.2 The code of $W$ is a subset of the countable set $2^{<\omega}$ and hence a real. The code of $E$ supplied by [F2] is a sequence of closed nowhere-dense tree codes; using the fixed pairing of $\omega\times\omega$ with $\omega$, the entire sequence is again one real. By [F3], both code reals belong to $N$. [F2, F3]

1.3 The interpretations of these particular codes are absolute between the ambient extension and $N$. Membership in the open set is the arithmetic assertion that some coded finite string is an initial segment of the real. Membership in the closed set coded by a tree is the arithmetic assertion that every finite initial segment belongs to that tree. Since the two transitive models have the same natural numbers and reals, these assertions have the same truth value in both models. The rational-cylinder test saying that a closed tree code has empty interior is likewise arithmetic in the code, so every member of the coded sequence is still closed nowhere dense in $N$. [F3]

2.1 Therefore $N$ satisfies $A\mathbin\triangle W\subseteq E$ with $W$ open and $E$ meagre as witnessed by the same coded sequence of closed nowhere-dense sets. The codes lie in $N$, so the property of Baire holds in $N$ in the form of [F4]. [F4, step 1.3]

3.1 As $A\in N$ was arbitrary and [F3] supplies the ambient ZF theory, every subset of the reals in $N$ has a Baire witness in $N$; this is the Statement. [F3, step 2.1] ∎
