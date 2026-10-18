---
id: thm-four-cocycle-2vect-g-is-fusion-two-category
kind: theorem
title: A normalized group 4-cocycle gives a fusion 2-category 2Vect_G^omega
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-four-cocycle-twisted-monoidal-structure-on-2vect-g
  - def-fusion-two-category
  - def-finite-semisimple-two-category
  - def-monoidal-weak-two-category
  - def-g-graded-two-vector-space
  - def-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.16
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
    - title: Décoppet, Extension Theory and Fermionic Strongly Fusion 2-Categories, Example 2.2
      url: https://www.maths.tcd.ie/EMIS/journals/SIGMA/2024/092/sigma24-092.pdf
---

## Statement

Let $G$ be a finite group and let $\omega:G^4\to\mathbb C^\times$ be a normalized group 4-cocycle. The convolution structure and scalar pentagonator of [[def-four-cocycle-twisted-monoidal-structure-on-2vect-g]] make $2\mathrm{Vect}^{\omega}_G$ a fusion 2-category. Its simple-object equivalence classes are exactly $\delta_g$ for $g\in G$, where $\delta_g$ is $\mathrm{Vect}_{\mathbb C}$ concentrated in grade $g$. The monoidal unit $\delta_e$ is simple. Every 1-morphism has left and right adjoints, every separable monad splits, and every object has left and right duals.

## Facts & Assumptions


**Given:** A finite group $G$, the field $\mathbb C$, and a normalized multiplicative 4-cocycle $\omega$, so
$$\omega(h,k,l,m)\omega(g,hk,l,m)\omega(g,h,k,lm)=\omega(gh,k,l,m)\omega(g,h,kl,m)\omega(g,h,k,l).$$

[F1] [[def-four-cocycle-twisted-monoidal-structure-on-2vect-g]]: On four homogeneous inputs of degrees $(g,h,k,l)$, the pentagonator is scalar multiplication by $\omega(g,h,k,l)$ on each simple summand, extended by direct sums and naturality.

[F2] [[def-g-graded-two-vector-space]]: The concrete skeleton uses finite simple-label sets $S_g$ and finite-dimensional vector-space families; linear functors are represented by finite matrices within each grade.

[F3] [[def-finite-semisimple-two-category]]: Every hom category is finite semisimple, finite direct sums and zero exist, every 1-morphism has left and right adjoints, every separable monad splits, and there are finitely many simple-object equivalence classes.

[F4] [[def-fusion-two-category]]: A fusion 2-category is finite semisimple and weak monoidal, has a simple monoidal unit, and has left and right duals with evaluation, coevaluation, and cusp 2-isomorphisms.

[F5] [[def-group]]: Group multiplication is associative and has an identity and inverses.

## Proof

1.1 For homogeneous inputs of grades $g,h,k,l,m$, the two composites of pentagonators have scalar coefficients $\omega(h,k,l,m)\omega(g,hk,l,m)\omega(g,h,k,lm)\quad\hbox{and}\quad\omega(gh,k,l,m)\omega(g,h,kl,m)\omega(g,h,k,l).$ They agree by the 4-cocycle equation in [F1]. On arbitrary objects both pastings are direct sums of these homogeneous components, and their naturality makes the componentwise equality an equality of modifications. Every coherence equation with a unit input reduces to the identity scalar by normalization in [F1]. [F1, F5, given]

1.2 Let $\mathcal A,\mathcal B$ have respectively $n_g,m_g$ simple labels in grade $g$. A grading-preserving linear functor $\mathcal A\to\mathcal B$ is a family of matrices of finite-dimensional vector spaces, one $m_g$-by-$n_g$ matrix for each $g$. Consequently its hom category is a finite product of finite matrix categories over $\mathrm{Vect}_{\mathbb C}$. Each matrix category is semisimple: its simple objects have one copy of $\mathbb C$ in a single matrix entry and zero elsewhere, and every matrix is a finite direct sum of these. Composition is matrix multiplication with direct sums and tensor products of finite-dimensional vector spaces. Object direct sums are concatenation of the finite simple-label sets. This proves the hom-category and direct-sum clauses of [F3]. [F2, F3, algebra]

1.3 If $F:\mathcal A\to\mathcal B$ is represented by matrices $V_{ji}$, define its right adjoint by the transposed matrices $(F^R)_{ij}=V_{ji}^*$, where $V^*$ is the ordinary finite-dimensional vector-space dual; define its left adjoint using the opposite duality. The unit and counit are the direct sums of the vector-space coevaluation and evaluation maps. Each triangle composite is the identity on every matrix entry by the vector-space dual-basis identities, so these are left and right adjoints. [F2, F3, algebra]

1.4 Let $S=\bigsqcup_{g\in G}S_g$ be the finite simple-label set of $\mathcal A\simeq\mathrm{Vec}^{S}$. A grading-preserving monad $T$ has finite matrix entries $T_{t,s}$, zero unless $s,t$ have the same grade. Its unit and multiplication satisfy the monad unit and associativity laws; these are exactly the identity and composition laws for the finite $k$-linear category with objects $S$ and morphism spaces $T_{t,s}$. Its finite-dimensional category algebra $R_T=\bigoplus_{s,t\in S}T_{t,s}$ has unit the sum of the object identities, and a $T$-algebra is exactly a family $(M_s)_{s\in S}$ with compatible left $R_T$-action maps $T_{t,s}\otimes M_s\to M_t$. The separability section $\sigma:T\Rightarrow T^2$ gives $E=\sigma\eta(1)=\sum_i x_i\otimes y_i\in R_T\otimes R_T$; the equations $\mu\sigma=1_T$ and $T$-bilinearity of $\sigma$ say respectively $\sum_i x_i y_i=1_{R_T}$ and $aE=Ea$ for every $a\in R_T$, component by component. For a surjective homomorphism $p:M\to N$ of finite-dimensional left $R_T$-modules, choose a $k$-linear section $s$ and set $\bar s(n)=\sum_i x_i\,s(y_i n)$. Then $p\bar s(n)=\sum_i x_i y_i n=n$, while $\bar s(a n)=\sum_i x_i s(y_i a n)=\sum_i (a x_i)s(y_i n)=a\bar s(n)$ by $Ea=aE$. Thus every module epimorphism splits; every finite-dimensional module is a quotient of a finite direct sum of copies of the regular module, by choosing a finite vector-space generating set, so it is projective and the finite-dimensional module category is semisimple. Every simple module is a quotient of the regular module, which has finite length, so there are finitely many simple classes. Since $R_T$ has no entries between different grades, its central grade idempotents split this Eilenberg–Moore category into finitely many finite semisimple grade pieces. The free functor $F$ sends $X$ to $(TX,\mu_X)$ and is left adjoint to the forgetful functor $U$: the adjunction bijection sends an algebra map $f:TX\to M$ to $f\eta_X$, with inverse $g\mapsto a_M\circ T(g)$ for a $T$-algebra action $a_M$. The monad and algebra laws verify that these maps are inverse. Both functors preserve grades, and $UF=T$ with unit $\eta$ and multiplication $\mu$. Hence the Eilenberg–Moore category and the adjunction $F\dashv U$ give the required separable-monad splitting in $2\mathrm{Vect}^{\omega}_G$. [F2, F3, algebra]

1.5 For completeness the splitting has the required section of its counit. For a $T$-algebra $(x,a)$ define $s_{(x,a)}=T(a)\sigma_x\eta_x:x\to Tx$, as a map to the free algebra $(Tx,\mu_x)$. The algebra law and $\mu\sigma=1$ give $a s=aT(a)\sigma_x\eta_x=a\mu_x\sigma_x\eta_x=a\eta_x=1_x$. To check that $s$ is an algebra map, naturality and the two $T$-bimodule equations for $\sigma$ give
$$\begin{aligned}s a&=T(a)\sigma_x\eta_xa=T(a)\sigma_xT(a)\eta_{Tx}=T(a)T^2(a)\sigma_{Tx}\eta_{Tx}\\&=T(a)T(\mu_x)\sigma_{Tx}\eta_{Tx}=T(a)\sigma_x\mu_x\eta_{Tx}=T(a)\sigma_x,\\\mu_xT(s)&=\mu_xT^2(a)T(\sigma_x)T(\eta_x)=T(a)\mu_{Tx}T(\sigma_x)T(\eta_x)\\&=T(a)\sigma_x\mu_xT(\eta_x)=T(a)\sigma_x.\end{aligned}$$
Thus $s a=\mu_xT(s)$. For an algebra map $h:(x,a)\to(y,b)$, the identity $ha=bT(h)$ and naturality of $\sigma,\eta$ imply $T(h)s_{(x,a)}=s_{(y,b)}h$. Every component preserves grades, since $T,a,\sigma,\eta$ do. Hence $s:1\Rightarrow FU$ is a grading-preserving natural section of the counit $FU\Rightarrow1$, an actual $2$-morphism in the Eilenberg–Moore endomorphism hom category required by [F3]. [F2, F3, step 1.4, construct, algebra]

2.1 Tensoring linear functors on separate factors has the canonical comparison that sends an elementary tensor $x\otimes y$ to $F(x)\otimes G(y)$. The two sides of each interchange equation therefore agree on elementary tensors and hence on the entire tensor product. The scalar in [F1] commutes with every linear map, so the pentagonator is natural in 1- and 2-morphisms. Thus the prescribed operations satisfy the pseudofunctor and naturality parts of the weak monoidal 2-category definition. [F1, F2, F5, step 1.1, algebra]

2.2 The identity functor of a finite semisimple category with simple labels $s_1,\ldots,s_n$ is the direct sum of the $n$ projection-inclusion functors for those labels. Each summand is simple, so the identity is simple exactly when $n=1$. The only simple objects of $2\mathrm{Vect}^{\omega}_G$ are therefore the one-label categories $\delta_g$, one for each $g\in G$. In particular $\delta_e$ is the unique simple summand of the monoidal unit and is simple. [F2, F3, step 1.2, algebra]

3.1 For an object with simple labels $s_{g,i}$, put the dual label $s_{g,i}^{\#}$ in grade $g^{-1}$. Evaluation sends $(s_{g,i},s_{h,j}^{\#})$ to $\mathbb C$ when $h=g$ and $j=i$, and to $0$ otherwise; coevaluation sends $\mathbb C$ to the direct sum of $s_{g,i}^{\#}\otimes s_{g,i}$ over all labels. Each right-dual triangle composite is the identity on every simple label, since only its matching diagonal summand survives; reversing evaluation and coevaluation gives the same check for left duals. Thus both cusp transformations have scalar $1$. These composites use only the associator and unitors on at most three object factors; the 4-cocycle enters the four-input pentagonator already checked in step 1.1, and normalized unit cases contribute scalar $1$. This supplies duals without asserting a pivotal or spherical enhancement. [F1, F2, F4, step 1.1, algebra] ∎
