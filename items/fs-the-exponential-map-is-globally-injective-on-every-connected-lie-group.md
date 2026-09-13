---
id: fs-the-exponential-map-is-globally-injective-on-every-connected-lie-group
kind: false-statement
title: The exponential map is globally injective on every connected Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-exponential-map-of-a-lie-group, def-lie-group, thm-continuous-image-of-a-connected-space]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Example 3.5, printed page 30
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory circle-group examples
---

## Statement refuted

The exponential map is globally injective on every connected Lie group.

## Facts & Assumptions

**Given:** The additive quotient $G=\mathbb R/\mathbb Z$ with its standard
one-dimensional quotient charts.

[F1] A Lie-group exponential evaluates the one-parameter subgroup with the
specified initial velocity at time one.
[[def-exponential-map-of-a-lie-group]].

[F2] A Lie group has smooth multiplication and inversion.
[[def-lie-group]].

[F3] A continuous image of a connected space is connected.
[[thm-continuous-image-of-a-connected-space]].

## Refutation

**Proof technique:** counterexample.

1.1 Addition and negation descend to smooth operations in the quotient charts, so $G$ is a one-dimensional Lie group. The quotient map $\pi:\mathbb R\to G$ is continuous and surjective; since $\mathbb R$ is connected, [F3] makes $G$ connected. [F2, F3]

2.1 For $X\in T_0G\simeq\mathbb R$, the curve $\gamma_X(t)=[tX]$ is a one-parameter subgroup with initial velocity $X$. Hence [F1] gives $\exp_G(X)=[X]$. [F1, step 1.1]

3.1 In particular, $\exp_G(0)=[0]=[1]=\exp_G(1)$ although $0\ne1$. Thus the exponential is not globally injective. [step 2.1, algebra]

4.1 The witness is nonempty, connected, and one-dimensional, so it also covers the lowest positive dimension. No metric, degeneracy, endpoint, choice, or biconditional occurs. The zero-dimensional connected case is harmless but cannot rescue the universal claim. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
