---
id: lem-central-elements-have-weight-zero
kind: lemma
title: "Central elements lie in the zero-weight subspace of $U(\\mathfrak g)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harish-chandra-projection, thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-root-space-brackets-add-their-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

Every central element of $U(\mathfrak g)$ lies in the zero-weight subspace for the adjoint action of the Cartan subalgebra. Equivalently, if $z\in Z(U(\mathfrak g))$, then

$$[h,z]=0 \qquad (h\in \mathfrak h).$$

## Facts & Assumptions

**Given:** A central element $z\in Z(U(\mathfrak g))$ and an element $h\in \mathfrak h$.

## Proof

**Proof technique:** direct.

1.1 If $z$ is central, then it commutes with every element of $\mathfrak g$, and in particular with every $h\in \mathfrak h$. Thus $[h,z]=0$ for all $h\in \mathfrak h$. [given]

2.1 By definition of the adjoint weight decomposition that underlies [[def-harish-chandra-projection]], the condition from step 1.1 is exactly the statement that $z$ has weight zero. Hence $z\in U(\mathfrak g)_0$. [step 1.1] ∎
