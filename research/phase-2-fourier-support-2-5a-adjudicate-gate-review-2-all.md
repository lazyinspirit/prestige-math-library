# Step 5A gate batch 2 — serial report

Disposition: no repairable finding on the 61 assigned carriers (57 items and four pages). Global depcheck remains blocked by an unowned probability-page title. This report records local diagnostic checks, not mathematical recertification, an independent review, or exact-hash closure.

## Complete dispatched-failure classification

Evidence: `research/phase-2-fourier-support-2-5a-adjudicate-gate-batch-2.json`. The sole failure is `depcheck`, exit 1. Parsed all 1,500 output lines, including every diagnostic: 150 multi-home, 212 orphan, one b-leaf-legacy, 110 cited-not-in-deps, one yaml-escape and one b-leaf-content. Other lines contain page depths and summary information. Exact-ID matching against the owner map finds no assigned carrier in any diagnostic. The 517 live IDs have empty intersection with the 61 assigned IDs. Exhausted IDs and ambiguous owners are empty. There are no assigned boundary/citation candidates, missing-risk-review findings, or liveness failures in this dispatch.

## Carleson finding: absent from current reproduction

Dispatched error: `[b-leaf-content] items/def-carleson-tiles-wave-packets-and-tile-order.md: depends on "ex-flat-exponential-function", which lives only on B/examples page(s) the-exponential-function-examples`.

Read the complete current consumer and published supplier `items/ex-flat-exponential-function.md`. The current consumer no longer declares or cites that example. Instead its Definition explicitly proves smoothness and flatness of rho(t)=exp(-1/t) for t>0, zero otherwise. Its recurrence is P_0=1 and P_(k+1)(u)=u²(P_k(u)-P_k'(u)); the r=0 decay gives continuity and r=1 gives the derivative at zero. Declared suppliers are `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-exponential-beats-every-polynomial`, and `cor-exponential-reciprocal-and-positivity`. This records the concrete change explaining disappearance of the graph error; it does not independently certify the unowned consumer's full dependency closure or its owner records.

The graph rule in `tools/depcheck.mjs:299–322` rejects a dependency on an exclusively B-page supplier from another page. Current reproduction no longer reports this edge. No edit was made here. The published supplier's stated smoothness/flatness and induction verification establish no new published defect in this diagnostic review. Its prior publication stamp was not treated as a new audit.

## Probability finding: unresolved, outside assignment

Remaining error: `[yaml-escape] library/probability/conditional-distributions-and-regular-conditional-probability-examples.md: title contains "\u" inside a double-quoted scalar`.

Read the complete page. Line 3 contains the literal escape `\u2014` in its double-quoted title. Exact detector cause: `badEscapes` in `tools/depcheck.mjs:85–93` reports every single-backslash escape other than escaped backslash or quote. Thus the page triggers the implemented repository rule; this is not a mathematical finding or a claim that the title is invalid YAML.

Required authority: the probability page owner must reconcile the title with the repository rule, or the tool owner must adjudicate support for intentional Unicode escapes. This dispatch assigns neither the page nor the detector. No Fourier content change can resolve that title check. No workaround, tool edit, plan edit, or permission request was made.

## Validation and records

`node tools/depcheck.mjs --quiet` returned 1. Comparison of every diagnostic with dispatched evidence verified that the only removed diagnostic is the Carleson b-leaf-content error, no diagnostic was added, and none names an assigned carrier. Reproduction SHA-256: `5ae2f671dd0e7e5628ecf5094f7106a893189eb0ab6f56d3679ca446e38146fe`. The current output contains 473 warnings and the single probability error.

`node tools/defect-ledger.mjs validate --run phase-2-fourier-support-2` returned 0: two rows checked, zero errors. Existing open workflow finding `p2-fourier2-5a-gate-unowned-depcheck` already records both the unowned-diagnostic routing problem and probability-title blocker through the append-only interface. No duplicate defect was appended and no historical row was overwritten. Its Carleson observation remains historical evidence; this report supplies the current reproduction. In `tools/autopilot/stages/authored-repairs.mts:69–82`, an unowned named ID selects the serial lane, whose assigned carriers still come only from the current owner map. Resolution therefore needs authority outside this content assignment. There is no owned authored-item decision to which this workflow finding can be attached.

No content repair was warranted or performed. Authored decisions, including any escalations, supplemental decisions and historical reviews remain intact. No contracts, manifests, provenance, risk reviews, frontier records, shared contracts or Phase-2 files became stale from this work. No shared-plan or Phase-2 amendment is proposed. No newly defective published item was established, so no published-ledger edit or lock was necessary. No changed carrier requires reflow or precheck. The evidence contains no empty-scope liveness failure requiring smoke selection; the already recorded finite-smoke receipt in gate review 1 remains historical, and was not rerun or represented as fresh evidence. No external-source reading or mathematical repair is claimed.

Next action: the engine/authorized owner must resolve the unowned probability title diagnostic and rerun the global gate. The named gate remains unresolved. Scheduling, transitions, cross-group audit and exact-hash closure remain with the engine and authorized lead.
