# Step 3a scope review — pair `mixed-hodge-structures-and-strictness` / `mixed-hodge-structures-and-strictness-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role / label: alpha / `step3a-pair-mixed-hodge-structures-and-strictness-8bfe4885950ed558`
- Batch: 34 — A page `mixed-hodge-structures-and-strictness` (order 1800, 5 items,
  levels 0/1/2/1/3); B page `mixed-hodge-structures-and-strictness-examples`
  (order 1807, 1 item, level 1)
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification, an owner record, or gate evidence.

## Inputs read

- Manifests: `research/frontier-44-special-representation-examples-28-batch-34.pages.json`
  (both pages, 6 items), `...-batch-34.coverage.json` (2 pages, 10 source rows,
  46 harvested results), `...-batch-34.notes.md`, `...-batch-34.cross-batch-dependencies.json`
  (reviewed empty input `[]`), and the A/B entries of `research/plan-spec.json`
  (orders 1800/1807).
- Prose/design: `research/plan-klr-foundation-prerequisites.md` section
  "Mixed Hodge Structures And Strictness" (lines 428–481) with its preamble and
  "Shared source and construction inputs"; the five carrier drafts and page
  drafts under `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/`
  (`items/` and `pages/`).
- Owner decisions: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` —
  same-frontier prerequisite extension (2026-10-09) authorizing exactly this
  pair inside this run, with "include the necessary intermediate lemmas with
  their actual homes and dependencies"; design preamble repeats that the
  carrier drafts are open construction contracts, not accepted mathematics.
- Drift/readiness: `...-alpha-step1-append-1-drift.md` §`mixed-hodge-structures-and-strictness`
  → `no-drift (order 1800; declared closure complete; no change)`; the six
  `...-step1-{item}.json` records (all `ready`, refreshed after the splitting
  caveat edit).
- Dependency records: unified ledger `research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
  and the batch-38/42/46 cross-batch inputs.
- Published context read at statement level: the two `requires` pages
  `library/homological-algebra/double-complexes-exact-couples-and-convergence.md`
  and `library/linear-algebra/linear-independence-bases-and-dimension.md`, the
  twelve direct dependency items under `items/`, and the home pages listed
  under "Prerequisite closure" below.

## A-page scope (5 items)

The scaffold delivers the design's four A items plus one documented local
supplier:

1. `def-rational-mixed-hodge-structure` (level 0): finite W on a
   finite-dimensional $\mathbb Q$-space, finite F on $H_{\mathbb C}$,
   $n$-opposition on each $\operatorname{Gr}^W_n$, morphisms, pure/Tate/tensor/dual
   conventions and the polarizability clause; "no mixed structure is assumed to
   split over $\mathbb R$ or $\mathbb Q$". This matches the design contract
   (Weber (2.2.1); Deligne II 2.3.1–2.3.4).
2. `lem-deligne-splitting-of-a-mixed-hodge-structure` (level 1): Deligne's
   $I^{p,q}$ with the displayed formula, its isomorphism onto the $(p,q)$-piece
   of $\operatorname{Gr}^W_m$, the $W$-, $F$- and $\bar F$-partial-sum
   decompositions, functoriality, and the explicit caveat that the formula need
   not be conjugate-symmetric (sources give only the congruence modulo
   $W_{m-2}$). This construction sits inside the design's strictness proof
   route (Deligne II 1.2.5, 1.2.8–1.2.11); promoting it to its own item is the
   "necessary intermediate lemma" the owner direction authorizes and is
   recorded in the batch notes (conflicts 2–3).
3. `lem-morphisms-of-mixed-hodge-structures-are-strict` (level 2): strictness
   of every mixed Hodge morphism for $W$ and $F$; kernel, image and cokernel
   carry induced/quotient mixed Hodge structures; $\operatorname{Gr}^W_n$ is
   exact; a morphism from weights $\ge n$ to weights $\le n$ has pure image of
   weight $n$ (Deligne II 2.3.5(i)–(v); Weber (2.2.3), (2.2.6)–(2.2.7)).
4. `def-cohomological-mixed-hodge-complex` (level 1): the bi-filtered complex,
   rational comparison quasi-isomorphism, the graded axiom (finite-dimensional
   cohomology, $F$-strict differentials, pure weight $r+w$ on
   $H^r(\operatorname{Gr}^W_wK)$), the shifted weight convention
   $W_mH^n(K)=\operatorname{im}(H^n(W_{m-n}K)\to H^n(K))$, and the sheaf /
   derived-global-sections clause (Deligne III (8.1.1)–(8.1.5); Weber (2.3.1);
   Arapura 4.12).
5. `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`
   (level 3): (i) $H^n(K)$ carries the shifted-weight/image-Hodge mixed Hodge
   structure, $E_1^{p,q}$ is pure of weight $q$, the weight sequence
   degenerates at $E_2$, $\operatorname{Gr}^W_mH^n\cong E_2^{n-m,m}$
   compatibly with $F$, functorially; (ii) a cosimplicial system of weight-zero
   Hodge complexes concentrated in nonnegative degrees has simple complex a
   mixed Hodge complex for the cosimplicial-degree filtration $L$, with
   degeneration at $E_2$, $\operatorname{Gr}^W_qH^n\cong E_2^{n-q,q}$ and all
   weights $\le n$ (Deligne III Scholie (8.1.9), Theorem (8.1.15) with proof
   (8.1.17); Weber (2.4.1)).

Design comparison — the four planned A items are present with their planned
claims; nothing was weakened. Recorded differences (batch notes conflicts
2–5), all within-pair:

- the strictness item declares the new splitting lemma as a dependency
  (design listed the definition only) — a strengthening of the route, not a
  change of claim;
- the mixed-complex item uses the published
  `thm-the-cohomological-filtered-complex-construction` (home
  `spectral-sequences`, inside the page's declared-requires closure) instead of
  the design's homological double-complex theorem — the exact cohomological
  counterpart; no claim narrowed;
- the definition carries the tensor/dual/Tate/polarizability conventions the
  consumers use, and the $F$-strictness ⇔ $E_1$-degeneration equivalence is
  recorded as prose, not as a definitional clause.

Subject coverage: the pair's subject — rational mixed Hodge structures,
strictness and the Deligne splitting, cohomological mixed Hodge complexes and
the mixed Hodge structure on their cohomology — is delivered in full at its
intended level. Everything the design defers is owned by sibling pairs in this
same frontier with recorded reasons in the coverage ledger: Deligne II
§4.1–4.2 (Leray degeneration) and Voisin §2.2 (polarizations) →
`projective-hodge-polarization-foundations`; Voisin §3 (invariant cycles,
variations, limit structures) → `geometric-fixed-parts-and-gauss-manin-semisimplicity`;
Deligne III (8.1.19)/(8.2.x) (simplicial/proper applications) →
`proper-hyperresolutions-and-mixed-hodge-restriction-images`; El Zein §5 and
Weber (2.3.3) (logarithmic weight filtration and the $\mathbb C^*$ example) →
`logarithmic-hodge-complexes-and-smooth-open-weights`; Arapura §4.1–4.4
(Saito mixed Hodge modules) → out-of-scope, and no item in this run consumes
Saito theory (checked: no scaffold strategy imports it). No deferred heading is
needed by this pair's items.

## B-page scope (1 item)

`ex-a-mixed-hodge-extension-need-not-split-rationally` is exactly the designed
example: on $H=\mathbb Qe_0\oplus\mathbb Qe_1$ with $W_{-2}=W_{-1}=\mathbb Qe_1$,
$W_0=H$, $F^0=\mathbb C(e_0+ie_1)$, the structure is an extension
$0\to\mathbb Q(1)\to H\to\mathbb Q(0)\to 0$ with no rational splitting. My
scope-level check of the witness (this review, by hand): the graded pieces have
types $(-1,-1)$ and $(0,0)$, so the axioms hold; a rational section sends $1$ to
$e_0+\lambda e_1$, $\lambda\in\mathbb Q$, and $F^0$-preservation forces
$\lambda=i$; no rational splitting exists. The item is a leaf: no page in the
run declares it as a supplier. The manifest records its statement/proof as
`ai-generated` (the exact witness was not located verbatim in the fetched
texts); that is a provenance record, not a scope change — the design planned
this witness.

## Intended role and consumers

The pair is the algebraic mixed-Hodge supplier for three sibling pairs, whose
scaffolds already exist:

- batch 38 `logarithmic-hodge-complexes-and-smooth-open-weights` (consumes all
  four planned A items);
- batch 42 `geometric-fixed-parts-and-gauss-manin-semisimplicity` (consumes the
  definition and the strictness lemma);
- batch 46 `proper-hyperresolutions-and-mixed-hodge-restriction-images`
  (consumes the definition, the mixed-complex definition, the strictness lemma
  and the cosimplicial clause).

The unified ledger registers 15 item edges and 3 page edges with batch 34 as
supplier, and every one carries a `verified` review from the consumer batch;
the consumer reviews name the exact clause consumed (e.g. batch 38: shifted
weight convention, independence of the compactification via strictness, part
(i) of the cohomology lemma; batch 46: part (ii) of the cohomology lemma and the
pure-image clause of strictness). No consumer consumes the added splitting
lemma directly and no consumer consumes the B item, so the in-pair addition and
the example page change no external interface.

## Prerequisite closure — no unmet prerequisites

- Direct dependencies: 12 distinct items, all present on disk with
  `status: published` — `def-linear-basis`,
  `def-increasing-and-decreasing-filtration-of-an-object`,
  `def-associated-graded-object-of-a-filtered-object`, `def-internal-direct-sum`,
  `thm-modules-over-a-ring-form-an-abelian-category`,
  `def-complex-numbers-and-arithmetic`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `def-cochain-complex-in-an-abelian-category`, `def-filtered-chain-complex`,
  `def-filtered-chain-map`, `def-quasi-isomorphism`,
  `thm-the-cohomological-filtered-complex-construction`.
- Their homes (`spectral-sequences`, `chain-complexes-and-homology`,
  `linear-independence-bases-and-dimension`, `vector-spaces-and-subspaces`,
  `abelian-categories`, `field-extensions-and-the-complex-numbers`,
  `tensor-products-of-modules`) are all inside the A page's declared-requires
  closure: `validate-plan` reports no `undeclared-prereq` finding for the page.
- Both declared prerequisite pages are published:
  `double-complexes-exact-couples-and-convergence` (40 listed items + 7 examples)
  and `linear-independence-bases-and-dimension`.
- Transitive closure walk from the six items over the run manifests and the
  published item files (`deps` plus `justified_by`): 418 distinct ids = 412
  published items + this pair's six scaffold items; **0 ids are absent from
  both the published library and the current scaffold**. The pair consumes no
  in-run supplier. No forward page edge: A requires only the two published
  pages; B requires A.
- One advisory only, pre-existing and preserved deliberately: the page requires
  `linear-independence-bases-and-dimension` directly although it is reachable
  through `double-complexes-exact-couples-and-convergence`
  (`redundant-prereq`). Plan, plan-spec and batch task all declare the same
  two-element `requires`.
- Consumer-side: all 18 supplier edges are `verified` by batches 38/42/46; no
  consumer requires a claim this pair does not plan.
- Confirmed vs uncertain: no confirmed gap was found. Uncertainty is limited to
  the fact that the walk covers declared metadata (`deps`/`justified_by`) and
  that published proofs were not re-audited here (out of scope); no roadmap
  item, source, or consumer names a missing supplier.

## Source coverage

- `source-fetch-check` (check mode, re-run): 10/10 sources fetch-verified, 10/10
  resolved, 0 documented drops; `coverage-checklist --require-destination`:
  2 pages, 46 harvested results, 0 errors, 1 advisory — `coverage-low-yield` on
  the B page, explained by the design: the plan prescribes exactly one B item,
  and the B page's definitional harvest headings are absorbed inline on the A
  page. Both pages are far below the 100-item cap.
- Statement-level source conformity checks performed for this review (documents
  fetched today, content matching the recorded fetch sizes): Deligne II
  complete PDF (5,404,038 bytes, 54 pp.) — (1.2.5), (1.2.8), (1.2.10)–(1.2.12)
  and Theorem (2.3.5)(i)–(v) contain the strictness, kernel/cokernel and
  $\operatorname{Gr}^W$-exactness clauses as scaffolded; Weber (259,805 bytes,
  15 pp.) — (2.2.1), (2.2.3), (2.2.4)–(2.2.5) (including the projection
  isomorphism and the congruence $I^{p,q}\equiv I^{q,p}$ mod $W_{\ell-2}$) and
  (2.3.1), (2.4.1) match the definition, splitting, strictness and
  mixed-complex/cohomology statements; Deligne III complete PDF (6,791,148
  bytes, 74 pp.) — (8.1.5), Scholie (8.1.9)(i)–(vi) and Theorem (8.1.15)(i)–(v)
  with proof (8.1.17) match both parts of the cohomology lemma, including
  $E_2$-degeneration and $\operatorname{Gr}^L_p=E_2^{p,n-p}$. These are
  statement/locator checks, not proof certification; Voisin, El Zein and
  Arapura were not re-opened today beyond the recorded verified spans.
- Minor note (no action requested): the splitting item's fifth reference
  (Cirici–Horel §3 Lemma 3.3, an independent cross-check of the pinned
  formula) is not a coverage-ledger row; it was fetched during scaffolding
  (HTTP 200, ≈601 KB) and every planned result remains backed by the ten
  coverage rows.

## Checks re-run during this review (actual results)

- `manifest-deps` on the batch manifest: 6 items, 0 errors.
- `item-dependency-levels --run …`: 858 items, no finding for either page;
  labels 0/1/2/1/3 and 1 equal the computed levels.
- `validate-plan`: 100/100 pages OK; the only finding class in the run is the
  advisory `redundant-prereq`, and this page's single advisory is the
  pre-existing one above; no `undeclared-prereq`, `b-leaf`, `resolve`, cycle or
  forward-reference finding involves either page.
- `step1-decisions check --run …`: 858 items, 858 ready, work list empty — all
  six items carry current readiness records.
- `coverage-checklist` and `source-fetch-check` as above.
- Unified dependency ledger read: 50/50 batches reviewed; batch 34 has the
  reviewed empty input and owns no open edge; no orphaned review names a
  batch-34 consumer.
- Proof correctness was not assessed (out of scope for 3a); statements and
  strategies were read at scope level, with the arithmetic of the B witness and
  the cited source clauses spot-checked as recorded above.

## Uncertainty

- This is a scope decision, not mathematical acceptance. Proof-level risks for
  Step 3b (recorded, not scope gaps): the full reproduction of Deligne II
  1.2.8's induction with 1.2.9, and the strict representative correction
  identifying the induced $F$-filtration on $\operatorname{Gr}^W_mH^n$ with the
  stable-page filtration.
- The scaffold carries one item beyond both the design list and the plan-spec
  inventory (the splitting lemma). It is an owner-authorized local-supplier
  enrichment (design preamble: necessary intermediate lemmas must be
  registered), step-1-ready, covered by the coverage rows, drift-reviewed
  (`no-drift`), and consumer-neutral. Reconciling the plan-spec item list with
  the batch manifest is an owner call, not a scope defect; this review changed
  nothing.
- The B example's provenance is `ai-generated` rather than literature-derived;
  its statement is the designed witness and is scope-correct. Provenance
  accuracy is a Step-3b matter.

## Decision

`sufficient` for `mixed-hodge-structures-and-strictness`: the planned
definitions, results and example adequately cover the intended subject, all
planned claims are present with no omissions, the source coverage is verified,
no unmet prerequisite was identified, and the consumers' verified interfaces
confirm the pair's intended role. Recorded with
`tools/step3-decisions.mjs record-scope`.
