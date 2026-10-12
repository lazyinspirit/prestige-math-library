# Batch 37 notes — `qm-math-orbital-and-spin` / `qm-math-orbital-and-spin-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 37, Step 1 initial
authoring, 2026-10-11. Scope: exactly one A/B pair, A page order **153**, B page
order **154**, category `non-relativistic-quantum-mechanics-mathematics`,
library `mathematics`. Everything on both pages is mathematics
(`domain: mathematics`); no physical postulate, no measurement model and no
empirical claim is made anywhere in the batch. Final inventory: **15 A items +
3 B items = 18**. All 18 readiness records were re-recorded `ready` after the
page-`requires` repair recorded below, so every record hash is current
(`step1-decisions.mjs check --run ...` lists zero work for this pair; its
remaining entries are other batches' unpopulated page inventories). Written by this
batch: the manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-37.pages.json`,
the two page carriers under
`library/non-relativistic-quantum-mechanics-mathematics/`, the coverage file,
the proof contracts, the cross-batch dependency input and this note. No
published item, shared plan, engine state or verdict was edited. The only
shared-state writes were the designated derived-state refreshes
`frontier-dependency-ledger.mjs refresh --run ...` (the run's per-pair ledger).

Read first: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
clause of it names or overrides this pair), the dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch-37 row: `{"dependency_level": 2, "requires": ["1","5","9","35","36"]}`),
the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L669 ff. with `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(proof modules M18, M22, M39) and `research/plan-spec.json` (order 153/154).

## Design vs plan, recorded conflicts

1. **Page `requires` — stale reservation, plan controls, and a transitive
   reduction.** The design reservation declares `requires: [qm-math-composites,
   qm-math-oscillator]`; `research/plan-spec.json` declares only
   `[qm-math-oscillator]` for the A page, and the plan controls this run.
   `qm-math-composites` is in fact reached transitively through
   `qm-math-oscillator` (the batch-36 page requires it), so no design claim is
   lost. Item authoring additionally consumes published supplier pages that
   neither list names; after authoring, the A page's `requires` was set to the
   **16-entry transitive reduction** computed over the merged (plan + manifest)
   page graph: `qm-math-oscillator`, the three imported pages of the escalation
   below, and `cm-math-central`, `cm-math-rigid`,
   `construction-of-the-natural-numbers`, `darboux-lhopital-and-taylor`,
   `euclidean-surface-measure-divergence-and-green-identities`,
   `field-extensions-and-the-complex-numbers`,
   `linear-algebra-methods-in-combinatorics`, `polynomial-rings-and-roots`,
   `projective-algebraic-sets-projective-morphisms-and-cones`,
   `stone-weierstrass-general`, `the-divergence-theorem-and-classical-stokes`
   and `uniform-spaces`. This reduction provably covers every page homing an
   item-level dependency of the pair (55 distinct root pages; verified by
   closure computation before editing and by `validate-plan` afterwards), and it
   keeps `requires` a transitive reduction as the tool demands: after the
   repair `validate-plan --run` reports **zero** `redundant-prereq` warnings on
   either batch-37 page (an earlier 31-entry over-listing produced 31 warnings on
   the A page and 6 on the B page). The B page declares
   `requires: [qm-math-orbital-and-spin]`, exactly the plan list; every B-item
   supplier page is inside the A page's closure. Both `requires` arrays are
   byte-identical between the manifest and the library carriers (16/16 and 1/1,
   checked by parsing the YAML with the repo's own parser). `splice-plan.mjs
   --run ... --batch 37 --dry-run` now reports `batch 37 WITHHELD — 1 requires
   edge(s) await adjudication` and lists exactly the **15** A-page edges beyond
   the plan's sole declared prerequisite: Step-3 adjudication is `--accept-requires`
   after its gate closes (same situation batch 36 and batch 38 recorded); the
   batch does not edit `plan-spec.json`.
2. **Reservation identifiers.** The design reservations spell the items
   `nrqm-orbital-and-spin-*`. SCHEMA.md requires the kind prefix in the ID, and
   the batch-35/36 precedent renamed the same way; all 18 items were authored
   with prefixed IDs (`prop-`, `thm-`, `lem-`, `ex-`), keep the reservation
   spelling in `aliases`, and the manifest `reference` fields still name the
   plan keys (`inventory.json#...`). No promised claim was removed: the 14
   reserved A items and 3 reserved B items are all present with their design
   titles.
3. **B-item dependency expansion.** The reservation chains each B item to the
   first A item; the authored examples additionally depend on the items they
   actually use (for instance the coupled-triplet example on
   `thm-nrqm-orbital-and-spin-tensor-spin-composition` and the batch-35 tensor
   construction, the orbital-core-commutators example on the sphere,
   Laplacian and generator items). All additions are same-batch or published
   mathematical suppliers.
4. **One inventory expansion.** `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`
   is not in the frozen reservation. It was added so that the angular layer has
   a local home for the polar surface-measure identity
   ($\int_{S^2}F\,d\sigma=\int F\circ\Phi\,\sin\theta\,d(\theta,\varphi)$,
   $\sigma(S^2)=4\pi$) that the normalization, completeness, ONB, Laplacian and
   rotation items all consume; without it those items would each have to
   re-derive the same change of variables. The manifest marks it
   `inventory_expansion_required: true`; it is mathematics and satisfies the
   same dependency rules.
5. **Batch-level digest.** The in-run suppliers actually consumed are batch-36
   items (via `qm-math-oscillator`), batch-35 items (via the tensor
   construction, transitively through batch 36) and the batch-1/5/9 CM-math
   items reached through the CM pages. The recomputed engine digest carries
   batch 37 at `level 2`, `requires ["1","5","9","35","36"]`, consistent with
   the authored edges, and `batch-dependency-levels.mjs check --run ...` now
   exits 0 (`79 batch(es); maximum level 15`). This batch did not write the
   digest; it was recomputed centrally while this note was in preparation (an
   earlier check reported `Stale ... recompute before authoring`).

## Inventory, levels and dependency checks

15 A items: finite spin matrices; symmetric-power SU2 representation; finite
spin-block decomposition; tensor spin composition; Tsirelson bound; Legendre
Rodrigues equation; sphere integral in angle coordinates; associated-polynomial
normalization; weighted angular completeness; sphere ONB; sphere Laplacian
diagonal domain; harmonic polynomial dimension; strongly continuous rotation
action; orbital self-adjoint generators; dipole angular selection rules.
3 B items: spin singlet CHSH; coupled triplet and singlet; orbital core
commutators.

In-run item levels after all authoring and repair edits, over the 18 items:
0 (3 items: finite-spin-matrices, legendre-rodrigues, sphere-integral),
1 (2: associated-polynomial-normalization, finite-spin-block-decomposition),
2 (3: tensor-spin-composition, tsirelson-bound, weighted-angular-completeness),
3 (4: symmetric-power-su2, sphere-onb, example-spin-singlet-chsh,
example-coupled-triplet-and-singlet), 4 (1: sphere-laplacian-diagonal-domain),
6 (1: harmonic-polynomial-dimension), 7 (1: strongly-continuous-rotation-action),
8 (1: orbital-self-adjoint-generators), 9 (2: dipole-angular-selection-rules,
example-orbital-core-commutators). Cross-batch in-run suppliers are 13 distinct
items: four batch-35 tensor items
(`lem-nrqm-composites-hilbert-tensor-construction`,
`lem-nrqm-composites-bounded-tensor-maps`,
`lem-nrqm-composites-permutation-sector-projections`,
`lem-nrqm-composites-chsh-and-finite-sampling-law`), five batch-36 oscillator
items (`lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma`,
`thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`,
`thm-nrqm-oscillator-hermite-recurrence`,
`thm-nrqm-oscillator-hermite-orthogonality`,
`thm-nrqm-oscillator-multidimensional-oscillator-completeness`), and four CM-math
items (`def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group` from
batch 1, `lem-cm-cross-product-triple-identity` from batch 5,
`lem-cm-skew-matrix-cross-product-correspondence` from batch 9); all carry
`ready` records and were hash-checked before authoring consumed them. The
manifest `deps`/`dependency_roles` equal the item frontmatter exactly (all 18
items, reconciliation during manifest generation), and no cycle, forward
reference, B-leaf or intra-page ordering defect was found by the focused tools.

`node tools/physics-support/item-dependency-levels.mjs check --run ...` exits 1
with 122 `empty scaffold inventory` errors for **other** batches' unscaffolded
pages and reports no batch-37 finding (every manifest `dependency_level` equals
the computed level). `depcheck.mjs --items-file` reports no finding for any of
the 18 items; its page-dependency-depth listing shows the full transitive
closure of each page (2061 items, 282 pages) as expected, computed from item
deps and not from `requires`.

## Sources and source checks

Eight coverage entries over six distinct documents (Binney–Skinner and MIT
8.05 Chapter 9 serve both pages): five independent treatments for the A page
(Axler–Bourdon–Ramey, DLMF, MIT 8.05 Ch 9, Binney–Skinner, Brunner et al.) and
two for the B page plus the A-page sources it reuses.

- S. Axler, P. Bourdon, W. Ramey, *Harmonic Function Theory*, 2nd ed.,
  author-hosted full text, Chapter 5 (printed pp. 77-105) and Appendix A.2 —
  textbook; `sha256_16 4e64124f7e36993e`, full PDF stamped.
- NIST Digital Library of Mathematical Functions, §§14.7, 14.30, 18.2, 18.3 —
  reference work; full text stamped per section.
- MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 "Angular Momentum"
  (B. Zwiebach) — complete lecture-note chapter;
  `sha256_16 12e18c3c2666ca6a`.
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, author-hosted
  full text — textbook; `sha256_16 f19649bce67898ee`.
- N. Brunner et al., "Bell nonlocality", *Rev. Mod. Phys.* 86 (2014) 419,
  §II.C.1.a — survey; `sha256_16 421c74c6caaf9233`.
- MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 "Tensor product" —
  complete lecture-note chapter; `sha256_16 45ce009e73358d06`.

The exact ranges were inspected in the fetched full texts before authoring, and
`source-fetch-check.mjs --coverage research/...-batch-37.coverage.json` (check
mode) reports `8/8 source(s) fetch-verified` and `8/8 resolved (0 documented
drops)`. `coverage-checklist.mjs` reports 2 pages, 43 harvested results,
0 errors, 0 warnings; every harvested result has an `included` disposition
with its item ID.

## Escalation (raised, actioned and resolved in-session): three imported pages missing from the run plan

The bullets below record the state when the escalation was raised; the
resolution is recorded at the end of the section.

- **Exact findings.** `validate-plan.mjs research/plan-spec.json --run ...`
  reports on `qm-math-orbital-and-spin`, and on nothing else in this batch:
  `[requires-resolve] page qm-math-orbital-and-spin requires
  "algebraic-extensions-degree-and-finite-fields", which is not a declared
  page` and the same for `the-branching-rule-and-the-young-graph` and
  `unitary-representations-positive-type-and-gns` (3 errors);
  `[undeclared-prereq] page qm-math-orbital-and-spin has an item depending on
  <the same three pages>, which is NOT in the closure of its declared requires`
  (3 errors). `fwdcheck.mjs` (whole repo) adds six batch-37 lines covering four
  distinct wikilink targets (the repeated link is reported once per occurrence)
  of the form `[forward-undeclared] items/thm-nrqm-orbital-and-spin-...md:
  wikilink [[...]] points forward to <page> (#Infinity)`, all to the same three
  pages. Run-wide totals at the time of writing: `validate-plan` exits 1 with
  **6** errors and **all six are the escalation errors above** (the earlier
  unrelated `cm-math-rotation-double-cover` finding was resolved centrally in
  the meantime); the 21 remaining `redundant-prereq` warnings name other pages
  only.
- **Affected items and exact uses.**
  `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation` cites
  `thm-binomial-theorem-over-a-commutative-ring` (home
  `algebraic-extensions-degree-and-finite-fields`) as [F5], used at step 1.1 to
  expand $(t^2-1)^l=\sum_k\binom lk(-1)^{l-k}t^{2k}$ in the polynomial ring.
  `thm-nrqm-orbital-and-spin-symmetric-power-su2-representation` cites
  `def-commuting-symmetric-and-linear-actions-on-tensor-power` (home
  `the-branching-rule-and-the-young-graph`) at [F2]/[F3] (steps 1.1, 2.1) for
  the place-permutation/diagonal-action commutation, and
  `def-strongly-continuous-unitary-representation` (home
  `unitary-representations-positive-type-and-gns`) in statement clauses (b)
  and (f). `thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action`
  cites the same representation definition; its closing remark states
  explicitly that the identification of vocabulary is not used in the proof.
- **Cause.** The three pages are published (their carriers exist under
  `library/abstract-algebra/`, `library/special-topics-in-representation-theory/`
  and `library/representation-theory/`, each with `status: published` and a
  full item list) and are listed in `research/math-imports.json` (read-only
  imported mathematics), but they occur **zero times** among the 802 pages of
  `research/plan-spec.json` (verified by direct search). The plan was spliced
  2026-10-04 with 224 imported `kind: "P"` pages chosen for the pages then
  declared; these three are outside that set. This is a plan-registry gap, not
  an item gap: the supplier items were read, their statements are exactly what
  the consuming facts state, and the consuming proofs are complete against
  them.
- **Why the dependencies cannot simply be dropped.** The binomial theorem over
  a commutative ring is what produces the Rodrigues polynomial and its degree
  and leading coefficient; no other declared page states it. The commuting
  tensor actions definition is what makes the invariance computation
  $W^{\otimes n}(S_n)\subseteq S_n$ well-posed and citation-clean (the batch-35
  permutation-sector item supplies $U_\pi$, $P_+$ and the fixed-vector range,
  but not the diagonal action and its commutation). The strongly continuous
  unitary representation definition is the vocabulary of the symmetric-power
  theorem's own conclusion ("$U_n$ is strongly continuous on $SU(2)$").
  Re-authoring any of them locally would duplicate imported canonical
  mathematics, which the workspace instructions forbid.
- **Smallest missing supplier.** A plan declaration of the three imported pages
  `algebraic-extensions-degree-and-finite-fields`,
  `the-branching-rule-and-the-young-graph` and
  `unitary-representations-positive-type-and-gns` as `kind: "P"` pages with
  orders strictly below 153 (precedent: the owner's batch-3 resolution declared
  imported P pages with orders below 85, closing the same class of finding;
  batch 16 raised the same class for `cm-math-rotation-double-cover`). After
  that declaration the three `requires-resolve` errors, the three
  `undeclared-prereq` errors and the `fwdcheck` `#Infinity` lines (four
  distinct targets) all clear, with no item edit. Independently of it, the 15 A-page `requires` edges
  beyond the plan await Step-3 `splice-plan --accept-requires` adjudication.
  Alternative acceptable resolution: an owner decision licensing reading-order
  access to imported published pages without `requires` entries.
- **Status.** Raised here and in the batch manifest location; the shared plan
  was **not** edited (`plan-spec.json`, engine state and verdicts are out of
  batch write scope). Item statements, proofs, contracts and coverage are
  complete against the current carriers.

### Resolution (recorded after the escalation was actioned; supersedes the state above)

- While this note was in preparation, the owner/operator response declared the
  three imported host pages in `research/plan-spec.json` as `kind: "P"` pages
  with orders strictly below 153:
  `algebraic-extensions-degree-and-finite-fields` (order 80.99999998872225),
  `the-branching-rule-and-the-young-graph` (order 80.99999999436113) and
  `unitary-representations-positive-type-and-gns` (order 80.99999999718057);
  the plan now has 806 pages. This is the same remedy the owner applied to the
  batch-2/3 and batch-16 escalation class, and it was the smallest missing
  supplier named above.
- No batch-37 artifact change was needed for the resolution: the manifest and
  both carriers already named the three pages in `requires` (added during
  authoring and kept through the transitive reduction), so the declaration
  resolved the six errors in place. After the plan update:
  `validate-plan.mjs research/plan-spec.json --run ...` reports **zero findings
  on either batch-37 page** and was observed to **exit 0 run-wide** immediately
  after the declaration (a later re-run, while other batches were writing new
  inventories, reported three `undeclared-prereq` errors on
  `cm02-forces-initial-data-and-newtonian-flow-examples`, none naming this
  pair), and `fwdcheck.mjs` reports **zero** batch-37 findings (its whole-repo
  exit FAIL is from pre-existing other-workspace items).
  `step1-decisions.mjs check --run ...` still reports 392/392 ready with zero
  open work for batch 37, so the readiness hashes remain current after the plan
  edit.
- One batch-level item remains and is the ordinary Step-3 path rather than an
  escalation: `splice-plan.mjs --run ... --batch 37 --dry-run` reports `batch
  37 WITHHELD — 1 requires edge(s) await adjudication` and lists exactly the 15
  A-page `requires` edges beyond the plan's declared `qm-math-oscillator`
  (the same shape batches 36 and 38 recorded); Step 3 reconciles them with
  `splice-plan.mjs ... --update --accept-requires` after its gate closes.

## Checks actually run (results as observed, after the final edits)

- `precheck.mts` on all 18 items: 18 checked, 0 failing, all clean.
- `proof-layout.mjs` on the 18 items: 18 items, 101 steps, 0 defects.
- `rendercheck.mjs` on the 18 items and the 2 page carriers: OK (20 files; no
  wikilink inside math, no unbalanced delimiters, no multiline display block,
  every KaTeX span and YAML frontmatter parses). During construction 11
  multi-line display blocks were joined to single-line displays to reach this
  state, and the proof sections were given their `## Proof`/`## Verification`
  headings.
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-37.proof-contracts.json`:
  0 errors, 0 warnings, 18/18 items, 296 citation contracts, 101 step
  derivations, 144 boundary dispositions (8 per item).
- `depcheck.mjs --items-file /tmp/b37/items37.json`: OK — "selected item/page
  checks and their prerequisite cycle checks passed" over 2061 items and 282
  pages; no `dep-unresolved`, `link-unresolved`, `cited-not-in-deps` or cycle
  finding on any batch-37 item.
- `content-policy.mjs research/...-batch-37.pages.json`: 18 scoped items,
  0 errors, 0 warnings.
- `manifest-deps.mjs`: 18 items, 0 normalized, 0 errors.
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `audit-manifest.mjs` on batches 1, 5, 9, 35, 36, 37: 1561 relationships over
  128 items in 6 batches, 7 defects — every defect is an unresolved in-run
  dependency of batches 5 and 9 (`lem-cm-derivative-of-pairings-of-curves`,
  `thm-cm-compact-continuation-for-locally-lipschitz-odes`,
  `cor-cm-finite-time-breakdown-requires-escape`), **zero involving batch 37**.
- `validate-plan.mjs research/plan-spec.json --run ...`: exits 1 with 6 errors
  run-wide at the time of the first full battery, all six the escalation errors
  above; **after the owner declared the three imported pages, zero findings
  name either batch-37 page and the command was observed to exit 0 run-wide**
  (`OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids`). Run-wide
  results are volatile while other batches author (a later re-run reported
  three `undeclared-prereq` errors on `cm02-forces-initial-data-and-newtonian-flow-examples`,
  none naming this pair), but no warning names either batch-37 page (the 21
  remaining `redundant-prereq` warnings name other pages). Before the
  `requires` reduction the same command reported 37 `redundant-prereq` warnings
  on the two pages, all removed by the reduction.
- `splice-plan.mjs --run ... --batch 37 --dry-run`: `batch 37 WITHHELD — 1
  requires edge(s) await adjudication`, listing exactly the 15 A-page edges
  beyond the plan's declared `qm-math-oscillator`.
- `fwdcheck.mjs` (whole repo, forced by the tool): before the plan declaration
  it reported 6 batch-37 `#Infinity` `forward-undeclared` lines (four distinct
  link targets, one reported per occurrence), all from the escalation; after
  the declaration **zero batch-37 findings remain**. The whole-repo exit is
  still FAIL from pre-existing other-workspace findings.
- `item-dependency-levels.mjs check --run ...`: exits 1 with 122
  `empty scaffold inventory` errors for other batches; no batch-37 finding.
- `batch-dependency-levels.mjs check --run ...`: exits 0 (`79 batch(es);
  maximum level 15`) on the centrally recomputed digest; the batch-37 row
  (`level 2`, `requires ["1","5","9","35","36"]`) is consistent with the
  authored edges. (An earlier check during authoring reported `Stale ...
  recompute before authoring`; this batch does not write engine-derived
  scheduling state.)
- `citecheck.mjs` on the 18 items: 18 scanned, 3 heuristic warnings, triaged
  (next section). The tool's own disposition options are (a) real
  mis-attribution, (b) move packaged by a lemma, (c) phrase used but move not
  made.
- `extcheck.mjs`: 27519 items, 0 recorded-not-proved, 0 resting on them — OK.
- `source-fetch-check.mjs --coverage ...`: 8/8 fetch-verified, 8/8 resolved,
  0 documented drops.
- `coverage-checklist.mjs`: 2 pages, 43 harvested results, 0 errors,
  0 warnings.
- `proof-contract-coverage.mjs --run ... --contracts ...`: cannot complete —
  `ERROR proof-contract-coverage-input: Empty or invalid frontier page
  inventory cm-math-numerical` (another batch's unauthored page). The
  batch-local strict contract gate above covers all 18 proof-bearing items;
  the run-level provider re-runs after all inventories are populated.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated. The batch-37 consumer side has 25 edges (3 page edges —
  `qm-math-oscillator` batch 36, `cm-math-central` batch 5, `cm-math-rigid`
  batch 9 — and 22 item edges to the 13 suppliers above), every one carrying a
  `verified` evidence row from this batch's cross-batch input; the two
  `orphaned_reviews` entries in the ledger belong to batches 38 and 4.
- `step1-decisions.mjs check --run ...`: 392 items, 392 ready at the time of
  writing; zero open work for batch 37 (the 122 remaining entries are other
  batches' empty scaffold inventories).

### Citecheck triage (all three left standing, with reasons)

1. `add-order` at `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation:70`:
   the matched phrase is "compatible with addition" inside [F4], where it means
   the ring-homomorphism compatibility of polynomial evaluation, not an order
   move; no inequality is added and no translation invariance is used. The
   $2k<l$ / $2k\ge l$ case split is the case division of the derivative
   formula [F1] itself (whose hypothesis is $m\le n$). Disposition (c): the
   phrase is used, the recognized move is not made.
2. `sign-rules` at `thm-nrqm-orbital-and-spin-tensor-spin-composition:102`:
   [F7]'s bundled elementary assertion that a finite product of positive
   naturals is positive, used at step 4.1 to keep the ladder coefficients
   $k!(2j)(2j-1)\cdots(2j-k+1)$ positive. No ordered-field lemma is
   mis-attributed; the content is the ℕ multiplication/order compatibility
   developed on the declared page `construction-of-the-natural-numbers`
   (`lem-nat-order-mult-compatible`, `lem-nat-no-zero-divisors`), reached
   through `def-natural-numbers`, which the fact already cites. Disposition
   (b): elementary move packaged by the ℕ development; if a reviewer prefers an
   explicit citation, those two lemmas are the exact homes and the edit is a
   one-line fact-wording plus two deps.
3. `order-axioms` at `thm-nrqm-orbital-and-spin-tensor-spin-composition:112`:
   the matched words are "symmetric in $k,l$" and "$\varepsilon_{kil}$
   antisymmetric" in the Casimir computation; they describe the index symmetry
   of $J^{(s)}_k\otimes J^{(t)}_l$ and of the Levi-Civita symbol, not an order.
   Disposition (c): false positive.

## Readiness re-record

The `requires` repair invalidated the input hash of all 18 readiness records
(the hash includes the manifest page metadata of every in-run dependency). All
18 were re-recorded `ready` through the ordinary
`step1-decisions.mjs record` CLI with their unchanged examined dependency lists
and the original evidence plus a re-record note; no `--owner` flag was used,
no escalated record existed to overwrite, and the final `check` lists zero open
work for the batch. This is authoring-time bookkeeping only: owner/operator
reconciliation and the full engine gate follow construction, and independent
mathematical review (Steps 2/3) remains outstanding.

## Status

All 18 items, the two page carriers, the manifest, coverage, proof contracts,
cross-batch input and this note are draft mathematics under initial authoring.
No physical postulate, measurement claim or statistical statement is made on
these pages; the Tsirelson and CHSH items concern the explicitly specified
finite-dimensional model and its common-outcome comparison, with the
no-experimental-claim scope clause in the statement text. This note records
authoring-time checks only; independent mathematical review and the engine gate
remain outstanding, and nothing here is a publication or approval receipt. The
escalation was raised and resolved in-session (the owner declared the three
imported plan pages); the only batch-level follow-up is the ordinary Step-3
`splice-plan --accept-requires` adjudication of the 15 A-page `requires` edges
beyond the plan.
