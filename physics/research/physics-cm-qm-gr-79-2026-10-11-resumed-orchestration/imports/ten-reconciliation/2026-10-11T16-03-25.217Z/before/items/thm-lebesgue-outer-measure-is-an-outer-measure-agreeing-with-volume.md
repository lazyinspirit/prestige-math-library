---
id: thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
kind: theorem
title: "Assuming countable choice, Lebesgue outer measure is an outer measure that restricts to elementary volume"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lebesgue-outer-measure, cor-premeasure-induced-set-function-is-an-outer-measure, lem-induced-outer-measure-agrees-with-premeasure, def-outer-measure, def-countable-choice, thm-box-volume-is-a-premeasure-on-the-elementary-algebra, def-elementary-set-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$. **Assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then Lebesgue outer measure $\lambda_n^*$
([[def-lebesgue-outer-measure]]) is an outer measure on $\mathbb{R}^n$
([[def-outer-measure]]): it vanishes at $\varnothing$, is monotone, and is
countably subadditive.

**The agreement clause is a theorem of ZF and needs no choice principle:**
$\lambda_n^*(A) = \mu_0(A)$ for every elementary set $A$
([[def-elementary-set-in-rn]]), where $\mu_0$ is elementary volume. In
particular $\lambda_n^*(B) = \operatorname{vol}(B)$ for every half-open box $B$,
and $\lambda_n^*(\varnothing) = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, the premeasure $\mu_0$ on the algebra $\mathcal{E}_n$, and its induced outer set function $\lambda_n^*$.

[L1] $\lambda_n^*$ is the outer set function induced by the premeasure $\mu_0$ on the algebra $\mathcal{E}_n$ of elementary sets ([[def-lebesgue-outer-measure]]).

[L2] Elementary volume $\mu_0$ is a sigma-finite premeasure on $\mathcal{E}_n$ ([[thm-box-volume-is-a-premeasure-on-the-elementary-algebra]]).

[F1] Assume the Axiom of Countable Choice. The outer set function induced by a premeasure is an outer measure ([[cor-premeasure-induced-set-function-is-an-outer-measure]]).

[F2] For every $A\in\mathcal A_0$, the outer measure induced by a premeasure satisfies $\mu^*(A)=\mu_0(A)$ ([[lem-induced-outer-measure-agrees-with-premeasure]]).

[F3] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive ([[def-outer-measure]]).

[F4] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Elementary volume is a premeasure on the algebra $\mathcal{E}_n$ of subsets of $\mathbb{R}^n$, and $\lambda_n^*$ is by definition the outer set function it induces, so both [F1] and [F2] apply to this pair. [L1, L2]

1.2 Under the Axiom of Countable Choice, an induced outer set function is an outer measure, which is the first assertion. [F1, F3, F4]

1.3 The identity $\lambda_n^*(A)=\mu_0(A)$ on the source algebra is [F2], whose statement carries no choice hypothesis, so the agreement clause holds in ZF alone; applied to a half-open box $B$, which is elementary, it gives $\lambda_n^*(B)=\mu_0(B)=\operatorname{vol}(B)$, and applied to $\varnothing$ it gives $\lambda_n^*(\varnothing)=0$. [F2, L2]

2.1 Steps 1.1, 1.2 and 1.3 together are the Statement. [step 1.1, step 1.2, step 1.3] ∎
