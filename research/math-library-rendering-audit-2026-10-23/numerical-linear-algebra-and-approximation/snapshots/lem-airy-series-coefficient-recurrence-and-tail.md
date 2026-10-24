---
id: lem-airy-series-coefficient-recurrence-and-tail
kind: lemma
title: Airy coefficient recurrence and geometric tail bounds
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-airy-initial-value-series, thm-termwise-differentiation-of-complex-power-series]
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
    - title: DLMF, §9.4, Airy Maclaurin series
      url: https://dlmf.nist.gov/9.4
    - title: DLMF, §9.2(ii), Airy initial values
      url: https://dlmf.nist.gov/9.2
    - title: DLMF, §§9.2(ii), 9.4, and 9.17(i)
      url: https://dlmf.nist.gov/9.17
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

The coefficient recurrence in [[def-airy-initial-value-series]] makes both
series solve $y''=zy$. In a residue class $k\equiv r\pmod 3$, successive
nonzero terms have absolute ratio

$$\frac{|z|^3}{(k+3)(k+2)}.$$

If the ratio of each term after a chosen first omitted term is bounded by
$q<1$, that class's tail is at most the first omitted term's absolute value
divided by $1-q$. The series and their first two derivative series converge
locally uniformly on $\mathbb C$.

## Facts & Assumptions

**Given:** The coefficient recurrence, $c_2=0$, and initial coefficients from
[[def-airy-initial-value-series]].

[F1] [[def-airy-initial-value-series]]: $c_{k+3}=c_k/((k+3)(k+2))$ and the
four initial values specify $\operatorname{Ai}$ and $\operatorname{Bi}$.

[F2] [[thm-termwise-differentiation-of-complex-power-series]]: a complex power
series may be differentiated term by term strictly inside its radius of
convergence.

## Proof
1.1 Multiplying the coefficient relation in [F1] by $z^{k+3}$ shows that the coefficient of $z^{k+1}$ in $y''$ is $c_k$, which is the coefficient of $z^{k+1}$ in $zy$. At degree $0$, the coefficients agree because $c_2=0$; at degree $1$, they agree by the recurrence at $k=0$. Thus the formal series satisfy $y''=zy$. [F1, algebra]

1.2 For $T_k=c_kz^k$ with $c_k\ne0$, $|T_{k+3}|/|T_k|=|z|^3/((k+3)(k+2))$. This tends to zero and decreases in $k$; once all subsequent ratios are at most $q<1$, summing the geometric majorant gives $\sum_{j\ge0}|T_{k_0+3j}|\le|T_{k_0}|/(1-q)$. [F1, algebra]

2.1 On every disk $|z|\le R$, the ratios of each residue-class term and of its first two formal derivative series tend to zero uniformly as $k\to\infty$. Applying the geometric bound from step 1.2 to each class gives locally uniform convergence of the series and differentiated series. The series have infinite radius by these bounds, so [F2] permits termwise differentiation; step 1.1 then proves the Airy equation for the sums. [F2, step 1.1, step 1.2, algebra] ∎
