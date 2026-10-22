# Reader report — batch 86

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `86`

## Inventory opened

Assigned pages:

- `csm-frontier-quantitative-dlr` — `library/classical-statistical-mechanics/csm-frontier-quantitative-dlr.md` (A page).
- `csm-frontier-quantitative-dlr-examples` — `library/classical-statistical-mechanics/csm-frontier-quantitative-dlr-examples.md` (B page).

Assigned items, read in dependency order:

1. `def-csm-frontier-dobrushin-matrix` — definition and TikZ index-convention diagram.
2. `lem-csm-frontier-finite-response-covariance` — finite Gibbs response identity and proof.
3. `thm-csm-frontier-dobrushin-comparison` — finite-volume comparison estimate, DLR uniqueness, and proof.
4. `thm-csm-frontier-high-temperature-susceptibility` — covariance summability, susceptibility, finite-volume response, concentration, and proof.
5. `ex-csm-frontier-ising-explicit-contraction` — nearest-neighbor Ising influence example and Verification.

The current batch manifest and proof contracts were used as navigation and evidence, not as acceptance. Claim-relevant supplier statements were opened, including `def-csm-lattice-gibbs-specification`, `def-csm-finite-range-lattice-interaction`, `lem-csm-finite-gibbs-variational-identity`, `lem-csm-lattice-specification-consistency`, `lem-csm-maximal-coupling-and-heat-bath`, `thm-csm-dobrushin-finite-range-uniqueness`, `thm-csm-lattice-dlr-existence`, `lem-csm-ising-influence-bound`, `lem-csm-gibbs-response-covariance`, `thm-geometric-series`, `thm-bolzano-weierstrass`, `thm-derivative-of-exponential`, `thm-algebra-of-derivatives`, `thm-chain-rule`, and `thm-newton-leibniz-with-interior-derivative`. The specialized Ising influence and DLR comparison/uniqueness proofs were read in full; the remaining foundational suppliers were checked at the exact statements used.

The assigned A page requires `csm-gibbs-lattice` and `csm-frontier-probability-interfaces`; the B page requires the assigned A page. Those page records were opened. The published `csm-gibbs-lattice` page and the assigned page/item inventories agree with the required placement. The assigned A/B pages have frontmatter only, consistent with the current statement-first policy.

## Review and repair

The Dobrushin definition sets (c_{ij}) as the half-total-variation change in the conditional law at site (i) when only site (j) changes. Its diagram labels the arrows (j\to k), (k\to i), and (j\to i) by (C_{kj}), (C_{ik}), and (C_{ij}), respectively, matching that row/column convention. No diagram repair or additional diagram was needed.

The finite response identity follows from finite sums, the exponential chain rule, and the quotient rule. The comparison proof's finite-state stationary coupling, coordinate mismatch estimate, matrix-series bound, finite-range boundary decay, and DLR integration match the stated hypotheses. In the susceptibility proof, the conditional covariance estimate uses the finite-volume comparison bound with the same specification and boundary conditions differing only at one site; the path orientation, geometric tails, translation-invariance argument, local uniform limits, and Chebyshev estimate are consistent with the stated conventions. No additional gap was found in these four items.

One confirmed prerequisite gap was repaired in `ex-csm-frontier-ising-explicit-contraction`. Before repair, its Statement invoked a “pair-interaction conditional energy and finite-alphabet Gibbs specification,” while its direct Ising supplier supplied the energy and one-site influence bound but did not establish that the site-field family was a proper, consistent finite-range specification. The comparison theorem requires those properties. I defined the field as (h\in\mathbb R^{\mathbb Z^d}), gave the finite-volume energy, partition function, and kernel, stated the exact properness/consistency/locality conditions, and added the finite energy-splitting proof that verifies them for nested volumes. The existing influence bound then supplies the nearest-neighbor coefficients, and the common envelope satisfies the comparison theorem's finite-radius and strict row-sum assumptions. The repair preserves the arbitrary site-field scope.

The matching proof contract was updated for the added construction and the current step numbering at `research/physics-non-fluid-129-2026-10-21-r2-batch-86.proof-contracts.json`. The item had no `verification.judge` record, so there was no stale judge stamp to remove. The A/B page prose and batch manifest were not edited.

## Source review

- Friedli and Velenik, *Statistical Mechanics of Lattice Systems*, Chapter 6, §§6.5.1–6.5.2, especially Theorem 6.31, equations (6.37)–(6.40), and Lemma 6.34, equation (6.44) and proof, printed pp. 267–271. The retrieved author-hosted chapter text confirms their Dobrushin coefficient uses the full sum of absolute differences, twice the half-total-variation convention used in the local items; the item contracts preserve that distinction. The full-book PDF endpoint returned HTTP 503, but the author-hosted Chapter 6 PDF/search extract supplied the cited passages.
- Rebeschini and van Handel, [*Comparison Theorems for Gibbs Measures*](https://arxiv.org/pdf/1308.4117), §2.3, Corollary 2.6 (PDF pp. 8–9), and §§3.1–3.3 (PDF pp. 13–23). Corollary 2.6 gives the single-site influence/resolvent comparison under its stated local-update and decay hypotheses. Its discrepancy term is an integrated quantity; the batch's local proof establishes the stated finite-volume estimate and uses a uniform supremum discrepancy, so I did not treat the paper's corollary as an exact substitute for that proof.

## Page verdicts

- `csm-frontier-quantitative-dlr`: **pass**. The A-page identity, item inventory, and required earlier pages match the batch manifest; no page prose is present to repair.
- `csm-frontier-quantitative-dlr-examples`: **pass**. The B-page identity, example placement, and requirement on the assigned A page match the batch manifest; no B-page prose was edited.

## Remaining defects and blocker

No unresolved defect was identified in the assigned items or pages. No proposed withdrawal remains. There is no blocker.

Coverage limitation: I checked the exact direct supplier statements and the specialized transitive DLR/Ising arguments needed for the reviewed claims, but did not independently re-audit every foundational proof in the full transitive dependency closure or every unrelated item on the page-prerequisite pages.

## Repair checks

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-csm-frontier-ising-explicit-contraction.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-csm-frontier-ising-explicit-contraction.md` — pass (direct), 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/ex-csm-frontier-ising-explicit-contraction.md` — 1 item, 4 steps, 0 defects.
