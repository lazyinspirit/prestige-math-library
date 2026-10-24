---
id: ex-two-point-finite-metric-transport-duality
kind: example
title: "Two-point finite-metric transport"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-metric-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - thm-finite-metric-transport-duality
justified_by: []
axiom_use: "No choice principle is used; the coupling and potential are displayed explicitly."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §6.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.3, PDF pp. 5–6"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Example

Let $X=\{x_1,x_2\}$ have metric distance $d(x_1,x_2)=\delta>0$. For $a,b\in[0,1]$, let $p=(a,1-a)$ and $q=(b,1-b)$. Then $W_1(p,q)=\delta|a-b|$. If $a\ge b$, one attaining coupling is
$$
\pi=\begin{pmatrix}b&a-b\\0&1-a\end{pmatrix}
$$
and one attaining normalized potential is $f=(0,-\delta)$. If $b>a$, one attaining coupling and potential are
$$
\pi=\begin{pmatrix}a&0\\b-a&1-b\end{pmatrix},\qquad f=(0,\delta).
$$

## Example references

[Peyré and Cuturi, Computational Optimal Transport, §6.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §1.3](https://arxiv.org/pdf/1009.3856)

## Facts & Assumptions

**Given:** The two-point metric space, probability vectors, and parameter bounds in the Example.

[F1] A coupling is a nonnegative matrix with the stated row and column sums, and $W_1$ is its minimum transport cost ([[def-finite-metric-coupling]], [[def-finite-metric-wasserstein-one]]).

[F2] The minimum coupling cost equals the maximum over normalized vectors satisfying $|f_i-f_j|\le d(x_i,x_j)$; both extrema are attained ([[thm-finite-metric-transport-duality]]).

## Verification

1.1 If $a\ge b$, all entries of the displayed matrix are nonnegative, its row sums are $b+(a-b)=a$ and $1-a$, and its column sums are $b$ and $(a-b)+(1-a)=1-b$. Its cost is $\delta(a-b)$. If $b>a$, the second displayed matrix has nonnegative entries, row sums $a$ and $(b-a)+(1-b)=1-a$, column sums $a+(b-a)=b$ and $1-b$, and cost $\delta(b-a)$. Thus in either case it is a feasible coupling of cost $\delta|a-b|$. [given, F1, construct, algebra]

1.2 If $a\ge b$, the vector $(0,-\delta)$ is normalized and satisfies the Lipschitz constraint with equality; its objective is $(b-a)(-\delta)=\delta(a-b)$. If $b>a$, the vector $(0,\delta)$ is normalized and feasible, and its objective is $(b-a)\delta=\delta(b-a)$. Thus the displayed potential has value $\delta|a-b|$ in either case. [given, F1, algebra]

2.1 By [F2], the optimal primal and dual values coincide. The feasible plan in step 1.1 gives an optimal primal value at most $\delta|a-b|$, while the feasible potential in step 1.2 gives an optimal dual value at least that number. Equality of the optima forces both displayed values to be optimal and gives $W_1(p,q)=\delta|a-b|$. [step 1.1, step 1.2, F2, algebra] ∎
