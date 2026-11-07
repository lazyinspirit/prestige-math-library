---
id: lem-nagata-constrained-closures-separated-by-blowup
kind: lemma
title: A blowup separates closed loci subject to Nagata's incidence condition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-nagata-finite-affine-blowup-chart-gluing
  - lem-nagata-blowup-chart-separates-constrained-closures
  - thm-gluing-affine-schemes
  - def-closed-immersion-schemes
  - def-quotient-ring
  - def-multiplicative-subset-and-localisation
  - def-ideal-sheaf
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
proof_strategy: direct
axiom_use: No choice principle is assumed. The blowup and the two closures are constructed by finite affine charts and explicit localized kernel ideals; their canonical localization compatibilities are used for gluing.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Corrected Lemma 0.3, printed p. 662. The following proof reconstructs its scheme-theoretic separation, including nonflat base change.
---

## Statement

Let $p:Z\to X$ be a morphism of Noetherian schemes. Let $F\supseteq G$ be closed subschemes of $X$, and let $Y$ be a closed subscheme of $Z$. Suppose the inclusion
$$Y\cap p^{-1}(F)\subseteq p^{-1}(G)$$
holds scheme-theoretically. Form the blowup $\beta:X'\to X$ along the ideal sheaf of $G$ by its standard affine Rees-algebra charts, put $Z'=Z\times_XX'$, and write $p':Z'\to X'$. The restriction of $\beta$ to $U=X\setminus|G|$ is an isomorphism. Via that identification let $F'$ be the scheme-theoretic closure of $F|_U$ in $X'$, and let $Y'$ be the scheme-theoretic closure of $Y|_{p^{-1}(U)}$ in $Z'$. Then
$$Y'\cap p'^{-1}(F')=\varnothing.$$
The two closures and their disjointness use their full scheme structures. No flatness of $p$, reducedness, density of $U$, or dominance hypothesis is imposed. Empty schemes and the zero and unit center ideals are included.

## Statement references

[[lem-nagata-finite-affine-blowup-chart-gluing]]

[[lem-nagata-blowup-chart-separates-constrained-closures]]

[Deligne, corrected Lemma 0.3, printed p. 662](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

## Facts & Assumptions

**Given:** The morphism of Noetherian schemes, three closed subschemes and the scheme-theoretic incidence inclusion in the Statement.

[F1] For a finite ideal generating family, the affine Rees charts glue canonically to a separated finite-type scheme, independent of that family, compatibly with base localization. The construction is an isomorphism off the center; on the chart indexed by $a$, the extended ideal is $(a)$ and the chart localized at $a$ is the original ring localized at $a$. Over a Noetherian affine ring the constructed scheme is Noetherian. [[lem-nagata-finite-affine-blowup-chart-gluing]]

[F2] If $A\to B$, $I\subseteq J$, $JB\subseteq C+IB$, and $a\in J$, set $A'=A[J/a]$, $B'=B\otimes_AA'$. The kernel $L$ of $A'\to A[1/a]/IA[1/a]$ and the kernel $K$ of $B'\to B'[1/a]/CB'[1/a]$ satisfy $K+LB'=B'$, including arbitrary nonflat base change. [[lem-nagata-blowup-chart-separates-constrained-closures]]

[F3] Affine schemes glue along compatible open isomorphisms; closed subschemes on affine opens are given by quotient rings and their ideals. Localizing such a quotient and its defining ideal restricts it to the corresponding principal open. [[thm-gluing-affine-schemes]] [[def-closed-immersion-schemes]] [[def-quotient-ring]] [[def-ideal-sheaf]] [[def-multiplicative-subset-and-localisation]]

[F4] A finite-type algebra over a Noetherian ring is Noetherian. [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

## Proof

1.1 On an affine open $V=\operatorname{Spec}A$ of $X$, let $J$ be the ideal of $G|_V$ and take a finite generating family, possible because $A$ is Noetherian. Apply [F1]. If this affine open is restricted to a principal open, the constructed charts restrict to exactly the construction over the localized ring. Different generating families give the canonical same construction by [F1]. On intersections of affine opens of $X$, refine by affine principal opens inside the charts; the resulting identifications agree because all are the canonical localization maps. Their cocycle identities hold on that refinement, hence on the intersections. Thus [F3] glues the affine constructions over $X$, giving $X'$ and $\beta$ with the stated affine Rees charts. Each affine part is Noetherian by [F1], and the finite affine cover of Noetherian $X$ gives a finite affine cover of $X'$. Therefore $X'$ is Noetherian. Its base change $Z'$ is Noetherian as well: over an affine open $W=\operatorname{Spec}B$ of $p^{-1}(V)$, every induced chart is $\operatorname{Spec}(B\otimes_AA[J/a])$, a finite-type algebra over the Noetherian ring $B$, so [F4] applies. Finitely many such affine $W$ suffice because $Z$ is Noetherian, and each has finitely many induced Rees charts; hence $Z'$ is also quasi-compact. The isomorphism over $U$ is the one supplied locally by [F1] and glued by the same compatibilities. [F1, F3, F4, given, construct]

2.1 On any Noetherian affine scheme $\operatorname{Spec}D$, the closure of a closed subscheme of $D(a)$ given by an ideal $H\subseteq D_a$ is defined by $L_H=\ker(D\to D_a/H)$. This ideal restricts correctly to every principal open: if an element of $D_f$ maps to zero in $(D_a/H)_f$, multiplication by a power of $f$ makes its numerator zero in $D_a/H$, so that numerator lies in the localization of $L_H$; the reverse containment follows by applying the maps. Thus $L_H D_f=\ker(D_f\to(D_a/H)_f)$. The quotient rings by these compatible ideals glue by [F3]. On $D(a)$ the quotient ideal is $H$ itself. If a closed subscheme contains the original closed subscheme of $D(a)$, its ideal maps into $H$, so its ideal is contained in $L_H$; consequently the quotient by $L_H$ defines the smallest such closed subscheme. These arguments show both existence of the scheme-theoretic closure and its compatibility with all open restrictions. Noetherianity makes every ideal on the displayed affine charts finitely generated, so the glued ideal sheaves are coherent. [F3, step 1.1, construct, algebra]

3.1 Use the notation of step 1.1 over $V=\operatorname{Spec}A$ and $W=\operatorname{Spec}B\subseteq p^{-1}(V)$. Let $I$ be the ideal of $F|_V$ and let $C$ be the ideal of $Y|_W$. The inclusion $F\supseteq G$ means $I\subseteq J$. The scheme-theoretic incidence hypothesis means $JB\subseteq C+IB$, since $Y\cap p^{-1}(F)$ is cut out by $C+IB$. On the chart indexed by $a\in J$, put $A'=A[J/a]$ and $B'=B\otimes_AA'$. The inverse image of $U$ in this chart is $D(a)$, because the extended center ideal is $(a)$ by [F1]. Step 2.1 therefore identifies the ideal of $F'$ on $\operatorname{Spec}A'$ with $L=\ker(A'\to A[1/a]/IA[1/a])$, using $A'[1/a]=A[1/a]$ from [F1], and identifies the ideal of $Y'$ on $\operatorname{Spec}B'$ with $K=\ker(B'\to B'[1/a]/CB'[1/a])$. By [F2], $K+LB'=B'$. The intersection $Y'\cap p'^{-1}(F')$ on this affine chart is thus the spectrum of $B'/(K+LB')=0$, which is empty. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The affine opens just used cover $Z'$: affine opens of $X$ cover the base, their Rees charts cover $X'$, and affine opens of their inverse images in $Z$ cover the base change. The intersection is empty on each such open by step 3.1, hence empty globally. If a center ideal is zero, its chart construction is empty by [F1]; if it is the unit ideal, the blowup is the identity and [F2] gives the already disjoint loci. An empty original scheme or closed locus is handled by the same zero quotient or unit ideal calculations. Thus all cases of the Statement are included, without a flatness or reducedness assumption. [F1, F2, F3, step 3.1, algebra] ∎
