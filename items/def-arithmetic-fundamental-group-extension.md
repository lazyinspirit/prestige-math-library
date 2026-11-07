---
id: def-arithmetic-fundamental-group-extension
kind: definition
title: Arithmetic fundamental-group sequence for a curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-etale-fundamental-group-and-fibre-functor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, Introduction, pp. 137–138
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
    - title: Jakob Stix, On the period-index problem in light of the section conjecture, §1.1
      url: https://arxiv.org/pdf/0802.4125
---

## Definition

Assume the Axiom of Choice. Let $k$ be a field, choose an algebraic closure $\bar k$, let $C/k$ be a smooth geometrically connected curve, and choose a geometric point $\bar c$ of $C$ over $\bar k$. Write $G_k=\operatorname{Gal}(\bar k/k)$, $\Pi_C=\pi_1^{\mathrm{et}}(C,\bar c)$, and $\Delta_C=\pi_1^{\mathrm{et}}(C_{\bar k},\bar c)$. Base change and the structure morphism give the arithmetic fundamental-group sequence

$$
\Delta_C\longrightarrow \Pi_C\xrightarrow{p_C}G_k.
$$

For a morphism $f:X\to Y$ of connected $k$-schemes with compatible geometric basepoints, pullback of finite étale covers induces a continuous homomorphism $f_*:\pi_1^{\mathrm{et}}(X)\to\pi_1^{\mathrm{et}}(Y)$, and this assignment preserves composition.
Here $p_C$ is the continuous homomorphism induced by $C\to\operatorname{Spec}k$. This definition names the sequence and its maps; it does not assert exactness at $\Delta_C$ or at $\Pi_C$. A section is a continuous homomorphism $s:G_k\to\Pi_C$ with $p_Cs=\operatorname{id}_{G_k}$. When the sequence is exact, sections are compared up to conjugation by $\Delta_C$; changes of compatible geometric basepoint produce this conjugacy convention.

## Definition references

[Tamagawa, arithmetic fundamental-group sequence, Introduction](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[Stix, section-conjecture conventions, §1.1](https://arxiv.org/pdf/0802.4125)

[[def-etale-fundamental-group-and-fibre-functor]]
