---
id: lem-gauss-hypergeometric-series-geometric-tail
kind: lemma
title: Gauss hypergeometric series geometric tail bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fresnel-erf-and-hypergeometric-series]
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
    - title: DLMF, §15.2(i), equation 15.2.1
      url: https://dlmf.nist.gov/15.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

Let $a,b,c,z\in\mathbb C$, $|z|<1$, and
$c\notin\{0,-1,-2,\ldots\}$. If $z=0$, then $h_0=1$ and $h_k=0$ for
$k\ge1$, so the series equals $1$ and every tail after $h_0$ is zero.
Suppose instead that $z\ne0$ and neither $a$ nor $b$ is a nonpositive
integer. Then every term $h_k=(a)_k(b)_kz^k/((c)_kk!)$ is nonzero, and for
any integer $N>|c|$,

$$\frac{|h_{k+1}|}{|h_k|} =|z|\frac{|a+k||b+k|}{|c+k|(k+1)} \le q_N:=|z|\frac{(1+|a|/N)(1+|b|/N)}{1-|c|/N} \qquad(k\ge N).$$

For sufficiently large $N$, $q_N<1$; then the tail starting at $h_N$ is at
most $|h_N|/(1-q_N)$. If $a$ or $b$ is a nonpositive integer, the series
terminates and its tail after the last nonzero term is zero.

## Facts & Assumptions

**Given:** The Gauss series in [[def-fresnel-erf-and-hypergeometric-series]] and its parameter restrictions.

[F1] [[def-fresnel-erf-and-hypergeometric-series]]: $h_k=(a)_k(b)_kz^k/((c)_kk!)$ and $(a)_{k+1}=(a+k)(a)_k$ (and likewise for $b,c$).

## Proof
1.1 In the nonterminating case with $z\ne0$, every term is nonzero. The Pochhammer product gives $h_{k+1}/h_k=z(a+k)(b+k)/((c+k)(k+1))$. For $k\ge N>|c|$, $|a+k|\le k(1+|a|/N)$, $|b+k|\le k(1+|b|/N)$, $|c+k|\ge k(1-|c|/N)$, and $k+1\ge k$. These inequalities yield the stated $q_N$. [given, F1, algebra]

2.1 For fixed nonterminating parameters, $q_N\to|z|<1$, so a finite $N$ has $q_N<1$; summing the geometric majorant proves the stated tail bound. On a compact subset with $|z|\le r<1$, replacing $|z|$ by $r$ gives a uniform ratio bound below $1$ for all sufficiently large $N$, proving local uniform convergence. If $z=0$, the tail is exactly zero by the Statement. If $a$ or $b$ is a nonpositive integer, its Pochhammer product becomes zero after finitely many terms, so the series terminates and its tail after the last nonzero term is zero. [given, step 1.1, algebra] ∎
