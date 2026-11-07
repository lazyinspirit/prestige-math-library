---
dependency_level: 1
id: lem-maynard-selberg-coordinate-transform-and-coefficient-bounds
kind: lemma
title: "Finite Maynard coordinate inversion and coefficient bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-squarefree-multiplicative-logarithmic-sums
  - def-number-theoretic-mobius-function
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
axiom_use: "Finite arithmetic, Riemann integrals and absolutely convergent numerical series; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section5, equations(5.7)–(5.9); the inversion and bounds are derived here for arbitrary finite supported arrays."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Let $k\ge1$, $R>1$, $W\ge1$ be fixed, with $k,W$ integers. Let $Y_r$ be a real array supported on tuples of positive integers for which $\prod_i r_i<R$ is squarefree and coprime to $W$. Put $Y=\max_r|Y_r|$, with zero for empty support, and define the finite array
$$\lambda_d=\left(\prod_i\mu(d_i)d_i\right) \sum_{d_i\mid r_i\ \forall i}\frac{Y_r}{\prod_i\varphi(r_i)}. \tag{1}$$
It has the same support restriction on $\prod_i d_i$, and its exact inverse is
$$Y_r=\left(\prod_i\mu(r_i)\varphi(r_i)\right) \sum_{r_i\mid d_i\ \forall i}\frac{\lambda_d}{\prod_i d_i}. \tag{2}$$
For tuples outside this squarefree coprime support both sides are zero. Moreover
$$\lambda_{\max}\ll_k Y(\log(2R))^k,\qquad \#\{d\in\mathbb N^k:\prod_i d_i<R\}\le R(1+\log R)^{k-1}.$$
All transforms are finite; no asymptotic limit is part of the inversion.

## Facts & Assumptions

**Given:** The finite array and parameters in the Statement.

[F1] [[def-number-theoretic-mobius-function]] and [[thm-fundamental-theorem-of-arithmetic]] give $\mu(u)=(-1)^{\omega(u)}$ on squarefree $u$, zero otherwise. For squarefree $v$, expansion of $\prod_{p\mid v}(1-1)$ gives $\sum_{u\mid v}\mu(u)=1$ if $v=1$ and zero otherwise.

[F2] [[lem-squarefree-multiplicative-logarithmic-sums]] supplies $\prod_{p\le X}(1+t/(p-1))\ll_t(\log(2X))^t$. The same supplier uses $\varphi(v)=\prod_{p\mid v}(p-1)$ on squarefree integers.

## Proof

1.1 A nonzero summand in (1) requires $d_i\mid r_i$ and hence $\prod_i d_i$ squarefree, coprime to $W$ and less than $R$. This proves the support assertion. For supported $r$, substitute (1) into the right side of (2) and interchange finite sums. The inner sum is [F1, given, algebra]
$$\prod_i\left(\sum_{r_i\mid d_i\mid s_i}\mu(d_i)\right) =\prod_i\left(\mu(r_i)\sum_{u_i\mid s_i/r_i}\mu(u_i)\right).$$
By [F1] it vanishes unless $s_i=r_i$ for every $i$, when it equals $\prod_i\mu(r_i)$. The outer factor in (2) then gives $Y_r$ exactly. If a tuple has nonsquarefree product or shares a prime with $W$, every potential nonzero $d$ multiple is excluded; if its product is at least $R$, no supported $d$ multiple exists. Thus (2) also gives zero there. [F1, given, algebra]

1.2 Fix supported $d$ and write $D=\prod_i d_i$. In a nonzero extension $r_i=d_i u_i$, the product $u=\prod_i u_i$ is squarefree and coprime to $DW$, and its primes can each be assigned to one of $k$ coordinates. Dropping the size restriction therefore gives [F1, F2, given, algebra]
$$|\lambda_d|\le Y\frac D{\varphi(D)} \prod_{\substack{p<R\\p\nmid DW}}\left(1+\frac{k}{p-1}\right) \le Y\prod_{p<R}\left(1+\frac{k}{p-1}\right).$$
The second inequality holds prime by prime: a prime of $D$ contributes $p/(p-1)\le1+k/(p-1)$, and omitted primes contribute one. Apply [F2] to prove the coefficient bound. No estimate $\varphi(D)\gg D$ is being assumed. [F1, F2, given, algebra]

1.3 For each fixed first $k-1$ coordinates with product at most $R$, there are at most $R/\prod_{i<k}d_i$ choices of the last coordinate. Extending each of these first coordinates independently to $1\le d_i\le R$ gives the upper bound [given, algebra]
$$R\left(\sum_{1\le u\le R}\frac1u\right)^{k-1}\le R(1+\log R)^{k-1}.$$
For $k=1$ the empty power is one. Empty arrays have $Y=\lambda_{\max}=0$, so the assertions remain valid. [given, algebra] ∎
