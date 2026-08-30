---
id: def-simple-integral-against-a-signed-or-complex-measure
kind: definition
title: "The simple integral against a signed or complex measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-simple-function, def-signed-measure, def-complex-measure,
       def-total-variation-of-a-signed-or-complex-measure]
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let
$$s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$$
be the canonical disjoint representation of a complex simple function on
$(X,\mathcal A)$ using only its nonzero level sets, so every $c_j\ne0$. Let
$\nu$ be a signed measure or a complex measure on $(X,\mathcal A)$.

Assume that $|\nu|(E_j)<+\infty$ for every $j$.

Define the **simple integral of $s$ against $\nu$** by
$$\int s\,d\nu:=\sum_{j=1}^m c_j\nu(E_j).$$
If $F\in\mathcal A$ is measurable and $|\nu|(E_j\cap F)<+\infty$ for every $j$,
define likewise
$$\int_F s\,d\nu:=\sum_{j=1}^m c_j\nu(E_j\cap F).$$

The finiteness hypotheses make every $\nu(E_j)$ and $\nu(E_j\cap F)$ a finite
real or complex number: the one-piece partition of the relevant set contributes
at least its single term to the defining supremum for total variation. Because
the canonical representation is unique up to deleting empty level sets, the
value above is well defined.
