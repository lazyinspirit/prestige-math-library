---
id: ex-height-on-the-sphere-is-a-perfect-morse-function
kind: example
title: "The height function on the sphere is Morse and excellent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-critical-point-and-critical-value-of-a-smooth-function, def-nondegenerate-critical-point-nullity-index-and-coindex, def-morse-function-and-excellent-morse-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct local model
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Example

For $n\ge 1$, the height function

$$h:S^n\to\mathbb R,\qquad h(x_1,\dots,x_{n+1})=x_{n+1}$$

has exactly two critical points, the south and north poles. Their indices are
$0$ and $n$, so $h$ is Morse and excellent.

## Facts & Assumptions

**Given:** The height function $h(x)=x_{n+1}$ on the unit sphere $S^n$.

[F1] Critical points, nondegeneracy, index, and Morse/excellent functions have
the meanings fixed on the A page
([[def-critical-point-and-critical-value-of-a-smooth-function]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]],
[[def-morse-function-and-excellent-morse-function]]).

## Verification

**Proof technique:** direct local model.

1.1 If $x\in S^n$ is not a pole, let $v:=e_{n+1}-x_{n+1}x$. Then $x\cdot v=0$, so $v\in T_xS^n$, and $dh_x(v)=v_{n+1}=1-x_{n+1}^2\ne0$. Hence only the poles can be critical. [F1, given, algebra]

2.1 Near the north pole, write the upper hemisphere as $u\mapsto (u,\sqrt{1-\|u\|^2})$. Then $h(u)=\sqrt{1-\|u\|^2}=1-\tfrac12\|u\|^2+O(\|u\|^4)$, so the Hessian at $u=0$ is $-I_n$ and the north pole has index $n$. [step 1.1, algebra]

2.2 Near the south pole, use $u\mapsto (u,-\sqrt{1-\|u\|^2})$. Then $h(u)=-\sqrt{1-\|u\|^2}=-1+\tfrac12\|u\|^2+O(\|u\|^4)$, so the Hessian at $u=0$ is $I_n$ and the south pole has index $0$. [step 1.1, algebra]

3.1 Steps 1.1-2.2 give exactly two nondegenerate critical points with distinct critical values $-1$ and $1$. Therefore $h$ is Morse and excellent by [F1]. [F1, step 2.1, step 2.2] ∎
