---
id: fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects
kind: false-statement
title: "FALSE: objectwise projective-resolution choices uniquely determine a resolution functor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-enough-projectives-gives-projective-resolutions, thm-free-modules-are-projective-with-choice-boundary]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "The Stacks Project, Section 12.28: Projectives"
      url: "https://stacks.math.columbia.edu/tag/013A"
pipeline_run: frontier-28
---
## Statement

> **False.** Once one projective resolution has been chosen for each object in a category with enough projectives, those objectwise choices uniquely determine comparison maps and hence a projective-resolution functor.
## Facts & Assumptions

**Given:** The category of abelian groups and the standard projective resolution of $\mathbb Z/2\mathbb Z$.

[L1] Enough projectives gives projective resolutions only after choosing successive projective epimorphisms for each fixed object ([[thm-enough-projectives-gives-projective-resolutions]]).

[L2] Finite-rank free modules are projective without any infinite choice ([[thm-free-modules-are-projective-with-choice-boundary]]).
## Refutation

**Proof technique:** direct.

1.1 The proof of [L1] is objectwise: it chooses terms and differentials but supplies no unique lift of a morphism between resolved objects. [L1]

1.2 The exact row $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$ is a projective resolution by [L2]. On two copies of it, multiplication by $1$ in both degrees and multiplication by $3$ in both degrees are distinct chain maps lifting the identity of $\mathbb Z/2\mathbb Z$: both commute with multiplication by $2$, and $3\equiv1\pmod2$. Thus the chosen objectwise resolution does not uniquely determine the map assigned to the identity morphism. [L2, algebra]

2.1 Therefore objectwise resolution choices do not uniquely determine comparison maps or a resolution functor; additional coherent choices or a separate functorial construction are required. [step 1.1, step 1.2] ∎
