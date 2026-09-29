---
id: thm-hilbert-polynomial-degree-support-dimension
kind: theorem
title: "Degree of the coherent Hilbert polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - lem-chain-dimension-open-cover
  - thm-irreducible-closed-subsets-and-prime-ideals
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-free-modules-are-projective-and-flat
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
  - def-globally-generated-sheaf
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
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-euler-characteristic-additive-short-exact
  - lem-eventual-global-generation-coherent-twists
  - lem-field-is-noetherian
  - lem-noetherian-subspaces-and-compact-opens
  - lem-proper-cohomology-field-extension
  - lem-pullback-qc-module-quasi-coherent
  - lem-serre-vanishing-induction-hyperplane
  - lem-stalk-tensor-product
  - lem-support-dimension-preserved-field-extension
  - lem-very-ample-implies-ample
  - thm-associativity-of-balanced-tensor-products
  - thm-exactness-of-sheaves-stalkwise
  - thm-hilbert-polynomial-coherent-sheaf
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

Assume the Axiom of Choice, inherited from the Hilbert-polynomial,
hyperplane, global-generation and base-change suppliers cited below
([[def-axiom-of-choice]]). Let $k$ be a field ([[def-field]]) and let $X$ be
projective over $k$ in the fixed-embedding convention of
[[def-hilbert-function-sheaf-projective]]: $i:X\hookrightarrow\mathbb P^n_k$
is a closed immersion for some $n\ge0$
([[def-closed-immersion-schemes]],
[[def-relative-projective-space-standard-charts]], so $X$ is projective in
the H-projective convention [[def-projective-morphism-pre-proj]]),
$\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$ and
$\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$
([[def-invertible-sheaf]], [[def-sheaf-tensor-product]],
[[def-twist-quasi-coherent-sheaf-projective]]).

Let $\mathcal F$ be a coherent $\mathcal O_X$-module
([[def-coherent-module-scheme]]) with Hilbert polynomial
$P_{\mathcal F}\in\mathbb Q[t]$ characterized by
$P_{\mathcal F}(m)=\chi(X,\mathcal F(m))$ for every $m\in\mathbb Z$
([[thm-hilbert-polynomial-coherent-sheaf]],
[[def-euler-characteristic-coherent-sheaf]]). Then
$$\deg P_{\mathcal F}=\dim\operatorname{Supp}\mathcal F,$$
where the degree of the zero polynomial is $-\infty$ and the dimension of the
empty set is $-\infty$
([[def-dimension-noetherian-topological-space]],
[[def-support-module-sheaf]]): for $\mathcal F\ne0$ this says that $P$ has
exact degree $\dim\operatorname{Supp}\mathcal F$ with nonzero leading
coefficient, and for $\mathcal F=0$ both sides are $-\infty$.

The empty scheme $X=\varnothing$ (forcing $\mathcal F=0$), the zero sheaf, the
case $n=0$, finite and infinite base fields $k$, and $X$ of dimension zero are
included. No positivity of $\mathcal F$ and no effectivity are asserted.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a field $k$, a closed immersion $i:X\hookrightarrow\mathbb P^n_k$, the invertible sheaf $\mathcal O_X(1)=i^*\mathcal O(1)$ with its twists, and a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] The Hilbert polynomial: for every coherent $\mathcal G$ on $X$ there is a unique $P_{\mathcal G}\in\mathbb Q[t]$ with $P_{\mathcal G}(m)=\chi(X,\mathcal G(m))$ for every $m\in\mathbb Z$; there is $m_0$ with $P_{\mathcal G}(m)=h_{\mathcal G}(m)=\dim_kH^0(X,\mathcal G(m))$ for all $m\ge m_0$; and $P_{\mathcal G}=0$ when $\mathcal G=0$. ([[thm-hilbert-polynomial-coherent-sheaf]], [[def-hilbert-function-sheaf-projective]], [[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]])

[F2] Support and dimension: for a coherent $\mathcal G$ on $X$ the support $\operatorname{Supp}\mathcal G$ is closed in $X$ ([[def-support-module-sheaf]]), and $X$ is a Noetherian topological space whose closed subsets have a well-defined chain dimension with $\dim\varnothing=-\infty$, so $\operatorname{Supp}\mathcal G$ has a nonnegative dimension when $\mathcal G\ne0$. The charts of $\mathbb P^n_k$ are spectra of the Noetherian rings $k[x^{(i)}_\ell]$ ([[def-relative-projective-space-standard-charts]], [[lem-field-is-noetherian]], [[cor-finite-variable-polynomial-ring-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]], [[def-noetherian-topological-space]], [[lem-noetherian-subspaces-and-compact-opens]], [[def-dimension-noetherian-topological-space]])

[F3] Additivity of $\chi$ in short exact sequences of coherent modules on the proper $k$-scheme $X$ ([[lem-euler-characteristic-additive-short-exact]], [[def-exact-sequence-sheaves]]).

[F4] The hyperplane lemma: if $k$ is **infinite** and $\mathcal G\ne0$ is coherent with $d:=\dim\operatorname{Supp}\mathcal G$, there is a linear form $\ell$ such that for every $m$ the map $\cdot\ell:\mathcal G(m-1)\to\mathcal G(m)$ is injective with coherent cokernel $\mathcal G'(m)$ satisfying $\operatorname{Supp}\mathcal G'(m)=\operatorname{Supp}\mathcal G\cap V(\ell)$; if $d\ge1$ then $\dim\operatorname{Supp}\mathcal G'(m)=d-1$ for every $m$, and if $d=0$ then $\mathcal G'(m)=0$ for every $m$. ([[lem-serre-vanishing-induction-hyperplane]])

[F5] Exactness and the fixed cokernel: tensoring by the invertible sheaf $\mathcal O_X(1)$ is exact, twists of coherent modules are coherent, and for the sheaves of [F4] the twist of the exact sequence $0\to\mathcal G(-1)\to\mathcal G\to\mathcal G'(0)\to0$ by $\mathcal O_X(1)^{\otimes m}$ is canonically $0\to\mathcal G(m-1)\to\mathcal G(m)\to\mathcal G'(m)\to0$, so that $\mathcal G'(m)\cong\mathcal G'(0)\otimes\mathcal O_X(1)^{\otimes m}$ and $\chi(X,\mathcal G(m))-\chi(X,\mathcal G(m-1))=\chi(X,\mathcal G'(0)(m))$ by [F3]. ([[def-invertible-sheaf]], [[def-sheaf-tensor-product]], [[lem-stalk-tensor-product]], [[cor-free-modules-are-projective-and-flat]], [[thm-exactness-of-sheaves-stalkwise]], [[def-twist-quasi-coherent-sheaf-projective]])

[F6] Positive sections at large twists: let $k$ be any field and $\mathcal G\ne0$ coherent on $X$. The pushforward $i_*\mathcal G$ is a nonzero coherent module on the locally Noetherian $\mathbb P^n_k$, and $\mathcal O(1)$ is ample on $\mathbb P^n_k$ because the identity is a closed immersion over the affine base $\operatorname{Spec}k$ pulling $\mathcal O(1)$ back to itself. Hence [[lem-eventual-global-generation-coherent-twists]] gives $m_1$ with $(i_*\mathcal G)(m)$ globally generated ([[def-globally-generated-sheaf]]) for every $m\ge m_1$; such a nonzero globally generated module has a nonzero global section, because it is the image of a direct sum of copies of $\mathcal O$ indexed by its global sections and hence is zero if all of them vanish. Finally $H^0(\mathbb P^n_k,(i_*\mathcal G)(m))\cong H^0(\mathbb P^n_k,i_*(\mathcal G(m)))\cong H^0(X,\mathcal G(m))$ for every $m\ge0$, using the projection identity $i_*(\mathcal G\otimes i^*\mathcal H)\cong(i_*\mathcal G)\otimes\mathcal H$ of a closed immersion (checked on affine charts) and the invariance of cohomology under $i_*$. Consequently there exist arbitrarily large $m$ with $h_{\mathcal G}(m)>0$. ([[lem-closed-immersion-cohomology-pushforward]], [[lem-closed-immersion-affine-quotient-and-base-change]], [[def-direct-image-sheaf]], [[def-ample-invertible-sheaf]], [[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]], [[def-relative-projective-space-standard-charts]], [[def-coherent-module-scheme]], [[def-sheaf-cohomology-derived-global-sections]])

[F7] Base change to an infinite field: for a field extension $K/k$ with base change $g:X_K\to X$ and $\mathcal G_K=g^*\mathcal G$, one has $\dim\operatorname{Supp}\mathcal G_K=\dim\operatorname{Supp}\mathcal G$ for every coherent $\mathcal G$ ([[lem-support-dimension-preserved-field-extension]]) and $\chi(X_K,\mathcal H_K)=\chi(X,\mathcal H)$ for every coherent $\mathcal H$ ([[lem-proper-cohomology-field-extension]]); moreover pullback of quasi-coherent modules is monoidal and $g^*\mathcal O_X(1)\cong\mathcal O_{X_K}(1)$, so $g^*(\mathcal H(m))\cong\mathcal H_K(m)$ for every $m\in\mathbb Z$, exactly as in the base-change step of [[thm-hilbert-polynomial-coherent-sheaf]] (where the compatibility of the twisting sheaf with base change and the monoidality of pullback are likewise recorded as proof obligations). The rational function field $K=k(t)$ is an infinite field extension of $k$ ([[cor-rational-function-field-as-a-fraction-field]], [[def-field-of-fractions]], [[lem-pullback-qc-module-quasi-coherent]], [[thm-associativity-of-balanced-tensor-products]], [[def-pullback-module-ringed-spaces]])

[F8] Finite differences of polynomials: for $Q\in\mathbb Q[t]$ of degree $e\ge0$ with leading coefficient $a\ne0$ and $R\in\mathbb Q[t]$ with $R(m)-R(m-1)=Q(m)$ for all $m$, the polynomial $R$ has degree $e+1$ with leading coefficient $a/(e+1)$; if $R\ne0$ has degree $f\ge1$ then $R(m)-R(m-1)$ has degree $f-1$ and leading coefficient $f$ times the leading coefficient of $R$, while if $R$ is constant then $R(m)-R(m-1)=0$. Consequently a polynomial identity $R(m)-R(m-1)=Q(m)$ with $Q$ of exact degree $e\ge0$ forces $\deg R=e+1$. [algebra]

[F9] The Axiom of Choice is the choice principle named in the statement, inherited from the suppliers cited in [F1], [F4], [F6] and [F7]. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: after a base change to an infinite field, induct on the dimension of the support using the regular-hyperplane sequence, whose cokernel has support of dimension one less; the finite-difference operator turns the polynomial identity $P_{\mathcal G}(m)-P_{\mathcal G}(m-1)=P_{\mathcal G'}(m)$ into a degree computation, with the degree-zero case settled by exhibiting a positive value of the constant polynomial through global generation at a large twist.

1.1 Setup and the zero sheaf. By [F1] the polynomial $P_{\mathcal F}$ exists and is unique for every coherent $\mathcal F$, and by [F2] the dimension of $\operatorname{Supp}\mathcal F$ is defined, with $\dim\varnothing=-\infty$. If $\mathcal F=0$ then $P_{\mathcal F}=0$ and $\operatorname{Supp}\mathcal F=\varnothing$, so both sides of $\deg P_{\mathcal F}=\dim\operatorname{Supp}\mathcal F$ are $-\infty$ by the conventions of the statement. Assume henceforth that $\mathcal F\ne0$ and, until 1.5, that $k$ is infinite. [F1, F2]

1.2 The induction claim. For $d\ge0$ let $\Psi(d)$ be: every nonzero coherent $\mathcal G$ on $X$ with $\dim\operatorname{Supp}\mathcal G=d$ satisfies $\deg P_{\mathcal G}=d$. We prove $\Psi(d)$ for all $d$ by induction; the required dimensions are finite for the following additional reason. Each support intersects a standard projective chart in a closed subset of $\operatorname{Spec}k[t_1,\ldots,t_n]$. By [[thm-irreducible-closed-subsets-and-prime-ideals]], its irreducible closed chains correspond to prime chains in that polynomial ring, whose lengths are at most $n$ by [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]. By [[lem-chain-dimension-open-cover]], dimension of the support is the maximum of these chart dimensions, hence lies in $\{0,\ldots,n\}$ for nonzero modules. This is the finite-dimensionality needed for induction, beyond Noetherianity in [F2]. [F2, algebra]

1.3 Base case $d=0$. Let $\mathcal G\ne0$ be coherent with $\dim\operatorname{Supp}\mathcal G=0$. By [F4] there is $\ell$ with cokernel $\mathcal G'(m)=0$ for every $m$; then $\mathcal G(m-1)\to\mathcal G(m)$ is an isomorphism for every $m$, so [F5] and [F3] give $P_{\mathcal G}(m)-P_{\mathcal G}(m-1)=\chi(X,\mathcal G'(0)(m))=0$ for every $m$, and $P_{\mathcal G}$ is constant by [F8]. By [F6] choose $m_1$ with $h_{\mathcal G}(m_1)>0$ and, using [F1], enlarge $m_1$ if necessary so that also $P_{\mathcal G}(m_1)=h_{\mathcal G}(m_1)$; then $P_{\mathcal G}$ is the nonzero constant $h_{\mathcal G}(m_1)>0$, so $\deg P_{\mathcal G}=0$. [F1, F3, F4, F5, F6, F8]

1.4 Induction step $d\ge1$. Let $\mathcal G\ne0$ be coherent with $d=\dim\operatorname{Supp}\mathcal G\ge1$. Apply [F4] to obtain $\ell$, and put $\mathcal G'=\mathcal G'(0)$, the cokernel of $\cdot\ell:\mathcal G(-1)\to\mathcal G(0)$; by [F4] the module $\mathcal G'$ is coherent, $\operatorname{Supp}\mathcal G'=\operatorname{Supp}\mathcal G\cap V(\ell)$ and $\dim\operatorname{Supp}\mathcal G'=d-1\ge0$, so $\mathcal G'\ne0$ and the induction hypothesis $\Psi(d-1)$ gives $\deg P_{\mathcal G'}=d-1$, in particular $P_{\mathcal G'}$ is nonzero of exact degree $d-1\ge0$. By [F5] and [F3], for every $m$, $$P_{\mathcal G}(m)-P_{\mathcal G}(m-1)=\chi(X,\mathcal G(m))-\chi(X,\mathcal G(m-1))=\chi(X,\mathcal G'(0)(m))=P_{\mathcal G'}(m).$$ By [F8] applied to this identity with $Q=P_{\mathcal G'}$ of exact degree $d-1$, the polynomial $P_{\mathcal G}$ has degree $(d-1)+1=d$; hence $\Psi(d)$ holds. [F3, F4, F5, F8]

1.5 Conclusion for infinite $k$. By 1.2-1.4 every nonzero coherent $\mathcal G$ on $X$ satisfies $\deg P_{\mathcal G}=\dim\operatorname{Supp}\mathcal G$, and with 1.1 the identity also holds for $\mathcal G=0$ in the extended conventions. This proves the theorem when $k$ is infinite. [1.1, 1.2, 1.3, 1.4]

1.6 Arbitrary base field. Let $k$ be arbitrary and let $K=k(t)$, an infinite field extension of $k$ by [F7]; put $X_K=X\times_{\operatorname{Spec}k}\operatorname{Spec}K$ with projection $g$ and $\mathcal F_K=g^*\mathcal F$. By [F7] the module $\mathcal F_K$ is the pullback of a coherent module and $\dim\operatorname{Supp}\mathcal F_K=\dim\operatorname{Supp}\mathcal F\ge0$, so $\mathcal F_K\ne0$ and steps 1.1-1.5 applied to the projective pair $X_K/K$ with the coherent module $\mathcal F_K$ give $\deg P_{\mathcal F_K}=\dim\operatorname{Supp}\mathcal F_K$. For every $m\in\mathbb Z$, [F7] applied to the coherent module $\mathcal F(m)$ gives $P_{\mathcal F_K}(m)=\chi(X_K,\mathcal F_K(m))=\chi(X_K,(\mathcal F(m))_K)=\chi(X,\mathcal F(m))=P_{\mathcal F}(m)$, so $P_{\mathcal F_K}=P_{\mathcal F}$ as polynomials; hence $\deg P_{\mathcal F}=\deg P_{\mathcal F_K}=\dim\operatorname{Supp}\mathcal F_K=\dim\operatorname{Supp}\mathcal F$. [F7, 1.5]

2.1 Boundaries and choice. The empty scheme $X=\varnothing$ forces $\mathcal F=0$ and is covered by 1.1 with both sides $-\infty$; the zero sheaf is the case $\mathcal F=0$; the case $n=0$ has $X$ either empty or $\operatorname{Spec}k$, and all steps apply with the single chart. The base case $d=0$ includes nonzero sheaves of finite nonempty support, and the induction step covers every $d\ge1$; the finite base field is reduced to the infinite field $k(t)$ in 1.6, and no positivity of $\mathcal F$ beyond nonzero is used. The Axiom of Choice is consumed exactly through the Hilbert polynomial theorem and its suppliers [F1], the hyperplane lemma [F4], the global-generation route to a positive $h^0$ [F6] and the base-change comparison [F7]; the field $k(t)$ is constructed, not selected. [F1, F4, F6, F7, F9, 1.1, 1.6] ∎
