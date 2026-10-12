---
id: def-cm-parameter-dependent-action-angle-branch
kind: definition
title: "A one-frequency parameter-dependent action-angle branch, its transformed Hamiltonian and its drift generator"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-first-order-ode-initial-value-problem-and-solution, def-interval]
dependency_roles:
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 4.6, Eqs. (4.149)-(4.158): the action $I=\\frac1{2\\pi}\\oint p\\,dq$ of a one-dimensional family with slow parameter $\\lambda(t)$ and the averaged statement $\\langle\\dot I\\rangle=0$, printed pages 113-115"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 10 Sections 10.2-10.3, Eqs. (10.28)-(10.42): action variable $J=\\frac1{2\\pi}\\oint p\\,dq$, the averaged energy-change identity and the adiabatic-invariance conclusion $J=\\text{const}$, printed pages 5-8 of Chapter 10 (PDF pages 241-244)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Definition

Let $\varepsilon>0$, let $J\subseteq\mathbb R$ and $S\subseteq\mathbb R$ be intervals with nonempty interiors ([[def-interval]]), and let $h:J\times S\to\mathbb R$ and $k:J\times\mathbb R\times S\to\mathbb R$ be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), with $k$ $2\pi$-periodic in its second variable:

$$k(I,\theta+2\pi,s)=k(I,\theta,s)\qquad\text{for all }(I,\theta,s)\in J\times\mathbb R\times S .$$

The **transformed Hamiltonian** of the datum is

$$K(I,\theta,s):=h(I,s)+\varepsilon\,k(I,\theta,s),$$

its **frequency function** is

$$\omega(I,s):=\partial_Ih(I,s),$$

its **angle average** is $\langle k\rangle(I,s):=\frac1{2\pi}\int_0^{2\pi}k(I,\theta,s)\,d\theta$, and, on the set where $\omega\ne0$, its **drift generator** is

$$g(I,\theta,s):=\frac{k(I,\theta,s)-\langle k\rangle(I,s)}{\omega(I,s)} .$$

The **branch vector field** of the datum is the map $\Phi:J\times\mathbb R\times S\to\mathbb R^3$,

$$\Phi(I,\theta,s):=\Bigl(-\varepsilon\,\partial_\theta k(I,\theta,s),\ \ \partial_Ih(I,\theta,s)+\varepsilon\,\partial_Ik(I,\theta,s),\ \ \varepsilon\Bigr),$$

and a **branch solution** on an interval $T\subseteq\mathbb R$ with nonempty interior is a differentiable $(I,\theta,s):T\to J\times\mathbb R\times S$ solving the first-order system $(I,\theta,s)'=\Phi(I,\theta,s)$ on $T$ in the sense of [[def-first-order-ode-initial-value-problem-and-solution]] ([[def-directional-and-partial-derivatives]]). Partial derivatives are those of the ambient Euclidean coordinates.

## Remarks

- **Angle interpretation.** Since $k$ is $2\pi$-periodic in $\theta$, so are $\partial_\theta k$ and $\partial_Ik$, hence $\Phi$ is $2\pi$-periodic in the second variable: reading the second coordinate in $\mathbb R/2\pi\mathbb Z$ gives a well-defined vector field on $J\times(\mathbb R/2\pi\mathbb Z)\times S$, and if $(I,\theta,s)$ is a branch solution, so is $(I,\theta+2\pi n,s)$ for every $n\in\mathbb Z$. The definition keeps the covering description on $\mathbb R$ to avoid quotient notation; all statements about $\theta$ below are invariant under $2\pi$-translations.

- **Reading.** A datum of this definition is the normal form of a one-frequency Hamiltonian problem in action-angle coordinates after the slow parameter is promoted to a state variable $s$ with $s'=\varepsilon$: $h$ is the angle-independent part, $\varepsilon k$ the angle-dependent remainder including any contribution of the parameter-dependent chart, and $\omega=\partial_Ih$ the fast frequency. The definition asserts no existence theorem: whether a given mechanical family admits such a chart with the stated regularity, on which domain, and with $\omega\ne0$, is a separate hypothesis of any consumer, and the adiabatic statements below are conditional on it.

- **Scope.** This is pure mathematics: no physical identification of $I$, $\theta$, $s$, $h$, $k$, $\varepsilon$ or of the parameter variation with measured data is made here.
