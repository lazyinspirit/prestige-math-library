---
id: ex-kantorovich-rubinstein-for-two-separated-point-masses
kind: example
title: "Kantorovich–Rubinstein duality for masses on two separated points"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-compact-metric-wasserstein-one
  - def-metric-space
  - def-metric-compactness
  - def-metric-ball
  - def-metric-topology
  - def-borel-sigma-algebra
  - def-product-topology
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-measure
  - def-probability-measure
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
axiom_use: "No choice principle is used; the two-point topology is finite and discrete, and all coupling and integral calculations are finite sums."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4, Theorem 4.14 and proof, pp. 121–124"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 1–7"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Example

Let $X=\{a,b\}$ have the two-point metric $d(a,b)=D>0$, so $X$ is compact. For $p,q\in[0,1]$, set $\mu=p\delta_a+(1-p)\delta_b$ and $\nu=q\delta_a+(1-q)\delta_b$. Then $W_1^X(\mu,\nu)=D|p-q|$, and the supremum over 1-Lipschitz functions normalized by $f(a)=0$ has the same value.

## Facts & Assumptions

**Given:** The finite metric space and probability measures are as in the Example.

[F1] In a two-point metric space with $d(a,b)=D>0$, the balls $B(a,D/2)=\{a\}$ and $B(b,D/2)=\{b\}$ are open. Thus every subset of $X$ and every subset of $X\times X$ is Borel, and $X$ is compact because any open cover has a subcover of at most two members. [[def-metric-space]] [[def-metric-ball]] [[def-metric-topology]] [[def-borel-sigma-algebra]] [[def-product-topology]] [[def-metric-compactness]]

[F2] The Dirac set functions at $a$ and $b$ are probability measures; nonnegative finite linear combinations preserve countable additivity, and coefficients summing to one preserve total mass. Thus the displayed convex combinations have the stated atom masses and are probabilities. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]] [[def-measure]] [[def-probability-measure]]

[F3] $W_1^X$ is the infimum of the integral of the metric over Borel probability couplings with the prescribed marginals. [[def-compact-metric-wasserstein-one]]

[F4] On a finite measurable space, a nonnegative simple function integrates as the finite sum of its values times the measures of its level sets; signed integrals are defined by positive and negative parts. [[def-nonnegative-lebesgue-integral]] [[def-nonnegative-simple-measurable-function]] [[def-integral-of-a-nonnegative-simple-function]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[def-integrable-real-and-complex-functions-and-their-integrals]]

[F5] A measure is countably additive on disjoint measurable sets; this implies finite additivity and finite subadditivity. [[def-measure]]

## Verification

1.1 By [F1], $X\times X$ consists of four Borel singletons. Given any admissible Borel coupling $\gamma$, define $\pi_{uv}:=\gamma(\{(u,v)\})$ for $u,v\in\{a,b\}$. Finite additivity [F5] makes $\pi$ a nonnegative matrix with total sum $1$; its row and column sums are the masses of the marginals, namely $(p,1-p)$ and $(q,1-q)$ by [F2]. Thus $p-q=\pi_{ab}-\pi_{ba}$. By [F4], its cost is $D(\pi_{ab}+\pi_{ba})\ge D|p-q|$, so [F3] gives $W_1^X(\mu,\nu)\ge D|p-q|$. [given, F1, F2, F3, F4, F5, algebra]

1.2 Every function on the finite discrete set is Borel and simple. By [F4], its integrals against $\mu$ and $\nu$ are the corresponding two-point sums, so the objective for a feasible $f$ with $f(a)=0$ is $(p-q)(f(a)-f(b))$. Since $|f(a)-f(b)|\le D$, the objective is at most $D|p-q|$. If $p\ge q$, choose $f(b)=-D$; if $p<q$, choose $f(b)=D$. Each choice is feasible and attains $D|p-q|$, including $p=q$. [given, F1, F4, algebra, choose]

2.1 If $p\ge q$, the matrix $(q,p-q,0,1-p)$ is nonnegative, has the required row sums $(p,1-p)$ and column sums $(q,1-q)$, and costs $D(p-q)$. If $p<q$, the matrix $(p,0,q-p,1-q)$ is nonnegative, has the same required marginals, and costs $D(q-p)$. Either matrix defines a Borel probability on the four-point set by assigning each singleton its matrix entry; countable additivity follows because only finitely many disjoint subsets can be nonempty, and [F5] gives finite additivity. Its row and column sums give the required marginals, and [F4] gives its stated cost. Thus [F3] yields $W_1^X(\mu,\nu)\le D|p-q|$, and step 1.1 gives equality. [given, F1, F3, F4, F5, step 1.1, construct, algebra]

3.1 Steps 1.1 and 2.1 give the primal value $D|p-q|$, and step 1.2 gives the same dual supremum, including $p=q$ and endpoints $p,q\in\{0,1\}$. [step 1.1, step 1.2, step 2.1] ∎
