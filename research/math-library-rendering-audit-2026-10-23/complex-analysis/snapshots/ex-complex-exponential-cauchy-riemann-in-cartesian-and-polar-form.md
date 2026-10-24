---
id: ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form
kind: example
title: "The complex exponential satisfies the Cauchy–Riemann equations in Cartesian and polar form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-exponential-is-entire-with-derivative-itself, cor-cartesian-and-polar-cauchy-riemann-equations, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-complex-exponential-addition-and-real-extension]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "MIT 18.04, Topic 2: Functions of a Complex Variable"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: frontier-12
---

## Example

The complex exponential is entire with derivative itself. Its Cartesian components satisfy the Cartesian Cauchy–Riemann equations everywhere, and its polar components satisfy the polar equations at every parameter point with $r>0$.

## Facts & Assumptions
**Given:** Complex numbers $z,h$, Cartesian coordinates $z=x+iy$, and polar parameters $z=re^{i\theta}$ with $r>0$ when polar coordinates are used.

[F1] The complex exponential is defined by $\exp z=\sum_{n\ge0}z^n/n!$ ([[def-complex-exponential]]), and this series converges absolutely for every complex $z$ ([[lem-complex-exponential-series-converges-everywhere]]).

[L2] For all complex $z,w$, $\exp(z+w)=\exp z\exp w$, and the complex exponential restricts to the real exponential on the real axis ([[thm-complex-exponential-addition-and-real-extension]]).

[L3] $\exp(x+iy)=e^x(\cos y+i\sin y)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] The complex exponential is entire and has derivative $\exp'(z)=\exp z$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L5] Away from $r=0$, the polar Cauchy–Riemann equations are $U_r=r^{-1}V_\theta$ and $V_r=-r^{-1}U_\theta$ ([[cor-cartesian-and-polar-cauchy-riemann-equations]]).

## Verification

**Proof technique:** direct computation.

1.1 For $h\ne0$, the addition law and defining series give $$\frac{e^{z+h}-e^z}{h}=e^z\frac{e^h-1}{h}=e^z\left(1+\sum_{n\ge2}\frac{h^{n-1}}{n!}\right).$$ [F1, L2, algebra]

1.2 From [L3], $u=e^x\cos y$ and $v=e^x\sin y$. Therefore $u_x=e^x\cos y=v_y$ and $u_y=-e^x\sin y=-v_x$, and $u_x+iv_x=e^{x+iy}$. [L3, algebra]

1.3 Put $c:=\cos\theta$, $s:=\sin\theta$, $A:=e^{rc}$, and $\phi:=rs$. Then $U=A\cos\phi$ and $V=A\sin\phi$, so $$U_r=A(c\cos\phi-s\sin\phi),\qquad V_r=A(c\sin\phi+s\cos\phi),$$ $$U_\theta=-rV_r,\qquad V_\theta=rU_r.$$ [L3, algebra]

2.1 When $0<|h|\le1$, absolute convergence at $1$ gives the finite constant $C:=\sum_{n\ge2}1/n!$, and $$\left|\sum_{n\ge2}\frac{h^{n-1}}{n!}\right|\le |h|\sum_{n\ge2}\frac1{n!}=C|h|\longrightarrow0.$$ [step 1.1, F1, algebra]

3.1 Thus the quotient tends to $e^z$, directly confirming $\exp'(z)=\exp z$ and [L4]. [step 1.1, step 2.1, L4]

4.1 Since $r>0$, step 1.3 is equivalent to $U_r=r^{-1}V_\theta$ and $V_r=-r^{-1}U_\theta$, exactly [L5]. At $r=0$ these polar identities are not asserted; the Cartesian calculation in step 1.2 covers the origin. [step 1.2, step 1.3, L5] ∎
