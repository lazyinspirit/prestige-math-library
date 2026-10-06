# Step 3b — pair `morse-homology-continuation-and-comparison` / `-examples`

- Run: `frontier-41-ha-dt-29` (batch 6, orders 539/540, category `differential-topology`).
- This dispatch: label `step3b-pair-morse-homology-continuation-and-comparison-3d47601faf26c86d`.
- Earlier attempt: label `b83ebd80a2f4ed46` authored all 28 items and both pages but the
  process ended in a provider `429` retry exhaustion (`process_exit_code 1`,
  `author_artifacts.ok true`); this retry re-audited the pair, repaired the defects found,
  recomputed the dependency labels against the current run graph and re-registered the
  item decisions.
- Contents: A page 23 items, B page 5 items (28 total). Every ID is an original scaffold
  ID from `research/frontier-41-ha-dt-29-batch-6.pages.json`, so every item needs (and now
  has) an ordinary current Step-3 item decision, except the two owner-held escalations
  below.
- Status at handoff: all 28 item files and both pages exist; all 28 items authored and
  read in full in this dispatch; the final
  `step3-decisions check --phase final` reports 26 current `repaired` author receipts for
  the pair (22 items re-recorded in the first pass, of which 8 were refreshed again after
  the batch-1 supplier landed; the 4 lowest items kept their still-current first-attempt
  receipts); 2 consumers remain `escalate` because only the owner resolves an existing
  escalation — their blocking condition is nevertheless resolved and documented below.

## Repairs made in this retry

1. **Dependency levels (all 28 items).** `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
   showed 24 stale `dependency_level` labels caused by sibling dependency changes after the
   first attempt. The levels were recomputed with the repository's own computation and
   rewritten consistently in the item frontmatter and the batch-6 manifest:
   0, 1, 2, 2, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 11, 12, 13, 14, 14, 15, 15,
   16, 17 for the 28 items in `dependency_level`, page-order, ID order. The check now reports
   no finding for any batch-6 item. The four lowest items (levels 0–2) were unchanged and
   their first-attempt receipts remain current.
2. **`thm-reverse-continuation-is-an-inverse-on-morse-homology` (substantive).** The first
   attempt claimed that the solutions of the reversed family `(f_{-s},g_{-s})` are exactly
   the time reversals `s \mapsto u(-s)` of the original solutions and that the reversed
   family is therefore automatically regular. Reversing the parameter in
   `\partial_s u=-\nabla^{g_s} f_s(u)` gives `\frac{d}{ds}u(-s)=+\nabla^{g_{-s}}f_{-s}(u(-s))`,
   the *positive*-gradient equation, so that identification is false and regularity of the
   reversed family is a separate condition. The item now takes the reverse datum to be a
   sufficiently small generic perturbation of the reversed family fixing the two ends,
   which is regular by the residual-genericity statement recorded in the definition, and
   the proof follows the source route (Ritter §6.3(4)–(6): glue reparametrized homotopies,
   then `[\phi^{01}]\circ[\phi^{10}]=[\phi^{00}]=\mathrm{id}`; Audin–Damian §3.4 closing
   step: an interpolation `G` from `f_1` back to `f_0` plus the constant interpolation
   `H=I`). The two cited PDFs were re-fetched in full and their sha256_16 values match the
   batch record (Ritter `cb69c17956ad7b25`, Audin–Damian `e162409dc3c24e7b`).
3. **`cor-morse-homology-recovers-the-morse-inequalities` (proof).** Step 2.1 telescoped the
   identity `c_i=b_i+r_i+r_{i+1}` incorrectly to `\sum(-1)^{k-i}b_i+(-1)^k(r_0+r_{k+1})`,
   which is false for odd `k`; the correct remainder is `r_{k+1}` (the `r_1,\dots,r_k`
   coefficients cancel in pairs and the `r_0` term vanishes). The conclusion (2) and items
   (1), (3), (4) were unaffected; the step and the Ritter locator (PDF pp. 98–99) were
   corrected.
4. **`ex-continuation-across-a-birth-death-adds-an-acyclic-pair` (statement wording).** The
   scaffold sentence attributed `t^k+t^{k+1}=t^k(1+t)` to the correction polynomial `Q(t)`;
   correctly, `c(t)` gains `t^k+t^{k+1}` and `Q(t)` gains `t^k`. The item now states this;
   the `ex-two-morse...` contract entry was regenerated.
5. **`thm-morse-homology-is-naturally-isomorphic-to-singular-homology` (statement
   clarification).** The statement now says explicitly that "naturally" means independence
   of the Morse–Smale pair, the CW auxiliary choices and the orientation lines, as proved;
   no functoriality with respect to smooth maps is asserted (Step 3a item note).
6. **Small format repairs:** removed a dangling `(,` before the two orientation citations
   in `lem-orientation-lines-orient-continuation-moduli-spaces` [F3], an empty `(, )`
   parenthetical in `thm-continuation-count-is-a-chain-map` [F4], and a dangling `)` in
   `thm-homotopic-continuation-data-give-chain-homotopic-maps` [F4].
7. **Source locators.** Verified against the re-fetched PDFs and corrected:
   `thm-homotopic...` and `def-two-parameter-continuation-homotopy` to Ritter PDF pp. 95–96
   (exceptional parameters, fixed-member warning, rogue trajectories),
   `thm-continuation-composition-law-on-homology` to Ritter PDF p. 92 (details pp. 93–95),
   `thm-reverse-continuation...` to Ritter PDF pp. 92–93, and
   `cor-morse-homology-recovers-the-morse-inequalities` to Ritter PDF pp. 98–99. The
   remaining locators were not re-paged in this retry; a systematic Step-5 locator read is
   recommended (see Open obligations).
8. **Proof contracts.** `node tools/regen-contract-entries.mjs` was re-run on all
   proof-bearing items after the repairs, and again on the two supplier consumers once the
   supplier landed (below). Regenerating changed only `citations`/`derivations`; every other
   contract key was preserved.

## Supplier reconciliation

- In-run pair inspected: `morse-trajectory-moduli-spaces-and-the-morse-differential`
  (batch 5). Its items used by this pair are authored and quoted in the batch-6 contract;
  no open row remains for them.
- Batch-1 supplier `thm-morse-functions-and-handle-decompositions-correspond`
  (`handle-decompositions-duality-and-rearrangement`) was unauthored at the start of this
  dispatch and was flagged by the first attempt for
  `lem-compactified-unstable-manifolds-give-a-cw-decomposition` ([F5], steps 3.1 and 4.1)
  and `prop-relative-morse-complex-for-an-adapted-cobordism` ([F4], steps 3.1 and 4.1).
  It was authored by the sibling batch-1 writer during this dispatch; its Statement (i)
  supplies exactly the one-handle-per-critical-point correspondence with the
  flow-transported unstable-disk attaching sphere, and (ii) the converse. The authored file
  is `items/thm-morse-functions-and-handle-decompositions-correspond.md`,
  sha256_16 `e292f0cc65003f68` (unchanged through this handoff, and the hash recorded in the
  updated ledger rows). The two consumer
  contract entries were regenerated against the authored text and
  `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-6.proof-contracts.json --strict`
  now reports **0 errors, 28/28 items** (previously 2 `citation-fact-uncontracted` errors).
  The two batch-6 ledger rows were moved from `open` to `verified` in
  `research/frontier-41-ha-dt-29-batch-6.cross-batch-dependencies.json`.
  Because the recorded decision for both consumers is already `escalate`, this author
  cannot re-record it (`tools/step3-decisions.mjs record-item` refuses non-owner rewrites of
  an escalation); the two decisions are left for the owner with the blocking condition now
  resolved. Exact IDs: consumers
  `lem-compactified-unstable-manifolds-give-a-cw-decomposition` and
  `prop-relative-morse-complex-for-an-adapted-cobordism`; supplier
  `thm-morse-functions-and-handle-decompositions-correspond`.

## Checks (final results of this dispatch)

| check | command | actual result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts <28 item paths>` | 21 proof-bearing items checked, **0 failing** |
| rendercheck | `node tools/rendercheck.mjs <28 items> <2 pages>` | 30 files OK (YAML, math, KaTeX, wikilinks) |
| proof layout | `node tools/proof-layout.mjs <28 item paths>` | 28 items, 102 steps, **0 defects** |
| content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-6.pages.json` | 28 scoped items, 0 errors, 0 warnings |
| proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-6.proof-contracts.json --strict` | 28/28 items, **0 errors** |
| citation fidelity | `node tools/citation-fidelity.mjs ...batch-6.proof-contracts.json --fail-on-missing-quote` | 242 citations; no missing quote, no widening candidate |
| dependency levels | `node tools/tsx-run.mjs tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no finding for any batch-6 item; labels 0…17 recorded in frontmatter and manifest |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-6.pages.json` | 28 items, 0 normalized, 0 errors |
| coverage | `node tools/coverage-checklist.mjs ...batch-6.coverage.json --require-destination` | 2 pages, 89 harvested results, 0 errors |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | order acyclic and consistent; no cycles, forward refs, B-page deps or unresolved ids |
| audit manifest | `node tools/audit-manifest.mjs <batches 1, 5, 6>` | 15 defects over 85 items; only the two (now-resolved) missing-supplier rows touched this pair; the rest are batch-1 sibling debt |
| splice (report only) | `node tools/splice-plan.mjs --run frontier-41-ha-dt-29 --verify` | 5 undeclared `requires` edges for this pair (Step-4 amendments below); other rows are sibling debt |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | **blocked**: `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer ownership` (sibling input, not editable by this author) |
| decisions | `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 26/28 items current for this pair; 2 entries remain owner-held escalations |

## Open obligations

1. **Owner resolution of the two escalations.** The supplier and the actual consumer uses
   are now verified (contracts strict 0 errors; ledger rows `verified`). The recorded
   `escalate` decisions can only be replaced by the owner
   (`record-item --owner --decision accept|repaired`), per the Step-3 rules.
2. **Receipt currency under concurrent sibling writing.** Several sibling authors were
   writing (batches 1, 3, 4, 5 and others) throughout this dispatch, changing items in this
   pair's transitive dependency closure. All author receipts for the pair were refreshed
   against current inputs as late as possible, but any receipt whose closure contains a
   still-changing sibling file may go stale before the Step-3 gate. The run's Step-3
   pre-gate recertification pass (dependency-ordered, after writers drain) must rehash and
   recertify all 28 items in one pass, as the workflow requires.
3. **Unified dependency ledger refresh blocked.** The refresh aborts on the batch-19 input
   `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json` ("invalid review or
   consumer ownership"). Batch-6's own input is updated (75 rows, 0 open, 1 removed); the
   sibling batch-19 file needs its owner's repair before the unified ledger can be rebuilt.
4. **Step 5 source reviews.**
   - Relative-case assembly of `lem-compactified-unstable-manifolds-give-a-cw-decomposition`
     (Step 3a finding C): the escape stratum, the relative disk exhaustions and the
     homotopy equivalence of pairs are a scaffold-level assembly of the now-authored
     batch-1 handle items with the flow compactification; no single source states it in
     this form. Verify the assembly against Wall §§5.1–5.4 and Pajitnov, and against the
     authored batch-1 suppliers.
   - The `s`-dependent Fredholm projection used for continuation regularity
     (`def-regular-continuation-datum-between-morse-smale-pairs`,
     `def-two-parameter-continuation-homotopy`): the time-independent model is published
     (`lem-universal-metric-trajectory-projection-is-fredholm`), the `s`-dependent analogue
     is asserted by "the same analysis". Verify or supply a named local interface lemma.
   - Systematic locator pagination for the remaining citation rows (only the five listed
     in Repairs 7 were re-paged in this retry).
5. **Step 5 proof-quality reviews.** Steps 6.1/7.1 of
   `thm-continuation-trajectories-are-compact-up-to-breaking` (the sequential-compactness
   and pre-gluing/density arguments) and steps 1.1–5.1 of
   `lem-gluing-continuation-solutions-gives-collar-ends` are standard but compressed; they
   are the two places where an independent audit should stress the collar-parameter
   uniformity of the right inverses.

## Plan amendments for Step 4 (plan-spec is owner-held; not edited)

- A page manifest `requires` misses `handle-decompositions-duality-and-rearrangement`
  (11 item edges from `lem-compactified-unstable-manifolds-give-a-cw-decomposition` and
  `prop-relative-morse-complex-for-an-adapted-cobordism`).
- B page manifest `requires` misses `morse-trajectory-moduli-spaces-and-the-morse-differential`
  (7 item edges) and `handle-decompositions-duality-and-rearrangement` (3 item edges).
- All suppliers precede the pair in reading order; no ordering hazard.
- **Manifest statement refreshes (not edited here because they change the pair's
  `scopeHash` and would invalidate the Step-3a `sufficient` review):**
  (a) `ex-continuation-across-a-birth-death-adds-an-acyclic-pair` — the scaffold statement
  attributes `t^k+t^{k+1}` to `Q(t)`; the authored item states the correct attribution
  (`c(t)` gains `t^k+t^{k+1}`, `Q(t)` gains `t^k`);
  (b) `thm-reverse-continuation-is-an-inverse-on-morse-homology` — the scaffold statement
  asserts the literal reversed family is regular; the authored item obtains the reverse
  datum by a small generic perturbation of the reversed family fixing the ends.
  Both item statements preserve the promised claim; the manifest entries should be
  spliced to the authored wording (or the scope review refreshed) at Step 4.
- Correction of the earlier note in this pair's first-attempt report: the A page `requires`
  is not "in the manifest and plan agree" for the DT-6 page — neither lists it; the
  splices above resolve the 5 undeclared edges.

## Decisions recorded this dispatch

`repaired`, confidence 1, with the item's declared dependency array examined, for:
`def-morse-homology-of-a-morse-smale-pair`,
`thm-continuation-trajectories-are-compact-up-to-breaking`,
`lem-gluing-continuation-solutions-gives-collar-ends`,
`lem-orientation-lines-orient-continuation-moduli-spaces`,
`def-continuation-chain-map`, `thm-continuation-count-is-a-chain-map`,
`def-two-parameter-continuation-homotopy`,
`thm-homotopic-continuation-data-give-chain-homotopic-maps`,
`lem-continuation-map-of-constant-data-is-the-identity`,
`thm-continuation-composition-law-on-homology`,
`thm-reverse-continuation-is-an-inverse-on-morse-homology`,
`def-canonical-morse-homology-of-a-closed-manifold`,
`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`,
`thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex`,
`thm-morse-homology-is-naturally-isomorphic-to-singular-homology`,
`cor-morse-homology-recovers-the-morse-inequalities`,
`rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control`,
`ex-continuation-across-a-birth-death-adds-an-acyclic-pair`,
`ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology`,
`ex-relative-morse-homology-of-a-single-handle-cobordism`,
`ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation`,
`cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity`.
The already-current receipts for
`def-regular-continuation-datum-between-morse-smale-pairs`,
`lem-continuation-solutions-have-critical-limits`, `def-broken-continuation-trajectory`
and `lem-continuation-energy-identity` were left as recorded. After the batch-1 supplier
landed, the eight receipts whose closure contains it
(`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`,
`thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex`,
`thm-morse-homology-is-naturally-isomorphic-to-singular-homology`,
`cor-morse-homology-recovers-the-morse-inequalities`,
`ex-continuation-across-a-birth-death-adds-an-acyclic-pair`,
`ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology`,
`ex-relative-morse-homology-of-a-single-handle-cobordism`,
`ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation`) were refreshed, so
the final check reports exactly the two owner-held entries below. The two escalations
(`lem-compactified-unstable-manifolds-give-a-cw-decomposition`,
`prop-relative-morse-complex-for-an-adapted-cobordism`) are owner-held; no owner decision,
judge stamp or audit stamp was added.
