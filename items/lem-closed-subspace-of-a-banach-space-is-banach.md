---
id: lem-closed-subspace-of-a-banach-space-is-banach
kind: lemma
title: "A closed subspace of a Banach space is Banach"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-normed-subspace, thm-complete-subspace-iff-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $V$ be a Banach space and let $W\subseteq V$ be a closed linear subspace,
equipped with the restricted norm. Then $W$ is a Banach space.

## Facts & Assumptions

**Given:** A Banach space $V$ and a normed subspace $W\subseteq V$.

[L1] The metric of a normed subspace is the ambient metric restricted to the subspace ([[def-normed-subspace]]).

[L2] In a complete metric space, every closed subspace is complete ([[thm-complete-subspace-iff-closed]]).

[L3] A Banach space is a normed space complete for its norm metric ([[def-banach-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the ambient norm metric on $V$ is complete. [L3]

1.2 By [L1], the restricted norm on $W$ induces exactly the ambient subspace metric on $W$. [L1]

2.1 Since $W$ is closed in the complete metric space $V$, [L2] makes that subspace metric complete. [step 1.1, step 1.2, L2]

3.1 Completeness of the restricted norm metric is exactly the Banach property for $W$ by [L3]. [step 2.1, L3] ∎
