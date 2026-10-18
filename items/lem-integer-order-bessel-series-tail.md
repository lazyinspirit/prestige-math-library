---
id: lem-integer-order-bessel-series-tail
kind: lemma
title: Convergence and geometric tails for integer-order Bessel series
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §10.25(ii), modified Bessel power series
      url: https://dlmf.nist.gov/10.25
    - title: DLMF, §10.2(ii) and §10.25(ii)
      url: https://dlmf.nist.gov/10.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

For $n\ge0$, $z\ne0$, and either series in
[[def-integer-order-bessel-series]], the absolute term ratio is

$$r_k=\frac{|z|^2}{4(k+1)(k+n+1)}.$$

At $z=0$, the order-zero series have only the constant term $a_0=1$ and
positive orders have only zero terms; in every case the tail after terms
$k=0,\ldots,K$ is zero. The series for $J_n$ and $I_n$ converge absolutely
and locally uniformly in $z\in\mathbb C$. If $K\ge0$ and
$q=|z|^2/[4(K+2)(K+n+2)]<1$, then the tail after terms $k=0,\ldots,K$ has
absolute value at most $|a_{K+1}|/(1-q)$, where $a_k$ is the corresponding
series term. The first two formal termwise derivative series also converge
locally uniformly.

## Facts & Assumptions

**Given:** An integer $n\ge0$, $z\in\mathbb C$, and the two power series in [[def-integer-order-bessel-series]].

[F1] [[def-integer-order-bessel-series]]: the terms are $a_k^J=(-1)^k(z/2)^{2k+n}/(k!(k+n)!)$ and $a_k^I=(z/2)^{2k+n}/(k!(k+n)!)$.

## Proof
1.1 For $z\ne0$, every term is nonzero, and cancellation of the factorials gives $|a_{k+1}|/|a_k|=|z|^2/[4(k+1)(k+n+1)]$. This ratio decreases to $0$. At $z=0$, the series have only the possible order-zero constant term, so every tail after $k=0$ is zero without using a quotient. [given, F1, algebra]

2.1 For $z\ne0$ and $k\ge K+1$ the ratios are at most $q$, so $\sum_{k=K+1}^{\infty}|a_k|\le |a_{K+1}|\sum_{j=0}^{\infty}q^j =|a_{K+1}|/(1-q)$. At $z=0$ the same tail bound holds because the tail is zero. On each disk $|z|\le R$, put $q_R=R^2/[4(K+2)(K+n+2)]$. For sufficiently large $K$, $q_R<1$ and the nonzero-argument tail is bounded uniformly by $\sup_{|z|\le R}|a_{K+1}(z)|/(1-q_R)$; at $z=0$ it is zero. Thus the series converge uniformly on every disk. [step 1.1, algebra]

3.1 For derivative order $d\in\{1,2\}$, put $m=2k+n$. When $m\ge d$, the absolute value of the formal derivative term on $|z|\le R$ is at most $b_k=m(m-1)\cdots(m-d+1)R^{m-d}/(2^m k!(k+n)!)$. For $R>0$ the ratio $b_{k+1}/b_k$ equals $R^2/[4(k+1)(k+n+1)]$ times a factor tending to $1$, so it tends to $0$. The ratio test makes $\sum b_k$ finite; the Weierstrass test then gives uniform convergence of each formal derivative series on the disk. The finitely many terms with $m<d$ have zero derivative, and a disk of radius $R=0$ is immediate. [step 1.1, algebra] ∎
