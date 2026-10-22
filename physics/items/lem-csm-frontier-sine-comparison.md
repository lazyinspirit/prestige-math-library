---
id: lem-csm-frontier-sine-comparison
kind: lemma
title: Chord and Lipschitz bounds for sine
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - lem-derivative-of-a-power
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
dependency_roles:
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: NIST Digital Library of Mathematical Functions, Chapter 4, §4.18 Inequalities
      url: https://dlmf.nist.gov/4.18
      locator: "Equations 4.18.1 and 4.18.3: Jordan's chord inequality and the sine-to-argument bounds; the global Lipschitz estimate is proved locally from the mean value theorem."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For $|u|\le\pi/2$, $2|u|/\pi\le|\sin u|\le|u|$. For all real $u,v$, $|\sin u-\sin v|\le|u-v|$.

## Statement references

[[thm-sine-and-cosine-derivatives]]

## Facts & Assumptions

**Given:** Real numbers $u,v$, with $|u|\le\pi/2$ for the chord inequality.

[F1] $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$, and $\sin(\pi/2)=1$ ([[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F2] The product and quotient rules hold for differentiable functions on their domains ([[thm-algebra-of-derivatives]]).

[F3] The identity function has derivative $1$, and a differentiable function is continuous at each point where it is differentiable ([[lem-derivative-of-a-power]], [[cor-differentiable-implies-continuous]]).

[F4] The mean value theorem applies to a function continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ ([[cor-mean-value-theorem]]).

[F5] $\sin t\ge0$ on $[0,\pi/2]$, $|\cos t|\le1$ for all $t$, and $\sin(-t)=-\sin t$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

## Proof

1.1 On $[0,\pi/2]$ define $h(t)=\sin t-t\cos t$. By [F1]–[F3] and the product rule, $h$ is differentiable and continuous, with $h(0)=0$ and $h'(t)=t\sin t\ge0$ on $(0,\pi/2)$. For $0<t\le\pi/2$, the mean value theorem on $[0,t]$ gives $h(t)-h(0)=h'(c)t\ge0$ for some $c\in(0,t)$; at $t=0$ equality holds. [given, F1, F2, F3, F4, F5, algebra]

1.2 If $u=0$, then $|\sin u|=0=|u|$ by [F1]. For $0<|u|\le\pi/2$, sine is continuous on $[0,|u|]$ and differentiable on its interior by [F1] and [F3], so the mean value theorem applies on this nondegenerate interval. Its derivative has modulus at most $1$ by [F1] and [F5], so $|\sin |u||\le|u|$; parity gives $|\sin u|\le|u|$. [given, F1, F3, F4, F5, algebra]

2.1 For $0<t<\pi/2$, put $r(t)=\sin t/t$. The quotient rule and step 1.1 give $r'(t)=(t\cos t-\sin t)/t^2=-h(t)/t^2\le0$. Applying the mean value theorem to $r$ on $[t,\pi/2]$ yields $r(t)\ge r(\pi/2)=2/\pi$ by [F1] and the quarter-turn value in [F1]; the endpoint $t=\pi/2$ is equality, and $t=0$ is immediate. Parity in [F5] extends the lower bound to negative $u$. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 If $u\ne v$, apply the mean value theorem to $\sin$ on the closed interval with endpoints $u,v$. For some interior $c$, $|\sin u-\sin v|=|\cos c|\,|u-v|\le|u-v|$ by [F1], [F4], and [F5]; if $u=v$, both sides are zero. [given, F1, F4, F5, algebra] ∎
