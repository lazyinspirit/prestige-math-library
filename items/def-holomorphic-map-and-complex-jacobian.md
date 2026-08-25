---
id: def-holomorphic-map-and-complex-jacobian
kind: definition
title: "Holomorphic maps $\\mathbb{C}^m \\to \\mathbb{C}^n$ and the complex Jacobian matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-function-in-several-complex-variables, rem-complex-euclidean-space-dictionary, def-coordinate-column-and-matrix-of-a-linear-map, def-matrices-over-a-commutative-ring, def-wirtinger-operators-in-several-complex-variables, lem-standard-basis-of-f-n, thm-complex-numbers-form-a-field, def-vector-space, def-euclidean-linear-map, def-norm-and-normed-space]
justified_by: [thm-componentwise-holomorphy-in-several-complex-variables]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Fix $m,n\ge1$, read $\mathbb C^m$ and $\mathbb C^n$ through
[[rem-complex-euclidean-space-dictionary]], and let $U\subseteq\mathbb C^m$ be
open with $a\in U$. A map $L:\mathbb C^m\to\mathbb C^n$ is **$\mathbb C$-linear**
when $L(u+v)=L(u)+L(v)$ and $L(\lambda u)=\lambda L(u)$ for all
$u,v\in\mathbb C^m$ and all $\lambda\in\mathbb C$, the operations being those of
the $\mathbb C$-vector spaces $\mathbb C^m$ and $\mathbb C^n$
([[def-vector-space]], [[thm-complex-numbers-form-a-field]]); requiring the
second clause only for real $\lambda$ gives the weaker notion of an
$\mathbb R$-linear map ([[def-euclidean-linear-map]]).

A map $F:U\to\mathbb C^n$ is **holomorphic at $a$** when there is a
$\mathbb C$-linear $L:\mathbb C^m\to\mathbb C^n$ with

$$F(a+h)=F(a)+L(h)+r(h),\qquad \frac{\lVert r(h)\rVert}{\lVert h\rVert}\longrightarrow0\ \text{ as }h\to0,$$

the norms being those of the dictionary
([[def-norm-and-normed-space]]) and the quotient considered for $h\ne0$ with
$a+h\in U$. It is **holomorphic on $U$** when it is holomorphic at every point.

**Such an $L$ is unique.** If $L_1,L_2$ both work, then $T=L_1-L_2$ is
$\mathbb C$-linear with $\lVert T(h)\rVert/\lVert h\rVert\to0$; fixing $h\ne0$
and replacing $h$ by $th$ for small real $t>0$ gives
$\lVert T(h)\rVert/\lVert h\rVert=\lVert T(th)\rVert/\lVert th\rVert\to0$, so
$T(h)=0$. Write $DF(a):=L$.

The **complex Jacobian** $J_{\mathbb C}F(a)$ is the matrix of $DF(a)$ relative to
the standard ordered bases of $\mathbb C^m$ and $\mathbb C^n$
([[lem-standard-basis-of-f-n]], [[def-coordinate-column-and-matrix-of-a-linear-map]]),
an $n\times m$ matrix over the field $\mathbb C$
([[def-matrices-over-a-commutative-ring]]); its $(j,k)$ entry is the $j$th
coordinate of $DF(a)e_k$.

## Remarks

**$n=1$ recovers the scalar definition.** For $n=1$ the norm on $\mathbb C^1$ is
the modulus and the displayed condition is that of
[[def-holomorphic-function-in-several-complex-variables]]; the Jacobian is then
the single row of the coordinates of $DF(a)$.

**The entries are the Wirtinger derivatives of the components.**
[[thm-componentwise-holomorphy-in-several-complex-variables]] shows that $F$ is
holomorphic exactly when each component $F_j$ is, and then
$(J_{\mathbb C}F(a))_{jk}=\partial_{z_k}F_j(a)$ with the operators of
[[def-wirtinger-operators-in-several-complex-variables]]. That identification is
proved there and is not assumed here: this definition fixes the Jacobian as the
matrix of the differential and nothing more.

**The target dimension $n=0$.** $\mathbb C^0$ has exactly one element, so every
map into it is holomorphic with zero differential and empty Jacobian; nothing
below needs that case and it is recorded only so that the convention is not left
open.
