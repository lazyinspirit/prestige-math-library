---
id: ex-kantorovich-rubinstein-on-a-compact-interval
kind: example
title: "Kantorovich–Rubinstein duality for endpoint masses on a compact interval"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-compact-metric-wasserstein-one
  - def-metric-space
  - thm-heine-borel-rn
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-dirac-integral-evaluation
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-measure
  - def-product-topology
  - def-metric-topology
  - def-borel-sigma-algebra
proof_strategy: direct
axiom_use: "No choice principle is used; compactness follows from Heine–Borel, and the coupling and potential calculations are direct Dirac evaluations."
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

Let $X=[0,1]$ with the Euclidean metric, let $\mu=\delta_0$ and $\nu=\delta_1$, where $\delta_a(A)=1$ if $a\in A$ and $0$ otherwise for each Borel set $A$. For the base point $x_0=0$, the coupling cost is $W_1^X(\mu,\nu)=1$, and the supremum over 1-Lipschitz functions $f$ with $f(0)=0$ is also $1$, attained by $f(x)=-x$.

## Facts & Assumptions

**Given:** The probability measures, compact interval, and base point are as in the Example.

[F1] The closed interval $[0,1]$ is compact in the Euclidean metric. [[thm-heine-borel-rn]]

[F2] $W_1^X$ is the infimum of the integral of the metric over Borel probability couplings with the prescribed marginals. [[def-compact-metric-wasserstein-one]]

[F3] The Dirac set function is a probability measure, and integrating a nonnegative measurable function against it evaluates that function at the point. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]] [[lem-dirac-integral-evaluation]]

[F4] A real function is integrable when its positive and negative parts have finite nonnegative integrals, and its signed integral is the difference of those integrals. [[def-integrable-real-and-complex-functions-and-their-integrals]]

[F5] In a metric space each singleton is closed: for $y\ne x$, the ball $B(y,d(y,x)/2)$ avoids $x$. Coordinate projections are continuous in the product topology, so $\{0\}\times\{1\}$ is closed and hence Borel in $X\times X$. [[def-metric-space]] [[def-metric-topology]] [[def-product-topology]] [[def-borel-sigma-algebra]]

[F6] A measure is countably additive on disjoint measurable sets; this implies monotonicity and finite subadditivity. [[def-measure]]

## Verification

1.1 By [F1], $X=[0,1]$ is a compact metric space, so [F2] applies. The point $(0,1)$ is Borel by [F5], and [F3] makes $\delta_{(0,1)}$ a Borel probability measure. Its coordinate marginals are $\delta_0$ and $\delta_1$, so it is admissible; [F3] gives its cost as $d(0,1)=1$. Thus $W_1^X(\mu,\nu)\le1$. [given, F1, F2, F3, F5, construct]

1.2 Let $h$ be any feasible real-valued function, so it is 1-Lipschitz and hence continuous and Borel measurable. Its parts $h^+=\max\{h,0\}$ and $h^-=\max\{-h,0\}$ are nonnegative measurable functions by [F4]. Applying [F3] to each part, for $c\in\{0,1\}$ we get $\int h^+\,d\delta_c=h^+(c)<\infty$ and $\int h^-\,d\delta_c=h^-(c)<\infty$. Thus [F4] makes $h$ integrable against both endpoint masses and gives $\int h\,d\delta_c=h^+(c)-h^-(c)=h(c)$. In particular, $f(x)=-x$ is feasible and has integrals $f(0)=0$ and $f(1)=-1$, so its objective is $1$. Every feasible $g$ has objective $g(0)-g(1)\le|g(0)-g(1)|\le1$, so the dual supremum is exactly $1$. [given, F3, F4, algebra]

2.1 For any admissible coupling $\gamma$, the marginal conditions give $\gamma(\{0\}\times X)=1$ and $\gamma(X\times\{1\})=1$. The complement of their intersection has measure zero: each of the two complements is null, and finite subadditivity follows from the measure axioms [F6]. Their intersection is $\{(0,1)\}$. For any Borel $E$, if $(0,1)\in E$ then $\gamma(E)=1$, while if $(0,1)\notin E$ then $E$ lies in the null complement of that singleton, so $\gamma(E)=0$; hence $\gamma=\delta_{(0,1)}$. Therefore every admissible cost is $1$, and step 1.1 gives $W_1^X(\mu,\nu)=1$. [given, F2, F3, F5, F6, step 1.1, algebra]

3.1 Steps 1.2 and 2.1 compute the primal and dual values as $1$, proving the example's claimed equality. [step 1.2, step 2.1] ∎
