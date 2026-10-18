---
id: thm-hall-algebra-regular-module
kind: theorem
title: "A unital Hall algebra is a left module over itself"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-hall-algebra-module
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Statement

Let $R$ be a commutative ring with unit, and let $H$ be any unital associative
$R$-algebra that is a Hall algebra. The map
$\rho:H\to\operatorname{End}_R(H)$ given by $\rho(a)(h)=ah$ is a
representation, so the left regular action makes $H$ a Hall-algebra module.

## Facts & Assumptions

**Given:** A unital associative Hall $R$-algebra $H$.

[F1] [[def-hall-algebra-module]]: a Hall module is an $R$-module with an
$R$-bilinear action satisfying the associative and unit laws.

## Proof

1.1 Define $\rho(a)(h)=ah$ for $a,h\in H$. Since multiplication is $R$-bilinear, for each fixed $a$ the map $h\mapsto ah$ is $R$-linear and $a\mapsto\rho(a)$ is $R$-linear, so $\rho:H\to\operatorname{End}_R(H)$ is an $R$-linear map. [given, F1, construct]

2.1 For $a,b,h\in H$, $\rho(ab)(h)=(ab)h=a(bh)=(\rho(a)\circ\rho(b))(h)$ by associativity, and $\rho(1_H)(h)=1_Hh=h$, so $\rho(1_H)=\operatorname{id}_H$. Thus $\rho$ is a unital $R$-algebra homomorphism and hence a Hall-algebra representation by [F1]. [given, F1, step 1.1, algebra] ∎

