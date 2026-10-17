---
id: thm-differential-rank-is-lower-semicontinuous
kind: theorem
title: 'Differential rank is lower semicontinuous'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-differential-rank-and-constant-rank, lem-matrix-rank-detected-by-nonzero-minors, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, cor-determinant-is-a-polynomial-in-the-matrix-entries, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-metric-topology]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, rank theorem discussion'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^1$ on an open set. For every natural $r$, the locus
$$U_{\ge r}:=\{x\in U:\operatorname{rank}Df(x)\ge r\}$$
is open. Thus $x\mapsto\operatorname{rank}Df(x)$ is lower semicontinuous. In particular the submersion locus, the immersion locus, and every locus on which the derivative has the largest possible rank are open.

## Facts & Assumptions

**Given:** A $C^1$ map $f:U\subseteq\mathbb R^m\to\mathbb R^n$ and a natural number $r$.

[L1] For $1\le r\le\min\{m,n\}$, a matrix has rank at least $r$ exactly when it has a nonzero $r$-rowed minor ([[lem-matrix-rank-detected-by-nonzero-minors]], [[def-differential-rank-and-constant-rank]], [[def-jacobian-matrix-and-gradient]]).

[L2] Each fixed-size determinant is a polynomial in the matrix entries, while the first partial derivatives of a $C^1$ map are continuous; sums, products, and composites of continuous Euclidean maps are continuous, and the empty set and whole metric space are open ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, then $U_{\ge r}=U$; if $r>\min\{m,n\}$, then $U_{\ge r}=\varnothing$. Both sets are open. [given, L2]

1.2 Assume $1\le r\le\min\{m,n\}$ and fix $a\in U_{\ge r}$. By [L1], one $r$-rowed minor $M(a)$ of $Jf(a)$ is nonzero. [given, L1, choose]

2.1 By [L2], the same minor $M(x)$ is a continuous scalar function of $x$. Its nonzero locus contains an open neighbourhood $V$ of $a$, and [L1] gives $V\subseteq U_{\ge r}$. [step 1.2, L1, L2]

3.1 Every point of $U_{\ge r}$ therefore has an open neighbourhood inside it, and the two exceptional cases were settled in step 1.1. Hence $U_{\ge r}$ is open for every $r$, proving all stated consequences. [step 1.1, step 2.1] ∎
