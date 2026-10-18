---
id: ex-real-two-dimensional-spin-factor
kind: example
title: The spin factor on the real plane
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-real-spin-factor, thm-real-spin-factor-is-jordan]
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
    - title: "John C. Baez, The Octonions, §3.4, PDF pp. 27–28"
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

**Given:** The spin factor $S(\mathbb R^2)$ with the standard positive
definite inner product.

[F1] Its product is
$(v,\alpha)\circ(w,\beta)=(\alpha w+\beta v,\langle v,w\rangle+\alpha\beta)$
([[def-real-spin-factor]]).

[F2] This product satisfies the Jordan identity
([[thm-real-spin-factor-is-jordan]]).

## Proof
1.1 Substituting $u=(0,1)$, $e_1=((1,0),0)$, and $e_2=((0,1),0)$ into [F1] gives $u\circ e_i=e_i$, $e_1^2=e_2^2=u$, and $e_1\circ e_2=0$, and verifies that $u$ is the unit. [given, F1, algebra]

2.1 By [F1] and the standard dot product, $(v,\alpha)^2=(2\alpha v,x^2+y^2+\alpha^2)$ for $v=(x,y)$. Expanding in the basis products of step 1.1 gives $(ae_1+be_2+cu)^2=2ac e_1+2bc e_2+(a^2+b^2+c^2)u$. [given, F1, step 1.1, algebra]

3.1 If $(w,t)=(v,\alpha)^2$, step 2.1 gives $w=2\alpha v$ and $t=\|v\|^2+\alpha^2$, so $\|w\|=2|\alpha|\|v\|\leq\alpha^2+\|v\|^2=t$. Thus every square lies in the stated cone. [given, step 2.1, algebra]

3.2 Conversely, suppose $t\geq\|w\|$. If $t=0$, then $w=0$ and $(w,t)=(0,0)^2$. If $t>0$, put $s=(t+\sqrt{t^2-\|w\|^2})/2$, $\alpha=\sqrt{s}$, and $v=w/(2\alpha)$. Since $s^2-ts+\|w\|^2/4=0$, we have $2\alpha v=w$ and $s+\|w\|^2/(4s)=t$, so step 2.1 gives $(v,\alpha)^2=(w,t)$. [given, step 2.1, algebra]

4.1 The cone boundary is $t=\|w\|$, equivalently $t\geq0$ and $t^2-\|w\|^2=0$; for $w=(x,y)$ this is $\alpha\geq0$ and $\alpha^2=x^2+y^2$. The algebra is Jordan by [F2]. [given, F2, step 3.2, algebra] ∎
