# Step 3a scope review — A/B pair `tensor-coherence-and-algebraic-descent`

Run `frontier-42-coxeter-32` · role alpha · batch 1 · design label HH-1 · orders 1688/1689.

- A page: `tensor-coherence-and-algebraic-descent` (kind A, category `hopf-hecke-algebras`).
- B page: `tensor-coherence-and-algebraic-descent-examples` (kind B).
- Decision: **`sufficient`** — scope only. No item approval, no owner record, no scaffold edit.
  Receipt: `research/frontier-42-coxeter-32-step3a-review-tensor-coherence-and-algebraic-descent.json`.

## Inputs read

- `research/frontier-42-coxeter-32-batch-1.pages.json` (both pages, all 15 items: statements,
  strategies, deps, sources, `axiom_use`, dependency levels), `...-batch-1.coverage.json`,
  `...-batch-1.notes.md`, `...-batch-1.cross-batch-dependencies.json` (`[]`).
- Design: `research/plan-hopf-hecke-algebras-track.md` §HH-1 (lines 131–156) and the
  provider table (lines 95–113); `research/hopf-hecke-scaffold/inventory.json` (HH-1: the
  same 10 item ids/contracts); `research/hopf-hecke-scaffold/independent-audit.md` /
  `hopf-source-report.md` as cited by the step-1 note; `research/plan-spec.json`
  (orders 1688/1689, the 8 `requires`; planned pages keep empty item arrays, so the run
  manifest is the item-level record).
- Owner/plan: `research/frontier-42-coxeter-32-owner-scope.json` (HH-1 is one of the two
  owner-approved additional supplier pairs), `...-owner-authoring-direction.md`,
  `...-scope-ledger.json` (both pair pages listed; `allow_in_run_dependencies: true`),
  `...-alpha-step1-drift.md` §tensor-coherence (`VERDICT: no-drift`, "No prerequisite gap").
- Library role: `library/hopf-hecke-algebras/tensor-coherence-and-algebraic-descent{,-examples}.md`;
  the current statements of the published suppliers consumed by the pair; the two in-run
  consumer pages (batches 2–3).

## 1. Prose design versus scaffold (A page)

The native prose page, the plan contract table and the machine inventory agree item-for-item;
the scaffold keeps all 10 ids, kinds and order, and nothing beyond them.

| Design contract (§HH-1) | Scaffolded item | Coverage |
|---|---|---|
| `def-hh-scalar-and-tensor-conventions` | A1: field/label, `V⊗W` structure, finite-sum spanning, left-associated powers `V^{⊗0}=k`, empty tensor as unit, `A^op`, finite sums; parentheses dropped only after A2 | complete |
| `lem-hh-tensor-coherence-on-elementary-tensors` | A2: naturality of `α,σ`, pentagon, unit triangle, both symmetry hexagons, all checked on elementary tensors and extended by spanning; no general coherence theorem | complete |
| `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` | A3: `f⊗id` injective for injective `f`, `ker(p⊗q)=U⊗W+V⊗Z` over a field; AC via `cor-a-linear-subspace-has-a-complement` | complete |
| `lem-hh-coefficient-extension-and-finite-tensor-separation` | A4: `Σ v_i⊗w_i=0` with `(v_i)` independent forces all `w_i=0`; AC declared, finite-dimensional clause choice-free; explicitly the infinite-dual/rational-coaction justifier | complete |
| `lem-hh-finite-tensor-duality-and-canonical-coevaluation` | A5: `V*⊗W*→(V⊗W)*` isomorphism in finite dimensions, basis-independent `Σv_i*⊗v_i`, evaluation/coevaluation zigzags; infinite surjectivity not claimed and refuted by B5 | complete |
| `lem-hh-free-associative-ring-and-relations-descent` | A6: `R⟨S⟩` free on finite words for commutative `R`, universal property, two-sided ideal description, quotient universal property; field case recovers the published tensor algebra | complete |
| `lem-hh-universal-presentations-and-base-change` | A7: `S⊗_RR⟨X⟩≅S⟨X⟩`, quotient base change `(S⊗A)/(im S⊗I)≅S⊗(A/I)`, free-basis transport; no flatness or freeness of `S` over `R` | complete |
| `lem-hh-finite-polynomial-and-localization-constructions` | A8: `R[x_1,…,x_n]` monomial basis and universal property; Laurent ring `Λ_{R,n}` with unit-valued universal property; domain-ness only over a domain; fraction fields of `R[x_1,…,x_n]` and `Λ_{R,n}` | complete |
| `lem-hh-finite-matrix-and-module-preliminaries` | A9: right inverse ⇒ unit determinant ⇒ basis; rank invariance under field extension; finite composition series; splitting in a finite sum of simples; nilpotent ⇒ trace zero; no arbitrary Choice | complete |
| `lem-hh-regular-module-detects-linear-and-tensor-identities` | A10: evaluation at `1`/`1^{⊗n}` detection, multilinear-to-linear agreement on pure tensors, quotient-descent warning | complete |

Convention/hypothesis ledger (scaffold statements; proofs are Step-3b work and are not
assessed here):

- Scalars are a field `k` throughout the Hopf-branch items; the Hecke branch's commutative
  coefficient rings enter only through A6–A8 (commutative `R`, `Λ_{R,n}`, base change).
- A3 and A4 are the only items that state `Assume the Axiom of Choice`; both record the single
  complement use in `axiom_use`, and A4 records the finite-dimensional case as choice-free.
  No other item invokes `def-axiom-of-choice`.
- A5 states the dual identification only for finite dimensions; B5 supplies the
  infinite-dimensional failure.
- A7 assumes no flatness/projectivity; A8 makes no domain assertion over a ring with zero
  divisors; A9 uses only finite selections and maximal finite dimension.

## 2. B companion versus design

The design's Examples sentence ("many finite presentations of `u⊗v` with an invariant
contraction; pentagon on four named vectors; quotient by a one-dimensional subspace; finite
coevaluation in two bases; an infinite-dimensional failure of the tensor-dual
identification") is realized by exactly five items, four examples and one counterexample.
Each states its hypotheses (B4 restricts to characteristic `≠2`; B5 fixes `V=k^{(I)}` and the
functional `L(e_i⊗e_j)=δ_ij`), and B5's failed conclusion is the recorded one (a finite span
of functionals cannot contain the infinite independent family of coordinate functionals).
The B page is a dependency leaf: no page's `requires` and no item outside the pair depends on
any B item, at run level and at plan level.

## 3. Source coverage

Three fetch-verified treatments, re-downloaded by me on 2026-10-07 and reproduced exactly
(bytes and sha256-16 match the coverage stamps; all three URLs live):

| Source | Bytes | sha256-16 | Role |
|---|---|---|---|
| Bergman, *An Invitation to General Algebra and Universal Constructions* v3.4 | 2947784 | `6ed40cf344338e66` | free words/presentations/free algebras (A6, A7, A8) |
| Conrad, *Tensor products* (UConn notes) | 660555 | `c8dd0b6347fc984a` | elementary tensors, coherence, duality, injections/kernels, base change (A1–A5, A7, A10, B1–B5) |
| The CRing Project, Ch. 13 (+ §11.6) | 1759062 | `b5a383bcaacdab54` | localization/fraction fields, base change, right exactness, finite length (A7–A9) |

The coverage file dispositions 23 harvested rows: 6 `included`, 5 `inline`,
8 `already-published`, 3 `out-of-scope` (physics component convention; Bergman §9.4 variety
classification; flatness/projectivity), 1 `deferred` (Conrad §6 torsion/rank over fraction
fields → `hecke-base-change-semisimplicity-and-deformation`). Every one of the 15 items
carries at least one source reference. The `already-published` rows resolve to existing
published items; I read the statements of the load-bearing ones (`thm-universal-property-of-
module-tensor-products`, `thm-tensor-product-basis-from-bases`, `thm-symmetry-and-associativity-
over-a-commutative-ring`, `thm-tensor-product-of-algebras-over-a-commutative-ring`,
`thm-right-exactness-of-tensor-products`, `thm-unit-isomorphisms-for-module-tensor-products`,
`prop-functoriality-of-module-tensor-products`,
`thm-tensor-products-commute-with-arbitrary-direct-sums`, `thm-hom-from-a-finite-dimensional-
space-as-a-tensor-product`, `cor-a-linear-subspace-has-a-complement`) and their hypotheses
match the uses. I additionally spot-read the fetched CRing full text at §11.6 (11.6.22–11.6.25,
modules of finite length) and §13.2 (projective/injective modules) to check A9's citations;
both sections exist as cited. The deferred destination is a planned page (HH-14, order 1714)
whose recorded items cover the deferred regular-trace/fraction-field material; it is not one
of this run's 32 pairs, so that content belongs to a later run.

Advisory (bookkeeping only, no scope action): the coverage file's CRing locator declares only
§§13.1 and 13.3–13.4 ("other chapters consulted only for scope"), while item A9 cites CRing
§11.6 and §13.2 in its own `sources`; similarly the coverage maps Conrad §§5.1–5.4 and §5.16
to the published coherence theorem and to A3 respectively, while items A2 and A4 carry those
locators themselves. The content is present and cited at item level; the owner may reconcile
the coverage locators when convenient.

## 4. Prerequisites and role

- Dependency scan over the current manifests: **129** item dependency edges, **79** distinct
  ids — **74 published** items (all `status: published`) and **5 in-pair** items (A1, A2, A3,
  A5, A6). **Zero** edges target an id absent from both the published library and the current
  scaffold; `manifest-deps` reports 0 errors over the run's 302 items.
- The 8 page `requires` are all published pages, and every published dep's home page lies in
  the transitive `requires` closure of the pair (44 pages). The batch-1 cross-batch ledger is
  `[]`: all suppliers are published or inside the pair.
- Intended role: HH-1 is the owner-approved additional supplier pair for the Hecke branch
  (and the base of the Hopf branch in later runs). In-run consumers:
  `generic-coxeter-hecke-algebras-and-the-standard-basis` uses A6 parts 1–3 in
  `def-hh-universal-coxeter-hecke-parameters-and-presentation`, A8 part 2 for
  `R=Z[v_1^{±1},…,v_c^{±1}]`, and A7 parts 1–3 in `thm-hh-generic-coxeter-hecke-standard-
  basis` part 4 (base change of the presented algebra and free basis `(1⊗T_w)`);
  `coxeter-presentations-exchange-and-reduced-word-theorems` requires the page but consumes
  no HH-1 item directly. Planned consumers outside this run (HH-2…HH-10, HH-13…HH-18) record
  obligations that the plan's provider table maps onto A2 (coherence), A3 (tensor-kernel and
  quotient descent), A4 (AC coefficient separation for infinite coalgebra arguments), A5
  (finite duality/evaluation/coevaluation), A6 (presentations), A8 (Laurent rings and
  fraction fields) and A9 (finite semisimple-submodule facts) — all present.
- **Confirmed unmet prerequisites absent from both the published library and the current
  scaffold: none.** Honest uncertainty: (i) this is a statement/manifest-level check — the
  pair's own item proofs are Step-3b work and no item files exist yet; (ii) consumers outside
  this run were checked at plan/manifest level only; (iii) A3/A4 assume AC by design, and
  whether that hypothesis could be weakened is a proof-strength question outside this scope
  and is not needed by any consumer.

## 5. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 302 items, 0 normalized, 0 errors |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-1.coverage.json --require-destination` | 1 page, 23 results, 0 errors, 1 advisory `coverage-low-yield` (6/23 built; explained by 8 already-published + 5 inline + 4 declined rows) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --pages-file <pair ids>` | exit 0; page order acyclic and consistent; 24 informational `redundant-prereq` notes (retained under plan authority); item-level checks not asserted because planned pages keep empty item arrays in `plan-spec.json` |
| sources | `curl` re-download of the three PDFs | all three live; bytes and sha256-16 reproduce the coverage stamps exactly |
| dependency/closure scan | ad-hoc script over all `batch-*.pages.json` + `items/` | 129 edges resolved; 0 unresolved; closure 44 pages; B page has no external consumer; no page requires the B page |
| drift review | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift`; "No prerequisite gap" for this pair |

## 6. Non-blocking notes

1. Coverage-locator bookkeeping as in §3 (CRing §11.6/§13.2; Conrad row attributions).
2. 24 `redundant-prereq` advisories on the page `requires` (already recorded by step 1;
   retained by plan authority).
3. A3/A4 are the only AC-bearing items and both declare it; consistent with the design's
   explicit complement route. No scope implication.
4. A8 constructs the fraction fields of `R[x_1,…,x_n]` and `Λ_{R,n}` locally from pair
   classes although the library also publishes `def-field-of-fractions` by localization; this
   is the design's recorded choice (self-contained construction for the Hecke branch), not a
   scope gap.
5. Proof correctness and item acceptance are out of role and are not asserted.

## 7. Decision

**`tensor-coherence-and-algebraic-descent`: sufficient.** The planned definitions (tensor
conventions and coherence; free associative `R`-algebra; polynomial/Laurent rings and fraction
fields; finite matrix/module facts), results (coherence diagrams, tensor injections/kernels
over a field, AC coefficient separation with a choice-free finite-dimensional case, finite
tensor duality and coevaluation, relations descent and presentation base change, regular-module
detection) and examples (four computations plus the infinite-dimensional dual counterexample)
adequately cover the intended subject and its supplier role. No omitted topic within the
design or its sources was found, no enrichment or merger is recommended, no unmet prerequisite
was confirmed, and the recorded deferral destination is a live planned page. Owner action:
none required for scope; proceed.
