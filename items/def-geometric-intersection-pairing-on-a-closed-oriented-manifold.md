---
id: def-geometric-intersection-pairing-on-a-closed-oriented-manifold
kind: definition
title: "The geometric intersection pairing on a closed oriented manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-oriented-intersection-number, def-local-oriented-intersection-sign, def-transverse-complementary-dimensional-intersection-set, def-transverse-embedded-submanifolds, lem-compact-transverse-complementary-intersections-are-finite, thm-oriented-intersection-number-is-homotopy-invariant, thm-intersection-number-under-factor-interchange, def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 0
---

## Definition

Let $M$ be a closed oriented smooth $n$-manifold and let $A^a,B^b\subseteq M$ be closed oriented embedded submanifolds with $a+b=n$. Using the oriented intersection number of [[def-oriented-intersection-number]] (whose source is the compact submanifold and whose target is the closed submanifold, first factor first), set $$\langle A,B\rangle_M:=I(A,B)=I(i_A,B)\in\mathbb Z,$$ where $i_A:A\hookrightarrow M$ is the inclusion and $I(i_A,B)$ is evaluated on any smooth map homotopic to $i_A$ and transverse to $B$; when $A$ and $B$ are transverse this is the finite signed count $\sum_{p\in A\cap B}\varepsilon(p)$ of the local signs of [[def-local-oriented-intersection-sign]]. For non-transverse $A,B$ the value is the common value on all such transverse representatives, by [[thm-oriented-intersection-number-is-homotopy-invariant]]. With $\mathbb F_2$ coefficients the same construction with the mod 2 intersection number [[def-mod-two-intersection-number]] defines $\langle A,B\rangle_{2}\in\mathbb F_2$ without orientability of $A,B$ or $M$; there [[thm-mod-two-intersection-number-is-homotopy-invariant]] supplies the same independence. The number depends only on the homotopy classes of the two inclusions, so replacing a factor by a homotopic submanifold, or by a homotopic embedding of the same manifold, leaves it unchanged. The factor order is part of the definition: [[thm-intersection-number-under-factor-interchange]] gives $\langle B,A\rangle=(-1)^{ab}\langle A,B\rangle$ and $\langle B,A\rangle_2=\langle A,B\rangle_2$. No claim is made yet that the number depends only on the homology classes of $A$ and $B$ (homology invariance is proved in [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]; [[lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles]] separately proves bordism invariance), nor that every homology class has an embedded representative (see [[rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally]]). Countable Choice is inherited from the transverse-representative selection in [[def-countable-choice]]; the finite signed counts themselves are choice-free.
