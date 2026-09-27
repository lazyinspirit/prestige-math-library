# Step 3a scope review — the-modular-function-and-l1-group-algebras

- Run: `frontier-35-ten-categories` (batch 10), role alpha, label
  `step3a-pair-the-modular-function-and-l1-group-algebras-9fc9f7e22a837d17`.
- A page: `the-modular-function-and-l1-group-algebras` (order 510.067,
  representation-theory, 21 items).
- B page: `the-modular-function-and-l1-group-algebras-examples` (order 510.068,
  4 items); companion pointers agree A↔B and the B page requires only its A page.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, and no edit to any scaffold, manifest, coverage,
  plan or page.

## Evidence read

- `research/frontier-35-ten-categories-batch-10.pages.json` (21 A + 4 B items,
  all with explicit `deps`), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (owned content `[]`);
  `research/frontier-35-ten-categories-scope-ledger.json` (this A page listed
  with batch 10) and `research/frontier-35-ten-categories-owner-authoring-direction.md`
  (defers batch-8's coherent-sheaf pair and one batch-13 Easton item; names no
  change to batch 10, so the RG-19 scope stands).
- Prose design: `research/plan-representation-theory-groups-track.md` RG-19
  (heading line 1458, A table 1462-1490, hard proof plan 1491-1493, B table
  1497-1503), the track conventions fixing the modular convention at lines
  198-212, the dependency-closure audit at lines 2050-2054, the per-pair
  independent-source row at line 2296 (Kowalski plus Bekka-de la Harpe-Valette,
  additional check Vogan), the harvest crosswalk RG-19/H1-H5 at lines
  2418-2422, the binding `requires` row at line 2687, and the §15.5 inventory
  count "RG-19 19" at line 2817. Placement cross-check:
  `research/plan-fourier-analysis-track.md` lines 15-23 (FR-15-FR-20 are
  spliced after RG-18 and before RG-19; that file constrains order only).
- Current plan: `research/plan-spec.json` rows 510.067/510.068 carry empty item
  arrays and exactly the manifest `requires`; the four declared prerequisite
  pages (`haar-measure-existence-and-uniqueness` 506.1,
  `product-measures-and-the-fubini-tonelli-theorems` 288.021,
  `the-lp-spaces-holder-minkowski-and-riesz-fischer` 288.027,
  `banach-algebras-spectrum-and-holomorphic-functional-calculus` 288.079) are
  all published `library/` pages with nonempty item inventories.
- Drift review: `research/frontier-35-ten-categories-alpha-step1-drift.md`
  lines 99-103 record `no-drift` for this page and note only that "the inverse
  convention must still be checked during authoring" (checked below).
- Step-1 readiness records `research/frontier-35-ten-categories-step1-<item>.json`
  for all 25 pair items: every record is `decision: ready` with examined
  dependency IDs and a named source locator; none is escalated or source-dropped.
- Source re-verification by this review from the batch-10 extracted texts
  `/tmp/frontier35-b10-{kowalski,bekka,loomis,vogan}.txt` (fetched
  2026-09-23, matching the coverage's fetch stamps
  `f63d9c26ec965b9c`/338 pp., `0281823290dfb42e`/523 pp.,
  `05a32c7db1e616af`/198 pp.).

## Scope against the prose design

All 19 designed RG-19 identifiers are present in the manifest, in design order,
and none was dropped, weakened or moved: the modular function's defining lemma,
definition, continuity-homomorphism theorem and inversion formula; the
unimodularity definition and the compact/discrete/abelian proposition; the
convolution definition with its Cc-closure/associativity and L¹-norm lemmas;
the modular involution with its isometry/anti-homomorphism lemma; the
Banach-*-algebra theorem; the contractively bounded approximate identity; the
left/right regular representation definition and the unitarity/strong
continuity/faithfulness theorem; and the four B leaves (affine modular
computation, discrete convolution, compact convolution, naive-inversion
counterexample).

Six further A items beyond the design table are genuine local prerequisites of
the design's own hard proof plan (plan lines 1491-1493) and each is justified in
its Step-1 record and mapped to a source row: the complex L¹/L² and C_c
definition (the published base `def-calligraphic-l-p-on-a-measure-space` is
real-valued), the Cc convolution definition, complex L¹/L² completeness and C_c
density (needed to extend convolution by completion), the nonunital
Banach-*-algebra convention (the published `def-unital-banach-algebra` requires
a norm-one unit, so it cannot state L¹(G) for nondiscrete G), strong continuity
of left translations on L¹/L² and of the corrected right translation on L²
(used by the approximate identity and the regular representations), and the
unit-iff-discrete proposition (design: "treat a discrete group (where L¹ is
unital) separately from a nondiscrete group"). All six are inside the page's
declared subject, keep the A inventory at 21 < 60 rows, and are disposed
`included` in the coverage's canonical list, so they are scaffolding for the
designed scope rather than scope expansion.

Two design-vs-manifest deltas were examined and are correct as built:

1. The design's purpose text for the affine example calls the group amenable;
   the manifest example claims only the modular computation and
   nonunimodularity. Amenability and nonunimodularity together are owned by the
   later pair via RG-27's `ex-the-real-affine-group-is-amenable-and-nonunimodular`
   (plan line 1885, "combine this with RG-19's modular computation"), so the
   B page here must not assert amenability. No designed result is omitted.
2. The affine example restricts to the identity component `a>0` while Bekka
   Example A.3.5(iv) states the group over `R*`; the restriction avoids the
   disconnected-sign convention and still matches the design's statement
   ("compute Δ ... in the source's coordinates"). This is a narrowing with a
   recorded reason, not a weakened claim.

## Source coverage

The page's coverage block has three fetch-verified full-text treatments and 25
canonical rows (21 A + 4 B, all `included`), plus source-content rows including
explicit `out-of-scope` results with item-specific reasons (Kowalski
Exercise 5.2.5(1) Haar mass iff compact; Kowalski Proposition 5.3.1 integrated
representation and its right-Haar adjoint formula; Kowalski Proposition 5.3.5
L¹-approximation of representation operators; Bekka Remark A.3.1 Weil converse;
Bekka Proposition A.4.1 left/right regular equivalence; Loomis §31A general
Lp Young inequality and L1-by-Lp a.e.-convolution corollary; Loomis §31C
commutativity classification). I checked that each omission is owned elsewhere
or unused: integrated forms and the L¹-to-unitary correspondence are RG-25 items
(plan lines 1756-1759), Young/commutativity belong to the abelian and
harmonic-analysis pages, and no declared dependency of this pair needs them.

Load-bearing locators I re-read and verified against the extracted texts:

- Bekka Appendix A: the modular identity
  `∫ f(xg⁻¹)dμ(x) = Δ_G(g)∫ f dμ` with `μ_g(B)=μ(Bg)=Δ_G(g)μ`
  (printed p. 318), Proposition A.3.3 continuity, Lemma A.3.4
  `dμ(x⁻¹)=Δ_G(x⁻¹)dμ(x)` with the `c²=1` argument, the unimodularity
  equivalence, and Example A.3.5(iv) `|a|⁻²da db` left Haar with
  `Δ = |a|⁻¹` (printed pp. 319-320). Substituting `g→g⁻¹` shows Bekka's
  convention is exactly the page's displayed definition, so the drift
  review's "inverse convention" item is discharged: the definition, the
  inversion formula, the involution `f*(x)=Δ_G(x⁻¹)conj(f(x⁻¹))` and the right
  action factor `Δ_G(g)^{1/2}` are mutually consistent (left-Haar unitarity
  check `∫Δ(g)|ξ(xg)|²dμ = Δ(g)Δ(g⁻¹)‖ξ‖²`).
- Kowalski §5.2-5.3: Exercise 5.2.5(2) modular homomorphism, (3) compact
  unimodularity, (4) right/left conversion, (5) affine example (printed
  pp. 216-217); Proposition 5.2.6 regular representation; Exercise 5.3.4
  compact convolution with the page's convolution order
  `(φ*ψ)(g)=∫φ(x)ψ(x⁻¹g)dx`; Lemma 5.5.2(2) with the first-slot-linear
  convention `∫⟨π(g)v₁,w₁⟩⟨π(g)v₂,w₂⟩dμ = ⟨v₁,v₂⟩⟨w₂,w₁⟩/dim H`. The B-page
  compact-convolution formula `(⟨u,z⟩/dim π)·f^π_{w,v}` follows from this
  relation exactly; I re-derived it independently and it agrees.
- Loomis §§30-31: modular function and continuous-homomorphism law (30A),
  inversion formula (30B), convolution `[f*g](x)=∫f(y)g(y⁻¹x)dy` and the
  Banach algebra with involution `(f*g)* = g**f*` (31A-31B), identity iff
  discrete with `e(x)=1` at `x=e` and the open-set mass bound (31D), and the
  approximate identity in Lp norm for all `1≤p<∞` (31E). These back the
  design's plan directly, including the discrete/nondiscrete split.

The design names a fourth source, Vogan's note, as an "additional check"
(line 2296); the batch notes state it was read completely but is not an active
backing source because it defers proofs. I verified that record against the
extracted note: equation (2b) states exactly this page's modular convention,
the note redirects missing proofs to Nachbin, and its substantive content
(rho-functions, quotient integration, `Δ = |det Ad|`) belongs to RG-23 and the
Lie setting, not to this pair. No fabricated or shifted citation was found in
the rows I re-read.

## Dependency integrity and role in the library

- Page closure: the transitive `requires` closure of the A page is 191 pages,
  every one with smaller plan order than 510.067, no duplicate orders in the
  plan, and all 25 declared item dependencies resolve to a page inside that
  closure or to the pair's own A page (0 unresolved, 0 outside-closure, no A-to-B
  dependency).
- Item closure: recursive declared-edge traversal from the 25 owned items
  reaches 973 items = 25 owned + 948 `items/*.md` files that all carry
  `status: published`, with 0 unknown IDs, 0 cycles, 0 `proved_here: false`
  items, and 0 in-run items from other pairs (consistent with the owned
  `cross-batch-dependencies.json` = `[]`). No planned-but-unbuilt prerequisite
  is consumed.
- Role: per the design's binding table (line 2687) the pair feeds
  `unitary-representations-positive-type-and-gns` (line 1506),
  `complete-reducibility-for-compact-groups` (L2 convolution/Hilbert-Schmidt
  input), `peter-weyl-theory-for-general-compact-groups`,
  `induced-unitary-representations-of-locally-compact-groups` (rho-functions
  with Δ_G/Δ_H, plan line 1668), `group-c-star-algebras-and-the-fell-unitary-dual`
  (integrated forms, full/reduced norms, plan lines 1756-1763) and
  `amenability-reiter-nets-and-folner-conditions` (Reiter/L¹ algebra and the
  affine modular computation). The items supplying those interfaces — modular
  function and inversion formula, L¹ convolution with involution and norm
  bound, contractive approximate identity, regular representations — are all
  in the manifest. `research/published-consumer-supplier-ledger.md` has no
  entry naming this draft pair; the published prerequisites it reaches carry
  only resolved/known items (e.g. the repaired
  `thm-riesz-fischer-completeness-of-l-p`,
  `thm-c-c-is-dense-in-l-p-for-radon-measures` and the ACC-aware
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`).

## Uncertainty and observations for the owner (not scope findings)

1. **Choice propagation on the four B leaves.** The A items declare
   `def-axiom-of-choice` where Haar uniqueness/cutoffs are used, but the four B
   items declare no axiom dependency while citing suppliers that assume AC or
   ACC (`cor-normalized-haar-probability-on-a-compact-group` assumes AC and
   says so; `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
   assumes the Axiom of Countable Choice and declares `def-countable-choice`).
   Published RG-18 B examples show the house convention is to declare the
   assumption (`ex-normalized-haar-measure-on-a-finite-group`,
   `ex-lebesgue-measure-as-haar-measure-on-rn`, both with `def-axiom-of-choice`).
   At authoring, each B proof should either be choice-free or declare the exact
   choice principle it inherits. This is a contract detail for Step 3b/Step 5,
   not an omission from the pair's subject.
2. **The compact-convolution example must stay local.** Its statement is a
   compact-group matrix-coefficient computation whose proof needs the
   finite-dimensional averaging/Schur step (averaged rank-one intertwiners,
   trace normalization). The design places general Schur orthogonality at
   RG-21 (`thm-schur-orthogonality-for-compact-groups`, order 510.071), so the
   example's recorded inline proof route must be kept; citing RG-21/RG-20 items
   would create a forward edge. The irreducible/unitary vocabulary is
   available from published definitions stated for arbitrary groups
   (`def-finite-dimensional-representation-of-a-group-over-a-field`,
   `def-subrepresentation-and-irreducible-representation`,
   `def-intertwiner-equivalent-and-faithful-representations`), which the
   author should cite or add locally.
3. **Inventory bookkeeping.** The design's §15.5 count for RG-19 is 19 (the
   crosswalk rows); the manifest holds 25 because the six local scaffolding
   items above are new. The coverage record was updated to dispose all 25;
   the design prose's §12 crosswalk still shows only the 19. No action is
   required for scope, but the count difference should not later be read as
   drift.
4. **Edition/pagination drift already handled.** The design cites Bekka
   Appendix A §§A.3-A.4 as pp. 299-306 (one printing); the fetch-verified copy
   prints the same material on pp. 316-323 and the coverage/Step-1 records use
   the fetched locators. Mathematics is the same document.
5. Proof correctness, statement-by-statement source fidelity, dependency
   minimality and AC bookkeeping were **not** judged here; those belong to
   Step 3b and Step 5.

## Checks run

| Check | Result |
|---|---|
| `coverage-checklist.mjs research/frontier-35-ten-categories-batch-10.coverage.json` | exit 0: 2 pages, 140 harvested rows, 0 errors, 0 warnings |
| All 25 pair items present in the coverage dispositions (canonical plus source rows) | 25/25, 0 missing |
| `manifest-deps.mjs` on the batch manifest | exit 0: 63 items, 0 missing, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic/consistent, no item cycles, forward references, B-page dependencies or unresolved IDs among the 1188 pages with item lists |
| Page-level closure of the A page `requires` | 191 pages, all with order < 510.067; 0 declared dep pages outside |
| Item-level closure of the 25 owned items | 973 items (25 owned + 948 published), 0 unknown, 0 cycles, 0 foreign in-run suppliers, 0 `proved_here: false` |
| Design-to-manifest identifier diff (RG-19 section) | 19/19 design IDs present; 6 extra IDs, each a recorded local prerequisite |
| Convention audit (definition, inversion, involution, right action) | consistent with Bekka A.3, Loomis 30B/31B and Vogan (2b); affine Δ = a⁻¹ matches Bekka A.3.5(iv) on `a>0` |

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — the modular function derived from a fixed left Haar measure, its
continuity/inversion consequences and the unimodular boundary classes, and the
group algebra L¹(G) with convolution, modular involution, Banach-*-algebra
structure, contractive approximate identity, unit-iff-discrete and the
corrected regular representations — at design breadth, with two independent
full treatments plus a third book treatment, with every designed row and every
added local prerequisite source-mapped, and with the pair's downstream
interfaces for RG-20, RG-21, RG-22, RG-23, RG-25 and RG-27 present in the
manifest. Recorded: **sufficient**.

## Appendix — inventory this decision is bound to

Scope receipt `research/frontier-35-ten-categories-step3a-review-the-modular-function-and-l1-group-algebras.json`
(sha256 `7cc339f3cda010e57eba8b5186ccd19ec34f462d41b753cd155725397ecb3208`)
is hash-bound to the current manifest pages. A page (21 items, manifest order):

1. `lem-right-translation-scales-left-haar-measure` (lemma)
2. `def-modular-function-of-a-locally-compact-group` (definition)
3. `thm-the-modular-function-is-a-continuous-homomorphism` (theorem)
4. `lem-haar-change-of-variables-under-inversion` (lemma)
5. `def-unimodular-locally-compact-group` (definition)
6. `prop-compact-discrete-and-abelian-groups-are-unimodular` (proposition)
7. `def-complex-haar-lp-spaces-and-compactly-supported-functions` (definition, added)
8. `def-compactly-supported-convolution-on-a-group` (definition, added)
9. `lem-convolution-preserves-cc-and-is-associative` (lemma)
10. `lem-l1-convolution-norm-inequality` (lemma)
11. `lem-complex-haar-l1-and-l2-are-complete-and-cc-dense` (lemma, added)
12. `def-convolution-on-cc-and-l1-of-a-group` (definition)
13. `def-involution-on-l1-of-a-group` (definition)
14. `lem-the-l1-involution-is-isometric-and-reverses-convolution` (lemma)
15. `def-banach-star-algebra-without-required-unit` (definition, added)
16. `thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` (theorem)
17. `lem-haar-translations-are-strongly-continuous-on-lp-one-and-two` (lemma, added)
18. `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` (theorem)
19. `prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` (proposition, added)
20. `def-left-and-right-regular-unitary-representations` (definition)
21. `thm-regular-representations-are-unitary-and-strongly-continuous` (theorem)

B page (4 items): `ex-modular-function-of-the-affine-group-of-the-line` (example),
`ex-convolution-on-a-discrete-group` (example),
`ex-convolution-on-a-compact-group` (example),
`cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group`
(counterexample). Items marked "added" are the six local prerequisites discussed
above; the other 19 are the design's RG-19 rows. Next action: Step 3b authoring
may proceed for this pair under this scope; the owner should read the
"Uncertainty and observations" section before or during authoring.
