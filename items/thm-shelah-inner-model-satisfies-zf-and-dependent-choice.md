---
id: thm-shelah-inner-model-satisfies-zf-and-dependent-choice
kind: theorem
title: The Shelah inner model satisfies ZF and Dependent Choice
status: published
origin: pipeline
deps: [def-shelah-hereditarily-ordinal-sequence-definable-model, lem-shelah-inner-model-is-closed-under-ambient-omega-sequences, def-serial-relation-dependent-choice-principle-over-zf, thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, thm-solovay-inner-model-satisfies-dependent-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.2-2.7, pp. 51-52"}
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.17, p. 44"}
verification:
  audited: 2026-09-22
---

## Statement

$N=HOD(S)$ is a transitive inner model with the same ordinals and reals as the
ambient Shelah extension, satisfies every axiom of ZF, and satisfies the
serial-relation form of Dependent Choice.

## Facts & Assumptions

**Given:** The class $N$ of the definition item in the ambient Shelah extension.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]]: membership in $N$ is hereditary unique definability in a rank from one countable ordinal sequence and finitely many ordinals; the class is first-order and contains all reals and all ordinals; finite tuples of $S$-parameters interleave.

[F2] [[lem-shelah-inner-model-is-closed-under-ambient-omega-sequences]]: every ambient $\omega$-sequence with values in $N$ belongs to $N$.

[F3] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]] and [[thm-solovay-inner-model-satisfies-dependent-choice]]: the corresponding ZF and DC clauses are already proved for the Solovay $HOD(S)$ model at exactly this interface.

[F4] [[def-serial-relation-dependent-choice-principle-over-zf]]: DC says that for every nonempty set $A$ and every serial relation $R$ on $A$, there is a sequence $\langle a_n:n<\omega\rangle$ in $A$ with $R(a_n,a_{n+1})$ for all $n$. The definition expressly distinguishes this from the prescribed-start form.

[F5] [[def-axiom-of-choice]]: ambient AC, used only to produce the ambient recursive chain below.

## Proof

1.1 $N$ is transitive and contains all ordinals and all reals: the transitive closure of a member of $N$ consists of $OD(S)$-sets by hereditaryness, and every ordinal and every real is definable in a rank from itself as a parameter, so both lie in $N$. Since the sheaf of definitions is rank-bounded, $N$ is a transitive class, exactly at the HOD(S) interface of [F3]. [F1, F3]

1.2 Extensionality, Foundation, Pairing, Union and Infinity hold: each axiom's witness is definable in a rank from the same parameters as its inputs, and the definitions close under these operations because a finite tuple of $S$-parameters interleaves into one. [F1]

1.3 Separation: for $A\in N$ and a formula $\psi$, the set $A\cap\psi^N$ is defined in a rank from the definition of $A$ conjoined with $\psi$ and the rank bound of the separating instance, so it lies in $N$. [F1]

1.4 Replacement: if $F$ is a definable function on $A\in N$ with values in $N$, then the image is defined from the same $S$-parameter and ordinals as $A$ and $F$, without selecting a code for each value: one quantifies in a rank over the unique value of $F$. Hence the image belongs to $N$. [F1]

1.5 Power set: for $A\in N$, the uniform predicate "$y$ is a subset of $A$" is ranked and definable from the parameters defining $A$, so the power set of $A$ as computed in $N$ is a set of $N$. Together with steps 1.2 through 1.4 this verifies all axioms of ZF in $N$. [F1]

1.6 Dependent Choice: let $A\in N$ be nonempty and let $R\in N$ be serial on $A$. In the ambient model, AC first selects some $a_0\in A$ and then recursively chooses $a_{n+1}\in A$ with $R(a_n,a_{n+1})$, which is possible by seriality. The resulting $\omega$-sequence lies in $N$ by [F2]; transitivity and the absoluteness of membership in the set $R$ give $N\models R(a_n,a_{n+1})$ for all $n$. Thus the starting-point-free serial-relation form of DC stated in [F4] holds in $N$; no equivalence with the separately named prescribed-start form is used. [F2, F4, F5]

2.1 $N$ has the same ordinals and reals as the ambient extension, since it contains them all and is transitive. [F1, step 1.1]

3.1 Steps 1.1 through 1.6 verify the ZF and same-ordinals-and-reals clauses, and step 1.6 verifies DC; this is the Statement. [step 2.1, step 1.6] ∎
