---
id: def-polynomials-that-split-and-splitting-fields
kind: definition
title: 'Polynomials that split and splitting fields of a polynomial or a family of polynomials'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: [splitting field]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Section 21.2'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Definition

Let $E/F$ be a field extension and let $0\ne f\in F[x]$ have degree $n$. The polynomial $f$ **splits over $E$** if there are $c\in F^\times$ and $\alpha_1,\ldots,\alpha_n\in E$ such that
$$ f(x)=c\prod_{j=1}^n(x-\alpha_j) $$
in $E[x]$, with repetitions allowed. When $n=0$, the product is empty, so every nonzero constant polynomial splits over $F$.

For a family $\mathcal F$ of nonzero polynomials in $F[x]$, a **splitting field of $\mathcal F$ over $F$** is a field extension $E/F$ such that every member of $\mathcal F$ splits over $E$ and $E$ is generated over $F$ by all roots in $E$ of all polynomials in $\mathcal F$. A splitting field of the one-element family $\{f\}$ is called a splitting field of $f$. For the empty family, the set of roots is empty and its splitting field is $F$.
