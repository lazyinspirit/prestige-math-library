---
id: cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form
kind: counterexample
title: "A complex-linear map need not preserve a chosen real form"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fixed-real-form-of-a-conjugation, thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement refuted

Every complex-linear operator on a complex vector space preserves every chosen real form; equivalently, a complex-linear operator always descends to the fixed real form of a given conjugation.

## Facts & Assumptions

**Given:** The conjugation $\sigma_0$ on $\mathbb C^2$, its fixed real form $V=\mathbb R^2$, and the displayed operator $T$.

[L1] The fixed real form of a conjugation is the real subspace of its fixed points ([[def-fixed-real-form-of-a-conjugation]]).

[L2] A complex-linear operator comes from a real operator on the fixed real form exactly when it commutes with the chosen conjugation ([[thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation]]).

## Counterexample

Take $W=\mathbb C^2$ with the coordinatewise conjugation $\sigma_0(z_1,z_2)=(\overline z_1,\overline z_2)$, whose fixed real form is $\mathbb R^2$. The complex-linear operator

$$T(z_1,z_2)=(iz_1,z_2)$$

does not commute with $\sigma_0$: at $w=(1,0)$ one has $T\sigma_0(w)=(i,0)$ while $\sigma_0T(w)=(-i,0)$. Consequently $T$ does not come from a real operator on $\mathbb R^2$, and $T$ does not even carry $\mathbb R^2$ into itself, since $T(1,0)=(i,0)\notin\mathbb R^2$.

**Proof technique:** direct.

1.1 The map $\sigma_0$ is a conjugation, and by [L1] its fixed real form is $\{(z_1,z_2):\overline z_1=z_1,\ \overline z_2=z_2\}=\mathbb R^2$. [L1, algebra]

1.2 The map $T$ is complex-linear: $T(\lambda z_1,\lambda z_2)=(i\lambda z_1,\lambda z_2)=\lambda T(z_1,z_2)$. [algebra]

1.3 The two maps do not commute: $T\sigma_0(1,0)=T(1,0)=(i,0)$, while $\sigma_0T(1,0)=\sigma_0(i,0)=(-i,0)$. [algebra]

2.1 By [L2], $T$ does not come from any real operator on $\mathbb R^2$; concretely $T(1,0)=(i,0)\notin\mathbb R^2$, so $T$ does not even preserve the chosen real form as a set. [L2, step 1.3]

3.1 Steps 1.2, 1.3 and 2.1 refute the claimed universality: a complex-linear map can fail to preserve a chosen real form. [step 1.2, step 1.3, step 2.1] ∎
