# Step 3a scope review — `scalar-conservation-laws-and-entropy-solutions`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-scalar-conservation-laws-and-entropy-solutions-0a20bc4b03b6d2af`.
- Pair: A `scalar-conservation-laws-and-entropy-solutions` (order 458.049,
  category `pde`, batch 20) / B
  `scalar-conservation-laws-and-entropy-solutions-examples` (order 458.050).
  A has 31 scaffolded items, B has 13. A requires
  `hamilton-jacobi-equations-and-viscosity-solutions` (in-run batch 19); B
  requires its A page.
- Controlling design: PDE-26 of `research/plan-pde-track.md` (L2243–2300) and
  its additions table `#### PDE-26 additions` (L3806–3826). Drift verdict:
  `no-drift` (`research/frontier-39-analysis-30-alpha-step1-drift.md` L280).
- Decision: **insufficient** — one designed claim (the Oleinik
  estimate/Kruzhkov-admissibility *equivalence* in the bounded class,
  design L2282) is not stated by `thm-oleinik-one-sided-entropy-condition`,
  which delivers only the forward estimate plus a piecewise-$C^1$ implication
  and explicitly disclaims the converse, although the item's own Step-1
  record and coverage row claim the converse is included. Exact evidence and
  owner options in "Scope finding" below. Everything else in the pair is in
  order (all design rows minted, sources re-verified, no unmet prerequisite of
  any consuming item). No scaffold, item, page, coverage or owner record was
  edited by this review.

## Design comparison (item-for-item)

A page — all 23 base design rows (design items 1–23) are present with their
planned content and kinds:
`def-scalar-conservation-law-and-flux`,
`def-distributional-weak-solution-of-a-scalar-conservation-law`,
`prop-classical-solutions-satisfy-the-weak-conservation-law`,
`prop-characteristics-for-a-one-dimensional-scalar-conservation-law`,
`def-piecewise-smooth-shock-and-one-sided-traces`,
`thm-rankine-hugoniot-jump-condition`,
`prop-distributional-weak-solutions-are-not-unique`,
`def-convex-entropy-entropy-flux-pair`,
`prop-viscous-entropy-dissipation-identity`,
`def-kruzhkov-entropy-solution`,
`lem-kato-inequality-for-two-entropy-solutions`,
`thm-kruzhkov-local-l1-contraction`,
`cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions`,
`cor-finite-propagation-for-scalar-conservation-laws`,
`lem-viscous-scalar-laws-contract-spatial-translates-in-lone`,
`lem-vanishing-viscosity-families-are-locally-precompact-in-lone`,
`thm-existence-of-bounded-kruzhkov-entropy-solutions`,
`def-self-similar-riemann-problem`,
`thm-riemann-solver-for-strictly-convex-scalar-flux`,
`thm-oleinik-one-sided-entropy-condition` (finding below),
`cor-lax-shock-inequalities-for-convex-scalar-laws`,
`thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension`,
`thm-entropy-solution-semigroup-on-lone`.
All 10 additions-table rows are present and match their commissioned IDs and
claims (`cor-mass-conservation-for-integrable-entropy-solutions`,
`lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality`,
`cor-global-lone-contraction-from-the-local-kruzhkov-estimate`,
`cor-linfinity-maximum-bound-for-scalar-entropy-solutions`,
`thm-entropy-solution-orbits-are-strongly-continuous-in-lone`,
`lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds`,
`lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality`, and
the three B rows below). One further A item is a disclosed local prerequisite
for the vanishing-viscosity route, not a design row:
`thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`
(smooth-data local existence, smoothing and range bound for the parabolic
problem).

The batch note's inventory (33 A items, three locally minted Step-1 lemmas) is
stale relative to the live manifest (31 A items, one minted theorem,
`mtime` 2026-10-05 05:34). The two dropped local lemmas
(`lem-kato-inequality-for-smooth-functions`,
`lem-lone-time-modulus-from-a-weak-time-difference-inequality`) are now proved
inline in their consumers: the $\eta_\delta=\sqrt{r^2+\delta^2}$ truncation
computation inside `lem-viscous-scalar-laws-contract-spatial-translates-in-lone`
and the "local time modulus" passage inside
`lem-vanishing-viscosity-families-are-locally-precompact-in-lone`. No claim,
hypothesis or source anchor is lost by the change; only the batch note counts
are stale.

B page — all 10 base design rows and all 3 additions are present with matching
IDs/kinds: `ex-burgers-shock-riemann-solution`,
`ex-burgers-rarefaction-riemann-solution`,
`ex-gradient-catastrophe-before-shock-formation`,
`ex-rankine-hugoniot-in-space-time-normal-form`,
`ex-kruzhkov-entropy-inequality-for-a-shock`,
`ex-hamilton-jacobi-primitive-of-a-burgers-solution`,
`cex-expansion-shock-is-weak-but-not-entropic`,
`cex-rankine-hugoniot-alone-does-not-give-uniqueness`,
`cex-pointwise-shock-values-do-not-affect-the-weak-solution` (the design's
non-load-bearing **G/G** counterexample),
`cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux`, and
`ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity`,
`ex-affine-flux-reduces-the-entropy-semigroup-to-translation`,
`ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave`.
No B item is a dependency target of any other page (checked over all 30 run
manifests).

## Scope finding

**F1 (blocking, owner decision required). The designed Oleinik/Kruzhkov
equivalence is not delivered.** Design PDE-26 item 20
(`research/plan-pde-track.md` L2282) commissions: *"For uniformly convex
one-dimensional flux, state the one-sided slope estimate and its equivalence
to Kruzhkov admissibility in the bounded solution class covered by the
source."* The live statement of `thm-oleinik-one-sided-entropy-condition`
states only:

1. a bounded Kruzhkov entropy solution of a uniformly convex law (with datum
   and range in $I$, $f''\ge\kappa>0$ on $I$) satisfies
   $u(t,y)-u(t,x)\le (y-x)/(\kappa t)$ for a.e. $t$ and a.e. $x<y$; and
2. *"In the piecewise $C^1$ weak-solution class, this bound forces every jump
   to be nonincreasing from left to right; for the convex flux, the chord
   criterion then makes each jump entropy-admissible."*

Its strategy closes with *"This is a subclass implication, not a full
equivalence for merely strictly convex fluxes."* No clause of the item
asserts the converse (bounded weak solution + one-sided condition
$\Rightarrow$ Kruzhkov entropy solution) in the bounded class. Three live
artifacts claim that converse is in scope:

- the design clause quoted above;
- `research/frontier-39-analysis-30-batch-20.coverage.json`, A-page [DOW] row,
  harvested heading *"Oleinik's one-sided Lipschitz condition
  $\|(u_x)_+\|_\infty\le 1/(ct)$ and its equivalence with Kruzhkov's entropy
  conditions for convex flux"*, disposition `included`, mapped to this item;
- the item's Step-1 readiness record
  `research/frontier-39-analysis-30-step1-thm-oleinik-one-sided-entropy-condition.json`:
  *"the converse equivalence in the bounded class is sourced to [DOW]
  Introduction (Oleinik's condition E), with the piecewise $C^1$ reduction to
  the chord condition proved locally."*

Evidence read for this finding (fetched and read in full where cited):
[KL] §5.1 conditions (5.4)–(5.7), printed pp. 31–33 (I re-fetched the
lecture-note text; 538 068 bytes, `sha256_16 65ed856b2a0e7685`, identical to
the coverage stamp). [KL] derives (5.4)–(5.5) for smooth solutions and then
states the jump condition (5.6) *"in the class of piecewise smooth
solutions"* — it does not state the converse for general bounded weak
solutions. [DOW] printed p. 2 (re-fetched; 150 057 bytes,
`sha256_16 b089673b6a1a53e6`, identical to the coverage stamp) asserts the
general statement only as background: *"One can show that for convex flux,
the two entropy conditions (2) and (3) are equivalent. Hence Oleinik's
'condition E' – and Kruzhkov's entropy solutions coincide."* — without a proof
in the harvested range. So the commissioned equivalence is a classical
literature claim whose proof route is not in the fetch-verified harvest, and
the scaffold's narrower remark is mathematically honest but is not what the
design, coverage and Step-1 record commission.

Uncertainty statement: the design phrase "in the bounded solution class
covered by the source" could be read narrowly as the piecewise-smooth class
in which [KL] states its admissibility condition — under that reading the
delivered item is faithful. I do not resolve this ambiguity, because the
pair's own Step-1 record and coverage row take the wider reading; the owner
should. What is *certain* is the internal inconsistency: the statement
disclaims a converse that the item's own evidence record declares in scope.

Proposed owner action (either is sufficient; both are owner-only):

1. **Enrich.** State the classical equivalence for uniformly convex flux in
   the bounded weak-solution class (Oleinik condition E $\Leftrightarrow$
   Kruzhkov admissibility), with a declared proof route and a complete source
   for it (e.g. a treatment of Oleinik's uniqueness-in-class-E theorem, or the
   [DOW]/Panov restricted-entropy route), and adjust the strategy's final
   sentence; or
2. **Record the reduction.** Keep the one-sided estimate plus piecewise-$C^1$
   admissibility implication, reword design item 20 and the [DOW] coverage
   row to the one-sided form, correct the Step-1 record text, and record
   `proceed` for the resulting scope.

**F2 (minor, coverage alignment; not blocking by itself).** The B-page
coverage row [IVR] *"§12.1.3 Example 12.1.1: the rarefaction–shock
interaction"* is dispositioned `inline` to
`ex-hamilton-jacobi-primitive-of-a-burgers-solution`, but that item treats the
pure centred rarefaction for $u_0=\mathbf 1_{(0,\infty)}$ and its normalized
primitive; it states no interaction, and its own reference list cites only
[KL] §6.1–6.2. Recommend aligning the coverage locator/disposition with the
item (or recording the interaction connection explicitly at authoring time).
The `inline` disposition means this is not a scope loss.

## Source coverage

- `coverage-checklist.mjs` over batch 20 (re-run 2026-10-05): 2 pages, 60
  harvested results, 0 errors, 0 warnings.
- A page: 5 source rows. [KR] carries a documented `source_resolution` drop
  (the full text was read manually during construction, but the unattended
  gate fetch of that row timed out; the identical URL is fetch-verified on the
  B page). Its 10 per-item `alternatives` map exactly onto the 10 items whose
  coverage rows point at it, re-anchoring every result on complete
  fetch-verified treatments. [KL] 538 068 B/`65ed856b…`, [BCL] 718 497 B/
  `ef163b4f…`, [IVR] 4 626 594 B/`02c9eb1e…`, [DOW] 150 057 B/`b089673b…`
  are all fetch-verified.
- B page: 4 source rows, [KR] fetch-verified (1 332 147 B/`1906bc61…`), plus
  [KL], [BCL], [IVR].
- I independently re-fetched [KL] and [DOW] today; both are byte-identical to
  their stamps, and I read [KL] §5.1 pp. 31–33 and [DOW] pp. 1–2 for the F1
  finding.
- Design source substitution (recorded, not a scope gap): the design names
  [E] (Evans) §3.4 as primary backing (`plan-pde-track.md` L2685, L3260,
  L3403) and several additions tag *S:[E] §3.4*, but no run-level [E] row
  exists in batch 20; every affected item is re-anchored on [KL], [BCL], [IVR]
  or [DOW] rows, all fetch-verified complete texts. No claim rests on an
  unstamped or unharvested source.
- The A-page [KR] drop is an inherited operator re-stamp option
  (batch-20 note, "Source resolution"); it does not remove any mathematical
  claim.

## Prerequisites, dependencies and intended role

- Direct dependency resolution (script over `items/` + all 30 run manifests):
  A page 91 distinct dependency IDs, B page 38 (109 distinct over both);
  **0 unresolved**. 43 (A) and 22 (B) distinct statement/strategy wikilinks
  (57 over both) resolve to published or in-run items; **0 unresolved**.
  `manifest-deps.mjs` batch 20: 44 items, 0 normalized, 0 errors; all 30
  manifests: 899 items, 0 errors.
- In-run cross-batch suppliers used by the pair are exactly batch 1
  (`def-parabolic-cylinder-and-parabolic-boundary`), batch 9
  (`thm-frechet-kolmogorov-compactness-criterion-in-lp` with its Countable and
  Dependent Choice carriers) and batch 19 (eight Hamilton–Jacobi items:
  `def-hamilton-jacobi-cauchy-problem`, `def-discontinuous-viscosity-solution`,
  `def-hopf-lax-operator`, `def-legendre-transform-of-a-hamiltonian`,
  `def-viscosity-subsolution-and-supersolution`,
  `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
  `cor-hopf-lax-is-a-contraction-in-the-supremum-norm`,
  `lem-hopf-lax-infima-localise`). All are present in those manifests; the
  page-level `requires` edge to the batch-19 A page is declared in
  `plan-spec.json` (458.047 < 458.049) and in the manifest.
- `step1-decisions.mjs check --run frontier-39-analysis-30`: 899/899 items
  ready, run closed — no stale Step-1 record blocks this pair.
- No unmet prerequisite of any consuming item was found: every claim used by
  an item is supplied by a published item or an in-run scaffold item, both
  directly and through the resolved wikilinks. The Oleinik converse (F1) is an
  unconsumed planned claim, not a prerequisite of another item; it is the only
  confirmed gap found. No other uncertainty of consequence was identified.
- Intended role: the A page is the scalar-conservation-law reference page of
  the PDE track; `plan-spec.json` records exactly one consumer page, its own B
  companion. The design's further reading inputs (PDE-2, PDE-7–8, PDE-15,
  PDE-25, MT-4/7–11/14–15, FA-24, published integration and convexity results)
  are consumed through item-level dependencies on published items and the
  in-run batches above; the manifest's actual closure resolves them.

## Inherited, outside this pair

- The batch-20 note's open batch-11 ledger row
  (`ex-neumann-laplacian-has-a-zero-constant-mode` resting on
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains`) is owned by
  the batch-11 writer and does not touch this pair.
- The batch note's reported staleness in other batches' Step-1 records is
  cleared: the run-wide Step-1 check now reports 899/899 ready.

## Checks actually run (2026-10-05)

| check | result |
|---|---|
| `coverage-checklist.mjs research/frontier-39-analysis-30-batch-20.coverage.json --require-destination` | 2 pages, 60 results, 0 errors, 0 warnings |
| `manifest-deps.mjs` batch 20 | 44 items, 0 missing, 0 errors |
| `manifest-deps.mjs` all 30 batches | 899 items, 0 missing, 0 errors |
| `step1-decisions.mjs check --run frontier-39-analysis-30` | 899/899 ready, closed |
| wikilink resolution (own script, both pages) | 57 distinct targets, 0 unresolved |
| direct dep resolution vs published ∪ run manifests | 109 distinct (A+B), 0 unresolved |
| re-fetch [KL], [DOW] | byte-identical to coverage stamps |
| `step3-decisions.mjs record-scope` | see receipt (decision `insufficient`) |

Recording: `node tools/step3-decisions.mjs record-scope --run
frontier-39-analysis-30 --page scalar-conservation-laws-and-entropy-solutions
--decision insufficient --reason "…"` with the F1 text and this report path.
