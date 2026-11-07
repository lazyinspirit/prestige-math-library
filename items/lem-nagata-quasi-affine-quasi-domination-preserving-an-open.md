---
id: lem-nagata-quasi-affine-quasi-domination-preserving-an-open
kind: lemma
title: Quasi-affine quasi-domination preserving a larger open
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-nagata-quasi-affine-target-quasi-domination
  - lem-nagata-constrained-closures-separated-by-blowup
  - lem-nagata-coherent-ideal-extension-with-controlled-support
  - lem-nagata-admissible-blowups-compose
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-separatedness-gluing-overlap-criterion
proof_strategy: direct
axiom_use: No choice principle is assumed. Coherent kernel ideals, finite affine equalizers and the locally proved blowup composition lemma suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Theorem 2.4 Case 3, internal pp. 16–17, read in full; scheme incidence below uses the explicit image kernel instead of thickening by a support argument.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Theorem 1.2 Case 3, printed pp. 665–666, read in full.
---

## Statement

Let $X,Y$ be Noetherian schemes and $p:Y\to X$ a finite-type quasi-affine morphism, meaning locally over affine opens of $X$ an open subscheme of an affine scheme over that open. Let $U\subseteq V\subseteq X$ be open with $U$ dense in $X$, and let $f:U\to Y$ be an $X$-morphism whose graph is closed in $V\times_XY$. There is a coherent ideal $\mathcal J$ on $X$, unit on $V$, such that the single blowup $\beta:X'=\operatorname{Bl}_{\mathcal J}(X)\to X$ has a dense open $T\subseteq X'$ containing the unchanged $U$ and an $X$-morphism $\widetilde f:T\to Y$ extending $f$, whose graph is closed in $X'\times_XY$. The blowup is proper and is an isomorphism over all of $V$. No reducedness or schematic-density hypothesis on $U$ is imposed. Empty schemes are included.

## Statement references

[Conrad, Theorem 2.4 Case 3, internal pp. 16–17](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The Noetherian schemes, finite-type quasi-affine morphism, dense open inclusions and section with the stated closed graph over $V$.

[F1] The quasi-affine assertion when the protected open equals the section domain is proved by a single blowup, with center exactly its complement. [[lem-nagata-quasi-affine-target-quasi-domination]]

[F2] Given Noetherian $Z\to X$, closed $F\supseteq G$ and closed $C\subseteq Z$ with $C\cap p^{-1}(F)\subseteq p^{-1}(G)$ scheme-theoretically, blowing up $G$ separates the strict closures of $C$ and $F$. [[lem-nagata-constrained-closures-separated-by-blowup]]

[F3] A coherent ideal on an open, unit off a prescribed closed subset, extends to the ambient Noetherian scheme while remaining unit off that subset. [[lem-nagata-coherent-ideal-extension-with-controlled-support]]

[F4] Compositions of coherent-ideal blowups of a Noetherian scheme are single such blowups, preserving any open avoided by all centers. These blowups are proper and are isomorphisms off the center, with schematically dense center complement. [[lem-nagata-admissible-blowups-compose]] [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F5] Localization is exact and commutes with finite equalizers. Affine opens of a separated scheme over an affine scheme have affine intersections. [[cor-localisation-commutes-with-kernels-images-and-cokernels]] [[thm-separatedness-gluing-overlap-criterion]]

## Proof

1.1 We will use an explicit coherent image ideal. For a separated morphism $r:D\to S$ of Noetherian schemes set $H=\ker(\mathcal O_S\to r_*\mathcal O_D)$. Over an affine base, the inverse image is Noetherian and has a finite affine cover whose intersections are affine by [F5]. Its sections are the equalizer of the two maps between finite products of cover and intersection coordinate rings. Restriction to a principal base open localizes all those rings, so exact localization in [F5] shows that the kernel ideal restricts by localization. It is therefore a quasi-coherent ideal; Noetherianity makes it and its finite relation kernels finitely generated, proving coherence directly. Its sections pull back to zero, so $D\to S$ factors through the closed subscheme defined by $H$. On any open with empty inverse image this ideal is unit. The same construction for a quasi-compact open immersion gives its scheme-theoretic closure, since the kernel is the largest ideal vanishing on that open. [F5, given, construct, algebra]

2.1 Let $C$ be the scheme-theoretic closure of $f(U)$ in $Y$ and give the closed subset $\overline{V\setminus U}\subseteq X$ its reduced closed structure $F$. The section image is an open subscheme of its closure: over $V$ its closure is exactly the given closed graph, identified with $U$. Thus $C|_{p^{-1}(V)}=f(U)$. The closure and its coherent ideal can be constructed by step 1.1, since the section over $U$ is closed in $p^{-1}(U)$, and all schemes are Noetherian and separated over the relevant base. The closed subset $|F|$ avoids $U$, and $|F|\cap V=V\setminus U$. Put $D=C\cap p^{-1}(F)$ with its full scheme structure. This scheme has empty inverse image over $V$. Apply step 1.1 to $D\to X$, obtaining the coherent kernel ideal defining a closed subscheme $G$. Because the ideal of $F$ vanishes on $D$, it is contained in the ideal of $G$, so $G\subseteq F$. Because $D$ is empty over $V$, $G$ is empty there. Finally the factorization through $G$ gives the scheme-theoretic incidence $C\cap p^{-1}(F)\subseteq p^{-1}(G)$. [F5, step 1.1, construct, algebra]

3.1 Blow up $G$, writing $X_1\to X$ and $Y_1=Y\times_XX_1$. This blowup is the identity over $V$ by [F4]. Let $F_1$ be the strict closure of $F$ off $G$. By [F2] the strict closure of $C$ in $Y_1$ is disjoint from the inverse image of $F_1$. In particular the scheme-theoretic closure $C_1$ of the unchanged $f(U)$ in $Y_1$ is disjoint from that inverse image, since it is contained in this strict closure. Set $X_0=X_1\setminus|F_1|$. Then $C_1$ lies over $X_0$, and $X_0\cap V=U$ because $F_1|_V=F|_V$ has support $V\setminus U$. The open $U$ is dense in $X_1$: the complement of $G$ is dense in $X_1$ by [F4], and $U$ is dense in that complement, which is an unchanged open of $X$. Therefore $U$ is dense also in $X_0$. [F2, F4, step 2.1, construct, algebra]

4.1 The morphism $C_1\to X_0$ is finite-type quasi-affine: it is the restriction of a closed subscheme of the base change of $Y$, and closed subschemes of open subschemes of affine schemes are quasi-affine. Apply [F1] over $X_0$ to its section $U\to C_1$. Obtain a coherent ideal $I_0$, unit off $X_0\setminus U$, and a blowup $P\to X_0$ with an open $T\subseteq P$ containing $U$ and a map $g:T\to C_1$ whose graph is closed in $P\times_{X_0}C_1$. Since $X_0\cap V=U$, the ideal $I_0$ is unit on $X_0\cap V$. Apply [F3] with ambient $X_1$, open $X_0$ and closed subset $X_1\setminus V$, obtaining a coherent ideal $I_1$ restricting to $I_0$ and unit on $V$. Its blowup $X_2\to X_1$ restricts to $P$ over $X_0$. [F1, F3, step 3.1, construct]

5.1 View $T$ as an open of $X_2$. The map $g$ has graph closed in $X_2\times_XY$. Indeed $C_1$ is closed in $Y_1$, so $X_2\times_{X_1}C_1$ is closed in $X_2\times_XY$. Because $C_1$ lies over $X_0$, this closed scheme is exactly $P\times_{X_0}C_1$, in which the graph is already closed by step 4.1. The copy of $U$ remains dense in $X_2$: the second center avoids $V$, its complement is dense by [F4], and $U$ is dense in that unchanged open of $X_1$ by step 3.1. Hence $T$ is dense. Finally [F4] compresses $X_2\to X_1\to X$ to the single blowup of a coherent ideal $\mathcal J$ unit on $V$, preserving its open $T$, its graph and its extension of $f$. Properness and the unchanged restriction over $V$ follow from [F4]. Empty $X$ gives empty constructions; empty $Y$ forces empty $U$ and hence empty $X$ by density. Empty incidence schemes give unit kernel ideals and identity blowups, so no exceptional case has been excluded. [F1, F4, step 3.1, step 4.1, algebra] ∎
