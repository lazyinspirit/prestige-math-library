---
id: rem-continuous-dual-completeness-and-pairing
kind: remark
title: "The continuous dual, its completeness, and evaluation"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "thm-bounded-operator-space-is-banach"]
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
    - title: "Bühler–Salamon, Functional Analysis, §§1.3.1–1.3.2, Theorem 1.31 and (1.22), pp.31–32"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$, its continuous dual is $X^*=\mathcal B(X,\mathbb K)$ with the operator norm, as in [[def-dual-space-of-a-normed-space]]. Since the scalar field is complete, [[thm-bounded-operator-space-is-banach]] makes $X^*$ Banach even when $X$ is incomplete. The pairing $\langle f,x\rangle=f(x)$ is bilinear; it is not an inner product on $X$.
