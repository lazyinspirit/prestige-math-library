# Step 3a dispatch report — `affine-group-schemes-hopf-algebras-and-rational-representations`

- Run: `frontier-40-geometry-braids-rep-27` (batch 13, orders 873/874, `scheme-theory`).
- Pair: A `affine-group-schemes-hopf-algebras-and-rational-representations` / B
  `affine-group-schemes-hopf-algebras-and-rational-representations-examples` (A: 13 items; B: 2 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the pair's promised scope (all design ids present, source coverage
  adequate, no unmet prerequisite found). Non-blocking observations for the owner are in §5.

## 1. Inputs read

- Manifests: `research/frontier-40-geometry-braids-rep-27-batch-13.pages.json` (both pages, all 15
  items, statements, strategies, deps) and `...-batch-13.coverage.json`; `research/plan-spec.json`
  rows 873/874; `...-scope-ledger.json` (both batch-13 pages owed); `...-batch-13.notes.md`;
  `...-batch-13.cross-batch-dependencies.json` (`[]`).
- Design/prose: `research/plan-algebraic-geometry-expansion-track.md` section **AG-GS-2** (its A
  inventory is the four design ids, its B inventory the two design examples; proof obligations are
  diagram reversal, the subgroup/Hopf-ideal correspondence, and the finite-dimensional-subcomodule
  argument into `GL(V)`; source route M22 3.1, 3.6–3.15, pp. 64–68 and Thm 4.9/Cor 4.10, pp. 86–88;
  explicit constraints: arbitrary field and characteristic, the published `lem-affine-algebraic-
  group-faithful-rational-representation` is over `C` and "is not this general supplier", and the
  second-source gate on the Hopf/comodule equivalence is open). Backing survey:
  `research/algebraic-geometry-expansion-2026-09-30/source-milne-groups.md` (Pair 2 row, proof-
  sufficiency items 1 and 7).
- Owner/run records: `...-owner-authoring-direction.md` (27 selected pairs, "preserve each pair's
  complete promised claim scope", local helper items allowed, scope changes owner-only),
  `...-alpha-step1-drift.md` (this page: VERDICT `no-drift`; the Hopf/comodule source gate is a
  known authoring-source obligation), `...-run-record.md` (Step 1 battery green; Step 3a fan-out in
  progress). Historical `research/*RESUME.md` files were not used.
- Sources: both stamped URLs were re-fetched live and hash-checked (below); the cited ranges were
  extracted from the re-fetched PDFs and the load-bearing numbered statements were read.

## 2. Design ∶ scaffold comparison (scope only)

All six promised design ids are present with the same id and kind:

| design promise (AG-GS-2) | batch-13 item |
|---|---|
| `def-coordinate-hopf-algebra-of-affine-group-scheme` | same id, definition |
| `thm-affine-group-schemes-hopf-algebra-antiequivalence` | same id, theorem |
| `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` | same id, theorem |
| `thm-affine-group-scheme-faithful-finite-dimensional-representation` | same id, theorem |
| `ex-hopf-algebra-of-a-split-torus` | same id, example (B) |
| `ex-rational-representation-from-a-comodule` | same id, example (B) |

The nine further A items are local prerequisites, each consumed by a listed item:
`def-commutative-hopf-algebra-over-a-field` (states the target category),
`lem-affine-finite-type-scheme-coordinate-ring-finitely-generated` (finite-type → finitely generated
coordinate ring; the one bridge the Spec setting needs where Milne works with f.g. algebras),
`lem-quotient-spectrum-map-is-a-closed-immersion` (choice-free recognition of closed immersions),
`lem-general-linear-group-scheme-and-its-coordinate-ring` (local `GL_n`/`G_m` supplier),
`lem-hopf-ideal-kernels-and-quotients`, `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra`
(the design's diagram reversal), `def-rational-representation-and-comodule-of-an-affine-group-scheme`,
`lem-representations-of-affine-group-schemes-are-comodules` (the dictionary, Milne Rmk 4.1/(25)), and
`lem-finite-dimensional-subcomodules-contain-elements` (the design's finite-dimensional-subcomodule
argument). No promised claim is dropped or weakened, and nothing beyond the design's subject is
asserted.

The design's "arbitrary field and characteristic exactly as stated" is honored: no reducedness,
smoothness, algebraic closedness or characteristic-zero hypothesis appears anywhere in the pair,
and the char-`p` nonreduced `μ_p` is exhibited on the B page. Page fields (order 873/874, titles,
kind A/B, category, companion, `requires`) match `plan-spec.json`; counts are 13 A + 2 B (cap 100).
Choice bookkeeping is declared, not hidden: the finite-generation bridge, the antiequivalence and
the closed-subgroup correspondence carry the Axiom of Choice where they inherit it (from
`lem-spectrum-compactness-open-cover-to-unit-ideal` and
`thm-affine-closed-immersions-quotient-rings`), while the diagram reversal, Hopf-ideal lemma,
representation–comodule dictionary, comodule local finiteness and the finitely generated case of
the linearity theorem are scoped choice-free.

## 3. Source coverage

Both stamps were re-verified against live fetches on 2026-10-05:

- Milne, *Algebraic Groups* (corrected 2022 printing), `https://www.jmilne.org/math/Books/iAG2022.pdf`:
  re-fetched 4 838 013 B, sha256 prefix `f2ddd8fa4d263085`, 659 PDF pages — exactly the coverage
  stamp. I extracted and read the cited ranges: Ch. 3 §3(a)–(e) (Prop. 3.1, Notation 3.2 and display
  (16), Def. 3.3, 3.4, Prop. 3.6, Cor. 3.7, Def. 3.8/3.10, Props. 3.9, 3.11–3.14, Prop. 3.15;
  PDF pp. 75–79 = printed pp. 64–68), Ch. 4 §4(a),(c)–(d) (Rmk 4.1 with (24)–(25), Ex. 4.2,
  Prop. 4.7, Cor. 4.8, Thm. 4.9, Cor. 4.10, Rmk 4.11; PDF pp. 94–100 = printed pp. 83–89),
  Conventions p. 3 (PDF 14) and §1.19 p. 12 (PDF 23). The coverage note that Milne builds finite
  generation into his category and works with max-spectra is confirmed; the scaffold's
  Spec/finite-type restatement plus the local bridge lemma is the correct translation and does not
  change the promised claims.
- Swanson (notes), Pevtsova (lecturer), `https://www.jpswanson.org/notes/alggroups.pdf`: re-fetched
  594 273 B, sha256 prefix `da33863b25acd951`, 55 pages — exactly the coverage stamp. Spot-read:
  Def. 14 (Hopf `k`-algebra), Thm. 19 (antiequivalence), Def. 35 and Prop. 37 (Hopf ideals; closed
  subgroup schemes), Def. 103/105, Rmk 106, Lemma 109/Definition 110–Theorem 111 (representations,
  comodules, local finiteness), Def. 115/Thm. 117 (linearity). This is the independent second
  treatment the design required, so its second-source gate is closed by the recorded coverage.

`coverage-checklist --require-destination` → `2 page(s), 52 harvested result(s), 0 error(s),
0 warning(s)`. The four declines (Milne §3.4 uniqueness/automaticity of `(ε,S)`; Swanson's
scheme-theoretic kernel functor; Swanson Fact 113; re-proving Milne §4(c)–(d)/Thm 111 on the B page)
each have a specific reason and lie outside the design's promised claims.

## 4. Prerequisite audit (unmet-prerequisite duty)

Mechanical resolution of the pair's declared graph: 59 distinct dependency ids = 48 published + 11
in-run; all 48 published ids carry `status: published` and resolve to item files; all 11 in-run ids
are items of this same pair; 0 missing. All three `requires` pages
(`group-schemes-of-finite-type-over-a-field`, `affine-schemes-and-the-structure-sheaf`,
`classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`) exist in
`library/` and are published. No statement or strategy wikilink is undeclared (script check: 0).
No declared dependency is homed only on a B/examples page (the `b-leaf-content` rule): the
published B-homed `ex-additive-multiplicative-and-general-linear-group-schemes` is deliberately not
used, and `GL_n`/`G_m` are supplied by the pair's own A-page lemma. Load-bearing published
suppliers whose statements I checked against their use: `def-group-scheme-over-a-field`,
`def-morphism-and-closed-subgroup-scheme`, `lem-closed-subgroup-scheme-valued-point-criterion`,
`thm-affine-scheme-ring-anti-equivalence`, `thm-affine-fibre-product-tensor-ring`,
`thm-affine-closed-immersions-quotient-rings`, `lem-spectrum-compactness-open-cover-to-unit-ideal`.

Intended role in the library: this is AG-GS-2, the Hopf/representation interface of the five-pair
group-scheme sequence. Later pairs of this run declare **43 item-level dependencies on this pair's
items** — batch 14 (Lie algebras; e.g. `thm-lie-bracket-and-adjoint-action-from-infinitesimals`
consumes `thm-affine-group-scheme-faithful-finite-dimensional-representation`), batch 15
(actions/quotients; consumes `def-rational-representation-and-comodule-of-an-affine-group-scheme`,
`lem-general-linear-group-scheme-and-its-coordinate-ring`), batch 18 (unipotent/solvable/Borel; 16
items consume the representation/comodule dictionary, local finiteness, Hopf-ideal lemma, closed
subgroup correspondence and `GL_n` lemma), batch 19 (split reductive; consumes the representation
definition and `GL_n` lemma) and batch 20 (highest weights; 15 items consume the full interface,
including `def-coordinate-hopf-algebra-of-affine-group-scheme`,
`lem-finite-dimensional-subcomodules-contain-elements` and
`thm-affine-group-scheme-faithful-finite-dimensional-representation`). Every id so referenced is
present in this pair's inventory with compatible hypotheses, so no consumer needs a claim absent
from the published library or this scaffold. The two B items have no external consumers (leaf page).

**Finding: no unmet prerequisite.** Uncertainty, stated honestly: this is an interface-level
scope audit of statement/hypothesis/home compatibility and of the declared dependency graph, not a
re-audit of the published proofs, and not a proof-correctness verdict on the 15 scaffold items
(that is Step 3b/Step 5 work).

## 5. Non-blocking observations for owner reconciliation

1. **Published-item inconsistency (reported, not repaired).** `lem-affine-algebraic-group-faithful-
   rational-representation` (published 2026-09-30) states "Nothing here uses the Axiom of Choice"
   (Statement line 52; repeated in step 13.1) while its proof uses its declared dependency
   `thm-affine-closed-immersions-quotient-rings` at step 11.1 (via [F3]); that published theorem
   declares the Axiom of Choice in its Facts ("We work with the repository's permitted Axiom of
   Choice", with the prime-ideal/nilradical AC-use note) and lists `def-axiom-of-choice` in `deps`.
   Either the choice-free prose is inaccurate or that dependency is over-declared. Step 11.1 only
   needs "surjective ring map ⇒ closed immersion", exactly the direction of this pair's new
   choice-free `lem-quotient-spectrum-map-is-a-closed-immersion` once authored and published. This
   pair does not depend on the published item, so it does not block construction; the repair
   decision is the owner's.
2. **Placement duplication (allowed; owner may prefer a different home).** The natural published
   supplier of `GL_n`/`G_m` comorphisms, `ex-additive-multiplicative-and-general-linear-group-
   schemes`, is homed only on the AG-GS-1 B page and cannot serve as a dependency of another page;
   the scaffold therefore rebuilds the needed part as `lem-general-linear-group-scheme-and-its-
   coordinate-ring`, which is consumed by five items here and by sibling batches 14/15/18/19. This
   is a permitted local helper under the owner direction; re-homing the published example or
   keeping the local lemma is the owner's call.
3. **Coverage-record granularity (bookkeeping, not scope).** On the B page the coverage file marks
   Milne §4(e) (free comodules, embedding into copies of the regular representation) as "inline"
   for `ex-rational-representation-from-a-comodule`, and Swanson Example 31(3)–(6) (`G_m`, `SL_n`,
   `μ_n`, `G_a(1)`) as "included" for `ex-hopf-algebra-of-a-split-torus`; only the `G_m`/`μ_n`
   parts of those ranges are consumed by the pair. The reading was done and the examples are
   adequate; Step 3b/owner may tighten the heading-level dispositions.

The design's warning that the published complex item "is not this general supplier" is respected:
nothing in this pair depends on `lem-affine-algebraic-group-faithful-rational-representation`, and
the arbitrary-field statements are built from Milne and Swanson as recorded.

## 6. B-page assessment

`...-examples` carries exactly the two design rows. `ex-hopf-algebra-of-a-split-torus` computes
`Δ(t_i)=t_i⊗t_i`, `ε(t_i)=1`, `S(t_i)=t_i^{-1}` on the Laurent generators, proves
`(t_i^{r_i}−1)` is a Hopf ideal, identifies `μ_{r_1}×…×μ_{r_n}` as a closed subgroup scheme via the
published all-algebra-point criterion, and exhibits the nonreduced char-`p` `μ_p`.
`ex-rational-representation-from-a-comodule` proves the `Z`-grading ↔ `G_m`-comodule ↔
representation dictionary in both directions and the matrix-coefficient form. Both are faithful to
the design, depend only on this pair and published A-homed suppliers, and the page is a leaf.

## 7. Decision and recording

- A page `affine-group-schemes-hopf-algebras-and-rational-representations`: **`sufficient`** — the
  planned definitions, results and examples adequately cover AG-GS-2's promised subject (the affine
  group ↔ Hopf algebra dictionary, the subgroup/Hopf-ideal correspondence, and rational
  representations with the linearity theorem), the source route is verified against both full
  texts, and no unmet prerequisite was found; §5 items are owner-reconciliation notes, not scope
  blockers.
- Recorded with `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27
  --page affine-group-schemes-hopf-algebras-and-rational-representations --decision sufficient`.
