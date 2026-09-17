# Step 5a reader — batch 7, run `phase-2-remaining-27`

Role: reader (label `reader-7`). Scope: the four pages of
`research/phase-2-remaining-27-batch-7.pages.json` and all 57 items listed
there, in the order the manifest gives them. Nothing outside that set was
edited.

## Method

Read the batch manifest, then every assigned page and item on disk, then every
dependency whose statement a step restates or whose result a step uses. Each
numbered step was traced to the facts, earlier steps and dependency statements
it cites; every cited dependency item was opened before judging the citation.
The mathematics of this batch (Brownian Markov/strong-Markov theory, hitting
times, path roughness, quadratic variation, the LIL, the two arcsine laws) is
standard and was verified directly; no external source was needed to resolve
an unfamiliar claim, and no PDF was re-fetched (see Limitations).

## Opened inventory

Pages (4): `library/probability/brownian-motion-markov-properties-and-hitting-times.md`,
`...-examples.md`, `library/probability/brownian-path-properties.md`,
`...-examples.md`.

Items (57, all opened and read in full):

- Markov/hitting-times A (20): def-natural-and-usual-augmented-brownian-filtrations,
  def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property,
  lem-conditioning-a-known-state-and-independent-noise, thm-brownian-markov-property,
  thm-brownian-future-path-markov-property, def-germ-sigma-algebra-at-zero,
  thm-blumenthal-zero-one-law, def-continuous-time-stopping-time,
  lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times,
  thm-strong-markov-property-of-brownian-motion, thm-brownian-reflection-principle,
  cor-law-of-the-brownian-maximum, cor-distribution-of-a-one-sided-brownian-hitting-time,
  cor-one-dimensional-brownian-motion-hits-every-point-almost-surely,
  def-brownian-motion-started-at-x, thm-two-sided-exit-probability-for-brownian-motion,
  cor-one-dimensional-brownian-motion-is-recurrent, lem-planar-brownian-annular-exit-probability,
  rem-raw-versus-usual-filtration-in-the-strong-markov-theorem.
- Markov/hitting-times B (9): ex-brownian-transition-density-and-semigroup-convolution,
  ex-maximum-crossing-probability-before-a-fixed-time,
  ex-density-and-infinite-mean-of-a-one-sided-hitting-time,
  ex-exit-side-probability-from-an-interval, ex-successive-brownian-hits-restart-independent-copies,
  ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary,
  cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation,
  cex-strong-markov-fails-at-a-nonstopping-random-time,
  cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable.
- Path-properties A (20): thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval,
  thm-brownian-paths-are-nowhere-differentiable,
  cor-brownian-paths-have-infinite-total-variation-on-every-interval,
  def-quadratic-variation-along-a-partition-sequence,
  thm-brownian-quadratic-variation-along-dyadic-partitions,
  thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes,
  cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation,
  lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-brownian-zero-set,
  lem-brownian-zero-set-has-lebesgue-measure-zero,
  thm-brownian-zero-set-has-no-isolated-points, cor-brownian-zero-set-is-uncountable,
  lem-two-sided-mills-bounds-for-standard-normal-tail,
  thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity,
  cor-brownian-law-of-the-iterated-logarithm-at-zero,
  cor-critical-holder-boundary-at-zero-from-the-brownian-lil,
  rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity,
  thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law,
  lem-brownian-step-potential-resolvent-at-zero,
  thm-brownian-positive-occupation-proportion-has-the-arcsine-law.
- Path-properties B (8): ex-expected-dyadic-quadratic-variation,
  ex-variance-of-dyadic-quadratic-variation, ex-zero-set-has-zero-measure-but-is-uncountable,
  ex-brownian-path-p-variation-threshold, ex-lil-rules-out-a-global-square-root-time-bound,
  cex-continuity-alone-does-not-imply-finite-quadratic-variation,
  cex-finite-quadratic-variation-does-not-imply-finite-total-variation,
  cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability.

Dependency items opened (statements, and proofs where a step depended on how the
result is proved): def-brownian-motion, def-wiener-measure-on-continuous-path-space,
thm-existence-of-continuous-brownian-motion, thm-uniqueness-of-wiener-measure,
thm-brownian-scaling, thm-brownian-time-inversion,
lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments,
lem-gaussian-even-moment-bound-for-brownian-increments, thm-kolmogorov-maximal-inequality,
cor-brownian-paths-are-locally-holder-of-every-order-below-one-half,
lem-brownian-motion-has-a-jointly-measurable-continuous-version (in batch),
def-d-dimensional-brownian-motion, cor-existence-and-scaling-of-d-dimensional-brownian-motion,
def-continuous-time-filtration-and-all-pairs-martingale, def-axiom-of-choice,
def-countable-choice, def-dependent-choice, def-standard-normal-and-normal-laws,
lem-normal-density-has-total-mass-one, def-multivariate-normal-law,
def-cumulative-distribution-function-of-a-random-variable,
def-expectation-of-a-nonnegative-or-integrable-random-variable,
def-conditional-expectation-as-an-ae-class, def-conditional-expectation-given-a-sigma-algebra,
lem-conditional-expectation-is-unique-almost-surely,
thm-basic-algebra-and-order-properties-of-conditional-expectation,
thm-tower-property-of-conditional-expectation, thm-taking-out-what-is-known,
def-independent-sigma-algebras-and-events, def-independent-random-elements,
lem-conditioning-a-known-variable-and-an-independent-variable,
thm-grouping-independent-sigma-algebras,
thm-pi-system-criterion-for-independent-sigma-algebras, thm-dynkin-pi-lambda,
def-product-sigma-algebra-and-finite-product-sigma-algebras,
thm-sections-of-product-measurable-functions-are-measurable,
thm-measurability-of-integration-against-a-kernel, def-measure-kernel-and-probability-kernel,
thm-increasing-simple-approximation-of-a-nonnegative-measurable-function,
thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-substitution,
thm-tonelli-theorem-for-sigma-finite-product-spaces,
thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-gaussian-integral,
thm-probability-law-and-distribution-function-correspondence,
thm-indefinite-integral-of-a-nonnegative-function-is-a-measure,
thm-integration-against-a-density, thm-generated-sigma-algebra-exists-and-is-minimal,
def-germ-sigma-algebra-at-zero (in batch),
thm-blumenthal-zero-one-law (in batch),
cor-first-borel-cantelli-lemma-for-events,
cor-second-borel-cantelli-lemma-under-pairwise-independence,
cor-chebyshev-inequality-for-random-variables, def-partition-and-refinement,
def-bounded-variation-and-total-variation, def-perfect-set-r,
thm-perfect-set-uncountable-r, lem-probability-measure-basic-identities,
thm-real-stone-weierstrass-general, thm-principal-inverse-tangent-calculus,
def-principal-inverse-tangent, thm-optional-sampling-for-bounded-stopping-times,
def-martingale-submartingale-and-supermartingale,
thm-integration-by-parts-for-absolutely-continuous-functions,
thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions,
cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous,
thm-open-subsets-of-r-structure,
thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun,
lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates,
def-evaluation-map, def-uniform-on-compacts-metric-on-continuous-path-space,
thm-takagi-function-is-continuous-and-nowhere-differentiable.

## Edits made (all in-flight items of this batch)

1. `items/thm-brownian-positive-occupation-proportion-has-the-arcsine-law.md`,
   step 8.1. The endpoint check read
   `$x=1$ gives $1=\frac2\pi\arcsin\frac\pi2$`, i.e. `arcsin(π/2)`, which is
   undefined because `arcsin` is defined on `[-1,1]`. Replaced by
   `$1=\frac2\pi\arcsin1=\frac2\pi\cdot\frac\pi2$`; the identity of
   step 7.1 already fixes the density, so only the display needed repair.
2. `items/ex-brownian-path-p-variation-threshold.md`, step 2.4. The step
   deduced `Eλ(N)=∫_a^b P(t∈N)dt=0` from `P(t∈N)=0` at the *rational* `t`
   alone, which does not imply the integral vanishes. Replaced by the
   per-deterministic-time statement that fact [F3] already supplies (for every
   fixed deterministic `t` the shifted process is a standard Brownian motion,
   so the squared difference quotient is a.s. unbounded along rational
   `h ↓ 0`), giving `P(t∈N)=0` for every `t∈[a,b)` and hence the zero integral.
   Step 1.4 (rational `t` only) is left in place; it is no longer the sole
   support of the Fubini step.
3. `items/lem-planar-brownian-annular-exit-probability.md`. Two repairs:
   (a) the fact [F3] line began with a stray `N` before `$N_2(0,I_2)$`;
   (b) step 1.1 justified `{H≤t}⊆⋂_n⋃_q{…}` by "q=H witnesses the inner union
   for every n", but `H` need not be rational. Replaced by the correct
   argument: continuity of the path at `H` gives, for every `n`, a rational
   `q∈[0,t]` with `|W_q−y|≤ε+n^{-1}` when `|W_H−y|≤ε`, and symmetrically at
   the outer radius, the rational lying on the side of `H` inside `[0,t]`.
4. `items/thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md`,
   step 4.1. "with `C'=\max(C,1)\in\mathbb N`" is false for non-integer `C`
   (e.g. `C=1.5`), and `E_{a,b,C'}` is only in the union for integer `C'`.
   Replaced by `C':=\lceil\max(C,1)\rceil\in\mathbb N` and displayed the
   comparison `|B_t−B_s|≤C|t−s|^{1/2}≤C'|t−s|^{1/2}`.
5. `items/thm-brownian-zero-set-has-no-isolated-points.md`. Step 2.1 asserted
   that `τ_q` is a stopping time "for the raw filtration". The stopping time is
   built from the redefined version `\widehat B`, which agrees with `B` only
   outside a `P`-null event that the raw (uncompleted) filtration need not
   contain, so the claim as written is not established. Rewrote step 2.1 to
   claim the `σ(\widehat B_r: r≤t)`-filtration and to derive membership in the
   usual augmentation `(\mathcal F_t)` from near-indistinguishability; stated
   explicitly that the raw-filtration form is not claimed. Added fact [F9]
   citing `def-natural-and-usual-augmented-brownian-filtrations` (new
   dependency) and recorded indistinguishability in [F1]. The strong-Markov
   step 5.1 needs only the usual augmentation, so this is a genuine
   strengthening of the justification with no change of statement.
6. `items/cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability.md`.
   Confirmed defect: the old witness `X_t(ω)=|t−ω|` satisfies the *opposite*
   per-time hypothesis (the path is a.s. differentiable at each fixed `t`; the
   item's own final step admitted "the fixed-time assertion is even the
   opposite one"), so it did not refute the inference it claimed to refute
   ("per fixed time `t` a.s. non-differentiable at `t` ⟹ a.s. nowhere
   differentiable"). Replaced the witness by the Takagi-function construction:
   the profile `G(s)=s²T(s)` on `[0,1]` (with `T` from the published item
   `thm-takagi-function-is-continuous-and-nowhere-differentiable`, added as a
   dependency) is continuous, differentiable exactly at `0` (quotient-rule
   argument for `s>0`), and `X_t(ω):=G(|t−ω|)` on `([0,1],\mathcal B,\lambda)`
   then has: every path continuous; path differentiable at `t=ω` with
   derivative `0`; path non-differentiable at every `t∈(0,1)`, `t≠ω`; hence for
   every fixed `t∈(0,1)` the path is a.s. non-differentiable at `t`, while a.s.
   (in fact for every `ω∈(0,1)`) the path is differentiable at its own shift.
   The fixed-time family was deliberately taken to be the open interval so
   that the theorem's interior statement (two-sided non-differentiability)
   suffices and no one-sided strengthening of the Takagi input is needed.
   Sources list extended (Takagi survey), source notes adapted.

All six items were re-wrapped with `tools/reflow.mts` (all reported unchanged),
re-checked with `tools/precheck.mts` (batch: 48 checked, 0 failing) and the
batch proof contract `research/phase-2-remaining-27-batch-7.proof-contracts.json`
was regenerated for the five facts-bearing items
(`node tools/regen-contract-entries.mjs …`) and hand-updated for the
counterexample entry, whose item has no facts block; boundary evidence was
re-anchored to the current step labels. The contract gate now reports
`0 error(s), 2 warning(s), 57/57 item(s) checked` (the two `shotgun-bracket`
warnings pre-date this reading: `lem-brownian-transition-semigroup-property`
step 8.1 and `thm-two-sided-exit-probability-for-brownian-motion` step 1.2).
`tools/audit-manifest.mjs research/phase-2-remaining-27-batch-7.pages.json`
reports 451 relationships, 0 defects; `tools/depcheck.mjs` reports no cycle, no
unresolved reference and no draft-on-published-page, with no diagnostic naming
an item of this batch.

## Defects found but not edited

None. Every defect confirmed in this reading lay in an in-flight item of batch
7 and was repaired in place, so the findings array is empty.

Two items were examined and deliberately left unchanged, with reasons:

- `items/ex-zero-set-has-zero-measure-but-is-uncountable.md`, step 1.1: the
  clause bounding `Z∩[0,T]` below by `Z∩[0,N']` for an integer `N'≤T` proves
  nothing for `T<1`, but the same step already invokes [F2]
  (`cor-brownian-zero-set-is-uncountable`, which asserts uncountability for
  every positive horizon `T`), so the conclusion is supported and the clause is
  only redundant.
- `items/cor-one-dimensional-brownian-motion-is-recurrent.md`,
  `items/thm-brownian-zero-set-has-no-isolated-points.md` and
  `items/thm-brownian-future-path-markov-property.md`: their random-level and
  random-time conditional-probability steps are closed by the kernel form of
  the future-path Markov property (`Ψ_Φ(B_s)`), which the cited theorem states;
  I verified each closure and left the prose as authored.

One artifact-level follow-up for the 5b lead, not a page or item defect: the
batch manifest `research/phase-2-remaining-27-batch-7.pages.json` still carries
the superseded `statement` text for
`cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability`
("… the path is differentiable at `t` almost surely, while every sample path
fails to be differentiable somewhere"). The item on disk, its title and the
companion page prose now agree with each other; only the manifest summary is
stale, and readers are not licensed to rewrite the manifest.

## Page verdicts

- `brownian-motion-markov-properties-and-hitting-times` (A): accepted. The four
  filtrations are defined and kept apart; the Markov, future-path, Blumenthal,
  hitting-time, strong-Markov, reflection, maximum-law, exit-probability,
  recurrence and planar-annular arguments each check out against their facts,
  with domains, quantifiers and the null-set bookkeeping preserved. No edit.
- `brownian-motion-markov-properties-and-hitting-times-examples` (B): accepted.
  The convolution, crossing-probability, infinite-mean, exit-side, restart,
  planar-polarity computations are correct; the three counterexamples
  (non-right-continuity of the raw filtration at zero, failure of strong
  Markov at the last zero, a.s. finite but non-integrable hitting time) have
  valid witnesses and complete arguments. No edit.
- `brownian-path-properties` (A): accepted after two repairs (the Hölder step
  4.1 constant, and the zero-set stopping-time step 2.1 with its new [F9]
  dependency). All other items — non-differentiability, total variation,
  quadratic variation along the dyadic meshes, uniform convergence,
  joint measurability, the zero set, the Mills bounds, the LIL at infinity and
  at zero, the critical Hölder boundary, the last-zero arcsine law, the
  step-potential resolvent and the occupation-time arcsine law — read sound.
- `brownian-path-properties-examples` (B): accepted after two repairs (the
  p-variation Fubini step and the fixed-time counterexample). The dyadic moment
  computations, the p-variation threshold, the LIL consequence and the three
  counterexamples are correct as they now stand; note that the companion
  page's prose ("fixed-time nondifferentiability statements cannot be upgraded
  to a pathwise nowhere-differentiability statement") is exactly what the
  repaired counterexample now exhibits.

## Blockers

None. No item of this batch was left in a state requiring a withdrawal, and no
claim was deleted; the proposed-withdrawal slot for the 5b lead is unused.

## Limitations

- Published dependencies were read at statement level (and, where a step
  depended on the shape of the argument, at proof level for the specific step
  used), but this reading does not constitute an independent audit of any
  published proof; in particular the Takagi theorem and the Wiener-existence
  and uniqueness items are used through their statements only.
- The external references (Durrett, Lawler, Sousi, Yoshida) were not re-fetched
  during this reading: the mathematics is standard and was verified directly
  from the definitions and lemmas on disk, so pagination-level citation
  fidelity (e.g. "Durrett Theorem 7.3.9", "Yoshida Lemma 6.8.3") was not
  re-verified against the PDFs.
- Random-level/random-time conditional-expectation steps were checked by
  closing them through the cited kernel form rather than by rewriting them; a
  reader who wants them spelled out line by line should treat that as an
  unperformed elaboration, not as a verified expansion.
