---
id: cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention
kind: counterexample
title: "The long line is locally Euclidean and Hausdorff but not a manifold under the library convention"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-every-hausdorff-locally-euclidean-space-is-a-manifold,
       def-the-long-line, thm-the-long-line-is-a-connected-linear-continuum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
    - title: "MIT OpenCourseWare, The Long Line"
      url: "https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/e319b3a36ca774261b6b8c45e11804c2_notes_c.pdf"
pipeline_run: null
---

## Statement refuted

Every Hausdorff locally Euclidean space is a manifold.

## Facts & Assumptions

**Given:** The long line $\mathbb L$ and the Axiom of Countable Choice
$\mathrm{AC}_\omega$.

[L1] The A-page refutation already proves that $\mathbb L$ is Hausdorff and locally
Euclidean but not second countable, hence not a manifold under the library
convention ([[fs-every-hausdorff-locally-euclidean-space-is-a-manifold]]).

[F1] The long-ray construction and its order topology are those of
[[def-the-long-line]], and its order-theoretic connectedness properties are
recorded in [[thm-the-long-line-is-a-connected-linear-continuum]].

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the long line $\mathbb L$ is Hausdorff and locally Euclidean. [L1]

1.2 The same cited refutation shows that $\mathbb L$ fails second countability, so it is not a manifold under the library convention. The structural details of [F1] identify the witness but do not change that conclusion. [F1, L1]

2.1 Thus $\mathbb L$ is the required counterexample. [step 1.1, step 1.2] ∎
