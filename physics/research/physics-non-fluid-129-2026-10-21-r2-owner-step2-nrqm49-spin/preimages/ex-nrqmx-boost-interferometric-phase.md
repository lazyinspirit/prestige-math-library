---
id: ex-nrqmx-boost-interferometric-phase
kind: example
domain: mathematics
title: Boost-translation loop phase
status: draft
origin: pipeline
dependency_level: 2
deps:
  - thm-nrqmx-boost-translation-cocycle
  - def-axiom-of-choice
  - def-countable-choice
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-real-exponential-function-and-e
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - lem-complex-conjugation-and-modulus-laws
dependency_roles:
  thm-nrqmx-boost-translation-cocycle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Domenico Giulini, On Galilei Invariance in Quantum Mechanics and the Bargmann Superselection Rule, §1, pp. 3–8
      url: https://arxiv.org/pdf/quant-ph/9508002
---

## Example

Assume AC and Countable Choice. For $z\in\mathbb C$, write $e^z:=\exp z:=\sum_{k=0}^{\infty}z^k/k!$ for the complex exponential, whose series converges for every $z$. Let $dx$ be Lebesgue measure on $\mathbb R^d$. Let $d$ be a positive integer, let $m>0$ and $\hbar>0$, and take $a,v\in\mathbb R^d$. Put $\theta=mv\cdot a/\hbar$ and let $T(a)f(x)=f(x-a)$ and $B_m(v)f(x)=e^{imv\cdot x/\hbar}f(x)$ on $L^2(\mathbb R^d,dx;\mathbb C)$. Their loop $B_m(v)T(a)B_m(v)^*T(a)^*$ equals $e^{i\theta}I$, so a common scalar phase leaves squared overlap unchanged on an isolated component. In the explicitly defined two-arm path model below, applying the loop to exactly one arm gives recombination squared overlap $\cos^2(\theta/2)$, while applying the same scalar to both arms gives squared overlap $1$.

## Example references

[[thm-nrqmx-boost-translation-cocycle]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[def-real-exponential-function-and-e]]

[[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[[lem-complex-conjugation-and-modulus-laws]]

## Facts & Assumptions

**Given:** A positive integer $d$, real parameters $m>0$, $\hbar>0$, vectors $a,v\in\mathbb R^d$, and the translation and modulation operators of the mathematical model.

[A1] Assume AC and Countable Choice, as required by the supplier theorem. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The unitary families $T(a)$ and $B_m(v)$ satisfy $B_m(v)T(a)B_m(v)^*T(a)^*=e^{imv\cdot a/\hbar}I$. [[thm-nrqmx-boost-translation-cocycle]]

[F2] The scalar complex exponential is the everywhere-convergent power series $\exp z=\sum_{k=0}^{\infty}z^k/k!$, also written $e^z$. [[def-complex-exponential]]

[F3] $\exp(z+w)=\exp z\exp w$ for $z,w\in\mathbb C$. [[thm-complex-exponential-addition-and-real-extension]]

[F4] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F5] The real exponential is defined by its power series, so $e^0=1$. [[def-real-exponential-function-and-e]]

[F6] For every real $x$, $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$. [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[F7] Complex modulus is multiplicative, so $|zw|=|z||w|$. [[lem-complex-conjugation-and-modulus-laws]]

## Verification

1.1 Put $\theta=mv\cdot a/\hbar$. The loop identity in [F1] gives the scalar operator $e^{i\theta}I$ on the system Hilbert space, so it multiplies every vector in an isolated component by the same scalar and leaves squared moduli of inner products unchanged there. [given, A1, F1]

2.1 On the path-system space $\mathbb C^2\otimes L^2(\mathbb R^d,dx;\mathbb C)$ define the controlled loop $C=|0\rangle\langle0|\otimes L+|1\rangle\langle1|\otimes I$, where $L=B_m(v)T(a)B_m(v)^*T(a)^*$. By step 1.1, $C=U_\theta\otimes I$ with $U_\theta=\operatorname{diag}(e^{i\theta},1)$. Equip the path space with inner product $u^*w$ and put $u_+=(1,1)^T/\sqrt2$. The recombining path overlap is $u_+^*U_\theta u_+=(1+e^{i\theta})/2$. The addition law [F3] and Euler formula with parity [F4, F6] give $(1+e^{i\theta})/2=e^{i\theta/2}(e^{-i\theta/2}+e^{i\theta/2})/2=e^{i\theta/2}\cos(\theta/2)$. By [F4, F5], $|e^{i\theta/2}|=e^0=1$, and modulus is multiplicative by [F7], so the squared modulus of this overlap is $\cos^2(\theta/2)$. If the same scalar is applied to both arms, the path gate is $e^{i\theta}I_2$, whose matrix coefficient has squared modulus $1$ by [F4, F5]. [F2, F3, F4, F5, F6, F7, step 1.1, algebra] ∎
