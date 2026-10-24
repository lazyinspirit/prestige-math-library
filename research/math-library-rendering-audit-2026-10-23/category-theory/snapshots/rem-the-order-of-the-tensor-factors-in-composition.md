---
id: rem-the-order-of-the-tensor-factors-in-composition
kind: remark
title: "The order of the tensor factors in enriched composition is fixed on this page"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-category]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (1.3)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Section 2.2"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Remark

Kelly writes the composition map of a $\mathcal V$-category as

$$\mathcal A(B,C)\otimes\mathcal A(A,B)\longrightarrow\mathcal A(A,C)$$

([[def-enriched-category]]), and that is the convention fixed for this page.
Other authors sometimes reverse the two tensor factors and rewrite every
diagram. For a merely monoidal base this is naturally a change from
$\mathcal V$ to the reversed monoidal category $\mathcal V^{\mathrm{rev}}$;
it becomes a convention inside the same base only when a chosen braiding
supplies the swap. Silently switching between the two orders without that
change destroys the associativity and naturality formulas. Every later formula
here keeps Kelly's order.
