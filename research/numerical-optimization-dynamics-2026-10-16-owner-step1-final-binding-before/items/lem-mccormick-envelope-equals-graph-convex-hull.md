---
id: lem-mccormick-envelope-equals-graph-convex-hull
kind: lemma
title: The four McCormick inequalities give the convex hull of a bilinear graph over a box
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 1
proof_strategy: direct
deps: [def-convex-subset-of-euclidean-space, def-mccormick-bilinear-box-envelope]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §16"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

For every finite box $[l_x,u_x]\times[l_y,u_y]$, the McCormick polytope from [[def-mccormick-bilinear-box-envelope]] is exactly the convex hull in $\mathbb R^3$ of the graph $\{(x,y,xy):x\in[l_x,u_x],y\in[l_y,u_y]\}$.

## Facts & Assumptions

**Given:** Ordered finite real endpoints $l_x\le u_x$ and $l_y\le u_y$, and the four inequalities defining the McCormick polytope.

[F1] The four defining inequalities and box bounds are those in [[def-mccormick-bilinear-box-envelope]].

[F2] A set is convex when it contains every line segment between two of its points. [[def-convex-subset-of-euclidean-space]]

[L1] In this item, $\operatorname{conv}(S)$ denotes all finite convex combinations $\sum_{j=1}^r\alpha_j s_j$ with $s_j\in S$, $\alpha_j\ge0$, and $\sum_j\alpha_j=1$.

## Proof

1.1 On the graph $w=xy$, subtracting the first lower plane from $xy$ gives $(x-l_x)(y-l_y)\ge0$, and subtracting the second lower plane gives $(u_x-x)(u_y-y)\ge0$. Subtracting $xy$ from the first upper plane gives $(u_x-x)(y-l_y)\ge0$, and subtracting it from the second upper plane gives $(x-l_x)(u_y-y)\ge0$. Thus every graph point satisfies all four inequalities. [given, F1, algebra]

1.2 If both widths are positive, put $s=u_x-l_x>0$, $t=u_y-l_y>0$, $X=(x-l_x)/s$, $Y=(y-l_y)/t$, and $W=(w-l_xy-l_yx+l_xl_y)/(st)$. The inequalities become $0\le X,Y\le1$, $W\ge0$, $W\ge X+Y-1$, $W\le X$, and $W\le Y$. [F1, algebra]

2.1 Every defining bound and McCormick inequality is affine in $(x,y,w)$. If two points satisfy one such affine inequality, their line segment also satisfies it by linearity, so the polytope is convex by [F2]. By step 1.1 every graph point lies in this polytope, and therefore each finite convex combination of graph points lies there by repeated segment closure [L1]. [F1, F2, L1, step 1.1, algebra, induction]

2.2 If $u_x=l_x$, the first lower and first upper inequalities force $w=l_xy$; all graph points satisfy the other inequalities by step 1.1. For any $y,y'\in[l_y,u_y]$ and $\theta\in[0,1]$, the segment between $(l_x,y,l_xy)$ and $(l_x,y',l_xy')$ is $(l_x,\theta y+(1-\theta)y',l_x(\theta y+(1-\theta)y'))$, again on the graph. If $u_y=l_y$, the first lower and second upper inequalities force $w=x l_y$, and the same calculation with $x,x'\in[l_x,u_x]$ proves convexity. Thus either degenerate case gives the product graph itself. [F1, F2, step 1.1, algebra]

2.3 In the nondegenerate case of step 1.2, set $\lambda_{11}=W$, $\lambda_{10}=X-W$, $\lambda_{01}=Y-W$, and $\lambda_{00}=1-X-Y+W$. Step 1.2 makes each coefficient nonnegative; their sum is $1$, and $(X,Y,W)=\lambda_{00}(0,0,0)+\lambda_{10}(1,0,0)+\lambda_{01}(0,1,0)+\lambda_{11}(1,1,1)$. Each vertex lies on $W=XY$, so every normalized polytope point is a convex combination of graph points. [step 1.2, algebra, construct]

3.1 If either width is zero, step 2.2 gives equality directly. If both are positive, the affine map in step 1.2 is invertible, and steps 2.1 and 2.3 prove both inclusions after normalization. These cases exhaust the ordered endpoint choices, proving equality of the original polytope and graph convex hull. [step 1.2, step 2.1, step 2.2, step 2.3, algebra] ∎

