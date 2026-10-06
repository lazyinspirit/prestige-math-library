---
id: def-self-intersection-number-of-an-oriented-submanifold
kind: definition
title: "The self-intersection number of a complementary-dimensional oriented submanifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-oriented-intersection-number, thm-oriented-intersection-number-is-homotopy-invariant, thm-intersection-number-under-factor-interchange, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section, def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-whitney-sum-of-vector-bundles, prop-the-zero-section-is-a-smooth-embedding, cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction, def-smooth-section-local-section-and-support, def-mod-two-intersection-number, def-countable-choice, lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section, thm-parametric-transversality, thm-mod-two-intersection-number-is-homotopy-invariant, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]
justified_by: [thm-self-intersection-is-the-euler-number-of-the-normal-bundle]
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
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
dependency_level: 0
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented boundaryless smooth $n$-manifold and let $A^a\subseteq M$ be a compact boundaryless oriented embedded submanifold with $2a=n$. Orient $\nu_A=TM|_A/TA$ by the tangent-first rule. Choose a smooth bundle metric and a tubular chart $\varphi$ whose normal differential along the zero section is the identity, as constructed in [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]. Compactness of $A$ permits a uniform small disk bundle inside the tube. For any small smooth section $s$ transverse to the zero section, let $A_s=\varphi(s(A))$, oriented by the parametrization $\varphi\circ s:A\to A_s$. The **self-intersection number** is
$$A\cdot A:=I(A,A_s),$$
with $A$ first and $A_s$ second.

Every section is an embedding into its total space: projection is a left inverse, its differential is injective, and projection restricted to its graph is its continuous inverse. Composing with the tube therefore gives an embedding. The homotopy $\varphi(ts)$ consists of embeddings and joins the inclusion to the push-off. Compactness makes $A_s$ closed and the transverse count finite. Small transverse sections exist: extend local frame vectors to compactly supported sections by [[lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section]], take finitely many which span every fibre by compactness, and apply [[thm-parametric-transversality]] to their parameter-linear sum. The full evaluation is transverse because the parameter directions span every fibre. A good parameter can be chosen arbitrarily small, including the rank-zero case where every section is already transverse.

The same definition using [[def-mod-two-intersection-number]] gives $A\cdot_2A$ for any boundaryless ambient $M$ and any compact boundaryless embedded $A$ with $2a=n$, using no orientations. The numerical value is independent of the tube and small section: each push-off map is homotopic to the inclusion, and the two-map diagonal construction underlying [[thm-intersection-number-under-factor-interchange]] and [[thm-mod-two-intersection-number-is-homotopy-invariant]] makes the ordered count invariant under that homotopy. This argument requires no assertion that the tube-germ comparison is an isotopy. Under AC the integral Euler evaluation is proved in [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]. The local signs and finite counts themselves require no choice.

## Remarks

Normal differential normalization matters for local signs: a tubular chart merely fixed on the zero section may reverse the integral normal generator. The tangent-first normalized chart makes the local ordered intersection sign agree with the zero sign. When $a=0$, signs are comparisons of the supplied determinant rays, rather than the unsigned determinant of an empty matrix. Compactness of $M$ is unnecessary; compactness of $A$ is essential. Exchanging the factors multiplies the integral count by $(-1)^{a^2}=(-1)^a$.
