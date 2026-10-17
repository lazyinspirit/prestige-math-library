---
id: lem-derivative-algebra-and-chain-rules
kind: lemma
title: Sum, product, quotient, and chain rules from difference quotients
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-and-derivative-on-real-interval, lem-real-and-complex-modulus-rules]
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 15: Derivatives; Laws for Differentiation"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec15.pdf"
---

## Statement

Every function differentiable at $c$ is continuous at $c$.
If $f,g$ are real functions differentiable at $c$, then $f+g$ and $fg$ are
differentiable there and
$$
(f+g)'(c)=f'(c)+g'(c),\qquad (fg)'(c)=f'(c)g(c)+f(c)g'(c).
$$
If $g(c)\ne0$, then $f/g$ is differentiable at $c$ and
$$
(f/g)'(c)=\frac{f'(c)g(c)-f(c)g'(c)}{g(c)^2}.
$$
If $f$ is differentiable at $c$, $g$ is differentiable at $f(c)$, and the
composition is defined near $c$, then $g\circ f$ is differentiable at $c$ and
$(g\circ f)'(c)=g'(f(c))f'(c)$. For every integer $m\ge1$,
$(x^m)'=mx^{m-1}$.

## Facts & Assumptions

**Given:** Differentiability by the difference-quotient definition in
[[def-continuity-and-derivative-on-real-interval]] and the real modulus rules
[[lem-real-and-complex-modulus-rules]].

[F1] [[def-continuity-and-derivative-on-real-interval]]: $f'(c)$ is the
finite limit of $(f(c+h)-f(c))/h$ as $h\to0$, $h\ne0$.

[L1] [[lem-real-and-complex-modulus-rules]]: $|xy|=|x||y|$ for real $x,y$.

## Proof

1.1 If $f$ is differentiable at $c$, write $f(c+h)-f(c)=h q(h)$, where $q(h)\to f'(c)$. Then $q$ is bounded for sufficiently small $h$, so $|f(c+h)-f(c)|\le|h||q(h)|\to0$. Thus $f$ is continuous at $c$. [F1, L1, algebra]

2.1 The sum difference quotient is the sum of the two difference quotients, so it tends to $f'(c)+g'(c)$. For the product, use $$\frac{f(c+h)g(c+h)-f(c)g(c)}h =f(c+h)\frac{g(c+h)-g(c)}h+g(c)\frac{f(c+h)-f(c)}h.$$ By step 1.1, $f(c+h)\to f(c)$; taking limits gives the product rule. [F1, step 1.1, algebra]

2.2 By step 1.1, $g$ is continuous at $c$. Since $g(c)\ne0$, $g(c+h)\ne0$ for sufficiently small $h$. Algebra gives $$\frac{f(c+h)/g(c+h)-f(c)/g(c)}h =\frac{g(c)(f(c+h)-f(c))/h-f(c)(g(c+h)-g(c))/h} {g(c+h)g(c)}.$$ The denominator tends to $g(c)^2\ne0$ and the numerator tends to $g(c)f'(c)-f(c)g'(c)$, proving the quotient rule. [F1, step 1.1, algebra]

2.3 Put $y=f(c)$ and $\Delta(h)=f(c+h)-y$. Step 1.1 gives $\Delta(h)\to0$, and [F1] gives $\Delta(h)/h\to f'(c)$. Differentiability of $g$ at $y$ means $g(y+u)-g(y)=g'(y)u+u\epsilon(u)$ for $u\ne0$, where $\epsilon(u)\to0$; set $\epsilon(0)=0$. Then $$\frac{g(f(c+h))-g(f(c))}h =g'(y)\frac{\Delta(h)}h+\epsilon(\Delta(h))\frac{\Delta(h)}h.$$ The first term tends to $g'(y)f'(c)$; the second tends to zero because $\epsilon(\Delta(h))\to0$ and $\Delta(h)/h$ is bounded. This proves the chain rule, including increments with $\Delta(h)=0$. [F1, step 1.1, L1, algebra]

3.1 The case $m=1$ is the derivative of the identity function, whose quotient is exactly $1$. Suppose $(x^m)'=mx^{m-1}$. Since $x^{m+1}=x\cdot x^m$, the product rule in step 2.1 gives $(x^{m+1})'=x^m+x(mx^{m-1})=(m+1)x^m$. Induction proves the power rule for all $m\ge1$. [step 2.1, algebra, induction] ∎

