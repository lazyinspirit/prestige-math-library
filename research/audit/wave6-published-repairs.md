# Wave 6 published-repair ledger

Audit stage: A6. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-08. Hashes are full SHA-256 values of
normalized item text, with only the `verification:` block removed by
`tools/item-hash.mjs`.

## A4 material repairs certified at A6

Each final item was read from disk by an independent read-only GPT 5.6 Terra
certifier. The corresponding result under `research/audit/wave6-dispatch/`
records `VERDICT: CERTIFIED`, and the task hash equals the current normalized
hash. Only after that check did Audit-Alpha write `verification.verified` with
`scope: published-audit` and `delegated_by: owner`.

| item | defect and final repair | independent result | normalized hash |
|---|---|---|---|
| `thm-laurent-ordered-field` | `[L5]` used canonical-natural notation without its exact definition; `def-archimedean-field` was added to `deps` and to the Fact. | `certifier-thm-laurent-ordered-field.result.json` | `f80fd0cdfde2a2585bb2d9564b88bd89845a1da6f15e387bf56d72f579080a18` |
| `thm-laurent-cauchy-complete` | natural-index comparisons silently used totality; `thm-nat-linear-order` was added to `deps` and the licensing Fact. | `certifier-thm-laurent-cauchy-complete.result.json` | `cc1b09d79aa5ca608eb9ca2a715999b9b4e104e152abd9fcda66a1d06dca64d0` |
| `cor-laurent-nested-intervals` | natural-index comparisons silently used totality; `thm-nat-linear-order` was added to `deps` and the licensing Fact. | `certifier-cor-laurent-nested-intervals.result.json` | `1c3033bcffeb0936dfbfb5a684522749f0ddf3c0c0fcaf77d2ce0d505782a8e5` |
| `cex-zero-times-infinity-indeterminate` | the third witness overclaimed that its product had no limit; the text now gives its exact extended limit `+infinity`, while retaining the three incompatible outcomes. | `certifier-cex-zero-times-infinity-indeterminate.result.json` | `c8540f4b61482b0e72b08333b770ac6f4f747c66680519ecc5f909e1b3c40d36` |
| `cex-limsup-infinite-not-attained-in-r` | an unused duplicate Fact and its stale local citations were removed; the relevant Remark now cites the theorem directly and the remaining proof labels were renumbered. | `certifier-cex-limsup-infinite-not-attained-in-r.result.json` | `75f6b52dbb4b55bf29a648a5b64e0d49206b781a28f50b7367c6548ef176363a` |

No A4 repair changed an id, reading order, or published Statement. All five
also received a current DeepSeek V4 Pro `VERDICT: CLEAN` proof-refuter reading.

## A4 topology source corrections

The topology Beta found 19 legacy references whose titles named Munkres or
Steen–Seebach while their URLs opened only an author biography or an article
about the book. A3 approved replacing or removing those entries with the direct
mathematical sources documented in `wave6-topology.provenance.jsonl`. These are
source corrections, not pure provenance retags, and therefore belong in the A7
repair target even though `audit-split.mjs` correctly classifies their bodies
and public mathematical interfaces as byte-identical.

The 19 corrected ids are:

- `def-the-diagonal-of-a-space`
- `lem-the-diagonal-map-is-an-embedding`
- `thm-hausdorff-iff-the-diagonal-is-closed`
- `cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`
- `cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`
- `lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`
- `thm-a-compact-hausdorff-space-is-regular-and-normal`
- `lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`
- `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`
- `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`
- `rem-what-the-diagonal-criterion-gives-and-what-it-costs`
- `ex-the-diagonal-of-the-real-line-is-closed`
- `ex-the-graph-of-a-continuous-real-function-is-closed`
- `ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal`
- `ex-a-finite-hausdorff-space-is-discrete`
- `ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space`
- `fs-a-function-with-closed-graph-is-continuous`
- `ex-the-diagonal-in-the-cofinite-and-cocountable-topologies`
- `cex-a-closed-graph-without-continuity`

The last two closed-graph items were subsequently corrected again at A6 to use
the live official UCL host, and their final-text certification is recorded
below. The other 17 retain exactly the A4 mathematical text read CLEAN by the
Wave 6 DeepSeek refuter pass. The A7 paired rejudge supplies the second current-
text lane for all 19.

## A6 URL dispositions and source-only corrections

The orchestrator's `wave6-url-liveness.json` checked 92 scoped URLs: 89 were
live and three checks were unsuccessful.

- The Padua homotopy PDF timed out, but remains a current official resource
  whose indexed content supports the four ledger uses. It is retained as a
  transient timeout, not classified as dead or off-topic.
- The MIT 18.901 URL returned HTTP 404. It duplicated the live, on-topic UC
  Riverside algebraic-topology notes already present in the same six item
  source lists, so Audit-Alpha removed only that dead duplicate.
- The legacy `www.ucl.ac.uk` Handout 7 URL returned HTTP 404. The same official
  PDF is live at `www.homepages.ucl.ac.uk`; Audit-Alpha replaced the URL in the
  two items, the matching topology provenance rows, and the findings evidence
  table. The handout gives the exact closed-graph discontinuous function used.

Source-only item edits and their final normalized hashes:

| item | disposition | normalized hash | independent certification |
|---|---|---|---|
| `ex-intervals-and-euclidean-spaces-are-contractible` | removed dead redundant MIT URL; retained UCR source | `93a5765833bcd50dcdd249f0103a8d4e8b25f7ea33223fe525703408f286ebdc` | CERTIFIED: `certifier-source-ex-intervals-and-euclidean-spaces-are-contractible.result.json` |
| `ex-straight-line-homotopy-between-maps-into-rn` | removed dead redundant MIT URL; retained UCR source | `911ef329af175a596d01b9703eafba59b00d2e61abfd519e879768e5e9a54938` | CERTIFIED: `certifier-source-ex-straight-line-homotopy-between-maps-into-rn.result.json` |
| `thm-two-maps-into-a-convex-set-are-homotopic` | removed dead redundant MIT URL; retained UCR source | `7382b52d0a0ce4fdb6969f1409dba6f8acbe7c66b996f65bc2b5238998eb69ea` | CERTIFIED: `certifier-source-thm-two-maps-into-a-convex-set-are-homotopic.result.json` |
| `cor-convex-subsets-of-rn-are-contractible` | removed dead redundant MIT URL; retained UCR source | `bb1cce791779ab85da116f724147aed63a1b269df655dfd034a4fbe41580cf38` | CERTIFIED: `certifier-source-cor-convex-subsets-of-rn-are-contractible.result.json` |
| `ex-path-homotopy-through-straight-segments-in-a-convex-set` | removed dead redundant MIT URL; retained UCR and Hatcher sources | `80ae589ce9c3e3b0f2ba8ba7c0db711a4b0d4925050673b4aa2031d17770a792` | CERTIFIED: `certifier-source-ex-path-homotopy-through-straight-segments-in-a-convex-set.result.json` |
| `lem-straight-line-homotopies-are-continuous` | removed dead redundant MIT URL; retained UCR source | `4421293444a41a1cc2c640107442e57e67780346c1f2c43db34dfb0274765967` | CERTIFIED: `certifier-source-lem-straight-line-homotopies-are-continuous.result.json` |
| `fs-a-function-with-closed-graph-is-continuous` | replaced dead legacy host with live official UCL host | `0f9e69920fe94da65bcf3e7dfc0627f6b1394c0c84d94bfc124ab3a304e52961` | CERTIFIED in the combined final-text receipt: `certifier-source-ucl-closed-graph-pair.result.json` |
| `cex-a-closed-graph-without-continuity` | replaced dead legacy host with live official UCL host | `e89824b7806d80bf48d312a69eb58d2251bc82c5b4e9080e2bcd6fe1c9293938` | CERTIFIED in the combined final-text receipt: `certifier-source-ucl-closed-graph-pair.result.json` |

The prescribed certifier calls used `--role certifier`, the owner-supplied
no-permission rule, the read-only sandbox, and final-hash tasks. The current
local transport denied WebSocket and HTTPS connections before inference, so
the orchestrator executed the same tasks through the authorized external
transport. Six MIT-removal calls and the combined two-item UCL-host call
completed and certified all eight exact final hashes. No source-only item was
self-certified.
The handed `pre-A4`/`post-A4` interface set already contains all eight item ids;
the A6 corrections alter only source URLs and neither add a changed-interface id
nor change the current consumer graph. The regenerated impact receipt therefore
has the same exact 126-interface/912-consumer scope and remains complete without
taking a forbidden extra snapshot.

## Other A6 receipts

- All 126 scoped items received a tool-less, read-only DeepSeek V4 Pro audit-
  refuter reading with `VERDICT: CLEAN`; every assembled task included the full
  target and every cited/declared item.
- All 93 high/critical contracts contain an item-specific complete
  `risk_review`; merged strict contract validation is 106/106.
- All eight newly load-bearing Wave 6 generated seeds have concrete ladder
  dispositions in `genrisk.json`; the receipt passes with only the expected
  warnings for generated seeds intentionally retained and flagged.
- No Alpha mathematical repair, deletion, id change, or reading-order change
  was made during A6. At that stage the A8 edited-item/rejudge list was empty;
  the later fatal-only A8 repairs are recorded separately below.

## A8 fatal-only repairs

The expanded 30-item repair target exposed six judge rejections. Audit-Alpha
adjudicated two as `confirmed_fatal`, two as `confirmed_nonfatal`, and two as
`false_positive`. In accordance with the owner-confirmed fatal-only A8 rule,
only the two fatal items changed:

| item | fatal defect and narrow repair | provenance | pre-edit hash | final normalized hash | independent final-text certification |
|---|---|---|---|---|---|
| `thm-hausdorff-iff-the-diagonal-is-closed` | The Statement falsely said every consequence on the page came from pulling back the diagonal. It now names only the agreement-set consequence and its graph specialization. | Statement `literature-derived` -> `ai-altered`; evidence `exact-source` -> `semantic-source` because the core theorem remains source-backed while the page-scope prose is a material local restatement. | `8fea93f9d9d8f98b84203acb65796250a536a6c6908d2766f215d79fe0b87a86` | `ebdfe109ea93a3b59f670a1a1e202453f2199f608e0c0ad76d19829fc5866d6f` | GPT 5.6 Terra, `a8cert-thm-diagonal-scope`, CERTIFIED |
| `ex-the-graph-of-a-continuous-real-function-is-closed` | A Remark said compactness alone restored the closed-graph equivalence. The missing Hausdorff hypothesis was inserted. | No class change; this is a one-phrase correction to the existing generated Remark. | `4fe01c8d4499bdbf3f77f1967fceab9b39cda58c39106e9502d8443d6e544269` | `d7655d541fd84197d94962fba76edce543943c2b00cb6d560a79b44332cf9288` | GPT 5.6 Terra, `a8cert-ex-closed-graph-hypothesis`, CERTIFIED |

Both certifiers ran read-only at `xhigh`, read the complete final items and the
relevant dependencies, matched the exact hashes above, and returned no finding.
The four nonfatal/false-positive adjudications licensed no mutation. The only
A8 paired rejudge targets were the two repaired ids in this table. Both exact
final contexts then passed DeepSeek V4 Pro and GPT 5.6 Terra, and
`wave6-targeted-judge-receipt.json` licensed fresh judge stamps on exactly
those two items. The post-A8 impact audit found 25 required consumers of the
theorem and none for the example; all 25 remain licensed because the theorem's
mathematical biconditional is unchanged.
