# Step 3a scope review — `quiver-full-flag-projective-semisimplicity` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 49 · 2026-10-10
- A page: `quiver-full-flag-projective-semisimplicity` (order 1834; 2 items: lemma + corollary)
- B page: `quiver-full-flag-projective-semisimplicity-examples` (order 1835; 2 examples)
- Dispatch label `step3a-pair-quiver-full-flag-projective-semisimplicity-9e102564e49ed361`; only this pair was reviewed, no scaffold file was edited.
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-quiver-full-flag-projective-semisimplicity.json`,
  scope hash `ca2fe17299d836acda0932c73b6d1fa6d0fa6ddd2dbc5e3e10bb5c358872357a`).

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §"Quiver Full Flag Projective
  Semisimplicity" (current file L1483–L1526). The batch task cites L1360, which is stale and now lies
  inside the preceding signed pair's section; the live section and `research/plan-spec.json` agree
  item-for-item (A/B ids, orders 1834/1835, category `representation-theory`, titles, `requires`, the
  2+2 inventory). The inventory also matches
  `research/frontier-44-special-representation-examples-28-klr-foundation-semisimplicity-inventory-proofcontracts.json`
  (2 A items, 2 B items).
- All four design rows are scaffolded with the design's claims: the incidence compactification lemma,
  the characteristic-zero semisimplicity corollary, the non-semismall one-color example and the
  two-vertex multiple-arrow example. No planned row is omitted, renamed or narrowed.
- Four dependency-adequacy completions beyond the plan's stored item deps (each a genuine clause use,
  recorded in `…-batch-49.notes.md` and the owned cross-batch input): the lemma adds published
  `thm-plucker-image-closed` and `cor-projective-variety-product-exists` (Plücker/Segre projectivity of
  the flag and Grassmannian models); the corollary adds in-run
  `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties` (ambient category)
  and `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` (ordinary
  open-restriction exactness and the IC description). Additions, not weakenings; Step 4 splice should
  adopt the manifest inventory and deps. No scope conflict found.
- Boundaries preserved as designed: finite loopless quivers, arbitrary finite arrow multiplicities,
  every characteristic-zero coefficient field; no semismallness, finite-ADE hypothesis or affine
  paving of fibers; increasing flag convention with rank count `#{(p,q): ν_p=i, ν_q=j, q<p}` stated
  explicitly (VV/Lusztig use decreasing flags; the batch note records the translation). The examples
  keep the non-semismall boundary (defect `n(n−1)/2 > 0` for `n ≥ 2`) and the 0/`h` rank extremes.
- Intended role: the owner direction
  (`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`,
  §"Final KLR algebraic interfaces and current geometric instantiation at Step1 — 2026-10-09") holds
  "semisimple proper full-flag direct images" as part of the SEMISIMPLE QUIVER-FLAG EXT REALIZATION
  interface. This pair supplies exactly that clause; the exact KLR Ext algebra with signed
  correspondences stays with batch 47 `signed-quiver-flag-convolution-and-klr-ext-realization`, whose
  A page does not consume this pair and whose ledger entry explicitly leaves semisimplicity here.
  Consumer: batch 10 A page `klr-algebras-induction-and-quantum-serre-categorification` requires this
  A page, and its
  `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` deps
  `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (use: `L = ⊕_ν L_ν`
  splits into shifts of simple equivariant perverses, feeding graded-Yoneda projectives). The
  consumer-side ledger row into this pair is owned by batch 10's writer and remains open there; the
  semisimplicity/Ext split covers both planned uses without overlap or gap.

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-49.coverage.json`: 4 complete
  documents in 7 fetch-verified/stamped instances (hashes equal the bytes read) — Varagnolo–Vasserot
  arXiv:0901.3992v2 §1.1–1.3; Bozec arXiv:1401.5302v4 §1.1; BBD, Faisceaux pervers, Astérisque 100,
  §6.2.4–6.2.8; Milne, Algebraic Geometry, §6.m–6.n. 21 harvested headings disposed, 0 errors,
  1 warning `coverage-low-yield` (5/15 on the A page).
- Each decline has a valid destination or specific reason, and I confirmed they are sound: VV
  §§1.4–1.10/§§2–3 → batch 47 (convolution, Ext, KLR isomorphism); BBD §4.2.3–4.2.6.2 → batch 41
  (equivariant/perverse foundations); BBD §5.4 → batch 48 (relative Hard Lefschetz/decomposition,
  which supplies the compact theorem the corollary applies); Bozec §§1.2–3 (loops, generalized
  quantum group) genuinely outside this pair's approved finite-loopless scope; Milne
  tangent-space/Bézout unused. The bulk "inline" dispositions are absorbed into the two A items,
  consistent with the low-yield explanation.
- Independent spot check against the primary PDFs (fetched 2026-10-10 and read at the cited pages):
  VV §1.1 assumes "no arrow may join a vertex to itself" (loopless) with arbitrary arrow
  multiplicities, defines `E_V`, `G_V`, flags `F_y`, `x`-stable flags `\tilde F_y` and proper `π_y`,
  and (1.5) states `L_y=(π_y)_!(k)` are semisimple with `L_y^∨=L_y[2d_y]`, `δL_y=L_y[d_y]`; VV's
  flags are decreasing (`V=V_k⊃…⊃V_0=0`), so the library's increasing-convention translation and
  `q<p` rank count are the right re-derivation. Bozec §1.1 defines increasing flags `F_{i,a}`, the
  incidence `{(x,W): x_h(W)⊆W}`, the proper `π_{i,a}`, and states `π_{i,a!}1` semisimple by BBD
  (for arbitrary quivers; the library keeps the loopless subclass). Both match the lemma's model and
  the corollary's claim at scope level. I did not re-read BBD or Milne myself; their clauses reach
  this pair through the batch-48 compact theorem and the published Plücker/Proj items, whose
  statements I did read.

## 3. Prerequisite audit

- Direct deps (batch-49 manifest): lemma 6 published; corollary 1 published + 11 in-run (batches
  37/40/41/42/48 and its own page's lemma); each example 1 published + the same-page lemma. All
  resolve; 0 absent.
- Transitive closure over the four items: 128 in-run scaffold nodes and 311 outside deps, all
  published items with front-matter `status: published` verified; 0 missing or absent ids. Page
  `requires` closure: 5 published pages plus the in-run A pages `complex-algebraic-stratified-topology`
  (37), `equivariant-constructible-perverse-foundations` (41) and
  `projective-perverse-hard-lefschetz-and-decomposition` (48); no missing page.
- Current status: `node tools/step1-decisions.mjs check --run …` reports all run items `ready`
  (`closed: true`) at review time, so every direct supplier has a current ready record, as do all
  four pair items. (The batch-49 notes' "6 empty sibling pages / 736 items" observation is now
  stale — batches 11/24/25 are populated and the check reports 858/858 — with no effect on this
  pair.)
- **No confirmed unmet prerequisite**: nothing consumed here is absent from both the published
  library and the current scaffold.
- Exact interfaces flagged for Steps 3b/5 (uncertainty; each constituent claim has a home in a
  present item, so no scaffold addition is evidenced as necessary today):
  (a) `Q_N(Rπ_{ν!}k[d_ν])[s_N] = Rπ_{ν,N!}k[d_ν+s_N]` (corollary step 2.1) must be made precise
      from the batch-41 resolution-triple model + six-functor Cartesian exchange + perverse
      normalization, and the `s_N` shift convention fixed. The supplier states the Hom comparison and
      the descent identification, not this pushforward compatibility verbatim; if Step 3b cannot
      derive it from the stated clauses, the minimal scaffold addition would be one clause on `Q_N`
      commuting with equivariant pushforward along `π_ν` (evidence of absence: no scaffold item
      states it; the nearest clauses are `lem-cartesian-simplicial-sheaves-model-…`'s image
      description and `thm-constructible-six-functors-…`'s Cartesian exchange).
  (b) The finite Grassmannian model `B_N=∏Gr(β_i,N_i)` with tautological bundles and the
      resolution-triple model `X_N=(U_N×X)/G` must be matched through the frame bundle (corollary
      steps 2.1/3.1).
  (c) `j^*IC_Z(L)=IC_{Z∩U}(L|_{Z^{sm}∩U})` is an inline consequence of batch-40's
      intermediate-extension description plus open base change, not a stated supplier clause; it must
      be proved inline, not cited.
  (d) The compact theorem must be applied to `\barπ_{ν,N}` on the lemma's smooth projective
      source/target before the ordinary open base change back to `E_N`.
- Optional enrichment observation (not a scope defect): VV (1.5) additionally states the
  dual/normalization clause `L_y^∨=L_y[2d_y]` (equivalently, in the library's `d_ν`-shifted
  normalization `L_ν` is self-dual, a short consequence of the six-functor supplier's normalized
  dualizing object `ω_X^G=k_X[2d]`). The corollary claims only semisimplicity; no declared consumer
  requires the dual clause verbatim (batch 10's self-duality is KLR-module projective duality, batch
  47 leaves semisimplicity here), so no scaffold addition is demanded. The owner may consider it as
  later enrichment.

## 4. Uncertainty and limits

- Scope only: proof correctness is not assessed here (Steps 3b/5 own that). The interface clauses in
  §3 are the residual uncertainty; my reading of the batch-37/40/41/42/48 supplier statements
  supports their availability, but I did not carry out the derivations.
- I re-read VV §1.1–1.3 and Bozec §1.1 from the fetched PDFs; BBD 6.2.5/6.2.7 and Milne §§6.m–6.n
  were read by the coverage analyst (fetch stamps recorded) and not re-read by me in full.
- The scaffold is draft; this review is not item approval, gate evidence, or an owner decision.

## 5. Decision

`sufficient` for `quiver-full-flag-projective-semisimplicity`: the planned definitions, result and
examples adequately cover the intended subject (semisimple proper full-flag direct images in the
equivariant characteristic-zero setting, finite loopless quivers with arbitrary multiplicities); the
design inventory is realized item-for-item; no confirmed unmet prerequisites; the four interface
clauses are Step-3b obligations within the present scaffold, not scope omissions.
