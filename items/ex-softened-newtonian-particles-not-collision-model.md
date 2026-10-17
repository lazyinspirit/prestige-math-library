---
id: ex-softened-newtonian-particles-not-collision-model
kind: example
title: Softened Newtonian particles do not specify the physical collision force
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-euclidean-inner-product]
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

For two Newtonian point masses in $\mathbb R^3$ with positive constants absorbed into $c>0$, the unsoftened relative acceleration is $F(r)=-c\,r/|r|^3$ for $r\ne0$, where $|\cdot|$ is Euclidean. A softened model uses
$$F_\varepsilon(r)=-\frac{c r}{(|r|^2+\varepsilon^2)^{3/2}},\qquad \varepsilon>0.$$
The softened field is smooth at a collision, but it defines a different dynamical model.

## Facts & Assumptions

**Given:** $c>0$, $\varepsilon>0$, and the two displayed force laws.

[F1] The norm is Euclidean ([[def-euclidean-inner-product]]).

## Verification

**Given:** The unsoftened and softened force formulas in the Example.

1.1 For $r\ne0$, their scalar denominators are $|r|^3$ and $(|r|^2+\varepsilon^2)^{3/2}$, which differ because $\varepsilon>0$. Thus $F_\varepsilon(r)\ne F(r)$ for every nonzero $r$. [given, F1, algebra]

2.1 At $r=0$, the unsoftened formula is undefined, whereas the softened formula gives $F_\varepsilon(0)=0$. The denominator $|r|^2+\varepsilon^2$ is smooth and strictly positive, and $u\mapsto u^{-3/2}$ is smooth for $u>0$; hence the softened field is $C^\infty$ on all of $\mathbb R^3$. Its smooth extension therefore supplies a convention for its own regularized model, not a collision law for the singular Newtonian system. [given, step 1.1, algebra] ∎
