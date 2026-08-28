---
id: thm-holomorphic-implicit-function-theorem
kind: theorem
title: "The holomorphic implicit function theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-map-and-complex-jacobian, thm-holomorphic-inverse-function-theorem-several-variables, thm-componentwise-holomorphy-in-several-complex-variables, cor-holomorphic-functions-in-several-variables-are-smooth]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m,n\ge1$, let $U\subseteq\mathbb C^m\times\mathbb C^n$ be open, let
$f:U\to\mathbb C^n$ be holomorphic, and let $(a,b)\in U$ satisfy $f(a,b)=0$.
Assume the complex Jacobian with respect to the second block is invertible:

$$\det\left(\frac{\partial f_j}{\partial w_k}(a,b)\right)_{1\le j,k\le n}\ne0.$$

Then there are neighbourhoods $A$ of $a$ and $B$ of $b$, and a unique
holomorphic map $\varphi:A\to B$, such that

$$f(z,\varphi(z))=0\qquad(z\in A),$$

and, after shrinking $A\times B$ if needed,

$$f(z,w)=0\quad\Longleftrightarrow\quad w=\varphi(z).$$

## Facts & Assumptions

**Given:** The holomorphic map $f:U\to\mathbb C^n$, the point $(a,b)\in U$ with $f(a,b)=0$, and the invertible $w$-Jacobian at $(a,b)$.

[L1] A holomorphic map with invertible complex Jacobian at a point is biholomorphic between neighbourhoods of that point and its image ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

[L2] Holomorphic maps into $\mathbb C^{m+n}$ are read componentwise, so the first $m$ output coordinates of a holomorphic inverse are holomorphic too ([[thm-componentwise-holomorphy-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Define $$H(z,w):=(z,f(z,w))\in\mathbb C^m\times\mathbb C^n.$$ Its complex differential at $(a,b)$ is $$(u,v)\longmapsto \left(u,\ \partial_zf(a,b)u+\partial_wf(a,b)v\right).$$ Because $\partial_wf(a,b)$ is invertible, this linear map has inverse $$ (\xi,\eta)\longmapsto \left(\xi,\ \partial_wf(a,b)^{-1}\bigl(\eta-\partial_zf(a,b)\xi\bigr)\right),$$ so $J_{\mathbb C}H(a,b)$ is invertible. [given, algebra]

2.1 By [L1], after shrinking to neighbourhoods of $(a,b)$ and $(a,0)$ the map $H$ is biholomorphic. Write its inverse as $$H^{-1}(z,\eta)=\bigl(z,\psi(z,\eta)\bigr);$$ this form is forced because the first $m$ coordinates of $H$ are exactly $z$, and [L2] makes $\psi$ holomorphic. [step 1.1, L1, L2, construct]

3.1 Define $\varphi(z):=\psi(z,0)$. Then $$H\bigl(z,\varphi(z)\bigr)=H\bigl(H^{-1}(z,0)\bigr)=(z,0),$$ so $f(z,\varphi(z))=0$. Conversely, if $(z,w)$ is in the shrunken source neighbourhood and $f(z,w)=0$, then $H(z,w)=(z,0)=H(z,\varphi(z))$; injectivity of the biholomorphism from step 2.1 forces $w=\varphi(z)$. This also proves the uniqueness of $\varphi$. [step 2.1, algebra] ∎
