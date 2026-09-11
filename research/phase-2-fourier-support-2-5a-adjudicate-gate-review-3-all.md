# Step 5A gate batch 3 — serial report

Disposition: no repairable finding on the 61 assigned carriers (57 items and four pages). Two unowned mechanical blockers reproduce. This report records a scoped diagnostic review and local checks, not mathematical recertification, independent review, or exact-hash closure.

## Complete evidence classification

Read and parsed both failures in `research/phase-2-fourier-support-2-5a-adjudicate-gate-batch-3.json` (SHA-256 `ef45b0f77e6427647d25790294f2c3a65119527487d77551860f83c1f20a1a61`).

- `precheck`, exit 1: all 13,460 output lines were classified, comprising 13,428 PASS lines, one centralizer REPAIR diagnostic and its complete proposed proof, blank lines and the summary `13429 checked, 1 failing`. No other diagnostic is present. Its one live ID is unowned.
- `depcheck`, exit 1: all 1,499 lines were parsed. Diagnostics comprise 150 multi-home, 212 orphan, one b-leaf-legacy, 110 cited-not-in-deps and one yaml-escape. The other lines are page depths and summaries. Its 515 live IDs have empty intersection with the owner map. Exact-ID matching of all diagnostic lines finds no assigned carrier. Mentions of Fourier pages in the page-depth table are not failures.
- The precheck failure's embedded depcheck advisory is byte-for-byte identical to the top-level depcheck output; it supplies no additional finding.

Both exhausted-ID lists and the ambiguous-owner list are empty. There are no assigned boundary/citation candidates, missing risk reviews, or empty-scope liveness failures. No item-specific mathematical disposition is newly required by these diagnostics; prior authored decisions remain intact.

## Centralizer precheck: unresolved and unowned

Exact carrier: `items/lem-axis-fellow-travelling-controls-the-centralizer.md`, currently draft. Read its complete current text and the complete proposed canonical proof in the dispatched evidence. The checker reports `REPAIR`, not a failed mathematical inference.

Exact cause: the normative `layerRepair` in `/home/lazyinspirit/Projects/prestige-intelligence/worker/src/precheck.ts:46–105` assigns phase layers from step citations, sorts steps by layer, and relabels them. The current point-to-segment argument is step 3.1 but cites only F2 and algebra, so the proposed canonical text moves it to 1.2. Current 2.2 cites 2.1 and belongs to layer 3. The complete old-to-new label mapping is 1.1→1.1, 2.1→2.1, 2.2→3.1, 3.1→1.2, 4.1→4.1, 5.1→4.2, 6.1→5.1, 7.1→6.1; corresponding references are rewritten. `tools/precheck.mts` treats `r.repaired` as a failing item and prints the proposed text without writing it.

Focused reproduction: `node tools/tsx-run.mjs tools/precheck.mts items/lem-axis-fellow-travelling-controls-the-centralizer.md` returned 1, `1 checked, 1 failing`, with the same REPAIR diagnostic. Output SHA-256: `d4594d85da3791b4f681f66928958b64f8e22363c32a228d5b17fc2cb9872a14`.

Required authority: the hyperbolic-geometry content owner must adopt and review the canonical phase ordering and synchronize affected records, or the checker owner must adjudicate its layering requirement. This assignment licenses neither carrier nor tool. A Fourier content edit cannot repair that file. No workaround or mathematical verdict on the unowned argument was made; its prerequisites and external source were not independently audited here.

## Probability title: unresolved and unowned

Exact error: `[yaml-escape] library/probability/conditional-distributions-and-regular-conditional-probability-examples.md: title contains "\u" inside a double-quoted scalar`.

Read the complete current draft page. Its title at line 3 contains the literal escape `\u2014`. `badEscapes` in `tools/depcheck.mjs:85–93` rejects each backslash escape except escaped backslash or quote. The error therefore follows the implemented repository rule; it does not establish that Unicode escapes are invalid YAML or that any mathematical claim is defective.

Required authority: the probability page owner must reconcile the title with the repository rule, or the detector owner must decide whether intentional Unicode escapes should be supported. Neither is assigned here. This is the existing blocker recorded in gate reviews 1 and 2 and workflow row `p2-fourier2-5a-gate-unowned-depcheck`; no duplicate row or content workaround is needed.

`node tools/depcheck.mjs --quiet` returned 1, with 473 warnings and this single error. Output SHA-256: `5ae2f671dd0e7e5628ecf5094f7106a893189eb0ab6f56d3679ca446e38146fe`. Assertions verified that all 474 diagnostic lines match the dispatched diagnostic set exactly and none names an assigned carrier.

## Owned validation and record continuity

Ran `node tools/tsx-run.mjs tools/precheck.mts` with all 57 explicit assigned item paths, selected from the evidence owner map. Exit 0: `50 checked, 0 failing — all clean`. The remaining seven items have no checkable proof body under this tool. Output SHA-256: `d65e013b5befdc55c79a985d3e3c9aa885ac2a2bcb24e15288fb8155f4f659da`. This mechanical result is not proof certification. No carrier changed, so reflow is unnecessary. No liveness failure requires smoke selection; earlier smoke evidence remains historical.

The serial routing in `tools/autopilot/stages/authored-repairs.mts:69–82` selects the all lane when a named diagnostic ID has no current-run owner, but constructs its assigned carriers solely from the current owner map. The new centralizer occurrence therefore cannot be resolved within the dispatched content authority. Recorded it through the append-only defect-ledger interface as `p2-fourier2-5a-gate-unowned-precheck`, linked to the existing routing finding. There is no owned authored-item decision to attach this unowned workflow blocker to; no duplicate gate decision is created.

No content, contracts, manifests, provenance, risk reviews, authored decisions, frontier records, shared contracts, plan or Phase-2 scope were changed. No record became stale from a repair. Historical reviews, escalations and supplemental decisions are preserved. No shared-plan or Phase-2 amendment is proposed. No new published-item mathematical defect was established, so no published-ledger edit or lock acquisition was warranted. No external mathematical source reading or completed repair is claimed.

Next action: the engine/authorized owners must resolve the centralizer phase-format and probability-title blockers and rerun the complete gate battery. Both named global gates remain unresolved. Scheduling, transitions, cross-group audit and exact-hash closure remain with the engine and authorized lead.

Ledger validation: `node tools/defect-ledger.mjs validate --run phase-2-fourier-support-2` returned 0: three run rows checked, zero errors. The append interface added the one new workflow row and regenerated its Markdown view; earlier rows were preserved.
