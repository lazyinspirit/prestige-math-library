---
id: cor-trace-is-surjective-for-finite-separable-extensions
kind: corollary
title: "The trace map of a finite separable extension is surjective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-trace-form-is-nondegenerate-iff-separable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Theorem 2.5"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is a finite separable field extension, then the trace map

$$\operatorname{Tr}_{K/F}\colon K\to F$$

is surjective.

## Facts & Assumptions

**Given:** A finite separable extension $K/F$.

[L1] The trace form $(x,y)\mapsto \operatorname{Tr}_{K/F}(xy)$ is nondegenerate exactly when the extension is separable ([[thm-trace-form-is-nondegenerate-iff-separable]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the trace form of $K/F$ is nondegenerate. If the trace map itself were zero, then $$\operatorname{Tr}_{K/F}(xy)=0$$ for every $x,y\in K$, so the vector $1\in K$ would lie in the radical, contradicting nondegeneracy. Therefore the trace map is not the zero linear functional. [L1, algebra]

2.1 The image of an $F$-linear map $K\to F$ is an $F$-subspace of the one-dimensional vector space $F$. A nonzero subspace of $F$ is all of $F$, so the trace map is surjective. [step 1.1, algebra] ∎
