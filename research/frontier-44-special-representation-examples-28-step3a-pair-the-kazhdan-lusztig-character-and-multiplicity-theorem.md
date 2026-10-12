# Step 3a scope review — `the-kazhdan-lusztig-character-and-multiplicity-theorem` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 14 · 2026-10-10
- A page: `the-kazhdan-lusztig-character-and-multiplicity-theorem` (7 items)
- B page: `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples` (4 items)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-the-kazhdan-lusztig-character-and-multiplicity-theorem.json`,
  scope hash `83a7efa1cc6c7e721676097db1a1453d43009efba7bb893b8bc8cd2787b937f7`).
- No scaffold, manifest, coverage or owner record was edited; this is a scope review only.

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-kazhdan-lusztig-track.md` §KL-4 (“The Kazhdan–Lusztig character and
  multiplicity theorem”, 7-row A table + B companion) and the design inventory
  `research/kazhdan-lusztig-planning/proposed-items.json` (the same 7 A ids plus the 4 B ids).
  `research/plan-spec.json` carries both pages with `items: []`, orders 1784/1785, category
  `special-topics-in-representation-theory`, companion pointers and page `requires`
  (`projective-functors-and-the-soergel-functor-in-category-o`,
  `weyl-character-and-multiplicity-formulas`).
- Coverage of design in the current manifest
  (`research/frontier-44-special-representation-examples-28-batch-14.pages.json`): all 7 design A rows are
  scaffolded with their design content joints — labelling conventions, standard-rank comparison lemma,
  KL values at one, composition multiplicities, inverse character formula, Koszul/Ext scope remark, and the
  regular-block transport proposition; all 4 design B rows are scaffolded (S₃ multiplicity matrix,
  inversion to simple characters, sl₂ block translation, coefficient-vs-multiplicity counterexample).
  No design row is missing; the item inventory is exactly the design inventory. No extra topic was added
  beyond the design, and none of the design’s restrictions is narrowed.
- Current statements match the binding owner corrections of 2026-10-08
  (`…-owner-authoring-direction.md`, “Owner regular-block transport and inverse-KL correction”, with the local
  proof in `…-owner-category-o-batch14-transport-proof.md`): `prop-translation-identifies-regular-integral-blocks`
  constructs the actual mutually inverse exact translations `T_λ^μ = pr_{χ_μ}(L(ν)⊗−)incl_{χ_λ}`,
  `T_μ^λ = pr_{χ_λ}(L(ν)*⊗−)incl_{χ_μ}` preserving labelled Vermas, simples and projective covers (numerical
  equality is a consequence); `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o`
  uses the weighted incidence inverse `q'_{w,x}(1)` of `P(1)` with row support `x ≥ w`, not ordinary Bruhat
  Möbius values, and the S₄ `[1324,3412]` endpoint value −2 is retained on the A and B pages. The owner’s
  Category-O order decision (orders 1782–1793) and parabolic/singular interface correction for the consumers
  are reflected in the page interfaces.
- Intended role in the library: KL-4 of the Kazhdan–Lusztig track, the regular integral type-A
  multiplicity/character theorem and the supplier of the singular/parabolic track. Verified across the 50
  current run manifests: the only external item consumers are on batch 15
  `singular-and-parabolic-kazhdan-lusztig-theory` — `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`
  and `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` consume A1
  (`def-regular-integral-dot-orbit-labelling-convention`), A4
  (`thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`) and A6
  (`prop-translation-identifies-regular-integral-blocks`) — plus the page-level `requires` edge of batch 15;
  batch 16 (KL-6) reaches KL-4 transitively through KL-5. The B page is a page-level dependency leaf: no run
  item outside the pair consumes a B item (the only B–B edge is
  `ex-inverting-kl-multiplicities-to-obtain-simple-characters` ← `ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block`).

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-14.coverage.json`: A page — Soergel 1990
  (complete 32-page German preprint, fetch-verified 983,006 bytes, `sha256_16 2835f638e9dfdb16`), Lin Chen
  Lecture 8 (10-page lecture, 398,363 bytes, `2a3a03801d95beba`), Björner–Brenti, *Combinatorics of Coxeter
  Groups* (370-page author-hosted PDF, 4,320,702 bytes, `ad1e7d9260127bb2`); B page — Björner–Brenti, Chen
  Lecture 8, Chen Lecture 9 (7 pages, 353,100 bytes, `a5b1dc05c5752345`). All six entries carry
  `fetch_verified` stamps and recorded locator ranges; the primary numerical computations (S₃ all-one,
  S₄ `P_{1324,3412} = 1+q`, S₂ block data, sl₂ translation) are covered by named passages.
- Current dispositions (from the file, per page): A 42 results = 13 `included`, 14 `already-published`,
  13 `inline`, 2 `out-of-scope`; B 12 results = 11 `included`, 1 `already-published`. Each `out-of-scope`
  entry has a specific reason (Chen Remark 1.14 bibliographic pointer, book not held; Björner–Brenti §5.5
  nonrecursive chain formula not needed for the short local computations). The declines land on published
  KL-1/RL-4/RL-5 carriers or on owner-ready in-run KL-2/KL-3 items; I sampled and confirmed the key
  transfers (Soergel §1.1 Zerlegungssatz → `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra`;
  Soergel §2.6 Lemma 10(i) → A4; Chen Conj. 1.15 → A4; Björner–Brenti p. 135 → B1/B2; Chen Lecture 9
  Theorem 3.13/Example 3.16 → A6/B4).
- Checks run on current bytes: `coverage-checklist --require-destination` 0 errors, 1 advisory
  (`coverage-low-yield`, 13/42 A results scaffolded — explained by the declines above); `manifest-deps`
  on the pair 11 items 0 errors; run-wide `content-policy --manifest-only` 858 items 0 errors/0 warnings.
- Used published interfaces were spot-checked on disk and match the consumption:
  `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` (contains `p_{y^{-1},w^{-1}}=p_{y,w}`),
  `def-inverse-kazhdan-lusztig-polynomials` + `thm-kazhdan-lusztig-inversion-formula` (`Q'=P^{-1}` chain
  definition — the corrected weighted inverse), `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization`
  (`p_{y,w}=v^{ℓ(w)−ℓ(y)}P_{y,w}(v^{−2})`), `def-translation-functor-between-o-blocks` and
  `prop-translation-functors-are-exact-and-biadjoint-across-a-wall` (general biadjunction for every
  finite-dimensional 𝔥-semisimple `E`), `lem-dominant-norm-distance-comparison`,
  `lem-weight-norm-bound-for-finite-dimensional-simple-modules` (equality iff `γ ∈ Wν`, multiplicity one),
  `thm-verma-homomorphism-spaces-have-dimension-at-most-one`, and the split-K₀ Hecke isomorphism
  (`q=v^{-2}`, `[B_i]↦H_i`).

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed all `deps` of the 11 pair items from the current manifest; classified every id against
`items/*.md` (front-matter `status`), all 50 current run manifests and `research/plan-spec.json`; then
expanded the dependency closure of the pair over that union.

Result — 46 distinct direct dependencies: 35 published library items (all front-matter `status: published`)
and 11 current-scaffold items — 7 of this pair plus 4 external in-run suppliers: batch 13
`def-regular-integral-category-o-block-and-its-antidominant-weight`,
`thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`,
`prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`, and batch 12
`thm-soergels-character-conjecture`. The full closure is 176 nodes with 0 nodes absent from both the
published library and the current scaffold. Page-level `requires`: the in-run batch-13 page
`projective-functors-and-the-soergel-functor-in-category-o` (scaffolded) and the published page
`weyl-character-and-multiplicity-formulas` (present under `library/lie-theory/`, `status: published`).

The 8 cross-batch edges (7 item + 1 page) are recorded `open` in
`…-batch-14.cross-batch-dependencies.json` with the exact interface used. Their suppliers are scaffolded
but not yet authored, so they remain ordinary supplier-before-consumer review edges for Steps 3b/5 — not
absent prerequisites. Interface compatibility was checked against the current supplier statements: A3 uses
KL-2’s `ch(B_w^R)=H_w` with `[B_w]↦H_w`; A1/A2 use KL-3’s `V(P(w·λ))=B̄_{w^{-1}}` dictionary and the
standard-rank comparison — all present in the batch-12/13 scaffolds. All 11 pair items currently carry
current Step-1 readiness records (run check lists no work row for them).

**No unmet prerequisite found; no material uncertainty attaches to this conclusion.**

## 4. Non-blocking observations (no effect on this pair’s scope)

1. The `coverage-low-yield` advisory (13/42) is understood and attributable to declines to
   already-published/inline carriers (§2); per-result reasons are recorded.
2. The page-level `requires` includes the published `weyl-character-and-multiplicity-formulas`, which is
   already reachable through KL-3; this `redundant-prereq` advisory is inherited verbatim from the
   plan-spec/design `requires` list (only B4 consumes its `thm-weyl-character-formula`). Owner’s call if
   the requirement list is to be trimmed; no scope effect.
3. Batch 13’s ledger-section prose still names orders 1544/1545 and an outdated “8 escalated” readiness
   narrative; the current plan/manifests use 1782/1783 and all its records are owner-ready. Already recorded
   in the batch-14 Step-1 note §3.7; belongs to batch 13’s owner.

## 5. Uncertainty

Step 3a assesses scope, not proof correctness; the in-run suppliers (KL-2/KL-3 items) are scaffolded but
unauthored, and their proofs are owned by Steps 3b/5. I verified fetch stamps and sampled source
dispositions from the coverage record rather than re-reading the complete Chen/Soergel texts in this review;
the load-bearing interfaces they supply were checked in the on-disk item texts cited above. I could not
re-check the German preprint’s internal pagination (no local PDF text tooling); any residual uncertainty is
bibliographic, not scope-affecting.

## 6. Decision

`sufficient` for `the-kazhdan-lusztig-character-and-multiplicity-theorem`: the planned definitions, results
and examples realize every design row, cover the intended regular-integral type-A multiplicity/character
subject (including the corrected transport and weighted-inverse interfaces its consumers use), and no
prerequisite is absent from both the published library and the current scaffold.
