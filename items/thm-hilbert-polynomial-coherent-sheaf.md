---
id: thm-hilbert-polynomial-coherent-sheaf
kind: theorem
title: "Euler characteristic is a Hilbert polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - lem-chain-dimension-open-cover
  - thm-irreducible-closed-subsets-and-prime-ideals
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-free-modules-are-projective-and-flat
  - cor-projective-cohomology-finite-dimensional-field
  - cor-rational-function-field-as-a-fraction-field
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-dimension-noetherian-topological-space
  - def-direct-image-sheaf
  - def-euler-characteristic-coherent-sheaf
  - def-exact-sequence-sheaves
  - def-field
  - def-field-of-fractions
  - def-hilbert-function-sheaf-projective
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-topological-space
  - def-projective-morphism-pre-proj
  - def-pullback-module-ringed-spaces
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-tensor-product
  - def-support-module-sheaf
  - def-twist-quasi-coherent-sheaf-projective
  - def-very-ample-invertible-sheaf-relative
  - lem-base-change-composition
  - lem-base-change-open-closed-immersions
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-euler-characteristic-additive-short-exact
  - lem-field-is-noetherian
  - lem-noetherian-subspaces-and-compact-opens
  - lem-proper-cohomology-field-extension
  - lem-pullback-qc-module-quasi-coherent
  - lem-serre-vanishing-induction-hyperplane
  - lem-stalk-tensor-product
  - lem-very-ample-implies-ample
  - thm-associativity-of-balanced-tensor-products
  - thm-exactness-of-sheaves-stalkwise
  - thm-serre-vanishing
  - thm-support-finite-type-qc-closed
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the finiteness, hyperplane,
base-change and vanishing suppliers cited below
([[def-axiom-of-choice]]). Let $k$ be a field ([[def-field]]) and let $X$ be
projective over $k$ in the fixed-embedding convention of
[[def-hilbert-function-sheaf-projective]]: $i:X\hookrightarrow\mathbb P^n_k$
is a closed immersion of schemes for some $n\ge0$
([[def-closed-immersion-schemes]],
[[def-relative-projective-space-standard-charts]], thus $X$ is projective over
$k$ in the H-projective convention [[def-projective-morphism-pre-proj]]),
$$\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$$
is the fixed invertible $\mathcal O_X$-module ([[def-invertible-sheaf]]), and
for $m\in\mathbb Z$ the twist of an $\mathcal O_X$-module $\mathcal G$ is
$$\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$$
([[def-twist-quasi-coherent-sheaf-projective]],
[[def-sheaf-tensor-product]]).

Let $\mathcal F$ be a coherent $\mathcal O_X$-module
([[def-coherent-module-scheme]]). Write
$$h_{\mathcal F}(m)=\dim_kH^0(X,\mathcal F(m)),\qquad P_{\mathcal F}(m)=\chi(X,\mathcal F(m))=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F(m))$$
for the Hilbert function and the Euler-characteristic function
([[def-sheaf-cohomology-derived-global-sections]],
[[def-euler-characteristic-coherent-sheaf]]). Then:

1. there is a unique polynomial $P_{\mathcal F}(t)\in\mathbb Q[t]$ with
   $$P_{\mathcal F}(m)=\chi(X,\mathcal F(m))\qquad\text{for every }m\in\mathbb Z;$$
2. there is an integer $m_0$ such that $P_{\mathcal F}(m)=h_{\mathcal F}(m)$ for
   every integer $m\ge m_0$;
3. if $\mathcal F=0$ then $P_{\mathcal F}=0$ and $h_{\mathcal F}\equiv0$.

The empty scheme $X=\varnothing$ (which forces $\mathcal F=0$), the zero sheaf,
the case $n=0$, finite and infinite base fields $k$, and the endpoint twists
$m=0$ and $m<0$ are included. No positivity and no effectivity of $m_0$ is
asserted.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a field $k$, an integer $n\ge0$, a closed immersion $i:X\hookrightarrow\mathbb P^n_k$, the invertible sheaf $\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$, and a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Conventions and finiteness: with the fixed embedding of the statement, $X$ is proper over the field $k$ and every cohomology group $H^q(X,\mathcal G)$ of a coherent $\mathcal G$ is a finite-dimensional $k$-vector space, only finitely many of these groups being nonzero; the Euler characteristic $\chi(X,\mathcal G)$ is therefore a well-defined integer and $\chi(X,0)=0$, while $h_{\mathcal G}(m)=\dim_kH^0(X,\mathcal G(m))$ is a nonnegative integer for every $m$. Every twist of a coherent module is coherent. ([[def-hilbert-function-sheaf-projective]], [[cor-projective-cohomology-finite-dimensional-field]], [[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]], [[def-coherent-module-scheme]])

[F2] Additivity of the Euler characteristic: for a field $k$, a scheme $X$ proper over $k$ and a short exact sequence $0\to\mathcal G'\to\mathcal G\to\mathcal G''\to0$ of coherent $\mathcal O_X$-modules one has $\chi(X,\mathcal G)=\chi(X,\mathcal G')+\chi(X,\mathcal G'')$; the empty source and the zero sheaf are included. ([[lem-euler-characteristic-additive-short-exact]], [[def-exact-sequence-sheaves]], [[def-field]])

[F3] Invertible twists and exactness: every twist $\mathcal H(m)$ of an $\mathcal O_X$-module $\mathcal H$ by the invertible sheaf $\mathcal O_X(1)$ is again coherent when $\mathcal H$ is, and $-\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$ is an exact functor on $\mathcal O_X$-modules: on stalks the invertible sheaf is free of rank one over the local ring, tensoring with a free module is exact, and exactness of sheaves is checked stalkwise. ([[def-invertible-sheaf]], [[def-sheaf-tensor-product]], [[lem-stalk-tensor-product]], [[cor-free-modules-are-projective-and-flat]], [[thm-exactness-of-sheaves-stalkwise]], [[def-coherent-module-scheme]])

[F4] The hyperplane lemma: let $k$ be an **infinite** field, let $i:X\hookrightarrow\mathbb P^n_k$ be a closed immersion of schemes and let $\mathcal F\ne0$ be a coherent $\mathcal O_X$-module with $d:=\dim\operatorname{Supp}\mathcal F$. Then among the $k$-linear combinations $\ell=c_0x_0+\cdots+c_nx_n$ of the coordinate sections there is one with $\ell(x)\ne0$ at every point $x$ associated to $\mathcal F$; for this $\ell$ and every $m\in\mathbb Z$ the multiplication map $\cdot\ell:\mathcal F(m-1)\to\mathcal F(m)$ is injective, its cokernel $\mathcal G(m)$ is coherent, and $\operatorname{Supp}\mathcal G(m)=\operatorname{Supp}\mathcal F\cap V(\ell)$; if $d\ge1$ then $\dim\operatorname{Supp}\mathcal G(m)=d-1$ for every $m$, while if $d=0$ then $\mathcal G(m)=0$ for every $m$. ([[lem-serre-vanishing-induction-hyperplane]])

[F5] Support and dimension: for a coherent module $\mathcal G$ on a locally Noetherian scheme the support $\operatorname{Supp}\mathcal G$, the set of points with nonzero stalk, is closed ([[def-support-module-sheaf]], [[thm-support-finite-type-qc-closed]]); the standard charts of $\mathbb P^n_k$ are spectra of the polynomial rings $k[x^{(i)}_\ell]$, which are Noetherian because $k$ is a field, so $\mathbb P^n_k$ and its closed subscheme $X$ are locally Noetherian ([[def-relative-projective-space-standard-charts]], [[lem-field-is-noetherian]], [[cor-finite-variable-polynomial-ring-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]]), and $X$ is a Noetherian topological space with the chain dimension defined for all closed subsets and $\dim\varnothing=-\infty$ ([[def-dimension-noetherian-topological-space]], [[def-noetherian-topological-space]], [[lem-noetherian-subspaces-and-compact-opens]]).

[F6] Discrete antiderivatives in $\mathbb Q[t]$: for every $Q\in\mathbb Q[t]$ there is $R\in\mathbb Q[t]$ with $R(m)-R(m-1)=Q(m)$ for every $m\in\mathbb Z$; consequently, if a function $D:\mathbb Z\to\mathbb Q$ satisfies $D(m)=D(m-1)$ for every $m$, then $D$ is constant. Indeed, by linearity it suffices to treat $Q(t)=t^{k}$: the difference operator $\Delta R(t)=R(t)-R(t-1)$ maps the space of polynomials of degree $\le k+1$ onto the space of polynomials of degree $\le k$, because $\Delta t^{k+1}$ has degree $k$ and leading coefficient $k+1$; the kernel is the constants, so the image has dimension one less than its domain and equal to the target's dimension. The identity $D(m)=D(m-1)$ gives constancy by induction along $\mathbb Z$ in both directions. [algebra]

[F7] Serre vanishing translated to $X$: the pushforward $i_*\mathcal F$ is a coherent $\mathcal O_{\mathbb P^n_k}$-module, and for every $m\ge0$ $$H^q(X,\mathcal F(m))\cong H^q\bigl(\mathbb P^n_k,\,(i_*\mathcal F)\otimes_{\mathcal O_{\mathbb P^n_k}}\mathcal O(m)\bigr)$$ for every $q\ge0$: the closed immersion satisfies $H^q(X,\mathcal G)\cong H^q(\mathbb P^n_k,i_*\mathcal G)$ and $i_*(\mathcal G\otimes i^*\mathcal H)\cong(i_*\mathcal G)\otimes\mathcal H$ for modules $\mathcal G$ on $X$ and $\mathcal H$ on $\mathbb P^n_k$, both verified on affine charts, and $\mathcal F(m)=\mathcal F\otimes i^*\mathcal O(m)$ for $m\ge0$ by the twist conventions. The sheaf $\mathcal O(1)$ is ample on $\mathbb P^n_k$: the identity is a closed immersion over the affine base $\operatorname{Spec}k$ pulling $\mathcal O(1)$ back to itself, so it is closed H-very ample relative to $\operatorname{Spec}k$ and hence ample. Applying the Serre vanishing theorem on the projective Noetherian scheme $\mathbb P^n_k$ to $(i_*\mathcal F)$ and $\mathcal O(1)$ therefore gives an integer $m_1$ with $H^q(X,\mathcal F(m))=0$ for every $q>0$ and every $m\ge m_1$. ([[lem-closed-immersion-cohomology-pushforward]], [[lem-closed-immersion-affine-quotient-and-base-change]], [[def-direct-image-sheaf]], [[def-ample-invertible-sheaf]], [[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]], [[def-relative-projective-space-standard-charts]], [[def-twist-quasi-coherent-sheaf-projective]], [[thm-serre-vanishing]])

[F8] Base change to an infinite field: let $K/k$ be a field extension with base change $g:X_K\to X$, $X_K=X\times_{\operatorname{Spec}k}\operatorname{Spec}K$, and put $\mathcal F_K=g^*\mathcal F$. Then $X_K\to\operatorname{Spec}K$ is proper, $\mathcal F_K$ is coherent, and $$\chi(X_K,\mathcal G_K)=\chi(X,\mathcal G)$$ for every coherent $\mathcal O_X$-module $\mathcal G$, where $\mathcal G_K=g^*\mathcal G$. Moreover the closed immersion $i$ base changes to a closed immersion $i_K:X_K\hookrightarrow\mathbb P^n_K$ (the projection $\mathbb P^n_K\to\mathbb P^n_k$ being the base change of $\operatorname{Spec}K\to\operatorname{Spec}k$), the twisting sheaf satisfies $g^*\mathcal O_X(1)\cong\mathcal O_{X_K}(1)=i_K^*\mathcal O_{\mathbb P^n_K}(1)$ because the twisting sheaf of relative projective space is glued from frames on the standard charts with transition functions that are themselves base changed along $S'\to S$, and pullback of quasi-coherent modules is monoidal, $$g^*(\mathcal H\otimes_{\mathcal O_X}\mathcal H')\cong g^*\mathcal H\otimes_{\mathcal O_{X_K}}g^*\mathcal H',$$ as follows from the affine formula $f^*\widetilde M\cong\widetilde{(B\otimes_AM)}$ and the associativity of the tensor product; hence $g^*(\mathcal G(m))\cong\mathcal G_K(m)$ for every coherent $\mathcal G$ and every $m\in\mathbb Z$ (for $m\ge0$ by monoidality applied to $\mathcal O_X(1)^{\otimes m}$, and for $m<0$ by multiplying with $\mathcal O_{X_K}(1)^{\otimes(-m)}$, which is an invertible sheaf, and cancelling). Finally the rational function field $K=k(t)$ is a field extension of $k$ containing $k[t]$, hence an infinite field. ([[lem-proper-cohomology-field-extension]], [[lem-base-change-open-closed-immersions]], [[lem-base-change-composition]], [[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]], [[def-pullback-module-ringed-spaces]], [[lem-pullback-qc-module-quasi-coherent]], [[thm-associativity-of-balanced-tensor-products]], [[cor-rational-function-field-as-a-fraction-field]], [[def-field-of-fractions]], [[def-field]])

## Proof

**Proof technique:** direct: prove by induction on the dimension of the support that $\chi(\mathcal F(m))$ agrees for all integers $m$ with a rational polynomial, converting the finite difference into the Euler characteristic of a fixed quotient sheaf of smaller support via the regular-hyperplane sequence and inverting the difference operator on $\mathbb Q[t]$; reduce an arbitrary field to an infinite one by base change along $k\to k(t)$, which preserves all the Euler characteristics; and identify the polynomial with the Hilbert function at large twists by Serre vanishing. Uniqueness follows because a nonzero rational polynomial has only finitely many roots.

1.1 Setup and the zero sheaf. By [F1] the scheme $X$ is proper over $k$, every twist $\mathcal F(m)$ is coherent, and $\chi(X,\mathcal F(m))$ and $h_{\mathcal F}(m)$ are defined for every $m\in\mathbb Z$. If $\mathcal F=0$ then every $\mathcal F(m)=0$, all cohomology groups vanish and $\chi(X,\mathcal F(m))=0=h_{\mathcal F}(m)$ for every $m$ by [F1], so $P_{\mathcal F}=0$ is a Hilbert polynomial and part 3 of the statement holds. Assume from 1.2 through 1.8 that $\mathcal F\ne0$ and that $k$ is infinite. [F1]

1.2 Finite support dimension. By [F5] the support $\operatorname{Supp}\mathcal F$ is a nonempty closed subset of the Noetherian space $X$, and its intersections with the standard charts are closed subsets of $\operatorname{Spec}k[t_1,\ldots,t_n]$. Irreducible closed subsets of a spectrum correspond to prime ideals by [[thm-irreducible-closed-subsets-and-prime-ideals]], and chains in a closed subset are chains in the ambient space. Each chart intersection therefore has dimension at most $n$ by [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]. Applying [[lem-chain-dimension-open-cover]] to the induced finite open cover of the support gives $0\le d:=\dim\operatorname{Supp}\mathcal F\le n$. Thus the following induction has a finite integer parameter; Noetherianity alone would not suffice. [F5, algebra]

1.3 The induction proposition. For each integer $e\ge0$ let $\Phi(e)$ be the assertion: every coherent $\mathcal O_X$-module $\mathcal G$ with $\dim\operatorname{Supp}\mathcal G\le e$ admits $Q\in\mathbb Q[t]$ with $Q(m)=\chi(X,\mathcal G(m))$ for every $m\in\mathbb Z$. The zero module satisfies $\Phi(e)$ with $Q=0$ by [F1] and $\dim\operatorname{Supp}0=-\infty$ by [F5]. We prove $\Phi(e)$ for all $e\ge0$ by induction on $e$. [F1, F5]

1.4 Base case $e=0$. Let $\mathcal G\ne0$ be coherent with $\dim\operatorname{Supp}\mathcal G=0$. By [F4] applied to $\mathcal G$ (which is nonzero, with $d=0$) there is $\ell$ such that for every $m$ the map $\cdot\ell:\mathcal G(m-1)\to\mathcal G(m)$ is injective with cokernel $\mathcal G'(m)$ satisfying $\mathcal G'(m)=0$. Hence for every $m$ the sequence $0\to\mathcal G(m-1)\to\mathcal G(m)\to0\to0$ is exact, and additivity [F2] gives $\chi(X,\mathcal G(m))=\chi(X,\mathcal G(m-1))+\chi(X,0)=\chi(X,\mathcal G(m-1))$. Thus $m\mapsto\chi(X,\mathcal G(m))$ is constant with value $\chi(X,\mathcal G(0))$, and the constant polynomial $Q(t)=\chi(X,\mathcal G(0))\in\mathbb Q[t]$ realizes $\Phi(0)$. [F2, F4, 1.3]

1.5 Induction step, $e\ge1$. Let $\mathcal G\ne0$ be coherent with $d':=\dim\operatorname{Supp}\mathcal G$ satisfying $1\le d'\le e$. By [F4] applied to $\mathcal G$ there is $\ell$; let $\mathcal G'$ be the cokernel of $\cdot\ell:\mathcal G(-1)\to\mathcal G(0)$, so that $\mathcal G'$ is a coherent module with $\dim\operatorname{Supp}\mathcal G'=d'-1\le e-1$ by [F4] (its case $m=0$). By the induction hypothesis $\Phi(e-1)$ there is $Q\in\mathbb Q[t]$ with $Q(m)=\chi(X,\mathcal G'(m))$ for every $m$. [F4, 1.3]

1.6 The difference equation. Fix $m\in\mathbb Z$ and tensor the exact sequence $0\to\mathcal G(-1)\xrightarrow{\cdot\ell}\mathcal G(0)\to\mathcal G'\to0$ of 1.5 with the invertible sheaf $\mathcal O_X(1)^{\otimes m}$; by [F3] the result is exact, and by the coherence of the twist conventions of [[def-twist-quasi-coherent-sheaf-projective]] it is canonically the sequence $0\to\mathcal G(m-1)\xrightarrow{\cdot\ell}\mathcal G(m)\to\mathcal G'\otimes\mathcal O_X(1)^{\otimes m}\to0$. Since the cokernel of the middle map is by [F4] the module $\mathcal G'(m)$, uniqueness of cokernels gives a canonical isomorphism $\mathcal G'(m)\cong\mathcal G'\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$; consequently additivity [F2] gives $\chi(X,\mathcal G(m))-\chi(X,\mathcal G(m-1))=\chi(X,\mathcal G'(m))=Q(m)$ by 1.5. [F2, F3, F4, 1.5]

1.7 Antiderivative and the constant. By [F6] choose $R\in\mathbb Q[t]$ with $R(m)-R(m-1)=Q(m)$ for every $m\in\mathbb Z$, and put $C:=\chi(X,\mathcal G(0))-R(0)\in\mathbb Q$. Then $D(m):=\chi(X,\mathcal G(m))-R(m)$ satisfies $D(m)-D(m-1)=\bigl(\chi(X,\mathcal G(m))-\chi(X,\mathcal G(m-1))\bigr)-\bigl(R(m)-R(m-1)\bigr)=Q(m)-Q(m)=0$ for every $m$, so $D$ is constant by [F6] and $D(0)=C$. Hence the polynomial $Q_{\mathcal G}(t):=R(t)+C\in\mathbb Q[t]$ satisfies $Q_{\mathcal G}(m)=\chi(X,\mathcal G(m))$ for every $m\in\mathbb Z$, which proves $\Phi(e)$ and completes the induction. [F6, 1.6]

1.8 Existence and uniqueness for infinite $k$. Applying 1.3-1.7 with $e=d$ to $\mathcal F$ (and the zero-sheaf case 1.1) produces $P_{\mathcal F}\in\mathbb Q[t]$ with $P_{\mathcal F}(m)=\chi(X,\mathcal F(m))$ for every $m$. If $P,P'\in\mathbb Q[t]$ agree on all integers, then $P-P'$ has infinitely many roots, so $P-P'=0$ because a nonzero polynomial over the field $\mathbb Q$ has at most $\deg(P-P')$ roots; hence $P_{\mathcal F}$ is unique and parts 1 and 3 of the statement hold when $k$ is infinite. [1.1, 1.3, 1.4, 1.5, 1.6, 1.7, algebra]

1.9 Arbitrary base field. Now let $k$ be arbitrary and let $K=k(t)$ be the rational function field, an infinite field extension of $k$ by [F8]. Apply steps 1.1-1.8 to the projective pair $X_K/K$ with its induced closed immersion $i_K:X_K\hookrightarrow\mathbb P^n_K$ over the infinite field $K$ and to the coherent module $\mathcal F_K$; all suppliers used there are stated for an arbitrary field in place of $k$, and $X_K$ is proper over $K$ by [F8]. This gives $P\in\mathbb Q[t]$ with $P(m)=\chi(X_K,\mathcal F_K(m))$ for every $m\in\mathbb Z$; by [F8] one has $\chi(X_K,\mathcal F_K(m))=\chi(X_K,(\mathcal F(m))_K)=\chi(X,\mathcal F(m))$ for every $m$, because $g^*(\mathcal F(m))\cong\mathcal F_K(m)$ and the Euler characteristics are preserved by base change. Hence $P(m)=\chi(X,\mathcal F(m))$ for every $m\in\mathbb Z$, and $P$ is unique as in 1.8. [F8, 1.8]

1.10 Large twists. By [F7] there is $m_1$ with $H^q(X,\mathcal F(m))=0$ for every $q>0$ and every $m\ge m_1$. For such $m$ the defining alternating sum of $\chi(X,\mathcal F(m))$ in [F1] reduces to the $q=0$ term, so $\chi(X,\mathcal F(m))=h_{\mathcal F}(m)$; hence $P_{\mathcal F}(m)=h_{\mathcal F}(m)$ for every $m\ge m_1$, which is part 2 of the statement with $m_0:=m_1$. [F1, F7, 1.9]

2.1 Boundaries and choice. If $X=\varnothing$ then every $\mathcal O_X$-module is the zero module, so $\mathcal F=0$, all groups vanish and $P_{\mathcal F}=0$ by 1.1; the zero sheaf is treated there as well and satisfies part 3. The case $n=0$ is included: $\mathbb P^0_k=\operatorname{Spec}k$ by [F7]'s conventions, $X$ is closed in it, and all steps apply with the single chart. Both an infinite field $k$ (steps 1.1-1.8) and a finite field $k$ (step 1.9) are covered, and the polynomial identity holds at $m=0$ and at negative $m$ as well, since 1.7 and 1.9 produce polynomials agreeing with $\chi(X,\mathcal F(m))$ for every $m\in\mathbb Z$ and not merely at large twists; the large-twist hypothesis is needed only for the comparison with $h_{\mathcal F}$ in 1.10. The Axiom of Choice is consumed exactly through the suppliers invoked: the finiteness corollary and the definition of the Euler characteristic [F1], the hyperplane lemma [F4], the closed-immersion pushforward and Serre vanishing [F7], and the flat base-change isomorphism [F8]; the extension field $k(t)$ is constructed as a fraction field and not selected, and no further family is chosen. [F1, F4, F7, F8, 1.1, 1.9, 1.10] ∎
