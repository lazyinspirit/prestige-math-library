# Step 5A — group d (batches 11, 12, 4)

Run `phase-2-next-21`, role alpha, label `5a-d`. Owned scope: the 42 + 35 + 53 = 130
authored items and the 4 + 4 + 4 = 12 A/B pages recorded in
`research/phase-2-next-21-step5-scope-{11,12,4}.json`.

## Decisions

142 decisions (`authored:<batch>:<id>`, route `item` or `page`):

- 123 `accepted` with empty `defect_ids`.
- 19 `repaired` with `repair_confidence: 1` and closed defect-ledger rows.
  The decisions name 25 fixes: the original four substantive proof repairs
  and fourteen locator corrections, plus seven owner follow-up defects below.

No `escalated` decision. No item was withdrawn, no page or pair was added.
The Batch-11/12 manifests, shared plan rows, and two Batch-11 direct dependency
carriers were synchronized for the repairs; page item orders and `requires`
lists are unchanged. The owner renewed A685's Step-3a scope receipt.

## Substantive repairs

1. `thm-two-step-generic-factorization-and-ccc` — step 2.1
   (`p2-next21-5a-d-two-step-ccc-limit-direction`, fatal, fixed). The authored step
   claimed that ccc of `P` yields a condition forcing uncountably many `p_alpha` into
   the projected generic. That intermediate claim is false: for any generic `G` the
   index set `{alpha : p_alpha in G}` is countable in the extension, because two of
   its members evaluated in the ccc quotient are incompatible. Replaced by the
   correct argument: countability of the index set in `V[G]`, preservation of
   `omega_1`, density of the conditions forcing a bound on the index-set name, ccc of
   `P` keeping a maximal antichain countable, and the resulting uniform bound
   contradicted by any index at or above it. The owner follow-up below replaced
   the remaining external-generic wording with a syntactic forcing-name proof.

2. `thm-ma-small-unions-of-null-sets` — step 1.2
   (`p2-next21-5a-d-null-union-ccc-slack`, nonfatal, fixed). The authored ccc
   argument asked for approximations "with error below a common positive slack";
   no such uniform slack exists when the measures of the conditions approach
   epsilon, and with a uniform slack the compatibility claim does not follow.
   Replaced by per-condition inner rational approximations `W` subset `U` with
   `m(U \ W) < (epsilon - m(U))/2`, under which two conditions sharing `W` have
   `m(U union V) < epsilon`; only countably many `W` occur. Steps 1.1, 2.1, 3.1
   verified unchanged.

3. `thm-fraenkel-mostowski-permutation-model` — step 1.1
   (`p2-next21-5a-d-fm-atom-fixation`, nonfatal, fixed). "All atoms and pure sets
   are fixed by every permutation" is false for atoms. Replaced by the correct
   reason: every atom is symmetric because `fix_G({a})` fixes it, and pure sets are
   fixed by every permutation; hence `A union K` is contained in HS and the pure
   kernel is unchanged.

4. `thm-hereditarily-symmetric-interpretations-form-a-zf-model` — step 2.1
   (`p2-next21-5a-d-hs-model-separation-route`, nonfatal, fixed). The authored
   justification of full Separation and Replacement ("finite satisfaction recursion
   coded inside a sufficiently large containing set") cannot evaluate unbounded
   quantifiers, so it did not license the schema instances. Rewrote the criterion
   step in the standard form used by the cited treatments: containing members from
   almost universality plus `Delta_0`-Separation realize the set-forming operations,
   whose closure with almost universality gives Comprehension, and Replacement then
   follows by applying Comprehension to the definable graph inside a containing
   member. The owner follow-up below supplied a choice-free rank bound and
   corrected the criterion and name-pair details.

Contract entries for the four original proof repairs were regenerated with
`tools/regen-contract-entries.mjs` and initially re-merged with
`tools/merge-proof-contracts.mjs`. The owner follow-up regenerated the new
Batch-11/12 citation and derivation carriers and updated affected boundaries
and risk notes. The owner re-merged the shared contract and checked it strictly.

## Owner follow-up: set-sized forcing and choice-free symmetric models

Seven further defects were found and fixed in the same existing items; all
seven have unique `p2-next21-5a-owner-*` rows in the append-only ledger and
confidence-1 repaired decisions.

| item | defect and repair |
|---|---|
| `def-two-step-forcing-iteration` | Karagila Definition 6.1 warns that unrestricted local-name pairs may form a proper class. The repaired ZF set carrier uses the immediate-subname closure `U` of `dom(Qdot)` and the set `R` of names over `U×P`; AC maximal-antichain mixing proves every local condition has a forced-equal `R` representative. The largest-condition hypothesis on `P` is explicit. |
| `thm-two-step-generic-factorization-and-ccc` | The previously accepted bound argument still fixed an external generic without assuming a generic through every condition. The final Step 1.3 (formerly Step 2.1, renumbered to satisfy precheck) uses a syntactic `P`-name for active indices, `R`-valued common-extension witnesses, preservation of `omega_1`, the published no-new-ordinals theorem to decide a ground bound, and a countable maximal antichain for one uniform bound. |
| `def-finite-support-forcing-iteration` | A ZF definition could not select top names at every stage from mere per-stage existence, and arbitrary names at limit coordinates recreated a proper-class carrier. The stage data now supply a distinguished `R_alpha`-valued top name; each limit coordinate lies in `R_alpha`, and Replacement forms the all-top function without Choice. Statement provenance is `ai-altered`. |
| `ex-two-step-cohen-iteration-is-a-product` | The old proof treated check-name pairs as the whole iteration. They form a dense suborder of the bounded-name carrier, and that suborder is isomorphic to the two-coordinate Cohen forcing; this proves the stated forcing equivalence. |
| `thm-hereditarily-symmetric-interpretations-form-a-zf-model` | In the ZF ground, a definable least HS-name-rank function on `dom(xdot)×P` has an ordinal bound by Replacement; the truth lemma supplies a common condition for each actual member. This proves almost universality relative to `M[G_0]` without choosing representatives. Step 1.3 now uses name-first pairs `(tau,p)` from `dom(adot)×P`. For full ZF, almost-universal containers and bounded cuts produce exactly Jech's eight Gödel operations; his transitive-class criterion then yields full Comprehension and Replacement. An arbitrary ambient subset is never assumed `Delta_0`-definable. These are three separately recorded defects. |

The two-step theorem gained one direct earlier-page published dependency,
`thm-forcing-preserves-ordinals`. Direct finite-support consumers
(`lem-iteration-restrictions-and-complete-embeddings`,
`thm-finite-support-iterations-preserve-ccc`,
`lem-finite-support-iteration-size-bound`) and the transitive bounded-capture
consumer were re-read against the new carrier; their restriction, top-padding,
delta-system and coded-size arguments remain sound. The A685 page introduction
still accurately describes the sequence. The owner mirrored the five affected
Batch-11/12 manifest rows into `plan-spec`, verified 42/42 splice rows, and
renewed A685's Step-3a scope receipt; 21/21 pairs remain closed.

## External-locator corrections (Step-3-class drift, repaired in place)

Reading the cited PDFs showed that several `sources.references` locators written at
3b point at different results than the displayed statements. Each was corrected to
the source that states the displayed form; the run's own Step-3 coverage locators
agree with the corrections. Fourteen defect rows
`p2-next21-5a-d-loc-*` (`citation-inaccurate`, all `fixed`; one `polish`, the rest
`nonfatal`) record evidence and the replacement:

| item | cited | corrected to |
|---|---|---|
| `thm-closure-distributivity-and-no-short-sequences` | Karagila Thms 4.2–4.3 | Thm 4.16 and Cor 4.17 |
| `def-nice-name-for-a-subset` | Karagila Def 3.32 | nice names in the proof of Thm 3.31 |
| `thm-nice-name-reduction-and-counting` | Karagila Thm 3.33 | proof of Thm 3.31 |
| `thm-cohen-forcing-controls-the-continuum` | Karagila Thm 3.35 (does not exist) | Thm 3.31 and Cor 3.33 |
| `def-finite-support-forcing-iteration` | Karagila Def 6.6 | Def 6.11 and Exercise 6.12 |
| `thm-two-step-generic-factorization-and-ccc` | Karagila Thms 6.4–6.5 | Thms 6.4 and 6.9 |
| `lem-iteration-restrictions-and-complete-embeddings` | Karagila Prop 6.7 | Def 6.11 (initial segments) with Thm 6.4 |
| `lem-finite-support-iteration-size-bound` | Karagila Lemma 7.11 | Lemma 7.12 |
| `lem-ma-reduction-to-small-ccc-orders` | Karagila Lemma 7.9 | Lemma 7.11 |
| `thm-rasiowa-sikorski-and-ch-implies-ma` | Karagila "Thm 7.2" | Exercise 7.2 and Thm 1.14 (Rasiowa–Sikorski) |
| `def-forcing-name-automorphism-action` | Karagila Def 10.11 | Defs 10.1 and 10.5 |
| `lem-symmetry-lemma-for-forcing-automorphisms` | Karagila Lemma 10.12 | Lemma 10.8 (Symmetry Lemma) |
| `lem-doob-upcrossing-inequality` | van der Vaart Lemma 2.19 | Durrett Thm 4.2.10 |
| `thm-doob-submartingale-convergence` | van der Vaart Thm 2.21 | Durrett Thm 4.2.11 |

The last two are substantive, not cosmetic: van der Vaart's Lemma 2.19 is the
supermartingale dual with the negative part, and his Theorem 2.21 assumes
`sup_n E|X_n| < infinity`, while the items display the submartingale forms with
`E[X_n^+]`. Durrett Theorems 4.2.10 and 4.2.11 state exactly the displayed
statements with the same proofs. Locators that are merely vague but true
(chapter-level citations, `rem-easton-support-for-continuum-patterns`,
`lem-generalized-delta-system-for-small-supports`, the Kunen references in the
formal items) were left untouched.

## Source evidence actually read

- Asaf Karagila, *Forcing & Symmetric Extensions* (author-hosted 2023 PDF): complete
  Chapter 3 §§3.1–3.4 (Definitions 3.17, 3.20, 3.27; Theorems 3.19, 3.22, 3.28,
  3.31; Corollaries 3.30, 3.32, 3.33), Chapter 4 §§4.1–4.2 (Definitions 4.1, 4.6,
  4.11, 4.14; Theorems 4.9, 4.16; Corollary 4.17), Chapter 6 §§6.1–6.2 (Definition
  6.1, Theorems 6.4, 6.6, 6.7, 6.9, Definition 6.11, Exercise 6.12, Theorem 6.14),
  Chapter 7 §§7.1–7.3 (Definition 7.1; Propositions 7.4–7.6; Theorems 7.7–7.10;
  Lemmas 7.11–7.13), Chapter 10 §§10.1–10.4 (Definitions 10.1, 10.5, 10.12–10.16;
  Lemma 10.8; Theorem 10.17; Theorem 10.25). Chapter 7.10/7.11–7.13 were read in
  full because the omega-two iteration, the capture lemma and the size bound
  reproduce them.
- Thomas Jech, *The Axiom of Choice*: §4.1–4.5 (Theorem 4.1 and the basic, second
  Fraenkel and ordered Mostowski models), Lemmas 5.13/5.15/5.17/5.19 and Theorem
  5.20 (the second Cohen model of pairs of sets of reals, read because
  `thm-atom-free-socks-model-has-countable-pairs-without-choice` mirrors its
  swap argument), Theorem 3.2 (the transitive-class criterion and its
  Gödel-operation formula induction), Theorem 5.14, and Chapter 6 §6.1
  (First Embedding Theorem 6.1)
  with the surrounding support-model discussion.
- Rick Durrett, *Probability: Theory and Examples* (5th edition draft): §4.2
  (Theorems 4.2.7, 4.2.8, 4.2.10 upcrossing inequality, 4.2.11 convergence
  theorem, 4.2.12 nonnegative supermartingale corollary) and §4.7 (backwards
  martingale Theorems 4.7.1–4.7.2).
- Aad van der Vaart, *Martingales, Diffusions and Financial Mathematics*: §2.4
  (Lemma 2.19 supermartingale upcrossing), §2.5 (Theorems 2.21–2.25), §2.6
  (Theorem 2.30 reverse martingales), §2.3 (Definition 2.27, Definition 2.36,
  Exercises 2.39–2.41, Theorem 2.42), read to fix the two locators above and to
  confirm the reverse-martingale and optional-stopping statements.

## Local suppliers

No new item was created. The owner follow-up added the already published
`thm-forcing-preserves-ordinals` as a direct supplier of the two-step ccc
theorem, and propagated the set-sized two-step carrier into the existing
finite-support definition. Batch-11/12 manifest rows and matching plan rows
changed; contract scope and page order did not. `depcheck` and `fwdcheck`
verify the resulting graph.

## Shared-plan / Phase-2 amendments

The owner mirrored the five repaired Batch-11/12 manifest rows into the shared
plan. The one new dependency edge is from the two-step ccc theorem to the
earlier published ordinal-preservation theorem. A685's owner scope decision
was renewed for the finite-support statement precision. No page, pair, item
ID, page order or `requires` prerequisite changed.

## Published findings

No new published-item defect was identified in the dependency closure of these
three batches, so nothing was added to
`research/published-consumer-supplier-ledger.md`. Published interfaces actually
checked during this read: `def-finite-delta-system`,
`thm-regular-uncountable-finite-delta-system`, `thm-cofinality-basics`,
`cor-cardinal-absorption`, `thm-forcing-theorem`,
`thm-generic-extensions-satisfy-zf-and-zfc`,
`thm-check-name-evaluation-and-generic-reconstruction`,
`thm-bounded-predictable-transforms-preserve-martingales`,
`cor-nonnegative-predictable-transforms-preserve-submartingale-gains`,
`lem-multistep-martingale-characterization`,
`thm-uniform-integrability-of-conditional-expectations-of-one-variable`,
`lem-second-order-characteristic-function-expansion`,
`cor-characteristic-function-criterion-for-weak-convergence`,
`thm-converging-together-lemma`, `thm-well-ordering-theorem`,
`thm-dedekind-infinite-iff-countable-subset`, and the finite-fragment formal
chain (`lem-forcing-transfer-for-finite-zfc-fragments`,
`thm-formal-consistency-transfer-by-forcing`,
`thm-formal-consistency-of-zfc-plus-gch-from-zf`,
`lem-interpretation-translates-finite-derivations`,
`thm-montague-levy-finite-reflection`,
`cor-countable-transitive-models-of-fixed-zfc-fragments`). Their statements and
hypotheses support the uses made of them. In particular,
`thm-ma-small-unions-of-meagre-sets` avoids the already-recorded defective
published sigma-ideal proposition, as its proof states.

## HIGH/CRITICAL risk reviews

Sixty-two `risk_review` dispositions now appear in the group-d batch
contracts (20 in batch 11, 12 in batch 12, 30 in batch 4), including the
`lem-doob-upcrossing-inequality` locator correction. After the owner follow-up,
`def-two-step-forcing-iteration` routes HIGH (7) and
`thm-hereditarily-symmetric-interpretations-form-a-zf-model` routes CRITICAL
(8). Both now have complete item-specific owner reviews in their batch
contracts. Full Batch-11/12
`risk-report --require-reviewed` passes.

## Checks run (all from the repo root)

| command | result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts` (initial full pass and follow-up changed items) | full pass 14733 checked, 0 failing; follow-up changed items pass |
| `node tools/step5-scope.mjs stamp --run phase-2-next-21 --group d` | 142 carriers stamped |
| `node tools/step5-scope.mjs check --run … --phase adjudicate` (batches 11/12/4) | 0 errors each |
| `node tools/regen-contract-entries.mjs` (repaired items and direct consumers) | regenerated, 0 skipped |
| `node tools/merge-proof-contracts.mjs --level phase-2-next-21 …` (owner) | 765 items from 12 batches |
| `node tools/proof-contract.mjs … --strict` | Batch 11: 42/42; Batch 12: 35/35, zero errors/warnings; owner merged check 765/765 |
| `node tools/risk-report.mjs … --require-reviewed` | Batch 11: 42/42; Batch 12: 35/35, zero missing reviews |
| `node tools/finite-smoke.mjs` | 0 errors |
| `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | no quote mismatch |
| `node tools/depcheck.mjs` | no cycles, all references resolve; existing global advisory warnings remain |
| `node tools/depsource.mjs`, `fwdcheck --quiet`, `rendercheck`, `prosecheck` | all OK for follow-up scope |
| `node tools/manifest-deps.mjs` (Batches 11/12), `splice-plan --verify` | 0 errors; plan/manifests agree on 42 pages |
| `node tools/step5-scope.mjs check --phase adjudicate` (Batches 11/12/4) | 46/39/57 obligations, 0 errors after final stamp |
| `node tools/defect-ledger.mjs append` (18 initial + 7 follow-up rows) and `validate --run phase-2-next-21` | view re-rendered; 29 run rows checked, 0 errors |

The initial `boundary-audit` failure in group-a differential-geometry items was
repaired by its owner. The owner's current merged boundary check reports zero
templates and contradictions. No group-d boundary defect remains.

## Blockers

None. Every assigned item and page has a decision, every repaired item has a
closed uniquely-owned defect row, and no mathematics was left unresolved.
