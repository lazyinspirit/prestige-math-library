---
id: thm-earring-skein-cobordisms-give-integral-exact-triangles
kind: theorem
title: Earring skein cobordisms give integral exact triangles
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-based-link-earring-complexes-and-resolution-unlink-groups-are-well-defined
  - lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds
  - lem-three-cyclic-skein-saddles-have-the-pentagon-cap-and-product-replacement-geometry
  - thm-admissible-earring-cobordisms-have-finite-oriented-family-counts-and-gluing
  - thm-cyclic-skein-cap-families-have-degree-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: PDF95–108, reconstructed with the explicit cap operator and geometry suppliers
---

## Statement

Assume full AC. Let three based smooth links in the oriented three-sphere agree outside a ball disjoint from the earring and its marking arc, and differ there by the three cyclic skein tangles. Give their based-link instanton complexes compatible admissible marked backgrounds. The oriented saddle cobordism counts define an integral exact triangle on their instanton homology. With the actual relative grading shifts, the triangle is represented by a quasi-isomorphism of a mapping cone with the third instanton complex. These maps, null homotopies and mapping-cone comparisons can be chosen relative to any finite collection of already compatible disjoint saddle and continuation families.

## Facts & Assumptions

[F1] The integral based-link complexes and continuation data are [[thm-based-link-earring-complexes-and-resolution-unlink-groups-are-well-defined]]. Actual four-dimensional marked backgrounds are [[lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds]].

[F2] The cyclic saddles, two overlapping projective-plane summands, five cuts, pentagon and product replacement are [[lem-three-cyclic-skein-saddles-have-the-pentagon-cap-and-product-replacement-geometry]].

[F3] The all-class finite oriented counts, relative bulk regularity, admissible collars and determinant boundary signs are [[thm-admissible-earring-cobordisms-have-finite-oriented-family-counts-and-gluing]]. The additional reducible faces, their exhaustive collars, their vanishing and the remaining degree-one product contribution are [[thm-cyclic-skein-cap-families-have-degree-one]].

## Proof

**Given:** The based skein triple, compatible actual backgrounds, full AC, and any specified finite collection of compatible disjoint families. Shift the three complexes so the first two successive maps have degree zero and the third has degree one.

1.1 **Actual fields and orientation modules.** Denote the complexes by $A,B,C$ and their cyclic saddle maps by $f:A\to B$, $g:B\to C$, $h:C\to A[1]$. Construct their backgrounds by restriction of the one composite background of [F1], retaining its actual gluing maps on the earring exterior. In the local replacement ball its exterior determinant line is the trivial line, and the product replacement uses that same trivialization; the unchanged exterior and the product earring are literally identified, rather than assigned an arbitrary end automorphism. Choose perturbations relative to their common collars by [F3]. For disjoint families the local balls and their markings are disjoint, so take their products, order their parameter coordinates, and prescribe the existing data on every product face. These prescriptions agree at intersections because they are actual restrictions with the same gluing maps. Relative bulk perturbations extend them, flat at those faces. The count and orientation statements of [F3] therefore give actual integral chain maps, with the indicated shifts, simultaneously over all marked classes. [F1, F2, F3, given, construct]

2.1 **Two-saddle homotopies.** Stretch the single intermediate based-link cut in a two-saddle composite, and at the other end stretch its actual projective-plane cut. The compactification of its metric line has these two ends. Its one-dimensional moduli have only differential breaks, the intermediate based-link face, and the projective-plane face: these exhaust the allowed limits by [F3], including the reducible-cut extension there. The projective-plane face has zero contribution. The oriented boundary formula consequently gives homotopies $j_A,j_B,j_C$ with Hom-complex identities $\partial j_A=gf$, $\partial j_B=hg$, $\partial j_C=fh$, after choosing their overall signs. Their degrees are respectively minus one, zero and zero, and $\partial T=dT-(-1)^{|T|}Td$. Signs on different composites are taken from the same ordered determinant excision, not chosen independently for the same face. The prescribed disjoint families remain fixed throughout this construction. [F1, F2, F3, step 1.1, construct]

3.1 **The actual three-saddle identity.** Count over the pentagon of [F2]. Its two intermediate based-link faces give the two composites of a saddle and a two-saddle homotopy. Its two separate projective-plane faces vanish by [F3]. Its remaining face is the twice-punctured projective-plane cap. By its degree-one evaluation, that face has the same count, up to one overall orientation sign, as the actual product replacement. A cylinder with translation-invariant end data has only its constant solutions in dimension zero: every nonconstant solution has a translation direction. These constant solutions induce the identity on the critical orientation modules, using the literal product identification of step 1.1. The boundary formula hence says that each cyclic three-saddle combination is chain homotopic to $+1$ or $-1$. In particular, at $B$ the closed degree-zero combination is $N_B=fj_B-j_Cg$ and $N_B$ is chain homotopic to $\epsilon_B\,1_B$, $\epsilon_B\in\{1,-1\}$. The minus sign is also forced by the Hom identities: $\partial(fj_B)=fhg=\partial(j_Cg)$. The cyclic versions have their corresponding Koszul signs. The same pentagon product with any of the prescribed disjoint parameter families proves the relative versions; its corners are exhausted product collars, rather than additional uncounted terms. [F1, F2, F3, step 1.1, step 2.1, construct]

4.1 **Exactness, without assuming the cone conclusion.** Composites induce zero on homology by step 2.1. Conversely let $x\in B$ be a cycle with $gx=dy$ in $C$. Then $z=j_Bx+hy$ is a cycle in $A$, since $d j_Bx=hgx$ and $dhy=-hdy$. Moreover $fz=fj_Bx+fhy$ is homologous to $fj_Bx-j_Cgx=N_Bx$, because $fh=dj_C-j_Cd$. Thus $[x]$ is in the image of $f_*$, after multiplication by the unit $\epsilon_B$. This proves exactness at $B$. The same calculation after the cyclic grading shifts proves exactness at $A$ and $C$. It is an integral calculation; no field coefficients, division by two, or dimension argument is used. [step 2.1, step 3.1, construct, algebra]

5.1 **The mapping cone and the finite-family assertion.** Use $\operatorname{Cone}(g)^n=C^n\oplus B^{n+1}$ with differential $(c,b)\mapsto(d_Cc+gb,-d_Bb)$. The map $A\to\operatorname{Cone}(g)[-1]$, $a\mapsto(-j_Aa,fa)$, is a chain map by $d j_A+j_A d=gf$. Here is the full cone check. The other two closed combinations are $N_A=j_Bf+hj_A$ and $N_C=gj_C-j_Ah$, and both induce units times the identity by step 3.1. If the image of a cycle $a$ is a cone boundary, there are $b,c$ with $fa=db$ and $j_Aa=dc+gb$. Then $N_Aa=d(j_Bb-hc)$, so $[a]=0$. Conversely a cone cycle $(c,b)$ satisfies $db=0$ and $gb=-dc$. The cycle $z=j_Bb-hc$ has $[fz]=[N_Bb]$, so, multiplying by its unit sign, subtracting the image of $z$ and a cone boundary leaves a representative $(w,0)$ with $dw=0$. For such a $w$, subtracting the cone boundary of $(0,j_Cw)$ from the image of $hw$ leaves $(N_Cw,0)$. Since $N_C$ induces a unit, every remaining class $(w,0)$ is in the image. This proves injectivity and surjectivity without an assumed identification of connecting maps. All groups are finite free abelian chain groups; its acyclic cone is contractible, since its cycle subgroups are free and each exact sequence onto such a subgroup splits. For the mod-four grading the same splitting is performed in its four degrees. The relative families in steps 1.1–3.1 give these identities with their prescribed extra saddle parameters and orientation modules; thus the cone comparison extends over those finite disjoint families. This proves the stated exact triangle and its actual chain-level comparison. [F1, F3, step 1.1, step 2.1, step 3.1, step 4.1, construct] ∎
