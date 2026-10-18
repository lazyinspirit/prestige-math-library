---
id: def-finite-hypothesis-testing-beta
kind: definition
title: Finite type-II testing function with explicit orientation
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-probability-vector
  - def-finite-probability-space-and-event
  - def-randomized-test
  - def-test-size-and-power
  - def-expectation-on-a-finite-probability-space
  - def-complete-ordered-field
  - def-real-numbers
  - thm-reals-ordered-field
  - cor-cauchy-reals-lub-complete
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 14, §14.1, Definition 14.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Finite-sample tests, Neyman–Pearson and Valid P-values, definitions of randomized test and test size/power"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
---

## Definition

Let $P,Q$ be probability vectors on a finite nonempty alphabet $\mathcal X$
([[def-finite-probability-vector]]). They define finite probability spaces
with outcome weights $p_x$ and $q_x$, respectively
([[def-finite-probability-space-and-event]]). For $h:\mathcal X\to\mathbb R$, write
$E_Ph:=\sum_xp_xh(x)$ and $E_Qh:=\sum_xq_xh(x)$; these are the finite
expectations ([[def-expectation-on-a-finite-probability-space]]). Test the
simple null $H_0:P$ against the simple alternative $H_1:Q$. A randomized test is a function
$\phi:\mathcal X\to[0,1]$, where $\phi(x)$ is the probability of rejecting
$H_0$ after observing $x$; thus $1-\phi(x)$ is the probability of accepting
$H_0$ ([[def-randomized-test]]). Its type-I error is
$\sum_xp_x\phi(x)$, and its type-II error is
$\sum_xq_x(1-\phi(x))$ ([[def-test-size-and-power]]).

For $\epsilon\in[0,1]$, define the oriented type-II testing function
$$\beta_\epsilon(P,Q):=\inf_{\substack{\phi:\mathcal X\to[0,1]\\\sum_xp_x\phi(x)\le\epsilon}}\sum_xq_x(1-\phi(x)).$$
Here the first argument is the null law and the second is the alternative
law; $\epsilon$ bounds rejection under the first law, while the objective is
acceptance of the null under the second. The feasible set is nonempty because
$\phi=0$ is allowed, and every objective value lies in $[0,1]$. Thus the set
of objective values is nonempty and bounded below in $\mathbb R$, so it has a
real infimum: [[def-real-numbers]] identifies $\mathbb R$ with the
Cauchy-sequence reals, [[thm-reals-ordered-field]] gives their ordered-field
structure, and [[cor-cauchy-reals-lub-complete]] gives their
least-upper-bound property. [[def-complete-ordered-field]] gives the
equivalent infimum property. Since the set also lies in $[0,1]$, that
infimum lies in $[0,1]$. In the
Neyman–Pearson-region convention that constrains null acceptance below by
$\gamma$, this is the lower boundary value at $\gamma=1-\epsilon$.

## Remarks

The symbol $\beta_\epsilon(P,Q)$ here is the infimum type-II error. It is
not the power function $E_\theta[\phi]$ from
[[def-test-size-and-power]]; under $Q$, it minimizes one minus that power.
