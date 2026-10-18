---
id: thm-de-boor-coefficient-evaluation-equivalence
kind: theorem
title: de Boor evaluation equals the B-spline coefficient expansion
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-de-boor-coefficient-evaluation
  - def-b-spline-space-and-basis
  - thm-spline-polynomial-reproduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter X, pp. 123–126
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §1.1
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Statement

Let $p\in\mathbb N_0$, let $t_0\le\cdots\le t_{n+p}$ be the
zero-based reindexing of a clamped knot vector, and let
$S(x)=\sum_{i=0}^{n-1}c_iB_{i,p}(x)$ be its degree-$p$ B-spline
expansion, with $B_{i,p}=B_{i+1,p,\xi}$ under
[[def-b-spline-space-and-basis]]. If $k$ is a nonempty span index and
$x\in[t_k,t_{k+1})$, then the exact-arithmetic mode of
[[alg-de-boor-coefficient-evaluation]] returns $S(x)$. For $x=b$ it returns
the corresponding left limit when the last nonempty span is supplied.

## Facts & Assumptions

**Given:** A clamped degree-$p$ knot vector, coefficients $c_i$, a nonempty span $[t_k,t_{k+1})$, and a query in that half-open span, or the specified left limit at $b$.

[F1] [[alg-de-boor-coefficient-evaluation]] initializes the active list by $d_j^{(0)}=c_{k-p+j}$ and, in exact mode, updates $d_j^{(r)}=(1-\alpha_{j,r})d_{j-1}^{(r-1)}+\alpha_{j,r}d_j^{(r-1)}$ with $\alpha_{j,r}=(x-t_{k-p+j})/(t_{k+1+j-r}-t_{k-p+j})$.

[F2] [[def-b-spline-space-and-basis]] defines degree-zero B-splines as half-open interval indicators and gives the Cox–de Boor recurrence; a zero-denominator term is zero.

[F3] [[thm-spline-polynomial-reproduction]] states that on a nonempty span only $B_{k-p,p},\ldots,B_{k,p}$ can be active.

[A1] The algorithm is run in exact arithmetic and the supplied span is nonempty.

## Proof

1.1 By [F3], on the supplied span the spline value is the sum over its active indices only. With $d_j^{(0)}=c_{k-p+j}$, this is $S(x)=\sum_{j=0}^{p}d_j^{(0)}B_{k-p+j,p}(x)$. If $p=0$, the sole active degree-zero indicator equals one on the half-open span, so the algorithm's copy $c_k$ is exactly $S(x)$. [given, A1, F1, F3]

1.2 Suppose a current degree-$q$ local expansion has active coefficients $a_{k-q},\ldots,a_k$. Expand each basis function by [F2]. For every $i=k-q+1,\ldots,k$, the coefficient of $B_{i,q-1}(x)$ after collecting the two contributing terms is $\frac{(x-t_i)a_i+(t_{i+q}-x)a_{i-1}}{t_{i+q}-t_i}=\left(1-\frac{x-t_i}{t_{i+q}-t_i}\right)a_{i-1}+\frac{x-t_i}{t_{i+q}-t_i}a_i$. The two boundary terms are zero on $[t_k,t_{k+1})$: the left one is supported only up to $t_k$, and the right one starts at $t_{k+1}$. A zero denominator contributes zero by [F2]. Thus this degree reduction preserves the value at $x$. [A1, F2, algebra]

2.1 Starting at $q=p$, repeat step 1.2. After $r-1$ reductions the active degree is $q=p-r+1$, and the coefficient indexed by $i=k-p+j$ has the weight $(x-t_{k-p+j})/(t_{k+1+j-r}-t_{k-p+j})$, exactly $\alpha_{j,r}$ in [F1]. Hence each algorithmic update is the coefficient collection in step 1.2 and preserves the spline value. After $p$ reductions the sole degree-zero indicator on the span is one, so the remaining coefficient $d_p^{(p)}$ equals $S(x)$. At $b$ equality on the last open span extends to the prescribed left limit. [A1, F1, F2, step 1.2, induction] ∎
