---
id: lem-shelah-inner-model-is-closed-under-ambient-omega-sequences
kind: lemma
title: The Shelah inner model is closed under ambient omega-sequences
status: published
origin: pipeline
deps: [def-shelah-hereditarily-ordinal-sequence-definable-model, def-axiom-of-choice, def-ordinal-definability-and-hod, thm-n-cross-n-countable, thm-montague-levy-finite-reflection]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.2-2.7, pp. 51-52"}
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.17 and its remark, p. 43"}
verification:
  audited: 2026-09-22
---

## Statement

If $f$ belongs to the ambient ZFC forcing extension and maps $\omega$ into
$N=HOD(S)$, then $f$ itself belongs to $N$.

## Facts & Assumptions

**Given:** The class $N=HOD(S)$ of [[def-shelah-hereditarily-ordinal-sequence-definable-model]] and an ambient function $f:\omega\to N$.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]] with [[def-ordinal-definability-and-hod]]: membership in $N$ means hereditary $OD(S)$-definability, so every $y\in N$ has a code consisting of a formula, a rank, finitely many ordinals and one member of $S$.

[F2] [[thm-n-cross-n-countable]] supplies a fixed definable bijection $b:\omega\times\omega\to\omega$.

[F3] [[def-axiom-of-choice]] supplies a choice function on a set of nonempty sets; Collection first bounds the witnesses used below.

[F4] [[thm-montague-levy-finite-reflection]] reflects each fixed finite family of formulas, with arbitrary set parameters in the reflecting rank. Thus an ambient unique definition from an $S$-parameter and finitely many ordinals gives a rank definition with the same parameters.

## Proof

1.1 A valid definition code is a tuple $c=(e,\theta,k,\langle a_j:j<k\rangle,s)$, where $e,k<\omega$, $\theta>0$ is an ordinal, $s\in S\cap V_\theta$, each $a_j<\theta$, and the formula with code $e$ has a unique solution $y\in V_\theta$ with parameters $s,a_0,\ldots,a_{k-1}$. Write $R(c,y)$ for this assertion. Set satisfaction makes $R$ a single first-order relation; no truth predicate for the universe is used. For every $y\in N$, hereditary membership includes $y\in OD(S)$, so [F1] supplies such a code. Retain all its components rather than treating the rank as a code for the formula and tuple. [F1]

2.1 For every $n<\omega$ some set code $c$ satisfies $R(c,f(n))$. Collection yields a set $C$ containing a witness for each $n$. Separation gives nonempty sets $C_n=\{c\in C:R(c,f(n))\}$. Apply [F3] once to the set $\{C_n:n<\omega\}$, and compose its choice function with $n\mapsto C_n$ to obtain $c_n=(e_n,\theta_n,k_n,\langle a_{n,j}:j<k_n\rangle,s_n)\in C_n$. This selects from sets, not proper classes. [F3, step 1.1]

3.1 For each $n$ define an ordinal sequence $t_n$ by $t_n(0)=e_n$, $t_n(1)=\theta_n$, $t_n(2)=k_n$, $t_n(3+2j)=a_{n,j}$ for $j<k_n$ and $t_n(3+2j)=0$ otherwise, and $t_n(4+2j)=s_n(j)$ for every $j<\omega$. Define $s^*(b(n,j))=t_n(j)$ using [F2]. Replacement produces this function on $\omega$; the supremum of its set of ordinal values, plus one, bounds its range, so $s^*\in S$. Decoding recovers all five components of every $c_n$, including the empty tuple when $k_n=0$. [F1, F2, step 2.1]

4.1 The fixed first-order condition on a set $g$ saying that $g$ is a function with domain $\omega$ and $R(c_n,g(n))$ holds for each $n$, with $c_n$ decoded from $s^*$ as in step 3.1, has the unique solution $g=f$. Existence follows from the selected codes and uniqueness from their unique solutions. Reflect this formula and its uniqueness assertion to a rank containing $f$ and $s^*$ by [F4]. Thus $f\in OD(S)$ under the rank-definition convention. Its graph consists of the ordered pairs $(n,f(n))$, not $(f(n),n)$; its values need not be ordinals. [F1, F4, step 1.1, step 3.1]

5.1 Finite sets of $OD(S)$ objects are again in $OD(S)$. Indeed combine finitely many of their valid codes into one ordinal sequence by the coding of step 3.1; the fixed relation $R$ uniquely reconstructs each object, and an ambient formula uniquely specifies their finite set. Reflection as in step 4.1 gives a rank definition. Every ordinal is ordinal definable using itself as parameter. Since $f(n)\in N$, each $f(n)$ and all its descendants are in $OD(S)$ by [F1]. For the Kuratowski pair $(n,f(n))=\{\{n\},\{n,f(n)\}\}$, the pair and its two members are in $OD(S)$ by finite-set closure; their further descendants are ordinals below $n$, or $f(n)$ and its descendants. Together with $f\in OD(S)$, this accounts for every member of $\operatorname{tc}(\{f\})$. Hence $f\in N$. [F1, F2, F4, step 3.1, step 4.1]

6.1 The selected codes, explicit decoding and hereditary check prove that every ambient function $f:\omega\to N$ belongs to $N$. The argument uses only the defining class $HOD(S)$ in the ambient ZFC universe, not any homogeneity or regularity assertion about the Shelah forcing. [step 2.1, step 5.1] ∎
