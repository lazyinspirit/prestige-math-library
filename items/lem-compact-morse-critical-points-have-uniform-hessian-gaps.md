---
id: lem-compact-morse-critical-points-have-uniform-hessian-gaps
kind: lemma
title: "On a compact manifold, a Morse function has finitely many critical points and a uniform Hessian gap on disjoint critical neighborhoods"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-morse-function-and-excellent-morse-function, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, lem-morse-functions-are-transverse-differentials, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $M$ be a compact smooth manifold and let $f:M\to\mathbb R$ be Morse. Then
$f$ has finitely many critical points $p_1,\dots,p_r$, and one can choose
pairwise disjoint coordinate neighbourhoods $U_i$ of $p_i$ and a constant
$\eta>0$ such that:

- in the chosen chart on $U_i$, every Hessian matrix $H_i(x)$ of $f$ on
  $\overline{U_i}$ satisfies
  $$\|H_i(x)v\|\ge 2\eta\|v\|$$
  for every coordinate vector $v$; and
- every smooth function $g$ that is sufficiently $C^2$-close to $f$ on
  $\overline{U_i}$ has exactly one critical point in $U_i$, and that critical
  point is nondegenerate.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$ and a Morse function $f:M\to\mathbb R$.

[F1] Every critical point of a Morse function is nondegenerate, and a smooth function is Morse exactly when all of its critical points are nondegenerate ([[def-morse-function-and-excellent-morse-function]], [[lem-morse-functions-are-transverse-differentials]]).

[L1] A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[L2] A $C^1$ map between Euclidean open sets with invertible derivative at a point is a local diffeomorphism near that point ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the critical set of $f$ is finite; write it as $\{p_1,\dots,p_r\}$. Choose pairwise disjoint coordinate charts $\varphi_i:U_i'\to B_i\subseteq\mathbb R^{n_i}$ with $\varphi_i(p_i)=0$, and then shrink to relatively compact subcharts $U_i\Subset U_i'$ that are still pairwise disjoint. [L1, given, choose]


2.1 If $r=0$, take $\eta:=1$; there are no neighbourhood conditions to check, so the conclusion is vacuous. If instead $\dim M=0$, then $M$ is discrete and each $U_i:=\{p_i\}$ is a coordinate neighbourhood. Again take $\eta:=1$. The displayed matrix inequality is vacuous on the zero vector space, every point is critical and nondegenerate, and every function on $U_i$ has exactly the one critical point $p_i$. Thus the conclusion holds in either boundary case. Henceforth assume $r\ge1$ and $\dim M\ge1$. [step 1.1, cases]

2.2 Write $F_i:=\nabla(f\circ\varphi_i^{-1})$ on $B_i$. Since $p_i$ is nondegenerate by [F1], the derivative $DF_i(0)$ is the Hessian matrix at $p_i$ and is invertible. By [L2], after shrinking $U_i$ again we may assume $F_i$ is a diffeomorphism from $\varphi_i(U_i)$ onto an open neighbourhood of $0$. [F1, L2, step 1.1]

3.1 Continuity of the Hessian matrices on the compact closures $\overline{U_i}$ lets us shrink the $U_i$ so that every Hessian matrix $H_i(x)$ of $f$ on $\overline{U_i}$ stays within half the least singular value of $DF_i(0)$. Hence there is $\eta_i>0$ such that $\|H_i(x)v\|\ge2\eta_i\|v\|$ for all $x\in\overline{U_i}$ and all coordinate vectors $v$. Let $\eta:=\min_i\eta_i>0$. [step 2.1, step 2.2, choose, algebra]

4.1 If $g$ is sufficiently $C^2$-close to $f$ on $\overline{U_i}$, then the gradient map $\nabla(g\circ\varphi_i^{-1})$ is $C^1$-close to $F_i$. Because $F_i$ is a local diffeomorphism carrying $0$ to $0$ and the Hessian gap from step 3.1 keeps the derivative uniformly invertible on $\overline{U_i}$, the inverse-function argument persists under sufficiently small $C^1$ perturbation: the perturbed gradient has a unique zero in $\varphi_i(U_i)$, and at that zero its derivative is still invertible. Thus $g$ has exactly one nondegenerate critical point in $U_i$. [L2, step 2.2, step 3.1]

5.1 Steps 1.1, 3.1, and 4.1 give the claimed finite critical set, disjoint critical neighbourhoods, uniform Hessian gap, and local persistence statement. [step 1.1, step 3.1, step 4.1] ∎
