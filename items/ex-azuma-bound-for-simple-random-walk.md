---
id: ex-azuma-bound-for-simple-random-walk
kind: example
title: Azuma bound for simple random walk
status: draft
origin: pipeline
deps: [cor-symmetric-bounded-increment-azuma-bound, lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Roch, Notes 20: Azuma's Inequality, Theorem 20.8, pp. 3–4", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf"}
---

## Statement

Assume AC. For a simple symmetric random walk $S_n$ with $S_0=0$ and independent increments taking values $-1$ and $1$,
$$\mathbb P(|S_n|\ge t)\le2e^{-t^2/(2n)}$$
for every integer $n\ge1$ and every $t>0$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditioning-a-known-variable-and-an-independent-variable]] verifies the martingale property from independent centered increments.

[F2] [[cor-symmetric-bounded-increment-azuma-bound]] supplies the two-sided concentration estimate.

[F3] [[def-axiom-of-choice]] is inherited from conditional expectation and Azuma.

## Proof

1.1 Let $\xi_k=S_k-S_{k-1}\in\{-1,1\}$ and use the natural filtration. Symmetry gives $\mathbb E\xi_k=0$, and independence from the past plus F1 yields $\mathbb E[S_k\mid\mathcal F_{k-1}]=S_{k-1}$. Thus $S$ is a martingale and $|S_k-S_{k-1}|=1$. [F1]

2.1 For the stated $n\ge1$, apply F2 with $c_k=1$. Since $\sum_{k=1}^n c_k^2=n>0$, it gives exactly $2e^{-t^2/(2n)}$. At $t=x\sqrt n$ the exponent is $-x^2/2$; the prefactor and lack of lattice correction show this is a robust bound, not the exact binomial tail. AC is used only through F3. [F2, F3, step 1.1] ∎
