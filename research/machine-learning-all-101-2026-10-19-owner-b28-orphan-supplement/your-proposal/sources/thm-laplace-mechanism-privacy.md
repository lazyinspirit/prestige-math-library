---
id: thm-laplace-mechanism-privacy
kind: theorem
title: Laplace mechanism privacy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-laplace-mechanism
  - def-global-l1-sensitivity
  - def-differential-privacy-and-adjacency
  - lem-laplace-product-density
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is inherited from the real Laplace mechanism; the density-ratio privacy proof is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

For every finite-dimensional query $f:\mathcal D\to\mathbb R^d$ with $d\ge1$ and finite global $L^1$ sensitivity, and every $\varepsilon>0$, the Laplace mechanism is $(\varepsilon,0)$-differentially private under add/remove adjacency.

## Statement references

[[alg-laplace-mechanism|The finite-dimensional Laplace mechanism]]

[[def-global-l1-sensitivity|The global L1 sensitivity convention]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Theorem 3.6, printed p. 32.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 7–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** $d\ge1$, a finite-dimensional query $f$, finite sensitivity $\Delta_1 f$, $\varepsilon>0$, neighboring databases $D\sim D'$, and a Borel output event $A\subseteq\mathbb R^d$.

[A1] [[def-countable-choice|Countable Choice]] is inherited through the real Laplace probability law; no stronger choice principle is used.

[F1] [[def-global-l1-sensitivity|Sensitivity]] is the maximum of $\|f(D)-f(D')\|_1$, where $\|x\|_1=\sum_{j=1}^d|x_j|$.

[F2] [[alg-laplace-mechanism|Laplace mechanism]] uses scale $b=\Delta_1f/\varepsilon$ when $\Delta_1f>0$, and releases $f(D)$ deterministically when sensitivity is zero.

[F3] [[lem-laplace-product-density|Product density]] is $(2b)^{-d}\exp(-\|z\|_1/b)$ for $b>0$.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions|Translation change of variables]] preserves Lebesgue integrals because its Jacobian has absolute value one.

[F5] [[def-differential-privacy-and-adjacency|Differential privacy]] is the event inequality for every ordered neighboring pair and every output event.

[F6] [[thm-exponential-addition-formula|The exponential addition formula]], [[thm-exponential-is-strictly-increasing|strict monotonicity]], and [[cor-exponential-reciprocal-and-positivity|positivity and the reciprocal identity]] give $\exp(u+v)=\exp(u)\exp(v)$, make $\exp$ increasing, and give $\exp(-u)=1/\exp(u)>0$ for real $u,v$.

## Proof

1.1 Suppose $\Delta_1f>0$ and put $b=\Delta_1f/\varepsilon$. By [F2]–[F4], the output law at database $D$ has Lebesgue density $p_D(x)=(2b)^{-d}\exp(-\|x-f(D)\|_1/b)$, since [F4] translates the product noise density from [F3] by $f(D)$. [A1, F2, F3, F4, given, construct]

2.1 For every $x\in\mathbb R^d$, coordinatewise triangle inequalities give $\|x-f(D')\|_1-\|x-f(D)\|_1\le\|f(D)-f(D')\|_1\le\Delta_1f$. The densities in [F3] are positive, and [F6] gives $\exp(-u)/\exp(-v)=\exp(v-u)$ for real $u,v$. Therefore $p_D(x)/p_{D'}(x)=\exp((\|x-f(D')\|_1-\|x-f(D)\|_1)/b)\le\exp(\Delta_1f/b)=e^\varepsilon$, where the inequality uses monotonicity from [F6]. Interchanging $D,D'$ proves the reverse pointwise ratio bound; integrating both bounds over $A$ yields the two event inequalities. [F1, F6, step 1.1, given, algebra]

3.1 If $\Delta_1f=0$, [F1] forces $\|f(D)-f(D')\|_1=0$ for every neighboring pair, hence $f(D)=f(D')$. The deterministic output laws are identical, so both event inequalities hold with $\delta=0$ (and $\varepsilon\ge0$). Combining this case with step 2.1 and applying [F5] proves the result. [F1, F2, F5, step 2.1, algebra] ∎
