---
id: "thm-naturality-of-the-grothendieck-spectral-sequence"
kind: "theorem"
title: "Naturality of the Grothendieck spectral sequence"
deps: ["thm-grothendieck-spectral-sequence", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Sections 5.2 and 5.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For two pairs $(F,G)$ and $(F',G')$ on the same abelian categories satisfying the Grothendieck hypotheses, natural transformations $\alpha:F\to F'$ and $\beta:G\to G'$, and an input morphism $f:A\to A'$, induce a morphism of Grothendieck spectral sequences from $E_2$ onward. The $E_2$ map is the composite of the derived transformations on $R^qF$ and $R^pG$; the target map is the derived map for $GF\to G'F'$, whose component is $\beta_{F'(A)}G(\alpha_A)$, together with $f$. The maps preserve the target filtration and are independent of comparisons. Assume DC or supply the comparisons and homotopies used in the construction.

## Facts & Assumptions

**Given:** Both acyclicity hypotheses, supplied resolutions and the transformations above. Transformations here have the same source, intermediate and target categories.

[F1] The Grothendieck construction and its input comparisons identify the second page and filtered target naturally ([[thm-grothendieck-spectral-sequence]]).

[F2] A map of bounded-below complexes lifts to their Cartan–Eilenberg resolutions and gives a well-defined horizontal-first map from $E_2$ ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]).

## Proof

1.1 Fix an injective resolution $I$ of the input. Naturality of $\alpha$ makes $\alpha_I:F(I)\to F'(I)$ a cochain map. Lift it by F2 to $a:J\to J'$ between their supplied Cartan–Eilenberg resolutions. Apply $G$ and then $\beta$ to form the bicomplex map $GJ\xrightarrow{G(a)}GJ'\xrightarrow{\beta_{J'}}G'J'$. It preserves both bidegrees, hence the resolution-degree filtration. [F1, F2, given]

2.1 Taking horizontal cohomology identifies the first factor with $G$ applied to the map of the injective resolutions of $R^qF(A)\to R^qF'(A)$. Taking vertical cohomology then gives $R^pG$ of this map followed by the transformation $R^pG\to R^pG'$ induced by $\beta$ on the same injective resolution. This is the stated $E_2$ map. F2 makes it independent of the lift, and page homology propagates this independence to later pages. [F1, F2, step 1.1]

3.1 The augmentation square from $GF(I)\to\operatorname{Tot}(GJ)$ to $G'F'(I)\to\operatorname{Tot}(G'J')$ commutes: $a$ extends $\alpha_I$, and $\beta$ commutes with augmentations and differentials. Therefore the target map is induced by $\beta_{F'(I)}G(\alpha_I)$ and is the stated derived-composite map. The bicomplex map preserves the filtration, so its cohomology map preserves the image filtration. Combine this construction with the input map in F1; naturality of $\alpha,\beta$ shows the order of combination agrees. [F1, step 1.1, step 2.1]

4.1 Identity transformations give identity $E_2$ and target maps. For composites, either lift the composite or compose lifts: they extend the same complex map and F2 gives the same $E_2$ maps; the commuting augmentation squares give the same target map. These facts prove naturality, with exactly the stated DC/supplied-data qualification. Zero transformations and zero objects yield zero maps throughout. [F1, F2, step 2.1, step 3.1] ∎
