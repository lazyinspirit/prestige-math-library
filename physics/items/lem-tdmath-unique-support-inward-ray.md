---
id: lem-tdmath-unique-support-inward-ray
kind: lemma
title: Interior rays from a unique supporting plane
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-convex-subset-of-euclidean-space, lem-tdmath-closed-convex-separation, def-euclidean-inner-product]
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: pass
---

## Statement

Use the Euclidean distance $\|q-z\|$; $\operatorname{int}K$ consists of points containing a ball in $K$, closure consists of points whose every ball meets $K$, and $\partial K=\overline K\setminus\operatorname{int}K$. Closed means equal to closure. A supporting hyperplane at $x\in K$ is $\{q:n\cdot(q-x)=0\}$ with $n\ne0$ and $K$ contained in one closed half-space. Let $K\subset\mathbb R^d$ be closed and convex with nonempty interior, $d\ge1$, and let $x\in\partial K$. Suppose $K$ has exactly one supporting hyperplane at $x$. Choose its inward unit normal $n$, so $n\cdot(q-x)\ge0$ for every $q\in K$. Then for every $v$ with $n\cdot v>0$, there is $\delta>0$ such that $x+tv\in\operatorname{int}K$ for every $0<t<\delta$.

## Facts & Assumptions

**Given:** The closed convex set, boundary point, unique supporting hyperplane, and Euclidean inner product.

[F1] [[lem-tdmath-closed-convex-separation]]: a point outside a nonempty closed convex Euclidean set admits a strict separating linear functional.

[F2] [[def-euclidean-inner-product]]: Euclidean linear functionals are represented by vectors.

[F4] [[def-convex-subset-of-euclidean-space]]: finite convex combinations of points in a convex set remain in it.



## Proof

1.1 Let $T=\overline{\{a(q-x):a\ge0,\ q\in K\}}$. This is a closed convex cone. If a nonzero functional $\ell$ is nonnegative on $T$, then it is nonnegative on $K-x$, so its zero plane through $x$ supports $K$. Uniqueness in the hypothesis makes that plane the plane with normal $n$; the inward sign forces $\ell=c n\cdot(\,\cdot\,)$ for some $c>0$. [given, F2]

2.1 The support at $x$ gives $T\subseteq\{w:n\cdot w\ge0\}$. If $v$ with $n\cdot v>0$ were outside $T$, strict separation [F1] of $v$ from the cone would give a nonzero functional $\ell$ nonnegative on $T$ and negative at $v$: the separating bound is zero because $0\in T$ and $T$ is a cone. Step 1.1 then makes $\ell$ a positive multiple of $n$, contradicting $n\cdot v>0$. Thus the open half-space $n\cdot w>0$ lies in $T$, and each such $v$ is an interior point of $T$. [F1, step 1.1, algebra]

3.1 Fix such $v$. Since $v\in\operatorname{int}T$, choose $d+1$ affinely independent vectors in a small ball about $v$ whose simplex contains a neighborhood of $v$. Approximate each vector by a nonzero cone generator $g_j=a_j(q_j-x)$ with $a_j>0$, $q_j\in K$. Sufficiently close approximations preserve affine independence and keep $v$ in the simplex interior, so a neighborhood $N$ of $v$ lies in the simplex of the $g_j$. For each $w\in N$, write $w=\sum_j\theta_j(w)a_j(q_j-x)$ with $\theta_j(w)\ge0$ and $\sum_j\theta_j(w)=1$. Put $A=\max_j a_j>0$. The nonnegative barycentric weights sum to one, so $\sum_j\theta_j(w)a_j\le A$ for every $w\in N$. [step 2.1, construct, F2, algebra]

4.1 Choose $\delta>0$ with $\delta A<1$. For $0<t<\delta$ and each $w\in N$, $x+tw=(1-t\sum_j\theta_j a_j)x+\sum_j t\theta_j a_j q_j$ is a convex combination of points of $K$, hence lies in $K$ by [F4]. Therefore $x+tN\subset K$, so a neighborhood of $x+tv$ lies in $K$ and $x+tv\in\operatorname{int}K$. [step 3.1, given, F4, algebra] ∎
