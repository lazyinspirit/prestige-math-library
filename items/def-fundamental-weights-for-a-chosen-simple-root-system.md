---
id: def-fundamental-weights-for-a-chosen-simple-root-system
kind: definition
title: "Fundamental weights for a chosen simple root system"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-root-set-is-a-reduced-crystallographic-root-system]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Definition

Fix a simple root system $\Delta=\{\alpha_1,\dots,\alpha_r\}$ inside the root system of [[thm-the-root-set-is-a-reduced-crystallographic-root-system]]. The simple coroots $\alpha_i^\vee$ form a basis of $\mathfrak h$, so there are unique functionals $\omega_1,\dots,\omega_r\in \mathfrak h^*$ satisfying

$$\omega_i(\alpha_j^\vee)=\delta_{ij} \qquad (1\le i,j\le r).$$

These functionals are the **fundamental weights** for the chosen simple root system.
