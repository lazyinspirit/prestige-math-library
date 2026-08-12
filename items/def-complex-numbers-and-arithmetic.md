---
id: def-complex-numbers-and-arithmetic
kind: definition
title: 'The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-quotient-ring, def-field-extension-generated-subfields-and-simple-extension]
justified_by: [thm-complex-numbers-form-a-field]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Definition

Form the polynomial ring $\mathbb R[x]$
([[def-polynomial-ring-over-a-commutative-ring]]) and define the **complex
numbers** by the quotient ring
$$\mathbb C:=\mathbb R[x]/(x^2+1)$$
([[def-quotient-ring]]). Write $a$ for the constant class $a+(x^2+1)$ and set
$$i:=x+(x^2+1).$$
Thus $i^2=-1$ in the quotient. The constant-class map
$\mathbb R\to\mathbb C$ is the specified real map; its injectivity and the
field structure are proved in [[thm-complex-numbers-form-a-field]], after which
$\mathbb C/\mathbb R$ is a field extension in the sense of
[[def-field-extension-generated-subfields-and-simple-extension]].
