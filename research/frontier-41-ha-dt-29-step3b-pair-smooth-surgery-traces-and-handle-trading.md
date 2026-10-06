# Step 3b authoring — `smooth-surgery-traces-and-handle-trading`

- Run: `frontier-41-ha-dt-29`, role `alpha-high`, label
  `step3b-pair-smooth-surgery-traces-and-handle-trading-4302e1b57c0729e6`.
- A page: `smooth-surgery-traces-and-handle-trading` (order 557; 17 scaffold
  items plus 1 authorized local prerequisite, 18 items on disk).
- B page: `smooth-surgery-traces-and-handle-trading-examples` (order 558, 5 items).
- Batch: 13 (owns only this pair). Report created at entry; updated per item.

## Owned IDs and open obligations (at entry)

Authoring order (dependency level; page order; item ID) with the item's state on
disk at entry of this dispatch:

0. `def-degree-one-normal-map-for-the-surgery-program` (definition)
   `def-framed-embedded-surgery-sphere` (definition),
   `lem-attaching-a-single-cell-kills-the-represented-homotopy-class` (lemma),
   `lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors` (lemma)
1. `def-p-surgery-on-a-smooth-m-manifold` (definition),
   `rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel` (remark)
2. `lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism`
3. `def-surgery-trace-cobordism`, `ex-zero-surgery-on-the-circle`
4. `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold`
5. `def-dual-surgery-sphere`,
   `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`,
   `prop-homology-effect-of-surgery-away-from-the-middle-dimensions`
6. `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere`,
   `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class`,
   `thm-surgery-is-reversed-by-dual-surgery`,
   `ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery`
7. `rem-middle-dimensional-surgery-has-an-intersection-form-obstruction`,
   `cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data`,
   `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing`
8. `rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program`,
   `cex-middle-dimensional-surgery-can-change-an-intersection-form`

Open obligations at entry (all to be cleared or escalated before handoff):

- Audit and finish all 22 item files, both library pages, the batch-13
  proof-contract entries, and record 22 current item decisions.
- The three in-run supplier pairs named by the dispatch are
  `handle-decompositions-duality-and-rearrangement` (batch 1),
  `intersection-pairings-self-intersection-and-euler-classes` (batch 2) and
  `handle-cancellation-slides-and-elementary-moves` (batch 3). Batch-2 supplier
  items carry current decisions; batch-1 supplier items are authored but not yet
  decided; batch 3 is consumed at page level only, by no item of this pair. Any
  supplier left unfinished is flagged below with its exact consumer and step.
- Recheck the Step 3a observations against the current files: (F1) the
  `p=m-1` sentence of `def-p-surgery-on-a-smooth-m-manifold` (two disks, not
  one) — verify the wording on disk; (F2) the in-run supplier risk; (F3) the
  Milnor `MH §3` source limitation (image-only scan, not claimed).
- Batches 13's cross-batch dependency input records 19 open edges to batches
  1–3; re-read the actual supplier claims when the consumers are audited and
  leave no consumer resting on an unverified supplier claim.
- Keep the report current per item: ID, claim/conventions, source locators,
  dependencies, decision, checks, open gaps, next action.

## Checkpoints

### Entry finding — prior dispatch state

The 22 item files, both library pages, the batch manifest and the batch proof
contracts exist on disk from earlier dispatches of this same pair. This
dispatch therefore audits the current files item by item in the prescribed
order, repairs what the audit finds, re-runs all checks on the final bytes, and
records fresh item decisions.

### Checkpoint — item 1 `def-degree-one-normal-map-for-the-surgery-program`

- Claim: a normal map $(f,b):M\to X$ with respect to a target bundle data
  $(X,\xi)$; degree one means $f_*[M]=[X]$ for the fixed generator class; the
  normal bordism relation, specialised to a common target bundle.
- Source check (read in the cached full texts): Lück Def. 3.50 (PDF p. 75;
  printed p. 68) requires only a connected finite $n$-dimensional Poincaré
  complex $X$ together with a vector bundle $\xi$, with the tangent
  formulation $TM\oplus\mathbb R^a\to\xi$ and the bordism allowing
  $v_i:\xi_i\oplus\mathbb R^{b-a_i+1}\cong\eta$; Ranicki Ch. 10 opening (PDF
  p. 199; printed p. 192) defines a normal map over a space $X$ with a bundle
  $\eta$ over $X$ and $b:\nu_M\to\eta$; Wall §7.1 (printed p. 197) uses a
  bundle $\nu$ over $X$ and a trivialisation of $T(M)\oplus f^*\nu$, with the
  degree-1 condition $f_*[M]=[X]$ and its cobordism invariance in §7.4
  (printed pp. 207–211).
- **Repair (interface defect).** The scaffold's file statement restricted $X$
  to a closed oriented smooth manifold, but the four batch-14 consumers
  (`lem-relative-hurewicz-and-general-position-produce-surgery-spheres`,
  `lem-stable-normal-data-supplies-framings-below-the-middle-dimension`,
  `lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle`,
  `prop-surgery-below-the-middle-dimension-improves-connectivity`) state
  "degree-one normal map ... over a connected finite CW complex $X$" and use
  the bundle $b:\nu_M\to f^*\nu_X$ to trivialise $g^*\nu_M$. Rewrote the item so
  the primary datum is $(X,\xi)$ with $X$ a connected finite CW complex of
  dimension $n$ and $[X]\in H_n(X;\mathbb Z)$ a fixed generator, with the
  manifold target ($\xi=\nu_X$) as the principal case carrying the tangent
  formulation and the degree reference. Also repaired the normal-bordism
  paragraph, which conflated the bordism bundle $\eta$ with $\nu_X$ and stated
  the tangent relation as $TW\oplus\varepsilon^b\cong F^*\eta$ (the source
  relation is a trivialisation of $TW\oplus F^*\eta$, equivalently
  $B:\nu_W\to F^*\eta$).
- Consequences: `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class`
  now names $X$ as a closed oriented smooth manifold explicitly and its [F1]
  fact and the batch-13 contract citation quote the new definition text;
  contract boundary evidence for the definition updated.
- Checks: precheck pass; `proof-layout` 2 items/6 steps/0 defects (only the two
  edited items); rendercheck OK; `proof-contract --strict` 0 errors.
- Manifest statements for this item were left at the Step-1 scaffold text
  (Step-4 reconciliation: the manifest still says "$X$ and $M$ closed
  connected oriented smooth $n$-manifolds" and "a degree-one map $F:W\to X$";
  the file is the current mathematical record).

### Checkpoints — items 2–5 (level 0) and item 6 (level 1)

- `def-framed-embedded-surgery-sphere` (level 0): audited; the disk-factor map
  does exhibit a trivialization of the normal bundle of the underlying sphere
  (equal dimensions make the differential onto the normal direction), the
  range $0\le p\le m-1$ and the $p=m-1$/orientable-normal-line case are
  correct. No edit.
- `lem-attaching-a-single-cell-kills-the-represented-homotopy-class` (level 0):
  verified against the published suppliers [F2] (`lem-high-relative-cells-…`)
  and [F6] (`lem-relative-single-cell-layer-…`, audited, false only for
  $k=1$ and $A$ non-simply-connected, both excluded); the LES/exactness
  argument and the simply-connected quotient statement are correct. One
  wording fix: "the attaching sphere $S^p\times\{0\}$" → "the boundary sphere
  $\partial D^{p+1}=S^p$" in step 2.2 (the phrase had leaked in from the
  product-handle picture). Contract claim updated; precheck/proof-layout clean.
- `lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors`
  (level 0): checked in full, including the endpoint cases $k=0$ and $k=n$
  (for $k=n$ the attaching sphere is a whole boundary component, so the
  "caps a sphere" reading of step 4.1 is the correct one). No edit.
- `def-p-surgery-on-a-smooth-m-manifold` (level 1): the Step-3a flag F1 is
  already repaired on disk ("replaces an open product neighbourhood
  $S^{m-1}\times(-1,1)$ by the two disks $D^m\times S^0$"); the $S^{-1}$
  exclusion is printed. No edit.
- `rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel` (level 1):
  audited as a `proved_here: false` remark; its `external_dependency` quote
  was re-checked against the cached Ranicki text (Chapter 10 introduction,
  printed p. 193: "a surgery obstruction (to be defined in Chapters 11 and
  12) … $L_m(\mathbb Z[\pi_1(X)])$"). No edit.

### Checkpoint — item 7 `lem-surgery-gluing-…` and new prerequisite

- **Defect found (proof route).** Step 4.1 cited the published
  `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  for the isotopy-invariance clause (iii), but that lemma's source is a
  compact manifold **without boundary**, while the isotopy is of
  $V=S^p\times D^q$, which has boundary $S^p\times S^{q-1}\ne\varnothing$
  for $q\ge1$. The identical defect sits in the published draft
  `cor-isotopic-embeddings-have-diffeomorphic-complements` (same cited
  supplier for a source "compact smooth manifold" without the boundaryless
  restriction) — reported below as a published concern.
- **Repair.** Authored a new local prerequisite on the A page,
  `lem-isotopy-extension-for-a-compact-source-with-boundary` (level 0;
  published suppliers only): for a compact smooth $n$-manifold $V$ with
  boundary, a boundaryless $n$-manifold $N$, a smooth isotopy of embeddings
  $F:V\times I\to N$ constant near the ends, and any open $W\supseteq F(V\times I)$,
  there is a smooth $H:N\times I\to N$ with $H_0=\mathrm{id}$, every $H_t$ a
  diffeomorphism, $H_t\circ F_0=F_t$, and $H_t=\mathrm{id}$ outside $W$
  (Hirsch, *Differential Topology*, Ch. 8 §1, Theorem 1.3, printed p. 180,
  read in full; UCR handout, p. 2, read in full). Its proof builds the track
  $\Theta(t,x)=(t,\widetilde F(t,x))$ in $\mathbb R\times N$, extends the
  horizontal velocity over a neighbourhood by adapted charts and a partition
  of unity, cuts off in time, and integrates; the proof was written so that
  every cited supplier is published (partitions of unity, Urysohn, the local
  smooth evolution operators, the cocycle law, the compactly supported global
  flow theorem, the Euclidean inverse function theorem).
- **Consumer update.** `lem-surgery-gluing-…` now lists the new item as [F8]
  and step 4.1 applies it with $V=S^p\times D^q$, $N=\operatorname{int}M$,
  extending the resulting compactly supported diffeomorphism of
  $\operatorname{int}M$ by the identity across $\partial M$. Dependencies,
  manifest, library page, coverage (Hirsch + UCR stamps), proof contract, and
  the batch-13 scope receipt were all refreshed; the new item raises no
  dependency level (level 0, consumer stays at level 2).
- Checks on the two items: precheck pass (the new item required the checker's
  canonical layered numbering, adopted verbatim), `proof-layout` 10 steps and
  5 steps, 0 defects; rendercheck OK; `proof-contract --strict` 0 errors.

### Checkpoint — new prerequisite, final pass

`lem-isotopy-extension-for-a-compact-source-with-boundary` (level 0, A page).
Statement and proof audited in full against the two sources (Hirsch Ch. 8 §1,
Theorem 1.3, printed p. 180, and the UCR handout, printed pp. 2-4, both read in
the cached full texts). **Repair this dispatch:** step 5.1 silently treated the
local image of the track as an open neighbourhood of a boundary point. For
$x_0\in\partial V$ the image $\Theta(U)$ is only a half-space neighbourhood, so
the partition-of-unity step 6.1 (whose cover needs ambient-open sets) had no
literal local field to sum. Step 5.1 now separates the two cases: for interior
points the product field $(0,\partial_t\widetilde F)$ is defined directly on
the open image; for boundary points the horizontal coordinate components,
smooth on the half-space model, are extended to an open neighbourhood by the
local-extension convention of [F2] with the zero first component extended by
zero, and the neighbourhood is shrunk into $\mathbb R\times V'$. The remainder
of the proof (graph is an embedding, properness, cutoff, cocycle, isotopy
identity) was re-verified step by step. The item is an addition absent from the
immutable pre-author baseline (checked in
`research/frontier-41-ha-dt-29-step3-auditor-baseline.json`), so per the
dispatch it receives its item certification from the engine after successful
dispatch and no self-review decision was recorded for it.

### Checkpoints — items audited in the final pass (levels 1-8)

- `def-p-surgery-on-a-smooth-m-manifold` (1): the Step-3a flag is already fixed
  on disk ("replaces an open product neighbourhood $S^{m-1}\times(-1,1)$ by the
  two disks $D^m\times S^0$"; no $S^{-1}$ case); the gluing, collar smoothing
  and interior-standing of the removed piece are correct against Lück 3.4.1
  (printed p. 72), Ranicki Def. 10.1 (vi) (printed p. 195), Wall 7.1 (printed
  p. 196). No edit; decision `accept`.
- `rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel` (1):
  `proved_here: false` remark with a well-formed `external_dependency`; the
  quoted Ranicki sentence was re-read verbatim in the cached text (Ch. 10
  introduction, printed pp. 193-194). No edit; decision `accept`.
- `ex-zero-surgery-on-the-circle` (3): statement now names the framing
  explicitly (vertical sides of $\partial(D^1\times D^1)$ with the product
  framing). The computation was re-checked: $S^1$ minus the two open intervals
  is the two closed horizontal arcs, and the two glued intervals close them
  into $S^1\sqcup S^1$, matching the $p=0,q=1$ reading of the product example.
  Repaired; decision `repaired`.
- `def-surgery-trace-cobordism` (3): definition audited (index shift, fixed
  core/cocore/belt pieces, orientation convention: outgoing face carries the
  boundary orientation and the incoming face its negative). Two batch-1
  suppliers used by its text have no current decision; decision `escalate`
  (below).
- `def-dual-surgery-sphere` (5): belt sphere $\{0\}\times S^{q-1}$ with the
  canonical $D^{p+1}$-factor framing, the $q=1$ endpoint and the dimension
  count $(q-1)+1=q$ verified against Ranicki Prop. 10.2 (printed pp. 195-196)
  and Wall 7.1 (printed p. 196). No edit; decision `accept`.
- `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`
  (5): repaired (iii) in the Statement and step 3.1 to the correct
  "subgroup generated by $z$, infinite cyclic when $z\ne0$ and trivial when
  $z=0$"; the rest of the proof (cell model of the trace on both sides,
  $p\le q-2$ used only to make the dual inclusion an isomorphism in degree
  $p$) was re-verified. Its two batch-1 suppliers are undecided; decision
  `escalate`.
- `prop-homology-effect-of-surgery-away-from-the-middle-dimensions` (5): the
  relative-pair computation, the four exact sequences and the degree set
  $\{p,p+1,q-1,q\}$ were re-verified; two batch-1 suppliers are used in steps
  1.1 and 2.2 and are undecided; decision `escalate`.
- `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere`
  (6): statement (i)-(iv) audited: trivial normal bundle iff a framed product
  neighbourhood via the tubular neighbourhood theorem; the $q=1$ line-bundle
  criterion via $w_1$; the below-middle killing through the in-pair lemma; and
  the Euler/Stiefel-Whitney detection with its explicit non-sufficiency
  caveat. No edit; decision `accept`.
- `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` (6):
  repaired step 1.1: the extension over the handle now uses the homotopy
  extension property of the relative CW pair
  $(D^{p+1}\times D^q\times I,\ S^p\times D^q\times I\cup D^{p+1}\times D^q\times\{1\})$
  through the new fact [F9]
  `prop-relative-cw-inclusions-are-cofibrations`, replacing the invalid
  "contractible $\Rightarrow$ HEP" inference; the degree-one preservation via
  $\partial W_\varphi$ pushing to zero was re-verified. Decision `repaired`.
- `thm-surgery-is-reversed-by-dual-surgery` (6): the factor-swap
  diffeomorphism identifies the dual gluing with the original one, and the
  same handle supports both modifications; verified against Wall 7.1 and
  Ranicki Prop. 10.2. No edit; decision `accept`.
- `ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery` (6): the two
  solid-torus gluings were re-checked ($S^2\times S^1$ versus $S^3$, separated
  by $\pi_1$); no edit; decision `accept`.
- `rem-middle-dimensional-surgery-has-an-intersection-form-obstruction` (7):
  the remark records the middle-dimensional obstruction without claiming a
  local proof; the Lück locator for Remark 4.9 was corrected from printed
  p. 84 to p. 85 (the page break in the cached author PDF places the end of
  Theorem 4.8 and Remark 4.9 on p. 85). Decision `repaired`.
- `cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data`
  (7): repaired step 3.2, which wrote the diagonal's self-intersection as
  $\langle e(TM),[M]\rangle$ with the ambient $M=S^2\times S^2$; it now applies
  [F2] to the factor $S^2$ and states $\Delta\cdot\Delta=\langle e(TS^2),[S^2]\rangle$,
  matched by [F1] and [F3]. The rest of the counterexample is unchanged.
  Decision `repaired`.
- `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing` (7):
  repaired the verification. Step 2.1 previously justified the sphere
  identification with a non-sequitur ("the double of $D^{p+1}$ is $S^{p+1}$")
  whose dimensional bookkeeping $S^{p+1+q-1}$ is wrong as written; it now
  identifies the glued union with the standard decomposition
  $S^m=(S^p\times D^q)\cup(D^{p+1}\times S^{q-1})$ recorded in the statement,
  with [F2] supplying the same decomposition as the boundary of the rounded
  standard handle. Step 3.1 now says "sphere factor" and names the product
  identification, and step 4.1 no longer attributes the factor exchange to the
  first surgery alone. Both computations were re-derived independently,
  including $p=q=1$ and $p=0$. Decision `repaired`.
- `rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program`
  (8): the dimension-boundary remark was audited against Ranicki Theorem 7.27
  and Lemma 7.28 (printed pp. 138-140), Wall Theorem 7.2.1 with the
  $m>2(r-1)$ passage (printed pp. 197 and 199-200) and Lück Theorem 4.8 with
  Remark 4.9; the Lück locator for Remark 4.9 was corrected to printed p. 85.
  Decision `repaired`.
- `cex-middle-dimensional-surgery-can-change-an-intersection-form` (8):
  repaired the refuted claim, which read "every surgery below the middle ...
  preserves a middle-dimensional intersection form" while the example's
  surgery has $p=q=2$ and therefore does not satisfy that hypothesis. The
  claim now reads "every framed sphere surgery in the sense of this page, with
  no restriction below the middle, preserves the middle-dimensional
  intersection form whenever that form exists", which the $S^2\times S^2\to
  S^4$ computation refutes; the closing sentences of the Statement refuted and
  of step 5.1 were aligned with the below-middle hypothesis $p\le q-2$. The
  hyperbolic-form comparison was re-verified. Decision `repaired`.

## Checks actually run (final bytes)

- `node tools/tsx-run.mjs tools/precheck.mts items/<23 paths>`: 15 checked,
  0 failing (8 definitions/remarks are `n/a`).
- `node tools/proof-layout.mjs items/<12 changed paths>` (single batched
  command after the last edit): 12 items, 53 steps, 0 defects.
- `node tools/rendercheck.mjs items/<23 paths> library/differential-topology/smooth-surgery-traces-and-handle-trading.md library/differential-topology/smooth-surgery-traces-and-handle-trading-examples.md`:
  OK, 25 files.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-13.pages.json`:
  23 items, 0 errors.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-13.pages.json`:
  23 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-13.coverage.json --require-destination`:
  1 page, 59 harvested rows, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-13.proof-contracts.json --strict`:
  23/23 items, 0 errors, 1 warning. The two stale `F8` quotes (from the
  earlier (iii) edit of the killing lemma) were regenerated from the current
  Statement, and the contract was refreshed for every edited step. The
  remaining warning is `shotgun-bracket` on
  `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`
  step 1.1 (5 of 6 facts cited there); it is non-fatal and is left for the
  Step 4/5 pass rather than forced with artificial citations.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`:
  run-wide exit 1 with 22 named errors, **none** on a batch-13 item
  (Whitney-trick pair, Morita/Eilenberg-Watts pair, foliation/ODE pairs, etc.);
  all 23 batch-13 levels, including the new level-0 prerequisite, verify.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK (declared page
  order acyclic; no item-level cycles, forward references, B-page dependencies
  or unresolved ids among the pages with item lists).
- `node tools/depcheck.mjs items/<23 paths>`, `extcheck`, `fwdcheck`:
  no finding names any batch-13 item. The run-wide tools still exit non-zero
  for other pairs (see "Observed outside this pair").
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`:
  18 of the 23 batch-13 entries are closed (`accept`/`repaired`), 4 are
  escalated, and 1 (the auditor addition) awaits engine certification.

## Item decisions recorded

`repaired`: `def-degree-one-normal-map-for-the-surgery-program`,
`lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism`,
`lem-attaching-a-single-cell-kills-the-represented-homotopy-class`,
`prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class`,
`rem-middle-dimensional-surgery-has-an-intersection-form-obstruction`,
`rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program`,
`ex-zero-surgery-on-the-circle`,
`ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing`,
`cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data`,
`cex-middle-dimensional-surgery-can-change-an-intersection-form`.

`accept`: `def-framed-embedded-surgery-sphere`,
`def-p-surgery-on-a-smooth-m-manifold`,
`lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors`,
`def-dual-surgery-sphere`, `thm-surgery-is-reversed-by-dual-surgery`,
`lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere`,
`rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel`,
`ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery`.

`escalate` (owner-held; exact remedy in each receipt): `def-surgery-trace-cobordism`,
`thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold`,
`lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`,
`prop-homology-effect-of-surgery-away-from-the-middle-dimensions`.

No decision was recorded for the auditor-authored addition
`lem-isotopy-extension-for-a-compact-source-with-boundary`, which the engine
certifies after successful dispatch.

## Handoff

**Completed.** All 23 owned files are authored, checked and registered: the 17
original A-page scaffold items (7 `accept`, 6 `repaired`, 4 `escalate`), the 5
B-page items (1 `accept`, 4 `repaired`), and the new A-page prerequisite
`lem-isotopy-extension-for-a-compact-source-with-boundary`; both library pages
are updated and render. Every `escalate` is a consumer of an unfinished
in-run supplier, not an unresolved local defect.

**Added suppliers.** `lem-isotopy-extension-for-a-compact-source-with-boundary`
(A page, level 0, published suppliers only): isotopy extension for a compact
smooth source *with boundary* into a boundaryless target, with support in any
prescribed neighbourhood of the track (Hirsch Ch. 8 §1 Thm 1.3, printed
p. 180; UCR handout, printed p. 2, both read in full). It replaces a
mis-cited boundaryless-source supplier in `lem-surgery-gluing-...` [F8]
(step 4.1).

**Repairs made (summary).** (1) target/complex repair of the normal-map
definition; (2) boundary-source isotopy-extension prerequisite plus consumer
rewrite; (3) kernel description at $z=0$ in the killing lemma; (4) HEP
argument in the normal-map proposition; (5) the four wording/justification
repairs in the two B-page examples and the two counterexamples; (6) two source
locator corrections; (7) contract regeneration for every touched step
(including the two stale `F8` quotes).

**Open obligations (exact).**

1. `def-surgery-trace-cobordism`: suppliers
   `def-smooth-cobordism-triad-for-morse-theory` (triad/collar paragraph) and
   `lem-product-cobordisms-have-critical-point-free-presentations` (product
   presentation paragraph) have no current Step-3 decision.
2. `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold`: [F6]
   (`lem-product-cobordisms-have-critical-point-free-presentations`) in steps
   2.2, 3.1, 4.1 and [F7] (`def-smooth-cobordism-triad-for-morse-theory`) in
   step 4.1; both suppliers undecided.
3. `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`:
   [F1] (`lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`)
   in steps 1.1, 1.2, 3.1 and [F2]
   (`lem-product-cobordisms-have-critical-point-free-presentations`) in
   step 1.1; both undecided.
4. `prop-homology-effect-of-surgery-away-from-the-middle-dimensions`: [F1] in
   steps 1.1, 2.2 and [F2] in step 1.1; both undecided.
Remedy for 1-4: decide/complete the three batch-1 items
   (`def-smooth-cobordism-triad-for-morse-theory`,
   `lem-product-cobordisms-have-critical-point-free-presentations`,
   `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`) and
   recheck the named steps. All decisions are hash-bound to the transitive
   closure, so any later change to a supplier automatically invalidates the
   dependent decisions here.
   Cross-batch record updated: the 8 item-level and 1 page-level edges into
   batch 2 (`intersection-pairings-self-intersection-and-euler-classes`) are
   marked `verified` in
   `research/frontier-41-ha-dt-29-batch-13.cross-batch-dependencies.json`
   against the five current batch-2 decisions (all closed: `accept`/`repaired`,
   confidence 1), with the consumer use named per edge; the batch-1 edges stay
   `open` and correspond one-to-one with these escalations, and the batch-3
   page-level edge stays `open` because that page has no current scope
   closure (it has no item-level consumer in this pair).
5. Engine certification of the auditor addition
   `lem-isotopy-extension-for-a-compact-source-with-boundary` (the final
   decision check lists it as awaiting certification; no self-review decision
   is recorded, per the dispatch).

**Step-4 reconciliation (pre-splice mismatches, not hidden).**

- `research/plan-spec.json` has no item row for
  `lem-isotopy-extension-for-a-compact-source-with-boundary`; it is an
  authorized in-batch addition and must be spliced into the plan.
- The batch-13 manifest statements for
  `def-degree-one-normal-map-for-the-surgery-program` (still the closed-manifold
  target text) and for `cex-middle-dimensional-surgery-can-change-an-intersection-form`
  (closing sentence) differ from the authored files; the files are the current
  mathematical record and are what the decisions hash. The Step-4 splice
  should reconcile these two rows.
- The batch-13 manifest row for
  `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` still lists
  the scaffold dependencies; the authored file adds
  `prop-relative-cw-inclusions-are-cofibrations` ([F9], used in step 1.1).
  The row was deliberately left untouched after the decisions were recorded
  (any manifest edit would invalidate the hash-bound decisions); Step 4 should
  take the file's dependency list.

**Published / cross-pair concerns (not edited here).**

1. `cor-isotopic-embeddings-have-diffeomorphic-complements` (batch 19, page
   `isotopy-extension-and-embedding-theory-beyond-whitney`) states the result
   for a compact smooth $M$ with no boundary restriction, but its [L1] cites
   `thm-isotopy-extension` clause 4, whose compact-source hypothesis is
   "compact smooth manifold **without boundary**" (the theorem's Given and
   step 3.1 both say so). Confidence: high (confirmed by reading both files).
   Remedy: add the boundaryless hypothesis to the corollary, or cite the new
   `lem-isotopy-extension-for-a-compact-source-with-boundary`, which supplies
   exactly the boundary-source case. The DT-19 owner holds that decision.
2. `thm-isotopy-extension` (same batch-19 pair) is `status: draft`,
   `origin: session`; batch 13 no longer depends on it (the former citation in
   `lem-surgery-gluing-...` was replaced by the new in-batch prerequisite).
3. Milnor, *Morse Theory* §3 (pp. 20-36), the design's fourth source, remains
   an image-only scan in this environment and is **not claimed** as read; the
   content used by this pair is covered by the three verified treatments
   (Lück, Ranicki, Wall).

**Observed outside this pair (run-wide tool output, not repaired here).**

- `item-dependency-levels check --run` names 22 items with level drift in the
  Whitney-trick, Morita/Eilenberg-Watts, foliation and ODE pairs; no batch-13
  item is affected.
- `fwdcheck` FAILs on two items outside batch 13:
  `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically`
  links `thm-whitney-trick-in-the-two-dimensional-borderline-case` (resolves
  nowhere and is planned nowhere), and
  `rem-elementary-moves-do-not-constitute-full-cerf-theory-here` has a
  `forward_refs` entry `the-whitney-trick-and-surgery-below-the-middle-dimension`
  planned nowhere.
- `extcheck` flags two published items (`thm-baire-category-locally-compact-hausdorff`,
  `thm-urysohn-lemma`) as resting on material not proved in the library;
  unrelated to batch 13.
- `depcheck` reports 349 run-wide warnings (multi-home, published-unaudited
  etc.) with no finding naming a batch-13 item.
