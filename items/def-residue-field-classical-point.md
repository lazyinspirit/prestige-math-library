---
id: def-residue-field-classical-point
kind: definition
title: "The residue field at a classical point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-residue-field-of-a-localisation-at-a-prime, thm-local-ring-affine-variety-localization]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Corollary 3.12"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 5.1.10"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a classical affine variety and let $x \in X$. The **residue field**
at $x$ is the quotient
$$ \kappa(x):=\mathcal O_{X,x}/\mathfrak m_x, $$
where $\mathfrak m_x$ is the maximal ideal of germs vanishing at $x$.

By [[thm-local-ring-affine-variety-localization]] and
[[cor-residue-field-of-a-localisation-at-a-prime]], this residue field is
canonically isomorphic to the ground field $k$ in the classical
algebraically-closed setting.
