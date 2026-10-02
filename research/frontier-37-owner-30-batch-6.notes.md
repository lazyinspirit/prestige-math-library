# Frontier 37 owner 30, batch 6: Step 1 construction notes

Owned pair: `smooth-proper-curves-divisors-genus-and-ramification` (A page,
order 366.085) and `smooth-proper-curves-divisors-genus-and-ramification-examples`
(B page, order 366.086), both `scheme-theory`. The binding
`research/frontier-37-owner-30-owner-authoring-direction.md` does not exist
(checked before construction), so the design section and the current plan
govern. No published item, shared plan, engine state, or verdict was edited.

## Construction history and scope

- Design section AV-23 of `research/plan-algebraic-geometry-track.md`
  (lines 1570–1715) lists 37 A items and 12 B items with a binding
  normalization and smooth-model proof route. `research/plan-spec.json` carries
  the pair at order 366.085 with the identical nine `requires` and no item
  list, so the plan fixes the page contract and the design governs the
  inventory; no plan/design item conflict arises.
- The delivered manifest has 35 A items and 12 B items (47 total): 15
  definitions, 10 theorems, 8 lemmas, 2 corollaries, 9 examples and 3
  counterexamples. The 12 B items are exactly the design list, including the
  two `ai-generated`-statement leaves allowed by the design
  (`ex-basepoint-linear-system` carries `generation.role: example` and is not a
  dependency target anywhere in the run).
- Two necessary local A items were added because no published item of the
  required generality provides them: `def-rational-map-integral-schemes` (the
  published rational-map definitions are for classical affine varieties, while
  the extension lemma and the function-field equivalence are stated for
  integral finite-type k-schemes) and
  `lem-torsion-quotient-invertible-sheaves-effective-divisor` (the twist
  identification `M ≅ L ⊗ O_C(D)` used by the canonical-bundle ramification
  formula). Both carry a proof strategy and resolve entirely to
  published/earlier-in-run suppliers.
- Four design entries whose proofs the design itself marks `not-supplied` are
  not in this manifest: `thm-riemann-hurwitz`,
  `lem-unramified-cover-curves-genus-relation`,
  `thm-high-degree-line-bundle-basepoint-free-preview` and
  `thm-high-degree-line-bundle-very-ample-preview`. The design's ordering note
  (“the builder may rehome the final theorem items to `AV-25` while leaving
  only non-load-bearing previews here”) governs this choice, and the completed
  versions are designed on AV-25 as `thm-riemann-hurwitz-complete`,
  `cor-unramified-cover-curves-genus-complete`,
  `thm-degree-two-g-line-bundle-basepoint-free` and
  `thm-degree-two-g-plus-one-line-bundle-very-ample`. None of the four appears
  in any manifest of this run yet, so batch 8 must carry them or the four
  statements are lost. This is recorded as the batch's one cross-batch scope
  expectation — not a new prerequisite pair and no change to the selected
  pair.
- Source-locator drift, recorded not escalated: the design's Vakil pagination
  (Ch. 21 §§21.1–21.9, pp. 431–460) belongs to an earlier edition, while the
  accessible 2025 PDF places the harvested sections at printed pp. 596–620 and
  the coverage locator says so. The design's Stacks *Algebraic Curves*
  “§§53.2–53.3, §§53.6–53.13” is the Stacks book chapter numbering (chapter
  53); the standalone PDF (tag 0BRV) numbers the same material as sections
  2–3, 8–9, 11–13 and 18, and the coverage locator records both conventions.
- Plan-level advisory, recorded not escalated: `validate-plan.mjs` exits 0 but
  emits 20 `redundant-prereq` warnings naming our A page as the consumer (a
  `requires` entry already reachable through another entry, e.g.
  `finite-proper-and-projective-morphisms` through
  `flat-smooth-and-etale-morphisms`) plus further such advisories on the
  downstream curve pages of batches 7 and 8. These are advisories on
  `research/plan-spec.json`, which controls the run and which this batch must
  not edit; no manifest change can or should remove them.
- The design's binding normalization/model route is implemented item for item:
  `thm-normalization-glues-integral-finite-type-curves` uses only the published
  CA-19 interfaces
  `thm-integral-closure-finite-finite-type-domain-over-field` and
  `lem-finite-normalization-compatible-with-principal-opens` plus
  `thm-gluing-affine-schemes`; the smooth-projective-model clause of
  `thm-curves-function-fields-equivalence` uses
  `thm-ideal-projective-closure-saturation`, `cor-finite-morphism-proper`,
  `lem-ample-pullback-finite-morphism`,
  `thm-ample-powers-very-ample-proper-base`,
  `thm-equivalent-characterisations-of-a-dvr`,
  `thm-regular-equals-smooth-over-perfect-field`,
  `thm-global-functions-proper-integral-variety` and
  `cor-algebraic-extensions-of-perfect-fields-are-separable`, with AC stated in
  the contract and its exact uses named. No AV-7/AV-8 or
  dependent-choice-only supplier enters that route.

## Readiness records

All 47 items have current `research/frontier-37-owner-30-step1-<id>.json`
records: 47/47 `ready`, none `escalated`, each hash matching the current
manifest. Every record names the examined dependency ids and the construction
evidence. No current record was overwritten; the seven records whose shared
transitive closure changed after the audit repair below
(`def-delta-invariant-curve-singularity` plus its six batch-6 consumers) were
re-recorded against the changed closure. `node tools/step1-decisions.mjs check
--run frontier-37-owner-30` returns 640/640 run items ready and reports only
the eight empty inventories of batches 7, 8, 22 and 29, which belong to other
workers still in flight.

## Choice and dependency audit

- 16 items state a choice principle and all 16 declare `def-axiom-of-choice`;
  `thm-cartier-weil-divisors-curves-agree` additionally declares
  `def-dependent-choice`, inherited exactly from the two Cartier-to-Weil
  suppliers. No item that needs a choice principle leaves it implicit.
- An audit of the transitive `deps` closure of all 47 owned items reached 2,561
  items and 15,667 edges: 0 missing ids (every supplier is either a published
  item or a scaffolded in-run item — none resolves only to a planned page),
  0 out-of-run suppliers that are not published, 0 published
  `proved_here: false` suppliers, no cycle (`item-dependency-levels` reports no
  batch-6 error) and no path to `deferred-set-theory-beyond-choice`. Choice
  nodes reached are AC, DC and countable choice through the published scheme
  infrastructure; this batch claims no choice-free development for the
  scheme-theoretic core.
- Hypothesis/direction spot checks against the published statements actually
  used: `thm-one-dimensional-regular-local-rings-are-dvrs` (dimension-one
  regular ⇔ DVR), `thm-equivalent-characterisations-of-a-dvr` (one-dimensional
  Noetherian local integrally closed ⇒ DVR),
  `thm-global-functions-proper-integral-variety` (proper integral finite type,
  no projectivity hypothesis), `cor-projective-cohomology-finite-dimensional-field`
  (proper over a field), `lem-ag-differentials-transitivity` (the cotangent
  sequence with the first arrow not asserted injective — exactly the form the
  canonical-bundle formula needs), `thm-differentials-smooth-locally-free`,
  `thm-line-bundle-sections-define-projective-map`,
  `thm-projective-map-line-bundle-data-equivalence`,
  `cor-morphisms-equal-on-dense-open-reduced-source`,
  `lem-proper-cohomology-field-extension`,
  `ex-differentials-separable-field-extension-zero`,
  `cex-differentials-purely-inseparable-field-nonzero`, and the batch-5
  suppliers `thm-cartier-weil-isomorphism-locally-factorial`,
  `cor-degree-descends-picard-curve`, `lem-finite-flat-curve-fibre-degree`,
  `lem-proper-normal-curve-rational-function-map` together with the
  Cartier/Weil divisor definitions. All match the way batch 6 uses them.
- Implicit-use note for authoring: the exactness/coherence step of
  `lem-normalization-lowers-arithmetic-genus-delta` uses the coherence of the
  finite pushforward `ν_*O_{X^ν}`; the supplier
  (`thm-proper-pushforward-coherent`) lies inside that item's transitive
  closure, so no missing supplier remains, but Step 3 must name the exact use
  when writing the proof.
- Repair made in this dispatch: `def-delta-invariant-curve-singularity` claims
  that `δ_x` vanishes exactly at regular points, which needs the published
  theorem that regular local rings are integrally closed
  (`thm-regular-local-rings-are-normal`); that supplier was absent from the
  item's closure and was added to its `deps` (the item's `dependency_level`
  stays 2, since the added supplier is published). The item and its six
  batch-6 consumers (`lem-normalization-lowers-arithmetic-genus-delta`,
  `cor-plane-curve-geometric-genus-delta-correction`,
  `ex-hyperelliptic-curve-double-cover`, `ex-nodal-cubic-normalization-genus`,
  `ex-cuspidal-cubic-normalization-genus`,
  `ex-plane-quartic-genus-three-smooth`) were re-recorded `ready` after the
  change. No statement was altered.
- Owner-held Step-1 repair completed after the active batch-7 consumer drained.
  Added `lem-curve-different-local-support-and-index-bound` as the proof-bearing
  local supplier for finite support, the exact differential-support criterion,
  and `l_p ≥ e_p − 1` in every characteristic. Its closure now names
  `ex-differentials-separable-field-extension-zero`; its local proof handles
  the completion of the finite map at each fibre point, proves the finite-flat
  Gorenstein/dualizing bridge from the one-dimensional socle of
  `B/(s^{e_p})`, and proves the cotangent/Jacobian bridge: a square lci
  presentation gives `Omega=coker(J)` and `Fitt_0(Omega)=(det J)`, while the
  diagonal Koszul calculation gives the same determinant for the different.
  The trace filtration of `B/(s^{e_p})` then gives `l_p=e_p−1` in the tame
  case and `l_p≥e_p` when the residue extension is inseparable or the positive
  residue characteristic divides `e_p`. The proof uses a square complete
  intersection supplied by the quasi-finite flat lci criterion; it assumes no
  monogenic extension and does not treat a uniformizer as an etale coordinate.
  Stacks tag 0C1F is Lemma 53.12.4: its statement assumes the 53.12.2 setup
  and `H^0(X,O_X)=H^0(Y,O_Y)=k` for the genus identity. The new lemma uses only
  the local finite separable map of smooth curves, and reproduces the local
  argument rather than relying on that citation. Stacks tag 0BWE (Lemma
  49.10.1) gives a square relative complete-intersection presentation for a
  quasi-finite flat lci map; tag 0BWD (Lemma 49.12.2) computes its Jacobian
  determinant from the diagonal Koszul complex; and tag 0BWG (Lemma 49.12.3)
  identifies the trace different with the Kähler different under those
  hypotheses. Tag 0BWJ (Lemma 49.12.6) assumes a locally quasi-finite map
  between smooth schemes of the same relative dimension over a Noetherian
  base, and identifies the different with `wedge^n(df)`; here the base is
  `Spec(k)` and `n=1`. The graph factorization proves lci locally, and the
  proof writes out the square-Jacobian/Fitting computation.
  `def-ramification-and-branch-points` now defines index and differential
  ramification loci separately. Under the generically separable function-field
  hypothesis, they agree at points with separable residue extension, hence
  everywhere over a perfect base. Over an imperfect base an inseparable
  residue point with `e_p=1` is in the differential support but not the index
  locus. For an inseparable function-field extension, no finite-support or
  equality assertion is made.
  `def-different-divisor-curve-map` identifies the support of `R_f` with the
  differential locus. The lemma statement includes the exact tame criterion:
  `l_p=e_p−1` iff the residue extension is separable and `e_p` is invertible
  in the residue field. Coverage for Stacks 0C1F(1)-(3) and Fulton Corollary
  7.5.11's inequality and tame-equality rows now points to the local lemma;
  the numerical Riemann-Hurwitz formula remains deferred to batch 8.

## Sources and harvest

- Four independent treatments back the A page, each with a recorded full-text
  fetch stamp in `research/frontier-37-owner-30-batch-6.coverage.json`: Stacks
  *Algebraic Curves* (tag 0BRV; 745,082 bytes, SHA-256 prefix
  `c4e3d4c0fc533a3d`, 71 pages), Vakil, *The Rising Sea* (2025 edition),
  Fulton, *Algebraic Curves* (Internet Archive copy) and Gao–Zhang,
  *Lectures on Algebraic Geometry II*. Batch 6 alone: 4/4 fetch-verified, 4/4
  resolved, zero drops or escalations. The coverage file follows the run
  convention of one A-page section per pair (same shape as batches 1, 5, 9 and
  23).
- Re-verification in this dispatch: the Stacks PDF was downloaded again and
  its byte size and SHA-256 prefix reproduce the recorded stamp exactly; its
  tag locators were spot-checked live (0BXY = Lemma 53.2.1, 0CCS = 53.3.5,
  0C1D = 53.12.2, 0CE1 = 53.18.1), and the section-12 text of the PDF states
  the canonical exact sequence, the different, the isomorphism
  `f^*Ω_Y ⊗ O_X(R) = Ω_X` and the numerical Riemann–Hurwitz formula exactly as
  the coverage rows record. The remaining harvest claims are the recorded
  reading evidence of the first construction pass; Alpha reviews it at Step 5.
- Harvest: 112 named results with one disposition each — 19 included, 44
  inline, 23 deferred, 18 out-of-scope, 8 already published. Deferred
  destinations resolve to batch 7 (`riemann-roch-for-curves-via-euler-characteristics`),
  batch 8 (`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`)
  and batch 5 (Fulton's divisor results). The coverage gate emits its advisory
  `coverage-low-yield` warning (19/112 scaffolded); the 44 inline dispositions
  are the largest decline class and Alpha should confirm them against the four
  sources at review.

## Cross-batch input

`research/frontier-37-owner-30-batch-6.cross-batch-dependencies.json` reviews
all 49 declared cross-batch edges whose consumer is in batch 6 (48 item edges
plus the page edge to `cartier-and-weil-divisors-line-bundles-and-picard-groups`),
all against batch 5, all `open` with evidence, since batch 5 is a draft
supplier batch. The unified ledger refresh
(`node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30
--require-reviewed`) fails only on the seven edges whose consumer batches 7, 8,
22 and 29 have not yet supplied an input file; no batch-6 edge is unreviewed
and there are no orphaned reviews.

## Validation snapshot

| Check | Result |
| --- | --- |
| `coverage-checklist.mjs` batch 6 (`--require-destination`) | 1 page, 112 harvest rows, 0 errors, 1 advisory low-yield warning |
| `manifest-deps.mjs` (all 26 manifests) | 640 items, 0 normalized, 0 errors |
| `content-policy.mjs --manifest-only` (all manifests) | 640 scoped items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | exit 0: acyclic; no item-level cycles, forward references or unresolved ids among the 1,300 pages with item lists (319 planned pages carry none yet); 20 advisory `redundant-prereq` warnings touch our A page's plan-level `requires`, plus advisories on the downstream curve pages |
| `manifest-integrity.mjs --run` | 60 pages owed, 60 in the manifests, no scope drift |
| `drift-review-check.mjs --run` | 30 pages reviewed, 0 blocked edges; every owed A/B page above the 95% published-or-earlier-in-run threshold |
| `extcheck.mjs` | exit 0; the 40 `unproved-on-published` warnings are pre-existing published recorded remarks, none in the owned dependency closure |
| `source-fetch-check.mjs` | batch 6 4/4 fetch-verified, 0 documented drops; whole run 103/104 fetch-verified and 104/104 resolved (1 documented drop in another batch) |
| `url-sweep.mjs` | 89/89 live, 0 failed; 90 citation decisions (1 documented source drop) |
| `source-backing.mjs` | 360 authored results across 26 files, every one backed by an openable source or documented alternative argument |
| `step1-decisions.mjs check --run` | 640/640 items ready; open work is only the eight empty inventories of batches 7, 8, 22 and 29 |
| `item-dependency-levels.mjs check --run` | no batch-6 error or cycle; the only errors are those eight empty inventories |
| `frontier-dependency-ledger.mjs refresh --require-reviewed` | batch-6 input complete (49/49 edges reviewed); fails only on unreviewed batches 7, 8, 22 and 29 |

Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical
approval. Step 3 provides that review.

## Step-3b author handoff checkpoint (2026-09-30, alpha-high)

All 49 batch-6 items authored and both `library/scheme-theory/` pages written;
`research/frontier-37-owner-30-batch-6.proof-contracts.json` has 49 contracts
(40 `citation-source-missing` errors are the 13 unauthored batch-5 suppliers,
quoted as `PENDING:` markers in 10 contracts). Step-3b decisions recorded for
48 items: 14 accept, 6 repaired, 28 escalate (21 for unauthored batch-5
suppliers, 7 for the concurrent rewrite of `def-weil-divisor-normal-noetherian-scheme`,
which currently fails precheck); `lem-composite-finite-proper-morphism-proper`
is deliberately left to the engine's new-addition certification. Batch-6
cross-batch input gained the missing row
`cex-degree-zero-line-bundle-no-section -> def-degree-divisor-proper-curve`
(84 item + 1 page rows, all `open`). Gates at handoff: precheck 34/0,
rendercheck OK (51 files), content-policy 0/0, coverage-checklist 0 errors
1 advisory, manifest-deps 0 errors, item-dependency-levels exit 0,
validate-plan exit 0, depcheck/fwdcheck/strict-contract fail only through the
batch-5 gap (plus 4 pre-splice `forward-dangling` rows for the batch-7
`lem-projective-line-divisors-classified-by-degree`), unified-ledger refresh
blocked externally by `items/thm-kronecker-root-of-unity-criterion.md`
(`justified_by` scalar). Full details and open obligations in the dispatch
report `research/frontier-37-owner-30-step3b-pair-smooth-proper-curves-divisors-genus-and-ramification.md`.


## Step-3 targeted mathematical repair handoff (2026-10-01)

The root-authorized repair set is exactly five batch-6 items: `def-canonical-line-bundle-curve`, `lem-rational-differential-divisor-well-defined-class`, `lem-curve-different-local-support-and-index-bound`, `thm-normalization-glues-integral-finite-type-curves`, and `thm-curves-function-fields-equivalence`. Their matching statements/strategies, proof contracts, and source-coverage entries were updated with the edits; no other item claims, gates, receipts, shared plans, or published files were changed.

- The canonical differential order is now defined by writing a rational section in any local frame of the invertible sheaf and taking the DVR order of its coefficient. This preserves arbitrary base fields and does not identify `dt` with a frame at inseparable closed points. The rational-differential comparison proof uses the same convention; its Cartier/divisor sheaf identification remains pending the live batch-5 dictionary suppliers.
- The local-different proof now distinguishes a generator `lambda` of `Hom_A(B,A)` from the trace functional `tau=h lambda`; it computes the finite-flat-lci Jacobian/Fitting ideal through the square-CI Koszul diagonal and finite-free trace duality, and it uses the fibre trace functional (not the potentially degenerate fibre trace pairing). Coverage now records the complete Stacks proof texts actually read for the graph/lci, Jacobian, Noether/trace different, and trace-functional steps.
- Normalization gluing uses a common principal-open refinement chosen from both charts, chartwise integral-closure equality in the common function field, and one identified dense generic point. Function-field uniqueness has the contravariant map `psi:C'->C`; its projective model is constructed by contracting the homogenized prime ideal, not by calling the affine chart open in projective space.

The run remained `running` at the last recorded autopilot read (2026-09-30T14:57:45Z); batch-5 supplier files were still being edited through 2026-10-01 00:13 +1000. Treat the 21 supplier-dependent and 7 churn-dependent escalations recorded in §7A/§7B of `frontier-37-owner-30-step3b-pair-smooth-proper-curves-divisors-genus-and-ramification.md` as owner-held and not reopened here. Exact supplier and consumer lists remain there. The batch-6 manifest contains 49 items (37 A and 12 B); beyond the five targeted corrections, remaining item audits are deferred until those supplier inputs stabilize.
