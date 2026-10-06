# Step 3b pair authoring — `characteristic-class-obstructions-to-immersions-and-embeddings`

- Run `frontier-41-ha-dt-29`, role alpha-high, batch 20 (the batch file also
  serves sibling pairs; only this pair is written here).
- A page `characteristic-class-obstructions-to-immersions-and-embeddings`
  (order 571), B page `characteristic-class-obstructions-to-immersions-and-embeddings-examples`
  (order 572), category differential-topology, design DT-28.
- Owned inventory: 27 items, 22 A + 5 B, exactly the dispatch order below.
  Scaffold manifest `research/frontier-41-ha-dt-29-batch-20.pages.json`; coverage
  `research/frontier-41-ha-dt-29-batch-20.coverage.json`; source/authoring
  decisions `research/frontier-41-ha-dt-29-step3a-pair-...md` (review:
  insufficient), `...-step3a-owner-...json` (owner: proceed, enrichment
  integrated), `research/frontier-41-ha-dt-29-embedding-scope-repair-proposal.json`.

## Owned IDs in authoring order (dependency level, then dispatch order)

Level 0 — `def-stable-normal-inverse-of-the-tangent-bundle`;
`lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes`;
`lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial`;
`lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space`;
`lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring`;
`rem-characteristic-class-construction-is-cited-not-rebuilt`.

Level 1 — `cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial`;
`lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class`;
`lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class`.

Level 2 — `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity`.

Level 3 — `cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings`;
`def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold`;
`lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`;
`lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion`.

Level 4 — `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions`;
`cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions`;
`prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection`;
`ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space` (B);
`ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` (B).

Level 5 — `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions`;
`thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction`.

Level 6 — `ex-normal-class-calculation-for-real-projective-space` (B).

Level 9 — `rem-characteristic-class-vanishing-is-only-necessary-for-embedding`;
`cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` (B).

Level 12 — `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension`.

Level 13 — `prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion`.

Level 14 — `ex-parallelizable-tori-have-trivial-stable-normal-class` (B).

## Open obligations at entry (unfinished in-run suppliers)

The following direct suppliers are declared in the current scaffold but have no
item file yet; each consumer below is authored with the open obligation stated
and its decision stays escalated until the supplier and proof use are
reconciled. Batch 17 (`formal-immersions-and-the-smale-hirsch-theorem`), batch 2
(`intersection-pairings-self-intersection-and-euler-classes`) and batch 19
(`isotopy-extension-and-embedding-theory-beyond-whitney`) are the owning pairs.

- `def-formal-immersion-between-smooth-manifolds` — consumer
  `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`
  (statement/packaging step), and
  `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension`
  (construction of the constant-map formal immersion).
- `def-normal-bundle-of-a-formal-immersion` — same two consumers plus
  `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection`
  and `lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion`
  (normal bundle of the immersion).
- `lem-formal-immersion-gives-the-tangent-normal-bundle-identity` — the
  immersion lemma and the push-off lemma (splitting $TM\oplus\nu_f\cong f^*T\mathbb R^n$).
- `def-space-of-immersions-and-space-of-formal-immersions` and
  `thm-smale-hirsch-immersion-theorem` — Smale–Hirsch proposition (the
  nonemptiness transfer); the theorem is the deep supplier.
- `def-self-transverse-immersion-and-double-point-locus`,
  `def-self-intersection-number-of-an-oriented-submanifold`,
  `thm-self-intersection-is-the-euler-number-of-the-normal-bundle`,
  `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`,
  `prop-mod-two-self-intersection-needs-no-orientation`,
  `def-regular-homotopy-of-immersions` — the Euler/self-intersection proposition and
  the push-off lemma.
- `thm-isotopy-extension` — `rem-characteristic-class-vanishing-is-only-necessary-for-embedding`
  and `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic`.

All other declared dependencies resolve to files in `items/` (all published).

## Checkpoints

(one line per item as authored and checked; defects found are recorded here)

- `def-stable-normal-inverse-of-the-tangent-bundle` (L0) — authored, rendercheck OK; deps/level unchanged.
- `lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial` (L0) — authored,
  precheck/rendercheck OK; deps unchanged; proof via the pullback charts of the published
  fibre-product theorem, choice-free.
- `lem-positive-intermediate-cohomology-...-vanishes` (L0) — authored. Route repaired: the
  scaffold's CW-decomposition step presupposed an unstated CW structure on $S^N$; the item now
  proves the stereographic homeomorphism $(\mathbb R^N)^+\cong S^N$ inline (with a minimal
  topology dep set) and computes $H^q(S^N;R)$ from the published topological UCT and the
  published sphere homology. Statement unchanged; manifest deps updated from 2 to 21 (all
  published, earlier pages); level recomputed 0 (unchanged). precheck/rendercheck OK.
- `lem-the-inverse-of-one-plus-the-generator-...` (L0) — authored; statement unchanged;
  deps extended by the negative-binomial-series and formal-power-series items used to prove
  the coefficient clause $\binom{m+i}{i}\bmod2$. precheck/rendercheck OK.
- `lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space` (L0) — authored;
  graph-chart tangent computation + metric splitting + stable splitting; two-torsion-free;
  deps extended by the tangent-chart/velocity and CW-type suppliers. precheck/rendercheck OK.
- `rem-characteristic-class-construction-is-cited-not-rebuilt` (L0) — authored; rendercheck OK.
- `cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial` (L1) — authored. The
  scaffold's supplier `ex-the-tangent-bundle-of-euclidean-space-is-trivial` is homed only on a
  B page (order 448); per the dispatch it was replaced by the A-page induced-tangent-chart
  items and a local trivialization argument. Statement provenance stays `ai-generated` with
  `generation.role: direct-corollary` as scaffolded (deps target status of the scaffold is
  preserved; recorded as a preserved scaffold decision for Step 5). precheck/rendercheck OK.
- `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class` (L1) —
  authored; proof from isomorphism invariance + Whitney product + inverse uniqueness under AC.
  precheck/rendercheck OK.
- `lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class` (L1) —
  authored; rational Whitney product applied over $\mathbb Q$ directly (the supplier allows any
  coefficient ring in which 2 is invertible); stability with the rank-zero bundle gives
  $p(\varepsilon^N)=1$. precheck/rendercheck OK.
- `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` (L2) — authored; the
  normal-quotient/metric-complement/splitting data are inherited from the published
  compact-manifold normal-bundle definition; existence for every closed $M$ from the published
  Whitney embedding theorem; $\mathrm{AC}_\omega$ inherited. precheck/rendercheck OK.
- `def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold` (L3) — authored;
  well-posedness cited to the two inverse lemmas, existence to the embedding lemma via
  $AC\Rightarrow AC_\omega$. rendercheck OK.
- `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-...` (L3) — authored using
  the now-authored batch-17 suppliers `def-formal-immersion-...`, `def-normal-bundle-of-a-formal-immersion`,
  `lem-formal-immersion-gives-the-tangent-normal-bundle-identity`; precheck/rendercheck OK.
  Supplier files were re-read from disk (they were authored concurrently in batch 17).
- `cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings` (L3) —
  authored; proof through the published collapse, the Thom interface, the compactified-Euclidean
  vanishing lemma and the mod-two Euler=top-SW theorem. precheck/rendercheck OK.
- `lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion` (L3) —
  authored; finiteness of the double-point locus, construction of a transverse section by
  parametric transversality, local inverse-function arguments near the diagonal and near each
  ordered double pair, and the zero-locus/Euler identification. **Open obligation:** the
  supplier `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`
  (batch 2, `intersection-pairings-self-intersection-and-euler-classes`) has no item file yet;
  the consumer step is step 2.1 (the statement "the total contribution of these near-diagonal
  intersections is $\langle e(\nu_f),[M]\rangle$") and its decision stays escalated until the
  batch-2 item is authored and the exact statement/sign convention is re-verified.
  precheck/rendercheck OK.
- `def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold` (L3, recomputed 2) —
  authored; well-posedness cited to the two inverse lemmas and existence to the embedding lemma
  via $AC\Rightarrow AC_\omega$; level recomputed 3→2 after the embedding lemma's level changed.
- `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`
  (L3) — authored; batch-17 suppliers were authored concurrently and their statements were read
  from disk; the B-homed pullback corollary was replaced by the local induced-tangent-chart
  trivialization plus the product-pullback lemma.
- `cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings` (L3,
  recomputed 2) — authored; proof through the published Pontryagin–Thom collapse, Thom interface
  and the compactified-Euclidean vanishing lemma; level recomputed 3→2; dependency on
  `def-stiefel-whitney-classes-from-the-projective-bundle-relation` added for the rank convention.
- `lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion` (L3) — authored;
  finiteness of the double-point locus, transverse section by parametric transversality, local
  inverse-function analysis near the diagonal and near each ordered double pair, Euler-duality
  identification. The supplier `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`
  was authored (batch 2) during this pass; its statement and Koszul sign were re-read and the use
  in step 2.1 reconciled (zero locus of dimension 0, sign +1).
- `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions` (L4) and
  `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions` (L4) — authored; the
  Pontryagin item's deps were extended by `def-pontryagin-classes-by-complexification`.
- `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection` (L4) —
  authored; the three batch-2 suppliers were authored during this pass and their statements,
  hypotheses and the Koszul sign of the Euler duality were reconciled; regular-homotopy invariance
  of the Euler number proved through the vertical-quotient bundle over $M\times I$.
- `ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space` (B, L4,
  recomputed 3) and `ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` (B, L4,
  recomputed 3) — authored; levels recomputed after the supplier-level changes.
- `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions` (L5) and
  `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` (L5) — authored; the
  theorem proves clause (iii) ($w(T\mathbb{RP}^m)=1$ iff $m+1$ is a power of two) locally.
- `ex-normal-class-calculation-for-real-projective-space` (B, L6) — authored; the corrected
  expansion $\bar w(\mathbb{RP}^9)=1+a^2+a^4+a^6$ of the owner integration is verified.
- `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` (L9) — authored; an
  `external_refs` entry was added for the recorded (proved_here:false) deleted-product remark it
  mentions.
- `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` (B, L9) —
  authored; `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy` added to deps;
  `thm-isotopy-extension` was authored during this pass and its compact main case was re-read and
  reconciled with the use in step 1.2.
- `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension`
  (L12) — authored; batch-17 suppliers (`def-space-of-immersions-...`, `thm-smale-hirsch-immersion-theorem`)
  authored concurrently, statements re-read; use is only the induced $\pi_0$ bijection.
- `prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion`
  (L13) and `ex-parallelizable-tori-have-trivial-stable-normal-class` (B, L14) — authored.

## Checks actually run (2026-10-06, after the final edits)

- `node tools/proof-layout.mjs <all 27 owned item paths>` → 27 items, 88 steps, 0 defects (single
  batched run, after the final item edit).
- `node tools/tsx-run.mjs tools/precheck.mts <all 27 owned item paths>` → 23 checked, 0 failing
  (4 definitions/remarks have no phase body).
- `node tools/rendercheck.mjs <all 27 owned item paths + both library pages>` → OK: no wikilink
  inside math, no nested or unbalanced delimiters, every math span parses, every frontmatter
  block parses.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-20.pages.json` → 27 scoped
  items, 0 errors, 0 warnings. (This gate flagged two `ai-generated-statement-dependency` errors
  on the first pass; they were repaired by proving the Euclidean tangent trivialization locally in
  the two consumers and removing the dependency on the ai-generated corollary, which is now a
  leaf.)
- `node tools/depcheck.mjs research/frontier-41-ha-dt-29-batch-20.pages.json` → no errors.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-20.pages.json` → 27 items,
  0 normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` → 0 level mismatches
  among the 27 owned items (32 mismatches remain elsewhere in the run, in the Morse-homology and
  Eilenberg–Watts batches; reported, not repaired here).
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (acyclic and consistent; the noted
  pages lacking item lists belong to other pairs).
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-20.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 27/27 items checked. The batch contract file
  `research/frontier-41-ha-dt-29-batch-20.proof-contracts.json` was created with 226 citation
  records (exact quotes + step uses), per-step derivations and the eight-case boundary worksheet.
- `node tools/citation-fidelity.mjs research/frontier-41-ha-dt-29-batch-20.proof-contracts.json`
  → every recorded quote appears in its cited item; 2 advisory widening candidates on
  `lem-positive-...` F7, read and dispositioned below.
- `node tools/fwdcheck.mjs` and `node tools/extcheck.mjs` → 0 findings on the owned items (the
  fwdcheck failures and the two published unproved-on-published findings are other batches';
  extcheck confirms the owned remark's mention of the recorded deleted-product item is properly
  declared via `external_refs`).
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-20.coverage.json --require-destination`
  → 2 pages, 82 harvested results, 0 errors, 2 advisory low-yield warnings (the declines were
  confirmed in the Step 3a review).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` → the pair scope
  is closed and 0 owned items remain open; all 27 item decisions are recorded (`accept` where the
  authored item matches the scaffold carrier, `repaired` where deps/level/external_refs were
  adjusted), confidence 1, with the examined dependency IDs.

## Decisions and open obligations at handoff

- Item decisions: 27/27 recorded (13 `repaired`, 14 `accept`); no item decision is escalated.
  Every declared supplier was authored during or before this pass and its statement was read from
  disk and reconciled with the consuming step; the earlier entry-time obligations (batch 2, 17 and
  19 suppliers) are therefore closed.
- The ai-generated corollary `cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial`
  is now a leaf: no item depends on it, so the content-policy generated-statement rule holds and
  is enforced by the passing gate. This supersedes the scaffold's original dependency edges, which
  were replaced by local arguments in the two consumers.
- Advisory, not a defect: the two citation-fidelity widening candidates on
  `lem-positive-...` F7 are a variable-naming artifact — the source uses $n$ for the sphere
  dimension, while the item uses $N$ for it and $j$ for the homology degree; the fact now names the
  $N\ge2$ instance explicitly and both quotes are exact.
- Open owner/Step-4 item: the page-level `requires` edge to
  `characteristic-numbers-and-cobordism-obstructions` has no item-level use in this pair (recorded
  as `open` in `research/frontier-41-ha-dt-29-batch-20.cross-batch-dependencies.json`); the plan
  array was fixed by §12.4 and no consumption was invented.
- Blocked shared step, reported not repaired: `node tools/frontier-dependency-ledger.mjs refresh
  --run frontier-41-ha-dt-29` aborts on
  `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer
  ownership` because that sibling input uses nonstandard row statuses (`available`, `reconciled`;
  rows 5, 6, 8, 14, 15, 16, 18, 19) instead of `open|verified|removed`. The owned batch-20 input
  file was written and its 23 rows updated (18 item-level rows verified against the authored
  suppliers; the `intersection-pairings`, `formal-immersions`, `isotopy-extension` page rows
  verified; the `characteristic-numbers` page row left open). The run-level refresh belongs to the
  serial reconciler/owner once batch 19's input vocabulary is fixed.
- No confirmed defect was found in a published item consumed by this pair.

## Final state (2026-10-06)

- All 27 owned items authored and registered; both pages authored
  (`library/differential-topology/characteristic-class-obstructions-to-immersions-and-embeddings.md`,
  `...-examples.md`), listing exactly the 22 A items and 5 B items of the manifest.
- Levels were recomputed twice while sibling batch-17/19 items settled: 13 carrier repairs were
  recorded; the final recomputation moved `rem-characteristic-class-vanishing-...` and
  `cex-vanishing-stable-...` from 9 to 10 after `thm-isotopy-extension` reached level 9 in batch 19,
  and both items were re-recorded. Final state: 0 owned level mismatches against
  `item-dependency-levels check`; 27/27 item decisions current (`check --phase final` reports no
  open owned item and a closed pair scope).
- Final battery (all after the last edit): proof-layout 27 items/88 steps/0 defects; precheck 0
  failing; rendercheck OK; content-policy 0 errors/0 warnings; depcheck 0 errors; manifest-deps
  0 errors; strict proof-contract 27/27 items, 0 errors/0 warnings; citation-fidelity every quote
  found, 2 advisory widening candidates dispositioned above; fwdcheck/extcheck no findings on the
  owned items; coverage-checklist 0 errors/2 advisory low-yield warnings; validate-plan OK.
- Ledger: owned input `research/frontier-41-ha-dt-29-batch-20.cross-batch-dependencies.json`
  written with 23 rows (18 item-level verified, 4 page-level verified, 1 page-level open for
  Step 4). The run-level refresh remains blocked by batch 19's input vocabulary and is reported,
  not repaired.
- No owned item is escalated; no published defect was confirmed.
- Re-run after the final `lem-finite-normal-push-off-count-...` step 2.1 edit (the explicit
  auxiliary bundle-metric clause, whose contracts and `lem-finite`/`prop-euler` decisions were
  regenerated and re-recorded): `node tools/proof-layout.mjs <27 owned paths>` →
  `27 items, 88 steps, 0 defects`; `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29
  --phase final` → the run still lists open work in other batches (exit 1, run-wide), but none of
  the 27 owned item IDs and neither owned page appears anywhere in the report, so the owned pair
  scope is closed and 0 owned items are open.

## Handoff pass after the owner resume (2026-10-06, 02:00–02:45 local; dispatch attempt `…-a4d745907690e7fa`)

The owner resumed the run and re-dispatched every 3b lane. The on-disk state was re-audited rather
than trusted from the record above. **Correction to the earlier record:** the claim "depcheck 0
errors" in the section above was not true of the on-disk state; `depcheck` reported **eight hard
errors of class `b-leaf-content`** (load-bearing dependencies of authored items on items homed only
on B/examples pages) plus two `cited-not-in-deps` warnings on this pair. All were repaired in this
pass, with every statement, claim and page promise preserved:

| item | repair (no statement change except where noted) |
|---|---|
| `lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring` | supplier `ex-negative-binomial-series` (B) → `lem-binomial-series-for-a-repeated-pole` + `lem-binomial-coefficients-symmetric-and-unimodal` (both A); [F2] and step 4.1 rewritten with $\lambda=1$, $j=m+1$ |
| `lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space` | B-only `ex-the-tautological-line-bundle-over-real-projective-space` and `ex-mod-two-cohomology-ring-of-real-projective-space` removed; [F1] and [F7] now use `def-real-projective-bundle-and-tautological-line`, `thm-mod-two-real-projective-bundle-theorem` (applied to the trivial rank-$(m+1)$ bundle over a one-point base) and the dimension axiom `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms`; statement citation updated |
| `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` | same replacement in the Statement and [F4] |
| `ex-normal-class-calculation-for-real-projective-space` | same replacement in [F2] |
| `ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space` | same replacement in [F1] |
| `ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` | B-only `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` removed; the sphere clause is now proved locally in [F5]/step 4.1 (regular level set $S^m=\{|x|=1\}$, $T_xS^m=x^\perp$, metric identification of the normal line, nowhere-zero radial section) |
| `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` | B-only `ex-degree-of-a-reflection-of-a-sphere` → `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`; Statement and [F4] updated |
| `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` | redundant Statement link to the leaf ai-generated `cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial` removed (the trivialization is proved locally in [F4]); warning-only, no mathematical change |
| `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle` | same Statement-link removal |

**Concurrent supplier reconciliation.** Sibling lanes rewrote their items during this pass (batch 17
`def-formal-immersion-between-smooth-manifolds`, `def-normal-bundle-of-a-formal-immersion`,
`lem-formal-immersion-gives-the-tangent-normal-bundle-identity`, `thm-smale-hirsch-immersion-theorem`,
`def-regular-homotopy-of-immersions`, `def-space-of-immersions-and-space-of-formal-immersions`;
batch 19 `def-self-transverse-immersion-and-double-point-locus`, `thm-isotopy-extension`,
`def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`; batch 2
`prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`,
`thm-self-intersection-is-the-euler-number-of-the-normal-bundle`, `prop-mod-two-self-intersection-needs-no-orientation`,
`def-self-intersection-number-of-an-oriented-submanifold`). Each was re-read from disk at
02:20–02:35 local and every consuming fact/step was re-checked against the current statement; the
proof-contract quotes for the two rewritten definitions were refreshed so the strict gate passes.
All current supplier statements still support the consuming steps; no consumer repair was required.
The reconciliation is recorded row-by-row (with a re-verification note) in the owned ledger input.

**Checks run in this pass** (all after the last edit): `proof-layout` 27 items/88 steps/0 defects
(and the 9 repaired items alone: 38 steps/0 defects); `precheck` 23 checked/0 failing;
`rendercheck` 29 files OK; `content-policy` 27 items/0 errors/0 warnings; `depcheck` **0 owned
findings** (the 8 `b-leaf-content` errors and 2 `cited-not-in-deps` warnings are cleared;
repo-wide errors in other batches untouched); `manifest-deps` 0 errors; `proof-contract --strict`
27/27 items/0 errors/0 warnings; `citation-fidelity` every quote found (2 pre-existing advisory
widening candidates on `lem-positive-…` F7, the variable-naming artifact noted above);
`item-dependency-levels check` 0 owned level mismatches; `validate-plan` OK;
`coverage-checklist` 0 errors/2 advisory low-yield warnings; `fwdcheck`/`extcheck` no owned
findings (the single owned line in `extcheck` is the properly declared `external_refs` mention in
`rem-characteristic-class-vanishing-…`).

**Decisions.** 27/27 owned item decisions are recorded for the current inputs (11 `repaired`,
16 `accept`; confidence 1, examined dependency IDs recorded). Three items
(`prop-smale-hirsch-…`, `prop-parallelizable-…`, `ex-parallelizable-tori-…`) had their receipts
invalidated twice by sibling writes landing inside the run-level transitive closure (batch-17
Smale–Hirsch items reach the still-being-written Morse handle-decomposition items); they were
re-recorded last. Because that closure remains under concurrent sibling writing, the engine's
pre-gate recertification (CLAUDE §21) must rehash the decisions; no mathematical obligation is
open in this pair.

**Open obligations at handoff.** (1) The run-level `frontier-dependency-ledger.mjs refresh` still
aborts on `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer
ownership` (nonstandard statuses `available`/`reconciled` and now-stale "not authored yet"
evidence in a sibling-owned input); the owned batch-20 input itself is complete (23 rows:
18 item-level verified, 4 page-level verified, 1 page-level `open` for the plan-fixed
`characteristic-numbers-and-cobordism-obstructions` edge). Reported, not repaired — the sibling
input is another pair's to fix. (2) The page-level `requires` edge to
`characteristic-numbers-and-cobordism-obstructions` has no item-level use; Step 4 must reconcile
it or the owner must amend the plan array.

**Final verification at handoff** (2026-10-05T15:33:08Z, direct `itemDecision`/`scopeDecision` call on the current disk):
pair scope closed; 27/27 owned items closed; 0 escalated; 27 receipts (11 `repaired`, 16 `accept`).
`proof-contract --strict` 27/27, 0 errors; `proof-layout` 9 repaired items/38 steps/0 defects;
`depcheck` 0 owned findings; `content-policy` 0/0; `rendercheck` OK. The three deep-closure items
(`prop-smale-hirsch-…`, `prop-parallelizable-…`, `ex-parallelizable-tori-…`) were re-recorded at
15:32:36Z after their receipts were invalidated by sibling writes inside the 1600+ item run-level
closure; if sibling lanes write again before the engine's Step-3 gate attempt, the orchestrator's
pre-gate recertification (CLAUDE §21) refreshes them — the pair itself has no open obligation.
