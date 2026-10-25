---
id: "rem-sobolev-weak-derivatives-belong-to-pde"
kind: "remark"
title: "Sobolev weak derivatives belong to pde"
deps: ["def-distributional-derivative"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
---

## Remark

The derivative supplied here is the distribution derivative: $\partial^\alpha u$ acts on a test by $(-1)^{|\alpha|}u(\partial^\alpha\varphi)$, as in [[def-distributional-derivative]]. It exists for every distribution, without assuming that it is represented by a function. Asking whether such a derivative has an integrable function representative is an additional question.

Sobolev spaces, their norms, boundary traces and weak-solution estimates belong to the PDE track. This pair supplies the test-function and distribution-derivative language they require; it makes no assertion here about Sobolev embeddings, regularity estimates or boundary-value problems. This is a scope boundary, with no theorem or future result consumed as a prerequisite.
