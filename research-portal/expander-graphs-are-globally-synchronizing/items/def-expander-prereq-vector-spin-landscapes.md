---
id: def-expander-prereq-vector-spin-landscapes
kind: definition
title: Signed vector-spin objectives and low-rank Gram factors
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-gram-matrix-and-gram-determinant
  - math:def-row-space-column-space-nullspace-and-matrix-ranks
  - math:def-euclidean-inner-product
  - math:def-trace-of-a-square-matrix
  - math:def-matrix-product-and-identity-matrix
  - math:lem-finite-sum-laws
  - math:lem-a-double-sum-over-finite-index-sets-may-be-interchanged
  - math:thm-row-rank-equals-column-rank
  - math:thm-dimension-of-a-linear-subspace
  - math:lem-standard-basis-of-f-n
  - math:def-transpose-of-a-matrix
  - math:def-metric-topology
  - math:def-subspace-topology-top
  - math:def-embedded-submanifold-and-slice-chart
  - math:thm-a-regular-level-set-is-an-embedded-submanifold
  - math:lem-slice-chart-restrictions-form-a-smooth-atlas
  - math:def-tangent-space-to-a-regular-level-set
  - math:def-c-r-and-smooth-maps-between-smooth-manifolds
  - math:def-ck-and-multi-index-notation-in-several-variables
  - math:thm-continuous-partial-derivatives-imply-total-differentiability
  - math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - math:def-critical-point-and-critical-value-of-a-smooth-function
  - math:def-differential-of-a-smooth-real-valued-function
  - math:prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - math:ex-the-tangent-space-of-euclidean-space
  - math:thm-coordinate-formula-for-the-differential
dependency_roles:
  math:def-gram-matrix-and-gram-determinant: mathematical-premise
  math:def-row-space-column-space-nullspace-and-matrix-ranks: mathematical-premise
  math:def-euclidean-inner-product: mathematical-premise
  math:def-trace-of-a-square-matrix: mathematical-premise
  math:def-matrix-product-and-identity-matrix: mathematical-premise
  math:lem-finite-sum-laws: mathematical-premise
  math:lem-a-double-sum-over-finite-index-sets-may-be-interchanged: mathematical-premise
  math:thm-row-rank-equals-column-rank: mathematical-premise
  math:thm-dimension-of-a-linear-subspace: mathematical-premise
  math:lem-standard-basis-of-f-n: mathematical-premise
  math:def-transpose-of-a-matrix: mathematical-premise
  math:def-metric-topology: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-embedded-submanifold-and-slice-chart: mathematical-premise
  math:thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  math:lem-slice-chart-restrictions-form-a-smooth-atlas: mathematical-premise
  math:def-tangent-space-to-a-regular-level-set: mathematical-premise
  math:def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  math:def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  math:thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth: mathematical-premise
  math:def-critical-point-and-critical-value-of-a-smooth-function: mathematical-premise
  math:def-differential-of-a-smooth-real-valued-function: mathematical-premise
  math:prop-tangent-space-of-a-regular-level-set-is-the-kernel: mathematical-premise
  math:ex-the-tangent-space-of-euclidean-space: mathematical-premise
  math:thm-coordinate-formula-for-the-differential: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Definition

Let $n,r\ge 1$ be integers and let $B=(B_{ij})$ be a real symmetric $n\times n$ matrix. A vector-spin configuration is a matrix $Y\in\mathbb R^{n\times r}$ whose rows $u_1,\ldots,u_n\in\mathbb R^r$ are unit vectors for the Euclidean inner product: $u_i\cdot u_i=1$. Its signed vector-spin objective is $F_B(Y)=\operatorname{Tr}(Y^TBY)$. The entries of $B$ may have either sign.

The Gram matrix of the configuration is $X=YY^T$, with $X_{ij}=u_i\cdot u_j$. A real symmetric matrix $X$ is positive semidefinite if $c^TXc\ge 0$ for every $c\in\mathbb R^n$. The factor $Y$ has at most $r$ columns; using $X=YY^T$ with unit rows of $Y$ as a parametrization of a positive semidefinite matrix variable with diagonal entries one is a Burer–Monteiro factorization. It imposes the rank bound $\operatorname{rank}X\le r$.

Identify matrices with $\mathbb R^{nr}$ by listing their entries. The feasible set is $M_{n,r}=\{Y\in\mathbb R^{n\times r}:u_i\cdot u_i=1\text{ for every }i\}$, with the relative Euclidean topology and the smooth structure of the regular level set of $Q:\mathbb R^{nr}\to\mathbb R^n$, $Q(Y)=(u_i\cdot u_i)_{i=1}^n$, at $(1,\ldots,1)$. Its dimension is $n(r-1)$ and its tangent space is $T_YM_{n,r}=\{V=(v_i)_{i=1}^n:u_i\cdot v_i=0\text{ for every }i\}$. The objective is smooth in this structure.

A feasible $Y$ is a local minimum of $F_B$ when there is $\varepsilon>0$ such that $F_B(Y)\le F_B(Z)$ for every feasible $Z$ with $\sum_{i=1}^n\sum_{a=1}^r(Z_{ia}-Y_{ia})^2<\varepsilon^2$. A local maximum reverses the inequality; a local extremum is either. A critical point is a feasible $Y$ for which the differential $d(F_B)_Y:T_YM_{n,r}\to\mathbb R$ is the zero linear functional. For $r=1$, $M_{n,1}=\{-1,1\}^n$ is discrete with zero-dimensional tangent spaces: every configuration is critical and is both a local minimum and a local maximum.

## Definition references

[[math:def-euclidean-inner-product]]

[[math:def-gram-matrix-and-gram-determinant]]

[[math:def-matrix-product-and-identity-matrix]]

[[math:def-row-space-column-space-nullspace-and-matrix-ranks]]

[[math:def-trace-of-a-square-matrix]]

[[math:def-transpose-of-a-matrix]]

[[math:def-metric-topology]]

[[math:def-subspace-topology-top]]

[[math:def-embedded-submanifold-and-slice-chart]]

[[math:thm-a-regular-level-set-is-an-embedded-submanifold]]

[[math:lem-slice-chart-restrictions-form-a-smooth-atlas]]

[[math:def-tangent-space-to-a-regular-level-set]]

[[math:def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[math:def-ck-and-multi-index-notation-in-several-variables]]

[[math:thm-continuous-partial-derivatives-imply-total-differentiability]]

[[math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]

[[math:def-critical-point-and-critical-value-of-a-smooth-function]]

[[math:def-differential-of-a-smooth-real-valued-function]]

[[math:prop-tangent-space-of-a-regular-level-set-is-the-kernel]]

[[math:ex-the-tangent-space-of-euclidean-space]]

[[math:thm-coordinate-formula-for-the-differential]]

## Facts & Assumptions

**Given:** The integers $n,r$, symmetric matrix $B$, unit-row matrix $Y$, and $X=YY^T$ in the Definition.

[F1] Matrix multiplication is defined by finite sums of products of entries, and the trace is the sum of diagonal entries ([[math:def-matrix-product-and-identity-matrix]], [[math:def-trace-of-a-square-matrix]]). Finite sums are additive and admit scalar factors ([[math:lem-finite-sum-laws]]). For finite sets $S,T$ and a real-valued array $a:S\times T\to\mathbb R$, $\sum_{i\in S}\sum_{j\in T}a_{ij}=\sum_{j\in T}\sum_{i\in S}a_{ij}$ ([[math:lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]).

[F2] The Euclidean dot product is the sum of coordinate products and is nonnegative on a vector paired with itself; the Gram matrix records pairwise inner products ([[math:def-euclidean-inner-product]], [[math:def-gram-matrix-and-gram-determinant]]).

[F3] Matrix rank is row-space dimension; row rank equals column rank. A subspace has dimension at most that of its finite-dimensional ambient space, and $\mathbb R^r$ has dimension $r$ ([[math:def-row-space-column-space-nullspace-and-matrix-ranks]], [[math:thm-row-rank-equals-column-rank]], [[math:thm-dimension-of-a-linear-subspace]], [[math:lem-standard-basis-of-f-n]]).

[F4] For an $m\times k$ matrix $A$, its transpose $A^T$ has shape $k\times m$ and entries $(A^T)_{ji}=A_{ij}$ ([[math:def-transpose-of-a-matrix]]).

[F5] The Euclidean metric topology has balls as neighbourhoods, and the relative topology consists of intersections with ambient open sets ([[math:def-metric-topology]], [[math:def-subspace-topology-top]]).

[F6] Euclidean $C^k$ regularity means existence and continuity of the iterated coordinate partial derivatives; smoothness means this for every finite $k$, componentwise in Euclidean coordinates and in charts ([[math:def-ck-and-multi-index-notation-in-several-variables]], [[math:def-c-r-and-smooth-maps-between-smooth-manifolds]]). Continuous partial derivatives give the total derivative with the Jacobian matrix ([[math:thm-continuous-partial-derivatives-imply-total-differentiability]]). Composites of smooth maps are smooth ([[math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F7] A nonempty regular fibre of a smooth map from an $m$-manifold to a $k$-manifold is an embedded manifold of dimension $m-k$ ([[math:thm-a-regular-level-set-is-an-embedded-submanifold]]). Embedded submanifolds carry the relative topology and the smooth atlas obtained by restricting slice charts ([[math:def-embedded-submanifold-and-slice-chart]], [[math:lem-slice-chart-restrictions-form-a-smooth-atlas]]). For a regular fibre in Euclidean space its tangent space is the kernel of the constraint derivative ([[math:def-tangent-space-to-a-regular-level-set]]).

[F8] For a smooth real-valued function, the differential at a point is a linear functional on its tangent space, and the point is critical when that functional is zero ([[math:def-differential-of-a-smooth-real-valued-function]], [[math:def-critical-point-and-critical-value-of-a-smooth-function]]).

[F9] If $F:M\to N$ is smooth, $q$ is a regular value and $p\in F^{-1}(q)$, the intrinsic tangent space of the embedded fibre is identified with $\ker dF_p$ in $T_pM$ ([[math:prop-tangent-space-of-a-regular-level-set-is-the-kernel]]). At $a\in\mathbb R^k$, the canonical identification $T_a\mathbb R^k\cong\mathbb R^k$ sends $w$ to the derivation $[g]\mapsto\sum_jw_j\partial_jg(a)$ ([[math:ex-the-tangent-space-of-euclidean-space]]). In coordinate tangent bases the differential of a smooth map is represented by the Jacobian of its coordinate expression ([[math:thm-coordinate-formula-for-the-differential]]).

## Justification

**Given:** The data and facts above.

**Goal:** Establish the stated Gram properties, objective identity, feasible smooth structure and rank-one boundary case.

1.1 Entrywise multiplication gives $X_{ij}=\sum_{a=1}^rY_{ia}Y_{ja}=u_i\cdot u_j$, so $X$ is symmetric and $X_{ii}=1$. For any $c\in\mathbb R^n$, $c^TXc=\sum_{a=1}^r(\sum_{i=1}^n c_iY_{ia})^2\ge0$; hence $X$ is positive semidefinite. [given, F1, F2, F4, algebra]

1.2 Each row of $X=Y(Y^T)$ is a linear combination of the $r$ rows of $Y^T$. The row space of $X$ is therefore a subspace of the row space of $Y^T$. By equality of row and column ranks, the latter has dimension equal to the dimension of the column space of $Y^T$, a subspace of $\mathbb R^r$; its dimension is at most $r$. Thus $\operatorname{rank}X\le r$. [given, F1, F3, F4, algebra]

1.3 Each component $Q_i(Y)=\sum_aY_{ia}^2$ is smooth: its first coordinate partials are $2Y_{ia}$ in row $i$ and zero in other rows, its second partials are constants, and all partials of order at least three vanish. These functions are continuous. Its total derivative is consequently $DQ(Y)V=(2u_i\cdot v_i)_{i=1}^n$. The fibre over $(1,\ldots,1)$ is exactly $M_{n,r}$ and is nonempty, since every row can be $(1,0,\ldots,0)$. At a point of this fibre and for any $b\in\mathbb R^n$, the choice $v_i=(b_i/2)u_i$ gives $DQ(Y)V=b$. By the Euclidean identifications and coordinate differential formula in [F9], $dQ_Y$ is consequently surjective at every point of this fibre. Thus this is a regular fibre. [given, F2, F6, F9, algebra, construct]

2.1 Expanding the trace and rearranging the finite sums yields $\operatorname{Tr}(Y^TBY)=\sum_{a=1}^r\sum_{i,j=1}^nY_{ia}B_{ij}Y_{ja}=\sum_{i,j=1}^nB_{ij}(u_i\cdot u_j)$. This proves the objective identity and the stated Gram properties. [given, F1, F2, F4, step 1.1, step 1.2, algebra]

2.2 By the regular-fibre theorem, $M_{n,r}$ is an embedded smooth manifold of dimension $nr-n=n(r-1)$, with the relative Euclidean topology and the restricted slice-chart atlas. Apply [F9] to the smooth map $Q:\mathbb R^{nr}\to\mathbb R^n$ and its regular value $(1,\ldots,1)$ established in step 1.3: the intrinsic tangent space of this embedded fibre is identified with $\ker dQ_Y$. Under the canonical Euclidean tangent identifications, the coordinate formula in [F9] represents $dQ_Y$ by the already computed $DQ(Y)$, so this intrinsic tangent space is represented by exactly the matrices $V$ with $u_i\cdot v_i=0$ for every $i$. This also identifies it with the ambient constraint-kernel definition in [F7]. The squared Euclidean distance of the listed entries is $\sum_{i,a}(Z_{ia}-Y_{ia})^2$, so the local-extremum definitions use neighbourhoods in precisely this relative topology. [F2, F5, F7, F9, step 1.3, algebra]

3.1 On the ambient matrix space, $\operatorname{Tr}(Z^TBZ)$ is a quadratic polynomial in the entries of $Z$, by the same expansion as step 2.1; its coordinate partials of order at least three vanish and its lower partials are continuous. It is therefore smooth. In a restricted slice chart of $M_{n,r}$ its coordinate expression is the composite of this ambient polynomial with the smooth inverse ambient chart and the linear slice inclusion $x\mapsto(x,0)$. This composite is smooth, so $F_B$ is smooth on $M_{n,r}$ and the critical-point definition in [F8] applies. [F1, F4, F6, F7, F8, step 2.1, step 2.2, algebra]

4.1 When $r=1$, the row equations are $u_i^2=1$, hence $u_i\in\{-1,1\}$. Distinct configurations have squared Euclidean distance at least $4$, so the relative ball of radius $1$ about any configuration contains only that configuration. Both local-extremum inequalities thus hold there. The tangent equations $u_iv_i=0$ force every $v_i=0$; the differential on this zero vector space is necessarily zero. Thus every rank-one configuration is critical as asserted. [given, F2, F5, F8, step 2.2, step 3.1, algebra] ∎

## Remarks

A landscape is the behavior of an objective on its feasible configurations, including its local extrema and critical points in the topology and smooth structure specified above. This definition alone makes no assertion about those points or about statistical recovery. Such assertions require a separately specified model and hypotheses; signed weights do not automatically satisfy inequalities proved for nonnegative weights.
