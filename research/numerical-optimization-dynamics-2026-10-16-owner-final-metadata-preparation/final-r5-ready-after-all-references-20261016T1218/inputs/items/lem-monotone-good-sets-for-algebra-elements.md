---
id: lem-monotone-good-sets-for-algebra-elements
kind: lemma
title: "Every member of the generated monotone class intersects every original algebra member inside the generated class"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-algebra-of-subsets, lem-generated-monotone-class-exists-and-is-minimal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, proof of Theorem 2.10"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be an algebra on $X$ and $\mathcal M=m_X(\mathcal A)$. For
every $B\in\mathcal A$ and every $E\in\mathcal M$, one has
$E\cap B\in\mathcal M$.

## Facts & Assumptions

**Given:** An algebra $\mathcal A$ on $X$, its generated monotone class $\mathcal M$, and a fixed $B\in\mathcal A$.

[L1] An algebra is closed under finite intersections ([[def-algebra-of-subsets]]).

[L2] The family $\mathcal M$ is the smallest monotone class containing $\mathcal A$ ([[lem-generated-monotone-class-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C_B:=\{E\in\mathcal M:E\cap B\in\mathcal M\}$. Intersection with $B$ commutes with increasing unions and decreasing intersections, so the two monotone closure axioms for $\mathcal M$ show that $\mathcal C_B$ is a monotone class. [L2, algebra]

2.1 If $E\in\mathcal A$, then $E\cap B\in\mathcal A\subseteq\mathcal M$ by [L1] and [L2]. Thus $\mathcal A\subseteq\mathcal C_B$, and minimality gives $\mathcal M\subseteq\mathcal C_B$. [step 1.1, L1, L2] ∎
