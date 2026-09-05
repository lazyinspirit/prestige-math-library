---
id: ex-radial-transport-flow
kind: example
title: "The stationary equation x dot Du = u is solved by radial characteristics"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-transport-equation-along-a-characteristic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Example

On $\mathbb R^n\setminus\{0\}$, the stationary first-order equation

$$x\cdot\nabla u(x)=u(x)$$

has precisely the $C^1$ solutions of the form

$$u(r\omega)=r\,g(\omega),\qquad r>0,\ \omega\in S^{n-1},$$

with arbitrary $C^1$ data $g$ on the unit sphere.

## Facts & Assumptions

**Given:** The stationary equation $x\cdot\nabla u=u$ on
$\mathbb R^n\setminus\{0\}$.

[L1] Along a characteristic, a transport equation reduces to the scalar ODE
from the transport lemma ([[lem-transport-equation-along-a-characteristic]]).

## Verification

**Proof technique:** direct.

1.1 Regard the equation as transport with characteristic ODE $X'(s)=X(s)$; its solutions are the rays $X(s)=e^s x_0$, and by [L1] the restricted function $v(s)=u(X(s))$ satisfies $v'(s)=v(s)$, hence $v(s)=e^s v(0)$. [L1]

2.1 Writing $x=r\omega$ with $r=e^s$ and $\omega\in S^{n-1}$ gives $u(r\omega)=r\,u(\omega)$, so every solution has the claimed form with $g(\omega)=u(\omega)$; conversely, for $u(r\omega)=r\,g(\omega)$ the radial derivative is $u/r$, hence $x\cdot\nabla u=u$. [step 1.1] ∎
