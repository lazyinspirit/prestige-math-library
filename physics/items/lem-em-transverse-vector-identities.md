---
id: lem-em-transverse-vector-identities
kind: lemma
domain: mathematics
title: "Transverse vector-calculus identities for the splitting $\\mathbb R^3=\\mathbb R^2\\oplus\\mathbb R e_z$"
status: published
origin: pipeline
dependency_level: 0
deps: [def-cross-product-in-r3, def-divergence-and-curl-of-a-c1-vector-field, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-laplacian-of-a-c2-function, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich, 2024 FS (German), Chapter 13 'Wellenleiter' and 'Kavitaeten', PDF pp. 153-162 (printed pp. 13.1-13.10); complete 176-page author-hosted PDF and official TeX read, with the conjugate-error in (13.26), the 'Wendepunkt' mislabel and the general group-velocity restriction recorded as source defects not copied"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin, 2006-02-02), node 105 'Wave-guides', complete author-hosted HTML node read in the run's pinned full-notes snapshot"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    - title: "D. J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596-page full scan), sections 9.5.1-9.5.3 printed pp. 405-412 (wave guides, TE waves in a rectangular wave guide, coaxial transmission line), read in the stamped full text; OCR noise cross-checked against the other treatments"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $e_z$ be a unit vector of $\mathbb R^3$ and identify $\mathbb R^3=\mathbb R^2\oplus\mathbb R e_z$ with transverse coordinates $(x_1,x_2)$; write $\nabla_t h=(\partial_1h,\partial_2h)$, $\Delta_t h=\partial_1^2h+\partial_2^2h$ and, for a transverse $C^1$ map $u_t$ with components $(u_1,u_2)$, $\operatorname{div}_t u_t=\partial_1u_1+\partial_2u_2$ and $\operatorname{curl}_2 u_t=\partial_1u_2-\partial_2u_1$; regard $h$, $\nabla_th$, $u_t$ and $e_z\times u_t$ as $z$-independent fields on $\Omega_t\times\mathbb R$, with $e_z$ the third basis vector. Let $h:\Omega_t\to\mathbb R$ be $C^2$ and $u_t:\Omega_t\to\mathbb R^2$ be $C^1$. Then, with the divergence, curl, cross product and inner product of [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]:
(a) $\operatorname{div}(e_z\times\nabla_th)=0$; $\operatorname{curl}(e_z\times\nabla_th)=e_z\,\Delta_th$; $e_z\times(e_z\times\nabla_th)=-\nabla_th$; $\nabla_th\cdot(e_z\times\nabla_th)=0$; $e_z\cdot(e_z\times\nabla_th)=0$; $|e_z\times\nabla_th|=|\nabla_th|$;
(b) $\operatorname{curl}(e_zh)=-e_z\times\nabla_th$ and $\operatorname{div}(e_zh)=\partial_3h$ (which vanishes for $z$-independent $h$);
(c) $\operatorname{curl}(u_t)=e_z\operatorname{curl}_2u_t$, $\operatorname{div}(u_t)=\operatorname{div}_tu_t$, and $e_z\times u_t$ is transverse.

## Facts & Assumptions

**Given:** A unit vector $e_z\in\mathbb R^3$, the orthogonal splitting $\mathbb R^3=\mathbb R^2\oplus\mathbb R e_z$ with transverse coordinates $(x_1,x_2)$ and $e_z=e_3$ the third standard basis vector; an open set $\Omega_t\subseteq\mathbb R^2$; a $C^2$ function $h:\Omega_t\to\mathbb R$ and a $C^1$ map $u_t:\Omega_t\to\mathbb R^2$ with components $(u_1,u_2)$; and the fields $h$, $\nabla_th$, $u_t$, $e_z\times u_t$ regarded as functions on $\Omega_t\times\mathbb R$ independent of the third coordinate $x_3$.

[F1] $\partial_jf$ is the derivative of $f$ along the $j$th coordinate line, and a $C^1$ map has continuous first partial derivatives ([[def-directional-and-partial-derivatives]]).

[F2] For a $C^1$ field $F=(F_1,F_2,F_3)$ on an open subset of $\mathbb R^3$, $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3$ and $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] The cross product on $\mathbb R^3$ is given by its coordinate formula, it is bilinear and alternating, it is orthogonal to both factors, and the Euclidean inner product is the coordinate dot product $\langle v,w\rangle=\sum_jv_jw_j$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-euclidean-inner-product]]).

[F4] The Laplacian of a $C^2$ scalar field on an open subset of $\mathbb R^n$ is $\Delta f=\partial_1\partial_1f+\cdots+\partial_n\partial_nf$ ([[def-laplacian-of-a-c2-function]]); in particular $\Delta_tf=\partial_1^2f+\partial_2^2f$ for $f$ on $\Omega_t\subseteq\mathbb R^2$.

[F5] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for all coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] Derivatives of sums, scalar multiples and products of differentiable real functions obey the sum, scalar and product rules ([[thm-algebra-of-derivatives]]); in particular a constant factor and $-\partial_jh$ may be moved through $\partial_i$.



## Proof

**Proof technique:** direct: write every object in the orthonormal basis $(e_1,e_2,e_z)$, use the coordinate formulas for the cross product, divergence and curl, and evaluate the coordinate-derivative expressions with the mixed-partials theorem.

1.1 [Component forms] In the orthonormal basis $(e_1,e_2,e_z)$ a transverse vector has the form $v=(v_1,v_2,0)$, and the coordinate formula for the cross product [F3] gives $e_z\times v=(e_z\times v_1e_1)+(e_z\times v_2e_2)=v_1e_2-v_2e_1=(-v_2,v_1,0)$. Hence $e_z\times\nabla_th=(-\partial_2h,\partial_1h,0)$, $e_z\times u_t=(-u_2,u_1,0)$, and $e_zh$ is the field $(0,0,h)$; every field displayed in the Statement is independent of $x_3$, so its $\partial_3$-derivative vanishes wherever the derivative is taken. [given, F1, F2, F3]

2.1 [Divergence of $e_z\times\nabla_th$] By [F2] and step 1.1, $\operatorname{div}(e_z\times\nabla_th)=\partial_1(-\partial_2h)+\partial_2(\partial_1h)+\partial_3 0=-\partial_1\partial_2h+\partial_2\partial_1h$, which is $0$ by [F5] because $h$ is $C^2$; this is the first identity of clause (a). [step 1.1, F2, F5, F6, algebra]

2.2 [Curl of $e_z\times\nabla_th$] By [F2] and step 1.1, again with the third-coordinate derivative vanishing, $\operatorname{curl}(e_z\times\nabla_th)=(\partial_2 0-\partial_3\partial_1h,\ \partial_3(-\partial_2h)-\partial_1 0,\ \partial_1\partial_1h-\partial_2(-\partial_2h))=(0,0,\partial_1^2h+\partial_2^2h)=e_z\Delta_th$, which is the second identity of clause (a) by [F4]. [step 1.1, F2, F4, F6]

2.3 [Triple product, orthogonality and norm] For an arbitrary transverse $v=(v_1,v_2,0)$, step 1.1 gives $e_z\times(e_z\times v)=e_z\times(-v_2,v_1,0)=(-v_1,-v_2,0)=-v$; the coordinate formulas of [F3] give $v\cdot(e_z\times v)=v_1(-v_2)+v_2v_1+0\cdot0=0$, $e_z\cdot(e_z\times v)=0$ as the third component of $e_z\times v$ is $0$, and $|e_z\times v|^2=(-v_2)^2+v_1^2+0=v_1^2+v_2^2=|v|^2$, both sides nonnegative, so $|e_z\times v|=|v|$. At $v=\nabla_th$ these are the remaining four identities of clause (a); the case $v=0$ is included since then both sides vanish. [step 1.1, F3, algebra]

2.4 [Clause (b)] By [F2] and step 1.1, $\operatorname{curl}(e_zh)=(\partial_2h-\partial_3 0,\ \partial_3 0-\partial_1h,\ \partial_1 0-\partial_2 0)=(\partial_2h,-\partial_1h,0)=-e_z\times\nabla_th$, and $\operatorname{div}(e_zh)=\partial_1 0+\partial_2 0+\partial_3h=\partial_3h$, which is $0$ because $h$ is independent of $x_3$. [step 1.1, F1, F2, F6]

3.1 [Clause (c)] For $u_t=(u_1,u_2,0)$ with $\partial_3u_j=0$, [F2] gives $\operatorname{curl}(u_t)=(\partial_2 0-\partial_3u_2,\ \partial_3u_1-\partial_1 0,\ \partial_1u_2-\partial_2u_1)=(0,0,\operatorname{curl}_2u_t)=e_z\operatorname{curl}_2u_t$ and $\operatorname{div}(u_t)=\partial_1u_1+\partial_2u_2=\operatorname{div}_tu_t$; and $e_z\times u_t=(-u_2,u_1,0)$ has third component $0$, so it is transverse. [step 1.1, F1, F2] ∎
