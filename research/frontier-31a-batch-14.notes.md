# frontier-31a / beta / batch-14 — scaffold notes

## Checkpoint 2026-09-05 — source-grounded scaffold complete

This batch owns only `frontier-31a-batch-14.pages.json`, this note, and
`frontier-31a-batch-14.coverage.json`.  No published item, library page, plan
structure, workflow state, or other batch artifact was changed.

### Scope, ordering, and split decision

The task specification and `research/plan-spec.json` agree on A order
`366.061`, B order `366.062`, category `scheme-theory`, the companion pair,
and A prerequisites
`sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` and
`zariski-topology-on-prime-spectra`.  The design labels the same background as
AV-9, AV-10, the Zariski page, and localization; AV-10 is reached through the
specified B prerequisite and the cited localization items are published in its
declared prerequisite closure.  Thus there is no design-vs-spec page-edge
conflict to adjudicate in this batch.

The design inventory is retained: 28 A items and 9 B items, hence 37 total.
The A page is below the 60-item ceiling, so no split is proposed.

### Conventions and boundaries

- All rings are commutative and unital, and the zero ring is allowed.  Thus
  `Spec(0)` is empty and prime ideals are proper.
- `D(f)` is a principal distinguished open in the underlying prime spectrum.
  The construction assigns `A_f` on the distinguished-open basis, proves the
  basis sheaf condition, and only then extends to the structure sheaf.
- `Spec(A)` denotes the resulting locally ringed space after
  `cor-spectrum-with-structure-sheaf-locally-ringed`; before that item the
  scaffold carefully speaks only about the underlying topological spectrum.
- A map `A -> B` induces `Spec(B) -> Spec(A)` by contraction.  The candidate
  sheaf map is constructed before, and proved local on stalks in,
  `lem-spectrum-map-stalk-homomorphisms-local`.
- At a prime `p`, `kappa(p) = O_p / m_p = A_p / pA_p`, canonically
  `Frac(A/p)`.  Closed, generic, and classical `k`-points remain distinct;
  the classical-point result is restricted to reduced finite-type algebras over
  an algebraically closed field.
- An integral affine scheme has a nonzero domain coordinate ring; the affine
  equivalent form is nonempty, reduced, and irreducible.  An infinitesimal
  thickening in scope means only the affine nilpotent quotient map, not a
  general closed-subscheme theory.
- The absolute functor of points is `h_X(R) = Hom_Sch(Spec(R), X)` and is
  **covariant in test rings**.  For `Spec(A)` it is `Hom_CRing(A, R)`.  The
  affine-line example is the relative statement
  `Hom_k-Alg(k[t],R) = R` for a specified `k`-algebra `R`; it does not identify
  arbitrary absolute maps `k[t] -> R` with elements of `R`.
- Quasi-compactness inherits the choice convention of
  `thm-prime-spectrum-is-compact`.

### Planned claims, dependencies, and proof route

The manifest gives every item an explicit `deps` array and its exact proof or
construction strategy.  The dependency-closed authoring route is:

| Items | Exact claim and proof route | Dependency rationale |
| --- | --- | --- |
| `def-affine-scheme-spectrum` | Underlying `Spec(A)`, including `A=0`. | Published prime spectrum, distinguished opens, ringed and locally ringed spaces. |
| `def-structure-presheaf-on-basic-opens`, `lem-structure-presheaf-basic-open-well-defined`, `thm-structure-sheaf-affine-scheme` | Define `O(D(f))=A_f`, establish presentation-independent restrictions and arbitrary-cover compatible gluing on the distinguished basis, then extend by locally representable germ families. | Localization at multiplicative sets, its universal property, the spectrum cover-to-unit-ideal lemma, and the explicit basis-extension construction. |
| `thm-sections-basic-open-affine-scheme`, `thm-stalk-structure-sheaf-prime-localization`, `cor-spectrum-with-structure-sheaf-locally-ringed` | Compute basic-open sections and stalks, then prove every stalk is local. | The stalk is the colimit over distinguished neighborhoods; `A_p` is already proved local. |
| `def-residue-field-scheme-point`, `thm-global-sections-affine-scheme`, `lem-spectrum-localization-open-immersion` | Define `kappa(p)`, recover `A` from global sections, and identify `Spec(A_f)` with `D(f)` as locally ringed spaces. | The residue-field localization theorem, the `D(1)` calculation, and the prior localization-spectrum homeomorphism. |
| `def-affine-scheme`, `def-morphism-affine-schemes-from-ring-map`, `lem-spectrum-map-stalk-homomorphisms-local`, `thm-affine-scheme-ring-anti-equivalence`, `cor-affine-scheme-isomorphism-ring-isomorphism` | Define affine schemes, construct maps from ring maps, establish local stalk maps, prove the contravariant equivalence, and reflect isomorphisms. | Global and localized section calculations determine both composites and keep coordinate arrows reversed. |
| `def-closed-point-scheme`, `lem-classical-points-inside-affine-scheme`, `def-generic-point-irreducible-closed-subset`, `thm-spectrum-sober` | Separate closed, classical, and generic points, then prove sobriety of an affine spectrum. | Published maximal-ideal, irreducible-closed-set, closure, and T0 results. |
| `def-reduced-affine-scheme`, `def-integral-affine-scheme`, `def-nonreduced-infinitesimal-thickening-affine`, `def-dual-numbers-scheme` | Coordinate-ring definitions of reduced and integral; affine nilpotent quotient; dual-number test scheme. | Reduced/domain and nilpotent-spectrum results plus the constructed affine spectrum map; no general subscheme machinery is assumed. |
| `def-functor-of-points-affine-scheme`, `thm-affine-schemes-determined-by-functor-of-points` | Identify affine points with ring maps and apply Yoneda. | The proved anti-equivalence and the published natural Yoneda bijection. |
| `lem-basic-opens-quasi-compact`, `cor-affine-scheme-quasi-compact`, `rem-spec-contravariance-and-points` | Prove `D(f)` and every affine scheme quasi-compact; consolidate the two reader-facing cautions. | `Spec(A_f)=D(f)`, published spectrum compactness, and earlier items only. |
| `ex-spectrum-field-one-point`, `ex-spectrum-zero-ring-empty`, `ex-spectrum-integers-generic-and-closed-points`, `ex-dual-numbers-one-point-nonreduced` | Work the field, zero-ring, integer, and dual-number spectra. | Each uses explicit A-page structure/localization results and, for the dual-number spectrum, the earlier same-B field calculation permitted by the examples-page leaf rule. |
| `ex-spectrum-product-ring-disjoint-union`, `ex-basic-open-affine-line`, `cex-scheme-not-determined-by-underlying-space` | Work a product spectrum, a localized affine line, and the same-space/different-scheme counterexample. | The counterexample builds only on preceding B examples; no external B leaf is used. |
| `ex-functor-points-affine-line`, `cex-nonclosed-scheme-point-no-k-valued-coordinate` | Identify relative affine-line points with elements and use `(0)` in `Spec(k[t])` to distinguish a generic point from a `k`-coordinate. | The polynomial universal property, relative `k`-algebra convention, residue field, and generic/closed point items. |

No proposed id already exists on disk or appears on another proposed page: the
manifest-only content-policy check below performs the collision and dependency
resolution check.  The one inherited unnecessary edge to
`thm-quotient-is-domain-iff-ideal-prime` was removed from the affine
nilpotent-thickening definition; its homeomorphism claim instead depends on
the exact published nilpotent-spectrum corollary and the constructed quotient
map.

An explicit dependency pass then added only proof-critical published facts to
the worked examples: the field and prime-ideal definitions for the one-point
and zero-ring cases; well-ordering, division, quotient-domain, `Z/pZ`-field,
and integer-domain results for the `Spec Z` classification; the preceding
field example plus the nilpotent-spectrum corollary for dual numbers; and the
product-ring and prime-ideal definitions plus induced spectrum maps for the
product-ring disjoint-union calculation.  These are direct prerequisites of
the stated computations, not added content or a new page edge.

### Source support and complete harvest

The full individual-heading harvest and its dispositions are in
`frontier-31a-batch-14.coverage.json`.  Both independent treatments were
opened directly at the recorded URLs and read at the stated locators:

1. James S. Milne, *Algebraic Geometry*, version 1.10,
   [AG10 PDF](https://www.jmilne.org/math/CourseNotes/AG10.pdf): table of
   contents at viewer p. 1; `10.4--10.5` at pp. 2--3; `10.23--10.29` at pp.
   8--9; and `10.81--10.83` at pp. 21--22.  This is the eligible full
   course-note treatment with a harvestable table of contents.  It supplies
   the finite-type/algebraically-closed-field qualifications and the
   functor-of-points route; its `Spm` assertions are not used as evidence for
   unrestricted commutative-ring claims.
2. The Stacks Project,
   [Section 26.5, tag 01HR](https://stacks.math.columbia.edu/tag/01HR): the
   section heading through Definition 26.5.5, including all assertions of
   Lemma 26.5.4.  This is the general-ring source for the localization basis,
   structure sheaf, sections, stalks, and affine-scheme definition.
3. The Stacks Project,
   [Section 26.6, tag 01HX](https://stacks.math.columbia.edu/tag/01HX): the
   section heading through Lemma 26.6.8.  This provides the global-sections
   characterization of morphisms into an affine scheme, anti-equivalence, and
   principal-open affine result.

Associated modules and their exactness are deferred to
`quasi-coherent-and-coherent-sheaves-and-vector-bundles`; affine fibre products
are deferred to `fibre-products-base-change-and-scheme-theoretic-fibres`.
Milne's noetherian finite-basic-cover assertion and the Stacks general
disjoint-union statement are deliberately out of scope for the recorded,
result-specific reasons in the coverage harvest.

### Validation and source-access record

- JSON parse and explicit-deps check: **PASS** — 28 A items, 9 B items, 37
  total; every object has an array-valued `deps` field.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-14.coverage.json --require-destination`:
  **PASS** — 1 A page, 38 harvested results, no errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-14.coverage.json`:
  **PASS** — 3/3 sources carry direct-fetch verification records.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-14.pages.json`:
  **PASS** — 37 scoped items, no errors or warnings.
- `node tools/splice-plan.mjs --run frontier-31a --batch 14 --dry-run`:
  **PASS** — the two pages would splice 37 item records, without modifying the
  plan.
- A non-writing in-memory splice piped to `validate-plan`:
  **PASS** — no item-level cycles, forward references, B-page dependencies, or
  unresolved ids among 748 populated plan pages.  The real plan was not
  modified.
- `git diff --check` on the two scaffold JSON files: **PASS**.

The shell-only URL sweep wrote its diagnostic to
`/tmp/frontier-31a-batch-14-url-liveness.json` and reported `0/3` because that
network namespace could not resolve either source host (`curl: (6) Could not
resolve host`).  It is not evidence that any recorded URL is dead: the direct
browser fetch immediately obtained the exact same URLs as a 41-page PDF and
the complete relevant Stacks HTML sections, which is why the coverage records
the direct verification method rather than fabricating shell byte hashes.  The
URL recovery probe found no alternate archive, but re-sourcing is not warranted
because the original documents themselves were successfully fetched and read.

### Known limits and next action

This pair does not construct arbitrary schemes by gluing, associated or
quasi-coherent modules, general closed/open immersions, affine fibre products,
or a general categorical coproduct theorem.  It also does not identify all
scheme points with classical field-valued points.  The dual-number witness
shows different structure sheaves over a common one-point space, not a general
subscheme theory.

Next action: Step 3 may review this scaffold; Step 5 should author precisely
these 37 items using the recorded source locators and current dependency
statements.  The temporary shell DNS result is a verified-environment
limitation to retain in handoff context, not a source or mathematical blocker.

## Step-5 authoring

Checkpoint, not completion. Authored draft items:
`def-affine-scheme-spectrum`, `def-structure-presheaf-on-basic-opens`,
`lem-structure-presheaf-basic-open-well-defined`,
`thm-structure-sheaf-affine-scheme`,
`thm-sections-basic-open-affine-scheme`,
`thm-stalk-structure-sheaf-prime-localization`,
`cor-spectrum-with-structure-sheaf-locally-ringed`,
`def-residue-field-scheme-point`, `thm-global-sections-affine-scheme`,
`def-affine-scheme`, `def-morphism-affine-schemes-from-ring-map`,
`def-closed-point-scheme`, `def-generic-point-irreducible-closed-subset`,
`def-reduced-affine-scheme`, `def-integral-affine-scheme`,
`def-nonreduced-infinitesimal-thickening-affine`,
`def-functor-of-points-affine-scheme`, `def-dual-numbers-scheme`, and
`rem-spec-contravariance-and-points`.

The source rationale remains Stacks 26.5 for localized-section construction,
stalks, and the affine definition; Stacks 26.6 for contravariant maps; and
Milne AG10 for the point and functor conventions. The zero-ring and
covariant-test-ring conventions are explicit in the newly written text.

Unresolved authoring obligation: the remaining 18 planned items, both library
pages, and the required proof-contract report remain unwritten. No final
precheck, plan, content-policy, or strict proof-contract validation has been
run, and no claim of their success is made.

## Checkpoint — final dependency audit

After adding the elementary, already-published prerequisites needed by the
worked spectra, the manifest still has 28 A items and 9 B items, all with
explicit dependency arrays. Re-ran the explicit-deps, coverage, source-fetch,
content-policy, projected `validate-plan`, dry-run splice, and whitespace
checks: all PASS. No scope, source locator, convention, or unresolved
obligation changed; the next action is Step 5 authoring.

## Step-3 fix pass

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| None issued for batch 14 | No repair required; retained the reviewed scaffold unchanged. | `frontier-31a-alpha-c-step3-scaffold-review.md` gives Batch 14 the verdict `sufficient`; its machine-readable companion records `batch: "14"`, `verdict: "sufficient"`, and `missing: []`.  The review identifies no numbered finding.  I re-opened the complete recorded ranges of Milne AG10 (contents; §§10.4--10.5, 10.23--10.29, and 10.81--10.83) and Stacks tags 01HR (§26.5 through Definition 26.5.5) and 01HX (§26.6 through Lemma 26.6.8).  They support the existing general-ring/localization route, the finite-type qualification on classical points, and the stated deferrals of associated modules and fibre products. | None — `frontier-31a-batch-14.pages.json` and `frontier-31a-batch-14.coverage.json` remain unchanged. |

Post-review checks on 2026-09-05: explicit dependency-array check passed (37/37
items); `coverage-checklist --require-destination` passed (1 A page, 38
harvested results); `source-fetch-check` accepted all 3/3 recorded source
verification records; the batch manifest-only content policy passed (37 items);
the whole-run manifest-only content policy passed (902 items); and
`validate-plan.mjs research/plan-spec.json` passed.  The plan validator's
repository-wide redundant-prerequisite advisories concern existing plan edges;
it reports no cycles, forward references, B-page dependency violations, or
unresolved ids.

## Step-5 authoring

Authored the two draft pages `affine-schemes-and-the-structure-sheaf` and
`affine-schemes-and-the-structure-sheaf-examples`, and all 37 planned draft
items. The A-page completion is
`lem-spectrum-localization-open-immersion`,
`lem-spectrum-map-stalk-homomorphisms-local`,
`thm-affine-scheme-ring-anti-equivalence`,
`cor-affine-scheme-isomorphism-ring-isomorphism`,
`lem-classical-points-inside-affine-scheme`, `thm-spectrum-sober`,
`thm-affine-schemes-determined-by-functor-of-points`,
`lem-basic-opens-quasi-compact`, and `cor-affine-scheme-quasi-compact`, along
with the previously checkpointed A items. The B-page items are
`ex-spectrum-field-one-point`, `ex-spectrum-zero-ring-empty`,
`ex-spectrum-integers-generic-and-closed-points`,
`ex-dual-numbers-one-point-nonreduced`,
`ex-spectrum-product-ring-disjoint-union`, `ex-basic-open-affine-line`,
`cex-scheme-not-determined-by-underlying-space`,
`ex-functor-points-affine-line`, and
`cex-nonclosed-scheme-point-no-k-valued-coordinate`.

The authoring follows the recorded general-ring route in Stacks §§26.5--26.6:
localization sections extend from the distinguished-open basis, stalks are
prime localizations, and global sections control the affine anti-equivalence.
Milne AG10 §§10.24--10.28 and 10.81--10.83 supplies the restricted classical
point and relative functor-of-points conventions. No claim was dropped or
narrowed beyond the manifest: the zero ring, empty spectrum, local stalks,
and the distinction between relative $k$-points and arbitrary absolute ring
maps are explicit. The only repair was the required canonical phase numbering
and one-row-per-proof-step formatting; it did not change a claim.

`research/frontier-31a-batch-14.proof-contracts.json` contains 24 contracts
for all proof-bearing items, including exact dependency-fact quotations, step
maps, and every standard boundary disposition. No blocker remains.

Final checks on 2026-09-05: explicit-path `precheck.mts` passed all 24
proof-bearing files (0 failures); `validate-plan.mjs research/plan-spec.json`
passed with no cycles, forward references, B-page dependencies, or unresolved
ids; `content-policy.mjs research/frontier-31a-batch-14.pages.json` passed 37
scoped items with 0 errors and 0 warnings; and strict `proof-contract.mjs`
passed all 24/24 contracts with 0 errors and 0 warnings. The plan validator
reported only its repository-wide pre-existing redundant-prerequisite
advisories.
