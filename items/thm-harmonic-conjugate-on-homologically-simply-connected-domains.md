---
id: thm-harmonic-conjugate-on-homologically-simply-connected-domains
kind: theorem
title: "Harmonic conjugates exist on homologically simply connected plane domains"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-harmonic-conjugate, def-plane-harmonic-function, def-homologically-simply-connected-complex-domain, thm-clairaut-schwarz-mixed-partials, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, thm-primitives-homologically-simply-connected-domains, cor-real-valued-holomorphic-function-is-constant]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
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

Let $\Omega$ be a homologically simply connected complex domain and let
$u:\Omega\to\mathbb R$ be harmonic. Then $u$ has a harmonic conjugate on
$\Omega$ ([[def-harmonic-conjugate]]).

Equivalently, there is a holomorphic function $F:\Omega\to\mathbb C$ with
$\operatorname{Re}F=u$ on $\Omega$.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega$ and a harmonic function $u:\Omega\to\mathbb R$.

[L1] If $u$ is harmonic, then $g:=u_x-iu_y$ has continuous first partials and satisfies the Cauchy-Riemann equations, because $u_{xx}=-u_{yy}$ and $u_{xy}=u_{yx}$ ([[thm-clairaut-schwarz-mixed-partials]], [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

[L2] Every holomorphic function on a homologically simply connected complex domain has a primitive ([[thm-primitives-homologically-simply-connected-domains]]).

[L3] A real-valued holomorphic function on a domain is constant ([[cor-real-valued-holomorphic-function-is-constant]]).

[L4] A complex-valued function with continuous first partials satisfying the Cauchy-Riemann equations is holomorphic ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

## Proof

**Proof technique:** direct.

1.1 Define $g:=u_x-iu_y$ on $\Omega$. Since $u$ is harmonic, [L1] makes $g$ holomorphic on $\Omega$. [given, L1]

2.1 By [L2], the holomorphic function $g$ has a primitive $G$ on $\Omega$ with $G'=g$. [step 1.1, L2]

3.1 Write $G=U+iV$. From $G'=g=u_x-iu_y$ one gets $U_x=u_x$ and $U_y=u_y$, so $H:=u-U$ has continuous first partials with $H_x=H_y=0$ on $\Omega$. Hence the Cauchy-Riemann equations hold for $H$, [L4] makes $H$ holomorphic, and [L3] makes it constant. [step 2.1, L3, L4, algebra]

4.1 If $H\equiv c$ on $\Omega$, then $F:=G+c$ is holomorphic on $\Omega$ and $\operatorname{Re}F=U+c=u$. Writing $F=u+iv$ defines a harmonic conjugate $v$ of $u$ on $\Omega$. [step 3.1, algebra] ∎
