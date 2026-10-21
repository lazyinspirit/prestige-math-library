---
id: def-ip-nullspace-property
kind: definition
title: "The strict nullspace property"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-p-norms-on-rn
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.1, Definition 4.1"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Afonso S. Bandeira, Ten Lectures and Forty-Two Open Problems in the Mathematics of Data Science, §6.3"
      url: "https://www.ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf"
verification:
  precheck: n/a
---

## Definition

Let $m,n\in\mathbb N$ with $m,n\ge1$, and let
$A\in M_{m\times n}(\mathbb R)=\mathbb R^{m\times n}$.
Put $[m]:=\{1,\ldots,m\}$ and $[n]:=\{1,\ldots,n\}$. The library indexes
vector coordinates and matrix columns by $n=\{0,\ldots,n-1\}$ and matrix rows
by $m=\{0,\ldots,m-1\}$. Throughout this item use the canonical relabeling
$j\mapsto j-1$ from $[n]$ to the library's coordinate and column indices, and
similarly from $[m]$ for rows. Thus write
$u_j:=u(j-1)$ and $A_{ij}:=A(i-1,j-1)$. For $u\in\mathbb R^n$, define
the matrix-vector product by
$$(Au)_i:=\sum_{j=1}^n A_{ij}u_j \qquad (i\in[m]),$$
and define
$$\ker A:=\{h\in\mathbb R^n:Ah=0\}.$$
For $h\in\mathbb R^n$ and $S\subseteq[n]$, let $h_S\in\mathbb R^n$ be the
vector whose $j$th coordinate is $h_j$ for $j\in S$ and $0$ for $j\notin S$;
write $S^c:=[n]\setminus S$. For $u\in\mathbb R^n$, write
$$\|u\|_1:=\sum_{j=1}^n|u_j|,$$
the same $p=1$ norm as the library's finite-dimensional norm under this
coordinate relabeling.
For $s\in\mathbb N$ with $1\le s\le n$, the matrix $A$ satisfies the **strict
nullspace property of order $s$** if
$$\|h_S\|_1<\|h_{S^c}\|_1$$
for every nonzero $h\in\ker A$ and every $S\subseteq[n]$ with $|S|\le s$.
This condition concerns exact kernel vectors only and says nothing about vectors
with $Ah\ne0$.

## Definition references

[[def-matrix-space|The matrix space and its zero-based row and column indices]]

[[def-matrix-product-and-identity-matrix|Matrix-vector multiplication and identity matrices]]

[[def-p-norms-on-rn|The finite-dimensional one-norm]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.1, Definition 4.1](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Bandeira, *Ten Lectures and Forty-Two Open Problems in the Mathematics of Data Science*, §6.3](https://www.ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf)
