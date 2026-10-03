# Step 3a scope review — `jucys-murphy-elements-and-seminormal-forms`

- Run: `frontier-38-owner-30`, batch 19, role alpha (step 3a scope review).
- A page: `jucys-murphy-elements-and-seminormal-forms`.
- B page: `jucys-murphy-elements-and-seminormal-forms-examples`.
- Scope decision: **sufficient** (receipt recorded with
  `tools/step3-decisions.mjs record-scope`; report path this file).
- This report decides scope only. It is not an item approval, proof review, or
  owner record.

## Inputs read (exact paths)

- Design: `research/plan-symmetric-group-representations-track.md` — row `SYMR-5`
  (L36), the inherited-ownership section including the cross-library
  reconciliation clause that SYMR-5 requires
  `braided-and-symmetric-monoidal-categories` (L97) and the branch-separation
  plan (L207 ff.), and the commissioned inventory
  `research/symmetric-group-planning/proposed-inventory.md` L126–L152
  (A table L128–L146, B table L148–L155).
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair listed at L29; no pair-specific clause — general local-prerequisite and
  gate rules only).
- Contract: `research/plan-spec.json` rows for order 807/808 — page records,
  `requires`, **empty** `items` arrays.
- Manifest: `research/frontier-38-owner-30-batch-19.pages.json`
  (A: 18 items, B: 4 items, one pair, B companion requires only A).
- Coverage: `research/frontier-38-owner-30-batch-19.coverage.json`
  (5 source records, 63 harvested headings).
- Construction record: `research/frontier-38-owner-30-batch-19.notes.md`
  (route corrections, three local prerequisites, scaffold-time exact rational
  checks, authoring obligations).
- Drift and readiness: `research/frontier-38-owner-30-alpha-step1-drift.md`
  (L84–87), `research/frontier-38-owner-30-drift-evidence.json` (entry
  `jucys-murphy-elements-and-seminormal-forms`), `research/frontier-38-owner-30-step1-<id>.json`
  (22/22 `ready` per the batch notes).
- Dependency records: `research/frontier-38-owner-30-batch-19.cross-batch-dependencies.json`
  (empty input), `research/frontier-38-owner-30-scope-ledger.json` (pages
  807/808 in batch 19, `allow_in_run_dependencies: true`).
- Independent source verification performed for this review (2026-10-03):
  - Okounkov–Vershik, arXiv `math/0503040` (31 pp): confirmed Theorem 2.1 and
    Lemma 2.2 (conjugation to inverse inside `S_{n-1}`), Theorem 2.5's
    `Z(n) ⊂ ⟨Z(n−1), X_n⟩`, **Corollary 2.6** (`GZ(n) = ⟨X_1,…,X_n⟩`),
    Proposition 5.3 (tableau ↔ content-vector bijection), **Theorem 5.8**
    (`Spec(n) = Cont(n)`) and the `Cont(n)` predecessor/collision conditions at
    (5.1); also confirmed the loose `Z(n−1,1) ⊂ ⟨Z(n−1), Z(n)⟩` line in the
    printed proof of Theorem 2.8 recorded by the scaffold.
  - Garsia notes via the Internet Archive snapshot recorded in the coverage
    file: SHA-256 `5942dfd8e4b03118511e66d41a84cb8b740b42db5d2ccda67a707b8af1d0d20b`,
    374025 bytes, 53 pp — byte-identical to the coverage record. Confirmed:
    Theorem 3.1(a)–(d); Theorem 3.2 (`C_2 e(T) = (n(λ′)−n(λ)) e(T)`);
    Theorem 3.3 (`m_k e(T) = c_T(k) e(T)`); Theorems 3.4–3.5 (interpolation
    projectors, `e(T) = P_T(m_2,…,m_n)`); Theorems 4.2–4.4 (seminormal matrices
    and chain-independent rescaling `d^λ_s`); Theorem 5.1 with the converse
    discussion pp. 35–36; Theorem 5.2; Theorem 5.10
    (`e_s(m_2,…,m_n) = Σ_{ℓ(ρ)=n−s} C_ρ`).
  - Mathas–Soriano, arXiv `math/0604108` (29 pp): Theorem 3.16, Corollary 3.17
    (primitive idempotents from the separation condition), Proposition 4.13 and
    the non-separated-case discussion are present as cited.
  - James LNM 682 mirror (UMN, 161 pp), SHA-256
    `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`
    (prefix matches the coverage `sha256_16`): §25.1, Theorem 25.4 (Young's
    Orthogonal Form) and the §25.2/25.6 worked `(3,2)` computation are present.

## Design vs delivered scaffold

- All 15 commissioned A-page ids are present in the manifest, id by id:
  `def-jucys-murphy-…`, `lem-jucys-murphy-local-relations`,
  `cor-jucys-murphy-elements-commute-pairwise`, `def-gelfand-tsetlin-…`,
  `lem-relative-centralizer-…-commutative`,
  `thm-relative-centralizer-is-generated-…`,
  `thm-jucys-murphy-elements-generate-the-gelfand-tsetlin-algebra`,
  `def-content-vector-…`, `thm-jucys-murphy-joint-spectrum-…`,
  `thm-primitive-tableau-idempotents-…`,
  `thm-young-seminormal-form-from-jucys-murphy-eigenlines`,
  `thm-young-orthogonal-form-from-seminormal-rescaling`,
  `lem-a-partition-is-determined-by-its-multiset-of-node-contents`,
  `thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center`,
  `thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum`.
  The B page is exactly the four commissioned leaves (S₃ spectrum/projectors;
  `(2,1)` seminormal/orthogonal block; characteristic-2 content-collision
  counterexample; S₄ elementary class sums).
- Three local prerequisites are added, each closing a named route gap rather
  than expanding the subject:
  `lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group`
  (replaces Okounkov–Vershik's defective Lemma-2.2 choice of `h`),
  `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis`
  (replaces the design route that ran through the Frobenius/one-cycle
  centre-generation branch, which the design keeps off this page), and
  `lem-addable-nodes-of-a-partition-have-distinct-contents` (denominators and
  edge separation). 18 + 4 = 22 items, well under the page cap.
- Recorded route corrections (batch notes) change dependencies and proof
  routes, not claims: generation of `GZ(n)` is now proved by the
  path-idempotent/interpolation route (the design's own row-7 route text);
  the dependency cycle row 7 ← row 10 is removed; the commutativity row no
  longer depends on the local-relations lemma but on Garsia 3.1(a); Maschke is
  dropped from the centralizer row; row 15's dependence on row 14 is dropped.
  No commissioned claim is dropped, weakened, or re-hypothesised in my
  statement-level comparison.
- Statement-level details are equal or stronger at every design row, e.g. the
  joint-spectrum item states the exact Okounkov–Vershik predecessor/collision
  conditions (verified against (5.1) above), and the interpolation item adds
  rational-polynomiality of the projectors.

## Source coverage

- Garsia sections 3–5 and Theorem 5.10 are harvested with dispositions: Theorems
  3.1–3.5, 4.2–4.4, 5.1–5.2, 5.10 `included`/`inline` to the A items above;
  the character-polynomial machinery (5.3–5.9) is declined with a written
  reason (later character-computation topic; the one class-sum evaluation used
  here is carried by 5.10). The live UCSD URL is recorded `dropped`
  (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`, six attempts, two searches) and the
  byte-identical archive snapshot entry is fetch-stamped with per-item
  alternatives; I re-downloaded it and the hash matches exactly.
- Okounkov–Vershik §§1–7: 32 harvested headings, of which Prop. 1.4, Thm 2.4,
  Rem 2.7, Rem 3.3, Rem 5.6–5.7, Rem 6.3, Prop 7.2, Thm 7.3 and §8 are
  declined with reasons (general star-algebra criteria, DAHA, adic
  transformations, generalized centralizers, Murnaghan–Nakayama owned by
  SYMR-4). Everything the page uses is marked `included`/`inline`.
- Mathas–Soriano: separation/projector results used as an independent check on
  the interpolation item, and the non-separated/modular boundary explained;
  Hecke q-contents and cellular generality are declined (SYMR-7 territory).
  James §25 supplies the textbook orthogonal-form treatment.
- Mechanical coverage state (run today): `coverage-checklist --require-destination`
  → 63 harvested results, 0 errors, 0 warnings; `source-fetch-check` → 4/5
  fetch-verified, 5/5 resolved (one documented drop); `manifest-deps` → 22
  items, 0 errors; `content-policy --manifest-only` → 22 scoped items, 0/0;
  `manifest-integrity` → 60/60 pages, no scope drift;
  `item-dependency-levels check` → 804 items, no error reported.

## Subject coverage (definitions, results, examples)

- Commuting family: integral definition over any commutative ring with the
  `S_{n-1} ⊂ S_n` compatibility and the `X_k = T_k − T_{k−1}` form; local
  relations with adjacent transpositions (the `H(2)` algebra); pairwise
  commutativity. The integral normalization the design requires for later
  residue/modular functors is present.
- Gelfand–Tsetlin structure: definition of `GZ(n)`; commutativity of the
  relative centralizer; `Z(C[S_n], C[S_{n−1}]) = ⟨Z(C[S_{n−1}]), X_n⟩`;
  `GZ(n) = C[X_1,…,X_n]`; the Young-basis diagonal-algebra theorem and
  maximal commutativity; content vectors; distinct contents of addable nodes.
- Spectrum: the joint eigenvalue law `X_k v_T = c_T(k) v_T`; one-dimensional
  joint eigenspaces; the exact subject to the predecessor and collision
  conditions, with the bijection onto standard tableaux (matches OV Prop. 5.3,
  Thm 5.8); primitive idempotents by interpolation (Garsia 3.4–3.5).
- Explicit Young forms: the seminormal form with `r = c_T(i+1) − c_T(i)` and
  declared left-action triangular phasing; the orthogonal form by positive
  rescaling, with the symmetric orthogonal block and the representation
  assertion.
- Centre and class sums: symmetric-polynomial evaluations give exactly the
  centre (forward direction Garsia 5.1, converse pp. 35–36); elementary
  symmetric evaluations equal cycle-count class sums (5.10).
- B page: the four commissioned computations/boundaries, including a genuine
  sharp-hypothesis failure (characteristic 2, Lagrange denominator 2 = 0) and
  the minimal phasing/braid check — consistent with the plan's worked-example
  policy (§6).

## Unmet prerequisites

- Closure audit of the manifest: all 35 distinct item dependencies resolve
  either to published item files in `items/` (e.g. `def-group-ring`,
  `def-young-tableau-standard-tableau-and-shape`,
  `def-removable-and-addable-nodes-of-a-partition`,
  `cor-complex-specht-restriction-branching-rule`,
  `def-invariant-inner-product-on-a-tabloid-module`,
  `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-…`,
  `thm-class-sums-form-a-basis-of-the-center-of-k-g`,
  `thm-the-symmetric-group-has-the-coxeter-presentation`,
  `def-young-graph`, `cor-paths-in-the-young-graph-index-standard-tableaux`, …)
  or to items inside this pair's own scaffold. All four page-level `requires`
  are published on disk (`library/representation-theory/...`), and the B page
  requires only its A page. **No prerequisite absent from both the published
  library and the current scaffold was found.**
- Spot checks of the load-bearing supplier statements (hypotheses, not proof
  re-derivation; proof review is out of 3a scope): the Hermitian tabloid form is
  positive definite on the permutation space; the branching corollary is stated
  over `C` for the fixed subgroup `S_{n-1}`; the Wedderburn decomposition is
  stated for algebraically closed `k` with `char k ∤ |G|`; class sums are a
  basis of `Z(k[G])`; elementary symmetric polynomials are defined with `e_k = 0`
  for `k > n`. These match what the planned items consume.
- Non-blocking bookkeeping notes recorded for Step 3b/5 only (the named items
  exist either published or in this scaffold, so these are not unmet
  prerequisites and no scaffold edit is requested): the diagonal-algebra item's
  statement uses the `X_k` without listing
  `def-jucys-murphy-elements-of-the-symmetric-group-algebra` among its deps,
  and the same item plus the joint-spectrum item speak of Young-graph paths
  without listing `cor-paths-in-the-young-graph-index-standard-tableaux`; the
  elementary-symmetric item uses class sums without listing
  `def-class-sum-of-a-conjugacy-class-in-k-g`. The row-tableau `T^λ` and the
  deletion `T↓[n-1]` are statement-level conventions of the two Young-form
  items (no published item mints them), so the author should pin them inline in
  the proofs. Uncertainty: I did not re-prove every published supplier (out of
  scope); the two printed-source defects already recorded in the batch notes
  (Okounkov–Vershik Lemma 2.2's choice of `h`, and the loose span/algebra line
  in the printed Theorem 2.8 proof) remain authoring obligations on the local
  items, where the corrected arguments are already planned.

## Scope decision

**Sufficient.** The scaffold carries exactly the commissioned SYMR-5 subject —
commuting family, Gelfand–Tsetlin algebra, explicit Young forms — with all 15 A
claims and all 4 B leaves preserved, three closure-only local prerequisites,
and route corrections that the batch notes document without weakening any
claim. Source coverage is complete for the used ranges, with declines reasoned
and recorded, and the four principal sources were re-verified today (two by
recorded hash) for the exact theorem content this page consumes. No unmet
prerequisite was found; the dependency-edge notes above are passed to
Step 3b/5 as bookkeeping, not as blockers.
