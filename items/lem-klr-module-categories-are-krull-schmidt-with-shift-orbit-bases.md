---
id: lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases
kind: lemma
title: "Graded Krull-Schmidt and shift-orbit bases for finitely generated KLR modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-klr-pbw-basis-theorem, def-klr-induction-and-restriction-bimodules, def-graded-ring-module-bimodule-and-internal-shift, def-finitely-generated-graded-projective-module, thm-graded-projective-and-simple-classes-have-shift-orbit-bases, def-graded-grothendieck-group-shift-module-and-cartan-map, def-projective-simple-hom-pairing-on-grothendieck-groups, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.5, printed pp. 25-28: Proposition 2.12 (simples finite-dimensional, killed by $\mathrm{Sym}^+(\nu)$), the Krull-Schmidt unique decomposition property of $R(\nu)$-mod, the freeness of $G_0(R(\nu))$ on simple classes, and the existence of projective covers.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§2.11 and §9.1, printed pp. 21-23 and 39-40: the Grothendieck groups $[\mathrm{Proj}(H^\infty)]$ and their shift structure.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.2, Proposition 3.12 and Remark 3.14: finiteness of graded components and the center computation used for the Fitting argument.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and $\beta\in Q_+$.
(i) Every finitely generated graded left $R(\beta)$-module has a decomposition into finitely many indecomposable graded modules, unique as a finite multiset of degree-zero graded isomorphism classes, including the actual shifts of their summands; in particular the category $\mathrm{GrMod}_0R(\beta)$ of finitely generated graded modules has the Krull-Schmidt property.
(ii) Every simple graded $R(\beta)$-module is finite-dimensional, killed by the augmentation ideal $\mathrm{Sym}^+(\beta)$ of the CENTRAL color-symmetric polynomial subalgebra $C_\beta$; up to isomorphism and shift there are finitely many, and each has a projective cover which is finitely generated.
(iii) The split Grothendieck group $K_0(R(\beta))$ of finite graded projective modules is a free $\mathbb Z[q,q^{-1}]$-module: the classes of the indecomposable finitely generated graded projectives, modulo grading shifts, form a basis with the shift action $q[P]=[P\{1\}]$; equivalently the classes of all finitely generated indecomposable graded projectives form a shift-orbit basis. Similarly $G_0(R(\beta))$ is free on the shift orbits of simple modules, and the Hom pairing of projective covers and simples has diagonal entries $\dim_k\operatorname{End}^0(S_b)$, with the selected cover/simple shifts, under the Hom convention of [[def-projective-simple-hom-pairing-on-grothendieck-groups]].

## Facts & Assumptions

**Given:** A KLR datum $Q$, a weight $\beta\in Q_+$, the locally finite graded algebra $R(\beta)$ with its finite-dimensional homogeneous components of [[thm-klr-pbw-basis-theorem]], and the shift conventions $(M\{r\})_d=M_{d-r}$ of [[def-graded-ring-module-bimodule-and-internal-shift]].

[F1] PBW basis ([[thm-klr-pbw-basis-theorem]]): the monomials $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$ form a $k$-basis of $R_n(Q)$, each $R(\beta)$ has finite-dimensional homogeneous components and is bounded below, and its graded ranks do not depend on the parameters.

[F2] Finite graded projectives ([[def-finitely-generated-graded-projective-module]]): finite graded projectivity means projectivity in $\mathrm{GrMod}_0$ tested against degree-zero epimorphisms, plus finite generation; the zero module is allowed.

[F3] The finite-dimensional shift-orbit basis theorem ([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]) applies to a finite-dimensional graded algebra; $R(\beta)$ is infinite-dimensional (for $\beta\ne0$), so it is not applied to $R(\beta)$ itself but only to its finite-dimensional central quotients below.

## Proof

**Proof technique:** direct; establish freeness over the central color-symmetric subalgebra, then Krull-Schmidt and projective covers by finite-dimensional endomorphism-algebra arguments, then the orbit bases.

1.1 (Central polynomial subalgebra and freeness.) Let $C_\beta$ be the color-symmetric polynomial subalgebra: on the summand $e(\nu)R(\beta)e(\nu)$ it is the polynomial ring in the elementary symmetric functions of the dots of each color separately. It is central: unequal crossings permute dot positions, and equal-color divided differences $\partial_a$ commute with symmetric polynomials in $x_a,x_{a+1}$ by the Leibniz rule $\partial_a(fg)=\partial_a(f)g+s_a(f)\partial_a(g)$ applied to $s_a$-invariant $f$. For a color occurring $m$ times, start with $A_0=k[E_1,\dots,E_m]$ and $f_0(T)=T^m-E_1T^{m-1}+\cdots+(-1)^mE_m$. Successively put $A_r=A_{r-1}[X_r]/(f_{r-1}(X_r))$ and $f_r(T)=f_{r-1}(T)/(T-X_r)$ for $1\le r\le m$; the division has zero remainder in $A_r[T]$ and $f_r$ is monic of degree $m-r$. Monic division makes $A_r$ free of rank $m-r+1$ over $A_{r-1}$, with basis $1,X_r,\dots,X_r^{m-r}$. In $A_m$ the identity $f_0(T)=\prod_{r=1}^m(T-X_r)$ identifies $E_j$ with the elementary symmetric polynomial in the $X_r$. Thus $k[x_1,\dots,x_m]\to A_m$, $x_r\mapsto X_r$, is surjective, and its inverse sends $X_r\mapsto x_r$ and $E_j$ to that elementary symmetric polynomial: each successive root relation holds under this substitution. Consequently $k[x_1,\dots,x_m]$ is free of rank $m!$ over its symmetric coefficient subring, on the Artin monomials $x_1^{a_1}\cdots x_m^{a_m}$ with $0\le a_r\le m-r$; only the first extension, not the full polynomial ring, has rank $m$. Combining with the PBW basis [F1], whose dot monomials factor over the color blocks, gives that $R(\beta)$ is a finite free $C_\beta$-module, of rank $(|\beta|!)^2$ per weight counting the permutation basis; only centrality and this freeness are used below. [given, F1, algebra]

2.1 (Krull-Schmidt and splitting.) Every finitely generated graded module is bounded below and locally finite by [F1]. Choose finitely many homogeneous generators of degrees $d_j$; evaluation on the generators injects $\operatorname{End}^0(M)$ into the finite product of the finitely many finite-dimensional pieces $M_{d_j}$, so every degree-zero endomorphism algebra is finite-dimensional, and a nontrivial homogeneous idempotent splits $M$ into two nonzero summands with strictly smaller endomorphism algebras; splitting terminates. For an indecomposable $M$, every endomorphism $f$ satisfies a polynomial minimal equation because $\operatorname{End}^0(M)$ is finite-dimensional; factoring it as $T^rg(T)$ with $g(0)\ne0$, Bezout gives a polynomial projector separating the nilpotent part from the invertible part, so indecomposability forces $f$ or $1-f$ to be invertible. Hence the nonunits form the unique maximal ideal, and the usual comparison of two decompositions $\bigoplus p_ii_jp_j=\mathrm{id}$ produces a matching summand and cancellation, proving uniqueness in the degree-zero category; the shifts are recorded as part of each summand. [step 1.1, F2, algebra]

3.1 (Simples and covers.) For a graded simple $S$ and a positive-degree central $c\in C_\beta^+$, the kernel and image of $c$ are graded submodules; if $c$ acted nontrivially it would be injective and hence surjective, contradicting the least nonzero degree of the bounded-below module $S$; so $C_\beta^+S=0$ and $S$ is finite-dimensional because $\bar R=R(\beta)/C_\beta^+R(\beta)$ is finite-dimensional by step 1.1. The finite-dimensional basis theorem [F3] applies to $\bar R$: it has finitely many graded simple shift orbits, and the same then holds for $R(\beta)$, since any simple $R(\beta)$-module is one. Projective covers are then lifted to $R(\beta)$: choose a finite shifted-free $R$-module $F$ whose reduction $\bar F$ surjects onto the projective cover $\bar Q\twoheadrightarrow\bar S$. That surjection splits by projectivity of $\bar Q$, giving an idempotent of $\operatorname{End}^0_{\bar R}(\bar F)$; entrywise reduction $\operatorname{End}^0_R(F)\to\operatorname{End}^0_{\bar R}(\bar F)$ is surjective; the reduction kernel in $\operatorname{End}^0_R(F)$ is nilpotent because its entries have positive central degree and a long product has degree exceeding every fixed difference of generator degrees minus the lower bound of $F$, so the projector onto $\bar Q$ is lifted by the finite nilpotent-ideal idempotent-lifting iteration $e\mapsto e-(2e-1)(e^2-e)$; the image $Q$ of the lifted projector is projective, its kernel is graded superfluous (after reduction by $C^+$ it is superfluous for $\bar Q$, and a bounded-below graded quotient $X=C^+X$ vanishes by its least nonzero degree), so $Q$ is an indecomposable projective cover, and every indecomposable projective is such a cover up to shift. [step 1.1, step 2.1, F1, algebra]

4.1 (Orbit bases.) Finite decompositions into indecomposables give that $K_0(R(\beta))$ is free on the shift orbits of indecomposable finite graded projectives, with $q[P]=[P\{1\}]$, and finite length of finite-dimensional modules gives that $G_0(R(\beta))$ is free on the simple shift orbits; both are $\mathbb Z[q,q^{-1}]$-modules in the sense of [[def-graded-grothendieck-group-shift-module-and-cartan-map]], the shift action is free because a nonzero finite-dimensional graded module is not isomorphic to a nonzero shift of itself (compare its least and greatest degrees), and the finite-dimensional theorem [F3] gives the same statement for the quotient categories. For a projective cover $P_b$ and simple $S_c$ with their selected shifts, $\operatorname{Hom}(P_b,S_c)=0$ unless $b=c$ at the selected shift, when it equals $\operatorname{End}(S_b)$ by the uniqueness of the cover, whose degree-zero endomorphism ring is a division $k$-algebra by Schur's argument; finite-dimensionality alone does not identify it with $k$; this is the diagonal-entry computation of the Hom pairing of [[def-projective-simple-hom-pairing-on-grothendieck-groups]]. The stronger statement that the diagonal scalar rings equal $k$ over every field, and the associated unscaled dual-basis conclusion, are not inferred here from finite-dimensional algebra alone and are proved separately later on this page; nothing above uses them. [step 2.1, step 3.1, F3, algebra] ∎
