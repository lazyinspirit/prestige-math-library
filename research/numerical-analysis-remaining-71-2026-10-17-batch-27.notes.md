# Batch 27 authoring notes — Gaussian basis integral recurrences and Boys error

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `gaussian-basis-integral-recurrences-and-boys-error` / `gaussian-basis-integral-recurrences-and-boys-error-examples`  
Batch dependency level: **1**; prerequisite batch: **25**.  
Scheduling input SHA-256: `edb8fcabda06abceee2874a2745fd1fbbc350dbac30d49fb8bd57c8f21caf24e`.

## Controlling design and plan comparison

The complete PC-GINT design was read at `research/plan-numerical-linear-track.md` §PC-GINT (lines 2550–2584), together with the current owner authoring direction and `research/plan-spec.json`. Scope retained: finite Cartesian Gaussian primitives and contractions; Lebesgue overlap, kinetic, attraction and two-electron Coulomb integrals; product/moment/derivative and Hermite recurrences; Boys small, bounded and large argument enclosures; recurrence error propagation; finite certified work/status rules; Cauchy–Schwarz screening with accumulated error; and the five assigned B examples. No Hartree–Fock or self-consistency postulate is asserted. The coefficient functional is explicitly finite-dimensional and real on its energy/gradient branch.

There is a stale interface conflict. The PC-GINT narrative design lists PC-SFUN, NA-12 (`composite-quadrature-rules`) and NA-13 (`gaussian-quadrature`) as proposed same-frontier page edges, and also mentions the matrix-norms page as existing page context. The controlling plan-spec row and assigned task declare only `requires: [stable-special-function-recurrences-and-certified-evaluation]`; the current batch scheduling input likewise assigns only prerequisite batch 25. I followed the controlling plan-spec/task graph: the manifest and A page require PC-SFUN only. The bounded positive midpoint enclosure is proved locally, so no NA-13 result is assumed; no proof consumes NA-12 or the matrix-norms page. These omitted narrative-only edges are recorded here for owner reconciliation, not added to the graph. The design's listed Gaussian product, Boys, contraction, screening, and no-HF claims are retained.

## Inventory and dependency levels

The manifest was enumerated and dependency levels computed before carriers were authored. A second exact-fact/dependency audit found eight direct prerequisite edges across six items that had been used in Facts or proof inputs but omitted from the first manifest version. Those edges were added to both manifests and carrier frontmatter, then the level calculation was recomputed. All recorded levels remain correct; there are no local cycles. Levels count suppliers in the active run, including batch 25; published suppliers outside the run do not increase the level.

| Level | A-page items |
|---:|---|
| 0 | `def-cartesian-gaussian-primitives-and-contractions`; `def-boys-function-and-coulomb-auxiliary-recurrence`; `def-finite-gaussian-basis-variational-energy-and-gradient` |
| 1 | `thm-gaussian-product-theorem-and-polynomial-shift`; `thm-boys-integral-identities-series-and-incomplete-gamma`; `lem-boys-positive-midpoint-enclosure`; `lem-cartesian-gaussian-moments-and-parameter-derivatives`; `thm-gaussian-contraction-error-energy-gradient-bounds`; `def-hermite-gaussian-coulomb-auxiliary-functions` |
| 2 | `thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence`; `thm-cartesian-gaussian-integrals-absolutely-convergent`; `lem-boys-small-taylor-remainder`; `lem-boys-incomplete-gamma-large-t-tail-bound`; `lem-boys-upward-downward-recurrence-error-amplification` |
| 3 | `thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences`; `thm-positive-coulomb-bilinear-cauchy-schwarz-screening`; `thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas` |
| 6 | `alg-certified-boys-finite-budget-branch-evaluation` |
| 7 | `thm-boys-branch-evaluation-enclosures-are-sound` |
| 8 | `alg-finite-gaussian-basis-integral-recurrence-evaluation` |
| 9 | `thm-finite-gaussian-integral-evaluator-soundness-and-screening-error` |

The five B-page examples are `ex-same-center-s-orbital-integrals` (level 4), `ex-small-t-upward-boys-cancellation` (level 8), `ex-highly-contracted-gaussian-coefficients-amplify-error` (level 2), `ex-overlap-near-linear-dependence` (level 2), and `ex-screened-coulomb-blocks-accumulate-error` (level 10). The A page has 21 items and the B page 5 examples, below the 100-item page cap.

The final direct item dependencies are recorded in `batch-27.pages.json` and every carrier's `deps`. In particular, the exact supplier audit added `thm-substitution-for-improper-integrals` to the Gaussian moment lemma; the Boys branch soundness theorem directly cites the Boys identity theorem; the finite evaluator soundness theorem directly cites the raising/kinetic theorem and Gaussian moments; the same-center example directly cites Gaussian moments and the product theorem; the small-T example directly cites the Boys identity theorem; and the accumulated-screening example directly cites the finite evaluator algorithm.

## Supplier and axiom audit

The actual batch-25 page and item bodies were inspected, including the full relevant reasoning for `def-certified-evaluation-result-contract`, `alg-certified-gamma-loggamma-evaluation`, and `thm-certified-gamma-loggamma-enclosures`; the current real elementary range theorem was also checked. The consumers state the necessary domains: the Gamma request is at an exact positive half-integer, which is inside the slit-plane domain; only a `success` enclosure is used; absolute-radius tests, zero exclusion for any relative claim, and finite-cap `inconclusive`/`domain`/`range` outcomes are preserved. Exact supplier excerpts, raw file hashes, consumers and hypotheses are in `batch-27.cross-batch-dependencies.json`. The PC-SFUN carriers currently remain `draft`; the evaluation-contract definition has `precheck: n/a`, and the Gamma evaluator and its soundness theorem currently show `precheck: pass`. Those interface/precheck observations do not constitute acceptance or independent approval. The pair proceeds from the available actual bodies and records the outstanding status without claiming owner readiness of those suppliers.

Every assigned item declares `axiom_use`. All are choice-free: finite polynomial/tensor algebra, finite loops, explicitly bounded scalar series, and the named Lebesgue theorems (Tonelli, Fubini, dominated convergence) over explicit integrable majorants. The Coulomb positivity proof uses a countable power-series expansion and Tonelli/Fubini, not a choice principle. No Zorn, dependent selection, or Hartree–Fock assumption is used. The proof of positivity treats the complex sesquilinear Coulomb form; the variational energy and gradient branch states its separate real-matrix hypotheses.

## Source reading and retrieval record

Two independent complete mathematical treatments support the A page, including full lecture notes:

- Trygve Helgaker, *Molecular Integral Evaluation*, full 41-page 2008 lecture-note PDF: `https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf`. The complete relevant derivations on primitive definitions/derivatives, Gaussian products and overlap/kinetic recurrences, Boys identities, Hermite Coulomb reductions and screening were inspected (PDF pp. 3–9, 11–16, 18–27 and 35). Retrieved PDF SHA-256 `bf4051582a4438abc414ba520724b91eb89982018f2e6963d2ae88a2143d21fb` (215,897 bytes, 41 pages).
- L. E. McMurchie and E. R. Davidson, *One and Two Electron Integrals over Cartesian Gaussian Functions*, full 23-page UCRL-13791 author report (1976): `https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf`. Complete relevant reasoning in §§II–IV and Table 1 (PDF pp. 5–20) was inspected. Retrieved PDF SHA-256 `2e9c6f083f075a07352f0206c1eed1f356ecd5ddf01650febe7b675a60a6c8fb` (493,126 bytes, 23 pages). The cited item source is this full 1976 report, not the paywalled 1978 journal copy.

`source-fetch-check --stamp` on the final coverage file reported **3/3 fetch-verified, 3 newly stamped, 3/3 resolved, 0 documented drops**. Coverage maps every harvested result to supported item IDs and an included/out-of-scope disposition. Mathematical error certificates and local singular-integrability proofs are proved here rather than attributed to historical floating-point implementations.

Retrieval history is preserved in `batch-27.coverage.json`. The OSTI direct report URL timed out; a full same-author UCRL-13791 report was located at UNT and successfully read. The Obara–Saika publisher PDF returned HTTP 403. A search-linked PDF was inspected and identified as a different 2020 doctoral thesis; it is recorded as a false match/out of scope, not as the Obara–Saika paper. The Wiley book chapter page yielded metadata only. The original 1978 McMurchie–Davidson publisher copy was paywalled; the distinct full 1976 author report was used instead. These candidate URLs are retained as unharvested candidates, not falsely stamped sources. No failed source is used as a premise or remains necessary for mathematical coverage, so no source was marked `dropped` and no `source_resolution` waiver was made.

## Mathematical corrections and finite checks

The proofs use the pair-density convention `f_(phi,psi)=conjugate(phi) psi` and the Hermitian form `C(f,g)=integral integral conjugate(f(x))g(y)/|x-y|`; the positive-form/Cauchy–Schwarz proof is therefore valid for complex contractions. The variational error theorem separately assumes real C and D. Screening weights the primitive-basis quartet by `W_ab W_cd`, where `W=C D C^T`, and reports the accumulated weighted Cauchy–Schwarz bound. A first draft that weighted quartets directly by orbital-space D was corrected before finalization.

Exact finite calculation records in the proof contracts cover the same-center s formulas, the small-T recurrence radius amplification, attained tensor error bounds for an aligned perturbation, the nearby-exponent 2-by-2 Gram matrix, and the three-block screening budget. These calculations check only their displayed finite inputs and do not replace the analytic proofs. Other items are definitions, procedures, or general theorems; no separate finite check is applicable.

## Runtime observation

The on-disk autopilot status was recomputed twice on 2026-10-17; the latest at `2026-10-17T12:53:02.730Z` remains `running` at `1-scaffold`, reports 33/70 units covered, no active writer, and an owner repair/recertification blocker in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`. The status still lists unit 27 among the missing scaffold units and defers artifact completion until authoring coverage is complete and writers drain; this pair has completed its local carriers and records, but the engine has not credited it at this snapshot. The latest inspected Git commit is `5102737bd0923c2a1404730674b2517df6469c90` (`2026-10-17T23:38:20+11:00`, “Match owned supplier-ledger terminal record spelling”). No RESUME file was used as a live-status source. This pair has not changed engine state, shared plans, verdicts, or another pair's files.

## Scoped checks and readiness

Final scoped results:

- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-27.proof-contracts.json --strict`: **pass**, 26/26 items, 0 errors and 0 warnings. The contracts include exact supplier excerpts, every final proof step and its input tags, all eight boundary dispositions, and exact finite checks for the five B examples.
- `node tools/tsx-run.mjs tools/precheck.mts <26 assigned item paths>`: **pass**, 20 proof-bearing items checked, 0 failures; the six definitions/procedures are not phase proofs. `node tools/proof-layout.mjs <26 assigned item paths>`: **pass**, 26 items, 68 steps, 0 defects.
- `node tools/rendercheck.mjs <26 assigned item paths and both pages>`: **pass**, all 28 files parse under the renderer's YAML and KaTeX checks. Focused `node tools/depcheck.mjs --items-file /tmp/pcgint-items.json`: **pass**, 26 selected items and prerequisite/page-cycle closure over 1,163 items and 153 pages, with zero warnings.
- The independent batch-25+27 level recomputation **passes** for all 73 in-run items; all 26 assigned carrier labels and both page inventories match their manifests. The official `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` parses the run and reports only 34 `empty scaffold inventory` errors on 17 unrelated page pairs; it reports no batch-27 level error.
- The final no-stamp `source-fetch-check` reports **3/3 fetch-verified, 3/3 resolved, 0 drops**. The earlier required `--stamp` call reported 3 newly stamped sources.
- `node tools/step1-decisions.mjs record` was run for all 26 assigned items without `--owner`; all 26 `ready` records were written. A focused hash-current check using the same `step1Decision` logic confirms 26/26 current. The full `step1-decisions.mjs check --run` sees 1,055 run items, 638 ready, and remains open on other items and empty inventories. These records state authoring readiness only; they do not approve proofs, accept PC-SFUN suppliers, or clear the run's owner repair/recertification hold.

The autopilot remains in `1-scaffold`; its owner repair/recertification hold and other missing units remain outside this pair. The engine does not yet credit unit 27 despite the local carriers and readiness records. Only this assigned pair was edited; other batch owners retain the unrelated empty inventories and run-level holds.
