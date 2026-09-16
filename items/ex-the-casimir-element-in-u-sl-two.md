---
id: ex-the-casimir-element-in-u-sl-two
kind: example
title: The Casimir element in U(sl_2)
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra, ex-pbw-reordering-in-sl-two]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Example 13.9, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Example 5.6, printed p. 73"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

Over a characteristic-zero field, the expression

$$\Omega=ef+fe+\frac12h^2$$

defines an element of $U(\mathfrak{sl}_2)$. This example does not assert or
use its centrality.

## Facts & Assumptions

**Given:** The standard basis $e,f,h$ of $\mathfrak{sl}_2$ and its images in $U(\mathfrak{sl}_2)$ over a characteristic-zero field.

[L1] The enveloping algebra is a unital associative quotient in which such finite sums and products are defined ([[def-universal-enveloping-algebra]]).

[L2] For the PBW order $f<h<e$, one has $ef=fe+h$ ([[ex-pbw-reordering-in-sl-two]]).

## Verification

**Proof technique:** direct.

1.1 Characteristic zero makes $2$ invertible, and [L1] therefore makes the displayed finite polynomial in $e,f,h$ a well-defined enveloping-algebra element. [given, L1, algebra]

2.1 Using [L2], it has the PBW-normal expression $\Omega=2fe+h+\tfrac12h^2$. This is an equality of elements, not a centrality computation. [step 1.1, L2, algebra]

3.1 Thus the stated Casimir expression and its normal form are justified; centrality is deliberately deferred to the later Casimir and central-character treatment. [step 1.1, step 2.1] ∎
