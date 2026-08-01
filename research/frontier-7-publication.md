# Frontier 7 publication receipt

Date: 2026-08-02

The owner authorized publication after the completed Step-10 audit. This change
publishes all 185 manifest-listed Frontier-7 items and all 16 A/B pages:
normal subgroups and quotient groups; Eulerian and Hamiltonian graphs;
logarithm and general powers; sine, cosine, and pi; convexity; total derivative;
Tychonoff embedding and Stone--Cech; and metrization.

The required publication-time scope-denial amendments landed with the sine
pair in `items/rem-classical-oscillator-is-sine-of-one-over-x.md` and
`library/real-analysis/limits-of-real-functions-examples.md`. The earlier
remark now declares orientation-only forward references to the later sine
examples, its stale model-verdict stamp is removed, and its owner audit date is
2026-08-02.

All locally proved published Frontier-7 items carry `verification.audited:
2026-08-02`. The two visible `proved_here: false` external-fallback remarks
retain their required `verification.sources_checked` records instead. The
publication gate results are:

- `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `citecheck`,
  and `validate-plan` completed successfully (their corpus-wide heuristic
  warnings remain warnings);
- Frontier-7 `content-policy` passed for all 185 scoped items;
- strict `proof-contract` passed for all 146 proof-bearing contracted items;
- `level-coverage --verify-current-context` passed against the current paired
  judge ledger, Alpha receipt, and dependency-spine receipt.

The targeted oscillator-amendment checks are included in the forward-reference,
render, and prose passes above.
