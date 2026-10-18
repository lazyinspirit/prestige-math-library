---
id: ex-fmm-two-separated-charge-clusters
kind: example
title: Two separated planar charge clusters
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

Use the dyadic root square $H=[0,4]^2$. Put $P=[0,2]\times[0,2]$ and $Q=[2,4]\times[0,2]$; the other two root children are empty. Within $P$ name its lower-left and lower-right children $C_0=[0,1]\times[0,1]$ and $C=[1,2]\times[0,1]$. Within $Q$ name its lower-left, lower-right, and upper-left children $D_0=[2,3]\times[0,1]$, $D=[3,4]\times[0,1]$, and $D_1=[2,3]\times[1,2]$; its upper-right child is empty. Let the leaf threshold be $s=2$ and split each cell with more than two labels. Put unit charges at $c\pm\tfrac14$ in $C$, where $c=\tfrac32+\tfrac12i$. Put zero-charge labels at $\tfrac12+\tfrac12i$ in $C_0$, $d=\tfrac72+\tfrac12i$ in $D$, $\tfrac52+\tfrac12i$ in $D_0$, and $\tfrac52+\tfrac32i$ in $D_1$. Thus $P$ and $Q$ have three labels each and split; their named children are leaves. In the recursive ordered cell pair $(P,Q)$, splitting the source exposes $(C,Q)$, and then splitting $Q$ exposes the separated pair $(C,D)$. The far difference disk has center $2$ and radius $\sqrt2$, so use its analytic logarithm real at $2$. Take order $p=1$.

## Facts & Assumptions

**Given:** The six labels and their charges/positions above, the recursive cell-pair list rule, and the order-one planar FMM.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: a non-admissible pair is split by the specified cell rule, a separated pair is recorded as far, and direct near pairs are recorded at leaves.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: P2M moments are $M_n(C)=\sum_{j\in I_C}q_j(z_j-c_C)^n$, M2L uses the displayed local coefficients, and near values/derivatives are added exactly.

[F3] [[thm-planar-fmm-global-potential-force-error]]: one far pair with ratio $\rho<1$ has potential and derivative bounds $Q\rho^2/[2(1-\rho)]$ and $(Q/R)\rho/(1-\rho)$ at order $p=1$.

## Verification

1.1 The root has six labels, and its nonempty children $P,Q$ each have three, so threshold $s=2$ makes $H,P,Q$ internal while all named grandchildren are leaves. The centers of $P,Q$ are $1+i,3+i$, their radii are $\sqrt2$, and their center distance is $2<2\sqrt2$, so $(P,Q)$ is not separated. Its equal side lengths make the rule split the source $P$; child $C$ has center $c=3/2+i/2$ and radius $\sqrt2/2$. The pair $(C,Q)$ is not separated because its center distance is $\sqrt{5/2}<3\sqrt2/2$. Splitting the larger cell $Q$ exposes $D$ centered at $d=7/2+i/2$; now $|d-c|=2>\sqrt2/2+\sqrt2/2$. Thus the list recursion records $(C,D)$ as a far pair, and the zero-charge label at $d$ is the target at the target-cell center. [given, F1, algebra]

1.2 The two unit source offsets give $M_0=2$ and $M_1=0$. With $d-c=2$, [F2] gives the $(C,D)$ local coefficients $L_0=2\log2$ and $L_1=1$. At the target center this interaction returns potential $2\log2$ and derivative $1$. Other source labels have zero charge, so they add no contribution to this target. [given, F2, algebra]

2.1 The two nonzero source-target differences are $9/4$ and $7/4$, so the exact potential is $\log(9/4)+\log(7/4)=2\log2+\log(63/64)$ and the exact derivative is $4/9+4/7=64/63$. Comparing with step 1.2, the absolute errors are $\log(64/63)<1/63$ and $|64/63-1|=1/63$; the logarithmic inequality follows from $\log(1+x)=\int_0^x(1+t)^{-1}\,dt<x$ for $x>0$. Zero-charge labels add no contribution. [given, step 1.2, algebra]

3.1 For the only far interaction with nonzero source charge, $Q_C=2$, $R=2$, and $\rho=\sqrt2/2\in(1/2,1)$. The [F3] bounds are $\rho^2/(1-\rho)>1/4$ and $\rho/(1-\rho)>1/2$; all other far source cells have $Q_C=0$. Any direct near pairs from the zero-charge labels contribute exactly zero, so the errors in step 2.1 satisfy the theorem's global sums. [given, F3, step 2.1, algebra] ∎
