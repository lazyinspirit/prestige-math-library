---
id: lem-finitely-many-critical-values-can-be-separated-locally
kind: lemma
title: "For a compact Morse function, disjoint local bump perturbations can separate finitely many equal critical values without changing the Hessians"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-morse-function-and-excellent-morse-function, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Let $M$ be a compact smooth manifold and let $f:M\to\mathbb R$ be Morse. Then
every $C^\infty$ neighbourhood $\mathcal U$ of $f$ contains a smooth function
$g$ such that:

- $g$ has the same critical points as $f$;
- the Hessian of $g$ at each critical point equals the Hessian of $f$ there; and
- distinct critical points of $g$ have distinct critical values.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$, a Morse function $f:M\to\mathbb R$, and a $C^\infty$ neighbourhood $\mathcal U$ of $f$.

[L1] A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[L2] Around a compact set inside an open set there exists a smooth bump that is identically $1$ near the compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[A1] If a continuous cotangent field is nowhere zero on a compact set, then its norm has a positive minimum there.

[A2] For finitely many fixed smooth bump functions, the linear combination map from the coefficient space into $C^\infty(M)$ is continuous. Hence sufficiently small coefficients place that combination inside any prescribed $C^\infty$ neighbourhood of $0$, and at the same time make its differential uniformly small on a chosen compact set.

## Proof

**Proof technique:** direct.

1.1 By [L1], the critical points of $f$ are $p_1,\dots,p_r$. Choose pairwise disjoint open neighbourhoods $V_i\Subset U_i$ of the $p_i$ such that each $U_i$ contains no critical point other than $p_i$, and by [L2] choose smooth functions $\rho_i$ with $\rho_i=1$ on $V_i$ and $\operatorname{supp}(\rho_i)\subseteq U_i$. [L1, L2, given, choose]

2.1 Let $K:=M\setminus\bigcup_{i=1}^rV_i$. This compact set contains no critical point of $f$, so [A1] gives a constant $m>0$ with $\|df_x\|\ge m$ for every $x\in K$. Using [A2], choose real numbers $\lambda_i$ such that the shifted numbers $f(p_i)+\lambda_i$ are pairwise distinct, the finite sum $$u:=\sum_{i=1}^r\lambda_i\rho_i$$ satisfies $f+u\in\mathcal U$, and $$ \sum_i|\lambda_i|\,\|d\rho_i\|_{C^0(K)}<m/2. $$ Define $g:=f+u$. [A1, A2, step 1.1, given, choose, construct]

3.1 On each neighbourhood $V_i$ one has $g=f+\lambda_i$, because $\rho_i=1$ there and every $\rho_j$ with $j\ne i$ vanishes there. Therefore $p_i$ is still a critical point of $g$, and the Hessian of $g$ at $p_i$ equals the Hessian of $f$ there. [step 1.1, step 2.1, algebra]

4.1 For $x\in K$, step 2.1 gives $$\|dg_x-df_x\|\le \sum_i|\lambda_i|\,\|d\rho_i\|_{C^0(K)}<m/2,$$ so $\|dg_x\|\ge \|df_x\|-\|dg_x-df_x\|>m/2>0$. Hence $g$ has no critical point on $K$. Since every critical point of $f$ lies in some $V_i$, step 3.1 shows that the critical set of $g$ is exactly $\{p_1,\dots,p_r\}$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 The critical values of $g$ are $g(p_i)=f(p_i)+\lambda_i$, which are pairwise distinct by step 2.1. The same step also gives $g\in\mathcal U$. Therefore $g$ has the same critical points and Hessians as $f$, while all of its critical values are distinct. [step 2.1, step 4.1]

6.1 Thus one can separate all repeated critical values by disjoint local perturbations without changing any critical Hessian. [step 4.1, step 5.1] ∎
