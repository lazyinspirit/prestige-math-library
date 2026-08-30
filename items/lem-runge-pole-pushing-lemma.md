---
id: lem-runge-pole-pushing-lemma
kind: lemma
title: "Runge's pole-pushing lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pole-pushing-along-a-chain-of-discs]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Lemma 9.2.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Lemma 4.4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $K\subseteq\mathbb C$ be compact.

1. If $\overline D_1,\dots,\overline D_m$ is a pole-pushing chain from $a_0$ to
   $a_m$ relative to $K$, then for every $\varepsilon>0$ there is a rational
   function $r$ with at most one finite pole, at $a_m$, such that
   $\sup_{z\in K}|r(z)-(z-a_0)^{-1}|<\varepsilon$.
2. If $a_0,\dots,a_m$ is such a chain and in addition $|z|<R<|a_m|$ for every
   $z\in K$, then for every $\varepsilon>0$ there is a polynomial $p$ with
   $\sup_{z\in K}|p(z)-(z-a_0)^{-1}|<\varepsilon$.

## Facts & Assumptions

**Given:** A compact set $K$, a pole-pushing chain as in the statement, and a tolerance $\varepsilon>0$.

[L1] In a pole-pushing chain, each consecutive pair $a_{j-1},a_j$ lies in a closed disc disjoint from $K$ ([[def-pole-pushing-along-a-chain-of-discs]]).

## Proof

**Proof technique:** constructive.

1.1 Fix one disc step of the chain, say a closed disc $\overline D(c,\rho)$ disjoint from $K$ and two points $a,b\in D(c,\rho)$. [given, L1] Define $S\subseteq D(c,\rho)$ to be the set of points $u$ such that $(z-a)^{-1}$ can be approximated uniformly on $K$ by rational functions with only pole $u$. Certainly $a\in S$.

2.1 Let $u\in S$. Choose $r>0$ so that $\overline D(u,r)\subseteq D(c,\rho)$ and $r<\operatorname{dist}(K,u)/2$. [step 1.1, choose, algebra] If $v\in D(u,r)$ and $m\ge1$, then for $z\in K$ one has $|u-v|<|z-v|$, so $$\frac{1}{(z-u)^m}=\frac{1}{(z-v)^m}\left(1-\frac{u-v}{z-v}\right)^{-m}=\sum_{\nu=0}^\infty \binom{m+\nu-1}{\nu}\frac{(u-v)^\nu}{(z-v)^{m+\nu}},$$ with uniform convergence on $K$. Therefore every rational function with only pole $u$ can be approximated uniformly on $K$ by one with only pole $v$. Since $u\in S$, this shows $v\in S$, so $S$ is open. The same expansion with $u$ and $v$ exchanged shows that whenever $v\in S$ is sufficiently close to $u$, then $u\in S$ as well. Hence $S$ is also closed in $D(c,\rho)$. Because the disc is connected and $S$ is nonempty, $S=D(c,\rho)$, so in particular $b\in S$. [given, L1, algebra]

3.1 If $m=0$, then $a_m=a_0$, and $r(z)=(z-a_0)^{-1}$ proves clause 1 with zero error. Assume $m\ge1$. Apply step 2.1 successively to the discs of the chain, choosing the $j$-th local error below $\varepsilon/m$. [step 2.1, choose, construct, cases, algebra] The triangle inequality then produces a rational function with only pole $a_m$ and total error below $\varepsilon$ on $K$. This proves clause 1. [step 2.1, choose, construct, cases, algebra]

4.1 For clause 2, clause 1 gives a rational function $r$ with only pole $a_m$ and $\sup_K|r(z)-(z-a_0)^{-1}|<\varepsilon/2$. [step 3.1, algebra, discharge-construct] Write the principal part of $r$ at $a_m$ as $\sum_{\ell=1}^L d_\ell(z-a_m)^{-\ell}$. Because $|z|<R<|a_m|$ on $K$, each factor $(z-a_m)^{-\ell}=(-a_m)^{-\ell}(1-z/a_m)^{-\ell}$ has a power series in $z/a_m$ that converges uniformly on $K$. Truncating those finitely many series gives a polynomial $p$ with $\sup_K|p-r|<\varepsilon/2$. Then $\sup_K|p(z)-(z-a_0)^{-1}|<\varepsilon$, proving the polynomial approximation. [step 3.1, algebra, discharge-construct] ∎
