---
id: lem-gr-fx-sl2c-connected
kind: lemma
title: Path-connectedness of SL(2,C)
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
dependency_roles:
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
sources:
  references:
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§2.3.1, PDF pp. 24–25"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
physical_scope: null
---

## Statement

For a complex matrix $A$, write $A^\dagger:=\overline A^{\mathsf T}$. On $\mathbb C^2$ use $\langle u,v\rangle:=u^\dagger v$ and $\|u\|:=\sqrt{u^\dagger u}$, and set $SU(2):=\{Q:Q^\dagger Q=I,\det Q=1\}$. Give $M_2(\mathbb C)$ its Euclidean topology as $\mathbb R^8$, and define $SL(2,\mathbb C):=\{A\in M_2(\mathbb C):\det A=1\}$ with matrix multiplication. Then $SL(2,\mathbb C)$ is path-connected.

## Statement references

[[def-determinant-of-a-square-matrix]]

[[thm-determinant-multiplicative]]

## Facts & Assumptions

**Given:** A matrix $A\in SL(2,\mathbb C)$.

[F1] The determinant is multiplicative for square matrices over $\mathbb C$ ([[thm-determinant-multiplicative]]).

[F2] The determinant is defined by a finite alternating sum of products of matrix entries; for a conjugate-transpose matrix, the Leibniz formula gives $\det(A^\dagger)=\overline{\det A}$ ([[def-determinant-of-a-square-matrix]]).


## Proof

1.1 Write the columns of $A$ as $u,v\in\mathbb C^2$. Since $\det A=1$, $u$ and $v$ are linearly independent. Put $r_{11}:=\|u\|>0$, $q_1:=u/r_{11}$, $\alpha:=q_1^\dagger v$, $w:=v-\alpha q_1$, and $r_{22}:=\|w\|>0$. Then $q_1^\dagger w=0$ and $q_2:=w/r_{22}$ makes $Q:=(q_1,q_2)$ unitary; with $R:=\begin{pmatrix}r_{11}&\alpha\\0&r_{22}\end{pmatrix}$ we have $A=QR$. By [F1]–[F2], $1=|\det A|=|\det Q|r_{11}r_{22}=r_{11}r_{22}$, and $\det A=\det Q\,r_{11}r_{22}=1$ then gives $\det Q=1$. Therefore $Q\in SU(2)$ and $R=\begin{pmatrix}r&z\\0&r^{-1}\end{pmatrix}$ for $r>0$ and $z\in\mathbb C$. [given, F1, F2, construct, algebra]

2.1 If the first column of $Q$ is $(a,c)^{\mathsf T}$, its unit orthogonal vectors are $z(-\overline c,\overline a)^{\mathsf T}$ with $|z|=1$. The determinant of the matrix with these columns is $z(|a|^2+|c|^2)=z$; $\det Q=1$ therefore forces $z=1$. Thus $Q=\begin{pmatrix}a&-\overline c\\c&\overline a\end{pmatrix}$ and $|a|^2+|c|^2=1$. This identifies $SU(2)$ with the unit sphere $S^3\subset\mathbb R^4$. Under this identification use the standard Euclidean inner product $\cdot$ and norm $\lVert\cdot\rVert_2$ on $\mathbb R^4$. The sphere is path-connected: non-antipodal points are joined by normalizing their straight segment. For antipodal points $x,-x\in S^3$, at least one of the first two standard basis vectors $e_1,e_2$ is not parallel to $x$; choose such an $e_j$ and set
$$w:=\frac{e_j-(e_j\cdot x)x}{\lVert e_j-(e_j\cdot x)x\rVert_2}.$$
The denominator is nonzero because $e_j$ is not parallel to $x$; hence $w\in S^3$ and $w\cdot x=0$. The normalized straight segments from $x$ to $w$ and from $w$ to $-x$ give a path. Hence there is a continuous path $Q_t$ in $SU(2)$ from $I$ to $Q$. [step 1.1, F2, construct, algebra]

3.1 For $R=\begin{pmatrix}r&z\\0&r^{-1}\end{pmatrix}$, the path $R_t:=\begin{pmatrix}r^t&tz\\0&r^{-t}\end{pmatrix}$ has continuous entries because $r^{\pm t}=\exp(\pm t\log r)$ for the fixed $r>0$, and the real exponential is continuous. It has determinant one for every $t\in[0,1]$, with $R_0=I$ and $R_1=R$. Thus $A_t:=Q_tR_t$ is a continuous path in $SL(2,\mathbb C)$ from $I$ to $A=QR$. Since $A$ was arbitrary, $SL(2,\mathbb C)$ is path-connected. [step 1.1, step 2.1, F1, algebra] ∎
