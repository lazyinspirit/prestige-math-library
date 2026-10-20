---
id: ex-diagonal-scalar-bounds-miss-offdiagonal-matrix
kind: example
title: Diagonal scalar bounds miss off-diagonal matrix size
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - thm-empirical-bernstein-confidence-sequence
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume AC and fix $\delta\in(0,1)$. For each real $r>0$, let $A_t=A^{(r)}=\begin{pmatrix}0&r\\r&0\end{pmatrix}$ for every $t\geq1$. Define the Euclidean operator norm by $\|A\|_{\mathrm{op}}=\sup_{\|x\|_2=1}\|Ax\|_2$, where $\|x\|_2=\sqrt{x_1^2+x_2^2}$. Both diagonal entry processes are identically zero, so applying the scalar theorem to those entries gives the same coordinate intervals for every $r$. Yet $\|A^{(r)}\|_{\mathrm{op}}=r$, which is unbounded across this family. By an operator-norm confidence sequence at level $1-\delta$, mean matrix estimates $\widehat A_t$ and finite radii $R_t$ satisfying $P(\|A_t-\widehat A_t\|_{\mathrm{op}}\leq R_t\text{ for every }t)\geq1-\delta$. The identical diagonal streams cannot determine finite radii that cover this family; a matrix-valued conclusion needs separate assumptions and an argument for the matrix process.

## Example references

[[thm-empirical-bernstein-confidence-sequence|The scalar theorem's domain and interval guarantee]]

## Facts & Assumptions

**Given:** Assume AC and the deterministic symmetric matrix sequence in the Example.

[F1] [[thm-empirical-bernstein-confidence-sequence]]: the theorem assumes AC, takes real scalar processes as observations, and returns intervals for their scalar running conditional means.

[A1] [[def-axiom-of-choice]]: AC is explicitly assumed by the scalar theorem.

## Verification

1.1 For every $r>0$, each diagonal entry of $A^{(r)}$ is the constant zero. These scalar processes satisfy the theorem with $a=b=0$, and the theorem's degenerate-range branch returns $[0,0]$ for both coordinates, independently of $r$. [given, F1, A1]

2.1 For every vector $x\in\mathbb R^2$, $(A^{(r)})^{\mathsf T}A^{(r)}=r^2I$ gives $\|A^{(r)}x\|_2^2=r^2\|x\|_2^2$, so $\|A^{(r)}\|_{\mathrm{op}}=r$. A matrix estimate $\widehat A_1$ and finite radius $R_1$ determined only by the diagonal intervals are fixed as $r$ varies. Choose $r>\|\widehat A_1\|_{\mathrm{op}}+R_1$. The triangle inequality gives $\|A^{(r)}-\widehat A_1\|_{\mathrm{op}}\geq r-\|\widehat A_1\|_{\mathrm{op}}>R_1$, so the matrix coverage event fails already at time one. [given, step 1.1, algebra] ∎
