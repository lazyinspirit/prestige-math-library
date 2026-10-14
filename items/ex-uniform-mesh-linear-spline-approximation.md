---
id: ex-uniform-mesh-linear-spline-approximation
kind: example
title: Uniform-mesh linear spline approximation
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [def-local-spline-quasi-interpolant, thm-sobolev-spline-quasi-interpolant-rate, thm-spline-polynomial-reproduction, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, Example 33 and Theorem 32
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Example

For each integer $J\ge1$, let $0=t_0<t_1<\cdots<t_J=1$ be the uniform partition with mesh $h=1/J$. For real-valued $f\in W^{2,\infty}(0,1;\mathbb R)$, its continuous representative has a piecewise-linear interpolant $I_hf$ in the degree-one spline space with simple interior knots.

## Facts & Assumptions

**Given:** AC, a uniform partition of $[0,1]$, and real-valued $f\in W^{2,\infty}(0,1;\mathbb R)$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]], as required by the supplied Sobolev representative theorem.

[F1] A B-spline space with simple interior knots consists of piecewise degree-one polynomials continuous across those knots, and its B-splines form a basis ([[thm-spline-polynomial-reproduction]]).

[F2] A local quasi-interpolant that reproduces affine functions and is bounded on each cell has $L^\infty$ error bounded by the local mesh-size square times the second weak-derivative norm ([[def-local-spline-quasi-interpolant]], [[thm-sobolev-spline-quasi-interpolant-rate]]).

[F3] Every $W^{1,\infty}(0,1)$ class has a unique absolutely continuous representative on $[0,1]$ whose increments are integrals of its weak derivative ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]). Since $f\in W^{2,\infty}(0,1)$, this applies to both $f$ and its first weak derivative $Df$.

[A2] The partition is uniform with mesh $h=1/J$, and $f\in W^{2,\infty}(0,1;\mathbb R)$.

## Verification

**Given:** The piecewise-linear interpolant $I_hf$ at the uniform knots.

1.1 Use the disjoint cells $I_j=[t_j,t_{j+1})$, $0\le j<J$, with the final cell also containing $1$, and put $J_j=I_j$. For any continuous input $g$ and $x\in[t_j,t_{j+1}]$, $I_hg(x)=\frac{t_{j+1}-x}{h}g(t_j)+\frac{x-t_j}{h}g(t_{j+1})$. The nonnegative weights sum to one. Continuity makes the endpoint values limits from within $I_j$ and gives $\|g\|_{L^\infty(I_j)}=\max_{[t_j,t_{j+1}]}|g|$, so $\|I_hg\|_{L^\infty(I_j)}\le\|g\|_{L^\infty(J_j)}$. Continuous inputs agreeing almost everywhere on $J_j$ agree on its closure and hence have the same interpolant on $I_j$. The map is real-linear, reproduces every affine function, and is a continuous piecewise-linear spline by [F1]. Each neighborhood is one cell and each point belongs to exactly one neighborhood. Thus, as $J$ varies, the maps $I_h$ form a mesh-uniform family as in [F2] with $p=l=1$, $q=\infty$, $M=1$, and $C_Q=1$. [A1, A2, F1, F2, F3, algebra]

2.1 Let $M_2=\|D^2f\|_{L^\infty(0,1)}$. On a cell $[u,v]$ of length $h$, put $a_x=x-u$ and $b_x=v-x$. By [F3] applied to $f$ and $Df$, let $f^*$ and $g^*$ be their absolutely continuous representatives; $(g^*)'=D^2f$ almost everywhere and $f^*(x)-f^*(u)=\int_u^xg^*(s)\,ds$. The absolutely continuous function $t\mapsto(x-t)g^*(t)$ has derivative $-g^*(t)+(x-t)D^2f(t)$ almost everywhere, so the fundamental theorem for absolutely continuous functions gives $f^*(x)=f^*(u)+a_xg^*(u)+\int_u^x(x-t)D^2f(t)\,dt$, and the same formula at $v$. Since $I_hf(x)=f^*(u)+(a_x/h)(f^*(v)-f^*(u))$, subtraction and simplification yield $f^*(x)-I_hf(x)=-\int_u^x\frac{b_x(t-u)}hD^2f(t)\,dt-\int_x^v\frac{a_x(v-t)}hD^2f(t)\,dt$. Hence $|f^*(x)-I_hf(x)|\le M_2\{b_xa_x^2/(2h)+a_xb_x^2/(2h)\}=M_2a_xb_x/2\le M_2h^2/8$, since $a_x+b_x=h$ and $a_xb_x\le h^2/4$. This holds on every cell and at every point, so taking the supremum gives $\|f-I_hf\|_{L^\infty(0,1)}\le h^2\|D^2f\|_{L^\infty(0,1)}/8$. [A2, F3, step 1.1, algebra] ∎
