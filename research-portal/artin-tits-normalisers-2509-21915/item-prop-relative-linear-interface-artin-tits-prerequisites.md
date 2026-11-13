---
title: Annihilators, relative hyperplanes and complexification
status: draft
research_item: prop-relative-linear-interface-artin-tits-prerequisites
dependency_level: 0
---

## Prerequisites

- [math:def-dual-family-associated-to-a-basis](https://alphabetamath.cc/item/def-dual-family-associated-to-a-basis)
- [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)
- [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)
- [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)
- [math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)
- [math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)
- [math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)
- [math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)
- [math:def-isometry-and-metric-embedding](https://alphabetamath.cc/item/def-isometry-and-metric-embedding)
- [math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)
- [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)
- [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)
- [math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)
- [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)
- [math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)
- [math:def-dimension](https://alphabetamath.cc/item/def-dimension)
- [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)
- [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)


## Statement

Let $V$ be a real vector space with finite basis $(e_s)_{s\in S}$, let $J\subseteq S$, and let $E=\{f\in V^*:f(e_j)=0\text{ for every }j\in J\}$. For $\alpha\in V$, write $r_\alpha:E\to\mathbb R$ for the restricted evaluation $r_\alpha(f)=f(\alpha)$. Then $r_\alpha$ is zero exactly when $\alpha\in\operatorname{span}\{e_j:j\in J\}$; otherwise its kernel is a linear hyperplane of $E$, meaning that its quotient in $E$ has dimension one. Two nonzero restricted evaluations have the same kernel exactly when one is a nonzero real scalar multiple of the other.

Identify the complexification $E\otimes_{\mathbb R}\mathbb C$ with $E\oplus iE$ by $f\otimes(a+bi)\mapsto af+i bf$. For a real hyperplane $H\subseteq E$, its complexification, understood as the image of $H\otimes_{\mathbb R}\mathbb C$ under the inclusion into $E\otimes_{\mathbb R}\mathbb C$, is $H\oplus iH$.

For subsets of $E$, relative interior and closure mean interior and closure computed in $E$ with the metric induced by the coordinate Euclidean metric on $V^*$ associated to the basis $(e_s)$. Thus balls used in these operations are balls in $E$.

## Statement references

[math:def-dual-family-associated-to-a-basis](https://alphabetamath.cc/item/def-dual-family-associated-to-a-basis)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)

[math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)

[math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)

[math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)

[math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)

[math:def-isometry-and-metric-embedding](https://alphabetamath.cc/item/def-isometry-and-metric-embedding)

[math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

[math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)

[math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)

[math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

## Facts & Assumptions

[F1] The coordinate functional $e_s^*$ has $e_s^*(e_t)=\delta_{st}$; a functional is determined by its values on the basis, and $V^*$ has pointwise linear operations ([math:def-dual-family-associated-to-a-basis](https://alphabetamath.cc/item/def-dual-family-associated-to-a-basis), [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)).

[F2] The kernel of a linear map is its zero fibre. A linear hyperplane is a subspace whose quotient has dimension one ([math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map), [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)).

[F3] For a real vector space $X$, the tensor and direct-sum models of complexification are canonically isomorphic by $\Phi_X:\mathbb C\otimes_{\mathbb R}X\to X\oplus iX$, with $z\otimes x$ corresponding to $z(x+i0)$ ([math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)).

[F4] In a metric space, the interior consists of points having a ball contained in the set, and the closure consists of points whose every ball meets the set ([math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)).

[F5] Over the commutative ring $\mathbb R$, tensor symmetry is an isomorphism $\sigma_{X,Y}:X\otimes_{\mathbb R}Y\to Y\otimes_{\mathbb R}X$ sending $x\otimes y$ to $y\otimes x$ ([math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)). Real-linear maps $u:X\to X^\prime$ and $v:Y\to Y^\prime$ induce $u\otimes v$, sending $x\otimes y$ to $u(x)\otimes v(y)$ ([math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)).

[F6] If $(X,d_X)$ is a metric space and $A\subseteq X$, then $d_A=d_X|_{A\times A}$ is a metric on $A$ and $B_A(a,r)=B_X(a,r)\cap A$ for $a\in A$ and $r>0$ ([math:def-isometry-and-metric-embedding](https://alphabetamath.cc/item/def-isometry-and-metric-embedding)).

[F7] For every integer $n\ge1$, the function $d_2(x,y)=(\sum_{k<n}(x_k-y_k)^2)^{1/2}$ is a metric on $\mathbb R^n$ ([math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)).

[F8] A basis is a linearly independent spanning subset; the empty basis is a basis exactly of the zero space ([math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)). The span is the smallest linear subspace containing the given subset, and consists exactly of its finite linear combinations, including the empty combination ([math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), [math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)).

[F9] For a vector space $X$ and a linear subspace $K$, the quotient $X/K$ has classes $x+K$ and operations $(x+K)+(y+K)=(x+y)+K$ and $a(x+K)=ax+K$ ([math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)). These operations are well-defined and make $X/K$ a vector space; the projection $x\mapsto x+K$ is linear and surjective with kernel $K$ ([math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)).

[F10] A vector space with a finite basis has dimension equal to the number of elements of that basis ([math:def-dimension](https://alphabetamath.cc/item/def-dimension)).

[F11] A linear subspace contains zero and is closed under addition and scalar multiplication; with the restricted operations it is a vector space ([math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)). A map between vector spaces over the same field is linear when $T(au+bv)=aT(u)+bT(v)$ for all vectors $u,v$ and scalars $a,b$ ([math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)).

## Proof

**Given:** The finite real basis, subset $J$, set $E$, and restricted evaluations in the statement. Define $d(f,g)=(\sum_{s\in S}|f(e_s)-g(e_s)|^2)^{1/2}$ on $V^*$.

**Goal:** Prove the assertions about restricted evaluations, their kernels, and complexification, and specify the relative operations.


1.1 The zero functional belongs to $E$. For $f,g\in E$ and $a,b\in\mathbb R$, pointwise operations give $(af+bg)(e_j)=af(e_j)+bg(e_j)=0$ for every $j\in J$. Thus $E$ is a real linear subspace of $V^*$ and inherits its vector-space operations. For every $\alpha\in V$, those same operations give $r_\alpha(af+bg)=a r_\alpha(f)+b r_\alpha(g)$, so $r_\alpha$ is real-linear and $r_\alpha(0)=0$. Put $K_\alpha=\ker r_\alpha$. It contains zero, and if $f,g\in K_\alpha$ then $r_\alpha(af+bg)=0$ for all $a,b\in\mathbb R$. Hence $K_\alpha$ is a real linear subspace of $E$. These checks apply also when $J$ is empty or $E=\{0\}$. [given, F1, F2, F11, algebra]

1.2 Write $\alpha=\sum_{s\in S}a_s e_s$. For $f\in E$, linearity gives $r_\alpha(f)=\sum_{s\notin J}a_s f(e_s)$. If $\alpha$ is in the indicated span this is zero for all $f\in E$. Conversely, if $r_\alpha=0$, then $e_s^*\in E$ for each $s\notin J$, so evaluation at $e_s^*$ gives $a_s=0$ for every such $s$. This proves the equivalence. [given, F1, F8, algebra]

1.3 Put $n=|S|$. If $n\ge1$, enumerate $S=\{s_0,\ldots,s_{n-1}\}$ and define $C:V^*\to\mathbb R^n$ by $C(f)_k=f(e_{s_k})$. By [F1], $C$ is injective because a functional is determined by its basis values, and it is surjective because $x\in\mathbb R^n$ is the image of $\sum_{k<n}x_k e_{s_k}^*$. The coordinate formula gives $d(f,g)=d_2(C(f),C(g))$. By [F7], $d$ is nonnegative, symmetric and satisfies the triangle inequality; also $d(f,g)=0$ exactly when $C(f)=C(g)$, which by injectivity is exactly when $f=g$. If $n=0$, then $V=\{0\}$ and $V^*=\{0\}$, and the empty-sum formula gives the unique distance $d(0,0)=0$; separation and symmetry hold, and the only triangle inequality is $0\le0+0$. Thus $d$ is a metric in every case. [given, F1, F7, F8, choose, algebra]

2.1 Suppose $r_\alpha$ is nonzero. Choose $u\in E$ with $r_\alpha(u)=1$, by rescaling a vector on which it is nonzero. Every $f\in E$ has the unique decomposition $f=(f-r_\alpha(f)u)+r_\alpha(f)u$, with the first term in $\ker r_\alpha$. Hence the quotient $E/\ker r_\alpha$ is spanned by the nonzero class of $u$ and has dimension one; its kernel is therefore a hyperplane. [given, F2, F8, F9, F10, step 1.1, choose, algebra]

2.2 A real hyperplane $H\subseteq E$ is a linear subspace by [F2], hence a real vector space by [F11]. For $X=E$ and $X=H$, compose the tensor symmetry in [F5] with $\Phi_X$ in [F3] to obtain the isomorphism $T_X=\Phi_X\circ\sigma_{X,\mathbb C}:X\otimes_{\mathbb R}\mathbb C\to X\oplus iX$. It sends $x\otimes(a+bi)$ to $ax+i bx$ and has inverse $x+iy\mapsto x\otimes1+y\otimes i$. Thus $T_E$ gives the stated identification. [given, F2, F3, F5, F11, step 1.1, algebra]

3.1 Let $r$ and $q$ be nonzero restricted evaluations with the same kernel, and choose $u$ with $r(u)=1$. The decomposition in step 2.1 gives $q(f)=r(f)q(u)$ for every $f\in E$. Since $q$ is nonzero, $q(u)\ne0$, so $q$ is a nonzero scalar multiple of $r$. Conversely, multiplying a functional by a nonzero scalar does not change its zero fibre. [step 2.1, step 1.1, F2, choose, algebra]

3.2 Let $j:H\to E$ be the inclusion. Since $H$ has the restricted operations, $j(ah+bk)=aj(h)+bj(k)$ for $h,k\in H$ and $a,b\in\mathbb R$, so $j$ is real-linear; the identity on $\mathbb C$ is real-linear by the same criterion. By [F5] it induces $j_{\mathbb C}=j\otimes\operatorname{id}_{\mathbb C}:H\otimes_{\mathbb R}\mathbb C\to E\otimes_{\mathbb R}\mathbb C$. For $h,k\in H$, the inverse formula in step 2.2 gives $T_E(j_{\mathbb C}(T_H^{-1}(h+ik)))=T_E(j(h)\otimes1+j(k)\otimes i)=j(h)+i j(k)$. Hence, under these isomorphisms, $j_{\mathbb C}$ is the componentwise inclusion $H\oplus iH\to E\oplus iE$. This inclusion is injective because its value is zero only when both $h=0$ and $k=0$, and its image is exactly $H\oplus iH$. This proves the complexification assertion. [given, F5, F11, step 2.2, algebra]

4.1 Apply [F6] with $X=V^*$, its coordinate Euclidean metric $d$ established in step 1.3, and $A=E$. The restriction $d_E=d|_{E\times E}$ is a metric on $E$, and its balls are $B_E(f,r)=B_{V^*}(f,r)\cap E$ for $f\in E$ and $r>0$. Applying [F4] to $(E,d_E)$ gives exactly the stated relative interior and closure, with all balls taken in $E$. Together with steps 1.2, 2.1, 3.1, 2.2 and 3.2, this proves every assertion. [given, F4, F6, step 1.3, step 1.2, step 2.1, step 3.1, step 2.2, step 3.2] ∎
