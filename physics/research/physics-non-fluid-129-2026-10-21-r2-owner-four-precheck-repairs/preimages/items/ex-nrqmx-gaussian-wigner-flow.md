---
id: ex-nrqmx-gaussian-wigner-flow
kind: example
domain: mathematics
library: mathematics
title: Exact harmonic-oscillator transport of a Gaussian Wigner density
status: draft
origin: pipeline
dependency_level: 5
deps:
  - def-nrqmx-weyl-symbol-wigner
  - thm-nrqmx-wigner-marginals
  - thm-nrqmx-quadratic-egorov
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - thm-nrqm-oscillator-hermite-recurrence
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-chain-rule
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  thm-nrqmx-wigner-marginals: mathematical-premise
  thm-nrqmx-quadratic-egorov: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 1, §1, coherent states and their Wigner functions, printed pp. 17–20
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: Weyl/Wigner convention and Egorov theorem 4.14, printed pp. 16–17 and 40–42
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 4, Weyl convention and bounded-symbol context, printed pp. 54–67
verification:
  precheck: pending
---

## Statement

Assume Countable Choice, let $0<\epsilon\le1$, and use the one-dimensional oscillator
$$ H_\epsilon=-\frac{\epsilon^2}{2}\frac{d^2}{dx^2}+\frac{x^2}{2} $$
with its self-adjoint realization from [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]. For real $q,p$, the normalized Gaussian
$$ \psi^\epsilon_{q,p}(x)=(\pi\epsilon)^{-1/4} \exp\!\left(-\frac{(x-q)^2}{2\epsilon}\right) \exp\!\left(\frac{ip(x-q/2)}{\epsilon}\right) $$
has Wigner density
$$ W_\epsilon[\psi^\epsilon_{q,p}](x,\xi)= \frac1{\pi\epsilon}\exp\!\left(-\frac{(x-q)^2+(\xi-p)^2}{\epsilon}\right). $$
Let $U_\epsilon(t)=e^{-itH_\epsilon/\epsilon}$, and define the evolved state's distributional Wigner functional on $a\in C_c^\infty(\mathbb R^2)$ by
$$ \langle W_t,a\rangle:=\langle \operatorname{Op}^W_\epsilon(a)U_\epsilon(t)\psi^\epsilon_{q,p}, U_\epsilon(t)\psi^\epsilon_{q,p}\rangle . $$
Then it is represented by the exact density
$$ W_t(x,\xi)=\frac1{\pi\epsilon} \exp\!\left(-\frac{(x-q_t)^2+(\xi-p_t)^2}{\epsilon}\right), \quad q_t=q\cos t+p\sin t,\quad p_t=p\cos t-q\sin t. $$
Thus this quadratic model transports the Gaussian Wigner density exactly along its classical Hamiltonian flow; its phase-space covariance remains $(\epsilon/2)I_2$. This is a mathematical model calculation, not an experimental observation.

## Statement references

[[thm-nrqmx-quadratic-egorov]]

## Facts & Assumptions

**Given:** Countable Choice, $0<\epsilon\le1$, real $q,p,t$, and the one-dimensional oscillator convention in the Statement.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] For $m=\omega=1$, $\hbar=\epsilon$, the scaled oscillator has a self-adjoint realization with complete Hermite eigenbasis; its finite Hermite span is a graph core, and on that core it equals $-\epsilon^2\partial_x^2/2+x^2/2$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-hermite-recurrence]]).

[F2] The Wigner integral and Weyl pairing use the exact signs, factors, and inner-product convention of [[def-nrqmx-weyl-symbol-wigner]]; for Schwartz states, $\langle\operatorname{Op}^W_\epsilon(a)u,u\rangle=\int aW_\epsilon[u]$ ([[thm-nrqmx-wigner-marginals]]).

[F3] The Gaussian Fourier integral is $\int_{\mathbb R}e^{-y^2/(4\epsilon)}e^{-iy\eta/\epsilon}dy=2\sqrt{\pi\epsilon}\,e^{-\eta^2/\epsilon}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F4] The exact quadratic Egorov identity holds for this self-adjoint realization when Schwartz space is a core ([[thm-nrqmx-quadratic-egorov]]).

[F5] The chain rule and integration by parts apply to Schwartz functions, and the scaled Gaussian integral gives $\int e^{-x^2/\epsilon}dx=\sqrt{\pi\epsilon}$ ([[thm-chain-rule]], [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

## Proof
**Given:** The data and [A1], [F1]–[F5].

1.1 The scaled oscillator eigenfunctions are polynomial multiples of $e^{-x^2/(2\epsilon)}$. To verify the core hypothesis of [[thm-nrqmx-quadratic-egorov]], take $f\in\mathcal S(\mathbb R)$ and set $L f=-\epsilon^2f''/2+x^2f/2\in L^2$. Integration by parts against each Hermite eigenfunction $\psi_n^\epsilon$, whose polynomial-Gaussian tails make the endpoint products vanish, gives
$$ \langle Lf,\psi_n^\epsilon\rangle =\langle f,L\psi_n^\epsilon\rangle =\epsilon(n+\tfrac12)\langle f,\psi_n^\epsilon\rangle. $$
Parseval for the complete basis [F1] yields
$$ \sum_{n\ge0}\epsilon^2(n+\tfrac12)^2|\langle f,\psi_n^\epsilon\rangle|^2 =\|Lf\|_2^2<\infty. $$
Thus $f\in D(H_\epsilon)$. The coefficients of $H_\epsilon f$ in the Hermite basis are $\epsilon(n+\tfrac12)\langle f,\psi_n^\epsilon\rangle$, the same coefficients as $Lf$; completeness of that basis gives $H_\epsilon f=Lf$. The finite Hermite span is contained in $\mathcal S$ and is a graph core by [F1]; since $\mathcal S\subset D(H_\epsilon)$, $\mathcal S$ is also a core. This checks every operator hypothesis of [F4]. [A1, F1, F5, algebra]

1.2 The Gaussian integral [F5] gives $\|\psi^\epsilon_{q,p}\|_2^2=(\pi\epsilon)^{-1/2}\int e^{-(x-q)^2/\epsilon}dx=1$. In its Wigner integral, the product of the two Gaussian factors is
$$ (\pi\epsilon)^{-1/2} \exp\!\left(-\frac{(x-q)^2}{\epsilon}-\frac{y^2}{4\epsilon}\right) \exp\!\left(\frac{ipy}{\epsilon}\right). $$
Multiplying by $e^{-iy\xi/\epsilon}$ and applying [F3] with $\eta=\xi-p$ gives
$$ W_\epsilon[\psi^\epsilon_{q,p}](x,\xi) =(2\pi\epsilon)^{-1}(\pi\epsilon)^{-1/2} e^{-(x-q)^2/\epsilon} 2\sqrt{\pi\epsilon}\,e^{-(\xi-p)^2/\epsilon}, $$
which is the stated normalized density. Each centered coordinate has an even Gaussian factor, so its mean and the cross-covariance vanish; each coordinate variance is $\epsilon/2$ by one Gaussian second-moment integration by parts as in [F5]. Thus its covariance is $(\epsilon/2)I_2$, and the orthogonal rotation in step 2.1 preserves it. [given, F2, F3, F5, algebra]

2.1 The classical Hamilton equations for $h(x,\xi)=(x^2+\xi^2)/2$ solve to
$$ \Phi_t(x,\xi)=(x\cos t+\xi\sin t,\ \xi\cos t-x\sin t). $$
This matrix is orthogonal with determinant $1$, and $\Phi_t(q,p)=(q_t,p_t)$. For $a\in C_c^\infty(\mathbb R^2)$, [F4] gives
$$ \langle W_t,a\rangle =\langle\operatorname{Op}^W_\epsilon(a\circ\Phi_t)\psi^\epsilon_{q,p}, \psi^\epsilon_{q,p}\rangle =\int_{\mathbb R^2}a(\Phi_t z)W_\epsilon[\psi^\epsilon_{q,p}](z)\,dz, $$
where the last equality is [F2]. Change variables $z'=\Phi_tz$; determinant $1$ gives density $W_\epsilon[\psi^\epsilon_{q,p}](\Phi_{-t}z')$. Orthogonality gives
$$ |\Phi_{-t}(x,\xi)-(q,p)|^2 =|(x,\xi)-\Phi_t(q,p)|^2, $$
so this density is exactly the displayed $W_t$. This proves the asserted exact transport for every compactly supported smooth test symbol and hence for the distributional Wigner functional defined in the Statement. [step 1.1, step 1.2, F2, F4, algebra] ∎
