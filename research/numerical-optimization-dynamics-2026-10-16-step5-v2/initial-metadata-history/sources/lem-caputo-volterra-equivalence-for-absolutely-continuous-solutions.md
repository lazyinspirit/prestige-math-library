---
id: lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions
kind: lemma
title: Caputo and Volterra formulations are equivalent for absolutely continuous solutions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-caputo-derivative-and-fractional-integral
  - lem-continuous-fractional-integral-is-holder
  - lem-fractional-integral-semigroup
  - def-countable-choice
  - def-dependent-choice
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-first-fundamental-theorem-of-calculus-for-l-one
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The Axioms of Countable Choice and Dependent Choice are used only through the cited fundamental theorem for absolutely continuous functions. The Volterra existence theorem is a separate choice-free result.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §§1 and 4–5
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $T>0$,
$0<\alpha<1$, let $f\in C([0,T])$, and let $u\in AC([0,T])$. With
$u_0=u(0)$ and the Caputo derivative of
[[def-caputo-derivative-and-fractional-integral]],

$$D_C^\alpha u=f\quad\text{almost everywhere on }(0,T)$$

if and only if

$$u(t)=u_0+I^\alpha f(t)\quad\text{for every }t\in[0,T].$$

The absolute-continuity hypothesis is part of the differential-equation
solution class. The equivalence does not assert that an arbitrary continuous
solution of the Volterra equation is absolutely continuous.

## Facts & Assumptions

**Given:** The Axioms of Countable Choice and Dependent Choice, $T>0$, $0<\alpha<1$, $f\in C([0,T])$, and $u\in AC([0,T])$.

[A1] The Axiom of Countable Choice: every sequence of nonempty sets admits a choice function ([[def-countable-choice]]).

[A2] The Axiom of Dependent Choice: every total relation on a nonempty set admits a chain from a specified starting point ([[def-dependent-choice]]).

[F1] [[def-caputo-derivative-and-fractional-integral]]: for $u\in AC$, $D_C^\alpha u=I^{1-\alpha}u'$ almost everywhere.

[F2] [[lem-fractional-integral-semigroup]]: for positive $a,b$ and $g\in L^1$, $I^aI^b g=I^{a+b}g$ almost everywhere; $I^a g\in L^1$.

[F3] [[lem-continuous-fractional-integral-is-holder]]: if $g$ is continuous and $0<a<1$, then $I^a g$ is continuous.

[F4] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: under [A1] and [A2], an absolutely continuous $u$ has $u'\in L^1$ and $u(t)-u(0)=\int_0^t u'(s)ds$ for every $t$.

[F5] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: under [A1], the indefinite integral of an $L^1$ function has derivative equal to its integrand almost everywhere.

## Proof

1.1 Suppose $D_C^\alpha u=f$ almost everywhere and put $v=u'\in L^1$ by [F4]. Then $u-u_0=I^1v$. Applying $I^\alpha$ to the Caputo identity and using [F1] and [F2] gives $u-u_0=I^\alpha f$ almost everywhere. Both sides are continuous: $u$ is absolutely continuous and [F3] applies to $f$. If their continuous difference were nonzero at some point, continuity would make its absolute value bounded below by a positive constant on a relative interval of positive length (one-sided at an endpoint), contradicting equality almost everywhere. Thus the Volterra identity holds for every $t\in[0,T]$. [given, A1, A2, F1, F2, F3, F4, algebra]

2.1 Conversely, suppose $u-u_0=I^\alpha f$. Applying $I^{1-\alpha}$ and using [F2] gives $I^{1-\alpha}(u-u_0)=I^1f$. Since $u-u_0=I^1v$ by [F4], [F2] also gives $I^{1-\alpha}(u-u_0)=I^1(I^{1-\alpha}v)=I^1D_C^\alpha u$. Both integrands belong to $L^1$ by [F1], [F2], and [F4], so their indefinite integrals are continuous. These primitives agree almost everywhere by the preceding identities, hence everywhere by the continuity argument in step 1.1. Applying [F5] gives $f=D_C^\alpha u$ almost everywhere. [given, A1, F1, F2, F4, F5, step 1.1, algebra] ∎
