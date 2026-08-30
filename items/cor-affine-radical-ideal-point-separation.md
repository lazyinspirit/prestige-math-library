---
id: cor-affine-radical-ideal-point-separation
kind: corollary
title: "A radical ideal omitting a function admits a point that kills the ideal but not the function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-strong-nullstellensatz-two-inclusions, cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (15.7)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $k$ be an algebraically closed field, let
$A=k[x_1,\ldots,x_n]/I$ be an affine $k$-algebra, let $J\subseteq A$ be a
radical ideal, and let $f\in A\setminus J$. Then there exists a $k$-algebra map
$\varphi:A\to k$ such that $J\subseteq \ker\varphi$ and $\varphi(f)\ne 0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, an affine algebra $A=k[x_1,\ldots,x_n]/I$, a radical ideal $J\subseteq A$, and an element $f\notin J$.

[L1] In a polynomial ring over an algebraically closed field, $I(V(K))=\sqrt K$ for every ideal $K$ ([[cor-strong-nullstellensatz-two-inclusions]]).

[L2] Maximal ideals of an affine $k$-algebra are kernels of $k$-points ([[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $\pi:k[x_1,\ldots,x_n]\to A$ be the quotient map, let $J'=\pi^{-1}(J)$, and choose $\tilde f\in k[x_1,\ldots,x_n]$ with $\pi(\tilde f)=f$. Because $A/J\cong k[x_1,\ldots,x_n]/J'$ and $J$ is radical, $J'$ is a radical ideal of the polynomial ring. [given, choose]

2.1 Assume, for contradiction, that every $k$-algebra map $\varphi:A\to k$ whose kernel contains $J$ also satisfies $\varphi(f)=0$. Then every point $a\in k^n$ annihilating $J'$ also annihilates $\tilde f$, so $\tilde f\in I(V(J'))$. By [L1], $I(V(J'))=\sqrt{J'}=J'$, whence $f=\pi(\tilde f)\in J$, contradiction. [L1, step 1.1, assume-contra, contradiction]

3.1 Therefore some $k$-algebra map $\varphi:A\to k$ annihilating $J$ satisfies $\varphi(f)\ne 0$. Such a map is a point of the affine algebra by [L2]. [L2, step 2.1, discharge-contradiction] ∎
