# Batch 4 Step 1 scaffold — Sobolev Traces and Zero Boundary Values

Run `frontier-38-owner-30`, role beta, label `batch-4` (attempt 2). Pair `sobolev-traces-and-zero-boundary-values`
(A 458.023 / B 458.024, category pde). Output: `research/frontier-38-owner-30-batch-4.pages.json`
(21 A + 7 B items; page cap 100 respected), `research/frontier-38-owner-30-batch-4.coverage.json`,
this note, `research/frontier-38-owner-30-batch-4.cross-batch-dependencies.json` (empty array), and one
`research/frontier-38-owner-30-step1-<id>.json` readiness record per item (28 `ready`, 0 `escalated`).

## Scope, design and plan reconciliation

- **Binding direction read first.** `research/frontier-38-owner-30-owner-authoring-direction.md` selects this pair
  exactly (table row `pde` / `sobolev-traces-and-zero-boundary-values` / 458.023/.024), forbids adding new PDE
  supplier pairs, and requires missing results to be proved locally on the consuming page; the eight added A
  items below are exactly that, and no claim was re-hypothesised or weakened.
- **Controlling design.** `research/plan-pde-track.md` PDE-13, L1423–1494. Its A inventory (13 items) and B
  inventory (7 items) are preserved item-for-item: the ordered endpoint estimate, half-space flat trace,
  bounded C^1-domain trace operator, agreement with continuous boundary values, kernel = W_0^{1,p},
  Euclidean Slobodeckij definition/well-definedness, patched boundary norm and atlas independence, sharp
  W^{1-1/p,p} trace theorem, bounded right inverse, inhomogeneous-data reduction, and the endpoint/rough-domain
  remark; on B the interval, ball, point-values, jump-datum, zero-extension, cusp and Poisson examples. The
  design's conventions (trace on a.e. classes; chart-independent surface measure; Slobodeckij norm with the L^p
  term; "onto" proved by a right inverse; the p=1 range *not* renamed W^{0,1}) and its two-direction proof
  obligation for the trace kernel are preserved.
- **Plan-spec comparison.** `research/plan-spec.json` carries orders 458.023/.024, the required `requires`
  arrays and empty `items` arrays, so no per-item plan conflict is representable. The manifest's page-level
  `requires` equal the plan verbatim: A = `smooth-approximation-and-sobolev-extension`, B = the A page.
- **Recorded conflict (design text vs plan, plan controls).** The design's "Requires" paragraph names
  "PDE-2D and PDE-11–PDE-12; MT-11/MT-14; the published quotient and partition-of-unity pages", while
  `plan-spec.json` lists only `smooth-approximation-and-sobolev-extension` for A (and the A page for B). The
  plan controls the run; the manifest matches the plan's `requires` exactly and consumes the design's other
  named suppliers at item level through their published items (boundary charts and outward normal, surface
  measure and its chart-independence, divergence theorem, finite ambient partitions, quotient L^p, smooth
  density, completion of bounded operators, Fubini/Tonelli, Lebesgue measure interfaces, Sobolev pasting,
  translation/approximate-identity convergence). No claim was weakened by the narrower page edge.
- **§12.5 "PDE-13 additions" treated as decomposition guidance.** The plan's §12.5 lists suggested
  decomposition rows. Three appear verbatim in this manifest
  (`lem-half-space-trace-has-the-fractional-slobodeckij-bound`,
  `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts`,
  `thm-sobolev-gauss-green-formula-on-c-one-domains`); five were folded into their anchors
  (uniqueness of the bounded trace extension into the two half-space/domain trace items; the multiplicative
  strip inequality into `thm-trace-estimate-on-the-half-space`(i); the classical normal-derivative corollary
  into the final clause of the Gauss–Green theorem; the collar-supported lifting into
  `thm-bounded-right-inverse-for-the-sobolev-trace`; the zero-trace boundary-cutoff approximation into the
  converse of `thm-kernel-of-the-trace-is-w-one-p-zero`; the smooth-multiplier product rule into
  `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts`). The four B-page additions (high-frequency
  boundary waves, interior point evaluation, formal p=1 notation, critical trace non-compactness) are
  exemplar suggestions, not commissioned PDE-13 claims, and are not scaffolded; run-wide, only these three
  addition IDs exist in any manifest (the sibling PDE batch-3 scaffolded none of its eight), so this is the
  run's established reading. No commissioned claim of the design section was dropped, weakened or re-hypothesised.
- **Drift verdict.** `research/frontier-38-owner-30-alpha-step1-drift.md` classifies this pair "no-drift" and
  directs normal authoring, retaining both directions of the trace-kernel theorem and keeping the p=1 L^1
  trace separate; the scaffold follows that direction. No cross-batch change or new pair is requested.

## Item inventory and dependency audit

- **A page: 21 items, dependency levels 0–7.** The eight items added beyond the design inventory are local
  prerequisites required for closure and authorised by the dispatch: `lem-coordinate-direction-form-of-the-slobodeckij-seminorm`
  (0), `lem-one-dimensional-hardy-inequality-on-the-half-line` (0), `lem-mean-zero-kernel-scale-estimate` (2),
  `lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces` (2),
  `lem-half-space-trace-has-the-fractional-slobodeckij-bound` (2),
  `thm-half-space-lift-by-normal-mollification` (4),
  `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts` (3) and
  `thm-sobolev-gauss-green-formula-on-c-one-domains` (3). They close the fractional-side proof route
  (directional decomposition, Hardy, mean-zero kernel scale estimate, density) that the design's compressed
  rows left to their sources, and the localisation/Gauss–Green inputs used by the kernel theorem.
- **B page: 7 items, levels 1–7**, a leaf page; every dependency is an earlier B item, an A item of this
  batch, or a published supplier. Nothing outside the pair consumes it.
- **Dependency closure.** 63 declared dependency slots, 20 distinct in-batch IDs and 43 distinct out-of-run
  IDs; all 43 resolve to published items on disk (checked mechanically), none carries `proved_here: false`,
  so no Recorded result is consumed to prove its replacement and no Foundations path (in particular no
  `deferred-set-theory-beyond-choice`) is opened. The load-bearing published interfaces were read at
  statement level: bounded C^1 chart/flattening, surface measure and chart independence, divergence theorem,
  finite ambient partitions, quotient L^p, smooth-up-to-boundary density, completion of bounded linear maps,
  Sobolev pasting, translation continuity and approximate identities, ACL characterisation, classical
  derivatives as weak derivatives, linear change of variables.
- **Labels.** `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` reports no error
  naming any batch-4 item (the six residual errors are "empty scaffold inventory" for sibling pairs still
  in flight); levels 0–7 on A, 1–7 on B, no cycles, no forward edges inside the batch, and every B dependency
  points to A or earlier B.
- **Axiom of Choice.** Every item's statement or strategy records its choice accounting: `def-axiom-of-choice`
  is declared where a proof consumes the ACL interface, density/extension through the completion property,
  the finite-partition patchings, or the Banach-space completion used by the lift; the Slobodeckij definition,
  the Hardy lemma and the statement arithmetic are choice-free with only Countable Choice for the measure
  interfaces (`def-countable-choice` is an explicit dependency where used). No incompatible-axiom branch is
  opened and no unstated choice is consumed.
- **Repairs made at this re-dispatch (all recorded before the readiness records were written).**
  1. `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range`: the statement's displayed chart integral
     was arithmetically wrong (`2∫_0^1(1-t)^{-1}dt`); it now reads `2∫_0^1 ∫_0^∞(s+t)^{-2}ds\,dt = 2∫_0^1 t^{-1}dt`,
     matching the strategy's correct `2/(sp) ∫_0^1 t^{-sp}dt` and its divergence exactly at `sp ≥ 1` (p ≥ 2).
  2. `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control`: the boundary description now
     names the top segment `y=1, |x|≤1` in addition to the two C^1 arcs, and the statement has been checked for
     internal consistency with the strategy's `u_δ(x,y)=θ(y/δ)`, `∂_y` estimate and strip `0<y<2δ` (the
     truncation direction, the area `≍δ^{α+1}`, the derivative bound `Cδ^{α+1-p}`, the arc length `≥δ` and the
     divergence exponent `(p-α)/p` all agree).
  3. `lem-half-space-trace-has-the-fractional-slobodeckij-bound`: a strategy exponent typo
     `(n-1)+p-2=(n-1)+pθ` was corrected to the identity actually used, `p-1=pθ` (the weight is
     `|h'|^{-(n-1)-(p-1)}`).
  4. Both Mironescu references were re-pointed from the bot-walled HAL URLs to the fetch-verified Internet
     Archive captures of the identical deposits (see Sources), so every item's reference URL is openable.
  No claim, hypothesis, dependency or level was weakened by these repairs.

## Sources

Nineteen source entries (12 on A, 7 on B): 15 fetch-verified, 4 documented drops (two URLs, each cited on
both pages). Per-page independent treatments: A carries Teschl (archived author manuscript, Ch. 9 §2),
Laugesen (Ch. 3), Hunter (§§3.6, 3.9), Schikorra (III.3 and V), Kampanou (Thm 3.2/3.3 complete proofs),
Gagliardo 1957 (Teorema 1.I/1.II), Zuppa 2009 (external cusp models), Hajłasz–Martio (Peetre threshold) and
Mironescu (notes and Gagliardo note); B carries Laugesen, Hunter, the archived Mironescu notes and note, and
Zuppa. All locators name printed pages and numbered results, and every source's `contents` lists its own
section/named-result headings with dispositions (94 harvested rows: 59 included/inline on A, 22 on B, plus
2 out-of-scope, 9 deferred to resolving plan pages, and 7 already-published rows).

- **The two documented drops (bot wall, not dead links).** HAL serves an Anubis proof-of-work wall to
  browser-like user agents: six recorded attempts per URL (before this re-dispatch) each received a 12.5 KB
  HTML challenge (1445 chars of text, under the full-text floor). Non-browser retrieval succeeds: the same
  URLs return the complete 628,854-byte 83-page notes deposit and the 186,529-byte 6-page Gagliardo note; the
  HAL metadata API confirms both deposits are live. Autonomous search found an author-hosted Lyon copy of the
  notes, but it is a **different edition** (the trace chapter is numbered 12 at printed p. 85, not the cited
  Chapter 11 at pp. 73–80), so it is recorded and not cited. Both documents were therefore re-harvested in
  full from Internet Archive captures of the identical deposits — `…/web/20200319104529id_/…/cel-00747696/document`
  (704,812 bytes, 83 pages, Chapter 11 verified at printed pp. 73–80) and
  `…/web/20240206144914id_/…/hal-01131162/document` (187,464 bytes, 6 pages, same Sections 1–2) — which are
  cited as separate fetch-verified source entries next to the drop records. The drop records carry the six
  attempts, three genuine searches each, and per-item alternative arguments with dependencies. No
  mathematical content was lost.
- **One link-maintenance finding.** `https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf` (Kampanou
  thesis) answers HTTP 404 to the liveness HEAD probe of 2026-10-02 while its stored full-text stamp (fetched
  earlier in this run) keeps the source resolved and unblocking. This is recorded as visible link maintenance,
  not as a mathematical gap; Step 3 should use the stamped copy or a replacement host if the author reads it.
- **All other URLs** are live (9/10 on the sweep; the tenth is the stamped 404 above) and every URL cited in
  an item reference now has a corresponding fetch-verified or documented-drop coverage entry.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-4.pages.json` → **28 item(s), 0 errors**.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-4.pages.json` → **28 items, 0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-4.coverage.json --require-destination` → **2 pages, 94 harvested results, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-4.coverage.json --stamp` → **15/19 fetch-verified (4 newly stamped), 19/19 resolved (4 documented drops), 0 failures**; check mode without `--stamp` → same, exit 0.
- `node tools/url-sweep.mjs --coverage research/frontier-38-owner-30-batch-4.coverage.json --out /tmp/b4work/b4-url-liveness.json --recover --fail-on-dead` → exit 0, **9/10 live, 1 failed (1 previously fetched, 0 blocking)**, 14 citation decisions including the 4 documented drops.
- `node tools/source-backing.mjs --coverage research/frontier-38-owner-30-batch-4.coverage.json --liveness /tmp/b4work/b4-url-liveness.json` → exit 0, **18 authored results, every one still backed by an openable source or documented alternative argument**.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → exit 1 whole-run, but **no error names a batch-4 item**; the six remaining errors are `empty scaffold inventory` for two sibling pairs still in flight. Batch-4 labels were additionally verified against the tool's own computation with no mismatch and no cycle.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → whole run not closed (751 items, 696 current ready records) because sibling batches are still landing; **every one of the 28 batch-4 items is closed with a hash-current `ready` record** and 0 open rows for this batch.
- Whole-run joins: `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json` → **751 items, 0 errors**; `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json` → **751 items, 0 errors, 0 warnings**.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (289 later planned pages still carry no item list; outside this pair).
- `node tools/extcheck.mjs` → exit 0; `node tools/fwdcheck.mjs --quiet` → exit 0 (every forward reference declared and closed by a planned later page; this pair declares none).
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → exit 0, **60 pages owed, 60 in the manifests, no scope drift**; `node tools/drift-review-check.mjs --run frontier-38-owner-30` → exit 0, **30 pages reviewed, no blocked edges**.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` → exit 0; batch-4 supplies its reviewed
  consumer input (`[]`), no edge in the refreshed ledger touches batch-4 (0 consumer/supplier edges), and the
  whole-run refresh succeeded. `--require-reviewed` is not yet clean run-wide because sibling batches 11, 13, 26
  and 27 have not supplied their own inputs — a whole-run condition, not a batch-4 finding.

## Unresolved findings and handoff

- The two live HAL URLs remain unusable for non-interactive clients by design of the repository's bot wall;
  the fetch-verified captures are the citable copies and the drop records preserve the original URLs,
  attempts and search evidence. If HAL is re-served without the wall, the captures remain valid.
- `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control` is the batch's only
  ai-generated item (statement and proof; the design's `L/A` marker notwithstanding). Its arithmetic and the
  `u_δ(x,y)=θ(y/δ)`/`∂_y` consistency were re-checked at this dispatch, but Step 3 must scrutinise it as an
  authored counterexample: the Zuppa source backs the model family and the above-critical exponent, not this
  precise concentrating sequence.
- The Kampanou thesis URL needs link maintenance (see above); its stamped full text remains the evidence.
- Owner/operator reconciliation and the full engine gate follow construction; neither a `ready` record nor
  this note is independent mathematical approval — Step 3 provides that review. No published content, shared
  plan, engine state or verdict was edited by this batch.

## Owner-held Step 3 gate repair, heat lane

The cusp witness now uses a genuine compact cutoff equal1 on [-1,1]. Its global x-independent extension is smooth, not compactly supported, and the displayed norm establishes Sobolev membership. Boundary lower bounds use compact regular subarcs epsilon≤y≤delta before epsilon tends to0. Matching bounds in step2.1 now prove the full two-sided ratio rate: bounded arc density gives boundary p-norm at most C delta, while theta(1)=1 and theta(2)=0 force a nonzero derivative on a compact subinterval, giving the gradient p-norm at least c delta^(alpha+1-p). The proof consumes Countable Choice and no weighted trace theorem. The optional weighted references are explicitly out-of-scope without a promised destination.

Exact decisions, source hashes, consumers and focused checks are in `frontier-38-owner-30-step3-gate-repair-heat-decisions.json` and the matching report. This lane provides mathematical repair evidence, not central certification or an owner decision.
