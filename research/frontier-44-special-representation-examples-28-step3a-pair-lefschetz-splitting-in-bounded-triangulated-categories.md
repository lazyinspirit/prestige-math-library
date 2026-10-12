# Step 3a scope review — pair `lefschetz-splitting-in-bounded-triangulated-categories` / `lefschetz-splitting-in-bounded-triangulated-categories-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-lefschetz-splitting-in-bounded-triangulated-categories-cdc85725a4472700`
- Batches: 33 (A page order 1799, `homological-algebra`; B page order 1806)
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `…-batch-33.pages.json` (both pages, 7 items),
  `…-batch-33.coverage.json` (2 pages, 31 harvested rows),
  `…-batch-33.cross-batch-dependencies.json` (`[]`), `…-batch-33.notes.md`;
  both pages' entries in `research/plan-spec.json`;
  `…-scope-ledger.json`; the derived `…-cross-batch-dependencies.json`
  (all 50 batches reviewed, 0 unreviewed).
- Prose design: `research/plan-klr-foundation-prerequisites.md`,
  "Lefschetz Splitting In Bounded Triangulated Categories" (L382–425), plus the
  four author-input drafts in
  `…-klr-foundation-semisimplicity-drafts/items/`
  (`lem-hard-lefschetz-splits-a-bounded-t-structure-complex`,
  `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition`,
  `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual`,
  `ex-hard-lefschetz-splitting-for-a-three-degree-complex`).
- Owner direction: `…-owner-authoring-direction.md` (same-frontier extension:
  this pair is one of the 21 appended prerequisite pairs; "add necessary local
  prerequisites within the selected scope"; B pages carry no load-bearing
  suppliers). No owner decision specific to this pair exists yet; it is this
  dispatcher's first Step 3a record.
- Drift/step-1: `…-alpha-step1-append-1-drift.md` §lefschetz-splitting →
  `no-drift` (order 1799; declared closure complete; no change).

## A-page scope — 6 scaffold items (3 planned + 3 necessary local prerequisites)

The three planned items match the design claim for claim (verified against the
drafts and the plan section):

1. `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` — bounded
   t-structure, `L:K→K[2]` with `H^{-j}_t(L^j)` iso for all `j≥0` ⟹
   `K ≅ ⊕_j H^j_t(K)[-j]`, finite sum; explicitly non-canonical and with no
   primitive-lift compatibility. This is Deligne (1.5) in abstract
   bounded-t-structure form, exactly the design's claim.
2. `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition` —
   graded primitive decomposition
   `H^{-r}=⊕_j L^jP^{-r-2j}`, `H^r=⊕_j L^{r+j}P^{-r-2j}`, monomorphisms on
   primitive sources, naturality; Deligne (1.6) / dCM 4.4.4(b). Matches design.
3. `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual` — unique `W`
   with `NW_i⊂W_{i-2}`, `N^r:Gr_r≅Gr_{-r}`, the intrinsic convolution formula,
   self-duality `(W_i)^⊥=W_{-i-1}` for nondegenerate skew-adjoint `S`, perfect
   pairing and descended forms `S_i`; dCM §4.5 (23)–(27). Matches design.

Three added local items (recorded in the batch-33 notes; each is consumed by the
planned items; no equivalent item exists anywhere in `items/` or the other 99
run pages, confirmed by id scan, so this is a genuine gap-fill, not
duplication):

4. `def-truncation-functors-and-cohomology-of-a-t-structure` — conventions
   `τ_{≤n}`, `τ_{≥n}`, `H^n_t`, amplitude, boundedness (BBD 1.3.1 family).
5. `lem-truncation-triangles-are-essentially-unique-and-functorial` — essential
   uniqueness, adjunction, aisle criteria, extensions/direct sums/iteration
   (BBD 1.3.3–1.3.5).
6. `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude` —
   functoriality, shifts, additivity, amplitude detection for bounded
   t-structures, concentration identity (the locally proved bounded case).

The design's declared inputs for the main lemma named only
`def-canonical-t-structure-on-a-derived-category`, the long exact Hom sequence
and the split criterion; the published corpus contains no abstract
truncation/t-cohomology machinery, so items 4–6 supply exactly the missing
hypotheses-conventions while leaving the main claim unchanged. The design's
input lists for items 2 and 3 were likewise thin (`def-abelian-category` only;
Jordan basis only); the scaffold adds published suppliers
(splitting lemma/split SES/exact-sequence/image–coimage/biproduct;
bilinear-form/annihilator/rank–nullity package). All additions lie in the
declared `requires` closure (checked independently and by `validate-plan`).

## B-page scope — 1 scaffold item

- `ex-hard-lefschetz-splitting-for-a-three-degree-complex`: in
  `D^b(vect^{fd}_k)`, `K=k[2]⊕k⊕k[-2]`, `L` identifying the first summand with
  the shifted second and the second with the shifted third and vanishing on the
  last; `H^{±2}_t(K)=k`, `H^0_t(K)=k`, all `H^{-j}_t(L^j)` iso (`j=0,2` the two
  Lefschetz steps; `j=1` and `j≥3` are zero maps of zero objects), concluding
  the displayed splitting. This is exactly the single example the design
  specifies, plus the explicit lemma application.
- Independent scope-level spot check (mine): the displayed `L` is a well-defined
  degree-two map on the three summands; `H^{-2}_t(L^2)` and `H^0_t(L)` are the
  identities `k→k`, and every remaining `H^{-j}_t(L^j)` has zero source and/or
  target. The example tests the pair's central claim and its degenerate `j`
cases; it does not exercise items 2–3, which the design did not request on the
B page.
- No cross-batch edge anywhere names this B item as a supplier (full-manifest
  scan and the derived ledger): the B page is not load-bearing for another
  page, matching the owner direction.

## Intended role — supplier to batches 42 and 48

- Page-level edges (ledger `verified`): batch 42
  `geometric-fixed-parts-and-gauss-manin-semisimplicity` and batch 48
  `projective-perverse-hard-lefschetz-and-decomposition` both declare this A
  page in `requires`.
- Item-level edges (declared in the consumers' manifests, ledger `verified`):
  batch 42 `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`
  → item 1; batch 48
  `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`
  → item 3; batch 48
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  → items 1–3; batch 48
  `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`
  → item 1.
- Only the three planned lemmas are consumed cross-batch; items 4–6 are
  internal support and change no consumed statement. The consumers' declared
  needs — a finite non-canonical splitting `K≅⊕P_b[-b]`, a canonical graded
  primitive decomposition, and the canonical self-dual weight filtration — are
  exactly the declared conclusions of items 1–3.

## Source coverage — verify live, contents checked

- 3 sources, all `fetch_verified`; I re-downloaded each on 2026-10-10 and the
  sha256_16 stamps reproduce exactly: BBD *Faisceaux pervers*
  (`https://www.numdam.org/item/AST_1982__100__1_0.pdf`, 15 581 222 B,
  `b1e10440e13cb6bf`); Deligne 1968
  (`https://www.numdam.org/item/PMIHES_1968__35__107_0.pdf`, 2 129 434 B,
  `b154116942342392`); de Cataldo–Migliori `arXiv:math/0306030v2`
  (`https://arxiv.org/pdf/math/0306030`, 676 708 B, `35fcdf2d6c0688fa`).
- Content checks against the fetched PDFs: Deligne Théorème (1.5) is item 1's
  claim and (1.6)–(1.7) are item 2's decompositions (printed pp. 108–110);
  dCM Theorem 4.4.4(a)(b) matches items 1–2 including the split-monomorphism
  clause, and Remark 4.4.5 is the source of the "no primitive-lift
  compatibility" caveat; dCM §4.5 (23)–(26) matches item 3 verbatim in
  substance ((24) `S(Na,b)+S(a,Nb)=0`, (25) `(W_i)^⊥=W_{-i-1}`, (26)
  `S_i([a],[b])=S(a,N^ib)`); BBD 1.3.3–1.3.9 verified in the PDF, with 1.3.6
  (heart abelian, long exact sequence) and 1.3.7 (conservativity) correctly
  `out-of-scope` (the pair proves only the bounded cases it needs) and
  5.4.10–5.4.13 correctly `deferred` to batch 48, where the relative
  hard-Lefschetz theorem consumes them.
- Bookkeeping nuances, reported for the owner, not scope omissions and no
  action required: (i) the dCM row "(26)–(27) and the following orthogonality
  sentence" is disposed `included`, but item 3 asserts only the perfect pairing
  and nondegeneracy of `S_i`, not orthogonality of the Lefschetz decomposition
  (22); the design does not request it and no consumer uses it. (ii) The
  Deligne (1.2) row is `included` although the scaffold proof runs the direct
  finite-amplitude induction rather than the spectral-sequence degeneration
  criterion; the covered split conclusion is the same. (iii) Item 6 is not the
  target of any harvested row; its content is the locally proved bounded
  specialization of BBD §1.3.6–1.3.7, which are deliberately not imported.

## Prerequisites — no unmet prerequisite found

- `manifest-deps` → 7 items, 0 errors; `content-policy --manifest-only` →
  7 items, 0 errors; `item-dependency-levels check --run` → 858 items/100
  pages, exit 0, no cycle or level mismatch for batch 33; `validate-plan --run`
  → exit 0 with only `redundant-prereq` warnings on this pair's plan-level
  `requires` (owner/plan reconciliation, already recorded by the batch; no
  effect on scope).
- Independent walk of every declared dependency of all 7 items: each resolves
  to a published item in `items/` or to another of these same-page items; every
  dependency's page lies in the transitive closure of the declared `requires`
  (`abelian-categories`, `derived-categories`,
  `triangularisation-and-jordan-canonical-form`, `triangulated-categories`).
  Nothing needed by this pair is absent from both the published library and the
  current scaffold, so no scaffold addition is recommended.
- Non-blocking hypothesis note for item 3's later review (Step 3b/5), not an
  absent prerequisite: `thm-double-annihilator-and-annihilator-dimension` is
  stated under a global AC hypothesis while item 3 records `axiom_use: None`;
  only its finite-dimensional content is consumed, where choice is not needed.
  Likewise `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` and the
  radical/annihilator package cover a general nondegenerate form, which
  contains item 3's hypothesis (dCM assume symmetric-or-skew; the design and
  scaffold state a general nondegenerate form).

## Checks run during this review

`coverage-checklist --require-destination` (2 pages, 31 rows, 0 errors);
`manifest-deps` (0 errors); `content-policy --manifest-only` (0 errors);
`item-dependency-levels check --run` (exit 0); `validate-plan --run` (exit 0);
requires-closure walk; consumer scan over all 50 manifests plus the derived
cross-batch ledger; three fresh source downloads with sha256_16 comparison;
targeted PDF reads (Deligne printed pp. 107–110; dCM 4.4.4/§4.5; BBD §1.3 and
§5.4). Proof correctness was not assessed here (out of scope for Step 3a).

## Uncertainty

- This review establishes scope, not proof validity: item statements and proof
  strategies were read at the hypothesis/statement level (with the one numeric
  spot check above); the seven items are draft scaffolds, not published items.
  No item approval, proof certification or gate result is claimed.
- The three source-bookkeeping nuances are reported with exact evidence and
  left to the owner.

## Decision

`sufficient` for `lefschetz-splitting-in-bounded-triangulated-categories`: the
planned definitions, results and example of the A/B pair adequately cover the
intended subject, all four design claims are preserved, source coverage is
adequate and re-verified, the consumer interfaces are the declared ones, and no
prerequisite is unmet. Recorded with `tools/step3-decisions.mjs record-scope`.
