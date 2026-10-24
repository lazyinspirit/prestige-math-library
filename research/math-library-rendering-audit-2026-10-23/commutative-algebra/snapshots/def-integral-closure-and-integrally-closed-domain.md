---
id: def-integral-closure-and-integrally-closed-domain
kind: definition
title: "Integral closure in an extension ring and integrally closed domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-ring-extension, def-field-of-fractions, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Definition (10.30)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definitions 6.6 and 6.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $A$ be a domain and let $A\to B$ be a homomorphism into a commutative ring. The **integral closure of $A$ in $B$** is the set of elements of $B$ integral over $A$. When $K$ is a field extension of the field of fractions $\operatorname{Frac}(A)$ of [[def-field-of-fractions]], the integral closure of $A$ in $K$ is often denoted $\overline A$.

The domain $A$ is **integrally closed** when every element of $\operatorname{Frac}(A)$ integral over $A$ already lies in $A$. Thus an integrally closed domain is one whose field of fractions contains no new elements integral over it.
