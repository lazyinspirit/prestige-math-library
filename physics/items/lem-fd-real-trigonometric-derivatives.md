---
id: lem-fd-real-trigonometric-derivatives
kind: lemma
title: "Derivative identities for the real restrictions of complex sine and cosine"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-fd-real-trigonometric-functions
  - cor-complex-trigonometric-and-hyperbolic-derivatives
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
dependency_roles:
  def-fd-real-trigonometric-functions: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-derivatives: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Chapter 1, §§2.2–2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

For $t\in\mathbb R$, define $S(t)=\operatorname{Re}((E(it)-E(-it))/(2i))$ and $C(t)=\operatorname{Re}((E(it)+E(-it))/2)$, where $E(z)=\sum_{n=0}^{\infty}z^n/n!$ and $\operatorname{Re}(x+iy)=x$. Then $S$ and $C$ are differentiable on $\mathbb R$ and satisfy $S'(t)=C(t)$ and $C'(t)=-S(t)$ for every real $t$.

## Statement references

The complex sine and cosine derivative formulas and the real restriction: [[def-fd-real-trigonometric-functions]].

Complex sine and cosine are entire with derivatives $s_{\mathbb C}'=c_{\mathbb C}$ and $c_{\mathbb C}'=-s_{\mathbb C}$: [[cor-complex-trigonometric-and-hyperbolic-derivatives]].

Complex differentiability implies real total differentiability with the corresponding real component derivatives: [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]].

The power-series definitions and termwise differentiation: [Stein and Shakarchi, *Complex Analysis*, Chapter 1, §2.3, printed pp. 16–17 (PDF pp. 34–35)](https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf).

## Facts & Assumptions

**Given:** A real number $t$.

[F1] The functions $S(t)$ and $C(t)$ are the real parts of the complex sine and cosine defined by the exponential formulas in [[def-fd-real-trigonometric-functions]].

[F2] The complex sine and cosine are entire and have derivatives $s_{\mathbb C}'(z)=c_{\mathbb C}(z)$ and $c_{\mathbb C}'(z)=-s_{\mathbb C}(z)$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[F3] Let $U\subseteq\mathbb C$ be open, let $z=x+iy\in U$, and let $f=u+iv:U\to\mathbb C$. If $f$ is complex differentiable at $z$, then its real total derivative exists, $u_x(x,y)=\operatorname{Re}(f'(z))$, and $v_x(x,y)=\operatorname{Im}(f'(z))$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]). Both applications below have $U=\mathbb C$, which is open and contains every real $t$, because the functions in [F2] are entire.

## Proof

1.1 Let $s_{\mathbb C}=u+iv$. By [F2] it is complex differentiable at every real $t$ with derivative $c_{\mathbb C}(t)$. By [F3], $u$ is real totally differentiable at $(t,0)$ and $u_x(t,0)=\operatorname{Re}(c_{\mathbb C}(t))=C(t)$. Restricting the real total-differentiability expansion to increments $(h,0)$ gives $S'(t)=u_x(t,0)=C(t)$. [given, F1, F2, F3]

2.1 Let $c_{\mathbb C}=w+iz$. By [F2] its complex derivative at a real $t$ is $-s_{\mathbb C}(t)$. By [F3], $w$ is real totally differentiable at $(t,0)$ and $w_x(t,0)=\operatorname{Re}(-s_{\mathbb C}(t))=-S(t)$. Restricting to increments $(h,0)$ gives $C'(t)=w_x(t,0)=-S(t)$. [given, F1, F2, F3] ∎
