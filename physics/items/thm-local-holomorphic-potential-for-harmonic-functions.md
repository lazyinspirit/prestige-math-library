---
id: thm-local-holomorphic-potential-for-harmonic-functions
kind: theorem
title: "Every plane harmonic function is locally the real part of a holomorphic function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-harmonic-function, thm-clairaut-schwarz-mixed-partials, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-primitives-homologically-simply-connected-domains, cor-real-valued-holomorphic-function-is-constant]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $u:\Omega\to\mathbb R$ be harmonic
([[def-plane-harmonic-function]]), and let $a\in\Omega$. Then some radius
$r>0$ and some holomorphic function $F$ on the disc $D(a,r)$ satisfy

$$u(z)=\operatorname{Re}F(z)\qquad(z\in D(a,r)).$$

## Facts & Assumptions

**Given:** An open set $\Omega$, a harmonic function $u$ on $\Omega$, and a point $a\in\Omega$.

[L1] If a $C^2$ real function is harmonic, then $u_x-iu_y$ has continuous first partials and satisfies the Cauchy-Riemann equations, because $u_{xx}=-u_{yy}$ and $u_{xy}=u_{yx}$ ([[thm-clairaut-schwarz-mixed-partials]], [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

[L2] Every holomorphic function on a homologically simply connected complex domain has a primitive, and every star-shaped plane domain is homologically simply connected ([[thm-primitives-homologically-simply-connected-domains]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[L3] A real-valued holomorphic function on a domain is constant ([[cor-real-valued-holomorphic-function-is-constant]]).

[L4] A complex-valued function with continuous first partials satisfying the Cauchy-Riemann equations is holomorphic ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

## Proof

**Proof technique:** direct.

1.1 Choose $r>0$ with $D(a,r)\subseteq\Omega$, and define $g:=u_x-iu_y$ on $D(a,r)$. Since $u$ is harmonic and $C^2$, [L1] makes $g$ holomorphic on $D(a,r)$. [given, L1, choose]

2.1 The disc $D(a,r)$ is star-shaped, hence homologically simply connected by [L2], so $g$ has a primitive $G$ there with $G'=g$. [step 1.1, L2]

3.1 Write $G=U+iV$. Because $G'=g=u_x-iu_y$, one has $U_x=u_x$ and $U_y=u_y$, so the real-valued function $H:=u-U$ has continuous first partials with $H_x=H_y=0$ on $D(a,r)$. Hence the Cauchy-Riemann equations hold for $H$, [L4] makes $H$ holomorphic there, and [L3] makes it constant. [step 2.1, L3, L4, algebra]

4.1 If $H\equiv c$ on $D(a,r)$, then $F:=G+c$ is holomorphic there and $\operatorname{Re}F=U+c=u$. [step 3.1, algebra] ∎
