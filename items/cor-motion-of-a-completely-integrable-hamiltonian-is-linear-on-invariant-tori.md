---
id: cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori
kind: corollary
title: Motion of a completely integrable Hamiltonian is linear on invariant tori
status: published
origin: pipeline
deps: ["def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Theorem 6.21, p. 75
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

In action–angle coordinates, if $H=h(I)$ then

$$\dot I_i=0,\qquad \dot\theta_i=\frac{\partial h}{\partial I_i},\qquad \theta(t)=\theta(0)+t\nabla h(I(0))\pmod{\mathbb Z^n}.$$

## Facts & Assumptions

**Given:** Action–angle coordinates near an invariant Liouville torus and a
Hamiltonian $H=h(I)$.

[F1] The convention $\iota_{X_H}\omega=dH$ defines the Hamiltonian vector
field. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 The supplied equality $H=h(I)$ says that $H$ has no $\theta$ dependence. Write $X_H=\sum_i(a_i\partial_{\theta_i}+b_i\partial_{I_i})$. Since $\omega=\sum_i d\theta_i\wedge dI_i$, contraction gives $\iota_{X_H}\omega=\sum_i(a_i\,dI_i-b_i\,d\theta_i)$. Comparing this with $dH=\sum_i h_{I_i}\,dI_i$ by [F1] yields $a_i=h_{I_i}$ and $b_i=0$. [F1, given, algebra]

2.1 The action values are constant, so the vector $\nabla h(I(0))$ is constant along the orbit. Integrating on $\mathbb R^n/\mathbb Z^n$ gives the displayed linear motion. [step 1.1] ∎
