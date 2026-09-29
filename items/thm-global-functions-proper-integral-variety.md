---
id: thm-global-functions-proper-integral-variety
kind: theorem
title: "Global functions on proper integral schemes form a finite extension of the base field"
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - lem-proper-source-to-separated-target-proper
  - thm-proper-morphism-closed-image
  - lem-relative-algebraic-constants-fg-field-finite
  - lem-integral-finite-type-scheme-function-field
  - def-geometrically-reduced-integral-connected-fibre
  - lem-projective-space-diagonal-closed
  - def-relative-projective-space-standard-charts
  - def-axiom-of-choice
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - lem-distinguished-open-refinement-at-a-point
  - thm-morphisms-into-affine-scheme-global-sections
  - thm-dimension-of-a-linear-subspace
  - thm-rank-nullity
  - def-dimension
  - thm-tensor-product-basis-from-bases
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - thm-universal-property-of-module-tensor-products
  - cor-a-linear-subspace-has-a-complement
  - thm-algebraic-embedding-extension
  - def-algebraically-closed-field
  - def-algebraic-closure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Varieties, Lemma 33.9.3 (tag 0BUG)"
      url: https://stacks.math.columbia.edu/tag/0BUG
    - title: "Vakil, The Rising Sea §§8.3, 11.3, 17.4"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a nonempty
proper integral finite-type $k$-scheme with function field $K=k(X)$. Then
$\Gamma(X,\mathcal O_X)$ is a finite field extension of $k$ contained in $K$.

If in addition $X$ is geometrically integral over $k$ for the chosen algebraic
closure $\bar k$ of $k$, then $\Gamma(X,\mathcal O_X)=k$. In particular
$\Gamma(X,\mathcal O_X)=k$ for every nonempty proper integral finite-type
$k$-scheme when $k$ is algebraically closed. No Noetherian or reducedness
hypothesis is added, and $X$ need not be projective.

## Facts & Assumptions

**Given:** A field $k$, a nonempty proper integral finite-type $k$-scheme $X$, its generic point $\eta$, the function field $K=\mathcal O_{X,\eta}=k(X)$, and a chosen algebraic closure $\bar k/k$ for the geometrically integral clause. AC is assumed.

[F1] $K$ is canonically $\operatorname{Frac}\Gamma(U,\mathcal O_X)$ for every nonempty affine open $U\subseteq X$, the extension $K/k$ is finitely generated, and restriction embeds $\Gamma(X,\mathcal O_X)$ into $K$. Under AC, if $X$ is geometrically integral over $k$ for $\bar k$, then $K\otimes_k\bar k$ is a domain. ([[lem-integral-finite-type-scheme-function-field]])

[F2] An integral scheme is nonempty, reduced, and irreducible. ([[def-integral-scheme]])

[F3] A point $\eta\in X$ is generic when $\overline{\{\eta\}}=X$; in particular $\eta$ lies in every nonempty open subset. ([[def-generic-point-irreducible-closed-subset]])

[F4] For a scheme $X$ and a ring $A$, taking global sections is a natural bijection $\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X))$. ([[thm-morphisms-into-affine-scheme-global-sections]])

[F5] The standard charts of $\mathbb P^1_S$ are $U_0=\operatorname{Spec}A[x^{(0)}_1]$ and $U_1=\operatorname{Spec}A[x^{(1)}_0]$ over an affine base $S=\operatorname{Spec}A$, they cover $\mathbb P^1_S$, and their overlap is the open subscheme $D^{(0)}_1\subseteq U_0$ identified with $D^{(1)}_0\subseteq U_1$ by the ring isomorphism sending $x^{(0)}_1$ to $1/x^{(1)}_0$. For $A=k$ we write $u=x^{(0)}_1$, $v=x^{(1)}_0$, so $U_0=\operatorname{Spec}k[u]$, $U_1=\operatorname{Spec}k[v]$ and $U_0\cap U_1=D(v)\subseteq U_1$ with $uv=1$. ([[def-relative-projective-space-standard-charts]])

[F6] A proper morphism is separated, of finite type and universally closed; "proper over $k$" means the structure morphism $X\to\operatorname{Spec}k$ is proper. ([[def-proper-morphism]])

[F7] For every scheme $S$ and every $n\ge0$ the diagonal of $\mathbb P^n_S/S$ is a closed immersion, so $\mathbb P^n_S\to S$ is separated. ([[lem-projective-space-diagonal-closed]])

[F8] Assume AC. If $f:X\to S$ is proper and $g:Y\to S$ is separated, then every $S$-morphism $h:X\to Y$ is proper. ([[lem-proper-source-to-separated-target-proper]])

[F9] A proper morphism is a closed map of topological spaces; in particular the image of the whole source is closed. ([[thm-proper-morphism-closed-image]])

[F10] Points of $\operatorname{Spec}R$ are prime ideals, $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$, and $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ is the complement of $V((f))$. ([[def-prime-spectrum-and-vanishing-sets]], [[def-principal-distinguished-subset-of-spectrum]])

[F11] Every point of an open subset of a spectrum has a distinguished-open neighbourhood inside that open subset. ([[lem-distinguished-open-refinement-at-a-point]])

[F12] If $K/k$ is a finitely generated field extension, the elements of $K$ algebraic over $k$ form a finite extension $k_{\mathrm{alg}}$ of $k$. ([[lem-relative-algebraic-constants-fg-field-finite]])

[F13] If $\dim_F V=n$ and $U\subseteq V$ is a linear subspace, then $U$ is finite-dimensional, $\dim_F U\le n$, and $\dim_F U=n$ if and only if $U=V$. ([[thm-dimension-of-a-linear-subspace]])

[F14] For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_F V=\operatorname{nullity}T+\operatorname{rank}T$. ([[thm-rank-nullity]])

[F15] If $M$ is free with basis $(e_i)_{i\in I}$ and $N$ is free with basis $(f_j)_{j\in J}$, then $M\otimes_RN$ is free with basis $(e_i\otimes f_j)_{(i,j)\in I\times J}$; dimension is the cardinality of a basis. ([[thm-tensor-product-basis-from-bases]], [[def-dimension]])

[F16] For $R$-algebras $A,B$ the module $A\otimes_RB$ carries a unique $R$-algebra structure with $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and $1=1_A\otimes1_B$, and commutative $A,B$ give commutative $A\otimes_RB$; the universal property of the module tensor product produces the multiplication map $A\otimes_RA\to A$, $a\otimes b\mapsto ab$. ([[thm-tensor-product-of-algebras-over-a-commutative-ring]], [[thm-universal-property-of-module-tensor-products]])

[F17] Assume AC. Every linear subspace $U$ of a vector space $V$ has a linear complement $W$ with $V=U\oplus W$. ([[cor-a-linear-subspace-has-a-complement]])

[F18] Assume AC. If $K/F$ is algebraic, $\Omega$ is algebraically closed and $\sigma:F\to\Omega$ is a field embedding, then $\sigma$ extends to a field embedding $K\to\Omega$. ([[thm-algebraic-embedding-extension]])

[F19] A field is algebraically closed when every nonconstant polynomial over it has a root in it; an algebraic closure $\bar k$ of $k$ is an algebraically closed field algebraic over $k$. ([[def-algebraically-closed-field]], [[def-algebraic-closure]])

[F20] AC states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**AC use:** Exactly the following suppliers carry the assumption: [F1] in its geometric-integrality clause, [F8], [F17] and [F18]; the remaining facts and all computations are choice-free.

## Proof

**Proof technique:** direct: a global function $g$ defines a morphism to the affine line inside $\mathbb P^1$; properness makes the image closed, and the image cannot be the whole line, so the induced map on coordinate rings has nonzero kernel and $g$ is algebraic over $k$. The algebraic constants of a finitely generated field extension form a finite extension, and a finite-dimensional domain over a field is a field, giving the first assertion. For geometric integrality one uses that $K\otimes_k\bar k$ is a domain while the tensor square of a nontrivial finite extension of $k$ is not.

1.1 The scheme $X$ is nonempty, reduced and irreducible by [F2], with generic point $\eta$ satisfying $\overline{\{\eta\}}=X$ by [F3]; the structure morphism $X\to\operatorname{Spec}k$ is proper, hence separated and of finite type, by [F6]. By [F1], restriction of global sections to the generic point embeds $\Gamma:=\Gamma(X,\mathcal O_X)$ into $K$ and $K/k$ is finitely generated. [F1, F2, F3, F6, given]

1.2 Fix $g\in\Gamma$. Since $\Gamma$ is a $k$-algebra, there is a unique $k$-algebra homomorphism $\theta_g:k[u]\to\Gamma$ with $\theta_g(u)=g$, and by [F4] it corresponds to a $k$-morphism $\varphi_g:X\to\operatorname{Spec}k[u]=U_0$; composing with the open immersion $U_0\hookrightarrow\mathbb P^1_k$ of the standard chart [F5] gives a $k$-morphism $\overline\varphi_g:X\to\mathbb P^1_k$ with $\overline\varphi{}_g=\iota\circ\varphi_g$, so $\overline\varphi{}_g(X)=\varphi_g(X)\subseteq U_0$. [F4, F5, given, construct]

2.1 The morphism $\overline\varphi_g$ is proper: $X\to\operatorname{Spec}k$ is proper, $\mathbb P^1_k\to\operatorname{Spec}k$ is separated by [F7], and $\overline\varphi_g$ is a $k$-morphism, so [F8] applies. By [F9] $\overline\varphi_g$ is a closed map, so $\overline\varphi{}_g(X)$ is closed in $\mathbb P^1_k$; since $\overline\varphi{}_g(X)=\varphi_g(X)$ is contained in the open chart $U_0$, it is closed in $U_0=\operatorname{Spec}k[u]$. [F5, F7, F8, F9, step 1.2]

2.2 The closure of $\varphi_g(X)$ in $\operatorname{Spec}k[u]$ is exactly $V(\ker\theta_g)$. The map $\varphi_g$ factors as $X\xrightarrow{c}\operatorname{Spec}\Gamma\xrightarrow{\operatorname{Spec}\theta_g}\operatorname{Spec}k[u]$ by [F4]. Since the restriction $\Gamma\hookrightarrow K$ is injective by [F1], the point $c(\eta)$ is the zero prime of the domain $\Gamma$, and $\varphi_g(\eta)=\ker\theta_g$ under contraction. Every point of $\varphi_g(X)$ contains $\ker\theta_g$, so its closure is contained in $V(\ker\theta_g)$ by [F10]. Conversely the closure of the point $\ker\theta_g$ is $V(\ker\theta_g)$ by the Zariski closed-set description [F10], and this point lies in $\varphi_g(X)$; hence the reverse containment holds. [F1, F3, F4, F10, step 1.1]

3.1 The image $\varphi_g(X)$ is not all of $U_0$: otherwise $U_0$, being the image of the closed map $\overline\varphi_g$ of step 2.1, would be closed in $\mathbb P^1_k$. But $\infty:=V(v)\in U_1$ lies in the closure of $U_0$: given an open neighbourhood $N$ of $\infty$ in $\mathbb P^1_k$, the open set $N\cap U_1$ contains a distinguished open $D(f)\ni\infty$ with $f\in k[v]$ by [F11]; here $f\notin(v)$, so $f\ne0$, and with $vf\ne0$ in the domain $k[v]$ the point $(0)$ lies in $D(vf)=D(v)\cap D(f)\subseteq(U_0\cap U_1)\cap N$ by [F5] and [F10]. Hence every neighbourhood of $\infty$ meets $U_0$, so $\infty\in\overline{U_0}$ and $U_0$ is not closed — a contradiction. [F5, F9, F10, F11, step 2.1]

4.1 Consequently $\ker\theta_g\ne0$: step 2.1 makes $\varphi_g(X)$ closed in $U_0=\operatorname{Spec}k[u]$, while step 2.2 identifies its closure with $V(\ker\theta_g)$, so $\varphi_g(X)=V(\ker\theta_g)$. By step 3.1 this is a proper subset of $\operatorname{Spec}k[u]$, whereas $V(0)=\operatorname{Spec}k[u]$; hence $\ker\theta_g\ne(0)$. Choosing $0\ne h\in\ker\theta_g$ gives $h(g)=\theta_g(h)=0$ in $\Gamma$, so $g$ is algebraic over $k$. As $g\in\Gamma$ was arbitrary, $\Gamma\subseteq k_{\mathrm{alg}}:=\{a\in K:a\text{ algebraic over }k\}$ inside $K$. [F10, step 2.1, step 2.2, step 3.1, given]

5.1 By [F12] the set $k_{\mathrm{alg}}$ is a finite extension of $k$, and $\Gamma\subseteq k_{\mathrm{alg}}$ is a $k$-linear subspace, hence finite-dimensional with $\dim_k\Gamma\le[k_{\mathrm{alg}}:k]$ by [F13]. Moreover $\Gamma\subseteq K$ is a subring of a field, hence a domain, and multiplication by $0\ne x\in\Gamma$ is an injective $k$-linear self-map of $\Gamma$; by [F14] its image has dimension $\dim_k\Gamma$, so by [F13] the image is all of $\Gamma$, $x$ is invertible, and $\Gamma$ is a field. Thus $\Gamma$ is a finite field extension of $k$ contained in $K= k(X)$, which is the first assertion. [F1, F12, F13, F14, step 4.1]

6.1 Now assume that $X$ is geometrically integral over $k$ for the chosen algebraic closure $\bar k$, so that $K\otimes_k\bar k$ is a domain by [F1]. Suppose, for contradiction, that the field $\Gamma$ of step 5.1 is not $k$, and let $L:=\Gamma$ and $n:=[L:k]\ge2$. Then $L\otimes_kL$ is a commutative $k$-algebra by [F16], free with the product basis of [F15]; hence $L\otimes_kL\ne0$ and $\dim_k(L\otimes_kL)=n\cdot n=n^2$ by [F15]. The multiplication map $\mu:L\otimes_kL\to L$, $a\otimes b\mapsto ab$, is a surjective $k$-algebra homomorphism by [F16], and $\mu(1\otimes1)=1\ne0$. [F1, F15, F16, step 5.1]

7.1 If $L\otimes_kL$ were a domain, then it would be a field: for $0\ne x\in L\otimes_kL$ multiplication by $x$ is an injective $k$-linear self-map of the finite-dimensional space $L\otimes_kL$, its image has dimension $\dim_k(L\otimes_kL)$ by [F14] and hence equals $L\otimes_kL$ by [F13], so $x$ is invertible. A $k$-algebra homomorphism from a field $L\otimes_kL$ to the nonzero ring $L$ is then injective, because its kernel is an ideal of a field and does not contain $1$; so $n^2=\dim_k(L\otimes_kL)\le\dim_kL=n$, contradicting $n\ge2$. Hence $L\otimes_kL$ is not a domain. [F13, F14, step 6.1]

8.1 But $L\otimes_kL$ is a domain. Since $L\subseteq K$ is a linear subspace, [F17] gives a $k$-linear complement, hence a $k$-linear retraction $r:K\to L$ of the inclusion $i:L\to K$; then $r\otimes\operatorname{id}_L$ retracts $i\otimes\operatorname{id}_L$ as a $k$-linear map on $L\otimes_kL$, so $i\otimes\operatorname{id}_L:L\otimes_kL\to K\otimes_kL$ is injective. By [F18] the embedding $k\hookrightarrow\bar k$ extends to a $k$-algebra embedding $\phi:L\to\bar k$ (the extension $L/k$ is finite, hence algebraic); its underlying $k$-linear injection is retracted by a $k$-linear map $\bar k\to L$ supplied by [F17], so $\operatorname{id}_K\otimes\phi:K\otimes_kL\to K\otimes_k\bar k$ is injective. The composite $L\otimes_kL\to K\otimes_kL\to K\otimes_k\bar k$ is thus an injective $k$-algebra map [F15, F16] into the domain $K\otimes_k\bar k$ of [F1]; the image of an injective ring map is a subring of a domain, hence a domain, and $L\otimes_kL$ is isomorphic to that image, so $L\otimes_kL$ is a domain, contradicting step 7.1. [F1, F15, F16, F17, F18, step 5.1, step 7.1]

9.1 Therefore $n=[\Gamma:k]=1$, i.e. $\Gamma(X,\mathcal O_X)=k$, whenever $X$ is geometrically integral over $k$. If $k$ is algebraically closed and $X$ is a nonempty proper integral finite-type $k$-scheme, the chosen algebraic closure satisfies $\bar k=k$: an algebraic closure is algebraic over $k$ by [F19], and an element algebraic over an algebraically closed field lies in it because its minimal polynomial has a root there, so the geometric fibre $X_{\bar k}=X\times_k\operatorname{Spec}\bar k$ is $X$, which is integral; the previous conclusion applies and $\Gamma(X,\mathcal O_X)=k$. The empty scheme is excluded by hypothesis, and the zero ring does not occur since $X$ is nonempty. The Axiom of Choice [F20] is assumed and is used exactly through the four AC-carrying suppliers [F1], [F8], [F17] and [F18], as recorded in the AC-use line; every other ingredient and computation is choice-free. [F1, F2, F18, F19, F20, step 8.1, given] ∎
