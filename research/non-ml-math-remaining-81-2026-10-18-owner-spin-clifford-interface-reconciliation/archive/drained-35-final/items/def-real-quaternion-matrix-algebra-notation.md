---
id: def-real-quaternion-matrix-algebra-notation
kind: definition
title: "Real, complex, and quaternion coefficient algebras and matrix notation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 0
deps:
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-simple-module
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.6"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.4.1"
      url: https://arxiv.org/pdf/1911.09766
---

## Definition

Let $\mathbb C=\mathbb R[x]/(x^2+1)$ be the complex field, whose elements have unique coordinates $z=a+b\mathrm i$ ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]). Write $\bar z=a-b\mathrm i$ for complex conjugation ([[def-complex-conjugate-real-imaginary-part-and-modulus]]). Let

$$
\mathbb H=\left\{\begin{pmatrix}z&w\\-\bar w&\bar z\end{pmatrix}:z,w\in\mathbb C\right\}\subseteq M_2(\mathbb C)
$$

with addition and multiplication inherited from matrices. This is a real associative algebra: multiplying the matrices with parameters $(z,w)$ and $(z',w')$ gives the matrix with parameters $(zz'-w\bar w',\,zw'+w\bar z')$. Its real basis is $1,i,j,k$, where
$i=\operatorname{diag}(\mathrm i,-\mathrm i)$, $j=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and $k=ij$; these satisfy $i^2=j^2=k^2=-1$, $ij=k$, $jk=i$, $ki=j$, and reversing any of the last three products changes its sign.

For $D\in\{\mathbb R,\mathbb C,\mathbb H\}$ and a positive integer $m$, $M_m(D)$ is the associative algebra of $m\times m$ matrices with entries in $D$. The direct sum $A\oplus B$ of algebras has componentwise addition and multiplication. The opposite algebra $D^{\mathrm{op}}$ has the same addition and unit as $D$, with multiplication $d\cdot_{\mathrm{op}}e:=ed$. A left module is **simple** when it is nonzero and has no proper nonzero submodule ([[def-simple-module]]). For a simple left $M_m(D)$-module $S$, its coefficient type is $D$ when $\operatorname{End}_{M_m(D)}(S)\cong D^{\mathrm{op}}$; the classification theorem below proves the matrix-algebra cases used on this page.
