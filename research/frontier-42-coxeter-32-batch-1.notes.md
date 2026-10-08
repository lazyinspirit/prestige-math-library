# Frontier 42 (Coxeter build) — batch 1 Step 1 notes

**Owner:** beta, batch 1. **Pair:** `tensor-coherence-and-algebraic-descent` /
`tensor-coherence-and-algebraic-descent-examples`, orders 1688/1689, category
`hopf-hecke-algebras` (design label HH-1). This file records scaffold decisions and
evidence, not Step 3 mathematical approval; owner reconciliation and the engine gate follow.

## Scope, plan and binding inputs

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-42-coxeter-32-owner-authoring-direction.md`, the batch task
`research/frontier-42-coxeter-32-beta-1.task.md`, the design
`research/plan-hopf-hecke-algebras-track.md` §HH-1 (line 131 ff.), the machine inventory
`research/hopf-hecke-scaffold/inventory.json` (HH-1), `research/hopf-hecke-scaffold/
independent-audit.md`, `research/hopf-hecke-scaffold/hopf-source-report.md`, the canonical
page prose `library/hopf-hecke-algebras/tensor-coherence-and-algebraic-descent{,-examples}.md`,
the current `research/plan-spec.json`, the batch shells, and the step-1 drift report
(`research/frontier-42-coxeter-32-alpha-step1-drift.md`, verdict no-drift for this page).

The pair is unchanged: order, category, title, companion and the eight page `requires` are
exactly the plan's. The A manifest carries the design's ten item IDs unchanged; the B
manifest carries the five examples promised by the design's Examples paragraph. The owner
direction's HH-1 clauses (retain the distinct HH-1 proof homes; state AC where genuinely
needed; no source substitution for local proofs) are respected.

## Design / inventory reconciliation (recorded conflicts and route decisions)

1. **A8 polynomial half.** The design says "construct multivariate polynomial and Laurent
   rings from finitely supported monomials"; the page's `requires` closure contains
   `polynomial-rings-and-roots`, so the polynomial half consumes the already published
   iterated construction `def-multivariate-polynomial-ring-by-iteration` and its domain
   corollary, and proves the multivariate universal property by iteration. The Laurent ring
   and the fraction field are constructed locally as designed, and no domain assertion is
   made over a coefficient ring with zero divisors. No plan edge was changed.
2. **Inventory edge A8 → A6.** The machine inventory proposes `lem-hh-free-associative-ring-
   and-relations-descent` as an A8 dependency, but the polynomial/Laurent/fraction-field
   construction does not use the free algebra. The recorded `deps` are the actual use set
   (published suppliers only, level 0); the inventory's proposed edge is dropped as a proof
   dependency, not as content.
3. **A3/A4 Choice route.** The design's "extend finite bases locally; arbitrary complements
   use explicit AC" is realised as: complements `V'=f(V)⊕C`, `V=U⊕V₁`, `W=Z⊕W₁` through
   `cor-a-linear-subspace-has-a-complement` plus distributivity of `⊗` over finite direct
   sums for A3; and reduction of the relation to `span(v_i)` through A3 followed by
   coordinate contraction for A4. Both statements declare AC and `axiom_use` records that
   nothing else consumes it; A4's finite-dimensional clause is choice-free.
4. **A9 rank invariance.** The design says "invariance of finite matrix rank under field
   extension by minors". The scaffold records the row-space/span proof instead: an `F`-basis
   of the row space stays `E`-independent and `E`-spanning. This is the same claim; the
   library has no proved "rank = largest nonvanishing minor" theorem to cite, so the minor
   route would have needed an extra local supplier.
5. **A9 nilpotent trace.** The library's `def-nilpotent-endomorphism` lives on
   `triangularisation-and-jordan-canonical-form`, outside this page's closure, so the item
   states `T^r=0` inline and cites `def-trace-of-an-endomorphism`.
6. **Dependency additions.** Beyond the inventory's proposed edges the manifest records the
   suppliers the recorded strategies actually use (complement/distributivity items for A3;
   free-module and tensor universal-property items for A6; right-exactness and product-basis
   items for A7; the polynomial/fraction-field items for A8; the determinant/rank/trace and
   module-length items for A9). Every added edge is published and inside the page's
   `requires` closure.

## Inventory, levels and dependency audit

The A manifest carries 10 items and the B manifest 5. Dependency levels (in-run predecessors
only) are 0 for A1, A6, A8, A9, A10; 1 for A2, A3, A5, A7, B1; 2 for A4, B2, B3, B4, B5;
maximum 2. There are 15 in-run edges: A2←A1; A3←A1; A4←A1,A3; A5←A1; A7←A6; B1←A1;
B2←A1,A2; B3←A1,A3; B4←A1,A5; B5←A1,A5. No item depends on a later page, none on a B-page
item from outside its own page, and there is no cycle.

Seventy-four distinct published items are cited. I read the statements and the relevant
proof paragraphs of each. Checks actually made, item by item:

- **Conventions/coherence (A1, A2).** Hypotheses (field scalars, commutative base ring for
  algebras), the direction of the unit triangle `(id_M⊗λ_N)∘α_{M,k,N}=ρ_M⊗id_N`, and both
  hexagon orientations were verified on elementary tensors; the spanning step cites the
  generators-and-relations construction, whose Statement records that every tensor is a
  finite sum of elementary tensors.
- **Injections and kernels (A3).** The retraction identity
  `(g⊗id)∘(f⊗id)=id` closes the injectivity half; the kernel computation uses complements,
  distributivity over direct sums, the unit isomorphisms and the second isomorphism
  theorem. The containment `im(U⊗Z)⊆im(U⊗W)` inside `V⊗W` is stated explicitly, since
  `U⊗W+V⊗Z=U⊗W⊕V₁⊗Z` depends on it.
- **Coefficient separation (A4).** The reduction uses A3, so AC is inherited exactly once;
  the finite-dimensional clause extends a finite independent list by
  `thm-dimension-of-a-linear-subspace` claim 3, which is choice-free.
- **Finite duality (A5).** The image of `v_i^*⊗w_j^*` is the dual basis vector of the
  product basis, and `Σv_i^*⊗v_i` maps to `id_V` by the coordinate expansion; uniqueness of
  the preimage of `id_V` gives basis-independence. Infinite-dimensional surjectivity is
  explicitly not claimed and is refuted on the B page.
- **Free algebra and presentations (A6, A7).** The two-sided ideal description is proved
  locally (the published commutative-ring description theorem does not cover
  `R⟨S⟩`); the base-change argument uses right exactness, not flatness, and the basis
  transport uses `thm-tensor-product-basis-from-bases`.
- **Polynomial/Laurent/fraction fields (A8).** Laurent domain-ness is proved by a
  translation-invariant linear order on `ℤⁿ` and leading coefficients; the fraction field is
  built from `(f,g)` with `fg'=f'g`, with the domain property supplying transitivity and
  cancellation.
- **Finite matrix/module facts (A9).** Right inverse ⇒ unit determinant uses determinant
  multiplicativity and the adjugate criterion; composition series are built by maximal
  finite dimension; the splitting of a submodule of a finite sum of simples is the graph
  induction on the projected image; nilpotent trace uses the kernel filtration and an
  adapted ordered basis (strictly upper triangular matrix).
- **Detection principle (A10).** Evaluation at `1` and `1^{⊗n}`, the multilinear-to-linear
  correspondence, and the descent warning (`A^{⊗n}→(A/I)^{⊗n}` is surjective but
  surjectivity is not descent).
- **Axiom ledger.** `def-axiom-of-choice` occurs only in A3 and A4, both of which state AC;
  their `axiom_use` fields name the single complement use. No B-page item makes a
  choice-requiring claim (B3's finite computation is explicit).

## Source evidence and dispositions

Three independent treatments were downloaded, inspected as full text and stamped with
`source-fetch-check --stamp` on 2026-10-06 (no retrieval failure, so no drop or
alternative-proof record is owed):

| Treatment | Kind | Locator read | Supports |
| --- | --- | --- | --- |
| [Bergman, *An Invitation to General Algebra and Universal Constructions*](https://math.berkeley.edu/~gbergman/245/3.4.pdf) — Springer Universitext, author's revised PDF v3.4 | monograph | §§3.4 (pp. 34–41), 4.2–4.3 (44–52), 4.9–4.13 (70–99), 9.1–9.4 (360–391) | A6, A7, A8 (free words, presentations, monoid rings/polynomial rings, free algebras) |
| [Conrad, *Tensor products*](https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf) — UConn notes, 60 pp. | lecture-notes | §§1–7 (pp. 1–60), §§1–3 and 5–6 read for constructions and proofs | A1–A5, A7, A10, B1–B5 |
| [The CRing Project](https://math.colorado.edu/topology/cringproject.pdf) — open-source commutative algebra text | textbook | Ch. 13 §§13.1, 13.3–13.4 (printed pp. 111–149) | A7, A8 (localisation, quotient field, base change, right exactness) |

Stamps: Bergman PDF 2 947 784 bytes / 555 pages / sha256-16 `6ed40cf344338e66`; Conrad PDF
660 555 bytes / 60 pages / `c8dd0b6347fc984a`; CRing PDF 1 759 062 bytes / 355 pages /
`b5a383bcaacdab54`.

The coverage file records 23 harvested headings with dispositions: 6 `included` (each naming
a scaffolded batch-1 item), 5 `inline`, 8 `already-published` (the corresponding results
already exist in the library), 1 `deferred` with the resolving destination
`hecke-base-change-semisimplicity-and-deformation` (fraction-field/torsion base change,
owned by HH-14) and 3 `out-of-scope` with specific reasons (physics component convention,
variety classification, flatness/projectivity). No `already-published` row was needed for a
result this pair must prove itself.

## Published defects for the canonical ledger

No defect was found in the suppliers this batch consumes. Three observations for the owner,
none of them a defect claim about consumed suppliers:

1. **Page-level prerequisite hygiene (advisory).** `validate-plan` reports 24
   `redundant-prereq` warnings for this page's declared `requires` (for example
   `tensor-products-of-modules` already reaches `modules-and-module-homomorphisms`). The
   plan controls and the drift review kept the array; recorded here so the owner can trim it
   in a plan edit if desired.
2. **Freshly published supplier metadata.** `def-tensor-algebra-of-a-vector-space` and
   `thm-universal-property-of-the-tensor-algebra` (audited 2026-09-14) are used through
   A6/A7; their Statements match the uses exactly. No repair requested.
3. **Engine gate finding (below)** — the 1-scaffold battery includes a validator that needs
   the frontier's item files, which do not exist before Step 3.

## Checks and outstanding findings

All commands were run on 2026-10-06 after the final manifest edit and the readiness records.

Three wording/statement corrections were made after the first recording pass and their three
records were re-recorded against the corrected bytes (the readiness check confirmed exactly
those three items were stale, and no other item's closure contained them): A9 clause 4 now
says a submodule of a finite sum of simples is *isomorphic* to a direct sum of a subfamily
(with the complement `S⊕K` made explicit in the strategy), B1 no longer uses a math-italic
`$every$`, and B3 states the kernel dimension `dim U·dim W + dim V·dim Z − dim U·dim Z = 3`
instead of an informal comparison. No dependency, level or claim changed.

- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` — exit 1 for the live
  whole run (30/30 run items ready; the remaining 58 work entries are other batches' pages
  without inventories — this pair's two pages both carry inventories); **all 15 batch-1 items
  are closed with current `ready` records and no batch-1 item carries work**.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` — exit 1 solely
  on the 58 other batches' `empty scaffold inventory`; no other error line is produced, no
  error names a batch-1 item, and every batch-1 `dependency_level` equals the computed value
  (maximum 2).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — exit 0;
  batch 1's input `research/frontier-42-coxeter-32-batch-1.cross-batch-dependencies.json` is
  `[]` (all suppliers are published or inside the pair) and is recorded as reviewed. The
  `--require-reviewed` whole-run form cannot pass until every batch writes its input.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` — 0
  missing, 0 errors (23 run items existed at that check).
- `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json`
  — 0 errors, 0 warnings (same 23-item scope).
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-1.coverage.json
  --require-destination` — 1 page, 23 harvested results, 0 errors, 1 advisory
  `coverage-low-yield` warning (6/23 built; the other rows are already-published, inline or
  declined with reasons).
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <pair pages>` — exit 0;
  reading order and declared prerequisites are consistent and the pair's item dependencies
  were separately checked to lie in the closure of the page's `requires` (script check over
  all 74 published deps).
- `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-1.coverage.json
  --stamp` — 3/3 sources fetch-verified and stamped; check mode 3/3 resolved.
- `node tools/url-sweep.mjs --coverage research/frontier-42-coxeter-32-batch-1.coverage.json
  --recover --fail-on-dead` — 3/3 live, 0 dead.
- `node tools/source-backing.mjs` over the batch coverage and that liveness file — 4 authored
  results, every one backed.
- **Owner-reviewed engine finding.** The run's `1-scaffold` battery included item-scoped
  `extcheck`, but its selected planned IDs do not yet have `items/<id>.md` carriers.
  `frontier-item-gate.mjs` correctly selected all 30 manifest IDs; `extcheck.mjs` then
  returned `focus-item-unknown` for those not-yet-authored IDs. This was the one actual
  stage-1 gate defect. The reported `frontierGateScope(..., requireItemFiles=true)` path
  is not called by this stage; the separate `fwdcheck`/`depsource` probes are not in its
  gate battery either. The orchestrator removed `extcheck` from `1-scaffold`: the
  co-scoped manifest-only content-policy gate checks the retired external-record fields
  in planned entries, and the authored-item `extcheck` gate remains at Step 3b, after
  item files exist. The controller accepted the hot reload without changing stage order
  at 2026-10-06T17:35:42.807Z. This finding did not concern the batch-1 scaffold itself.

Nothing in this batch is escalated: every item has a complete proof strategy with met
prerequisites, all supplier statements were read, the Choice boundary is declared, and no
required page split is needed (10 + 5 items against the 100-item cap).
