---
id: thm-basic-algebra-and-order-properties-of-conditional-expectation
kind: theorem
title: "Basic algebra and order properties of conditional expectation"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. For real $X,Y\in L^1(P)$ and $a,b\in\mathbb R$, $E[aX+bY\mid\mathcal G]=aE[X\mid\mathcal G]+bE[Y\mid\mathcal G]$. Conditional expectation is positive, preserves order and constants, satisfies $E(E[X\mid\mathcal G])=EX$, and $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$ almost surely. Also $X<Y$ almost surely implies $E[X\mid\mathcal G]<E[Y\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC, a probability space, a sub-sigma-algebra G, real integrable X,Y and real scalars a,b; for the strict clause assume X<Y almost surely.

[F1] Under AC the conditional class exists and each version has the defining event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions with the same defining data agree almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Integrability and integrals are preserved by finite linear combinations. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F4] A nonnegative measurable function has zero integral exactly when it is zero almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F5] Linear combinations, absolute values and discrepancy sets are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Choose versions $U=E[X\mid\mathcal G]$ and $V=E[Y\mid\mathcal G]$. The function $aU+bV$ is $\mathcal G$-measurable and integrable. For every $A\in\mathcal G$, $\int_A(aU+bV)=a\int_A X+b\int_A Y=\int_A(aX+bY)$. It is a version of the left side, so uniqueness proves linearity. [F1, F2, F3, F5]

2.1 If $X\ge0$ almost surely, on $A=\{U<0\}\in\mathcal G$ we have $0\le\int_A X=\int_A U\le0$. Thus $\int_A(-U)=0$, and [F4] gives $P(A)=0$. For $X\le Y$ apply this to $Y-X$ and use linearity; this proves order preservation. [step 1.1, F1, F4, F5]

3.1 The constant function $c$ is integrable, $\mathcal G$-measurable, and has its own event integrals, so $E[c\mid\mathcal G]=c$ by uniqueness. Testing $A=\Omega$ in [F1] gives $EU=EX$. Finally $-|X|\le X\le|X|$ and steps 1.1–2.1 give $-E[|X|\mid\mathcal G]\le U\le E[|X|\mid\mathcal G]$. Hence $|U|\le E[|X|\mid\mathcal G]$ and $E|U|\le E|X|$. [step 1.1, step 2.1, F1, F2]

4.1 If $W=Y-X>0$ almost surely, let $T=E[W\mid\mathcal G]\ge0$ almost surely by step 2.1. The event $A=\{T=0\}$ has $\int_A W=\int_A T=0$, so $W\mathbf1_A=0$ almost surely by [F4]. Since $W>0$ off a null set, this forces $P(A)=0$. Together with $P(T<0)=0$ this gives $T>0$ almost surely; linearity identifies $T=V-U$. [step 1.1, step 2.1, F1, F4] ∎

## Source notes

Durrett Lemma 4.1.1 and Theorem 4.1.9(a)–(b), printed pp.206,210–211; van der Vaart Lemma 1.9(i),(iii),(iv), printed p.4. The strict almost-sure statement is derived by the zero-event argument, not attributed to a counterexample.
