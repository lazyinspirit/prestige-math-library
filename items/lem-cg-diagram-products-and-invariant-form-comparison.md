---
id: lem-cg-diagram-products-and-invariant-form-comparison
kind: lemma
title: "Disconnected diagrams, direct products, and comparison of invariant forms"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 6
deps: [def-cg-coxeter-diagram-components-and-finite-type, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-group, def-generated-subgroup, def-group-homomorphism, def-group-isomorphism-and-automorphism, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-internal-direct-product-of-subgroups, def-linear-combination-and-span, def-linear-subspace, def-internal-direct-sum, def-sum-of-linear-subspaces, def-linear-map, def-kernel-and-image-of-a-linear-map, def-linear-basis, def-dimension, def-bilinear-symmetric-skew-and-alternating-forms, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-definiteness-inertia-and-signature-data-over-the-reals, def-real-and-complex-inner-product-space, def-finite-sum, lem-finite-sum-laws, def-finite-cardinality, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Proposition 6.12.7 and Corollary 6.12.8 (printed pp. 118-119) and Lemma 6.12.2 (printed p. 115): an irreducible finite Coxeter system has an irreducible canonical representation whose invariant bilinear forms are proportional; Appendix C, opening of C.1 (printed p. 433): a decomposable cosine matrix is positive definite exactly when each indecomposable principal submatrix is; Theorem 6.12.9's proof of (iii) implies (ii) (printed p. 119), which averages an inner product over the finite group"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Proposition 5.14 and its proof, printed pp. 12-13: V is irreducible exactly when Gamma is connected, V is the direct sum of the representations of the components, and for finite W any invariant bilinear form is definite positive (via Lemmas 5.3 and 5.7)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set with Coxeter matrix $m$, presented group $W$ and length
function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), with diagram
$\Gamma$ ([[def-cg-coxeter-diagram-components-and-finite-type]]), and let
$V=\mathbb R^S$ carry the Coxeter form $B$ with canonical reflection
homomorphism $\rho:W\to\mathrm{GL}(V)$
([[def-cg-real-coxeter-form-and-reflection]],
[[def-cg-canonical-reflection-homomorphism]]). Let the connected components of $\Gamma$ have the nonempty pairwise disjoint vertex sets
$S_1,\dots,S_k$ of $S$; put $W_i:=W_{S_i}$ and
$V_i:=\mathrm{span}\{e_s:s\in S_i\}$. Allow $k=1$ when $\Gamma$ is connected and $k=0$ when $S=\emptyset$, with the empty product equal to the trivial group and the empty direct sum equal to $\{0\}$.

**(1) Direct product and length.** The subgroups $W_i$ commute elementwise,
$W_i\cap W_j=\{1\}$ for $i\ne j$, and the multiplication map
$\mu:W_1\times\cdots\times W_k\to W$, $\mu(w_1,\dots,w_k)=w_1\cdots w_k$, is an
isomorphism of groups ([[def-group-isomorphism-and-automorphism]],
[[def-external-direct-product-of-groups]]). Moreover
$\ell(w_1\cdots w_k)=\ell(w_1)+\cdots+\ell(w_k)$ for all $w_i\in W_i$, the
lengths on the right being those of the factors, which agree with the
restriction of $\ell$
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

**(2) Orthogonal decomposition.** $B(v_i,v_j)=0$ for all $v_i\in V_i$,
$v_j\in V_j$, $i\ne j$; hence $V=V_1\oplus\cdots\oplus V_k$ is a $B$-orthogonal
direct sum, each $\rho(W_i)$ preserves $V_i$ and fixes every $V_j$ ($j\ne i$)
pointwise, and with $B_i:=B|_{V_i\times V_i}$ the form is
$B=B_1\oplus\cdots\oplus B_k$.

**(3) Invariant forms.** Let $\beta$ be a symmetric bilinear form on $V$
invariant under $\rho(W)$, i.e. $\beta(\rho(w)u,\rho(w)v)=\beta(u,v)$ for all
$w\in W$ and $u,v\in V$.

(i) For every $s\in S$ one has $\beta(e_s,\cdot)=\lambda_s\,B(e_s,\cdot)$ with
$\lambda_s:=\beta(e_s,e_s)$; in particular $\beta(e_s,e_t)=\lambda_sB(e_s,e_t)$
for all $s,t\in S$.

(ii) $\lambda_s=\lambda_t$ whenever $s$ and $t$ lie in the same component of
$\Gamma$. Consequently there are $\lambda_1,\dots,\lambda_k\in\mathbb R$ with
$\beta|_{V_i\times V_i}=\lambda_iB_i$ for every $i$, that is,
$\beta=\lambda_1B_1\oplus\cdots\oplus\lambda_kB_k$; if $\Gamma$ is connected
then $\beta=\lambda B$ for a single $\lambda\in\mathbb R$.

(iii) If in addition $\beta$ is positive definite
([[def-definiteness-inertia-and-signature-data-over-the-reals]]), then
$\lambda_i=\beta(e_s,e_s)>0$ for every $i$ and every $s\in S_i$, and $B$ is
positive definite.

**(4) Finite groups have positive definite form.** If $W$ is finite then $B$ is
positive definite.

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, the presented group $W$ with length $\ell$, the diagram $\Gamma$ with components $S_1,\dots,S_k$, the space $V=\mathbb R^S$ with the Coxeter form $B$ and the canonical reflection homomorphism $\rho$; and, when a form $\beta$ is mentioned, a symmetric bilinear form $\beta$ invariant under $\rho(W)$.

[F1] The relators of the presentation are $s^2$ ($s\in S$) and $(st)^{m(s,t)}$ ($s\ne t$, $m(s,t)<\infty$); every map $S\to G$ into a group sending these relators to $1$ extends uniquely to a homomorphism $W\to G$. For $J\subseteq S$, $W_J=\langle J\rangle$ is the group presented by the restricted matrix $m|_{J\times J}$ under the canonical map, and $W_J=\{w:S(w)\subseteq J\}$, where $S(w)\subseteq J$ means that $w$ has a reduced expression with all letters in $J$; hence $W_I\cap W_J=W_{I\cap J}$ and $W_\emptyset=\{1\}$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F2] The components of $\Gamma$ partition $S$ and are connected; distinct components are joined by no edge, so for $s\in S_i$, $t\in S_j$ with $i\ne j$ one has $m(s,t)=2$, and within a component two vertices are joined exactly when $m(s,t)\ge3$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F3] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$, while $B(e_s,e_t)=-1$ when $m(s,t)=\infty$; also $\cos(\pi/2)=0$, and $\cos(\pi/m)>0$ for finite $m\ge3$ by strict decrease of cosine on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]). For $a\in V$ with $B(a,a)\ne0$ the reflection $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ is linear, $r_a^2=\mathrm{id}_V$, $r_a(a)=-a$, $\ker B(-,a)$ is a hyperplane fixed pointwise by $r_a$, and $B(r_au,r_aw)=B(u,w)$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F4] $\rho:W\to\mathrm{GL}(V)$ is a group homomorphism with $\rho(s)=r_{e_s}$ for every $s\in S$, and $B(\rho(w)u,\rho(w)w')=B(u,w')$ for all $w\in W$ ([[def-cg-canonical-reflection-homomorphism]], [[lem-cg-reflection-representation-descends-and-root-norms]]).

[F5] The external direct product $W_1\times\cdots\times W_k$ is a group under componentwise operations; a homomorphism on each factor with pairwise commuting images defines a homomorphism of the product, and a bijective homomorphism is an isomorphism. For $J\subseteq S$, the finite words in $J$ form a subgroup (inverses reverse words because $s^{-1}=s$) containing $J$ and contained in every subgroup containing $J$; thus they constitute $W_J$ ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[def-group-homomorphism]], [[def-group-isomorphism-and-automorphism]], [[def-generated-subgroup]], [[def-group]], [[def-internal-direct-product-of-subgroups]]).

[F6] The $e_s$ $(s\in S)$ form a basis of $V$, so every $v\in V$ is a unique finite linear combination $\sum_sv(s)e_s$; the span of a subset and a subspace are the published notions; the sum $V_1+\cdots+V_k$ of subspaces is direct when every vector has a unique decomposition, and a bilinear form on a direct sum is the orthogonal sum of its restrictions when the summands are pairwise orthogonal for it; a linear map with a nonzero functional $B(-,a)$ has kernel $\{v:B(v,a)=0\}$ ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-linear-subspace]], [[def-internal-direct-sum]], [[def-sum-of-linear-subspaces]], [[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]], [[def-dimension]], [[def-bilinear-symmetric-skew-and-alternating-forms]], [[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]).

[F7] A symmetric bilinear form is positive definite when its quadratic form is $>0$ on every nonzero vector; a positive multiple of a positive definite form is positive definite, as is its restriction to a subspace ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F8] The standard inner product $\beta_0(u,v)=\sum_{s\in S}u(s)v(s)$ is a symmetric positive definite bilinear form on $V$, every $u\ne0$ has $\beta_0(u,u)>0$, finite sums may be reindexed by a bijection of the finite index set (enumerate that set; adjacent swaps preserve the sum by associativity and commutativity, and every finite permutation is obtained by such swaps), and a finite set has a cardinality ([[def-real-and-complex-inner-product-space]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct; universal properties for the group statements and a proportionality argument for the forms.

1.1 (Commuting factors and trivial intersections.) If $S=\emptyset$, all four clauses hold: $W=\{1\}$, $V=\{0\}$, the product and sums are empty, and positive definiteness is vacuous. Hence assume $S\ne\emptyset$ for the remaining argument. Let $s\in S_i$, $t\in S_j$ with $i\ne j$; by [F2] $m(s,t)=2$, so $(st)^2$ is a relator and $st=ts$ in $W$ by [F1]; since the $s\in S_i$ generate $W_i$ [F1, F5], the subgroups $W_i,W_j$ commute elementwise. For the intersection, $W_i\cap W_j=W_{S_i}\cap W_{S_j}=W_{S_i\cap S_j}=W_\emptyset=\{1\}$ by the support description of [F1], because $S_i\cap S_j=\emptyset$ [F2]. [F1, F2, F5, algebra]

1.2 (Orthogonal decomposition.) For $s\in S_i$ and $t\in S_j$ with $i\ne j$, $m(s,t)=2$ [F2] and hence $B(e_s,e_t)=-\cos(\pi/2)=0$ by [F3]; by bilinearity [F6] this gives $B(V_i,V_j)=0$. Since the $e_s$ form a basis of $V$ and the $S_i$ partition it, grouping the unique basis expansion by its supports $S_i$ gives a unique decomposition into vectors of the $V_i$, so $V=V_1\oplus\cdots\oplus V_k$ is a $B$-orthogonal direct sum and $B=B_1\oplus\cdots\oplus B_k$ with $B_i=B|_{V_i\times V_i}$ [F6]. For the action, the reflection formula gives $r_{e_s}e_t=e_t-2B(e_t,e_s)e_s$: for $t\in S_i$ this lies in $V_i$, while for $t\in S_j$, $j\ne i$, it equals $e_t$ because $B(e_t,e_s)=B(e_s,e_t)=0$; hence $\rho(s)$ preserves $V_i$ and fixes each $V_j$ with $j\ne i$ pointwise, and the same holds for every $\rho(w)$ with $w\in W_i$ since these are products of such generators [F4, F5]. [F2, F3, F4, F5, F6, algebra]

1.3 (Proportionality on one generator.) Fix $s\in S$ and put $H=\{v:B(v,e_s)=0\}$; by [F3] $H$ is a hyperplane fixed pointwise by $r_{e_s}=\rho(s)$ and $r_{e_s}e_s=-e_s$. For $v\in H$, invariance of $\beta$ under $\rho(s)$ gives $\beta(e_s,v)=\beta(\rho(s)e_s,\rho(s)v)=\beta(-e_s,v)=-\beta(e_s,v)$, so $\beta(e_s,v)=0$; thus the linear functional $\beta(e_s,\cdot)$ vanishes on $H$, as does $B(e_s,\cdot)$, which is nonzero because $B(e_s,e_s)=1$ [F3]. Any linear functional $\psi$ vanishing on $H=\ker\varphi$ is a multiple of the nonzero functional $\varphi$: if $\varphi(v_0)\ne0$, then $u-(\varphi(u)/\varphi(v_0))v_0\in H$ for every $u$, so $\psi(u)=(\psi(v_0)/\varphi(v_0))\varphi(u)$. Hence $\beta(e_s,\cdot)=\lambda_sB(e_s,\cdot)$ with $\lambda_s:=\beta(e_s,e_s)$, and evaluating at $e_t$ gives $\beta(e_s,e_t)=\lambda_sB(e_s,e_t)$ for all $t$. [F3, F4, F6, algebra]

2.1 (The multiplication map is an isomorphism.) Every relator of $(S,m)$ is mapped to $1$ by the assignment $s\mapsto(1,\dots,s,\dots,1)\in W_1\times\cdots\times W_k$ placing $s$ in the factor $W_i$ with $s\in S_i$: the relators $s^2$ and $(st)^{m(s,t)}$ with $s,t$ in one component hold in that factor because they hold in $W$, and for $s\in S_i$, $t\in S_j$ with $i\ne j$ the two images have disjoint supports, hence commute and are involutions, so the image of $(st)^2$ is $1$; by the universal property [F1] there is a homomorphism $\varphi:W\to W_1\times\cdots\times W_k$ with $\varphi(s)=(1,\dots,s,\dots,1)$. Conversely the inclusions $W_i\to W$ are homomorphisms [F1] with pairwise commuting images by step 1.1, so $(w_1,\dots,w_k)\mapsto w_1\cdots w_k$ is a homomorphism $\psi:W_1\times\cdots\times W_k\to W$ [F5]. The two are mutually inverse: $\psi\varphi$ and the identity of $W$ are homomorphisms agreeing on the generating set $S$, and $\varphi\psi$ and the identity of $W_1\times\cdots\times W_k$ are homomorphisms agreeing on each coordinate generating set $W_i$ (a generator $s\in S_i$ of the $i$-th factor is sent by $\varphi\psi$ to $\varphi(s)=(1,\dots,s,\dots,1)$); hence $\mu=\psi$ is an isomorphism [F5]. [F1, F4, F5, step 1.1, algebra]

2.2 (The scalars are constant on components.) For $s\ne t$ in the same component, step 1.3 gives $\beta(e_s,e_t)=\lambda_sB(e_s,e_t)$ and, by symmetry of $\beta$ and $B$, $\beta(e_s,e_t)=\beta(e_t,e_s)=\lambda_tB(e_t,e_s)=\lambda_tB(e_s,e_t)$; since $s,t$ lie in one component and are joined by a path, it suffices to treat adjacent pairs, where $B(e_s,e_t)\ne0$: indeed for finite labels the cosine is positive when $m(s,t)\ge3$, while an infinite label has $B(e_s,e_t)=-1$ [F3]; thus $B(e_s,e_t)=0$ forces $m(s,t)=2$, i.e. no edge [F2]. For such a pair $(\lambda_s-\lambda_t)B(e_s,e_t)=0$ gives $\lambda_s=\lambda_t$, and equality propagates along the edges of the connected component [F2], so there is $\lambda_i$ with $\lambda_s=\lambda_i$ for all $s\in S_i$. Evaluating $\beta$ on pairs of basis vectors of $V_i$ step 1.3 then gives $\beta|_{V_i\times V_i}=\lambda_iB_i$ for every $i$, that is, $\beta=\lambda_1B_1\oplus\cdots\oplus\lambda_kB_k$ [F6]; if $k=1$ this is $\beta=\lambda B$. [F2, F3, F6, step 1.3, algebra]

3.1 (Length additivity.) Let $w_i\in W_i$. Choosing a reduced expression of each $w_i$, concatenation represents $w_1\cdots w_k$ with $\sum_i\ell(w_i)$ letters, so $\ell(w_1\cdots w_k)\le\sum_i\ell(w_i)$. For the reverse inequality let $w_1\cdots w_k=s_1s_2\cdots s_\ell$ be a reduced expression of length $\ell=\ell(w_1\cdots w_k)$, with letters $s_j\in S$; letters lying in distinct components commute in $W$ by step 1.1, so we may reorder the $s_j$ within this word so that the letters of each $S_i$ become consecutive (the value in $W$ is unchanged), obtaining $w_1\cdots w_k=w'_1\cdots w'_k$ with $w'_i$ a product of $n_i$ letters from $S_i$ and $\sum_in_i=\ell$. By the isomorphism of step 2.1 the projection $W\to W_i$ is the restriction of the inverse map and is a homomorphism [F5], so it sends $w_1\cdots w_k$ to $w_i$ and $w'_1\cdots w'_k$ to $w'_i$; hence $w'_i=w_i$ and $\ell(w_i)\le n_i$ for each $i$; summing, $\sum_i\ell(w_i)\le\ell$. [F1, F5, step 1.1, step 2.1, algebra]

3.2 (Positive definite invariant forms give positive definite $B$.) Assume $\beta$ positive definite. By step 2.2 $\beta=\lambda_1B_1\oplus\cdots\oplus\lambda_kB_k$, and each $\lambda_i=\beta(e_s,e_s)>0$ for $s\in S_i$ because $e_s\ne0$ and $\beta$ is positive definite [F7]. Hence $B_i=\lambda_i^{-1}\beta|_{V_i\times V_i}$ is a positive multiple of the restriction of a positive definite form and is positive definite [F7]; a $B$-orthogonal direct sum of positive definite forms is positive definite, since a nonzero vector has some nonzero component $v_i$ and $B(v,v)\ge B_i(v_i,v_i)>0$ [F6, F7]. Thus $B=B_1\oplus\cdots\oplus B_k$ is positive definite, which is (3)(iii). [F6, F7, step 2.2, algebra]

4.1 (Finite $W$ has positive definite $B$.) Assume $W$ finite and define $\beta(u,v):=\sum_{w\in W}\beta_0(\rho(w)u,\rho(w)v)$, a finite sum over the finite set $W$ [F8] of symmetric bilinear terms, hence a symmetric bilinear form. It is $\rho(W)$-invariant: for $g\in W$, substituting $w'=wg$ and using that $w\mapsto wg$ is a bijection of the finite set $W$ [F8] gives $\beta(\rho(g)u,\rho(g)v)=\sum_w\beta_0(\rho(wg)u,\rho(wg)v)=\sum_{w'}\beta_0(\rho(w')u,\rho(w')v)=\beta(u,v)$. It is positive definite: every summand is $\ge0$ by [F8] and the summand with $w=1$ equals $\beta_0(u,u)>0$ for $u\ne0$, so $\beta(u,u)>0$. Applying step 3.2 to this $\beta$ gives that $B$ is positive definite, which is (4). [F4, F8, step 3.2, algebra] ∎
