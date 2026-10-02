---
id: def-rho-function-for-a-closed-subgroup
kind: definition
title: "Rho-function for a closed subgroup"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix left Haar measures on a locally compact Hausdorff group $G$ and its closed subgroup $H$. Use the convention $\int_G f(xh)\,dx=\Delta_G(h)^{-1}\int_G f(x)\,dx$ for right translation by $h\in H$. A **rho-function** for $(G,H)$ is a positive continuous function $\rho:G\to(0,\infty)$ satisfying

$$\rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x)\qquad(x\in G,\ h\in H).$$

The ratio is fixed by the left-Haar and right-$H$ averaging conventions used in the Weil formula. In particular, a later ratio such as $\rho(g^{-1}x)/\rho(x)$ is constant on each right $H$-fiber.
