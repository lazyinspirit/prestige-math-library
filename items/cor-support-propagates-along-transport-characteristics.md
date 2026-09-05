---
id: cor-support-propagates-along-transport-characteristics
kind: corollary
title: "Support propagates along transport characteristics"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-homogeneous-linear-transport-by-the-flow]
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

Assume the homogeneous transport equation
$u_t+a\cdot\nabla_xu=0$ has a global $C^1$ flow map $\Phi_t$ of spatial
diffeomorphisms. If $u(\cdot,t)=u_0\circ\Phi_t^{-1}$, then

$$\operatorname{supp}u(\cdot,t)=\Phi_t(\operatorname{supp}u_0)$$

for every time $t$ in the interval of existence.

## Facts & Assumptions

**Given:** A global $C^1$ flow $\Phi_t$ for the homogeneous transport equation
and the representation $u(\cdot,t)=u_0\circ\Phi_t^{-1}$.

[L1] Homogeneous linear transport is represented by the inverse
characteristic flow ([[thm-homogeneous-linear-transport-by-the-flow]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $u(x,t)=u_0(\Phi_t^{-1}(x))$, so $u(x,t)\neq0$ exactly when $u_0(\Phi_t^{-1}(x))\neq0$, equivalently when $\Phi_t^{-1}(x)\in\{u_0\neq0\}$ and therefore when $x\in\Phi_t(\{u_0\neq0\})$. [L1]

2.1 Because $\Phi_t$ is a homeomorphism, it carries closures to closures, and taking closures in step 1.1 gives $\operatorname{supp}u(\cdot,t)=\Phi_t(\operatorname{supp}u_0)$, so support can move only along the characteristic flow. [step 1.1] ∎
