---
id: lem-no-new-critical-points-under-a-compact-c1-small-perturbation
kind: lemma
title: "Away from fixed critical neighborhoods, sufficiently small $C^1$ perturbations create no new critical points on a compact manifold"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-critical-point-and-critical-value-of-a-smooth-function, lem-compact-morse-critical-points-have-uniform-hessian-gaps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $M$ be a compact smooth manifold, let $f:M\to\mathbb R$ be Morse, and let
$U_1,\dots,U_r$ be pairwise disjoint critical neighbourhoods as in
[[lem-compact-morse-critical-points-have-uniform-hessian-gaps]]. Then there is
$\delta>0$ such that every smooth function $g$ with $\|dg-df\|_{C^0}<\delta$ on
$M\setminus\bigcup_iU_i$ has no critical points in
$M\setminus\bigcup_iU_i$.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$, a Morse function $f:M\to\mathbb R$, and pairwise disjoint critical neighbourhoods $U_1,\dots,U_r$ for the critical points of $f$.

[F1] A critical point of a smooth function is precisely a zero of its differential ([[def-critical-point-and-critical-value-of-a-smooth-function]]).

[L1] The neighbourhoods $U_i$ isolate all critical points of $f$ ([[lem-compact-morse-critical-points-have-uniform-hessian-gaps]]).

[A1] On a compact set, the norm of a continuous cotangent vector field attains its minimum.

## Proof

**Proof technique:** direct.

1.1 By [L1], the compact set $K:=M\setminus\bigcup_iU_i$ contains no critical point of $f$. Hence [F1] gives $df_x\neq0$ for every $x\in K$. [F1, L1, given]

2.1 By [A1], the continuous function $x\mapsto \|df_x\|$ attains a positive minimum $m$ on $K$. Put $\delta:=m/2$. [A1, step 1.1, choose]

3.1 If $g$ satisfies $\|dg-df\|_{C^0}<\delta$ on $K$, then for every $x\in K$ one has $\|dg_x\|\ge \|df_x\|-\|dg_x-df_x\|>m-\delta=\delta>0$. Therefore $dg_x\neq0$ on $K$, so [F1] shows that $g$ has no critical point in $K$. [F1, step 2.1, algebra]

4.1 Since $K=M\setminus\bigcup_iU_i$, this says that sufficiently small $C^1$ perturbations create no new critical points outside the chosen critical neighbourhoods. [step 3.1] ∎
