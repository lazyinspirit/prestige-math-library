# Step 3a reader report — batch 61

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader (read-only)  
Scope: A page `qm-three-dimensional-scattering` and companion B page
`qm-three-dimensional-scattering-examples`.

## Opened inventory

Pages:

- `library/non-relativistic-quantum-mechanics/qm-three-dimensional-scattering.md`
- `library/non-relativistic-quantum-mechanics/qm-three-dimensional-scattering-examples.md`

All 23 assigned item carriers were opened:

- `lem-nrqm-scattering-model-scaling-correspondence`
- `lem-nrqm-scattering-three-dimensional-current-and-flux`
- `def-nrqm-scattering-framework-short-range-model`
- `def-nrqm-scattering-stationary-beam-and-cross-section-model`
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity`
- `pthm-nrqm-scattering-compact-support-asymptotic-completeness`
- `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`
- `def-nrqm-scattering-partial-wave-and-phase-shift-readings`
- `def-nrqm-scattering-single-channel-resonance-model`
- `pthm-nrqm-scattering-partial-wave-cross-section`
- `pthm-nrqm-scattering-controlled-born-approximation`
- `pthm-nrqm-scattering-stationary-dynamical-identification`
- `def-nrqm-scattering-coulomb-dollard-model`
- `pthm-nrqm-scattering-coulomb-dollard-completeness`
- `pthm-nrqm-scattering-single-channel-resonance-cross-section`
- `rem-nrqm-scattering-scope-and-empirical-status`
- `rem-nrqm-scattering-long-range-and-threshold-limits`
- `ex-nrqm-scattering-square-well-s-wave-phase-shift`
- `ex-nrqm-scattering-single-channel-resonance-cross-section`
- `ex-nrqm-scattering-born-uniform-ball-amplitude`
- `ex-nrqm-scattering-long-range-tail-and-coulomb-warning`
- `rem-nrqm-scattering-examples-scope-limits`

The dependency statements/proofs most material to the checked claims were
opened, including the controlled Cook, compact-completeness, resolvent-tail,
stationary-outgoing, Fredholm-invertibility, partial-wave, Born-error,
stationary/dynamical, and Dollard suppliers; the Coulomb energy result; and the
framework's P1/P2/P4/P5/P6/P7, quantity, state-space, observable, dynamics,
central-potential and Coulomb model items. The exact `def-interval` citation
target was also opened. Published elementary mathematical suppliers used in
other steps were checked at their relevant statements where available; their
full transitive proof closures were not independently re-audited.

## Findings and evidence

No edits were made because this was a read-only reader assignment.

1. `def-nrqm-scattering-stationary-beam-and-cross-section-model`, Definition
   (d), overstates the coverage of the page: “the existence and finiteness of
   both are proved on this page for the declared classes.” The imported model
   definition declares both the bounded compact-support class and the
   resolvent-tail class. The assigned stationary construction theorem
   `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux` assumes only the
   compact-support class. No assigned theorem establishes a stationary
   outgoing solution and finite cross sections for every resolvent-tail
   potential. This is a fatal overstatement of the definition's physical
   scope.

2. `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`, Proof step 5.1,
   says the incident exponential “has the outgoing reading with amplitude
   $f_k$.” The incident term $e^{ikd\cdot x}$ is a plane wave; the outgoing
   term is $e^{ikr}f_k(\Omega)/r$. The opened stationary-outgoing supplier's
   far-field statement assigns that outgoing term to the total field
   $\Psi=e^{ikd\cdot x}+e^{ikr}f_k(\Omega)/r+\mathcal E$. The sentence
   falsely assigns the total field's outgoing behavior to the incident term.
   The surrounding proof already has the total-field expansion, so this is a
   nonfatal false claim.

3. `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`, Proof step
   3.1, contains an interior tag group immediately after `$S_*$`:
   `[F1, F3, step 1.1, step 2.1, step 3.1, algebra]`, followed by the
   sentence continuation “and $D_*$ are unitary.” The inline-math span opened
   before $S_*$ remains open through the bracketed group and intervening prose,
   closing only immediately before $D_*$. The group is not a trailing
   tag group and cites step 3.1 itself, contrary to the rule that steps cite
   only earlier steps and have trailing tags. The conclusion is otherwise
   supported by the preceding steps; this is a nonfatal proof-format defect.

4. `lem-nrqm-scattering-three-dimensional-current-and-flux`, Statement
   opening, cites `def-interval` after the assertion that $\Omega\subseteq
   \mathbb R^3$ and $I\subseteq\mathbb R$ are nonempty open sets. The opened
   target defines the nine order-convex forms of intervals in $\mathbb R$;
   it does not define arbitrary open subsets of $\mathbb R$ or open subsets
   of $\mathbb R^3$. The lemma needs only its explicitly stated open-domain
   hypotheses, so this citation is inaccurate but nonfatal.

## Page verdicts

- `qm-three-dimensional-scattering` — **Fail**: the stationary beam
  definition overstates the proved stationary scope for the resolvent-tail
  class. Other page-summary claims reviewed here preserve the distinction
  between conditional model deductions and measurements.
- `qm-three-dimensional-scattering-examples` — **Pass for page prose**: the
  summary matches the symbolic, idealized calculations and reports no
  experiment. The examples' scope and empirical qualifications are preserved.

## Edits and blockers

- Edits: none (read-only assignment).
- Validation after edits: not applicable; no files were changed.
- Blocker: none. Coverage limitation: I did not independently re-audit every
  transitive published mathematics proof or retrieve every cited textbook in
  full. Several assigned carriers were opened before all their external
  suppliers; I then checked the relevant supplier statements/proofs against
  the consumer claims. Accordingly this report does not claim a complete
  supplier-closure audit.

## Source cross-check

I opened Teschl's author-hosted full text and checked the Chapter 12 discussion
of Cook's criterion and short-range asymptotic completeness, including Theorem
12.4 for $V\in L^2(\mathbb R^3)$ and Theorem 12.12 for short-range potentials:
<https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf>. The current
batch's mathematical suppliers provide the more specific hypotheses and local
proofs used by its scattering claims.
