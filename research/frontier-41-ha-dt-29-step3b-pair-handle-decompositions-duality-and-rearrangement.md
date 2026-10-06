# Step 3b authoring — Handle Decompositions Duality and Rearrangement

- Run: `frontier-41-ha-dt-29`, role `alpha-high`, label
  `step3b-pair-handle-decompositions-duality-and-rearrangement-a5afeab826a3fcdb`
- A page: `handle-decompositions-duality-and-rearrangement` (order 527, 29 items)
- B page: `handle-decompositions-duality-and-rearrangement-examples` (order 528, 5 items)
- Batch: 1 (owns only this pair). Report created at entry; updated per item.

## Owned IDs and open obligations (at entry)

Dependency-level order to be authored, one item at a time (level; page order; item ID):

0. `def-smooth-cobordism-triad-for-morse-theory`,
   `lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum`,
   `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`,
   `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`,
   `lem-flow-reparametrization-realizes-a-level-isotopy`,
   `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`,
   `lem-increasing-reparametrization-of-finitely-many-critical-levels`,
   `lem-separating-critical-values-far-from-the-boundary`,
   `lem-standard-handle-admits-an-adapted-morse-function`
1. `def-handle-decomposition-relative-to-the-incoming-boundary`,
   `def-morse-function-adapted-to-a-cobordism`,
   `lem-boundary-product-function-on-a-collared-cobordism`
2. `def-dual-handle-decomposition`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`,
   `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged`,
   `lem-gluing-handle-morse-models-along-collars`, `lem-interior-slab-handle-attachment`,
   `lem-product-cobordisms-have-critical-point-free-presentations`,
   `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods`,
   `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`
3. `lem-gradient-like-perturbation-separates-adjacent-critical-levels`,
   `thm-morse-functions-and-handle-decompositions-correspond`,
   `cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory`,
   `ex-relative-handle-decomposition-of-a-cylinder`
4. `lem-handles-of-equal-index-can-be-attached-on-one-level`,
   `thm-handle-duality-from-negating-a-morse-function`, `thm-morse-rearrangement-by-index`
5. `thm-self-indexing-morse-function-existence`,
   `ex-dual-handle-presentations-of-a-genus-g-surface`, `ex-reordering-independent-one-handles`
6. `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`
7. `prop-dual-elimination-of-top-index-handles`, `ex-empty-incoming-boundary-requires-zero-handles`
8. `rem-handle-decompositions-are-not-canonical`

Open obligations at entry (all to be cleared or escalated before handoff):

- Author all 34 item files (none exists on disk at entry), the two library pages,
  the batch-1 proof-contract entries, and record 34 item decisions.
- No direct in-run prerequisite pair must be inspected (dispatch says "none").
  All 61 out-of-run suppliers are published; the pair consumes no in-run item
  outside itself.
- Step 3a non-blocking observations to recheck while authoring: (a) the manifest
  lists `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`
  before `lem-separating-critical-values-far-from-the-boundary`; (b) the
  counterexample item must use `## Statement refuted` / `## Counterexample`.
- Published-supplier findings recorded in design §12.7(4)-(5) (DT-2 items) are
  inherited, not this pair's own defect; they are re-stated at handoff.
- Checkpoint after each item: ID, claim/conventions, source locators,
  dependencies, decisions, checks, open gaps, next action.

## Checkpoints

All 34 pair items are authored and on disk (`items/<id>.md`), the two library
pages exist, and the batch proof-contract file is complete. The per-item
checkpoints below record, in the dispatch dependency order, the exact claim,
the conventions it fixes, the source locator, the dependency decision, the
checks, and any open gap. Unless a specific locator is named, the manifest
`sources` and the batch coverage carry the three treatments used throughout:
Wall, *Differential Topology*, §§5.1–5.4 (printed pp. 129–148); Milnor,
*Lectures on the h-Cobordism Theorem*, §§2–4 (printed pp. 10–48); Pajitnov,
*Circle-Valued Morse Theory*, Ch. 4 §3 (pp. 132–162) and Ch. 5 §§1–3
(pp. 163–189). Conventions fixed once and used by every item: the descending
field convention ($df(X)<0$ off the critical set, $X=(2u,-2v)$ in Morse
charts), $k$ is the number of negative squares, $0\le k\le n$, faces may be
empty, and the $0$-handle/n-handle endpoint conventions of the attachment
definition hold. `def-countable-choice` is declared wherever a cited supplier
assumes $\mathrm{AC}_\omega$; the existence theorem declares the full Axiom of
Choice through the relative jet-transversality density theorem.

### Per-item checkpoints (dependency order)

1. `def-smooth-cobordism-triad-for-morse-theory` — claim: compact collared
   triad $(W;M_0,M_1)$, faces possibly empty, reversed triad; no orientation.
   Locator: Wall §§5.1, Milnor §§2. Decision: **accept** (definition,
   precheck n/a). Checks: precheck n/a, rendercheck OK, contract strict.
2. `def-morse-function-adapted-to-a-cobordism` — claim: adapted function and
   downward field pointing outward at $M_0$, inward at $M_1$; excellent =
   distinct critical values; states the library's descending convention and
   the translation $-X$ for the classical presentation. Decision: **accept**.
3. `lem-boundary-product-function-on-a-collared-cobordism` — claim: a smooth
   boundary product function $h$ with $h^{-1}(0)=M_0$, $h^{-1}(1)=M_1$,
   $h=t_0/3$, $h=1-t_1/3$, $1/3<h<2/3$ off the collars, no critical point
   near $\partial W$. Decision: **repaired** (choice citation added at the
   partition-of-unity step).
4. `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` —
   claim: existence of an adapted excellent pair agreeing with the product
   model on the fixed collars; full AC used exactly at the density theorem
   (design §12.7(5)), $\mathrm{AC}_\omega$ through collars, partitions and the
   metric. Decision: **accept**. Open (inherited): the AC-dependent published
   supplier.
5. `lem-separating-critical-values-far-from-the-boundary` — claim: after a
   $C^\infty$-small perturbation supported off a closed boundary collar, the
   same critical points and Hessians and distinct critical values. Decision:
   **repaired** (removed the unused uniform-Hessian-gaps supplier, whose
   §12.7(4) finding is thereby no longer consumed here; cited the Morse
   definition where the perturbed function is concluded to be Morse).
6. `def-handle-decomposition-relative-to-the-incoming-boundary` — claim:
   finite ordered handle list relative to $M_0$, empty list allowed, endpoint
   cases $k=0$, $k=n$ part of the definition. Decision: **accept**.
7. `lem-standard-handle-admits-an-adapted-morse-function` — claim: explicit
   $F$ on $D^k\times D^{n-k}$ with one nondegenerate index-$k$ critical point,
   product collars and a critical-point-free corner band. Decision:
   **repaired** (corrected the partial-derivative case analysis; cited the
   Morse definition). See the sharpened checkpoint below.
8. `lem-gluing-handle-morse-models-along-collars` — claim: collar
   insertion/matched-height construction gluing the standard model onto a
   collar, new critical point of index $k$ at value $1-\varepsilon/2$, new
   collar coordinate $t'$. Decision: **repaired** (rewritten from the
   incoherent scaffold argument).
9. `lem-interior-slab-handle-attachment` — claim: an interior slab with one
   critical point, or finitely many of one index at one value, attaches
   disjoint rounded handles relative to the lower sublevel, order immaterial.
   Locator: Wall 5.1.6, Milnor §3. Decision: **accept**.
10. `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy` —
    claim: $(N',N)$ is homotopy equivalent relative to $N$ to the $k$-cell
    attachment; both composites homotopic to the identity. Decision:
    **repaired** (explicit coherent homotopy replacing a flawed retraction
    formula; $k=0$ and $k=n$ verified).
11. `lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum`
    — claim: a $1$-handle joining two boundary disks gives the boundary
    connected sum and the stated boundary identification. Decision:
    **repaired** (choice citation added at the collar step).
12. `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`
    — claim: $N\natural D^n\cong N$ by a diffeomorphism equal to the identity
    outside a collar of $D$. Decision: **accept**.
13. `thm-morse-functions-and-handle-decompositions-correspond` — claim: the
    two-way correspondence, one handle per critical point with the same
    index, attaching sphere = transported unstable boundary. Locator: Wall
    Cor. 5.1.7 and Thm. 5.1.9. Decision: **repaired** (removed unused
    suppliers — the Morse lemma and the index-$0$/$n$-handle corollaries —
    and cited the standard model, the sublevel notation and the choice
    principle at their actual steps).
14. `lem-a-handle-decomposition-gives-a-relative-cw-complex` — claim: a
    relative CW pair with one cell per handle and a relative homotopy
    equivalence. Locator: Wall 5.3.1, Pajitnov Ch. 5. Decision: **accept**.
15. `def-dual-handle-decomposition` — claim: same handle bodies with disk
    factors exchanged, reverse order, $k\leftrightarrow n-k$, attaching/belt
    spheres interchanged. Locator: Wall 5.3.4. Decision: **accept**.
16. `thm-handle-duality-from-negating-a-morse-function` — claim: $1-f$ is
    adapted excellent on the reversed triad with indices $n-\operatorname{ind}p$,
    $-X$ is adapted, and the decomposition is the dual one. Decision:
    **repaired** (choice principle cited at the correspondence step).
17. `lem-product-cobordisms-have-critical-point-free-presentations` — claim:
    the projection on $M\times[0,1]$ is adapted and the empty list is a handle
    presentation; corner case treated. Decision: **repaired** (removed the
    inapplicable regular-interval supplier; the product identification is the
    identity map; cited the triad definition).
18. `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods` —
    claim: crossing spheres $A_q$, $B_p$ of dimensions
    $\operatorname{ind}q-1$, $n-\operatorname{ind}p-1$ with product
    neighbourhoods and the one-crossing correspondence. Locator: Milnor
    §§4.1–4.4. Decision: **repaired** (removed an unused local-Morse-sublevel
    supplier).
19. `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`
    — claim: a sphere with a product neighbourhood can be moved off a
    lower-dimensional submanifold by a compactly supported isotopy of the
    identity. Decision: **accept**.
20. `lem-flow-reparametrization-realizes-a-level-isotopy` — claim: a compactly
    supported level isotopy is realized by a complete downward gradient-like
    field equal to the old one outside the band. Locator: Milnor Lemma 4.7.
    Decision: **accept**.
21. `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged`
    — claim: for disjoint compact trajectory sets the two critical values can
    be interchanged (including $a=a'$), keeping $X$ gradient-like, $g=f$ plus
    a constant near the critical points. Locator: Milnor Thms. 4.1/4.2.
    Decision: **repaired** (proof-layout separation before step 2.1).
22. `lem-gradient-like-perturbation-separates-adjacent-critical-levels` —
    claim: for consecutive levels with $\operatorname{ind}p\ge\operatorname{ind}q$
    a perturbation of the field supported in a prescribed neighbourhood makes
    the crossing spheres pairwise disjoint, hence the trajectory sets
    disjoint. Locator: Milnor Thm. 4.4 with Lemmas 4.6/4.7. Decision:
    **repaired** (cited the downward-gradient-like definition and the choice
    principle at their use).
23. `thm-morse-rearrangement-by-index` — claim: an adjusted $g$ and field
    $X'$ with $g(p)<g(q)$ whenever $\operatorname{ind}p<\operatorname{ind}q$.
    Locator: Milnor Thm. 4.8 (successive adjacent exchange). Decision:
    **repaired** (choice citation at the separation step).
24. `lem-increasing-reparametrization-of-finitely-many-critical-levels` —
    claim: a positive-slope diffeomorphism of $[0,1]$ fixed near the ends
    carrying $c_k$ to $d_k$; construction is choice-free. Locator: Pajitnov
    Ch. 4 §3 (value shifts). Decision: **accept**.
25. `thm-self-indexing-morse-function-existence` — claim: an adapted field
    and function with $g(p)=\phi(\operatorname{ind}p)$, finally
    $(\operatorname{ind}p+1)/(n+2)$, after merging equal-index levels,
    reparametrizing and patching the field to the model. Locator: Wall's
    self-indexing remark, Milnor Thm. 4.8, Pajitnov Lemma 3.38. Decision:
    **repaired** (choice citation at the merge step).
26. `lem-handles-of-equal-index-can-be-attached-on-one-level` — claim:
    simultaneous/successive attachment in any order and free reordering;
    attaching embeddings may be changed by isotopy of the attaching region.
    Locator: Wall Lemma 5.2.1. Decision: **escalate** — see the finding
    below; steps 2.1/3.1 and the boundary-diffeotopy form of the last clause
    (step 1.2) are complete, the general isotopy form is not available before
    this page.
27. `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`
    — claim: a connected triad with nonempty connected incoming boundary has
    a presentation with no $0$-handles; $k$ components leave $k-1$ connecting
    $1$-handles; empty incoming boundary keeps exactly the needed $0$-handles.
    Locator: Wall 5.4.1. Decision: **repaired** (choice citation at the
    absorption step).
28. `prop-dual-elimination-of-top-index-handles` — claim: dually, a connected
    triad with nonempty outgoing boundary has a presentation with no
    $n$-handles. Decision: **repaired** (choice citation at the
    correspondence step).
29. `rem-handle-decompositions-are-not-canonical` — claim: presentations are
    not canonical; no invariant may be read off without an invariance
    argument, and the elementary moves are not constructed here. Decision:
    **accept** (remark, precheck n/a).
30. `ex-relative-handle-decomposition-of-a-cylinder` — claim: $M\times[0,1]$
    has the empty presentation and the projection as adapted
    critical-point-free function. Decision: **accept**.
31. `ex-dual-handle-presentations-of-a-genus-g-surface` — claim: the genus-$g$
    presentation has $1,2g,1$ handles and its dual exchanges $0\leftrightarrow2$
    with the one-handles self-dual. Decision: **repaired** (removed an unused
    product-presentation supplier from the example and its dependencies).
32. `ex-reordering-independent-one-handles` — claim: two disjoint one-handles
    on a disk may be attached in either order with diffeomorphic results.
    Decision: **accept**.
33. `cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory`
    — claim (refuted): "whenever two critical levels are joined by a
    trajectory their values can be interchanged keeping the same field"; on
    $S^1$ with $f=\cos\theta$, $X=\sin\theta\,\partial_\theta$ this fails by
    strict decrease along the trajectory. Decision: **accept** (uses
    `## Statement refuted` / `## Counterexample`).
34. `ex-empty-incoming-boundary-requires-zero-handles` — claim: with
    $M_0=\varnothing$ every presentation begins with a $0$-handle, and $S^n$
    has the $0$-handle/$n$-handle presentation. Decision: **accept**.

### Checkpoint — item 1 (`def-smooth-cobordism-triad-for-morse-theory`)

- Claim: a compact triadic cobordism with collared faces, either face possibly
  empty, reversed triad $(W;M_1,M_0)$; no orientation data. Definition only.
- Suppliers read: DT-G (boundary/collar conventions, `thm-collar-neighborhood-theorem`).
- Decision: author as a Definition with `verification.precheck: n/a`, deps as in
  the manifest, `provenance.statement: literature-derived`, Wall/Milnor locators.
- Checks: definition (`verification.precheck: n/a`), rendercheck OK, strict
  proof-contract entry present, proof-layout clean in the final 34-item batch
  run (148 steps, 0 defects).

### Checkpoint — item 9 (`lem-standard-handle-admits-an-adapted-morse-function`)

- Claim sharpening discovered by audit: the attaching region $S^{k-1}\times D^{n-k}$
  and the outgoing region $D^k\times S^{n-k-1}$ share the corner
  $S^{k-1}\times S^{n-k-1}$, so a smooth $F$ cannot equal $-1$ on all of the first
  and $+1$ on all of the second. The item is stated with the corner collar made
  explicit: $F=-1$ (resp. $+1$) holds on the attaching (resp. outgoing) disk minus
  a collar of the corner, the level sets in the two collars are the product level
  sets, and the corner collar is exactly where the corner smoothing operates.
  This preserves the promised claim in the only form in which it is true; the
  manifest statement text is left unchanged (no scope churn) and the sharpening is
  reported at handoff.
- Construction verified independently (explicit formula, analytic partial
  derivative signs) before writing: with $a=|u|^2$, $b=|v|^2$, cutoffs
  $A,B$ equal to $0$ for $\cdot\le 5/8$ and to $1$ for $\cdot\ge 3/4$, and
  $F=-a(1-B(b))+b(1-A(a))+A(a)B(b)(b-a)$, one has $F=b-a$ on the middle square,
  $F=-a$ in the attaching collar, $F=b$ in the outgoing collar, and strict partial
  derivative signs in every region, so the origin is the only critical point.
- Checks: precheck PASS, rendercheck OK, strict proof-contract entry present,
  proof-layout clean (final batch run: 34 items, 148 steps, 0 defects).

## Escalation — `lem-handles-of-equal-index-can-be-attached-on-one-level`

This is the one open obligation of the pair and the only item whose decision is
`escalate` (owner-held). It is a scaffold ordering defect found by audit, not a
failure of the page's actual arguments.

- **Consumer:** `lem-handles-of-equal-index-can-be-attached-on-one-level`
  (page `handle-decompositions-duality-and-rearrangement`, order 527), final
  sentence of the statement ("attaching embeddings may be changed by isotopy of
  the attaching region"), consumed in the proof at the former step 1.2 and in
  step 4.1.
- **What is proved now:** step 1.2 proves, completely and with earlier-page
  suppliers only (`def-attaching-a-smooth-handle-with-corner-rounding`,
  `thm-collar-neighborhood-theorem`,
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`,
  `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism`),
  that an attachment is unchanged when the attaching embedding is changed by a
  diffeotopy of the boundary; steps 2.1 and 3.1 prove simultaneous/successive
  attachment in any order and free reordering from the published
  simultaneous-attachment/interior-slab suppliers. The page's consumers
  (`prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`,
  `prop-dual-elimination-of-top-index-handles`,
  `ex-reordering-independent-one-handles`) use exactly this form.
- **The gap:** read as *arbitrary* smooth isotopies of attaching embeddings,
  the clause is the diffeotopy extension theorem (Wall, *Differential
  Topology*, Theorem 2.4.2). This library supplies that theorem only on LATER
  pages: `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  (published, page `oriented-links-braid-closures-and-markov-equivalence`,
  order 749), `lem-isotopy-extension-for-a-compact-source-with-boundary`
  (in-run, page `smooth-surgery-traces-and-handle-trading`, order 557), and
  `thm-isotopy-extension` with `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood`
  (in-run, page `isotopy-extension-and-embedding-theory-beyond-whitney`, order
  569); `lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type`
  (page `handle-cancellation-slides-and-elementary-moves`, order 533) is the
  direct analogue. A lemma at order 527 cannot consume them (`fwdcheck`
  `forward-on-spine`), and no earlier-page supplier exists; the scaffold cited
  the order-749 item, which `fwdcheck` flags as `forward-undeclared`.
  The scaffold review in Step 3a missed this because it checked published
  on-disk existence and in-run edges but not published-vs-plan reading order.
- **Item state:** the item is authored, all numbered steps are proved, the
  general form is declared only as an orientation-only `forward_refs` entry and
  a `## Remarks` note (no load-bearing later-page use), and `fwdcheck` passes
  for it. `step3-decisions.mjs` records `escalate` with confidence 1 and the
  full reason.
- **Downstream consumers (from the run ledger):**
  `lem-handle-slides-preserve-the-relative-diffeomorphism-type` (batch 3),
  `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` (batch 15)
  and `prop-morse-handle-chain-complex-computes-singular-homology` (batch 4)
  list this item as a supplier. Their reviews are consumer-owned rows in the
  unified ledger; the owner's resolution of this escalation also governs those
  uses.
- **Remedies for the owner:** (a) confirm the intended reading of the clause as
  the boundary-diffeotopy form (Wall 5.2.1's "by further diffeotopies"), in
  which case the item is complete as authored and the escalation can be
  resolved; (b) amend the pending statement clause; or (c) authorize a local
  prerequisite item proving diffeotopy extension for a compact source with
  boundary, which duplicates the later pages.

## Added, removed and re-pointed suppliers

- **Added to item + manifest deps:** `def-choice-function` and `def-countable`
  (`lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum`);
  `thm-collar-neighborhood-theorem`
  (`lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`);
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`
  (`lem-handles-of-equal-index-can-be-attached-on-one-level`).
- **Removed as unused after audit (item + manifest):**
  `lem-compact-morse-critical-points-have-uniform-hessian-gaps`
  (`lem-separating-critical-values-far-from-the-boundary`);
  `cor-index-zero-handles-create-components`, `cor-index-n-handles-cap-boundary-spheres`
  and `thm-morse-lemma` (`thm-morse-functions-and-handle-decompositions-correspond`);
  `thm-regular-interval-diffeomorphism`
  (`lem-product-cobordisms-have-critical-point-free-presentations`);
  `lem-local-morse-sublevel-pair-is-a-handle-pair`
  (`lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods`);
  `lem-product-cobordisms-have-critical-point-free-presentations`
  (`ex-dual-handle-presentations-of-a-genus-g-surface`).
- **Re-pointed:** `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  moved from `deps` to the orientation-only `forward_refs` of the equal-index
  lemma (load-bearing use removed by the step-1.2 rewrite).
- **Fact-level citation repairs:** one missing citation per affected item where
  a declared fact had no using step (23 fact links in 15 items), all resolved
  by citing the fact at the step that uses it or by deleting a genuinely unused
  supplier; `proof-contract --strict` now reports 0 uncontracted facts and 0
  unmapped steps for all 34 items.
- **Dependency levels:** recomputed after every dependency change; no level
  changed (the removals only deleted unneeded published edges), all 34 labels
  match `item-dependency-levels.mjs check`, and no batch-1 level error exists
  (maximum level 8).

## Checks run at handoff (all on the final files)

- `node tools/tsx-run.mjs tools/precheck.mts <34 item paths>` — 29 checked
  (5 definitions/remark are `precheck: n/a`), 0 failing.
- `node tools/rendercheck.mjs <34 item paths + both pages>` — 36 files OK (no
  wikilink in math, balanced delimiters, KaTeX and YAML clean).
- `node tools/proof-layout.mjs <34 item paths>` — one batched run: 34 items,
  148 steps, 0 defects.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-1.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 34/34 items checked; 185 exact source excerpts with
  per-step uses and 8-case boundary worksheets.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-1.pages.json`
  — 34 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-1.pages.json`
  — 34 items, 0 missing, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` —
  no batch-1 error among the run's remaining errors (all belong to other
  batches).
- `node tools/depcheck.mjs --items-file <the 34 ids>` and
  `node tools/fwdcheck.mjs --items-file <the 34 ids>` — no batch-1 finding;
  fwdcheck reports the selected items and the global forward/dependency graph
  as clean after the equal-index repair.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0 (item lists
  for this pair are spliced at Step 4; page order and `requires` clean).
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-1.coverage.json --require-destination`
  — 1 page, 54 harvested rows, 0 errors, 0 warnings.
- `node tools/extcheck.mjs` — OK (only unrelated published unproved-consequence
  notices).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`
  — this pair closed (scope decision `sufficient`, unchanged).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`
  — 33 of the 34 pair items closed by current `accept`/`repaired` receipts with
  confidence 1; the single open item is the deliberate escalation above.

## Published concerns reported (not repaired here)

- `lem-compact-morse-critical-points-have-uniform-hessian-gaps` (page
  `morse-functions-critical-values-and-genericity`, order 519; design
  §12.7(4)): the quantitative-inverse-function gap recorded in the design
  remains a published-supplier finding. This pair now consumes it only through
  `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`; the
  separating lemma no longer consumes it.
- `thm-morse-functions-are-dense-by-relative-jet-transversality` (order 519;
  design §12.7(5)): full AC dependence; consumed by the existence theorem,
  whose statement declares AC.
- `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces`
  (order 521; design §12.7(3)): still not consumed anywhere in this pair.

## Open obligations and handoff

- All 34 item files, both library pages
  (`library/differential-topology/handle-decompositions-duality-and-rearrangement.md`
  and its examples companion), the batch proof-contract file and this report
  are on disk; the batch manifest, coverage and cross-batch input are
  consistent.
- The only open obligation is the owner-held escalation of
  `lem-handles-of-equal-index-can-be-attached-on-one-level` above; the other 33
  items carry current `accept`/`repaired` receipts. The remaining Step 3b gate
  red is exactly that escalation, and no unresolved item here is marked
  complete.
