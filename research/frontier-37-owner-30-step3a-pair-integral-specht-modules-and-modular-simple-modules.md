# Step 3a scope review — integral-specht-modules-and-modular-simple-modules

- Run: `frontier-37-owner-30`, batch 23, role alpha, label
  `step3a-pair-integral-specht-modules-and-modular-simple-modules-a890a6b28e3a8c1b`.
- Pair: A `integral-specht-modules-and-modular-simple-modules` (order 809, 14 items) /
  B `integral-specht-modules-and-modular-simple-modules-examples` (order 811, 4 items).
- Decision recorded: **sufficient** (scope only; this is not proof approval).
- Command: `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30
  --page integral-specht-modules-and-modular-simple-modules --decision sufficient
  --reason "<this report>"`.

## Evidence read

`research/frontier-37-owner-30-batch-23.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; `research/plan-spec.json` entries for both pages;
`research/frontier-37-owner-30-scope-ledger.json`; `research/frontier-37-owner-30-drift-evidence.json`;
the SYMR-6 design section `research/symmetric-group-planning/proposed-inventory.md`
lines 165–190 and the track plan `research/plan-symmetric-group-representations-track.md`
(lines 37, 60–70, 120–135); the run's `state.json`/`events.jsonl` 3a-scope entries;
no `*-owner-authoring-direction.md` or owner scope record exists for this run or pair,
so no external scope modification is pending.

## Design-vs-manifest scope parity

The design's 11 A items and 4 B items are all present, with identical IDs:

| Design (SYMR-6) | Manifest |
|---|---|
| `def-integral-specht-lattice-and-base-change` | present |
| `def-modular-specht-form-and-radical-quotient` | present |
| `thm-james-submodule-theorem-over-an-arbitrary-field` | present |
| `def-p-regular-and-p-restricted-partitions` | present |
| `lem-specht-gram-gcd-detects-p-regularity` | present |
| `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions` | present |
| `lem-nonzero-maps-between-specht-quotients-force-dominance` | present |
| `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads` | present |
| `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular` | present |
| `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality` | present |
| `rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity` | present |
| B: 2 examples + 2 counterexamples | all 4 present |

Three A items are additions beyond the design table, each a required joint rather than
new subject matter: `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`
(the published RG-9 form is a positive Hermitian form over ℂ),
`lem-field-antisymmetrizer-image-and-dominance` (the published
`lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional` and
`lem-column-antisymmetrizer-detects-dominance` are stated over ℂ, so characteristic-two
and general-field cases need the integral 0/±1 re-run), and
`lem-conjugate-specht-sign-duality-over-fields` (the design's prop needs arbitrary-field
duality; the published RG-9 duality items are characteristic-zero). The three items
stay inside the subject named by the page title and none displaces a design item.
The B page keeps its design role as a dependency leaf (`requires` = the A page only).

## Intended subject and library role

Plan description: "Specht lattices, radicals and simple classification in characteristic p".
The 14 A items cover: integral Specht lattice and base change, integral tabloid form/Gram
matrix, modular form radical and `D^λ`, field-general James submodule theorem, p-regular /
p-restricted conventions, Gram-gcd criterion, nonvanishing of `D^λ`, dominance of nonzero
maps, classification of modular simples, unitriangular decomposition matrix, conjugate/sign
duality, p-restricted label translation, and the open-decomposition-numbers boundary remark.
That is a complete arc for the intended subject; deferred material (Nakayama blocks to
`cores-quotients-and-blocks-of-symmetric-groups`, modular branching to
`modular-branching-and-the-good-node-crystal`, Hecke cellular theory to
`type-a-hecke-specht-modules-and-cellular-bases`) belongs to other planned pages, and the
coverage records those dispositions explicitly. The A page requires three published pages
(`specht-modules-and-the-irreducibles-of-the-symmetric-group`,
`modular-representations-and-projective-covers`,
`brauer-characters-and-decomposition-matrices`); all three exist in `library/`.
The pair supplies later SYMR consumers: the p-restricted/conjugate-sign proposition is the
declared acyclic seam used by SYMR-7/9/10 items (proposed-inventory lines 213, 217, 280,
282, 287–288, 309) and by no other page in this run (no run manifest outside batch 23
references any of the 18 item IDs).

One cross-pair observation, non-blocking and left to the owner: the sibling run pair in
batch 14 (`the-branching-rule-and-the-young-graph`) scaffolds
`lem-integral-specht-garnir-straightening-and-field-basis`, which states the integral
standard-polytabloid basis and integral Garnir relation — the same joint that batch 23's
`def-integral-specht-lattice-and-base-change` re-runs internally. Batch 23 declares no
run-local dependency and builds from the published (ℂ-stated) RG-9 items, so this pair's
scope is self-contained and unaffected; if the owner prefers de-duplication, the lattice
item could consume the batch-14 lemma instead. That would be an owner/plan choice, not a
scope omission on this pair, and no item approvals are implied here.

## Source coverage (independently re-checked)

Four full texts, all re-downloaded and byte-identical to the recorded stamps:

| Source | sha256_16 | bytes | pages | Locators read |
|---|---|---|---|---|
| James, *Representation Theory of the Symmetric Groups* (SLN 682) | `e339ca5fb1ff9d78` | 1963603 | 161 | §8.14–8.15, §10.1–10.6, §11.1–11.7, §12.1–12.4, §24 opening |
| Law/Tomczak, *Rep. Theory of Symmetric Groups* | `eb7051ab74e7753b` | 623208 | 76 | Lemma 2.3, Prop. 2.4, Thms 2.5/2.7, Cor. 2.6, Prop. 2.16, §2.3 (Garnir, Prop. 2.18, Thm 2.21) |
| Craven, *Groups, Geometries and Rep. Theory* | `b2b190e9a1928b17` | 369993 | 42 | §2.3: Props 2.9–2.10, Cors 2.11/2.14, Thms 2.12–2.13 |
| Kleshchev, *Rep. Theory of Symmetric Groups and Related Hecke Algebras* | `8685199608967fa7` | 746493 | 66 | §5.2–5.3 incl. Thms 5.2–5.4 and Remark 5.5 |

The scaffold's claimed locators match the printed sections in every case (James §11.1
"non-zero iff p-regular", §11.5 classification/self-duality/absolute irreducibility,
§11.7 `(2,2)` Gram rank example, §12.3–12.4 triangular matrix and `S_3` matrices, §10.4–10.6
gcd bounds and reversed-row coefficient; Kleshchev Remark 5.5 `D^µ ≅ D(µ^t) ⊗ sgn` via
James Theorem 8.15; Craven Cor. 2.14 as the simple-classification statement, with Thm 2.12
correctly identified as the Nakayama block assertion, not used here). The design's original
mis-citation of Craven Thm 2.12 was already corrected in the manifest/coverage and I
confirm the corrected assignment. The step-1 correction of the fourth B counterexample
(`(2,1)` in characteristic 3 for reducibility, `(2,2)` in characteristic 2 for a nonzero
Specht with vanishing form quotient) is present and consistent with James Example 11.7 and
Example 12.4; I verified `[[4,2],[2,4]]` has p-ranks 0/1/2 at p=2/3/>3 and that
`S^{(2,1)}` in characteristic 3 contains the invariant all-ones vector and has the
1-dimensional sign quotient.

Minor bookkeeping observation, not a scope defect: the coverage rows name a source heading
for 15 of 18 items; `def-p-regular-and-p-restricted-partitions` and the two B
counterexamples have no dedicated row (their facts are carried by James §10.1/§10.2,
§11.7, §12.4 and Kleshchev Remark 5.5). The coverage-checklist gate treats that as
in-order, and the definition itself restates standard conventions rather than a new result.

## Dependency and mechanical checks (re-run on current disk state)

- All 24 distinct direct external dependencies of the pair are `published` in `items/`
  (spot-read: splitting p-modular system, decomposition numbers, Brauer simple count,
  p-regular elements, O-lattice reduction, decomposition-lattice independence).
- `coverage-checklist research/frontier-37-owner-30-batch-23.coverage.json`: pass, 1 page,
  55 harvested results, 0 errors / 0 warnings.
- `manifest-deps` batch 23: pass, 18 items, 0 errors. `content-policy --manifest-only`:
  pass, 18 items, 0 errors / 0 warnings.
- `source-fetch-check --coverage ...`: 4/4 fetch-verified, 4/4 resolved, exit 0.
- `item-dependency-levels check --run frontier-37-owner-30`: no batch-23 finding.
- Batch-23 cross-batch dependency input is `[]`; no other batch manifest in this run or
  the frontier consumes any of the 18 item IDs.

## Uncertainty statement and disposition

This review decides scope only. I did not re-derive the scaffold strategies (integral
Garnir/base-change transport, the dominance proof, the O-lattice reduction); those remain
step-3b authoring and independent-review obligations. My source checks confirm that each
planned claim exists in the cited authoritative text at the cited place and that the pages'
dependencies are available; I found no omitted topic, result or example that the page's
declared subject and library role require, and no inconsistency between design, plan,
coverage and manifest. On that basis the pair's scope is recorded **sufficient**; no
enrichment or pair merger is proposed, and no owner decision is needed for this pair.
