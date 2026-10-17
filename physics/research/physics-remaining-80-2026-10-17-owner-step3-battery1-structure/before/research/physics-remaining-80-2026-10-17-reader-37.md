# Step 3a reader report — batch 37

Run: `physics-remaining-80-2026-10-17`  
Role: reader (`reader-37`)  
Review date: 2026-10-17

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsm-local-ensemble-bridge.md` (A page)
- `library/quantum-statistical-mechanics/qsm-local-ensemble-bridge-examples.md` (B page)

Assigned items, read in dependency order:

- `lem-qsm-local-hermitian-diagonalization`
- `def-qsm-local-finite-tensor-state`
- `def-qsm-local-finite-matrix-entropy`
- `def-qsm-local-additive-spectral-ensembles`
- `lem-qsm-local-subsystem-trace-tests`
- `def-qsm-local-matrix-net-completion`
- `post-qsm-local-ensemble-preparations`
- `lem-qsm-local-tensor-gibbs-factorization`
- `thm-qsm-local-classical-diagonal-embedding`
- `thm-qsm-local-independent-shell-equivalence`
- `def-qsm-local-coercive-regulated-model`
- `pthm-qsm-local-qualified-shell-measurements`
- `pthm-qsm-local-regulated-interacting-gibbs`
- `cex-qsm-local-empty-exact-band`
- `cex-qsm-local-entropy-density-insufficient`
- `cex-qsm-local-local-global-distinction`

The current direct dependency interfaces opened were `thm-heine-borel-rn`,
`thm-extreme-value-metric`, `thm-of-square-roots`,
`def-qc-density-operator`, `def-qc-tensor-register-and-permutation`,
`def-natural-logarithm`, `def-real-exponential-function-and-e`,
`def-qc-partial-trace`, `def-qc-tensor-map`,
`thm-qc-partial-trace-characterization-and-basis-independence`,
`thm-qc-partial-trace-positive-and-trace-preserving`, `def-linear-map`,
`thm-cauchy-schwarz-in-an-inner-product-space`, `def-c-star-algebra`,
`post-nrqm-framework-state-and-composition`,
`post-nrqm-framework-observable-and-probability`,
`def-nrqm-framework-quantities-and-units`,
`thm-exponential-addition-formula`, `def-state-on-a-c-star-algebra`,
`thm-tdmath-independent-microcanonical-block-limit`,
`def-qft-regulated-polynomial-hamiltonian`,
`thm-qft-self-adjoint-regulated-interaction`, `thm-qft-regulated-gibbs-trace`,
`def-countable-choice`, `post-qsm-normal-measurement-state`,
`post-qsm-thermal-gibbs-preparation`, `thm-qsm-trace-gibbs-variational`,
`def-axiom-of-choice`, and `def-qsm-relative-entropy-domain`.

For the regulated Gibbs chain, I also opened the exact current interfaces of
`thm-qsm-trace-cross-log-inequality`,
`thm-tdmath-general-trace-gibbs-model`,
`thm-tdmath-summable-canonical-differentiation`,
`lem-qsm-trace-state-calculus`, `def-kullback-leibler-divergence`, and
`thm-kullback-leibler-is-nonnegative`. The relevant full local/draft arguments
for the cross-log inequality, the finite-alphabet microcanonical limit, and
the regulated QFT Gibbs trace were inspected. Batch contracts and the current
cross-batch dependency ledger were consulted as navigation/status evidence,
not treated as scientific verdicts.

## Review and edits

In `lem-qsm-local-tensor-gibbs-factorization`, the statement named a first-site
reduced density without defining the reduction map, and used matrix tensor
powers without an exact matrix-tensor definition in its declared dependency
closure. I defined the reduced matrix by its product-basis tail-sum entries,
defined the canonical `gamma_k` by its diagonal entries, and completed the
proof by computing the off-diagonal and diagonal entries. The normalization
`sum_j p_j = 1` gives the claimed reduction, and the same product weights give
the expected energy `NE`.

Evidence: `def-qsm-local-additive-spectral-ensembles#Definition` gives the
finite canonical weights and shell-basis convention;
`def-qc-partial-trace#Definition` gives the coordinate tail-sum formula, and
`lem-qsm-local-subsystem-trace-tests#Statement` identifies its density and
trace-pairing role. The exponential factorization uses
`thm-exponential-addition-formula#Statement`.

The directly consuming `thm-qsm-local-independent-shell-equivalence` had the
same undefined matrix-tensor-power notation. I gave its shell reduction and
canonical `gamma_k` explicit product-basis matrix entries. I checked its
fixed-block total-variation-to-trace-norm argument and its dependent
`pthm-qsm-local-qualified-shell-measurements`; neither required a further
repair. No physical interface or empirical claim changed.

Evidence: the shell-label convergence and entropy limit are stated in
`thm-tdmath-independent-microcanonical-block-limit#Statement`; the shell
reduction uses `lem-qsm-local-subsystem-trace-tests#Statement`, and the
canonical reduction is given by the revised
`lem-qsm-local-tensor-gibbs-factorization#Statement`.

I updated the two corresponding entries in
`research/physics-remaining-80-2026-10-17-batch-37.proof-contracts.json`,
including the consuming theorem's `F3` interface quote and the affected step
derivations. Neither edited item had a stale `verification.judge` record.

Required checks after the final edits:

- `reflow.mts` reported both items unchanged.
- `precheck.mts` passed each changed item, with zero failures.
- `proof-layout.mjs` reported `2 items, 6 steps, 0 defects`.

## Page verdicts

- `qsm-local-ensemble-bridge` (A): content review passes. Its summary accurately
  limits shell equivalence to the stated finite model and width condition,
  identifies the separate preparation assumptions, and makes no thermalization,
  empirical-frequency, generic interacting, or regulator-removal claim.
- `qsm-local-ensemble-bridge-examples` (B): content review passes. Each of its
  three counterexamples is supported by the displayed finite construction; the
  page correctly presents them as mathematical examples rather than laboratory
  evidence.

## Defects not edited and blocker

No confirmed content defect remained outside my edit authority; I made no
withdrawal proposal. The current run's cross-batch readiness for the
batch-36 `qsm-states-ensembles` suppliers remains open: those current carriers
are drafts and their native readiness is unresolved. Batch 37's physical
conclusion uses those inputs conditionally and preserves their draft status;
this reader report does not certify those suppliers or close the run-level
readiness edge. I found no separate scientific defect in the exact supplier
interfaces inspected.

## Coverage limitation

I read every assigned page and item and checked the exact dependency interfaces
used by their claims, including the relevant local/draft proof arguments noted
above. I did not re-audit the complete transitive proof closure of every
published mathematical supplier or independently reread every cited textbook.
