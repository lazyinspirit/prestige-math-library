---
id: lem-av7-classical-zmt-relative-integral-closure-neighbourhoods
kind: lemma
title: Classical Zariski Main from relative integral-closure neighbourhoods
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [def-axiom-of-choice, def-classical-algebraic-prevariety-regular-maps-and-varieties, lem-av7-zero-dimensional-standard-smooth-local-tools, lem-av7-relative-integral-closure-finite-affine-charts, lem-av7-integral-closure-elementary-etale-base-change, lem-av7-coprime-factorization-finite-component-neighbourhoods, thm-faithfully-flat-ring-map-characterisations]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Stacks Project, nonaffine Zariski Main, Lemmas 37.43.1–37.43.3
      url: https://stacks.math.columbia.edu/tag/02LQ
    - title: Grothendieck and Dieudonne, EGA IV, part 4, 18.12.12–18.12.15
      url: https://www.numdam.org/item/PMIHES_1967__32__5_0.pdf
---

## Statement

Assume the Axiom of Choice and let $k$ be algebraically closed. Let $f:X\to Y$ be a **separated morphism of finite type with finite fibres** between classical varieties, allowing reduced reducible or empty varieties. On each affine $U\subseteq Y$, take the integral closure $C_U$ of $k[U]$ in $\Gamma(f^{-1}U,\mathcal O_X)$. The finite affine spaces of these algebras glue to a finite classical morphism $\nu:N\to Y$, and their evaluation maps glue to an open immersion $j:X\hookrightarrow N$ with $f=\nu\circ j$.

Thus every separated quasi-finite classical morphism factors as an open immersion followed by a finite morphism. Its finite affine atlas makes both source and target quasi-compact; separatedness gives quasi-separatedness. No quasi-projectivity, normality, separability, or smoothness assumption is added. This item proves the classical finite-type case; it makes no assertion for arbitrary non-Noetherian schemes.

## Facts & Assumptions

**Given:** AC, $k$ and the morphism of the Statement, with its full separated finite-type finite-fibre hypotheses.

[F1] The relative-integral-closure charts are finite and reduced, glue canonically to $N$, and give the evaluation map $j$. Sections commute with flat base change by the finite-affine-cover equalizer proof ([[lem-av7-relative-integral-closure-finite-affine-charts]]).

[F2] Elementary etale changes are open and flat, stable under base change and composition, preserve reducedness, and induce faithfully flat local ring maps at selected points ([[lem-av7-zero-dimensional-standard-smooth-local-tools]]). Their residue fields at classical points are $k$.

[F3] Relative integral closure commutes with these changes ([[lem-av7-integral-closure-elementary-etale-base-change]]).

[F4] After an elementary etale change at a chosen fibre point, the changed source decomposes into a finite clopen piece containing just that selected fibre point, and its clopen complement ([[lem-av7-coprime-factorization-finite-component-neighbourhoods]]).

[F5] A faithfully flat tensor functor detects zero modules, and a faithfully flat ring map is surjective on prime spectra ([[thm-faithfully-flat-ring-map-characterisations]]). Classical varieties are separated prevarieties with finite affine atlases ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]). AC is assumed ([[def-axiom-of-choice]]).

## Proof

1.1 Construct $N$ and $j$ by [F1]; their composite is $f$, since evaluation on the image of a base function is its pullback by $f$. Fix $x\in X$ and $y=f(x)$. By [F4], after a chosen elementary change $(T,t)\to(Y,y)$ the source decomposes as $X_T=V\sqcup W$, where $V\to T$ is finite and $V_t$ consists of the selected lift of $x$. Work on an affine neighbourhood of $t$ if necessary. Flat base change of sections in [F1] and integral-closure compatibility [F3] identify the relative normalization of $T$ in $X_T$ with $N_T=N\times_Y T$. The section algebra of the disjoint union is a product, and relative integral closure in a product is the product of the closures: one inclusion follows by projection of monic equations, and for the other multiply finitely many monic equations annihilating the two components. Since the algebra of $V$ is finite, it is already integral over the base. Therefore $N_T=V\sqcup N_W$, with $j_T|_V$ the identity and $j_T(W)\subseteq N_W$. In particular $j_T^{-1}(V)=V$ and this restriction is an isomorphism. [F1, F2, F3, F4, construct, algebra]

2.1 The projection $N_T\to N$ is an elementary change by [F2], hence open. Let $H$ be the image of the open piece $V\subseteq N_T$; it is an open neighbourhood of $j(x)$. The map $p:V\to H$ is surjective and locally flat, and the square with vertical maps $j$ and $j_T$ identifies $X_H\times_H V$ with $V$, by step 1.1. We prove below that this forces $X_H\to H$ to be an isomorphism, using only affine algebra and the sheaf of regular functions. This is the nonaffine descent step; no chartwise factorization is assumed to glue by itself. [F1, F2, step 1.1, construct]

3.1 Fix a classical point $h\in H$ and a classical point $v\in V$ above it. Put $A=\mathcal O_{H,h}$ and $B=\mathcal O_{V,v}$. The local map $A\to B$ is faithfully flat by [F2]. Restricting the square of step 2.1 to these local affine models gives $X_A\times_A\operatorname{Spec}B\cong\operatorname{Spec}B$. Here $X_A$ is obtained by localizing the finite affine source cover at the base denominators; its charts and overlaps are ordinary localized rings. Its closed fibre has exactly one point: the local elementary-change fibre $B/\mathfrak m_A B$ is the selected zero-dimensional regular fibre factor, hence equals $k$ by [F2]. Reducing the displayed isomorphism by $\mathfrak m_A$ therefore identifies that fibre with $\operatorname{Spec}k$. Choose an affine open $Q\subseteq X_A$ containing this point. The pullback $Q_B$ is open in $\operatorname{Spec}B$ and contains its closed point. Every open neighbourhood of the closed point of a local spectrum is the entire spectrum, so $Q_B=\operatorname{Spec}B$. [F2, F5, step 2.1, construct, algebra]

4.1 Write $Q=\operatorname{Spec}D$. The isomorphism of step 3.1 says $D\otimes_A B=B$ by the natural algebra map. Flatness and [F5] annihilate the kernel and cokernel of $A\to D$, so $A\to D$ is an isomorphism. The complement $X_A\setminus Q$ has empty pullback to $B$. If it contained a point with prime $\mathfrak q$ in an affine source chart, faithful flatness after tensoring with the residue field at $\mathfrak q$ would give a point above it; equivalently use the surjectivity on spectra in [F5] for that chart base change. Thus the complement is empty and $X_A\cong\operatorname{Spec}A$. In particular $j$ has exactly one point over $h$ and an isomorphism of its local rings there. This proves these assertions for every classical point of $H$. [F2, F5, step 3.1, algebra]

5.1 The map $j$ is open onto its image. For an open $O\subseteq X$ and a point $x\in O$, use the construction of step 1.1. The open subset $O_T\cap V$ of $N_T$ projects to an open subset of $N$ containing $j(x)$, by [F2]. Every point of this projection is the image under $j$ of a point of $O$, because $j_T$ is the identity on $V$ and the square is Cartesian. Conversely every $j(x)$ with $x\in O$ belongs to one of these projections. Their union is therefore $j(O)$, which is open. The descent argument of steps 3.1–4.1 shows that over every $H$ of step 2.1 the map is bijective and induces isomorphisms on local rings. These $H$ cover $j(X)$, so $j$ is a homeomorphism onto the open subset $j(X)$ with an isomorphism of sheaves: a sheaf morphism whose stalk maps are isomorphisms is an isomorphism, as local inverses agree on overlaps. Thus $j$ is an open immersion. Since $\nu$ is finite by [F1], the required factorization follows. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1, construct]

6.1 If $X$ is empty, the section algebra and its integral closure are zero on every chart, so $N$ is empty and the factorization is immediate. Reducible cases were retained in [F1]; after elementary change they remain reduced by [F2]. The finite-type and finite-fibre hypotheses were used in [F1] and [F4], and separatedness was used to make the finite neighbourhood closed in [F4]. AC is inherited from the algebraic localization, flat prime-lifting and standard-smooth suppliers. Perfectness is not needed for this factorization; it remains necessary in the separate regular-to-smooth curve consequence. No later scheme theorem is used as a premise. [F1, F2, F3, F4, F5, step 5.1] ∎
