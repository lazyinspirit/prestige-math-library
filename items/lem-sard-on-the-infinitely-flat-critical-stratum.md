---
id: lem-sard-on-the-infinitely-flat-critical-stratum
kind: lemma
title: "Sard on the infinitely flat critical stratum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multivariable-taylor-formula-with-lagrange-remainder,
       thm-heine-cantor-metric,
       def-null-and-content-zero-in-rn]
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

Let $n\ge1$ and $r\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R^n$ be $C^r$ with
$rn\ge m$. Let

$$ C_r:=\{x\in U:D^\alpha f(x)=0\text{ for every multi-index }1\le |\alpha|\le r\}. $$

If $K\subseteq C_r$ is compact, then $f(K)$ is null in $\mathbb R^n$.

## Facts & Assumptions

**Given:** Integers $n,r\ge1$, a $C^r$ map $f:U\to\mathbb R^n$ with $rn\ge m$, and a compact set $K\subseteq C_r$.

[L1] The multivariable Taylor formula with Lagrange remainder expresses the order-$r$ remainder using the order-$r$ derivatives at points of the joining segment ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

[L2] A continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F1] Euclidean nullity is proved by box covers of arbitrarily small total volume ([[def-null-and-content-zero-in-rn]]).

## Proof
**Proof technique:** direct.

1.1 If $m=0$, then $K$ has at most one point and $f(K)$ is finite, hence null in $\mathbb R^n$ by cubes of arbitrarily small side. Assume henceforth that $m\ge1$. For each $x\in K$, choose nested closed cubes $Q_x\subseteq\widehat Q_x\subseteq U$ with $x\in\operatorname{int}(Q_x)$ and $\widehat Q_x$ having $Q_x$ in its interior. Compactness gives finitely many inner cubes $Q_1,\ldots,Q_s$ whose interiors cover $K$. It suffices to prove that each $f(K\cap Q_i)$ is null, because finite unions of Euclidean null sets are null directly from the cube-cover definition [F1]. [F1, given, choose, cases]

2.1 Fix one pair $Q\subseteq\widehat Q$, let $K_Q:=K\cap Q$, and let $\lambda$ be the side length of $Q$. The finitely many order-$r$ partial derivatives of the components of $f$ are uniformly continuous on the compact cube $\widehat Q$ by [L2]. Since they vanish at every $x\in K_Q$, applying [L1] componentwise with degree $r-1$ shows that for every $\eta>0$ there is a single $\delta>0$ such that $$ |f(y)-f(x)|\le\eta\|y-x\|^r $$ whenever $x\in K_Q$, $y\in Q$, and $\|y-x\|<\delta$. [L1, L2, step 1.1, algebra]

3.1 Fix $\varepsilon>0$. If $rn=m$, choose $\eta>0$ so small that $(2\eta)^n m^{rn/2}\lambda^{rn}<\varepsilon$; if $rn>m$, choose any $\eta>0$. Let $\delta$ be furnished by step 2.1, and choose $N$ so large that the congruent subcubes in the subdivision of $Q$ into $N^m$ cubes have diameter below $\delta$. Use the following target cubes. [step 2.1, choose, cases]
For each subcube $Q_\nu$ meeting $K_Q$, choose a point $x_\nu\in K_Q\cap Q_\nu$. If $y\in K_Q\cap Q_\nu$, then $\|y-x_\nu\|\le \sqrt m\,\lambda/N$, so step 2.1 gives
$$ |f(y)-f(x_\nu)|\le \eta\Bigl(\frac{\sqrt m\,\lambda}{N}\Bigr)^r. $$
Hence $f(K_Q\cap Q_\nu)$ lies in an $n$-cube of side length at most
$$ 2\eta\Bigl(\frac{\sqrt m\,\lambda}{N}\Bigr)^r. $$
[step 2.1, choose, algebra]

4.1 The union of those target cubes covers $f(K_Q)$, and its total $n$-volume has the following bound. [F1, step 3.1, cases, algebra]
It is
at most
$$ N^m\Bigl(2\eta\Bigl(\frac{\sqrt m\,\lambda}{N}\Bigr)^r\Bigr)^n =(2\eta)^n m^{rn/2}\lambda^{rn}N^{m-rn}. $$
If $rn>m$, increase $N$ until this quantity is below $\varepsilon$; if $rn=m$,
the choice of $\eta$ in step 3.1 already makes it smaller than $\varepsilon$.
In either case the total covering volume is below $\varepsilon$. Therefore [F1] implies that
$f(K_Q)$ is null. [F1, step 3.1, cases, algebra]

5.1 Applying step 4.1 to the finite cover from step 1.1 shows that $f(K)$ is null. Thus the infinitely flat critical stratum has null image. [F1, step 1.1, step 4.1] ∎
