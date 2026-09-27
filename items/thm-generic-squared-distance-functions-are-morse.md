---
id: thm-generic-squared-distance-functions-are-morse
kind: theorem
title: "For a compact manifold embedded in Euclidean space, the squared-distance function from a generic center is Morse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, thm-morse-sard-for-euclidean-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (thm-generic-squared-distance-functions-are-morse). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $M\subseteq\mathbb R^N$ be a compact embedded smooth manifold. Then there
is a null subset $E\subseteq\mathbb R^N$ such that for every
$p\in\mathbb R^N\setminus E$, the squared-distance function
$$d_p:M\to\mathbb R,\qquad d_p(x)=\|x-p\|^2$$
is Morse.

## Facts & Assumptions

**Given:** A compact embedded smooth manifold $M\subseteq\mathbb R^N$.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] The critical values of a smooth Euclidean map $U\subseteq\mathbb R^N\to\mathbb R^N$ form a null set ([[thm-morse-sard-for-euclidean-maps]]).

[A1] In local coordinates $x(u)$ on $M$, the critical-point equations for $d_p$ are $(p-x(u))\cdot\partial_i x(u)=0$. A smooth orthonormal frame of the Euclidean normal spaces exists locally by finite-dimensional Gram–Schmidt after shrinking a chart.

## Proof

**Proof technique:** direct.

1.1 If $\dim M=0$, compactness makes $M$ finite and every function on it is Morse. Assume $m=\dim M>0$, so $N\ge1$. Compactness supplies finitely many coordinate patches $x_j:U_j\to M$ on which there are smooth orthonormal normal frames $e_{j,a}(u)$, $1\le a\le N-m$. Each critical pair $(x_j(u),p)$ satisfies the equations in [A1], hence has a unique representation $p=\Psi_j(u,t):=x_j(u)+\sum_{a=1}^{N-m}t_a e_{j,a}(u)$. Thus the critical-pair manifold over this patch is parametrized by the open Euclidean set $U_j\times\mathbb R^{N-m}$, and the projection to centers is the smooth map $\Psi_j$ to $\mathbb R^N$. [A1, given]

2.1 Put $H_i(u,p)=(p-x_j(u))\cdot\partial_i x_j(u)$. At a critical pair, the derivative of $H=(H_i)$ in the $p$ direction has rank $m$, because the tangent vectors $\partial_i x_j$ are independent. Hence a tangent vector to the critical-pair manifold lies in the kernel of the center projection precisely when $D_uH(u,p)$ has a nonzero kernel. But the coordinate gradient of $d_p$ is $-2H$, so its Hessian at that critical point is $-2D_uH(u,p)$. Therefore $p$ is a bad center exactly when it is a critical value of at least one of the finitely many maps $\Psi_j$. [A1, F1, step 1.1, algebra]

3.1 By [L1], each $\operatorname{CritVal}(\Psi_j)$ is null in $\mathbb R^N$. Their finite union is null and contains every bad center by step 2.1. Outside it every critical point of $d_p$ has nondegenerate Hessian, so $d_p$ is Morse. This finite-chart argument does not invoke the countable-choice-qualified manifold parametric theorem. [L1, F1, step 2.1] ∎
