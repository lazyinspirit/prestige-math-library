# Step 3a reader report — batch 18

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `18`

## Verdict

Both assigned pages pass after the repairs below. I found no defect that had to be escalated outside my edit scope, and no blocker remains. The revised claims are deductions inside their stated models; they assert no experimental confirmation of those models.

## Opened inventory

Pages opened:

- A page `cm02-forces-initial-data-and-newtonian-flow`.
- B page `cm02-forces-initial-data-and-newtonian-flow-examples`.

All 13 assigned items were opened and reviewed:

- A: `post-cm02-force-superposition`, `post-cm02-interactions`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`, `ex-cm02-uniform-field`, `post-cm02-drag`, `rem-cm02-open-system-warning`.
- B: `ex-cm02-force-model-regularity-checks`, `ex-cm02-constant-field-projectile`, `ex-cm02-drag-terminal-velocity`, `cex-cm02-nonunique-flow-for-a-continuous-force`, `cex-cm02-singular-collision-finite-time`.

I opened the 42 distinct direct external suppliers listed in the assignment manifest:

`cor-cm-finite-time-breakdown-requires-escape`, `cor-exponential-reciprocal-and-positivity`, `def-abs-value`, `def-ck-euclidean-maps-and-diffeomorphisms`, `def-cm-oscillator-model-and-phase-system`, `def-cm01-configuration`, `def-cm01-units`, `def-cm01-velocity-acceleration`, `def-continuity-real`, `def-derivative`, `def-euclidean-inner-product`, `def-first-order-ode-initial-value-problem-and-solution`, `def-interval`, `def-jacobian-matrix-and-gradient`, `def-limits-at-infinity`, `def-locally-lipschitz-in-the-state-variable`, `def-maximal-ode-solution`, `def-vector-valued-derivative-and-integral`, `lem-derivative-of-a-power`, `lem-exponential-dominates-one-plus-x`, `lem-of-inverse-positive`, `lem-reverse-triangle-inequality-in-a-normed-space`, `post-cm01-frames`, `post-cm01-spacetime`, `post-cm01-worldlines`, `prop-cm-oscillator-degenerate-and-repulsive-cases`, `pthm-cm01-galilean-kinematics`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule`, `thm-cm-compact-continuation-for-locally-lipschitz-odes`, `thm-cm-forced-oscillator-variation-of-constants`, `thm-composition-of-continuous-functions`, `thm-continuous-inverse`, `thm-derivative-of-exponential`, `thm-double-angle-and-power-reduction-identities`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-nth-roots-exist`, and `thm-picard-lindelof-local-existence-and-uniqueness`.

For the edited claims I checked, in particular, the Galilean kinematics statement in `pthm-cm01-galilean-kinematics`; compact continuation, finite-endpoint escape and Heine–Borel statements in `thm-cm-compact-continuation-for-locally-lipschitz-odes`, `cor-cm-finite-time-breakdown-requires-escape` and `thm-heine-borel-rn`; dimensions in `def-cm01-units`; and the exact nth-root and reverse-triangle statements in `thm-nth-roots-exist` and `lem-reverse-triangle-inequality-in-a-normed-space`.

I also inspected the assigned page summaries and proof contracts. For the force transformation change, I checked assigned consumers and the current-run items that explicitly invoke the covariance clause: `pthm-cm03-frame-transformations`, `pthm-cm06-inertial-forces`, `pthm-cm08-boost-boundary`, and `rem-cm18-galilean-regime`. Their conclusions remain valid with the componentwise multi-particle transformation and transferred domain now stated in the postulate. `def-cm02-newtonian-flow` and `rem-cm02-open-system-warning` refer to the general frame rule without depending on the former erroneous tuple/domain calculation.

## Repairs and evidence

- `items/post-cm02-force-superposition.md`: clause (vi) previously fed an (N)-particle configuration into a single-particle rotation and did not define the transformed force domain as a preimage. It now defines (R_N=\operatorname{diag}(R,\ldots,R)), repeats the boost and translation vectors for the (N) labels, defines the inverse affine transfer (P), sets (D_*=P^{-1}(D)), and gives (F_*:D_*\to(\mathbb R^3)^N). This makes the displayed force evaluation well-typed and the domain exact. The same argument states why continuity and the locally uniform state-Lipschitz condition transfer, why (Q=\mathbb R^{3N}) yields the usual product domain, and why a proper open (Q) may yield a time-dependent admissible position set. The statement follows componentwise from the rotation/acceleration transformation in `pthm-cm01-galilean-kinematics`; the force transformation is explicitly an adopted model rule, not an empirical finding.
- `items/ex-cm02-uniform-field.md`: claim 2 now verifies the displayed explicit curve on all of \(\mathbb R\), then restricts it to the stated half-line. This avoids the invalid inference that existence only on a half-line establishes existence on the full time window. The uniqueness and maximality conclusions continue to follow from the local IVP result and the explicit all-time solution.
- `items/pthm-cm02-continuation.md`: clause 4 now gives precise alternatives at a finite forward endpoint on the extended autonomous time window. For (Q=\mathbb R^{3N}), the state is unbounded on every terminal interval. For proper open (Q), if the state stays bounded on a terminal interval, its position approaches (Q^c) in the stated epsilon/delta sense. The proof constructs a closed bounded set contained in (Q\times\mathbb R^{3N}) if the latter alternative fails, contradicting the compact-continuation/finite-endpoint escape results. It does not presume that a bounded state approaching the boundary has a limit.
- `items/rem-cm02-open-system-warning.md` and `library/non-relativistic-classical-mechanics/cm02-forces-initial-data-and-newtonian-flow.md`: the remark and A-page summary now distinguish a useful preferred rest frame from covariance of the equation. A constant uniform-force model remains uniform in every inertial frame; a medium at rest can select a useful frame for a drag model; an inverse-square center selects a location, not an inertial frame. The escape summary follows the repaired continuation alternatives.
- `items/cex-cm02-nonunique-flow-for-a-continuous-force.md`: the witness now uses (F_1=\lambda\sqrt{|x_1|/\ell_*}), where ([\lambda]=\mu\ell\tau^{-2}), ([\ell_*]=\ell), and the chosen mass is one kilogram. This fixes the original dimensional mismatch. The quartic solution has coefficient (A=(\lambda/(12m\sqrt{\ell_*}))^2); its dimensions, (C^2) junction, equation of motion, and distinctness from the zero solution are shown. `def-cm01-units` was added as a direct prerequisite.
- `items/cex-cm02-singular-collision-finite-time.md`: the example now states dimensions for (m,k,\kappa,r_0,T,v_0,U,F). It constructs the positive cube-root trajectory locally: continuity follows from the factorization inequality, the derivative is obtained by a rationalized difference quotient, and the second derivative follows by the quotient/product rules. The force gradient is also checked by coordinate difference quotients on the collision-free domain. The no-extension argument uses uniqueness only on the common interval containing ([0,T)), then continuity at (T) contradicts the excluded collision configuration. The endpoint limit (q(t)\to0) is justified by the epsilon argument in step 1.3; the state escape then follows from the displayed velocity formula. The stated nth-root and reverse-triangle suppliers and their exact claims were checked.

Metadata was synchronized with the repairs: the batch-18 manifest matches the dependency and role frontmatter for all 13 assigned items; the new `def-cm01-units` edge was added to the batch-18 cross-batch dependency sidecar; and the affected proof-contract citations/derivations and boundary evidence were refreshed. `research/plan-spec.json` and B-page prose were not edited. No edited item contains a `verification.judge` record.

Source checks for the classical framing and drag context included K. K. Likharev, *Essential Graduate Physics, Part CM: Classical Mechanics*, §1.2, chapter pp. 3–4 (PDF pp. 7–8), and §5.1, chapter pp. 1–3 (PDF pp. 87–89), [source PDF](https://essentialgraduatephysics.org/Files/CM%20merged.pdf); and I. Stewart, *Advanced Classical Mechanics* (MIT 8.09/8.309 Fall 2014), §1.2, printed pp. 1–2 (PDF pp. 4–5), and §1.4, printed pp. 20–21 (PDF pp. 23–24). The assigned item metadata also cites D. Tong’s Cambridge *Classical Dynamics* §1.2 and *Dynamics and Relativity* §1.2.1/§1.4 PDFs. Those direct PDF URLs were not fully readable through the web reader, so I do not rely on them to close any of the repairs above. No measurement or statistical inference was added or asserted.

## Defects not edited

None identified. The reviewed out-of-batch covariance consumers are not defective and remain outside the edit scope.

## Page verdicts

- `cm02-forces-initial-data-and-newtonian-flow` (A): **Pass after repair.** Its definitions, conditional existence/uniqueness/continuation claims, example, model-status remark and summary agree on domains, frame scope and finite-endpoint behavior.
- `cm02-forces-initial-data-and-newtonian-flow-examples` (B): **Pass.** The worked examples and counterexamples are consistent with the repaired force model and theorem statements; no B-page prose was changed.

## Validation and coverage limits

For each of the six changed items, reflow exited successfully and reported the file unchanged. Precheck exited successfully for each item; proof-bearing items passed, while the nonproof postulate and remark were not proof-checked. The single required batched proof-layout run reported `6 items, 22 steps, 0 defects`. The dependency/role comparison against the batch manifest passed for all 13 assigned items.

I checked the direct assignment dependency set and the explicitly frame-covariance-dependent consumers named above; I did not inspect every transitive descendant of the force postulate. The Tong PDF access limitation is recorded above. No other coverage limitation affected a verdict, and no blocker remains.
