---
id: cex-a-distribution-function-need-not-have-a-density
kind: counterexample
title: "A distribution function need not have a density"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-cumulative-distribution-function-of-a-random-variable, def-atom-and-continuity-point-of-a-law]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 2.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement refuted

A distribution function need not arise from a Lebesgue density.

## Facts & Assumptions

**Given:** A Bernoulli random variable $X$ with $\mathbb P(X=1)=p$ and
$\mathbb P(X=0)=1-p$, where $0<p<1$.

[L1] The cumulative distribution function is $F_X(x)=\mathbb P(X\le x)$
([[def-cumulative-distribution-function-of-a-random-variable]]).

[L2] Atoms of a law are positive point masses ([[def-atom-and-continuity-point-of-a-law]]).

## Counterexample

**Proof technique:** direct.

1.1 The CDF of $X$ is $$F_X(x)=\begin{cases} 0,&x<0,\\ 1-p,&0\le x<1,\\ 1,&x\ge1. \end{cases}$$ So the law has atoms at $0$ and $1$ by [L2]. [L1, L2, given]

2.1 If this law were given by a Lebesgue density $f$, then every singleton would have probability $$\int_{\{a\}}f(x)\,dx=0.$$ In particular $\mathbb P(X=0)=0$, contradicting $\mathbb P(X=0)=1-p>0$. [step 1.1, given, algebra]

3.1 Therefore this distribution function has no Lebesgue density. [step 2.1] ∎
