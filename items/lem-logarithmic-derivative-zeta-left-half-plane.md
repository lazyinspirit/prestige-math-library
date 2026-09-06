---
id: lem-logarithmic-derivative-zeta-left-half-plane
kind: lemma
title: "A left-half-plane bound for the logarithmic derivative of zeta"
status: draft
origin: pipeline
deps: [thm-riemann-zeta-functional-equation, thm-stirling-formula-gamma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.3"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

Fix $\eta>0$.  If $\Re s\le-1$ and $s$ stays at distance at least $\eta$
from every negative even integer, then $\zeta'(s)/\zeta(s)=O_\eta(\log(|s|+2))$.

## Proof

**Given:** the displayed distance condition in the left half-plane.

1.1 Take logarithmic derivatives of the zeta functional equation.  The logarithmic derivative of the sine factor is $\frac\pi2\cot(\pi s/2)$, which is uniformly bounded under the distance condition; also $\zeta'(1-s)/\zeta(1-s)=O(1)$ because $\operatorname{Re}(1-s)\ge2$. [given, algebra]

2.1 Stirling's formula bounds the logarithmic derivative of the Gamma factor by $O_\eta(\log(|s|+2))$ there.  Combining the finitely many factor bounds proves the assertion. [step 1.1, algebra] ∎
