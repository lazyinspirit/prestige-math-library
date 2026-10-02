---
id: def-reversible-measure-and-detailed-balance
kind: definition
title: "Reversible measure and detailed balance"
status: draft
origin: pipeline
landmark: false
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition, §1.4 and §21.3"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Definition

Let $p$ be the transition matrix of a countable state space $E$
([[def-transition-matrix-and-n-step-transition-probabilities]]), so that
$p(x,y)\ge0$ and $\sum_{y\in E}p(x,y)=1$ for every $x\in E$. A **state measure**
is a function $\mu:E\to[0,+\infty)$ with $\mu(x)<+\infty$ for every $x$; it is
**nonzero** when $\mu(x)>0$ for at least one $x$. Such a measure $\mu$ is
**reversible** for $p$, and $\mu$ satisfies **detailed balance** for $p$, when

$$\mu(x)\,p(x,y)=\mu(y)\,p(y,x)\qquad\text{for all }x,y\in E .$$

If in addition $\sum_{x\in E}\mu(x)=1$, then $\mu$ is a **reversible
probability distribution** for $p$.

Because each value $\mu(x)$ is finite and each transition entry lies in $[0,1]$,
every product $\mu(x)p(x,y)$ is a well-defined element of $[0,+\infty)$; the
identity is between nonnegative numbers and involves no subtraction of infinite
quantities. Every entry $p(x,x)$ satisfies the identity trivially, including
when $\mu(x)=0$. A state with $\mu(x)=0$ may have $p(x,\cdot)$ arbitrary; the
identity then forces $\mu(y)p(y,x)=0$ for all $y$, so no flow from the positive
support of $\mu$ enters $x$. The definition imposes no irreducibility,
aperiodicity or normalization hypothesis, and a nonzero reversible measure may
have infinite total mass; normalization to total mass one is stated separately.
The reversal interpretation of detailed balance is given by
[[thm-time-reversal-of-a-stationary-markov-chain]], and the lemma
[[lem-detailed-balance-implies-invariance]] shows that a reversible measure is
invariant even when its total mass is infinite.
