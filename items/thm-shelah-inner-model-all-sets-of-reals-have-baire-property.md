---
id: thm-shelah-inner-model-all-sets-of-reals-have-baire-property
kind: theorem
title: Every real set in the Shelah inner model has the Baire property
status: draft
origin: pipeline
deps: [thm-shelah-inner-model-satisfies-zf-and-dependent-choice, lem-shelah-homogeneous-truth-has-baire-representatives, lem-solovay-borel-code-and-regularity-absoluteness, def-property-of-baire-for-subsets, lem-shelah-inner-model-is-closed-under-ambient-omega-sequences, def-shelah-hereditarily-ordinal-sequence-definable-model]
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

[F3] [[lem-shelah-inner-model-is-closed-under-ambient-omega-sequences]]: $N$ is closed under ambient $\omega$-sequences of its elements.

[F4] [[lem-solovay-borel-code-and-regularity-absoluteness]]: Borel codes evaluate identically on shared reals and coded category witnesses transfer between models with the same reals, so the approximation computed in the extension is the same inside $N$.

[F5] [[def-property-of-baire-for-subsets]]: the property of Baire is the existence of an open set differing from the given set by a meagre set.

[F6] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]: $N$ satisfies ZF and has the same reals as the ambient extension.

## Proof

1.1 By [F1] the set $A$ has a rank-bounded definition from one parameter $s\in S$ and finitely many ordinals; applying [F2] to that defining formula yields an open set $W\subseteq 2^\omega$ and a meagre set $E$ with $A\mathbin\triangle W\subseteq E$, both coded in the ambient extension. [F1, F2]

1.2 The codes of $W$ and $E$ are countable objects: an open set of Cantor space has a code consisting of a set of finite binary strings, which is a real, and $E$ is given as the union of a countable sequence of closed nowhere-dense sets, each coded by a real; the sequence itself is an ambient $\omega$-sequence of reals. Since all reals and all ordinals lie in $N$ and $N$ is closed under ambient $\omega$-sequences, the codes of $W$ and the witnessing nowhere-dense sequence belong to $N$. [F1, F3]

1.3 Inside $N$, the same codes define a set $W^N$ and a sequence of closed nowhere-dense sets whose union contains $E^N$: by [F4] the Borel-code evaluations agree between the extension and $N$, because the two models have the same reals. [F4]

2.1 Therefore $N$ satisfies $A\mathbin\triangle W^N\subseteq E^N$ with $W^N$ open and $E^N$ meagre as witnessed by the same coded sequence of closed nowhere-dense sets; since $W^N$ and the witness sequence lie in $N$, the property of Baire holds in $N$ in the form of [F5]. [F5, step 1.3]

3.1 As $A\in N$ was arbitrary and [F6] supplies the ambient ZF theory, every subset of the reals in $N$ has a Baire witness in $N$; this is the Statement. [F6, step 2.1] ∎
