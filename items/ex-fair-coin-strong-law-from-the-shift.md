---
id: ex-fair-coin-strong-law-from-the-shift
kind: example
title: The fair-coin strong law as a shift average
status: published
origin: pipeline
deps: [thm-fair-coin-frequency-strong-law, def-binary-sequence-cylinders-and-fair-coin-content, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§10.1 and 10.5, printed pp. 89–97"
proof_strategy: direct
---

## Example

Assume the Axiom of Countable Choice.  For a binary sequence $x$ and the
first-coordinate observable $f(x)=x_0$,

$$A_nf(x)=\frac1n\sum_{k=0}^{n-1}x_k.$$

Thus the fair-coin shift theorem is precisely the almost-sure convergence of
the empirical proportion of heads to $1/2$.

## Facts & Assumptions

**Given:** Countable choice, binary sequence space, its left shift $\sigma$, and $f(x)=x_0$.

[F1] Binary cylinders prescribe finitely many coordinates ([[def-binary-sequence-cylinders-and-fair-coin-content]]).

[F2] The fair-coin frequency theorem says $n^{-1}\sum_{k<n}x_k\to1/2$ almost surely ([[thm-fair-coin-frequency-strong-law]]).

## Verification

**Proof technique:** direct coordinate calculation.

1.1 The $k$th iterate of the left shift satisfies $(\sigma^kx)_0=x_k$. Therefore $f(\sigma^kx)=x_k$. [given, algebra]

2.1 Summing step 1.1 for $0\leq k<n$ and dividing by $n$ gives $A_nf(x)=n^{-1}\sum_{k<n}x_k$. [step 1.1, algebra]

3.1 Applying [F2] to the right side proves $A_nf(x)\to1/2$ almost surely. The observable is the cylinder indicator $\mathbf1_{\{x:x_0=1\}}$ from [F1], so this is the usual heads-frequency strong law written dynamically. Countable choice is inherited from [F2]. [F1, F2, step 2.1] ∎
