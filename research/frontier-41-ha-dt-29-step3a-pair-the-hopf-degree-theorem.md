# Step 3a scope review — `the-hopf-degree-theorem` / `the-hopf-degree-theorem-examples`

- **Run:** frontier-41-ha-dt-29 (role alpha, dispatch `step3a-pair-the-hopf-degree-theorem-c98c549ef99587dd`)
- **Pair:** A `the-hopf-degree-theorem` (order 551) / B `the-hopf-degree-theorem-examples` (order 552), batch 10 (batch 10 contains exactly this pair; no sibling pairs to preserve)
- **Decision:** `sufficient` — the planned definitions, results and examples
  cover the designed subject at design strength; two prerequisite findings
  (F1 confirmed at statement level, F2 minor/uncertain) are recorded below
  with recommended owner action, per the Step-3a unmet-prerequisite rule.
- **Assessed scope, not proof correctness.** No scaffold or item file was edited.

## 1. Inputs read

- Manifests: `research/frontier-41-ha-dt-29-batch-10.pages.json` (both pages, all 25 items); current-plan page entries in `research/plan-spec.json` (orders 551/552).
- Coverage: `research/frontier-41-ha-dt-29-batch-10.coverage.json` (43 harvested rows), `research/frontier-41-ha-dt-29-batch-10-url-liveness.json`.
- Prose/design: `research/plan-differential-topology-track.md` §7 DT-18 L1010–1046 (with the hard-proof closure), §8 source row L1668, §12.4 `requires` row L2234, §12.6 disposition L2446; `research/frontier-41-ha-dt-29-batch-10.notes.md`; `research/frontier-41-ha-dt-29-planning-notes.md`.
- Owner decisions: `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding; DT clauses bind this pair generally — retain dimension/regularity restrictions, never treat a planned supplier as published, report blockers honestly).
- Dependency records: `research/frontier-41-ha-dt-29-batch-10.cross-batch-dependencies.json` (24 item rows + 1 page row, all `open`), the aggregated `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` page edge, `research/frontier-41-ha-dt-29-scope-ledger.json`.
- Sibling scaffold: `research/frontier-41-ha-dt-29-batch-9.pages.json` (DT-17, the in-flight supplier pair, 20 A + 5 B items).
- Published suppliers: statements/front matter of the de-Rham degree items (`def-degree-of-a-proper-smooth-map-by-compact-support-cohomology`, `thm-regular-value-formula-for-degree`, `def-local-orientation-sign-of-a-regular-preimage`, `thm-degree-is-invariant-under-proper-smooth-homotopy`, `prop-degree-is-multiplicative-under-composition`, `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism`), the orientation/topology items (`def-orientation-local-system-and-orientation-cover`, `prop-the-manifold-orientation-system-is-a-local-system`, `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations`, `thm-path-lifting-for-covering-maps`, `thm-relative-whitney-approximation-for-manifold-valued-maps`, `thm-connected-and-locally-path-connected-implies-path-connected`), the Thom/de Rham interface (`def-disk-bundle-sphere-bundle-and-thom-space`, `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product`), the projective items (`lem-real-projective-space-cellular-homology-and-pinch-map`, `ex-real-projective-space-is-orientable-exactly-in-odd-dimension`, `ex-real-projective-space-from-affine-charts`, `def-real-projective-bundle-and-tautological-line`) and the overlap candidates (`thm-based-sphere-maps-are-classified-by-geometric-degree`, `prop-every-integer-occurs-as-the-degree-of-a-sphere-map`, `prop-zero-dimensional-bordism-groups`, `ex-degree-of-the-circle-power-map`, `ex-degree-of-a-reflection-of-a-sphere`, `ex-degree-of-a-coordinate-reflection-on-a-sphere`).
- Authoritative sources re-read (cached full PDFs; scope-level statements, not proof auditing): Freed, *Bordism: Old and New*, Lecture 2, PDF pp. 22–25 = printed pp. 20–24 — Theorem 2.35, Theorem 2.37(i)–(ii) (closed connected $M$), (2.40)–(2.43), Lemmas 2.44–2.46 with (2.47)–(2.48), Exercises 2.49–2.50; Milnor, *Topology from the Differentiable Viewpoint*, Ch. 7–8, PDF pp. 60–61 = printed pp. 50–51 (Theorem of Hopf for connected oriented boundaryless $M$; nonorientable mod-2 theorem; the cohomotopy remark); Guillemin–Pollack, *Differential Topology*, Ch. 3 §6 (Hopf Degree Theorem, p. 146, Exercise 9) and Ch. 2 §4 mod-2 degree (printed pp. 80–81; hypotheses: $X$ compact, $Y$ connected, same dimension).

## 2. Design vs scaffold

All 14 designed A items are present unchanged in id, kind, order relative to
one another and strength; all 5 designed B items are present. Verification was
item-by-item against `plan-differential-topology-track.md` L1010–1046.

- Designed A items 1–14 all present (`def-framing-sign-of-a-zero-dimensional-regular-preimage` … `rem-closedness-is-needed-for-hopf-degree-classification`).
- Six local prerequisites are added on the same A page for mathematical closure, each traced to Freed's proof: `def-frame-bundle-of-a-smooth-manifold`, `lem-components-of-the-frame-bundle-of-a-connected-manifold`, `lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant`, `lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism`, `def-mod-two-degree-of-a-map-to-a-sphere`, `lem-mod-two-degree-is-well-defined-and-homotopy-invariant`. These supply exactly Freed's frame-bundle lemmas 2.44–2.46 / (2.47)–(2.48) and Exercise 2.49 and GP's mod-2 definition; they are within the page's intended role (proof of the theorem), not scope from another pair.
- Recorded design/plan resolutions (not silent changes): design order items 9–10 before 7–8; design item 2 tightened to a closed ambient $M$ with a chart ball $U$ so it is literally a DT-17 framed cobordism; design item 5 (`thm-unoriented-zero-dimensional-bordism-is-mod-two`) stated as the framed ambient classification needed by the PT route. All are recorded in the batch notes; none weakens or drops a designed claim.
- The design's hard-proof closure is respected: the converse route is the zero-dimensional framed-cobordism classification (items 2–5) plus the inverse-PT lemmas (9–10) and the de Rham comparison (6); the already-owned homotopy invariance is used only in the easy direction.
- B page: 5/5 designed items at design strength, each testing a specific A-page statement (corollary, sphere equivalence, realization, nonorientable classification, connectedness counterexample).

## 3. Source coverage

- 43 harvested rows: A 28 (12 included, 3 inline, 6 deferred, 7 out-of-scope), B 15 (11 included, 4 out-of-scope). Every item additionally carries per-item `sources` with locators on Freed/Milnor/GP.
- Deferrals resolve to other current or planned pairs: framing/framed-cobordism/PT headings → `pontryagin-thom-and-framed-cobordism` (DT-17, in flight, batch 9); GP vector-field application → `vector-field-index-euler-characteristic-and-poincare-hopf` (DT-13, batch 7).
- The GP Extension Theorem is deferred as an explicit `owner-decision` (no consumer in this run); the remaining declines (GP alternative isotopy/induction/winding routes, positive-codimension computations, cohomotopy, polynomial examples) are out-of-scope with distinct reasons, and each matches a topic actually owned elsewhere or not commissioned here.
- Re-read of the three treatments confirms the design's reading: Freed Theorem 2.37 is stated for closed connected $M$ in both cases; Milnor's Theorem of Hopf is the connected oriented boundaryless case with the nonorientable mod-2 companion; GP's Hopf Degree Theorem (Exercise 9) and Ch. 2 §4 mod-2 degree match the scaffold's definitions and hypotheses. No source-level scope gap was found in the designed coverage.

## 4. Intended role and page-level requirements

- Role: the general homotopy classification of maps $M\to S^m$ by (mod-two) degree, built on the fixed-codimension Pontryagin–Thom pair; the B page is a leaf requiring only its A page.
- The manifest `requires` array equals plan §12.4 exactly (DT-15, DT-17, `the-de-rham-theorem-and-degree`, and the two AT reading anchors). DT-16 is reached transitively through DT-17; `spectra-and-stable-homotopy-groups` is omitted per §12.4 although the design text names it "only for standard homotopy notation" — no scaffold item uses stable-homotopy notation, so the omission is harmless and consistent with the recorded plan controls.
- No other current-frontier page or B page consumes `the-hopf-degree-theorem` or its items; the pair is a pure consumer within this run. The published based sphere classification and the published sphere realizability proposition are the pre-existing neighbours its claims generalise (see overlaps below).

## 5. Dependency and prerequisite audit

- Direct resolution over the manifests: every `deps`/`justified_by` id of both pages resolves to a published `items/*.md` item or to an item of the current scaffold (batch 9/10); zero unknown or plan-only targets. Every `[[…]]` cited in statements/strategies/sources also resolves.
- In-run edges: 25 cross-batch rows (1 page + 24 item) all to DT-17 A-page items, all status `open` pending DT-17's Step-3 review; the consumed DT-17 statements were read and their hypotheses match (closed ambient $X$, framings as actual trivialisations, $k\ge0$ conventions, no orientation of $X$ used, based/free agreement lemma present for $n,k\ge1$). Any later edit of a DT-17 statement invalidates the batch-10 records and requires recompute/re-record.
- Published suppliers were checked at statement level for existence and hypothesis fit: the de Rham degree items require proper maps of connected oriented boundaryless manifolds (closed $M$ qualifies); the orientation-cover and Whitney-approximation items supply the frame-bundle component argument; the Thom-space items supply the trivial-bundle quotient identification (topological); the projective orientability/chart items give $\mathbb{RP}^n$ smooth, closed and nonorientable exactly for even $n$. No consumed published item was found defective.
- Published-content overlaps for owner reconciliation (true claims, not defects): (a) design item 11 vs published `thm-based-sphere-maps-are-classified-by-geometric-degree` (based vs free); (b) B items 1–2 vs the published circle/reflection degree computations; (c) designed framed statements 4–5 vs published `prop-zero-dimensional-bordism-groups` (abstract bordism vs ambient framed cobordism); (d) **not previously flagged**: the realization lemma `lem-every-integer-degree-is-realized-by-a-map-to-the-sphere` generalises the published `prop-every-integer-occurs-as-the-degree-of-a-sphere-map` (AT page `homology-axioms-degree-and-classical-applications`) from $M=S^m$ to arbitrary closed connected oriented $M$; it could cite that item for the sphere case. All four are generalisations or computational instances, so the new claims remain in scope.

## 6. Unmet prerequisites (findings for the owner)

**F1 (confirmed at statement level; needs owner attention).** Consuming item:
`ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even`
(B page). Required prerequisite claim: for every $n\ge1$, for the standard CW
structure of $\mathbb{RP}^n$ with one cell in each dimension, the quotient map
$\mathbb{RP}^n\to\mathbb{RP}^n/\mathbb{RP}^{n-1}$ is a homeomorphism onto
$S^n=D^n/\partial D^n$; and for the collapse map $q$ this exhibits a regular
value with exactly one preimage (equivalently, the smooth pinch model
$c(x)=(2x\sqrt{1-|x|^2},\,2|x|^2-1)$ after the standard identification).
Evidence of absence: the cited published
`items/lem-real-projective-space-cellular-homology-and-pinch-map.md` states the
CW structure for general $m$ but asserts the pinch/quotient statement **only**
for $\mathbb{RP}^2$ ("The quotient $q:\mathbb{RP}^2\to\mathbb{RP}^2/\mathbb{RP}^1\cong S^2$…",
statement paragraph 2); the general identification appears only inside proofs
(that item's step 2.1; `thm-relative-homology-of-consecutive-cw-skeleta`
step 1.2; `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients`
step 1.2), never as a stated claim, and the B item's other deps
(`ex-real-projective-space-is-orientable-exactly-in-odd-dimension`,
`ex-real-projective-space-from-affine-charts`,
`def-real-projective-bundle-and-tautological-line`,
`def-mod-two-degree-of-a-map-to-a-sphere`,
`thm-hopf-mod-two-degree-classification-for-nonorientable-domains`) do not
supply it. A library-wide search for the general quotient statement found no
item. Uncertainty: whether the owner is willing to let the example's proof
discharge the two standard facts inline; they are elementary but currently
uncited. Recommended owner action: either (i) authorise a small enrichment
item on the B page (or A page) stating the general top-cell quotient and the
smooth one-point pinch model with the explicit formula, or (ii) record that
the Step-3b author must prove both facts inline in this example and name them
in its strategy. Whichever is chosen, the pair's dependency records must be
updated before item authoring.

**F2 (minor / uncertain; probably dischargeable inline).** Consuming items:
`lem-every-integer-degree-is-realized-by-a-map-to-the-sphere` and the
realization clause of
`thm-hopf-mod-two-degree-classification-for-nonorientable-domains` (A page),
and `ex-collapse-of-k-oriented-disks-realizes-degree-k` (B page); also the
regular-fibre computation in F1. Required prerequisite: a smooth collapse
(pinch) map $D^m\to S^m$, constant on $\partial D^m$, with the collapsed
centre a regular value having exactly one preimage. Evidence: no stated item
supplies it — `def-disk-bundle-sphere-bundle-and-thom-space` gives the
topological quotient and a smooth structure only on the nonbasepoint stratum
("No smooth manifold structure at the Thom basepoint is presumed"), and
`prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product` is
topological. The scaffold strategies assert the smooth submersion/submersion
at the centre without a supplier. Because an explicit formula settles the
model in one line inside the items' proofs, this is flagged rather than
treated as a scope omission; the owner may merge it with the F1 remedy.

## 7. Recorded uncertainty and outstanding findings

- DT-17 (batch 9) is still in flight; all 25 cross-batch rows are `open` and the batch-10 readiness records are current only against the DT-17 snapshot. Ordinary Step-1 reconciliation must recompute them if a DT-17 statement changes.
- Plan §8's GP source-register row omits Ch. 3 §6 (pp. 141–147); the design and this review cite §6 directly. Recorded as stale for reconciliation, not a blocker.
- The GP Extension Theorem (relative/boundary classification) remains an `owner-decision` deferral; the closedness remark explicitly disclaims it, so its absence does not weaken the designed scope.
- Overlaps (a)–(d) in §5 need owner reconciliation only; none is an omitted topic.
- No claim of proof correctness is made here; proofs, dependency-hypothesis closure at the proof level, and the DT-17 statements themselves are Step-3b/Step-5 subject matter.

## 8. Decision

`sufficient` for `the-hopf-degree-theorem` (pair scope fixed by the manifests
as of this review): the 14 designed results, the six closure prerequisites,
the 5 examples and the recorded source dispositions adequately cover the
designed subject, and the intended role in the library is intact. F1/F2 are
recorded for owner action under the Step-3a unmet-prerequisite rule; no item
approval, owner record or scaffold edit is made here.
