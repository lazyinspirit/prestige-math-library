---
id: prop-tgrx-entropy-first-variation
kind: proposition
title: Finite-dimensional entropy first variation at a faithful state
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - lem-tgrx-finite-matrix-entropy-variation
  - prop-tgrx-finite-modular-balance
  - lem-qsm-matrix-state-calculus
  - def-trace-of-an-endomorphism
  - def-operator-norm
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  lem-tgrx-finite-matrix-entropy-variation: mathematical-premise
  prop-tgrx-finite-modular-balance: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, author-hosted complete book manuscript, §5.2.1
      url: https://jhwatrous.github.io/TQI.pdf
    - title: Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, §2.5
      url: https://arxiv.org/pdf/1105.3445
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, complete book manuscript, §§11.1 and 11.8
      url: https://arxiv.org/pdf/1106.1445v8
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $I\subseteq\mathbb R$ be an open interval containing $0$. Let $\rho:I\to\operatorname{End}(H)$ be a path whose real and imaginary matrix entries are continuously differentiable on $I$, such that each $\rho(\varepsilon)$ is self-adjoint with nonnegative eigenvalues and trace one. Suppose $\rho(0)=\sigma$ and every eigenvalue of $\sigma$ is strictly positive. Define $K_\sigma:=-\log\sigma$ by spectral calculus and let $s(\tau):=-\operatorname{tr}(\tau\log\tau)$ with the finite spectral convention $0\log0:=0$. Then

$$\left.\frac{d}{d\varepsilon}s(\rho(\varepsilon))\right|_{\varepsilon=0}=\operatorname{tr}(\rho'(0)K_\sigma).$$

If, in addition, the real and imaginary matrix entries of $\rho$ are twice continuously differentiable on $I$, then the finite relative entropy $D(\rho(\varepsilon)\|\sigma)$ has zero first derivative at $\varepsilon=0$. These are finite-dimensional mathematical statements and make no continuum or gravitational claim.

## Statement references

[[lem-tgrx-finite-matrix-entropy-variation]]

[[prop-tgrx-finite-modular-balance]]

[[lem-qsm-matrix-state-calculus]]

[[def-trace-of-an-endomorphism]]

[[def-operator-norm]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[John Watrous, The Theory of Quantum Information, §5.2.1](https://jhwatrous.github.io/TQI.pdf)

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, §2.5](https://arxiv.org/pdf/1105.3445)

[Mark M. Wilde, From Classical to Quantum Shannon Theory, §§11.1 and 11.8](https://arxiv.org/pdf/1106.1445v8)

## Facts & Assumptions

**Given:** A continuously differentiable finite-dimensional density path $\rho(\varepsilon)$ on an open interval containing $0$, with $\rho(0)=\sigma$ strictly positive; for the relative-entropy derivative conclusion, additionally assume that its real and imaginary matrix entries are twice continuously differentiable on that interval.

[F1] [[lem-tgrx-finite-matrix-entropy-variation]]: for a differentiable path of self-adjoint positive-definite matrices, $\frac{d}{d\varepsilon}\operatorname{tr}(\rho\log\rho)=\operatorname{tr}(\rho'(\log\rho+I))$.

[F2] [[prop-tgrx-finite-modular-balance]]: for each density endomorphism $\tau$ and the fixed faithful reference $\sigma$, $D(\tau\|\sigma)=\operatorname{tr}((\tau-\sigma)K_\sigma)-(s(\tau)-s(\sigma))$.

[F3] [[lem-qsm-matrix-state-calculus]]: finite-dimensional Hermitian endomorphisms have orthonormal spectral decompositions, and the eigenvalues of a strictly positive one have a positive minimum.

[F4] [[def-trace-of-an-endomorphism]]: trace is the finite sum of diagonal entries and therefore is linear.

[F5] [[def-operator-norm]]: $\|Tv\|\le\|T\|_{\mathrm{op}}\|v\|$ for every vector $v$.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ for vectors in a complex inner-product space.

## Proof

1.1 Let $m>0$ be the smallest eigenvalue of $\sigma$ from [F3]. Since $\rho$ is entrywise continuous at $0$, its finite matrix difference $T(\varepsilon):=\rho(\varepsilon)-\sigma$ tends to zero in operator norm: in a fixed orthonormal basis, if every entry of $T$ has magnitude at most $M$, then for a unit vector $x$ $\sum_j|x_j|^2=1$ makes each coordinate of $x$ have magnitude at most $1$, and each coordinate of $Tx$ has magnitude at most $dM$, and therefore $\|Tx\|\le d^{3/2}M$, where $d=\dim H$. Choose $\delta>0$ so that $\|T(\varepsilon)\|_{\mathrm{op}}<m/2$ for $|\varepsilon|<\delta$. For each $v\in H$, $\langle\sigma v,v\rangle\ge m\|v\|^2$ by spectral decomposition, while [F5] and [F6] give $|\langle T(\varepsilon)v,v\rangle|\le\|T(\varepsilon)\|_{\mathrm{op}}\|v\|^2$. Hence $\langle\rho(\varepsilon)v,v\rangle>(m/2)\|v\|^2$ for nonzero $v$. Thus $\rho(\varepsilon)$ is positive definite near $0$ and [F1] applies. [given, F1, F3, F5, F6, choose, algebra]

2.1 Apply [F1] to $\rho$ at $0$: $\left.\frac{d}{d\varepsilon}s(\rho(\varepsilon))\right|_{\varepsilon=0}=-\operatorname{tr}(\rho'(0)(\log\sigma+I))$. Because $\operatorname{tr}(\rho(\varepsilon))=1$ on the whole interval, in the fixed basis [F4] gives $\operatorname{tr}(\rho'(0))=\sum_i\rho'_{ii}(0)=\lim_{h\to0}\sum_i(\rho_{ii}(h)-\rho_{ii}(0))/h=\lim_{h\to0}(1-1)/h=0$; the finite sum commutes with this limit. Therefore $\left.\frac{d}{d\varepsilon}s(\rho(\varepsilon))\right|_0=-\operatorname{tr}(\rho'(0)\log\sigma)=\operatorname{tr}(\rho'(0)K_\sigma)$, as claimed. [given, F1, F4, step 1.1, algebra]

3.1 The identity [F2] holds for every $\rho(\varepsilon)$ in the path. Its right-hand side is differentiable at $0$ by linearity of trace and step 2.1, so differentiating gives $\left.\frac{d}{d\varepsilon}D(\rho(\varepsilon)\|\sigma)\right|_0=\operatorname{tr}(\rho'(0)K_\sigma)-\left.\frac{d}{d\varepsilon}s(\rho(\varepsilon))\right|_0=0$. The additional twice continuously differentiable hypothesis ensures the differentiability required here. [given, F2, step 2.1, algebra] ∎

