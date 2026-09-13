---
id: def-action-and-angle-coordinates
kind: definition
title: Action and angle coordinates
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definitions 6.16 and 6.18, pp. 72--74
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

**Action–angle coordinates** on a neighbourhood $U$ fibred by Lagrangian
tori are a diffeomorphism

$$ (I,\theta):U\longrightarrow B\times(\mathbb R/\mathbb Z)^n,$$

where $B\subseteq\mathbb R^n$ is open, such that the components
$I=(I_1,\ldots,I_n)$ and
$\theta=(\theta_1,\ldots,\theta_n)$ have fibres $I=\mathrm{constant}$ and

$$\omega=\sum_{i=1}^n d\theta_i\wedge dI_i.$$

This page uses period one for every angle. Replacing angles by period $2\pi$
rescales the corresponding actions and formulas. The order
$d\theta_i\wedge dI_i$ is forced by the library convention
$\iota_{X_H}\omega=dH$: it gives $\dot\theta_i=\partial H/\partial I_i$.
