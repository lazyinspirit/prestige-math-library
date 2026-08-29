---
id: rem-caratheodory-also-constructs-the-product-measure
kind: remark
title: "The product measure can also be constructed from the rectangle algebra by Caratheodory extension"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-finite-rectangle-unions-form-a-generating-algebra, thm-caratheodory-extension-theorem, thm-caratheodory-domain-is-the-completion-under-sigma-finiteness, def-countable-choice]
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Proposition 5.11 and Definitions 5.12-5.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

Assume the Axiom of Countable Choice ([[def-countable-choice]]). The page's main
theorem chain defines the sigma-finite product measure through sections and
iterated integrals. There is a second standard construction. Its additional
input is the separate verification, carried out in the references above, that
the rectangle rule $\lambda_0(A\times B):=\mu(A)\nu(B)$ extends consistently
to a premeasure on the algebra of
[[lem-finite-rectangle-unions-form-a-generating-algebra]]. Once that premeasure
has been established, [[thm-caratheodory-extension-theorem]] extends it to the
generated product sigma-algebra; the extension theorem does not itself supply
the premeasure verification.

When the rectangle premeasure is sigma-finite,
[[thm-caratheodory-domain-is-the-completion-under-sigma-finiteness]] identifies
the full Caratheodory domain with the completion of that generated extension.
Uniqueness of the product measure itself is supplied separately by the main
product-measure theorem later on this page, not by either cited Caratheodory
result.
