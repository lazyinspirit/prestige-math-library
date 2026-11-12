---
id: lem-curve-support-divisor-complex
kind: lemma
title: Top cycles supported on an integral curve
status: published
domain: mathematics
deps:
  - def-supported-higher-cycle-complex
  - lem-author-1437578267d2-supported-degrees
  - lem-author-1437578267d2-length-orders
  - lem-author-1437578267d2-graph-boundary
  - lem-author-1437578267d2-normalization-quotient
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-closed-immersion-schemes
  - math:def-dimension-noetherian-topological-space
  - math:lem-integral-finite-type-scheme-function-field
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:def-composition-series-and-length-of-a-module
  - math:def-quotient-module
  - lem-affine-curve-normalization-interface
dependency_roles:
  def-supported-higher-cycle-complex: mathematical-premise
  lem-author-1437578267d2-supported-degrees: mathematical-premise
  lem-author-1437578267d2-length-orders: mathematical-premise
  lem-author-1437578267d2-graph-boundary: mathematical-premise
  lem-author-1437578267d2-normalization-quotient: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:def-composition-series-and-length-of-a-module: mathematical-premise
  math:def-quotient-module: mathematical-premise
  lem-affine-curve-normalization-interface: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 13
---

## Statement
Assume AC. Let $k$ be algebraically closed, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $T\subset U$ an integral closed curve. Put $K=k(T)$ and define
$$\operatorname{div}_T(f)=\sum_{x\in T\text{ closed}}\operatorname{ord}_{\mathcal O_{T,x}}(f)[x],\qquad \operatorname{ord}_{R}(a/b)=\ell_R(R/aR)-\ell_R(R/bR).$$
For the fixed-support Bloch complex with alternating face differential,
$$\mathrm{CH}^3_T(U)\cong\operatorname{coker}\!\left(K^\times\xrightarrow{\operatorname{div}_T}\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]\right).$$
When $T$ is affine, normalization $\nu:\widetilde T\to T$ induces a surjection
$$\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)\twoheadrightarrow\mathrm{CH}^3_T(U),$$
induced on point cycles by $[y]\mapsto[\nu(y)]$. For $f\in K^\times$, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and the displayed length orders downstairs. No normality or smoothness of $T$ is assumed.

## Facts & Assumptions
**Given:** AC and $k,U,T$ as stated; for the normalization assertion, also assume $T$ affine.

**Goal:** Identify the supported top Chow group and prove the normalization surjection and divisor compatibility.

[F1] The supported group is degree-zero homology of the fixed-support complex. Its relevant terms are $Z_0(T)$ and $B_1(T)$, and its boundary is the endpoint difference $b[W]=[W_1]-[W_0]$ with local length coefficients. [[def-supported-higher-cycle-complex]], [[lem-author-1437578267d2-supported-degrees]]

[F2] The displayed length formula defines a divisor homomorphism, and its image is precisely the endpoint-boundary subgroup. [[lem-author-1437578267d2-length-orders]], [[lem-author-1437578267d2-graph-boundary]]

[F3] For affine $T$, normalization induces the stated surjection from $\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)$ to the divisor quotient and satisfies the displayed order formula. [[lem-author-1437578267d2-normalization-quotient]]


[F4] Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type concern this morphism. Finite type means locally finite type and quasi-compact. Integral means nonempty, reduced and irreducible. The inclusion $T\subset U$ is a closed immersion. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; a curve has dimension one, and pure dimension three means every irreducible component has dimension three. [[math:def-algebraically-closed-field]], [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-integral-scheme]], [[math:def-closed-immersion-schemes]], [[math:def-dimension-noetherian-topological-space]]

[F5] Here $K=k(T)$ is the generic stalk, canonically the fraction field of each nonempty affine chart of the integral finite-type curve. The local ring $R=\mathcal O_{T,x}$ is the stalk at $x$, identified on an affine chart $\operatorname{Spec}A$ with $A_{\mathfrak p_x}$. In the order formula $a,b\in R$ are nonzero. The symbol $\ell_R(M)$ is composition-series length, the number of simple factors; its independence and the finite lengths used here are supplied by [F2]. The modules $R/aR$ and $R/bR$ have the induced action on additive cosets. [[math:lem-integral-finite-type-scheme-function-field]], [[math:thm-stalk-structure-sheaf-prime-localization]], [[math:def-composition-series-and-length-of-a-module]], [[math:def-quotient-module]], [[lem-author-1437578267d2-length-orders]]

[F6] For affine $T=\operatorname{Spec}A$, its normalization is $\widetilde T=\operatorname{Spec}B$, where $B$ consists of the elements of $\operatorname{Frac}A$ satisfying a monic polynomial over $A$; $\nu$ is induced by $A\subset B$. The Picard group consists of isomorphism classes of line bundles under tensor product, and $\mathrm{CH}^1(\widetilde T)$ is degree-zero codimension-one Bloch homology, as in [F3]. In the DVR clause, a uniformizer generates the maximal ideal and every nonzero element is a unit times a nonnegative power of that uniformizer; the normalized valuation of $u\pi^r/(v\pi^s)$ is $r-s$ for units $u,v$. [[lem-affine-curve-normalization-interface]], [[lem-author-1437578267d2-normalization-quotient]], [[lem-author-1437578267d2-length-orders]]

[F7] The sums $Z_0(T)=\bigoplus_x\mathbb Z[x]$ are finite formal integer combinations of closed points, with $[x]$ the corresponding point cycle. A closed point means a point whose singleton is closed. The cokernel of the displayed divisor homomorphism is the additive quotient $Z_0(T)/\operatorname{im}(\operatorname{div}_T)$. The group $B_1(T)$ and its endpoint cycles are exactly those of [F1]. [[lem-author-1437578267d2-supported-degrees]], [[lem-author-1437578267d2-length-orders]]

[A1] AC asserts that every family of nonempty sets has a choice function. It is retained in the supported-complex, curve-boundary and normalization suppliers invoked in steps 1.1, 2.1 and 3.1. The quotient substitution introduces no additional choice assumption. [[math:def-axiom-of-choice]]

## Proof
1.1 By [F1], the outgoing differential from degree zero is zero and $\mathrm{CH}^3_T(U)=Z_0(T)/bB_1(T)$. The sign is $W_1-W_0$: with $s=t_1$, the zeroth face is $s=1$ and the first is $s=0$. [F1, given]

2.1 By [F2], the divisor map is well defined and its image is exactly $bB_1(T)$, with the stated multiplicities even at singular points. Substitution into step 1.1 proves the cokernel presentation. [F2, step 1.1]

3.1 If $T$ is affine, apply [F3] and the identification of step 2.1. This gives the normalization pushforward, its surjectivity and the displayed equality of local orders. [F3, step 2.1] ∎
