# Batch 14 notes — `cm-math-kam` / `cm-math-kam-examples` (run `physics-cm-qm-gr-79-2026-10-11`)

Role: beta; Step 1 initial authoring. Owned pair: A `cm-math-kam` (order 107),
B `cm-math-kam-examples` (order 108), category
`non-relativistic-classical-mechanics-mathematics`, library `mathematics`.
Binding design: `research/plan-non-relativistic-classical-mechanics-track.md`
§"Cm Math Kam" (L346) and the complete local argument
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/analytic-kam.md` (E28).
Owner direction file `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
read; it constrains this batch only through "preserve claims, drafts only, no
publishing, escalate unmet prerequisites", which is followed.

## 1. Authored inventory (15 items; all `status: draft`, `domain: mathematics`)

| item | kind | level | role |
|---|---|---|---|
| `def-holomorphic-kam-domain-and-diophantine-labels` | definition | 3 | framework: torus, `D_{r,s,h}(Ω)`, holomorphy, norms, Fourier data, Diophantine labels, AC declaration |
| `lem-cauchy-fourier-and-lattice-shell-bounds` | lemma | 4 | Fourier decay, Cauchy bounds, shell counts, exponential sums |
| `lem-truncated-homological-equation-with-conservative-loss` | lemma | 5 | `ν·∂_θu=v` by Fourier division, conservative loss, uniform divisors |
| `lem-kam-affine-taylor-fourier-truncation` | lemma | 5 | affine Taylor splitting, truncation `R=T_KQ` |
| `lem-kam-generator-flow-and-remainder-bound` | lemma | 6 | generator `F`, weighted flow estimates, `2π`-equivariance, quadratic remainder |
| `lem-frequency-reparametrization-by-contraction` | lemma | 5 | contraction retraction `ν+v(ν)=ν₊`, derivative bounds |
| `lem-kam-parameter-sequences-satisfy-all-step-hypotheses` | lemma | 7 | geometric sequences verify every step hypothesis |
| `lem-kam-composed-map-and-derivative-convergence` | lemma | 8 | composed maps: convergence, size, Lipschitz-in-parameter, equivariance |
| `thm-parameter-kam-torus-invariance-and-lagrangianity` | theorem | 9 | limit invariance, quasi-periodic motion, Lagrangian pullback |
| `lem-kam-limit-is-an-embedding` | lemma | 10 | contraction of the angle lift, descent to `T^n`, rank `n`, Lipschitz inverse, embedding |
| `lem-nondegenerate-frequency-reduction-and-alpha-square-smallness` | lemma | 10 | `b=(Dh)^{-1}`, Taylor remainder, `r=√(ε/M₂)`, `ε≤cα²` |
| `lem-diophantine-resonance-slab-measure` | lemma | 5 | slab measure, shell sum `O(α)`, positive-measure Diophantine set, boundary layer |
| `thm-positive-measure-analytic-kam-family` | theorem | 11 | positive-measure family of invariant Lagrangian tori for `ε≤cα²` |
| `lem-kam-conjugation-symmetry-of-the-construction` | lemma | 9 | conjugation symmetry: real data produce real tori (**inventory expansion**, see §5) |
| `ex-two-rotor-kam-model-with-units` (B) | example | 12 | two-rotor model, explicit Diophantine arithmetic, unit restoration |

Dependency levels are 1 + max in-run dep level under the engine's run-wide
`item-dependency-levels.mjs` computation (in-run deps include batch-3
`cm-math-dynamics` and batch-6 `cm-math-canonical` items). All 15 levels were
recomputed mechanically and written to both the item frontmatter and the
manifest.

## 2. Sources, coverage and fetch stamps

* Pöschel, *A Lecture on the Classical KAM Theorem* (v1.3, 2009, arXiv:0908.2234):
  §§1-5 and Appendices A-B, PDF pp. 1-33; complete local retained copy at
  `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/sources-advanced/poschel-kam.pdf`
  (33 pages, sha256 prefix `95503c18…`), inspected for section/page boundaries
  (§1 pp. 1-7, §2 pp. 8-13, §3 pp. 14-19, §4 pp. 20-22, §5 pp. 23-27,
  Appendix A pp. 28-30, Appendix B pp. 31-33).
* de la Llave, *A Tutorial on KAM Theory*: complete PDF at
  `https://www.johndcook.com/KAM.pdf`, fetched for this batch; it is the
  135-page revised/expanded version whose table of contents places the material
  at §3.1 (pp. 24-31), §3.3 (pp. 32-36), §3.4 (pp. 36-40), §3.5 (pp. 40-49),
  §3.6 (pp. 49-58), §6.1 (pp. 92-100), §6.2 (pp. 100-106), §6.3 (pp. 106-110),
  §6.4 (pp. 110-118). The recorded hand-off note "182 pp, §2.x/§5.x" is a
  locator error of the earlier reading record; every item citation was corrected
  to the actual TOC for this PDF (see §5).
* `source-fetch-check.mjs --coverage ... --stamp`: **4/4 sources fetch-verified**
  (both URLs stamped with `fetch_verified`); check mode re-run: 4/4, 0 drops.
* `coverage-checklist.mjs`: 2 pages, 35 harvested results, **0 errors, 0 warnings**.

## 3. Checks actually run (Step-1 battery)

* `tsx-run precheck.mts` over all 15 items: 14 checked (the definition has no
  proof phase body), **0 failing**.
* `proof-layout.mjs` over all 15: 15 items, **84 steps, 0 defects**
  (run after the final edits).
* `rendercheck.mjs` over all 15: OK (no multiline display math, all maths spans
  parse under KaTeX, all frontmatter parses).
* `item-dependency-levels.mjs check --run …`: no batch-14 finding remains;
  the remaining repo errors are other batches' empty inventories plus three
  other-batch label mismatches (`def-smooth-periodic-oscillator-pulse-model`,
  `lem-rescaled-pulse-map-is-c-one-close-to-kick`,
  `ex-cm-chaos-pulse-and-rotation-endpoint-checks`) — outside this batch.
* `manifest-deps.mjs research/…-batch-14.pages.json`: 15 items, 0 errors.
* `content-policy.mjs research/…-batch-14.pages.json`: 15 scoped items, 0 errors,
  0 warnings.
* `depcheck.mjs --quiet`: **no finding for any batch-14 item**; the repo-wide
  FAIL is pre-existing noise elsewhere (`[published-unaudited]` publish receipts
  and `[cited-not-in-deps]` for other items). Two batch-14 findings found by the
  first run were repaired: the item-9 title escape `$\nu$` → `$\\nu$`, and the
  missing `thm-power-series-expansion-in-several-complex-variables` dep of the
  definition item.
* `extcheck.mjs --quiet`: OK.
* `proof-contract.mjs research/…-batch-14.proof-contracts.json --strict`:
  **15/15 items checked, 0 errors, 0 warnings** (contracts generated from the
  final carriers: every fact link carries an exact quote from the named source
  section and a complete `uses` map; every numbered step has a derivation entry
  with its exact inputs; all eight standard boundary worksheets are dispositioned
  per item).
* `step1-decisions.mjs check --run …`: 589 items, 589 ready, run not closed —
  the remaining 100 work rows are other batches' empty scaffold inventories; no
  batch-14 finding.
* `manifest-integrity.mjs --run …`: 158 pages owed, 158 present, no scope drift.
* `frontier-dependency-ledger.mjs refresh --run …`: refreshed; the batch-14
  input `research/…-batch-14.cross-batch-dependencies.json` carries 19 rows
  (18 item + the page edge `cm-math-kam → cm-math-canonical`), all `verified`
  with the exact use and location in the consumer item.

## 4. Cross-batch dependencies (all verified, all read at their carriers)

Batch 6 `cm-math-canonical`: `def-cm-phase-domain-and-standard-symplectic-two-form`
(items 1, 5, 9, 10, 11, 13), `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart`
(items 1, 5, 9, 11, 13), `prop-cm-canonical-map-tests-and-hamiltonian-transport`
(items 9, 11). Batch 3 `cm-math-dynamics`: `def-cm-local-flow-of-an-autonomous-system`
(items 5, 9, 14), `lem-cm-continuous-dependence-on-initial-data` (item 5),
`thm-cm-smooth-dependence-and-the-variational-equation` (item 5). All other
suppliers are published root-library items (`status: published`), consumed
read-only. No physics item occurs anywhere in the dependency closure; every
dependency role is `mathematical-premise`.

## 5. Plan/design conflicts and deviations (recorded, not silent)

1. **Inventory expansion (necessary local prerequisite).** The design's item list
   has no item carrying the *real structure* of the construction. The embedding
   claim ("each limiting torus is an embedding") and the physical reading both
   need that the limiting tori are real when the data are real. Added
   `lem-kam-conjugation-symmetry-of-the-construction` (level 9), marked
   `inventory_expansion_required: true` in the manifest; it proves the
   conjugation-symmetry induction over the one-step operations, ODE uniqueness,
   the retraction fixed point, and the limit. No promised claim was weakened;
   the added item only supplies missing structure.
2. **Deviations forced by the local proof (design vs. items).**
   (a) The design's §2 sketch "Set μ=τ+n+1" is not attainable by the local
   arguments as written; the batch consistently uses the conservative
   `μ=τ+3n+2` that the local Fourier/derivative estimates actually prove (the
   source's sharper stated bound is not carried — recorded as out-of-scope in
   the coverage harvest). Constants adapt; no claim changes.
   (b) The design's §4 writes `h_j=4^{−μj}h₀`; the items use `h_j=h₀4^{−j}`
   (weaker decay), and the needed properties (`h_j≤α/(2K_j^{τ+1})`, the sums)
   are proved with that choice in `lem-kam-parameter-sequences-…`. This is a
   strengthening of the achievable statement, not a weakening of the conclusion.
   (c) The recorded hand-off locators for de la Llave (§2.1/§2.4/§2.5/§5.1/§5.2
   of a "182-page" text) do not match the current revised PDF; all citations
   were corrected to the actual TOC (§3.1, §3.3, §3.4, §3.5, §3.6, §6.1-§6.4 of
   the 135-page version) after fetching and inspecting the file.
3. **Page `requires` extension (plan-registry gap class, as in batches 2, 3, 7).**
   `plan-spec.json` declares only four requires for `cm-math-kam`. The final item
   graphs depend on published items homed on seven further *declared* pages, so
   the manifest and the page carrier extend the list with:
   `complex-differentiability-and-cauchy-riemann`, `construction-of-r-via-cauchy-sequences`,
   `fubini-and-change-of-variables`, `contour-integration`,
   `fejer-and-poisson-summability-of-fourier-series`,
   `bounded-linear-operators-and-quotient-spaces`, `connectedness`.
   No shared plan or engine file was edited.
4. **OWNER ESCALATION — one remaining `validate-plan` finding (only open item).**
   `validate-plan.mjs … --run …` reports two errors, both the same plan-registry
   gap: page `cm-math-kam` has items depending on the published library page
   **`holomorphic-functions-of-several-variables`** (host, per the tool's home
   mapping, of `rem-complex-euclidean-space-dictionary`,
   `def-balls-and-polydiscs-in-complex-euclidean-space`,
   `def-separately-holomorphic-function`,
   `thm-power-series-expansion-in-several-complex-variables`,
   `thm-identity-theorem-in-several-complex-variables`,
   `cor-uniqueness-of-multivariable-power-series-coefficients`, all load-bearing
   for the KAM framework), which is **not a declared page in `plan-spec.json`**.
   Adding it to `requires` is rejected (`requires-resolve: not a declared
   page`), and a non-B page may not use `forwardRefs`. The dependencies
   themselves are satisfied by published items (all read-only, all real), so
   this is bookkeeping, not a mathematical hole. Smallest owner-held repair:
   add a `kind: "P"` entry for `holomorphic-functions-of-several-variables`
   (order below 107) to `plan-spec.json`; then the manifest requires list as
   written passes unchanged. Until then the affected-claim scope is exactly:
   the definition item's three suppliers there, and every item citing
   `thm-power-series-expansion-in-several-complex-variables` (items 2, 3, 6, 8,
   10, 15) or `thm-identity-theorem-in-several-complex-variables` (item 9).
5. **Empirical scope.** The batch is pure mathematics; the example is explicitly
   labelled conditional and carries no measurement, probability or empirical
   claim; the theorem's conclusion is a Lebesgue-measure statement. No physics
   qualification had to be propagated because no physics item is consumed.

## 6. AC / choice notes

`def-countable-choice` is declared in the framework definition and in
`lem-diophantine-resonance-slab-measure`; its use is identified there (countable
Fourier sums, lattice shells, countable unions) and is the only choice
convention in the closure. No item reaches `deferred-set-theory-beyond-choice`
through any proof or prerequisite path (checked by construction: all
prerequisites are published items outside that catalogue and in-batch items).

## 7. Handover state

All 15 carriers are nonempty and final; the manifest, both page carriers
(`library/non-relativistic-classical-mechanics-mathematics/cm-math-kam.md`,
`…/cm-math-kam-examples.md`), coverage, cross-batch input, proof contracts and
readiness records exist and are current. Independent review (Step 2) and
adjudication (Step 3) remain; this note records no mathematical approval of its
own. The single open finding is §5.4 (owner-held, plan-side).

## 8. Post-check repairs recorded (final pass)

* `depcheck` repairs (all three): the item-9 YAML escape `$\nu$` → `$\\nu$`;
  the definition item's missing dep on
  `thm-power-series-expansion-in-several-complex-variables`; the
  `lem-nondegenerate-frequency-reduction-…` statement's stale wikilink to the
  sequences lemma, replaced by a link to
  `lem-kam-generator-flow-and-remainder-bound` (the actual home of the step
  constant), which was then added to that item's `deps`.
* `citation-fidelity.mjs research/…-batch-14.proof-contracts.json
  --fail-on-missing-quote`: 157 citations over 15 items — every recorded quote
  appears in its cited section, **0 widening candidates** after adding the
  explicit `n≥1` quantifier to `lem-kam-limit-is-an-embedding`'s fact [F3].
* `citecheck.mjs` over the 15 items: OK.
* Final manifest rebuild (statements/strategies/deps from the frozen carriers)
  and one owner-record update for `lem-kam-limit-is-an-embedding`; the readiness
  records are current (no batch-14 row in `step1-decisions check`). The 15 stale
  records left in the run belong to batch 13 (their own writer's items), not to
  this batch.
* Final tally of the Step-1 battery for this batch: precheck 0 failures (14
  proof-bearing items checked; the definition has no proof phase);
  proof-layout 84/84 steps, 0 defects; rendercheck OK; coverage 0 errors;
  fetch stamps 4/4; manifest-deps 0; content-policy 0; proof-contract strict 0;
  citation-fidelity 0 missing quotes / 0 widening; extcheck OK;
  manifest-integrity no scope drift; only `validate-plan` carries the owner-held
  plan-registry gap of §5.4.
