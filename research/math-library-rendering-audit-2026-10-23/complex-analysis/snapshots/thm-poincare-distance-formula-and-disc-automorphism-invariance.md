---
id: thm-poincare-distance-formula-and-disc-automorphism-invariance
kind: theorem
title: "The Poincare distance has the formula $2\\operatorname{artanh}|\\varphi_z(w)|$ and is disc-automorphism invariant"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-poincare-metric-and-distance-on-the-disc, thm-blaschke-factor-is-a-disc-automorphism, thm-disc-automorphisms-are-rotated-blaschke-factors]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, §3.5"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

For $z,w\in\mathbb D$, the Poincare distance on the unit disc satisfies

$$d_{\mathbb D}(z,w)=2\operatorname{artanh}|\varphi_z(w)|,$$

where $\varphi_z$ is the Blaschke factor carrying $z$ to $0$. Moreover every
disc automorphism preserves this distance.

## Facts & Assumptions

**Given:** The Poincare metric and distance on $\mathbb D$.

[F1] The Poincare length and distance are defined by integrating $2|dz|/(1-|z|^2)$ along piecewise $C^1$ curves ([[def-poincare-metric-and-distance-on-the-disc]]).

[F2] Every Blaschke factor is an automorphism of $\mathbb D$ ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[F3] Every automorphism of $\mathbb D$ is a rotated Blaschke factor ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

## Proof

**Proof technique:** direct.

1.1 For a Blaschke factor $\varphi_a$, a direct differentiation gives $\varphi_a'(z)=-(1-|a|^2)/(1-\overline a z)^2$ and $1-|\varphi_a(z)|^2=(1-|a|^2)(1-|z|^2)/|1-\overline a z|^2$. Therefore $2|\varphi_a'(z)|/(1-|\varphi_a(z)|^2)=2/(1-|z|^2)$, so $\varphi_a$ preserves Poincare length of every piecewise $C^1$ curve. [F1, F2, given, algebra]

2.1 Since length is preserved under $\varphi_a$, taking infima in [F1] gives $d_{\mathbb D}(\varphi_a(z),\varphi_a(w))=d_{\mathbb D}(z,w)$. By [F3], every disc automorphism is a composition of a Blaschke factor and a rotation, and rotations satisfy the same identity, so every disc automorphism preserves $d_{\mathbb D}$. [F1, F2, F3, step 1.1, algebra]

3.1 By step 2.1, $d_{\mathbb D}(z,w)=d_{\mathbb D}(0,\varphi_z(w))$. Write $r=|\varphi_z(w)|$. If $r=0$, then $\varphi_z(w)=0$, so $z=w$ and both sides are $0=2\operatorname{artanh}0$. If $r>0$, the radial segment $\gamma(t)=t\,\varphi_z(w)/r$ from $0$ to $\varphi_z(w)$ has Poincare length $\int_0^r 2\,dt/(1-t^2)=2\operatorname{artanh}r$, so $d_{\mathbb D}(0,\varphi_z(w))\le2\operatorname{artanh}r$. [F1, step 2.1, algebra]

4.1 For any piecewise $C^1$ curve $\gamma$ from $0$ to $\varphi_z(w)$, one has $|(|\gamma|)'|\le|\gamma'|$, hence $\ell_{\mathbb D}(\gamma)\ge\int 2|(|\gamma|)'|/(1-|\gamma|^2)\,dt\ge\int_0^r 2\,ds/(1-s^2)=2\operatorname{artanh}r$. Taking the infimum over all such curves gives the reverse inequality. [F1, step 3.1, algebra]

5.1 Combining steps 3.1 and 4.1 yields $d_{\mathbb D}(z,w)=2\operatorname{artanh}|\varphi_z(w)|$, and step 2.1 gives automorphism invariance. [step 2.1, step 3.1, step 4.1] ∎
