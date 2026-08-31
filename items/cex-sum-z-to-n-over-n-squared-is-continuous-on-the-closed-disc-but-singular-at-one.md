---
id: cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one
kind: counterexample
title: "The series sum z to the n over n squared is continuous on the closed disc but singular at 1"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-pringsheim-theorem, thm-weierstrass-m-test-for-complex-function-series, thm-p-series-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Philippe Flajolet, Symbolic Enumerative Combinatorics and Complex Asymptotic Analysis, Theorem 4"
      url: "https://algo.inria.fr/seminars/sem00-01/flajolet.html"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Statement refuted

**Refuted claim.** If a power-series sum extends continuously to the closed disc
of convergence, then every boundary point is regular.

The witness is

$$f(z)=\sum_{n\ge1}\frac{z^n}{n^2}.$$

This sum is continuous on $\overline{\mathbb D}$ but the boundary point $1$ is
singular.

## Facts & Assumptions

**Given:** The series $f(z)=\sum_{n\ge1} z^n/n^2$.

[L1] The $p$-series $\sum_{n\ge1} 1/n^2$ converges
([[thm-p-series-rational]]).

[L2] A convergent numerical majorant makes a complex function series converge
uniformly on the domain of the bound
([[thm-weierstrass-m-test-for-complex-function-series]]).

[L3] The coefficients $1/n^2$ give radius $1$, and Pringsheim makes the positive
boundary point singular because those coefficients are nonnegative
([[thm-cauchy-hadamard-for-complex-power-series]],
[[thm-pringsheim-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 On the closed unit disc one has $\left|z^n/n^2\right|\le 1/n^2$. By [L1] and [L2], the series for $f$ converges uniformly on $\overline{\mathbb D}$, so its sum is continuous there. [L1, L2]

2.1 Fact [L3] gives radius $1$ and shows that the boundary point $1$ is singular. Therefore continuity on the closed disc does not force regularity at all boundary points, and the displayed claim is false. [L3, step 1.1] ∎
