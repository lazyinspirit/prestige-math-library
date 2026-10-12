---
id: lem-cm-derivative-of-pairings-of-curves
kind: lemma
title: "Differentiation of sums, scalar multiples, inner products, cross products and squared norms of differentiable curves in $\\mathbb R^3$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-cross-product-in-r3, def-derivative, def-limit-point-r, def-interval, thm-algebra-of-derivatives, lem-cross-product-is-bilinear-alternating-and-orthogonal, lem-finite-sum-laws]
dependency_roles:
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-derivative: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-interval: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §1.3, Eq. (1.32), printed pp. 10-11: the product rule $(\\mathbf r\\times\\mathbf p)'=\\mathbf r'\\times\\mathbf p+\\mathbf r\\times\\mathbf p'$ for angular momentum"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §§1.2-1.3, printed pp. 2-8: differentiation of $\\mathbf p=m\\dot{\\mathbf r}$, of $\\mathbf r\\times\\mathbf p$ and of the kinetic energy $\\frac12\\sum_i m_i\\dot{\\mathbf r}_i^{\\,2}$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $t_0\in I$, let $x,y:I\to\mathbb R^3$ be differentiable at $t_0$ ([[def-vector-valued-derivative-and-integral]]) and let $\lambda:I\to\mathbb R$ be differentiable at $t_0$ ([[def-derivative]]). Write $x'(t_0),y'(t_0)\in\mathbb R^3$ for the derivatives, $\langle\cdot,\cdot\rangle$ for the Euclidean inner product and $\lVert\cdot\rVert_2$ for the Euclidean norm ([[def-euclidean-inner-product]]), and $\times$ for the cross product ([[def-cross-product-in-r3]]). Then:

1. $x+y$ and $\lambda x$ are differentiable at $t_0$, with $(x+y)'(t_0)=x'(t_0)+y'(t_0)$ and $(\lambda x)'(t_0)=\lambda'(t_0)x(t_0)+\lambda(t_0)x'(t_0)$;
2. $t\mapsto\langle x(t),y(t)\rangle$ is differentiable at $t_0$, with derivative $\langle x'(t_0),y(t_0)\rangle+\langle x(t_0),y'(t_0)\rangle$;
3. $t\mapsto x(t)\times y(t)$ is differentiable at $t_0$, with derivative $x'(t_0)\times y(t_0)+x(t_0)\times y'(t_0)$;
4. $t\mapsto\lVert x(t)\rVert_2^2$ is differentiable at $t_0$, with derivative $2\langle x'(t_0),x(t_0)\rangle$.

## Facts & Assumptions

**Given:** An interval $I\subseteq\mathbb R$ with at least two points, a point $t_0\in I$, curves $x,y:I\to\mathbb R^3$ and a function $\lambda:I\to\mathbb R$, with $x,y,\lambda$ differentiable at $t_0$.

[L1] A function $f:I\to\mathbb R^m$ is differentiable at $t_0$ if and only if every component $f_k$ is differentiable at $t_0$ as a real function on $I$, and then $f'(t_0)_k=f_k'(t_0)$; moreover sums and scalar multiples of differentiable curves are differentiable with $(f+g)'(t_0)=f'(t_0)+g'(t_0)$ and $(\mu f)'(t_0)=\mu f'(t_0)$ for $\mu\in\mathbb R$ ([[def-vector-valued-derivative-and-integral]]).

[L2] Sums, scalar multiples and products of real functions differentiable at $t_0$ are differentiable at $t_0$ with the sum, scalar-multiple and product rules ([[thm-algebra-of-derivatives]]); the limit-point hypothesis of that theorem is part of the meaning of differentiability at $t_0$ ([[def-derivative]], [[def-limit-point-r]]).

[L3] The Euclidean inner product and norm are $\langle u,w\rangle=\sum_{k<3}u_kw_k$ and $\lVert u\rVert_2=\sqrt{\langle u,u\rangle}$; the inner product is bilinear and symmetric ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

[L4] For all $u,v\in\mathbb R^3$ the cross product is bilinear-alternating: $(u,v)\mapsto u\times v$ is bilinear, $u\times u=0$, and $u\times v=-(v\times u)$; in coordinates $(u\times v)_0=u_1v_2-u_2v_1$, $(u\times v)_1=u_2v_0-u_0v_2$, $(u\times v)_2=u_0v_1-u_1v_0$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the components $x_k,y_k:I\to\mathbb R$ are differentiable at $t_0$ with $x_k'(t_0)=x'(t_0)_k$ and $y_k'(t_0)=y'(t_0)_k$, and by [L2] each of the functions $x_k+y_k$, $\lambda x_k$, $x_ky_k$ is differentiable at $t_0$ with the sum, scalar-multiple and product rules; this proves clause 1 componentwise, since $(x+y)_k=x_k+y_k$ and $(\lambda x)_k=\lambda x_k$. [given, L1, L2]


2.1 The scalar function $t\mapsto\langle x(t),y(t)\rangle=\sum_{k<3}x_k(t)y_k(t)$ is a finite sum of products of functions differentiable at $t_0$, hence by [L2] differentiable at $t_0$ with derivative $\sum_{k<3}\bigl(x_k'(t_0)y_k(t_0)+x_k(t_0)y_k'(t_0)\bigr)$; by [L3] this is $\langle x'(t_0),y(t_0)\rangle+\langle x(t_0),y'(t_0)\rangle$, which is clause 2. [step 1.1, L2, L3]


2.2 Each component of $t\mapsto x(t)\times y(t)$ is, by [L4], one of the differences $x_1y_2-x_2y_1$, $x_2y_0-x_0y_2$, $x_0y_1-x_1y_0$ of products of functions differentiable at $t_0$, so [L2] makes it differentiable at $t_0$ with derivative $(x_1'y_2+x_1y_2')-(x_2'y_1+x_2y_1')$, and by [L4] and bilinearity this is the corresponding component of $x'(t_0)\times y(t_0)+x(t_0)\times y'(t_0)$; reassembling the three components with [L1] gives clause 3. [step 1.1, L1, L2, L4]


3.1 Applying clause 2 at $y:=x$ gives differentiability of $t\mapsto\langle x(t),x(t)\rangle=\lVert x(t)\rVert_2^2$ with derivative $\langle x'(t_0),x(t_0)\rangle+\langle x(t_0),x'(t_0)\rangle=2\langle x'(t_0),x(t_0)\rangle$, the two terms being equal by symmetry of the inner product [L3]; this is clause 4. [step 2.1, L3, algebra] ∎
