# Step 3a scope review — pair `the-branching-rule-and-the-young-graph`

- Run: `frontier-37-owner-30` · role: alpha (step 3a) · batch 14 · orders 510.049 / 510.050.
- A page: `the-branching-rule-and-the-young-graph`; B page: `the-branching-rule-and-the-young-graph-examples`.
- Written 2026-09-30 17:53 AEST (07:53 UTC) by the dispatched step-3a agent.
- Decision: **sufficient** (recorded through `tools/step3-decisions.mjs record-scope`; no owner record, no item approvals, no scaffold edits).
- This pass judges planned scope (definitions, results, examples) against the prose design, source coverage and library role. Proof correctness, source fidelity of individual proofs and item-level approvals remain Step 3b/5 duties.

## 1. Controlling design and intended subject

- The controlling design is RG-10 in `research/plan-representation-theory-groups-track.md`
  L638–L717 ("The branching rule, Young's rule, and the Young graph"), with the spine row at
  L41 and the binding §15.2 prerequisite row at L2713. The cross-track ownership confirmation
  is `research/plan-symmetric-group-representations-track.md` L63 (RG-10 owns ordinary
  restriction and induction branching, Young's rule, and the Schur–Weyl interface), with
  L37/L40 reserving modular Specht lattices and good-node modular branching to SYMR-6/SYMR-9
  and L92–L93 making SYMR-2 import this page for Young's rule.
- Owner decision on record: the step-1 drift review left RG-10's unpublished Lie-theory
  supplier owner-held; the owner repaired the RG-10 prose design in place so the
  finite-dimensional complex GL(V)/gl(V) Schur–Weyl interface (double centralizer,
  decomposition, cutoff, highest weight) is proved locally, without RL-8. See
  `research/frontier-37-owner-30-operator-record.md` (verified-state bullet on the two
  owner-held drift findings) and `research/frontier-37-owner-30-alpha-step1-drift.md`
  L70–L73 (verdict `no-drift`, "without adding RL-8", explicit local-route obligations).
- Intended subject (design blocks): (a) restriction as a removable-corner Specht filtration
  over a general coefficient field, with the complex multiplicity-free corollary via Maschke;
  (b) induction over addable nodes via finite Frobenius reciprocity; (c) the Young graph,
  its path/standard-tableau bijection and its path count f^λ; (d) Young's rule
  [M^μ : S^λ] = K_{λμ} over C; (e) the local complex Schur–Weyl interface with the exact
  length cutoff and highest weights. The design's B list is five items: four finite
  computations and one sharp hypothesis failure.

## 2. Plan and manifest inventory

- `research/plan-spec.json` carries this pair with the four declared prerequisites
  (`young-diagrams-tableaux-and-permutation-modules`,
  `specht-modules-and-the-irreducibles-of-the-symmetric-group`,
  `induced-representations-and-frobenius-reciprocity`, `tensor-products-of-modules`) and an
  empty item inventory, which is the normal pre-splice state and matches the batch-14 notes.
- `research/frontier-37-owner-30-batch-14.pages.json`: A page 20 items, B page 5 items.
  All 16 A items of the design table are present verbatim in intent; the A page adds four
  enablers; the B page matches the design's B table one-for-one:

  | Design A item | Manifest | Note |
  |---|---|---|
  | `def-corner-order-and-specht-deletion-map` … `thm-specht-restriction-branching-filtration`, `cor-complex-specht-restriction-branching-rule`, `thm-complex-specht-induction-branching-rule` | present (6) | general-field filtration + complex split + induction |
  | `def-young-graph`, `cor-paths-in-the-young-graph-index-standard-tableaux` | present (2) | graph and path/tableau bijection |
  | `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules`, `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`, `thm-youngs-rule-for-permutation-modules` | present (3) | Young's rule |
  | `def-commuting-symmetric-and-linear-actions-on-tensor-power`, `lem-tensor-place-operators-span-the-symmetric-centralizer`, `thm-schur-weyl-double-centralizer`, `thm-schur-weyl-decomposition-with-length-cutoff`, `lem-schur-weyl-length-cutoff-by-column-antisymmetrization` | present (5) | local Schur–Weyl block |
  | — (added) | `def-polytabloid-specht-module-over-an-arbitrary-field`, `lem-integral-specht-garnir-straightening-and-field-basis`, `lem-semistandard-homomorphisms-span-in-characteristic-zero`, `lem-schur-weyl-polytabloid-highest-weight` | enablers, see below |

- The four enablers are not scope creep against the design; each discharges a claim the
  design itself makes:
  1. The published `def-column-antisymmetrizer-polytabloid-and-specht-module` is over C
     (`S^λ := span_C{e_s}`, elements in C[S_n] — read in `items/`), so the design's
     "general coefficient field where the construction is valid" needs an arbitrary-ring
     Specht definition.
  2. The published `lem-adjacent-column-garnir-relation` and
     `lem-garnir-straightening-of-polytabloids` are complex-only, so the general-field
     standard basis needs the integral Garnir/straightening lemma.
  3. Craven's Theorem 2.16 proof closes Young's rule by the Exercise 2.5(iv) dimension count,
     which is an RSK statement reserved for RG-11 (`the-hook-length-formula-and-rsk-correspondence`);
     the direct spanning lemma removes that forward dependency exactly as the design's
     "construct and triangularize the semistandard maps" plan requires.
  4. The repaired design's Schur–Weyl hard-proof plan explicitly includes the row-labelled
     polytabloid map, the weight and the raising-operator calculation; the added
     highest-weight lemma is that step made an explicit predecessor.

## 3. Sources actually read and verified (independently of the batch notes)

All six recorded full texts were re-downloaded on 2026-09-30 and are byte-identical
(byte count and sha256_16 prefix) to the run's `fetch_verified` stamps; all six URLs are
live (200) in `research/frontier-37-owner-30-url-liveness.json`.

| Source | bytes / sha256_16 | Sections read for this review | Key confirmations |
|---|---|---|---|
| Chan, *Representation Theory of Symmetric Groups* | 303971 / `8a3cac907770c66d` | Thm 4.16 and its continuation (PDF pp. 19–20), Thm 6.8 (PDF p. 27) | Filtration stated over any field, with the invariance check deferred and the continuation ending in the author's own remark "I don't understand the above proof at all"; §6 gives induction and does **not** prove Young's rule |
| Craven, *Groups, Geometries and Representation Theory* | 369993 / `b2b190e9a1928b17` | §2.2 (Thm 2.6, Thm 2.7(i)(ii)) and §2.4 (Lemma 2.15, Thm 2.16) | Thm 2.6's proof uses the RSK count n! = Σ(f^λ)²; Thm 2.7(i)/(ii) with the CS_n statement and the left action (s·σ)_i = s_{iσ^{-1}}; Thm 2.16 closes with Exercise 2.5(iv) |
| Wildon, *Representation Theory of the Symmetric Group* | 322040 / `31e3817f5bd1f4d0` | §6 (PDF pp. 26–33), Thm 6.2, Thm 6.8, Lemma 6.10, closing remark | Standard basis over any field; the Garnir relation and straightening are integral (over Z); the remark proves the integral standard basis from Lemma 6.10 — this backs the added integral lemma |
| Snowden, MATH 711 | 955999 / `601448219a201de8` | Lemmas 2.45–2.46 (pp. 23–24), Def 3.22–Lemma 3.29 (pp. 36–39) | Lemma 2.45 gives the invariant filtration with its standard basis; Lemma 2.46 is explicitly only a sketch; Thm 3.23 with Remark 3.27 declining the RSK count ("This argument will not be presented here") and Lemmas 3.28–3.29 giving the direct spanning/independence route |
| Etingof et al., MIT 18.712 Ch. 4 | 516260 / `116dea942178e72d` | §§4.18–4.21 (pp. 18–21): Thms 4.54–4.57, Lemma 4.56, Prop 4.58, Cor 4.59, Thm 4.63 | Double centralizer, symmetric-centralizer identification, interpolation to invertible diagonal operators, and the exact nonvanishing/cutoff statement "L_λ is zero iff N < p" |
| Lin, *Modern Algebra I* | 2763341 / `63fdddc3d5a17e0d` | §27 (pp. 71–74): Ex 27.1, dual pairs, Thm 27.4, Prop 27.5, Ex 27.6–27.7, Cor 27.8–27.9, Ex 27.10–27.12 | Independent dual-pair/double-centralizer treatment; consistent with the manifest's translated left-action convention |

## 4. Coverage record and mechanical re-checks (re-run on the current disk state)

| Check | Result |
|---|---|
| `coverage-checklist.mjs` on batch-14 coverage, with `--require-destination` | exit 0 — 1 page, 66 harvested results, 0 errors, 0 warnings |
| Disposition mix | 43 included (36 source rows + 7 canonical), 15 inline, 1 deferred (Snowden's RSK route → `the-hook-length-formula-and-rsk-correspondence`), 7 out-of-scope with individual reasons (Craven Ex 2.5(iv) RSK count; Etingof 4.61–4.62, the character half of 4.63, 4.64; Lin 27.11–27.13) |
| `manifest-deps.mjs` batch 14 | exit 0 — 25 items, 0 errors |
| `content-policy.mjs --manifest-only` batch 14 | exit 0 — 25 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run` | exit 0 — 778 items across 60 pages; batch 14's maximum level is 7 (A max 6, B max 7) |
| Direct dependency resolution (all 25 items) | every `deps` entry resolves to a published `items/*.md` or to an earlier same-batch item; no missing id, no cycle |

## 5. Role in the library

- The four declared prerequisites are published pages; all external suppliers used
  (Maschke, complex Specht irreducibility/classification, finite induction adjunction,
  tensor-basis and iterated-tensor facts, standard polytabloid basis, Young tabloid
  machinery) exist as published items.
- No cross-batch dependency exists in either direction in this run:
  `frontier-37-owner-30-batch-14.cross-batch-dependencies.json` is `[]`, and a reverse scan
  of all 30 manifests finds no consumer of any batch-14 item. The B page requires only the
  A page, and every B item's dependencies are A-page or published items.
- Earlier published pages hand Young's rule here: the RG-8 review
  (`research/frontier-35-ten-categories-step3a-pair-young-diagrams-tableaux-and-permutation-modules.md`)
  defers Craven's Young rule to this page, and the RG-9 review
  (`research/frontier-36-complete-step3a-pair-specht-modules-and-the-irreducibles-of-the-symmetric-group.md`)
  records this page as its planned consumer for Young's rule and Kostka multiplicities.
  Planned consumers here are RG-11 (510.051) and the later SYMR pages; §15.2 L2713 fixes
  the prerequisite row. The page is therefore a root supplier in this frontier, and its
  scope is what later pages will import.

## 6. Scope-level mathematical spot checks (not proof approvals)

- The B counterexample was recomputed directly: over F_2, S^(2,1) is the augmentation plane
  in F_2³, (12) acts with a one-dimensional fixed space, while a direct sum of its two
  one-dimensional filtration factors would be a two-dimensional fixed space. The claim is
  true and provable from the A page's own items.
- `M^(2,1) = S^(3) ⊕ S^(2,1)` (1 + 2 = 3 tabloids; both Kostka numbers 1) ✓;
  (C²)^{⊗3}: 8 = 1·4 + 2·2 with (1,1,1) excluded by the length cutoff ✓;
  V⊗V = Sym²(V) ⊕ Λ²(V) ✓.
- The manifest's conventions (English diagrams, corner order top-to-bottom, left place
  action σ^{-1} on positions) agree with Craven/Snowden/Wildon as read.

## 7. Observations for the owner and later stages (no scope change requested)

1. Chan's continuation proves neither the invariance of the V_i nor the quotient; the
   manifest routes around this with Snowden's Lemma 2.45 and Wildon's integral
   straightening. This is a Step-3 authoring/Step-5 review obligation, not a scope gap.
2. The B counterexample's statement provenance is `ai-altered`: no cited source states it
   verbatim in the harvested ranges. It is true (checked above) and its ingredients are
   source-backed; Step 5b/source review should verify provenance honestly.
3. Near-duplication inside this run: pair 23 `integral-specht-modules-and-modular-simple-modules`
   re-mints the integral standard basis and arbitrary-ring construction in
   `def-integral-specht-lattice-and-base-change` without depending on this pair. This is not
   a deficiency of this pair (order 510 < 809; the general-field filtration needs the
   construction here anyway), but the owner may prefer pair 23 to consume this pair's
   `def-polytabloid-specht-module-over-an-arbitrary-field` and
   `lem-integral-specht-garnir-straightening-and-field-basis` once published.
4. The page title undersells the Young's-rule and Schur–Weyl blocks, and the two design
   documents differ in wording (groups-track "general coefficient field" versus
   symmetric-group-track "ordinary" branching). The controlling repaired RG-10 design
   includes the general-field filtration; SYMR-9's future good-node modular branching is a
   distinct interface, so no promised result is missing or duplicated between the planned
   pages as designed.

## 8. Decision

- `sufficient` — the planned definitions, results and examples cover the intended subject
  established by RG-10 and its owner-repaired Schur–Weyl route: general-field restriction
  filtration with complex splitting, induction branching, Young graph and path bijection,
  Young's rule, the local Schur–Weyl interface, and the design's five B checks.
- Recorded with `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30
  --page the-branching-rule-and-the-young-graph --decision sufficient --reason ...`,
  citing this report. No scaffold, manifest, coverage or sibling-pair file was modified.
