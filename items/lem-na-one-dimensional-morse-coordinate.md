---
id: lem-na-one-dimensional-morse-coordinate
kind: lemma
title: Local quadratic coordinate at a simple stationary point
status: published
origin: pipeline
dependency_level: 0
deps:
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - lem-mean-value-theorem-on-closed-interval
  - thm-heine-cantor-r
  - thm-of-square-roots
  - thm-intermediate-value
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the local coordinate is explicitly constructed."
verification:
  precheck: pass
---

## Statement

Let $g\in C^7(J,\mathbb R)$ on an open interval $J$, and let $x_0\in J$ satisfy $g'(x_0)=0$ and $g''(x_0)\ne0$. Then some open interval $J_0\subset J$ about $x_0$ admits a $C^5$ increasing diffeomorphism $\Phi:J_0\to\Phi(J_0)$ such that
$$g(x)=g(x_0)+\frac{\sigma}{2}\Phi(x)^2,\qquad \Phi(x_0)=0,\qquad \Phi'(x_0)=\sqrt{|g''(x_0)|},\qquad \sigma=\operatorname{sgn}(g''(x_0)).$$

## Facts & Assumptions

**Given:** The stated real $C^7$ phase and simple stationary point.

[F1] [[thm-ftc-second-part]]: the integral of a continuous derivative on a compact interval equals the endpoint increment.

[F2] [[thm-algebra-of-derivatives]]: product and quotient rules hold for differentiable real functions wherever denominators are nonzero.

[F3] [[lem-mean-value-theorem-on-closed-interval]]: a continuous function differentiable in the open interval has an interior mean-value point.

[F4] [[thm-chain-rule]]: for differentiable real functions with compatible domains, the derivative of a composition is the product of the outer derivative and inner derivative, provided the evaluation point and its image are limit points of their respective domains. Here the domains are intervals and the outer functions are differentiable on open intervals containing the inner images.

[F5] [[thm-heine-cantor-r]]: every continuous real function on a compact interval is uniformly continuous; apply componentwise to the derivatives of $g$ on the chosen compact neighborhood.

[F6] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative square root, which is positive when the number is positive.

[F7] [[thm-intermediate-value]]: a continuous real function on a closed interval attains every value between its endpoint values.

## Proof

1.1 Put $h=x-x_0$, $G(t)=g(x_0+th)$, and $J(t)=G'(t)$. By [F1], [F2], [F4], and $g'(x_0)=0$, $J(0)=0$, $J'(t)=G''(t)=h^2g''(x_0+th)$, and $g(x)-g(x_0)=G(1)-G(0)=\int_0^1J(t)\,dt$. Applying [F1] to $J$ and to $tJ(t)$, with $(tJ)'=J+tJ'$, gives $\int_0^1J(t)\,dt=\int_0^1(1-t)J'(t)\,dt$. Hence $g(x)-g(x_0)=(x-x_0)^2\int_0^1(1-t)g''(x_0+t(x-x_0))\,dt$. Set $q(x)=2\int_0^1(1-t)g''(x_0+t(x-x_0))\,dt$. For $0\le j\le5$, repeated differentiation gives $q^{(j)}(x)=2\int_0^1(1-t)t^jg^{(j+2)}(x_0+t(x-x_0))\,dt$; each difference quotient converges uniformly in $t$ by [F3] and [F5], since the next derivative through $g^{(7)}$ is uniformly continuous on a compact neighborhood. Thus $q\in C^5$ and $q(x_0)=g''(x_0)$. [given, F1, F2, F3, F4, F5, construct, algebra]

2.1 Put $\sigma=\operatorname{sgn}(g''(x_0))$. Shrink the neighborhood so $\sigma q(x)>0$, and define $v(x)=\sqrt{\sigma q(x)}>0$ by [F6]. For a fixed point $z$ in this neighborhood, $|v(x)-v(z)|=|q(x)-q(z)|/(v(x)+v(z))\le |q(x)-q(z)|/v(z)$, so $v$ is continuous at $z$. For $x\ne z$, rationalization gives $(v(x)-v(z))/(x-z)=\sigma(q(x)-q(z))/((x-z)(v(x)+v(z)))\to\sigma q'(z)/(2v(z))$. Thus $v'=\sigma q'/(2v)$ exists and is continuous. Since $q'\in C^4$, repeated product and quotient rules [F2] applied to this identity inductively give $v\in C^5$. Define $\Phi(x)=(x-x_0)v(x)$. Then $\Phi\in C^5$, $g=g(x_0)+\sigma\Phi^2/2$, $\Phi(x_0)=0$, and $\Phi'(x_0)=\sqrt{|g''(x_0)|}>0$. [given, F2, F6, step 1.1, construct, algebra]

3.1 By continuity of $\Phi'$, shrink to an open interval $J_0$ about $x_0$ where $\Phi'\ge m>0$. For $x<y$ in $J_0$, [F3] gives $\Phi(y)-\Phi(x)=\Phi'(\xi)(y-x)\ge m(y-x)$, so $\Phi$ is strictly increasing. Applying [F7] between points on either side of each $x\in J_0$ shows that $\Phi(J_0)$ is open. Its inverse $\Psi$ satisfies $|\Psi(u)-\Psi(w)|\le |u-w|/m$, hence is continuous. At $u=\Phi(x)$, the inverse difference quotient is the reciprocal of the difference quotient of $\Phi$, and therefore $\Psi'(u)=1/\Phi'(\Psi(u))$. This is continuous and nonzero; applying [F2] and [F4] repeatedly to this identity gives $\Psi\in C^5$, since $\Phi'\in C^4$ and never vanishes. Thus $\Phi$ is the asserted diffeomorphism. [given, F2, F3, F4, F7, step 2.1, algebra] ∎
