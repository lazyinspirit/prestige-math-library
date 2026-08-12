---
id: cor-cartesian-and-polar-cauchy-riemann-equations
kind: corollary
title: "Cartesian and polar forms of the Cauchy–Riemann equations agree away from the origin"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-chain-rule-for-total-derivatives, thm-sine-and-cosine-derivatives,
       cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.1.8(a)"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 3.2.10"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be real totally differentiable on an open subset of $\mathbb C$. On an open set of parameters $(r,\theta)$ with $r>0$ and $re^{i\theta}$ in the domain, put

$$ U(r,\theta)=u(r\cos\theta,r\sin\theta),\qquad V(r,\theta)=v(r\cos\theta,r\sin\theta). $$

At every such parameter point, the Cartesian Cauchy–Riemann equations are equivalent to

$$ U_r=\frac1rV_\theta,\qquad V_r=-\frac1rU_\theta. $$

When these conditions hold,

$$ f'(re^{i\theta})=e^{-i\theta}(U_r+iV_r). $$

No assertion is made at $r=0$, and no global choice of argument is used.

## Facts & Assumptions

**Given:** A real totally differentiable $f=u+iv$, a parameter point $(r,\theta)$ with $r>0$, and the polar pullbacks $U,V$ stated above.

[L1] The real total-derivative chain rule is $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] The real derivatives satisfy $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]).

[F1] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$; in particular $e^{i\theta}=\cos\theta+i\sin\theta$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L3] For a real-differentiable complex-valued map, complex differentiability is equivalent to the Cartesian Cauchy–Riemann equations, and then $f'=u_x+iv_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Proof

**Proof technique:** direct.

1.1 Put $c=\cos\theta$ and $s=\sin\theta$. By [L1] and [L2], $U_r=u_xc+u_ys$ and $U_\theta=r(-u_xs+u_yc)$. [given, L1, L2]

1.2 The same calculation gives $V_r=v_xc+v_ys$ and $V_\theta=r(-v_xs+v_yc)$. [given, L1, L2]

2.1 If $u_x=v_y$ and $u_y=-v_x$, steps 1.1–1.2 give $V_\theta=rU_r$ and $U_\theta=-rV_r$, which are the polar equations because $r>0$. [step 1.1, step 1.2, algebra]

2.2 Conversely, the inverse coordinate formulas are $u_x=U_rc-(U_\theta/r)s$, $u_y=U_rs+(U_\theta/r)c$, $v_x=V_rc-(V_\theta/r)s$, and $v_y=V_rs+(V_\theta/r)c$. Substituting the polar equations gives $u_x=v_y$ and $u_y=-v_x$. [step 1.1, step 1.2, given, algebra]

3.1 Under either equivalent form, [L3] and step 2.2 give $f'=u_x+iv_x=(c-is)(U_r+iV_r)=e^{-i\theta}(U_r+iV_r)$ by [F1]. [step 2.2, L3, F1, algebra] ∎
