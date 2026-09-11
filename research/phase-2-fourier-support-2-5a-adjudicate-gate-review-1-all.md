# Step 5A gate batch 1 — serial report

Disposition: no repairable finding on the 61 assigned carriers (57 items and four pages). Global depcheck remains blocked by unowned content. This is a local diagnostic review, not mathematical recertification or exact-hash closure.

Evidence: `research/phase-2-fourier-support-2-5a-adjudicate-gate-batch-1.json`, sole failure `depcheck`, exit 1. All 1,497 output lines were parsed: 212 orphan, 150 multi-home, 110 cited-not-in-deps and one b-leaf-legacy warning, plus one b-leaf-content error. No diagnostic names an assigned carrier. The 517 live IDs have empty intersection with the owner map; exhausted IDs are empty. Remaining output is page-depth information and summaries. There are no assigned boundary/citation candidates and no dispatched liveness failure.

## Unowned Carleson dependency

Exact error: `[b-leaf-content] items/def-carleson-tiles-wave-packets-and-tile-order.md: depends on "ex-flat-exponential-function", which lives only on B/examples page(s) the-exponential-function-examples`.

Read the complete draft definition. Its frontmatter declares the supplier, and its Definition explicitly constructs the cutoff from that supplier's smooth flat function. This is a load-bearing edge, not an incidental citation. Read the published supplier's complete statement and verification: the one-sided exp(-1/x), zero for x<=0, supplies smoothness and flatness. Its sole home is `library/real-analysis/the-exponential-function-examples.md:8`; the consumer is on `library/fourier-analysis/carleson-hunt-time-frequency-theorem.md:5`. The actual graph rule in `tools/depcheck.mjs:299–322` rejects this exclusively-B supplier edge. The structural diagnostic is correct; no mathematical defect in the published supplier is established.

Local closure cannot be completed within this dispatch: changing a Fourier supplier alone cannot remove the unowned consumer's declared dependency. Required authority: the Carleson content owner must close its cutoff construction with a sound A-page supplier or justified local construction, then synchronize its own contracts, manifest and decisions. Any page-home/shared-plan change needs its authorized owner. Do not merely remove the load-bearing citation. This report does not certify an alternative supplier. No consumer or supplier edit was made.

## Reproduction and additional unowned finding

`node tools/depcheck.mjs --quiet` returned 1. An assertion script verified that all original diagnostics remain, that no current diagnostic names an assigned carrier, and that the only added diagnostic is:

`[yaml-escape] library/probability/conditional-distributions-and-regular-conditional-probability-examples.md: title contains "\u" inside a double-quoted scalar`.

The draft page's title contains the literal Unicode escape `\u2014`. Exact detector cause: `badEscapes` in `tools/depcheck.mjs:85–93` flags every escape except escaped backslash or quote. This report does not call a Unicode escape invalid YAML. Required authority: the probability page owner must reconcile its title with the current repository rule, or the tool owner must adjudicate the rule if intentional Unicode escapes should be supported. Neither carrier nor tool is assigned here. No content workaround was made.

Reproduction output SHA-256: `a76aa7a47bb752c086cfd10d4b0fc0e48a75f5255f0ebe6fe0dcf6d366cf369e`.

## Focused check and preserved records

Read `items/ex-gaussians-and-polynomials-times-gaussians-are-schwartz.md` completely. Verification 1.1 matches the owning contract's existing polynomial-Gaussian derivative recurrence: differentiation sends Q exp(-pi t |x|²) to (partial_j Q - 2 pi t x_j Q) exp(-pi t |x|²). Conventions: t>0, no choice. Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-exponential-beats-every-polynomial`, `thm-derivative-of-exponential`, `def-ck-and-multi-index-notation-in-several-variables`.

`node tools/finite-smoke.mjs research/phase-2-fourier-support-2-batch-1.proof-contracts.json --items ex-gaussians-and-polynomials-times-gaussians-are-schwartz` returned 0: one check over one obligated item, 2,184 exact Taylor coefficients for eight polynomials, three positive Gaussian parameters and derivative orders 0–6. This is bounded algebraic evidence, not a general decay/proof claim. The existing obligation is nonempty; no liveness repair or new check selection is required. No external source reading or mathematical repair is claimed.

The existing authored decision file covers exactly the 61 assigned IDs. No decision was changed or bulk-stamped. A trial comparison against raw file hashes was inapplicable: `tools/step5-scope.mjs:1000–1008` hashes a composite currentDecisionCarrier, not the raw file alone. No stale-decision finding follows, and this report makes no exact-hash certification. Existing cross-group and closure protocols remain with the engine.

No carriers, manifests, contracts, risk reviews, provenance, frontier dependency records, plan or Phase-2 scope changed. No authored repair requires corresponding record updates, reflow or precheck. No newly defective published item was established; no published-ledger entry or lock acquisition was needed. Prior independent reviews and decisions remain intact. No shared-plan or Phase-2 amendments are proposed.

Workflow finding `p2-fourier2-5a-gate-unowned-depcheck` is recorded through the append-only defect-ledger interface. The serial fallback in `tools/autopilot/stages/authored-repairs.mts` routes unowned diagnostics to the all lane while assigning only current-run carriers; that lane cannot repair the actual consumer under its explicit scope. The finding has no assigned authored-item decision to attach to, so no duplicate gate decision was created.

Next action: the engine/authorized owner must route the actual Carleson consumer repair and the additional probability-page diagnostic to their owners, then rerun global depcheck. No scheduling, transition, judging or stamping was performed. The named gate remains unresolved.

Ledger validation: `node tools/defect-ledger.mjs validate --run phase-2-fourier-support-2` returned 0; two run rows checked, zero errors. Append interface added one open workflow row and regenerated its Markdown view.
