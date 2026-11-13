---
title: Rational inverse-sine brackets on the principal branch
status: draft
research_item: lem-author-2e2d9953c21a-inverse-brackets
dependency_level: 1
---

## Prerequisites

- [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures)
- [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)


## Statement

Let $N\ge0$ be an integer and let $z,a,b$ be rational with $0\le z\le1$ and $0\le a\le b\le\pi/2$. For $x\in\{a,b\}$ put $q_N(x)=x^2/((2N+4)(2N+5))$ and assume $q_N(x)<1$. Let $S_N,R_N$ be the finite sums and tails in the sine-enclosure lemma. If $S_N(a)+R_N(a)\le z$ and $S_N(b)-R_N(b)\ge z$, then $a\le\arcsin z\le b$. A rational search may certify its final endpoints using these two inequalities under the stated enclosure conditions; it need not assign a value when a trial enclosure straddles $z$.

## Facts & Assumptions

**Given:** The integer $N$, rational inputs, enclosure conditions and endpoint inequalities in the Statement.

[F1] [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) defines $\arcsin$ as the inverse of strictly increasing sine on $[-\pi/2,\pi/2]$.

[F2] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) gives $S_N(x)-R_N(x)\le\sin x\le S_N(x)+R_N(x)$ for rational $x$, an integer $N\ge0$ and $q_N(x)<1$.

## Proof

**Given:** The integer $N$, rational inputs, enclosure conditions and endpoint inequalities in the Statement.

**Goal:** Prove the inverse-sine bracketing rule.

1.1 The integer $N\ge0$, rational endpoints $a,b$ and inequalities $q_N(a)<1$, $q_N(b)<1$ meet the hypotheses of [F2] at both endpoints. Its enclosures and the endpoint tests give $\sin a\le S_N(a)+R_N(a)\le z\le S_N(b)-R_N(b)\le\sin b$. By [F1], $\sin(\arcsin z)=z$, and all three arguments $a,\arcsin z,b$ lie in $[-\pi/2,\pi/2]$. [given, F1, F2]

2.1 Applying strict monotonicity to the two comparisons yields $a\le\arcsin z\le b$. In particular, a search whose final endpoints pass these exact rational tests yields a certificate regardless of how its trials were selected; an unclassified trial is not evidence. [step 1.1, F1] ∎
