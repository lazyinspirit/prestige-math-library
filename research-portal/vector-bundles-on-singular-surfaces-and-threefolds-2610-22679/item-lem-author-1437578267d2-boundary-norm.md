---
title: Endpoint boundaries are norm divisors
status: published
research_item: lem-author-1437578267d2-boundary-norm
dependency_level: 10
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

- [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)
- [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)
- [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)
- [lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection)
- [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)
- [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)
- [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings)
- [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)
- [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)
- [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)
- [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice (AC). Let $k$ be an algebraically closed field and let $T$ be an integral finite-type $k$-scheme of chain dimension one. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$. Let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times_k\mathbb A^1_s$ contained in neither endpoint $s=0,1$; call these generators admissible. For projection $p:T\times_k\mathbb A^1_s\to T$, define $b:B_1(T)\to Z_0(T)$ linearly by $b[W]=[W_1]-[W_0]$, where
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}\bigl(\mathcal O_{W,w}/(s-\epsilon)\bigr)[p(w)],\qquad \epsilon=0,1.$$
Here $\ell_R$ denotes composition length of an $R$-module. The endpoint sets are finite, the displayed lengths are finite, and endpoint projection preserves residue fields, so this formula is well-defined without an embedding of $T$.

For an admissible generator $W$, if $W\to T$ is not dominant then $b[W]=0$. Otherwise, with $K=k(T)$ and $L=k(W)$, the extension $L/K$ is finite and
$$b[W]=\operatorname{div}_T\!\left(\operatorname{Nm}_{L/K}((s-1)/s)\right).$$
Dominant means having dense image, and $k(D)$ is the function field of an integral curve $D$, identified with its generic stalk. At a closed point $x$ of $D$, set $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R=\mathcal O_{D,x}$ and $\operatorname{div}_D(f)=\sum_x\operatorname{ord}_x(f)[x]$. The norm of $g\in L$ is the determinant over $K$ of multiplication by $g$ on $L$. In particular every boundary is a principal zero-cycle, including at singular points of $T$; neither normality nor separability is assumed.

## Statement references
[lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection)

[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)

[lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings)

[math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)

[math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
[F1] The intrinsic endpoint groups and boundary are defined in the Statement. If $T$ is an integral closed curve in a smooth finite-type $k$-scheme of pure dimension three, they agree with the degree-zero and degree-one supported-cycle terms and their boundary in the embedded setting of [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees). This comparison is used only under those embedding hypotheses.

[F2] On every integral finite-type curve, length orders are well-defined, have finite support, are additive on products, agree with quotient lengths for nonzero regular functions, and vanish on units. Quotients have their induced module structure; composition length counts simple factors, and a residue field has length one over its local ring. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[F3] For a proper dominant $k$-morphism $q:C\to T$ of integral finite-type curves, the function-field extension is finite and $q_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{k(C)/k(T)}(g)$ for $g\ne0$. This is the imported identity of [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input), including its singular-curve length convention. Here $q_*[y]=[\kappa(y):\kappa(q(y))][q(y)]$, $\kappa(y)=\mathcal O_{C,y}/\mathfrak m_y$, a finite degree is vector-space dimension, and the norm is the determinant of multiplication. Proper means separated, finite type and universally closed. [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension), [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace), [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[F4] For an integral closed subscheme $W\subset T\times_k\mathbb A^1$, its reduced closure $C\subset T\times_k\mathbb P^1$ has closed integral image $Y\subset T$ and $C\to Y$ is proper and dominant. The generic-fiber alternatives give either $W=Y\times_k\mathbb A^1$ with $\dim Y=\dim W-1$, or a finite generic field extension with $\dim Y=\dim W$. [lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection) A nonempty open in an integral finite-type scheme has the same dimension; in particular $C$ has the dimension of $W$. [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[F5] A closed point of a finite-type $k$-scheme has residue field $k$ via its structure map when $k$ is algebraically closed. [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)

[F6] An integral finite-type curve has a unique generic point, and its function field is the fraction field of each nonempty affine chart and of each closed-point local ring. Those local rings are one-dimensional Noetherian local domains; an element outside the maximal ideal is a unit. [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings) Every proper closed subset of such a curve is a finite set of closed points. [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[F7] Relative affine space has polynomial charts over base charts. The projective line has two such charts with reciprocal coordinates $s,u$, so $u=1/s$ on their overlap. Endpoints are defined by $s-\epsilon$, and projection identifies each ambient endpoint with $T$. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts) Closed immersions have affine quotient charts and remain closed immersions after base change. [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change) A finite cover of $T$ by finite-type affine charts therefore gives finite affine quotient covers of $W$ and $C$ in these products; both are finite type over $k$.

[F8] Integral means nonempty, reduced and irreducible; finite type means locally finite type and quasi-compact, and curve dimension is chain dimension. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Zero-cycles are finite formal integer sums of reduced closed points. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group) AC is assumed through the geometric and length-order suppliers, in particular the proper projection, closed-immersion base changes and curve finiteness; the coefficient computations use no additional infinite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

**Given:** AC, $k,T$ and an admissible generator $W$ as stated.

**Goal:** Establish the intrinsic endpoint boundary and compute it as a principal divisor.

1.1 First verify the intrinsic boundary. By F7 every generator $W$ is finite type. For each endpoint, its intersection with $W$ is a proper closed subset because $W$ is admissible, hence a finite set of closed points by F6. At such a point $s-\epsilon$ is a nonzero element of the local domain, so F2 gives finite quotient length. The intersection is the base change of the closed immersion $W\hookrightarrow T\times\mathbb A^1$ to the ambient endpoint. Thus its projection to $T$ is a closed immersion, with the same residue field at corresponding points by the affine quotient description in F7 and the residue-field convention in F3; it has closed-point image. This proves well-definedness of $b$, and F1 identifies it with the supported boundary when the embedding hypotheses hold. Now suppose $W\to T$ is not dominant. Its nonempty irreducible image closure is a proper closed subset of $T$, so by F6 it is a closed point $x$. The image $Y$ in F4 is that reduced point. Since $\dim W=1$ and $\dim Y=0$, F4 gives $W=\{x\}\times_k\mathbb A^1$. By F5 this is $\mathbb A^1_k$. At either endpoint its quotient local ring is $k$, of length one by F2, and both points project to $x$. Therefore $b[W]=[x]-[x]=0$. [given, F1, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 Suppose instead that $W\to T$ is dominant. Use the reduced closure $C$ in F4. It restricts to $W$ on $T\times\mathbb A^1$, as established in the projection lemma, and is an integral finite-type curve by F4 and F7. Its reduced image is $T$, so $q:C\to T$ is proper and dominant. Since $W$ and $C$ share a nonempty open, F6 identifies $k(C)=k(W)=L$; F3 gives finiteness over $K=k(T)$. Admissibility says $s\ne0,1$ in $L$, so $g=(s-1)/s$ is nonzero. At a point with $s=1$, the germ of $s$ is a unit, hence F2 gives $\operatorname{ord}(g)=\ell(\mathcal O_W/(s-1))$. At $s=0$, the germ of $s-1$ is a unit, giving $\operatorname{ord}(g)=-\ell(\mathcal O_W/s)$. Elsewhere in $W$ both are units. At infinity F7 gives $g=1-u$, a unit since $u=0$ there, so its order is zero. The local rings of $C$ and $W$ agree at endpoint points. By step 1.1 their residue degrees over their images in $T$ are one. Thus coefficient by coefficient $q_*\operatorname{div}_C(g)=b[W]$. Applying F3 proves the displayed norm-divisor identity. For a finite integer sum of generators, the nondominant terms contribute zero by step 1.1, while the others contribute divisors of nonzero norms; the product of their integer powers is a nonzero rational function whose divisor is the boundary, by F2. This proves the final assertion with all singular-point lengths retained. [given, F2, F3, F4, F6, F7, step 1.1, algebra] ∎
