---
id: lem-transport-equation-along-a-characteristic
kind: lemma
title: "A transport equation restricts to a linear ODE along each characteristic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-linear-transport-equation-and-its-characteristic-flow,
       thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Let $u\in C^1(\Omega)$ satisfy

$$u_t+a\cdot\nabla_x u+c\,u=f,$$

and let $X$ be a characteristic solving $X'(s)=a(X(s),s)$. Then

$$\frac{d}{ds}u(X(s),s)+c(X(s),s)u(X(s),s)=f(X(s),s).$$

## Facts & Assumptions

**Given:** A $C^1$ solution $u$ of the transport equation and a characteristic
$X$.

[L1] A linear transport equation and its characteristics are defined by the
displayed PDE and ODE ([[def-linear-transport-equation-and-its-characteristic-flow]]).

[L2] The total-derivative chain rule differentiates a composite by the gradient
of the outer function applied to the derivative of the inner function
([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the map $s\mapsto u(X(s),s)$; since the space-time velocity of the characteristic is $(X'(s),1)$, this gives $\frac{d}{ds}u(X(s),s)=u_t(X(s),s)+\nabla_xu(X(s),s)\cdot X'(s)$. [L2]

2.1 By [L1], the characteristic ODE gives $X'(s)=a(X(s),s)$, so substituting into step 1.1 and then using the PDE yields $\frac{d}{ds}u(X(s),s)=f(X(s),s)-c(X(s),s)u(X(s),s)$, which is the claimed scalar linear ODE along the characteristic. [L1, step 1.1] ∎
