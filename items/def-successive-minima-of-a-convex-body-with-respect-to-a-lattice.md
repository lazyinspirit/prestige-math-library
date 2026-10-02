---
id: def-successive-minima-of-a-convex-body-with-respect-to-a-lattice
kind: definition
title: "Successive minima of a convex body"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-full-euclidean-lattice-and-covolume
  - def-convex-subset-of-euclidean-space
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Ben Green, Additive Combinatorics, Lecture 3 §3.7"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf"
      locator: "Lecture 3 §3.7 p.27."
    - title: "Martin Henk, Successive Minima and Lattice Points"
      url: "https://arxiv.org/pdf/math/0204158"
      locator: "§1 pp.1-2."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $\Lambda\subseteq\mathbb R^n$ be a full lattice
([[def-full-euclidean-lattice-and-covolume]]) and let
$C\subseteq\mathbb R^n$ be **centrally symmetric** (that is, $-C=C$),
convex in the sense of [[def-convex-subset-of-euclidean-space]], compact, and
with nonempty interior. For a real $t>0$ write

$$tC:=\{tx:x\in C\}.$$

For $1\le i\le n$ the $i$-th **successive minimum** of $C$ with respect to
$\Lambda$ is

$$\lambda_i(C,\Lambda):=\inf\bigl\{\,t>0:\dim_{\mathbb R}\operatorname{span}_{\mathbb R}(tC\cap\Lambda)\ge i\,\bigr\},$$

the infimum ranging over the nonempty set of real numbers $t>0$ for which the
linear span of the finite set $tC\cap\Lambda$ has dimension at least $i$.
When no such $t$ exists the infimum is $+\infty$; for the bodies considered
here it is finite, as recorded in the remarks below. We write
$\lambda_i$ for $\lambda_i(C,\Lambda)$ when $C$ and $\Lambda$ are fixed in
context, and we write $\lambda_0:=0$ by convention.

The scaling convention is that the body is enlarged and the lattice is held
fixed: $tC\cap\Lambda$ is the set of lattice points lying in the $t$-dilate of
$C$. Equivalently, because $C=-C$, one may think of the shortest vectors of
$\Lambda$ in the norm whose unit ball is $C$.

## Remarks

**The sets involved are finite.** Each $tC$ is bounded because $C$ is compact,
and a bounded subset of $\mathbb R^n$ meets a full lattice in finitely many
points. Indeed, write $\Lambda=B\mathbb Z^n$ using a basis matrix $B$. If
$S\subseteq\mathbb R^n$ is bounded, choose $M>0$ with $|x|\le M$ for all
$x\in S$. The inverse linear map is bounded by
[[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], say
$|B^{-1}x|\le K|x|$. Thus if $Bm\in S$ for $m\in\mathbb Z^n$, then
$|m|\le KM$, so every integer coordinate of $m$ lies in the finite interval
$[-KM,KM]$; only finitely many such integer vectors occur. Consequently
$\operatorname{span}(tC\cap\Lambda)$ is a
finite-dimensional real subspace and the dimension in the definition is a
genuine nonnegative integer, never an undecided quantity.

**Monotonicity.** If $0<s<t$ then $sC\subseteq tC$: for $x\in C$ one has
$0\in C$ and $(s/t)x+(1-s/t)\cdot0=(s/t)x\in C$ by convexity, so
$sx\in tC$. Hence $sC\cap\Lambda\subseteq tC\cap\Lambda$ and the dimension
function is nondecreasing in $t$; the sets inside the infimum are therefore
upward-closed, and
$0<\lambda_1\le\lambda_2\le\cdots\le\lambda_n$.

**Finiteness and positivity.** Central symmetry and nonempty interior put the
origin in the interior: if $v$ is an interior point then so is $-v$, and
$0=(v+(-v))/2$ is an interior point of $C$ by convexity. So $C$ contains a
Euclidean ball $\rho B^n$ about the origin with $\rho>0$, and compactness of
$C$ bounds it by some $R=\sup_{x\in C}|x|<\infty$, with $R>0$. Write
$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$ and let
$B:\mathbb R^n\to\mathbb R^n$ be the linear isomorphism
$B(m)=\sum_i m_i b_i$. Its inverse is a Euclidean linear map, so the bounded-
linear-map result [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]
gives a constant $K\ge1$ such that $|B^{-1}v|\le K|v|$ for every
$v\in\mathbb R^n$. For every nonzero integer vector $m\in\mathbb Z^n$,
$|m|\ge1$, and therefore $|Bm|\ge1/K$. If $Bm\in tC$, then
$|Bm|\le tR$, so $t\ge1/(KR)$ and hence $\lambda_1\ge1/(KR)>0$.
Conversely $\lambda_n<\infty$: for each $i$ choose $t_i\ge|b_i|/\rho$, so
that $b_i/t_i$ has norm at most $\rho$ and therefore lies in $C$; for
$t=\max_i t_i$ the set $tC\cap\Lambda$ contains $b_1,\dots,b_n$ and spans
$\mathbb R^n$. The infima defining the $\lambda_i$ are thus positive and
finite, and the next items prove that they are attained and control the
lattice vectors at the attained levels.
