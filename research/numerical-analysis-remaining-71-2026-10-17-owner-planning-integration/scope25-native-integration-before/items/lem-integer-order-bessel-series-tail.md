---
id: lem-integer-order-bessel-series-tail
kind: lemma
title: Convergence and geometric tails for integer-order Bessel series
status: draft
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

For $n\ge0$ and either series in [[def-integer-order-bessel-series]], the
absolute term ratio is

$$r_k=\frac{|z|^2}{4(k+1)(k+n+1)}.$$

The series for $J_n$ and $I_n$ converge absolutely and locally uniformly in
$z\in\mathbb C$. If $K\ge0$ and
$q=|z|^2/[4(K+2)(K+n+2)]<1$, then the tail after terms $k=0,\ldots,K$ has
absolute value at most $|a_{K+1}|/(1-q)$, where $a_k$ is the corresponding
series term. The first two differentiated series also converge locally
uniformly.

## Facts & Assumptions

**Given:** An integer $n\ge0$, $z\in\mathbb C$, and the two power series in
[[def-integer-order-bessel-series]].

[F1] [[def-integer-order-bessel-series]]: the terms are
$a_k^J=(-1)^k(z/2)^{2k+n}/(k!(k+n)!)$ and
$a_k^I=(z/2)^{2k+n}/(k!(k+n)!)$.

## Proof
1.1 For either term sequence, cancellation of the factorials gives $|a_{k+1}|/|a_k|=|z|^2/[4(k+1)(k+n+1)]$ whenever $a_k\ne0$; at $z=0$ the series are finite-valued directly. This ratio decreases to $0$. [given, F1, algebra]

2.1 For $k\ge K+1$ the ratios are at most $q$, so $\sum_{k=K+1}^{\infty}|a_k|\le |a_{K+1}|\sum_{j=0}^{\infty}q^j =|a_{K+1}|/(1-q)$. On every disk $|z|\le R$, the ratio is bounded by the same expression with $R$ in place of $|z|$, which is eventually below $1$; the Weierstrass test gives uniform convergence there. [step 1.1, algebra]

3.1 A derivative of order $d\in\{1,2\}$ multiplies the $k$th monomial by a factor bounded by $(2k+n)^d$ and lowers its power by $d$. The ratio of successive absolute differentiated terms is therefore $r_k$ times a factor that tends to $1$; on each disk it is eventually bounded by a constant below $1$. Thus both differentiated series converge uniformly on compact disks and may be differentiated termwise. [step 1.1, algebra] ∎