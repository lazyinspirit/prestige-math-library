---
id: lem-spectral-network-output-covering-entropy
kind: lemma
title: "Spectral and reference-matrix covering entropy for network outputs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-spectral-network-complexity
  - def-sample-covering-number
  - lem-spectral-network-matrix-cover
  - def-frobenius-matrix-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Lemma 3.1 and Appendix A.5"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Statement

Fix an architecture and activations as in the spectral-network-complexity definition, with widths $d_0,\ldots,d_L$ and $W:=\max_{0\le i\le L}d_i$. Let $n\ge1$ and let $X\in\mathbb R^{n\times d_0}$ be any sample matrix. Let $M_i\in\mathbb R^{d_i\times d_{i-1}}$, and fix $s_i>0$ and $b_i\ge0$. Suppose each feasible layer set
$$C_i:=\{A_i:\lVert A_i\rVert_\sigma\le s_i,\ \lVert A_i^\top-M_i^\top\rVert_{2,1}\le b_i\}$$
is nonempty. Let $\mathcal H_X$ be the set of $n\times d_L$ score matrices whose $r$th row is $F_A(x_r)^\top$, for $A_i\in C_i$ and the $r$th row $x_r^\top$ of $X$. Then for every $\epsilon>0$,
$$\log N_F(\mathcal H_X,\epsilon)\le5\,\frac{\lVert X\rVert_F^2}{\epsilon^2}\log(2W^2)\left(\prod_{i=1}^L(\rho_i s_i)^2\right)\left(\sum_{i=1}^L(b_i/s_i)^{2/3}\right)^3.$$
The logarithm is natural, an empty product equals $1$, and $N_F$ uses proper centers in the covered score-matrix set.

## Statement references

[[def-spectral-network-complexity]]: fixes the network recurrence, zero-origin Lipschitz activations, spectral norm, and mixed column-sum norm.

[[def-sample-covering-number]]: defines proper covers and their Frobenius radius.

[[lem-spectral-network-matrix-cover]]: supplies the proper product cover for a fixed input matrix and one constrained layer.

## Facts & Assumptions

**Given:** The architecture, activations, matrices, positive spectral bounds, nonnegative reference-distance bounds, nonempty layer sets, and sample matrix in the Statement.

[F1] Each activation fixes zero and is $\rho_i$-Lipschitz in Euclidean norm; each layer matrix has induced Euclidean norm at most $s_i$, and its transpose-difference from the reference has column-sum norm at most $b_i$. [[def-spectral-network-complexity]]

[F2] For a fixed input matrix $Z$, the one-layer image under a nonempty feasible matrix set has a proper Frobenius cover satisfying the stated matrix-product entropy estimate. [[lem-spectral-network-matrix-cover]]

[F3] The Frobenius norm is the Euclidean norm of all matrix entries, so rowwise application of a $\rho_i$-Lipschitz map changes Frobenius distances by at most the factor $\rho_i$. [[def-frobenius-matrix-norm]] [[def-spectral-network-complexity]]

[F4] A proper cover has centers in the covered set, and its covering number is the least size of such a finite cover. [[def-sample-covering-number]]

[F5] The natural logarithm is increasing and satisfies $\log(xy)=\log x+\log y$. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F6] If $A=\sum_{j=1}^r\sigma_j u_jv_j^\top$ is a singular-value decomposition with $r>0$, then $A^\top=\sum_{j=1}^r\sigma_jv_ju_j^\top$ has the same positive singular values; the largest-singular-value theorem therefore gives equal operator norms. If $r=0$, both matrices are zero and their operator norms are zero by the same theorem. [[thm-singular-value-decomposition]] [[thm-operator-norm-is-the-largest-singular-value]]

## Proof
1.1 Write $Z_i(A)$ for the matrix of rowwise layer-$i$ activations, with $Z_0(A)=X$. Induction gives $\lVert Z_{i-1}(A)\rVert_F\le\lVert X\rVert_F\prod_{j<i}\rho_js_j$: rowwise zero-origin Lipschitzness gives $\lVert Z_i\rVert_F\le\rho_i\lVert Z_{i-1}A_i^\top\rVert_F$, and [F6] identifies $\lVert A_i^\top\rVert_\sigma=\lVert A_i\rVert_\sigma\le s_i$, so the induced norm gives $\lVert Z_{i-1}A_i^\top\rVert_F\le s_i\lVert Z_{i-1}\rVert_F$, row by row. [F1, F3, F6, given, induction, algebra]

1.2 If every $b_i=0$, each feasible layer set is the singleton $\{M_i\}$, so $\mathcal H_X$ is a singleton and the right side is zero. Otherwise set $r_i=b_i/s_i$, $T:=\sum_{i:r_i>0}r_i^{2/3}$, and $\alpha_i:=r_i^{2/3}/T$ for positive $r_i$, with $\alpha_i=0$ when $r_i=0$. These weights are nonnegative and sum to one over the varying layers. [F1, given, algebra]

2.1 Build finite proper covers of the attainable layer outputs successively. At layer $i$, suppose the previous attainable activation matrices have a proper $\eta$-cover with centers $V$ that are themselves attainable prefix outputs. For each such $V$, [F6] gives $\lVert A_i^\top\rVert_\sigma=\lVert A_i\rVert_\sigma$, so apply [F2] to $\{VA_i^\top:A_i\in C_i\}$ with input $V$, reference $M_i^\top$, radius $e_i/\rho_i$, and $e_i:=\alpha_i\epsilon/\prod_{j>i}\rho_js_j$ when $b_i>0$. Map each product-cover center through the rowwise activation $\sigma_i$. Every resulting center is attainable by joining the prefix that realizes $V$ to its feasible layer matrix. For any actual prefix $Z$ within $\eta$ of $V$ and any $A_i\in C_i$, the activation output differs from $\sigma_i(VA_i^\top)$ by at most $\rho_i s_i\eta$; the layer cover adds at most $e_i$. Thus the next-stage cover radius is at most $\rho_i s_i\eta+e_i$. When $b_i=0$, use the single matrix $M_i$ and set $e_i=0$. [F1, F2, F4, F6, step 1.1, step 1.2, given, construct]

3.1 Starting with the exact cover $\{X\}$, the recurrence in step 2.1 gives final radius at most $\sum_i e_i\prod_{j>i}\rho_js_j=\epsilon\sum_{i:r_i>0}\alpha_i=\epsilon$. The cover is proper by construction. At each varying layer, [F2] and the bound from step 1.1 show that its cover-number logarithm is at most $5\frac{\lVert X\rVert_F^2\prod_{j<i}(\rho_js_j)^2 b_i^2}{(e_i/\rho_i)^2}\log(2d_{i-1}d_i).$ For each prior cover center $V$, the next cover has at most this uniform cardinality bound, so taking the union over the prior centers multiplies cardinalities by at most that factor. Since $d_{i-1},d_i\le W$, the logarithm of the final product cover is at most the sum of the displayed layer bounds. [F2, F4, F5, step 1.1, step 2.1, given, algebra]

4.1 Substitute $e_i=\alpha_i\epsilon/\prod_{j>i}\rho_js_j$ into step 3.1. Each varying-layer term becomes $5\frac{\lVert X\rVert_F^2}{\epsilon^2}\log(2W^2)\left(\prod_{j=1}^L(\rho_js_j)^2\right)\frac{r_i^2}{\alpha_i^2}.$ By the choice in step 1.2, $\sum_{i:r_i>0}r_i^2/\alpha_i^2=T^3=(\sum_i(b_i/s_i)^{2/3})^3$. The all-zero case was handled in step 1.2, so the displayed bound follows in every case. [F5, step 1.2, step 3.1, given, algebra] ∎
## Source reference

[Bartlett, Foster, and Telgarsky, *Spectrally-normalized margin bounds for neural networks*, Lemma 3.1 and Appendix A.5](https://arxiv.org/pdf/1706.08498).
