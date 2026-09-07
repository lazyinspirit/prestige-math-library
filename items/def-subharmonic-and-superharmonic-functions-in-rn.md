---
id: def-subharmonic-and-superharmonic-functions-in-rn
kind: definition
title: "Subharmonic and superharmonic functions in rn"
status: draft
origin: pipeline
deps: [def-laplacian-of-a-c2-function]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.1.1 Definition 2.4, p.22"
---

## Definition

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u:\Omega\to\mathbb R$ belong to $C^2(\Omega)$. With the Laplacian of [[def-laplacian-of-a-c2-function]], $u$ is **subharmonic** when $\Delta u\ge0$ at every point, and **superharmonic** when $\Delta u\le0$. Thus $u$ is harmonic exactly when both conditions hold, and $u$ is superharmonic exactly when $-u$ is subharmonic. Here a **domain** means a nonempty connected open set. This is the classical $C^2$ convention; the equivalence with local mean inequalities is established in the mean-inequality lemma.
