---
id: ex-real-two-dimensional-spin-factor
kind: example
title: The spin factor on the real plane
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-real-spin-factor, thm-real-spin-factor-is-jordan, cor-inner-product-induces-a-norm, thm-of-square-roots]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "John C. Baez, The Octonions, §3.3, PDF pp. 27–28"
      url: https://arxiv.org/pdf/math/0105155v4
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
---

## Statement

For $V=\mathbb R^2$ with its standard dot product, the spin factor has unit
$u=(0,1)$. For $v=(x,y)$,
$$ (v,\alpha)^2=(2\alpha v,x^2+y^2+\alpha^2). $$
Its square cone is exactly $\alpha\geq\sqrt{x^2+y^2}$, with boundary
$\alpha^2=x^2+y^2$ and $\alpha\geq0$. The orthonormal basis
$e_1=((1,0),0)$, $e_2=((0,1),0)$, $u=((0,0),1)$ satisfies
$$ u\circ e_i=e_i,\qquad e_1^2=e_2^2=u,\qquad e_1\circ e_2=0, $$
and for $z=ae_1+be_2+cu$,
$$ z^2=2ac e_1+2bc e_2+(a^2+b^2+c^2)u. $$

## Facts & Assumptions

**Given:** The spin factor $S(\mathbb R^2)$ with the standard positive definite inner product.

[F1] Its product is $(v,\alpha)\circ(w,\beta)=(\alpha w+\beta v,\langle v,w\rangle+\alpha\beta)$ ([[def-real-spin-factor]]).

[F2] This product satisfies the Jordan identity ([[thm-real-spin-factor-is-jordan]]).

[F3] The induced length on a real inner-product space is a norm and satisfies $\|\lambda v\|=|\lambda|\,\|v\|$ ([[cor-inner-product-induces-a-norm]]).

[F4] Every nonnegative real number has a unique nonnegative square root ([[thm-of-square-roots]]).

[F5] Give $\mathbb R^2$ its standard Euclidean norm topology and $\mathbb R^2\times\mathbb R$ the product with the usual topology on $\mathbb R$.

## Proof
1.1 Substituting $u=(0,1)$, $e_1=((1,0),0)$, and $e_2=((0,1),0)$ into [F1] gives $u\circ e_i=e_i$, $e_1^2=e_2^2=u$, and $e_1\circ e_2=0$, and verifies that $u$ is the unit. [given, F1, algebra]

2.1 By [F1] and the standard dot product, $(v,\alpha)^2=(2\alpha v,x^2+y^2+\alpha^2)$ for $v=(x,y)$. Expanding in the basis products of step 1.1 gives $(ae_1+be_2+cu)^2=2ac e_1+2bc e_2+(a^2+b^2+c^2)u$. [given, F1, step 1.1, algebra]

3.1 If $(w,t)=(v,\alpha)^2$, step 2.1 gives $w=2\alpha v$ and $t=\|v\|^2+\alpha^2$. By norm homogeneity in [F3], $\|w\|=2|\alpha|\,\|v\|$, and $(|\alpha|-\|v\|)^2\geq0$ gives $\|w\|\leq t$. Thus every square lies in the stated cone. [given, F3, step 2.1, algebra]

3.2 Conversely, suppose $t\geq\|w\|$. If $t=0$, norm separation in [F3] gives $w=0$ and $(w,t)=(0,0)^2$. If $t>0$, then $t^2-\|w\|^2=(t-\|w\|)(t+\|w\|)\geq0$, so both $\sqrt{t^2-\|w\|^2}$ and, after defining $s=(t+\sqrt{t^2-\|w\|^2})/2>0$, $\alpha=\sqrt{s}$ exist by [F4]. Set $v=w/(2\alpha)$. The quadratic equation $s^2-ts+\|w\|^2/4=0$ gives $s+\|w\|^2/(4s)=t$ and $2\alpha v=w$, so step 2.1 gives $(v,\alpha)^2=(w,t)$. [given, F4, step 2.1, algebra]

4.1 The equality locus of the square cone is $t=\|w\|$, equivalently $t\geq0$ and $t^2-\|w\|^2=0$; for $w=(x,y)$ and $t=\alpha$, this is $\alpha\geq0$ and $\alpha^2=x^2+y^2$. [given, step 3.2, algebra]

5.1 The function $g(w,t)=t-\|w\|$ is continuous in the product topology [F5], since the triangle inequality in [F3] gives $|\|w\|-\|w'\||\leq\|w-w'\|$. Continuity makes $\{g>0\}$ and $\{g<0\}$ open; the first lies in the cone and the second in its complement. If $g(w,t)=0$, then $(w,t+\varepsilon)$ is in the cone and $(w,t-\varepsilon)$ is outside it for every $\varepsilon>0$; both approach $(w,t)$ as $\varepsilon\downarrow0$. Hence exactly the equality locus in step 4.1 is the boundary. The algebra is Jordan by [F2]. [F2, F3, F5, step 4.1, algebra] ∎

