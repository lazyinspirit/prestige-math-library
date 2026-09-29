---
id: cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
kind: corollary
title: "Euler characteristic of an orientable compact surface"
status: draft
origin: pipeline
deps: [thm-classification-of-compact-connected-surfaces, def-euler-characteristic-of-a-finite-cw-complex, def-axiom-of-choice]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6, Theorems 6.1–6.2, printed pp.94–96"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonempty compact
connected orientable boundaryless topological surface $S$ has a unique genus
$g\in\mathbb Z_{\geq0}$ and Euler characteristic
$\chi(S)=2-2g$. The sphere has $g=0$, represented by a genuine paired
$aa^{-1}$ digon. In particular, $\chi(S)$ is even and at most $2$.

## Facts & Assumptions

**Given:** $S$ as in the statement.

[L1] [[thm-classification-of-compact-connected-surfaces]] identifies every
nonempty compact connected orientable boundaryless surface with either the
sphere or the explicit $g$-torus sum for some $g\geq1$. Its canonical finite
CW cell counts are respectively $(2,1,1)$ and $(1,2g,1)$, and it proves
uniqueness of the model integer. Its only AC use is inherited from finite
triangulation.

[L2] For a finite CW complex the Euler characteristic is the alternating
cell count ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Proof

1.1 Apply [L1]. In the sphere case define $g=0$; its paired digon gives $\chi(S)=2-1+1=2=2-2g$ by [L2]. In the remaining orientable case [L1] supplies the $g$-fold torus word, with $g\geq1$, one vertex, $2g$ paired edges and one face. Hence $\chi(S)=1-2g+1=2-2g$ by [L2]. [L1,L2]

2.1 The formula gives $g=(2-\chi(S))/2$. Thus no second nonnegative integer can be the genus of the same surface; this agrees with the uniqueness in [L1]. Because $g\geq0$ is integral, $\chi(S)$ is even and at most $2$. The AC assumption enters only through [L1], not through this arithmetic. [L1,step 1.1] ∎
## Remarks

The empty reduced word is only notation for the genus-zero terminal case;
the geometric sphere model remains the paired digon.
