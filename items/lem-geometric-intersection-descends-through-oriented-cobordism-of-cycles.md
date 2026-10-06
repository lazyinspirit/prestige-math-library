---
id: lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles
kind: lemma
title: "Bordant cycles have equal intersection numbers"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-geometric-intersection-pairing-on-a-closed-oriented-manifold, thm-transverse-preimage-for-manifolds-with-boundary, def-oriented-intersection-number, def-local-oriented-intersection-sign, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-induced-boundary-orientation, def-embedded-smooth-submanifold-with-boundary, def-neat-submanifold-of-a-manifold-with-boundary, thm-transversality-homotopy-theorem, def-countable-choice, cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary, def-smooth-map-between-manifolds-with-boundary, thm-oriented-intersection-number-is-homotopy-invariant, thm-mod-two-intersection-number-is-homotopy-invariant, thm-collar-neighborhood-theorem, thm-the-double-has-a-well-defined-smooth-structure, lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family, thm-parametric-transversality, prop-relative-transversality-preserves-a-map-on-a-closed-good-region]
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
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed oriented smooth $n$-manifold, let $B^b\subseteq M$ be a closed oriented embedded submanifold, and let $A_0^a,A_1^a\subseteq M$ be closed oriented embedded submanifolds with $a+b=n$. Suppose a compact oriented smooth $(a+1)$-manifold $W$ has outward-normal-first boundary $\partial W=A_1\sqcup(-A_0)$ and a smooth map $F:W\to M$ restricts to their inclusions. Then
$$I(A_0,B)=I(A_1,B),\qquad I_2(A_0,B)=I_2(A_1,B).$$
If $F$ and its boundary restriction are transverse to $B$, the equality is obtained from the compact one-dimensional trace $F^{-1}(B)$. In general one can make both transverse while moving the boundary maps through homotopies; when the boundary restriction is already transverse, a homotopy fixed on the boundary suffices. One cannot require a nontransverse boundary map to stay fixed and become transverse. Compactness of $W$ is essential.

## Facts & Assumptions

**Given:** $M,B,A_0,A_1,W,F$ and $\mathrm{AC}_\omega$ as in the statement.

[F1] A map transverse to a closed submanifold, also on its boundary, has a neat transverse preimage of dimension source dimension minus target codimension ([[thm-transverse-preimage-for-manifolds-with-boundary]]).

[F2] Boundary orientation is outward-normal-first, and the signed boundary count of a compact oriented one-manifold is zero ([[def-induced-boundary-orientation]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F3] Local intersection signs use the source tangent block first and the target tangent block second; intersection numbers are homotopy invariant ([[def-local-oriented-intersection-sign]], [[thm-oriented-intersection-number-is-homotopy-invariant]], [[thm-mod-two-intersection-number-is-homotopy-invariant]]).

[F4] Under $\mathrm{AC}_\omega$ there is a collar and the corresponding double is boundaryless; a boundaryless-source map admits a submersive parameter family, to which parametric and relative transversality apply ([[thm-collar-neighborhood-theorem]], [[thm-the-double-has-a-well-defined-smooth-structure]], [[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]], [[thm-parametric-transversality]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]).

## Proof

**Proof technique:** count the boundary of the trace; use a collared double to supply the general-position step.

1.1 First assume both transversality conditions. By [F1], $S=F^{-1}(B)$ is a neat one-manifold with $\partial S=(F|_{\partial W})^{-1}(B)$: its dimension is $(a+1)-(n-b)=1$. It is compact because $B$ is closed and $W$ is compact. Its boundary consists of the finite transverse intersections with $A_1$ and $A_0$. [F1, given, algebra]

1.2 For arbitrary $F$, choose a collar $c(x,t)$ by [F4]. Choose a smooth function $h:[0,1)\to[0,1)$ with $h=0$ near zero and $h(t)=t$ outside a smaller collar. Replace $F(c(x,t))$ there by $F(c(x,h(t)))$. Interpolation between $t$ and $h(t)$ gives a homotopy fixed on the boundary, and the new map $F'$ is constant in the normal coordinate near the boundary. Consequently using $F'$ on both halves extends smoothly to a map $H:DW\to M$. If $\partial W$ is empty, use the disjoint double without this modification. [F4, given, construct]

2.1 Orient $Q=TM|_B/TB$ by normal-first order, so a positive quotient determinant followed by a positive determinant of $TB$ is positive in $TM$. Orient $S$ by $\det TW=\det TS\otimes\det F^*Q$. At an endpoint choose an outward vector $r\in TS$; neatness makes it outward also in $W$, and it is transverse to $\partial W$, not tangent to it. A positive boundary determinant $u$ then makes $(r,u)$ positive in $TW$. The quotient image of $u$ has sign equal to the local intersection sign of the boundary map with $B$, by the normal-first definition of $Q$. Thus the boundary point sign of $S$ is that local sign. On $A_1$ this is $\varepsilon_{A_1}$, and on the oppositely oriented $A_0$ it is $-\varepsilon_{A_0}$. This determinant-ray argument includes zero-dimensional boundary factors. [F2, F3, step 1.1, algebra]

3.1 By [F2] the signed boundary sum is zero; step 2.1 identifies it with $I(A_1,B)-I(A_0,B)$. Reducing the same finite sum modulo two gives the parity equality. [F2, step 2.1, algebra]

4.1 A submersive parameter family for $H$ from [F4] remains submersive in its parameter directions after restriction to the seam $\partial W$. Parametric transversality on $DW$ and on $\partial W$ therefore excludes only two null sets of parameters. Their union is null; choose a good parameter arbitrarily near zero (in parameter dimension zero the bad sets are empty). Its restriction to $W$ and to $\partial W$ is transverse, and its boundary maps are homotopic to the original inclusions along the parameter segment. Apply step 3.1 to the perturbed maps and then [F3] to recover the original numbers. If the original boundary map was transverse, $H$ is transverse on a seam neighbourhood because it is constant in the collar direction; relative transversality in [F4] instead fixes that neighbourhood. Countable Choice is inherited from [F2] and [F4]; the finite sign calculations add none. [F2, F3, F4, step 3.1, step 1.2, choose] ∎

