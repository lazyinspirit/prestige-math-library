---
id: thm-hilbert-scheme-represents-projective-flat-families
kind: theorem
title: "Projective Hilbert schemes represent all flat finitely presented families"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-hilbert-functor-of-flat-projective-subschemes
  - def-projective-morphism-coherent-bundle-convention
  - lem-hilbert-coherent-projective-bundle-construction
  - lem-hilbert-noetherian-base-fixed-polarization
  - lem-hilbert-family-vanishing-locus
  - lem-hilbert-families-fpqc-descent
  - thm-proper-pushforward-coherent
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. Let $S$ be any locally Noetherian scheme, possibly non-quasi-compact, let $X\to S$ be projective of finite presentation in the convention of [[def-projective-morphism-coherent-bundle-convention]], and let $L$ be relatively ample. For every fixed polynomial $P$, with the test category and family conditions of [[def-hilbert-functor-of-flat-projective-subschemes]], the functor $\operatorname{Hilb}^{P,L}_{X/S}$ is represented on **all $S$-schemes** by a proper finitely presented scheme $H^{P,L}_{X/S}$ admitting a global closed immersion into $\mathbb P_S(E')$ for a coherent sheaf $E'$ on $S$. It carries a universal closed finitely presented flat family $\mathcal Z\subseteq X\times_SH^{P,L}_{X/S}$. If a specified global embedding $X\hookrightarrow\mathbb P^n_S$ induces $L$, the representative has a global closed embedding in one $\mathbb P^N_S$ (H-projectivity). The full functor is represented by $H_{X/S}=\coprod_P H^{P,L}_{X/S}$, which is locally of finite presentation and need not be proper, quasi-compact, or of finite type. For **every** base change $S'\to S$, including non-Noetherian $S'$, the pulled-back schemes and families represent the corresponding Hilbert functors of $X_{S'}/S'$ with $L_{S'}$ on all $S'$-schemes. No global $\mathbb P^n_S$ embedding or quasi-compactness of $S$ is assumed in the general assertion.

## Facts & Assumptions

**Given:** AC and DC; a locally Noetherian base $S$, a projective finitely presented $X/S$ with a global coherent-projective-bundle embedding, a relatively ample $L$, and a polynomial $P$.

[F1] Global projectivity means the coherent-projective-bundle convention in [[def-projective-morphism-coherent-bundle-convention]]. Its ambient fixed-polynomial Hilbert construction without quasi-compactness is [[lem-hilbert-coherent-projective-bundle-construction]]. Killing an ideal inside a flat family has a universal closed locus locally on a Noetherian base ([[lem-hilbert-family-vanishing-locus]]).

[F2] Over a Noetherian base with any chosen relatively ample polarization the representative is proper and finitely presented on all tests ([[lem-hilbert-noetherian-base-fixed-polarization]]).

[F3] Families have effective descent and locally constant polynomial for every chosen relatively ample polarization ([[lem-hilbert-families-fpqc-descent]]). Proper pushforward of a coherent sheaf is coherent on a locally Noetherian base, by applying [[thm-proper-pushforward-coherent]] on its Noetherian affine opens.

## Proof

1.1 Choose the global embedding $X\hookrightarrow Y=\mathbb P_S(E)$ from [F1], and let $M=\mathcal O_Y(1)|_X$ be its auxiliary polarization. For every polynomial $Q$, [F1] provides a globally projective ambient representative $H_Q(Y)$ and its universal flat family. On every Noetherian affine open of that representative impose vanishing of the map from the pulled-back ideal of $X$ to the universal family. The universal closed loci agree on overlaps and glue to a global closed subscheme $H_Q(X)\subseteq H_Q(Y)$. Their condition for every arbitrary test scheme is exactly that the family lie in $X$, so $H_Q(X)$ represents the $M$-polynomial-$Q$ subfunctor, with its restricted universal family. Its ambient Plücker line $A_Q$ is globally relatively very ample and its projective-bundle embedding is global. [F1, construct]

2.1 Form $H^M=\coprod_QH_Q(X)$ with its universal family. By [F3], the $M$-polynomial loci of every family on an arbitrary test scheme are open and closed. Hence the coproduct represents the full Hilbert functor, and its glued universal family pulls back to each test family scheme theoretically. On this universal family the $L$-polynomial is also locally constant by [F3]. Its polynomial-$P$ locus is therefore an open and closed subscheme $H^{P,L}\subseteq H^M$, representing exactly $\operatorname{Hilb}^{P,L}_{X/S}$ on all tests. This defines one global scheme and ideal, independently of any choices of local embeddings or powers of $L$. [F3, step 1.1, construct]

3.1 For each affine open $U\subseteq S$, the ring of $U$ is Noetherian. The restriction $H^{P,L}_U$ represents precisely the Noetherian-base functor of [F2], so the two representatives have a unique isomorphism carrying their universal ideals to each other. These isomorphisms are compatible on overlaps by their common functor and uniqueness, not merely on points. Consequently $H^{P,L}\to S$ is proper and of finite presentation: both properties are local on the base and hold on every $U$ by [F2]. In particular $H^{P,L}_U$ is quasi-compact, without asserting that $S$ or $H^{P,L}$ is quasi-compact globally. [F2, step 2.1, algebra]

4.1 Define a global line bundle $A$ on $H^M$ by $A|_{H_Q(X)}=A_Q$, and restrict it to $H^{P,L}$. On any affine $U$ in step 3.1, quasi-compactness implies that $H^{P,L}_U$ meets only finitely many components $H_Q(X)_U$. Each intersection is open and closed and hence closed in its projective component, with the restricted $A_Q$ relatively very ample. A finite disjoint union of these embeddings is a closed embedding into $\mathbb P_U(\bigoplus_QE_Q)$: the finitely many linear closed subspaces $\mathbb P_U(E_Q)$ in this projective bundle are pairwise disjoint, and the tautological line restricts to the corresponding tautological line on each. Thus $A|_{H^{P,L}_U}$ itself is relatively very ample, with no local power and no uniform exponent needed. Let $E'=q_*A$, coherent by [F3]. Its evaluation is onto globally since it is onto over every $U$. The resulting map $H^{P,L}\to\mathbb P_S(E')$ is a closed immersion: on each $U$, the finite generating systems already defining the preceding embedding are included among the complete sections of $A$, so on each section-nonvanishing chart their ratios generate the coordinate algebra; the additional complete sections preserve this surjectivity. Properness gives closed image. Closed immersion is local on the target, so these checks yield a global coherent-projective-bundle embedding. [F3, step 1.1, step 3.1, algebra]

5.1 If the specified embedding has $E=\mathcal O_S^{n+1}$ and induces $L$, step 1.1 already constructs its fixed-$P$ representative as a closed subscheme of the single Grassmannian with free source $\operatorname{Sym}^r\mathcal O_S^{n+1}$. Its exterior power is free of a fixed finite rank, so its global Plücker embedding lies in one $\mathbb P^N_S$. Finally for every $S'\to S$ and every $S'$-scheme $T$, the canonical identification $X_{S'}\times_{S'}T=X\times_ST$ identifies the embedded family conditions, their polarizations, and fibre polynomials. The original representing bijections therefore show that each $H^{P,L}\times_SS'$ represents the base-changed subfunctor, with the pulled-back universal family, and the coproduct represents the full base-changed functor. No Noetherian property of $S'$ or $T$ enters this argument. [F1, F3, step 2.1, step 4.1, algebra] ∎
