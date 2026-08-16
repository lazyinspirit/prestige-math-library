---
id: lem-generated-monotone-class-exists-and-is-minimal
kind: lemma
title: "The generated monotone class exists and is minimal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-generated-monotone-class]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Definition 2.9 and Theorem 2.10"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

For every set $X$ and every $\mathcal E\subseteq\mathcal P(X)$, the family
$m_X(\mathcal E)$ is a monotone class on $X$, contains $\mathcal E$, and is
contained in every monotone class on $X$ that contains $\mathcal E$.

## Facts & Assumptions

**Given:** A set $X$, a family $\mathcal E\subseteq\mathcal P(X)$, and the intersection definition of $m_X(\mathcal E)$ in [[def-generated-monotone-class]].

## Proof

**Proof technique:** direct.

1.1 A nonempty intersection of monotone classes is closed under increasing countable unions and decreasing countable intersections, because each operation is performed in every class being intersected. [given]

1.2 The power set $\mathcal P(X)$ is a monotone class containing $\mathcal E$, so the family intersected in the definition of $m_X(\mathcal E)$ is nonempty. [given, construct]

2.1 By steps 1.1 and 1.2, $m_X(\mathcal E)$ is a monotone class. Every generator belongs to every class in the intersection, and the intersection is contained in each such class; hence it contains $\mathcal E$ and is minimal. [step 1.1, step 1.2] ∎
