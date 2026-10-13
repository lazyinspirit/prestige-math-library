# Reader report — batch 16

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `16`

## Opened inventory

Assigned pages reviewed:

- `cm-math-rotation-double-cover` (A page)
- `cm-math-rotation-double-cover-examples` (B page)

All twelve assigned items were opened and reviewed in dependency order:

- `def-cm-quaternion-rotation-map-and-cover`
- `lem-cm-quaternion-product-rule-and-conjugation-formula`
- `lem-cm-body-angular-velocity-of-a-rotation-path`
- `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity`
- `prop-cm-quaternion-angular-velocity-reconstruction`
- `thm-cm-quaternion-lift-exists-and-is-unique`
- `rem-cm-quaternion-lift-scope-and-sign`
- `ex-cm-two-to-one-preimages-and-homomorphism-check`
- `ex-cm-constant-angular-velocity-quaternion-lift`
- `ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis`
- `ex-cm-quaternion-angular-velocity-reconstruction-check`
- `cex-cm-no-closed-lift-along-a-full-turn`

The current-run suppliers `def-cm-special-orthogonal-group` and
`lem-cm-so3-is-a-matrix-group` (batch 1), and
`thm-cm-compact-continuation-for-locally-lipschitz-odes` (batch 2), were read
before their assigned consumers. Their needed published mathematical suppliers
were checked at the exact definition/statement sections used. The additional
ODE-continuation supplier statements opened included the IVP and locally
Lipschitz definitions, Picard–Lindelöf, maximal-solution and Volterra results,
continuous-function integrability, integral norm estimates, Euclidean
completeness, compactness, and extreme-value results.

Other direct mathematical supplier definitions/statements reviewed were
`def-quaternions`, `thm-quaternions-form-a-division-ring`,
`ex-su-two-to-so-three-as-a-covering-homomorphism`,
`def-euclidean-inner-product`, `def-countable-choice`,
`def-cross-product-in-r3`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`,
`def-vector-valued-derivative-and-integral`, `thm-algebra-of-derivatives`,
`def-ck-euclidean-maps-and-diffeomorphisms`, `def-matrix-product-and-identity-matrix`,
`thm-matrix-multiplication-laws`, `prop-transpose-laws`, `def-matrix-space`,
`thm-sine-and-cosine-addition-formulas`,
`cor-trigonometric-parity-and-pythagorean-identity`,
`thm-sine-and-cosine-derivatives`, `thm-quarter-turn-values-and-shift-formulas`,
`thm-chain-rule-for-total-derivatives`,
`cor-continuous-image-of-an-interval-is-an-interval`,
`thm-heine-borel-rn`, `def-metric-compactness`,
`thm-metric-continuity-characterisations`,
`thm-t1-iff-singletons-are-closed`, and
`thm-ck-euclidean-maps-closed-under-algebra-and-composition`.

The four page prerequisites of the A page were opened for reading-order and
placement review: `lie-subgroups-actions-and-homogeneous-spaces`,
`cm-math-geometry`, `cm-math-balances`, and `cm-math-dynamics`. The batch
manifest, batch notes, source-coverage record, cross-batch dependency record,
proof-contract file, and the current plan entries for orders 111 and 112 were
also inspected as evidence, not as verdicts.

## Mathematical review

The quaternion multiplication formula, norm identities, conjugation formula,
axis-angle formula, skew-matrix/cross-product correspondence, lift ODE, angular
velocity reconstruction, and constant- and varying-rate computations are
consistent with their stated hypotheses and conventions. The theorem proving
existence, uniqueness, and sign ambiguity uses the declared covering facts and
records their countable-choice premise in its remark and proof contract. The
full-turn counterexample restricts the uniqueness argument to `(0,T)` before
using endpoint continuity; that resolves the closed-interval versus open-domain
issue noted in the author report. The two-to-one example checks the specific
matrix product and preimages it claims; its remarks make clear it does not
reprove the global homomorphism property.

I reviewed the ten proof contracts against the numbered steps and their
fact/dependency uses. The source sections checked include Etingof, Exercise 3.9
(printed p. 26); Sola, §§2.4.1–2.4.3 (printed pp. 20–22), §2.5 (p. 25), §2.6
(p. 26), and §4.5 (pp. 45–46); Trawny–Roumeliotis, §§1.1–1.2 and §1.5
(printed pp. 2–4 and 9–10); Knapp, Introduction Problems 7–9 (printed
pp. 20–21); and Teschl, §2.6, Corollary 2.15 (printed pp. 52–53). These
references use different frame/quaternion conventions in places; the assigned
items define their own convention and derive the formulas locally. In
particular, no source formula was used to replace the local proof of the chosen
body-rate equation.

### Page verdicts

- **`cm-math-rotation-double-cover`:** page prose, item order, and current
  prerequisite declarations are coherent. Its local ODE proof was repaired as
  described below. One nonfatal issue remains in the published
  `def-locally-lipschitz-in-the-state-variable` dependency; it is routed in the
  findings JSON.
- **`cm-math-rotation-double-cover-examples`:** the summary matches the four
  computations and the closed-loop counterexample. No page-local defect was
  found; its item closure reaches the same published dependency finding.

The author notes recorded an open registry issue for the Lie theory page. In
the current carriers, the page exists, the plan contains it as the earlier
published `P` page at an order below 81, and the assigned A page declares it in
`requires`; I found no current registry gap.

## Edit and evidence

I repaired `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity`:

- Step 1.1 now cites the norm continuity and extreme-value suppliers when
  bounding the coefficient on compact time intervals. The matching supplier
  IDs and a new fact were added to the item’s dependencies and Facts.
- Fact F9 now states Heine–Borel for every finite Euclidean dimension. Step 3.1
  now verifies that `[t0,b] × S^3` is contained in the open ODE domain and is a
  closed bounded subset of `R^5`, hence compact, before applying continuation
  at the distinct endpoint `beta = sup(I_x)`. The reflected left-end argument
  now specifies its reflected intervals and maximality.
- The batch proof contract was updated for F10, the revised derivations in
  steps 1.1 and 3.1, and the endpoint boundary evidence. The item had no
  `verification.judge` record to remove. No statement or definition interface
  changed, so no consumer statement review was triggered.

Checks after the final item edit:

- `reflow.mts`: unchanged.
- `precheck.mts`: pass, 1 checked, 0 failing.
- `proof-layout.mjs`: 1 item, 7 steps, 0 defects.

No page or other item was edited.

## Uneditable finding

`def-locally-lipschitz-in-the-state-variable` is a published dependency of the
assigned ODE lemma. Its Definition at line 34 quantifies over “compact
time-state cylinders” without defining that set class or specifying its time
and state factors. No definition of this term occurs among that item’s declared
dependencies. The assigned consumer now states the compact interval × compact
state-set interpretation it uses and verifies its own field estimate, so this
is nonfatal for the local calculation; the published definition still needs an
exact set-theoretic formulation for its other consumers. It was not edited
because published mathematics is read-only in this workspace.

## Blocker and coverage limitation

No blocker prevented completion of this reader assignment. The remaining
finding is an owner-routing item against a published dependency. I checked the
relevant statements/hypotheses of published mathematical suppliers rather than
re-auditing all of their unrelated proof bodies; the full proofs of the two
proof-bearing current-run suppliers and the published quaternion-cover example
were read where those claims were needed, and the in-flight SO(3) definition was
reviewed with its definition and relevant remarks. This batch contains mathematical
items only and makes no experimental or empirical claims.
