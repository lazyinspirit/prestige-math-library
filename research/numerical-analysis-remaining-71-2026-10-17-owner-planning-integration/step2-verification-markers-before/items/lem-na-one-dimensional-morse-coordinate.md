---
id: lem-na-one-dimensional-morse-coordinate
kind: lemma
title: Local quadratic coordinate at a simple stationary point
status: draft
origin: pipeline
dependency_level: 0
deps:
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - lem-mean-value-theorem-on-closed-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the local coordinate is explicitly constructed."
---

## Statement

Let $g\in C^7(J,\mathbb R)$ on an open interval $J$, and let $x_0\in J$ satisfy $g'(x_0)=0$ and $g''(x_0)\ne0$. Then some open interval $J_0\subset J$ about $x_0$ admits a $C^5$ increasing diffeomorphism $\Phi:J_0\to\Phi(J_0)$ such that
$$g(x)=g(x_0)+\frac{\sigma}{2}\Phi(x)^2,\qquad \Phi(x_0)=0,\qquad \Phi'(x_0)=\sqrt{|g''(x_0)|},\qquad \sigma=\operatorname{sgn}(g''(x_0)).$$

## Facts & Assumptions

**Given:** The stated real $C^7$ phase and simple stationary point.

[F1] [[thm-ftc-second-part]]: the integral of a continuous derivative on a compact interval equals the endpoint increment.

[F2] [[thm-algebra-of-derivatives]]: product and quotient rules hold for differentiable real functions wherever denominators are nonzero.

[F3] [[lem-mean-value-theorem-on-closed-interval]]: a continuous function differentiable in the open interval has an interior mean-value point.

[F4] [[thm-chain-rule]]: derivatives of compositions satisfy the chain rule.

## Proof

1.1 Twice applying [F1] to $g'$ and $g$ gives, for $x$ near $x_0$, $g(x)-g(x_0)=(x-x_0)^2\int_0^1(1-t)g''(x_0+t(x-x_0))\,dt.$ Set $q(x)=2\int_0^1(1-t)g''(x_0+t(x-x_0))\,dt$. Repeated differentiation under this compact parameter integral gives $q^{(j)}(x)=2\int_0^1(1-t)t^jg^{(j+2)}(x_0+t(x-x_0))\,dt$ for $0\le j\le5$: each difference quotient converges uniformly in $t$ by the mean-value theorem and uniform continuity of the next derivative on a compact neighborhood. Thus $q\in C^5$ and $q(x_0)=g''(x_0)$. [given, F1, F3, construct]

2.1 Put $\sigma=\operatorname{sgn}(g''(x_0))$. Shrink the neighborhood so $\sigma q(x)>0$, and define $\Phi(x)=(x-x_0)\sqrt{\sigma q(x)}$. The positive square root is $C^5$ here: differentiating $v^2=\sigma q$ gives $v'=\sigma q'/(2v)$, and repeated product and quotient rules [F2] give continuous derivatives through order five because $v>0$. Hence $g=g(x_0)+\sigma\Phi^2/2$, $\Phi(x_0)=0$, and $\Phi'(x_0)=\sqrt{|g''(x_0)|}>0$. [given, F2, step 1.1, algebra]

3.1 By continuity of $\Phi'$, shrink again so $\Phi'\ge m>0$. For $x<y$ in this interval, [F3] gives $\Phi(y)-\Phi(x)=\Phi'(\xi)(y-x)\ge m(y-x)$, so $\Phi$ is strictly increasing and its inverse $\Psi$ is continuous. At $u=\Phi(x)$, the difference quotient gives $\Psi'(u)=1/\Phi'(x)$. This is continuous and nonzero; applying [F2] and [F4] repeatedly to this identity makes $\Psi\in C^5$. Thus $\Phi$ is the asserted diffeomorphism. [given, F2, F3, F4, step 2.1, algebra] ∎
