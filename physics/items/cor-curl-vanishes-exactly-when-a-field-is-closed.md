---
id: cor-curl-vanishes-exactly-when-a-field-is-closed
kind: corollary
title: "A $C^1$ field on an open subset of $\\mathbb R^3$ is closed exactly when its curl vanishes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-closed-and-exact-c1-vector-fields, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and let $F:U\to\mathbb R^3$ be $C^1$. Then a $C^1$ field on an open subset of $\mathbb R^3$ is closed if and only if its curl vanishes identically: $F$ is closed in the sense of [[def-closed-and-exact-c1-vector-fields]] exactly when $\operatorname{curl}F(p)=0$ for every $p\in U$.

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$ and the $C^1$ field $F:U\to\mathbb R^3$ of the Statement, with the three coordinates named $x,y,z$ as on this page.

[F1] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] A $C^1$ field $F=(F_0,\ldots,F_{n-1})$ on an open $U\subseteq\mathbb R^n$, with coordinates and partial derivatives indexed from $0$, is **closed** when $\partial_jF_i=\partial_iF_j$ for all $i,j<n$ ([[def-closed-and-exact-c1-vector-fields]]).

[F3] For $x\in\mathbb R^n$ one writes $x_k:=x(k)$ for $k<n$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] the coordinates of a point of $\mathbb R^3$ are indexed $0,1,2$, and the names $x,y,z$ used on this page are those three indices in that order; so the closedness condition of [F2] at $n=3$ is the system of equations $\partial_jF_i=\partial_iF_j$ ranging over all pairs $i,j$ drawn from $\{x,y,z\}$. [given, F2, F3]

1.2 In that system the equations with $i=j$ read $\partial_iF_i=\partial_iF_i$ and hold for every field, and the equation indexed $(i,j)$ is the same equation as the one indexed $(j,i)$. Hence the system is equivalent to its three equations indexed by the unordered pairs $\{y,z\}$, $\{z,x\}$ and $\{x,y\}$. [F2, algebra]

2.1 Written out, those three equations are $\partial_yF_z=\partial_zF_y$, $\partial_zF_x=\partial_xF_z$ and $\partial_xF_y=\partial_yF_x$. Their left-minus-right differences $\partial_yF_z-\partial_zF_y$, $\partial_zF_x-\partial_xF_z$ and $\partial_xF_y-\partial_yF_x$ are, by [F1], exactly the first, second and third coordinates of $\operatorname{curl}F$. [step 1.1, step 1.2, F1, algebra]

3.1 For the forward direction, suppose $F$ is closed. By steps 1.1 and 1.2 the three equations of step 2.1 hold at every $p\in U$, so by [F1] each of the three coordinates of $\operatorname{curl}F(p)$ is zero; hence $\operatorname{curl}F$ vanishes identically on $U$. [step 2.1, F2, F1]

3.2 For the converse direction, suppose $\operatorname{curl}F(p)=0$ for every $p\in U$. By [F1] each of the three differences of step 2.1 is zero at every $p$, so the three equations of step 2.1 hold on $U$; by steps 1.1 and 1.2 these are equivalent to the full system of [F2], so $F$ is closed. [step 2.1, F1, F2]

4.1 Steps 3.1 and 3.2 are the two implications, so $F$ is closed if and only if its curl vanishes identically. [step 3.1, step 3.2] ∎

## Remarks

- **Why the count of equations matters.** Closedness in $\mathbb R^n$ is a condition on all ordered pairs of indices, and the curl in $\mathbb R^3$ has three coordinates. Step 1.2 is what shows that these are the same amount of information: the diagonal equations are automatic and each off-diagonal equation is listed twice. In $\mathbb R^n$ with $n\ne3$ the number of independent equations is $n(n-1)/2$, so there is no vector of that many coordinates in the same space to collect them into, and closedness is then stated only as the system itself.
