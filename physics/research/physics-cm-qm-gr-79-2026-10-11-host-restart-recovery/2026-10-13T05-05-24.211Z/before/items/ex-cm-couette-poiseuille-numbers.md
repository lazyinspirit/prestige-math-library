---
id: ex-cm-couette-poiseuille-numbers
kind: example
title: "Numerical checks for channel flows: $h=\\eta=1$, $G=12$ gives flux $1$ and centre speed $3/2$, and $V=2$ gives shear $2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-plane-couette-and-poiseuille-flows, def-cm-fluid-constitutive-models, thm-cm-local-momentum-balance, def-cm-euclidean-spatial-calculus, thm-algebra-of-derivatives, def-derivative, def-matrix-space, def-matrix-product-and-identity-matrix]
dependency_roles:
  thm-cm-plane-couette-and-poiseuille-flows: mathematical-premise
  def-cm-fluid-constitutive-models: mathematical-premise
  thm-cm-local-momentum-balance: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.5 (the Couette and Poiseuille channel-flow examples and the discharge law)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
proof_strategy: direct
---

## Example

Take $h=1$, $\eta=1$ in the plane channel of [[thm-cm-plane-couette-and-poiseuille-flows]].

1. **Poiseuille, $G=12$.** The profile is $v(y)=6y(1-y)$; its flux per unit width is $1$ and its maximal speed is $v(1/2)=3/2$.

2. **Couette, $V=2$.** The profile is $v(y)=2y$; the only nonzero entry of $Du$ is $\partial_yu_1=2$, so the antisymmetric part of the velocity gradient has magnitude $1$ in the relevant off-diagonal slots and the flow is not irrotational.

## Facts & Assumptions

**Given:** The channel flows of [[thm-cm-plane-couette-and-poiseuille-flows]] with $h=\eta=1$, $G=12$, $V=2$.

[L1] Poiseuille: $v(y)=\frac{Gy(h-y)}{2\eta}$ has flux $\frac{Gh^3}{12\eta}$ ([[thm-cm-plane-couette-and-poiseuille-flows]]).

[L2] Couette: $v(y)=\frac{Vy}{h}$ solves the equations with constant pressure, and for $V\ne0$ the velocity gradient is not symmetric ([[thm-cm-plane-couette-and-poiseuille-flows]], [[def-cm-fluid-constitutive-models]], [[def-cm-euclidean-spatial-calculus]], [[def-derivative]], [[thm-algebra-of-derivatives]], [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]]).

## Verification

**Proof technique:** direct substitution into the closed formulas.

1.1 With $h=\eta=1$ and $G=12$: $v(y)=\frac{12y(1-y)}{2}=6y(1-y)$, so $v(1/2)=6\cdot\frac12\cdot\frac12=\frac32$; the flux is $\frac{12\cdot1^3}{12\cdot1}=1$. [given, L1, algebra]

1.2 With $h=1$ and $V=2$: $v(y)=2y$, so $\partial_yu_1=2$ and all other first partial derivatives of $u$ vanish; the antisymmetric part of $Du$ is the matrix with entries $\pm1$ in positions $(1,2),(2,1)$ and zeros elsewhere, nonzero. [given, L2, algebra]

2.1 The two substitutions reproduce the flux and centre-speed numbers of the Poiseuille profile and the nonzero shear of the Couette profile; no boundary-value problem beyond the explicit profiles is solved. [step 1.1, step 1.2, algebra] ∎

## Remarks

- The numbers $h=\eta=1$ and $G=12$, $V=2$ are chosen to give exact arithmetic; they are not measurements and carry no empirical claim about any fluid.
