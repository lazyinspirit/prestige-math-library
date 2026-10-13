---
id: ex-cm-transport-of-a-translating-uniform-flow
kind: example
title: "Transport of a translating rigid region: the rate integral vanishes for a travelling profile"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-continuum-motion, def-cm-material-region-and-density, thm-cm-transport-theorem, def-cm-euclidean-spatial-calculus, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, def-metric-ball, def-euclidean-inner-product, def-integral-over-a-measurable-set, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-cm-continuum-motion: mathematical-premise
  def-cm-material-region-and-density: mathematical-premise
  thm-cm-transport-theorem: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 3.7, 4.2 and 4.4 (transport equations; mass and momentum balance in integral form)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"

  precheck: pass
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the actual Lebesgue transport and change-of-variables suppliers.

Let $B:=B_1(0)\subseteq\mathbb R^3$ be the open unit ball ([[def-metric-ball]]), a nonempty bounded open set and hence a material region in the sense of [[def-cm-material-region-and-density]]; let $v\in\mathbb R^3$ be fixed, and let

$$\psi(t,X):=X+tv\qquad(t\in\mathbb R,\ X\in\mathbb R^3)$$

be the uniform translation motion of [[def-cm-continuum-motion]] (each $\psi_t$ is the identity plus a translation, a $C^\infty$ diffeomorphism with $D_X\psi_t=I_3$). Let $h:\mathbb R^3\to\mathbb R$ be $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) and define the travelling profile

$$f(t,x):=h(x-tv)\qquad\bigl((t,x)\in\mathbb R\times\mathbb R^3\bigr).$$

Then $\int_{\psi_t(B)}f(t,x)\,dx$ is independent of $t$, while the transport integrand vanishes pointwise:

$$\partial_tf+\operatorname{div}(fv)=0,$$

so the transport theorem reproduces the constant rate $0$.

## Facts & Assumptions

**Given:** Countable choice. The unit ball $B$, the velocity $v$, the motion $\psi(t,X)=X+tv$, the $C^1$ profile $h$ and $f(t,x)=h(x-tv)$.

[L1] Transport theorem: for the motion $\psi$ with spatial velocity $w$ and a $C^1$ $f$ on a neighbourhood of the swept compact region, $\frac{d}{dt}\int_{\psi_t(B)}f=\int_{\psi_t(B)}(\partial_tf+\operatorname{div}(fw))$; here $w(t,\psi(t,X))=\partial_t\psi(t,X)=v$, so $w\equiv v$ ([[thm-cm-transport-theorem]], [[def-cm-continuum-motion]]).

[L2] Change of variables: for the translation $\psi_t$ (a $C^1$ diffeomorphism with $|\det D\psi_t|=1$), $\int_{\psi_t(B)}f(t,x)dx=\int_Bf(t,X+tv)dX=\int_Bh(X)dX$ ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-countable-choice]], [[def-integral-over-a-measurable-set]]).

[L3] The affine map $A(t,x):=x-tv$ has total derivative $DA(t,x)(\tau,z)=z-\tau v$, directly from its exact increment. Since $h$ is $C^1$, [[thm-chain-rule-for-total-derivatives]] gives $f=h\circ A$ of class $C^1$ and $Df(t,x)(\tau,z)=Dh(x-tv)(z-\tau v)$. Derivatives: $\partial_tf(t,x)=-Dh(x-tv)v$ and $\nabla f(t,x)=(\nabla h)(x-tv)$, hence $\partial_tf+\langle\nabla f,v\rangle_2=0$; moreover $\operatorname{div}(fv)=\langle\nabla f,v\rangle_2+f\operatorname{div}v=\langle\nabla f,v\rangle_2$ because $v$ is constant ([[def-cm-euclidean-spatial-calculus]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-euclidean-inner-product]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Verification

**Proof technique:** direct; evaluate both sides of the transport identity for the explicit translating flow.

1.1 By [L2], $\int_{\psi_t(B)}f(t,x)dx=\int_Bh(X)dX$ for every $t$; the right-hand side does not depend on $t$, so the derivative is $0$. [given, L2, algebra]

1.2 By [L3], $\partial_tf+\operatorname{div}(fv)=\bigl(\partial_tf+\langle\nabla f,v\rangle_2\bigr)+f\operatorname{div}v=0$, and the same conclusion holds for every point of the swept region. [given, L3, algebra]

2.1 The transport theorem [L1] gives $\frac{d}{dt}\int_{\psi_t(B)}f=\int_{\psi_t(B)}(\partial_tf+\operatorname{div}(fv))=0$, in agreement with step 1.1: both computations produce the constant rate. [step 1.1, step 1.2, L1, algebra] ∎

## Remarks

- This example verifies the transport identity on a flow with constant velocity and non-constant density-like profile; it exercises the change-of-variables and material-derivative pieces without any physical claim.
