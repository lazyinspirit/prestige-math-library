---
id: ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution
kind: example
title: 'The one-sheeted hyperboloid is a regular surface of revolution'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Example

The one-sheeted hyperboloid
$$H=\{(x,y,z)\in\mathbb R^3:x^2+y^2-z^2=1\}$$
is a regular level set and the surface obtained by rotating the profile $x=\sqrt{1+z^2}$ in the half-plane $y=0$, $x>0$, about the $z$-axis.

## Facts & Assumptions

**Given:** The polynomial $F(x,y,z)=x^2+y^2-z^2$.

[L1] The power rule and derivative algebra give the continuous Jacobian row $(2x,2y,-2z)$, and the continuous-partials theorem makes $DF(x,y,z)(h)=2xh_1+2yh_2-2zh_3$ ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] Every positive real has a unique positive square root ([[thm-nth-roots-exist]]); a regular level is locally a graph with tangent space equal to the derivative kernel ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]]).

## Verification

**Proof technique:** direct.

1.1 On $F^{-1}(1)$ the point $(x,y,z)$ cannot be $0$, so the coefficient vector $(2x,2y,-2z)$ in [L1] is nonzero and $DF(x,y,z)$ is surjective onto $\mathbb R$. [given, L1]

1.2 The level equation is $x^2+y^2=1+z^2$. By [L2], for each $z$ its horizontal section is the circle of positive radius $\sqrt{1+z^2}$, exactly the rotation of the stated profile. [given, L2, algebra]

2.1 Hence $1$ is a regular value, and [L2] gives tangent plane $\{h:xh_1+yh_2-zh_3=0\}$ at $(x,y,z)$. [step 1.1, L2]

3.1 The radius never vanishes, so the rotation has no apex or rank-drop point; steps 1.1 and 1.2 establish both asserted properties. [step 1.1, step 1.2] ∎
