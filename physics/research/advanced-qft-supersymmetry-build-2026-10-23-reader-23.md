# Reader report — batch 23

## Scope and opened inventory

- Run: `advanced-qft-supersymmetry-build-2026-10-23`; assigned batch: `23`.
- Batch manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-23.pages.json`.
- A page: `library/quantum-field-theory-mathematics/qftx-yang-mills-clay-problem.md`.
- B page: `library/quantum-field-theory-mathematics/qftx-yang-mills-clay-problem-examples.md`.
- Items, read in dependency order (the manifest declares no item dependencies):
  1. `items/op-qftx-clay-4d-yang-mills-existence-mass-gap.md`.
  2. `items/ex-qftx-clay-two-global-forms-same-algebra.md`.
  3. `items/ex-qftx-clay-finite-one-plaquette-regulator.md`.
- Associated review records: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-23.proof-contracts.json` and the empty `research/advanced-qft-supersymmetry-build-2026-10-23-batch-23.cross-batch-dependencies.json`.
- Reader instructions: `briefs/reader.md`; owner scope direction: `research/advanced-qft-supersymmetry-build-2026-10-23-owner-authoring-direction.md`.

Both assigned pages have frontmatter only, retain `page_layout: compact-v1`, and have inventories matching the manifest. No assigned item declares a logical dependency, and the cross-batch dependency record is empty. The three item bodies contain no TikZ or tikzcd diagrams.

## Mathematical and source review

### Open problem: `op-qftx-clay-4d-yang-mills-existence-mass-gap`

The formulation defines the gauge group and Lie algebra terms, spacetime and symmetry groups, bundle and connection data, field labels, Wightman data, Euclidean distributions, regularity conditions, perturbative comparison conventions, OPE condition, stress-tensor condition, and spectral gap in an uninterrupted `## Open problem` section. Its sources appear afterward in separate paragraphs under `## Open problem references`; the dated unresolved status follows in `## Status`. The status is consistent with the current [Clay problem page](https://www.claymath.org/millennium/yang-mills-the-maths-gap/), which labels the problem unsolved and says no proof is known.

The [Jaffe–Witten problem statement](https://www.claymath.org/library/monographs/MPPc.pdf), §4, printed pp. 141–142 (also the [Clay-hosted standalone text](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf), §4, PDF p. 6), requires a nontrivial four-dimensional theory for a compact simple gauge group, local fields corresponding to gauge-invariant curvature polynomials, short-distance agreement with asymptotic-freedom and perturbative-renormalization predictions, a stress tensor, an OPE with prescribed local singularities, and a positive mass gap. The item’s field and mass-gap requirements preserve this scope. Jaffe–Witten §§5–6 distinguish confinement and chiral symmetry breaking from the stated problem and describe the limits of the known compact-volume and lower-dimensional work.

The item goes beyond that source’s broad short-distance wording by prescribing all-order little-o remainders for correlations and Wilson coefficients, a specific dimension-truncation scaling-degree bound for the OPE, and a cutoff-independent spacetime-smearing limit identifying the stress tensor with translation generators. The cited Clay/Jaffe–Witten text does not state these particular quantitative conditions or establish that they are equivalent to its broad requirements. This is recorded as a suspected overstrength/scope defect because the item is titled and statused as the Clay problem; an authoritative equivalence or explicit strengthened-variant designation is needed to settle it.

I also checked the [current Clay status page](https://www.claymath.org/millennium/yang-mills-the-maths-gap/), the relevant [Jaffe lecture-note §7.3](https://arthurjaffe.net/Assets/pdf/CQFT.pdf), the cited [van Ritbergen–Vermaseren–Larin paper](https://arxiv.org/pdf/hep-ph/9701390), and the cited [Osterwalder–Schrader papers (1973)](https://doi.org/10.1007/BF01645738) and [II (1975)](https://doi.org/10.1007/BF01608978). The current Clay page supports the unsolved status. The 1975 paper’s introduction explains that the original E0–E4 reconstruction claim had a gap and supplies stronger regularity alternatives; the item does not rely on the 1973 theorem alone. The perturbative paper supports the stated pure-gauge first two beta coefficients after setting the fermion count to zero. These source checks do not independently prove the item’s bespoke all-orders estimates.

### Example: `ex-qftx-clay-two-global-forms-same-algebra`

The proof derives the quaternion norm identity, the kernel and differential of the conjugation map, surjectivity onto `SO(3)`, simplicity of both Lie algebras, compactness and connectedness of the two groups, and their nonisomorphism from different centers. The argument supports the stated consequence that a fixed `SU(2)` case does not settle a universal quantifier that also includes `SO(3)`. I found no mathematical defect in the item body. Its Statement is uninterrupted by links; the source links are in `Example references`, and its contextual link to the open problem is in `Remarks references`.

The associated proof contract has an inaccurate internal step locator: its `nonempty-choice` and `degenerate` boundary evidence assigns the fixed-axis argument to step 1.1, and its `endpoints` evidence also attributes angle endpoints to step 1.1. In the current item, step 1.1 proves quaternion product and norm identities; the fixed-axis and angle argument is step 2.1, while the central kernel values are treated in steps 1.2 and 3.1. This is an uneditable contract defect for this reader assignment; it does not invalidate the item proof.

### Example: `ex-qftx-clay-finite-one-plaquette-regulator`

The edge orientations give the stated ordered holonomy. The trace bound for the displayed `SU(2)` matrices yields `0 ≤ Sβ ≤ 2β`; the normalized round measure has total mass one, and its invariance is justified using the induced Hilbert–Schmidt metric. Integrating the continuous pointwise exponential bounds proves `e^{-2β} ≤ Zβ ≤ 1`, including the `β=0` case. The final step correctly limits the example to a finite graph integral and does not present it as a continuum construction or mass-gap proof. I found no mathematical defect in the item body. Its links are after the complete Example and Remarks sections.

## Edits and evidence

No content was edited. This is a read-only reader assignment. The report records the open-problem scope concern and the proof-contract locator mismatch; neither was repaired. No item formatting, reflow, precheck, or proof-layout command was run because there were no item edits.

## Findings not edited

1. **Suspected, fatal scope defect — `op-qftx-clay-4d-yang-mills-existence-mass-gap`.** The all-orders remainder, OPE scaling-degree, and stress-tensor smearing clauses make the item more specific than the cited Clay/Jaffe–Witten formulation, without an exact source or equivalence argument. See the source comparison above and the findings JSON.
2. **Confirmed, nonfatal contract defect — `ex-qftx-clay-two-global-forms-same-algebra`.** The proof contract’s boundary-case evidence points to the wrong proof steps as described above. The associated contract is outside the reader’s write scope.

## Page verdicts and blocker

- `qftx-yang-mills-clay-problem` (A): page frontmatter, empty body, layout flag, and item inventory are correct. **Hold on the member open-problem item’s suspected scope issue**; no separate page-carrier defect was found.
- `qftx-yang-mills-clay-problem-examples` (B): page frontmatter, empty body, layout flag, A-page prerequisite, and example inventory are correct. **Pass.** Both example arguments are mathematically sound on the inspected evidence.
- No scope or dependency blocker prevented review. The A-page disposition depends on resolving whether the detailed short-distance conditions are intended as an expressly strengthened variant.

## Coverage limits

All two assigned pages, all three assigned item bodies, the batch proof-contract record, and the cross-batch dependency record were opened. No item dependency was declared. I checked the cited primary-source passages relevant to the Clay formulation, status, perturbative coefficients, and Euclidean reconstruction conditions, but did not reconstruct the full all-order renormalization/OPE theory or the full Osterwalder–Schrader reconstruction proof. The exact relationship between the item’s quantitative short-distance conditions and the canonical Clay formulation remains unresolved; the finding is therefore a suspected scope defect, not a claim that those conditions are mathematically false.
