---
id: lem-airy-functions-have-negative-real-zeros
kind: lemma
title: The Airy Ai function has a negative real zero
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-airy-initial-value-series, lem-airy-series-coefficient-recurrence-and-tail, def-euler-gamma-function, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives]
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
    - title: DLMF, §9.9(i), real zeros of Airy functions
      url: https://dlmf.nist.gov/9.9
    - title: DLMF, §§9.2(i)–(ii) and 9.9(i)
      url: https://dlmf.nist.gov/9.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 2
---

## Statement

The real Airy function $\operatorname{Ai}$ has at least one zero on the
negative real axis.

## Facts & Assumptions

**Given:** The Airy series in [[def-airy-initial-value-series]].

[F1] [[lem-airy-series-coefficient-recurrence-and-tail]]:
$\operatorname{Ai}$ is entire and satisfies $y''=zy$.

[F2] [[def-airy-initial-value-series]]:
$\operatorname{Ai}(0)=1/(3^{2/3}\Gamma(2/3))$.

[F3] [[def-euler-gamma-function]]: for real $a>0$,
$\Gamma(a)=\int_0^\infty t^{a-1}e^{-t}\,dt$.

[F4] [[thm-chain-rule]], [[thm-algebra-of-derivatives]], and
[[thm-sine-and-cosine-derivatives]] supply the chain, product, and sine and
cosine derivative formulas used in the real-variable argument.

## Proof
1.1 By [F3], $\Gamma(2/3)>0$, so [F2] gives $\operatorname{Ai}(0)>0$; in particular, $\operatorname{Ai}$ is not the zero function. Put $u(t)=\operatorname{Ai}(-t)$. By [F1] and the chain rule in [F4], $u''(t)+tu(t)=0$ for real $t$. [F1, F2, F3, F4, algebra]

2.1 Suppose $u$ has no zero on $[1,1+\pi]$. Continuity gives a constant sign; replace $u$ by $-u$ if necessary so that $u>0$ there. Set $W(t)=u'(t)\sin(t-1)-u(t)\cos(t-1)$. The product rule and sine and cosine derivatives in [F4], together with the equation in step 1.1, give $W'(t)=(1-t)u(t)\sin(t-1)\le0$ on this interval. [given, F4, step 1.1, algebra]

3.1 But $W(1)=-u(1)<0$ and $W(1+\pi)=u(1+\pi)>0$, contradicting that $W$ is nonincreasing. Therefore $u$ has a zero in $[1,1+\pi]$, and $\operatorname{Ai}$ has a zero in $[-(1+\pi),-1]$. [step 2.1, F4, contradiction] ∎
