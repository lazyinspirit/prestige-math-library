# Step 3a scope review — homogeneous-resultants-and-projective-intersection-length

- Run: `frontier-35-ten-categories` (batch 5), role alpha, label
  `step3a-pair-homogeneous-resultants-and-projective-intersection-length-b9f978f5b4a42383`.
- A page: `homogeneous-resultants-and-projective-intersection-length` (order 366.0621,
  commutative-algebra, 14 items).
- B page: `homogeneous-resultants-and-projective-intersection-length-examples`
  (order 366.0622, 4 items), companion pointer A↔B consistent.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at content hash of the current pair). Scope only; no item
  approval, no owner record, no scaffold edit.

## Evidence read

- `research/frontier-35-ten-categories-batch-5.pages.json`, `.coverage.json`,
  `.notes.md`, `.cross-batch-dependencies.json` (empty array — the pair consumes
  only published prerequisite pages and its own local items).
- Design: `research/plan-commutative-algebra-track.md` §CA-21 (lines 4598–4668)
  and the CA overview table (line ~4458); consumer seam `AV-8` in
  `research/plan-algebraic-geometry-track.md` (lines 622–700, and line 2720
  restating "AV-8 A: resultant items and the global graded/length steps of
  Bézout"). `research/plan-spec.json` entries 366.0621/366.0622 carry the design
  `requires` and empty item arrays; the batch manifest inventory controls.
- `research/frontier-35-ten-categories-owner-authoring-direction.md` — defers the
  batch-8 coherent-sheaf pair and one batch-13 Easton item; it names no batch-5
  change, so the design scope stands.
- `research/frontier-35-ten-categories-step1-<item>.json`, all 18 pair items:
  decision `ready`, each with examined dependency IDs and source evidence.
- Published prerequisite pages in `library/`: `artinian-rings-and-length`,
  `rees-modules-artin-rees-and-hilbert-samuel-theory`,
  `koszul-complexes-and-regular-sequences`,
  `projective-algebraic-sets-projective-morphisms-and-cones`,
  `schemes-subschemes-and-morphisms-locally-of-finite-type`,
  `dimension-constructible-images-and-dimensions-of-fibres` — all `status:
  published` with nonempty item inventories.

## Scope against the prose design

All ten designed A items and all four designed B examples are present, in design
order, with the intended content:

| Design item | Manifest item |
|---|---|
| 1 binary Sylvester resultant (nominated degrees, zero-leading-coefficient boundary) | `def-sylvester-resultant-of-binary-forms` |
| 2 scaling, specialization, infinity vs affine root | `lem-binary-resultant-scaling-specialization-and-dehomogenization` |
| 3 geometric `P^1` root criterion over an algebraic closure | `thm-binary-resultant-zero-iff-common-geometric-projective-root` |
| 4 coprime plane forms are a regular sequence | `lem-coprime-plane-forms-form-a-homogeneous-regular-sequence` |
| 5 Hilbert series `(1-t^d)(1-t^e)/(1-t)^3` | `lem-complete-intersection-hilbert-series-two-plane-forms` |
| 6 zero-dimensional, nonempty projective intersection (never Artinian quotient) | `cor-no-common-component-projective-plane-intersection-is-zero-dimensional` |
| 7 local total-length definition with residue-degree factor | `def-total-length-of-a-zero-dimensional-projective-scheme` |
| 8 eventual Hilbert value equals intrinsic local length (unsaturated ideals allowed) | `lem-eventual-hilbert-function-equals-zero-dimensional-projective-length` |
| 9 total length `de` | `thm-projective-plane-complete-intersection-total-length` |
| 10 algebraic Bézout length form handed to AV-8 | `cor-projective-plane-bezout-length-form` |
| B 1–4 | `ex-binary-resultant-two-linear-forms`, `ex-resultant-detects-root-at-infinity`, `ex-hilbert-series-plane-complete-intersection`, `ex-length-intersection-tangent-line-conic` |

Four items are additions beyond the design's prose list, all genuine unmet local
prerequisites of the designed claims rather than new subject matter:

| Added item | Why the designed claim needs it |
|---|---|
| `lem-finite-variable-polynomial-rings-over-fields-are-ufds` | The design's item 4 cited the published UFD theorem for 3 variables, but `items/thm-polynomial-ring-over-a-field-is-a-ufd.md` is only about `F[x]`; the induction to several variables must exist before the regular-sequence lemma. |
| `def-projective-scheme-from-a-homogeneous-quotient` | The designed total-length definition needs `Proj` of a quotient over an arbitrary field; the published `items/def-projective-space-points.md` fixes an algebraically closed field. |
| `lem-projective-standard-chart-prime-and-local-ring-correspondence` | Supplies the chart/prime/local-ring interface used by the designed zero-dimensionality, finiteness and length statements. |
| `lem-zero-dimensional-projective-scheme-has-finite-local-charts` | Supplies the finiteness of support and of each local length that the designed total-length definition (item 7) presupposes. |

No designed item was dropped or weakened; the corollary keeps the design's
warning that the homogeneous coordinate quotient has ring dimension one, and the
final corollary keeps the design's deferral of local-equation invariance and the
geometric curve formulation to AV-8.

## Source coverage verified independently

The two PDF bodies cached by the scaffolder match the coverage stamps exactly
(`/tmp/ca21-milne.pdf` sha256_16 `8222dff2574a5afc`, 231 pp; `/tmp/ca21-gathmann.pdf`
sha256_16 `18c6d341cebc2b3d`, 214 pp), and I read the cited printed pages from
those bodies:

- Milne, *Algebraic Geometry* v6.10: Cor. 1.25 and Prop. 1.24 (height-one primes
  of a Noetherian UFD are principal; irreducible = prime), Thm. 1.32 with the
  induction from Prop. 1.31 (`k[X_1,…,X_n]` is a UFD — this is the backing for
  the added multi-variable UFD lemma), Thm. 6.37 (Bézout "counted with
  appropriate multiplicities"), Remark 6.38 (multiplicity `dim_k O_P/(f,g)`, and
  the text's own warning that its Bézout proof chooses multiplicities to fit the
  count), Thm. 6.41 (Hilbert polynomial, "Proof. Omitted"), Prop. 7.27
  (resultant criterion with the both-leading-coefficients-zero case), Prop. 7.28
  (projective restatement: `Res = 0` iff a common zero in `P^1`).
- Gathmann, *Algebraic Geometry* notes (2002), Ch. 6 "First applications of
  scheme theory": Lemma 6.1.4 (a zero-dimensional projective subscheme is
  affine `Spec R`, `dim_k R < ∞` is its length, and `h_X(d) = dim_k R` for
  `d ≫ 0`; proof by a hyperplane avoiding `X` plus dehomogenisation), Remark
  6.1.6 (any homogeneous ideal with the same `Proj` gives the same eventual
  Hilbert function — the unsaturated-ideal case), Prop. 6.1.5 (general Hilbert
  polynomial, deliberately out of scope), Def. 6.1.7 and Ex. 6.1.8(i),(iii),
  Prop. 6.1.9, Thm. 6.2.1 (hypersurface Bézout), Ex. 6.2.2 (plane curves give
  `d_1 d_2`) and Ex. 6.2.3 (tangency forces local multiplicity ≥ 2, via the local
  quotient `k[x,y]/(f_1,f_2)`).
- Stacks Project §27.8 (tag 01M3, fetched live): Def. 27.8.3, Lemma 27.8.4
  (`Γ(D_+(f), O) = S_(f)` and stalks), Lemma 27.8.6, Lemma 27.8.7 (`Proj S` is a
  scheme and the `D_+(f)` are affine opens).
- Stacks Project tag 06LH (fetched live, body size matches the recorded fetch):
  Lemma 33.20.2 — a locally algebraic `k`-scheme of dimension 0 is a disjoint
  union of spectra of local Artinian `k`-algebras of finite `k`-dimension, so
  finite residue degrees and finite local lengths over `k` follow.
- All four source URLs answer now (`206` for both PDFs, `200` for both tags).

The out-of-scope dispositions in the coverage file (Milne Thm. 6.41 and general
elimination theory; Gathmann Prop. 6.1.5 and 6.1.9) match the design's explicit
instruction not to route Bézout through a general Hilbert-polynomial theorem.
`tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-5.coverage.json`
re-run now: 1 page, 28 harvested results, 0 errors, 0 warnings. Every one of the
53 direct dependency IDs of the 18 items resolves to an existing `items/*.md`
with `status: published`.

## Role in the library

- No published item references any of the 18 pair IDs (checked across `items/`),
  matching design §11.5's "0 published consumers" for this supplier.
- The only planned consumer is `plane-curves-local-intersection-multiplicity-and-bezout`
  (AV-8, order 366.063, empty plan inventory, not published). Its design asks
  algebra for "resultant items and the global graded/length steps of Bézout" and
  keeps local-equation invariance and the geometric formulation on the AV-8 page;
  `cor-projective-plane-bezout-length-form` defers exactly those. The seam is
  coherent and nothing designed for this pair is silently handed off.
- B requires A only; the A page's six prerequisites are published pages with
  nonempty inventories, so the pair is not waiting on an empty shell.

## Observations (non-blocking, for the item author; no owner action requested)

1. The ID/title says "homogeneous resultants" but the realised content is the
   binary (`P^1`) resultant, exactly as the design specifies; multivariate
   resultants and elimination theory are outside this pair by design.
2. `lem-binary-resultant-scaling-specialization-and-dehomogenization`: the
   bihomogeneity clause `Res_{d,e}(uF,vG) = u^e v^d Res_{d,e}(F,G)` is an
   elementary determinant fact of the definition; the coverage file locates the
   affine/infinity clauses (Milne Prop. 7.27) but no separate source line for the
   scaling clause. Locator granularity only — I see no scope gap.
3. The corollary's declared dependency list names no dimension-of-a-scheme
   definition, although its statement says `X` is zero-dimensional. The notion
   is published on the required page `dimension-constructible-images-and-dimensions-of-fibres`
   (`def-dimension-noetherian-topological-space`). This is a dependency-audit
   detail for Step 3b, not a missing definition in scope.
4. I checked the B examples' arithmetic directly (Sylvester 3×3 matrix for
   `F = Y`, `G = XY` has vanishing first row; `(1+t)(1+t+t^2)/(1-t) = 1,3,5,6,6,…`;
   `k[u,v]/(v-u^2,v) ≅ k[u]/(u^2)` has length 2 and `[κ(P):k] = 1`). Proof
   correctness of all items remains with Step 3b/Step 5 and is not judged here.

## Decision

**sufficient.** The planned definitions, results and examples realise all ten
designed A items and all four designed B examples, the four additions are
source-backed prerequisites of the designed claims rather than scope expansions,
the sources cover every clause at the promised locators, and the pair's library
role (AV-8 supplier, no published consumers) is intact. No enrichment or merger
is needed.
