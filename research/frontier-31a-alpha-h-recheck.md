# frontier-31a — group Alpha `h`, Step 3 scaffold recheck

This recheck covers batches `4` and `15`. I reread the group-h scaffold
review and each assigned batch's `## Step-3 fix pass`, then verified the
current manifests, coverage harvests, and `research/plan-spec.json`. Every
reported fix or pushback remains supported by the current bytes; no further
scaffold repair is required.

## Dispositions

| Batch | Reported finding | Disposition | Current evidence |
| ---: | --- | --- | --- |
| 4 | `group-h/batch-4/inner-regularity-backward-prerequisites` | Closed: correction remains applied. | `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` still states countable choice and has all reviewed dependencies: Borel sigma algebra; countable enumeration and choice; metric balls/open-set algebra; total boundedness, closed-complete subspaces, and compactness; and continuity, subadditivity, and set-difference measure control. Its current strategy is the closed-ball, summable-complement-loss construction. |
| 4 | `group-h/batch-4/choice-hypotheses-for-extension` | Closed: correction remains applied. | `thm-countable-product-of-probability-spaces` explicitly assumes and depends on countable choice. `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` explicitly assumes AC (and hence countable choice) and retains `def-axiom-of-choice`, `def-countable-choice`, `thm-tychonoff`, and Caratheodory as direct dependencies. |
| 4 | `group-h/batch-4/extension-boundaries` | Closed without change. | The countable arbitrary-measurable and arbitrary-index standard-Borel routes remain distinct. The cylinder-countability lemma, cylinder-versus-power-set remark, and state-space boundary remark retain their stated limits; the two B examples retain the measurable-diagonal and uncountable-coordinate qualifications. |
| 4 | `group-h/batch-4/source-support-and-harvest-dispositions` | Closed without change. | The current seven-source harvest contains 57 results and has seven fetch-verification records. It validates with no coverage errors or warnings; no source row, locator, or disposition was altered. |
| 4 | `group-h/batch-4/kernel-and-kallenberg-scope-decisions` | Closed without change. | All 14 related coverage dispositions still match their sources: 13 kernel/conditional-law/Markov results are deferred to the current plan page `markov-kernels-and-markov-chains` (orders 288.125/288.126), while the Kallenberg comparison remains out of scope. None is a premise of the generic extension route. |
| 15 | Unlabelled — “The rounded-layer route needed declared real-power order support.” | Closed: correction remains applied. | The large-`Y`, wide-layer, and final theorem items retain `def-real-power`, real-power/log/exponential laws; the rounded-cutoff and small-layer lemmas retain rational-power monotonicity and rational-exponent agreement. The strategy keeps the floor-safe constants `c_1=c_3=c/4`, `c_2=10/c`, with the `ell=4` tail bound below `w/2`. |
| 15 | `36a7e316d1455bd7d50c84d108b5f7478bb71707414558312d6b3e1d66072776` — Diestel Proposition 1.3.1 | Closed: out-of-scope stands. | The current coverage record correctly identifies this as the minimum-degree long-path result. The current comb-partition proof begins from the structural hypothesis and does not use it. |
| 15 | `3468be6b1b44cd4155f710de0d93a162419441163cf1937e529b0f27d22fff3c` — Diestel Proposition 1.3.2 | Closed: out-of-scope stands. | The minimum-degree long-cycle result remains neither a structural-partition hypothesis nor a geometric-layer step. |
| 15 | `9dae6965c1db5a840988cee3bdd47d7df5510b69980798288cee786f3047d50b` — Nguyen §3 blockade definition | Closed: out-of-scope stands. | The retained source-specific reason is sound: Nguyen permits empty blocks, while this finite structural route requires nonempty, positive-width blocks. |
| 15 | `5c0893b073b5ac55945fd8fdfe418682f25280cc01ab6d326f99d318dc12c45f` — Nguyen Lemma 5.3 | Closed: out-of-scope stands. | This restricted-set lemma serves the bounded-VC iteration and is not used in the selected finite comb-partition proof. |
| 15 | `5bbf9b65e5ff919fdbf9691778a8fcde36a99f5b5a1d438deb769a59703c5ed1` — Nguyen §5 bounded-VC route | Closed: out-of-scope stands. | The bounded-VC iterative-sparsification route remains a different theorem path, with a hypothesis absent from the structural criterion. |

## Scope decisions and checks

`node tools/scope-decisions.mjs refresh --run frontier-31a --group h` found
19 current decline rows and zero pending rows. The immediately following
`check` reported 19 current declines and zero errors. Every current decision
in `research/frontier-31a-alpha-h-scope-decisions.json` is `stands`; none
required a new owner decision. The refreshed decision artifact has SHA-256
`8dbf54173d9b41feee2b21ca8183872a39413b32c522ad7cadd65a35e6240152`.

- `manifest-deps` passed for batches 4 and 15: respectively 29 and 14 items,
  zero normalized entries, and zero errors.
- `coverage-checklist` passed: batch 4 has 57 harvested results with zero
  errors and warnings; batch 15 has 25 results with zero errors and its
  expected one `coverage-low-yield` advisory. That advisory is accounted for
  by the five current batch-15 out-of-scope decline decisions above.
- `source-fetch-check` accepted every current fetch-verification record: 7/7
  batch-4 sources and 3/3 batch-15 sources.
- `content-policy --manifest-only` passed on each current manifest: 29 and 14
  scoped items respectively, with zero errors and warnings.
- `validate-plan.mjs research/plan-spec.json` passed: declared order is
  acyclic and consistent, with no item-level cycles, invalid forward
  references, B-page dependencies, or unresolved IDs among itemized pages.
  The plan retains the reviewed A/B relationships at 288.101/288.102 and
  433/434.

## Verdict record

I verified the current bytes of
`research/frontier-31a-alpha-h-step3-verdicts.json`
(`sha256:f6b80807cdb682b572890d3159470d6e3d797c14d790a309b1f9d4250badfab0`):
it contains exactly the two assigned A pages,
`infinite-product-measures-and-kolmogorov-extension` and
`the-structural-criterion-for-property-star`, each with verdict
`sufficient`. Those bytes express the verified closed-pair outcomes, so the
verdict artifact is intentionally unchanged.
