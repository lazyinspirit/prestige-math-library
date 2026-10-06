# Step 3a scope review — pair `the-whitney-trick-and-surgery-below-the-middle-dimension`

- Run: `frontier-41-ha-dt-29` (stage `3a-scope`), dispatch label
  `step3a-pair-the-whitney-trick-and-surgery-below-the-middle-dimension-9114c69be575bcbb`
- Role: alpha (scope reviewer only — not owner, not item author)
- A page: `the-whitney-trick-and-surgery-below-the-middle-dimension` (batch 14,
  order 559, `differential-topology`; 22 items: 3 definitions, 11 lemmas,
  1 proposition, 4 theorems, 1 corollary, 2 remarks)
- B page: `the-whitney-trick-and-surgery-below-the-middle-dimension-examples`
  (batch 14, order 560; 5 items: 2 examples, 3 counterexamples)
- Decision: **`insufficient`** — coverage is complete except that two planned
  items cannot be authored as stated (§5); a valid witness of the designed
  fundamental-group obstruction is missing and one planned corollary's
  construction is impossible. No scaffold, manifest, coverage, plan or owner
  record was edited.
- Date: 2026-10-06.

This report decides scope only. It is not an item approval, not a proof
judgement and not an owner record.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-differential-topology-track.md` DT-22
(lines 1169–1209), binding `requires` array (§12.4) and §12.5 repair row
(lines 2295–2303), plus the §12.6 disposition row `DT-21--DT-24`.
Registries/inputs read:
`research/plan-spec.json` (page 1202), `research/frontier-41-ha-dt-29-scope-ledger.json`,
`research/frontier-41-ha-dt-29-batch-14.pages.json`, `...batch-14.coverage.json`,
`...batch-14.notes.md`, `...batch-14.cross-batch-dependencies.json`,
`...cross-batch-dependencies.json` (derived ledger), the drift report
`...alpha-step1-drift.md` (DT-22 `no-drift`), and
`...owner-authoring-direction.md` (no page-specific clause for DT-22; its
general retain-all-restrictions and no-draft-as-published rules are respected).

Intended subject: the two-sheet Whitney trick — Whitney circle, Whitney disk
(clean/framed), Whitney framing under opposite local signs, the
fundamental-group label obstruction, general position in the stable range, the
local Whitney move and its cancellation effect, the high-dimensional theorem,
the codimension-two borderline supplied by Milnor's stronger theorem, the
simply-connected disjunction theorem, and the surgery-below-the-middle engine
with its exact dimension inequality — together with the two recorded
boundaries (smooth dimension four; non-simply-connected group-ring and Whitney
disk obstructions).

Intended role: supplier of the Whitney-cancellation layer for
`the-smooth-h-cobordism-theorem` (batch 15, order 561),
`whitehead-torsion-and-the-s-cobordism-theorem` (batch 16, order 563) and
`isotopy-extension-and-embedding-theory-beyond-whitney` (batch 19, order 579);
the pair's A page consumes batch 3 (order 533) and batch 13 (order 557).
Consumer evidence: the derived ledger carries 39 edges touching batch 14 —
14 outgoing (1 page + 2 item edges to batch 3; 1 page + 10 item edges to batch
13), 25 incoming (batch 15: 1 page + 10 item edges; batch 16: 5 item edges;
batch 19: 1 page + 8 item edges) — every edge with a review row, no unreviewed
batch and no orphaned review (`frontier-dependency-ledger.mjs` collector rerun
read-only today). Every supplier id named by batches 15/16/19 exists on the
current A page (arcs lemma, metastable embedding, label lemma, high-dimensional
trick, borderline theorem, local Whitney move, general-position lemma, framing
obstruction lemma, Whitney-move theorem, dimension-four remark).

## 2. Design-to-manifest mapping

All 16 designed A rows and all 5 designed B rows (DT-22 items 1–16 and B1–B5;
lines 1175–1209) are present with the designed kinds and roles, and the §12.5
repair is implemented:

- the clean-disk general-position lemma prints `a,b <= m-3` (both codimensions
  at least three) with the dimension counts `2+a-m <= -1`, `2+b-m <= -1`;
- Milnor's stronger cancellation alternative is stated separately as
  `thm-whitney-trick-in-the-two-dimensional-borderline-case` (`s>=3`, `m>=5`,
  complement `pi_1`-injectivity when `r<=2`), matching Milnor Theorem 6.6;
- design B2 is replaced by
  `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold`
  as §12.5 mandates (two surfaces in a six-manifold cannot give transverse
  points);
- the design's item 11–13 order is refined (representatives before the
  connectivity proposition); no claim is weakened.

Six prerequisite rows were added on the A page, each the interface of a
designed proof route: `lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points`,
`lem-metastable-embedding-for-maps-from-a-compact-manifold`,
`lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range`,
`lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial`,
`lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle`
and the borderline theorem above. Their stated hypotheses match the sources
read at §3 (Milnor Lemmas 6.11–6.13; Ranicki Prop. 10.2, Prop. 10.24 proof,
Thm. 7.27(i) `n_1=2` case). No designed item is dropped.

## 3. Source coverage and verification

`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-14.coverage.json
--json` rerun today: 2 pages, 64 harvested rows, 0 errors, 0 warnings. The A
page has three full treatments (Ranicki, Lück, Milnor) and the B page has those
plus Fox–Milnor; all four were re-fetched today and the bytes/hashes match the
recorded stamps exactly:

| Treatment | Bytes | sha256_16 | Locators re-read by me |
|---|---|---|---|
| Ranicki, *Algebraic and Geometric Surgery* | 3,627,372 | `fe5e07eb7448953e` | Thm. 7.27(i)(ii), Remark 7.29, Cor. 7.30 (printed pp. 138–141); Prop. 10.2, Prop. 10.24, Prop. 10.25(i), Thm. 10.30 (pp. 195, 210, 215) |
| Lück, *A Basic Introduction to Surgery Theory* | 1,474,199 | `ff8ccb8809443404` | Homology Lemma 1.22 (printed p. 14; `n>=6`, `2<=q<=n-3`, lift/label condition) |
| Milnor, *Lectures on the h-Cobordism Theorem* | 3,572,752 | `658bfefbdfe7838b` | Thm. 6.6 with its hypotheses `r+s>=5`, `s>=3`, `pi_1(V-M')->pi_1(V)` injective for `r=1,2`, and the remark on automaticity |
| Fox–Milnor, *Singularities of 2-spheres in 4-space…* | 934,724 | `c8d40f8785a371be` | Theorem 2 (slice ⟹ `A(t)=p(t)p(1/t)`) and the trefoil non-sliceness input of B5 |

Scope-level confirmations: Ranicki 7.27(i) is stated exactly for
`pi_1(M)`-trivial embeddings with `n_1,n_2>=3`, or `n_1=2, n_2>=3` with
`pi_1(M) = pi_1(M\N_1)`, and the condition `I(x)=-I(y) in Z[pi_1(M)]`
(sign plus label); Ranicki Prop. 10.2 is exactly the trace homotopy effect the
homotopy-effect lemma needs; Ranicki Prop. 10.24/Prop. 10.25(i)/Thm. 10.30 are
the stable-normal framing criterion and the `2n<=m` connectivity improvement
(`2p+2<=m` is the design's `2p+1<m`), so the surgery proposition matches its
design range. Not re-read by me: Juhasz Ch. 2 §2.2 (publisher copy
login-gated; recorded as a limitation in the batch notes); no stamp is claimed
for it. The pair's coverage rests on the three independent read treatments,
which satisfies the two-treatment rule.

One coverage-mapping defect is part of the insufficient finding: the B-page
rows for Ranicki Prop. 10.24 and Milnor's post-Theorem-6.6 remark are marked
`inline` into `cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation`,
but neither source supports that item's construction (§5a).

## 4. Dependency and prerequisite review

- All 75 distinct dependencies of the 27 items resolve: 52 published items in
  `items/` (every one `status: published`) and 23 current-run scaffolds
  (17 own-page, 1 batch 3, 5 batch 13); **0 missing, 0 planned-only**. The
  batch-13 suppliers (`def-degree-one-normal-map-for-the-surgery-program`,
  `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class`,
  `lem-attaching-a-single-cell-kills-the-represented-homotopy-class`,
  `def-framed-embedded-surgery-sphere`,
  `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere`)
  and the batch-3 supplier
  `lem-transverse-complementary-spheres-have-product-charts` are all present
  in the current manifests with the interfaces the batch-14 items consume
  (checked statements; orders 533/557 < 559).
- The manifest `requires` array equals plan §12.4 / plan-spec page 1202 exactly
  (10 ids; eight published pages and the two earlier in-run supplier pages).
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29`: 883 items,
  883 ready, closed (0 work rows).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`:
  exit 0, 883 items over 60 pages, maximum level 23.
- `node tools/manifest-deps.mjs` over all 30 current run manifests: 883 items,
  0 normalized, 0 errors; `content-policy --manifest-only` over the same:
  883 scoped items, 0 errors, 0 warnings. (Run on the batch-14 file alone the
  policy check flags the declared cross-batch suppliers as
  `batch-dependency-missing`; that is the tool's single-batch reading, and it
  clears when the run's manifests are passed together, as the batch notes
  record.)
- Consumers batch 15/16/19 are supplied: every batch-14 id they declare exists
  on the current A page.
- Confirmed unmet prerequisites absent from both the published library and the
  current run scaffold: **none**.
- Evidence-state flags, not scope omissions (pre-existing, repo-wide 833 rows
  in `tools/depcheck.mjs`): 10 published direct dependencies of this pair carry
  a judge pass but no `verification.audited`/`verified` marker
  (`def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
  `def-mod-two-intersection-number`, `cor-oriented-intersection-reduces-to-mod-two-intersection`,
  `cor-negative-expected-dimension-generic-intersections-are-empty`,
  `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`,
  `thm-oriented-intersection-number-is-homotopy-invariant`,
  `thm-intersection-number-under-factor-interchange`,
  `lem-compact-transverse-complementary-intersections-are-finite`,
  `def-stable-normal-bundle-of-a-compact-smooth-manifold`). Recommended owner
  action: record the completed evidence as an audit marker; no statement
  change.
- Recorded residual uncertainty (not a confirmed gap): the metastable
  embedding lemma's immersion step needs a first-order (1-jet) genericity
  argument; the published DG approximation/transversality items are
  position-level (0-jet) and `thm-weak-whitney-immersion-theorem` is
  manifold-into-Euclidean only. The batch-14 notes already flag this for the
  Step-3b author (derive it from the published parametric-transversality
  family or mint a local sub-lemma); I could not confirm it is derivable from
  the published suppliers alone. Recommended owner action: keep it as an
  explicit Step-3b obligation (or authorize the local sub-lemma) rather than
  assuming it.

## 5. Confirmed defects driving the `insufficient` decision

**(a) `cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation`
(B page) is false as stated, and the pair therefore has no valid witness of
the designed non-simply-connected obstruction.** In the scaffold's
construction (`T^2`, `A=S^1×{0}`, `B` the graph of the degree-zero circle map
`f(θ)=½sin(2πθ)`) both sheets represent `(1,0) in H_1(T^2)`. The axis segment
over `θ in [0,½]` and the upper arc of the graph over `[0,½]` bound the
embedded disk `{(θ,y): 0<=θ<=½, 0<=y<=f(θ)} ⊂ [0,½]×[0,½] ⊂ T^2`; those two
arcs meet `A∩B` only at `p,q` and are otherwise disjoint, so they are an
admissible Whitney circle and it is null-homotopic (the clean-disk and local
move items apply verbatim; equivalently, both simple closed curves are
`(1,0)`-curves and are isotopic in `T^2`). The achievable classes over all
admissible arc choices are `{(1+j+k,0)} ∋ 0` (the A-page label lemma itself
says arc changes lie in the images `im pi_1(A)=im pi_1(B)=<(1,0)>`), so the
claims "for every admissible choice … the class has the form `(j+1,0) != 0`",
"loops in `B` are null-homotopic in `T^2`" and "no choice of arcs makes the
circle null-homotopic, the group labels differ" are all false; `B` is a
`(1,0)`-curve, not null-homotopic. Moreover `A,B` are not `pi_1`-trivial
(`pi_1(S^1) -> pi_1(T^2)` is injective), so the `Z[pi_1]`-valued label used by
Ranicki Def. 7.13/7.18 is not defined for this configuration at all. The
coverage rows claimed for this item (Ranicki Prop. 10.24; Milnor's remark
after Thm. 6.6) do not support it. **Recommended owner action (enrichment, no
merger):** authorize replacing the item with a correct `pi_1`-trivial
counterexample — simply connected sheets in a non-simply-connected ambient
(e.g. two `S^3`'s meeting in two opposite-sign points in a closed 6-manifold
with `pi_1 != 0`, in the Ranicki Thm. 7.27(i) / Milnor Thm. 6.6 setting, with
distinct labels so that no admissible circle is null-homotopic) — or re-scope
the design row and re-dispose those two coverage rows honestly.

**(b) `cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move`
(A page) states an impossible example.** For `B` the graph of a degree-zero
circle map — and equally for the strategy's real periodic `g` with
`∫_0^1 g'=0` — one has `[B]=(1,0)=[A]` in `H_1(T^2)`, hence
`I(A,B)=[A]·[B]=0` by the published homotopy invariance of the oriented
intersection number; independently, the crossing signs of a periodic function
alternate around the circle, so four transverse crossings with signs
`+,+,+,-` (signed sum 2) cannot occur. The claim "`I_2(A,B)=0` while
`I(A,B)=2 != 0`" is therefore not satisfiable by the stated construction. The
intended phenomenon is correct and already witnessed inside the pair by the
degree-two example `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly`.
**Recommended owner action (enrichment, no merger):** authorize replacing the
witness with a curve of class `(1,2)` — e.g. the graph of a degree-two circle
map with four transverse crossings of signs `+,+,+,-` — or state the corollary
against the existing degree-two example; the claimed conclusion is retained.

Both are statement-level defects in planned items, not proof gaps; Step 3a
prohibits scaffold edits, so they are recorded here and in the scope-decision
reason for the owner, and the pair stops until the owner applies a repair or
re-scopes the two rows and records `proceed`.

Two further non-blocking observations: the borderline theorem's strategy
sentence calls `r=1` "excluded by `r+s>=5`" (it is not; `r=1, s>=4` satisfies
`r+s>=5` and the statement itself covers it with the explicit arc and loop
hypotheses), already flagged by the batch-15 scope review as a supplier-side
repair; and B5's "single transverse interior double point" count is unverified
by me — the refutation only needs some properly immersed disk with boundary
the trefoil, so the author should either verify or drop the exact count.

## 6. Mechanical checks rerun 2026-10-06

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 items, 0 normalized, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 scoped items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-14.coverage.json --json` | 2 pages, 64 harvested, 0 errors, 0 warnings |
| `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | 883 items, 883 ready, closed |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 0, 883 items, 60 pages |
| `node tools/depcheck.mjs` | 833 pre-existing `published-unaudited` rows repo-wide (10 touch this pair, §4); no missing/unresolved dependency in this pair |
| Source stamps | 4/4 re-downloaded today byte-identical to the recorded hashes |
| Cross-batch ledger (read-only `collect`) | 39 edges touching batch 14, all reviewed (`open`), 0 unreviewed batches, 0 orphans |
| Owner/scope receipts | none existed for this page before this review; no owner decision to respect, no page-specific direction |

## 7. Considered and declined (not scope defects)

- The immersion/self-intersection form of the Whitney trick (Ranicki Thm.
  7.27(ii), the quadratic self-intersection form) is deferred with named
  destinations (batch 19 and the owner-decision L-group sequel); the design
  commissions only the two-sheet form plus the below-middle surgery engine.
- The general group-ring form of Ranicki Cor. 7.30 is intentionally restricted
  to the simply connected stable range, exactly as the design's item 11 states;
  the group-labelled refinement is built by batch 16 against the label lemma.
- Ranicki Prop. 10.25(i)'s slightly wider single-kill range `2n+1<=m` is not
  claimed; the design prints `2p+1<m` and the scaffold prints the equivalent
  `2p+2<=m`, which is also Ranicki Thm. 10.30's `2n<=m` form for one more
  connectedness step. No consumer needs the wider range.
- The middle-dimensional obstruction, kernel modules and L-groups remain
  owner-decision (`owner-decision` coverage rows), consistent with the design's
  stopping point.

## 8. Decision

Scope decision for the A page (and hence the pair): **`insufficient`**,
recorded through
`node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29
--page the-whitney-trick-and-surgery-below-the-middle-dimension --decision
insufficient`. The pair is otherwise scope-complete (all designed rows present,
all sources read and stamped, all 75 dependencies resolved, all consumers
supplied); the block is confined to §5(a) and §5(b), and the recommended
action is a witness replacement (enrichment), not a pair merger. Receipt:
`research/frontier-41-ha-dt-29-step3a-review-the-whitney-trick-and-surgery-below-the-middle-dimension.json`.
