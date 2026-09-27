---
id: lem-logarithmic-derivative-zeta-left-half-plane
kind: lemma
title: "A left-half-plane bound for the logarithmic derivative of zeta"
status: published
origin: pipeline
deps: [def-countable-choice, thm-riemann-zeta-functional-equation, thm-stirling-formula-gamma, thm-von-mangoldt-logarithmic-derivative-zeta]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.3"
      url: "https://kskedlaya.org/ant/chapter-10.html"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume countable choice.

Fix $\eta>0$.  If $\Re s\le-1$ and $s$ stays at distance at least $\eta$
from every negative even integer, then $\zeta'(s)/\zeta(s)=O_\eta(\log(|s|+2))$.

## Proof

**Given:** Countable choice and the displayed distance condition in the left half-plane.

1.1 Take logarithmic derivatives of [[thm-riemann-zeta-functional-equation]].  The logarithmic derivative of the sine factor is $\frac\pi2\cot(\pi s/2)$, which is uniformly bounded under the distance condition. Since $\operatorname{Re}(1-s)\ge2$, the absolutely convergent series for $-\zeta'/\zeta$ in [[thm-von-mangoldt-logarithmic-derivative-zeta]] bounds $\zeta'(1-s)/\zeta(1-s)$ uniformly. [given, algebra]

2.1 Applying [[thm-stirling-formula-gamma]] in the right half-plane to $1-s$ and differentiating its uniform analytic remainder by Cauchy's estimate on smaller sectorial disks gives $\Gamma'(1-s)/\Gamma(1-s)=O(\log(|s|+2))$ for $\operatorname{Re}(1-s)\ge2$. Combining the finitely many factor bounds proves the assertion. [step 1.1, algebra] ∎
