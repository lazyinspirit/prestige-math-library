---
id: lem-mixed-wave-curves-are-c1
kind: lemma
title: "Mixed shock–rarefaction wave curves are continuously differentiable"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-mixed-characteristic-wave-curve
  - def-local-rarefaction-curve
  - lem-local-characteristic-shock-curve
  - lem-smooth-simple-characteristic-eigenpairs
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§3.3–3.4, printed pp. 24–28: common tangent and wave-composition map"
---

## Statement

Under the hypotheses of [[def-mixed-characteristic-wave-curve]], the map
$(\sigma,u)\mapsto\Psi_i(\sigma;u)$ is $C^1$ near $(0,\bar u)$, with
$\Psi_i(0;u)=u$ and $\partial_\sigma\Psi_i(0;u)=r_i(u)$.

## Facts & Assumptions

**Given:** The local rarefaction and shock curves, their parameterizations, and the mixed-curve convention.

[F1] [[def-local-rarefaction-curve]]: $R_i(0;u)=u$ and $\partial_\sigma R_i(0;u)=r_i(u)$; its dependence on $(u,\sigma)$ is $C^1$ locally.

[F2] [[lem-local-characteristic-shock-curve]]: $S_i(0;u)=u$, $\partial_\sigma S_i(0;u)=r_i(u)$, and the shock curve is $C^1$ jointly in base state and strength locally.

[F3] [[def-mixed-characteristic-wave-curve]]: the two branches are joined at $\sigma=0$; a linearly-degenerate family uses only $R_i$.

## Proof

1.1 For a linearly-degenerate family, [F1] directly gives the claim. For a genuinely nonlinear family, each branch in [F3] is $C^1$ on its closed half-neighborhood by [F1] and [F2]. At $\sigma=0$ both values equal $u$, both state derivatives equal the identity, and both strength derivatives equal $r_i(u)$. [given, F1, F2, F3]

2.1 At a boundary point $(u,0)$, the first-order expansions of either branch are $u+h+r_i(u)\sigma+o(\|h\|+|\sigma|)$ for state increment $h$; the remainder is uniform over the two branches because there are only two and each is $C^1$. Thus the joined function is differentiable there with derivative $(h,\sigma)\mapsto h+r_i(u)\sigma$. The branch derivatives tend to this common derivative as $\sigma\to0$, so the joined derivative is continuous. [step 1.1, algebra]

3.1 The derivatives and values just obtained prove $C^1$ regularity and the asserted value and strength derivative at zero. [step 1.1, step 2.1] ∎
