---
id: ex-csm-bernoulli-fluctuation-bounds
kind: example
title: "A finite Bernoulli model at n=100 and p=1/4"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-bernoulli-fluctuation-bounds
dependency_roles:
  pthm-csm-bernoulli-fluctuation-bounds: physical-result
physical_scope: "Exact specialization of the finite IID Bernoulli product model at n=100 and p=1/4; it is not a measured data set."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, §§4.1 and 5.1 (Spring 2019 notes)"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
    - title: "MIT OpenCourseWare 18.200, Chernoff Bounds and Some Applications, Lecture Notes (Spring 2024)"
      url: "https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/mit18_200_s24_lec_chernoff.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

In the explicitly stipulated product model of [[pthm-csm-bernoulli-fluctuation-bounds]], take $n=100$ and $p=1/4$. We calculate model probabilities and bounds without supplying any observed trial results.

## Facts & Assumptions

**Given:** The finite IID Bernoulli model with $n=100$, $p=1/4$, and $K$ the number of successes.

[F1] [[pthm-csm-bernoulli-fluctuation-bounds]]: under the explicit product law, $\mathbb EK=np$, $\operatorname{Var}(K)=np(1-p)$, the two tail inequalities hold, and the point-mass bound has exponent $D(a\Vert p)$.

## Verification

**Proof technique:** direct.

**Given:** The model and hypotheses in the Example and [F1].

1.1 Substitution gives $\mathbb EK=25$ and $\operatorname{Var}(K)=100(1/4)(3/4)=75/4$. For $\varepsilon=1/10$, the Chebyshev bound is $(3/16)/(100/100)=3/16$, while the exponential bound is $2e^{-2}$. These are upper bounds on a specified model probability, not results from 100 recorded trials. [given, F1, algebra]

2.1 For $k=35$, $a=k/n=7/20$ and $$D(7/20\Vert1/4)=\frac7{20}\log\frac75+\frac{13}{20}\log\frac{13}{15}.$$ The point-mass estimate in [F1] therefore reads $$\frac1{101}e^{-100D(7/20\Vert1/4)}\le P_{1/4}(K=35)\le e^{-100D(7/20\Vert1/4)}.$$ This finite example displays the polynomial prefactor and common exponential rate without numerical fitting or empirical inference. [given, F1, algebra] ∎

