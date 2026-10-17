# Batch74 evaluator repair — research only, UNAPPLIED

The concern is confirmed. The old evaluator returns5 for the computed-residual norm, so the solver must request rho>=5+W_bar; it cannot accept tolerance1. Proof4.1 silently used0 instead of that returned5.

The single-source proposal changes the norm-return table to2 for the matrix norm,5 for x/b/v_hat norms, and0 for the exactly zero computed residual. It returns the concrete stored bounds W_bar=rho=1/2. Proof4.1 verifies both norm enclosures and the exact inequality149/490<1/2, then uses the solver's actual two expression requests. The finite-check prose distinguishes the exact allowance expression from the deliberately loose reported1/2. Proof1.1–3.1 and the successful one-factor/two-solve claim remain intact. A concrete binary-format witness is given in completion.json; no test was run.

Read `source-minimal.patch` and the full before/proposed source. `future-mirror-operations-NOT-STEP3-EDITS.json` lists four future coordinates only. Closed Step3 metadata and all original risk/history remain untouched. No optional manifest Statement is introduced. There are no actual item consumers; the hosting page summary remains accurate.

The primary Luna judge/attempt ledgers had no row for this example when inspected, so no keep verdict is invented. Preserve the eventual genuine original row. The batch74 alpha context read is distinct. The two other original Step5 context concerns (zero-operation dot-product proof interface and missing explicit q2 assignment) are confirmed and retained for their actual Step5 route; this focused example proposal does not pretend to close them.

Frozen read-only Step4: no canonical application, native dispatch, ledger/control/tool edit, hashes, checks, gates or tests. Root/native Step5 later owns the allowed repair/integration path and fresh actual guards.
