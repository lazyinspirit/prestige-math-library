---
id: thm-nrqm-oscillator-hermite-orthogonality
aliases: [nrqm-oscillator-hermite-orthogonality]
kind: theorem
domain: mathematics
title: "Hermite orthogonality"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-oscillator-hermite-recurrence, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (orthonormal eigenfunctions of the oscillator)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 pp. 1-9 (ladder norms and eigenstates)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $L^2=L^2(\mathbb R,dy)$ be the complex Lebesgue space with inner product linear in the first argument, and let $g_0,P,a,a^\dagger,g_n$ and $H_n$ be as in [[thm-nrqm-oscillator-hermite-recurrence]]. Then, for all $m,n\in\mathbb N$:

(a) $\langle g_n,g_m\rangle=\delta_{nm}$; in particular $(g_n)_{n\in\mathbb N}$ is an orthonormal family in $L^2$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]);

(b) the eigenvalue equation $(-\partial_y^2+Y^2)g_n=(2n+1)g_n$ holds as an identity of $L^2$ classes; more precisely $Y^2-\partial_y^2=2a^\dagger a+I$ as operators on $P$, so that on $P$

$$-\varphi''+y^2\varphi=2a^\dagger a\varphi+\varphi\qquad(\varphi\in P);$$

(c) $\langle ag_n,ag_m\rangle=n\,\delta_{nm}$ and $\langle a^\dagger g_n,a^\dagger g_m\rangle=(n+1)\delta_{nm}$ for all $n,m\in\mathbb N$.

No completeness of the family $(g_n)$ is asserted here.

## Facts & Assumptions

**Given:** the family $(g_n)$ of [[thm-nrqm-oscillator-hermite-recurrence]] with $g_0(y)=\pi^{-1/4}e^{-y^2/2}$, the ladder operators $a,a^\dagger$ on $P$, and the identities

[F1] $\|g_0\|=1$; $g_n=(a^\dagger)^ng_0/\sqrt{n!}$; $ag_n=\sqrt n\,g_{n-1}$ for $n\ge1$ with $ag_0=0$; $a^\dagger g_n=\sqrt{n+1}\,g_{n+1}$; $a^\dagger ag_n=ng_n$; $aa^\dagger g_n=(n+1)g_n$; $a^\dagger a-aa^\dagger=-I$ on $P$ ([[thm-nrqm-oscillator-hermite-recurrence]](a),(d),(e)).

[F2] $\langle a^\dagger\varphi,\psi\rangle=\langle\varphi,a\psi\rangle$ for all $\varphi,\psi\in P$ ([[thm-nrqm-oscillator-hermite-recurrence]](c)).

[F3] $\langle\cdot,\cdot\rangle$ is linear in the first argument and conjugate-linear in the second, and $\|v\|^2=\langle v,v\rangle\ge0$ with equality only for $v=0$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] $Y^2-\partial_y^2=2a^\dagger a+I$ on $P$, where $Y$ is multiplication by $y$ and $\partial_y$ is the derivative on smooth representatives; this is the computation $(Y-\partial_y)(Y+\partial_y)=Y^2-\partial_y^2+[\partial_y,Y]=Y^2-\partial_y^2-I$ combined with $a^\dagger a=\tfrac12(Y-\partial_y)(Y+\partial_y)$ ([[thm-nrqm-oscillator-hermite-recurrence]](b),(d)).

## Proof

1.1 [Orthogonality] Let $m,n\in\mathbb N$ with $n\ge1$. By [F2] with $\varphi=ag_n$ and $\psi=g_m$, $\langle a^\dagger ag_n,g_m\rangle=\langle ag_n,ag_m\rangle$; by [F2] with $\varphi=g_n$ and $\psi=ag_m$, $\langle g_n,a^\dagger ag_m\rangle=\langle ag_n,ag_m\rangle$ as well. Using $a^\dagger ag_k=kg_k$ from [F1] on both sides, $n\langle g_n,g_m\rangle=m\langle g_n,g_m\rangle$. If $n=m$ this gives no information; if $n\ne m$ and $n,m\ge1$ it gives $\langle g_n,g_m\rangle=0$. If $m=0$ use $ag_0=0$: then $\langle ag_n,ag_0\rangle=0$, and the first identity reads $n\langle g_n,g_0\rangle=0$, so $\langle g_n,g_0\rangle=0$ for $n\ge1$. [given, F1, F2, algebra]

1.2 [Eigenvalue equation] By [F4], $Y^2-\partial_y^2=2a^\dagger a+I$ on $P$. Evaluating at $g_n$ and using [F1] gives $(-\partial_y^2+Y^2)g_n=2ng_n+g_n=(2n+1)g_n$ as classes in $L^2$; the left side is computed on the smooth representative $g_n$, and the equality of classes holds because the two sides are continuous functions agreeing in $L^2$. The displayed form for $\varphi\in P$ with $Y^2\varphi=y^2\varphi$ is the same identity. [given, F1, F4, algebra]

2.1 [Unit norms] $\|g_0\|=1$ by [F1]. For $n\ge0$, applying [F2] with $\varphi=g_n$, $\psi=a^\dagger g_n$ gives $\|a^\dagger g_n\|^2=\langle a^\dagger g_n,a^\dagger g_n\rangle=\langle g_n,aa^\dagger g_n\rangle=(n+1)\|g_n\|^2$ by $aa^\dagger g_n=(n+1)g_n$ from [F1]. Since $g_{n+1}=a^\dagger g_n/\sqrt{n+1}$ by [F1], $\|g_{n+1}\|^2=\|a^\dagger g_n\|^2/(n+1)=\|g_n\|^2$. Induction gives $\|g_n\|=1$ for every $n$. Together with step 1.1, $\langle g_n,g_m\rangle=\delta_{nm}$. [step 1.1, F1, F2, F3, algebra]

3.1 [Ladder pairings] For $n\ne m$, $\langle ag_n,ag_m\rangle=\sqrt{nm}\langle g_{n-1},g_{m-1}\rangle=0$ by step 2.1 when $n,m\ge1$, and $\langle ag_0,\cdot\rangle=0$; for $n=m$ it equals $n\|g_{n-1}\|^2=n$. Likewise $\langle a^\dagger g_n,a^\dagger g_m\rangle=\sqrt{(n+1)(m+1)}\langle g_{n+1},g_{m+1}\rangle=(n+1)\delta_{nm}$. [step 2.1, F1, algebra] ∎
