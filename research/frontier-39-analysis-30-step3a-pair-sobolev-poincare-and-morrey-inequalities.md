# Step 3a scope review — Sobolev, Poincaré and Morrey Inequalities

- Run: `frontier-39-analysis-30` (role: alpha; batch 4; this pair only)
- A page: `sobolev-poincare-and-morrey-inequalities` (plan order 458.025, `pde`)
- B page: `sobolev-poincare-and-morrey-inequalities-examples` (order 458.026)
- Inventory: 24 A items (dependency levels 0–5) and 8 B items (leaf). The A page
  `requires` `sobolev-traces-and-zero-boundary-values` (published, PDE-13); the B
  page requires the A page only. Both match `plan-spec.json` 458.025/.026 verbatim.
- Scope decision: **insufficient** — recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
  --page sobolev-poincare-and-morrey-inequalities --decision insufficient`; receipt
  `research/frontier-39-analysis-30-step3a-review-sobolev-poincare-and-morrey-inequalities.json`.
- This file judges **scope only**, not proof correctness. No scaffold, coverage,
  plan, engine state or owner record was edited; nothing below is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-4.pages.json` | Current scope carrier: 24 A + 8 B items with statements, strategies, deps, sources; page `requires`, orders, companion pointers; batch 4 holds this pair only |
| `research/frontier-39-analysis-30-batch-4.coverage.json` | 7 source entries (4 A + 3 B), 65 harvested rows (33 `included`, 14 `inline`, 1 `already-published`, 5 `deferred`, 12 `out-of-scope`) plus 11 canonical rows (6 `inline`, 2 `deferred`, 3 `out-of-scope`) |
| `research/frontier-39-analysis-30-batch-4.notes.md` | Scaffolder construction record: design reconciliation, the declared local additions, checks and unresolved findings |
| `research/frontier-39-analysis-30-batch-4.cross-batch-dependencies.json` (empty `[]`) | No reviewed supplier edge leaves batch 4 |
| `research/frontier-39-analysis-30-batch-9.pages.json`, `.coverage.json`, `.cross-batch-dependencies.json`, `.notes.md` | Rellich–Kondrachov pair (PDE-15): recipient of this pair's compactness deferrals; ten item-level consumer edges into this A page; its own deferral of Kinnunen Theorem 3.47 back to this page; owner-moved Poincaré–Wirtinger item |
| `research/plan-pde-track.md` PDE-14 (L1476–1531), PDE-15 (L1587–1645), §10.1 page/edge reconciliation (L2540–2570), §11.8 Kinnunen harvest (L2964–2982) | Binding prose design, source mapping and harvest dispositions |
| `research/plan-spec.json` orders 458.025/.026 | Page-level `requires` and empty item arrays; manifests match |
| `research/frontier-39-analysis-30-step1-owner-resolution.md` item 5 | Owner decision on the PDE-14/PDE-15 Poincaré–Wirtinger handoff |
| `research/frontier-39-analysis-30-alpha-step1-drift.md` PDE-14 section and `-drift-initial.md` L63–67 | Step-1 verdict `no-drift`; directs normal authoring and the H^{-1} definition-before-use instruction |
| `research/frontier-39-analysis-30-scope-ledger.json` | 60 owed pages; both pages present at batch 4 |
| Live Kinnunen PDF re-download (`https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf`, 781 233 B, sha256 `255f17a2dd431f95…`, 168 pp.) | Direct re-read of Theorems 3.13, 3.17, 3.47, 5.33 against the coverage claims |

## Role in the library

PDE-14 is the Sobolev-inequality hub of the PDE spine: it sits between the published
PDE-13 trace page and the compactness (PDE-15), Lax–Milgram (PDE-16), elliptic
regularity and variational pairs. It is consumed inside the run through ten
item-level edges recorded by the Rellich–Kondrachov pair (its cross-batch ledger:
the subcritical and critical embeddings, Morrey, higher-order embeddings, weak
derivative descent, the conjugate exponent, the W_0^{1,p} inequality) plus item-level
deps from `lax-milgram-and-weak-elliptic-solutions` (batch 10), `fredholm-elliptic-
problems-and-the-elliptic-spectrum` (11), `interior-and-boundary-sobolev-elliptic-
regularity` (12), `schauder-and-lp-elliptic-estimates` (13), `weak-elliptic-maximum-
principles-and-holder-regularity` (14), `the-direct-method-and-euler-lagrange-
equations` (15), `constrained-variational-problems-and-variational-inequalities`
(16) and the semigroup examples (17). Every one of those declared deps resolves to a
present item with the needed claim (checked mechanically over all 30 batch
manifests; the consumer list is the intended role).

No published consumer: no `library/*` page and no `items/*.md` front matter names
this pair or its items; plan §10.1 deliberately removed the old
`bessel-potential-completions-and-real-order-sobolev-spaces` → PDE-14-B edge. The
page-level prerequisite `sobolev-traces-and-zero-boundary-values` is published.

## Inventory against the prose design

All 14 designed A results (plan L1485–1498) and all 7 designed B items (L1501–1507)
are present, in design order and with unchanged hypotheses; the design's
`Hard proof obligations` paragraph is realized by local items:

| Design item (plan-pde-track.md PDE-14) | Manifest item |
|---|---|
| A1 Sobolev conjugate and scaling identity | `def-sobolev-conjugate-exponent` |
| A2 Riesz-potential pointwise bound | `lem-pointwise-potential-bound-for-compactly-supported-smooth-functions` |
| A3 p=1 Gagliardo–Nirenberg–Sobolev | `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` |
| A4 1<p<n Gagliardo–Nirenberg–Sobolev | `thm-gagliardo-nirenberg-sobolev-inequality` |
| A5 W_0^{1,p} Sobolev inequality | `cor-sobolev-inequality-for-w-one-p-zero` |
| A6 Ball Poincaré | `thm-poincare-inequality-on-a-ball` |
| A7 W_0^{1,p} Poincaré (one direction) | `thm-poincare-inequality-for-w-one-p-zero` |
| A8 Extension-domain embedding p≤q≤p* | `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` |
| A9 Critical embedding W^{1,n}→every finite L^q | `thm-critical-sobolev-embedding-into-every-finite-lq` |
| A10 Morrey for p>n | `thm-morrey-inequality-for-p-greater-than-n` |
| A11 W^{1,∞} = Lipschitz on convex domains | `thm-w-one-infinity-functions-have-lipschitz-representatives` |
| A12 Higher-order embeddings | `thm-higher-order-sobolev-embedding` |
| A13 Sobolev algebra above the critical index | `cor-sobolev-algebra-above-the-critical-index` |
| A14 p=n endpoint remark | `rem-critical-sobolev-does-not-embed-in-linfinity` |
| Direct mean-zero John-domain proof + domain classes (design "Hard proof obligations") | `def-john-domain-and-john-constant`, `lem-john-domain-admits-bounded-overlap-ball-chains`, `lem-truncated-riesz-kernel-potential-bounded-on-lp`, `thm-poincare-wirtinger-on-bounded-john-domains`, `thm-poincare-inequality-with-a-positive-measure-zero-set`, `cor-poincare-wirtinger-on-convex-domains`, `rem-domain-classes-for-the-mean-zero-poincare-inequality` |
| Morrey ball-average construction (design "Hard proof obligations") | `lem-ball-mean-oscillation-potential-bound` |
| Iteration mechanics for A12/A13 | `lem-weak-partial-derivatives-lower-sobolev-order`, `lem-weak-product-rule-for-bounded-sobolev-functions` |
| B1–B7 | `ex-scaling-for-the-sobolev-conjugate`, `ex-poincare-on-an-interval-with-sharp-scaling`, `cex-poincare-wirtinger-needs-connectedness`, `cex-critical-w-one-n-does-not-embed-in-linfinity`, `cex-morrey-endpoint-p-equals-n-fails`, `ex-holder-representative-of-a-radial-sobolev-function`, `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay` |
| §12.5 addition (sharpness on the far side of p*) | `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation` |

The owner-moved extension-domain Poincaré–Wirtinger claim is faithfully handed off:
`research/frontier-39-analysis-30-step1-owner-resolution.md` item 5 keeps the ID
`thm-poincare-wirtinger-on-bounded-connected-extension-domains` on PDE-15, the
Rellich scaffold states it (L^p mean-zero form, deps on its Rellich item and the
published zero-gradient constancy theorem), and this page's
`rem-domain-classes-for-the-mean-zero-poincare-inequality` points to it. That
deferral is consistent with the plan's own allocation and is not a scope loss.

## The scope deficit (grounds for `insufficient`)

The plan's normative source-harvest table disposes Kinnunen §3.2 to this pair —
`plan-pde-track.md` L2978: "| 3.2 *Sobolev--Poincaré inequalities* | `included`
PDE-14 |" — but no p*-mean-oscillation Sobolev–Poincaré statement survives in the
scaffold, and the one deferral is circular between two batches:

1. **Kinnunen Theorem 3.47 (the general Sobolev–Poincaré inequality), stated for
   bounded connected extension domains:**
   `‖u−u_Ω‖_{L^{p*}(Ω)} ≤ c(n,p,Ω)‖Du‖_{L^p(Ω)}`. Direct re-read of the
   fetch-verified PDF (p. 90–91 of the printed notes) confirms the statement and
   that Kinnunen derives it right after the extension-domain Rellich theorem, using
   the L^p mean-zero Poincaré inequality as its inner step.
   - This pair's coverage
     (`frontier-39-analysis-30-batch-4.coverage.json`, Kinnunen row
     "Theorem 3.47, Sobolev-Poincare on bounded connected extension domains proved
     through Rellich-Kondrachov") disposes it `deferred` with
     `destination: rellich-kondrachov-and-sobolev-compactness`.
   - The Rellich pair's coverage
     (`frontier-39-analysis-30-batch-9.coverage.json`, row "Theorem 3.47
     (Sobolev--Poincare inequality)") disposes the same theorem `deferred` with
     `destination: sobolev-poincare-and-morrey-inequalities`, reason "it is not
     consumed by any compactness claim on this pair".
   - Neither scaffold states it: the PDE-15 scaffold's
     `thm-poincare-wirtinger-on-bounded-connected-extension-domains` is the L^p
     mean-zero statement only, and this page's `thm-poincare-inequality-on-a-ball`,
     `thm-poincare-wirtinger-on-bounded-john-domains`,
     `cor-poincare-wirtinger-on-convex-domains` and the embedding theorems state no
     L^{p*} mean-oscillation form.
   - Mechanical check: no item id in any of the 30 batch manifests and no file
     among the 24 336 on-disk `items/*.md` states a p*-mean-oscillation
     Sobolev–Poincaré inequality (23 395 of those files are `status: published`);
     no published page mentions the pair.
2. **Kinnunen Theorem 5.33 (Sobolev–Poincaré on John domains, p*).** The coverage
   records the chain construction as included but states, in the support column of
   the mean-zero row, "The Sobolev-Poincare exponent p* is replaced on this page by
   the same-exponent L^p version, using the truncated-kernel bound (Lemma 5.15)
   instead of Theorem 5.17." Direct source check confirms Theorem 5.33 is the p*
   inequality, so the John-domain p* form is also not delivered.
3. **Cube and ball p* forms** (Kinnunen Theorems 3.13, 3.17, 5.24, 5.28) are all
   disposed `out-of-scope` with consumer-based reasons. Individually the reasons are
   coherent; jointly they leave a page titled "Sobolev Poincaré and Morrey
   Inequalities" with no Sobolev–Poincaré inequality in any domain form.

Consumer analysis: I found **no** consumer that needs the p* mean-oscillation
statement. The Rellich pair's ten item edges need only the embeddings, Morrey and
the W_0^{1,p} inequality; the later pages consume only the embeddings, Morrey and
the L^p Poincaré estimates. So the omitted statements are currently derivable from
scaffolded items (extension-domain embedding plus the L^p mean-zero inequality) but
are stated nowhere, and the two coverage records contradict each other about their
owner. Because the plan's harvest row is normative and the reciprocal deferral is a
genuine bookkeeping hole, the owner must reconcile it rather than this review.

Secondary finding: the §12.5 B addition
`cex-poincare-without-mean-trace-or-zero-set-normalisation-fails` (nonzero
constants have zero gradient) was dispositioned `inline` on
`thm-poincare-wirtinger-on-bounded-john-domains` with the support "the normalisation
requirement is stated in the theorem", so the plan's intended exhibited
counterexample is not on the B page; the kernel-vs-connectedness separation is
covered only in prose by `rem-domain-classes-for-the-mean-zero-poincare-inequality`
and by `cex-poincare-wirtinger-needs-connectedness` (which is the connectedness, not
the normalisation, witness). This is minor but should be acknowledged or restored.

## Unmet prerequisites

No confirmed unmet prerequisite at the declared-dependency level. All 63 distinct
dependency ids of the two pages resolve either to on-disk published items or to
items scaffolded in this run (`manifest-deps` and `content-policy --manifest-only`
report 0 errors for `frontier-39-analysis-30-batch-4.pages.json`; whole-run joins
over the 30 manifests likewise). Load-bearing published interfaces were checked at
statement level: `def-sobolev-extension-domain-and-extension-operator` (bounded
linear extension operator, no trace claim),
`cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` (conditional
whole-space transfer with `‖E‖`), `thm-generalized-holder-inequality-for-products`,
`thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` and
`thm-acl-characterisation-of-w-one-p`. The prerequisite the page itself needs for
the p* statement — an extension-domain/L^p mean-zero inequality — is the owner-held
PDE-15 item, present in that scaffold. The only "missing" object is the p*
statement described above; since no consumer requires it, it is a scope-records
gap, not an unmet prerequisite of a planned consumer. I found no additional
underlying claim absent from both the published library and this run's scaffold.

## Uncertainty and workflow observations

- Coverage-checklist cannot see the reciprocity: the batch-4 coverage passes
  `coverage-checklist --require-destination` with the Thm 3.47 destination named,
  and the batch-9 coverage passes with the reverse destination. The contradiction
  is only visible across batches, which is why it is recorded here.
- `research/frontier-39-analysis-30-batch-4.notes.md` says the design A inventory
  has "15 items" and that design "item 8" is realized as the John-domain theorem; the
  current plan's A list has 14 items with item 8 =
  `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`, which is
  present. This is a note-numbering mismatch, not scope loss; no planned item is
  missing either way.
- If the owner prefers to state the p* form on this page rather than PDE-15, the
  cheapest sound route is the John/convex-domain p* inequality (Kinnunen Theorem
  5.33 via its Theorem 5.17 Riesz-potential bound and the ball-chain machinery),
  because this page already proves the chain estimate and Lemma 5.15-type kernel
  bound. That route needs the Kinnunen Thm 5.17 Riesz-potential bound, which is not
  scaffolded in the run, so it is a larger enrichment than the PDE-15 option.
- Sources are live and unchanged: the re-downloaded Kinnunen PDF matches the
  coverage `fetch_verified` size and hash prefix exactly. The Hunter, Laugesen and
  Teschl rows were not re-downloaded here; their content was verified against the
  coverage locators only, so their per-row dispositions are taken at recorded value.

## Proposed owner action

1. Decide the home of the p*-mean-oscillation Sobolev–Poincaré inequality, and
   reconcile the two coverage rows so the theorem is not deferred both ways.
   - Recommended: enrich the PDE-15 A page (batch 9) with
     `thm-sobolev-poincare-on-bounded-connected-extension-domains` immediately after
     `thm-poincare-wirtinger-on-bounded-connected-extension-domains`, in
     Kinnunen's own proof order, with deps on the extension-domain Rellich item, the
     PDE-14 extension-domain embedding and the published zero-gradient constancy
     theorem; or
   - record an explicit run-level exclusion of the p* forms (cube, ball, John,
     extension-domain) with the reason that all consumers are served by the
     embeddings plus the L^p inequalities, and correct the batch-4/batch-9 coverage
     reasons accordingly; or
   - state the p* John/convex form here (larger: requires the Riesz-potential
     bound not currently scaffolded).
2. Acknowledge or restore the §12.5 normalisation counterexample on the B page
   (or record the inline disposition as sufficient in an owner note).
3. Then record `proceed` for the resulting scope (or apply the amendment first, per
   the Step-3 scope rule); this review stops on the pair and edits nothing.

## Conclusion

The planned definitions, results and examples are otherwise complete: all 14+7
design items are present with their hypotheses, the ten sourced local additions are
in-subject and consumed before use, all in-run consumers' declared needs are met,
the owner-moved extension-domain Poincaré–Wirtinger item is alive on PDE-15, and no
unmet prerequisite was found. However, the pair's coverage defers Kinnunen Theorem
3.47 (Sobolev–Poincaré, p* mean oscillation on bounded connected extension domains)
to the Rellich pair while that pair's coverage defers it back, the John-domain p*
form is replaced by its L^p version, all remaining p* Sobolev–Poincaré forms are
`out-of-scope`, and the plan's harvest table (§11.8 L2978) lists Kinnunen §3.2
`included` PDE-14. No scaffold or published item states the omitted family.
**Scope decision: `insufficient`** for A page
`sobolev-poincare-and-morrey-inequalities`; the exact omission and the owner
options are itemized above. This is a scope finding only — no proof correctness is
judged here.
