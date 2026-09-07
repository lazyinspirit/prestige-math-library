---
id: ex-normal-function-fixed-points-at-omega-one
kind: example
title: "Normal functions and fixed points at omega-one"
status: published
origin: pipeline
deps: ["thm-normal-function-fixed-points-form-a-club", "thm-clubs-and-normal-enumerations", "def-ordinal-multiplication", "def-ordinal-exponentiation", "thm-ordinal-multiplication-associative-and-left-distributive", "thm-countable-union-of-countable"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Welch, Lemmas 2.12–2.13 and Exercise 2.5, pp.20–21 (live original reread)"
      url: https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf
---

## Example

The map $f:\omega_1\to\omega_1$, $f(\alpha)=\omega\cdot\alpha$, is normal and its fixed points form a club. Iterating f from 1 gives $1,\omega,\omega^2,\ldots$, whose supremum $\omega^\omega$ is a countable fixed point. The fixed-point club has a normal increasing enumeration.

## Facts & Assumptions

[F6] [[thm-countable-union-of-countable]]: Assuming countable choice, a countable union of at most countable sets is at most countable.

[F1] [[def-ordinal-multiplication]]: Ordinal multiplication is defined by successor addition and continuity in the right argument.

[F2] [[def-ordinal-exponentiation]]: Powers are defined by right multiplication at successors and suprema at limits.

[F3] [[thm-ordinal-multiplication-associative-and-left-distributive]]: Ordinal multiplication is associative.

[F4] [[thm-normal-function-fixed-points-form-a-club]]: A normal self-map on a regular uncountable cardinal has club many fixed points.

[F5] [[thm-clubs-and-normal-enumerations]]: A club in a regular uncountable cardinal has a normal increasing enumeration.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 For countable alpha, omega times alpha is the order type of alpha many consecutive countable blocks, hence is countable in ZFC. Multiplication by omega on the left is strictly increasing: appending one nonempty omega block strictly increases the order type, and the recursive definition is monotone in the right argument. It is continuous at nonzero limits by the same definition. Thus f is a normal self-map of omega-one. [F1, F6]

2.1 Associativity and induction give $f(\omega^n)=\omega^{n+1}$ for each finite n, starting from $\omega\cdot1=\omega$. The countable supremum of these countable ordinals is $\omega^\omega<\omega_1$. Continuity gives $f(\omega^\omega)=\sup_n\omega^{n+1}=\omega^\omega$. [F1, F2, F3, F6, step 1.1]

3.1 The normal fixed-point theorem makes the whole fixed-point set club (including zero, since $f(0)=0$). The normal-enumeration theorem applies to this club and provides its normal increasing enumeration. [F4, F5, step 1.1, step 2.1] ∎
