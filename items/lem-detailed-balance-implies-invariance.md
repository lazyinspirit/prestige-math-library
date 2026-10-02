---
id: lem-detailed-balance-implies-invariance
kind: lemma
title: "Detailed balance implies invariance"
status: published
origin: pipeline
landmark: false
deps:
  - def-reversible-measure-and-detailed-balance
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5, stationary measures and reversibility"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §1.4 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Statement

Let $p$ be a transition matrix on a countable state space $E$
([[def-transition-matrix-and-n-step-transition-probabilities]]), and let
$\mu:E\to[0,+\infty)$ be a state measure with $\mu(x)<+\infty$ for every
$x\in E$ that satisfies detailed balance for $p$
([[def-reversible-measure-and-detailed-balance]]). Write

$$(\mu p)(y):=\sum_{x\in E}\mu(x)\,p(x,y)\qquad(y\in E),$$

the measure-matrix product, a sum of nonnegative terms in $[0,+\infty]$. Then

$$\mu p=\mu,\qquad\text{that is}\qquad(\mu p)(y)=\mu(y)\ \text{ for every }y\in E .$$

In particular the conclusion holds for a reversible state measure of infinite
total mass $\sum_{x\in E}\mu(x)=+\infty$; and if the mass is one, $\mu$ is an
invariant (equivalently stationary) probability distribution for $p$ in the
sense of [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

## Facts & Assumptions

**Given:** A countable state space $E$, a transition matrix $p$ on $E$, and a state measure $\mu$ satisfying detailed balance for $p$.

[F1] The transition entries satisfy $p(x,y)\ge0$ and $\sum_{y\in E}p(x,y)=1$ for every $x\in E$; the matrix is the countable form of a probability kernel and no choice principle enters its definition. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] A state measure is a function $\mu:E\to[0,+\infty)$ with $\mu(x)<+\infty$ for every $x$, and it satisfies detailed balance for $p$ when $\mu(x)p(x,y)=\mu(y)p(y,x)$ for all $x,y\in E$; every product $\mu(x)p(x,y)$ is then a well-defined element of $[0,+\infty)$ and no subtraction of infinite quantities occurs. ([[def-reversible-measure-and-detailed-balance]])

[F3] On a countable state space, a probability measure $\pi$ is invariant for $p$ exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

## Proof

**Given:** A countable state space $E$, a transition matrix $p$ on $E$, and a state measure $\mu$ satisfying detailed balance for $p$.

**Proof technique:** direct termwise comparison of two nonnegative series, with the finite row-sum normalization.

1.1 Fix $y\in E$. Every term $\mu(x)p(x,y)$ of the series defining $(\mu p)(y)$ is a product of a finite nonnegative number and an element of $[0,1]$, hence lies in $[0,+\infty)$; so $(\mu p)(y)\in[0,+\infty]$ is a well-defined nonnegative extended series. [F1, F2, given]

1.2 For each fixed $x\in E$ the detailed balance identity gives $\mu(x)p(x,y)=\mu(y)p(y,x)$; since the two families of nonnegative terms indexed by $x$ are equal term by term, the series they generate have the same value in $[0,+\infty]$, that is $\sum_{x\in E}\mu(x)p(x,y)=\sum_{x\in E}\mu(y)p(y,x)$. No rearrangement or interchange of summation is used. [F2, given]

2.1 The common factor $\mu(y)$ is a fixed element of $[0,+\infty)$, so it may be factored out of the nonnegative series: $\sum_{x\in E}\mu(y)p(y,x)=\mu(y)\sum_{x\in E}p(y,x)=\mu(y)\cdot1=\mu(y)$, where the row sum is one by [F1]. This step is valid also when $\mu(y)=0$, in which case both sides vanish. [F1, step 1.2, given]

3.1 Combining steps 1.1–2.1, $(\mu p)(y)=\mu(y)$ for the arbitrary $y\in E$, hence $\mu p=\mu$. If additionally $\sum_{x\in E}\mu(x)=1$, then [F3] identifies this identity as invariance of the probability distribution $\mu$. All quantities appearing are nonnegative, no difference of infinities is formed, and neither step selects an object, so the argument uses no choice principle and does not require $\mu$ to have finite total mass or to be nonzero. [F2, F3, step 1.2, step 2.1, given] ∎
