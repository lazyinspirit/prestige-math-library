---
id: cex-uncorrected-random-permutation-pvalue-can-be-zero
kind: counterexample
title: "The uncorrected Monte Carlo permutation fraction can be zero and invalid"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - alg-random-permutation-monte-carlo-pvalue
  - def-p-value
  - def-finite-probability-space-and-event
  - def-uniform-finite-probability-space
  - def-independent-random-elements
  - thm-random-permutation-monte-carlo-validity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, §3.2"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2, equations (3.19)–(3.20)"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
---

## Statement refuted

For every invariant finite-group null and every $B\ge1$, the uncorrected
fraction
$$\widetilde p_B:=\frac1B\sum_{b=1}^{B}\mathbf 1\{T(g_b\cdot X)\ge T(X)\},$$
with IID uniform $g_b\in G$ independent of $X$, is a valid p-value.

## Facts & Assumptions

**Given:** A finite invariant group model, one IID uniform simulated
transformation, and the uncorrected fraction above. Show that it can have
positive probability of being zero; compare the identity-corrected value.

[F1] [[def-measurable-finite-group-permutation-setup]]: the test premise is invariance of the null law under every group element.

[F2] [[alg-random-permutation-monte-carlo-pvalue]]: the corrected with-replacement procedure adds the distinguished identity count and divides by $B+1$.

[F3] [[thm-random-permutation-monte-carlo-validity]]: under the invariant null and with-replacement design, the identity-corrected value is superuniform.

[F4] [[def-p-value]]: validity requires $P(p(X)\le u)\le u$ at every $u\in[0,1]$, including $u=0$.

[F5] [[def-finite-probability-space-and-event]]: event probabilities on a finite sample space are sums of the outcome weights.

[F6] [[def-uniform-finite-probability-space]]: a uniform law on the two-element group gives probability $1/2$ to each transformation.

[F7] [[def-independent-random-elements]]: the simulated transformation is independent of the observed data.

## Counterexample

Take $\Omega=\{0,1\}$, let $G=\{e,s\}$ with $s$ swapping the two points, let
$P(X=0)=P(X=1)=1/2$, and set $T(x)=x$. This law is invariant. Take $B=1$
and draw $g_1$ uniformly from $G$, independently of $X$.

**Given:** The finite model, the group action and score, and the independent
uniform draw $g_1$ above.

1.1 If $X=0$, both transformations have score at least $T(X)=0$, so $\widetilde p_1=1$. If $X=1$, the identity gives an indicator of $1$ and the swap gives an indicator of $0$. Therefore $\widetilde p_1=0$ exactly on $\{X=1,g_1=s\}$. By [F5], [F6], and independence [F7], this event has probability $(1/2)(1/2)=1/4$. [F1, F5, F6, F7, given, algebra]

2.1 Consequently $P(\widetilde p_1\le0)=1/4>0$, contradicting the necessary superuniform bound [F4]. Thus the uncorrected fraction can equal zero and is anti-conservative at cutoff $0$. [F4, step 1.1, algebra]

3.1 In the same witness the corrected value is $p_+=(1+\mathbf1\{T(g_1\cdot X)\ge T(X)\})/2$, so it equals $1/2$ with probability $1/4$ and $1$ with probability $3/4$. Its CDF is $0$ below $1/2$, $1/4\le u$ for $1/2\le u<1$, and $1$ at $u=1$, consistent with the general identity-corrected result [F3]. [F2, F3, step 1.1, algebra] ∎
