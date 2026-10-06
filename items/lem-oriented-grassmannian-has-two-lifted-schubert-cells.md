---
id: lem-oriented-grassmannian-has-two-lifted-schubert-cells
kind: lemma
title: "Oriented Grassmannians have two lifted Schubert cells"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - thm-oriented-real-vector-bundles-are-classified-by-bso
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapters 16–17, universal Thom and oriented Grassmannian constructions; the two-sheeted cover and lifted weak-topology argument is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. For n≥1, the forgetful map Gr⁺_n(R∞)=BSO(n)→Gr_n(R∞)=BO(n) is a two-sheeted cover, including n=1, where it is S∞→RP∞. Each Schubert cell has exactly two lifted cells, and these cells give BSO(n) the CW weak topology with finite boundary support. Set BSO(0) to the point.

## Facts & Assumptions

**Given:** AC; the chosen models $\operatorname{Gr}_n^+(\mathbb R^\infty)=BSO(n)$ and $\operatorname{Gr}_n(\mathbb R^\infty)=BO(n)$ with their weak direct-limit topologies, and the forgetful map $\operatorname{Gr}^+_n(\mathbb R^\infty)\to\operatorname{Gr}_n(\mathbb R^\infty)$; the Schubert CW structure on $BO(n)$ with its characteristic disks and orthonormal characteristic frames.

[F1] The oriented Grassmannian is the quotient of the oriented frame space by $SO(n)$, the tautological oriented bundle is the associated standard bundle, and the forgetful map is induced by forgetting the orientation ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]); oriented bundles over CW bases are classified by maps into $BSO(n)$ ([[thm-oriented-real-vector-bundles-are-classified-by-bso]]).

[F2] The Schubert strata give each finite-stage $\operatorname{Gr}_n(\mathbb R^N)$ a finite CW structure, with cellular subcomplex inclusions and union $BO(n)$ carrying the CW weak topology. Each bounded-dimensional Schubert skeleton has finitely many cells and lies in a finite stage. The characteristic-disk construction also carries a continuous orthonormal frame of the pulled-back tautological bundle ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], Proof 1.1 and 4.1).

[F3] Cellular attachments with finite boundary support form a CW complex with the weak topology, and its compact characteristic balls detect closedness ([[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]]); compact subsets of a Hausdorff space are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]), and the image of a compact space under a continuous map lies in a finite CW subcomplex ([[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]]).

[F4] AC supplies the choice of one label for each of the two lifts of every Schubert cell.

## Proof

**Proof technique:** direct.

1.1 For n≥1, forgetting orientation is genuinely a two-sheeted cover BSO(n)=Gr⁺_n(R∞)→BO(n)=Gr_n(R∞) in the chosen model. On a base graph chart, Gram–Schmidt supplies a continuous orthonormal frame of the tautological bundle. Its two possible orientations give two disjoint open subsets of the oriented chart, each mapped homeomorphically to the base chart. These charts cover BO(n). This includes n=1: SO(1) is trivial, Gr⁺_1(R∞)=S∞, and forgetting orientation is v↦Rv from the unit sphere to RP∞; over a chart with a chosen unit representative it has the two sections v and −v. Rank zero is excluded here and treated as a point below. [given, F1]

2.1 Lift each Schubert characteristic disk D^d→BO(n) to its two sheets; this is possible because the disk is contractible, and the two lifts restrict to the two lifts over every boundary cell. Choose a label for the two lifts of each cell using AC. Their open interiors map homeomorphically to the underlying Schubert open cell, and the lifted boundary maps into the inverse image of the lower Schubert skeleton. Thus these disks supply attaching maps with finite boundary support. Each finite Schubert skeleton is compact Hausdorff with finitely many cells; its two-sheeted preimage is compact Hausdorff, and the finite attaching quotient maps continuously and bijectively onto that preimage. It is therefore a homeomorphism. [step 1.1, F2, F4]

3.1 The infinite topology is the weak topology of these lifted cells. To check the nontrivial direction, let C be a subset whose inverse image in every lifted characteristic disk is closed. Over any evenly covered open set U of BO(n), restrict to one sheet U⁺. On each base characteristic disk, the preimage of U splits into relatively open-and-closed pieces on which a chosen lift lies in U⁺; the lifted-cell test makes the preimage of C∩U⁺ closed on each such piece, hence on the preimage of U. Therefore the preimage of U⁺\C is open relative to the preimage of U. Since that preimage of U is open in each characteristic disk, this restricted preimage is open in the full disk. The base CW weak-topology test makes U⁺\C open in U⁺, hence C∩U⁺ closed there. The same holds on the other sheet, and these sheets cover BSO(n), so C is closed upstairs. Conversely a closed subset has closed inverse image under each characteristic map by continuity. The lift topology is therefore exactly the CW weak topology. Finite cell counts in each dimension and closure finiteness are inherited from the Schubert structure, with two lifts per cell. For n=0, BSO(0) is a point by the published definition. This is the lifted-cover CW prerequisite of the shared MSO prespectrum definition. [step 2.1, F2, F3] ∎
