---
id: ex-harnack-constant-from-the-poisson-kernel-ratio
kind: example
title: "Harnack constant from the Poisson kernel ratio under Countable Choice"
status: published
origin: pipeline
deps: [def-countable-choice, lem-smooth-sphere-data-have-a-harmonic-replacement, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 Remark 14 equations (80)–(81), p.13"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-harnack-constant-from-the-poisson-kernel-ratio). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Assume the Axiom of Countable Choice. Let $n\ge2$, $R>0$, and $u\ge0$ be harmonic on $B_R(0)$. For $x\in B_R(0)$ and $t=|x|/R$,
$$\frac{1-t}{(1+t)^{n-1}}u(0)\le u(x)\le\frac{1+t}{(1-t)^{n-1}}u(0).$$
These kernel bounds require no boundary trace at radius $R$.

## Facts & Assumptions

**Given:** Countable Choice and the objects and hypotheses in the example ([[def-countable-choice]]).

[F1] Smooth sphere data have a unique harmonic replacement given by the sphere kernel and continuous with those boundary data. ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F3] Harmonic functions have the ball mean-value property. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F4] Continuous functions with the ball mean-value property are smooth harmonic. ([[thm-continuous-mean-value-functions-are-harmonic]]).

## Verification

**Proof technique:** direct.

1.1 The ball mean property and continuous mean-value theorem give smoothness. Fix $|x|<s<R$. The smooth trace on $\partial B_s$ and harmonic replacement represent $u$ by the kernel there; at the center the same formula gives $\int_{\partial B_s}u=\omega_{n-1}s^{n-1}u(0)$. [F1, F3, F4, given]

2.1 For $|y|=s$, the inequalities $s-|x|\le|x-y|\le s+|x|$ bound the positive kernel above and below. Integrating against the nonnegative trace gives $\frac{1-q}{(1+q)^{n-1}}u(0)\le u(x)\le\frac{1+q}{(1-q)^{n-1}}u(0)$, where $q=|x|/s<1$. [step 1.1, algebra]

3.1 Let $s\uparrow R$ so $q\to t<1$. This proves the two bounds. If $u(0)=0$, the upper inequality from step 2.1 already gives $u(x)=0$ for each $x$, and both displayed inequalities are equalities. At $x=0$, both factors equal one. [step 2.1, algebra] ∎
