---
id: "lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction"
kind: "lemma"
title: "A fixed point free ball map produces a boundary retraction"
deps: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Theorem 10.7 proof, p.24"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Theorem 10.7 proof, p.24"
status: published
origin: "pipeline"
proof_strategy: "Put v=x-f(x), a=<f(x),v>. The boundary point is f(x)+t v with t=(-a+sqrt(a^2+(1-|f(x)|^2)|v|^2))/|v|^2. Prove v!=0, the chosen root t>=1, continuity on the compact ball, and t=1 when x is on the boundary. This extends the published dimension-two lemma."
---

## Statement

For $n\ge1$, a continuous fixed-point-free map $f:D^n\to D^n$ would produce a continuous retraction $r:D^n\to S^{n-1}$ by following the ray from $f(x)$ through $x$ to the boundary.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

## Proof

1.1 Put $b=f(x)$, $v=x-b$, $a=\langle b,v\rangle$, and $q(s)=|b+sv|^2-1$. Since $v\ne0$, this is an upward quadratic with $q(0)\le0$ and $q(1)\le0$. Its larger root is $$t(x)=\frac{-a+\sqrt{a^2+(1-|b|^2)|v|^2}}{|v|^2}.$$ The discriminant is nonnegative and $q(1)\le0$ implies $t(x)\ge1$. [given, algebra]

2.1 Set $r(x)=b+t(x)v$. The nonzero denominator and the continuous square root of a nonnegative continuous function make $t$ and $r$ continuous. The root equation gives $|r(x)|=1$, so $r$ has the required target. No differentiability or uniform lower bound on the denominator is needed. [step 1.1, algebra]

3.1 If $|x|=1$, then $q(1)=0$ and $q'(1)=2\langle x,x-b\rangle=2(1-\langle x,b\rangle)>0$: equality in $\langle x,b\rangle\le |b|\le1$ would force $b=x$, excluded by hypothesis. Thus $1$ is the larger root and $r(x)=x$. This proves the retraction property, also on the two endpoints when $n=1$. [step 1.1, step 2.1, algebra] ∎
