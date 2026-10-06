# Step 3b authoring — pair `bochner-inversion-and-plancherel-on-lca-groups`

- Run `frontier-39-analysis-30`; role alpha-high; label
  `step3b-pair-bochner-inversion-and-plancherel-on-lca-groups-61619886910f0272`.
- A page `bochner-inversion-and-plancherel-on-lca-groups` (order 510.06503,
  batch 26) / B page `bochner-inversion-and-plancherel-on-lca-groups-examples`
  (order 510.06504, batch 26), category `fourier-analysis`.
- Owned items, in the dispatch's authoring order (dependency level, then
  page order and item ID):
  1. `def-fourier-transform-on-an-lca-group` (0)
  2. `def-positive-definite-function-on-an-abelian-group` (0)
  3. `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` (1)
  4. `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` (1)
  5. `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` (1, B)
  6. `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` (2)
  7. `lem-lca-translations-and-normalised-local-approximate-identities` (2)
  8. `lem-lca-positive-convolution-squares-form-an-inversion-core` (3)
  9. `lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations` (3)
  10. `lem-lca-lone-character-topology-is-the-compact-open-topology` (4)
  11. `lem-lca-scalar-unitization-character-space-and-spectrum` (5)
  12. `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` (6)
  13. `thm-riemann-lebesgue-lemma-on-lca-groups` (6)
  14. `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` (7)
  15. `lem-bochner-functional-extends-and-has-a-radon-representing-measure` (8)
  16. `thm-bochner-theorem-for-lca-groups` (9)
  17. `cor-normalised-positive-definite-functions-correspond-to-probability-measures` (10)
  18. `thm-compatible-dual-haar-normalisation` (10)
  19. `ex-a-character-is-positive-definite` (10, B)
  20. `thm-lca-fourier-inversion-for-integrable-transform` (11)
  21. `lem-lca-parseval-pairing-on-the-integrable-core` (12)
  22. `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` (12, B)
  23. `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` (12, B)
  24. `ex-haar-normalisations-on-the-circle-and-the-integers` (12, B)
  25. `thm-lca-plancherel-isometric-extension` (13)

## Inputs read at entry

- `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`,
  `briefs/tasks/frontier-dependency-ledger.md`.
- Batch-26 manifest `research/frontier-39-analysis-30-batch-26.pages.json`
  (identical content in `library` once authored), coverage
  `research/frontier-39-analysis-30-batch-26.coverage.json` (read for the
  Step-3a checks; not re-harvested), and the empty cross-batch input
  `research/frontier-39-analysis-30-batch-26.cross-batch-dependencies.json`.
- Step-3a scope review
  `research/frontier-39-analysis-30-step3a-pair-bochner-inversion-and-plancherel-on-lca-groups.md`
  and the scope receipt
  `research/frontier-39-analysis-30-step3a-review-bochner-inversion-and-plancherel-on-lca-groups.json`
  (decision `sufficient`).
- Batch-26 scaffold note `research/frontier-39-analysis-30-batch-26.notes.md`
  (conflicts recorded: item-4/item-12 boundary; B4 source attribution).
- Controlling design `research/plan-fourier-analysis-track.md` §FR-16
  (L1044–1279), including the mandatory local routes and the local
  supplier-edge table; `research/plan-spec.json` for this page.
- Fetch cache `/tmp/b26src/` (Loomis `loomis.pdf/.txt`, Körner
  `koerner.pdf/.txt`, Einsiedler–Ward `ew.pdf/.txt`, Taylor `taylor.pdf/.txt`)
  byte-checked by Step 3a on 2026-10-05.

## Open obligations at entry

- 25 item files and the two page files are absent and must be authored from
  the frozen manifest statements (no scope edit allowed without an owner
  proceeding; the scope receipt hashes `id/kind/title/statement` of both
  pages).
- `research/frontier-39-analysis-30-batch-26.proof-contracts.json` is absent;
  each proof-bearing item owes its per-step derivation contract, citation
  contracts, and the eight-axis boundary worksheet.
- Proof-formatting rule: every numbered step ends with valid `[tags]`, the
  final step with `[tags] ∎`; steps separated by blank lines; run
  `node tools/proof-layout.mjs items/<id>.md ...` once after the final edit
  over all 25 paths.
- Item decisions via `tools/step3-decisions.mjs record-item` (confidence 1,
  examined dependency IDs, concrete evidence) once each item is authored and
  checked. No judge/audit stamps and no `--owner`.
- The B-page counterexample `cex-a-continuous-function-of-modulus-at-most-one-...`
  is authored on the A/B dependency clock even though it is a B leaf; its
  supplier is the published definition pair only.

## Checkpoint log

1. `def-fourier-transform-on-an-lca-group` — authored with the frozen
   statement (conjugate-phase convention, `L^1` contraction to `ℓ^∞`,
   well-definedness on classes, no dual measure). Deps unchanged. Checks:
   precheck `0 checked` (definition), rendercheck OK. Sources read: Loomis
   §34 and EW C.2-C.3 locators from the manifest.
2. `def-positive-definite-function-on-an-abelian-group` — authored; the
   elementary consequences (φ(0)≥0, φ(x)=conj φ(-x), |φ(x)|≤φ(0)) are
   derived in the body. Deps unchanged. Checks: precheck `0 checked`,
   rendercheck OK (one multiline-display defect found and fixed).
3. `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite`
   — authored: well-definedness with |φ|≤μ(Ĝ), finite-matrix positivity via
   `|Σc_jγ(x_j)|²`, uniform continuity by inner regularity of the finite
   Radon measure on the open set Ĝ plus joint continuity and a finite
   compact subcover (no sequential DCT, so non-first-countable duals are
   covered). **Deps added to the item (manifest to be updated with the other
   additions):** `def-pontryagin-dual-and-compact-open-topology`,
   `def-nonnegative-lebesgue-integral`,
   `def-integral-of-a-nonnegative-simple-function`,
   `thm-linearity-of-the-lebesgue-integral-on-l-one`,
   `thm-integral-triangle-inequality` (all published, earlier pages; all
   published suppliers, so level 1 is unchanged). Checks: precheck PASS
   after adopting the canonical layer numbering, rendercheck OK, proof-layout
   5 steps 0 defects.

4. **Local scaffold repair and new prerequisite.** The frozen scaffold
   argument route for `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra`
   (step 1a of the design) proves that the involution is isometric via
   "the pushforward of Haar measure under inversion is Haar and the double
   pushforward forces the scale to be 1", which uses uniqueness of Haar
   measure up to scale — published only under AC
   (`thm-uniqueness-of-left-haar-measure-up-to-scale`), while the item is
   frozen with the hypothesis `Assume Dependent Choice`. I therefore added
   the local A-page prerequisite
   `lem-lca-haar-measure-is-inversion-invariant` (level 0, `local_addition`),
   proved under DC by the Pedersen second-proof comparison argument
   (Fubinito for continuous compact kernels, the canonical directed set of
   symmetric cutoffs, the estimate |I(f)−γ_λJ(f)| ≤ η_E γ_λ, Cauchyness of
   the ratios and order-completeness of ℝ), with published DC suppliers only
   (Urysohn cutoff, finite partition of unity, positivity monotonicity, RMK
   uniqueness). Sources: Pedersen pp. 2–5 (fetched and read, complete
   6-page text), Loomis §§31A–31E cross-check.

5. `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` —
   authored: σ-compact essential supports (outer regularity + inner
   regularity on an open set + DC sequences); Tonelli on the σ-finite
   product S×(S+T) gives a.e. absolute convergence and
   ‖f*g‖₁ ≤ ‖f‖₁‖g‖₁ and representative-independence; bilinearity,
   commutativity and associativity by test functions against C_c plus RMK
   uniqueness; the involution is isometric by the new inversion-invariance
   lemma, is involutive pointwise, and reverses convolution on C_c by the
   inversion substitution, extended to L¹ by C_c density and the norm bound.
   **Deps added to the item and manifest (all published except the new local
   lemma):** `def-radon-measure-on-an-lch-space`,
   `lem-lca-haar-measure-is-inversion-invariant`,
   `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
   `thm-c-c-is-dense-in-l-p-for-radon-measures`,
   `thm-rmk-uniqueness-among-radon-measures`,
   `thm-finite-products-of-compact-spaces`,
   `thm-compactness-under-continuous-maps`; the unused ACC-stated
   `thm-tonelli-and-fubini-for-completed-product-measures` was dropped from
   both to keep the choice budget honest. Checks: precheck PASS,
   rendercheck OK, proof-layout 6 steps 0 defects. **Manifest updated** (new
   item inserted before 1a; deps of items 3 and 4 aligned with the item
   files); `manifest-deps` on batch 26: 26 items, 0 errors.
6. `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`
   — **scaffold statement repaired**: the frozen text defined φ as the
   indicator 1_{[-1,1]}, which is discontinuous at ±1, so its assertion
   "φ is continuous" was false. Replaced by the continuous trapezoid
   (φ=1 on [−1,1], φ=2−|x| on [1,2] and [−2,−1], φ=0 outside [−2,2]); it is
   continuous with φ(0)=1, |φ|≤1, yields the same displayed 3×3 matrix at
   x = 0,1,2 (determinant −1) and the explicit witness c = (1,−2,1) with
   value −2 < 0. Id, kind, title and promised claim preserved and the
   refreshed scope decision recorded (`record-scope ... sufficient`,
   2026-10-05, hash db2e64a6...). Checks: precheck PASS, rendercheck OK,
   proof-layout 2 steps 0 defects.

7. `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core`
   — authored: boundedness, integrated positivity for $L_\phi(f)=\int f\phi(-\cdot)$
   by compact partitions plus $L^1$ approximation, Cauchy–Schwarz with the
   symmetric approximate identity, the iterated spectral-radius sup-norm bound
   $|L_\phi(f)|\le\phi(0)\|\widehat f\|_\infty$, and descent to the positive
   transform-core functional. Canonical layer numbering adopted. Checks:
   precheck PASS, rendercheck OK, strict contract clean.
8. `thm-riemann-lebesgue-lemma-on-lca-groups` — authored: continuity on
   $C_c$ by compact-open uniform convergence, continuity in general by $C_c$
   density, the bound, and vanishing at infinity from the compact Gelfand
   character space $\Delta(A^+)$: every superlevel set is closed in the compact
   spectrum and misses $q$. Checks: precheck PASS, rendercheck OK, strict
   contract clean. **Escalated** (see below) because the frozen statement lists
   only Dependent Choice while the route invokes the AC+DC scalar-unitisation
   supplier.
9. `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` —
   authored: transform-algebra density by Stone–Weierstrass on the compact
   character space, the Fubini pairing with the inverse transform, extension to
   $C_0(\widehat G)$, and $\mu=0$ through the Jordan decomposition and
   Riesz–Markov uniqueness; the equal-inverse-transform form is the final step.
10. `lem-bochner-functional-extends-and-has-a-radon-representing-measure`,
    `thm-bochner-theorem-for-lca-groups`,
    `cor-normalised-positive-definite-functions-correspond-to-probability-measures`
    — authored the extension, positivity, Riesz–Markov measure, mass identity
    $\mu_\phi(\widehat G)=k$, uniqueness through the Fourier–Stieltjes theorem,
    the full Bochner equivalence with $\phi(0)=\mu(\widehat G)$, and the
    probability-measure corollary.
11. `thm-compatible-dual-haar-normalisation` — authored the complete local
    construction: Bochner measures of the positive core, consistency
    $\widehat p\,\mu_q=\widehat q\,\mu_p$, local gluing
    $m(f)=\int f/\widehat p\,d\mu_p$, $\mu_p=\widehat p\,m$, inversion for
    every core element, translation invariance and full support, and uniqueness
    of the scale with reciprocal scaling.
12. `thm-lca-fourier-inversion-for-integrable-transform`,
    `lem-lca-parseval-pairing-on-the-integrable-core`,
    `thm-lca-plancherel-isometric-extension` — authored inversion through the
    dense core and a.e. identification, the continuity-point statement and the
    explicit no-pointwise-claim caveat; the Parseval pairing via the
    continuous convolution $f*g^*$; and the isometric extension from
    $L^1\cap L^2$ (no surjectivity), with the simultaneous-approximation
    argument in both norms.
13. B leaves — `ex-haar-normalisations-on-the-circle-and-the-integers` and
    `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` were
    rewritten so that **no B-page item is a supplier**: the two dual
    identifications, the local cyclic dual $\widehat{\mathbb Z/N}\cong\mathbb Z/N$,
    the order $|\widehat G|=|G|$ from the structure theorem and finite-product
    duality, the separation of points, and the Haar property of counting
    measure are proved locally from A-page suppliers. `ex-a-character-is-positive-definite`
    gained a local Dirac-evaluation argument in place of the B-page supplier;
    `cex-lca-fourier-inversion-is-not-an-everywhere-statement-...` replaced its
    two Lebesgue B-page suppliers by A-page Radon/translation-invariance and
    countable-null-set items. Checks: precheck PASS, rendercheck OK, strict
    contracts clean.
14. Manifest, coverage, pages and contracts — every item's manifest deps and
    statement were synchronised with the authored file; the new lemma is
    registered in the coverage file against the Pedersen source (fetch-stamped
    and verified 7/7); both page files were written; the batch-26 strict
    proof-contract file contains all 26 items (citations with exact source
    quotes, one derivation entry per numbered step with complete input lists,
    and item-specific eight-axis boundary worksheets). `depcheck` reports no
    batch-26 finding; the lone-convolution statement's backward link to the
    later identity-criterion item was converted to prose to avoid both a
    forward reference and a dependency cycle.

### Checks actually run (final state)

- `precheck` on all 26 changed items: 24 checked, 0 failing (the two
  definitions carry no proof and are `n/a`).
- `rendercheck` on all 26 items and both pages: OK.
- `proof-layout` once over all 26 changed item paths: 26 items, 143 steps,
  0 defects, no file changes.
- `content-policy research/frontier-39-analysis-30-batch-26.pages.json`:
  26 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict` on the batch-26 contracts file: 26/26 items,
  0 errors, 0 warnings.
- `manifest-deps`: 26 items, 0 errors.
- `item-dependency-levels check --run frontier-39-analysis-30`: no batch-26
  error (the repo-wide run reports only sibling pairs' level drift).
- `validate-plan research/plan-spec.json`: OK, no item-level cycles or
  unresolved ids.
- `coverage-checklist --require-destination`: 2 pages, 73 harvested results,
  0 errors/0 warnings; `source-fetch-check`: 7/7 sources verified (1 newly
  stamped: Pedersen).
- `frontier-dependency-ledger refresh --run frontier-39-analysis-30`: done;
  the batch-26 cross-batch input stays `[]`.
- `depcheck`, `fwdcheck`, `extcheck`, `prosecheck`, `pathcheck`,
  `manifest-integrity`: no finding attributable to batch 26 (repo-wide runs
  still show sibling/published debt outside this pair).

### Added suppliers

- `lem-lca-haar-measure-is-inversion-invariant` (level 0, `local_addition`,
  DC): the only new item; registered in the manifest, coverage (Pedersen
  source stamped), both page files, and the strict contracts. No other new
  items, pages or pairs were created.

### Published concerns and owner resolution

- **Owner decision applied: `thm-riemann-lebesgue-lemma-on-lca-groups`.**
  Preserve the compact-character-space proof route and the full Riemann–Lebesgue
  conclusion. The statement now explicitly assumes the Axiom of Choice and
  Dependent Choice, matching the existing `def-axiom-of-choice` and
  `def-dependent-choice` dependencies and the AC+DC compact-spectrum supplier
  used in [F4]. A DC-only rebuild was not selected. All six direct item
  consumers already assume AC+DC; inspection found no consumer interface or
  proof change necessary. The manifest and both proof-contract records were
  synchronized. The existing Step-3b `escalate` receipt was not rewritten and
  no gate was run in this pass, so workflow receipt closure remains pending.
- **Scope reconciliation after the initial handoff.** The two A-page lemmas
  `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`
  and `lem-lca-positive-convolution-squares-form-an-inversion-core` now state
  DC, which their Fubini, density and approximate-identity proof routes use.
  Their direct mathematical consumers already assume AC+DC. The Fourier–Stieltjes
  transform of a positive measure remains choice-free: its compact-tail proof
  uses only a single Radon compact approximation and a finite subcover.
  `ex-haar-normalisations-on-the-circle-and-the-integers` now states Countable
  Choice and proves the two formulas directly, using Fejer convergence in
  $L^1$; `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` uses
  finite orthogonality and is choice-free; the B5 counterexample now proves
  singleton Haar-nullity for every nondiscrete LCA group and does not depend on
  the AC+DC inversion theorem. The B leaves have no consumers. No downstream
  Statement/Definition edit is needed; source-statement changes do require
  refreshed author/scope evidence before later gates.
- Focused `proof-layout` after these edits: 5 changed items, 24 steps, 0
  defects. `regen-contract-entries` regenerated the 24 proof-bearing batch-26
  contract entries (the two definitions remain n/a). No strict contract
  validation, receipt or gate was run in this reconciliation pass.
- The scaffold statement repair of
  `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`
  (indicator → continuous trapezoid) stands with the refreshed scope receipt.
- No other published defect was confirmed for this pair; the sibling pairs'
  pages, items and manifests were not edited.

### Handoff

Completed item IDs (A unless marked B): `def-fourier-transform-on-an-lca-group`,
`lem-lca-haar-measure-is-inversion-invariant` (new local addition),
`lem-lca-lone-convolution-is-a-commutative-banach-star-algebra`,
`lem-lca-translations-and-normalised-local-approximate-identities`,
`lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations`,
`lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`,
`lem-lca-lone-character-topology-is-the-compact-open-topology`,
`lem-lca-scalar-unitization-character-space-and-spectrum`,
`thm-riemann-lebesgue-lemma-on-lca-groups` (AC+DC hypothesis amended by owner;
receipt pending),
`lem-fourier-stieltjes-transforms-determine-finite-radon-measures`,
`def-positive-definite-function-on-an-abelian-group`,
`lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite`,
`lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core`,
`lem-bochner-functional-extends-and-has-a-radon-representing-measure`,
`thm-bochner-theorem-for-lca-groups`,
`cor-normalised-positive-definite-functions-correspond-to-probability-measures`,
`lem-lca-positive-convolution-squares-form-an-inversion-core`,
`thm-compatible-dual-haar-normalisation`,
`thm-lca-fourier-inversion-for-integrable-transform`,
`lem-lca-parseval-pairing-on-the-integrable-core`,
`thm-lca-plancherel-isometric-extension`, and on the B page
`ex-haar-normalisations-on-the-circle-and-the-integers`,
`ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual`,
`ex-a-character-is-positive-definite`,
`cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`,
`cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions`.

All 26 owned items are authored and registered. The prior authoring receipts
remain 25 `accept` with confidence 1 and one `escalate`; the owner scope review
has resolved the mathematical issues described above, while the relevant
receipts and gates remain pending. The page files
`library/fourier-analysis/bochner-inversion-and-plancherel-on-lca-groups.md`
and `...-examples.md`, the manifest, the coverage row, the cross-batch input and
the regenerated batch-26 contracts file are in place. Owner scope/author
evidence still needs a fresh receipt before later gates; this audit did not
write one.
