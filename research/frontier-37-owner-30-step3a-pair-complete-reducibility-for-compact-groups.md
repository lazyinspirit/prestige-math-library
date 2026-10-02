# Step 3a scope review — complete-reducibility-for-compact-groups

- Run `frontier-37-owner-30`, batch 15, role alpha, label
  `step3a-pair-complete-reducibility-for-compact-groups-2dad99600542208d`,
  covers `complete-reducibility-for-compact-groups`.
- A page `complete-reducibility-for-compact-groups` (order 510.071,
  representation-theory, 14 items). B page
  `complete-reducibility-for-compact-groups-examples` (order 510.072, 4 items).
  Companion pointers agree A↔B; the B page requires only its A page.
- Decision: **sufficient**. Scope only — no item approval, no owner record, and
  no edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- `research/frontier-37-owner-30-batch-15.pages.json` (14 A + 4 B items with
  statements, `deps`, `dependency_level` 0–5, provenance),
  `research/frontier-37-owner-30-batch-15.coverage.json` (one page entry keyed
  to the A page, four sources, 38 harvested rows),
  `research/frontier-37-owner-30-batch-15.notes.md`, and
  `research/frontier-37-owner-30-batch-15.cross-batch-dependencies.json` = `[]`.
- Prose design: `research/plan-representation-theory-groups-track.md` RG-21
  section L1595–1640 (heading, 14-row A table, hard proof plan, 4-row B table);
  per-pair source row L2333; harvest crosswalk L2463–2467; binding `requires`
  row L2725 (§15.2); §15.5 count and binding proof repairs L2854–2862;
  convention rows L198–212 and L2200 (inner products linear in the first
  variable, sources linear in the second conjugated).
- Plan contract: `research/plan-spec.json` rows 510.071/510.072 (empty item
  arrays, `requires` fixed) and the consumer row 510.073
  `peter-weyl-theory-for-general-compact-groups` (15-item design at
  L1645–1676).
- Run records: `research/frontier-37-owner-30-alpha-step1-drift.md`
  (RG-21 verdict `no-drift`), `research/frontier-37-owner-30-drift-evidence.json`
  (batch 15 entry carries exactly the manifest's six declared requirements),
  `research/frontier-37-owner-30-scope-ledger.json` (pair present, batch 15),
  and all 18 `research/frontier-37-owner-30-step1-<item>.json` readiness
  records (18/18 present, every `decision: ready`). No owner decision exists
  for this pair: `research/frontier-37-owner-30-owner-authoring-direction.md`
  is absent and no Step-3a owner receipt exists.
- Source re-verification at review time (2026-09-30): all four coverage URLs
  re-downloaded; byte counts and sha256_16 match the coverage fetch stamps
  exactly — Kowalski 1,838,207 B `f63d9c26ec965b9c` (338 pp.), Serganova
  1,071,844 B `64288cdbd27bf066` (159 pp.), Vogan 310,822 B
  `7cd65102cec8b3fc` (12-page PostScript note), Bekka–de la Harpe–Valette
  1,971,873 B `0281823290dfb42e` (523 pp.).

## Scope against the prose design

- All 18 designed ids are present in the manifest — 14 A and 4 B, no additions,
  no drops; every manifest statement implements its design row. The only
  difference from the design table is dependency order (e.g.
  `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements`
  precedes `lem-averaging-makes-a-finite-dimensional-representation-unitary`),
  which is the manifest's level ordering, not a scope change.
- The binding §15.5 proof repair is in the inventory: the finite-dimensionality
  theorem is routed through the three rank-one averaging lemmas
  (`lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous`,
  `lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner`,
  `lem-a-compact-scalar-identity-forces-finite-dimension`), and
  `lem-compact-convolution-operators-are-hilbert-schmidt` is confined to
  convolution on L²(K) — the manifest statement matches (kernel
  f(xy⁻¹), HS norm ‖f‖₂), and no item asserts compactness of an integrated
  convolution operator on an arbitrary irreducible.
- The manifest `requires` equals the binding §15.2 row exactly: the Haar,
  modular/L¹ and GNS A pages, `banach-valued-integration-and-the-radon-nikodym-property`,
  and both compact-operator A pages. The design's own Requires paragraph omits
  the Bochner-integration page, but the binding row and plan-spec row include
  it, and the page's vector-valued averages (P_σ, Q_ξ) consume it.
- Deliberate boundary, not an omission: the arbitrary-unitary Hilbert
  direct-sum decomposition and Peter–Weyl density belong to RG-22 by design.
  The manifest items say so explicitly ("No sum over the unitary dual is
  asserted here"; "No assertion is made that the sum of all P_σ is I_H") and
  the design's hard proof plan forbids the claim before RG-22. The destination
  `peter-weyl-theory-for-general-compact-groups` is a planned page (plan-spec
  order 510.073) whose design contains
  `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely`
  (L1665) and whose binding requires row includes this A page (L2725). The
  plan's index line L52 ("averaging, finite-dimensional irreducibles, Hilbert
  direct sums") is therefore realized across the RG-21→RG-22 pair, with the
  Hilbert-sum half on RG-22.
- All six prerequisite pages are published `library/` pages with nonempty item
  inventories: `library/representation-theory/haar-measure-existence-and-uniqueness.md`,
  `.../the-modular-function-and-l1-group-algebras.md`,
  `.../unitary-representations-positive-type-and-gns.md`,
  `library/functional-analysis/banach-valued-integration-and-the-radon-nikodym-property.md`,
  `.../compact-operators-and-riesz-schauder-theory.md`,
  `.../compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`.

## Source coverage

38 harvested rows: 17 `included`, 5 `inline`, 12 `deferred` (all twelve to the
planned RG-22 page), 4 `out-of-scope` with specific reasons. Load-bearing
passages re-read in the re-downloaded full texts:

- Kowalski Thm 5.2.11(1) pp.221–222: normalized-Haar averaging gives a
  positive-definite invariant form and semisimplicity of finite-dimensional
  representations (backs `def-averaged-hermitian-form-for-a-compact-group`,
  `lem-averaging-makes-a-finite-dimensional-representation-unitary`,
  `thm-finite-dimensional-compact-group-representations-are-completely-reducible`).
- Kowalski Thm 5.4.1 and Cor 5.4.2(1),(2) pp.230–235: Peter–Weyl decomposition
  (deferred), finite dimensionality of irreducible unitary representations
  (included), and the arbitrary decomposition (deferred); the manifest keeps
  only (1) plus the convolution-kernel step from the Thm 5.4.1 proof.
- Kowalski Thm 5.5.1(2) and Lemma 5.5.2 pp.237–239: Φ_π = dim π ∫ χ_π(g)ϱ(g)dμ(g)
  with probability Haar, and the 1/d normalization of matrix-coefficient inner
  products.
- Kowalski Example 6.1.3(2) pp.249–250: the countable product ∏Z/2Z has no
  faithful finite-dimensional representation (kernels contain cofinite product
  subgroups) — backs the B-page boundary example.
- Serganova Prop 1.23, Ex 1.24, Cor 1.25, Thm 1.29, Lemma 1.30, Thm 2.1,
  Cor 2.2 pp.55–58: rank-one averaging (compactness posed as the exercise the
  local page must prove), orthogonal complements of closed invariant subspaces,
  Schur orthogonality; and Exercise 2.10 p.60 with its printed `1/dim ρ`
  projection prefactor (rejected, see below).
- Vogan Thm 2.13(4), Cor 2.16 (12-page note): d(μ)=Vol(K)/dim V_μ Fourier
  normalization and the projection (dim V_μ/Vol K)∫Θ_{μ*}μ′ = Id; with
  Vol(K)=1 this is the dim-normalized isotypic projection.
- Bekka–de la Harpe–Valette Prop A.5.1 pp.323–324 and Thm A.5.2 p.324:
  finite Haar measure iff compact (specialized to ℝ), and Peter–Weyl quoted
  without proof (correctly excluded from proof support).

Independent normalization check performed by this review (not taken on trust
from the scaffold): under normalized Haar and inner products linear in the
first variable, Schur orthogonality gives
∫⟨σ(k)v₁,w₁⟩conj(⟨σ(k)v₂,w₂⟩)dμ = d⁻¹⟨v₁,v₂⟩⟨w₂,w₁⟩, hence
d∫conj(χ_σ(k))σ(k)dμ(k) is the identity on an irreducible σ-copy, while
∫χ_σ(k)σ(k)dμ = d⁻¹I. So the manifest's
`P_σ = d_σ∫conj(χ_σ)π dμ` is the correct normalization, and the coverage's
rejection of Serganova Exercise 2.10's printed `1/dim ρ` prefactor is
justified; Kowalski Thm 5.5.1(2) with Vol(K)=1 and Vogan Cor 2.16 carry the
same dim factor.

Five planned items carry no harvested row: the three local technical lemmas
`lem-haar-averaging-projects-onto-the-intertwiner-space` (proof provenance
ai-altered), `lem-conjugation-orbits-...`, `lem-a-compact-scalar-identity-...`,
and the two B specializations `ex-averaging-a-form-for-a-circle-representation`
(statement ai-generated, generation role example) and
`ex-isotypic-projections-for-a-finite-group-as-a-compact-group`. The checklist
is source-heading-anchored, and the general claims these items rest on are
source-backed, so this is legal; it is recorded here so Step 3b/Step 5 know
these five must be proved locally from their declared suppliers.

## Role in the library

- Consumers: the B page (same pair) and the planned RG-22 A page. The pair has
  no in-run cross-batch dependency (`cross-batch-dependencies.json` = `[]`), so
  it neither consumes nor blocks other pairs of this run.
- It delivers to RG-22 exactly what that design needs — L²(K) convolution
  Hilbert–Schmidt/compactness, finite dimensionality of irreducibles, Schur
  orthogonality, and the isotypic projections RG-22 must upgrade to a complete
  decomposition. The published differential-geometry page
  `compact-lie-groups-maximal-tori-and-peter-weyl-theory` treats the Lie case;
  per design L144 the agreement is cited, never used as proof.
- All six page-level prerequisites are published; no planned-but-unbuilt
  prerequisite is consumed at page level.

## Uncertainty and observations for the owner (not scope findings)

1. Plan index line L52 says RG-21 includes "Hilbert direct sums", while the
   detailed RG-21 design, the hard proof plan, §15.5 and the RG-22 binding row
   put that result on RG-22. I treat the detailed design as normative (the
   drift review agrees). If the owner instead reads L52 as the page contract,
   the remedy is an owner scope amendment, not a reviewer action.
2. Locator drift already handled by the coverage: the design's Kowalski range
   starts at §5.3 but the load-bearing unitarization theorem is 5.2.11
   (pp.221–222), and the design cites BHV App. A §A.5 as pp.306–307 while the
   fetched edition prints it at pp.323–324. Same mathematics; the coverage uses
   the inspected locators.
3. Serganova Exercise 2.10: I confirmed the printed `1/dim ρ` prefactor and
   recomputed that it does not give the identity under the house normalization;
   the pair correctly takes the dim factor from Kowalski/Vogan. Recorded source
   discrepancy, not a defect of the pair.
4. The circle example's statement provenance is `ai-generated` (generation role
   example), a disclosed divergence from the design's `literature-derived` row
   (batch notes). Scope unchanged — it exercises the designed averaging
   mechanism — but the owner may want it to stay visible at review.
5. The five row-less items above; each must get a complete local argument in
   Step 3b.
6. Not judged here: proof correctness, statement-level source fidelity, AC
   bookkeeping, dependency minimality, or any item-level verdict — those are
   Step 3b/Step 5 obligations.

## Checks run

| Check | Result |
|---|---|
| `coverage-checklist.mjs` on batch-15 coverage | exit 0: 1 page, 38 rows, 0 errors, 0 warnings |
| Design-to-manifest id diff (RG-21 section) | 18/18 present, 0 missing, 0 extra |
| Manifest `requires` vs §15.2 binding row | identical 6-page set |
| 4 source URLs re-downloaded; sha256_16/bytes vs fetch stamps | 4/4 exact match |
| Key locators re-read in full texts | all present as claimed |
| Step-1 readiness records for the 18 items | 18/18 present, all `decision: ready` |
| Consumers scan over `plan-spec.json` requires | 2: the B page and RG-22 |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | run-level: this pair listed as awaiting review; decision recorded below |

## Scope decision

**sufficient** for `complete-reducibility-for-compact-groups` at the current
pair scope hash: the 14 A and 4 B items realize the RG-21 prose design
item-for-item, the harvest is full-text stamped and re-verified, the
deferrals/exclusions are owned (12 rows to the planned RG-22 page, 4
out-of-scope with reasons), and the pair's library interfaces are present and
published-backed. No enrichment or pair merger is needed; no owner `proceed`
is required for this scope.

## Appendix — inventory bound to this decision

A page (14, manifest order):
`def-averaged-hermitian-form-for-a-compact-group` (definition),
`lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements` (lemma),
`lem-averaging-makes-a-finite-dimensional-representation-unitary` (lemma),
`thm-finite-dimensional-compact-group-representations-are-completely-reducible`
(theorem), `def-haar-averaging-operator-on-hom-spaces` (definition),
`lem-haar-averaging-projects-onto-the-intertwiner-space` (lemma),
`lem-compact-convolution-operators-are-hilbert-schmidt` (lemma),
`lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous` (lemma),
`lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner` (lemma),
`lem-a-compact-scalar-identity-forces-finite-dimension` (lemma),
`thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional`
(theorem), `thm-schur-orthogonality-for-compact-groups` (theorem),
`def-compact-group-isotypic-projection` (definition),
`thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`
(theorem).

B page (4, manifest order):
`ex-averaging-a-form-for-a-circle-representation` (example),
`ex-isotypic-projections-for-a-finite-group-as-a-compact-group` (example),
`ex-compact-group-with-no-faithful-finite-dimensional-representation` (example),
`cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group`
(counterexample).

Scope receipt `research/frontier-37-owner-30-step3a-review-complete-reducibility-for-compact-groups.json`
(sha256 `02c9215ebcdb0b52b7619ef575914a3fc9e28865de78e34cf4f4795e7fb058c2`)
is hash-bound to the current manifest pages. Next action: Step 3b may author
this pair under this scope; the owner should read observations 1–5 before or
during authoring.
