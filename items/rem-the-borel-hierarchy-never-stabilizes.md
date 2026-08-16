---
id: rem-the-borel-hierarchy-never-stabilizes
kind: remark
title: "The Borel hierarchy on the real line never stabilizes at a countable stage"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: []
aliases: []
landmark: false
proved_here: false
external_dependency:
  source_url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
  exact_statement: "For every uncountable Polish space X and every alpha with 1 less than or equal to alpha less than omega-one, Sigma^0_alpha(X) is not equal to Pi^0_alpha(X); in particular Sigma^0_alpha(X) is a proper subset of Delta^0_{alpha+1}(X)."
  local_proof_attempt: "The internal closure and transfinite-stage theorems prove exhaustion by countable stages, but not that every stage is proper. Cardinality cannot separate the levels. The known diagonal proof requires universal Borel sets, which are not developed in MT-1."
  necessity: "The MT-1 companion refutes stabilization after a fixed finite number of alternations. Strictness of the Borel hierarchy is exactly the missing premise, and the companion page is a dependency leaf."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Marker, Descriptive Set Theory, Section 2, Corollary 2.38"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
    - title: "M. Christ, Math 202B Lecture 1, Comment on the Borel hierarchy"
      url: "https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf"
pipeline_run: null
---

## Statement

For an uncountable Polish space $X$ and every countable ordinal
$1\le\alpha<\omega_1$, Marker, Corollary 2.38, proves
$\Sigma^0_\alpha(X)\ne\Pi^0_\alpha(X)$ and, in particular,
$\Sigma^0_\alpha(X)\subsetneq\Delta^0_{\alpha+1}(X)$. Applied to
$X=\mathbb R$, this says that alternating countable unions and countable
intersections does not stabilize at any countable stage.

The strictness proof uses universal Borel sets and diagonalisation. Those
descriptive-set-theoretic constructions are not developed here, so this result
is recorded with its source rather than presented as a local theorem.
