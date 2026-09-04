---
id: thm-dirichlet-series-multiplication-convolution
kind: theorem
title: "Multiplying absolutely convergent Dirichlet series gives Dirichlet convolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-series, def-dirichlet-convolution]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.2"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.5"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement

Let $f,g : \mathbb Z_{>0} \to \mathbb C$. On every half-plane where both
Dirichlet series converge absolutely,

$$\left(\sum_{n \ge 1} f(n)n^{-s}\right)\left(\sum_{n \ge 1} g(n)n^{-s}\right) = \sum_{n \ge 1} (f*g)(n)n^{-s},$$

where $f*g$ is the Dirichlet convolution of [[def-dirichlet-convolution]].

## Facts & Assumptions

**Given:** Arithmetic functions $f,g$ and a point $s$ where both Dirichlet
series converge absolutely.

[L1] Dirichlet convolution is
$$(f*g)(n) = \sum_{d \mid n} f(d)g(n/d)$$
([[def-dirichlet-convolution]]).

[L2] A Dirichlet series is a series $\sum a_n n^{-s}$ over positive integers
([[def-dirichlet-series]]).

## Proof

**Proof technique:** direct.

1.1 Absolute convergence makes the double series $$\sum_{m \ge 1}\sum_{n \ge 1} f(m)g(n)(mn)^{-s}$$ absolutely convergent, so its terms may be regrouped by the product $mn$. The coefficient of $k^{-s}$ in that regrouping is $$\sum_{mn=k} f(m)g(n) = \sum_{d \mid k} f(d)g(k/d) = (f*g)(k)$$ by [L1]. [L1, L2, given, algebra]

2.1 Therefore the product of the two Dirichlet series is the Dirichlet series of the convolution. [step 1.1] ∎
