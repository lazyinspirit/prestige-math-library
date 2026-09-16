---
id: lem-shelah-inner-model-is-closed-under-ambient-omega-sequences
kind: lemma
title: The Shelah inner model is closed under ambient omega-sequences
status: draft
origin: pipeline
deps: [def-shelah-hereditarily-ordinal-sequence-definable-model, def-axiom-of-choice, lem-solovay-inner-model-is-closed-under-ambient-omega-sequences, def-ordinal-definability-and-hod]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.2-2.7, pp. 51-52"}
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.17 and its remark, p. 44"}
---

## Statement

If $f$ belongs to the ambient ZFC forcing extension and maps $\omega$ into
$N=HOD(S)$, then $f$ itself belongs to $N$.

## Facts & Assumptions

**Given:** The class $N=HOD(S)$ of [[def-shelah-hereditarily-ordinal-sequence-definable-model]] and an ambient function $f:\omega\to N$.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]] with [[def-ordinal-definability-and-hod]]: membership in $N$ means hereditary $OD(S)$-definability, so every $y\in N$ has a code consisting of a formula, a rank, finitely many ordinals and one member of $S$.

[F2] [[lem-solovay-inner-model-is-closed-under-ambient-omega-sequences]]: the corresponding closure statement for the Solovay $HOD(S)$ model, whose proof uses exactly the definable surjection and the interleaving of the parameter sequence.

[F3] [[def-axiom-of-choice]]: used exactly once, to select for each $n$ a code of $f(n)$ from the nonempty class of its codes.

## Proof

1.1 The code assignment of [F1], read at the same interface as the corresponding Solovay closure statement [F2], gives a definable surjection from $\mathrm{Ord}\times S$ onto $N$: a pair $(\alpha,\vec\gamma,s)$ codes the set uniquely defined in rank $V_\alpha$ by the fixed formula from $s$ and the finite ordinal tuple, and every member of $N$ arises from at least one such code, its hereditary definition. [F1]

2.1 Ambient AC selects, for every $n<\omega$, one code $(\alpha_n,s_n)$ of the value $f(n)$; the selection is a single application of choice to the countably many nonempty classes of codes. [F3, step 1.1]

3.1 The sequence of parameters $\langle s_n:n<\omega\rangle$ of countable ordinal sequences and the ordinal sequence $\langle\alpha_n:n<\omega\rangle$ interleave, by a fixed pairing on $\omega$, into one countable sequence $s^*$ of ordinals. [F1, step 2.1]

4.1 The graph of $f$ is definable from $s^*$ and finitely many ordinals alone: $(\alpha,n)\in f$ holds exactly when $\alpha$ is the unique value in the rank coded by the $(n)$-th component of $s^*$ satisfying the corresponding formula, a rank-bounded statement. The graph therefore lies in $OD(S)$, and each of its elements is in $N$; since membership in $N$ is hereditary, $f\in N$. [F1, step 3.1]

5.1 The steps above show that every ambient $\omega$-sequence with values in $N$ is itself in $N$, which is the Statement. [step 4.1] ∎
