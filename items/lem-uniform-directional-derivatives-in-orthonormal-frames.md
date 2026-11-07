---
dependency_level: 0
id: lem-uniform-directional-derivatives-in-orthonormal-frames
kind: lemma
title: "Uniform orthogonal frames for nonzero homogeneous derivatives"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis, Flows on homogeneous spaces and Diophantine approximation on manifolds"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Proposition 3.4, orthogonal-coordinate step"
---

## Statement

For integers $d,j\ge1$ there is $b_{d,j}>0$ such that every real homogeneous polynomial $P$ of degree $j$ on $\mathbb R^d$ has an orthonormal basis $v_1,\ldots,v_d$ satisfying
$$\min_i|P(v_i)|\ge b_{d,j}\max_{|\beta|=j}|c_\beta|,\qquad P(x)=\sum_{|\beta|=j}c_\beta x^\beta.$$
Consequently a nonzero symmetric $j$-linear form admits orthogonal coordinates in which all pure order-$j$ evaluations are bounded below by a dimension-and-order constant times the largest coordinate coefficient of the form.

## Statement references

[Kleinbock–Margulis, Proposition 3.4](https://arxiv.org/pdf/math/9810036v1) — the compact uniform version of its coordinate change.

## Facts & Assumptions

**Given:** Integers $d,j\ge1$ and a homogeneous degree-$j$ polynomial $P$.

[F1] Closed bounded subsets of finite-dimensional Euclidean space are compact, and continuous functions attain their extrema on nonempty compact sets. [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]

[F2] A nonzero real polynomial of degree $j$ has at most $j$ distinct real roots. [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]

## Proof

**Proof technique:** compactness in fixed finite dimension.

1.1 A nonzero real polynomial cannot vanish on an open Euclidean set. To see this without an identity theorem, restrict to a small coordinate box in that set, view the polynomial as a polynomial in its first coordinate, and use the fact that a one-variable polynomial with an interval of roots has all coefficients zero. Repeat in the other coordinates. If a homogeneous polynomial vanishes on an open subset of the unit sphere, it vanishes on the open cone over that subset, and therefore is zero. Thus for nonzero $P$ the set $\{u\in S^{d-1}:P(u)\ne0\}$ is open and dense when $d\ge2$; for $d=1$ it is the entire two-point sphere. [given, F2, algebra]

2.1 For $d\ge2$, on either component of $O(d)$ the map $R\mapsto Re_i$ takes each neighbourhood onto a neighbourhood of $Re_i$ on the sphere: rotate through a sufficiently small angle in the plane spanned by $Re_i$ and a nearby unit vector, and multiply $R$ by that rotation. Therefore each set $\{R:P(Re_i)\ne0\}$ is open dense in $O(d)$. The intersection of these finitely many open dense sets is nonempty, since successively intersecting a nonempty open set with an open dense set leaves a nonempty open set. For $d=1$ either orthogonal basis works. Hence $\max_{R\in O(d)}\min_i|P(Re_i)|>0$ for every nonzero $P$. [step 1.1, construct]

3.1 Let $\mathcal P$ be the compact set of homogeneous degree-$j$ coefficient arrays with maximum coefficient modulus1. The orthogonal group is closed bounded, hence compact. The function $G(P,R)=\min_i|P(Re_i)|$ is jointly continuous. More explicitly, if $P,Q$ have coefficient distance $a$ in maximum norm, then $|G(P,R)-G(Q,R)|\le L_{d,j}a$ uniformly in $R$, where $L_{d,j}$ is the finite number of degree-$j$ monomials. Thus $g(P)=\max_R G(P,R)$ is continuous on $\mathcal P$. It is positive by step 2.1, so its attained minimum $b_{d,j}$ is positive. Normalize any nonzero $P$ by its largest coefficient and use a maximizing $R$; the zero polynomial is immediate. [F1, step 2.1, algebra]

4.1 If $T$ is symmetric $j$-linear, set $P(x)=T(x,\ldots,x)$. The coefficient of $x^\beta$ is $\binom j\beta T(e_1^{\beta_1},\ldots,e_d^{\beta_d})$. These multinomial factors lie between1 and $j!$, so the maximum polynomial coefficient dominates the maximum coordinate evaluation of $T$. Applying step 3.1 yields the asserted lower bound simultaneously for $T(v_i,\ldots,v_i)$. This also shows that the zero polynomial corresponds to the zero symmetric form. [step 3.1, algebra] ∎

