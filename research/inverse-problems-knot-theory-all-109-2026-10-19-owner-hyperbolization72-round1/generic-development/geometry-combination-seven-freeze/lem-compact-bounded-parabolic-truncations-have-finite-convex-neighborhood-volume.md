---
id: lem-compact-bounded-parabolic-truncations-have-finite-convex-neighborhood-volume
kind: lemma
title: Compact bounded-parabolic convex truncations have finite neighborhood volume
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Entire Sections 4.14–4.18, printed pp. 87–104, and Section 8.3, printed pp. 163–166, read; the parabolic volume implication required here is proved directly rather than imported from the partially proved geometric-finiteness equivalence
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be torsion-free and discrete, acting freely and properly discontinuously on $\mathbb H^3$. Let $\Lambda\subset\widehat{\mathbb C}$ be a closed $\Gamma$-invariant set containing at least three points, and let $C=C(\Lambda)$ be its closed hyperbolic convex hull, defined as the intersection of the closed hyperbolic half-spaces whose ideal closures contain $\Lambda$. Supply finitely many representatives $p_1,\ldots,p_m$ of parabolic fixed-point orbits and horoballs $H_i$ based at $p_i$. Their full $\Gamma$-translates have pairwise disjoint interiors except when equal. The stabilizer $A_i=\operatorname{Stab}_\Gamma(p_i)$ preserves $H_i$, and $H_i$ is precisely invariant under $A_i$: an element outside $A_i$ has disjoint open image horoball.

For each $i$, supply an orientation-preserving hyperbolic isometry taking $p_i$ to infinity and $H_i$ to $\{Y>T_i\}$ in the upper half-space coordinates $(z,Y)\in\mathbb C\times(0,\infty)$. In these coordinates assume $A_i$ is the translation lattice of rank one or two with supplied generators. In rank one rotate the horizontal coordinate so that its generator is $z\mapsto z+\ell_i$, $\ell_i>0$. Assume each $p_i$ is bounded parabolic for $\Lambda$, meaning that $(\Lambda\setminus\{p_i\})/A_i$ is compact. Finally assume the actual truncated convex quotient
$$K=\bigl(C\setminus\bigcup_{i,\gamma\in\Gamma}\gamma H_i\bigr)/\Gamma$$
is compact. The empty collection $m=0$ is allowed.

Then for every $\epsilon>0$ the hyperbolic volume of $N_\epsilon(C)/\Gamma$ is finite. Here $N_\epsilon$ is the open metric neighborhood; the closed neighborhoods have finite volume as well. In particular, when $\Lambda=\Lambda(\Gamma)$, the group is geometrically finite in the convex-core-neighborhood-volume definition.

There are explicit estimates in each supplied cusp coordinate. In rank one there is $R_i<\infty$ such that $\Lambda\setminus\{p_i\}\subset\{|\operatorname{Im}z|\le R_i\}$. For every $T>0$,
$$\operatorname{Vol}\bigl((N_\epsilon C\cap\{Y>T\})/A_i\bigr)\le\frac{\ell_i R_i}{T^2}+\frac{2\ell_i\sinh\epsilon}{T}.$$
In rank two, writing $a_i$ for the Euclidean covolume of its translation lattice,
$$\operatorname{Vol}\bigl((N_\epsilon C\cap\{Y>T\})/A_i\bigr)\le\frac{a_i}{2T^2}.$$
The induced maps of these caps to the full quotient need not be injective when $T<T_i$; the proof uses the correct volume inequality for their images. No restriction is imposed on the number or connectedness of conformal-boundary components. Compact truncation and bounded-parabolic data are supplied hypotheses, not conclusions inferred here from quasiconformal conjugacy.

## Facts & Assumptions

**Given:** AC and the supplied convex set, group action, finite cusp data and compact truncated quotient in the Statement.

[A1] Full choice is [[def-axiom-of-choice]]. It supplies finite selections of quotient-sheet lifts and the elementary countable chart partitions for quotient-volume inequalities.

[F1] The hyperbolic model's orientation-preserving isometries are the projective complex two-by-two matrix group with its Möbius boundary action. In upper half-space its metric is $ds^2=Y^{-2}(|dz|^2+dY^2)$ and its distance satisfies $\cosh d((z,Y),(w,V))=1+(|z-w|^2+(Y-V)^2)/(2YV)$. These model formulas are computed in the actual quotient and boundary-extension suppliers. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]]

## Proof

1.1 The free proper isometric action gives a smooth Riemannian quotient $M=\mathbb H^3/\Gamma$ with locally isometric covering charts. In the upper half-space coordinate of [F1] the metric matrix is $Y^{-2}I_3$, so its volume density is $\sqrt{Y^{-6}}=Y^{-3}$. The distance formula implies the ball estimate used below: $d((z,Y),(w,V))<\epsilon$ is equivalent to $|z-w|^2+(V-Y\cosh\epsilon)^2<Y^2\sinh^2\epsilon$. In particular $|z-w|<Y\sinh\epsilon$. It also implies $e^{-\epsilon}Y<V<e^\epsilon Y$, or equivalently $|\log V-\log Y|<\epsilon$. The latter inequality follows independently by integrating $|dY|/Y\le ds$ along paths. The local quotient charts preserve the density, so integrations in a translation fundamental region compute its quotient volume. [A1, F1, given, construct, algebra]

2.1 Fix a rank-one cusp, suppress its index, and write $A=\langle z\mapsto z+\ell\rangle$. Bounded parabolicity implies a uniform transverse bound on $\Lambda\setminus\{\infty\}$. Indeed its image under the continuous $A$-invariant function $z\mapsto\operatorname{Im}z$ is a compact subset of $\mathbb R$: the function descends continuously to the compact quotient, and its image is therefore bounded. Choose $R\ge0$ bounding its absolute value. The vertical planes $\operatorname{Im}z=\pm R$ bound closed hyperbolic half-spaces whose ideal closures contain $\Lambda$. They are hyperbolic half-spaces since reflection in each vertical Euclidean plane preserves the metric in step 1.1 and fixes that plane, and its geodesics stay in the plane; equivalently a horizontal rotation and translation take it to the usual vertical half-space model. By the specified intersection definition of convex hull, $C$ lies in the vertical strip $|\operatorname{Im}z|\le R$. For any $(z,Y)\in N_\epsilon C$ choose $(w,V)\in C$ at distance less than $\epsilon$. The ball inequality of step 1.1 gives $|\operatorname{Im}z|\le R+Y\sinh\epsilon$. This estimate holds for the full convex neighborhood, not merely for the convex core itself. [step 1.1, given, construct, algebra]

2.2 We record why overlap after lowering a cusp level causes no volume problem. If $A\le\Gamma$ and $E\subset\mathbb H^3$ is an $A$-invariant open set, the natural map $E/A\to M$ is a local isometry. Cover its source by a countable collection of injective quotient-chart domains, and partition that cover into disjoint measurable pieces by subtracting the preceding domains. On each piece the map preserves volume. Its image has volume at most the sum of the image-piece volumes by countable subadditivity, which equals the source volume. Such countable charts exist: the upper half-space has a countable base; the quotient map is open, so images of that base give a countable base for $E/A$, and the local-isometry neighborhoods have a countable subcover obtained by assigning each contained basic open set one such neighborhood. Thus $\operatorname{Vol}_M(\operatorname{image}(E/A))\le\operatorname{Vol}(E/A)$ whether or not the global map is injective. The same argument applies to bounded measurable source sets by intersecting that partition with them. The cap sets above are open, and all their images are measurable open sets. [A1, step 1.1, construct, algebra]

3.1 A translation fundamental region for this rank-one action has $0\le\operatorname{Re}z<\ell$. At height $Y$ the part of $N_\epsilon C$ inside that region has Euclidean horizontal area at most $2\ell R+2\ell Y\sinh\epsilon$, by step 2.1. Integrating the nonnegative density from step 1.1 gives $\operatorname{Vol}((N_\epsilon C\cap\{Y>T\})/A)\le\int_T^\infty(2\ell R+2\ell Y\sinh\epsilon)Y^{-3}dY=\ell R/T^2+2\ell\sinh\epsilon/T$. The boundary of the fundamental region is a union of vertical planes and has volume zero, so the half-open convention does not affect the integral. In rank two use the supplied lattice fundamental parallelogram of Euclidean area $a$. Its entire horizontal section has area $a$, independently of the set $C$. Hence $\operatorname{Vol}((N_\epsilon C\cap\{Y>T\})/A)\le a\int_T^\infty Y^{-3}dY=a/(2T^2)$. This proves both cap estimates, for all positive levels including levels below the supplied precisely invariant horoball. [step 1.1, step 2.1, given, algebra]

3.2 Let $C_0=C\setminus\bigcup_{i,\gamma}\gamma H_i$. Its image $K$ in $M$ is compact by hypothesis. There is a compact set $L\subset\mathbb H^3$ with $C_0\subset\Gamma L$. To see this, cover $K$ by finitely many small evenly covered neighborhoods whose closures lift compactly into the upper half-space. Such neighborhoods exist by the covering charts in step 1.1, after shrinking them inside relatively compact coordinate balls. Choose one lifted compact closure for each and let $L$ be their finite union. Every lift of a point of $K$ is a translate of a point of one chosen closure, giving the assertion. The image of $N_\epsilon L$ in $M$ has finite volume: $L$ is contained in finitely many bounded hyperbolic balls, its $\epsilon$-neighborhood is contained in the same finite collection of balls with enlarged radii, and each such ball has finite hyperbolic volume. The latter follows directly from the ball formula in step 1.1: its Euclidean closure is bounded and has $Y$ bounded below by a positive number, so the density $Y^{-3}$ is bounded on it. By step 2.2 its quotient image has no larger volume than this finite source volume. [A1, step 1.1, step 2.2, given, construct, algebra]

4.1 For $x\in N_\epsilon C$ choose $c\in C$ with $d(x,c)<\epsilon$. If $c\in C_0$, the projection of $x$ lies in the finite-volume quotient image from step 3.2. Otherwise $c\in\gamma H_i$ for some supplied cusp and some $\gamma$. In its normalized coordinate $\gamma^{-1}c$ has height greater than $T_i$. The height inequality of step 1.1 shows that $\gamma^{-1}x$ has height greater than $e^{-\epsilon}T_i$; it still belongs to $N_\epsilon C$ because $C$ is $\Gamma$-invariant. Thus the projection of $x$ lies in the image of the $i$th cap at level $e^{-\epsilon}T_i$. There are only finitely many such cap images. Each has finite volume by steps 3.1 and 2.2, in either rank. Together with step 3.2 and finite subadditivity this proves $\operatorname{Vol}(N_\epsilon C/\Gamma)<\infty$. If there are no cusps the compact-image term alone covers it. Every closed $\epsilon$-neighborhood is contained in the open $(\epsilon+1)$-neighborhood, so it too has finite volume. For the actual limit set this is precisely the stated convex-core definition of geometric finiteness. The argument did not count or connect conformal-boundary components, and did not infer any compact truncation from a boundary conjugacy. [step 1.1, step 3.1, step 2.2, step 3.2, given, algebra] ∎

## Actual source reading and remaining interfaces

The entire actual Kapovich Sections 4.14–4.18 (printed pp. 87–104, PDF pp. 108–125) and 8.3 (printed pp. 163–166, PDF pp. 184–187) were read from the full cached primary PDF using pagewise OCR. Section 4.9 and the complete relevant cusp discussion on printed pp. 83–87 were also read. The source explicitly supplies only a partial proof of the equivalence theorem 4.73. Its parabolic directions are referred to Beardon–Maskit and Bowditch. The Maskit sketch in 4.101 assumes a parabolic-free amalgamating group and leaves the general theorem to Maskit's book. None of those unproved source imports is used here. Both actual model supplier proofs were read in full during their development and the current quotient supplier was read again for this module.

This lemma supplies the genuine geometric finite-volume implication from the exact compact truncation and bounded-parabolic inputs. It does not supply their existence, their invariance under quasiconformal conjugacy, the converse geometric-finiteness criterion, or a Maskit combination theorem. Those operations remain separate proof obligations in the full general pared setting.
