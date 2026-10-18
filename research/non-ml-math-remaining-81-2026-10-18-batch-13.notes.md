# Batch 13 authoring notes — Cost-Constrained, Gaussian, and Feedback Channels

Run: `non-ml-math-remaining-81-2026-10-18` · role: beta · batch: 13 · page order: 2518.

## Scope and plan reconciliation

- No design section exists for this pair. The pair was scaffolded from the full sources listed in the coverage file.
- The task and `plan-spec.json` agree on the A/B page IDs, category, and required pages: `discrete-memoryless-channel-capacity` and `gaussian-orthogonal-decomposition-and-quadratic-forms`. The plan's item arrays were empty, as expected before scaffolding.
- The plan summary for A requires scalar/vector Gaussian and cost models, a differential entropy definition restricted to an integrability class, and explicit power/covariance/memorylessness hypotheses. The carriers state these hypotheses; the entropy bound assumes absolute entropy integrability and positive finite variance.
- The plan summary for B also requires a finite information-capacity supremum that is not attained. The initial task text did not name that example, so A now includes the local definition `def-countable-dmc-zero-cost-information-capacity` and B includes `ex-countable-input-channel-finite-capacity-supremum-not-attained`. Its proof gives the finite value `ln 2` and proves every input law has strictly smaller mutual information. The A/B counts are 25 and 4, below the 100-item page cap.
- The countable-input example is a separate local model; the finite-alphabet DMC formula retains its original finite hypotheses. The exact fourth-moment AWGN nonattainment example read in Polyanskiy–Wu is recorded as out of scope in the source harvest; the local countable-input example supplies the required nonattainment claim with a complete proof.

## Dependency and batch evidence

- The dispatch specified batch level 4, prerequisite batch 12, and scheduling input `6dd65f597bef84b5f35d48423a7defa2482cc192da6b8be1b5b32da5ad558586`.
- The current shared dependency-level file has file SHA-256 `c1efbc4194bc0fbdafa16585202a3a81b0b4a4ae0868dd5c1fa21d4e59997605` and internal `input_sha256` `5b660437ff2af54b535a540c160e388767c35cc9176ba0f032f335e8f61d5bfe`. Its batch 13 row is level 4 with prerequisites 4, 7, and 12. This differs from both the dispatch input hash and its listed prerequisite batches; shared scheduling input was left unchanged.
- Item dependencies were reconciled against the current batch manifests and carrier frontmatter, then item levels were recomputed from the run manifest graph. Batch 13's labels match the computed graph; its maximum item level is 11.
- The full run dependency-level check exits nonzero with 86 errors elsewhere and zero batch 13 item errors. They include empty inventories on other pages, a dependency cycle involving `def-weighted-lagrangian-ribbon-bordism` and `lem-3-manifold-boundary-kernel-is-lagrangian`, and stale levels in other batches, including batch 12. Those shared items/manifests were not edited.
- Direct suppliers are available and their actual bodies were inspected. The cross-batch sidecar records 126 item edges and three page edges, interface excerpts, required hypotheses/uses, supplier proof-step IDs, and current readiness context. No unresolved supplier ID remains in this pair. Current in-run supplier readiness records are authoring-readiness evidence only; owner-sealed records are identified as such, and no independent acceptance is inferred.

## Source reading and retrieval

The coverage file records the full 730-page Polyanskiy–Wu textbook, the complete MIT 6.441 Chapter 17 and Chapter 21 PDFs, and the complete 624-page MacKay book mirror. I inspected the cited cost-constrained DMC, AWGN, water-filling, feedback, Gaussian maximum-entropy, countable-input, and nonattainment sections and their relevant arguments. The local proof carriers provide their own complete derivations rather than treating a source citation as a proof.

`source-fetch-check --stamp` reports 6/6 source records fetch-verified (four newly stamped in the first successful stamp pass; the Polyanskiy–Wu stamps were reused from batch 12). The final coverage checklist reports two pages and 20 harvested source results, with zero errors and zero warnings. No source was dropped or escalated.

## Authored proof and check status

- A page: 25 items; B page: 4 examples. The A page includes an explained TikZ feedback-channel diagram; no proof relies on it.
- Proof contracts cover all 29 items and their numbered proof steps, supplier excerpts, boundary cases, axiom uses, and applicable finite checks.
- Final scoped checks: `manifest-deps` — 29 items, zero missing dependencies; `precheck` — 29 files, 23 proof-bearing items checked, zero failures; `proof-layout` — 29 items, 69 steps, zero defects; `rendercheck` — 31 assigned item/page files, zero errors or warnings; strict proof contracts — 29/29 checked, zero errors or warnings; coverage checklist — zero errors or warnings; source fetch check — 6/6 stamped.
- Step 1 records now mark all 29 batch 13 items `ready` (`owner: false`), with each item's declared direct dependency IDs and readiness rationale. A targeted check recomputed all 29 record hashes and confirmed each is current. The run-wide Step 1 check could not finish: it stops with `physics mathematics context: noncanonical root identity: items/thm-it-dmc-uniform-quadratic-capacity-decay.md`, an unrelated supplier identity outside batch 13. The readiness records are authored evidence, not independent acceptance.
- The final full-run dependency-level check exits nonzero for the 86 other-pair/run-wide errors listed above. Batch 13 itself has zero dependency-level errors.

## Live run status at handoff

The recomputed Autopilot status is `running`, with nothing in flight. Updated 2026-10-17T17:51:08.248Z, it still reported 67/81 scaffold pairs covered and listed batch 13 among the missing authoring coverage; artifact completion is deferred until authoring coverage is complete and writers drain. Its reported blocker is the owner-managed `plan()` failure on malformed JSON at position 6647 (line 129, column 2). Runtime state and shared plans were left unchanged.
