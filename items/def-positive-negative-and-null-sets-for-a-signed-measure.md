---
id: def-positive-negative-and-null-sets-for-a-signed-measure
kind: definition
title: "Positive, negative, and null sets for a signed measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-signed-measure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Definition 12.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 6.16"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $\nu$ be a signed measure on $(X,\mathcal A)$.

- A measurable set $P$ is **positive for $\nu$** when $\nu(E)\ge0$ for every
  measurable $E\subseteq P$.
- A measurable set $N$ is **negative for $\nu$** when $\nu(E)\le0$ for every
  measurable $E\subseteq N$.
- A measurable set $Z$ is **null for $\nu$** when $\nu(E)=0$ for every
  measurable $E\subseteq Z$.

The null-set clause is the strong one used throughout the page: it asks for
vanishing on every measurable subset, not only on the ambient set itself.
