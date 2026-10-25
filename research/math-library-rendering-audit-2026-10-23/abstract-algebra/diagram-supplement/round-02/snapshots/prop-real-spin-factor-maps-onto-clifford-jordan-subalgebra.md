---
id: prop-real-spin-factor-maps-onto-clifford-jordan-subalgebra
kind: proposition
title: The spin factor and the plus-quadratic Clifford convention
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 4
deps: [def-real-spin-factor, def-associative-jordan-product, thm-real-spin-factor-is-jordan, def-clifford-algebra-of-a-quadratic-space, lem-clifford-polarized-relations, thm-clifford-pbw-basis-and-associated-graded, thm-associative-symmetrization-satisfies-jordan-identity, cor-inner-product-induces-a-norm, thm-of-square-roots]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John C. Baez, The Octonions, §3.3, PDF pp. 27–28"
      url: https://arxiv.org/pdf/math/0105155v4
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
---

## Statement

Let $V$ be a finite-dimensional real inner-product space, set
$Q(v)=\langle v,v\rangle$, and use the plus-$Q$ Clifford algebra
$\mathrm{Cl}^{+}(V,Q)$ of [[def-clifford-algebra-of-a-quadratic-space]]. The
map

$$ \Phi:S(V)\longrightarrow \mathrm{Cl}^{+}(V,Q)^+, \qquad \Phi(v,\alpha)=\bar v+\alpha 1 $$

is an injective unital Jordan homomorphism onto the Jordan subalgebra
$\mathbb R1+\bar V$. In particular,
$\bar v\bar w+\bar w\bar v=2\langle v,w\rangle1$. The spin-factor square
cone is exactly
$$ \{(v,\alpha):\alpha\geq\|v\|\}, $$
whose boundary is the future null cone
$\{(v,\alpha):\alpha\geq0,\ \alpha^2-\|v\|^2=0\}$ of
$q(v,\alpha)=\alpha^2-\|v\|^2$.

## Product comparison

The bottom arrow is the symmetrized product on the associative Clifford
algebra. The vertical arrows are $\Phi\times\Phi$ and $\Phi$. This square
commutes by the two equal expressions calculated in proof step 1.1; the proof
uses that calculation and does not rely on the diagram.

```tikzcd
S(V)\times S(V) \arrow[r,"\circ_S"] \arrow[d,"\Phi\times\Phi"'] & S(V) \arrow[d,"\Phi"] \\
\mathrm{Cl}^{+}(V,Q)\times\mathrm{Cl}^{+}(V,Q) \arrow[r,"\circ_{\mathrm{Cl}}"] & \mathrm{Cl}^{+}(V,Q)
```

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space $V$, its spin factor $S(V)$, and the plus-$Q$ Clifford algebra with $Q(v)=\langle v,v\rangle$.

[F1] $S(V)=V\oplus\mathbb R$ has product $(v,\alpha)\circ(w,\beta)=(\alpha w+\beta v,\langle v,w\rangle+\alpha\beta)$ ([[def-real-spin-factor]]).

[F2] The Clifford quotient imposes $\bar v^2=Q(v)1$; its polarized relation is $\bar v\bar w+\bar w\bar v=2\langle v,w\rangle1$ ([[def-clifford-algebra-of-a-quadratic-space]], [[lem-clifford-polarized-relations]]).

[F3] For a chosen finite basis $e_1,\ldots,e_n$ of $V$, the ordered square-free Clifford monomials, including $1$ and each $\bar e_i$, are a basis of $\mathrm{Cl}^{+}(V,Q)$, including when the form is degenerate ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F4] The spin factor is Jordan ([[thm-real-spin-factor-is-jordan]]); for an associative real algebra, $A^+$ has product $a\circ b=(ab+ba)/2$ ([[def-associative-jordan-product]]) and is Jordan ([[thm-associative-symmetrization-satisfies-jordan-identity]]).

[F5] The induced length $\|v\|=\sqrt{\langle v,v\rangle}$ is a norm; in particular $\|\lambda v\|=|\lambda|\,\|v\|$ for real $\lambda$ ([[cor-inner-product-induces-a-norm]]).

[F6] Every nonnegative real number has a unique nonnegative square root ([[thm-of-square-roots]]).

[F7] For the square-cone boundary claim, give $V$ its induced norm topology, $\mathbb R$ its usual topology, and $V\times\mathbb R$ the product topology.

## Proof
1.1 The real-linear map $\Phi(v,\alpha)=\bar v+\alpha1$ satisfies $\begin{aligned} \Phi((v,\alpha)\circ(w,\beta)) &=\alpha\bar w+\beta\bar v+(\langle v,w\rangle+\alpha\beta)1,\\ \Phi(v,\alpha)\circ\Phi(w,\beta) &=\tfrac12\big((\bar v+\alpha1)(\bar w+\beta1) +(\bar w+\beta1)(\bar v+\alpha1)\big)\\ &=\alpha\bar w+\beta\bar v+\tfrac12(\bar v\bar w+\bar w\bar v)+\alpha\beta1. \end{aligned}$ The two expressions agree by [F2]. Thus $\Phi$ preserves products and sends the unit $(0,1)$ to $1$. Its image is exactly the vector subspace $\mathbb R1+\bar V$, and product preservation makes that image a Jordan subalgebra. [given, F1, F2, F4, algebra]

1.2 For $x=(v,\alpha)$, [F1] gives $x^2=(2\alpha v,\|v\|^2+\alpha^2)$. If this square is $(w,t)$, norm homogeneity from [F5] gives $\|w\|=2|\alpha|\,\|v\|$, while $(|\alpha|-\|v\|)^2\geq0$ gives $2|\alpha|\,\|v\|\leq\alpha^2+\|v\|^2=t$. Thus every square satisfies $t\geq\|w\|$. [given, F1, F5, algebra]

2.1 If $\Phi(v,\alpha)=0$, then $\alpha1+\sum_{i=1}^n v_i\bar e_i=0$ for the coordinates $v=\sum_i v_i e_i$. The distinct degree-zero and degree-one PBW basis elements in [F3] are linearly independent, so $\alpha=0$ and every $v_i=0$. Thus $\Phi$ is injective. [given, F3, step 1.1, algebra]

2.2 Conversely, suppose $t\geq\|w\|$. If $t=0$, norm separation in [F5] gives $w=0$, so $(w,t)=(0,0)^2$. If $t>0$, then $t^2-\|w\|^2=(t-\|w\|)(t+\|w\|)\geq0$. By [F6], the radicand has a nonnegative square root; set $u=(t+\sqrt{t^2-\|w\|^2})/2>0$. Applying [F6] again gives $\alpha=\sqrt u>0$, and set $v=w/(2\alpha)$. The quadratic equation $u^2-tu+\|w\|^2/4=0$, divided by $u$, gives $u+\|w\|^2/(4u)=t$, while $2\alpha v=w$. Hence [F1] gives $(v,\alpha)^2=(w,t)$. Therefore the square cone is exactly $C=\{(w,t):t\geq\|w\|\}$, and its equality locus is $t=\|w\|$, equivalently $t\geq0$ and $t^2-\|w\|^2=0$. [given, F1, F5, F6, step 1.2, algebra]

3.1 The function $g(w,t)=t-\|w\|$ is continuous in the product topology [F7]: the triangle inequality in [F5] gives $|\|w\|-\|w'\||\leq\|w-w'\|$. Continuity makes $\{g>0\}$ and $\{g<0\}$ open; the first lies in $C$ and the second in its complement. At every equality point $(w,t)$ with $g(w,t)=0$, the points $(w,t+\varepsilon)$ lie in $C$ and $(w,t-\varepsilon)$ lie outside $C$ for every $\varepsilon>0$, and both tend to $(w,t)$ as $\varepsilon\downarrow0$. Hence the topological boundary of $C$ is exactly the equality locus identified in step 2.2. [F5, F7, step 2.2, algebra]

4.1 Steps 1.1 and 2.1 establish the injective unital Jordan homomorphism and its image; steps 1.2, 2.2, and 3.1 establish the square cone and its boundary. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎

