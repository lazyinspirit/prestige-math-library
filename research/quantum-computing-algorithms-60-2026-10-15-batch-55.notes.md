# Batch 55 — authoring and handoff notes

## Governing inputs and scope

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch-55 task, run-local owner direction, current plan inputs, QA31 source section, current audited item export, and the batch-dependency-levels file. The owner direction controls the stale prerelease hold: draft against actual current supplier bodies; it does not approve proofs or authorize publication.
- No design section governed this pair; the dispatch’s `design: none found` is recorded. The pair was scaffolded from full-text sources and the complete QA31 section in `research/quantum-algorithms-planning/sections/qa_r2.md`, which supplies the binding topic route, scope limits, and shortened-final-width proof obligations. The plan-spec row controls page IDs/category/requires. Its A/B item arrays are empty, while the current audited quantum-algorithms export and batch scaffold contain 12 original A items and 2 examples; the carrier uses that audited inventory and adds five necessary local A suppliers.
- The audited proposal’s hidden-shift reduction dependency on `def-qa-finite-abelian-hidden-subgroup-problem` was not used as a logical supplier: that definition is explicitly abelian, whereas the reduction is a nonabelian generalized-dihedral right-coset promise. The new reduction theorem proves its group/coset claim directly from the hidden-shift definition and semidirect-product interfaces.
- The planning text’s “one selected f/g query” does not follow from ordinary coherent XOR-oracle access because controlled oracle access is explicitly separate. The reduction theorem records two valid profiles: one call to a directly supplied `F` oracle, or four calls to the supplied `f,g` XOR oracles to compute and uncompute selected outputs. The controlled bit gates and workspace remain charged.
- The exact binary QFT is counted in the ideal gate model. No finite-set compilation or target-angle synthesis cost is claimed; the required additional interface is a finite-gate compilation contract with an explicit bit/gate bound.
- Dispatch scheduling input hash: `5904c99cbe2e6eeb2b574aa97063f131d674c13f6d547423b9b44826907dfe1f`. The on-disk `batch-dependency-levels.json` has input hash `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`; it still labels batch 55 level 13 with prerequisite batches 1, 2, 4, 8, 9, 10, 14, 29, 32 and 34. The mismatch is recorded, not repaired here because scheduling input is shared owner state.

## Inventory and dependency levels

The A page contains 17 items; the B page contains 2 worked examples. The assigned A-page originals plus local suppliers are in `research/quantum-computing-algorithms-60-2026-10-15-batch-55.pages.json`. Three intermediate results were created before their consumers: `lem-qa-controlled-cyclic-multiplication-clean`, `thm-qa-cyclic-group-power-evaluation-correctness`, and `lem-qa-dihedral-coset-state-fourier-law`. Two further local EEA items are needed for the DLP inverse and cost claims: `alg-qa-euclidean-modular-inverse` and `thm-qa-euclidean-modular-inverse-correctness-cost`.

| Item | Page | Level |
|---|---|---:|
| `alg-qa-euclidean-modular-inverse` | A | 0 |
| `rem-qa-number-theoretic-extension-scope` | A | 0 |
| `thm-qa-euclidean-modular-inverse-correctness-cost` | A | 1 |
| `lem-qa-dihedral-sieve-pair-combination` | A | 7 |
| `lem-qa-dihedral-coset-state-fourier-law` | A | 14 |
| `def-qa-finite-abelian-hidden-shift-problem` | A | 14 |
| `def-qa-finite-cyclic-discrete-logarithm-problem` | A | 15 |
| `thm-qa-hidden-shift-generalized-dihedral-reduction` | A | 15 |
| `alg-qa-dihedral-hidden-subgroup-sieve` | A | 16 |
| `lem-qa-controlled-cyclic-multiplication-clean` | A | 16 |
| `lem-qa-cyclic-dlp-hidden-subgroup` | A | 16 |
| `thm-qa-dihedral-sieve-scope` | A | 17 |
| `lem-qa-cyclic-dlp-annihilator-equation` | A | 17 |
| `alg-qa-cyclic-group-power-evaluation` | A | 17 |
| `thm-qa-cyclic-group-power-evaluation-correctness` | A | 18 |
| `alg-qa-finite-cyclic-discrete-logarithm` | A | 18 |
| `thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost` | A | 19 |
| `ex-qa-hidden-shift-dihedral-cosets` | B | 16 |
| `ex-qa-cyclic-discrete-log-fourier-sample` | B | 20 |

Levels use cross-batch assigned suppliers from current run manifests, not just same-page dependencies. The new EEA algorithm has no in-run suppliers (level 0); its correctness theorem depends on that algorithm (level 1). The local dihedral algorithm depends on the level-15 hidden-shift reduction and level-14 coset-state supplier (level 16); its scope theorem is level 17. The DLP chain terminates at level 19 and the worked sample at level 20. The A page remains below the 100-item cap.

## Mathematical conventions and proof findings

- Cyclic DLP uses a known exact generator order `q ≥ 2`, a fixed-length injective element code, explicitly supplied multiplication/equality oracles/circuits, and a distinct coherent function oracle only when supplied. For `f(u,v)=g^u x^v` with `x=g^a`, the fiber subgroup is `⟨(-a,1)⟩`, and the annihilator labels satisfy `d ≡ ac (mod q)`. Inversion is attempted only for `gcd(c,q)=1`; every returned exponent is checked by binary repeated squaring.
- The EEA procedure keeps the coefficient recurrence modulo `n`, handles `c=0` before division, proves `r_i ≡ s_i c (mod n)`, and uses the two-division halving argument to bound the number of divisions by `O(B)`. Binary division, multiplication and reduction then give `O(B^3)` bit operations for `B=ceil(log2(n+1))`.
- For hidden shift, the declared relation is `f(a)=g(a+s)`. The group coordinates use `(a,b)(a',b')=(a+(-1)^b a',b+b')`; right multiplication by `(s,1)` pairs `(a,0)` with `(a+s,1)`. The dihedral sieve fixes `x=(-1,0)`, `y=(0,1)` so `yx^s=(s,1)`, matching the local coset-state phase. The Z4 example explicitly checks that the left coset differs.
- The local Kuperberg variant fixes `m=ceil(sqrt(n−1))` across recursion and uses shortened final matching widths summing to `r−1`. Its list recurrence is rederived with `S_j=2^(3m−2j)`, `epsilon_j=2^(2j−2m)`, `b_j=2^(j−4m/3)`, `C_0=3`, and `C_{j+1}=(C_j−epsilon_j)(1−b_j)`. Maximal matching leaves at most one item per bucket; the Chernoff lower tail and the uninspected parity bit are proved locally. The final missing-target event is absorbed into the requested per-sieve bound. The base case `n≤5` is queried directly; only powers of two are claimed. No polynomial-time claim, arbitrary-N result, or generic finite-abelian hidden-shift result is asserted.
- The number-field/Pell and elliptic-curve topics remain contextual. Proos–Zalka’s cited elliptic-curve discussion does not provide the needed local associativity proof, so no such group law or algorithm is used.

## Source reading and disposition

Five full-text treatments support the A page: Childs’ complete relevant lecture-note sections (§5, PDF pp. 29–32; §13, pp. 63–66); de Wolf’s complete Chapter 6 ranges (§§6.1.1–6.1.2 and §6.2, PDF pp. 57–64); Shor’s complete DLP pages (PDF pp. 20–24); Proos–Zalka’s algorithmic body (PDF pp. 1–32; bibliography pp. 33–34 not read); and Kuperberg’s complete 11-page paper. The source ledger names supported items and gives each harvested result a disposition. No source was dropped and no fetch failed.

`source-fetch-check --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-55.source-coverage.json --stamp` passed 5/5 sources, 0 newly stamped; all five reused QA31 retrieval evidence. The exact local-text paths, full PDF/text SHA-256 values, locators, stamps, and per-result dispositions are in `batch-55.source-evidence.json` and `batch-55.coverage.json`.

## Supplier verification and unresolved inherited records

All 12 required page bodies are present and were inspected; the actual page excerpts and paths are in `batch-55.cross-batch-dependencies.json`. Direct item edges are also recorded with actual current excerpts and required claim hypotheses. Current supplier bodies were read before using them, including finite-abelian Fourier/annihilator results, QC circuit semantics, coherent XOR, register/tensor/partial-trace, measurement/outcome-law, QFT, reversible embedding, modular arithmetic, group-power and Chernoff suppliers.

Nine pre-existing Step 1 supplier records remain escalated. Their recorded reasons describe earlier body/page absence. Current bodies now exist for the affected interfaces, but this batch leaves every historical escalation untouched and does not treat the current body or any Step 1 record as independent acceptance. The retained escalations affecting this batch are:

- `def-qa-finite-abelian-hidden-subgroup-problem`;
- `alg-qa-finite-abelian-hidden-subgroup-sample` and `thm-qa-finite-abelian-hidden-subgroup-sample-law`;
- `def-qc-controlled-unitary-access` and `def-qc-cnot-and-control-target-order`;
- `alg-qa-exact-binary-qft-circuit`, `def-qa-qft-gate-cost-model`, and `thm-qa-exact-binary-qft-circuit-correct`;
- `def-qc-circuit-cost-model`.

These records affect the exact executed-HSP sample, controlled access, and the exact-QFT/cost interfaces. Consumers were still fully authored. The batch has six `ready` and thirteen `escalated` Step 1 records. The thirteen escalations were recorded because their dependency closure contained retained historical escalations. Their current bodies were inspected and are present; this batch preserves every escalation and leaves owner reconciliation of those old readiness records open. The six independent items whose prerequisites and contracts are complete are recorded `ready`.

The local carrier remains draft and unpublished. Step 1 authoring records document completeness and remaining dependencies only; they are not proof approval.

## Final scoped checks

- `node tools/proof-layout.mjs <19 assigned item files>`: 19 items, 43 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts <19 assigned item files> --json`: 19 files, 10 proof-bearing files checked, 0 failures. The nine non-proof-format definitions, algorithms, remark, and examples are not-applicable to the phase proof checker.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-55.proof-contracts.json --strict`: 19/19 checked, 0 errors, 0 warnings. Contracts contain exact supplier statements, phase-step inputs, all eight standard boundary dispositions, and explicit finite checks for both examples.
- `node tools/content-policy.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-55.pages.json`: 19 items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-55.coverage.json --require-destination`: 1 A page, 47 harvested results, 0 errors, 0 warnings.
- Scoped `node tools/rendercheck.mjs` on the 19 items and 2 pages: 21 files, 0 errors; all math and frontmatter parse.
- `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-55.source-coverage.json --stamp`: 5/5 verified, 0 newly stamped, 5/5 resolved.
- Scoped calculation over current run manifests: 19 Batch 55 item levels, 0 mismatches against `1 + max(in-run supplier levels)` (or zero with no in-run suppliers).
- Run-wide `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` exits 1 with `Stale batch dependency levels for quantum-computing-algorithms-60-2026-10-15; recompute before authoring`. The dispatch’s scheduling hash differs from the read-only shared dependency file’s input hash above; this batch does not rewrite the shared schedule.
- `node tools/step1-decisions.mjs record` wrote 19 batch-local records without `--owner`: 6 `ready`, 13 `escalated`. No upstream escalation was overwritten. Seven proof-bearing local items and six dependent definitions, algorithms, or examples remain escalated because of those retained upstream records. Their complete drafts and contracts remain available for reconciliation. After recording, `alg-qa-finite-cyclic-discrete-logarithm` was clarified to call the EEA routine and discard on its `NO_INVERSE` result; its existing `escalated` record was deliberately left untouched and should be refreshed by the owner if resolving that escalation.
- The run-wide `node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` could not load Step 3 because of unrelated malformed frontmatter at `items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md:24` (`verification: {, judge: ...`). It was left untouched.

## Active run and worktree boundary

- Read-only `.autopilot/quantum-computing-algorithms-60-2026-10-15/state.json` records stage `1-scaffold`, `finishedAt: null`, and four earlier run-level blockers: invalid pair `undefined`, invalid Batch 12 construction item identity, a YAML parse failure from an unquoted John Preskill title, and the owner repair/recertification hold. The adjacent cached `status.md` was last updated 2026-10-15 and lists Batch 55 as in flight. A prior status recomputation command hung and was interrupted; this handoff does not present the cached status as a fresh recomputation and does not consult any RESUME file.
- `git log -1` is `a267902a17` dated 2026-10-16. The worktree contains extensive unrelated edits and dispatch artifacts from other work; no files outside the assigned items, A/B pages, Batch 55 evidence, and Batch 55 Step 1 records were edited here.

## Owner focused DLP/hidden-shift repair, cycle 2

Native55 drained before edits. Original sources, all19 Step1 rows, evidence and pages are preserved under `.autopilot/owner-b55-cycle2-preimages/quantum-computing-algorithms-60-2026-10-15/`; original14 escalations are unchanged. Current logical consumer closure remains on this page and its two examples; no unwritten consumer is approved.

DLP now explicitly consumes the HSP sampler's supplied exact preparation/product-QFT circuits with full-register extensions. A direct function-XOR call starts its target at zero, not the arbitrary identity code. The separate group-power evaluator starts from enc(e). Its full XOR wrapper prepares enc(e), evaluates, copies w bits into an arbitrary target, reverses the evaluation using separately supplied inverse-constant controlled operations, then clears the identity-code preparation. It uses 4L controlled calls and at most3w extra X/CNOT gates. The compiled DLP bound is O((L^2 C_G+Lw+L^3)(1+ln(1/delta))); direct-oracle queries remain separately counted. No encoding-width absorption or uncharged inverse is inferred. The clean controlled-multiplication supplier now states correctly typed Boolean functions whose fixed-control slices are inverse permutations.

The published coset convention calls gH left and Hg right. All hidden-shift/sampling/sieve occurrences of the actual pairs {(a,0),(a+s,1)} now say left cosets; group laws, signs, characters, pair-combination and parity recursion are unchanged. The worked example preserves its contrasting right coset H(1,0).

Same-owner checks: cyclic hidden subgroup H=<-a,1> and annihilator d=ac are unchanged; the sampler uses the unchanged uniform annihilator law; verification remains sound; the clean evaluator's returned value and full XOR target actions are now distinct and costed. The dihedral reduction, exact coset-state calculation, pair-combiner law and sieve use the corrected gH interface. Their exact positive-sign power-of-two QFT use exposed the separate native30 loop-nesting ambiguity, assigned to its supplier owner; the QFT supplier owner has now repaired explicit per-j H/phase nesting and checked both affected55 temporal uses. Its exact new algorithm Definition quote is mirrored in55 after preserving the pre-mirror contract bytes. Shared current QC8/QC9/QC10/QC14 bodies exist and match these used clauses; old owner holds/draft status are not absence or independent approval. No tests, gates, hashes, recertification, readiness decisions or commits were performed.
