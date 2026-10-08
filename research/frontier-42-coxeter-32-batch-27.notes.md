# Batch 27 — Affine Coxeter Diagrams and Semidefinite Classification (CG-23)

Run `frontier-42-coxeter-32`; role beta; pair CG-23, orders 1770 (A) and 1771 (B),
category `coxeter-groups`. Outputs written by this batch:

- `research/frontier-42-coxeter-32-batch-27.pages.json` (8 A items, 5 B items)
- `research/frontier-42-coxeter-32-batch-27.coverage.json` (3 sources per page, all fetch-stamped)
- `research/frontier-42-coxeter-32-batch-27.cross-batch-dependencies.json` (68 reviewed edges)
- `research/frontier-42-coxeter-32-batch-27-url-liveness.json` (3/3 URLs live)
- `research/frontier-42-coxeter-32-step1-<item>.json` (13 readiness records, all `ready`)

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L496–507 (CG-23); the
`plan-spec.json` entries for orders 1770/1771 agree with the dispatch in label, kind,
category, title, companion, `requires` list and empty item arrays. **No design/plan conflict
was found**, so nothing had to be recorded as a conflict; the binding owner direction
(richest sound claims, no empty scaffold contracts, definitions justified before their
properties are consumed, choice branches preserved) is respected. The dispatch instruction
“record every conflict” therefore records “none”.

The design lists three A-page contracts and one B companion. They are scaffolded as:

| Design contract | Item |
|---|---|
| `def-cg-irreducible-affine-coxeter-type` | A1 |
| `lem-cg-positive-radical-and-affine-gram-exclusions` (radical/corank/principal submatrices/Perron-free; its enumeration sentence realized separately) | A2 + A7 |
| `thm-cg-affine-gram-classification-and-euclidean-realization` | A8 |
| B companion: radical vector of Ã₂; Ã₁ with its infinity edge; B̃/C̃ comparison; reducible semidefinite factorwise; indefinite form is not affine | B1–B5 |

Five local additions were necessary for mathematical closure and are **not** scope changes:

1. `def-cg-standard-affine-diagrams` (A3) — the design's theorem names families “Ãₙ, B̃ₙ,
   …” but no local item defines them; every later item and example uses one list.
2. `lem-cg-affine-slice-simplex-and-wall-reflections` (A4) — realizes the design's “construct
   the Euclidean affine slice of dual U” clause concretely (action, simplex, facet normals).
3. `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` (A5) — the bridge that
   the design's “match the crystallographic alcove constructions (duality conventions
   stated)” needs: two Euclidean simplices with equal facet-normal Gram matrices are similar
   facet-to-facet, so the two reflection groups are conjugate.
4. `lem-cg-affine-type-crystallographic-alcove-diagrams` (A6) — shows the standard list is
   exactly the facet-reflection data of the crystallographic Weyl types A–G, so the
   “equivalence of form type and Euclidean simplex Coxeter action” has a local proof rather
   than a citation.
5. `lem-cg-affine-diagram-enumeration` (A7) — the design's enumeration sentence (“use the
   earlier determinant exclusions and determinant-zero arm/path recurrences … separating
   rank-two infinity”) is a substantial case analysis; it is scaffolded as its own lemma.

## Item inventory (level = step-1 dependency level)

| # | Item | Kind | Level | In-run deps (bN = batch N of this run) |
|---|---|---|---|---|
| A1 | `def-cg-irreducible-affine-coxeter-type` | def | 4 | b2, b4 ×2, b13 |
| A2 | `lem-cg-positive-radical-and-affine-gram-exclusions` | lem | 14 | A1, b4, b13 ×3 |
| A3 | `def-cg-standard-affine-diagrams` | def | 15 | b13 ×2 |
| A4 | `lem-cg-affine-slice-simplex-and-wall-reflections` | lem | 15 | A1, A2, b2, b4 ×5, b7, b9 ×2 |
| A5 | `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` | lem | 0 | (none; all deps published) |
| A6 | `lem-cg-affine-type-crystallographic-alcove-diagrams` | lem | 17 | A2, A3, b21 ×3, b24 ×5 |
| A7 | `lem-cg-affine-diagram-enumeration` | lem | 18 | A1–A3, A6, b13 ×4 |
| A8 | `thm-cg-affine-gram-classification-and-euclidean-realization` | thm | 19 | A1–A7, b4, b7, b13 ×3, b21, b24 ×5 |
| B1 | `ex-cg-a-tilde-2-radical-vector-and-affine-slice` | ex | 18 | A1–A6, b4, b13 |
| B2 | `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` | ex | 18 | A1–A4, A6, b4 ×2, b13, b24 |
| B3 | `ex-cg-b-tilde-versus-c-tilde-diagrams` | ex | 18 | A2, A3, A6, b4, b13, b21 ×2, b24 ×4 |
| B4 | `ex-cg-reducible-semidefinite-forms-are-factorwise` | ex | 16 | A1, A3, b2 ×2, b4, b13 ×3 |
| B5 | `ex-cg-indefinite-coxeter-form-is-not-affine` | ex | 20 | A1–A3, A6, A8, b4 ×2, b13 ×2 |

Every item states `deps` explicitly; the A page has 8 items and the B page 5, far inside the
100-item cap. `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports zero label mismatches for these 13 items (its remaining errors are the empty page
shells of batches 20, 25, 31 and 32, in flight elsewhere).

## Mathematical route and the choices made

- **Form type (A1, A2).** Affine form type is *defined* as: connected diagram and cosine
  matrix `C` positive semidefinite of corank one; the equivalence with “PSD and not positive
  definite” is discharged by A2(1). A2 proves the positive radical vector and corank one by
  Davis's `|x|` argument (Lemma 6.3.5/Lemma 6.3.7) — no Perron–Frobenius is assumed — then
  proper principal submatrices are positive definite, and the domination lemma
  (Appendix C, Lemma C.3.1) is proved in the same item. Every clause of A2 is used by A7.
- **The slice (A4).** For a positive radical vector `δ`, the affine slice
  `E_δ = {φ ∈ V* : φ(δ) = 1}` is an affine space of dimension `|S|−1` with direction space
  `U*` (`U = V/rad B`), and the dual action is faithful and isometric. The alcove is the
  simplex with vertices `v_s` (the unique point with `φ(e_t)=0`, `t≠s`), the facet normals
  have Gram matrix `C = (B(e_s,e_t))`, and the facet reflections are the restrictions of the
  `ρ*(s)`. The intersection rule comes from the point-stabilizer theorem of batch 24.
  **Duality conventions:** batch 24 works with the *canonical* representation on `V` and the
  affine root hyperplanes `H_{α,k} ⊂ E` (roots as vectors, coroot translations); this page
  works with the *dual* space `V*` and the slice `E_δ ⊂ V*` (functionals `φ`), so the two
  Euclidean realizations are compared through the similarity lemma rather than by an
  identification of `V` with `E`. The comparison is stated in A8 and recorded here.
- **Similarity bridge (A5).** Lemma 6.8.5/6.8.6 of the book is generalized to two arbitrary
  Euclidean simplices with equal facet-normal Gram matrices: boundedness makes the normals
  positively span, the unique linear relation has all coefficients nonzero and of one sign
  (vertex argument), the offsets give `t = R'/R > 0`, and the translation `y₀` exists because
  the evaluation map has image `p^⊥`. Facets are matched by the labelling, hence the
  facet-reflection groups are conjugate by a similarity.
- **Crystallographic table (A6).** For each finite Weyl type A–G the highest-root coefficient
  vector is displayed and the pairings `(θ, α_i)` computed coefficientwise (simply laced:
  `2n_i − Σ_{j∼i} n_j = 0` at interior nodes and `1` at the attaching node; non-simply-laced:
  the length ratios of the batch-21 supplier). The resulting facet-reflection matrices are
  exactly Ã₁, Ãₙ, B̃ₙ, C̃ₙ, D̃ₙ, Ẽ₆, Ẽ₇, Ẽ₈, F̃₄, G̃₂, with the n=2 and low-rank
  coincidences; unit facet normals have the cosine matrix as Gram matrix, so A2 gives PSD
  corank one with a positive kernel and the proper principal submatrices are positive
  definite. The affine Weyl group identification uses
  `W_a = Q^∨ ⋊ W` from batch 24 (see the dependency repairs below).
- **Enumeration (A7).** Davis's Appendix C.3 case analysis is followed with every exclusion
  exhibiting its non-positive-definiteness (via the domination contrapositive of A2(3)):
  `m ≠ ∞` (dominate Ã₁), `Γ` a tree (dominate Ãₙ), the `m = 3` branch/arm analysis via Ẽ₆,
  Ẽ₇, Ẽ₈, then at most one edge `> 3` (dominate C̃ₙ), no branch vertices (dominate B̃ₙ), the
  `m = 4` branch via B_N and F̃₄, and `m ≥ 5` via G̃₂, Z₅ = (5,3,3,3) and Z₄ = (3,5,3). The
  two obstruction determinants are recomputed: `det(2A) = 9 − 16cos²(π/5) = 3 − 2√5 < 0`
  and `det(2A) = 10 − 16cos²(π/5) = 4 − 2√5 < 0` (matching [Davis, Lemma C.2.3]), with
  `cos²(π/5) = (3+√5)/8` **derived in the proof**, not cited: the roots-of-unity sum
  `1 + ζ + … + ζ⁴ = 0` for `ζ = e^{2πi/5}`, divided by `ζ²`, gives `y² + y − 1 = 0` for
  `y = ζ + ζ⁻¹ = 2cos(2π/5)`; positivity of `y` from monotonicity (`cos` strictly decreasing
  on `[0,π]`, `cos(π/2) = 0`, `0 < 2π/5 < π/2`); the double-angle identity finishes.
- **Theorem (A8).** Assembles (1) the classification, (2) the slice conclusions, (3) the
  matching with the crystallographic alcove (similarity + `W_a = Q^∨ ⋊ W` + transitivity,
  simple transitivity, strict fundamental domain and the length formula from the batch-24
  theorem), and (4) the conventions: extended affine `P^∨ ⋊ W` and twisted Lie-theoretic
  diagrams are *different objects*, not defined or used here; no Choice anywhere.
- **Examples (B1–B5).** The Ã₂ radical vector/computation (B1), the Ã₁ infinity edge versus
  the finite dihedral families and the label 4 (B2), the B̃/C̃ comparison with both kernel
  vectors and the duality of scalings (B3), the factorwise treatment of reducible
  semidefinite forms with the square chamber (B4), and an indefinite Coxeter form that is
  infinite but not affine (B5).

## Corrections made during construction (honest record)

The first draft of the manifest was written earlier in this dispatch; a full read-through
against the sources found and corrected the following, **before** the readiness records were
written:

1. **B3 kernel vector (mathematical error).** The draft gave the `B̃ₙ` kernel vector
   `(2,1,1,2,2,…,√2)`, which fails the harmonic equation at `v₀` (`x₂ = 2x₀`). Corrected to
   `(1,1,2,…,2,√2)`; the `C̃ₙ` vector `(1,√2,…,√2,1)` was re-verified.
2. **A3 `D̃ₙ` chain length (off-by-one).** The draft wrote the chain as
   `a−w₁−…−w_{n−4}−b of n−4 edges`, which has `n−3` edges and `n+2` vertices. Corrected to
   `a = w₀, w₁, …, w_{n−4} = b` with exactly `n−4` edges (`n−3` chain vertices, `n+1` total).
3. **A3 `B̃₂` convention.** The recipe of (2) is stated for `n ≥ 3`; the n=2 case is the
   convention `B̃₂ := C̃₂`, now stated explicitly in (2) and (7) and tied to the finite
   coincidence `B₂ = C₂ = I₂(4)` of the finite-classification item.
4. **Missing `W_a = Q^∨ ⋊ W` dependency (unmet prerequisite).** A6, A8 and B3 used the
   semidirect-product identification, but the affine page's definition item explicitly
   declines to claim it. Added `lem-cg-affine-reflection-identities-and-local-finiteness`
   (batch 24, clause (4)) to A6, A8 and B3.
5. **Three B-page-homed examples used as dependencies (structural error).** SCHEMA forbids
   depending on an item homed only on a B/examples page. `ex-root-systems-a-two-b-two-and-g-two`
   and `ex-root-system-a-one` were removed from A6/B2/B3 and replaced by A-page suppliers
   (`ex-classical-root-systems-in-euclidean-coordinates`, `thm-rank-two-root-system-classification`,
   and the finite coincidences of `thm-cg-finite-coxeter-classification-including-h-and-dihedral`);
   `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees` was removed
   from A7 and B5 and replaced by an inline derivation from published A-page trigonometric
   items (roots of unity, Euler's formula, parametrization, double-angle, monotonicity).
6. **A3 missing finite-classification dependency.** The statement's coincidence clause used
   `D₃ = A₃`, `B₂ = C₂` from the finite classification; the item now declares
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral` in `deps`.
7. **B5 hyperbolic claim trimmed (scope honesty).** The draft asserted a hyperbolic
   triangle-group realization in `ℍ²`. That needs hyperbolic geometry that this run does not
   build, so the claim was replaced by the algebraic statement (indefinite, nondegenerate,
   proper principal submatrices positive definite) and the two geometric references are
   recorded as background only. The design's B-companion contract (“an indefinite Coxeter
   form is not affine”) is fully preserved.
8. **B4 polygon-uniqueness claim removed.** The draft's “the rectangle is the only Euclidean
   polygon case” was supported by a citation rather than a proof, and the run has no local
   Euclidean polygon angle-sum supplier; the sentence was removed, the square computation
   kept, and the source locator re-framed as background. Recorded as a deliberate scope
   decision, not as a proved claim.
9. **B5 determinant formula corrected.** The draft's `det B = 1 − 2·¼ − 2·½·cos(π/5) − cos²(π/5)`
   had a wrong cross-term; the correct value is `det B = ½ − ½cos(π/5) − cos²(π/5) = −√5/4`.
10. **Encoding repair.** Three strategy strings contained control characters (tab/form feed)
    from a Python escape accident (`\times`, `\text`, `\tilde`, `\forall`); all were repaired
    and the manifest re-scanned clean.
11. **Page link in an item body removed.** A1's statement linked the companion *page* id;
    page ids are not item ids and `fwdcheck` treats such a link as unresolved. Replaced by
    plain text.
12. **A6 harmonic-condition wording.** The draft said “equality at the branch node”, which is
    wrong for E8 (the nonzero value sits at the attaching node α₈, not the branch node α₄).
    Rewritten to “vanishes at every node except the attaching node, where it equals 1”, and
    the Cₙ highest-root coordinates now cite the same published example as the Bₙ bullet.
13. **B1 A₂-alcove citation (wrong source).** The draft attributed the A₂ alcove vertices
    (0, (1,1/√3), (0,2/√3)) to the published classical-coordinates example, which contains
    the root coordinates but no alcove vertices. The comparison now cites
    `lem-cg-highest-root-and-fundamental-alcove` (2) (added to B1's `deps`), which does
    construct the alcove.

Because `itemHash` covers the transitive dependency closure, corrections 12 and 13
invalidated 12 of the 13 records written in the first pass; all 12 were re-recorded against
the final manifest and dependency lists (A5, which has no in-run dependencies, stayed
current).

## Sources (all fetched as full text and stamped)

Three independent treatments per page; all locators were read over the ranges recorded in
`coverage.json`:

1. M. W. Davis, *The Geometry and Topology of Coxeter Groups*, first-edition author
   manuscript, 600 pp. `https://people.math.osu.edu/davis.12/davisbook.pdf`, fetch stamp
   sha256_16 `ccefbb950fdcfce9`. Read: §6.3 printed pp. 78–81 (Lemmas 6.3.5, 6.3.7, 6.3.10);
   §6.8 printed pp. 96–103 (Lemmas 6.8.5–6.8.7, Propositions 6.8.8, Remarks 6.8.9,
   Exercise 6.8.10, Definition 6.8.11, Theorem 6.8.12); §6.9 printed pp. 103–104
   (Theorem 6.9.1, Table 6.1); Appendix B printed pp. 429–432 (B.4, “Euclidean
   Tessellations”); Appendix C printed pp. 433–438 (Definition C.1.1, Theorems C.1.2–C.1.4,
   Lemmas C.2.1–C.2.3, Table C.1, Lemma C.3.1 and the proofs of C.1.2–C.1.3). Not read:
   Chapters 1–5 and 7–17, Appendices A, D–G, B.1–B.3, and the parts of §6.3/§6.8 outside
   the quoted results.
2. M. W. Davis and G. Moussong, *Notes on nonpositively curved polyhedra*, Turan Workshop
   lecture notes, 65 pp. `https://people.math.osu.edu/davis.12/notes.pdf`, stamp sha256_16
   `f8c60a2bf6920bf4`. Read: §6.1 printed pp. 32–35 (Table 6.1.1, Examples 6.1.2–6.1.4) and
   §6.2 printed p. 35 (Theorem 6.2.1, Corollary 6.2.2, context only).
3. R. Xiong, *Lectures on Affine Weyl Groups*, complete lecture notes, 77 pp.
   `https://cubicbear.github.io/doc/affineNotes.pdf`, stamp sha256_16 `8548ee1a316b8bdf`.
   Read: Chapter 1, §§1.1–1.9, printed pp. 2–8, and Chapter 2, §§2.1–2.17, printed
   pp. 11–17 (including 2.3 and 2.5 for Ã₁, 2.7 for Ã₂, 2.12 for the untwisted affine
   diagram list, 2.15–2.16 for C̃ₙ and the D̃/B̃/C̃ inclusions). Not read: Chapters 3–7.

Every harvested heading in the read range has a disposition in `coverage.json`
(`coverage-checklist`: 2 pages, 67 harvested results, 0 errors, 1 advisory warning). The
A-page harvest is 51 rows: 18 `included`, 10 `inline`, 10 `deferred` (each with a plan-spec
destination — the affine page, the finite-classification page, the presentations page or
the finite-reflection-arrangements page) and 13 `out-of-scope` (spherical/hyperbolic
simplex theory, general polytope data, regular-cell-complex machinery, Andreev theory).
The B page adds 15 rows (8 `included`, 6 `inline`, 1 `out-of-scope`). The single warning is
`coverage-low-yield` (19/52 rows scaffolded on the A page): most of the remaining rows are
results owned by the pages this pair `requires`, which are consumed as declared dependencies
rather than rebuilt; that split is the design's own division of labour.
`source-backing`: 18 authored result(s), every one still backed by an openable source or a
documented alternative argument; `url-sweep` on this coverage: 3/3 live, 0 failed.

## Dependency verification

Supplier statements and proof strategies were read in dependency order for every in-run
supplier used: batches 2, 4, 7, 9, 13, 21 and 24 (all already scaffolded). The checked
clauses are recorded in the 68 evidence rows of
`research/frontier-42-coxeter-32-batch-27.cross-batch-dependencies.json` (2 page rows for
the two `requires` pages plus 66 item rows; exact consumer, supplier, required claim, use,
and the statement that no mismatch was found in statement, hypotheses or direction).
The specific clauses checked include: `lem-cg-positive-definite-diagram-exclusions` (1) and
(5)–(6) (witness principle and recursions), `thm-cg-finite-type-positive-definite-criterion`
(1), `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (1)–(4) (list, positivity
and coincidences), `lem-cg-diagram-products-and-invariant-form-comparison` (1)–(3),
`def-cg-affine-root-hyperplane-reflection-and-alcove`, `lem-cg-highest-root-and-fundamental-alcove`
(1)–(3), `lem-cg-affine-alcove-separation-and-facet-types` (1)–(3),
`lem-cg-affine-point-stabilizers-and-vertex-residues` (2)–(3),
`thm-cg-affine-alcove-transitivity-presentation-and-length` (1)–(4),
`lem-cg-affine-reflection-identities-and-local-finiteness` (4) (`W_a = Q^∨ ⋊ W`),
`lem-cg-integer-pairings-and-allowed-dihedral-labels` (2)–(3),
`thm-cg-crystallographic-finite-type-and-lattice-stability` (1)–(4),
`thm-cg-root-length-criterion-and-faithfulness` (3) (faithfulness of the dual action),
`thm-cg-dual-chamber-intersections-and-point-stabilizers` (4)–(5) (point stabilizers and the
intersection rule), and `thm-hh-parabolic-minimal-representatives-and-length-additivity` (1)
(support of an element).

No missing, circular, forward or inadequate dependency was found after the eleven repairs
listed above:

- every `[[...]]` target in every item body is declared in `deps` or `justified_by`;
- no dependency points at a later page or at a later item of the same page (the dependency
  levels A1=4, A2=14, A3=15, A4=15, A5=0, A6=17, A7=18, A8=19, B1–B3=18, B4=15, B5=20 respect
  the authoring order: A5 is level 0 because it has no in-run dependency, and every item
  that consumes an earlier in-run item has a level above all of its in-run suppliers);
- the two `requires` pages (`finite-coxeter-diagrams-and-complete-classification` and
  `affine-reflections-coroot-translations-and-alcoves`) are the in-run suppliers of the
  classification and affine-alcove clauses, and their declared prerequisites cover every
  supplier item used (checked against `plan-spec.json`; no undeclared prerequisite);
- the only non-run dependencies are published disk items (linear algebra, graph theory,
  simplex/isometry/topology vocabulary, trigonometric identities, root-system and
  reflection-geometry items) and the three B-page-homed examples were removed as described.

The shared mechanism of `briefs/tasks/frontier-dependency-ledger.md` was followed: one row
per `(kind, consumer, supplier)` in the batch input (statuses `open`), refreshed with
`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`, and the
unified ledger is never edited by hand. The refresh succeeds; all 68 batch-27 edges carry a
review row and there are no orphaned reviews. Its
`unreviewed_batches` list contains only batches 20, 25, 31 and 32, so the
`--require-reviewed` stage gate cannot pass until those siblings land; that is a run-level
condition, not a batch-27 defect.

## Checks run (actual commands and results)

| Command | Result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | 13/13 batch-27 labels match; only empty-shell errors of batches 20, 25, 31, 32 |
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | all 13 batch-27 records current; run-wide at the time of writing 268/268 `ready`, and after batch 20's manifest landed, 279 items with the 11 new batch-20 records pending (sibling work); zero batch-27 work items |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-27.coverage.json --require-destination` | 2 pages, 67 harvested, 0 errors, 1 advisory warning (`coverage-low-yield`) |
| `node tools/source-fetch-check.mjs --coverage ...batch-27.coverage.json --stamp` | 6/6 source entries fetch-verified (3 URLs; hashes above) |
| `node tools/source-fetch-check.mjs --coverage ...batch-27.coverage.json` | 6/6 resolved in check mode |
| `node tools/url-sweep.mjs --coverage ... --out research/frontier-42-coxeter-32-batch-27-url-liveness.json --fail-on-dead` | 3/3 live, 0 failed |
| `node tools/source-backing.mjs --coverage ... --liveness ...` | every authored result backed by an openable source |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-27.pages.json` | 13 items, 0 missing, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 268 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; 68/68 batch-27 edges reviewed |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 2: `Empty frontier page finite-coxeter-invariants-and-coinvariant-gradings` (batch 20, in flight); no batch-27 page reported |

`extcheck`, `fwdcheck`, `depcheck`, `depsource` and `precheck` are item-level validators that
resolve manifest ids through authored item files; at Step 1 those files intentionally do not
exist yet, and the engine runs the manifest-only policy and dependency passes instead. They
remain Step-3 obligations.

## Escalations and unresolved findings

- **Escalations: none.** No cross-batch change is requested and no new prerequisite pair is
  proposed; every supplier used is already scaffolded in this run or published on disk.
- **Advisory coverage warning (not an escalation).** `coverage-low-yield` on the A page
  (19/52). The declined rows are results owned by the two `requires` pages or by adjacent
  published pages; each has a written reason and, where applicable, a plan-spec destination.
- **Run-level blockers (other batches).** Batches 20, 25, 31 and 32 still have empty page
  shells; until they land, the run-wide `item-dependency-levels`, `step1-decisions` and
  `frontier-dependency-ledger --require-reviewed` cannot be fully green. This is not a
  batch-27 defect.
- **Scope decisions recorded for review.** (i) The B5 hyperbolic-realization sentence and
  (ii) the B4 Euclidean-polygon uniqueness sentence were removed because no local supplier
  exists in this run; both are documented above with the exact reason. If the owner wants
  them, they need a hyperbolic-geometry page and a planar polygon angle-sum item
  respectively, neither of which is in CG-23's scope.
- **No published defects found.** No published item consumed by this batch was found
  defective; the batch notes no repair obligations to the canonical ledger.
