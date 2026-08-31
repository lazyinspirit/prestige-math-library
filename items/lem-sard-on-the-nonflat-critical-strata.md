---
id: lem-sard-on-the-nonflat-critical-strata
kind: lemma
title: "Sard on the nonflat critical strata"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $n\ge 1$, let $U\subseteq\mathbb R^m$ be open, let $f:U\to\mathbb R^n$ be
$C^r$, and for $j\ge 1$ define

$$
C_j:=\{x\in U:D^\alpha f(x)=0\text{ for every multi-index }1\le |\alpha|\le j\}.
$$

If $1\le j<r$, $K\subseteq C_j\setminus C_{j+1}$ is compact, and the
Morse-Sard conclusion is already known for $C^{r-j}$ maps from open subsets of
$\mathbb R^{m-1}$ to $\mathbb R^n$, then $f(K)$ is null.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, a $C^r$ map $f:U\to\mathbb R^n$, an integer $1\le j<r$, and a compact set $K\subseteq C_j\setminus C_{j+1}$.

[L1] If a Euclidean map has invertible derivative at a point, it becomes a coordinate there after shrinking ([[thm-euclidean-inverse-function-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Fix $x\in K$. [L1, given, choose]
Because $x\notin C_{j+1}$, some partial derivative of
order $j+1$ of some component of $f$ is nonzero at $x$. After reordering
coordinates and components, choose a multi-index $\alpha$ with $|\alpha|=j$
and a component $f^\mu$ such that, for
$$
g:=D^\alpha f^\mu,
$$
one has $\partial g/\partial x^1(x)\neq 0$. Since $g$ is $C^{r-j}$, [L1]
applied to
$$
\Phi_x(y):=\bigl(g(y),y^2,\ldots,y^m\bigr)
$$
gives a neighbourhood $W_x$ of $x$ and a $C^{r-j}$ diffeomorphism from $W_x$
onto an open set $I_x\times\Omega_x\subseteq\mathbb R\times\mathbb R^{m-1}$.
[L1, given, choose]

2.1 Every point of $K\cap W_x$ lies in $C_j$, so $g$ vanishes there by definition of $C_j$. [step 1.1, algebra]
Hence
$$
\Phi_x(K\cap W_x)\subseteq \{0\}\times\Omega_x.
$$
Define
$$
h_x:\Omega_x\to\mathbb R^n,\qquad h_x(u):=f\!\bigl(\Phi_x^{-1}(0,u)\bigr).
$$
This map is $C^{r-j}$. If $q=\Phi_x^{-1}(0,u)\in K\cap W_x$, then $q\in C_j$
and $j\ge 1$, so $Df_q=0$. Therefore
$$
Dh_x(u)=Df_q\circ D\bigl(\Phi_x^{-1}|_{\{0\}\times\Omega_x}\bigr)_u=0,
$$
so $u$ is a critical point of $h_x$. The induction hypothesis therefore gives
that
$$
f(K\cap W_x)=h_x\bigl(\Phi_x(K\cap W_x)\bigr)
$$
is a null subset of $\mathbb R^n$. [step 1.1, algebra]

3.1 Finitely many neighbourhoods $W_x$ cover the compact set $K$, so $f(K)$ is a finite union of null sets and therefore null. [step 2.1, given, choose]
∎
