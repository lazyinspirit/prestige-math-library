---
id: cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology
kind: corollary
title: Gaussian cancellation preserves homotopy type and abelian-category homology
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-complex-homotopy-and-contractibility-in-an-additive-category, def-homotopy-category-of-chain-complexes, def-homotopy-classes-of-chain-maps, def-chain-complex-in-an-abelian-category, def-cycle-and-boundary-subobjects-of-a-complex, lem-the-boundary-subobject-factors-through-the-cycle-subobject, def-homology-object-of-a-chain-complex, lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries, thm-a-chain-map-induces-a-well-defined-map-on-homology, thm-homology-is-an-additive-functor, def-kernels-and-cokernels-as-equalizers-and-coequalizers, cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 1, printed pp. 2-5 and 17-18"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
verification:
  precheck: pass
---

## Statement

Let $X^\bullet$ be a cochain complex in an additive category $\mathcal A$ with a
pivot decomposition at degree $n$, let $\bar X^\bullet$ be the candidate
reduction at that pivot, and let
$$p:X^\bullet\to\bar X^\bullet,\qquad \imath:\bar X^\bullet\to X^\bullet,\qquad h$$
be the explicit cochain maps and contracting homotopy of
[[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]],
so that $p\imath=1_{\bar X^\bullet}$, $1_{X^\bullet}-\imath p=dh+hd$ and
$ph=0=h\imath=h^2$.

1. **Homotopy type.** Under the reindexing dictionary $C_n:=C^{-n}$ of
   [[def-complex-homotopy-and-contractibility-in-an-additive-category]], the
   complexes $X^\bullet$ and $\bar X^\bullet$ become chain complexes
   $X_\bullet$ and $\bar X_\bullet$ and the maps $p,\imath$ become chain maps
   whose homotopy classes are mutually inverse isomorphisms in the homotopy
   category $K(\mathcal A)$ of [[def-homotopy-category-of-chain-complexes]].
   Thus $X^\bullet$ and $\bar X^\bullet$ are isomorphic in the homotopy category,
   over every additive category $\mathcal A$.
2. **Homology.** If $\mathcal A$ is abelian, then for every integer $n$ the
   induced maps on the homology objects of the reindexed chain complexes are
   inverse isomorphisms,
   $$H_n(\imath)H_n(p)=1_{H_n(X)},\qquad H_n(p)H_n(\imath)=1_{H_n(\bar X)},$$
   where the homology objects are those of
   [[def-homology-object-of-a-chain-complex]] and, in the cochain indexing, are
   the homology objects of $X^\bullet$ and $\bar X^\bullet$ in degree $-n$.
3. **What is not claimed.** No identification of $X^\bullet$ with
   $\bar X^\bullet$ as complexes is asserted before the contractible summand is
   split off: by
   [[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]
   the isomorphism only exists after passing to the biproduct
   $\bar X^\bullet\oplus K$ with the contractible two-term complex $K$, and the
   objects of $X^\bullet$ and $\bar X^\bullet$ in degrees $n$ and $n+1$ are in
   general different.

## Facts & Assumptions

**Given:** A cochain complex $X^\bullet$ in an additive category $\mathcal A$ with the pivot decomposition at degree $n$, its candidate reduction $\bar X^\bullet$, the explicit cochain maps $p,\imath$ and contracting homotopy $h$ of [[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]], the chain isomorphism $T$ of [[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], and — for clause 2 — the additional assumption that $\mathcal A$ is abelian.

[L1] $p$ and $\imath$ are cochain maps satisfying $p\imath=1_{\bar X^\bullet}$ and $1_{X^\bullet}-\imath p=dh+hd$, with $h$ of degree $-1$ and $ph=0$, $h\imath=0$, $h^2=0$ ([[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L2] Reindexing $C_n:=C^{-n}$, $d_n:=d^{-n}$ turns a cochain complex over an additive category into a chain complex over the same category, a cochain map into a chain map and a degree-$(-1)$ cochain homotopy $h$ into the chain homotopy $s_n:=h^{-n}$ of degree $+1$ with $f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n$; no sign is inserted ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

[L3] For an additive category, $K(\mathcal A)$ has the chain complexes as objects and the homotopy classes $[f]$ modulo null-homotopic chain maps as morphisms, with composition induced from representatives; $[f]=[g]$ exactly when $f-g$ is null-homotopic ([[def-homotopy-category-of-chain-complexes]], [[def-homotopy-classes-of-chain-maps]]).

[L4] In an abelian category, a chain complex has cycle subobjects $Z_n(C)=\ker(d_n)$ with inclusions $k_n$, boundary subobjects $B_n(C)=\operatorname{im}(d_{n+1})$, the factorization $d_{n+1}=k_n\beta_ne_n$ through the boundary-to-cycle map $\beta_n:B_n(C)\to Z_n(C)$, and homology objects $H_n(C)=\operatorname{coker}(\beta_n)$ with quotient $q_n:Z_n(C)\to H_n(C)$; a chain map $u$ has a unique induced $H_n(u)$ characterized by $H_n(u)q_n^C=q_n^DZ_n(u)$, where $Z_n(u)$ is the cycle map carried by $u$; and $H_n$ is additive, so $H_n(1)=1$ and $H_n(u+v)=H_n(u)+H_n(v)$ ([[def-chain-complex-in-an-abelian-category]], [[def-cycle-and-boundary-subobjects-of-a-complex]], [[lem-the-boundary-subobject-factors-through-the-cycle-subobject]], [[def-homology-object-of-a-chain-complex]], [[lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries]], [[thm-a-chain-map-induces-a-well-defined-map-on-homology]], [[thm-homology-is-an-additive-functor]]).

[L5] The cycle inclusion $k_n$ is a kernel and hence a monomorphism, and the homology quotient $q_n$ is a cokernel and hence an epimorphism ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]], [[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

[L6] The isomorphism $T:X^\bullet\to\bar X^\bullet\oplus K$ has components $T^n=R^{-1}$ and $T^{n+1}=L$ in degrees $n,n+1$ and identities elsewhere, so it is not an isomorphism of $X^\bullet$ with $\bar X^\bullet$ itself, and the objects in degrees $n,n+1$ are $A\oplus U,B\oplus V$ on the source and $A,B$ on the reduction ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1. By [L1], $p\imath=1_{\bar X^\bullet}$ and $\imath p=1_{X^\bullet}-(dh+hd)$. Under the reindexing [L2] these are chain maps $p_\bullet,\imath_\bullet$ between $X_\bullet$ and $\bar X_\bullet$ with $p_\bullet\imath_\bullet=1$ and $\imath_\bullet p_\bullet=1_{X_\bullet}-w$, where $w_n:=d_{n+1}s_n+s_{n-1}d_n$ and $s_n:=h^{-n}$. The family $s$ exhibits $w\simeq0$, so $w$ is null-homotopic and $1_{X_\bullet}-\imath_\bullet p_\bullet=w$ is null-homotopic; by [L3] therefore $[\imath_\bullet][p_\bullet]=[\imath_\bullet p_\bullet]=[1_{X_\bullet}]$ and $[p_\bullet][\imath_\bullet]=[p_\bullet\imath_\bullet]=[1_{\bar X_\bullet}]$, so the two classes are mutually inverse isomorphisms in $K(\mathcal A)$. [L1, L2, L3, algebra]

1.2 Clause 2, first composite. Assume $\mathcal A$ abelian. By [L2] the reindexed complexes are chain complexes in $\mathcal A$, and $p_\bullet\imath_\bullet=1_{\bar X_\bullet}$ strictly by [L1]. Functoriality and additivity of $H_n$ in [L4] give $H_n(p)H_n(\imath)=H_n(p_\bullet\imath_\bullet)=H_n(1_{\bar X_\bullet})=1_{H_n(\bar X)}$. [L1, L2, L4, algebra]

1.3 Cycle-level computation. Let $k_n:Z_n(X)\to X_n$ be the cycle inclusion, so $d_nk_n=0$, and let $d_{n+1}=k_n\beta_ne_n$ be the factorization of [L4]. Then $w_nk_n=d_{n+1}s_nk_n+s_{n-1}d_nk_n=k_n\beta_n(e_ns_nk_n)$, because the second summand vanishes and the first is $d_{n+1}(s_nk_n)$. As a difference of the chain maps $1_{X_\bullet}$ and $\imath_\bullet p_\bullet$, the map $w$ is a chain map, so [L4] gives a cycle map $Z_n(w)$ with $k_nZ_n(w)=w_nk_n=k_n\beta_n(e_ns_nk_n)$; by [L5] the inclusion $k_n$ is monic, so $Z_n(w)=\beta_n(e_ns_nk_n)$. [L4, L5, algebra]

2.1 The homotopy term induces zero. Applying the homology quotient $q_n:Z_n(X)\to H_n(X)$ to step 1.3 gives $q_nZ_n(w)=q_n\beta_n(e_ns_nk_n)=0$, since $q_n$ is the cokernel of $\beta_n$ by [L4]. The characterizing property $H_n(w)q_n=q_nZ_n(w)$ of [L4] therefore gives $H_n(w)q_n=0$, and $q_n$ is epic by [L5], so $H_n(w)=0$ for every $n$. [L4, L5, step 1.3, algebra]

3.1 Clause 2, second composite. By [L1] and [L2], $\imath_\bullet p_\bullet=1_{X_\bullet}-w$ with $w$ as in step 1.1, so functoriality and additivity of $H_n$ in [L4] give $H_n(\imath)H_n(p)=H_n(1_{X_\bullet})+H_n(-w)=1_{H_n(X)}-H_n(w)$, which equals $1_{H_n(X)}$ by step 2.1. Together with step 1.2 the two induced maps are inverse isomorphisms. [L1, L2, L4, step 2.1, algebra]

4.1 Conclusion. Step 1.1 proves clause 1: the classes are inverse in $K(\mathcal A)$ over an arbitrary additive category. Steps 1.2 and 2.1, 3.1 prove clause 2: over an abelian category $H_n(p)$ and $H_n(\imath)$ are mutually inverse isomorphisms on every homology object. Clause 3 is the qualification carried by [L6]: the displayed identities are those of the deformation retract of $X^\bullet$ onto $\bar X^\bullet$ and of the chain isomorphism onto $\bar X^\bullet\oplus K$, so no equality or canonical identification of the complexes $X^\bullet$ and $\bar X^\bullet$ is being asserted. ∎ [step 1.1, step 1.2, step 2.1, step 3.1, L6]
