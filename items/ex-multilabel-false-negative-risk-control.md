---
id: ex-multilabel-false-negative-risk-control
kind: example
title: "Multilabel false-negative risk control"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-nested-decision-family-and-bounded-risk
  - alg-finite-grid-conformal-risk-control
  - thm-finite-grid-conformal-risk-control
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§3.2, multilabel false-negative loss and thresholded prediction sets; the empty-label convention and finite-grid witness are specified locally."
---

## Example

Let $K,n\ge1$, let $(\mathcal X,\mathcal A)$ be a measurable space, give the finite set $2^{[K]}$ its full sigma-algebra, and let $0\le\lambda_1<\cdots<\lambda_M=1$ be a deterministic grid in $[0,1]$. Fix a measurable score map $f:\mathcal X\to[0,1]^K$. Let $(X_i,Y_i)$, $1\le i\le n+1$, be exchangeable random elements of the product measurable space $\mathcal X\times 2^{[K]}$, where $Y_i\subseteq[K]$. Define $C_\lambda(x)=\{k\in[K]:f_k(x)\ge1-\lambda\}$. For nonempty $Y_i$, set $L_i(\lambda)=1-|Y_i\cap C_\lambda(X_i)|/|Y_i|$; for $Y_i=\varnothing$, define $L_i(\lambda)=0$. With $B=1$ and any target $\alpha\in[0,1)$, the finite-grid rule selects a threshold whose expected test false-negative loss is at most $\alpha$.

## Example references

[[def-finite-nested-decision-family-and-bounded-risk]]: exchangeable finite loss rows and endpoint-safe bounded risk.

[[alg-finite-grid-conformal-risk-control]]: the finite-grid calibration rule.

[[thm-finite-grid-conformal-risk-control]]: expected-risk control under loss nesting and endpoint safety.

[Angelopoulos et al., Conformal Risk Control, §3.2](https://arxiv.org/pdf/2208.02814v4)

## Facts & Assumptions

**Given:** The finite class set, fixed measurable score map, exchangeable example rows, nested threshold sets, explicit empty-label convention, and target $\alpha\in[0,1)$.

[F1] A finite family of bounded loss rows is loss-nested when each row is nonincreasing along the ordered grid, and endpoint-safe when every terminal loss is at most the target. [[def-finite-nested-decision-family-and-bounded-risk]]

[F3] For exchangeable, bounded, loss-nested rows with a safe endpoint, the finite-grid rule has expected test loss at most $\alpha$. [[thm-finite-grid-conformal-risk-control]]

## Verification

1.1 For each $k$ and grid point $\lambda_j$, the event $f_k(X_i)\ge1-\lambda_j$ is measurable; finite intersections, unions, and sums in the displayed loss formula are therefore measurable. The same map is applied to every exchangeable example row, so the resulting loss vectors are exchangeable. [given, F1, construct]

1.2 If $\lambda\le\lambda'$, then $1-\lambda'\le1-\lambda$, so $C_\lambda(x)\subseteq C_{\lambda'}(x)$. For nonempty $Y_i$, the number of included true labels can only increase, making $L_i(\lambda')\le L_i(\lambda)$; for empty $Y_i$ the loss is constantly zero. The losses lie in $[0,1]$. [given, algebra]

2.1 At $\lambda_M=1$, the threshold is zero and every score lies in $[0,1]$, so $C_1(x)=[K]$. Hence every nonempty-label loss is zero, and the stated empty-label convention also gives zero. Thus $L_i(\lambda_M)=0\le\alpha$. [given, step 1.2]

3.1 The finite loss rows are exchangeable, bounded by $B=1$, nonincreasing, and endpoint-safe by steps 1.1–2.1. Applying [F3] gives $\mathbb E[L_{n+1}(\hat\lambda)]\le\alpha$. [given, F3, step 1.1, step 1.2, step 2.1] ∎
