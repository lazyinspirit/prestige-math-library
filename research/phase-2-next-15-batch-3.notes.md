# Step 1 construction — phase-2-next-15, beta batch 3

Owned scope is the A/B pair `central-limit-theorems` / `central-limit-theorems-examples` (orders 288.113/288.114). I wrote only the owned manifest, coverage, this note, 22 item-readiness records, and the empty consumer-batch dependency input. I did not edit published item content, `plan-spec.json`, engine state, verdicts, or selected pairs. The authorized frontier-ledger refresh found no cross-batch edge and did not require a shared-ledger content change.

## Inputs, plan, and design

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned task, the disk-recomputed `.autopilot/` run status, current git log, current `research/plan-spec.json`, the phase-2-next-15 plan/drift evidence, `briefs/tasks/frontier-dependency-ledger.md`, and the complete PT-9 design at `research/plan-probability-track.md:1317-1377` together with its probability conventions and source matrix. Concluded RESUME files were not treated as live state.

The current plan and design agree on page IDs, order, companions, category, and all thirteen page prerequisites. The plan's two item inventories are intentionally empty; the assigned PT-9 design supplies the 15 A and 7 B items. This is not a conflict. No plan/design conflict was found. The manifest preserves every designed result, introduces no padding, and needs no split (15 A items is below the cap).

One axiom-accounting tension was resolved from actual disk dependencies. The design describes the CLT arguments as ZF once arrays and integration facts are given. The calculation lemmas and triangular-array definitions remain choice-free. However, the currently published normal-law construction, countable-product realization, Levy criterion, and Cramer-Wold suppliers carry choice assumptions. Every new consumer of those actual interfaces therefore states AC, depends on `def-axiom-of-choice`, identifies the use, and, where countable products are constructed, also declares `thm-choice-implies-dependent-implies-countable-choice`. This is not a claim that AC is mathematically minimal. No item reaches `deferred-set-theory-beyond-choice`.

The design warnings are enforced: the second-order expansion uses an `X^2` dominated remainder and assumes no third moment; characteristic-function products are normalized before a row-length-uniform logarithmic bound; the Feller converse assumes maximal variance negligibility and uses the canonical-measure proof rather than reversing sufficiency; Levy is used only after continuity at zero; multivariate Gaussian laws admit singular covariance through the non-negative square root; zero-variance projections never divide by zero; and the concluding remark asserts only convergence in distribution. Berry-Esseen is not included and no planned FA result is consumed.

## Dependency and proof audit

The following actual published statements and complete proofs were read where applicable (definitions by their full defining text):

- `lem-normal-density-has-total-mass-one`, `def-standard-normal-and-normal-laws`
- `def-characteristic-function-of-a-real-random-variable`, `lem-basic-properties-of-characteristic-functions`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-moments-give-derivatives-of-the-characteristic-function`, `cor-characteristic-function-criterion-for-weak-convergence`, `thm-uniqueness-of-a-law-from-its-characteristic-function`, `thm-levy-continuity-theorem-forward-direction`, `thm-cramer-wold-device`
- `def-random-element-and-real-random-variable`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-independent-random-elements`, `def-identically-distributed-and-iid-random-variables`, `def-partial-sums-and-sample-means`, `def-moments-variance-and-covariance`
- `def-bernoulli-and-binomial-random-variables`, `lem-bernoulli-and-binomial-mean-and-variance`, `cor-countable-independent-copies-exist`, `thm-countable-product-of-probability-spaces`, `cor-coordinate-random-elements-on-a-countable-product-are-independent`, `thm-choice-implies-dependent-implies-countable-choice`
- `def-complex-logarithms-principal-logarithm-and-complex-powers`, `cor-principal-logarithm-is-holomorphic-on-the-slit-plane`, `thm-fundamental-theorem-for-complex-line-integrals`, `thm-fundamental-inequality-for-complex-line-integrals`, `thm-complex-exponential-addition-and-real-extension`
- `thm-non-negative-square-root-exists-and-is-unique`, `def-law-or-distribution-of-a-random-element`, and the convergence-mode definitions/theorems directly cited by the final remark.

Direction and conventions match: characteristic functions use `E exp(itX)`; independence of arbitrary bounded sine/cosine functions uses the general factorization theorem rather than the inadequate finite-range product result; weak convergence is law convergence; normal variance is allowed to be zero; and the covariance square root is the unique non-negative operator square root. Well-definedness checks are in the strategies for truncated moments, positive row scale before division, complex principal-log domain, product-space realization, and singular Gaussian pushforwards.

The converse proof route was checked against Billingsley's full canonical-measure argument, including the possible loss of mass at infinity and both tails. Its Helly diagonal extraction is explicitly to be proved inline from Bolzano-Weierstrass under AC; no missing future theorem is cited. The Cauchy counterexample recomputes its transform locally and does not depend on an item housed on another examples page.

## Published prerequisite defect for canonical-ledger handoff

The following exact actual prerequisites are `status: published`, carry a judge `pass` dated 2026-09-11, but have neither `verification.audited` nor `verification.verified`, contrary to `SCHEMA.md`'s publication evidence contract:

- `def-characteristic-function-of-a-real-random-variable`
- `lem-basic-properties-of-characteristic-functions`
- `lem-characteristic-functions-under-affine-maps-and-independent-sums`
- `lem-moments-give-derivatives-of-the-characteristic-function`
- `cor-characteristic-function-criterion-for-weak-convergence`
- `thm-uniqueness-of-a-law-from-its-characteristic-function`
- `thm-levy-continuity-theorem-forward-direction`
- `thm-cramer-wold-device`

Evidence is the frontmatter of the eight named `items/*.md` files plus the current depcheck `published-unaudited` class. Their statements and proofs were read and no mathematical counterexample was found; the defect is missing independent publication evidence, not a fabricated mathematical rejection. Publication state is already `published`; there is no planned replacement supplier and no planned item is treated as published. Repair strategy: independently audit each exact item/interface and add valid `verification.audited` or delegated `verification.verified` evidence, then reconcile the phase-2-next-20 publication. Until then, actual consumers are blocked as defective prerequisites. This note is the owned handoff for the canonical published-consumer/supplier ledger; that shared ledger was not edited here.

Affected local chains are explicit in readiness records: normal transform and second-order expansion feed iid CLT; characteristic products and Levy feed Lindeberg-Feller; characteristic uniqueness feeds the Feller converse; Cramer-Wold and scalar normal transform feed the multivariate transform/CLT; their B consumers inherit those escalations. Unrelated published debt does not block the six ready items.

## Sources and harvest

Complete full-text arguments were inspected from five independent authoritative treatments: Durrett (author-hosted textbook), Aldous/Chewi (Berkeley full notes), Varadhan (author-hosted chapter), Norris (Cambridge full notes), and Billingsley (university-hosted textbook). Exact theorem/page locators, every harvested result's disposition, and reading limitations are in the owned coverage file. Source retrieval succeeded without a failure cycle: `source-fetch-check --stamp` verified all seven page/source records, including 490-page Durrett and 608-page Billingsley PDFs, and recorded byte hashes. No source was dropped, no retry allowance was exhausted or restarted, and no source-resolution waiver is used. Deferred delta-method and general infinitely-divisible material is sent to `owner-decision` because no current plan destination exists.

## Item outcomes

All 22 stable IDs were unused at preflight and were scaffolded once in prerequisite order. No prior ready record existed for this inventory. Outcomes were recorded with `step1-decisions.mjs record`, no `--owner` and no overwritten escalation.

Ready (6): `lem-logarithm-of-a-product-of-near-one-characteristic-functions`; `def-row-wise-independent-centered-triangular-array`; `def-total-row-variance-and-lindeberg-condition`; `lem-lindeberg-condition-implies-feller-negligibility`; `def-multivariate-normal-law`; `cex-feller-negligibility-cannot-be-removed-from-the-converse`.

Escalated (16): every remaining item. Each has a complete strategy and source coverage, but its actual path crosses one of the eight published-unaudited suppliers above or an earlier local item escalated for that reason. Each readiness record contains the examined direct dependency IDs and item-specific evidence.

## Checks actually run

Checks were run against a live concurrent run, so whole-run totals are a disk snapshot rather than a frozen final gate.

| Check | Exit | Result |
|---|---:|---|
| owned coverage checklist | 0 | 2 pages, 37 harvested results, 0 errors, 0 warnings |
| whole-run manifest dependencies | 0 | 453 items, 0 normalized, 0 errors |
| owned manifest content policy | 0 | 22 items, 0 errors, 0 warnings |
| whole-run manifest content policy | 1 | 453 items, 11 `batch-dependency-missing` errors, all in other batches (Hurewicz/degree and affine Kac-Moody items); no owned error |
| current plan validation | 0 | acyclic and consistent; 1022 pages with item lists checked, 597 page-level-only; existing redundant-prerequisite warnings |
| external-reference gate | 0 | passed; existing legacy warnings only |
| source check | 0 | 7/7 fetch-verified and resolved, 0 drops |
| Step-1 decision check | 1 | run snapshot 453 items, 102 ready overall, `closed=false`; owned subset 6 ready/16 escalated, while other batches still had missing/unreconciled decisions |
| frontier dependency ledger refresh | 0 | owned input `[]`; no same-run cross-batch dependency edge |

Owner/operator reconciliation and Step 3 remain required; neither ready records nor worker completion are independent mathematical approval.
