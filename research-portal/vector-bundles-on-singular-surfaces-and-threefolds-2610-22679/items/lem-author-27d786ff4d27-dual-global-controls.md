---
id: lem-author-27d786ff4d27-dual-global-controls
kind: lemma
title: Coherent dual extension supplies global Swan controlling sections
status: published
domain: mathematics
deps:
  - prop-swan-bertini-point-section
  - lem-affine-coherent-global-generation
  - lem-surjection-kernel-bundle
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-axiom-of-choice
  - thm-author-27d786ff4d27-swan-controlled-bertini
  - math:def-affine-scheme
  - math:def-integral-scheme
  - math:def-smooth-morphism-schemes
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-locally-free-sheaf-finite-rank
  - math:def-coherent-module-scheme
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:thm-affine-quasi-coherent-equivalence
  - math:thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - math:def-finite-type-finite-presentation-module-sheaf
  - math:lem-internal-hom-fp-qc
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:thm-differentials-smooth-locally-free
  - math:thm-cotangent-space-maximal-ideal-quotient
  - math:def-relative-dimension-smooth-morphism
  - math:def-fibre-of-module-at-point
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:lem-hh-finite-spanning-list-contains-a-basis
  - math:cor-square-matrix-invertible-iff-determinant-is-a-unit
  - math:def-base-change-morphism-schemes
  - math:thm-affine-fibre-product-tensor-ring
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-krull-dimension-of-a-ring
dependency_roles:
  prop-swan-bertini-point-section: mathematical-premise
  lem-affine-coherent-global-generation: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-27d786ff4d27-swan-controlled-bertini: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:thm-affine-quasi-coherent-equivalence: mathematical-premise
  math:thm-finite-generation-and-finite-presentation-over-a-noetherian-ring: mathematical-premise
  math:def-finite-type-finite-presentation-module-sheaf: mathematical-premise
  math:lem-internal-hom-fp-qc: mathematical-premise
  math:thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
  math:thm-differentials-smooth-locally-free: mathematical-premise
  math:thm-cotangent-space-maximal-ideal-quotient: mathematical-premise
  math:def-relative-dimension-smooth-morphism: mathematical-premise
  math:def-fibre-of-module-at-point: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:lem-hh-finite-spanning-list-contains-a-basis: mathematical-premise
  math:cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
sources:
  references:
    - title: The Stacks Project, geometric integrality after algebraic closure
      url: https://stacks.math.columbia.edu/tag/0FWF
      locator: Lemma 10.49.3, equivalence (1) with (3); Definition 10.49.1 in Section
        10.49 (tag 05DW).
      statement: A k-algebra B is geometrically integral if and only if its tensor
        product with an algebraic closure of k is a domain. Geometric
        integrality means that tensoring with every field extension gives a
        domain.
      hypotheses: k is a field and B is a commutative unital k-algebra; no finite-type
        hypothesis is required. Here k is algebraically closed and B=A_g is a
        nonzero localization domain, so the algebraic closure test is B itself.
      reading_limits: "For this repair, retrieved and read the live HTML statement and
        the proof-reference sentence of Stacks Lemma 10.49.3 (tag 0FWF), and
        Definition 10.49.1 in Section 10.49 (tag 05DW). Checked equivalence (1)
        with (3) for B=A_g: k is algebraically closed, the chart is nonempty,
        and B is a domain. The subordinate proofs in Lemmas 10.49.2, 10.44.4 and
        10.47.3 were not reconstructed. Only the algebraic-closure criterion is
        imported; the dimension conversion and section construction remain
        locally authored arguments."
formulation_deps:
  - prop-swan-bertini-point-section
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-integral-scheme
  - math:def-smooth-morphism-schemes
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-locally-free-sheaf-finite-rank
  - math:def-coherent-module-scheme
  - math:lem-internal-hom-fp-qc
  - math:def-fibre-of-module-at-point
  - thm-author-27d786ff4d27-swan-controlled-bertini
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:def-base-change-morphism-schemes
  - math:def-krull-dimension-of-a-ring
argument_deps:
  - prop-swan-bertini-point-section
  - lem-affine-coherent-global-generation
  - lem-surjection-kernel-bundle
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-axiom-of-choice
  - thm-author-27d786ff4d27-swan-controlled-bertini
  - math:def-affine-scheme
  - math:def-integral-scheme
  - math:def-smooth-morphism-schemes
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-locally-free-sheaf-finite-rank
  - math:def-coherent-module-scheme
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:thm-affine-quasi-coherent-equivalence
  - math:thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - math:def-finite-type-finite-presentation-module-sheaf
  - math:lem-internal-hom-fp-qc
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:thm-differentials-smooth-locally-free
  - math:thm-cotangent-space-maximal-ideal-quotient
  - math:def-relative-dimension-smooth-morphism
  - math:def-fibre-of-module-at-point
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:lem-hh-finite-spanning-list-contains-a-basis
  - math:cor-square-matrix-invertible-iff-determinant-is-a-unit
  - math:def-base-change-morphism-schemes
  - math:thm-affine-fibre-product-tensor-ring
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-krull-dimension-of-a-ring
---

## Statement
Assume AC. Let $X=\operatorname{Spec}A$ be an integral normal affine finite-type threefold over an algebraically closed field $k$, let $S$ be the finite smooth zero set of the preceding point functional, let $U=X\setminus S$, and let $Q$ be its coherent kernel on $X$. Put $E=(Q|_U)^\vee$. For any nonempty open $W\subset U$ there is a finite indexed family of global sections of $E$ which generates $E$ on $U$, spans first jets at every smooth closed point of $U$, and contains Swan's controlling family on each member of a finite cover of $W$ by nonempty smooth affine geometrically integral principal charts $W_i=D(g_i)=\operatorname{Spec}A_{g_i}$ satisfying $\dim W_i=\dim A_{g_i}=3$ when $W$ is smooth. Each such chart has a rank-two frame of $E$; its frame vectors and their products by a finite set of $k$-algebra generators of $A_{g_i}$ form its controlling family. Here geometrically integral means integral after every field extension of $k$. The parameters are an affine space $T=\mathbb A^N_k$; repetitions or linear relations in the indexed family are allowed.

## Facts & Assumptions
**Given:** AC and the stated preceding point-functional setup: $X=\operatorname{Spec}A$ is integral, normal and of finite type over an algebraically closed field $k$, with $\dim X=3$; $s:P\to\mathcal O_X$ is the preceding functional on a rank-three bundle, $S$ its finite smooth zero scheme, $U=X\setminus S$, $Q=\ker s$, and $W\subset U$ is nonempty open. Normal means that the local rings are integrally closed domains. All restrictions to opens carry the restricted structure sheaf. A global section of the dual is an $\mathcal O_U$-linear functional on $Q|_U$. At a closed point $x\in U$, write $R=\mathcal O_{U,x}$, $\mathfrak m_x\subset R$ for its maximal ideal, $E(x)=E_x/\mathfrak m_xE_x$, and $J_x^1E=E_x/\mathfrak m_x^2E_x$ for the first-jet space. A finite indexed family spans first jets when the map from its coefficient vector space over $k$ to $J_x^1E$ is surjective. A frame is a sheaf basis on the given open. Here $\mathbb A_k^N$ means $\operatorname{Spec}k[t_1,\ldots,t_N]$; its $k$-points parametrize linear combinations of the indexed sections.

**Goal:** Supply global functionals on the actual open $U$, including chartwise Swan families, without asserting local freeness of the coherent dual at $S$.

[F1] [[prop-swan-bertini-point-section]] gives coherent $Q$ and rank-two $Q|_U$ in this finite-type setup. [[lem-affine-coherent-global-generation]] gives finite global generators of a coherent sheaf on a Noetherian affine scheme and generation on every open restriction. [[lem-surjection-kernel-bundle]] gives local splitting of surjections of finite locally free sheaves.

[F2] [[math:def-affine-scheme]] fixes affine schemes and coordinate rings; [[math:def-integral-scheme]] identifies nonempty affine opens in an integral scheme with spectra of domains; [[math:def-smooth-morphism-schemes]] fixes smoothness over $k$ and its preservation by open restriction; [[math:def-algebraically-closed-field]] fixes the root property; [[math:def-finite-type-and-module-finite-algebras]] means $A=k[f_1,\ldots,f_d]$ for some finite list; [[math:def-locally-free-sheaf-finite-rank]] fixes the bundle and frame convention; [[math:def-coherent-module-scheme]] makes a coherent sheaf quasi-coherent and of finite type.

[F3] A field is Noetherian since its only ideals are $(0)$ and $(1)$. [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] therefore makes $A$ Noetherian. [[math:def-locally-noetherian-and-noetherian-scheme]] makes $X$ Noetherian. Under AC, [[math:thm-noetherian-ring-has-noetherian-spectrum]] and [[math:lem-noetherian-open-subsets-are-quasi-compact]] imply that every open of $X$, including $W$, is quasi-compact.

[F4] Under AC, [[math:thm-affine-quasi-coherent-equivalence]] identifies $Q$ with the associated sheaf of $M=\Gamma(X,Q)$, a finite module by [F1]. [[math:thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]] makes finite modules over $A$ finitely presented and Noetherian (every submodule is finite). [[math:def-finite-type-finite-presentation-module-sheaf]] translates this to finite presentation of $Q$. [[math:lem-internal-hom-fp-qc]] defines the internal Hom and identifies it on affine charts with the sheaf associated to $\operatorname{Hom}_A(M,A)$, compatibly with localization and restriction. [[math:thm-coherent-sheaves-abelian-noetherian-scheme]] makes a finite-type quasi-coherent sheaf coherent on $X$.

[F5] [[thm-author-fc2380accb47-finite-type-geometric-input]] supplies rationality of closed points on finite-type opens over $k$ and equality of dimensions for a nonempty open in an integral finite-type field scheme. [[math:def-relative-dimension-smooth-morphism]] identifies dimension at a point over a field with the dimension of the component through it; on a smooth open of our integral threefold it is three. Under AC, [[math:thm-differentials-smooth-locally-free]] makes the differential sheaf there locally free of rank three. At a rational point, [[math:thm-cotangent-space-maximal-ideal-quotient]] identifies its fiber with $\mathfrak m_x/\mathfrak m_x^2$. [[math:def-fibre-of-module-at-point]] fixes $E(x)$ and its quotient description; [[math:def-tensor-product-of-modules-by-generators-and-relations]] fixes the tensor products used below.

[F6] [[math:def-affine-scheme-spectrum]] supplies the principal-open basis, and [[math:lem-spectrum-localization-open-immersion]] identifies $D(g)$, including its structure sheaf, with $\operatorname{Spec}A_g$. A finite spanning list over a field contains a basis by [[math:lem-hh-finite-spanning-list-contains-a-basis]]. A square matrix over a commutative ring is invertible exactly when its determinant is a unit by [[math:cor-square-matrix-invertible-iff-determinant-is-a-unit]].

[F7] [[thm-author-27d786ff4d27-swan-controlled-bertini]] supplies precisely the free rank-two controlling family: a frame and its products by any finite list of algebra generators on a smooth affine geometrically integral threefold over an infinite field. Geometric integrality means integrality after every field extension, using [[math:def-base-change-morphism-schemes]]; [[math:thm-affine-fibre-product-tensor-ring]] identifies an affine base change with the spectrum of the corresponding tensor ring. The one additional imported criterion used to verify this hypothesis is stated in External input below; no Bertini conclusion beyond this declared supplier is imported here.

[F8] The dimension of a scheme here is the supremum of lengths of strict chains of nonempty irreducible closed subsets, as in the geometric input [F5]. Under AC, [[math:thm-irreducible-closed-subsets-and-prime-ideals]] identifies those subsets of a nonempty affine spectrum with the sets $V(\mathfrak p)$ for prime ideals, with unique prime generic points. Here $V(\mathfrak p)=\{\mathfrak q:\mathfrak p\subseteq\mathfrak q\}$. [[math:def-krull-dimension-of-a-ring]] defines ring dimension by lengths of strict prime chains for a nonzero ring. The local argument in step 2.1 matches these two dimensions before applying Swan's ring-dimension hypothesis.

[A1] [[math:def-axiom-of-choice]] is assumed at the affine equivalence, internal Hom, coherent global generation, smooth differential and Noetherian compactness invocations above. The subsequent explicit coordinate computations and finite additions require no further arbitrary-index choice.

## External input
The algebraic-closure test is imported from [Stacks, Lemma 10.49.3](https://stacks.math.columbia.edu/tag/0FWF), equivalence (1) with (3), with geometric integrality defined in Definition 10.49.1: a $k$-algebra $B$ is geometrically integral exactly when $B\otimes_k\overline{k}$ is a domain. The reference records the exact hypotheses and reading limits. Its proof is imported, not reconstructed. The proof of the present section-construction lemma below is locally authored.

## Proof
1.1 By [F1]–[F4] and [A1], write $Q\cong\widetilde M$ with $M$ finite and finitely presented over the Noetherian ring $A$. The sheaf $F=\mathcal Hom_X(Q,\mathcal O_X)$ is the quasi-coherent sheaf associated to $H=\operatorname{Hom}_A(M,A)$ by [F4]; the target $\mathcal O_X$ is quasi-coherent, being free of rank one. A finite presentation $A^b\to A^a\to M\to0$ embeds $H$ into $A^a$ by precomposition with the surjection. Since $A^a$ is Noetherian, its submodule $H$ is finite. Thus $F$ is coherent by [F4], and its restriction to $U$ is $E$ by restriction of internal Hom. Dualizing a local frame of $Q|_U$ gives a rank-two frame of $E$. By [F1] choose finite global generators $\psi_1,\ldots,\psi_m$ of $F$; their restrictions generate $E$ on $U$. Local splittings in [F1] apply to this evaluation surjection on $U$. Choose $A=k[f_1,\ldots,f_d]$ and begin the indexed family with $\psi_j$ and $f_l\psi_j$. Fix a smooth closed point $x\in U$. By [F6] choose a nonempty principal neighborhood $D(h)\subset U$ of $x$. Its coordinate algebra is $A_h=k[f_1,\ldots,f_d,1/h]$; this affine chart is locally of finite type over $k$ by its displayed generators and quasi-compact by [F3], hence is finite type over the one-point spectrum of $k$. Since $x$ is closed in $U$, it is closed in $D(h)$, so the closed-point input in [F5] applies on this chart and gives $\kappa(x)=k$. The evaluation $A\to k$ has kernel generated by $f_l-f_l(x)$: successive substitutions in a polynomial express $p(f)-p(f(x))$ as a sum of multiples of these differences. Hence its kernel is maximal and, on the unchanged local ring of the open $U$, these differences generate $\mathfrak m_x$ and span $\mathfrak m_x/\mathfrak m_x^2$. The latter has dimension three by the smooth differential and rational cotangent interfaces in [F5]. In a free rank-two frame the jet-to-value map has kernel $\mathfrak m_xE_x/\mathfrak m_x^2E_x$, and multiplication gives an isomorphism $(\mathfrak m_x/\mathfrak m_x^2)\otimes_k E(x)\to\mathfrak m_xE_x/\mathfrak m_x^2E_x$; on the two basis vectors this is the identity on two copies of $\mathfrak m_x/\mathfrak m_x^2$, so it is independent of the frame. The kernel has dimension six and the value space has dimension two, giving $\dim_k J_x^1E=8$. Constants times the $\psi_j$ prescribe any value. The sections $(f_l-f_l(x))\psi_j$ lie in the coefficient span of our indexed family, have zero value, and represent the tensors $[f_l-f_l(x)]\otimes\psi_j(x)$, which span this entire kernel. Adjusting a prescribed value by these sections therefore realizes any first jet. [F1, F2, F3, F4, F5, F6, A1, given, algebra, construct]

2.1 If $W$ is smooth, at each $x\in W$ the generating values $\psi_j(x)$ contain a basis by [F6]. In any rank-two trivialization near $x$, the selected two columns have determinant nonzero in $\kappa(x)$. Shrink the neighborhood so that this determinant is a unit; its inverse exists locally because its germ is a unit, and the matrix criterion in [F6] makes the selected pair a frame there. Refine these frame neighborhoods inside $W$ by principal opens of $X$ using [F6]. They cover $W$, so [F3] under [A1] selects a finite subcover by nonempty $D(g_i)\subset W$, each with a pair $\psi_{a_i},\psi_{b_i}$ forming a frame. Each chart is affine with coordinate ring $B=A_{g_i}=k[f_1,\ldots,f_d,1/g_i]$; it is smooth by open restriction in [F2] and has chain dimension three by [F5]. Its ring is a nonzero domain by integrality in [F2]. To check the ring dimension required by [F7], [F8] writes every nonempty irreducible closed subset of $\operatorname{Spec}B$ as $V(\mathfrak p)$. These sets reverse prime inclusion; strictness is preserved because if $\mathfrak p\subsetneq\mathfrak q$, the point $\mathfrak p$ belongs to $V(\mathfrak p)$ but not $V(\mathfrak q)$. Conversely, inclusion of such closed subsets gives reverse inclusion of their defining prime ideals. Thus reversing a chain identifies the possible chain lengths in the space with the prime-chain lengths in $B$, and $\dim B=3$ in [F7]'s precise convention. As $k$ is algebraically closed, the criterion in External input applies with $\overline{k}=k$ and makes this chart geometrically integral. Also $k$ is infinite: if its elements were $c_1,\ldots,c_q$, the nonconstant polynomial $\prod_{j=1}^q(t-c_j)-1$ would have no root, contradicting [F2]. The frame $g_i\psi_{a_i},g_i\psi_{b_i}$ is free of rank two since $g_i$ is a unit on $D(g_i)$; its section module is $A_{g_i}^2$, which is finitely generated projective. All the hypotheses of [F7] are now checked. Its controlling family for the displayed algebra generators consists of this frame, its $f_l$-multiples and its $1/g_i$-multiples $\psi_{a_i},\psi_{b_i}$. These are restrictions of the actual global sections $g_i\psi_{a_i},g_i\psi_{b_i},f_lg_i\psi_{a_i},f_lg_i\psi_{b_i},\psi_{a_i},\psi_{b_i}$ on $U$. Adjoin these finite lists to the family in step 1.1. If $W$ is not smooth, use the family from step 1.1 alone. In either case enumerate the final indexed family as $\sigma_1,\ldots,\sigma_N$ and let $T=\operatorname{Spec}k[t_1,\ldots,t_N]$, with coefficient vector $\lambda$ giving $\sum_j\lambda_j\sigma_j$. Repetitions and relations cause no difficulty: the coefficient map is defined by this formula and is not required to be injective. The family still generates and spans all the stated jets, and in the smooth case contains every verified chart controlling family. Internal Hom identifies each $\sigma_j$ with a global functional on $Q|_U$. This proves all the original assertions. [F1, F2, F3, F5, F6, F7, F8, A1, step 1.1, algebra, construct] ∎
