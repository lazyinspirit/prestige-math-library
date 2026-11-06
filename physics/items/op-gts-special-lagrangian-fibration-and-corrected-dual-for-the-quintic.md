---
id: op-gts-special-lagrangian-fibration-and-corrected-dual-for-the-quintic
kind: open-problem
title: Special-Lagrangian fibration and corrected dual for the quintic
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-special-lagrangian-with-phase
  - def-gts-smooth-syz-fibration-and-dual-local-system-torus
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-mum-quintic-degeneration-and-normalized-metrics
  - cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-special-lagrangian-with-phase: mathematical-premise
  def-gts-smooth-syz-fibration-and-dual-local-system-torus: mathematical-premise
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-mum-quintic-degeneration-and-normalized-metrics: mathematical-premise
  cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Yang Li, SYZ Conjecture for Calabi-Yau Hypersurfaces in Fermat Family
      url: https://arxiv.org/pdf/1912.02360v1
      locator: Theorem 1.1 and its hypotheses for generic regions near the large-complex-structure limit
    - title: Yang Li, Valuative Independence and Metric SYZ Conjecture
      url: https://arxiv.org/pdf/2605.00516v1
      locator: Theorems 1.4, 1.6, and 1.8
    - title: Harold Blum and Yuchen Liu, Valuative Independence for Calabi-Yau Varieties
      url: https://arxiv.org/pdf/2604.27890v1
      locator: Theorem 1.1, valuatively independent bases for polarized log-canonical Calabi–Yau pairs
    - title: Yuto Yamamoto, Non-Archimedean SYZ Fibrations via Tropical Contractions
      url: https://arxiv.org/pdf/2404.04972v2
      locator: Theorem 1.1 and §1.2, Batyrev–Borisov toric degenerations; arXiv version 2
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: Introduction and §3, SYZ proposal, exact examples, and open corrected-dual questions
    - title: "Wei-Dong Ruan, Lagrangian torus fibration of quintic Calabi-Yau hypersurfaces III: Symplectic topological SYZ mirror construction for general quintics"
      url: https://arxiv.org/pdf/math/9909126v2
      locator: Theorems 1.1 and 6.2; Introduction, pp. 3–5, distinction between Lagrangian and special-Lagrangian fibrations
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Fix a one-parameter MUM degeneration $f:\mathcal X\to\Delta$ whose general fibre $X_t$ is a smooth quintic threefold, together with specified Ricci-flat Kähler metrics normalized by $\int_{X_t}\omega_t^3/3!=1$. Construct, for sufficiently small $t\ne0$, a smooth SYZ fibration on a specified open subset $X_t^\circ\subseteq X_t$, with special-Lagrangian $T^3$ fibres over the complement of an explicitly controlled discriminant. Here the discriminant is to be a specified closed, locally finite codimension-at-least-two subset of the three-dimensional base with its integral-affine monodromy data; the fibration must be a proper submersion over its complement.

Then form the dual local-system tori $\operatorname{Hom}(H_1(L_b;\mathbb Z),U(1))$, specify a completed coefficient ring, wall functions, scattering diagram and theta-function or equivalent correction rule, and prove that the corrected dual compactifies to a complex family isomorphic to the specified mirror quintic family under a stated parameter map. The family, open subset, discriminant, metric normalization, coefficient completion, correction series, and mirror parameter map must all be fixed; no global fibration or correction is implicit in this formulation.

## Status

**Reviewed as of 2026-11-04.** The sources reviewed here do not establish this full target. This is a literature-scope assessment, not a proof that no result exists; the exact target remains the specified metric special-Lagrangian fibration together with the corrected complex-family reconstruction.

The literature contains relevant results at distinct scopes:

- The local Calabi theorem and Ricci-flat corollary supply individual metric existence under their stated compact-Kähler hypotheses. This open problem still takes the normalized metric family as specified data; individual metric existence does not supply the controlled degeneration, special-Lagrangian fibration or corrected mirror reconstruction requested here.
- Yang Li, Theorem 1.1 (arXiv:1912.02360v1), constructs special-Lagrangian torus fibrations on generic regions in the Fermat hypersurface family near the large-complex-structure limit, along a subsequence, with the volume fraction of those regions tending to one. For dimension three this includes a Fermat quintic family. It does not give the specified global complement/discriminant compactification or corrected mirror-family isomorphism.
- Wei-Dong Ruan, Theorem 6.2 (arXiv:math/9909126v2), constructs corresponding Lagrangian torus fibrations for generic quintics near the large-complex limit and mirror quintics near the large-radius limit, with naturally dual regular fibres under the stated symplectic-topological setup. The paper explicitly distinguishes these Lagrangian fibrations from the then-expected special-Lagrangian fibrations (Introduction, pp. 3–5); its theorem therefore does not supply the metric special-Lagrangian family or the correction and compactification data fixed above.
- Yang Li, Theorems 1.4 and 1.8 (arXiv:2605.00516v1), proves a metric-SYZ result for polarized maximal degenerations under the weak comparison property and a valuatively independent basis hypothesis. The reported conclusion gives special-Lagrangian torus fibrations on open subsets of measure at least $1-\delta$ for every $\delta>0$, for sufficiently small parameter. Blum–Liu Theorem 1.1 (arXiv:2604.27890v1) supplies valuatively independent bases for every positive tensor power over a DVR essentially of finite type over a characteristic-zero field, and for sufficiently divisible positive tensor powers over $k\llbracket t\rrbracket$, under its stated projective log-canonical Calabi–Yau and ample-line-bundle hypotheses. Applying this chain to a particular quintic requires checking those exact hypotheses; it is not a proof here.
- Yamamoto Theorem 1.1 (Selecta Math. 32 (2026), arXiv:2404.04972) gives non-Archimedean affinoid torus fibrations outside a codimension-two discriminant for the stated Batyrev–Borisov toric degenerations. That is not a metric special-Lagrangian fibration or a corrected complex mirror reconstruction.
- Gross–Wilson gives K3 and Borcea–Voisin cases at its exact lattice and possibly degenerate-metric scope, not a quintic reconstruction.

Thus the reviewed sources establish partial metric-SYZ results, symplectic-topological Lagrangian duality, and non-Archimedean torus fibrations, each under its own hypotheses. None of the exact statements above supplies all requested metric, discriminant, coefficient-completion, correction, and mirror-isomorphism data simultaneously. That scope comparison is an inference from the cited theorem statements, not a new theorem.

## Source references

[[def-gts-mum-quintic-degeneration-and-normalized-metrics]]

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]

[[def-gts-smooth-syz-fibration-and-dual-local-system-torus]]

[[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]]
