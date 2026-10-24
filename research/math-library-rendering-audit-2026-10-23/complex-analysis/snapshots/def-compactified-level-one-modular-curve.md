---
id: def-compactified-level-one-modular-curve
kind: definition
title: "The compactified level-one modular curve X(1)"
status: published
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - lem-modular-quotient-local-charts
  - lem-level-one-cusp-chart-and-compactness
  - def-quotient-topology
  - def-riemann-surface-and-holomorphic-atlas
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post.json"
    reviewed_raw_sha256: "27a44e715f7e755bdec148ae6c2c880984e4ae7b269af9c799c7d1fc9490dee3"
    content_sha256: "c8f4733330d943ceabc8d6ac16a0fd7f8c6225d9837143e9b58153af076047f8"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, printed pp. 97–98: the open modular quotient and its invariant J; compactification is supplied by Milne pp. 35–37."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Examples 2.19–2.20, Proposition 2.21 and the construction of X(Gamma), printed pp. 35–37."
---

## Definition

Let $\mathfrak H^*=\mathfrak H\cup\mathbb Q\cup\{\infty\}$ be the space of
[[lem-level-one-cusp-chart-and-compactness]] with its cusp-neighbourhood topology and
the action of $PSL_2(\mathbb Z)$
([[def-modular-group-action-on-the-upper-half-plane]],
[[def-quotient-topology]]). The **compactified level-one modular curve** is the
quotient

$$X(1):=PSL_2(\mathbb Z)\backslash\mathfrak H^*,$$

with the quotient topology and the structure of a compact Riemann surface whose interior quotient map $\mathfrak H\to X(1)$ is holomorphic and
whose cusp coordinate is $q=e^{2\pi i\tau}$
([[lem-level-one-cusp-chart-and-compactness]],
[[def-riemann-surface-and-holomorphic-atlas]]); its single **cusp** is the
class $[\infty]$. The **open modular curve** is the dense open subset

$$Y(1):=PSL_2(\mathbb Z)\backslash\mathfrak H=X(1)\setminus\{[\infty]\},$$

whose Riemann surface structure is the one supplied by the local chart lemma
for the quotient of the upper half-plane
([[lem-modular-quotient-local-charts]]). More generally, for a finite-index
subgroup $\Gamma\le PSL_2(\mathbb Z)$ we write $X_\Gamma:=\Gamma\backslash
\mathfrak H^*$ and $Y_\Gamma:=\Gamma\backslash\mathfrak H$ for the corresponding
quotient spaces, with $Y_\Gamma$ carrying the complex structure of
[[lem-modular-quotient-local-charts]].
