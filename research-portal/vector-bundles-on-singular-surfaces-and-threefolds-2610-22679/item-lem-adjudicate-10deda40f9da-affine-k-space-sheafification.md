---
title: Full affine K-space comparison and its sheafification
status: published
research_item: lem-adjudicate-10deda40f9da-affine-k-space-sheafification
dependency_level: 11
---

PDF p. 17: Corollary 6.9: actual supported Chern operation; affine perfect K-space prerequisite

## Prerequisites

- [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds. For any commutative unital ring $A$, let $\mathcal P(A)$ be its exact category of finite projective modules and let $\mathcal C(A)=\mathrm{Ch}^b(\mathcal P(A))$ have degreewise split cofibrations and quasi-isomorphisms. The canonical comparisons give natural equivalences of entire pointed spaces
$$\Omega BQ\mathcal P(A)\simeq\Omega^\infty K^W(\mathcal C(A))\simeq\Omega^\infty K_{\mathrm{Perf}}(\operatorname{Spec}A).$$
Here $K^W$ is connective Waldhausen K-theory and $K_{\mathrm{Perf}}$ is the specified nonconnective perfect-complex theory. The equivalences include components, preserve direct sum and carry the actual degree-zero object and automorphism maps to those of the same perfect objects.

For every qcqs scheme $X$, these comparisons identify the local sheaf models of the vector-bundle Q-space presheaf and the perfect K-space presheaf on the small Zariski or Nisnevich site, and on the smooth big site with either topology. Quasi-compact objects and quasi-compact open covering bases suffice. Here the local model uses derived sheafification of spaces; when using the source's stalkwise local homotopy convention, take its hypercomplete replacement consistently on both sides. The perfect K-space has its canonical natural map into derived sections of the chosen common model. No global equality of vector-bundle and perfect $K_0$ is asserted.

## External input
Import the full S/Q, Gillet–Waldhausen and BGT comparisons at the exact frontmatter locators. In particular, import BGT Remark 9.33's degree-zero clause with its idempotent-completeness hypothesis, in addition to the positive-degree comparison already supplied locally. The following proof checks their application and the local sheaf consequence; it does not reconstruct the imported foundations.

## Facts & Assumptions
[A1] Choice and the fixed universes are used for the supplied essentially small enhanced models and small presentations. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The cited Weibel IV.8.5–8.7 and V.2.2 give the natural entire S/Q and bounded-projective K-space comparisons. The object/automorphism maps are the core maps in IV.8.3.2. The current full Quillen–Waldhausen supplier states this entire comparison, with its degree-zero object map; it is used without modification. [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison)

[F2] The enhanced supplier gives the natural full Waldhausen-to-connective comparison and the canonical positive-degree comparison with the specified nonconnective functor. The additional degree-zero clause of BGT Remark 9.33 applies when the underlying stable category is idempotent complete. [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)

[F3] The actual bounded-projective and associated-sheaf enhanced equivalences are supplied here. The specified perfect category is idempotent complete, and its degree-zero object-class comparison is the affine Euler bridge. [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F4] The exact HTT input above supplies derived space-valued sheafification and its left exactness, and separately the further left exact hypercompletion when a stalkwise local model is chosen. These are not inferred from set-valued sheafification. Asakura–Sato Definition 5.1 and Proposition 5.3 specify the formal local Q-space model. The site and size conventions are supplied here. Derived sections of a space-valued local model mean evaluation after the chosen derived local replacement; this is not an extension of the separate definition scoped to Nisnevich, cdh and étale abelian sections. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

## Proof
**Given:** The ring, sites, category models, Choice and size bounds in the Statement.

**Goal:** Establish the full affine comparison and its precise local use.

1.1 Every surjection between finite projective modules splits, and its kernel is finite projective, so the application of Gillet–Waldhausen in [F1] is valid in the ambient module category. The K-projective property in [F3] makes a bounded acyclic projective complex contractible. The mapping cylinder $Q\oplus\operatorname{Cone}(\mathrm{id}_P)$ factors a map $P\to Q$ as a degreewise split cofibration followed by a quasi-isomorphism, within bounded finite projectives. A map invertible in the localization is a quasi-isomorphism because its image in the derived category is invertible. This verifies factorization and DHKS-saturation for [F2]. The actual localization is the full affine perfect category of [F3], which is stable and idempotent complete. [A1, F1, F2, F3, given]

2.1 Compose the S/Q equivalence, degree-zero bounded-complex inclusion, enhanced comparison and canonical connective-to-nonconnective map from [F1]–[F3]. The comparison is an isomorphism in all positive homotopy degrees. BGT's additional degree-zero clause applies by step 1.1; the affine Euler bridge also identifies this same degree-zero object-class map. Thus it is an equivalence of full spaces, including components. Naturality for extension of scalars follows from the actual functors: it preserves projectives and split cofibrations, and it preserves quasi-isomorphisms here because their bounded projective cones are contractible. The core maps carry each object and automorphism to itself, and direct sums are preserved. [F1, F2, F3, step 1.1]

3.1 On each indicated site every object has an affine open covering, whose affine pieces remain objects of that site. On the small Nisnevich site these are affine étale objects; on the smooth big site these are affine smooth objects. Intersections need not be affine: their affine open covers suffice again. The exact degree-zero bundle-to-perfect functor, with the natural S/Q comparison, gives the Q-space-to-perfect-space arrow on every object, compatibly with pullback; on affines it is the arrow of step 2.1. It is therefore an equivalence on a covering basis, and hence an equivalence after derived space-valued sheafification by [F4]: restriction to the affine basis identifies the presheaves, and covering descent reconstructs their sheafifications on all objects. Left exactness also identifies the looped Q model. Applying the further left exact hypercompletion gives the same comparison in the source's stalkwise local convention, without identifying the two conventions on arbitrary presheaves. For the presheaf $\mathcal K$ of perfect K-spaces, write $L_\tau$ for the chosen derived local replacement. The natural unit $\mathcal K\to L_\tau\mathcal K$, followed by derived evaluation on $X$, supplies its map into sections of that common model. This only uses local comparison and the unit; it neither assumes hyperdescent of the original presheaf nor identifies global vector-bundle $K_0$ with perfect $K_0$. Restrictions and the units commute by naturality. [F1, F2, F3, F4, step 2.1] ∎

## Source versions and reading limits
The cached author-hosted Chapter IV PDF has SHA256 `9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248`; BGT arXiv:1001.2282v4 has SHA256 `08a8ae7fb5715d8269fd728c8a20d72403527aaefbeaa974b7040ec21d667a2d`; Asakura–Sato's 2019 journal PDF has SHA256 `6736b9710dd4d8d5fd89dfa2863a72cf90fc274ba47a45651fc7024209b4dcbf`. These cached bytes were hashed and the passages specified above were read in this assignment. The cached Chapter V PDF has SHA256 `52dcc8ee3a1764e5ea309c59f093ac8e2a1ea64f3b94bacc05e6a2b6125b1da8`; its stated passages were also read directly. HTT was read through the live primary PDF extraction, accessed 9 November 2026, within the stated limits; no local-byte hash is claimed for HTT. The corresponding live URLs were opened. Long comparison, completion and localization foundations remain precise external inputs.
