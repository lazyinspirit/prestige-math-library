---
id: "ex-cap-product-on-the-oriented-circle"
kind: "example"
title: "Cap product on the oriented circle"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cap-product-with-cohomology-first","thm-cap-product-boundary-identity","prop-zero-th-singular-homology-is-free-on-path-components","cor-homology-of-spheres"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher cap-product construction p.239
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Let $\sigma:\Delta^1\to S^1$ be $\sigma(t_0,t_1)=(\cos(2\pi t_1),\sin(2\pi t_1))$, and put $z=\sigma$. If $\alpha\in H^1(S^1;\mathbb Z)$ evaluates to $1$ on $z$, then $\alpha\cap[z]$ is the positive generator of $H_0(S^1;\mathbb Z)$, with cohomology written first.

## Facts & Assumptions

[F1] [[def-cap-product-with-cohomology-first]] evaluates a degree-one cochain on a one-simplex and retains its last vertex.

[F2] [[thm-cap-product-boundary-identity]] makes this operation well-defined on a cocycle and a cycle modulo boundaries.

[F3] [[prop-zero-th-singular-homology-is-free-on-path-components]] identifies the class of a point with the basis vector of its path component. [[cor-homology-of-spheres]] also gives $H_0(S^1;\mathbb Z)\cong\mathbb Z$.

## Verification

**Given:** The specified loop $z$ and a class $\alpha$ satisfying the stated normalization. Let $a$ be any cocycle representing $\alpha$.

1.1 The two endpoints of $\sigma$ equal $x=(1,0)$, so $\partial z=x-x=0$. The normalization says $a(z)=1$. This does not depend on the representative: replacing $a$ by $a+\delta u$ changes the evaluation by $u(\partial z)=0$. [given, algebra]

2.1 The front face for degree one is all of $\sigma$, and its back face is its last vertex $x$. Hence $$a\cap z=a(\sigma)x=x.$$ By [F2] this identity passes to $\alpha\cap[z]=[x]$. [F1, F2, step 1.1]

3.1 Every point of $S^1$ can be joined to $x$ by an arc $t\mapsto(\cos(t\theta),\sin(t\theta))$, using any angle $\theta$ for that particular point. Thus there is one path component, and [F3] sends $[x]$ to $1$, not $-1$. This is the asserted positive generator. The coincident endpoints cause no cancellation of the retained vertex: only the boundary subtracts them. The input and coefficient ring are fixed and nonzero; neither an empty space nor a constant loop can satisfy this evaluation normalization. No simultaneous choice of angles or representatives is required, and no AC is used. [F3, step 2.1, given] ∎
