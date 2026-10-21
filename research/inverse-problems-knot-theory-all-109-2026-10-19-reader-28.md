# Step 3a reader report — batch 28

## Scope and opened inventory

The active run status was recomputed from `.autopilot/` on 2026-10-21: the run is in Step 3a, batch 28 was uncovered, and no dispatch was in flight. The assigned scope is exactly batch 28.

- **Assigned pages:** `nonlinear-landweber-and-discrepancy-stopping` and `nonlinear-landweber-and-discrepancy-stopping-examples`.
- **Assigned items opened:** `alg-ip-nonlinear-landweber-discrepancy`; `thm-ip-nonlinear-landweber-fejer-and-finite-stopping`; `ex-ip-landweber-initial-discrepancy-stop`; `cex-ip-landweber-outside-local-ball-stalls`; `ex-ip-landweber-exact-data-no-finite-stop`.
- **Item dependencies opened:** `def-ip-nonlinear-forward-map`, `def-ip-tangential-cone-condition`, `def-frechet-derivative-between-banach-spaces`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`, `def-countable-choice`, `def-operator-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`, `cor-inner-product-induces-a-norm`, `def-series`, `thm-nonnegative-series-bounded-partial-sums`, `thm-reals-cauchy-complete`, `thm-of-archimedean`, and `thm-well-ordering-principle`. The forward-map and one-basepoint TCC definitions are current draft suppliers from batch 25; the other listed suppliers are published.
- **Page prerequisites opened:** `nonlinear-inverse-problems-and-tangential-cone-conditions`, `variational-source-conditions-and-bregman-rates`, and `hilbert-space-geometry-and-riesz-representation`.
- **Run evidence consulted:** batch-28 pages manifest, proof contracts, cross-batch dependency record, notes, coverage record, plus current autopilot status and recent Git history. These were treated as context rather than verdicts.

No TikZ or other diagram was present in the assigned pages or items.

## Independent mathematical review

The algorithm states a real-Hilbert admissible instance, inputs, output statuses, the residual test before the budget check, and the exact finite loop. The uniform two-point TCC hypothesis and shared constant on the outer ball are explicit; they are not inferred from the weaker one-basepoint supplier definition. The theorem's local-domain induction establishes that every update used before stopping is evaluated inside the declared ball.

I checked the theorem's one-step squared-error estimate, local Fejér decrease, finite discrepancy index and budget behavior, exact-data residual summability and strong convergence, and the uniform noisy-data limit. The proof's minimizing-residual choice in the exact-data Cauchy argument is valid on each finite block. Its noisy-data argument handles bounded and unbounded stopping-index subsequences, using the stated Countable Choice assumption for a sequence of bad data. The direct supplier interfaces provide the required derivative, adjoint, norm, completeness, series, and Archimedean facts.

The mathematical cross-check was Christian Clason, *Regularization of Inverse Problems*, [full lecture notes](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf), Chapter 11: Assumption 11.2 (PDF p. 102), Lemma 11.3 (PDF pp. 102–103), Theorem 11.4 (PDF pp. 103–104), Theorem 11.5 (PDF pp. 104–105), and Theorem 11.6 (PDF p. 105), including the complete proofs. Theorem 11.6 invokes Lemma 11.1's monotonicity-and-fixed-index-stability criterion; I also read that criterion and proof. These results support the local Fejér, stopping, exact-data, and noisy-data conclusions. The local proof and stated hypotheses were checked independently; the source does not certify the batch.

The examples were checked directly: the identity-map example stops at index zero before its zero budget; the quadratic map has a stationary exact-data iterate with residual one and fails the local TCC at the start; the half-identity map has iterates `(3/4)^n`, with positive residual at every finite index and the stated finite-budget status.

## Edit

Changed the title of `cex-ip-landweber-outside-local-ball-stalls` from “An initial point outside the valid local ball can stall” to “Exact-data Landweber can stall without a local tangential-cone condition.” In the witness the initial point is the center of a proposed local ball; Step 2.1 shows that no positive-radius local TCC at that point can have the required constant. The former title therefore described a situation the witness does not exhibit. The recurrence and the proof remain unchanged. The proof contract covers the unchanged facts and steps, not the title, so it needed no update; this item has no `verification.judge` record to remove.

After the edit, `reflow` reported the item unchanged; `precheck` passed (1 checked, 0 failing); and `proof-layout` reported 1 item, 2 steps, 0 defects.

## Page verdicts

- **`nonlinear-landweber-and-discrepancy-stopping` (A): pass.** Draft status and `compact-v1` are preserved; its inventory matches the manifest, its prerequisite pages are present, and its body is empty.
- **`nonlinear-landweber-and-discrepancy-stopping-examples` (B): pass.** Draft status and `compact-v1` are preserved; its examples inventory and A-page prerequisite match the manifest, and its body is empty.

## Uneditable defects and blocker

No unresolved defect was found in an out-of-scope dependency, assigned item, or assigned page. There is no blocker.

## Coverage note

The assigned item files were initially opened from the manifest before their suppliers. I checked the direct supplier interfaces before final mathematical adjudication, but the literal file-open order was not supplier-first. The second cited treatment by Hubmer, Sherina, Kindermann, and Raik was not independently opened during this reader pass; the mathematical cross-check above uses Clason's complete relevant argument. The batch coverage record contains a fetch stamp for the Hubmer PDF, but that author-side metadata was not treated as this reader's source reading. Relevant visible portions of the cross-batch record and notes were consulted as context; current item and dependency carriers were the basis for this review.
