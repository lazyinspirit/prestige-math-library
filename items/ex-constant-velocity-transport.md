---
id: ex-constant-velocity-transport
kind: example
title: "Constant-velocity transport translates the initial profile"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-homogeneous-linear-transport-by-the-flow]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
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

## Example

For a constant vector $b\in\mathbb R^n$ and a datum
$u_0\in C^1(\mathbb R^n)$, the equation

$$u_t+b\cdot\nabla_xu=0,\qquad u(x,0)=u_0(x),$$

has solution

$$u(x,t)=u_0(x-bt).$$

## Facts & Assumptions

**Given:** A constant velocity $b$, a datum $u_0\in C^1(\mathbb R^n)$, and the homogeneous transport equation above.

[L1] Homogeneous transport is represented by the inverse characteristic flow ([[thm-homogeneous-linear-transport-by-the-flow]]).

## Verification

**Proof technique:** direct.

1.1 The characteristic ODE is $X'(s)=b$, so the characteristic through $x$ at time $t$ is $X(s;t,x)=x+(s-t)b$, and in particular $X(0;t,x)=x-bt$. [given]

2.1 Apply [L1] with the characteristic from step 1.1; the transport solution is therefore $u(x,t)=u_0(X(0;t,x))=u_0(x-bt)$. [L1, step 1.1] ∎
