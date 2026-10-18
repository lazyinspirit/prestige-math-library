---
id: lem-green-hall-coproduct-is-coassociative
kind: lemma
title: "The Green Hall coproduct is coassociative"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-green-hall-completion-and-coproduct
  - lem-green-hall-coproduct-coefficients-are-finite
  - lem-hall-euler-form-is-additive
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.4, PDF pp. 9–10: Green coassociativity reduces to the associativity/flag identity."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§1: Hall flags and the coproduct normalization."
verification:
  precheck: pending
---

## Statement

The Green coproduct $\Delta'$ of
[[def-green-hall-completion-and-coproduct]] is coassociative in the
coefficientwise completion, with counit $\epsilon$ as defined there.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and an object $R$.

[F1] Every coefficient of $\Delta'([R])$ is finite
([[lem-green-hall-coproduct-coefficients-are-finite]]).

[F2] Endpoint-labelled sequence counts satisfy
$P^L_{A,B}=a_Aa_Bg^L_{A,B}$
([[lem-hall-sequence-count-equals-aut-weighted-subobject-count]]).

[F3] The Euler form is additive on $K_0$
([[lem-hall-euler-form-is-additive]]).

[F4] The Green coproduct and counit coefficients are the formulas in
[[def-green-hall-completion-and-coproduct]].

## Proof



**Proof technique:** direct.

1.1 Fix basis objects $A,B,C,R$. The coefficient of $[A]\otimes[B]\otimes[C]$ in $(\Delta'\otimes\mathrm{id})\Delta'([R])$ is $\frac{\nu^{\langle A+B,C\rangle+\langle A,B\rangle}}{a_R} \sum_{[L]}\frac{P^R_{L,C}P^L_{A,B}}{a_L}.$ Only finitely many $L$ occur: each is a middle term of an extension of $A$ by $B$, and $\operatorname{YExt}^1(A,B)$ is finite. [F1, F4, given]

2.1 Using [F2], each summand in the flag count becomes $a_Aa_Ba_C g^R_{L,C}g^L_{A,B}$. It counts a flag $C\subseteq U\subseteq R$ with $U/C\cong B$ and $R/U\cong A$, weighted by the same endpoint automorphism factor $a_Aa_Ba_C$. [F2, step 1.1, construct]

3.1 The coefficient of $[A]\otimes[B]\otimes[C]$ in $(\mathrm{id}\otimes\Delta')\Delta'([R])$ is $\frac{\nu^{\langle A,B+C\rangle+\langle B,C\rangle}}{a_R} \sum_{[T]}\frac{P^R_{A,T}P^T_{B,C}}{a_T}.$ Again the sum is finite by finiteness of $\operatorname{YExt}^1(B,C)$. Using [F2], it counts flags $C\subseteq T\subseteq R$ with $T/C\cong B$ and $R/T\cong A$, with the same weight $a_Aa_Ba_C$. The two flag sets described in step 2.1 and in this calculation are identical under $U=T$. [F1, F2, step 2.1, construct]

4.1 By bilinearity [F3], $\langle A+B,C\rangle+\langle A,B\rangle= \langle A,B+C\rangle+\langle B,C\rangle$. Hence the two coefficients are equal. Every triple coefficient is therefore equal, proving coassociativity in the coefficientwise completion. [F3, step 1.1, step 3.1, algebra]

5.1 In $\Delta'([R])$, the coefficient of $[R]\otimes[0]$ and that of $[0]\otimes[R]$ are both one: the exact sequences with zero endpoint are uniquely determined up to the $a_R$ endpoint labellings, which cancel the denominator $a_R$. Applying $\epsilon$ to either factor therefore returns $[R]$, and all other terms are killed. Linearity proves the two counit identities. [F4, F1, algebra] ∎

