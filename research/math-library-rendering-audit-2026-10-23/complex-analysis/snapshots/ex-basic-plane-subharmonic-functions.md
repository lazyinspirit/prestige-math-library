---
id: ex-basic-plane-subharmonic-functions
kind: example
title: '$|z|^2$ and $\log|z|$ are the model basic subharmonic functions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c-two-characterization-of-plane-subharmonicity, thm-log-modulus-of-a-holomorphic-function-is-subharmonic]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Example

Two standard examples on the plane are:

1. on all of $\mathbb C$, the function $u(z)=|z|^2=x^2+y^2$;
2. on $\mathbb C$, the function $v(z)=\log|z|$ with the convention
   $v(0)=-\infty$.

Both are subharmonic, and $v$ is harmonic away from $0$.

## Facts & Assumptions

**Given:** The functions $u(z)=|z|^2$ on $\mathbb C$ and $v(z)=\log|z|$ with $v(0)=-\infty$.

[L1] A $C^2$ real function is subharmonic exactly when its Laplacian is nonnegative ([[thm-c-two-characterization-of-plane-subharmonicity]]).

[L2] For a holomorphic function, the logarithm of the modulus is subharmonic ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]).

## Verification

**Proof technique:** direct.

1.1 Writing $z=x+iy$, one has $u(x+iy)=x^2+y^2$, so [L1, given, algebra] $$\Delta u=u_{xx}+u_{yy}=2+2=4\ge0.$$ By [L1], $u$ is subharmonic on $\mathbb C$. [L1, given, algebra]

2.1 The identity map $f(z)=z$ is holomorphic on $\mathbb C$, and [L2, given] $\log|f(z)|=\log|z|$ with value $-\infty$ at the zero $z=0$. Therefore [L2] makes $v$ subharmonic on $\mathbb C$. Away from $0$, the function $v$ is the real part of the holomorphic logarithm and so is harmonic there. [L2, given] ∎
