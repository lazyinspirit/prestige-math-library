---
id: ex-rademacher-series-convergence-threshold
title: "Rademacher-series threshold"
kind: example
status: published
origin: pipeline
deps: ["thm-kolmogorov-three-series-theorem", "cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event", "cor-countable-independent-copies-exist", "thm-p-series-real-exponents"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 2.5.7, p. 85"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "For alpha>0 eventually truncation leaves the terms unchanged, with zero means and variances n^-2alpha. For alpha<=0 the terms fail to tend to zero. Three-series plus the existing zero-one result gives a.s. divergence."
---

## Example

Assume countable choice and dependent choice, and let $(\epsilon_n)_{n\ge1}$ be independent fair signs taking exactly the values $-1$ and $1$. For real $\alpha$, the series $\sum_{n\ge1}\epsilon_n n^{-\alpha}$ converges almost surely exactly when $\alpha>1/2$; if $\alpha\le1/2$ it diverges almost surely. Its absolute series converges exactly when $\alpha>1$.

## Facts & Assumptions

[F1] [[thm-kolmogorov-three-series-theorem]]: Let $(X_n)_{n\ge1}$ be independent real random variables and fix $A>0$. Put $Y_n=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_nX_n$ converges almost surely if and only if all three conditions hold: $\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\mathbb EY_n\text{ converges in }\mathbb R,\qquad \sum_n\operatorname{Var}(Y_n)<\infty.$ The conditions hold for some $A>0$ if and only if they hold for every $A>0$. No moment assumption is imposed on the untruncated variables.

[F2] [[cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event]]: Let $(X_n)_{n\in\mathbb N}$ be an independent sequence of real random variables. Then the event $\left\{\sum_{n=0}^\infty X_n\text{ converges}\right\}$ has probability $0$ or $1$.

[F3] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

[F4] [[thm-p-series-real-exponents]]: For every real $p$, $\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$

## Verification

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice, construct IID copies of the probability law on the two-point space $\{-1,1\}$, each point having mass $1/2$. For $\alpha>0$, the summands have magnitude $n^{-\alpha}\le1$. At cutoff $A=1$, the tail probabilities and truncated means are zero, and the truncated variances are $n^{-2\alpha}$. [F3, given, algebra]

2.1 The three-series theorem and the real p-series test therefore give almost-sure convergence for $\alpha>1/2$ and rule out probability-one convergence for $0<\alpha\le1/2$. In the latter range the convergence event is a tail event of an independent sequence, so its zero-one law forces its probability to be zero. In particular the boundary $\alpha=1/2$ has the divergent harmonic variance series. [F1, F4, F2, step 1.1]

3.1 If $\alpha\le0$, the magnitudes $n^{-\alpha}\ge1$ do not tend to zero at any point, so the partial sums cannot converge. Finally at every point the absolute series equals $\sum_n n^{-\alpha}$, which converges exactly for $\alpha>1$ by the p-series test. This also checks the absolute boundary $\alpha=1$ and the term-test boundary $\alpha=0$. [F4, step 1.1, algebra] ∎
