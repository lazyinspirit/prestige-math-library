# CM Gate 1 boundary-contract repair

Run: physics-cm-qm-gr-79-2026-10-11. Reviewer: physics_alpha12_oscillator_owner. One focused review/repair pass.

## Scope and findings

Reviewed the actual Statements and numbered proofs for all 21 scoped items. Replaced 22 boundary rows in authoritative proof contracts for batches 2, 6, 7, 19, 20, 24 and 29. Mathematical source claims and proofs did not need changes.

Six previously unanchored checked rows now identify the exact proof steps and the distinction each boundary requires:

- Variable-mass degeneracy: relative velocity zero does not imply momentum constant. Proof 2.1 gives the exact condition r*wout=0 in the stated special case.
- Variable-mass endpoints: the derivative and product-rule suppliers explicitly allow domain-relative derivatives at endpoints of a nondegenerate interval. Proof 1.1's coordinate product rule and 2.1's balance substitution still apply there.
- Frame zero boost: Proof 2.1/2.2/2.3/4.1 boost contributions vanish, while rotation, spatial translation and evaluation at shifted time remain.
- Driven single-particle example: Proof 1.1 verifies all three equations, including the two zero transverse equations; Q remains R^3 and the subsequent scalar energy/work computations are justified.
- Damped resonance endpoints: Proof 2.2 verifies global zero initial data, but 3.1's boundedness estimate concerns t>=0. The same global transient grows at negative quarter-turn times.
- Undamped counterexample endpoints: Proof 2.1's positive-time sequence and 3.1's bounded homogeneous corrections establish growth of global maximal motions. Bounded finite restrictions do not refute that conclusion.

Four contradicted empty-case candidates received actual case checks:

- Cylinder shift: the Statement's indexed openness identity holds even for an empty open V, whereas Proof 2.1's explicit loop and cylinder are nonempty.
- Convolution: t=t0 genuinely gives a zero-length integral. Proof 1.1's fixed-integral term is zero and 2.2's moving-endpoint quotient gives g(0)f(t0). The old claim that every integration interval was nondegenerate was inaccurate.
- Homogeneous oscillator: empty/singleton solution domains are excluded, all-zero coefficients are allowed, and Proof 3.1 constructs the global family for every initial datum; 4.1 handles an actual local solution.
- CM13 Hamiltonian field: a given curve on nonempty J supplies actual phase points. Proof 2.2 evaluates at the specified zero momentum of the full fibre; no point is selected from an empty fibre. The conditional curve equivalences do not assert existence when the configuration domain has no points.

The twelve CM08 nonempty-choice rows were individually reviewed, retaining not_applicable only with concrete explanations. These distinguish prescribed symmetry data, explicit gauge shifts, specified translation/rotation/boost formulas, unique supplied initial-value motions, the unique hyperregular inverse, explicit example trajectories, and fixed finite coordinate tests. They no longer share a fictitious general inverse-branch argument.

## Supplier inspection

Relevant actual supplier text reviewed included def-vector-valued-derivative-and-integral, def-derivative, thm-algebra-of-derivatives, def-cm08-symmetry-of-the-mechanical-lagrangian, thm-cm-point-symmetry-charge-is-conserved, thm-cm-point-noether-identity-with-time-reparametrization, prop-cm-mechanical-chart-lagrangian-is-hyperregular, prop-cm-hamiltonian-branch-identities, and the actual CM01/CM02 configuration/model conventions. Full momentum fibres contain the specified zero momentum over any actual configuration point; no unwarranted nonempty configuration premise was introduced.

## Evidence

- changes.json records every before/after row.
- The seven batch-named JSON files here preserve pre-edit authoritative bytes. Each write reread the authoritative bytes and refused a conflicting change before mutation.
- scoped-contracts.json is the 21-item review snapshot.
- boundary-audit-result.json: 168 rows, zero template clusters, zero contradicted candidates. Four previously individually reviewed empty cases elsewhere in these CM08 entries remain upheld by their existing reviews.
- proof-contract-result.json: all 21 entries checked and zero warnings. After root removed the two generator decimal fake inputs in ex-cm04-resonance-response-check step 2.2, the validator still misreads source decimals as required inputs and reports two step-entry-input-omitted errors for 0.1 and 0.99. This remaining validator defect was immediately reported to root. The earlier missing-step result is preserved as proof-contract-before-root-decimal-fix.json; no mathematical source repair was indicated.
- proof-layout-api-result.json: actual scanProofFiles API, 21 source files, 119 numbered steps, zero layout errors. This used the renderer API directly, not the symlink CLI.

The three other saved boundary contradiction IDs were reported to root: thm-nrqm-composites-joint-pvm-construction, thm-nrqm-identical-particles-occupation-number-basis, and thm-gr-compact-metric-and-timelike-curve-variation. No routing decisions, root hashes/stamps, ledger or gates were written.
