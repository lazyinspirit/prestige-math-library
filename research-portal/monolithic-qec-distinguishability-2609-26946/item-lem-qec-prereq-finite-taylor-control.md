---
title: Finite exponential and smooth quotient remainder control
status: draft
research_item: lem-qec-prereq-finite-taylor-control
dependency_level: 0
---

## Prerequisites

- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality)
- [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)
- [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products)
- [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)
- [math:lem-standard-basis-of-f-n](https://alphabetamath.cc/item/lem-standard-basis-of-f-n)
- [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)


## Statement

Let $d$ be a nonnegative integer and let $A$ be a complex $d\times d$ matrix acting on $\mathbb C^d$ with its Euclidean norm $\|x\|_2=(\sum_{j<d}|x_j|^2)^{1/2}$, let $t\in\mathbb R$, and let $n$ be a nonnegative integer. With $\|A\|=\sup_{\|x\|_2\le1}\|Ax\|_2$ and $e^{tA}=\sum_{k=0}^{\infty}t^kA^k/k!$, one has $\|e^{tA}-\sum_{k=0}^n t^kA^k/k!\|\le e^{|t|\|A\|}(|t|\|A\|)^{n+1}/(n+1)!$.

For $d\ge1$ the same operator norm is the supremum over unit vectors. For $d=0$, the space has only the zero vector, $A=I=0$ as operators on this space, and the unit-ball supremum and the operator remainder are both zero.

For scalar functions near $t=0$, write $h(t)=O(t^{n+1})$ when there are constants $C,\delta>0$ such that $|h(t)|\le C|t|^{n+1}$ for $|t|<\delta$. If $f(t)=\sum_{k=0}^n a_kt^k+O(t^{n+1})$ and $g(t)=\sum_{k=0}^n b_kt^k+O(t^{n+1})$, their product has the expansion through order $n$ obtained by truncating the polynomial product. If $b_0\ne0$, their quotient has an expansion through order $n$ with coefficients $c_0=a_0/b_0$ and $c_j=(a_j-\sum_{k=1}^j b_kc_{j-k})/b_0$ for $1\le j\le n$. These assertions apply at fixed parameter values. Uniform remainders on a parameter set require uniform bounds on the input coefficients and remainders and, for quotients, a uniform positive lower bound on $|b_0|$. A denominator vanishing at zero requires separate cancellation or extension before this quotient assertion is applied.

## Facts & Assumptions

[F1] On a complex Banach space the bounded-operator exponential is the absolutely convergent operator-norm series given in the statement. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F2] A bounded linear operator has finite operator norm defined by the unit-ball supremum; this equals the unit-sphere supremum on a nonzero domain and is zero on the zero space. Composition satisfies $\|ST\|\le\|S\|\|T\|$. [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality)

[F3] For $u\ge0$, the real exponential is $e^u=\sum_{j=0}^\infty u^j/j!$. [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)

[F4] The coordinate pairing $\langle x,y\rangle=\sum_{j<d}x_j\overline{y_j}$ is an inner product, including when $d=0$, and its induced length is a complex norm. [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products) [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)

[F5] The standard coordinate vectors form an ordered basis of $\mathbb C^d$, with the empty basis at $d=0$. Every real or complex normed space with an ordered basis of finite length is Banach. [math:lem-standard-basis-of-f-n](https://alphabetamath.cc/item/lem-standard-basis-of-f-n) [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F6] A linear map from a normed space with an ordered basis of finite length into a normed space over the same scalar field is bounded. [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

## Proof

**Given:** The matrix, integer, and scalar expansions in the statement.

**Goal:** Establish the operator tail estimate and the scalar expansion rules with their stated uniformity conditions.

1.1 By [F4], the displayed Euclidean length makes $\mathbb C^d$ a complex normed space, and its finite ordered basis in [F5] makes it Banach. Matrix multiplication is complex linear: for each $i<d$, $(A(\alpha x+\beta y))_i=\sum_{j<d}A_{ij}(\alpha x_j+\beta y_j)=\alpha(Ax)_i+\beta(Ay)_i$. Thus [F6] makes $A$ bounded and [F1] applies. If $d=0$, there is only one vector and only one operator, so $A=I=0$ and the asserted norm and remainder are zero by [F2]. If $d\ge1$, the unit-ball norm equals the unit-sphere supremum by [F2]. [given, F1, F2, F4, F5, F6, algebra]

1.2 Write $f=P+r$ and $g=Q+s$, where $P,Q$ are the displayed polynomials and $r,s=O(t^{n+1})$. For $|t|$ sufficiently small, $P$ and $Q$ are bounded, so $Ps+Qr+rs=O(t^{n+1})$. Terms of $PQ$ above degree $n$ are also $O(t^{n+1})$; thus the stated product expansion follows. [given, algebra]

2.1 Put $u=|t|\|A\|$. By absolute convergence and the triangle inequality, the operator tail is at most $\sum_{k=n+1}^{\infty}u^k/k!$. Since $(n+1+j)!\ge(n+1)!j!$ for every $j\ge0$, this sum is at most $u^{n+1}e^u/(n+1)!$. This also covers $u=0$. [F1, F2, F3, step 1.1, algebra]

2.2 If $b_0\ne0$, define $C(t)=\sum_{j=0}^n c_jt^j$ by the stated recurrence. Its coefficients make every coefficient through degree $n$ of $P-QC$ zero, so $P-QC=O(t^{n+1})$. Also $g(t)=b_0+O(t)$ when $n\ge1$, while for $n=0$ the given remainder gives the same conclusion; hence $|g(t)|\ge|b_0|/2$ for sufficiently small $|t|$. Consequently $f/g-C=(f-gC)/g=O(t^{n+1})$. [given, step 1.2, algebra]

3.1 If coefficient and remainder bounds are uniform, the bounds used for the product are uniform after restricting to a common sufficiently small neighborhood. If additionally $|b_0|$ has a uniform positive lower bound, the same is true of $|g(t)|$, and the recurrence and quotient estimate are uniform. Without that lower bound the argument gives only fixed-parameter control. Cancellation or extension at a zero denominator must be established separately before invoking the nonzero-denominator result. [step 1.2, step 2.2, algebra] ∎
