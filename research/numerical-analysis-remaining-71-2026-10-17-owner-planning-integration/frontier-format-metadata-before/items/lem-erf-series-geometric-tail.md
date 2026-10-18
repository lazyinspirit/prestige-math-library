---
id: lem-erf-series-geometric-tail
kind: lemma
title: Error-function series geometric tail bound
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
    - title: DLMF, §7.6(i), equation 7.6.1
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For the $k$th term $e_k$ of the $\operatorname{erf}$ series in
[[def-fresnel-erf-and-hypergeometric-series]],

$$\frac{|e_{k+1}|}{|e_k|} =\frac{|z|^2}{k+1}\frac{2k+1}{2k+3} \le\frac{|z|^2}{k+1}.$$

Thus, if $|z|^2/(K+2)=q<1$, the tail after terms $0,\ldots,K$ is bounded by
$|e_{K+1}|/(1-q)$. The series converges locally uniformly and equals
$2/\sqrt\pi$ times the integral of $e^{-t^2}$ from $0$ to $z$.

## Facts & Assumptions

**Given:** The $\operatorname{erf}$ series in
[[def-fresnel-erf-and-hypergeometric-series]].

[F1] [[def-fresnel-erf-and-hypergeometric-series]]:
$e_k=(2/\sqrt\pi)(-1)^kz^{2k+1}/(k!(2k+1))$.

## Proof
1.1 Dividing successive absolute terms in [F1] gives the stated ratio. For $k\ge K+1$ it is at most $q<1$, so the tail is dominated by $|e_{K+1}|\sum_{j\ge0}q^j=|e_{K+1}|/(1-q)$. On every disk the ratio is eventually below $1$, proving local uniform convergence. [F1, algebra]

2.1 The exponential power series for $e^{-t^2}$ converges uniformly on each compact segment. Integrating termwise from $0$ to $z$ and multiplying by $2/\sqrt\pi$ gives [F1], establishing the integral identity. [F1, step 1.1, algebra] ∎