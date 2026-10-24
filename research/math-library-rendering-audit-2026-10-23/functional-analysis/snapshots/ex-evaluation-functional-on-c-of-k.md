---
id: ex-evaluation-functional-on-c-of-k
kind: example
title: "The evaluation functional on \\(C(K)\\) has norm one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-operator-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-28
---

## Example

Let $K$ be a nonempty compact metric space, let $\mathbb K\in\{\mathbb R,\mathbb C\}$ be the scalar field, let $C(K,\mathbb K)$ carry the supremum norm, and let $x_0 \in K$. Define

$$\delta_{x_0}:C(K,\mathbb K)\to \mathbb K,\qquad \delta_{x_0}(f):=f(x_0).$$

Then $\delta_{x_0}$ is a bounded linear functional of norm $1$.

## Facts & Assumptions

**Given:** A nonempty compact metric space $K$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, a point $x_0 \in K$, and the space $C(K,\mathbb K)$ of continuous $\mathbb K$-valued functions on $K$ with the supremum norm.

[L2] A bounded linear operator is a linear map with a uniform norm bound ([[def-bounded-linear-operator]]).

[L3] The operator norm is the least global bound, equivalently the unit-ball supremum ([[def-operator-norm]]).

## Verification

**Proof technique:** direct.

1.1 The map $\delta_{x_0}$ is linear, and for every $f \in C(K,\mathbb K)$, $|\delta_{x_0}(f)| = |f(x_0)| \le \|f\|_\infty$. Hence $\delta_{x_0}$ is bounded with operator norm at most $1$ by [L2] and [L3]. [L2, L3]

2.1 Let $\mathbf 1$ be the constant function $1$ on $K$. Then $\|\mathbf 1\|_\infty=1$ and $|\delta_{x_0}(\mathbf 1)|=1$, so $\|\delta_{x_0}\| \ge 1$. Therefore $\|\delta_{x_0}\|=1$. [step 1.1] ∎
