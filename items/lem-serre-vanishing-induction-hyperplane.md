---
id: lem-serre-vanishing-induction-hyperplane
kind: lemma
title: "Regular hyperplane step for coherent support induction"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-local-ring
  - def-vector-space
  - def-linear-combination-and-span
  - def-linear-independence
  - lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - def-relative-projective-space-standard-charts
  - def-standard-open-proj
  - def-twisting-sheaf-proj
  - def-associated-sheaf-graded-module-proj
  - lem-standard-opens-proj-affine
  - lem-proj-associated-sheaf-basic-sections
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-projective-space-as-proj
  - def-closed-immersion-schemes
  - def-invertible-sheaf
  - def-section-zero-scheme-invertible-sheaf
  - def-pullback-module-ringed-spaces
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - def-quasi-coherent-module-scheme
  - def-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-kernel-cokernel-image-sheaves
  - thm-kernels-cokernels-qc-modules
  - thm-affine-quasi-coherent-equivalence
  - lem-tensor-qc-modules-quasi-coherent
  - lem-pullback-qc-module-quasi-coherent
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - thm-localisation-of-modules-is-exact
  - thm-exactness-of-sheaves-stalkwise
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-stalk-localization
  - def-support-module-sheaf
  - thm-support-and-annihilator-of-a-finite-module
  - thm-nakayama-lemma
  - def-associated-prime-of-a-module
  - lem-associated-prime-localises-forward
  - lem-associated-prime-localises-reverse-finite
  - thm-finiteness-of-associated-primes
  - lem-zero-divisor-annihilator-contained-in-associated-prime
  - thm-minimal-support-primes-are-associated
  - cor-support-is-union-of-closures-of-associated-primes
  - thm-irreducible-components-and-minimal-primes
  - thm-prime-spectrum-of-a-quotient-bijection
  - def-dimension-noetherian-topological-space
  - def-noetherian-topological-space
  - lem-noetherian-subspaces-and-compact-opens
  - lem-chain-dimension-open-cover
  - lem-dimension-finite-union-components
  - def-krull-dimension-of-a-ring
  - def-prime-spectrum-and-vanishing-sets
  - def-generic-point-irreducible-closed-subset
  - def-irreducible-topological-space-and-subset
  - def-irreducible-component-of-a-topological-space
  - thm-spectrum-sober
  - thm-affine-domain-dimension-transcendence-degree
  - lem-integral-finite-type-scheme-function-field
  - cor-minimal-prime-over-a-nonzerodivisor-has-height-one
  - cor-height-plus-quotient-dimension-affine-domain
  - cor-dimension-of-a-quotient-as-chains-above-an-ideal
  - def-integral-scheme
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-locally-noetherian-and-noetherian-scheme
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-closed-immersion-proper
  - thm-projective-morphism-proper
  - def-affine-scheme-spectrum
  - thm-global-sections-affine-scheme
  - thm-global-functions-proper-integral-variety
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Robin Hartshorne, Algebraic Geometry, Chapter III, Section 5 (hyperplane induction in the proofs of Serre's vanishing and finiteness theorems)"
      url: https://doi.org/10.1007/978-1-4757-3849-0
---

## Statement

Assume the Axiom of Choice, inherited from the associated-sheaf, closed-immersion
and dimensional machinery below ([[def-axiom-of-choice]]). Let $k$ be an
**infinite** field, let $n\ge0$, and let
$$i:X\hookrightarrow\mathbb P^n_k$$
be a fixed closed immersion ([[def-closed-immersion-schemes]]). Put
$\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$, an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]), and for an
$\mathcal O_X$-module $\mathcal F$ and $m\in\mathbb Z$ let
$$\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$$
be the twist ([[def-twist-quasi-coherent-sheaf-projective]]). Let $\mathcal F$
be a nonzero coherent $\mathcal O_X$-module ([[def-coherent-module-scheme]]).
Write $Z(\ell)$ for the zero scheme of a global section $\ell$ of an invertible
sheaf and $V(\ell)$ for its underlying closed set
([[def-section-zero-scheme-invertible-sheaf]]). Call a point $x\in X$
**associated to $\mathcal F$** when the maximal ideal $\mathfrak m_x$ of the
local ring $\mathcal O_{X,x}$ ([[def-local-ring]]) belongs to
$\operatorname{Ass}_{\mathcal O_{X,x}}(\mathcal F_x)$
([[def-associated-prime-of-a-module]]).

Then: for the $k$-linear combinations
$$\ell=c_0x_0+\cdots+c_nx_n,\qquad c_j\in k,$$
regarded as global sections of $\mathcal O_{\mathbb P^n_k}(1)$ and restricted to
$X$, there is one such $\ell$ with $\ell(x)\neq0$ at every point $x$ of $X$
associated to $\mathcal F$; for this $\ell$ and every $m\in\mathbb Z$ the
multiplication map
$$\cdot\,\ell:\mathcal F(m-1)\longrightarrow\mathcal F(m)$$
is injective, its cokernel $\mathcal G(m)$ is coherent, and
$$\operatorname{Supp}\mathcal G(m)=\operatorname{Supp}\mathcal F\cap V(\ell).$$
If $d:=\dim\operatorname{Supp}\mathcal F\ge1$
([[def-dimension-noetherian-topological-space]]) then
$$\dim\operatorname{Supp}\mathcal G(m)=d-1$$
for every $m$; if $d=0$ then $\mathcal F$ has finite support, the chosen $\ell$
is invertible at every point of $\operatorname{Supp}\mathcal F$ and
$\mathcal G(m)=0$. The zero sheaf is excluded by hypothesis; the empty scheme
$X=\varnothing$ forces $\mathcal F=0$ and is therefore excluded as well; the
case $n=0$ is included.

## Facts & Assumptions
**Given:** An infinite field $k$, an integer $n\ge0$, a closed immersion $i:X\hookrightarrow\mathbb P^n_k$, the invertible sheaf $L=\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_k}(1)$, and a nonzero coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Projective space: with $S=k[x_0,\dots,x_n]$ standard graded,
$\mathbb P^n_k\cong\operatorname{Proj}S$ with standard charts $D_+(x_i)$, the
charts $D_+(f)$ for homogeneous $f\in S_+$ of positive degree are affine with
coordinate ring $S_{(f)}=(S[f^{-1}])_0$, and the standard charts cover
$\mathbb P^n_k$; the twisting sheaf is $\mathcal O_{\mathbb P^n}(d)=
\widetilde{S(d)}$ with $\Gamma(D_+(f),\mathcal O_{\mathbb P^n}(d))=S(d)_{(f)}$,
restriction induced by homogeneous localisation; for the standard positive
grading $\mathcal O_{\mathbb P^n}(1)$ is invertible, and on the affine chart
$D_+(x_j)$ the degree-one element $x_j$ generates $S(1)_{(x_j)}=x_jS_{(x_j)}$
freely, so its image is a basis. ([[thm-projective-space-as-proj]],
[[def-relative-projective-space-standard-charts]], [[def-standard-open-proj]],
[[lem-standard-opens-proj-affine]], [[def-twisting-sheaf-proj]],
[[def-associated-sheaf-graded-module-proj]],
[[lem-proj-associated-sheaf-basic-sections]],
[[thm-twisting-sheaf-invertible-standard-graded]])

[F2] Pullback and twists: for a closed immersion $i$ the pullback
$i^*\mathcal O_{\mathbb P^n}(1)$ is invertible (locally the pullback of a free
rank-one module is free of rank one), the twist
$\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}L^m$ is defined for all
$m\in\mathbb Z$ with canonical isomorphisms
$\mathcal F(m-1)\otimes_{\mathcal O_X}L\cong\mathcal F(m)$; pullback and tensor
products of quasi-coherent modules are quasi-coherent; and $X\to
\operatorname{Spec}k$, being a closed immersion into $\mathbb P^n_k$ followed
by the structure morphism, is projective, hence proper and of finite type.
([[def-invertible-sheaf]], [[def-pullback-module-ringed-spaces]],
[[def-sheaf-tensor-product]], [[def-twist-quasi-coherent-sheaf-projective]],
[[lem-pullback-qc-module-quasi-coherent]],
[[lem-tensor-qc-modules-quasi-coherent]]). The quotient of the polynomial ring
$k[x_0,\dots,x_n]$ presenting any affine chart is Noetherian, so $X$ is a
Noetherian scheme. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]], [[thm-projective-morphism-proper]],
[[lem-closed-immersion-proper]])

[F3] Quasi-coherent and coherent modules: a coherent module is
quasi-coherent of finite type, quasi-coherent is affine-local
($\mathcal F|_U\cong\widetilde M$ for an $A$-module $M$ on
$U=\operatorname{Spec}A$, and finite type means $M$ finitely generated for
some/every such presentation); kernels, images and cokernels of morphisms of
quasi-coherent modules are quasi-coherent, with
$\operatorname{coker}(\varphi|_U)\cong\widetilde{\operatorname{coker}u}$ for
$\varphi|_U:\widetilde M\to\widetilde N$ corresponding to $u:M\to N$; over a
Noetherian ring every submodule of a finitely generated module is finitely
generated; localisation of modules is exact; and a morphism of sheaves is
injective iff all its stalk maps are. On a locally Noetherian scheme coherence
is local on $X$, and a finite-type quasi-coherent module $\widetilde N$ with
$N$ finitely generated over a Noetherian ring $A$ is coherent, because for any
$\psi:A^r\to N$ the kernel $\ker\psi\subseteq A^r$ is a submodule of a finitely
generated module over a Noetherian ring and hence finitely generated, and
kernels of morphisms of associated sheaves are associated to kernels.
([[def-quasi-coherent-module-scheme]], [[def-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[thm-kernels-cokernels-qc-modules]], [[thm-affine-quasi-coherent-equivalence]],
[[lem-finite-modules-over-noetherian-rings-are-noetherian]],
[[thm-localisation-of-modules-is-exact]],
[[thm-exactness-of-sheaves-stalkwise]],
[[def-kernel-cokernel-image-sheaves]])

[F4] Supports and stalks: $\operatorname{Supp}\mathcal F=\{x:\mathcal F_x\neq0\}$
is closed, $\operatorname{Supp}(\widetilde M)=V(\operatorname{Ann}_AM)=\{\mathfrak p:
\operatorname{Ann}_AM\subseteq\mathfrak p\}$ for a finitely generated module $M$
over a Noetherian ring $A$, and the stalk of $\widetilde M$ at a prime is
$M_{\mathfrak p}$. ([[def-support-module-sheaf]],
[[thm-support-and-annihilator-of-a-finite-module]],
[[lem-associated-sheaf-stalk-localization]],
[[def-associated-sheaf-module-affine-scheme]])

[F5] Nakayama: for a finitely generated module $M$ over a local ring
$(R,\mathfrak m)$ with $\mathfrak mM=M$ one has $M=0$
([[thm-nakayama-lemma]]).

[F6] Associated primes: over a Noetherian ring the associated primes of a
finitely generated module are finite; localisation commutes with taking
associated primes in both directions
($\mathfrak p\in\operatorname{Ass}_A(M)$ with $\mathfrak p\cap S=\varnothing$
gives $S^{-1}\mathfrak p\in\operatorname{Ass}_{S^{-1}A}(S^{-1}M)$, and every
associated prime of $S^{-1}M$ is of this form); if $x$ is a zero divisor on
$M$ then $x$ lies in some associated prime; the minimal primes of the support
are associated, and
$\operatorname{Supp}_A(M)=\bigcup_{\mathfrak p\in\operatorname{Ass}_A(M)}V(\mathfrak p)$;
irreducible components of $\operatorname{Spec}R$ correspond to minimal primes
of $R$, and $V(I)\subseteq\operatorname{Spec}R$ is homeomorphic to
$\operatorname{Spec}(R/I)$; Dependent Choice is available as a consequence of
the Axiom of Choice. ([[def-associated-prime-of-a-module]],
[[lem-associated-prime-localises-forward]],
[[lem-associated-prime-localises-reverse-finite]],
[[thm-finiteness-of-associated-primes]],
[[lem-zero-divisor-annihilator-contained-in-associated-prime]],
[[thm-minimal-support-primes-are-associated]],
[[cor-support-is-union-of-closures-of-associated-primes]],
[[thm-irreducible-components-and-minimal-primes]],
[[thm-prime-spectrum-of-a-quotient-bijection]],
[[def-dependent-choice]], [[def-axiom-of-choice]])

[F7] Dimension: for a Noetherian space $T$, $\dim T$ is the supremum of the
lengths of strict chains of nonempty irreducible closed subsets, with
$\dim\varnothing=-\infty$; for an open cover $\dim T=\sup_i\dim U_i$ and for a
finite closed cover $\dim T=\max_i\dim T_i$; closed subsets of Noetherian
spaces are Noetherian. For a Noetherian commutative ring $R\neq0$ the chain
dimension of $\operatorname{Spec}R$ equals the Krull dimension of $R$: by
sobriety every irreducible closed subset of $\operatorname{Spec}R$ is
$V(\mathfrak p)=\overline{\{\mathfrak p\}}$ for a unique prime $\mathfrak p$
([[def-generic-point-irreducible-closed-subset]]), and
$V(\mathfrak p)\subseteq V(\mathfrak q)$ iff $\mathfrak q\subseteq\mathfrak p$
([[def-prime-spectrum-and-vanishing-sets]]), so strict chains of irreducible
closed subsets correspond to strict chains of primes. For a finite-type
$k$-domain $A$ one has $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$;
for an integral finite-type $k$-scheme with generic point $\eta$ and nonempty
affine open $U=\operatorname{Spec}A$ one has
$\operatorname{Frac}(A)\cong\mathcal O_{Z,\eta}$. For a finite-type $k$-domain
$A$ of dimension $e$: any prime $\mathfrak p$ satisfies
$\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=e$; every prime minimal
over a nonzero principal ideal $(f)$ with $f\neq0$ has height $1$ (a domain
element is a nonzerodivisor); and for an ideal $I$ the Krull dimension of
$A/I$ (for $A/I\neq0$) is the supremum of lengths of strict chains of primes
of $A$ containing $I$. ([[def-dimension-noetherian-topological-space]],
[[def-noetherian-topological-space]], [[lem-noetherian-subspaces-and-compact-opens]],
[[lem-chain-dimension-open-cover]], [[lem-dimension-finite-union-components]],
[[def-krull-dimension-of-a-ring]], [[thm-spectrum-sober]],
[[def-irreducible-topological-space-and-subset]],
[[def-irreducible-component-of-a-topological-space]],
[[thm-affine-domain-dimension-transcendence-degree]],
[[lem-integral-finite-type-scheme-function-field]],
[[cor-minimal-prime-over-a-nonzerodivisor-has-height-one]],
[[cor-height-plus-quotient-dimension-affine-domain]],
[[cor-dimension-of-a-quotient-as-chains-above-an-ideal]])

[F8] Integral schemes and affine charts: an integral scheme is a nonempty
reduced irreducible scheme, equivalently every nonempty affine open is the
spectrum of a domain; a closed subscheme of an affine scheme
$\operatorname{Spec}R$ is $\operatorname{Spec}(R/J)$ for the corresponding
ideal (empty for $J=R$). ([[def-integral-scheme]],
[[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-closed-immersion-schemes]])

[F9] Properness versus affineness: every closed immersion is proper and every
projective morphism is proper. A nonempty proper integral finite-type
$k$-scheme has a finite field extension of $k$ as its ring of global functions.
If it were affine, it would be the spectrum of that field and hence have
dimension zero. ([[lem-closed-immersion-proper]],
[[thm-projective-morphism-proper]],
[[thm-global-functions-proper-integral-variety]],
[[thm-global-sections-affine-scheme]], [[def-affine-scheme-spectrum]])

[F10] Infinite fields: no finite family of proper linear subspaces of a
finite-dimensional vector space over an infinite field covers the space
([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]);
the linear span of finitely many vectors of a $k$-vector space is a
finite-dimensional subspace ([[def-vector-space]],
[[def-linear-combination-and-span]], [[def-linear-independence]]).

[F11] Zero scheme of a section: for an invertible sheaf $L$ and a global
section $s$, the zero scheme $Z(s)$ is closed with local model: on an affine
open $U=\operatorname{Spec}A$ trivialising $L$ with local equation $f\in A$,
one has $Z(s)\cap U=\operatorname{Spec}(A/(f))$, $V(s)\cap U=V(f)$; if $s$
vanishes nowhere then each local equation is a unit and $Z(s)=\varnothing$.
A different trivialisation replaces $f$ by a unit multiple, leaving $(f)$
unchanged. ([[def-section-zero-scheme-invertible-sheaf]])





## Proof

**Proof technique:** direct: choose a linear form avoiding the finitely many associated points of $\mathcal F$; check injectivity of multiplication on affine charts through the zero-divisor/associated-prime dictionary; identify the cokernel locally as $M/fM$ and read off coherence, support via Nakayama, and dimension via the principal ideal theorem on charts of the integral components of the support.

1.1 Each chart $X\cap D_+(x_j)$ is $\operatorname{Spec}$ of a quotient of the polynomial ring $k[x_0,\dots,x_n]$, hence has Noetherian coordinate ring; the finitely many charts cover $X$, so $X$ is a Noetherian scheme and every closed subscheme of $X$ has Noetherian underlying space. [F1, F2, F3, F7]

1.2 For every $j$ the element $x_j\in S(1)$ has compatible images $x_j/1$ in $S(1)_{(x_i)}$ for all $i$, so the restrictions glue along the standard affine cover to a global section $s_j\in\Gamma(\mathbb P^n_k,\mathcal O(1))$; pulling back along $i$ gives $s_j\in\Gamma(X,L)$. On $X\cap D_+(x_j)$ the section $s_j$ is a basis of $L$ (the localisation $S(1)_{(x_j)}=x_jS_{(x_j)}$ is free on $x_j$), so $s_j(x)\neq0$ for every point $x\in X\cap D_+(x_j)$; since the charts cover, for every $x\in X$ some $s_j$ has $s_j(x)\neq0$. [F1, F2]

1.3 Let $Z\subseteq X$ be an integral closed subscheme with $\dim Z=e\ge1$ on which $\ell$ does not vanish identically. Then $Z\cap V(\ell)\neq\varnothing$: otherwise $Z\subseteq\mathbb P^n_k\smallsetminus V(\ell)=D_+(\ell)$, which is an affine standard open of $\mathbb P^n_k$ by [F1]; as $Z$ is closed in $\mathbb P^n_k$ and contained in the affine scheme $D_+(\ell)$, it is a closed subscheme of an affine scheme and hence affine. But $Z\to\operatorname{Spec}k$ is also projective (closed immersion into $\mathbb P^n_k$), hence proper and of finite type by [F2] and [F9]. By [F9], its ring of global functions is a finite field extension $K/k$; affineness would identify $Z$ with $\operatorname{Spec}K$, which has only the zero prime and dimension zero, contradicting $\dim Z=e\ge1$. [F1, F2, F8, F9]

1.4 Let $Z$ be an integral finite-type $k$-scheme with generic point $\eta$ and a nonempty affine open $U=\operatorname{Spec}A$; then $A$ is a finite-type $k$-domain with $\operatorname{Frac}(A)\cong K(Z):=\mathcal O_{Z,\eta}$, and $\dim U=\dim A=\operatorname{trdeg}_kK(Z)$: the first equality holds because irreducible closed subsets of $\operatorname{Spec}A$ are the $V(\mathfrak p)=\overline{\{\mathfrak p\}}$ and inclusion reverses inclusion of primes, matching chains; the second is the affine-domain dimension theorem. Consequently every nonempty affine chart of $Z$ has the same dimension, and for $Z$ covered by its standard charts $Z\cap D_+(x_i)$ (each affine with finite-type coordinate ring) the open-cover formula gives $\dim Z=\max_i\dim(Z\cap D_+(x_i))=\operatorname{trdeg}_kK(Z)<\infty$. [F1, F7, F8]

1.5 Let $A$ be a finite-type $k$-domain of dimension $e\ge1$ and let $0\neq f\in A$ be a nonunit. Then $\dim(A/(f))=e-1$ and every irreducible component of $\operatorname{Spec}(A/(f))$ has dimension $e-1$: a prime $\mathfrak p$ minimal over $(f)$ has $\operatorname{ht}(\mathfrak p)=1$ (principal ideal theorem for a nonzerodivisor) and $\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=e$, so $\dim(A/\mathfrak p)=e-1$; the primes of $A/(f)$ correspond to primes of $A$ containing $(f)$, every chain of those begins at a minimal prime over $(f)$, and the quotient dimension is the supremum of the lengths of such chains, so it equals $\max_{\mathfrak p}\dim(A/\mathfrak p)=e-1$ and each component $V(\mathfrak p)$ has dimension $e-1$; in particular $\operatorname{Spec}(A/(f))\neq\varnothing$. [F7]

2.1 The twist $\mathcal F(m)=\mathcal F\otimes_{\mathcal O_X}L^m$ is quasi-coherent for every $m$; on an affine open $U=\operatorname{Spec}A$ contained in some $X\cap D_+(x_j)$ with $\mathcal F|_U\cong\widetilde M$, $M$ finitely generated, a trivialisation $\tau:L|_U\to\mathcal O_U$ (for instance the one sending $s_j$ to $1$) gives isomorphisms $\mathcal F(m)|_U\cong\widetilde M$ for every $m\in\mathbb Z$, corresponding to multiplication by units of $A$ on $M$. [F1, F2, F3, step 1.2]

2.2 Let $V_0\subseteq\Gamma(X,L)$ be the $k$-linear span of $s_0,\dots,s_n$, a finite-dimensional $k$-vector space with the finite generating set $\{s_0,\dots,s_n\}$. For each $x\in\mathrm{Ass}(\mathcal F)$ the subspace $W_x=\{u\in V_0:u(x)=0\}$ is proper, because some $s_j$ has $s_j(x)\neq0$ by 1.2. Since $\mathrm{Ass}(\mathcal F)$ is finite by 3.1 and $k$ is infinite, no finite union of the proper subspaces $W_x$ covers $V_0$; choose $\ell\in V_0$ with $\ell(x)\neq0$ for every $x\in\mathrm{Ass}(\mathcal F)$, equivalently $x\notin Z(\ell)$ for every associated point. [F10, F11, step 1.2, 3.1]

3.1 Define $\mathrm{Ass}(\mathcal F)=\{x\in X:\mathfrak m_x\in\operatorname{Ass}_{\mathcal O_{X,x}}(\mathcal F_x)\}$. For a chart $U=\operatorname{Spec}A$ as in 2.1 and a prime $\mathfrak p\in\operatorname{Spec}A$ corresponding to $x\in U$, one has $\mathfrak m_x=\mathfrak p A_{\mathfrak p}$, $\mathcal F_x=M_{\mathfrak p}$, and $\mathfrak p A_{\mathfrak p}\in\operatorname{Ass}_{A_{\mathfrak p}}(M_{\mathfrak p})$ iff $\mathfrak p\in\operatorname{Ass}_A(M)$: in the forward direction reverse localisation gives $\mathfrak q\in\operatorname{Ass}_A(M)$ with $\mathfrak q A_{\mathfrak p}=\mathfrak p A_{\mathfrak p}$, and contraction to $A$ gives $\mathfrak q=\mathfrak p$; the backward direction is localisation of an associated prime. Hence $\mathrm{Ass}(\mathcal F)\cap U$ corresponds to $\operatorname{Ass}_A(M)$ and is finite by the finiteness of associated primes; the finitely many charts give that $\mathrm{Ass}(\mathcal F)$ is finite. [F3, F4, F6, step 2.1]

3.2 Every irreducible component of $\operatorname{Supp}\mathcal F$ has its generic point in $\mathrm{Ass}(\mathcal F)$, and $\operatorname{Supp}\mathcal F=\bigcup_{x\in\mathrm{Ass}(\mathcal F)}\overline{\{x\}}$. Indeed on a chart $U$ the support is $V(\operatorname{Ann}_AM)$ and equals $\bigcup_{\mathfrak p\in\operatorname{Ass}_A(M)}V(\mathfrak p)$; the subspace $V(\operatorname{Ann}_AM)$ of $\operatorname{Spec}A$ is homeomorphic to $\operatorname{Spec}(A/\operatorname{Ann}_AM)$, whose irreducible components are the $V(\mathfrak p)$ for the minimal primes $\mathfrak p$ over $\operatorname{Ann}_AM$, and those are associated by the minimal-support-prime theorem. If $\eta$ is the generic point of a component of $\operatorname{Supp}\mathcal F$, choose a chart $U\ni\eta$; the corresponding prime of $A$ is minimal over $\operatorname{Ann}_AM$, hence associated, so $\eta\in\mathrm{Ass}(\mathcal F)$ by 3.1. [F4, F6, step 2.1, 3.1]

3.3 For $m\in\mathbb Z$ let $\mu_m:\mathcal F(m-1)\to\mathcal F(m)$ be the composite of $\mathrm{id}_{\mathcal F(m-1)}\otimes(\cdot\ell):\mathcal F(m-1)\otimes_{\mathcal O_X}\mathcal O_X\to\mathcal F(m-1)\otimes_{\mathcal O_X}L$ with the canonical isomorphism $\mathcal F(m-1)\otimes_{\mathcal O_X}L\cong\mathcal F(m)$ of [F2], and let $\mathcal G(m)=\operatorname{coker}\mu_m$ with $\operatorname{Supp}\mathcal G(m)=\{x:\mathcal G(m)_x\neq0\}$. On a chart $U=\operatorname{Spec}A$ as in 2.1 with trivialisation $\tau:L|_U\to\mathcal O_U$ and local equation $f=\tau(\ell|_U)\in A$, the map $\mu_m|_U$ corresponds to multiplication by $f$ on $\widetilde M$, and $V(\ell)\cap U=V(f)=\{\mathfrak p:f\in\mathfrak p\}$; replacing $\tau$ by a unit multiple of $\tau$ replaces $f$ by a unit multiple, which changes neither the kernel, the cokernel nor $V(f)$. [F2, F3, F11, step 2.1]

3.4 $\mathcal G(m)=\operatorname{coker}\mu_m$ is quasi-coherent, and on each chart $U=\operatorname{Spec}A$ as in 2.1 one has $\mathcal G(m)|_U\cong\widetilde{M/fM}$, the associated sheaf of the finitely generated module $M/fM$; hence $\mathcal G(m)$ is of finite type. [F2, F3, step 2.1, 3.3]

3.5 The local equation $f$ of 3.3 is a nonzerodivisor on $M$. Suppose $fm=0$ with $0\neq m\in M$: then $f$ is a zero divisor on $M$, so $f\in\mathfrak q$ for some associated prime $\mathfrak q\in\operatorname{Ass}_A(M)$ by [F6]. The corresponding point $\mathfrak p'\in U$ lies in $\mathrm{Ass}(\mathcal F)$ by 3.1, while $f\in\mathfrak q$ means $\ell(\mathfrak p')=0$ by 3.3, contradicting 2.2. Hence no such $m$ exists, and since localisation is exact $f$ is also a nonzerodivisor on every $M_{\mathfrak p}$. [F3, F6, step 2.1, 3.1, 2.2, 3.3]

4.1 Hence $\mu_m$ is injective for every $m$: on each chart $\mu_m$ corresponds to multiplication by the nonzerodivisor $f$ (up to a unit) and therefore has zero kernel, and injectivity of a morphism of sheaves is checked on stalks. [F3, step 3.3, 3.5]

4.2 $\mathcal G(m)$ is coherent. Coherence is local on $X$, so it suffices to verify the defining kernel condition on the affine charts $U=\operatorname{Spec}A$ of 3.4, over which $\mathcal G(m)|_U\cong\widetilde N$ with $N=M/fM$ finitely generated over the Noetherian ring $A$. Given a morphism $\varphi:\mathcal O_U^r\to\widetilde N$, corresponding under the affine equivalence to an $A$-linear map $\psi:A^r\to N$, one has $\ker\varphi\cong\widetilde{\ker\psi}$ with $\ker\psi$ a submodule of $A^r$; as $A^r$ is a finitely generated module over a Noetherian ring, $\ker\psi$ is finitely generated, so $\ker\varphi$ is of finite type, as required. [F3, step 3.4]

4.3 $\operatorname{Supp}\mathcal G(m)=\operatorname{Supp}\mathcal F\cap V(\ell)$. On a chart $U=\operatorname{Spec}A$ as in 2.1 the stalk of $\mathcal G(m)$ at $\mathfrak p$ is $(M/fM)_{\mathfrak p}=M_{\mathfrak p}/fM_{\mathfrak p}$: it vanishes when $M_{\mathfrak p}=0$; it vanishes when $f\notin\mathfrak p$, since then $f$ is a unit of $A_{\mathfrak p}$ and $M_{\mathfrak p}=fM_{\mathfrak p}$; and it is nonzero when $M_{\mathfrak p}\neq0$ and $f\in\mathfrak p$, since $fM_{\mathfrak p}\subseteq\mathfrak p M_{\mathfrak p}$ and $M_{\mathfrak p}=fM_{\mathfrak p}$ would force $M_{\mathfrak p}=0$ by Nakayama applied over the local ring $A_{\mathfrak p}$. Thus the chartwise supports are $\operatorname{Supp}(M)\cap V(f)=\operatorname{Supp}\mathcal F\cap U\cap V(\ell)$, and covering $X$ by such charts proves the claim. [F4, F5, step 3.3, 3.4]

4.4 Suppose $\dim\operatorname{Supp}\mathcal F=0$. Then every irreducible component of the Noetherian space $\operatorname{Supp}\mathcal F$ is a single point, and that point is the generic point of the component, hence belongs to $\mathrm{Ass}(\mathcal F)$ by 3.2; by 2.2 the chosen $\ell$ satisfies $\ell(x)\neq0$ at every point $x\in\operatorname{Supp}\mathcal F$, so $\operatorname{Supp}\mathcal F\cap V(\ell)=\varnothing$, $\mathcal G(m)=0$ for every $m$ by 4.3, and $\ell$ is a unit at each point of $\operatorname{Supp}\mathcal F$ (its local equation is a unit), i.e. $\ell$ is invertible on $\operatorname{Supp}\mathcal F$. [step 3.2, 2.2, 4.3]

4.5 Let $Z\subseteq X$ be integral and closed with $\dim Z=e\ge1$ and $\ell$ not vanishing identically on $Z$; then $\dim(Z\cap V(\ell))=e-1$. Put $W=Z\cap V(\ell)$, nonempty by 1.3 and proper closed in $Z$ since $\ell$ does not vanish at the generic point of $Z$; any chain of length $\ge e$ of irreducible closed subsets of $W$, together with $Z$, would be a chain of length $\ge e+1$ in $Z$, so $\dim W\le e-1$. For the lower bound choose $z\in W$ and a nonempty affine chart $U=\operatorname{Spec}A$ of $Z$ containing $z$; by 1.4, $A$ is a finite-type $k$-domain of dimension $e$, and the local equation $f\in A$ of 3.3 is nonzero: if $f=0$ then the nonempty open $U$ of the irreducible space $Z$ would lie in the closed set $W$, forcing $Z=\overline U\subseteq W$ and $\ell\equiv0$ on $Z$; and $f$ is a nonunit because $z\in V(f)$ means $f$ lies in the prime of $A$ corresponding to $z$. Hence $U\cap W=V(f)=\operatorname{Spec}(A/(f))$ has dimension $e-1$ by 1.5, so $\dim W\ge e-1$ and therefore $\dim W=e-1$. [F7, F11, step 3.3, 1.3, 1.4, 1.5]

4.6 Let $Z_1,\dots,Z_r$ be the finitely many irreducible components of $\operatorname{Supp}\mathcal F$, equipped with their reduced induced structures, and put $e_j=\dim Z_j$, $d=\dim\operatorname{Supp}\mathcal F=\max_je_j$; each $Z_j$ is integral and projective over $k$, so $e_j=\operatorname{trdeg}_kK(Z_j)<\infty$ by 1.4. By 3.2 the generic point of $Z_j$ is associated, so $\ell$ does not vanish identically on $Z_j$ by 2.2. If $e_j\ge1$ then $\dim(Z_j\cap V(\ell))=e_j-1$ by 4.5, while if $e_j=0$ then $Z_j$ is a single point on which $\ell\neq0$, so $Z_j\cap V(\ell)=\varnothing$. Since $\operatorname{Supp}\mathcal G(m)=\bigcup_j(Z_j\cap V(\ell))$ by 4.3 is a finite union of closed subsets, $\dim\operatorname{Supp}\mathcal G(m)=\max_j\dim(Z_j\cap V(\ell))=\max_{j:e_j\ge1}(e_j-1)=d-1$ whenever $d\ge1$. [F7, step 3.2, 2.2, 4.3, 4.5]

5.1 Boundary and choice accounting. If $X=\varnothing$ then $\mathcal F=0$ is excluded by hypothesis, so $\operatorname{Supp}\mathcal F\neq\varnothing$ and $d\ge0$; if $d=0$ the conclusion is exactly 4.4, and if $d\ge1$ it is 4.6; the case $n=0$ is included: $\mathbb P^0_k=\operatorname{Spec}k$ has the single chart $D_+(x_0)$ with $s_0$ a basis of $L$ by 1.2, so for a nonzero coherent $\mathcal F$ on $X=\operatorname{Spec}k$ all hypotheses and steps apply verbatim. The Axiom of Choice is declared and used exactly through the inherited machinery: the finiteness of associated primes and the localisation dictionary [F6] (Dependent Choice is a consequence), and the associated-sheaf and affine-equivalence machinery [F3]; the choice of $\ell$ in 2.2 is a selection from a nonempty complement of a finite union of proper subspaces of a finite-dimensional $k$-vector space and uses only the infinitude of $k$; no further choice is made in 1.1, 1.2, 2.1, 3.3-4.3. [F3, F6, F10, step 4.4, 4.6] ∎
