# Batch 4 Step 1 scaffold — Sobolev, Poincare and Morrey Inequalities

Run `frontier-39-analysis-30`, role beta, label `batch-4`. Pair
`sobolev-poincare-and-morrey-inequalities` (A 458.025 / B 458.026, category pde).
Outputs: `research/frontier-39-analysis-30-batch-4.pages.json` (24 A + 8 B items;
the 100-item page cap is respected with wide margin),
`research/frontier-39-analysis-30-batch-4.coverage.json`, this note,
`research/frontier-39-analysis-30-batch-4.cross-batch-dependencies.json` (empty
array), and one `research/frontier-39-analysis-30-step1-<id>.json` readiness
record per item (32 `ready`, 0 `escalated`; every record hash-current against the
frozen manifest below).

## Scope, design and plan reconciliation

- **Binding direction.** No `research/frontier-39-analysis-30-owner-authoring-direction.md`
  exists for this run (checked); the run-local owner resolution
  `research/frontier-39-analysis-30-step1-owner-resolution.md` does not touch this
  pair. The Step-1 drift report `research/frontier-39-analysis-30-alpha-step1-drift.md`
  classifies this pair **no-drift** and directs normal authoring, with one
  enrichment instruction: if the enrichment's dual estimate is built, define
  H-minus-one as the dual of H-one-zero before using it. That estimate is not
  built here and is deferred to PDE-16 (see below).
- **Controlling design.** `research/plan-pde-track.md` PDE-14, L1476-1536 (the L49
  mention is the id row). Its A inventory (15 items) and B inventory (7 items) are
  preserved as claims: the conjugate exponent, potential bound, p=1 and 1<p<n
  Gagliardo-Nirenberg-Sobolev inequalities, the W_0^{1,p} corollary, ball and
  one-direction Poincare inequalities, mean-zero Poincare-Wirtinger, the
  extension-domain embeddings for p<n and p=n, Morrey, W^{1,infinity}/Lipschitz,
  the higher-order alternatives, the Sobolev algebra and the critical-endpoint
  remark; on the B page the scaling, interval and connectedness items, the
  critical and Morrey-endpoint counterexamples, the radial power example and the
  unbounded-domain failure. The page cap forced no omission. Nine local A
  prerequisites and one local B witness were added for closure (inventory below),
  which the dispatch authorises: "create as many prerequisite items as needed to
  prove every claim soundly".
- **Plan-spec comparison.** `research/plan-spec.json` carries orders 458.025/.026,
  `requires: [sobolev-traces-and-zero-boundary-values]` for A and the A page for
  B, with empty item arrays, so no per-item conflict is representable. The
  manifest's page-level `requires` equal the plan verbatim.
- **Recorded conflict 1 (design text vs plan; the plan controls).** The design's
  "Requires" paragraph names PDE-2D, PDE-11--13, MT-11/14--15/17 and Euclidean
  integration tools, while plan-spec lists only the trace page. The manifest
  matches the plan's `requires` exactly and consumes the other named suppliers at
  item level through their published items (polar coordinates and surface
  measure, Fubini/Tonelli, Holder, L^p quotient, smooth density, ACL/FTC, ball
  averages, maximal-function and Marcinkiewicz interpolation, extension operators,
  Sobolev-transfer corollary). No claim was weakened by the narrower page edge.
- **Owner-resolved conflict 2 (design mean-zero domain class).** PDE-14
  preserves the planned 1<p<n Sobolev--Poincare claim on bounded connected
  extension domains. A local mean-zero Lp helper proves the compactness step
  using extension, cutoff, mollification and Arzela--Ascoli; the exact p*
  theorem then follows from this helper and the existing embedding. This route
  does not consume PDE-15. PDE-15 retains its separate full-range
  1<=p<infinity same-exponent Poincare--Wirtinger theorem. The split and source
  coverage are reconciled in the owner integration below.
- **Recorded conflict 3 (design item 12 phrasing).** The design says W^{1,infinity}
  "agrees with Lipschitz functions" on convex domains. Both directions are
  scaffolded: the W^{1,infinity} class has a Lipschitz representative, and a
  Lipschitz function lies in W^{1,infinity} with the a.e. coordinate derivative as
  weak gradient. The converse is proved through linewise absolute continuity and
  the published ACL characterisation, so no Rademacher theorem is needed or
  claimed.
- **Design s12.5 enrichment dispositions** (canonical rows in the coverage file):
  the positive-measure-zero-set Poincare theorem is included; the
  pairwise-difference formula, the intermediate-L^q interpolation, the Morrey
  ball-average estimate, the p*-scale-invariance computation and the higher-order
  Morrey embedding are absorbed inline by their anchor items; the half-space
  Hardy inequality and the general Gagliardo-Nirenberg derivative interpolation
  are out of scope with written reasons; the bubble example is deferred to
  `rellich-kondrachov-and-sobolev-compactness`; the dual H^{-1} estimate is
  deferred to `lax-milgram-and-weak-elliptic-solutions`, which owns H^{-1} and
  where the drift instruction to define H^{-1} before use applies; the
  normalisation and boundary-Hardy counterexamples are inline/out-of-scope as
  recorded. No design-section claim was dropped or re-hypothesised.
- **Drift verdict.** no-drift; both directions of the design's scope are retained
  (subcritical and critical embeddings; p=1 separated from 1<p<n; Morrey's
  representative construction; the endpoint limitation). The `--require-reviewed`
  cross-batch ledger refresh is not yet clean run-wide because sibling batches
  have not supplied their inputs; batch-4 supplies its own reviewed input `[]`.

## Item inventory and dependency audit

- **A page: 24 items, dependency levels 0-5.** Design items map one-to-one except
  item 8, which is realised as the John-domain theorem (conflict 2). The nine
  added local prerequisites are:
  `def-john-domain-and-john-constant` (0),
  `lem-john-domain-admits-bounded-overlap-ball-chains` (1),
  `lem-truncated-riesz-kernel-potential-bounded-on-lp` (0),
  `thm-poincare-inequality-with-a-positive-measure-zero-set` (3),
  `cor-poincare-wirtinger-on-convex-domains` (0),
  `lem-ball-mean-oscillation-potential-bound` (1),
  `lem-weak-partial-derivatives-lower-sobolev-order` (0),
  `lem-weak-product-rule-for-bounded-sobolev-functions` (0), and the scope
  remark `rem-domain-classes-for-the-mean-zero-poincare-inequality` (3). They
  close the direct (compactness-free) proof of the mean-zero inequality and the
  iteration used by the higher-order and algebra results.
- **B page: 8 items, levels 0-4**, a leaf page; every dependency is an A item of
  this batch or a published supplier. One item beyond the design's B inventory,
  `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation`, records
  the sharpness of p* (the design's s12.5 row of the same name); nothing else
  consumes it.
- **Dependency closure.** All declared dependencies resolve to published items on
  disk (checked mechanically by `manifest-deps` and `content-policy
  --manifest-only`), none is a recorded-not-proved item, and no Foundations path
  is opened. The load-bearing published interfaces were read at statement level:
  polar coordinates and surface measure, translation invariance, Fubini/Tonelli,
  generalized Holder, L^p quotient and completeness, local smooth approximation,
  compactly supported density, ACL characterisation and the FTC for absolutely
  continuous functions, ball averages, maximal-function weak/strong bounds,
  Marcinkiewicz interpolation, the two extension-domain suppliers and the
  Sobolev-transfer corollary.
- **Labels.** `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  reports no error naming a batch-4 item once labels are set from the tool's own
  computation; the residual errors are `empty scaffold inventory` for sibling
  pairs still in flight. No cycle, no forward edge inside the batch, and every B
  dependency points to A or to an earlier B item.
- **Axiom of Choice.** Each item records its choice accounting. Choice is declared
  where a proof selects John curves and chains (A: def-John, chain lemma, the
  John Poincare theorem), transports through density, completion or extension
  interfaces, or uses the polar/measure interfaces (Countable Choice via
  `def-countable-choice` is an explicit dependency where consumed). The
  conjugate-exponent, potential-bound, ball/interval Poincare, kernel,
  derivative-lowering, product-rule and Lipschitz items are choice-free beyond the
  published measure interfaces they cite. No incompatible-axiom branch is opened.

## Sources

Seven source entries, all fetch-verified in full by
`source-fetch-check --stamp` (7/7, 0 failures, 0 drops), with per-URL liveness
4/4 and every authored required result still backed:
Kinnunen, *Sobolev Spaces* (Aalto 2026, complete notes; Chapter 3 ss3.1-3.4 and
Chapter 5 ss5.3, 5.9); Hunter, *Notes on PDEs* (UC Davis, complete 242-page
two-quarter notes; ss3.5-3.8, 3.11 and 4.4); Laugesen, *Linear Analysis and PDE*
(Illinois, complete 158-page notes; ss3.4-3.10); and Teschl, *Partial Differential
Equations* (archived 2025 author manuscript; Chapter 9 ss9.1-9.3). The A page
carries four independent treatments (two complete lecture-note sets, one
manuscript and one complete graduate-note set: at least two independent
treatments including book/lecture-note sources per the source contract), the B
page three. Every harvested heading across the published locators received an
explicit disposition: 76 harvested rows in total (63 on A, 13 on B), of which
33 rows are disposed included (a few items are named by two independent sources),
the remainder inline, already-published (the generalized
Holder item), deferred with resolving destinations, or out of scope with written
reasons. All locators name printed page ranges and numbered results, and every
source's `reading_verification` records the download and the sections read.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-4.pages.json`
  -> **32 item(s), 0 errors**.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-4.pages.json`
  -> **32 items, 0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-4.coverage.json --require-destination`
  -> **2 pages, 76 harvested results, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` -> **7/7 source(s)
  fetch-verified (7 newly stamped), 7/7 resolved, 0 failures**; check mode without
  `--stamp` -> same, exit 0.
- `node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead` -> exit 0,
  **4/4 live, 0 failed**; `node tools/source-backing.mjs --coverage ... --liveness
  /tmp/b4work/b4-url-liveness.json` -> exit 0, **23 authored result(s), every one
  still backed by an openable source**.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` ->
  exit 1 whole-run, but **no error names a batch-4 item**; the residual errors are
  `empty scaffold inventory` for sibling pairs still landing. Batch-4 labels were
  additionally verified against the tool's own computation (levels 0-5 on A, 0-3
  on B, no mismatch, no cycle).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` -> whole run
  not closed (164 items at check time, 121 ready) because sibling batches are
  still landing; **every one of the 32 batch-4 items is closed with a
  hash-current `ready` record** and 0 open rows for this batch.
- Whole-run joins over the batch manifests written so far:
  `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  -> **215 items, 0 errors**; `node tools/content-policy.mjs --manifest-only ...`
  -> **215 items, 0 errors, 0 warnings**.
- `node tools/validate-plan.mjs research/plan-spec.json` -> exit 0 (later planned
  pages still carry no item lists; outside this pair). `node tools/extcheck.mjs`
  -> exit 0 (it does surface the pre-existing published `thm-urysohn-lemma`
  unproved dependency, unrelated to this pair and not introduced here);
  `node tools/fwdcheck.mjs --quiet` -> exit 0 (this pair declares no forward
  reference).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` -> exit 0,
  **60 pages owed, 60 in the manifests, no scope drift**;
  `node tools/drift-review-check.mjs --run frontier-39-analysis-30` -> exit 0,
  **30 pages reviewed, 6 spec edits applied, no blocked edges**.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  -> exit 0; batch-4 supplies its reviewed consumer input (`[]`) and no edge in
  the refreshed ledger touches batch-4. `--require-reviewed` is not yet clean
  run-wide until the sibling batches supply their own inputs; that is a whole-run
  condition, not a batch-4 finding.

## Unresolved findings and handoff

- **Owner resolution of design conflict 2.** The original
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains` statement and
  ID are retained and moved to PDE-15, after its Rellich compactness item. Its
  proof is the compactness contradiction using the published PDE-11 theorem that
  zero weak gradient implies componentwise constancy. PDE-14 keeps the direct
  John-domain and convex-domain proofs; its scope remark points to the PDE-15
  theorem for the full extension-domain form. The claim is not weakened and no
  pair is added.
- **Enrichment deferrals.** The dual H^{-1} estimate is deferred to PDE-16 with
  the drift requirement to define H^{-1} before use; the bubble example is
  deferred to the Rellich-Kondrachov pair; the half-space Hardy inequality and
  the general Gagliardo-Nirenberg derivative interpolation are out of scope with
  reasons in the coverage file.
- **Whole-run observations (not batch findings).** `extcheck` reports the
  published `thm-urysohn-lemma` unproved-dependency finding, which pre-dates and
  is unrelated to this pair; sibling batches' empty inventories keep
  `item-dependency-levels` and `step1-decisions` from closing run-wide. The
  ledger's `--require-reviewed` mode also awaits the sibling batch inputs.
- Owner/operator reconciliation and the full engine gate follow construction;
  neither a `ready` record nor this note is independent mathematical approval —
  Step 3 provides that review. No published content, shared plan, engine state or
  verdict was edited by this batch.


## Owner scope repair integration

The current inventory has 35 items (26 A, 9 B). It adds the 1<p<n mean-zero Lp helper, the exact p* Sobolev--Poincare theorem, and the normalization counterexample. B4 does not depend on B9; B9 retains the full-range same-exponent Poincare--Wirtinger theorem. The Kinnunen Theorem 3.47 coverage locator is printed pp. 90--91 (PDF pp. 93--94).

## Independent post-handoff Poincare proof repair

A mathematical audit found that the original W0 Poincare proof shifted the e-coordinate when it replaced the full-line integral by an integral over (a,b). The corrected proof writes x=x_perp+x_n e and integrates the line profile from the lower slab face a to x_n; the slice integration then gives the same constant 1. The statement is unchanged and remains valid for the empty domain vacuously and for n=1 by the direct one-dimensional case. The proof contract now records the corrected endpoint argument.

The exact general extension-domain p* theorem is present on the A page after the existing embedding, with its mean-zero helper before the embedding; the normalization witness is on the B page. Coverage maps Kinnunen Theorem 3.47 (printed pp. 90-91 / PDF pp. 93-94) to the theorem, and B9 defers this p* claim to B4 while retaining its distinct full-range Lp Poincare-Wirtinger result. The source statement is exactly 1<p<n on bounded connected extension domains; the local helper supplies the compactness step without a B9 proof dependency.

## Coverage reconciliation after Step-3 scope audit

The duplicate Kinnunen source occurrence at
`batch-4.coverage.json` → `pages[0].sources[0].contents[6]` (printed pp. 90–91)
was incorrectly marked deferred to its own PDE-14 page. The exact claim is
proved by `thm-sobolev-poincare-on-bounded-connected-extension-domains` in the
current B4 manifest (the parallel source entry at `contents[17]` already mapped
it there), so that one occurrence is now `included` with the same item ID. This
leaves PDE-15's distinct full-range, same-exponent Poincare–Wirtinger claim
unchanged and removes the self-deferral from the current group-c decline set.
