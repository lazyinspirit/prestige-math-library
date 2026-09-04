---
id: lem-one-variable-completion-of-the-square-with-a-smooth-parameter
kind: lemma
title: "A nonzero second derivative splits off a signed square with a smooth parameter"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-euclidean-implicit-function-theorem, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: local reduction
verification:
  audited: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

Let $m\ge 0$, let $U\subseteq\mathbb R\times\mathbb R^m$ be open around
$(0,0)$, and let $F:U\to\mathbb R$ be smooth with

$$F(0,0)=0,\qquad \frac{\partial F}{\partial u}(0,0)=0,\qquad \frac{\partial^2F}{\partial u^2}(0,0)\ne0.$$

Then, after shrinking $U$, there are a sign $\varepsilon\in\{\pm1\}$, a smooth
function $H$ of the parameter variable, and a smooth local coordinate
change $(u,y)\mapsto (u',y)$ fixing $(0,0)$ such that

$$F(u,y)=H(y)+\varepsilon (u')^2.$$

## Facts & Assumptions

**Given:** The open set $U$, the smooth function $F$, and the derivative
hypotheses in the statement.

[L1] The Euclidean implicit function theorem solves one scalar equation for one
variable as a smooth function of the remaining parameters when the relevant
partial derivative is invertible
([[thm-euclidean-implicit-function-theorem]]).

[L2] A Euclidean map with invertible derivative at a point is a local
diffeomorphism there ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** local reduction.

1.1 If $m=0$, define $A(u):=\int_0^1(1-t)\,F''(tu)\,dt$. Then $F(u)=u^2A(u)$, $A(0)=\tfrac12F''(0)\ne0$, and after shrinking the domain one has $\varepsilon A(u)>0$ for $\varepsilon=\operatorname{sgn}(F''(0))$. Putting $u':=u\sqrt{\varepsilon A(u)}$ gives $F(u)=\varepsilon (u')^2$. [given, construct]

1.2 Assume $m>0$. Put $G(u,y):=\partial F/\partial u(u,y)$. Since $\partial G/\partial u(0,0)=\partial^2F/\partial u^2(0,0)\ne0$, [L1] gives a smooth function $\phi$ near $0\in\mathbb R^m$ with $\phi(0)=0$ and $G(\phi(y),y)=0$. [L1, given, assume-case[ positive-parameter], construct]

2.1 Set $\widetilde F(s,y):=F(s+\phi(y),y)-F(\phi(y),y)$. Then $\widetilde F(0,y)=0$ and $\partial\widetilde F/\partial s(0,y)=0$ for $y$ near $0$. [step 1.2, algebra]

3.1 Define $A(s,y):=\int_0^1(1-t)\,\partial^2\widetilde F/\partial s^2(ts,y)\,dt$. The integral formula gives $\widetilde F(s,y)=s^2A(s,y)$, and $A(0,0)=\tfrac12\,\partial^2F/\partial u^2(0,0)\ne0$. After shrinking, the sign $\varepsilon:=\operatorname{sgn}(\partial^2F/\partial u^2(0,0))$ satisfies $\varepsilon A(s,y)>0$ everywhere. [step 2.1, construct]

4.1 Put $\beta(s,y):=\sqrt{\varepsilon A(s,y)}$, define $u':=\beta(s,y)s$, and let $H(y):=F(\phi(y),y)$. Then $F(s+\phi(y),y)=H(y)+\varepsilon (u')^2$, and $\partial u'/\partial s(0,0)=\beta(0,0)\ne0$, so [L2] makes $(s,y)\mapsto(u',y)$ a local diffeomorphism at $(0,0)$. [L2, step 3.1, construct]

5.1 Composing the translation $(u,y)\mapsto (u-\phi(y),y)$ from step 1.2 with the coordinate change from step 4.1 yields the required local coordinates $(u',y)$, and the case $m=0$ is already covered by step 1.1. [step 1.1, step 1.2, step 4.1] ∎
