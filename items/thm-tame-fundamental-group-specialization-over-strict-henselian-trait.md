---
id: thm-tame-fundamental-group-specialization-over-strict-henselian-trait
kind: theorem
title: Tamagawa criterion for tame fundamental-group specialization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-affine-hyperbolic-curve-type
  - def-arithmetic-fundamental-group-extension
  - def-axiom-of-choice
  - def-discrete-valuation-ring
  - def-henselian-pair-and-henselian-local-ring
  - def-tame-fundamental-group-of-affine-curve
  - lem-arith-strict-henselization-and-smooth-sections
  - thm-arithmetic-fundamental-group-sequence-is-exact
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, §5.1 and Theorem 5.7
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
---

## Statement

Assume the Axiom of Choice. Let $R$ be a strictly henselian discrete valuation ring, meaning a henselian discrete valuation ring with separably closed residue field, with fraction field $K$, residue field $\kappa$ of characteristic $p>0$, and inertia group $I=G_K$. Let $X/R$ be a smooth proper curve, let $D\subset X$ be a relative étale effective divisor, and put $U=X\setminus D$. Assume both geometric fibers are affine hyperbolic. Good reduction gives a surjective specialization homomorphism $\operatorname{sp}:\pi_1^t(U_K)\to\pi_1^t(U_\kappa)$; write $N=\ker(\operatorname{sp})$. For any open subgroup $H\le\pi_1^t(U_K)$, set $H^{\mathrm{geom}}=H\cap\pi_1^t(U_{K^s})$ and let $H^{\mathrm{geom},(p')}$ be its maximal pro-prime-to-$p$ quotient. When $H$ maps onto $G_K$, conjugation in $H$ induces an outer action of $G_K$ on this quotient. For an open normal subgroup $H$, one has $N\subseteq H$ if and only if (i) the image of $H$ in $G_K$ is all of $G_K$, and (ii) the image of $I$ in $\operatorname{Out}(H^{\mathrm{geom},(p')})$ is trivial, where $\operatorname{Out}(G)=\operatorname{Aut}(G)/\operatorname{Inn}(G)$. Moreover, $N$ is the intersection of all open subgroups $H$ satisfying (i) and (ii), without a normality requirement in this intersection.

## Statement references

[Tamagawa, specialization criterion, §§5.1–5.7, especially Theorem 5.7](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[[def-discrete-valuation-ring]]

[[def-henselian-pair-and-henselian-local-ring]]

[[def-affine-hyperbolic-curve-type]]

[[def-tame-fundamental-group-of-affine-curve]]
