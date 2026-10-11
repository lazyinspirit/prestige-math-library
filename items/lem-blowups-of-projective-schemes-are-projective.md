---
id: lem-blowups-of-projective-schemes-are-projective
kind: lemma
title: "Blowups of integral projective complex schemes are projective"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup,
       cor-segre-veronese-embedding, cor-finite-variable-polynomial-ring-noetherian,
       def-ample-invertible-sheaf, def-axiom-of-choice,
       def-blowup-fractional-ideal, def-blowup-scheme-along-ideal,
       def-closed-immersion-schemes, def-integral-scheme,
       def-invertible-sheaf, def-locally-noetherian-and-noetherian-scheme,
       def-projective-morphism-pre-proj, def-quasi-coherent-ideal-sheaf,
       def-quasi-compact-and-quasi-separated-scheme,
       def-relative-projective-space-standard-charts,
       def-very-ample-invertible-sheaf-relative,
       lem-base-change-open-closed-immersions,
       lem-blowup-reduced-integral-under-domain-rees,
       lem-closed-immersion-affine-quotient-and-base-change,
       lem-eventual-global-generation-coherent-twists, lem-field-is-noetherian,
       lem-twisting-sheaf-projective-space-ample,
       thm-coherent-sheaves-abelian-noetherian-scheme,
       thm-noetherian-ring-quotients-and-localisations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "The Stacks Project, Divisors, Section 31.33 (Blowing up), Lemma 31.33.13"
      url: "https://stacks.math.columbia.edu/tag/01OF"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry (June 27, 2011 author draft), Section 19.4"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an integral projective complex scheme of
finite type, with structure morphism $X\to\operatorname{Spec}\mathbb C$
([[def-projective-morphism-pre-proj]]), and let $\mathcal I\subseteq\mathcal O_X$
be a nonzero finite-type quasi-coherent ideal sheaf
([[def-quasi-coherent-ideal-sheaf]]). Then the blowup
$\operatorname{Bl}_{\mathcal I}X$ of [[def-blowup-scheme-along-ideal]] is
projective over $\mathbb C$: for some $M\ge0$ its structure morphism factors as
a closed immersion
$\operatorname{Bl}_{\mathcal I}X\hookrightarrow\mathbb P^M_{\mathbb C}$
followed by the projection. Consequently every composition of blowups of an
integral projective complex scheme along nonzero finite-type ideal sheaves
remains integral and projective over $\mathbb C$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integral finite-type projective complex scheme $X$, and a nonzero finite-type quasi-coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$.

[F1] [[cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup]] and [[def-blowup-fractional-ideal]]: for an integral finite-type $k$-scheme $X$, an invertible sheaf $L$ and meromorphic sections $s_0,\dots,s_n$ of $L$, not all zero, with generated subsheaf $F=\sum_i\mathcal O_Xs_i\subseteq L$, the fractional blowup $B=\operatorname{Proj}_X\bigoplus_{k\ge0}(F\otimes L^{-1})^k$ is integral and $(\pi,\psi):B\to X\times_k\mathbb P^n_k$ is the schematic closure of the graph of the induced rational map, hence a closed immersion; here $F\otimes L^{-1}$ is a fractional ideal in the sense of [[def-blowup-fractional-ideal]].

[F2] [[thm-coherent-sheaves-abelian-noetherian-scheme]] and [[lem-eventual-global-generation-coherent-twists]]: on a locally Noetherian scheme a quasi-coherent module is coherent exactly when it is of finite type, so $\mathcal I$ is coherent on $X$; and on a scheme projective over the Noetherian ring $\mathbb C$ with an ample invertible sheaf $L_0$, every coherent module $G$ has $G\otimes L_0^{\otimes d}$ globally generated for all sufficiently large $d\ge d_0(G)$.

[F3] [[lem-twisting-sheaf-projective-space-ample]], [[def-very-ample-invertible-sheaf-relative]], [[def-relative-projective-space-standard-charts]] and [[def-ample-invertible-sheaf]]: the twisting sheaf $\mathcal O_{\mathbb P^N_{\mathbb C}}(1)$ is invertible with coordinate sections $x_j$ whose nonvanishing loci are exactly the standard affine charts $U_j$, and it is ample on $\mathbb P^N_{\mathbb C}$; absolute ampleness means quasi-compactness of the scheme together with an affinity test by nonvanishing loci of sections of positive powers.

[F4] [[lem-base-change-open-closed-immersions]], [[lem-closed-immersion-affine-quotient-and-base-change]] and [[def-closed-immersion-schemes]]: closed immersions are affine and Zariski-local on the target — over an affine open $\operatorname{Spec}A$ a closed immersion is $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ — they are stable under arbitrary base change, and a composite of closed immersions is again a closed immersion.

[F5] [[cor-segre-veronese-embedding]]: the bidegree-$(1,1)$ Segre map $\mathbb P^N_{\mathbb C}\times_{\mathbb C}\mathbb P^n_{\mathbb C}\to\mathbb P^{(N+1)(n+1)-1}_{\mathbb C}$ is a closed embedding.

[F6] [[lem-blowup-reduced-integral-under-domain-rees]] and [[def-integral-scheme]]: blowing up an integral scheme in a nonzero finite-type quasi-coherent ideal sheaf yields an integral scheme.

[F7] [[def-axiom-of-choice]]: the Axiom of Choice is the standing hypothesis, inherited here from the relative Proj construction and from the eventual global generation furnished by Serre's criterion.

## Proof

1.1 $X$ carries the closed immersion $i:X\hookrightarrow\mathbb P^N_{\mathbb C}$ given by its projectivity, and $L_0=i^*\mathcal O_{\mathbb P^N_{\mathbb C}}(1)$ is invertible. The standard charts $U_0,\dots,U_N$ are affine and cover $\mathbb P^N_{\mathbb C}$, so the finitely many intersections $X\cap U_j=X_{s_j}$, where $s_j=i^*(x_j)\in\Gamma(X,L_0)$, are affine: each is a closed subscheme of the affine chart $U_j$, hence $\operatorname{Spec}(A_j)$ for a quotient $A_j$ of the polynomial ring over $\mathbb C$ [lem-closed-immersion-affine-quotient-and-base-change]. Every $A_j$ is Noetherian [lem-field-is-noetherian, cor-finite-variable-polynomial-ring-noetherian, thm-noetherian-ring-quotients-and-localisations], so this finite affine cover exhibits the scheme $X$ as locally Noetherian and quasi-compact [def-locally-noetherian-and-noetherian-scheme, def-quasi-compact-and-quasi-separated-scheme]. The coordinate section $x_j$ has nonvanishing locus $U_j$ and pullback along a closed immersion of an invertible sheaf has as nonvanishing locus the preimage of the original one [def-very-ample-invertible-sheaf-relative, def-closed-immersion-schemes], so the charts $X_{s_j}=X\cap U_j$ are affine and cover $X$; the ampleness criterion of [def-ample-invertible-sheaf] therefore makes $L_0$ ample on $X$. [F3, given, construct, algebra]

2.1 By [F2] the quasi-coherent finite-type ideal sheaf $\mathcal I$ is coherent on the locally Noetherian $X$, and since $X$ is projective over the Noetherian ring $\mathbb C$ and $L_0$ is ample there is $d_0$ such that $\mathcal I\otimes L_0^{\otimes d}$ is globally generated for every $d\ge d_0$. Fix $d\ge\max(1,d_0)$, put $L=L_0^{\otimes d}$ and $\mathcal F=\mathcal I\otimes L\subseteq L$, and choose finitely many global sections $s_0,\dots,s_n\in\Gamma(X,\mathcal F)$ generating $\mathcal F$. To justify finiteness, global generation supplies finitely many such sections generating each finite-type stalk; their coherent cokernel vanishes on a neighbourhood of that point (on an affine chart, each of its finitely many generators is killed after localizing away from that point). Quasi-compactness of $X$ supplies finitely many of these neighbourhoods, and the union of their finite section tuples generates $\mathcal F$ everywhere. Since $\mathcal I\ne0$ and $L$ is invertible, $\mathcal F\ne0$, so not all $s_i$ are zero and $\mathcal F=\sum_i\mathcal O_Xs_i$ as subsheaves of $L$. [F2, step 1.1, construct]

3.1 Apply [F1] to the integral finite-type $\mathbb C$-scheme $X$, the invertible sheaf $L$ and the meromorphic sections $s_0,\dots,s_n$: the fractional blowup $B=\operatorname{Proj}_X\bigoplus_{k\ge0}(\mathcal F\otimes L^{-1})^k$ is integral and $(\pi,\psi):B\to X\times_{\mathbb C}\mathbb P^n_{\mathbb C}$ is the schematic closure of the graph of the induced rational map, hence a closed immersion. [F1, step 2.1, construct]

4.1 The canonical isomorphisms $\mathcal F\otimes L^{-1}=(\mathcal I\otimes L)\otimes L^{-1}\cong\mathcal I\otimes(L\otimes L^{-1})\cong\mathcal I$ of $\mathcal O_X$-modules [def-invertible-sheaf] identify the graded $\mathcal O_X$-algebras $\bigoplus_{k\ge0}(\mathcal F\otimes L^{-1})^k$ and $\bigoplus_{k\ge0}\mathcal I^k$, hence induce an $X$-isomorphism $B\cong\operatorname{Proj}_X\bigoplus_{k\ge0}\mathcal I^k=\operatorname{Bl}_{\mathcal I}X$ [def-blowup-scheme-along-ideal, def-blowup-fractional-ideal]. Composing with the closed immersion of step 3.1, the blowup $\operatorname{Bl}_{\mathcal I}X$ is a closed subscheme of $X\times_{\mathbb C}\mathbb P^n_{\mathbb C}$ over $X$. [F1, step 3.1, algebra]

5.1 Base change of the closed immersion $X\hookrightarrow\mathbb P^N_{\mathbb C}$ along $\mathbb P^n_{\mathbb C}\to\operatorname{Spec}\mathbb C$ is a closed immersion $X\times_{\mathbb C}\mathbb P^n_{\mathbb C}\hookrightarrow\mathbb P^N_{\mathbb C}\times_{\mathbb C}\mathbb P^n_{\mathbb C}$ [F4], and the Segre embedding of [F5] is a closed immersion $\mathbb P^N_{\mathbb C}\times_{\mathbb C}\mathbb P^n_{\mathbb C}\hookrightarrow\mathbb P^M_{\mathbb C}$ with $M=(N+1)(n+1)-1$. A composite of closed immersions is again a closed immersion [F4], so $\operatorname{Bl}_{\mathcal I}X$ is a closed subscheme of $\mathbb P^M_{\mathbb C}$; all exhibited maps are morphisms over $\mathbb C$, so the structure morphism $\operatorname{Bl}_{\mathcal I}X\to\operatorname{Spec}\mathbb C$ factors as this closed immersion followed by the projection, and $\operatorname{Bl}_{\mathcal I}X$ is projective over $\mathbb C$ in the sense of [def-projective-morphism-pre-proj]. [F4, F5, step 4.1, given]

6.1 For the composition clause argue by induction on the number of factors: let $X_0$ be integral projective over $\mathbb C$ and $X_{k+1}=\operatorname{Bl}_{\mathcal I_k}X_k$ for nonzero finite-type quasi-coherent ideal sheaves $\mathcal I_k\subseteq\mathcal O_{X_k}$. If $X_k$ is integral projective then steps 1.1-5.1 applied to $(X_k,\mathcal I_k)$ show that $X_{k+1}$ is projective over $\mathbb C$, and [F6] shows that it stays integral, so the induction runs through every finite composition. [F6, step 5.1, algebra]

7.1 Boundaries and Choice accounting. An integral scheme is nonempty and $\mathcal I\ne0$ by hypothesis, so the empty and zero cases are excluded; the chosen twist satisfies $d\ge1$; the endpoint $n=0$ of a single generator is allowed, the Segre factor then being $\mathbb P^0_{\mathbb C}$ with $M=N$; and $N=0$ is covered by the same argument with the single chart $U_0$. The Axiom of Choice [F7] is inherited exactly from [F1] and [F2]; no further selection is made. [F1, F2, F7, given, cases: empty zero endpoints] ∎

## Remarks

The new item is the projectivity input used by the smooth-projective hyperresolution theorem on the same page. The proof passes through the graph-closure corollary rather than through a relative-ample Rees sheaf: the invariance of Rees Proj under an invertible twist for an invertible $L$ lets the eventually globally generated twist produce an actual closed immersion into a product of projective spaces.
