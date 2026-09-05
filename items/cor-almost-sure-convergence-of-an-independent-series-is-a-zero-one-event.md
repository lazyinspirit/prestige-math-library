---
id: cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event
kind: corollary
title: "Almost-sure convergence of an independent series is a zero-one event"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tail-sigma-algebra-of-a-sequence, thm-kolmogorov-zero-one-law, thm-arithmetic-and-lattice-operations-preserve-measurability]
proof_strategy: direct
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, Theorem 3.15"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(X_n)_{n\in\mathbb N}$ be an independent sequence of real random
variables. Then the event

$$\left\{\sum_{n=0}^\infty X_n\text{ converges}\right\}$$

has probability $0$ or $1$.

## Facts & Assumptions

**Given:** An independent sequence of real random variables $(X_n)_{n\in\mathbb N}$.

[L1] The tail sigma-algebra consists of the events determined by all but finitely many coordinates. ([[def-tail-sigma-algebra-of-a-sequence]])

[L2] Finite sums and absolute values of measurable real-valued functions are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L3] Every tail event of an independent sequence has probability $0$ or $1$. ([[thm-kolmogorov-zero-one-law]])

## Proof

**Proof technique:** direct.

1.1 Let $E:=\{\sum_{n=0}^\infty X_n\text{ converges}\}$ and fix $m\in\mathbb N$. The series $\sum_{n=0}^\infty X_n$ converges if and only if the tail series $\sum_{n=m}^\infty X_n$ converges, because removing finitely many initial terms changes every partial sum by a fixed finite constant. By the Cauchy criterion, $$E=\bigcap_{r=1}^\infty\bigcup_{N=m}^\infty\bigcap_{q\ge p\ge N}\left\{\left|\sum_{n=p}^q X_n\right|\le\frac1r\right\}.$$ For $q\ge p\ge N\ge m$, the partial sum $\sum_{n=p}^q X_n$ is measurable with respect to $\sigma(X_n:n\ge m)$ by repeated use of [L2], so each displayed event lies in $\sigma(X_n:n\ge m)$. Therefore $E\in\sigma(X_n:n\ge m)$ for every $m$. [given, L1, L2]

2.1 Step 1.1 shows that $E$ lies in the tail sigma-algebra, so [L3] gives $\mathbb P(E)\in\{0,1\}$. [step 1.1, L3] ∎
