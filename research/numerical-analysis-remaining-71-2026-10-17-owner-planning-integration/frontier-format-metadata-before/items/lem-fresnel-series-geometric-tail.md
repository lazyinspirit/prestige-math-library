---
id: lem-fresnel-series-geometric-tail
kind: lemma
title: Fresnel series geometric tail bounds
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
sources:
  references:
    - title: DLMF, §7.6(i), equations 7.6.4 and 7.6.6
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For the terms $c_k$ of $C$ and $s_k$ of $S$ in
[[def-fresnel-erf-and-hypergeometric-series]],

$$\frac{|c_{k+1}|}{|c_k|}\le \frac{\pi^2|z|^4/4}{(2k+1)(2k+2)}, \qquad \frac{|s_{k+1}|}{|s_k|}\le \frac{\pi^2|z|^4/4}{(2k+2)(2k+3)}.$$

Once the applicable bound is at most $q<1$ for all terms after a first
omitted term, the absolute tail is bounded by that term divided by $1-q$.
Both series converge locally uniformly on $\mathbb C$ and equal the integrals
of $\cos(\pi t^2/2)$ and $\sin(\pi t^2/2)$ from $0$ to $z$.

## Facts & Assumptions

**Given:** The series definitions of $C,S$ in
[[def-fresnel-erf-and-hypergeometric-series]].

[F1] [[def-fresnel-erf-and-hypergeometric-series]]: $c_k=(-1)^k(\pi/2)^{2k}
z^{4k+1}/((2k)!(4k+1))$ and
$s_k=(-1)^k(\pi/2)^{2k+1}z^{4k+3}/((2k+1)!(4k+3))$.

## Proof
1.1 Taking ratios in [F1] gives $$\frac{|c_{k+1}|}{|c_k|}=\frac{\pi^2|z|^4}{4} \frac{4k+1}{(2k+1)(2k+2)(4k+5)},\qquad \frac{|s_{k+1}|}{|s_k|}=\frac{\pi^2|z|^4}{4} \frac{4k+3}{(2k+2)(2k+3)(4k+7)}.$$ The omitted factors are each less than $1$, yielding the displayed bounds. [F1, algebra]

2.1 The denominators in the bounds grow quadratically in $k$, so the ratios tend to zero; summing the resulting geometric majorant gives the stated tail bound and uniform convergence on every disk. [step 1.1, algebra]

3.1 The Taylor series for cosine and sine converge uniformly on the segment from $0$ to $z$. Integrating them termwise gives exactly the two series in [F1], proving their integral representations and path-independent entire extensions. [F1, step 2.1, algebra] ∎