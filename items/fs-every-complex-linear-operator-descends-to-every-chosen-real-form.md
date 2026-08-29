---
id: fs-every-complex-linear-operator-descends-to-every-chosen-real-form
kind: false-statement
title: "FALSE: every complex-linear operator descends to every chosen real form"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form, thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation]
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
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement

Every complex-linear operator on a complex vector space descends to every chosen real form.

## Facts & Assumptions

**Given:** The complex vector space $\mathbb C^2$, the coordinatewise conjugation $\sigma_0$, the real form $\mathbb R^2$, and the operator $T(z_1,z_2)=(iz_1,z_2)$.

[L1] The complex-linear operator $T(z_1,z_2)=(iz_1,z_2)$ fails to commute with $\sigma_0$ and does not carry $\mathbb R^2$ into itself ([[cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form]]).

[L2] A complex-linear operator comes from a real operator on the fixed real form exactly when it commutes with the chosen conjugation ([[thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the operator $T$ is complex-linear but satisfies $T\sigma_0\ne\sigma_0T$, with the concrete witness $T\sigma_0(1,0)=(i,0)\ne(-i,0)=\sigma_0T(1,0)$. [L1]

2.1 By [L2], the failure of commutation means $T$ is not of the form $\theta\circ S_{\mathbb C}\circ\theta^{-1}$ for any real operator $S$ on $\mathbb R^2$; hence $T$ does not descend to this chosen real form. [L2, step 1.1]

3.1 Steps 1.1 and 2.1 exhibit one complex-linear operator and one chosen real form for which descent fails, refuting the claimed universal statement. [step 1.1, step 2.1] ∎
