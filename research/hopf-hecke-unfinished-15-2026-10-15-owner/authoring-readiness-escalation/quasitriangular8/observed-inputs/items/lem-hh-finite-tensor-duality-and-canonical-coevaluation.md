---
id: lem-hh-finite-tensor-duality-and-canonical-coevaluation
kind: lemma
title: "Finite tensor duality and basis-independent coevaluation"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-scalar-and-tensor-conventions, def-algebraic-dual-and-linear-functional, def-dual-family-associated-to-a-basis, thm-dual-family-is-a-basis-in-finite-dimension, thm-tensor-product-basis-from-bases, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-hom-from-a-finite-dimensional-space-as-a-tensor-product, thm-symmetry-and-associativity-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
aliases: []
forward_refs: [cex-hh-infinite-dimensional-tensor-dual-identification-fails]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 5.9 and Example 5.11, printed pp. 30–31: the Hom–tensor map $M^\\vee\\otimes N\\to\\operatorname{Hom}(M,N)$ and its finite-free isomorphism"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $V,W$ be finite-dimensional $k$-vector spaces.

1. The bilinear map $V^*\times W^*\to(V\otimes W)^*$, $(f,g)\mapsto[v\otimes w\mapsto f(v)g(w)]$, induces an isomorphism $V^*\otimes W^*\to(V\otimes W)^*$. For ordered bases $(v_1,\dots,v_m)$ of $V$, $(w_1,\dots,w_n)$ of $W$ with dual bases $(v_i^*)$, $(w_j^*)$, the image of $v_i^*\otimes w_j^*$ is the dual basis vector of $v_i\otimes w_j$ in the product basis of $V\otimes W$.
2. For every ordered basis $(v_1,\dots,v_n)$ of $V$ the element $\sum_{i=1}^nv_i^*\otimes v_i\in V^*\otimes V$ is independent of the basis and corresponds to $\mathrm{id}_V$ under the isomorphism $V^*\otimes V\to\operatorname{Hom}(V,V)$, $f\otimes v\mapsto[x\mapsto f(x)v]$ ([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]]). Its image under $\sigma_{V^*,V}$ is the corresponding element $\sum_iv_i\otimes v_i^*$ of $V\otimes V^*$.
3. The evaluation $\mathrm{ev}:V^*\otimes V\to k$, $f\otimes v\mapsto f(v)$, and the coevaluation $\mathrm{coev}:k\to V\otimes V^*$, $1\mapsto\sum_iv_i\otimes v_i^*$, are independent of the basis and satisfy $(\mathrm{id}_V\otimes\mathrm{ev})\circ\alpha_{V,V^*,V}\circ(\mathrm{coev}\otimes\mathrm{id}_V)=\mathrm{id}_V$ and $(\mathrm{ev}\otimes\mathrm{id}_{V^*})\circ\alpha^{-1}_{V^*,V,V^*}\circ(\mathrm{id}_{V^*}\otimes\mathrm{coev})=\mathrm{id}_{V^*}$, the unit isomorphisms $k\otimes V\cong V$, $V\otimes k\cong V$ being understood.

## Facts & Assumptions

**Given:** A field $k$, finite-dimensional $k$-vector spaces $V,W$, ordered bases $(v_1,\dots,v_m)$ of $V$ and $(w_1,\dots,w_n)$ of $W$ with their dual bases, and ordered bases of $V$ written $(v_1,\dots,v_n)$.

[F1] The tensor product conventions: $M\otimes N$ is the tensor product over $k$ with its universal property, every element is a finite sum of elementary tensors, the unit isomorphisms $\lambda_N:k\otimes N\to N$ and $\rho_M:M\otimes k\to M$ are given by $r\otimes n\mapsto rn$ and $m\otimes r\mapsto mr$, and tensor powers are left-associated with $V^{\otimes0}=k$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] The algebraic dual $V^*$ is the space of linear functionals on $V$ ([[def-algebraic-dual-and-linear-functional]]).

[F3] The dual family $(b^*)_{b\in B}$ of a basis is defined by $b^*(c)=\delta_{bc}$ and linear extension ([[def-dual-family-associated-to-a-basis]]).

[F4] If $B=(b_1,\dots,b_n)$ is a basis of a finite-dimensional space, its dual family $B^*$ is a basis, so it is linearly independent and spans the dual space ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[F5] The elementary tensors of two bases form a basis of the tensor product ([[thm-tensor-product-basis-from-bases]]).

[F6] Coordinates with respect to an ordered basis are unique, so $x=\sum_i\lambda_i b_i$ with $\lambda$ the coordinate list of $x$; for the dual basis of a basis this gives $f=\sum_if(b_i)b_i^*$ and $x=\sum_ib_i^*(x)b_i$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F7] For finite-dimensional $V$ the map $\Phi:V^*\otimes W\to\operatorname{Hom}(V,W)$, $\phi\otimes w\mapsto[y\mapsto\phi(y)w]$, is an isomorphism with inverse $\Psi(T)=\sum_iv_i^*\otimes T(v_i)$ ([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]]).

[F8] The symmetry and associativity isomorphisms act on elementary tensors by $\sigma_{M,N}(m\otimes n)=n\otimes m$ and $\alpha_{L,M,N}((l\otimes m)\otimes n)=l\otimes(m\otimes n)$ ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F9] The unit isomorphisms $\lambda_N:k\otimes N\to N$ and $\rho_M:M\otimes k\to M$ are isomorphisms with the stated formulas ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1. For fixed $(f,g)\in V^*\times W^*$ the pairing $V\times W\to k$, $(v,w)\mapsto f(v)g(w)$, is $k$-bilinear, so it defines a functional $\theta(f,g)\in(V\otimes W)^*$ with $\theta(f,g)(v\otimes w)=f(v)g(w)$ by the universal property in [F1], the star denoting the space of linear functionals [F2]; the assignment $(f,g)\mapsto\theta(f,g)$ is itself $k$-bilinear, so it induces a $k$-linear map $\theta:V^*\otimes W^*\to(V\otimes W)^*$ by [F1]. On the one hand $(v_i^*\otimes w_j^*)$ is a basis of $V^*\otimes W^*$ by [F4] and [F5], on the other hand the dual vectors $(v_i\otimes w_j)^*$ in $(V\otimes W)^*$ of the product basis $(v_i\otimes w_j)$ (a basis by [F5]) form a basis of $(V\otimes W)^*$ by [F4]; and $\theta(v_i^*\otimes w_j^*)(v_k\otimes w_l)=v_i^*(v_k)w_j^*(w_l)=\delta_{ik}\delta_{jl}=(v_i\otimes w_j)^*(v_k\otimes w_l)$ by [F3], so $\theta(v_i^*\otimes w_j^*)=(v_i\otimes w_j)^*$ because linear functionals agreeing on the spanning product basis agree. If $z=\sum_{i,j}c_{ij}v_i^*\otimes w_j^*$ satisfies $\theta(z)=0$, then $\sum_{i,j}c_{ij}(v_i\otimes w_j)^*=0$ and linear independence of the dual product basis [F4] gives all $c_{ij}=0$, so $\theta$ is injective; and every $L\in(V\otimes W)^*$ is $L=\sum_{i,j}d_{ij}(v_i\otimes w_j)^*=\theta\bigl(\sum_{i,j}d_{ij}v_i^*\otimes w_j^*\bigr)$ by spanning [F4], so $\theta$ is surjective. Hence $\theta$ is an isomorphism with the stated values on the dual product basis. [given, F1, F2, F3, F4, F5, algebra]

1.2 Claim 2. By [F7] the map $\Phi:V^*\otimes V\to\operatorname{Hom}(V,V)$ is an isomorphism, so the preimage of $\mathrm{id}_V$ is unique and any two bases $(v_1,\dots,v_n)$ give the same element as soon as both give $\mathrm{id}_V$. For $y\in V$ the coordinate expansion of [F6] gives $y=\sum_iv_i^*(y)v_i$, hence $\Phi\bigl(\sum_iv_i^*\otimes v_i\bigr)(y)=\sum_iv_i^*(y)v_i=y$ on a spanning set of $V$, so $\Phi(\sum_iv_i^*\otimes v_i)=\mathrm{id}_V$ and the element $\sum_iv_i^*\otimes v_i$ is the unique preimage of $\mathrm{id}_V$, independent of the basis. Its image under $\sigma_{V^*,V}$ is $\sum_iv_i\otimes v_i^*$ by the elementary-tensor formula of [F8]. [given, F6, F7, F8, algebra]

2.1 Claim 3. The pairing $V^*\times V\to k$, $(f,v)\mapsto f(v)$, is $k$-bilinear, so it induces $\mathrm{ev}:V^*\otimes V\to k$, $f\otimes v\mapsto f(v)$, by [F1]; evaluation is basis-free. The coevaluation $\mathrm{coev}:k\to V\otimes V^*$ is defined by $1\mapsto\sum_iv_i\otimes v_i^*$, which by step 1.2 is independent of the basis and equals $\sigma_{V^*,V}$ applied to the unique preimage of $\mathrm{id}_V$; it is $k$-linear because $k$ is spanned by $1$. For the first zigzag, use the conventions of [F1] and the formulas of [F8] and [F9]: for $x\in V$, $(\mathrm{coev}\otimes\mathrm{id}_V)(1\otimes x)=\sum_i(v_i\otimes v_i^*)\otimes x$, the associator sends this to $\sum_iv_i\otimes(v_i^*\otimes x)$, and $(\mathrm{id}_V\otimes\mathrm{ev})$ sends it to $\sum_iv_i\otimes v_i^*(x)=x\otimes1$ by [F6], which the unit isomorphism $\rho_V$ identifies with $x$; both composites are linear in $x$, so they agree everywhere. For the second zigzag, $f\otimes1$ maps under $(\mathrm{id}_{V^*}\otimes\mathrm{coev})$ to $\sum_if\otimes(v_i\otimes v_i^*)$, the inverse associator sends this to $\sum_i(f\otimes v_i)\otimes v_i^*$, and $(\mathrm{ev}\otimes\mathrm{id}_{V^*})$ sends it to $\sum_if(v_i)(1\otimes v_i^*)=1\otimes f$ by the dual expansion of [F6], which the unit isomorphism $\lambda_{V^*}$ identifies with $f$; again both composites are linear, so equality on the spanning elements $f\otimes1$ proves the identity. [step 1.2, F1, F6, F8, F9, algebra]

3.1 Steps 1.1, 1.2 and 2.1 prove claims 1, 2 and 3 respectively, with the dual product basis values, the basis independence of the preimage of $\mathrm{id}_V$, and both zigzag identities established. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Infinite dimension is deliberately outside the claim.** No surjectivity of $V^*\otimes W^*\to(V\otimes W)^*$ is claimed in infinite dimension, and the companion page's [[cex-hh-infinite-dimensional-tensor-dual-identification-fails]] exhibits a functional outside the image when $V$ has an infinite basis, so the finite-dimensional hypothesis of part 1 cannot simply be dropped.
