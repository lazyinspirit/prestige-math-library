---
id: prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient
kind: proposition
title: "For a Hermitian matrix, the eigenvectors are the stationary points of the Rayleigh quotient and twice the residual is its constrained gradient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
---

## Statement

Let $A$ be Hermitian and let $x$ be a unit vector. Write

$$\rho(x):=\frac{\langle Ax,x\rangle}{\langle x,x\rangle},\qquad r(x):=Ax-\rho(x)x.$$

Then:

1. For every tangent vector $h$ to the unit sphere at $x$,
   $$D\rho(x)[h]=2\operatorname{Re}\langle r(x),h\rangle.$$
2. The stationary points of $\rho_A$ on the unit sphere are exactly the unit
   eigenvectors of $A$.

Thus $2r(x)$ is the constrained gradient of the Rayleigh quotient for the
standard real Riemannian metric on the unit sphere.

## Facts & Assumptions

**Given:** A Hermitian matrix $A$, a unit vector $x$, and a tangent vector $h$ with $\operatorname{Re}\langle x,h\rangle=0$.

[L1] Hermitian means $A^*=A$ ([[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Because $x$ is unit and $h$ is tangent to the unit sphere at $x$, one has $$\langle x,x\rangle=1,\qquad \operatorname{Re}\langle x,h\rangle=0.$$ Differentiating $$\rho(x+th)=\frac{\langle A(x+th),x+th\rangle}{\langle x+th,x+th\rangle}$$ at $t=0$ therefore gives $$D\rho(x)[h]=\langle Ah,x\rangle+\langle Ax,h\rangle.$$ By [L1], $\langle Ah,x\rangle=\langle h,Ax\rangle$, so $$D\rho(x)[h]=2\operatorname{Re}\langle Ax,h\rangle=2\operatorname{Re}\langle Ax-\rho(x)x,h\rangle,$$ because $\operatorname{Re}\langle x,h\rangle=0$. [L1, algebra]

2.1 Since $\langle x,x\rangle=1$, one has $$\langle r(x),x\rangle=\langle Ax,x\rangle-\rho(x)\langle x,x\rangle=0.$$ So $r(x)$ itself lies in the tangent space at $x$. [step 1.1, algebra]

2.2 Conversely, if $Ax=\lambda x$, then $\rho(x)=\lambda$ and $r(x)=0$, so step 1.1 gives $D\rho(x)[h]=0$ for every tangent vector $h$. Thus $x$ is a stationary point. [step 1.1, algebra]

3.1 If $x$ is a stationary point, then step 1.1 gives $\operatorname{Re}\langle r(x),h\rangle=0$ for every tangent vector $h$. Since step 2.1 places $r(x)$ in that tangent space, choosing $h=r(x)$ yields $$\|r(x)\|_2^2=0.$$ Hence $r(x)=0$ and $Ax=\rho(x)x$. [step 1.1, step 2.1, algebra]

4.1 Steps 1.1, 3.1, and 2.2 prove the gradient and stationary-point claims. [step 1.1, step 3.1, step 2.2] ∎
