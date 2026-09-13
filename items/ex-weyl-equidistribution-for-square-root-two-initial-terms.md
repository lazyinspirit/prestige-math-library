---
id: ex-weyl-equidistribution-for-square-root-two-initial-terms
kind: example
title: Initial terms of the square-root-two rotation
status: draft
origin: pipeline
deps: [thm-weyl-equidistribution-for-irrational-rotations, def-equidistribution-mod-one, ex-sqrt-two-exists, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§8.6, printed pp. 80–81"
proof_strategy: direct
---

## Example

Assume the Axiom of Countable Choice.  For $\alpha=\sqrt2$, the fractional parts $\{n\alpha\}$ for $n=0,\ldots,5$
are approximately

$$0,\quad0.4142,\quad0.8284,\quad0.2426,\quad0.6569,\quad0.0711.$$

Weyl's theorem says that the full sequence is equidistributed modulo one.

## Facts & Assumptions

**Given:** Countable choice and the positive square root $\sqrt2$.

[F1] The element $\sqrt2$ exists and is irrational ([[ex-sqrt-two-exists]]).

[F2] Every irrational rotation sequence is equidistributed modulo one ([[thm-weyl-equidistribution-for-irrational-rotations]]), in the half-open interval sense of [[def-equidistribution-mod-one]].

[F3] Countable choice is the standing assumption required by [F2] ([[def-countable-choice]]).

## Verification

**Proof technique:** direct arithmetic followed by the theorem.

1.1 The inequalities obtained by squaring positive rational bounds show $1<\sqrt2<3/2$, $4/3<\sqrt2<5/3$, $5/4<\sqrt2<3/2$, and $7/5<\sqrt2<8/5$.  Hence the relevant integer parts of $n\sqrt2$ for $n=0,\ldots,5$ are $0,1,2,4,5,7$. [F1, algebra]

2.1 Therefore the exact fractional parts are $$0,\quad\sqrt2-1,\quad2\sqrt2-2,\quad3\sqrt2-4, \quad4\sqrt2-5,\quad5\sqrt2-7.$$ Direct integer squaring gives $$\left(\frac{14142135}{10^7}\right)^2<2<\left(\frac{14142136}{10^7}\right)^2,$$ so positivity places $\sqrt2$ between these two rational numbers; substituting the bounds into the five exact expressions and rounding to four decimal places gives the displayed list. [F1, step 1.1, algebra]

3.1 Since $\sqrt2$ is irrational by [F1], [F2] applies and proves that the entire infinite sequence is equidistributed.  The six computations in step 2.1 illustrate this orbit; they do not by themselves prove its asymptotic distribution.  Countable choice is used only through [F2]. [F1, F2, F3, step 2.1] ∎
