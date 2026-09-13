---
id: fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic
kind: false-statement
title: Cohomologous symplectic forms on a noncompact manifold are always isotopic
status: draft
origin: pipeline
deps: ["thm-moser-stability-theorem", "thm-compact-support-moser-stability-on-a-noncompact-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, compactness discussion after Theorem 7.3, p. 45
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Cohomologous symplectic forms on a noncompact manifold are always related by a
Moser isotopy.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] Compact Moser stability requires compact $M$; its noncompact replacement
requires primitives with one common compact support.
[[thm-moser-stability-theorem]],
[[thm-compact-support-moser-stability-on-a-noncompact-manifold]].

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R^2$ let $\omega_0=dx\wedge dy=d(x\,dy)$ and $\omega_1=e^{-(x^2+y^2)}dx\wedge dy=d(F\,dy)$, where $F(x,y)=\int_0^x e^{-(s^2+y^2)}ds$. Both are symplectic and exact, hence cohomologous. [given, algebra]

2.1 Their total areas are respectively $+\infty$ and $\pi$. A diffeomorphism pulling $\omega_1$ back to $\omega_0$ would be orientation preserving and the change-of-variables formula would preserve total area, an impossibility. Thus no such symplectomorphism, and therefore no Moser isotopy, exists. The missing common-support/global-flow hypothesis in [F1] is substantive. [F1, step 1.1] ∎
