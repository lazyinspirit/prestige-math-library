---
id: def-canonical-map-into-the-bidual
kind: definition
title: "The canonical evaluation map into the bidual"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, §2.4.1, (2.39), p.88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$, define $$J_X:X\to X^{**},\qquad (J_Xx)(f)=f(x)\quad(f\in X^*).$$ With the dual norm from [[def-dual-space-of-a-normed-space]], evaluation is linear in $f$ and $|(J_Xx)(f)|\le\|x\|\|f\|$, so $J_Xx$ is a bounded functional on $X^*$. The map is canonical and uses no chosen basis or conjugation.
