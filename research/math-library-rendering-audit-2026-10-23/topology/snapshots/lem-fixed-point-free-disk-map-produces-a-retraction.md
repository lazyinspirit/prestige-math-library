---
id: lem-fixed-point-free-disk-map-produces-a-retraction
kind: lemma
title: "A fixed-point-free self-map of the disk produces a continuous retraction onto the unit circle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-spheres-and-closed-balls, def-euclidean-inner-product, thm-componentwise-limits-and-continuity, lem-algebra-of-continuous-real-maps-on-a-space, thm-continuous-inverse, thm-of-square-roots, def-retraction-and-deformation-retract]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.9"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §6"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $D^2=\overline B_2(0,1)$ and $S^1=S_2(0,1)$. Every continuous fixed-point-free map $f:D^2\to D^2$ determines a continuous retraction $D^2\to S^1$.

## Facts & Assumptions

**Given:** A continuous map $f:D^2\to D^2$ such that $f(x)\ne x$ for every $x\in D^2$.

[F1] The closed unit disk and unit circle are $D^2=\{x:\lVert x\rVert_2\le1\}$ and $S^1=\{x:\lVert x\rVert_2=1\}$ ([[def-euclidean-spheres-and-closed-balls]]).

[L1] The Euclidean inner product is bilinear and positive definite, with $\lVert u\rVert_2^2=\langle u,u\rangle$ ([[def-euclidean-inner-product]]).

[L2] A map into $\mathbb R^2$ is continuous exactly when its coordinate functions are continuous; finite sums, scalar multiples, inner products, and norms of continuous vector-valued functions are continuous ([[thm-componentwise-limits-and-continuity]]).

[L3] Finite sums and products of continuous real-valued maps are continuous, and a quotient is continuous wherever its denominator is nonzero ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L4] Every nonnegative real has a unique nonnegative square root, and the square-root function is continuous on $[0,\infty)$ as the inverse of the continuous strictly increasing square map there ([[thm-of-square-roots]], [[thm-continuous-inverse]]).

[F2] A continuous map $r:D^2\to S^1$ is a retraction when $r(x)=x$ for every $x\in S^1$ ([[def-retraction-and-deformation-retract]]).

## Proof

**Proof technique:** constructive.

1.1 For $x\in D^2$, put $a=f(x)$, $v=x-a$, $A=\langle v,v\rangle$, $B=\langle a,v\rangle$, and $C=\langle a,a\rangle$. Fixed-point-freeness gives $v\ne0$ and $A>0$. Define $$\lambda(x)=\frac{-B+\sqrt{B^2+A(1-C)}}{A},\qquad r(x)=a+\lambda(x)v.$$ [given, F1, L1, L4, construct]

2.1 The equation $\lVert a+tv\rVert_2^2=1$ is $At^2+2Bt+C-1=0$, whose discriminant is $4(B^2+A(1-C))\ge0$ because $C=\lVert f(x)\rVert_2^2\le1$; thus $\lambda(x)$ is its larger root. Since the upward-opening quadratic is nonpositive at both $t=0$ and $t=1$, its larger root satisfies $\lambda(x)\ge1$ and is the unique intersection parameter of the ray $a+tv$ with $S^1$ for $t\ge1$. [step 1.1, F1, L1, algebra]

3.1 The maps $a,v,A,B,C$ are continuous; the radicand is nonnegative, its square root is continuous, and the denominator $A$ never vanishes. Hence $\lambda$ is continuous, and componentwise continuity makes $r(x)=a+\lambda(x)v$ continuous. [step 1.1, step 2.1, L2, L3, L4]

4.1 Step 2.1 gives $\lVert r(x)\rVert_2=1$, so $r$ maps $D^2$ into $S^1$. If $x\in S^1$, then $t=1$ is a root and is the larger root because $1\ge0$ lies in the interval on which the quadratic is nonpositive; hence $\lambda(x)=1$ and $r(x)=a+v=x$. Therefore $r$ is a continuous retraction of $D^2$ onto $S^1$. [step 2.1, step 3.1, F1, F2, discharge-construct] ∎
