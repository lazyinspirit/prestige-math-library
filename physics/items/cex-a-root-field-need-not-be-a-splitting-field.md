---
id: cex-a-root-field-need-not-be-a-splitting-field
kind: counterexample
title: 'Adjoining one root need not split the polynomial: $\mathbb Q(\sqrt[3]{2})$ does not split $x^3-2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-splitting-field-of-x-cubed-minus-two, thm-reals-ordered-field, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Example 21.15'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement refuted

If a field is obtained by adjoining one root of a polynomial, then the polynomial splits over that field.

## Facts & Assumptions

**Given:** The real root $\alpha=\sqrt[3]{2}$ of $x^3-2$ and the field $\mathbb Q(\alpha)$.

[F1] For $\alpha=\sqrt[3]{2}$ and $\omega=(-1+i\sqrt3)/2$, the roots of $x^3-2$ are $\alpha,\alpha\omega,\alpha\omega^2$ ([[ex-splitting-field-of-x-cubed-minus-two]]).

[F2] The real numbers form an ordered field, and the complex numbers have unique coordinates $a+bi$ over $\mathbb R$ ([[thm-reals-ordered-field]], [[thm-complex-numbers-form-a-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The positive real number $\alpha=\sqrt[3]{2}$ is a root of $x^3-2$, and every element of $\mathbb Q(\alpha)$ is real because it is obtained from rational numbers and $\alpha$ by field operations inside $\mathbb R$. [F2]

1.2 In [F1], the imaginary part of $\omega$ is $\sqrt3/2>0$, while direct multiplication gives the imaginary part of $\omega^2$ as $-\sqrt3/2<0$. Since $\alpha>0$, the roots $\alpha\omega$ and $\alpha\omega^2$ are both nonreal and hence neither lies in $\mathbb Q(\alpha)$. [F1, F2, algebra]

2.1 Therefore $\mathbb Q(\alpha)$ contains one root but not all roots of $x^3-2$, so the polynomial does not split there. [F1, step 1.1, step 1.2] ∎
