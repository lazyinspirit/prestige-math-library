# Batch 28 authoring notes

Run `fluid-dynamics-all-47-2026-10-23`; batch 28 owns only A page `fd-n02`
and B page `fd-n02-examples`.

## Scope, plan and dependencies

The controlling design is `research/plan-fluid-dynamics-refresh-track.md`
lines 958–984. It assigns `def-fd-mini-fluid-interface`,
`prop-fd-mini-observation-error`, `prop-fd-mini-accumulated-pressure-observation`,
`rem-fd-mini-weak-velocity-scope`, and `ex-fd-mini-pressure-time-test`. The
prose design, `research/plan-spec.json`, and dispatched manifest require
`energy-stable-incompressible-navier-stokes-discretization`; embedded pair JSON
in the design section says `requires: []`. Follow the canonical plan and
manifest; this is the recorded design conflict. The required supplier page is
outside this 47-page run, so it is documented here rather than entered as an
in-run cross-batch edge. The current run dependency inventory computes batch 28
at level 0 with no in-run batch prerequisites. No owner authoring direction
file is present.

The local dependency levels were recomputed from the actual batch item edges:
`def-fd-mini-fluid-interface` 0;
`prop-fd-mini-observation-error` 1;
`prop-fd-mini-accumulated-pressure-observation` 1;
`rem-fd-mini-weak-velocity-scope` 2; and
`ex-fd-mini-pressure-time-test` 2. Both pages remain within the 100-item cap.
The cross-batch dependency file is `[]`: there are no declared item/page edges
to another batch in this run. The external plan page requirement remains in
this note and in the A-page manifest.

## Inspected supplier interfaces and readiness

The imported energy-stable page uses Newtonian incompressible flow on bounded,
connected Lipschitz polygonal/polyhedral domains in dimensions 2 and 3, no-slip
velocity, zero-mean pressure, `a_nu(v,w)=2 nu (eps(v),eps(w))`,
`b(v,p)=-(p,div v)`, and the real skew convective form. Pinned local imports
were checked against `research/math-imports.json`. Relevant inspected items:

- `def-na-mini-navier-stokes-backward-euler-scheme` defines cell-average
  forcing and the mixed backward Euler MINI recurrence; it claims neither
  solver existence nor an error rate.
- `thm-na-mini-be-step-existence-energy` proves finite-step root existence and
  a mesh-independent energy bound under Countable Choice.
- `thm-na-mini-be-smooth-velocity-error` assumes Countable Choice, the strong
  no-slip branch `u in W^{1,infinity}(0,T; H^2(D)^d cap V_sigma)` and
  `p in W^{1,infinity}(0,T; H^1(D) cap L^2_0(D))`, cell-average `L^2`
  forcing, mass-projected initialization, an actual mixed MINI root, and
  `tau_max Lambda <= 1/2`. It proves the stated nodal and time-integrated
  velocity errors with explicit viscosity-dependent `C_*`.
- `thm-na-mini-be-smooth-integrated-pressure-error` inherits those smooth
  hypotheses and bounds the accumulated pressure primitive and the specified
  smooth time-tested pressure functional. It does not prove an instantaneous
  pressure-error rate.
- `thm-na-mini-navier-stokes-be-subsequential-limit` assumes the Axiom of
  Choice, energy data, vanishing maximum mesh/time steps with no coupling, and
  actual finite-step roots. Its conclusion is subsequential velocity
  convergence, solenoidal momentum, initial trace and energy inequality; it
  does not establish pressure regularity.

Before escalating, `loadStep1Record` and `step1Decision` were run against the
root run `numerical-analysis-remaining-71-2026-10-17`. The current records for
`def-na-stokes-zero-mean-pressure-and-velocity-spaces`,
`def-na-evolutionary-skew-convective-form`,
`def-na-mini-element-p1-bubble-p1-spaces`,
`def-na-discrete-weak-and-exact-divergence-free-spaces`,
`def-na-mini-navier-stokes-backward-euler-scheme`,
`thm-na-mini-be-step-existence-energy`,
`thm-na-mini-be-smooth-velocity-error`,
`thm-na-mini-be-smooth-integrated-pressure-error`,
`thm-na-mini-navier-stokes-be-subsequential-limit`,
`def-na-solenoidal-energy-weak-ns-velocity`, and
`def-na-evolutionary-incompressible-ns-weak-solution` each store `ready` but
currently return `Item or dependency changed; record current readiness`. Their
current statements and relevant complete proofs were inspected. These stale
current-input records are the readiness blocker; draft/published labels,
precheck state and independent-approval state are not used as a validity
argument. The root files are read-only, so all consuming claims remain
conditional and local Step-1 records are escalated. The imported base choice
axiom definitions are present; they are not items in that root frontier.

The separate `lem-na-solenoidal-evolution-integrated-pressure-recovery` has
no local imported carrier. It is not used: no pressure conclusion is made for
the energy-data weak limit.

## Source reading and disposition

Two independent full-text treatments were inspected, including a book or full
lecture notes, as recorded in coverage:

- Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54 §54.2, Lemma 54.5 and
  Remark 54.6, printed pp. 410–413,
  [full lecture notes](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf).
  The complete relevant section defines the P1-bubble/P1 pair, proves its
  uniform inf-sup stability by a Fortin operator, and states stationary Stokes
  approximation under `H^2` velocity and `H^1` pressure regularity. It does
  not support the evolutionary observation inequalities.
- Daniele Boffi, Franco Brezzi and Michel Fortin, *Mixed Finite Element
  Methods and Applications*, §§8.4.2 and 8.6.1, printed pp. 470–471 and
  487–488,
  [full textbook](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf).
  The complete relevant sections construct a bubble Fortin correction for the
  2D MINI pair and discuss stability and stationary Stokes approximation.
  They do not supply the transient pressure-observation estimate.

Coverage assigns the source results to the local MINI interface/context and
records both sources' limitations. The two observation estimates are proved
locally from inspected imported supplier statements. There were no retrieval
failures, retries, or drops; no source-resolution disposition was needed.
The retrieval inspection was followed by `source-fetch-check --stamp` (2/2
sources fetched and stamped) and a later check-only pass (2/2 fetch-verified).

## Authored items

### `def-fd-mini-fluid-interface` — A page, level 0

Defines the smooth no-slip MINI data, spaces, weak and discrete forms, time
partition, mass-projected initialization, endpoint velocity sensors, pressure
primitive, piecewise-constant pressure reconstruction, and scalar pressure
tests. Direct dependencies are the Stokes spaces, skew form, MINI spaces,
weak/exact divergence-free spaces, mixed backward Euler scheme and Countable
Choice definition. It asserts no solver existence or numerical accuracy.
Its definition has no proof obligation (`verification.precheck: n/a`).

### `prop-fd-mini-observation-error` — A page, level 1

For the exact smooth-branch and any actual mixed MINI root under the imported
hypotheses, proves
`|O_h-O| <= nu^(-1/2) C_* H ||ell||_{ell^2_tau(V*)}` for bounded linear
endpoint velocity sensors. The proof is the observation-difference identity,
weighted dual-norm Cauchy–Schwarz, and the time-integrated `V` component of
the imported smooth velocity theorem. It makes no Reynolds-uniform claim.
Scoped precheck passes. Its external theorem's stale Step-1 record keeps local
readiness escalated.

### `prop-fd-mini-accumulated-pressure-observation` — A page, level 1

Under the exact smooth, no-slip, zero-mean-pressure, shape-regular MINI,
projected-initialization, any-root and timestep hypotheses, proves the
endpoint primitive bound `K H ||xi||_Q` and smooth time-tested pressure bound
`(K+1) H ||eta'||_1 ||xi||_Q`, with constants as specified in the statement.
The proof pairs the imported `Q`-norm estimates with `xi`; it claims no
instantaneous pressure rate. Scoped precheck passes. The imported pressure
and velocity suppliers' stale Step-1 records keep local readiness escalated.

### `rem-fd-mini-weak-velocity-scope` — A page, level 2

Records the energy-data subsequential velocity theorem with its actual
Axiom-of-Choice premise, mesh/time assumptions, solenoidal weak equation,
initial trace and energy inequality. It states only that this result does not
supply pressure regularity or the smooth pressure-observation estimate. It
does not infer pressure nonexistence or rule out a separate pressure-primitive
result. It depends on the weak-limit theorem and definitions plus the local
interface and accumulated-pressure proposition. Scoped precheck passes; stale
root theorem/definition readiness keeps this conditional remark escalated.

### `ex-fd-mini-pressure-time-test` — B page, level 2

On the unit square, uses `xi(x,y)=x-1/2` and a normalized nonconstant smooth
compactly supported time test. Direct integration gives `||xi||_Q=1/sqrt(12)`;
normalization gives `||eta'||_1=1`. The local pressure proposition yields the
endpoint and time-tested bounds for all four nodes of a three-cell example.
The TikZ diagram encodes only primitive increments and the right-constant
reconstruction; its layout heights encode no data. No measurements are
reported. Scoped precheck passes; readiness inherits the stale external
supplier record through the local proposition.

All five items retain mathematics domain/library metadata. Statements and
definitions are uninterrupted, with their hyperlinks in the immediately
following references sections. Both page files contain YAML frontmatter only
and have empty bodies.

## Final scoped checks and unresolved run-level gates

- Precheck: 5 files, 4 proof-bearing items checked, 0 failures; the definition
  returned `not-applicable`.
- Proof layout: 5 items, 12 numbered steps, 0 defects.
- Render check: all 5 items and 2 pages passed KaTeX and frontmatter parsing.
- Strict proof contracts: all 5 items checked, 0 errors or warnings.
- Coverage checklist: 1 page, 9 harvested results, 0 errors or warnings.
- Source fetch check: 2/2 sources verified, 0 documented drops.
- Authored content policy: 5 items, 0 errors or warnings.
- Focused dependency check: 5 items and both pages, 0 errors or warnings.
- Scoped dependency levels: 0, 1, 1, 2, 2 as listed above; no cycles or label
  mismatches.
- Full-run item dependency check remains blocked by unrelated empty scaffold
  pages and stale labels in other batches. The observed empty page inventories
  are `fd-f03`, `fd-f03-examples`, `fd-px01`, `fd-px01-examples`, `fd-px02`,
  `fd-px02-examples`, `fd-px03`, `fd-px03-examples`, `fd-s03`,
  `fd-s03-examples`, `fd-ps01`, `fd-ps01-examples`, `fd-ps02`,
  `fd-ps02-examples`, `fd-w02`, `fd-w02-examples`, `fd-pn01`,
  `fd-pn01-examples`, `fd-pn02`, `fd-pn02-examples`, `fd-pda01`,
  `fd-pda01-examples`, `fd-ples01`, `fd-ples01-examples`, `fd-pg01`,
  `fd-pg01-examples`, `fd-pmp01`, `fd-pmp01-examples`, `fd-l01`,
  `fd-l01-examples`, `fd-bl01`, `fd-bl01-examples`, `fd-pbl01`, and
  `fd-pbl01-examples`. Stale labels are on
  `lem-fd-continuous-localization-on-c1-domains`, `post-fd-boundary-data`,
  `pthm-fd-cauchy-momentum-angular`, `pthm-fd-control-volume-balances`,
  `pthm-fd-energy-decomposition`, `post-fd-weak-balances`,
  `pthm-fd-conservation-jump-laws`, `ex-fd-conduction-energy-entropy`,
  `cex-fd-vacuum-velocity-determination`, `thm-fd-kinetic-h`,
  `thm-fd-collision-maxwellian`, `prop-fd-maxwellian-moments`,
  `thm-fd-controlled-euler-passage`, `def-fd-conserving-bgk`,
  `thm-fd-homogeneous-bgk-limit`, `prop-fd-bgk-entropy-rate`,
  `cex-fd-collision-support`, `ex-fd-bgk-initial-layer`,
  `rem-fd-kinetic-limit-status`, `def-fd-fluid-profile-bootstrap-interface`,
  and `prop-fd-profile-functional-bootstrap`. These are outside batch 28.
  Full-run batch dependency check reports the shared run-level file stale after
  this manifest was populated; a read-only recomputation still gives batch 28
  level 0 and `requires: []`. Do not rewrite shared run-level evidence;
  owner/engine recomputes it at the drained join.
- All five local Step-1 decisions were recorded `escalated` with their direct
  dependencies and the exact current supplier-readiness blocker. They are not
  independent proof approvals.
