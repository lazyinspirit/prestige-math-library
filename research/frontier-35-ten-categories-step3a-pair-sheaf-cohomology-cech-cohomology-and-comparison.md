# Step 3a scope review — pair `sheaf-cohomology-cech-cohomology-and-comparison`

Run `frontier-35-ten-categories`, role alpha (Step 3a scope), batch 7.
A page `sheaf-cohomology-cech-cohomology-and-comparison` (366.081),
B page `sheaf-cohomology-cech-cohomology-and-comparison-examples` (366.082).

**Decision: `sufficient`.** Scope only; no claim about proof correctness, no item
approval, no owner record.

## Design, plan and owner decisions read

- Design prose: `research/plan-algebraic-geometry-track.md` AV-21, lines
  1391–1460 (A inventory 35 items, B inventory 11 items) plus the seam paragraph
  closing that section.
- Binding amendments: same file, "Binding Scheme Theory audit (2026-09-08)",
  lines 3554–3558: AV-21 **deletes** `def-fine-sheaf`,
  `thm-fine-sheaves-acyclic-paracompact`,
  `thm-abstract-de-rham-resolution-principle`,
  `thm-cech-de-rham-comparison-interface`, and
  `ex-good-cover-de-rham-interface`; Differential Geometry owns de Rham theory,
  Scheme Theory keeps derived sheaf cohomology, Godement/flasque resolutions,
  Čech comparison and the Leray acyclic-cover theorem.
- Owner direction `research/frontier-35-ten-categories-owner-authoring-direction.md`:
  this pair is active; only the batch-8 Serre/flag pair and one Easton item are
  deferred.
- Step-1 records: `research/frontier-35-ten-categories-batch-7.notes.md`,
  `research/frontier-35-ten-categories-alpha-step1-drift.md` (verdict: no-drift),
  `research/frontier-35-ten-categories-batch-7.pages.json`,
  `...-batch-7.coverage.json`,
  `...-batch-7.cross-batch-dependencies.json` (empty: no in-run supplier).
- Canonical rows: `research/plan-spec.json` orders 366.081/366.082 (empty item
  arrays, item inventories land at authoring).

## Inventory reconciliation (design → manifest)

Manifest holds 46 A items and 11 B items. Diff against the AV-21 design tables:

- Retained: 31 of 35 A design rows and 10 of 11 B design rows.
- Removed by the binding audit: the four A rows and one B row listed above.
  Nothing else from the design is missing.
- A additions (15 local proof-support items): `lem-abelian-sheaves-form-a-grothendieck-category`,
  `thm-abelian-sheaves-have-enough-injectives`, `lem-flasque-kernel-lifts-quotient-sections`,
  `lem-increasing-cech-complex-extends-to-alternating-tuples`,
  `lem-acyclic-rows-and-columns-of-cech-double-complex`,
  `lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity`,
  `lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces`,
  `lem-finite-filtration-of-generated-subsheaves-of-the-constant-integer-sheaf`,
  `lem-extension-by-zero-vanishing-reduces-to-all-sheaves`,
  `lem-closed-immersion-preserves-sheaf-cohomology`,
  `lem-constant-sheaf-on-irreducible-space-is-flasque`,
  `lem-abelian-sheaves-admit-bounded-above-flat-resolutions`,
  `lem-derived-tensor-product-of-abelian-sheaves`,
  `lem-sheaf-cohomology-classes-as-derived-morphisms`,
  `lem-koszul-coherence-for-derived-sheaf-tensor`.
- B addition (1): `def-projective-line-two-affine-cover-and-twisting-sheaf`, the
  local two-chart $\mathbf P^1_k$ / $\mathcal O(n)$ supplier that lets the
  Mayer–Vietoris preview run without consuming the unbuilt Proj page AV-19.

The deletions are covered elsewhere rather than lost: the general
acyclic-resolution principle is the already published
`thm-acyclic-resolution-theorem-for-right-derived-functors` (cited as a dep by
`thm-godement-resolution-flasque` and
`lem-acyclic-rows-and-columns-of-cech-double-complex`), and fine sheaves /
de Rham comparison are DG-owned by the binding audit.

## Subject coverage in the manifest

The pair, as planned, supplies everything the intended subject names:

- derived $\Gamma$-cohomology: `def-global-sections-functor-sheaves`,
  Grothendieck-category/enough-injectives lemmas,
  `def-sheaf-cohomology-derived-global-sections`,
  `thm-zero-sheaf-cohomology-global-sections`,
  `thm-long-exact-sequence-sheaf-cohomology`,
  `lem-cohomology-functoriality-sheaf-and-space`;
- acyclicity and resolutions: `def-acyclic-sheaf-global-sections`,
  `def-flasque-sheaf`, `lem-injective-sheaves-flasque`,
  `thm-flasque-sheaves-acyclic`, `def-godement-resolution`,
  `thm-godement-resolution-flasque`;
- Čech: `def-cech-cochain-complex-open-cover` (ordered, with the $(-1)^j$
  convention), `lem-cech-differential-squares-zero`,
  `def-cech-cohomology-open-cover`, `lem-cech-h0-global-sections`,
  `lem-increasing-cech-complex-extends-to-alternating-tuples`,
  `def-refinement-open-cover`,
  `thm-refinement-map-independent-on-cohomology`,
  `def-global-cech-cohomology-directed-limit`;
- comparison: `def-acyclic-cover-for-sheaf`,
  `lem-acyclic-rows-and-columns-of-cech-double-complex`,
  `thm-cech-to-sheaf-cohomology-comparison`,
  `thm-leray-acyclic-cover-theorem`,
  `rem-cech-cohomology-cover-dependent-without-acyclicity`;
- structural computations: `lem-two-open-cover-cech-complex`,
  `thm-mayer-vietoris-sheaf-cohomology`, `thm-cohomology-disjoint-union`,
  `thm-cohomology-one-point-space`,
  `def-cohomological-dimension-space`,
  `thm-noetherian-topological-space-dimension-vanishing` with its Stacks
  support items: 20.11.9 (cofinal-basis Čech vanishing), 20.19.1 (filtered
  colimits), the §20.20 block of lemmas 20.20.1–20.20.4 (tags 02UV, 02UW,
  0A38, 02UX, from "Vanishing on Noetherian topological spaces") that the four
  Noetherian support items are drawn from, and 20.20.7 (Grothendieck
  vanishing);
- products: `def-cup-product-sheaf-cohomology`,
  `thm-cup-product-graded-associative-natural` (associativity, unit,
  naturality, and graded commutativity with sign $(-1)^{pq}$ for a commutative
  coefficient ring), on locally constructed bounded-above flat/derived-tensor
  machinery;
- examples (B): two-arc $\check H^1$ of $\mathbf S^1$, the one-open bad cover,
  the global-sections obstruction class, skyscraper acyclicity, all-functions
  flasqueness, non-flasque constant sheaf, the $\mathbf P^1$ Mayer–Vietoris
  preview, the three-open sign check, the empty space/empty cover, and
  non-canonicity of refinement maps on cochains.

I checked the declared Stacks ranges against the live chapter contents
(tags 01DW chapter listing, tag 02FN section 20.4): §§20.2, 20.8.1–20.8.2,
20.9, 20.10, 20.11.1–20.11.6 and 20.11.9, 20.12.1–20.12.3, 20.14, 20.15,
20.19.1, 20.20.1–20.20.4 and 20.20.7, 20.23, 20.26 (parts), 20.30 and 20.31
all exist as cited, and Stacks Lemma 20.11.6 (tag 01ET) is exactly the
acyclic-cover theorem the manifest states; Lemma 20.11.9 (tag 01EW) is the
cofinal-basis criterion AV-22 needs for affine acyclicity. Note the scaffold
and coverage sometimes write chapter-relative labels ("Lemma 11.9", "Lemma
19.1", "Lemma 20.1–20.4", "26.3–26.14", "28.7", "31.1–31.3") for the same book
results 20.11.9, 20.19.1, 20.20.1–20.20.4, 20.26.3–20.26.14, 20.28.7 and
20.31.1–20.31.3; both conventions resolve to real results in the live chapter.

## Coverage file

`research/frontier-35-ten-categories-batch-7.coverage.json` carries one page
entry with 4 sources: Stacks *Cohomology of Sheaves* (29 rows),
Stacks *Injectives* §19.4 Lemma 01DF (1), Gao–Zhang *Lectures on Algebraic
Geometry* Ch. 5–6 (13), Stacks *Derived Categories* §15 Lemma 05T7 (1).
Measured on disk: 44 recorded rows, 40 with item destinations (32 distinct
items) and 4 without — two `out-of-scope` (Stacks 20.12.4 flasque Čech
acyclicity, Gao–Zhang Example 6.1.5 holomorphic differentials on $\mathbf P^1$)
and two `deferred` (Gao–Zhang Theorem 6.1.6 and Corollary 6.2.11,
quasi-coherent affine/separated cohomology) all with stated reasons pointing at
AV-22 or at the complex-analytic track. Those dispositions are correct for this
pair's subject; nothing needed by this pair is left without a destination.

All page prerequisites resolve to published pages
(`presheaves-sheaves-stalks-and-sheafification`,
`sheaf-operations-exactness-ringed-spaces-and-module-pullback`,
`projective-and-injective-resolutions`, `derived-functors`,
`dimension-constructible-images-and-dimensions-of-fibres`, `derived-categories`,
and for B additionally `schemes-subschemes-and-morphisms-locally-of-finite-type`),
and every non-local item dependency exists as a published item
(0 unresolved, checked item-by-item on disk). No in-run supplier is required.

## Role in the library and consumer fit

This is a planned-only supplier page. Canonical consumers in `plan-spec.json`:
366.082 (its B), 366.083 quasi-coherent cohomology, 366.085/366.087/366.089
(curves, Riemann–Roch, Serre duality), 510.0161 (deferred Serre/flag pair), and
complex-analysis CA-RS-2 `divisors-riemann-roch-and-duality` (853);
`research/plan-complex-analysis-track.md` L5376 names the two intended CA
consumers. The interfaces those consumers actually need — derived $H^i$,
flasque/Godement resolutions, the Čech-to-derived map, the Leray acyclic-cover
theorem, and the cofinal-basis vanishing criterion that AV-22 will apply to
affine covers (Stacks Lemma 20.11.9) — are all present. The batch-8
cross-dependency record (`...-batch-8.cross-batch-dependencies.json`) confirms
the deferred queue pair consumes `def-cech-cohomology-open-cover`,
`def-sheaf-cohomology-derived-global-sections` and
`thm-leray-acyclic-cover-theorem`; that pair is deferred and has no live effect.

## Boundaries recorded, not gaps

- Fine sheaves, de Rham complexes, the abstract de Rham resolution principle and
  the Čech–de Rham interface: reassigned to Differential Geometry by the binding
  audit. Step-1 notes confirm this is the intended exclusion.
- Affine quasi-coherent acyclicity, the separated-scheme cohomology theorem,
  higher direct images, base change and the Leray spectral sequence: AV-22 and
  the homological-algebra/spectral-sequence pages.
- Spectral-sequence algebra: `rem-spectral-sequence-belongs-homological-algebra`
  records the Čech-to-derived spectral sequence as cited, not re-proved; the
  page's own comparison proof uses a finite-diagonal double-complex argument.
- First-cohomology classifications (Stacks 20.4 torsors, 20.5 extensions,
  20.6 invertible sheaves), locality of cohomology (20.7), relative
  Mayer–Vietoris (20.8.3) and Čech hypercohomology (20.25) lie inside or beside
  the declared Stacks range but are outside this pair's designed subject and are
  not needed by any declared consumer (Ext/Picard/torsor classification lives on
  the Ext, Picard and AT pages). I read the full statement of 20.4 (torsors and
  $H^1$) and the chapter TOC entries for the rest; I did not read 20.5–20.7,
  20.8.3 or 20.25 in full, so my disposition of that block rests on their
  titles and on the fact that no declared consumer references them. Nothing
  here looks like an omission from AV-21's intended subject.

## Uncertainty and non-blocking observations

- The design's source list also names Vakil Ch. 20 §§20.1–20.8 and the MIT
  18.726 packets "Sheaf cohomology", "Spectral sequences and Čech cohomology",
  "Čech cohomology and derived functors"; the coverage file records no rows for
  them (recorded fetches are Stacks + Gao–Zhang). In my judgement the recorded
  Stacks/Gao–Zhang rows cover the same results needed here, and the
  spectral-sequence half is deliberately external, but I did not itemise Vakil
  Ch. 20 or the MIT packets myself, so I cannot certify source-for-source
  equivalence of those two. This is a coverage-documentation divergence, not an
  identified missing result; it does not change the verdict.
- `def-projective-line-two-affine-cover-and-twisting-sheaf` mints $\mathbf P^1_k$
  and $\mathcal O(n)$ locally with the frame convention $e_\infty=t^n e_0$. The
  later AV-19 Proj page must agree with that convention; the item's own strategy
  asserts agreement with the standard Proj twist. Convention alignment is an
  authoring obligation, not a scope question.
- The deferred batch-8 cross-dependency row says the pair "does not supply …
  Leray", although `thm-leray-acyclic-cover-theorem` is item 26 (I read it as
  shorthand for the Leray spectral sequence, which AV-22/HA own). The pair is
  deferred, so nothing is blocked; the owner may want the wording refreshed.

## Next action

Step 3b may audit and author this pair against the current scope. Recorded as
`sufficient` for
`sheaf-cohomology-cech-cohomology-and-comparison` via
`tools/step3-decisions.mjs record-scope`; the receipt binds the current scope
hash, so any later change to page titles or to item ids/kinds/titles/statements
reopens this decision.
