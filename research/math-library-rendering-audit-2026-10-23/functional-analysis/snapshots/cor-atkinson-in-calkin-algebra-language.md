---
id: cor-atkinson-in-calkin-algebra-language
kind: corollary
title: Atkinson in Calkin algebra language
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-calkin-algebra, thm-atkinson, def-countable-choice, def-axiom-of-choice, def-compact-linear-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1 (quotient algebra language; the Fredholm statement is the library's thm-atkinson, restated algebraically here)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be an
infinite-dimensional complex Banach space and let $T \in \mathcal B(X)$. Then
the following are equivalent:

1. $T$ is Fredholm;
2. the coset $T + \mathcal K(X)$ is invertible in the Calkin algebra
   $\mathcal C(X) = \mathcal B(X)/\mathcal K(X)$
   ([[def-calkin-algebra]]);
3. there is a bounded $S \in \mathcal B(X)$ with $ST - I_X$ and $TS - I_X$ both
   compact ([[def-compact-linear-operator]]) — a bounded two-sided parametrix
   modulo compact operators.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, an infinite-dimensional complex Banach space $X$, a bounded operator $T \in \mathcal B(X)$, and the Calkin algebra $\mathcal C(X)$ with unit $1 = I_X + \mathcal K(X)$.

[L1] $T$ is Fredholm if and only if there is a bounded linear $S$ with $ST - I_X$ and $TS - I_X$ compact ([[thm-atkinson]]).

[L2] In the quotient algebra $\mathcal C(X)$ one has $T + \mathcal K$ invertible if and only if there is $S + \mathcal K$ with $(T+\mathcal K)(S+\mathcal K) = 1$ and $(S+\mathcal K)(T+\mathcal K) = 1$; these equations are exactly $TS - I_X \in \mathcal K(X)$ and $ST - I_X \in \mathcal K(X)$ ([[def-calkin-algebra]]).

[L3] The Calkin algebra is built under Countable Choice, which is available here because the standing hypothesis is the stronger Axiom of Choice ([[def-axiom-of-choice]]), whose standard consequences include Countable Choice ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Equivalence of 2 and 3: the equation $(T+\mathcal K)(S+\mathcal K) = I_X + \mathcal K$ of [L2] holds exactly when $TS - I_X \in \mathcal K(X)$, and the other product equation holds exactly when $ST - I_X \in \mathcal K(X)$; so $T+\mathcal K$ is invertible precisely when $T$ admits a bounded two-sided parametrix modulo compact operators. [L2, L3]

2.1 Equivalence of 1 and 3 is [L1]; combining it with [step 1.1] gives that 1, 2 and 3 are equivalent. [step 1.1, L1] ∎

## Remarks

- **No new Fredholm theory is hidden here.** The corollary is a restatement of the Atkinson theorem in the quotient algebra: the only content beyond [[thm-atkinson]] is that quotient invertibility and the existence of a two-sided parametrix modulo compact operators are the same condition, which is the definition of the quotient multiplication.

- **Both products are required.** One-sided quotient invertibility would only give one of the two compactness conditions; the theorem and the definition both ask for two-sided invertibility, and the remark here records that the order of the products is preserved: $ST$ and $TS$ appear in the two conditions separately.
