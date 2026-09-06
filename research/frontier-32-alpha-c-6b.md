# Frontier-32 Alpha-c 6b adjudication

Run: `frontier-32`  
Group: `c`  
Dispatch: `6b-c`  
Owned batches: `4`, `14`, `15`  
Date: Sunday, September 6, 2026

## Scope and evidence

I read each owned `research/frontier-32-step6-scope-{4,14,15}.json`, the corresponding reader report and structured findings, each refuter report, every routed current carrier, the three proof-contract files, and the cited dependencies needed to decide the claims. I also checked the reader retry artifacts against their corrected outputs: batch 4's retry corrected the accidental batch label `32` to `4`; batches 14 and 15 corrected synthetic finding IDs to the actual item IDs. The current scope artifacts contain the corrected obligations and sealed observed hashes.

The mathematical source checks included:

- Alan D. Sokal, *A Really Simple Elementary Proof of the Uniform Boundedness Theorem*, PDF p. 1, <https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf>: the local estimate uses the symmetric points `x+xi` and `x-xi`, and the gliding-hump proof combines the `2/3` local bound with the `1/2` tail to obtain `1/6`.
- Ioan Mărcuț, *Manifolds* (2017), §§14.5 and 15.1, <https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf>: inward fields, local flows, and the collar construction.
- Will Merry, *Differential Geometry* (2021), Lectures 23--24, <https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf>: partitions of unity, tangent boundary flows, outward/inward fields, and the top-form orientability criterion.
- John K. Hunter, *Notes on Partial Differential Equations*, §§1.6, 1.9, 2.1, and 3.3--3.4, <https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>, with the exact printed/PDF locators already preserved in `research/frontier-32-batch-14.coverage.json`.

The exhaustive per-obligation results are in `research/frontier-32-alpha-c-6b-decisions.json`; all 25 decisions have distinct ledger references and current carrier hashes.

## Batch 4 outcome

Closed all 12 obligations: nine touched carriers and three refuter findings.

- Accepted the reader repairs to the incomplete-space counterexample, separately continuous bilinear corollary, graph definition, bounded inverse theorem, and open mapping theorem.
- Amended the Sokal local lemma: the reader result retained an impossible strict inequality at `T=0` and used a one-sided pair that could not supply the downstream constant. The live lemma assumes `T` is nonzero and uses `x+w,x-w` to obtain the exact strict `2r||T||/3` estimate.
- Amended the gliding-hump theorem to use that `2/3` estimate; subtracting its `1/2` geometric tail now validly gives the cited `1/6` lower bound.
- Corrected the reader's reversed manifest edit: `thm-uniform-boundedness-principle` no longer depends on itself, while `thm-banach-steinhaus-dichotomy` now declares the uniform-boundedness dependency it uses. Accordingly, the former carrier is a `reverted_change` and the latter an `amended_repair`.
- Confirmed all three refuter findings as fatal and repaired them: DC is now explicit in the pointwise-limit corollary, condensation example, and successive-approximation lemma. The condensation example also binds its normed codomain `Y`, and the liminf proof now separates the infinite endpoint.

The batch-4 contract now covers all nine repaired proof-bearing items and passes strict validation.

## Batch 14 outcome

Closed all three obligations: one touched carrier, one reader finding, and one refuter finding.

- Accepted the reader repair defining `Omega_epsilon` in `lem-distributional-laplacian-commutes-with-mollification`.
- Confirmed the distributional-corner wording defect as fatal. Weyl's lemma gives a unique smooth harmonic representative of the locally integrable equivalence class, not pointwise smoothness of every representative. The example now states exactly that representative conclusion and separately observes that the actual function `|x_1|` is not distributionally harmonic.
- The reader and refuter obligations describe the same mathematical flaw but arrived with incompatible sealed severity and locator metadata. The Step-6 schema therefore requires separate unique ledger references; both close on the same narrowed carrier.

## Batch 15 outcome

Closed all 10 obligations: five touched carriers, one reader finding, and four refuter findings.

- Amended the tangent and inward-flow statements to bind `M` and the vector field explicitly. Their local-extension, ODE uniqueness, face-invariance, and forward barrier arguments now type-check against the written hypotheses.
- Amended the global inward-field theorem to bind `M`, assume `AC_omega`, and match the reader's direct partition-weighted zero-extension construction in its manifest strategy.
- Amended the collar theorem to assume `AC_omega`, retain the local Euclidean inverse-function and noncompact variable-width argument, contract its final reparametrization step, and replace the stale manifold inverse-theorem manifest dependency with `thm-euclidean-inverse-function-theorem`.
- Accepted the reader's boundary Morse--Sard repair: it assumes `AC_omega`, states the local-extension regularity convention, handles the zero-dimensional target, and proves nullity chartwise from Euclidean Morse--Sard on the interior and boundary.
- Confirmed all four refuter findings as fatal. The projective-space title now restricts the odd-dimension criterion to positive dimension; the half-space example treats `n=0` separately; and both the boundary partition theorem and the top-form orientability theorem state their `AC_omega` hypothesis.

The reader's published-dependency finding on `thm-morse-sard-for-smooth-manifolds` is real: that published proof invokes `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`, whose statement assumes `AC_omega`, while the published theorem is unconditional. This dispatch contains no published-content protocol, so I did not edit that out-of-scope item. The decision is `confirmed_nonfatal` with disposition `nonfatal-recorded` for this group because the owned consumer is already conditional on `AC_omega` and no unqualified batch-15 claim remains. The upstream published item remains a named handoff for the authorised lead.

## Risk review

The initial risk reports found no HIGH or CRITICAL items in batches 4 or 14 and four HIGH items in batch 15. I read each current proof, its relevant definitions/dependencies, and the reader/refuter evidence, then recorded `risk_review: {status: complete, reviewer: alpha-6b-c, notes: ...}` for:

- `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary`: both implications and the zero-dimensional/empty cases are correct.
- `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary`: after binding `M,X`, local extension and ODE uniqueness give face invariance and prevent crossing in both time directions.
- `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`: determinant rays agree with positive basis classes for positive dimension; in dimension zero there are two rays but only one empty basis, exactly as stated.
- `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form`: after making `AC_omega` explicit, both directions and the zero-dimensional case are valid; the positive-ray sum cannot vanish.

Re-running `tools/risk-report.mjs` with `--require-reviewed` passes for all three owned contracts.

## Validation

Passed focused gates:

- reflow on all 14 materially edited item files;
- focused precheck: 14 checked, 0 failing;
- rendercheck: 14 files clean;
- proof-contract strict: batch 4 `9/9`, batch 14 `18/18`, batch 15 `47/47`;
- manifest dependency validation: batch 4 `21` items, batch 14 `22`, batch 15 `67`, all with 0 errors;
- risk report with `--require-reviewed`: all three contracts, 0 errors;
- defect-ledger append: 25 rows; `defect-ledger validate --run frontier-32`: 25 checked, 0 errors;
- Step-6 adjudication check: batch 4 `12`, batch 14 `3`, batch 15 `10` obligations, each with 0 errors after stamping all 25 current carrier hashes.

Two optional diagnostics do not provide green stamps and were not treated as mathematical defect rows. Citation fidelity refuses to report clean because these generated contracts contain no labeled citation rows. Boundary audit reports existing template-reuse candidates in the worksheets and two pre-existing contradicted boilerplate rows on `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors`, which was neither routed nor made stale by an in-scope repair. The required strict contracts, manifest checks, risk reviews, and Step-6 adjudication gates are clean.

## Remaining handoff

No unresolved defect remains in an owned in-flight carrier. The published `thm-morse-sard-for-smooth-manifolds` choice-scope defect remains recorded, unedited, for the authorised lead because this dispatch did not publish a protocol for changing published content.

## Gate repair cycle 1 — `step6-routing-adjudicate`

Reread the live open-mapping and boundary Morse--Sard theorems, their exact
hypotheses and dependencies, the reader/refuter evidence, frozen post-reader
carriers, and the later contract audit. Both current items and manifest rows
retain their reader repairs; `contract-audit-8` subsequently changed their
proof-contract records. The two touched decisions are now `amended_repair`.
Two `route: gate` supplemental decisions and two matching rows in
`frontier-32-alpha-c-6b-gate-ledger-rows.json` record those nonfatal stale
classifications. No new in-scope mathematical defect was found.

The full primary gate now reports 717 routed items, 359 adjudication
obligations, and zero errors. Run-wide defect-ledger validation checks 394
`frontier-32` rows with zero errors.
