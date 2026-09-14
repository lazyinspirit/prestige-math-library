# Phase 2 next 18 — batch 2 Step-1 construction notes

## Scope and outcome

Owned pairs only:

- `markov-kernels-and-markov-chains` / `markov-kernels-and-markov-chains-examples`, orders 288.125–288.126;
- `brownian-motion-construction-and-continuity` / `brownian-motion-construction-and-continuity-examples`, orders 288.131–288.132.

The manifest contains the complete designed inventories: 18 Markov A items, 9 Markov B items, 20 Brownian A items, and 8 Brownian B items (55 total). Every item has a statement contract, complete proof strategy, explicit dependencies, provenance, and source references. No published content, shared plan, engine state, verdict, or canonical defect ledger was edited.

The items were constructed and recorded once in prerequisite order. All 55 are `ready`; none is escalated. These hash-bound records establish construction readiness only. Owner/operator reconciliation and the Step-3 mathematical review remain required.

## Plan/design comparison

`research/plan-spec.json` controls this run. I compared both complete design sections in `research/plan-probability-track.md` with the current plan objects.

- No conflict was found for either pair. Page IDs, titles, category, orders, companions, and prerequisite arrays agree.
- The current plan objects have empty item arrays, so they neither confirm nor contradict the design's 18+9 and 20+8 mathematical inventories. As required for these generated scaffolds, the complete design inventories were transcribed into the owned manifest; this empty-plan/design-detail difference is recorded here rather than misreported as mathematical plan review.
- The Brownian page's plan-level prerequisites include `central-limit-theorems`, `weak-convergence-tightness-and-representation`, and this batch's earlier Markov pair. The audited construction proofs do not consume a CLT, weak-convergence theorem, or Markov-chain theorem at item level. Those plan edges were preserved because there is no conflict, but no artificial item dependency was added.
- Alpha's drift evidence records `no-drift` for both pages. No prerequisite correction, page split, selected-pair change, or new prerequisite pair is required.

## Mathematical and dependency audit

### Markov kernels and chains

- The basic definition is relative to an explicitly named filtration and uses almost-sure equality of conditional-probability versions. The natural filtration is only a specialization. This prevents the larger-filtration counterexample from being obscured.
- `lem-bounded-function-form-of-the-markov-property` extends the indicator statement through simple functions, monotone approximation, and signed decomposition while verifying measurability of `Kf`. The future-functional theorem performs a second, simultaneous cylinder/monotone-class extension; page membership was not used as a substitute for either argument.
- Iterated kernels are introduced before Chapman–Kolmogorov and finite-dimensional laws. The published kernel-composition theorem supplies measurability, probability mass, and associativity.
- The general Ionescu–Tulcea theorem is not derived from the library's independent countable-product theorem or from the standard-Borel Kolmogorov theorem. It constructs the history-dependent cylinder premeasure on arbitrary measurable coordinate spaces, proves its needed continuity/countable additivity by the compatible-coordinate argument, and then extends it. This avoids an inadequate prerequisite and permits the advertised general measurable state space.
- The strong Markov proof works on each `{tau=n}` and then sums. Its statement assumes `tau<infinity` almost surely and never defines `X_infinity`.
- The post-hitting result stays in bounded-functional form. It does not assert existence of a regular conditional distribution on an arbitrary measurable state space.
- Killed and absorbed kernels state different conventions and verify all starting points, including the cemetery state. The martingale-problem theorem is restricted to a countable state space with the power-set sigma-algebra, exactly where indicators of arbitrary subsets recover the transition matrix.

### Brownian construction and continuity

- The Kolmogorov-extension item constructs only the canonical coordinate Gaussian process. Brownian motion is asserted only after the moment estimate and continuity-modification theorem.
- The one-parameter continuity criterion assumes a complete separable metric target. Completeness is needed for limits from dyadic grids; separability makes the resulting pointwise-limit maps measurable in the library's stated setting. Compact constructions are patched over the countable exhaustion `[0,n]` using agreement on rational times and continuity on overlaps.
- The Holder corollary intersects only countably many rational exponents and integer compact intervals. An arbitrary exponent below one half follows from a larger rational exponent on each compact.
- The uniform-on-compacts metric is proved to induce compact convergence. Completeness is obtained compact by compact and glued; separability uses eventually constant rational polygonal paths. Wiener measure is formed only after proving that the continuous sample-path map is Borel measurable.
- The Borel sigma-algebra of continuous path space is generated by rational coordinate maps. Wiener uniqueness therefore uses rational finite-coordinate cylinders, not an uncountable intersection or an unsupported path-space uniqueness claim.
- Time inversion follows the design-mandated route. Positive-time Gaussian covariances give the finite-dimensional laws; continuity at zero is separately proved from Gaussian tail estimates, an inline finite-grid reflection/maximal bound for unit-interval oscillations, and Borel–Cantelli, yielding `B_t/t -> 0` as `t -> infinity`.
- The two counterexamples distinguish finite-dimensional existence from continuous modification and pointwise modification from indistinguishability. The Bernoulli-coordinate example uses a countable rational sequence before Borel–Cantelli; the random-spike example shows why uncountably many pointwise null exceptions cannot be united.
- The deterministic-integral example uses the ordinary pathwise integral `X_t = integral_0^t B_s ds`, not an undeclared stochastic integral. Deterministic Riemann sums, the explicit Fubini and continuous-Riemann-integrability suppliers, and characteristic functions give its Gaussian law and covariance.

All declared direct prerequisites were found on disk with `status: published`, and their actual statements and relevant proof portions were inspected. No missing, circular, forward, or Recorded-to-replacement dependency was found in the owned manifest. No defective actual prerequisite blocks these items. This probability batch owns no Foundations page, and it introduces no proof or prerequisite path from Foundations to `deferred-set-theory-beyond-choice`.

## Choice ledger

- The filtration-relative Markov definition and its conditional-expectation descendants assume AC because the current conditional-probability/conditional-expectation interfaces are built through Radon–Nikodym versions under AC.
- Ionescu–Tulcea assumes AC explicitly. AC is used in the recursive selection of compatible positive-mass finite coordinates in the cylinder-premeasure argument and covers the current extension interface.
- Gaussian-law construction and identification items assume AC where they consume the current multivariate-normal and Kolmogorov-extension suppliers.
- `lem-continuous-path-space-is-polish` states countable choice because the current Polish/separability interface imports it. The compactwise completeness argument itself selects no family of limits: each pointwise limit is unique.
- Time inversion states AC because its Gaussian-law suppliers do. Its Borel–Cantelli step does not add a stronger axiom.
- Deterministic kernel algebra, killed/absorbed kernel verification, the abstract continuity criterion for a supplied process, and the uoc metric retain their choice-free branches.

No incompatible-axiom branch is merged into an AC result, and no claim of a choice-free route is made through a supplier whose current dependency closure imports Choice.

## Full-text source evidence

The coverage file records 34 harvested headings/results and their dispositions. Six independent authoritative full-text treatments were fetched, stamped, and inspected:

- Durrett, *Probability: Theory and Examples*, fifth edition: complete author-hosted book; Sections 5.1–5.2 (printed pp.268–285) and 7.1 (printed pp.353–359), including the relevant proofs.
- Shalizi, *Building Infinite Processes from Finite-Dimensional Distributions*: all five PDF pages, including the complete proof of Theorem 33 (Ionescu–Tulcea).
- Roch, *Markov Chains: Martingale Methods*, Note 24: complete eight-page note; Section 1 and the full proof of Theorem 24.2.
- Sousi, *Advanced Probability*: complete notes downloaded; Brownian Sections 6.1–6.3 through Theorem 6.7 read in the extracted full text.
- Yoshida, *Probability Theory*: complete notes downloaded; Sections 6.1–6.3 read in the extracted full text.
- The two A pages each have at least two independent treatments, including a textbook or complete lecture-note set. Markov uses three and Brownian uses three.

Every retrieval succeeded on its initial attempt. No recovery retry, source drop, replacement proof, `source_resolution`, or owner source escalation applies. `source-fetch-check --stamp` reports 6/6 full-text sources fetch-verified and resolved.

## Published prerequisite defects

No defect was found in an actual direct published prerequisite used by this batch. In particular, the general-state Markov construction does not rely on the narrower standard-Borel Kolmogorov-extension theorem, and the Brownian continuity argument states the completeness/separability hypotheses needed by its construction. There is therefore no batch-2 entry to add to the canonical published-consumer-supplier defect ledger.

## Cross-batch dependencies

`research/phase-2-next-18-batch-2.cross-batch-dependencies.json` is `[]`. The only same-run page edge involving these pairs is Brownian construction -> Markov kernels, and both consumer and supplier are in batch 2, so it is not a cross-batch edge. All other actual item suppliers are already published. No newly requested pair or cross-batch change is being smuggled in as a published supplier.

The derived run ledger was refreshed. Its strict review gate remains incomplete because batches 1, 3, 4, 5, 6, and 9 have not all supplied dependency-review inputs; the current derived ledger has 10 declared cross-batch edges, none owned by batch 2, and no orphaned batch-2 review.

## Check results

Owned batch:

- `manifest-deps`: 55 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 55 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 A pages, 34 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 6/6 sources fetch-verified and 6/6 resolved, with 0 documented drops.
- Readiness verification: 55/55 owned records are current and closed; 55 `ready`, 0 `escalated`.

Whole run as observed during this batch:

- `manifest-deps research/phase-2-next-18-batch-*.pages.json`: 324 items, 0 normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 324 scoped items and 5 errors, all outside batch 2: missing `def-linear-order` for `lem-linear-order-completion-existence-uniqueness-and-density`; missing `def-elementary-substructure` and `def-stationary-subset-of-a-regular-cardinal` for `def-countable-model-generic-master-condition-and-proper-poset`; missing `def-stationary-subset-of-a-regular-cardinal` for `thm-proper-forcing-preserves-stationary-subsets-of-omega-one`; and missing `lem-symmetric-collapse-names-have-bounded-support` for `def-gitik-finite-support-symmetric-submodel`.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success. The declared page order is acyclic and consistent, with no item cycles, forward references, B-page dependencies, or unresolved IDs among the 1098 pages currently carrying item lists; 521 planned pages still have empty item lists.
- `extcheck --quiet`: success with 55 repository-wide `unproved-on-published` warnings, none introduced by or specific to this batch.
- Whole-run `source-fetch-check` cannot yet run because `research/phase-2-next-18-batch-1.coverage.json` is absent (and other batch artifacts are still arriving). The owned batch source check passes as recorded above.
- `frontier-dependency-ledger refresh` succeeded; `--require-reviewed` remains incomplete for the unreviewed batches listed above.

These unresolved whole-run findings do not alter any batch-2 readiness decision. They remain for the relevant batch workers and owner/operator join.
