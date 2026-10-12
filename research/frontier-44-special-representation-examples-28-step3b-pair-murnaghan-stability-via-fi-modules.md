# Step 3b — scaffold audit and authoring: `murnaghan-stability-via-fi-modules`

Run `frontier-44-special-representation-examples-28`, batch 28 (orders 1586/1587),
role `alpha-high`, label
`step3b-pair-murnaghan-stability-via-fi-modules-4a88d66f05319939`. A page
`murnaghan-stability-via-fi-modules` (15 new items), B page
`murnaghan-stability-via-fi-modules-examples` (2 new items). Category
`special-topics-in-representation-theory`. Only this pair is owned; sibling
pairs in shared carriers are preserved. Report opened at entry 2026-10-10
before any edit.

## Owned IDs and open obligations at entry

A-page items (all authored here, in the dispatch's dependency order):
`def-iterated-schur-coefficients` (L0),
`def-lambda-ring-specializations-and-the-sigma-series` (L0),
`def-first-row-padding-completion-and-the-stabilization-operator` (L2),
`lem-schur-specialization-coproduct-and-plethysm-identities` (L3),
`lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities` (L4),
`lem-vertex-operator-series-for-padded-schur-functions` (L5),
`lem-padding-completion-is-compatible-with-the-internal-product` (L6),
`thm-murnaghan-stability-for-kronecker-coefficients` (L8),
`def-reduced-kronecker-coefficient` (L9),
`thm-brion-formula-for-reduced-kronecker-coefficients` (L10),
`lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients` (L11),
`thm-murnaghan-expansion-for-all-admissible-ranks` (L11),
`lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients` (L12),
`prop-reduced-kronecker-support-satisfies-size-triangle-inequalities` (L12),
`thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product` (L13).

B-page items: `ex-murnaghan-stability-for-alpha-beta-two` (L14),
`cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim` (L15).

Deliverables: 17 item files, `library/special-topics-in-representation-theory/murnaghan-stability-via-fi-modules.md`
and `...-examples.md`, batch-28 manifest/coverage/cross-input updates,
`research/frontier-44-special-representation-examples-28-batch-28.proof-contracts.json`,
17 current item decisions, and this report.

Open obligations at entry:
1. Direct in-run prerequisite pairs to inspect while unfinished (their item
   files do not exist yet at entry):
   `kronecker-coefficients-and-internal-products` (batch 26) supplies
   `def-kronecker-coefficient-and-internal-tensor-product`,
   `def-internal-product-on-symmetric-functions`,
   `prop-power-sums-diagonalize-the-internal-product`,
   `def-first-row-padding-of-a-partition`,
   `def-padded-kronecker-coefficient-sequence`,
   `prop-kronecker-coefficient-is-a-three-character-inner-product`;
   `character-polynomials-fi-modules-and-representation-stability` (batch 27)
   supplies `prop-fi-module-realizing-one-padded-irreducible-family`,
   `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
   `thm-finite-generation-is-equivalent-to-uniform-representation-stability`.
   Author every consumer against the current scaffold interfaces; flag each
   suspended supplier and the exact consuming step; leave the affected item
   decisions escalated until suppliers and proof uses are reconciled.
2. Owner-repair inputs read at entry: `...-owner-batch28-repair.md` (complete
   local compatibility proof sketch, threshold proof route, false native
   coefficientwise-equivalence correction), `...-batch-28.notes.md`,
   `...-owner-authoring-direction.md`, the Step 3a report
   `...-step3a-pair-murnaghan-stability-via-fi-modules.md` (decision
   sufficient; three non-blocking record notes and the BRR (3) erratum).
3. Source carriers: BOR arXiv:0907.4652v2 cached PDF sha256
   `497b2e2219b85a65067662c6a83aeccb8e440f15332bcb17d3842bcf7010ddb0`
   (re-verified at entry); `scratchpad/.../briand-orellana-rosas-kronecker-stability-2009.txt`
   read in full for the mapped claims; BRR arXiv:1607.02887v1 `/tmp/growth.pdf`
   sha256 `09a44a991f4d17550bf75e853547e744a34972e667b8765f9df76e7a50e5a5b2`
   (re-verified at entry).
4. Every assigned item must be authored; definitions carry no numbered proof;
   all proof items need complete arguments with per-step tags and batch-28
   proof contracts.

## Checkpoint log

### 2026-10-10 — items 1–10 authored (A page)

- Level order followed exactly as dispatched. Files written (all `items/<id>.md`,
  draft, `pipeline_run: frontier-44-special-representation-examples-28`):
  `def-lambda-ring-specializations-and-the-sigma-series` (L0),
  `def-iterated-schur-coefficients` (L0),
  `def-first-row-padding-completion-and-the-stabilization-operator` (L2; the
  zero-or-signed-Schur straightening rule proved with the last-column
  vanishing in the sorted determinant),
  `lem-schur-specialization-coproduct-and-plethysm-identities` (L3; genericity
  lemma via Newton + fundamental theorem, coproduct (a) through the
  three-alphabet Cauchy comparison, plethysm (b) through the kernel pairing
  with power-sum diagonalization; the character-free route avoids importing
  BRR equation (3)),
  `lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities` (L4;
  product formula, multiplicativity, Cauchy (both Schur and power forms added
  to the statement as the kernel normalization used downstream), adjunction
  and reproducing kernel),
  `lem-vertex-operator-series-for-padded-schur-functions` (L5; s_nu[-1] via
  the character expansion, first-row Laplace expansion of the transposed
  Jacobi-Trudi matrix, vertical-strip identification proved combinatorially
  from the lattice-word definition),
  `lem-padding-completion-is-compatible-with-the-internal-product` (L6; the
  owner's corrected derivation: kernel identity, adjunction moves with the
  one-letter 1, factorization at Z=tX-1, finiteness, and the Littlewood
  expression),
  `thm-murnaghan-stability-for-kronecker-coefficients` (L8; FI-module route
  against the batch-27 scaffold interfaces),
  `def-reduced-kronecker-coefficient` (L9),
  `thm-brion-formula-for-reduced-kronecker-coefficients` (L10; coefficient
  comparison at a rank where both finite supports are honest and distinct,
  then the three-alphabet form via the reproducing kernel).
- Checks run per batch: precheck PASS on every proof item (canonical
  renumbering adopted where the checker proposed one); proof-layout clean.
- Open at this checkpoint: levels 11–15 (two A lemmas/theorem, one A
  proposition, one A theorem, two B items) plus pages, contracts, decisions.

### 2026-10-10 — items 11–17 authored (A page remainder and B page)

- `lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients` (L11):
  Brion's pairing expanded with the Cauchy, coproduct and plethysm identities;
  orthonormality extracts $c^\alpha_{\rho,\lambda,\theta}$ and
  $c^\beta_{\rho,\eta,\pi}$; the iterated threefold identity of the L0
  definition collapses the middle index; degree equations and finiteness by
  containment in $\alpha,\beta$.
- `thm-murnaghan-expansion-for-all-admissible-ranks` (L11): $\mathbb Z$-linear
  $U_n$ plus $(U_n s_\alpha)*(U_n s_\beta)=U_nR_{\alpha,\beta}$ gives the
  Jacobi–Trudi-completed expansion at every $n\ge0$; the stated admissible
  range is exactly where both inputs are honest partitions; coefficient form
  with signed straightening; rank-four coalescence $2-1=1$ against
  $\bar g^{(2)}_{(2),(2)}=2$.
- `lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients`
  (L12): top-degree collapse $2|\rho|+|\mu|=0$; surviving summand; uniqueness
  of the LR tableau of shape $(\alpha+\beta)/\alpha$ and content $\beta$ by row
  induction on the lattice word.
- `prop-reduced-kronecker-support-satisfies-size-triangle-inequalities` (L12):
  one positive summand; the three differences are $2|\rho|+|\mu|$,
  $2|\theta|+|\mu|$, $2|\pi|+|\mu|\ge0$.
- `thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product`
  (L13): support bound $|\gamma|+\gamma_1\le N$; attainment at
  $\gamma^\ast=\alpha+\beta$ with coefficient 1; $V$-stability from $N$; the
  equal-first-two-parts label $(\alpha+\beta)[N]$ obstructs $\operatorname{im}V$;
  least-ness in the both-nonempty, one-empty and both-empty cases ($N=0$).
- `ex-murnaghan-stability-for-alpha-beta-two` (L14): rank-four character
  computation $g^\delta_{(2,2),(2,2)}$; term-by-term $V$ checks at ranks 8/9;
  reduced coefficients read off the stable row; rank-7 failure; exact
  threshold 8; rank-four coalescence recorded as consistent.
- `cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim` (L15):
  the coefficient of $s_{(n-2,2)}$ equals 2 from rank 6 while the global
  $V$-threshold is 8, so the global product threshold is not a per-coefficient
  sharpness statement.

### 2026-10-10 — post-authoring repairs from the current-input recheck

- Inserted the schema-required proof-section headings missing from three items:
  `## Proof` in `thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product`,
  `## Verification` in `ex-murnaghan-stability-for-alpha-beta-two`,
  `## Counterexample` in
  `cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim`
  (their numbered steps sat directly under the facts block).
- `rendercheck` had flagged 13 multiline `$$…$$` display blocks across 9 items;
  every block was joined to a single source line preserving the mathematics
  (`def-iterated-schur-coefficients`, `def-first-row-padding-completion-…`,
  `lem-vertex-…` (2), `lem-padding-completion-…` (2), `thm-brion-…` (2),
  `lem-bor-…`, `thm-murnaghan-expansion-…` (2),
  `lem-murnaghan-littlewood-…`, `prop-reduced-kronecker-support-…`).
- Four facts cited sources absent from their item's declared deps; the
  declarations were added (defect: dependency):
  `lem-vertex-operator-series-for-padded-schur-functions` +=
  `def-power-sum-and-complete-homogeneous-symmetric-polynomials`;
  `thm-brion-formula-for-reduced-kronecker-coefficients` +=
  `def-kronecker-coefficient-and-internal-tensor-product`;
  `thm-exact-global-stabilization-threshold-…` +=
  `def-iterated-schur-coefficients`; `ex-murnaghan-stability-for-alpha-beta-two`
  += `def-kronecker-coefficient-and-internal-tensor-product`. Manifest deps
  re-synced; recomputed dependency levels unchanged (0,0,2,3,4,5,6,8,9,10,11,
  11,12,12,13,14,15).
- `thm-murnaghan-expansion-for-all-admissible-ranks` had a declared but
  uncited fact [F5]; step 2.1 now uses [F5] for the identification of
  $U_nR_{\alpha,\beta}$ with the $t^n$-coefficient of
  $\sigma[tX]R_{\alpha,\beta}[tX-1]$, and its tags were extended.
- Suppliers authored in-run by the sibling pair batches 26/27 during this
  session (files appeared 22:24–22:41 local): `def-kronecker-coefficient-and-internal-tensor-product`,
  `def-first-row-padding-of-a-partition`, `def-padded-kronecker-coefficient-sequence`,
  `def-internal-product-on-symmetric-functions`, `prop-power-sums-diagonalize-the-internal-product`,
  `prop-kronecker-coefficient-is-a-three-character-inner-product`,
  `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
  `def-uniform-representation-stability-for-consistent-sn-sequences`. Their
  statements were read against the consuming facts and steps; interfaces agree.
  Still unauthored at this checkpoint:
  `prop-fi-module-realizing-one-padded-irreducible-family` and
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`
  (batch 27), consumed by `thm-murnaghan-stability-for-kronecker-coefficients`
  facts F1 and F3 (steps 1.1 and 3.1).
- Checks at this checkpoint: precheck 13/13 clean; rendercheck 19/19 clean;
  content-policy 0 errors; item-dependency-levels 862 items across 100 pages
  clean; proof-contract strict 15/17 entries clean with the only two errors
  being the uncontracted citations to the two still-missing batch-27 items.

### 2026-10-10 — supplier reconciliation completed, final checks, handoff

- Batch-27 suppliers landed during the session and were read against the
  consumers: `prop-fi-module-realizing-one-padded-irreducible-family`
  (authored 22:44 local) matches fact F1 of
  `thm-murnaghan-stability-for-kronecker-coefficients` (sub-FI-module of
  `M(lambda)`, values `V_{lambda[n]}` for `n>=|lambda|+lambda_1` and zero
  below, generated in that degree, weight `|lambda|`, stab-deg `lambda_1`),
  and `thm-finite-generation-is-equivalent-to-uniform-representation-stability`
  (authored 22:53 local) supplies fact F3 used at step 3.1 (finite generation
  over characteristic zero with finite-dimensional values implies uniform
  representation stability, whose conditions (I)–(III) give the finite
  eventual support with constant multiplicities used in steps 3.1/4.1).
  No consumer edits were needed.
- All 17 items carry current decisions: 5 `accept`
  (`def-lambda-ring-specializations-and-the-sigma-series`,
  `lem-schur-specialization-coproduct-and-plethysm-identities`,
  `lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities`,
  `def-reduced-kronecker-coefficient`,
  `thm-murnaghan-stability-for-kronecker-coefficients`) and 12 `repaired`
  (defect types as recorded in the receipts: `format` display/heading
  repairs, `dependency` declaration repairs, `proof` for the previously
  uncited vertex-series fact).
- Final acceptance battery actually run at handoff, against the current files:
  - `precheck.mts` explicit paths, 13 proof items: 13 checked, 0 failing;
  - `rendercheck.mjs` 17 items + 2 pages: clean (after the 13 multiline
    display blocks were joined);
  - `content-policy.mjs` batch-28 manifest: 17 scoped items, 0 errors,
    0 warnings;
  - `proof-contract.mjs ... --strict`: 0 errors, 0 warnings, 17/17 items
    checked (verbatim source quotes, per-step derivations with stated inputs,
    and the eight-case boundary worksheets for every item);
  - `item-dependency-levels.mjs check --run ...`: the 17 owned levels
    verified equal to the dispatch order
    (0,0,2,3,4,5,6,8,9,10,11,11,12,12,13,14,15); the run-wide check currently
    reports label mismatches only in sibling batches whose authors are still
    writing (quiver-full-flag, compact-support, constructible-six-functors,
    geometric-fixed-parts, proper-descent, signed-klr, cyclotomic-klr,
    general-linear-stiefel, Gauss–Manin chains);
  - `validate-plan.mjs research/plan-spec.json --repo . --run ...`:
    FAIL with exactly 4 errors, none in batch 28:
    `def-the-local-ring-at-q-zero` (b-leaf to the published examples page
    `valuation-rings-and-discrete-valuation-rings-examples`), plus three
    undeclared-prereq findings on sibling pages
    `kashiwara-operators-and-crystal-lattices`,
    `character-polynomials-fi-modules-and-representation-stability`
    (`eilenberg-watts-theorem-and-natural-transformations`) and
    `projective-functors-and-the-soergel-functor-in-category-o`. The only
    batch-28 plan message is the inherited `redundant-prereq` advisory on
    `murnaghan-stability-via-fi-modules` (the direct `kronecker-coefficients-and-internal-products`
    require is already reached through
    `character-polynomials-fi-modules-and-representation-stability`); it is
    advisory, unchanged from the scaffold, and reported for Step 4;
  - `proof-layout.mjs` final batched run over all 17 changed item paths:
    17 items, 71 steps, 0 defects.
- Added suppliers: none. No prerequisite item was created on this pair; every
  prerequisite is either a published library item or an in-run batch-26/27
  scaffold item, and the owner-repair-added local lemma
  `lem-padding-completion-is-compatible-with-the-internal-product` was
  already part of the current scaffold (dependency level 6) and is authored
  here.
- Published concerns: the only published defect identified remains the BRR
  arXiv:1607.02887v1 §2.3 equation (3) normalization erratum
  (`z_lambda^{-1}` printed; the standard `z_lambda` normalization is used and
  the printed form was not imported), already recorded with evidence by Step
  3a; no new confirmed defect was found in the published suppliers actually
  used (BOR, CEF, BRR, Macdonald statements were read at the recorded
  locators). Step 3a's two coverage bookkeeping gaps
  (`def-iterated-schur-coefficients`,
  `thm-murnaghan-expansion-for-all-admissible-ranks` have no dedicated
  coverage row) and its note 2 on proof-route edges are non-blocking: the
  authoring route declares `thm-murnaghan-stability-for-kronecker-coefficients`
  in the deps of `thm-brion-formula-for-reduced-kronecker-coefficients`
  (fact F2) and `thm-murnaghan-expansion-for-all-admissible-ranks` obtains
  `R=sum_gamma bar-g s_gamma` from Brion's formula without directly needing
  the stability theorem.
- Open obligations for Step 4 and the engine:
  1. The two required pages
     `kronecker-coefficients-and-internal-products` and
     `character-polynomials-fi-modules-and-representation-stability`
     (batches 26/27) are not yet on disk as library pages; the A page
     requires both (orders before 1586/1587), and the corresponding
     cross-input `page` rows stay open. The B page requires only the A page,
     which is authored.
  2. The run-wide dependency-level and validate-plan failures listed above
     are sibling-batch bookkeeping owned by those pairs; batch 28 has none.
  3. Receipt-closure drift: while batches 26/27 continue to author and edit
     items inside the transitive dependency closure of these 17 items, a
     recorded item receipt hash can be superseded by a later sibling edit.
     Receipts were refreshed against the current closure at handoff time;
     `step3-decisions.mjs check --run … --phase final` then reports zero open
     entries for this pair (while the run-wide check remains open only for
     sibling batches still being written). If sibling writers supersede a
     receipt hash again, the Step-3b gate must be re-run after writers drain,
     and the remaining update requirement is a refresh of these same
     receipts, not a new mathematical obligation.
  4. No unresolved mathematical obligation remains on this pair: all 17
     items are authored, all declared suppliers are authored and read, and
     the strict proof-contract gate is fully clean.
