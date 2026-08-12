---
id: cex-an-annihilating-polynomial-need-not-be-minimal
kind: counterexample
title: 'An annihilating polynomial need not be minimal: $\sqrt2$ is a root of both $x^2-2$ and $x^4-4$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-evaluation-kernel-and-minimal-polynomial, thm-eisenstein-irreducibility-criterion, cor-cauchy-reals-lub-complete, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Statement refuted

Every nonzero polynomial that vanishes at an algebraic element is that
element's minimal polynomial.

## Counterexample

Let $a=\sqrt2$, whose nonnegative real value satisfies $a^2=2$
because $\mathbb R$ is complete ([[cor-cauchy-reals-lub-complete]],
[[thm-of-square-roots]]). Then both $x^2-2$ and $x^4-4$ vanish at $a$, but
only the first is minimal.

## Facts & Assumptions

**Given:** The algebraic number $a=\sqrt2$ over $\mathbb Q$.

[F1] Eisenstein's criterion proves irreducibility over $\mathbb Q$ under its prime divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

[F2] The minimal polynomial is the unique monic irreducible generator of the evaluation kernel, and it divides every annihilating polynomial ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F3] The real numbers are a complete ordered field, so $\sqrt2$ exists and satisfies $(\sqrt2)^2=2$ ([[cor-cauchy-reals-lub-complete]], [[thm-of-square-roots]]).

## Verification

**Proof technique:** counterexample.

1.1 Evaluation gives $a^2-2=0$ and $a^4-4=0$. [F3, algebra]

2.1 The polynomial $x^2-2$ satisfies [F1] at $2$, so [F2] identifies it as the minimal polynomial of $a$ over $\mathbb Q$. [F1, F2, step 1.1]

3.1 The other annihilator factors as $x^4-4=(x^2-2)(x^2+2)$ and has larger degree, so it is a proper multiple of the minimal polynomial. [step 2.1, algebra]

4.1 Thus a polynomial may annihilate an algebraic element without being its minimal polynomial. [step 1.1, step 3.1] ∎
