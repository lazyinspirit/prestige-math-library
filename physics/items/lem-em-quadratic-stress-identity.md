---
id: lem-em-quadratic-stress-identity
kind: lemma
title: "The quadratic stress identity and the local angular-balance identity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, def-euclidean-inner-product, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives]
dependency_roles:
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Feldman, A. Rechnitzer, E. Yeager, CLP-4 Vector Calculus (UBC), §4.1 (Theorems 4.1.4-4.1.16)"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/sec_graadDivCurl.html"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.2 and §4.4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and let $F:U\to\mathbb R^3$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), with coordinates $x_1,x_2,x_3$, partial derivatives $\partial_j=\partial/\partial x_j$, Euclidean inner product $\langle\cdot,\cdot\rangle$ and norm $\lvert\cdot\rvert_2$ ([[def-euclidean-inner-product]]), divergence and curl as in [[def-divergence-and-curl-of-a-c1-vector-field]], and cross product as in [[def-cross-product-in-r3]]. Put

$$Q_{ij}:=F_iF_j-\tfrac12\delta_{ij}\lvert F\rvert_2^2,\qquad \delta_{ij}:=\begin{cases}1,&i=j,\\0,&i\ne j,\end{cases}\qquad (\operatorname{div}Q)_i:=\sum_{j=1}^{3}\partial_jQ_{ij}.$$

Then $Q$ is a $C^1$ tensor field on $U$ and

$$\operatorname{div}Q=F\,\operatorname{div}F-F\times\operatorname{curl}F .$$

Moreover, writing $\epsilon_{ijk}$ for the Levi-Civita symbol ($\epsilon_{ijk}=+1$ if $(i,j,k)$ is an even permutation of $(1,2,3)$, $-1$ if it is an odd permutation, and $0$ if two indices coincide), every symmetric tensor $Q$ (that is, $Q_{kj}=Q_{jk}$ for all $j,k$) satisfies

$$\epsilon_{ijk}Q_{kj}=0\qquad(i\in\{1,2,3\}),$$

the sum over $j,k$ being the nine-term sum with each pair counted separately. Finally, let $I\subseteq\mathbb R$ be open. A tensor field here is a matrix-valued map $\Pi:U\times I\to\mathbb R^{3\times3}$; assume its entries and all spatial first partial derivatives are continuous and $\Pi_{kj}=\Pi_{jk}$. Let $g,f:U\times I\to\mathbb R^3$ be continuous, assume the componentwise time derivative $\partial_tg$ exists, and suppose $\partial_tg+\operatorname{div}\Pi=-f$ on $U\times I$, where $(\operatorname{div}\Pi)_i=\sum_{\ell=1}^{3}\partial_\ell\Pi_{i\ell}$ and $(x\times\Pi)_{i\ell}:=\epsilon_{ijk}x_j\Pi_{k\ell}$ with the sum over $j,k$. Then the vector field $x\times g$ and the tensor field $x\times\Pi$ satisfy

$$\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times f .$$

No symmetry of $Q$ beyond the displayed form is assumed, and no boundary integral is asserted: the first two identities are pointwise on $U$ and the angular identity is pointwise on $U\times I$.

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$; the $C^1$ field $F:U\to\mathbb R^3$ with $Q_{ij}=F_iF_j-\tfrac12\delta_{ij}\lvert F\rvert_2^2$; a symmetric tensor $Q$ in the second claim and a spatially $C^1$ symmetric matrix field $\Pi$ on $U\times I$, continuous $g,f$ there, and the existing time derivative $\partial_tg$ satisfying the stated balance.

[F1] Cross product: for $u,v\in\mathbb R^3$, $u\times v=(u_2v_3-u_3v_2,\,u_3v_1-u_1v_3,\,u_1v_2-u_2v_1)$ ([[def-cross-product-in-r3]]).

[F2] Divergence and curl: $\operatorname{div}F=\sum_{i=1}^{3}\partial_iF_i$ and $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] Inner product and norm: $\langle u,v\rangle=\sum_{i=1}^{3}u_iv_i$ and $\lvert F\rvert_2^2=\langle F,F\rangle$ ([[def-euclidean-inner-product]]).

[F4] Product rule and differentiability of products of $C^1$ functions, with the partial-derivative convention for maps on open Euclidean sets ([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct; expand the divergence of the quadratic tensor in coordinates, match the resulting expression with $-F\times\operatorname{curl}F$, cancel symmetric terms in the Levi-Civita contraction, and differentiate the cross-product products in the angular-balance identity.

1.1 The entries $Q_{ij}=F_iF_j-\tfrac12\delta_{ij}\langle F,F\rangle$ are sums of products of $C^1$ functions, hence $C^1$ on $U$ by [F3] and [F4], so both sides of the first identity are defined; moreover $\partial_j\langle F,F\rangle=\partial_j\sum_{l=1}^{3}F_lF_l=2\sum_{l=1}^{3}F_l\,\partial_jF_l$ by the product rule [F4]. [given, F3, F4, algebra]

2.1 For fixed $i$, $\sum_{j=1}^{3}\partial_jQ_{ij}=\sum_{j=1}^{3}\partial_j(F_iF_j)-\tfrac12\sum_{j=1}^{3}\delta_{ij}\partial_j\langle F,F\rangle=\sum_{j=1}^{3}\bigl(F_j\partial_jF_i+F_i\partial_jF_j\bigr)-\sum_{l=1}^{3}F_l\partial_iF_l=F_i\operatorname{div}F+\sum_{j=1}^{3}\bigl(F_j\partial_jF_i-F_j\partial_iF_j\bigr)$ by step 1.1, the product rule [F4] and the divergence formula [F2]. [step 1.1, F2, F4, algebra]

2.2 For a symmetric tensor and fixed $i$, the nine-term sum $\epsilon_{ijk}Q_{kj}$ vanishes: terms with $j=k$ have $\epsilon_{ijk}=0$, and for $j\ne k$ the pair $(j,k)$ and the pair $(k,j)$ contribute $\epsilon_{ijk}Q_{kj}+\epsilon_{ikj}Q_{jk}=\epsilon_{ijk}Q_{kj}-\epsilon_{ijk}Q_{kj}=0$, because $\epsilon$ changes sign under exchange of its last two indices and $Q$ is symmetric. This is the second claim. [step 1.1, algebra]

3.1 The first coordinate of $F\times\operatorname{curl}F$ is, by [F1] and [F2], $F_2(\partial_1F_2-\partial_2F_1)-F_3(\partial_3F_1-\partial_1F_3)=F_2\partial_1F_2+F_3\partial_1F_3-F_2\partial_2F_1-F_3\partial_3F_1$; adding and subtracting $F_1\partial_1F_1$ shows that $-\bigl(F\times\operatorname{curl}F\bigr)_1=\sum_{j=1}^{3}\bigl(F_j\partial_jF_1-F_j\partial_1F_j\bigr)$, and the same expansion in the second and third coordinates gives $-\bigl(F\times\operatorname{curl}F\bigr)_i=\sum_{j=1}^{3}\bigl(F_j\partial_jF_i-F_j\partial_iF_j\bigr)$ for every $i$. Substituting this into step 2.1 gives $\operatorname{div}Q=F\operatorname{div}F-F\times\operatorname{curl}F$, which is the first identity. [step 2.1, F1, F2, algebra]

3.2 At each time the field $(x\times\Pi)_{i\ell}=\epsilon_{ijk}x_j\Pi_{k\ell}$ is spatially $C^1$, and differentiating the product in $x_\ell$ and summing over $\ell$ gives $(\operatorname{div}(x\times\Pi))_i=\sum_{\ell=1}^{3}\partial_\ell(\epsilon_{ijk}x_j\Pi_{k\ell})=\epsilon_{ijk}\sum_{\ell=1}^{3}\bigl(\delta_{j\ell}\Pi_{k\ell}+x_j\partial_\ell\Pi_{k\ell}\bigr)=\epsilon_{ijk}\Pi_{kj}+\epsilon_{ijk}x_j\sum_{\ell=1}^{3}\partial_\ell\Pi_{k\ell}=\epsilon_{ijk}x_j(\operatorname{div}\Pi)_k$, where the term $\epsilon_{ijk}\Pi_{kj}$ vanishes by step 2.2 applied to the symmetric field $\Pi$; here $\delta_{j\ell}$ is the Kronecker symbol and the product rule [F4] was used in each summand. [step 2.2, F4, algebra]

4.1 Substituting $\partial_tg_k=-f_k-(\operatorname{div}\Pi)_k$ and differentiating the product with the time-independent factor $x_j$ gives $\partial_t(x\times g)_i=\epsilon_{ijk}x_j\partial_tg_k=-\epsilon_{ijk}x_jf_k-\epsilon_{ijk}x_j(\operatorname{div}\Pi)_k=-(x\times f)_i-(\operatorname{div}(x\times\Pi))_i$ by step 3.2; hence $\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times f$, which is the third claim. [step 3.2, F4, algebra] ∎

## Remarks

- The identity $\operatorname{div}Q=F\operatorname{div}F-F\times\operatorname{curl}F$ requires only first derivatives and no interchange of mixed partials, so the $C^1$ hypothesis is the natural one; the symmetry claim for $\epsilon_{ijk}Q_{kj}$ is a purely algebraic statement about symmetric tensors.
- The angular-balance identity is local; passing to an integral balance over a region requires a divergence theorem and boundary terms, which are not asserted here. For any time-dependent data meeting the displayed balance, the angular identity follows; this item adopts no evolution equation for $F$.
