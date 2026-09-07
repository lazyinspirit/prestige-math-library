---
id: ex-harnack-constant-from-the-poisson-kernel-ratio
kind: example
title: "Harnack constant from the poisson kernel ratio"
status: draft
origin: pipeline
deps: [lem-smooth-sphere-data-have-a-harmonic-replacement, thm-harnack-inequality-on-a-ball, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 Remark 14 equations (80)–(81), p.13"
---

## Example

Let $n\ge2$, $R>0$, and $u\ge0$ be harmonic on $B_R(0)$. For $x\in B_R(0)$ and $t=|x|/R$,
$$\frac{1-t}{(1+t)^{n-1}}u(0)\le u(x)\le\frac{1+t}{(1-t)^{n-1}}u(0).$$
These kernel bounds require no boundary trace at radius $R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[F1] Smooth sphere data have a unique harmonic replacement given by the sphere kernel and continuous with those boundary data. ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F2] A nonnegative harmonic function on $B_R$ satisfies $u(x)\le(R/(R-|x|))^n u(0)$. ([[thm-harnack-inequality-on-a-ball]]).

[F3] Harmonic functions have the ball mean-value property. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F4] Continuous functions with the ball mean-value property are smooth harmonic. ([[thm-continuous-mean-value-functions-are-harmonic]]).

## Verification

**Proof technique:** direct.

1.1 The ball mean property and continuous mean-value theorem give smoothness. Fix $|x|<s<R$. The smooth trace on $\partial B_s$ and harmonic replacement represent $u$ by the kernel there; at the center the same formula gives $\int_{\partial B_s}u=\omega_{n-1}s^{n-1}u(0)$. [F1, F3, F4, given]

2.1 For $|y|=s$, the inequalities $s-|x|\le|x-y|\le s+|x|$ bound the positive kernel above and below. Integrating against the nonnegative trace gives $\frac{1-q}{(1+q)^{n-1}}u(0)\le u(x)\le\frac{1+q}{(1-q)^{n-1}}u(0)$, where $q=|x|/s<1$. [step 1.1, algebra]

3.1 Let $s\uparrow R$ so $q\to t<1$. This proves the two bounds. If $u(0)=0$, ball Harnack already gives $u\equiv0$ on the ball, and both displayed inequalities are equalities. At $x=0$, both factors equal one. [F2, step 2.1, algebra] ∎
