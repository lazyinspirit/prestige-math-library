---
id: def-sylvester-operator-and-separation-number
kind: definition
title: "Sylvester operator and Frobenius separation number"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-sylvester-vectorization-isometry-and-kronecker-identity
  - def-frobenius-matrix-norm
  - thm-singular-value-decomposition
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Definition

For $F\in\{\mathbb R,\mathbb C\}$, $A\in F^{m\times m}$, $B\in F^{n\times n}$ with $m,n\ge1$, define the Sylvester operator $\mathcal S_{A,B}:F^{m\times n}\to F^{m\times n}$ by

$$\mathcal S_{A,B}(X)=AX+XB.$$

Equip $F^{m\times n}$ with the Frobenius norm of [[def-frobenius-matrix-norm]]. The column-vectorization isometry of [[lem-sylvester-vectorization-isometry-and-kronecker-identity]] identifies this norm with the Euclidean norm on $F^{mn}$. Define

$$\operatorname{sep}(A,-B):=\sigma_{\min}(\mathcal S_{A,B})=\min_{\|X\|_F=1}\|AX+XB\|_F.$$

Here $\sigma_{\min}$ denotes the smallest singular value of the finite-dimensional linear map under these inner products. The finite-dimensional singular value decomposition [[thm-singular-value-decomposition]] ensures this minimum is well-defined. The argument $-B$ is part of the conventional label: the operator being measured is $X\mapsto AX+XB$.
