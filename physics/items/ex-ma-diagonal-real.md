---
id: ex-ma-diagonal-real
kind: example
title: MA produces a real outside a small listed family
status: published
origin: pipeline
deps: [def-martins-axiom, def-cohen-collapse-and-levy-collapse-forcings]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Proposition 7.5", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Assume $\mathrm{MA}(\kappa)$. Given at most $\kappa$ reals, the Cohen finite-function order and coordinate-domain/disagreement dense sets produce a real distinct from every listed real. Hence $\mathrm{MA}(\kappa)$ implies $\kappa<2^{\aleph_0}$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-martins-axiom]] supplies a filter meeting the dense family.

[F2] [[def-cohen-collapse-and-levy-collapse-forcings]] defines $\operatorname{Add}(\omega,1)$.

## Proof

1.1 List the given reals as $r_\alpha$ for $\alpha<\lambda\le\kappa$. In $P=\operatorname{Add}(\omega,1)$ let $E_n=\{p:(0,n)\in\operatorname{dom}p\}$ and $D_\alpha=\{p:\exists n\ ((0,n)\in\operatorname{dom}p\ \land\ p(0,n)\ne r_\alpha(n))\}$. Extending at one fresh coordinate proves all these sets dense; $P$ is countable and hence ccc. [F2]

2.1 F1 supplies a filter meeting the at most $\kappa$ many $D_\alpha$ and countably many $E_n$. Its union is a total real $g$, and meeting $D_\alpha$ gives $g\ne r_\alpha$. Thus no family of at most $\kappa$ reals exhausts $2^\omega$, so $\kappa<2^{\aleph_0}$. [F1, step 1.1] ∎
