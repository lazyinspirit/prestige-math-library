---
id: def-expander-prereq-sphere-vector-configurations
kind: definition
title: Sphere configurations and tangent variations
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-euclidean-inner-product
  - math:def-tangent-space-to-a-regular-level-set
  - math:thm-sine-and-cosine-parametrize-the-unit-circle
  - math:def-inner-product-space
  - math:def-matrix-space
  - math:def-total-derivative-in-euclidean-space
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  math:def-euclidean-inner-product: mathematical-premise
  math:def-tangent-space-to-a-regular-level-set: mathematical-premise
  math:thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-matrix-space: mathematical-premise
  math:def-total-derivative-in-euclidean-space: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  math:def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
formulation_deps:
  - math:def-euclidean-inner-product
  - math:def-tangent-space-to-a-regular-level-set
  - math:thm-sine-and-cosine-parametrize-the-unit-circle
  - math:def-inner-product-space
  - math:def-matrix-space
argument_deps:
  - math:def-euclidean-inner-product
  - math:def-tangent-space-to-a-regular-level-set
  - math:thm-sine-and-cosine-parametrize-the-unit-circle
  - math:def-inner-product-space
  - math:def-matrix-space
  - math:def-total-derivative-in-euclidean-space
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-ck-euclidean-maps-and-diffeomorphisms
---

## Definition

Let $r\ge 2$ and $n\ge 1$ be integers. We use one-based labels for Euclidean coordinates: for $x\in\mathbb R^m$, the label $x_k$ denotes the supplier coordinate $x(k-1)$ for $1\le k\le m$. For $u,v\in\mathbb R^r$, write $u\cdot v=\sum_{k=1}^r u_kv_k$ and $\|u\|_2=\sqrt{u\cdot u}$ for the Euclidean inner product and norm. The unit sphere is $S^{r-1}=\{u\in\mathbb R^r:\|u\|_2=1\}$. A sphere configuration is an ordered $n$-tuple $u=(u_1,\ldots,u_n)\in(S^{r-1})^n$.

The product Euclidean inner product of two tuples $v,w\in(\mathbb R^r)^n$ is $\langle v,w\rangle=\sum_{i=1}^n v_i\cdot w_i$. A tangent variation at $u$ is a tuple $v\in(\mathbb R^r)^n$ satisfying $u_i\cdot v_i=0$ for every $i$. These tuples form the tangent space $T_u(S^{r-1})^n$ of the configuration space, with the product inner product restricted to it.

Given a real symmetric matrix $B=(b_{ij})_{1\le i,j\le n}$, so that $b_{ij}=b_{ji}$, a pair interaction energy on configurations is $E_B(u)=\sum_{i,j=1}^n b_{ij}(1-u_i\cdot u_j)$. The matrix and the product metric are part of the specified model. For $r=2$, a circle phase $\theta_i\in[0,2\pi)$ represents $u_i=(\cos\theta_i,\sin\theta_i)$.

## Definition references

[[math:def-euclidean-inner-product]]

## Justification

Identify $(\mathbb R^r)^n$ with $\mathbb R^{rn}$ by placing the scalar $(u_i)_k$ at supplier coordinate $(i-1)r+(k-1)$. Use the product Euclidean norm $\|h\|_2^2=\sum_{i=1}^n\|h_i\|_2^2$, and define $F:(\mathbb R^r)^n\to\mathbb R^n$ by $F_i(u)=u_i\cdot u_i$, where $F_i$ is output coordinate $i-1$. For each $u$, the map $L_u(v)=(2u_i\cdot v_i)_{i=1}^n$ is linear by Euclidean bilinearity ([[math:def-euclidean-inner-product]]). Expansion gives $F(u+h)-F(u)-L_u(h)=(\|h_i\|_2^2)_{i=1}^n$, whose Euclidean norm is at most $\sum_i\|h_i\|_2^2=\|h\|_2^2$: squaring this inequality leaves only nonnegative cross terms. Thus, for every $\varepsilon>0$, taking $\delta=\varepsilon$ makes the remainder at most $\varepsilon\|h\|_2$ whenever $\|h\|_2<\delta$. This proves $DF(u)=L_u$ by [[math:def-total-derivative-in-euclidean-space]] on the open domain $\mathbb R^{rn}$.

The derivative is continuous in $u$. Indeed, Cauchy–Schwarz ([[math:thm-cauchy-schwarz-and-the-euclidean-norm]]) gives $\|(L_u-L_w)v\|_2^2=4\sum_i|(u_i-w_i)\cdot v_i|^2\le4\sum_i\|u_i-w_i\|_2^2\|v_i\|_2^2\le4\|u-w\|_2^2\|v\|_2^2$. Consequently $\|(L_u-L_w)v\|_2\le2\|u-w\|_2\|v\|_2$, uniformly for unit $v$. The same inequality with $w=0$ and the quadratic remainder bound give $\|F(u+h)-F(u)\|_2\le2\|u\|_2\|h\|_2+\|h\|_2^2$, so $F$ is continuous. Substituting an increment supported at the scalar coordinate $(u_j)_k$ into the derivative formula gives $\partial F_i/\partial(u_j)_k=2(u_i)_k$ when $i=j$, and zero otherwise. Each nonzero entry changes in absolute value by at most $2\|u-w\|_2$, hence these partial derivatives are continuous. Together with continuity of the components this verifies that $F$ is $C^1$ in the componentwise convention of [[math:def-ck-euclidean-maps-and-diffeomorphisms]].

The configuration space is $F^{-1}(1,\ldots,1)$. At any point of this fibre, $DF(u)$ is onto: for any $a\in\mathbb R^n$, choose $v_i=(a_i/2)u_i$, giving $DF(u)v=a$. Thus $(1,\ldots,1)$ is a regular value, and the regular-level-set tangent definition ([[math:def-tangent-space-to-a-regular-level-set]]) gives precisely the displayed orthogonality conditions.

The product inner product is the Euclidean inner product on $\mathbb R^{rn}$; its restriction to the tangent subspace is therefore an inner product in the sense of [[math:def-inner-product-space]]: bilinearity, symmetry and positive definiteness are preserved on a linear subspace. The real matrix entries are supplied by [[math:def-matrix-space]], with its zero-based entry $(i-1,j-1)$ denoted here by $b_{ij}$ for $1\le i,j\le n$. The energy is a finite real sum, so it is well defined for every configuration. The circle parametrization is bijective on $[0,2\pi)$ by [[math:thm-sine-and-cosine-parametrize-the-unit-circle]], independently in each coordinate.

## Remarks

No extension of a circle-specific kernel argument or synchronization conclusion to higher spheres is asserted.
