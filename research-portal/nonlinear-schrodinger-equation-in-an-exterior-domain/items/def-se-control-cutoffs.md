---
id: def-se-control-cutoffs
kind: definition
domain: mathematics
title: Control region and nested real cutoffs
status: draft
deps:
  - def-se-geometry
  - math:def-the-standard-smooth-step-function
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:def-jacobian-matrix-and-gradient
dependency_roles:
  def-se-geometry: mathematical-premise
  math:def-the-standard-smooth-step-function: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  math:def-jacobian-matrix-and-gradient: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 2
---

## Definition

Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact set with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Choose $R>0$ such that $\Theta\subset B_R(0)$, where $B_r(0)=\{x:|x|<r\}$. A smooth function is one with continuous derivatives of every order; its support is the closure of the set on which it is nonzero.

Choose a real-valued $\varphi\in C^\infty(\mathbb R^n;[0,1])$ such that $\varphi(x)=0$ for $|x|\le R$, $\varphi(x)>0$ for $|x|>R$, and $\varphi(x)=1$ for $|x|\ge R+1$. Define $\chi=1-\varphi$ and the control region $\omega=\{x\in\Omega:|x|>R\}=\{x\in\Omega:\varphi(x)>0\}$. Thus $\chi$ is smooth and compactly supported, with $\operatorname{supp}\chi\subseteq\overline{B_{R+1}(0)}$.

Choose $\psi\in C_c^\infty(\mathbb R^n;[0,1])$, meaning a smooth real-valued function with compact support, equal to one on $B_{R+2}(0)$ and supported in $B_{R+3}(0)$. Then $0\le\chi\le\psi$ and $\psi=1$ on a neighborhood of $\operatorname{supp}\nabla\varphi$. Set $\Omega'=\Omega\cap B_{R+3}(0)$; it is a bounded open set with smooth boundary $\partial\Theta\cup\partial B_{R+3}(0)$.

## Definition references

[[def-se-geometry]]

[[math:def-the-standard-smooth-step-function]]

[[math:lem-test-function-cutoffs-and-euclidean-localization]]

[[math:def-jacobian-matrix-and-gradient]]

## Justification

The exterior geometry, boundary convention and existence of an enclosing ball are as in [[def-se-geometry]]. For the first cutoff, let $\sigma$ be the standard smooth step of [[math:def-the-standard-smooth-step-function]] and put $\varphi(x)=\sigma(|x|-R)$. The step is smooth, takes values in $[0,1]$, vanishes on $(-\infty,0]$, is positive on $(0,\infty)$ and equals one on $[1,\infty)$. The composition is smooth away from the origin and is identically zero near the origin because $R>0$; hence it is smooth everywhere and has the required values.

Apply [[math:lem-test-function-cutoffs-and-euclidean-localization]] to the compact set $\overline{B_{R+2}(0)}$ inside the open ball $B_{R+3}(0)$. It gives a smooth $[0,1]$-valued function supported in that open ball and equal to one on a neighborhood of the compact set; take this function as $\psi$.

On $B_{R+1}(0)$, $\psi=1$ and $0\le\chi\le1$; outside that ball, $\chi=0\le\psi$. Thus $0\le\chi\le\psi$ everywhere.

The gradient is the vector of coordinate partial derivatives, as in [[math:def-jacobian-matrix-and-gradient]]. Since $\varphi$ is constant on each of the open sets $|x|<R$ and $|x|>R+1$, all these partial derivatives vanish there. Thus $\operatorname{supp}\nabla\varphi$ lies in the closed annulus $R\le|x|\le R+1$, which is contained in $B_{R+2}(0)$. Therefore $\psi=1$ on an open neighborhood of that support.

Finally, applying the boundary identity in [[def-se-geometry]] with enclosing radius $R+3$ gives $\partial\Omega'=\partial\Theta\cup\partial B_{R+3}(0)$. The two pieces are disjoint and smooth, so their union is a smooth boundary; boundedness and openness follow from the same exterior construction.

## Source notes

The article supplies the control-region and cutoff notation in (3.1)–(3.3). Its reference here is attribution; the existence of the functions is justified by the independent suppliers above.
