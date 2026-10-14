# Batch 2 authoring notes — MSF-02

## Design control and conflicts

The run-local owner direction names `research/plan-mathematical-statistics-track.md` as the controlling design for all 37 pairs. Its complete MSF-02 row in “Pair inventory and dependency-ordered designs” controls this pair's four-item A inventory, action-law proof obligation, three B examples, prerequisites and scope. The row also carries the source cautions: Martin's Theorem 5.2 and Hoff's p. 10 preference theorem are not copied as printed.

The alternate `research/plan-statistical-models-experiments-track.md` is a downstream Category-2 interface plan. Its “Planned Category-1 interfaces” row for MSF-02 names the three definition interfaces and omits `lem-procedure-action-law-is-measurable`; that is an interface summary, not a replacement authoring inventory. The owner direction and controlling track design therefore resolve the difference in favor of the lemma and the full MSF-02 A/B scope.

`research/plan-spec.json` agrees with the pair identities, titles, kinds, category, orders 1846–1847, and A-page requirements in the batch manifest. Its empty `items` arrays are the pre-authoring plan projection, not a competing inventory. No substantive plan-spec conflict was found. No shared plan, published item, engine state or verdict was edited.

## Inventory, dependencies and levels

The batch manifest owns four A items and three B items. The A page requires the in-run `statistical-experiments-models-and-identifiability` page plus the external `measurable-functions-and-simple-approximation` and `conditional-distributions-and-regular-conditional-probability` pages. The B page requires only its A companion. The B items remain leaves.

| Item | Level | In-run suppliers |
|---|---:|---|
| `def-randomized-procedure-as-a-markov-kernel` | 1 | `def-statistical-experiment` (batch 1, level 0) |
| `lem-procedure-action-law-is-measurable` | 2 | `def-statistical-experiment` (0), `def-randomized-procedure-as-a-markov-kernel` (1) |
| `def-statistic-and-estimator` | 3 | `def-statistical-experiment` (0), `def-estimand-on-a-statistical-model` (2) |
| `def-randomized-test` | 3 | `def-statistical-experiment` (0), `def-randomized-procedure-as-a-markov-kernel` (1), `lem-procedure-action-law-is-measurable` (2) |
| `ex-deterministic-statistic-as-dirac-kernel` | 4 | `def-statistic-and-estimator` (3), `def-randomized-procedure-as-a-markov-kernel` (1) |
| `ex-coin-flip-randomized-test` | 4 | `def-statistical-experiment` (0), `def-randomized-procedure-as-a-markov-kernel` (1), `lem-procedure-action-law-is-measurable` (2), `def-randomized-test` (3) |
| `cex-nonmeasurable-rule-is-not-a-statistic-or-test` | 4 | `def-statistical-experiment` (0), `def-statistic-and-estimator` (3), `def-randomized-procedure-as-a-markov-kernel` (1), `def-randomized-test` (3) |

All remaining direct dependencies are external mathematical suppliers and are recorded in both the item carriers and `mathematical-statistics-foundations-37-batch-2.pages.json`. The procedure definition explicitly adds the measurable-space supplier. The action-law proof explicitly adds the finite-range simple-function definition and measurable-closure proposition. The randomized-test definition explicitly adds the kernel and sigma-algebra suppliers used to specify its Borel target and full binary action sigma-algebra. These additions do not change the item levels or batch edges.

The in-run item graph for batches 1–2 is acyclic, and all seven assigned labels agree with the computed levels. Batch 2 remains level 1 with prerequisite batch 1. The worker task supplied scheduling input `4ac773619bf67b0bf9f2906a3e1587567c1ec3367e8bd46a1c3215d9e984e95e`; the final read-only recomputation after manifest edits produced input SHA-256 `d9cb3d11f1507aaba2928a06517a5ecf25476f19421088634b46cb3e12f56bbe`. The stored run-level scheduling artifact is stale and the owner/engine must refresh it before dispatch. The full-run item-level command also reports empty inventories in other batches, so the batch-1/2 dependency closure was checked separately and passed. No cycle or missing prerequisite occurs in this pair.

The current cross-batch dependency input retains the page edge to MSF-01 and item edges to `def-statistical-experiment` and `def-estimand-on-a-statistical-model`. Their exact experiment and target clauses were inspected; the estimator does not add a parameter sigma-algebra or assert that the target is measurable. These records remain `open` for independent review.

## Source reading and dispositions

The A page has three independent full lecture-note treatments. I inspected the relevant passages in the full-text [Ryan Martin *Lecture Notes on Advanced Statistical Theory*](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf), §5.1, PDF pp. 100–102; [Peter Hoff *Statistical Decision Problems*](https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf), PDF pp. 2–8 and p. 10 of the 13-page note; and [Peter Kempthorne's MIT 18.655 Lecture Note 6](https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf), PDF pp. 14–15 of the 21-page unit. These support the measurable data-map convention, probability-valued randomized rules, point-mass deterministic rules, and the binary rejection-probability interpretation. They do not replace local proofs.

Martin's Theorem 5.2 uses an auxiliary-uniform representation and makes a randomization-removal claim beyond this inventory; it is explicitly out of scope. Hoff's p. 10 display repeats the same expectation on both sides and is malformed; it is out of scope. Kempthorne's conditional-action example is contextual, while its equal-risk consequence is not used. The local action-law lemma proves its full measurable and marginal-law claims with simple approximations, kernel evaluations, and monotone convergence; no kernel integration theorem is imported as an unproved shortcut.

The B page carries Martin and Hoff as context for its deterministic point-mass and binary-test examples. Those source entries are separately recorded in coverage; each source result is mapped to an item and locally verified. Across the two pages, the coverage file records 15 harvested results, each with an explicit disposition. There were no retrieval failures, retries, drops, or owner escalations. `source-fetch-check --stamp` verified all 5 page-source entries; all had existing fetch stamps, so none was newly stamped by this run.

The A-page coverage checker retains one advisory low-yield warning: 4 of 11 harvested results are marked `included`. The other seven are explicitly `inline` or `out-of-scope`; in particular, no unproved risk-improvement result was copied to increase yield. This is a source-disposition advisory for the later Alpha review, not a missing mathematical prerequisite.

## Mathematical review

I inspected the actual MSF-01 experiment and estimand definitions and the relevant published measurable-function, kernel, measure, probability, expectation, simple-integral, monotone-convergence, measurable-closure, Dirac-measure and finite-sigma-algebra suppliers. The kernel's sections are pointwise probability measures and its event evaluations are measurable; parameter measurability is never assumed. The Dirac construction is defined only at the displayed statistic value and proves its section and evaluation clauses separately. The coin example checks the four binary events for every $p\in[0,1]$, including both endpoints. The counterexample uses a valid point-mass experiment on a trivial sigma-algebra; measurability remains a pointwise property of the data map even at the null point.

The action-law proof has a direct, choice-free route. It first normalizes $Q_\theta$ and proves countable additivity by applying monotone convergence to measurable finite partial sums. It proves $h_g$ measurable by writing each simple approximant as a finite sum of indicators, integrating against kernel sections, and passing to the increasing limit. It establishes the iterated identity for indicators, extends it to nonnegative simple functions, and then applies monotone convergence under $Q_\theta$ and $P_\theta$. Extended values are allowed; no subtraction of infinities, common parameter-space measure, auxiliary random seed, or choice axiom is used.

No significant prerequisite gap, unresolved mathematical uncertainty, cycle, or page-capacity issue was found. The A page has 4 items and its B companion has 3, both below the 100-item cap.

## Consumer check

The procedure Definition now states its action space as a measurable space and names the corresponding supplier; its kernel meaning and parameter-free convention are unchanged. Its current direct consumers—the action-law lemma, randomized-test definition, Dirac example, coin example, and measurability counterexample—were checked in this batch. The randomized-test Definition now names the trace Borel structure on $[0,1]$ and gives the preimage argument; its current consumers, the coin example and counterexample, were checked. The action-law statement was not changed; its current consumers, the randomized-test definition and coin example, remain consistent with the locally proved event and simple-function identities. `def-statistic-and-estimator` was not changed.

The current source search found no out-of-batch item or published consumer. Planned consumers in `plan-statistical-models-experiments-track.md` include SME-12/SME-13 for randomized procedures, SME-12/SME-33 for randomized tests, and SME-01–03 plus other named model pairs for statistics/estimators. These are later planned consumers, not current carriers; the additions preserve the planned measurable-kernel, binary-test, and named-target interfaces. MSF-03 is the next planned A-page consumer in the controlling design. Its carriers are not present yet.

## Scoped checks and blockers

- `content-policy.mjs` on the batch manifest: 7 items, 0 errors, 0 warnings.
- Scoped `depcheck` on the seven assigned items and their prerequisite closure: passed; selected page and prerequisite-cycle checks cover 320 prerequisite items and 129 pages.
- `precheck.mts`: all 4 proof-bearing items passed after adopting the canonical phase numbering for the action-law lemma.
- Strict `proof-contract.mjs`: 7/7 entries checked, 0 errors, 0 warnings. Contracts carry current numbered steps, exact supplier sections, cited inputs, boundary anchors and finite checks.
- `proof-layout.mjs` on the four edited item files: 4 items, 9 numbered steps, 0 defects. `rendercheck.mjs` on all seven items and both pages: 9 files passed, no errors.
- `coverage-checklist.mjs`: 2 pages, 15 harvested results, 0 errors and 1 low-yield advisory warning.
- `source-fetch-check.mjs --stamp`: 5/5 entries fetch-verified, 0 newly stamped.
- Batch-1/2 item dependency closure: 0 errors; batch-2 computed levels are 1–4 as shown above. The full-run item-level check is blocked by empty inventories in other batches. Full-run batch-dependency `check` reports the stored schedule stale after this manifest changed; read-only recomputation confirms batch 2 remains level 1 and the engine should refresh the artifact.
- Full-run `proof-contract-coverage` cannot load `gaussian-orthogonal-decomposition-and-quadratic-forms` because that other pair currently has an empty inventory. The assigned batch's strict proof-contract check passes independently.
- `step1-decisions.mjs record`: all seven assigned items are `ready`; a hash-bound recheck reports 7/7 current.

These are Step-1 construction records only; they do not grant independent review, gate approval, or a run transition.
