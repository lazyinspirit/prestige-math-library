# Step 3b authoring report — pair `sr-worldlines-and-clocks` / `sr-worldlines-and-clocks-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha-high.
- Sessions: label `step3b-pair-sr-worldlines-and-clocks-b2d8dbea4ba390da`
  (authoring of the item carriers; its checkpoint log is preserved verbatim at
  the end of this report) and label
  `step3b-pair-sr-worldlines-and-clocks-067dd26755636527` (continuation:
  independent re-read, repairs, contracts, gates and item decisions).
- A page: `sr-worldlines-and-clocks` (order 213, batch 3, `library: physics`,
  category `special-relativity`), 11 items. B page:
  `sr-worldlines-and-clocks-examples` (order 214), 8 items.
- Own only this pair; batch 3 contains only this pair. Sibling pairs were
  inspected as needed and never edited.

## Handoff summary

- All 19 assigned items are fully authored and on disk; the A/B carriers
  `library/special-relativity/sr-worldlines-and-clocks.md` and
  `...-examples.md` are populated with the authored inventories.
- All 19 Step-3b item decisions are recorded (`accept` 13, `repaired` 6;
  confidence 1; examined dependencies recorded in each receipt). No item is
  escalated: every in-run supplier is now authored on disk and the actual proof
  uses were reconciled against it (batch 1 `sr-spacetime-primitives` is
  complete; no owned item declares a batch-2 item dependency).
- Batch proof contracts written at
  `research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json`
  (15 proof-bearing items, exact source quotes, per-step derivations,
  eight-axis boundary worksheets): `proof-contract --strict` 0 errors,
  0 warnings; merged with batch 1 it reports 31/31 items clean.
- Required checks were run at the final state (exact commands and results in
  "Checks actually run"): explicit-path precheck, rendercheck, depcheck,
  fwdcheck, extcheck, content-policy, physics-content, dependency levels,
  proof-layout, validate-plan, proof contracts, cross-batch ledger refresh,
  Step-3 decision check.
- Open obligation: none for the item content. One declared page-level ordering
  prerequisite (`sr-lorentz-transformations`, batch 2) remains incomplete
  elsewhere; the batch-3 ledger row for it stays `open` with that evidence.
  Pre-splice plan mismatches owned by other pages are reported for Step 4.

## Owned item inventory and decisions

| dl | item | kind | domain | page | decision |
|---|---|---|---|---|---|
| 7 | `def-sr-regular-causal-curve-and-worldline` | definition | mathematics | A | accept |
| 8 | `def-sr-proper-time` | definition | mathematics | A | accept |
| 8 | `lem-sr-weak-piecewise-causal-integrability` | lemma | mathematics | A | repaired |
| 9 | `def-sr-piecewise-proper-time` | definition | mathematics | A | repaired |
| 9 | `lem-sr-proper-time-parametrization` | lemma | mathematics | A | repaired |
| 9 | `lem-sr-proper-time-reparametrization-invariance` | lemma | mathematics | A | accept |
| 9 | `cex-sr-null-curves-have-no-proper-time-parametrization` | counterexample | mathematics | B | accept |
| 9 | `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline` | counterexample | mathematics | B | accept |
| 9 | `cex-sr-spacelike-curves-have-no-proper-time` | counterexample | mathematics | B | accept |
| 10 | `def-sr-four-velocity-and-four-acceleration` | definition | mathematics | A | accept |
| 10 | `lem-sr-piecewise-proper-time-reparametrization-invariance` | lemma | mathematics | A | repaired |
| 10 | `ex-sr-proper-time-reparametrization` | example | mathematics | B | accept |
| 11 | `post-sr-free-trajectories-and-clock-hypothesis` | postulate | physics | A | accept |
| 11 | `thm-sr-proper-time-and-observer-decomposition` | theorem | mathematics | A | accept |
| 12 | `pthm-sr-four-velocity-norm-and-orthogonality` | physics-theorem | physics | A | accept |
| 12 | `ex-sr-clock-at-rest-in-a-chart` | example | mathematics | B | accept |
| 12 | `ex-sr-four-velocity-and-acceleration-of-a-circular-worldline` | example | mathematics | B | accept |
| 12 | `ex-sr-observer-split-worked` | example | mathematics | B | repaired |
| 12 | `ex-sr-proper-time-of-a-straight-worldline` | example | mathematics | B | repaired |

Dependency levels were re-verified with
`node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
(no error; the additions below are published imports and do not raise a level).

## Continuation entry state and supplier reconciliation

At entry of the continuation session all 19 carriers existed on disk, item
frontmatter `deps` matched the batch-3 manifest exactly, and no item decision,
proof-contracts file or final checkpoint existed. The earlier session's log
stopped after the three counterexamples (dl 9); the A-page items and examples
with dl 10–12 had been written but not checkpointed.

Supplier reconciliation (2026-10-09):

- `sr-spacetime-primitives` (batch 1): all 19 A-page + 8 B-page carriers are
  authored. The 14 distinct suppliers consumed by this pair
  (`def-causal-classification-of-lorentz-vectors`,
  `def-inertial-frame-and-inertial-chart`, `def-lorentz-form-and-inertia`,
  `def-lorentz-orthogonality-and-orthogonal-complement`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-affine-minkowski-model`, `def-sr-si-units-and-coordinate-conventions`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-affine-minkowski-charts-form-a-smooth-atlas`,
  `lem-lorentz-form-has-orthonormal-basis`,
  `lem-timelike-cone-has-two-convex-components`,
  `post-sr-ideal-clocks-and-light`, `post-sr-inertial-covariance`) were read at
  their statements and the load-bearing proofs (`lem-timelike-cone-has-two-convex-components`)
  were read in full; each supplies exactly the content the consuming step
  records, under the same hypotheses, with no hidden physical premise.
- `sr-lorentz-transformations` (batch 2): the page carrier exists and is ordered
  earlier, and no owned item declares a batch-2 item dependency; its inventory
  is still partially authored elsewhere. The page-level `requires` row in the
  batch-3 cross-batch input remains `open` with that exact evidence; this does
  not block any item carrier or proof use (the page edge is an ordering
  prerequisite only).
- Published imported mathematics used by the pair (FTC and working-FTC
  suppliers, substitution, continuous-inverse and inverse-derivative theorems,
  finite Cauchy-Schwarz, rational/rational-power facts, integral monotonicity
  and vanishing, norm inequality for vector-valued integrals, componentwise
  continuity, etc.) is read-only pinned supplier data; every citation was
  contracted with a verbatim quote that the contract checker found in the cited
  section.

## Repairs made in this continuation

1. `lem-sr-weak-piecewise-causal-integrability` — steps 6.2, 7.3, 8.1 used
   *strict* positivity of integrals of positive continuous functions and the
   value of the integral of a constant, but cited only the non-strict monotonicity
   fact. Added published deps
   `thm-nonnegative-continuous-with-zero-integral-vanishes` and
   `lem-integral-elementary-bounds` (item + manifest) and a new fact [L10]
   stating the strict-positivity criterion and `int_p^q mu = mu(q-p)`; steps 6.2,
   7.3 and 8.1 now cite [L10]. Also reworded step 8.2 so that [L9] is applied
   only to nonzero future causal brackets (the `s*=a` case has no first
   bracket).
2. `def-sr-piecewise-proper-time` — clause (i) justified the strict positivity
   of each piece integral by monotonicity alone. Added
   `thm-nonnegative-continuous-with-zero-integral-vanishes` (item + manifest)
   and rewrote the justification as its contrapositive.
3. `lem-sr-proper-time-parametrization` — moved the forward citation of
   `def-sr-four-velocity-and-four-acceleration` out of the Statement (clause
   (iv)) into a Remark, where the same reference is kept; the lemma does not use
   that later definition, so the cited-not-in-deps warning is gone without
   changing the claim.
4. `lem-sr-piecewise-proper-time-reparametrization-invariance` — added
   `def-vector-valued-derivative-and-integral` to deps (item + manifest): fact
   [L4] uses its differentiability dictionary. Moved the non-load-bearing
   cross-reference to the companion global-C1 lemma from the Statement to the
   existing Remark (the reference and its content are preserved).
5. `ex-sr-observer-split-worked` — step 5.1 cited the B-item
   `ex-sr-proper-time-of-a-straight-worldline`, which cannot be a deps target
   because its statement is `ai-generated`. Rewrote step 5.1 to the
   self-contained nondegeneracy statement and moved the companion-clock
   reference to a Remark.
6. `ex-sr-proper-time-of-a-straight-worldline` — fact [L1] (inertial chart) was
   cited by no numbered step; step 1.1 now carries the [L1] tag where the chart
   is used, so the contract citation-uses worksheet is exact.
7. `research/physics-em-sr-40-2026-10-08-batch-3.pages.json` — deps and
   `dependency_roles` of the three changed items were synced to the item
   frontmatter (atomic write), preserving every sibling row (batch 3 holds only
   this pair).

No claim was weakened, no item or page ID changed, no example became a
dependency, no physical premise was added to a mathematical item.

## Mathematical audit performed in this continuation

Every one of the 19 carriers was re-read in the dispatch dependency order and
its mathematics re-derived independently (not only re-read):

- `def-sr-regular-causal-curve-and-worldline`: transported-norm equivalence by
  bounded linear maps, difference-quotient derivative, one-sided endpoint
  derivatives, piecewise classes, causal character; the frame-independence and
  corner-continuity remarks check.
- `def-sr-proper-time`: continuity of the integrand in an orthonormal basis,
  strict positivity from the future timelike hypothesis, oriented integral,
  base-point additivity, straight-segment value, scope exclusions.
- `lem-sr-weak-piecewise-causal-integrability`: domination `|z'| <= y^{0'}`,
  monotone-limit finiteness, endpoint increments, r-independence, subdivision
  and partition independence, displacement `D^0>0`, `|D_sp|<=D^0`, strict
  timelikeness from an interior or one-sided endpoint timelike tangent, strict
  coordinate-time monotonicity; the two repairs above close the only gaps found.
- `def-sr-piecewise-proper-time`: single `c^{-1}`, partition and chart
  independence, based function strict monotonicity, hypothesis (H), straight
  pieces, concatenation additivity; strict-positivity justification repaired.
- `lem-sr-proper-time-parametrization`: FTC-I derivative, strict monotonicity
  via the vanishing lemma, order-convex image, C1 inverse and `rho'=1/(tau' o
  rho)`, reparametrised worldline and tangent `x'/tau'`, self-parametrisation up
  to the base-point constant.
- `lem-sr-proper-time-reparametrization-invariance`: the broad substitution
  identity for monotone C1 surjections including vanishing derivatives, the
  positive-derivative worldline case and the decreasing case; matches the owner
  direction exactly.
- Three counterexamples: witnesses and failed conclusions recomputed (null
  `k=(1,1,0,0)`; spacelike `d=(1,2,0,0)` with `-eta(d,d)=-3`; past-directed
  `d=(5,3,0,0)` with equal integrand `4`).
- `def-sr-four-velocity-and-four-acceleration`: `U=x'/tau'`, `A=U'/tau'`, the
  identification `U(s)=(x o rho)'(tau(s))`, observer `cn`; the definition
  asserts neither norm nor orthogonality.
- `lem-sr-piecewise-proper-time-reparametrization-invariance`: MVT strict
  monotonicity, common refinement by preimages, chain rule on refined pieces,
  finite positive one-sided quotients, truncation substitution and improper
  limits, partition-sum invariance.
- `thm-sr-proper-time-and-observer-decomposition`: all six clauses re-derived;
  the coordinate identity `eta(A,A)=gamma_w^4|a|^2+gamma_w^6(w.a)^2/c^2` was
  recomputed symbolically; `n^perp` positive definiteness via Cauchy-Schwarz;
  `gamma>=1`, `|w|<c`, iff-characterisation of `gamma=1`.
- `post-sr-free-trajectories-and-clock-hypothesis`: adopted-assumption status,
  scope, idealisations, exclusion of zero-tangent compositions, source-backed
  formulation; roles verified against the physics-content role rules.
- `pthm-sr-four-velocity-norm-and-orthogonality`: each clause traced either to
  an adopted postulate or to a clause of the mathematical theorem; units
  m/s and m/s^2 from the SI conventions; conditional, no empirical claim.
- Four examples: exact rational computations re-derived (clock at rest;
  `beta=3/5` straight clock; cubic reparametrisation `[1,2]` vs `[-1,1]`;
  circular worldline with retained `omega=0` and the `R omega=3c/5`
  specialization), and the observer split `n=e0`, `u=(5/4,3/4,0,0)` with
  `gamma=5/4`, `h(u)=(0,3/4,0,0)`, `w=(0,3c/5,0,0)` and all projection
  identities.

## Checks actually run (final state, exact commands)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <19 owned item paths>` — **15 checked, 0 failing** (the four definitions are non-proof items and are not proof-checked).
- `node tools/physics-support/rendercheck.mjs <19 items> <2 pages>` — **OK** (21 files; no wikilink-in-math, balanced delimiters, every math span parses under KaTeX, every frontmatter block parses).
- `node tools/physics-support/proof-layout.mjs <19 owned item paths>` — **19 items, 113 steps, 0 defects** (single batched run after the final edit).
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-3.pages.json` — **19 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/depcheck.mjs --json` — **0 errors and 0 warnings relevant to this pair** (repo-wide noise is legacy/other pages: 2729 `published-unaudited`, 67 `link-unresolved`, 40 `dep-unresolved`, none in an owned file).
- `node tools/physics-support/fwdcheck.mjs` — no finding mentions any owned item; the run-wide FAIL is caused by other items' forward references.
- `node tools/physics-support/extcheck.mjs` — 0 recorded-not-proved items and 0 resting on them.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` — **no error** over 473 items/80 pages.
- Physics content (scoped loader for the 19 items and 2 pages, `validatePhysicsContent` with `requireBodies`) — **0 errors** (kind/domain boundary, dependency roles, DAG, page lists, physical scope, class structure).
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json --strict` — **0 errors, 0 warnings, 15/15 items**.
- `node tools/physics-support/merge-proof-contracts.mjs --level physics-em-sr-40-2026-10-08 <out> batch-1 batch-3` then `proof-contract --strict` — **31/31 items, 0 errors**; `finite-smoke` 0 errors; `citation-fidelity --fail-on-missing-quote` no widening candidates; `boundary-audit` no template reuse or contradicted dispositions.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` — **no finding for `sr-worldlines-and-clocks` or its examples page**; the run-level FAIL is entirely other pages (34 `undeclared-prereq`, plus `redundant-prereq` rows, on EM/batch-2 pages).
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final` — the pair scope is closed and **none of the 19 owned items appears in the remaining work list** (the run-wide remainder is other, not-yet-authored batches).
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` — 79 batch-3 rows (78 `verified`, 1 page row `open`), 0 orphaned reviews, 0 unreviewed batch-3 edges.

## Proof contracts

`research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json` (version 1,
level `physics-em-sr-40-2026-10-08`, scope = the 15 proof-bearing items; the
four definitions are excluded by the pair convention, and the postulate carries
a `physics_review` worksheet with `formulation`, `scope`, `sources` and
`non_derivation`). For every labelled fact and every linked supplier the
contract records the exact verbatim quote (checked to occur in the cited
section), and `uses` lists every numbered step that cites the fact; every
numbered step has a derivation entry with its claim and its actual inputs, and
every item has all eight standard boundary dispositions with item-specific
evidence or reasons (empty, zero, one, degenerate, endpoints, Choice, and both
iff directions). The quotes were extracted mechanically from the cited
suppliers' named sections and validated by the checker; the claims and
boundary worksheets come from the authored arguments above.

## Cross-batch dependency input

`research/physics-em-sr-40-2026-10-08-batch-3.cross-batch-dependencies.json` now
holds 79 rows: the 47 scaffolder rows were reviewed against the authored batch-1
suppliers (46 item rows → `verified`, with the required content, use location
and the reconciliation statement; the `sr-worldlines-and-clocks ->
sr-lorentz-transformations` page row stays `open` with the exact reason), and the
32 declared cross-batch edges added by the authoring session (they had no review
row) are recorded `verified` with their fact and step location. The unified
ledger was regenerated with the provided tool; no orphaned reviews and no
unreviewed batch-3 edges remain.

## Open obligations

1. **Page-level ordering prerequisite.** `sr-worldlines-and-clocks requires
   sr-lorentz-transformations`; the batch-2 page carrier exists and is ordered
   earlier, its inventory is still being completed by its own owner, and no
   owned item depends on a batch-2 item. The corresponding ledger row remains
   `open`; nothing in this pair is blocked by it.
2. **Other pages' pre-splice plan findings (Step 4).** `validate-plan` reports
   34 `undeclared-prereq` rows and several `redundant-prereq` rows for EM and
   other pages; none concerns this pair. They are recorded here because the
   dispatch requires reporting pre-splice plan mismatches without hiding
   unresolved dependencies; the owning pairs must repair them.
3. **Run-wide legacy check noise.** `depcheck` fails repo-wide on legacy
   published-un-audited mathematics and on unresolved links/deps in other
   in-flight pages; none is in this pair's files or suppliers.

## Published concerns

None for this pair. No imported mathematical snapshot was edited, no published
item was repaired or re-tagged, and no supplier statement used here was found
defective. The owner review of the sources (Crowell Sections 3.5, 3.6, 3.7;
Carroll Chapter 1 pp. 26-27 and Chapter 3 pp. 68-71; Reall Sections 2.2-2.3)
found the load-bearing formulas consistent with the (-+++) / `x^0 = c t`
conventions adopted on this page; the source limitations (Crowell's `(+---)`
and `c=1`, Carroll's and Reall's `c=1`, Crowell's timelike-only velocity vector
and point-particle acceleration) are recorded in the coverage file and the item
references.

## Session A checkpoint log (preserved verbatim)

### 1. `def-sr-regular-causal-curve-and-worldline` (dl 7) — authored

- Claim: curve $x:I\to A$ on order-convex $I$; intrinsic difference-quotient
  derivative in $V$ with transported Euclidean norm; $C^1$, $C^k$, piecewise
  $C^1$ with finite one-sided quotient derivatives (no derivative-limit
  hypothesis); causal character from the model's vector classification;
  future timelike/causal/null curves and (piecewise) worldlines; parametrization
  part of the curve. No choice.
- Repairs: added published dep
  `lem-euclidean-linear-maps-have-matrices-and-are-bounded` (item + manifest)
  because the transported-norm comment must justify frame independence; the
  remark now states that argument explicitly.
- Sources: Crowell §§3.5–3.7; Reall §§2.2–2.3 (locators from coverage).
- Checks: precheck n/a (definition), rendercheck OK.
- Open: in-run supplier carriers (batch 1) not yet on disk.

### 2. `def-sr-proper-time` (dl 8) — authored

- Claim: for $C^1$ future timelike $x$, $g_x=-\eta(x',x')$ continuous and
  positive; $\tau(s)=c^{-1}\int_{s_0}^s\sqrt{g_x}$; oriented integral; base
  point additive; straight-segment value; null/spacelike/past exclusions; no
  clock assertion.
- Repairs: added published deps `thm-componentwise-limits-and-continuity`
  (components of the continuous coordinate derivative) and
  `thm-additivity-over-subintervals` (base-point additivity); removed links to
  physical items and to `def-sr-si-units...` to keep the mathematics item free
  of physical prerequisites.
- Checks: precheck n/a, rendercheck OK.

### 3. `lem-sr-weak-piecewise-causal-integrability` (dl 8) — authored

- Claim: for weak piecewise $C^1$ future-causal curves with nonzero tangents and
  finite one-sided endpoint quotients: (a) $y$ continuous on pieces,
  $y^{0'}\ge|z'|\ge0$, $y^{0'}>0$; (b) finite improper integrals, endpoint
  increments, $f\le y^{0'}$ bound; (c) $r$-independence, subdivision additivity,
  partition independence; (d) $D$ nonzero future causal with $D^0>0$,
  $|D_{\rm sp}|\le D^0$, strict timelikeness from a timelike tangent, strict
  coordinate-time monotonicity. No derivative-limit hypothesis, no choice.
- Repairs: added published deps `thm-componentwise-limits-and-continuity`,
  `lem-rational-power-monotone`, `thm-nth-roots-exist` (componentwise
  continuity; square-root order and uniqueness). Adopted the precheck-proposed
  step layering repair (renumbered 20 steps; references remapped).
- Checks: precheck 1 checked 0 failing; rendercheck OK; proof-layout 20 steps,
  0 defects.
- Open: supplies clause (b)/(c) to `def-sr-piecewise-proper-time`; the
  in-batch consumer is authored before the supplier review.

### 4. `def-sr-piecewise-proper-time` (dl 9) — authored

- Claim: piecewise density $g_i$ with two-ended improper integrals; total proper
  time $c^{-1}\sum_i\int g_i$ partition- and chart-independent; based
  $\tau_x$ strictly increasing with additive base-point constant; corner
  hypothesis (H) reduces to ordinary Riemann integrals and agrees with
  `def-sr-proper-time`; straight pieces; positivity; concatenation additivity.
- Checks: precheck n/a, rendercheck OK.
- Note: exactly one factor $c^{-1}$ in total proper time (owner direction).

### 5. `lem-sr-proper-time-parametrization` (dl 9) — authored

- Claim: $\tau'=c^{-1}\sqrt{-\eta(x',x')}>0$; strict monotonicity; image
  order-convex nondegenerate; $C^1$ inverse $\rho$ with
  $\rho'(b)=1/\tau'(s)$; $y=x\circ\rho$ is a $C^1$ future timelike worldline
  with tangent $x'/\tau'$; $y$ is parametrized by its own proper time up to the
  base-point constant.
- Repairs: manifest dep list was incomplete for the actual argument; added
  (item + manifest): `def-inertial-frame-and-inertial-chart`,
  `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-timelike-cone-has-two-convex-components`,
  `thm-additivity-over-subintervals`, `thm-componentwise-limits-and-continuity`,
  `thm-composition-of-continuous-functions`,
  `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`,
  `cor-differentiable-implies-continuous`, `cor-zero-derivative-implies-constant`.
  Dependency level unchanged (9).
- Checks: precheck 1 checked 0 failing (adopted proposed layering repair);
  rendercheck OK.

### 6. `lem-sr-proper-time-reparametrization-invariance` (dl 9) — authored

- Claim: for monotone $C^1$ surjections $\varphi$ (endpoint one-sided
  derivatives allowed, vanishing derivative allowed): tangent
  $y'=\varphi'\,x'\circ\varphi$ future timelike where $\varphi'>0$, zero where
  $\varphi'=0$, past timelike where $\varphi'<0$; broad integral identity
  $\int\sqrt{-\eta(y',y')}=\int_a^b f=c(\tau_x(b)-\tau_x(a))$; positive-derivative
  case is a worldline with $\tau_y$ and full identity; decreasing case retains
  the integral identity with $|\varphi'|=-\varphi'$.
- Repairs: added (item + manifest) `def-inertial-frame-and-inertial-chart`,
  `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-timelike-cone-has-two-convex-components`,
  `thm-continuous-implies-integrable`,
  `thm-componentwise-limits-and-continuity`,
  `thm-composition-of-continuous-functions`,
  `thm-algebra-of-continuous-functions`.
- Checks: precheck 1/0 (adopted layering repair, 10 steps); rendercheck OK.

### 7–9. Counterexamples (dl 9, B page) — authored

- `cex-sr-null-curves-have-no-proper-time-parametrization`: $k=(1,1,0,0)$
  future null straight line; integrand $0$, $\tau$ constant, no unit timelike
  tangent; coordinate speed $c$. Outputs of the refuted claim: proper-time
  parametrization for every regular curve.
- `cex-sr-spacelike-curves-have-no-proper-time`: $d=(1,2,0,0)$ spacelike,
  $-\eta(d,d)=-3$, no real square root; spacelike length $\sqrt3$ is a different
  quantity.
- `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline`:
  $d=(5,3,0,0)$ future timelike, $x(s)=p-sd$ past timelike, same integrand $4$;
  orientation is part of the worldline datum.
- Repairs: added `def-lorentz-form-and-inertia` (item + manifest) to all three
  (bilinearity/chart form of $\eta$).
- Checks: precheck 1/0 each (adopted layering repairs); rendercheck OK.

## Continuation session — label `step3b-pair-sr-worldlines-and-clocks-d699bd68b13f73f8` (2026-10-09 07:46–07:56Z)

This session was dispatched after the preceding two attempts for this pair
failed at the process level (provider errors, no content regression): the
preceding `...-067dd26755636527` session had completed the authoring but exited
nonzero. At entry of this session all 19 carriers, both page carriers, the
proof contracts, the coverage file and the batch-3 ledger input were present
and complete. The work of this session was: entry re-audit of the current
inputs, two citation/composition repairs, refresh of all 19 Step-3b item
receipts to the current transitive hashes, and a final check pass.

### Entry re-audit and the one changed input

The 19 prior receipts existed but were stale against the current transitive
item hashes. A full modification-time audit of each receipt's input closure
found exactly one cause: `items/lem-timelike-cone-has-two-convex-components.md`
was rewritten at 2026-10-09T07:39:35Z, after every receipt was recorded
(07:36:29Z–07:36:48Z); no other input of any owned item changed after its
receipt. The current lemma was re-read in full: its statement (the two
components $T_\pm$ of the timelike set, their openness, convexity and
path-connectedness, the closures and their intersection, and basis
independence) and its proof (steps 1.1–5.1) still supply exactly the facts
consumed by its users: [L3] of `lem-sr-weak-piecewise-causal-integrability`
(openness of the future timelike set, the closure description, strict
positivity of the time coordinate of a nonzero future causal vector), [L5] of
`lem-sr-proper-time-parametrization` and of
`lem-sr-piecewise-proper-time-reparametrization-invariance`, [L7] of
`lem-sr-proper-time-reparametrization-invariance`, remark (iv) of
`def-sr-four-velocity-and-four-acceleration`, and [L4] of
`thm-sr-proper-time-and-observer-decomposition`; the remaining items consume it
transitively through the batch-1 classification items. No incompatibility was
found and no owned claim needed to change.

Every owned carrier was re-read in the dispatch dependency order and its
mathematics re-derived (definitions: difference-quotient derivative, causal
character, worldlines and the proper-time construction; lemmas: the
domination $|z'| \le y^{0'}$, improper-limit finiteness, endpoint increments,
partition independence, strict timelikeness, the FTC derivative, the inverse
and the substitution identities; theorem: all six clauses including
$\eta(A,A)=\gamma_w^4|a|^2+\gamma_w^6(w\cdot a)^2/c^2$; postulate and physics
theorem: adopted-postulate structure, scope and role assignments; five
examples and three counterexamples: exact rational computations). This repeats
the previous session's recorded audit rather than replacing it; the record of
that audit in the body above is preserved.

### Repairs made in this session

1. `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline` — step
   3.1 (final) no longer invokes an undefined “adopted clock reading rule”; it
   now states exactly that, by [[def-sr-proper-time]], the proper-time
   construction attaches to the parametrized history together with its future
   timelike hypothesis and not to the bare image. The refuted claim and the
   witness ($d=(5,3,0,0)$, tangent $-d$ past timelike, equal integrand $4$) are
   unchanged.
2. `ex-sr-proper-time-reparametrization` — step 3.2's dangling reference to a
   nonexistent “clause (iii) of [L4]” is replaced by the direct solution of
   $\tau=(4/c)(s-s_0)$ for the inverse. [L4] remains cited where it is used
   (steps 3.1 and 4.1); the two computations $28/c$ and the $[-1,1]$ boundary
   value $8$ are unchanged.

Both repairs were mirrored in `batch-3.proof-contracts.json` (the step-3-1 and
step-3-2 derivation claims, the step-3-2 inputs, and the L4 citation's `uses`).
No dependency, hypothesis, claim, ID or page membership changed; no sibling or
published content was touched.

### Added suppliers

None. No new prerequisite item was needed in this session; every item's
manifest `deps` and item-file `deps` are byte-consistent (verified for all 19
items), and no supplier was added, removed or re-homed.

### Decisions refreshed

All 19 item receipts were re-recorded with
`step3-decisions.mjs record-item` against the current transitive inputs
(11 `accept`, 8 `repaired`; confidence 1; examined dependency IDs = each
item's current manifest `deps`). At the state of 2026-10-09T07:55Z none of the
19 owned items appears in `step3-decisions.mjs check --phase final`. Note for
the gate: receipts are bound to the full transitive closure, so a later
sibling write to any batch-1/batch-2 supplier can invalidate them again; the
current state is bound and closed.

### Checks actually run (this session, final state)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <19 owned item paths>` — 15 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs <19 items> <2 pages>` — OK (21 files).
- `node tools/physics-support/proof-layout.mjs <19 owned item paths>` — 19 items, 113 steps, 0 defects (one batched run after the final edits).
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-3.pages.json` — 19 scoped items, 0 errors, 0 warnings.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json --strict` — 0 errors, 0 warnings, 15/15 items.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` — no error (473 items / 80 pages, maximum level 24).
- Scoped `validatePhysicsContent` load of the 19 items and 2 pages with `requireBodies` — 0 errors.
- `node tools/physics-support/depcheck.mjs --json` — 0 findings on any owned file (run-wide noise on other pages: 2729 `published-unaudited`, 169 `cited-not-in-deps`, 145 `multi-home`, 114 `published-local-repair`, 49 `link-unresolved`, 27 `dep-unresolved`).
- `node tools/physics-support/fwdcheck.mjs` — no finding names an owned item (run-level FAIL caused by other items' forward references).
- `node tools/physics-support/extcheck.mjs` — 0 recorded-not-proved items, 0 resting on them.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` — no finding for `sr-worldlines-and-clocks` or its examples page; run-level FAIL is other pages (39 `undeclared-prereq` rows, chief among them em-elementary-mathematical-prerequisites, em-expanded-analysis-prerequisites and sr-spacetime-primitives, plus 33 `redundant-prereq` rows).
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` — exit 0, refreshed and deduplicated; the batch-3 input holds 79 rows, of which 1 page row remains `open`.
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final` — none of the 19 owned items in the remaining work list.

### Open obligations (updated)

1. **Page-level ordering prerequisite.** `sr-worldlines-and-clocks requires
   sr-lorentz-transformations`; the batch-2 page carrier exists and is ordered
   earlier, its inventory is still being completed elsewhere, and no owned
   item depends on a batch-2 item. The batch-3 ledger row remains `open`.
2. **Other pages' pre-splice plan findings (Step 4).** The 39
   `undeclared-prereq` and 33 `redundant-prereq` rows at this state concern
   other pairs only; none concerns this pair.
3. **Run-wide legacy check noise.** Repo-wide `depcheck`/`fwdcheck` failures
   are legacy or other in-flight pages; no owned file or supplier used here is
   affected.

### Published concerns

None. No imported mathematical snapshot was edited and no published item was
repaired, re-tagged or otherwise touched.
