# Step 3a reader report — batch 66

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: `tgr-pet01` and `tgr-pet01-examples`

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgr-pet01.md`
- `library/thermodynamics-and-general-relativity/tgr-pet01-examples.md`

Page-prerequisite context:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-et03.md`
- `library/thermodynamics-and-general-relativity/tgr-i01.md`

Assigned items:

- `post-tgr-stationary-equilibrium`
- `pthm-tgr-tolman-ehrenfest`
- `post-tgr-equilibrium-particle-exchange`
- `pthm-tgr-tolman-klein`
- `def-tgr-juttner-kinetic-preparation`
- `ex-tgr-schwarzschild-static-bath`
- `ex-tgr-rindler-rotating-equilibrium-domains`

Claim-relevant dependency items opened:

- `def-tgr-framework-units`, `def-tgr-stationary-thermal-carriers`,
  `lem-tgr-killing-thermal-normalization`, `def-tgr-local-fluid-state`,
  `post-tgr-local-material-thermodynamics`,
  `def-tgr-charged-liouville-data`, `lem-tgr-gauge-killing-energy`,
  `thm-tgr-finite-entropy-exchange-equilibrium`,
  `thm-tgr-electrochemical-stationarity`,
  `lem-tgr-charged-liouville-preserves-mass-shell`,
  `lem-tgr-mass-shell-polynomial-rigidity`,
  `cor-zero-total-derivative-on-a-convex-open-set-is-constant`;
- `def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`,
  `def-gr-observer-and-rest-space`,
  `def-gr-observer-congruence-and-adapted-charts`,
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
  `thm-gr-killing-and-on-shell-matter-identities`;
- `def-tgr-future-mass-shell-measure`,
  `lem-tgr-mass-shell-measure-tetrad-invariance`,
  `thm-tgr-juttner-partition-and-moments`, `def-probability-measure`,
  `prop-tgr-rotating-mode-gibbs-obstruction`,
  `lem-tgr-countable-l2-completeness`;
- exact claim-relevant statements from
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`,
  `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`,
  `thm-differentiation-under-the-integral-sign`,
  `thm-dominated-convergence`, `thm-hyperbolic-identities-and-derivatives`,
  `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`,
  `thm-borel-sets-are-lebesgue-measurable`, `def-measure-space`,
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `def-square-summable-family-on-an-arbitrary-index-set`,
  `thm-complex-plane-is-complete`, `def-hilbert-space`, and
  `thm-cauchy-schwarz-in-an-inner-product-space`.

The assigned proof contracts, batch notes, coverage ledger, and current batch
manifest were used as navigation and scope evidence, not as verdicts. The
current batch-53 manifest identifies `def-tgr-local-fluid-state` as a draft
in-run supplier outside this assignment.

## Review and findings

The two postulates state selected model inputs rather than deductions or
observations. The Tolman–Ehrenfest proof applies the connected-domain Killing
normalization lemma with matching smoothness, positivity, and timelikeness
hypotheses. The Tolman–Klein proof separates the finite-cell multiplier result
from the charged full-mass-shell result and retains the charged branch's global
potential-compensator condition. Neither branch makes an empirical or
universal-equilibrium claim.

The Jüttner item is a pointwise classical model definition with prescribed
positive density and temperature. The supplied mass-shell measure is
tetrad-independent, and the partition/moment proof checks normalization,
convergence, and the stated current and stress moments under its declared
countable-choice assumption. No collision, material-realization, or empirical
claim is inferred. The one-mode proposition and both examples retain their
stated model and domain limits. The Schwarzschild remainder bound follows from
Taylor's theorem on the specified compact subinterval; the Rindler, rotating,
and Schwarzschild lapse/acceleration formulas agree with the displayed
metrics.

The cited source sections were checked against the authored claims: Becattini,
§§4–6; Santiago and Visser, §§III–IV and VII.A; Acuña-Cárdenas et al., §III.C
and §VI.B (with §VI.C kept out of scope); Csernai, §§2.4–2.4.1; MIT 8.033,
§§14.5–14.6, 18.2.2, and 19.1; and Rueda et al., §4. The latter supports
Klein-potential context in its own mean-field multi-species model; the assigned
proof does not rely on its Eq. (65) inference. These are source-context checks,
not evidence that any model describes nature. No experiment or measured result
is reported in this batch.

One nonfatal, uneditable finding remains:

- `def-tgr-local-fluid-state`, frontmatter `title` (line 4):
  `Rest fluid state,frame and geometric current definitions` is malformed by
  the missing space after the comma. The item is owned by batch 53, so it was
  not edited. The exact current raw item SHA-256 observed at split is
  `d880869678fdaf538cef2461c84436aa54176480d41b6824b15e3d051fbfe7fa`.
  The direct assigned consumer is `post-tgr-equilibrium-particle-exchange`.

No assigned item or page prose was edited. There is no other confirmed defect.
No formatter or precheck was run because there were no item edits.

## Page verdicts

- `tgr-pet01`: pass for the assigned claim and summary. The one external
  supplier-title issue above is editorial and does not change the mathematics.
- `tgr-pet01-examples`: pass. The calculations stay within the stated domains;
  the one-mode trace criterion is explicitly limited to its single-mode model.

## Coverage limitation and blocker

The relevant direct suppliers and the mathematical statements used by the
arguments were opened, but this was not a re-audit of every transitive proof in
the mathematical library. The initial tool-read sequence also opened the
Jüttner moment theorem before its mass-shell and measure suppliers; those
supplier texts were subsequently opened and the theorem's argument was
evaluated against them. The reported current source fingerprint was rechecked
after review and still matches. No blocker remains for this batch review.
