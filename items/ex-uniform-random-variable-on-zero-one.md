---
id: ex-uniform-random-variable-on-zero-one
kind: example
title: "The uniform random variable on [0,1]"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-probability-measure, def-cumulative-distribution-function-of-a-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-layer-cake-formulas-for-random-variables]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.1.5"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Example

Let $\Omega=[0,1]$ with its Borel sets and uniform probability measure, and let
$X(\omega)=\omega$. Then
$$F_X(x)=\begin{cases} 0,&x<0,\\ x,&0\le x\le1,\\ 1,&x\ge1, \end{cases}$$
and
$$\mathbb E[X]=\frac12,\qquad \mathbb E[X^2]=\frac13,\qquad \int_0^\infty \mathbb P(X>t)\,dt=\frac12.$$

## Facts & Assumptions

**Given:** The identity random variable $X(\omega)=\omega$ on $[0,1]$ with
uniform probability.

[L1] The cumulative distribution function is $F_X(x)=\mathbb P(X\le x)$
([[def-cumulative-distribution-function-of-a-random-variable]]).

[L2] Expectation is integration against the probability measure, and for a
nonnegative random variable the layer-cake formula computes it from the tail
probabilities
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[cor-layer-cake-formulas-for-random-variables]]).

## Verification

**Proof technique:** direct.

1.1 By direct interval computation, $$\mathbb P(X\le x)=0\quad(x<0),\qquad \mathbb P(X\le x)=x\quad(0\le x\le1),\qquad \mathbb P(X\le x)=1\quad(x\ge1),$$ which is exactly the displayed $F_X$. [L1, given]

1.2 Direct integration gives $$\mathbb E[X]=\int_0^1 x\,dx=\frac12,\qquad \mathbb E[X^2]=\int_0^1 x^2\,dx=\frac13.$$ [L2, algebra]

2.1 The tail is $\mathbb P(X>t)=1-t$ for $0\le t\le1$ and $0$ for $t>1$, so $$\int_0^\infty \mathbb P(X>t)\,dt=\int_0^1(1-t)\,dt=\frac12=\mathbb E[X],$$ in agreement with [L2]. [step 1.2, L2, algebra]

3.1 Steps 1.1, 1.2, and 2.1 verify the CDF, moments, and tail integral. [step 1.1, step 1.2, step 2.1] ∎
