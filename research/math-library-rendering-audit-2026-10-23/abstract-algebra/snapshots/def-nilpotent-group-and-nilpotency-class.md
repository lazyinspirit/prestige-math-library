---
id: def-nilpotent-group-and-nilpotency-class
kind: definition
title: "Nilpotent groups and nilpotency class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-upper-central-series, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

A group $G$ is **nilpotent** if $Z_c(G)=G$ for some $c\in\mathbb N$, where $(Z_r(G))$ is its upper central series ([[def-upper-central-series]]). The least such $c$ is the **nilpotency class** of $G$. This least index exists by the well-ordering principle for nonempty subsets of $\mathbb N$ ([[thm-well-ordering-principle]]).

Thus the trivial group has class $0$. A nontrivial group has class $1$ exactly when it is abelian.
