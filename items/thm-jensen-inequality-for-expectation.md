---
id: thm-jensen-inequality-for-expectation
kind: theorem
title: "Jensen's inequality for expectation"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-jensens-integral-inequality]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Theorem 4.3.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $X$ be an
integrable real random variable, let $I\subseteq\mathbb R$ be an interval
containing $X(\omega)$ for almost every $\omega$, and let $\varphi:I\to\mathbb R$
be convex.

Assume additionally that $\varphi(X)$ is either integrable or nonnegative, so
its expectation is defined by
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. Then
$$\varphi(\mathbb E[X])\le\mathbb E[\varphi(X)].$$
In the nonnegative case the right-hand side may be $+\infty$.

## Facts & Assumptions

**Given:** A probability space, an integrable real random variable $X$, an
interval $I$ containing its almost-everywhere range, and a convex
$\varphi:I\to\mathbb R$ such that $\varphi(X)$ is integrable or nonnegative.

[L1] Expectation is integration against the underlying probability measure
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] Jensen's integral inequality holds for a probability measure whenever the
composed function is integrable
([[thm-jensens-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 If $\varphi(X)$ is nonnegative and $\mathbb E[\varphi(X)]=+\infty$, then the claimed inequality is automatic, because $\varphi(\mathbb E[X])$ is a real number while the right-hand side is $+\infty$. [given]

1.2 In every remaining case, $\varphi(X)$ is integrable: this is assumed directly, or follows from nonnegativity and finite expectation. Thus [L1] and [L2] applied to the probability measure $\mathbb P$ give $$\varphi(\mathbb E[X])=\varphi\left(\int X\,d\mathbb P\right)\le\int \varphi(X)\,d\mathbb P=\mathbb E[\varphi(X)].$$ [L1, L2]

2.1 Steps 1.1 and 1.2 cover the infinite and finite expectation cases. [step 1.1, step 1.2] ∎
