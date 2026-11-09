---
title: Explicit eventual-stage thresholds in every fixed homotopy degree
status: published
research_item: lem-author-0cc80c1b5792-threshold
dependency_level: 14
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-0cc80c1b5792-actual-bound](item-lem-author-0cc80c1b5792-actual-bound)


## Statement
Assume the Axiom of Choice. Let $X$ be as above with bound $B=B(X)$. For every fixed $q\in\mathbb Z$ and every integer anchor $t$, put
$$\ell_0(q,t)=\max(0,B+q+1-t).$$
Then $\pi_qF^{t+\ell}_{\mathrm{mot}}K(X)=0$ for all integers $\ell\geq\ell_0(q,t)$. In particular the claim holds with $t=\dim X$ and every fixed $q\leq0$ needed in the article.

## Facts & Assumptions
**Given:** The Axiom of Choice and fixed $q,t$, the actual stage bound and $\ell\geq\ell_0(q,t)$.

**Goal:** Exhibit a threshold for the actual stage group rather than assume that high-stage images detect it.

[F1] [lem-author-0cc80c1b5792-actual-bound](item-lem-author-0cc80c1b5792-actual-bound) gives vanishing if $q<r-B$.

[F2] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the inherited Choice premise of [F1] when its bound for the selected actual filtration is invoked. Taking a maximum of two integers adds no choice requirement.

## Proof
1.1 By the definition of the maximum, $t+\ell\geq B+q+1$. Set $r=t+\ell$. Then $r-B\geq q+1>q$. [F1, given, algebra]

2.1 Under the inherited Choice premise in [F2], apply [F1] to this strict inequality. It gives the asserted zero stage group for every such $\ell$. The choice of $q$ was arbitrary, so the same argument covers in particular the required fixed nonpositive degrees; the threshold is allowed to depend on $q$. [F1, F2, step 1.1] ∎
