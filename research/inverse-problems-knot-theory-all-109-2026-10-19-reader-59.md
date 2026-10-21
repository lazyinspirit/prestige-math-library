# Step 3a reader report — batch 59

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `59`

## Opened inventory

Pages:

- `library/knot-theory/seifert-surfaces-and-knot-genus.md`
- `library/knot-theory/seifert-surfaces-and-knot-genus-examples.md`

Assigned items, read independently of their authors:

- `alg-seifert-surface-from-diagram`
- `def-oriented-seifert-surface`
- `lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms`
- `thm-oriented-knot-framing-classes-form-z-torsor`
- `lem-seifert-bands-embedded-orientable-boundary-correct`
- `thm-seifert-surface-from-diagram-procedure-properties`
- `thm-every-oriented-knot-bounds-a-seifert-surface`
- `def-oriented-seifert-surface-and-knot-genus`
- `thm-seifert-algorithm-boundary-euler-and-genus`
- `thm-seifert-zero-framing-and-framing-integer`
- `ex-knot-kt-04-worked-cases`
- `cex-knot-kt-04-boundary-case`

Dependencies opened for the constructions, genus calculations, braid example,
and framing argument:

- `def-countable-choice`; `def-countable-choice-principle-for-foliation-pair`;
  `def-axiom-of-choice`; `thm-choice-implies-dependent-implies-countable-choice`
- `def-oriented-link-in-s-three-and-ambient-isotopy`;
  `def-regular-oriented-link-diagram`;
  `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`;
  `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`;
  `thm-higher-dimensional-spheres-are-simply-connected`;
  `lem-every-oriented-link-admits-a-regular-projection`
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`;
  `thm-polygonal-jordan-curve`; `thm-simple-polygon-admits-a-triangulation`;
  `thm-euler-formula-for-connected-plane-graphs`;
  `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`;
  `lem-isotopy-extension-for-a-compact-source-with-boundary`;
  `thm-fundamental-group-of-the-circle`;
  `thm-well-ordering-principle`;
  `def-euler-characteristic-of-a-finite-cw-complex`
- Current batch-58 suppliers: `def-oriented-crossing-sign-writhe-and-blackboard-framing`;
  `lem-linking-number-even-sum-and-reidemeister-invariance`;
  `alg-oriented-linking-number-from-diagram`;
  `thm-oriented-linking-number-scan-terminates-and-is-correct`;
  `thm-linking-number-equals-signed-intersection`;
  `lem-framed-knot-push-off-self-linking-well-defined`;
  `def-framed-knot-self-linking-and-seifert-framing`
- `def-elementary-geometric-half-twist`; `thm-geometric-braids-form-a-group`;
  `def-closure-of-a-geometric-braid`
- `thm-collar-neighborhood-theorem`; `def-smooth-collar-of-a-manifold-boundary`;
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`;
  `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy`;
  `def-tubular-neighbourhood-of-an-embedded-submanifold`;
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`;
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`;
  `def-smooth-bundle-metric`;
  `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric`;
  `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`;
  `def-the-standard-smooth-step-function`
- `def-oriented-intersection-number`; `def-local-oriented-intersection-sign`;
  `thm-oriented-intersection-number-is-homotopy-invariant`;
  `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`;
  `thm-transverse-preimage-for-manifolds-with-boundary`;
  `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`;
  `thm-relative-whitney-approximation-for-manifold-valued-maps`;
  `def-one-variable-alexander-module-of-an-oriented-link`;
  `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`;
  `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`;
  `def-mod-two-intersection-number`;
  `thm-mod-two-intersection-number-is-homotopy-invariant`;
  `def-oriented-reidemeister-moves`;
  `thm-oriented-reidemeister-equivalence-theorem`

The batch-59 proof-contract file was opened for the worked example. A rendered
batch-59 evidence-bundle filename was not present in the run-state file listing;
the current manifest and live item/page files were used.

## Edit and evidence

Repaired the TikZ trefoil schematic in `items/ex-knot-kt-04-worked-cases.md`.
Before the repair, its successive overpassing branches ran left-to-right,
right-to-left, left-to-right. Under the cited positive-half-twist convention,
the label starting at the left endpoint moves below the midpoint to the right,
while the label starting at the right endpoint moves above it to the left. Thus
the left-to-right branch is under and the right-to-left branch is over at each
positive `\sigma_1` crossing. The old diagram did not depict the stated closure
of `\sigma_1^3`. The repaired drawing puts the white underpass gaps on the
left-to-right branches at all three crossings, puts the unbroken right-to-left
branches over them, and keeps the braid closure and orientation consistent.

The evidence is the explicit positive path and over/under convention in
`def-elementary-geometric-half-twist` (the positive path moves label `i` below
the midpoint and label `i+1` above), together with the diagram's displayed
coordinates and the item's statement that the unbroken branch is over. The raw
item SHA-256 changed from
`839adadf656ee9806746c89f1d7d81a4bc9d00f2f02c589e33b3e35c5b0672f8` to
`c7b9eb6ff0683f0d10996d10b33c3be8395a33f244b45e8efbb90ac98766a31e`.

The example's proof steps and cited facts did not change. Reflow returned
`unchanged`; its existing F7 contract already quotes the positive half-twist
definition used to check the diagram. The item has no `verification.judge`
record to remove.

Required checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-knot-kt-04-worked-cases.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-knot-kt-04-worked-cases.md` — PASS; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-knot-kt-04-worked-cases.md` — 1 item, 4 steps, 0 defects.

The only assigned TikZ diagram is this repaired trefoil schematic. The smoothing
counts, genus computations, braid endpoint permutations, kinked-unknot
counterexample, Seifert-surface construction, and zero-framing argument were
checked against their stated hypotheses and the opened suppliers. The relevant
argument in Elhamdadi, Hajij, and Istvan, *Framed Knots*, arXiv:1910.10257v6,
was read at §3, Definition 3.1 and the Reidemeister checks (pp. 3–4), §3.1,
Theorem 3.5 and proof (pp. 5–7), and §5, Theorem 5.2 (PDF pp. 14–15). It
supports the half-sum convention, the homological/intersection descriptions of
linking number, and zero self-linking of the Seifert framing.

## Unedited findings

No confirmed uneditable defect affecting the assigned claims was found. Repaired
diagram defects belong in this report and the item diff, not the findings JSON.

## Page verdicts

- `seifert-surfaces-and-knot-genus` — pass. The A-page frontmatter has the
  manifest's ten items and prerequisite pages; the body is empty and
  `page_layout: compact-v1` is preserved.
- `seifert-surfaces-and-knot-genus-examples` — pass. The B-page frontmatter has
  the manifest's two examples and its A-page prerequisite; the body is empty
  and `page_layout: compact-v1` is preserved.

## Blockers and coverage limits

There is no batch-59 blocker. The live autopilot status checked during review
reported a separate `3a-split` blocker, `split-30 failed 3x` (status updated
2026-10-21T08:24:57Z); it is outside this assignment.

The browser could not fetch the cited Calegari knot-theory PDF because its
12,780,609-byte content length exceeded the fetch limit. I did not claim to read
that source. The relevant linking and framing argument was checked against the
accessible Elhamdadi–Hajij–Istvan paper and the current local supplier texts.
The opened local dependency proofs and interfaces were checked where needed for
these claims; this was not a recursive re-audit of every transitive published
foundational proof.
