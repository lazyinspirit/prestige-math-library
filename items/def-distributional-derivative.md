---
id: "def-distributional-derivative"
kind: "definition"
title: "Distributional derivative"
deps: ["def-distribution", "thm-test-function-operations-are-continuous"]
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

## Definition

For a distribution $u\in\mathcal D'(\Omega)$ in the convention of [[def-distribution]] and a multi-index $\alpha\in\mathbb N_0^n$, its **distributional derivative** is
$$\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle\qquad(\varphi\in\mathcal D(\Omega)).$$
The test derivative is a continuous linear endomorphism by [[thm-test-function-operations-are-continuous]]. Its composition with $u$, multiplied by the indicated sign, is therefore a continuous complex-linear functional, so this definition produces a distribution. The pairing is bilinear, with no complex conjugation. For $\alpha=0$ the operation is the identity; for one coordinate derivative its sign is minus. Every derivative of the zero distribution is zero, including on the empty domain. No choice axiom enters this construction. Compatibility with classical derivatives requires an integration-by-parts argument where it is used; it is not part of the definition.
