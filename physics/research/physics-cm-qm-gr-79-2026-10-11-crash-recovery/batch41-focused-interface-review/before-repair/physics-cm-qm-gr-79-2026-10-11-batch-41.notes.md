# Batch 41 notes — Qm Math Fock And Equilibrium

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **41**, covering the
single pair `qm-math-fock-and-equilibrium` (A, order 161) and
`qm-math-fock-and-equilibrium-examples` (B, order 162), category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Everything on both pages is mathematics (`domain: mathematics`); no physical
interpretation, measurement model or empirical claim is made. The binding owner
direction (`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`),
the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L2298ff (section "Qm Math Fock And Equilibrium"), the source inventory
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
the mathematical-prerequisite modules M17, M25, M26, M36, M37, M38 and M41,
`SCHEMA.md`, `CLAUDE.md`, `WORKFLOW.md` and the batch dependency levels were
read first; no approved claim was dropped.

## Inventory

23 items: 20 A items and 3 B items, all authored as complete conditional
mathematics on this page.

- Fock algebra: `thm-...-hilbert-direct-sum-construction`,
  `lem-...-fock-sector-projections`, `lem-...-creation-contraction-bounds`,
  `thm-...-closed-adjoint-sector-domains`, `thm-...-number-operator-domain`.
- Modes and equilibrium: `thm-...-fixed-mode-number-law`,
  `thm-...-single-mode-thermal-trace`,
  `thm-...-countable-mode-product-criterion`,
  `thm-...-fermion-and-dilute-grand-canonical-formulas`,
  `thm-...-finite-gibbs-free-energy-minimum`,
  `ex-...-entropy-divergence-example`,
  `thm-...-variational-ground-gap-overlap`.
- Fixed-particle branch: `thm-...-bounded-fixed-n-operator`,
  `thm-...-permutation-restricted-self-adjointness`,
  `thm-...-fixed-n-coulomb-self-adjointness`,
  `thm-...-transverse-continuum-free-fock-hamiltonian`,
  `thm-...-slater-direct-and-exchange-calculation`.
- Light–matter branch: `thm-...-cutoff-dipole-relative-bound`,
  `thm-...-vacuum-emission-dyson-convergence`,
  `thm-...-golden-rule-coefficient-approximate-identity`.
- B examples: `ex-...-example-infinite-identical-mode-divergence`,
  `ex-...-example-no-automatic-equilibration`,
  `ex-...-example-repeated-orbital-fermion-exclusion`.

Manifest: `research/physics-cm-qm-gr-79-2026-10-11-batch-41.pages.json`
(20 + 3 items, each labelled with `dependency_level`); carriers
`library/non-relativistic-quantum-mechanics-mathematics/qm-math-fock-and-equilibrium.md`
and `.../qm-math-fock-and-equilibrium-examples.md`; contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-41.proof-contracts.json`;
coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-41.coverage.json`;
cross-batch review
`research/physics-cm-qm-gr-79-2026-10-11-batch-41.cross-batch-dependencies.json`.

## Design conflicts and deviations (for Step-3 adjudication)

1. **The A page's `requires` list is the plan plus five published plan pages.**
   The dispatch and the track header declare `requires:
   [qm-math-controlled-dynamics]`; the authored manifest additionally requires
   `countability-axioms-and-cardinal-functions` (order 80.16),
   `topological-spaces-and-continuity` (80.95), `convexity` (80.99),
   `improper-and-parameter-dependent-multiple-integrals` (30) and
   `limits-of-real-functions` (80.41). All five are declared plan pages of
   earlier order and host published items that batch-41 items genuinely cite
   (`def-countable-choice`, `def-l-p-space-as-a-quotient-by-null-functions`,
   Cauchy-Schwarz/convexity, product-measure and unconditional-convergence
   results, and one-sided limits in the examples). Without the entries
   `validate-plan` reported seven `undeclared-prereq` rows for this batch; with
   them the only batch-41 row left is the imported-page gap of conflict 2.
   The carrier frontmatter keeps the plan-declared `requires` list, matching
   the batch-40 precedent; the manifest carries the authored expansion.
   `splice-plan.mjs --run ... --batch 41` will report these edges as awaiting
   adjudication; this batch does not edit `plan-spec.json`.
2. **Owner-level plan gap: an imported supplier page is absent from the plan.**
   Two items (`thm-...-single-mode-thermal-trace` and
   `thm-...-countable-mode-product-criterion`) depend on
   `lem-diagonal-trace-class-operator-on-ell-two`, whose home page in the
   library is `fredholm-determinants-and-the-lidskii-trace-formula` — a page
   listed in `research/math-imports.json` but absent from `plan-spec.json`.
   Consequences: one `validate-plan` `undeclared-prereq` row
   (`page qm-math-fock-and-equilibrium has an item depending on
   fredholm-determinants-and-the-lidskii-trace-formula ...`) and two
   `fwdcheck` `forward-undeclared` rows, because the absent page is assigned
   order #Infinity. SCHEMA.md forbids re-authoring an imported item, and the
   links are load-bearing `deps` entries (the diagonal trace-class criterion on
   $\ell^2$), so they cannot move to `forward_refs`. The same class of finding
   batch 40 recorded for `square-integrable-kernels-and-hilbert-schmidt-compactness`
   (its one pre-existing row remains in `validate-plan`). Nothing mathematical
   is missing: the cited lemma is published and was read at its exact
   statement; the smallest fix is to declare the imported page as a plan entry,
   or to license published imported suppliers without a plan entry.
3. **Dependency levels (mechanically recomputed).** One earlier label was
   stale: `thm-...-transverse-continuum-free-fock-hamiltonian` declares level
   **5** (dep `lem-...-fock-sector-projections` at level 4), not 4 as the
   scratch plan assumed. The B examples land at levels 10, 9 and 6 (the scratch
   plan guessed 10/9/8): `example-infinite-identical-mode-divergence` consumes
   the product criterion (level 9) and `example-no-automatic-equilibration`
   consumes the single-mode thermal trace (level 8), but
   `example-repeated-orbital-fermion-exclusion` consumes the Slater calculation
   (level 5), which is the mathematically honest dependency and cannot be
   raised to 8 without importing an unused supplier.
   `thm-...-golden-rule-coefficient-approximate-identity` declares level 8: its
   proof consumes the cutoff-dipole relative bound (level 7) and the transverse
   Fock Hamiltonian (level 5); it has no proof use of the Dyson-convergence
   item (level 8), and restating that item's tail bound as a fact would be
   padding, so level 9 from the scratch plan was not adopted.
4. **Sources repointed after full-text inspection.** The Pratt lecture notes
   were originally cited at the author-hosted URL
   `https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf`.
   Direct retrieval is blocked by an Incapsula bot wall (HTTP 200 with an HTML
   challenge of 82 characters; the source-fetch tool reports "HTML with 82
   chars of text"). Retry 1 (`http://web.pa.msu.edu/...`) answered with the
   same wall, retry 2 (`http://www.pa.msu.edu/...`) with a 212-byte redirect
   stub; retry 3 succeeded on the Internet Archive snapshot
   `http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf`
   (1,562,911 bytes, `%PDF-1.5`, 231 pages). The eight Pratt citations were
   repointed to that snapshot and retitled "(author-hosted; retrieved via the
   Internet Archive snapshot of 2024-04-21)", and its locators were re-verified
   in the snapshot text (Sec. 6.2 p.87; Sec. 6.8-6.9 pp.95-97; Sec. 9.1-9.3
   pp.135-138; Sec. 9.5-9.7 pp.139-143; Sec. 11.1-11.3 pp.161-168; Sec. 14.2
   pp.220-222). Two mispaired citations that carried a Reed-Simon vol. II title
   with the Teschl URL were replaced by genuinely fetched treatments with
   verified locators: `pratt` Sec. 9.1-9.2 for the closed-adjoint-sector item
   and Teschl Sec. 11.1 pp.239-242 (Kato's theorem) for the fixed-$N$ Coulomb
   item. One URL typo (`www-thphphys...`) was corrected to
   `www-thphys.physics.ox.ac.uk`, and stale locators were corrected against
   the fetched PDFs (Teschl Sec. 1.3/1.4 and Sec. 6.2-6.4;
   Burmistrov-Lunkin pp.11-18 and 24-37; Fitzpatrick Ch. 6 Sec. 6.4-6.5
   and Ch. 13 Sec. 13.5-13.9; Pratt Ch. 11 for Slater determinants). No source
   was dropped and no coverage claim was weakened.
5. **Reservation identifiers.** The design reservations spell items
   `nrqm-fock-and-equilibrium-*`; SCHEMA.md requires the kind prefix, so all
   items carry prefixed IDs with the reservation spelling kept in `aliases`
   and the manifest `reference` fields. Reservation counts agree (20 A, 3 B).

## Mathematical repairs made during construction

Every repair was applied to the item file, re-checked with `precheck.mts` and
`proof-layout.mjs`, and reflected in the proof contracts and (where
dependencies changed) in the manifest, dependency levels and cross-batch
inputs.

1. `thm-...-golden-rule-coefficient-approximate-identity` declared
   `ex-lebesgue-measure-of-intervals-boxes-and-the-rationals` in `deps`; that
   example lives only on a B/examples page, which `depcheck` rejects as
   `b-leaf-content` for an A-page item. Replaced by the A-page theorem
   `thm-lebesgue-measure-of-a-box-of-every-kind` (order 30), which states
   exactly the interval measure used; the fact text and proof step are
   unchanged.
2. `thm-...-countable-mode-product-criterion` cited
   `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` in
   its statement without declaring it; the dependency was added
   (`cited-not-in-deps` warning cleared).
3. Five stale step references were repaired: `lem-...-creation-contraction-bounds`
   step 3.2 referred to a nonexistent "steps 1.1-1.2" (now step 1.1 and its
   [F3] bound); `thm-...-cutoff-dipole-relative-bound` 6.1 said "Steps 1.1-2.3"
   (now 1.1 and 2.1 prove (a), 4.1 proves (b), 1.2 and 5.1 prove (c));
   `thm-...-slater-direct-and-exchange-calculation` 3.1 said "1.1-2.2" (now
   named correctly), `thm-...-transverse-continuum-free-fock-hamiltonian` 5.1
   said "1.1-3.2" (now named correctly), and
   `thm-...-vacuum-emission-dyson-convergence` [F1] was declared but never
   cited; step 5.1 now uses it for self-adjointness of $H$ in the uniqueness
   argument.
4. The three B examples had acquired nested `## Facts & Assumptions` and
   `## Proof` headings inside their `## Verification` section (an artefact of
   the proof-repair helper); the headings were merged so that each example
   keeps the canonical `## Example` + `## Verification` shape of the
   batch-40 B page, which cleared the three `proof-step-separation`
   `no-steps` defects.
5. The `iff-forward`/`iff-reverse` boundary rows of
   `lem-...-fock-sector-projections`,
   `thm-...-countable-mode-product-criterion` and
   `thm-...-fermion-and-dilute-grand-canonical-formulas` were marked
   `not_applicable` although those statements contain biconditionals
   (`boundary-audit` flagged the third pair). They are now `checked` with
   step-specific evidence (step 1.2; steps 2.3 and 3.1; steps 1.3 and 2.1).
6. **Dependency hygiene.** The only dependency declared without a proof,
   statement or construction use that survived construction was the
   unexercised item in repair 3; all other `deps` entries are cited in the
   item text, and every wikilink target of every fact is declared
   (`auditlinks` run over all 23 items reports no missing declaration after
   repairs 1-2).

## Sources

- Coverage: `research/physics-cm-qm-gr-79-2026-10-11-batch-41.coverage.json`.
  `source-fetch-check.mjs --coverage ... --stamp` fetched the complete bodies
  of all nine source records: Teschl *Mathematical Methods in Quantum
  Mechanics* (1st ed., full 317-page PDF), Essler *Advanced Quantum Theory*
  (Oxford, full 68-page PDF), Fitzpatrick *Quantum Mechanics* (UT Austin, full
  222-page PDF), Pratt *Lecture Notes on Quantum Mechanics* (MSU, full 231-page
  PDF via the Internet Archive snapshot), Burmistrov-Lunkin *Lecture Notes on
  Statistical Mechanics* (HSE, full 151-page PDF). Check mode (no network):
  **9/9 fetch-verified, 9/9 resolved, 0 documented drops.** Two independent
  treatments per page: the textbook strand (Teschl) and the lecture-note
  strand (Essler, Fitzpatrick, Pratt, Burmistrov-Lunkin); both pages carry at
  least one primary source. Locators were verified against the fetched text
  (`mutool` extraction), and the item references were repointed where the
  originals were stale or mispaired (conflict 4).
- Harvest: 46 source headings disposed; every A-item branch and every B example
  is anchored to at least one harvested heading, and every `included`
  disposition names a scaffolded item of this batch. No result was dropped: all
  harvested headings are either `included` (the item itself) or `inline`
  (absorbed into a cited proof), and the coverage checklist reports no
  warnings.

## Dependency levels (final, as labelled in items and manifest)

Level 0: `ex-...-entropy-divergence-example`. Level 1:
`thm-...-bounded-fixed-n-operator`. Level 2:
`thm-...-finite-gibbs-free-energy-minimum`,
`thm-...-variational-ground-gap-overlap`. Level 3:
`thm-...-hilbert-direct-sum-construction`,
`thm-...-permutation-restricted-self-adjointness`. Level 4:
`lem-...-fock-sector-projections`,
`thm-...-fixed-n-coulomb-self-adjointness`. Level 5:
`lem-...-creation-contraction-bounds`,
`thm-...-transverse-continuum-free-fock-hamiltonian`,
`thm-...-slater-direct-and-exchange-calculation`. Level 6:
`thm-...-closed-adjoint-sector-domains`, `thm-...-number-operator-domain`,
`ex-...-example-repeated-orbital-fermion-exclusion`. Level 7:
`thm-...-fixed-mode-number-law`, `thm-...-cutoff-dipole-relative-bound`.
Level 8: `thm-...-single-mode-thermal-trace`,
`thm-...-vacuum-emission-dyson-convergence`,
`thm-...-golden-rule-coefficient-approximate-identity`. Level 9:
`thm-...-countable-mode-product-criterion`,
`ex-...-example-no-automatic-equilibration`. Level 10:
`thm-...-fermion-and-dilute-grand-canonical-formulas`,
`ex-...-example-infinite-identical-mode-divergence`. Levels were recomputed
from the final frontmatter after every dependency change;
`item-dependency-levels.mjs check --run` reports no batch-41 finding (its
remaining errors are other batches' empty scaffold inventories and other
batches' stale labels).

## Completion checks (final state)

- `tsx-run.mjs tools/physics-support/precheck.mts` on all 23 items: 23 checked,
  0 failing — all clean.
- `proof-layout.mjs` on all 23 items: 23 items, 126 steps, 0 defects.
- `rendercheck.mjs` on both carriers: OK (no wikilink inside math, no nested or
  unbalanced delimiters, no multiline display block, every math span parses
  under KaTeX, both frontmatter blocks parse).
- `content-policy.mjs` on the batch manifest: 23 scoped items, 0 errors,
  0 warnings.
- `manifest-deps.mjs`: 23 items, 0 errors.
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift; both carriers list exactly the manifest items.
- `depcheck.mjs --items-file /tmp/b41-items.json`: selected item/page checks and
  prerequisite cycle checks passed, no error and no warning after repairs 1-2.
- `validate-plan.mjs research/plan-spec.json --run ...`: exits 1 with exactly
  two findings — the pre-existing batch-40 imported-page row and the batch-41
  imported-page gap of conflict 2. The five authored `requires` edges of
  conflict 1 do not appear as findings; they await adjudication at splice.
- `item-dependency-levels.mjs check --run ...`: no batch-41 finding; remaining
  errors are other batches' empty scaffold inventories and stale labels.
- `batch-dependency-levels.mjs check --run ...`: reports the run digest stale
  and asks for a recompute; batch 41's stored row (`dependency_level: 5`,
  `requires: ["40"]`) matches the actual consumption of batch 40 through the
  `qm-math-controlled-dynamics` page edge, and the staleness is caused by other
  batches' concurrent edits. The derived engine metadata was not rewritten.
- `proof-contract.mjs research/...-batch-41.proof-contracts.json --strict`:
  0 errors, 0 warnings, 23/23 items checked.
- `boundary-audit.mjs` on the same file: 184 rows, no contradicted disposition;
  8 template-reuse clusters at or above 3 members (advisory — the worksheet
  wrapper is shared across items; every row names existing steps, and no
  `not_applicable` row is contradicted by its item text after repair 5).
- `coverage-checklist.mjs`: 2 pages, 46 harvested results, 0 errors,
  0 warnings.
- `source-fetch-check.mjs --coverage ...`: 9/9 fetch-verified, 9/9 resolved,
  0 documented drops; check mode (no network) passes.
- `citecheck.mjs` on the 23 items: 23 scanned, 1 heuristic warning
  (`order-axioms` on `thm-...-fixed-n-coulomb-self-adjointness`, line 80),
  triaged as a false positive: the matched phrase "symmetric and antisymmetric
  restrictions" concerns permutation sectors of the Hilbert space, not an
  order relation, and no order axiom is used at that line.
- `extcheck.mjs`: 28038 items, 0 recorded-not-proved, 0 resting on them — OK.
- `fwdcheck.mjs`: exits 1 on the repo-wide pre-existing findings in other
  workspaces plus the two `forward-undeclared` rows of conflict 2 (the
  imported lemma's page carries order #Infinity); no other batch-41 forward
  reference is open.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed; batch 41 is in
  `reviewed_batches` with 38 edges (1 page edge, 37 item edges), every declared
  in-run cross-batch edge reviewed `verified`.
- `step1-decisions.mjs check --run ...`: zero open work rows for any batch-41
  item or page after the readiness records below (the remaining open rows
  belong to other, not-yet-authored batches).

## Unresolved findings handed to the owner

1. The five authored `requires` edges of conflict 1 await the Step-3
   adjudication (`splice-plan.mjs --accept-requires`) before the batch is
   spliced into `plan-spec.json`; this batch leaves the shared plan untouched.
2. The owner-level plan gap of conflict 2 (imported page
   `fredholm-determinants-and-the-lidskii-trace-formula` absent from
   `plan-spec.json`; two consumers, one `validate-plan` row, two `fwdcheck`
   rows) needs an owner/adjudicator decision. SCHEMA forbids re-authoring the
   imported item, so no local repair exists.
3. The eight `boundary-audit` template-reuse clusters are recorded for the
   Alpha read the audit requests; they are worksheet-style rows, not
   mathematical claims, and no contradicted disposition survives repair 5.
4. The `citecheck` `order-axioms` warning of the completion battery is a
   heuristic false positive with the triage recorded above.
5. Deliberately condensed arguments flagged for Step-2/3 review, with no claim
   resting on an unproved false statement: (i)
   `thm-...-golden-rule-coefficient-approximate-identity` [F5] bundles the
   monotone-convergence/additivity/linearity/indefinite-integral facts into one
   fact and the density-to-integral identity is proved in-line for indicators,
   simple functions and general nonnegative functions but not expanded
   line-by-line; (ii) `ex-...-example-no-automatic-equilibration` [F3] bundles
   the PVM norm identities, the a.e.-concentration argument for an eigenvector
   and Stone's representation of the unitary group, all cited to published
   suppliers; (iii) `thm-...-fixed-n-coulomb-self-adjointness` assembles the
   $N$-particle operator from the one- and two-body Kato-Rellich bounds at
   claim level, with the Hardy-bound and reduced-mass suppliers cited; (iv)
   `thm-...-fermion-and-dilute-grand-canonical-formulas` compresses the
   logarithmic comparison for the fermionic products into a single step.

## Readiness records

All 23 items were recorded `ready` with `step1-decisions.mjs record` **after**
the final item, manifest, carrier, contract, coverage, level and cross-batch
edits, each with its examined dependency list (the final frontmatter `deps` of
the item) and these batch notes as evidence. No record uses `--owner` and no
escalation record was written; the plan-level findings are recorded here and in
the cross-batch input for the owner and Step 3. Step-1 readiness is an
authoring record, not independent mathematical approval; Step 3 supplies that
review.
