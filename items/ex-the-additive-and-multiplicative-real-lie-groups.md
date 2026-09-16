---
id: ex-the-additive-and-multiplicative-real-lie-groups
kind: example
title: The additive and multiplicative real Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-lie-group, def-exponential-map-of-a-lie-group, thm-exponential-addition-formula, thm-derivative-of-exponential]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Examples 3.4–3.5, printed page 30
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory examples
---

## Example

Assume $\mathrm{AC}_\omega$. The groups $(\mathbb R,+)$,
$(\mathbb R_{>0},\cdot)$, and $(\mathbb R^\times,\cdot)$ are one-dimensional
real Lie groups. Their exponentials are respectively

$$\exp_{(\mathbb R,+)}(x)=x,\qquad \exp_{(\mathbb R_{>0},\cdot)}(x)=e^x,\qquad \exp_{\mathbb R^\times}(x)=e^x.$$

The last map lands in the positive identity component.

## Facts & Assumptions

**Given:** The displayed groups with their open-submanifold structures.

[F1] Smooth group operations define a Lie group. [[def-lie-group]].

[F2] The Lie-group exponential is the time-one value of the invariant integral curve. [[def-exponential-map-of-a-lie-group]].

[F3] The ordinary exponential satisfies $e^{s+t}=e^se^t$ and has derivative $e^t$. [[thm-exponential-addition-formula]]. [[thm-derivative-of-exponential]].

[F4] The exponential-map interface [F2] assumes countable choice and records its use through the supplied invariant-field and completeness result. [[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Addition and negation are smooth on $\mathbb R$; multiplication and inversion $a\mapsto1/a$ are smooth on each of the open sets $\mathbb R_{>0}$ and $\mathbb R^\times$. Hence [F1] gives the three one-dimensional Lie groups. [F1, algebra]

2.1 The curve $t\mapsto tx$ is the additive one-parameter subgroup with derivative $x$ at zero. The curve $t\mapsto e^{tx}$ is a multiplicative one-parameter subgroup by [F3], has derivative $x$ at zero, and stays positive. By [F2] their time-one values give the displayed formulas. [F2, F3, step 1.1]

3.1 All groups are nonempty and one-dimensional; $\mathbb R^\times$ is disconnected but the other two are connected. At $x=0$ all exponentials give the identity. No metric, degeneracy, endpoint issue, or biconditional occurs. The assumed $\mathrm{AC}_\omega$ is used by [F2] through its stated supplier chain, with no further choice. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
