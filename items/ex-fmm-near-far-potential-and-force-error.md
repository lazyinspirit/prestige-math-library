---
id: ex-fmm-near-far-potential-and-force-error
kind: example
title: Near/far split with exact near evaluation and truncated far error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-finite-planar-quadtree-fmm-pair-lists, alg-planar-laplace-fmm-fixed-order, thm-planar-fmm-global-potential-force-error]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leslie Greengard and Vladimir Rokhlin, A Fast Algorithm for Particle Simulations, Journal of Computational Physics 73 (1987), 325–348"
      url: "https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Example

Use root $H=[0,4]^2$; its two nonempty children are $P=[0,2]\times[0,2]$ and $Q=[2,4]\times[0,2]$. Name the lower children of $P$ by $C_0=[0,1]\times[0,1]$ and $C=[1,2]\times[0,1]$. Name the lower-left, lower-right, and upper-left children of $Q$ by $D_0=[2,3]\times[0,1]$, $D=[3,4]\times[0,1]$, and $D_1=[2,3]\times[1,2]$; its upper-right child and the two upper root children are empty. Let leaf threshold $s=2$ and split each cell with more than two labels. Put unit charges at $c\pm\tfrac14$ in $C$, where $c=\tfrac32+\tfrac12i$, a charge $3$ at $d-0.1$ in $D$, where $d=\tfrac72+\tfrac12i$, and a zero-charge target label at $d$. Put zero-charge labels at $\tfrac12+\tfrac12i$ in $C_0$, $\tfrac52+\tfrac12i$ in $D_0$, and $\tfrac52+\tfrac32i$ in $D_1$. Then $P$ has three labels and $Q$ has four, so both split and their named grandchildren are leaves. For the target $d$, the recursion records $(C,D)$ as far and the charge-$3$ pair in $D$ as direct near. Use the analytic logarithm on the far difference disk that is real at $2$; the near difference $0.1$ uses its real logarithm. Take order $p=1$.

## Facts & Assumptions

**Given:** The seven labels, charges, and positions above, the recursive cell-pair rule, and the order-one algorithm.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: the recursive rule separates the far pair from direct near particle pairs in the leaves.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: exact direct near values are added to the far local polynomial and its derivative.

[F3] [[thm-planar-fmm-global-potential-force-error]]: the far interaction at ratio $\rho<1$ has potential and derivative bounds $Q\rho^2/[2(1-\rho)]$ and $(Q/R)\rho/(1-\rho)$ for $p=1$.

## Verification

1.1 The root has seven labels, and its nonempty children $P,Q$ have three and four labels, respectively; threshold $s=2$ therefore splits all three, while the named grandchildren are leaves. The centers of $P,Q$ are $1+i,3+i$, their radii are $\sqrt2$, and their center distance is $2<2\sqrt2$, so $(P,Q)$ is not separated. The tie rule splits source $P$, exposing $C$ with center $c=3/2+i/2$ and radius $\sqrt2/2$. The pair $(C,Q)$ is not separated since its center distance is $\sqrt{5/2}<3\sqrt2/2$, so the larger target cell $Q$ is split. The child $D$ has center $d=7/2+i/2$ and radius $\sqrt2/2$, and $|d-c|=2>\sqrt2$; hence $(C,D)$ is far. The distinct charge-$3$ source and zero-charge target at $d$ lie in the same leaf $D$, so their ordered pair is direct near. [given, F1, algebra]

1.2 The far source moments are $M_0=2$ and $M_1=0$, so M2L for $(C,D)$ gives $L_0=2\log2$ and $L_1=1$; at $d$ the far approximation is $(2\log2,1)$. The direct near contribution of the charge-$3$ source is exactly $(3\log(0.1),30)$, because $d-(d-0.1)=0.1$; direct contributions from zero-charge labels vanish. [given, F2, algebra]

2.1 The exact far terms are $\log(9/4)+\log(7/4)=2\log2+\log(63/64)$ and $4/9+4/7=64/63$. Adding the exact direct near values gives total $(2\log2+\log(63/64)+3\log(0.1),\ 64/63+30)$. The algorithm returns $(2\log2+3\log(0.1),\ 1+30)$, so the errors are $\log(64/63)<1/63$ and $1/63$; the strict logarithmic bound follows from $\log(1+x)=\int_0^x(1+t)^{-1}\,dt<x$ for $x>0$. [given, step 1.2, algebra]

3.1 For the only far interaction with nonzero source charge, $Q_C=2$, $R=2$, and $\rho=\sqrt2/2\in(1/2,1)$, so [F3] gives bounds $\rho^2/(1-\rho)>1/4$ and $\rho/(1-\rho)>1/2$. All other far source cells have zero charge, and every near pair was evaluated exactly, so the errors from step 2.1 satisfy the theorem's global sums. [given, F3, step 2.1, algebra] ∎
