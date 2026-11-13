---
title: A hyperplane near the centre separates opposite coordinate vertices
status: draft
research_item: lem-author-b319c70a2611-hyperplane-vertex-separation
dependency_level: 2
---

## Prerequisites

- [lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices)
- [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)
- [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)
- [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)
- [math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)
- [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)
- [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)
- [math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis](https://alphabetamath.cc/item/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis)


## Statement

Let $E$ be a finite-dimensional coordinate Euclidean space of dimension $d>0$, let $T\subseteq E$ and $u\in\operatorname{int}_E(T)$, and choose an orthonormal basis $e_1,\ldots,e_d$ and $\varepsilon>0$ with $p_i^\pm=u\pm\varepsilon e_i\in T$ and $B_E(u,\varepsilon)\subseteq T$. Every proper linear hyperplane $K\subset E$ meeting $B_E(u,\varepsilon/d)$ strictly separates $p_i^+$ and $p_i^-$ for some $i$.

Here a linear hyperplane means a linear subspace $K$ with $\dim_{\mathbb R}(E/K)=1$. Strict separation of $v,w\in E$ by $K$ means $a(v)a(w)<0$ for a nonzero real linear functional $a:E\to\mathbb R$ with $K=\ker a$. Such a functional exists, and the sign condition is independent of its choice, as proved below.

## Statement references

[lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices)

[prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis](https://alphabetamath.cc/item/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis)

## Facts & Assumptions

[F1] The coordinate-vertex construction supplies the orthonormal basis, positive $\varepsilon$, vertices in $T$ and ball $B_E(u,\varepsilon)\subseteq T$ ([lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices)).

[F2] Balls and relative interior are taken in $E$ with its coordinate Euclidean metric ([prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)).

[F3] A linear hyperplane $K$ is a linear subspace with $\dim_{\mathbb R}(E/K)=1$ ([math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)).

[F4] The quotient $E/K$ has cosets $y+K$, with $(y+K)+(z+K)=(y+z)+K$ and $t(y+K)=ty+K$ ([math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)). The canonical projection $\pi(y)=y+K$ is linear and surjective, with $\ker\pi=K$ ([math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)).

[F5] A real linear functional on $E$ is a real-linear map $E\to\mathbb R$ ([math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)).

[F6] The coordinate Euclidean inner product on $E$ is a real inner product: it is bilinear and positive definite ([math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)).

[F7] The orthonormal family $e_1,\ldots,e_d$ satisfies $\langle e_i,e_j\rangle=\delta_{ij}$, where $\delta_{ij}$ is $1$ when $i=j$ and $0$ otherwise. The induced length is $\|h\|=\sqrt{\langle h,h\rangle}$ ([math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis](https://alphabetamath.cc/item/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis)).

## Proof

**Given:** $E,T,u,d,e_i,\varepsilon,p_i^\pm$ as in the statement, and a linear hyperplane $K$ meeting $B_E(u,\varepsilon/d)$.

**Goal:** Construct a defining functional, verify that strict separation is independent of its choice, and establish strict separation of one opposite vertex pair.

**Proof technique:** direct.

1.1 By [F3], the real vector space $Q=E/K$ has a one-element basis $\{q\}$. Thus every element of $Q$ is uniquely $tq$ for $t\in\mathbb R$. Define $\lambda(tq)=t$. The quotient operations in [F4] give $\lambda(stq+rt^\prime q)=st+rt^\prime$ for real scalars $s,r,t,t^\prime$, so $\lambda$ is linear and its kernel is $\{0\}$. Set $a=\lambda\circ\pi$. By [F4] and [F5], $a$ is a real linear functional with $\ker a=K$; it is nonzero because surjectivity of $\pi$ gives $z\in E$ with $\pi(z)=q$ and $a(z)=1$. [given, F3, F4, F5, construct, algebra]

2.1 If $b:E\to\mathbb R$ is another nonzero linear functional with kernel $K$, then $y-a(y)z\in K$ for every $y\in E$, so $b(y)=a(y)b(z)$. The scalar $b(z)$ is nonzero, since $z\notin K$. Consequently $b(v)b(w)=b(z)^2a(v)a(w)$, so the product is negative for $b$ exactly when it is negative for $a$. This proves the claimed independence of the strict-separation definition. [step 1.1, F5, algebra]

2.2 Write $y=\sum_{j=1}^d y_j e_j$ and set $a_j=a(e_j)$ and $A=\max_j|a_j|$. Since $a$ is nonzero and the $e_j$ span $E$, $A>0$. Choose $x\in K\cap B_E(u,\varepsilon/d)$. Put $h=u-x=\sum_{j=1}^d h_j e_j$, where $h_j=u_j-x_j$. By real bilinearity in [F6] and orthonormality in [F7], $\|h\|^2=\langle h,h\rangle=\sum_{j,k=1}^d h_jh_k\langle e_j,e_k\rangle=\sum_{j=1}^d h_j^2=\sum_{j=1}^d|u_j-x_j|^2$. Each nonnegative summand is at most this sum, so $|u_j-x_j|\leq\|u-x\|$. Using $a(x)=0$, we obtain $|a(u)|=|a(u-x)|\leq\sum_{j=1}^d|a_j||u_j-x_j|\leq dA\|u-x\|<\varepsilon A$. [given, F1, F2, F5, F6, F7, step 1.1, choose, algebra]

3.1 Choose $i$ with $|a_i|=A$. By linearity and [F1], $a(p_i^\pm)=a(u)\pm\varepsilon a_i$, so $a(p_i^+)a(p_i^-)=a(u)^2-\varepsilon^2a_i^2<0$ by step 2.2. These two values therefore have opposite strict signs, proving strict separation of $p_i^+$ and $p_i^-$ in the stated, choice-independent sense. [F1, F5, step 2.1, step 2.2, choose, algebra] ∎
