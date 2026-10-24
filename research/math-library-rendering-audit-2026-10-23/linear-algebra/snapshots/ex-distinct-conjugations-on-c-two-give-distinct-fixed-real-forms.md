---
id: ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms
kind: example
title: "Different conjugations on $\\mathbb C^2$ can have different fixed real forms"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space, cor-real-forms-correspond-to-conjugations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Example

On $W=\mathbb C^2$ define the coordinatewise conjugation

$$\sigma_0(z_1,z_2)=(\overline z_1,\overline z_2)$$

and the transposed conjugation

$$\sigma'(z_1,z_2)=(\overline z_2,\overline z_1).$$

Their fixed real forms are $W^{\sigma_0}=\mathbb R^2$ and $W^{\sigma'}=\{(w,\overline w):w\in\mathbb C\}$, a different real two-plane of $(\mathbb C^2)_{\mathbb R}$. One complex vector space therefore carries two different real forms, attached to two different choices of conjugation.

## Facts & Assumptions

**Given:** The complex vector space $W=\mathbb C^2$ and the two displayed maps $\sigma_0,\sigma'$.

[L1] The fixed points of a conjugation form a real subspace whose complexification recovers the ambient complex space ([[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]).

[L2] Real forms of a complex vector space correspond exactly to conjugations ([[cor-real-forms-correspond-to-conjugations]]).

## Verification

**Proof technique:** direct.

1.1 The map $\sigma_0$ is a conjugation: it is additive, $\sigma_0(\lambda z)=(\overline{\lambda z_1},\overline{\lambda z_2})=\overline\lambda\,\sigma_0(z)$, and applying it twice is the identity. [algebra]

1.2 The map $\sigma'$ is also a conjugation: additivity is clear, $\sigma'(\lambda z)=(\overline{\lambda z_2},\overline{\lambda z_1})=\overline\lambda\,\sigma'(z)$, and $\sigma'\sigma'(z)=(z_1,z_2)$. [algebra]

2.1 The fixed set of $\sigma_0$ is $\{(z_1,z_2):\overline z_1=z_1,\ \overline z_2=z_2\}=\mathbb R^2$, the real coordinate plane inside $(\mathbb C^2)_{\mathbb R}$. [step 1.1, algebra]

2.2 The fixed set of $\sigma'$ is $\{(z_1,z_2):z_1=\overline z_2\}=\{(w,\overline w):w\in\mathbb C\}=\{(a+bi,a-bi):a,b\in\mathbb R\}$, a real two-plane. [step 1.2, algebra]

3.1 The two fixed sets are different real subspaces: $(1,0)$ is fixed by $\sigma_0$ but $\sigma'(1,0)=(0,1)\ne(1,0)$. By [L1] each is a real form whose complexification recovers $\mathbb C^2$, and by [L2] the distinct conjugations give distinct real forms. [step 2.1, step 2.2, L1, L2]

4.1 Steps 1.1 through 3.1 exhibit two different conjugations and two different fixed real forms on one complex vector space. [step 2.1, step 2.2, step 3.1] ∎
