---
id: ex-hlr-separated-cauchy-block
kind: example
title: "A rank-one approximation of a separated Cauchy block"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - thm-hlr-separated-cauchy-block-rank-bound
  - def-finite-tensor-arrays-and-frobenius-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.2–1.3"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Take $x_1=0,x_2=1$ in $[0,1]$ and $y_1=2,y_2=3$ in $[2,3]$. For $K_{ij}=1/(y_j-x_i)$ and rank order $r=1$, the first geometric term is $\widetilde K_{ij}=1/y_j$. It gives a rank-one approximation with an exactly computable nonzero residual.

## Facts & Assumptions

**Given:** The four points and the order $r=1$.

[F1] [[thm-hlr-separated-cauchy-block-rank-bound]]: for $a=1,b=2,c=1$, the rank-one approximation has entries $1/y_j$ and each residual entry has absolute value at most $1/2$.

[F2] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius norm is the square root of the sum of squared entry moduli.

## Verification

1.1 The exact block is $K=\begin{pmatrix}1/2&1/3\\1&1/2\end{pmatrix}$. The rank-one approximation is $\widetilde K=\begin{pmatrix}1/2&1/3\\1/2&1/3\end{pmatrix}=(1,1)^{\mathsf T}(1/2,1/3)$, so its rank is one. [given, F1, algebra]

2.1 The residual is $K-\widetilde K=\begin{pmatrix}0&0\\1/2&1/6\end{pmatrix}$, hence $\|K-\widetilde K\|_F=\sqrt{1/4+1/36}=\sqrt{10}/6\le1=\sqrt{2\cdot2}\,(1/2)/(2-1)$ by [F2]. This attains the stated finite block bound at the entry $(2,1)$. [F1, F2, step 1.1, algebra] ∎
