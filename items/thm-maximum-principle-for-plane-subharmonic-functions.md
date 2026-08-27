---
id: thm-maximum-principle-for-plane-subharmonic-functions
kind: theorem
title: "A plane subharmonic function with an interior maximum is constant on its component"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement

Let $u$ be subharmonic on a complex domain $\Omega$. If $u$ attains a finite
maximum at an interior point of $\Omega$, then $u$ is constant on $\Omega$.

## Facts & Assumptions

**Given:** A subharmonic function $u$ on a complex domain $\Omega$ and a point $a\in\Omega$ with $u(a)=M=\sup_\Omega u<\infty$.

[L1] Subharmonicity means that every sufficiently small circle average is at least the center value ([[def-plane-subharmonic-function]]).

## Proof

**Proof technique:** direct.

1.1 Let [given]
$$S=\{z\in\Omega:u(z)=M\}.$$
Because $u$ is upper semicontinuous, $S$ is closed in $\Omega$, and it is nonempty because $a\in S$. [given]

1.2 Choose $r>0$ with $\overline{D(a,r)}\subseteq\Omega$. For every $0<\rho<r$, [L1] gives [L1, given]
$$M=u(a)\le\frac1{2\pi}\int_0^{2\pi}u(a+\rho e^{it})\,dt\le M,$$
so the average equals $M$. Since the integrand never exceeds $M$, it equals $M$ almost everywhere on the circle $|z-a|=\rho$. If some point of that circle had value $<M$, upper semicontinuity would make the value $<M$ on a short arc, forcing the average below $M$. Hence $u\equiv M$ on every circle $|z-a|=\rho$ with $0<\rho<r$. [L1, given]

2.1 Step 1.2 shows that every point of $D(a,r)$ lies in $S$, so $S$ is open in $\Omega$. Since $\Omega$ is connected and $S$ is nonempty, closed, and open, one has $S=\Omega$. Therefore $u\equiv M$ on $\Omega$. [step 1.1, step 1.2] ∎
