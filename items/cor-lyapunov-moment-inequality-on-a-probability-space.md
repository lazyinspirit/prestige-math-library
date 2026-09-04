---
id: cor-lyapunov-moment-inequality-on-a-probability-space
kind: corollary
title: "Lyapunov's moment inequality on a probability space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-probability-measure, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Theorem 4.4.2 discussion"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let
$1\le p\le q\le\infty$.

- If $q<\infty$ and $X\in L^q(\mathbb P)$, then $X\in L^p(\mathbb P)$ and
  $$\|X\|_p\le\|X\|_q.$$
- If $q=\infty$ and $X\in L^\infty(\mathbb P)$, then $X\in L^p(\mathbb P)$ and
  $$\|X\|_p\le\|X\|_\infty.$$

## Facts & Assumptions

**Given:** A probability space and exponents $1\le p\le q\le\infty$.

[L1] A probability measure has total mass $1$ ([[def-probability-measure]]).

[L2] On a finite measure space, $L^q$ includes into $L^p$ with factor
$\mu(\Omega)^{1/p-1/q}$ for finite $q$, and $L^\infty$ includes into $L^p$ with
factor $\mu(\Omega)^{1/p}$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

## Proof

**Proof technique:** direct.

1.1 If $p=q$, the inequality is equality. If $p<q<\infty$, apply [L2] with $\mu=\mathbb P$ and use [L1] to collapse the factor $\mathbb P(\Omega)^{1/p-1/q}$ to $1$. [L1, L2]

1.2 If $q=\infty$, the same specialization of [L2] and [L1] gives $$\|X\|_p\le\mathbb P(\Omega)^{1/p}\|X\|_\infty=\|X\|_\infty.$$ [L1, L2]

2.1 Steps 1.1 and 1.2 are exactly the finite-$q$ and $q=\infty$ cases of Lyapunov's moment inequality on a probability space. [step 1.1, step 1.2] ∎
