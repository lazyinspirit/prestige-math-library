# Step 3a scope review — `character-polynomials-fi-modules-and-representation-stability` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 27 · 2026-10-10
- A page: `character-polynomials-fi-modules-and-representation-stability` (23 items)
- B page: `character-polynomials-fi-modules-and-representation-stability-examples` (4 items)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-character-polynomials-fi-modules-and-representation-stability.json`,
  scope hash `ecee9d80774f23170c20f7c50861e7cf99b8c53a65f3ab6d7658053ec61e1ccb`).

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-symmetric-group-representations-track.md` SYMR-14 row
  (“functorial sequences and eventual characters”) and the SYMR-14 item tables in
  `research/symmetric-group-planning/proposed-inventory.md` §SYMR-14 (17 A rows + 4 B rows).
- Coverage vs design: all 17 design A rows are scaffolded
  (`def-fi-category-and-fi-module` … `cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`),
  and all 4 design B rows are scaffolded (`ex-fi-permutation-module-has-character-x-one`,
  `ex-exterior-square-of-the-fi-permutation-module`, `ex-the-padded-family-for-lambda-two-one-begins-at-rank-five`,
  `cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation`).
- Six scaffolded intermediate joints are additions consistent with the design’s proof-route
  annotations: `lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields`,
  `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`,
  `lem-branching-rule-for-specht-induction-and-coinvariants`,
  `lem-generation-degree-bounds-surjectivity-degree-and-weight`,
  `prop-specht-constituents-of-an-fi-module-have-bounded-first-row`,
  `lem-padded-irreducible-characters-have-character-polynomials`.
- Design restrictions are retained: characteristic-zero fields for weight, uniformity and character
  polynomials; “commutative Noetherian ring containing Q” for the Noetherian theorem; finite-dimensional
  values for uniform stability; exact ranges `n ≥ weight + stab-deg` (Prop. 3.3.3) and padding threshold
  `n ≥ |λ| + λ1`. Step-1 drift verdict for this page was `no-drift`, noting the char-0 convention must be kept.
- Deliberate limits are recorded in the coverage file (15 out-of-scope entries with reasons: FI#-modules,
  H₀/FI-homology, shift functors, central stability, configuration/moduli applications, diagonal
  coinvariants, Schur-functor stability, CEFN Theorems B–F). Corollary 1.6’s numerical content is
  preserved locally as `cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`.
- Intended role: SYMR-14 supplies SYMR-15 Murnaghan. Within the run, batch 28
  `murnaghan-stability-via-fi-modules` is the only mathematical consumer
  (`thm-murnaghan-stability-for-kronecker-coefficients` uses
  `prop-fi-module-realizing-one-padded-irreducible-family`,
  `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`), verified across all
  50 batch manifests; page-level `requires` point here only from the B companion and the batch-28 A page.

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-27.coverage.json` records 40 included
  content dispositions mapped to scaffold items from: CEF arXiv:1204.4533v4 (full 54-pp. text,
  fetch-verified `sha256_16 1ff5dd9d…`, §§1–3.4), CEFN “FI-modules over Noetherian rings”
  (31-pp. full text, `sha256_16 4cb6cebd…`, Theorem A and §2.1–2.2), and Macdonald,
  *Symmetric Functions and Hall Polynomials*, Ch. I §7 Example 14 (padding, character polynomial).
  Two entries are deferred (Prop. 3.2.2, Thm. 3.4.2) and 15 out-of-scope, each with a recorded reason.
- Spot checks against the authoritative sources: CEF Theorem 1.13 (finite generation ⇔ uniform
  representation stability, char 0, finite-dimensional values), Proposition 3.3.3 (stable range
  `n ≥ weight + stab-deg`), Theorem 3.3.4 and Lemma 3.2.7 usage, Proposition 3.4.1’s padded family;
  CEFN Theorem A (Noetherian property over any Noetherian ring) as corroboration for the local
  Q-algebra theorem. Macdonald I.7.14(b)’s padded-Specht character-polynomial attribution is
  corroborated by Narayanan–Paul–Prasad–Srivastava, *Character Polynomials and the Restriction
  Problem*, Algebraic Combinatorics 4 (2021) 703–722 (padded `λ[n]`, threshold `n ≥ |λ| + λ1`).
- Deferred Theorem 3.4.2 is realized on batch 28 as `thm-murnaghan-stability-for-kronecker-coefficients`.

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed the 27 pair-item `deps` from `research/frontier-44-special-representation-examples-28-batch-27.pages.json`;
classified each against `items/*.md` (parsing front-matter `status`), all 50 run batch manifests, and
`research/plan-spec.json`; then expanded the in-run (scaffold) node closure and re-classified its deps.

Result — 63 distinct direct dependencies:

- 40 published library items (front-matter `status: published` verified);
- 23 current-scaffold items: 21 on this A page, one B item, and `def-first-row-padding-of-a-partition`
  on batch-26 `kronecker-coefficients-and-internal-products` (its statement supplies exactly the
  `λ[n] = (n−|λ|, λ1, λ2, …)` convention for `n ≥ |λ| + λ1` used here);
- 0 absent. The in-run closure is 28 scaffold nodes with 41 outside dependencies, all published.
- Page-level `requires`: five published pages (`frobenius-characteristic-and-the-symmetric-group-character-dictionary`,
  `outer-products-skew-specht-modules-and-littlewood-richardson`, `categories-functors-and-natural-transformations`,
  `group-cohomology-as-a-derived-functor`, `noetherian-rings-and-hilbert-basis`) plus the in-run
  batch-26 `kronecker-coefficients-and-internal-products`.

**No unmet prerequisites**: nothing consumed here is absent from both the published library and the
current scaffold. No material uncertainty in this conclusion.

Non-blocking observations (no effect on this pair’s scope):

1. CEF Proposition 3.2.2 (weight subadditivity) is recorded as deferred to
   `murnaghan-stability-via-fi-modules`, but the batch-28 scaffold contains no such item and the deps of
   `thm-murnaghan-stability-for-kronecker-coefficients` do not consume one; the deferral is currently
   orphaned. Recommend the owner either confirm the exclusion or authorize later enrichment on batch 28.
2. B item `ex-exterior-square-of-the-fi-permutation-module` depends on B item
   `ex-fi-permutation-module-has-character-x-one`, consistent with its own statement (“of the previous
   example”); the B page remains a page-level dependency leaf requiring only its A page.

## 4. Uncertainty

Step 3a is a scope review: proof correctness is not assessed here (Steps 3b/5a own that). Macdonald’s
Example I.7.14 was read by the coverage analyst (fetch recorded) rather than re-read in full by me; I
corroborated its key conventions against the live literature above. The owner’s batch-27 scaffold repair
(9 changed contracts, approved claims preserved) is already applied; this review binds the current
manifest scope hash.

## 5. Decision

`sufficient` for `character-polynomials-fi-modules-and-representation-stability`: the planned
definitions, results and examples adequately cover the intended subject; every design row is realized,
no planned content is omitted, and no unmet prerequisites were found.
