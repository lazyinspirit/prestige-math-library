---
id: def-em-complex-plane-wave
kind: definition
title: "Complex plane-wave fields: real parts of complex exponentials"
status: draft
origin: pipeline
domain: mathematics
deps: [def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-complex-exponential-is-entire-with-derivative-itself]
dependency_roles:
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Review of Phasor Notation (course notes, ECE 130a, University of San Diego), 'Complex Vectors and Time Harmonic Representation' and 'Amplitude, Time Average, Mean Square and Root Mean Square'"
      url: "https://home.sandiego.edu/~ekim/e171f00/lectures/phasors"
    - title: "J. Lebl, Basic Analysis II, §9.1 (Leibniz integral rule), Theorem 9.1.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Fix a vector $\mathbf k\in\mathbb R^3$, a parameter $\omega>0$ and amplitudes $\mathbf e,\mathbf b\in\mathbb C^3$. Here $\mathbb C^3$ is the set of functions $\{0,1,2\}\to\mathbb C$ under componentwise operations, the complex analogue of the convention for $\mathbb R^n$ in [[def-euclidean-inner-product]]; we relabel the function values at $0,1,2$ by $1,2,3$ and write the coordinates of $\mathbf e$ as $(e_1,e_2,e_3)$ and those of $\mathbf b$ as $(b_1,b_2,b_3)$. For $\mathbf x\in\mathbb R^3$, $\langle\mathbf k,\mathbf x\rangle$ is the Euclidean inner product of [[def-euclidean-inner-product]], the real number $\sum_{j=1}^3k_jx_j$; for $t\in\mathbb R$ put

$$\theta(\mathbf x,t):=\langle\mathbf k,\mathbf x\rangle-\omega t\in\mathbb R .$$

Let $\exp$ be the complex exponential of [[def-complex-exponential]] (the power series $\sum_{n\ge0}z^n/n!$, convergent for every $z\in\mathbb C$), let $\operatorname{Re}$ be the real part of [[def-complex-conjugate-real-imaginary-part-and-modulus]], and let $i$ be the imaginary unit of [[def-complex-numbers-and-arithmetic]].

For each $t\in\mathbb R$ define maps $\mathbf E(\cdot,t),\mathbf B(\cdot,t):\mathbb R^3\to\mathbb R^3$ componentwise by

$$E_j(\mathbf x,t):=\operatorname{Re}\bigl(e_j\exp\bigl(i\,\theta(\mathbf x,t)\bigr)\bigr),\qquad B_j(\mathbf x,t):=\operatorname{Re}\bigl(b_j\exp\bigl(i\,\theta(\mathbf x,t)\bigr)\bigr),\qquad j\in\{1,2,3\}.$$

Equivalently, $\mathbf E(\cdot,t)$ is the real part, taken componentwise, of the complex vector $\mathbf e\exp(i\theta(\mathbf x,t))$, and likewise for $\mathbf B(\cdot,t)$ with $\mathbf b$ in place of $\mathbf e$.

### Well-definedness and conventions

For every $(\mathbf x,t)\in\mathbb R^3\times\mathbb R$ the number $\theta(\mathbf x,t)$ is real, so $i\,\theta(\mathbf x,t)$ is a complex number and $\exp(i\,\theta(\mathbf x,t))$ is defined by the everywhere-convergent exponential series; multiplying by the complex number $e_j$ or $b_j$ and taking real parts is likewise defined. Both amplitudes may be zero, in which case the corresponding field vanishes identically. The joint map $(\mathbf x,t)\mapsto(\mathbf E(\mathbf x,t),\mathbf B(\mathbf x,t))$ has $\mathbb R^3\times\mathbb R$, an open subset of $\mathbb R^4$, as its domain, so the $C^k$ conventions of [[def-ck-euclidean-maps-and-diffeomorphisms]] apply to any regularity statement made about it; this definition asserts no regularity of its own beyond well-definedness. The exponential is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), which is what makes the encoded expressions differentiable in the plane-wave form; derivations that differentiate them use [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]] and the chain rule for holomorphic maps where they are applied.

Complex notation here is an encoding of real fields and of real linear equations, not a complex physical field. The symbols $\mathbf e$ and $\mathbf b$ are constant complex amplitudes, not fields; the complex quantity $\mathbf e\exp(i\theta(\mathbf x,t))$ is an auxiliary object whose real part is the field. Real parts, imaginary parts and complex conjugation are the explicit operations of [[def-complex-conjugate-real-imaginary-part-and-modulus]]. Since $\operatorname{Re}$ is additive and commutes with real scalar multiples, any identity obtained from the encoded expressions by sums, real scalar multiples, partial differentiation or integration may be projected by $\operatorname{Re}$ term by term; identities that multiply two encoded real fields may not be read off from a product of complex expressions without conjugation, and the correct second-order average rule is proved separately. No electromagnetic interpretation, equation of motion or physical identification is part of this definition.
