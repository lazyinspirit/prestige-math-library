# frontier-31 / beta / batch-12 — scaffold notes

## Checkpoint 2026-09-05 — scaffold drafted

This is a new scaffold: the supplied `frontier-31-batch-12.pages.json` had two
empty page objects.  The only files owned by this batch are the manifest, this
note, and `frontier-31-batch-12.coverage.json`.

### Scope and plan-spec decision

The authoritative task specification gives A order `366.061`, B order
`366.062`, category `scheme-theory`, and the sole declared A prerequisite
`sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`.  The
design at `research/plan-algebraic-geometry-track.md` line 663 calls for the
broader conceptual background AV-9, AV-10, the Zariski page, and localization.
That is a design-vs-spec prerequisite discrepancy.  It is recorded here rather
than settled locally: the manifest retains the task/plan-spec edge, while the
individual item dependencies name the already-published Zariski and
localization results actually used.

The design's inventory is retained exactly: 28 A items and 9 B items.  The A
page is under the 60-item split threshold, so no split is proposed.

### Conventions carried into every claim

- Rings are commutative and unital, and the zero ring is allowed:
  `Spec(0) = ∅`.  A prime ideal remains proper.
- `D(f)` denotes the principal distinguished open of `Spec(A)`, with structure
  sections `O(D(f)) = A_f`.  The construction is on the distinguished-open
  basis and is extended as a sheaf; it does not claim an unintroduced general
  theory of regular functions on arbitrary schemes.
- `Spec(A)` means the resulting locally ringed space.  A ring map `A → B`
  induces `Spec(B) → Spec(A)` by contraction, so coordinate rings run in the
  reverse direction.
- At `p`, `κ(p) = O_p/m_p = A_p/pA_p`, canonically `Frac(A/p)`.  A closed
  point is topological; a classical `k`-point is used only for a reduced,
  finite-type `k`-algebra over an algebraically closed field.
- An integral affine scheme has a nonzero domain coordinate ring, equivalently
  is nonempty, reduced, and irreducible in the stated affine setting.  An
  infinitesimal thickening here is only the affine nilpotent quotient map
  `Spec(A/I) → Spec(A)`.
- The absolute functor of points is `h_X(R) = Hom_Sch(Spec(R), X)` on
  commutative test rings.  For `X = Spec(A)`, it is identified with
  `Hom_CRing(A, R)`.  The affine-line example correctly uses the *relative*
  assertion `Hom_k-Alg(k[t], R) ≅ R` for a specified `k`-algebra `R`; it does
  not falsely identify all absolute ring maps `k[t] → R` with elements of `R`.
- The quasi-compactness corollary inherits the library's stated choice
  convention from `thm-prime-spectrum-is-compact`.

### Item ledger and dependency rationale

The manifest holds the exact direct `deps` arrays and proof strategies below;
the arrows here show the intended proof closure rather than adding unstated
requirements.

| Items | Exact planned claim | Dependency rationale |
| --- | --- | --- |
| `def-affine-scheme-spectrum` | Name the locally ringed spectrum of a ring. | Uses the published prime-spectrum topology and ringed/locally-ringed-space definitions. |
| `def-structure-presheaf-on-basic-opens` → `lem-structure-presheaf-basic-open-well-defined` → `thm-structure-sheaf-affine-scheme` | Put `A_f` on `D(f)`, prove its basis compatibility, then extend it to `O_Spec(A)`. | Uses localization universality, distinguished-open covers/refinement, and the published basis-sheaf criterion. |
| `thm-sections-basic-open-affine-scheme` → `thm-stalk-structure-sheaf-prime-localization` → `cor-spectrum-with-structure-sheaf-locally-ringed` | Compute `O(D(f))`, then `O_p = A_p`, then localness of every stalk. | The stalk proof needs the preceding basic-open calculation and published `A_p` localness. |
| `def-residue-field-scheme-point`; `thm-global-sections-affine-scheme`; `lem-spectrum-localization-open-immersion` | Define `κ(p)`; recover `A` from global sections; identify `Spec(A_f)` with `D(f)` as locally ringed spaces. | Respectively use the local stalk, `D(1)`, and the published localization-spectrum homeomorphism. |
| `def-affine-scheme` → `def-morphism-affine-schemes-from-ring-map` → `lem-spectrum-map-stalk-homomorphisms-local` → `thm-affine-scheme-ring-anti-equivalence` → `cor-affine-scheme-isomorphism-ring-isomorphism` | Define affineness, construct morphisms from ring maps, verify local stalk maps, and prove the anti-equivalence. | Global sections and localization sections give both composites; all maps remain contravariant. |
| `def-closed-point-scheme`; `lem-classical-points-inside-affine-scheme`; `def-generic-point-irreducible-closed-subset`; `thm-spectrum-sober` | Separate closed, classical, and generic points, then prove affine spectra sober. | Uses published maximal-ideal, irreducible-closed-set, closure, and T0 results. |
| `def-reduced-affine-scheme`; `def-integral-affine-scheme`; `def-nonreduced-infinitesimal-thickening-affine`; `def-dual-numbers-scheme` | Coordinate-ring definitions of reduced/integral, affine nilpotent thickening, and dual-number scheme. | Uses reduced/domain/nilpotent and quotient-spectrum results; no general closed-subscheme machinery is presumed. |
| `def-functor-of-points-affine-scheme` → `thm-affine-schemes-determined-by-functor-of-points` | Represent affine schemes by ring-valued points and apply Yoneda. | Uses the proved affine anti-equivalence and published Yoneda lemma. |
| `lem-basic-opens-quasi-compact` → `cor-affine-scheme-quasi-compact`; `rem-spec-contravariance-and-points` | Show `D(f)` and every affine scheme quasi-compact; consolidate the point/contravariance warning. | Transfers published spectrum compactness through `Spec(A_f) ≅ D(f)` and only synthesizes proved results. |
| `ex-spectrum-field-one-point`; `ex-spectrum-zero-ring-empty`; `ex-spectrum-integers-generic-and-closed-points`; `ex-dual-numbers-one-point-nonreduced` | Work four fundamental spectra, including the zero-ring and nonreduced boundary cases. | Each depends only on A items and published algebra, never another page's B leaf. |
| `ex-spectrum-product-ring-disjoint-union`; `ex-basic-open-affine-line`; `cex-scheme-not-determined-by-underlying-space` | Calculate a product spectrum, a localized affine line, and the one-point topology counterexample. | The counterexample only depends backward on its preceding B examples; no external B item is used. |
| `ex-functor-points-affine-line`; `cex-nonclosed-scheme-point-no-k-valued-coordinate` | Identify the relative points of the affine line over a specified `k`-algebra with elements; use `(0)` in `Spec(k[t])` to separate scheme points from `k`-coordinates. | Uses the polynomial universal property, the published algebra-over-a-ring definition, point functor, residue field, and generic-point items. |

Each of the 37 item objects explicitly has a `deps` array.  No item ID from the
design already occurred in the owned artifacts when this scaffold began; final
collision checking is still recorded below as a validation obligation.

### Source reading and harvested dispositions

The complete harvest is in `frontier-31-batch-12.coverage.json`; every named
heading/result in each recorded range has its individual disposition there.
The independent treatments are:

1. James S. Milne, *Algebraic Geometry*, version 1.10, [AG10 PDF](https://www.jmilne.org/math/CourseNotes/AG10.pdf): table of contents at viewer p. 1; `10.4–10.5` at viewer pp. 2–3; `10.23–10.29` at pp. 8–9; and `10.81–10.82` at pp. 21–22.  This is the eligible full course-note treatment with a harvestable table of contents.  It supplies the finite-type/algebraically-closed-field perspective and the representable-functor route.
2. The Stacks Project, [Section 26.5, tag 01HR](https://stacks.math.columbia.edu/tag/01HR): section heading through Definition 26.5.5, including every assertion of Lemma 26.5.4.  It supplies the general-ring structure-sheaf, section, and stalk computations.
3. The Stacks Project, [Section 26.6, tag 01HX](https://stacks.math.columbia.edu/tag/01HX): section heading through Lemma 26.6.8.  It supplies the affine-category, open-affine, and deferred fibre-product interfaces.

All three URLs were opened in full in the source reader before recording their
locators.  The Milne statements are used with their stated finite-type and
`Spm` qualifications; general commutative-ring claims are grounded in the
Stacks treatment and in already-published localization/Zariski dependencies.
The deliberately deferred associated-module material goes to
`quasi-coherent-and-coherent-sheaves-and-vector-bundles`; affine fibre products
go to `fibre-products-base-change-and-scheme-theoretic-fibres`.  The general
finite-coproduct result is out of scope because this pair proves only its one
product-ring witness.

### Known limits and next action

This page does not build arbitrary schemes by gluing, quasi-coherent modules,
general closed/open immersions, or fibre products.  It also does not equate all
scheme points with `k`-valued points.  Its nilpotent example proves a different
structure sheaf over the same underlying space, not a general subscheme theory.

Next: run JSON, coverage, content-policy, and plan validators; run the source
fetch/liveness tools and record their actual outcome here.  No published
content, plan structure, workflow state, or other batch artifact has been
modified.

## Checkpoint 2026-09-05 — validation and liveness results

Completed checks:

- `node -e` JSON parsing of the manifest and coverage file: **PASS**.
- `node tools/coverage-checklist.mjs research/frontier-31-batch-12.coverage.json --require-destination`:
  **PASS** — 1 A page, 36 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-12.coverage.json`:
  **PASS** — 3/3 source records carry a fetch-verification stamp.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-12.pages.json`:
  **PASS** — 37 scoped items, 0 errors, 0 warnings.  This confirms stable
  item IDs, resolvable item dependencies, no duplicate published claims, and
  no impermissible B-page dependency.
- `git diff --check --` on the three owned paths: **PASS** (no whitespace
  diagnostics).

The shell-network fetch attempt
`node tools/source-fetch-check.mjs --coverage ... --stamp --timeout-sec 15`
returned `EAI_AGAIN` for all three hosts.  The independent URL sweep likewise
reported curl DNS failure and no archive candidate in that shell namespace.
This is not a dead-source finding: immediately afterward the full-source
reader fetched the same recorded URLs directly — Milne as a 41-page PDF and
both Stacks sections as their complete HTML documents.  The coverage stamps
therefore record that exact direct verification method, rather than inventing
byte hashes from the failed shell requests.  No alternate URL or re-sourcing
was necessary, because the original documents themselves were successfully
fetched and reread.

`validate-plan` was run against a temporary splice of the current plan-spec
and this manifest, leaving repository plan structure untouched.  It has one
real error:

```text
[undeclared-prereq] page affine-schemes-and-the-structure-sheaf has an item
depending on zariski-topology-on-prime-spectra, which is NOT in the closure of
its declared requires
```

This is exactly the recorded design/spec discrepancy, not an item-cycle or
missing-ID defect.  As a diagnostic only, a second temporary plan added the
design's `zariski-topology-on-prime-spectra` page edge; the same validator then
returned **OK**, with no item-level cycles, forward references, B-page
dependencies, or unresolved IDs.  That temporary file is under `/tmp` and is
not a proposed repository edit.  Resolving the page-edge drift belongs to the
run-wide stage named in the dispatch; this batch must not alter
`research/plan-spec.json` or its plan structure to clear it.

The repository's live autopilot status currently reports unrelated
`frontier-23`, not `frontier-31`.  It was queried read-only and no workflow
state was touched.  Together with the declared-prerequisite drift, that is an
unresolved handoff obligation.  The mathematical scaffold itself is complete;
the next action is for the run-wide drift owner to reconcile the plan edge,
then re-run the real-plan validator (not the temporary diagnostic splice).

After correcting the affine-line example to its relative `k`-algebra form, the
JSON/deps-array check, coverage checklist, manifest-only content-policy check,
and source-fetch stamp check were all re-run and remained **PASS**.  The real
plan's sole undeclared-prerequisite error and the successful temporary
design-edge diagnostic are unchanged.
