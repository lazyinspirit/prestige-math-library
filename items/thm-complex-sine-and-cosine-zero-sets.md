---
id: thm-complex-sine-and-cosine-zero-sets
kind: theorem
title: "The zeros of complex sine are the integer multiples of pi, and the zeros of complex cosine are the odd half-integer multiples of pi"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-trigonometric-and-hyperbolic-functions, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

For $z\in\mathbb C$,
$$\sin z=0\Longleftrightarrow z=k\pi\text{ for some }k\in\mathbb Z,$$
and
$$\cos z=0\Longleftrightarrow z=(k+\tfrac12)\pi\text{ for some }k\in\mathbb Z.$$

## Facts & Assumptions

**Given:** A complex number $z$.

[L1] The definitions are $\sin z=(\exp(iz)-\exp(-iz))/(2i)$ and $\cos z=(\exp(iz)+\exp(-iz))/2$ ([[def-complex-trigonometric-and-hyperbolic-functions]]).

[L2] The exponential satisfies $\exp(u+v)=\exp u\exp v$, has kernel $2\pi i\mathbb Z$, and $\exp u=\exp v$ exactly when $u-v\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[L3] Euler's identity gives $\exp(i\pi)=-1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and multiplication by the nonzero $\exp(iz)$, $\sin z=0$ is equivalent to $\exp(2iz)=1$. By [L2], this is equivalent to $2iz=2\pi ik$ for some integer $k$, hence to $z=k\pi$. [L1, L2, algebra]

1.2 Similarly, $\cos z=0$ is equivalent to $\exp(2iz)=-1=\exp(i\pi)$ by [L3]. By [L2], $2iz-i\pi=2\pi ik$, so $z=(k+1/2)\pi$. [L1, L2, L3, algebra]

2.1 Reversing each algebraic equivalence proves both converses, so the displayed descriptions are exact. [step 1.1, step 1.2] ∎
