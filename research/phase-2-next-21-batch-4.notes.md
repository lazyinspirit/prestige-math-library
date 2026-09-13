# Phase 2 next 21 — batch 4 Step-1 construction notes

## Scope and outcome

Owned pairs only:

- `martingale-inequalities-and-convergence` / `martingale-inequalities-and-convergence-examples`, orders 288.121–288.122.
- `stopping-times-and-optional-stopping` / `stopping-times-and-optional-stopping-examples`, orders 288.123–288.124.

The final scaffold contains the exact designed inventory: 18 + 9 items for PT-13 and 17 + 9 items for PT-14, 53 items total. Every item has a complete statement, proof or well-definedness strategy, stable previously unused design ID, explicit `deps`, provenance, and reader-visible source URL. No published content, shared plan, engine state, verdict, or canonical defect ledger was edited. No additional local item, page split, new pair, selected-pair change, or cross-batch supplier is required.

## Plan/design comparison and controlling resolution

The current `research/plan-spec.json` controls page metadata. Its four page records agree with the design and dispatch on IDs, titles, orders, categories, companions, and every `requires` edge. The sole conflict is inventory representation: all four current-plan page objects have `items: []`, while the complete PT-13/PT-14 design specifies 18 + 9 and 17 + 9 items. The batch manifest preserves the exact design inventory; the shared plan remains untouched for the later splice step. This is not treated as publication of a planned supplier.

The PT-14 shift convention is explicit: ordinary positive deterministic shifts remain stopping times for the original filtration; if `rho` is stopping for `G_n=F_{n+c}`, then `rho+c` is stopping for `F_n`; an earlier shift `(tau-c)^+` is only asserted for the shifted filtration. The six B-page IDs that encode the exact design wording are preserved verbatim.

## Mathematical and dependency audit

The statements and complete relevant proofs in the cited sources were compared with the actual published prerequisite statements and proofs, rather than inferred from page membership or publication status. Direct and transitive hypotheses, directions, sigma-algebra conventions, integrability, measurability, and axiom strength were checked. A final traversal from the 53 local items reached 1,345 local-plus-published dependency nodes, with zero missing IDs, dependency cycles, Recorded-result paths, or nonpublished external prerequisites. `extcheck` also reports no hard error and no Foundations path to `deferred-set-theory-beyond-choice`.

Load-bearing details retained in the contracts:

- The upcrossing number is a finite-tuple supremum and never selects an optimizer. The adopted submartingale inequality is exactly `(b-a)EU_N <= E(X_N-a)^+ - E(X_0-a)^+`; the proof truncates to `a+(X-a)^+` and uses complementary predictable holdings. Rational interval crossings and bounded positive parts then control both sides of the almost-sure limit.
- Doob's L1 inequality is proved by finite first-crossing events, with no forward use of stopping times. The Lp proof integrates the refined level inequality, retains the coefficient `q=p/(p-1)`, applies Holder, and only then uses monotone convergence. The a.s./L1 gap is closed only by uniform integrability.
- Reverse convergence uses the fixed-variable representation, finite reversed segments, UI, and event tests for the intersection sigma-algebra. Levy upward uses the increasing-union algebra and a monotone-class identification. The zero-one corollary is an agreement proof and does not depend on the already-published zero-one theorem it recovers.
- Conditional Hoeffding allows predictable random endpoints `A_k,B_k` but requires deterministic widths `B_k-A_k<=c_k`. The width and centering make the exponential integrable. The conditional mgf is iterated through the filtration before Chernoff optimization.
- The martingale CLT uses infinite row columns, a.s. finite row limits for both partial sums and the variance clock, variance-clock convergence in probability, and the separate unconditional Lindeberg sum required by the design. The characteristic-function remainder, deterministic-column truncation, clock localization, product limit, and converging-together step are all named dependencies; independence is not assumed.
- `X_tau` has an explicit cemetery value on `{tau=infinity}`; `X^tau_n` never evaluates an unstated terminal value. `F_tau` is proved to be a sigma-algebra, and `F_sigma subset F_tau` is proved only when `sigma<=tau`.
- Bounded optional sampling uses the finite predictable-transform identity and includes the submartingale and supermartingale inequalities. Each unbounded theorem applies a distinct valid limiting mechanism: UI/closed-martingale conditioning, bounded-increment L1 control with `E tau<infinity`, or dominated convergence.
- Wald's equation proves absolute integrability first by Tonelli on `sum |X_k|1_{tau>=k}` and uses independence of `X_k` from the past event `{tau>=k}`. The ruin duration proof uses `S_n^2-n`, dominated convergence for the bounded stopped position, and monotone convergence for `tau wedge n`.
- The nested-set witnesses verify every conditional expectation and shell probability explicitly. The PT-14 arbitrary-increment witness reconstructs the martingale locally and does not depend on a B-page example, preserving the B-leaf rule.

Conditional expectation and martingale interfaces inherit AC from the published Radon–Nikodym construction. Items that construct conditional expectations or conditional moments explicitly state `Assume AC`, declare `def-axiom-of-choice`, and identify version selection as the use; the symmetric Azuma corollary declares the same inherited use. The upcrossing-number construction, elementary stopping-time event calculus, Wald tail-series calculation, and finite pathwise identities add no choice. No incompatible-axiom branch and no Recorded result is consumed.

The audited published interfaces include the martingale/submartingale convention, multistep conditioning, predictable transforms, conditional Jensen and absolute-value submartingales, tower and taking-out-known identities, conditional Fatou/dominated convergence, uniform integrability of a fixed variable's conditional expectations, conditional Lp contraction, Vitali's theorem, layer cake, Holder, MCT/DCT/Fatou, independence grouping, characteristic-function remainders and convergence, the normal characteristic function, and the discrete quadratic-variation martingale. Their hypotheses and proofs are adequate for the uses recorded here. No defective actual published prerequisite was identified; no canonical-ledger repair entry is requested. This does not certify unrelated published consumer debt.

## Full-text source evidence

Coverage records 46 harvested results, each included/inline/already-published or declined with a specific reason.

- Durrett, *Probability: Theory and Examples*, fifth edition: complete author-hosted 490-page PDF; Theorems 4.2.10–4.2.12, 4.4.2/4.4.4/4.4.6, 4.6.1 and 4.6.3–4.6.9, 4.7.1–4.7.3, and §4.8 were read with their full proofs.
- van der Vaart, *Martingales, Diffusions and Financial Mathematics*: complete author-hosted 188-page monograph; §§2.2, 2.4–2.6, 2.8, and 2.9 were read in full for the relevant arguments.
- Roch, *Notes 19: Martingale CLT*: the complete author-hosted note was read, including Theorem 19.15's full truncation and characteristic-function proof; its autoregressive application is explicitly out of scope.
- Roch, *Notes 20: Azuma's Inequality*: the complete author-hosted note was read, including the conditional Hoeffding and filtration-iteration argument in §1.1.

`source-fetch-check --stamp` fetched actual full-text bodies and recorded six successful stamps: 6/6 fetch-verified and 6/6 resolved. There were no retrieval failures, retries beyond the successful initial fetches, source drops, alternative-proof waivers, or owner source escalations.

## Construction records and check snapshot

Final item-readiness decisions were recorded in manifest prerequisite order after the fidelity corrections above. All 53 are `ready`, zero are `escalated`, and every current hash closes. Each record lists its examined dependency IDs and states the source/proof, well-definedness, direction, convention, publication, Recorded-result, and axiom-strength evidence. These are Step-1 construction records, not mathematical approval; Step 3 remains the independent review.

Check snapshot at 2026-09-13T05:31:58+10:00:

- Exact design inventory comparison: 53/53 IDs, in prescribed page and item order.
- Owned `manifest-deps`: 53 items, 0 normalized, 0 errors.
- Owned manifest-only `content-policy`: 53 scoped items, 0 errors, 0 warnings.
- Batch coverage with required destinations: 2 A pages, 46 harvested results, 0 errors, 0 warnings.
- Batch source check: 6/6 fetch-verified and resolved, 0 documented drops.
- Whole-run `manifest-deps`: 743 items at the first snapshot, 0 normalized, 0 errors.
- Whole-run manifest-only `content-policy`: an initial concurrent snapshot showed two outside-batch errors; after their owners' updates the final snapshot covered 745 items with 0 errors and 0 warnings. No batch-4 diagnostic appeared in either snapshot.
- Canonical `validate-plan`: success; 1,624 pages, declared reading order acyclic and consistent, and no item cycles, forward references, B dependencies, or unresolved IDs among the 1,056 pages then carrying inventories. It correctly reports 563 still-empty plan inventories, including these four pre-splice pages.
- `manifest-integrity`: all 42 owed run pages present, no scope drift.
- `extcheck --quiet`: exit 0 with 55 pre-existing repository-wide `unproved-on-published` warnings and no hard error. None is a new batch-4 prerequisite defect.
- Owned transitive traversal: 53 roots, 1,345 nodes, 0 missing, 0 cycles, 0 Recorded paths, 0 nonpublished suppliers.
- Owned readiness: 53/53 current and closed.

The consumer-batch dependency input is `[]`: no page or item consumed by batch 4 is supplied by another batch of this run. The unified ledger refresh succeeded and confirms zero edges with consumer batch 4. The stricter whole-run `--require-reviewed` reconciliation remains open only because batches 7, 9, and 11 had not supplied reviews at that snapshot; batch 4 itself is reviewed. No engine transition or verdict was written.
