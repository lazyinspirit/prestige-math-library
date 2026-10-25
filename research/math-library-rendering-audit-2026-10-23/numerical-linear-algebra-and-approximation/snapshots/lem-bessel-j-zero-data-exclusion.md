---
id: lem-bessel-j-zero-data-exclusion
kind: lemma
title: Adjacent initial Bessel values cannot both vanish
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, lem-integer-order-bessel-recurrences-and-ode, thm-identity-theorem-holomorphic-functions]
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
    - title: DLMF, §§10.2(i)–(ii)
      url: https://dlmf.nist.gov/10.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

For every real $x>0$, $J_0(x)$ and $J_1(x)$ are not both zero.

## Facts & Assumptions

**Given:** A real number $x>0$ and the integer-order Bessel functions from
[[def-integer-order-bessel-series]].

[F1] [[lem-integer-order-bessel-recurrences-and-ode]]: $J_0$ is entire,
satisfies $z^2J_0''+zJ_0'+z^2J_0=0$, has $J_0(0)=1$, and
$J_0'=-J_1$.

[F2] [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions
on a complex domain that agree on a set with an interior accumulation point
agree throughout that domain.

## Proof
1.1 Suppose $J_0(x)=J_1(x)=0$. By [F1], $J_0(x)=J_0'(x)=0$. Expand the entire function about $x$, $J_0(x+w)=\sum_{m\ge0}a_mw^m$. The coefficient of $w^m$ in the differential equation in [F1] is $$x^2(m+2)(m+1)a_{m+2}+x(m+1)(2m+1)a_{m+1} +(m^2+x^2)a_m+2xa_{m-1}+a_{m-2}=0,$$ with $a_{-1}=a_{-2}=0$. Since $a_0=a_1=0$ and $x>0$, induction gives $a_m=0$ for all $m$, so $J_0$ vanishes on a disk about $x$. [given, F1, algebra]

2.1 Apply [F2] to $J_0$ and the zero function on the connected domain $\mathbb C$. It follows that $J_0$ is identically zero, contradicting $J_0(0)=1$ from [F1]. Thus $J_0(x)$ and $J_1(x)$ cannot both vanish. [F1, F2, step 1.1] ∎