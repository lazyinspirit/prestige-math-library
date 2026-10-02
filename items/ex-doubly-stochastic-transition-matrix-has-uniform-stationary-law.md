---
id: ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law
kind: example
title: "Uniform law for a finite doubly stochastic matrix"
status: draft
origin: pipeline
landmark: false
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let $E=\{1,\ldots,n\}$ with $n\ge1$ and let $p$ be a transition matrix on $E$
([[def-transition-matrix-and-n-step-transition-probabilities]]) whose columns
also sum to one: $\sum_{x\in E}p(x,y)=1$ for every $y\in E$. Then the uniform
probability $\pi(x)=1/n$ is invariant for $p$
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]). No
irreducibility hypothesis is needed, and no uniqueness is asserted: the
identity matrix on $E$ is doubly stochastic with the same uniform invariant
law.

## Facts & Assumptions

**Given:** A nonempty finite set $E=\{1,\ldots,n\}$, a transition matrix $p$ on $E$ with $\sum_{y\in E}p(x,y)=1$ for all $x$, and with the extra hypothesis $\sum_{x\in E}p(x,y)=1$ for all $y$.

[F1] The entries satisfy $p(x,y)\ge0$, rows sum to one, and the one-step matrix entries are the kernel masses $p(x,y)=K(x,\{y\})$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] On a countable state space with transition matrix $p$, a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$; a finite set is countable. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

## Verification

**Proof technique:** direct computation of the measure-matrix product column by column.

1.1 Define $\pi(x):=1/n$ for $x\in E$. Since $n\ge1$, each entry satisfies $\pi(x)\ge0$ and $\sum_{x\in E}\pi(x)=n\cdot\frac1n=1$, so $\pi$ is a probability vector. [given, algebra]

1.2 For every $y\in E$, $(\pi p)(y)=\sum_{x\in E}\pi(x)p(x,y)=\frac1n\sum_{x\in E}p(x,y)=\frac1n\cdot1=\frac1n=\pi(y)$, where the second equality factors the finite constant $\frac1n$ out of a finite sum and the third is the column-sum hypothesis. [given, algebra]

2.1 By [F2] the identity of step 1.2 says exactly that $\pi$ is an invariant probability vector, i.e. a stationary distribution for $p$. [F1, F2, step 1.2, given]

3.1 Irreducibility is not used: the identity matrix on a finite $E$ with $n\ge2$ is doubly stochastic, has $\pi(x)=1/n$ invariant by step 1.2, and is reducible, so the hypothesis cannot be weakened to a uniqueness statement; the uniform law is one invariant law among possibly several, and for $n=1$ it is the only one since $p(1,1)=1$. [F1, F2, step 2.1, given] ∎
