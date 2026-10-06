# Step 3a scope review — pair `vector-field-index-euler-characteristic-and-poincare-hopf`

- Run: `frontier-41-ha-dt-29` (stage `3a-scope`), dispatch label
  `step3a-pair-vector-field-index-euler-characteristic-and-poincare-hopf-fec5b95c243961c9`.
- Role: alpha (scope reviewer only — not owner, not item author).
- A page: `vector-field-index-euler-characteristic-and-poincare-hopf` (batch 7,
  order 541, 25 items: 3 definitions, 2 propositions, 10 lemmas, 4 theorems,
  5 corollaries, 1 remark — the design's 16 A rows plus 9 local prerequisites).
- B page: `vector-field-index-euler-characteristic-and-poincare-hopf-examples`
  (batch 7, order 542, 6 items: the design's 4 examples and 2 counterexamples).
- Decision: **`sufficient`** — recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29
  --page vector-field-index-euler-characteristic-and-poincare-hopf --decision sufficient`;
  receipt `research/frontier-41-ha-dt-29-step3a-review-vector-field-index-euler-characteristic-and-poincare-hopf.json`.
- Date: 2026-10-06 (source re-fetches stamped 2026-10-06). This file decides
  scope only. It is not an item approval, not a proof judgement and not an
  owner record. No scaffold, coverage, plan, item or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: DT-13 in `research/plan-differential-topology-track.md`
L801–L841 (summary row L42; hard-proof-closure paragraph L828–L832). Registry:
`research/plan-spec.json` orders 541/542 — both pages match the manifest
verbatim on `id`, `kind`, `category`, `title`, `order`, `companion` and the two
`requires` arrays (the plan-spec carries empty item inventories for this pair,
so the batch-7 manifest is the authoritative inventory). Run scope:
`research/frontier-41-ha-dt-29-scope-ledger.json` (both pages, batch 7).
Step-1 drift verdict: **no-drift**
(`research/frontier-41-ha-dt-29-alpha-step1-drift.md` L169–175, citing plan
L803–833: local-index invariance, the zero-section comparison, closed and
outward-boundary Poincaré–Hopf, and the converse with its obstruction-theory
interface; boundary direction and gradient-sign conventions explicit). The
owner authoring direction contains no DT-13-specific amendment.

Intended subject: the local index of an isolated zero of a smooth vector field
(defined by the degree of the normalized field on a small sphere, without an
orientation of the ambient manifold); chart/ball/trivialization independence;
nondegenerate zeros and the sign-of-determinant formula; additivity under
transverse perturbation; the zero-section intersection interpretation (the
DT-12 bridge); the Poincaré–Hopf index theorem for closed manifolds and for
compact manifolds with an outward-pointing boundary field (Milnor's Lemma 3 /
Theorem 1 route and the Gauss-map form); the converse existence theorem for
nowhere-zero fields (Hopf); the Morse corollaries fixing the gradient sign; the
odd-dimensional vanishing of χ; the evaluation of the Euler number of the
tangent bundle; and six companion examples/counterexamples (hairy ball, the
explicit odd-sphere field, planar source/sink/saddle indices, the outward disk
model, the inward-radial failure of the naive boundary statement, and the
interval as a boundary case of the odd-dimensional corollary).

Role in the library: DT-13 closes the differential-topology spine from DT-8
(Morse/handle-chain Euler identity) to DT-12 (intersection/self-intersection and
Euler classes) and supplies DT-14 (`fixed-point-index-and-the-lefschetz-theorem`,
batch 8), which declares this A page as a page prerequisite and consumes ten of
its items. It answers DT-12's forward pointer "the bridge to the Euler
characteristic in the later Euler/index pair"
(`cor-diagonal-self-intersection-is-the-euler-number-of-tm`) with
`cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`. A scan of
`library/` finds no published consumer of either page id, so the pair's
consumers are all in-run. The Lefschetz route to the theorem is deferred to
DT-14 by design (coverage row; batch-8 item 10 and remark), so the two proofs
are independent rather than circular.

## 2. Design-to-manifest mapping

All 16 designed A items are present in design order with the designed kinds and
roles (items 1–16 = `def-euler-characteristic-of-a-compact-manifold`,
`prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`,
`def-isolated-zero-and-local-index-of-a-vector-field`,
`lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`,
`def-nondegenerate-zero-of-a-vector-field`,
`thm-index-of-a-nondegenerate-vector-field-zero`,
`lem-local-index-is-additive-under-a-transverse-perturbation`,
`prop-vector-field-zero-index-is-a-zero-section-intersection-number`,
`thm-poincare-hopf-for-closed-manifolds`,
`thm-poincare-hopf-with-outward-pointing-boundary`,
`cor-nowhere-zero-vector-field-forces-zero-euler-characteristic`,
`cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda`,
`cor-morse-critical-point-sum-is-the-euler-characteristic`,
`cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic`,
`thm-converse-poincare-hopf-for-nowhere-zero-fields`,
`rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary`).
No designed claim is dropped, weakened or renamed, and the statements keep the
design's exact intent (e.g. item 12 keeps both signs $(-1)^{\lambda}$ for
$+\operatorname{grad}$ and $(-1)^{n-\lambda}$ for $-\operatorname{grad}$;
item 14 keeps the closedness-dependent odd-dimensional vanishing).

Nine items beyond the design are documented local prerequisites of designed
claims, all inside the pair's subject and placed before their consumers on the
same A page (batch-7 notes §2(b)): the Hopf Gauss-degree lemma
(`lem-index-sum-of-an-outward-field-is-the-gauss-degree`, the engine of the
closed form), the negation law (`lem-negation-scales-...`), the double/product
device (`lem-reflection-of-an-outward-field-extends-over-the-double`,
`lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold`), the
cancellation trio for the converse
(`lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball`,
`lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball`,
`lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball`), the DT-12 bridge
promised by DT-12's own forward pointer
(`cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`), and the
$n=1$ classification used by the converse
(`lem-closed-connected-one-manifolds-are-circles`). None is scope creep: the
design's hard-proof-closure paragraph and the plan's "resolve that interface at
build" clause cover the converse's cancellation route, and the DT-8/DT-12
interface items are explicitly anticipated by those pages.

The B page is exactly the design's six leaves. The hairy-ball example does not
duplicate the published direct degree proof
(`thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere`); it is the
independent Euler-obstruction application demanded by item 11 and cites only
this pair's corollary and published homology items. The coverage file's
dispositions are intact: the Lefschetz derivation is deferred to
`fixed-point-index-and-the-lefschetz-theorem` (planned, batch 8, and already an
in-run consumer of this page), the obstruction-theoretic primary-obstruction
route is out-of-scope with a reason, and the Gauss–Bonnet/curvatura-integra
connection is out-of-scope to the Riemannian track.

## 3. Source coverage

`research/frontier-41-ha-dt-29-batch-7.coverage.json` carries four sources in
seven page-source rows, all fetch-stamped at Step 1. Independent verification
(2026-10-06): I re-downloaded all four and matched the coverage stamps
byte-for-byte, reading the load-bearing locators:

| source | bytes / pages / sha256_16 | checked |
|---|---|---|
| Milnor, *Topology from the Differentiable Viewpoint* (with the 1-manifold appendix) | 1,654,205 / 76 / `2c3b7412deda8aa9` | §6 printed pp. 32–41: index definition p. 32 and sphere orientation footnote; invariance Lemmas 1–2 pp. 32–35; Lemma 3 (Hopf) with the Gauss map pp. 35–36 and the disk example p. 36; Lemma 4/5 determinant formula pp. 37–38; Theorem 1 pp. 38–39; Step 2 cancellation p. 40; Step 3 boundary case pp. 40–41; odd-sphere examples p. 39; Hopf's existence remark p. 40; appendix pp. 55–57 |
| Guillemin–Pollack, *Differential Topology* | 3,472,576 / `e4d815443ae77128` | Ch. 3 §5: index via local parametrizations pp. 132–134 (Figure 3-18 indices $+1,+1,+1,-1,+1,+2$ p. 133); Poincaré–Hopf Index Theorem statement p. 134 with the tangent-family proof pp. 134–137; zero-section/graph scheme pp. 137–138 with Exercises 6–9 p. 139–140 (hints pp. 147–148); exercises 10–13 pp. 140; §7 cell-count Euler characteristic pp. 148–150 |
| Robbin–Salamon, *Introduction to Differential Topology* (2018 draft) | 1,476,513 / 306 / `69eb6ec687010746` | Definition 2.2.2 index p. 31; Lemma 2.2.3 determinant p. 32; Theorem 2.3.1 boundary form with χ = alternating Betti sum p. 33; Lemma 2.3.2 (Hopf) pp. 33–34; Lemma 2.3.3 perturbation p. 34; §6.4.4 with Theorem 6.4.8 p. 151 |
| Nicolaescu, *An Invitation to Morse Theory*, 2nd ed. | 1,821,860 / 291 / `c599a63debd5e6e6` | χ via Betti numbers and Corollary 2.3.3 (topological Morse inequalities, $\sum_\lambda(-1)^\lambda\mu_f(\lambda)=\chi(M)$ over any field), printed pp. 48–49 |

The design's fourth treatment, Stanford Math 215B Lectures 16–17, is unusable
as designed, and I verified the batch's substitution claim directly: the file
behind the locator (`https://web.stanford.edu/~lindrew/math215B.pdf`, 543,433 B,
63 pp, `7ac76c813f493ed7`, the same file verified in frontier-38) never states
or proves Poincaré–Hopf — its only mentions are future-tense announcements
("Later on in the class, we'll prove the Poincaré-Hopf theorem…" and "We'll
return to all of this when we do Poincaré-Hopf and intersection theory").
Robbin–Salamon and Nicolaescu are adequate replacements: every claim has at
least two complete independent full-text treatments, and the boundary form and
the Morse Euler identity — the two places where the design's Hard-proof closure
was thin — have a dedicated complete treatment each.

The Hirsch Ch. 5 §2 drop recorded in the batch notes (full text not obtained) is
a documented, non-blocking source substitution: no coverage row cites Hirsch
and no claim depends on it. Minor documentation nit (not a coverage defect):
batch-7 notes §5 lists Milnor as 10,139,305 bytes while the coverage stamp and
my re-fetch give 1,654,205 bytes (the notes table is wrong; the coverage file is
right).

## 4. Prerequisite examination (unmet-prerequisite check)

Mechanical results on the delivered artifacts (re-run 2026-10-06):

- `coverage-checklist research/frontier-41-ha-dt-29-batch-7.coverage.json --require-destination`
  → 2 pages, 64 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --coverage …` → 7/7 source rows fetch-verified, 0
  documented drops; `source-backing … --require-verified` → 28 authored
  results, every one backed by an openable source.
- `manifest-deps` on batch 7 → 31 items, 0 errors; `content-policy
  --manifest-only` across all 30 batch manifests → 883 scoped items, 0 errors,
  0 warnings (the batch-7 file alone reports the 12 expected cross-batch edges,
  resolved run-wide); `item-dependency-levels check --run` → 883 items over 60
  pages, maximum level 23, exit 0.
- Dependency closure of the pair: 2366 distinct ids = 69 run items (this pair
  plus cross-batch suppliers) + 2297 published item files, every one
  `status: published`; **0 unresolved, 0 unpublished, 0 forward-only**. The 107
  distinct direct dependency targets are 77 published items and 30 run items;
  every published direct dep resolves with a matching id.
- Cross-batch in-run suppliers, all scaffolded in earlier batches and reviewed
  in `frontier-41-ha-dt-29-batch-7.cross-batch-dependencies.json` (14 edges):
  batch 4 `cor-morse-euler-characteristic-identity`,
  `prop-morse-handle-chain-complex-computes-singular-homology`,
  `lem-exact-sequence-dimension-inequality`; batch 2
  `lem-normal-push-off-zeros-are-self-intersection-points`,
  `thm-self-intersection-is-the-euler-number-of-the-normal-bundle`,
  `prop-mod-two-self-intersection-needs-no-orientation`,
  `cor-diagonal-self-intersection-is-the-euler-number-of-tm`; batch 1
  `thm-morse-functions-and-handle-decompositions-correspond`,
  `lem-a-handle-decomposition-gives-a-relative-cw-complex`. I read each
  supplier's current scaffold statement and the interface use, and the
  hypotheses match (in particular the determinant sign conventions of the
  DT-12 push-off item and the outward-field hypothesis of Robbin–Salamon's
  Theorem 2.3.1, of which the published/scaffolded Hopf lemma is the local
  form).
- Page `requires`: 9 of the 11 required pages are published on disk
  (`morse-critical-points-hessians-and-indices`,
  `oriented-and-mod-two-intersection-numbers`,
  `vector-fields-flows-and-lie-derivatives`,
  `manifolds-with-boundary-collars-and-orientations`,
  `the-de-rham-theorem-and-degree`, `singular-chains-and-singular-homology`,
  `cw-complexes-and-cellular-homology`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `obstruction-theory-postnikov-towers-and-classifying-spaces`); the remaining
  two are the in-run supplier pages of batches 4 and 2, correctly declared as
  page edges. Every additional published page named in the batch notes
  (Whitney/tubular-neighbourhoods, Morse genericity, gradient-like fields,
  higher homotopy groups, Riemannian metrics, sublevel deformation, relative
  homology/Mayer–Vietoris) exists in `library/` and is in the page's
  plan-spec requires closure (292 pages).
- Consumers: batch 8 requires the A page and consumes ten of its items
  (`def-isolated-zero-…`, `def-nondegenerate-zero-…`,
  `thm-index-of-a-nondegenerate-vector-field-zero`,
  `lem-local-index-is-additive-…`, `lem-vector-field-index-is-independent-…`,
  `lem-negation-scales-…`, `thm-poincare-hopf-for-closed-manifolds`,
  `cor-closed-odd-dimensional-…`, `def-euler-characteristic-…`,
  `prop-euler-characteristic-additivity-…`); the B page has the only B→A edge.

### Confirmed finding — the $n=1$ ($m=1$) $S^0$ degree convention

**Consuming planned items.** `def-isolated-zero-and-local-index-of-a-vector-field`
states $n\ge1$ and defines the index as the degree of
$S^{n-1}\to S^{n-1}$, $v\mapsto X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|$,
citing `[[def-degree-of-a-map-between-oriented-closed-manifolds]]`; at $n=1$
that map is $S^0\to S^0$. The same edge case is consumed by
`lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`,
`thm-index-of-a-nondegenerate-vector-field-zero`,
`lem-local-index-is-additive-under-a-transverse-perturbation`,
`lem-index-sum-of-an-outward-field-is-the-gauss-degree` (its $m=1$ case),
`thm-poincare-hopf-for-closed-manifolds` (the $n=1$ closed case and the
tube/Gauss step for a closed $1$-manifold),
`thm-poincare-hopf-with-outward-pointing-boundary` ($n=1$),
`cor-morse-gradient-zero-…` and `cor-morse-critical-point-sum-…` ($n=1$), and
the B-page counterexample `cex-an-interval-…`.

**Required prerequisite claim and hypotheses.** A degree (signed count) for maps
between oriented closed $0$-manifolds — equivalently the reduced degree on
$\widetilde H_0(S^0;\mathbb Z)\cong\mathbb Z$, with values $-1,0,+1$ — with
homotopy invariance and multiplicativity, so that the normalized field map on
the $0$-sphere has the index value $\operatorname{sign}\det(DX_p)$ demanded by
the determinant theorem.

**Evidence of absence.** `def-degree-of-a-map-between-oriented-closed-manifolds`
is stated only for nonempty **connected** closed oriented manifolds and says
explicitly that "disconnected manifolds … are outside this scalar definition";
`def-degree-of-a-self-map-of-an-oriented-sphere` is restricted to $n\ge1$;
`thm-degree-is-invariant-under-proper-smooth-homotopy` likewise assumes
connectedness. The published counterexample
`cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero` records
that the unreduced top-homology definition does not extend to $S^0$ (the
transposition acts by a non-scalar matrix on $H_0\cong\mathbb Z^2$) and that
only the reduced convention survives. No published item and no item in the
current 883-item run scaffold supplies the $0$-dimensional notion: a run-wide
search finds only the two adjacent but non-supplying items
`ex-framed-zero-manifolds-and-signed-points` (batch 9, a signed count of framed
points in $S^n$, $n\ge1$) and `rem-connectedness-is-needed-for-a-single-degree-invariant`
(batch 10, a remark about disconnected domains, not a $0$-manifold degree).
This is a **confirmed gap in cited-supplier coverage for the stated $n=1$
range**, not an omitted designed topic and not a proof-correctness verdict. The
rest of the pair ($n\ge2$) rests only on published/scaffolded items.

**Recommended owner action (scaffold addition).** Complete the pair's own
definition for $n=1$: add the $0$-dimensional convention (signed count on
$S^0$, equivalently the reduced degree of
`cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero` /
`def-reduced-homology-theory-and-augmentation`) as a clause of
`def-isolated-zero-and-local-index-of-a-vector-field` and mirror it at $m=1$ in
`lem-index-sum-of-an-outward-field-is-the-gauss-degree`; alternatively add a
small prerequisite item (e.g. "degree of a map of oriented closed
$0$-manifolds"), or restrict the $n=1$ statements to $n\ge2$ and treat the
$1$-dimensional family separately through the already-present one-manifold
classification. The first option can be realized inside the existing manifest
statements (a convention clause in the definition body plus the two extra
deps), so it need not change the pair's scope hash; the owner decides. Until
the convention is in place, Step 3b should not author the $n=1$ cases.

## 5. Decision and flagged observations

The planned definitions, results and examples adequately cover the intended
subject of DT-13: the local index with its intrinsicness, the determinant
formula and perturbation additivity, the zero-section/DT-12 bridge, both forms
of the Poincaré–Hopf theorem, the Hopf converse (resolved at build by
cancellation of zeros, the design's own sanctioned route), the Morse and
odd-dimensional corollaries, the tangent-Euler-number evaluation, and six
companion examples testing exactly the pair's load-bearing conventions. All
designed rows are present, all sources are verified at the load-bearing
locators with the design's Stanford locator replaced on verified grounds, and
every dependency resolves to a published item or an in-run scaffold item in an
earlier batch. Decision: **`sufficient`**, with the $S^0$ finding above carried
as a required authoring completion (owner option to add the prerequisite item
instead).

Flagged observations for the owner / Step 3b–3c (none is a scope omission):

1. **$S^0$/$n=1$ convention** — the confirmed finding above, with the
   recommended scaffold addition.
2. **Published depcheck debt (pre-existing).** A scoped `depcheck
   --items-file` run over the pair's load-bearing published deps reports five
   `published-unaudited` errors — `def-local-oriented-intersection-sign`,
   `def-oriented-intersection-number`,
   `lem-compact-transverse-complementary-intersections-are-finite`,
   `thm-oriented-intersection-number-is-homotopy-invariant`,
   `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`. Statements
   and proofs are unaffected; the fix is an audit/verification receipt through
   the owner's published-repair process. The sibling DT-14 scope review
   independently flags the same class, so this should be routed once, from the
   canonical ledger.
3. **Statement links not in `deps`/`justified_by`** (depcheck warn-level):
   `[[thm-cellular-homology-computes-singular-homology]]` in
   `def-euler-characteristic-of-a-compact-manifold` (used only through the
   additivity proposition), `[[def-self-intersection-number-of-an-oriented-submanifold]]`
   in `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`
   (should be declared), and `[[thm-poincare-hopf-with-outward-pointing-boundary]]`
   in `cex-an-interval-…` (a same-page mention). Step 3b should declare or
   de-link them.
4. **Self-referential link.** The strategy of
   `ex-source-sink-and-saddle-indices-on-a-surface` links
   `[[ex-source-sink-and-saddle-indices-on-a-surface]]` where the
   Guillemin–Pollack Figure 3-18 picture is meant; fix at authoring.
5. **Direct `requires` reading list.** The A page's requires array omits the
   batch-1 page `handle-decompositions-duality-and-rearrangement` (supplier of
   two consumed lemmas) and seven published pages named in batch-7 notes
   §2(d); all are inside the plan-spec requires closure (292 pages) and no
   order/consumer constraint is violated, so this is readability only
   (owner/Step 4 may widen the direct list).
6. **Notes byte-count nit.** Batch-7 notes §5 lists Milnor as 10,139,305 bytes
   versus the stamped and re-verified 1,654,205; the coverage file is correct.

No pair merger is warranted: the design, the sources and the consumers all
point at this pair as a single coherent DT-13 unit, and the only addition
required is the local $0$-dimensional convention (or its equivalent
restriction). The recommended realisation is an authoring completion inside
the existing manifest statements, so it does not change the approved scope;
if the owner instead prefers a new prerequisite item or a statement change,
that amendment is an enrichment of the scope and stays blocked until applied
and the owner records `proceed` for the resulting scope.
