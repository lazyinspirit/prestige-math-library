---
id: cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection
kind: counterexample
title: "The Mobius core circle has no integral oriented self-intersection but mod two data survives"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [prop-mod-two-self-intersection-needs-no-orientation, def-self-intersection-number-of-an-oriented-submanifold, lem-normal-push-off-zeros-are-self-intersection-points, def-mod-two-intersection-number, thm-mod-two-euler-class-is-the-top-stiefel-whitney-class, prop-first-stiefel-whitney-class-classifies-orientability, def-stiefel-whitney-classes-from-the-projective-bundle-relation, def-real-projective-bundle-and-tautological-line, def-tautological-degree-one-class-on-a-real-projective-bundle, lem-tautological-degree-one-class-is-well-defined-and-fiber-generating, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, def-circle-as-real-line-mod-integers, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-vector-bundle-chart-and-transition-function, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
dependency_level: 4
---

## Statement refuted

An integral oriented self-intersection number cannot be defined for every compact submanifold without orientability hypotheses. Assume AC and let
$$L=(\mathbb R\times\mathbb R)/((t,v)\sim(t+k,(-1)^kv),\ k\in\mathbb Z)$$
be the smooth Möbius line bundle over $Q=\mathbb R/\mathbb Z$. Its total space is the open Möbius band and its zero section $Z$ is the core circle. The normal bundle $\nu_Z\cong L$ and the ambient total space are nonorientable, so the untwisted integral oriented self-intersection of [[def-self-intersection-number-of-an-oriented-submanifold]] is unavailable. Nevertheless
$$Z\cdot_2Z=\langle w_1(L),[Q]\rangle_2=1.$$
This does not exclude Euler classes with coefficients twisted by the orientation local system; it excludes the untwisted integral number asserted by the refuted claim.

## Facts & Assumptions

**Given:** AC, the explicit quotient bundle $L\to Q$, and its zero section $Z$.

[F1] Smooth vector bundles are described by fibre-linear local charts and smooth transition matrices ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[def-vector-bundle-chart-and-transition-function]]).

[F2] The quotient circle is $Q=\mathbb R/\mathbb Z$ ([[def-circle-as-real-line-mod-integers]]).

[F3] The first Stiefel–Whitney class vanishes exactly for orientable bundles ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F4] The mod-two self-intersection of a compact boundaryless submanifold is the top normal Stiefel–Whitney evaluation ([[prop-mod-two-self-intersection-needs-no-orientation]]).

[F5] The untwisted integral construction requires orientations of the ambient manifold and submanifold, inducing the normal orientation ([[def-self-intersection-number-of-an-oriented-submanifold]]).

## Counterexample

**Proof technique:** construct the antiperiodic quotient, count one transverse section zero, and exhibit the orientation reversal.

1.1 The quotient has local charts obtained by lifting base intervals of length less than one to $\mathbb R$; on overlaps the lifted base coordinates differ by an integer $k$ and the fibre changes by $(-1)^k$. These charts are smooth and fibre-linear, so [F1] gives a line bundle over the smooth quotient circle. The chart maps are homeomorphisms because their integer translates have open saturation and are disjoint over each lifted interval. Distinct base points are separated by the Hausdorff quotient circle, and distinct points over one base point are separated in a bundle chart; thus the total space is Hausdorff. Rational-endpoint lifted base intervals and fibre intervals give a countable base. The image of $[0,1]$ covers $Q$, making it compact. Its interval charts have integer-translation transitions, so its zero section is a compact boundaryless embedded circle. Along it $TL|_Z=TQ\oplus L$, so the normal quotient is $L$. A two-arc presentation has transition $+1$ on one overlap component and $-1$ on the other; putting $-1$ on both components would instead be a trivial bundle. [F1, F2, given, construct]

2.1 Nonorientability. An orientation pulled back to the connected covering $\mathbb R$ would be a continuous sign $o(t)\in\{+1,-1\}$, hence constant, but the deck change requires $o(t+1)=-o(t)$, a contradiction. The total-space deck map $(t,v)\mapsto(t+1,-v)$ has determinant $-1$; the same argument on its connected covering plane proves that the total space is nonorientable. Thus [F3] gives $w_1(L)\ne0$. [F3, step 1.1, algebra]

2.2 For $0<\varepsilon<1$ the function $f(t)=\varepsilon\sin(\pi t)$ obeys $f(t+1)=-f(t)$ and therefore defines a smooth section of $L$. Its zeros are all integers, which give exactly one point of $Q$; its vertical derivative there is $\varepsilon\pi\ne0$ in a lifted chart. Its graph is a small push-off of the zero section and meets it transversely once, so $Z\cdot_2Z=1$. By [F4] this equals $\langle w_1(L),[Q]\rangle_2$, without assuming an unproved cohomology computation or using a rank-one projective fibre-generator claim. [F1, F4, step 1.1, construct, algebra]

3.1 The orientation obstruction in step 2.1 violates [F5], so no untwisted integral oriented self-intersection is defined by that construction. Changing a local fibre trivialization can reverse a local zero sign, and there is no continuous global choice making all such signs consistent. The ambiguity is not merely a single overall sign for an arbitrary finite zero set. Modulo two every local sign is one and step 2.2 gives the invariant count. AC is inherited from [F3]–[F4]; the explicit quotient and section use no extra choice. [F3, F4, F5, step 2.1, step 2.2] ∎

