---
id: def-almost-sure-convergence-of-a-random-series
title: "Almost-sure convergence of a random series"
kind: definition
status: published
origin: pipeline
deps: ["def-partial-sums-and-sample-means", "def-almost-sure-convergence-of-random-variables", "thm-series-cauchy-criterion", "thm-arithmetic-and-lattice-operations-preserve-measurability", "cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 2.5, Example 2.5.2 p. 81 and series convention p. 84"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Section 3.4 opening, p. 61"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
---

## Definition

For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in [[def-almost-sure-convergence-of-random-variables]]. With $S_0=0$ from [[def-partial-sums-and-sample-means]], its convergence event is
$$C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$$
This is exactly the real Cauchy condition, with the indexing of [[thm-series-cauchy-criterion]] shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, [[cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event]] gives $\mathbb P(C)\in\{0,1\}$.

Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] and [[thm-arithmetic-and-lattice-operations-preserve-measurability]] make $S$ measurable.

For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.
