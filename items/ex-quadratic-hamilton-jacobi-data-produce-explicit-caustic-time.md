---
id: ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time
kind: example
title: "Quadratic Hamilton–Jacobi data produce an explicit caustic time"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde, lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Example

For $u_t+(u_x)^2/2=0$ with $u_0(\xi)=-\xi^2/2$, the characteristic map is
$X(t,\xi)=(1-t)\xi$.  Its first caustic time is $1$.

## Facts & Assumptions

**Given:** The Hamiltonian $H(p)=p^2/2$ and initial momentum $p_0(\xi)=-\xi$.

## Verification

**Proof technique:** direct.

1.1 Since $H_x=0$, the momentum equation gives $\dot p=0$, hence $p(t,\xi)=-\xi$. [given, algebra]

2.1 As $\dot X=H_p(p)=p$, integration from $X(0,\xi)=\xi$ gives $X=(1-t)\xi$. [step 1.1, given, algebra]

3.1 $X_\xi=1-t$ is nonzero for $t<1$ and zero at $t=1$, which is the first caustic by the stated convention. [step 2.1, given] ∎
