# Step 3b dispatch report — Markov kernels and Markov chains

- Run: `phase-2-next-18`
- Batch: `research/phase-2-next-18-batch-2.pages.json`
- Owned pages: `markov-kernels-and-markov-chains`, `markov-kernels-and-markov-chains-examples`
- State: complete for the owned A/B pair

## Scaffold audit and governing conventions

The owner-approved 31-item inventory is retained. The owner enrichment adds the
conditional-independence definition, its equivalences and preservation rules,
the standard-Borel splice, the past/future characterization, the measurable
future-functional theorem, the eventwise strong Markov theorem, and the
multistep transition law. No owner authoring-direction file exists.

Repairs required before or during authoring:

- Propagate `def-axiom-of-choice` directly to every item that consumes the
  library's conditional-expectation, regular-conditional-distribution, or
  Ionescu--Tulcea interfaces, and say where Choice is used.
- Supply the conditional-independence equivalence with tower, pull-out,
  uniqueness, and pi-lambda inputs; supply the splice with factorization of a
  regular conditional law through its standard-Borel conditioning variable and
  with the integration/section measurability needed to construct the law.
- Read the future-functional theorem before proving the past/future
  characterization. The owner-approved manifest lists the characterization
  earlier, but its proof is authored after its supplier and the page order will
  place the supplier first; changing manifest item order would invalidate the
  owner-held scope receipt without changing the inventory.
- Prove Ionescu--Tulcea's premeasure step by the decreasing-cylinder argument,
  including the compatible-coordinate Choice recursion; do not treat cylinder
  consistency as countable additivity.
- Interpret the strong Markov formula by explicit slice sums that vanish on
  `{tau=infinity}`; neither side evaluates an undefined `X_infinity`.
- Define a hitting time locally as `tau_D=inf{n>=0:X_n in D}` and verify it is a
  stopping time before using strong Markov.

Authoritative source passages read in full for the claims used here:

- Shalizi, *Building Infinite Processes from Finite-Dimensional
  Distributions*, Lecture 3, Theorem 33 and its complete proof (all five PDF
  pages; course pagination 22--24), including the decreasing-cylinder
  functions, dominated-convergence recursion, Choice step, and extension.
- Aldous--Chewi, *Probability Theory*, Lecture 9, Definition 9.1, Lemma 9.2,
  and Theorem 9.3 with proofs (printed pp. 35--37).
- Varadhan, *Probability Theory*, Section 4.4, Theorems 4.8--4.9 with proofs
  (printed pp. 117--120).
- Durrett, *Probability: Theory and Examples*, Theorem 5.2.5 and its complete
  stopping-time slice proof (printed p. 283), together with the surrounding
  deterministic-time Markov results in Sections 5.1--5.2.
- Roch, *Markov Chains: Martingale Methods*, Note 24, Section 1 (pp. 1--2).
- Levin--Peres--Wilmer, *Markov Chains and Mixing Times*: Section 1.1 through
  the iterated-kernel identity (equation (1.10), printed pp. 2--5), Section 1.2
  through Proposition 1.5 and its complete random-mapping proof (printed pp.
  5--7), and the gambler's-ruin construction in Section 2.1 (printed pp.
  21--22). The fetched 461-page PDF had 4,855,824 bytes and SHA-256 prefix
  `9ef39f9467d9647f` at `2026-09-13T23:47:13Z`.

No potentially defective published item has been confirmed. Published
suppliers remain read-only.

## Item checkpoints

- `def-time-homogeneous-markov-chain-with-transition-kernel` — authored. Claim:
  the filtered and natural-filtration definitions, with version semantics and
  measurability of `K(X_n,A)`. Source: Durrett §5.1, printed pp. 268--269.
  Dependencies checked: kernel, filtration/process, conditional probability,
  and `def-axiom-of-choice`. Empty/zero/one/degenerate/endpoint cases do not
  alter a definition; the one-state and empty-event conventions are covered by
  the probability-kernel axioms. No iff directions occur. Open gaps: none.

Next action: author `lem-bounded-function-form-of-the-markov-property`.

- `lem-bounded-function-form-of-the-markov-property` — authored. Claim:
  indicator and bounded-test-function formulations are equivalent. Durrett
  §5.1, (5.1.1), printed pp. 268--269. The proof derives simple functions,
  bounded nonnegative limits, signed functions, and the reverse indicator
  specialization. Dependency inputs: the chain definition, kernel-integration
  measurability, simple approximation, dominated convergence, and uniqueness
  of conditional expectation. Zero and one indicators, negative parts, and
  both iff directions are explicit; no endpoint or nonempty-set selection is
  used. Choice is exactly the conditional-expectation interface. Open gaps:
  none.

Next action: author `def-conditional-independence-given-a-sigma-algebra`.

- `def-conditional-independence-given-a-sigma-algebra` — authored. Claim and
  conventions match Aldous--Chewi Definition 9.1, printed pp. 35--36, for both
  random elements and sigma-algebras. Equality is explicitly between
  conditional-expectation a.e. classes. Symmetry, trivial conditioning,
  a conditioning-measurable side, and zero/one tests are recorded. Choice is
  used only to obtain the conditional-expectation classes. No iff directions
  or endpoints occur. Open gaps: none.

Next action: author `lem-conditional-independence-equivalences-and-preservation`.

- `lem-conditional-independence-equivalences-and-preservation` — authored.
  Claim: product-definition iff conditional-law invariance under adjoining
  `sigma(Y)`, plus measurable-map and conditioning-measurable-variable
  preservation. Sources read completely: Aldous--Chewi Lecture 9 p. 35 and
  Varadhan Theorem 4.9 pp. 119--120. The forward pi--lambda event test and
  reverse tower calculation are explicit. Empty/full generator events,
  constant/degenerate variables, and both iff directions are covered; no
  endpoint or selection issue. Choice is used by the conditional-expectation,
  pull-out, and tower suppliers. Open gaps: none.

Next action: author `lem-conditional-independence-splicing-over-a-standard-borel-variable`.

- `lem-conditional-independence-splicing-over-a-standard-borel-variable` —
  authored. Claim: existence and uniqueness of the compatible three-coordinate
  conditional-independence splice. Source: Aldous--Chewi Lemma 9.2 and proof,
  pp. 35--36. The argument factors the RCD through `S_2`, constructs the law
  on every measurable triple set, proves countable additivity, checks both
  marginals, proves CI by conditional-law invariance, and proves uniqueness on
  rectangles. Empty/full sets, probability mass one, degenerate kernels, and
  uniqueness are explicit; this is not an iff claim. Choice is used exactly by
  standard-Borel disintegration/factorization. Open gaps: none.

Next action: author `def-initial-distribution-of-a-markov-chain` while deferring
the past/future characterization until its future-functional supplier is proved.

- `def-initial-distribution-of-a-markov-chain` — authored. Claim: initial law,
  `P_mu`, and fixed-start `P_x` notation, with realization and empty-space
  qualifications. Source: Durrett §5.1, pp. 268--269. The Markov definition and
  its Choice convention are the only prerequisites. Dirac/one-point cases are
  explicit; no iff or endpoint cases occur. Open gaps: none.

Next action: author `def-iterated-transition-kernels`.

- `def-iterated-transition-kernels` — authored. Claim: identity kernel,
  chronological recursive composition, and the probability-kernel status of
  every iterate. Source: Levin--Peres--Wilmer §1.1, equation (1.10) and the
  subsequent `t`-step identity, printed pp. 4--5. The
  published composition definition and associativity/kernel lemma supply the
  verification. `n=0`, one-point, and mass-one cases are explicit; no iff,
  endpoint, or choice issue. Open gaps: none.

Next action: author `thm-chapman-kolmogorov-equations`.

- `thm-chapman-kolmogorov-equations` — authored. Claim: semigroup identity and
  the exact `n`-step conditional transition/function formula. Sources:
  Levin--Peres--Wilmer §1.1 and Varadhan Theorem 4.8 with proof, pp. 117--119.
  Associativity proves the algebraic induction; bounded one-step Markov plus
  tower proves the probabilistic induction. Both zero cases, empty/full events,
  and indicator/function equivalence are explicit. Choice enters only in the
  conditional-expectation half. Open gaps: none.

Next action: author `thm-finite-dimensional-laws-of-a-markov-chain`.

- `thm-finite-dimensional-laws-of-a-markov-chain` — authored. Claim: exact
  iterated-integral formula for arbitrary increasing times, including `n_0>0`,
  and equivalent rectangle-law formulation. Source: Durrett Theorem 5.1.1 and
  (5.1.2), pp. 268--269. Backward conditioning and the tower property are fully
  unwound; pi--lambda identifies the law. `r=0`, `n_0=0`, empty/full rectangles,
  and mass one are covered. Choice is confined to conditional expectation.
  Open gaps: none.

Next action: author `thm-ionescu-tulcea-construction-of-a-markov-chain`.

- `thm-ionescu-tulcea-construction-of-a-markov-chain` — authored. Claim:
  existence and uniqueness for history-dependent kernels on arbitrary
  measurable spaces, plus the homogeneous Markov specialization. Source:
  Shalizi Theorem 33 and complete proof (all five PDF pages, course pp. 22--24),
  with Durrett Theorem 5.1.1 for the specialization. Prefix laws, consistency,
  finite additivity, decreasing-cylinder continuity, premeasure extension,
  uniqueness, and the conditional transition identity are all derived. Empty
  cylinders, mass zero/one, `r=0`, and the selection of a compatible positive
  prefix are explicit. Choice is used in that recursion and its countable-choice
  consequence in Caratheodory extension. Open gaps: none.

Next action: author `cor-canonical-markov-chain-on-path-space`.

- `cor-canonical-markov-chain-on-path-space` — authored by exact homogeneous
  specialization of Ionescu--Tulcea. Source: Shalizi Theorem 33, all five PDF
  pages. The last-coordinate kernel's measurability is checked. Dirac,
  one-point, initial-time, empty-space, and uniqueness cases are stated. Choice
  is inherited exactly from Ionescu--Tulcea. No iff claim. Open gaps: none.

Next action: author `thm-markov-chain-law-is-determined-by-initial-law-and-kernel`.

- `thm-markov-chain-law-is-determined-by-initial-law-and-kernel` — authored.
  Durrett Theorem 5.1.1 supplies the shared finite-dimensional integrals; the
  published cylinder-space determination theorem supplies path-law equality.
  Single-time, time-zero, empty/full rectangle and uniqueness cases are
  explicit. Choice is inherited from finite-dimensional conditioning; there is
  no converse claim. Open gaps: none.

Next action: author `def-shift-operator-and-future-coordinate-sigma-algebra`.

- `def-shift-operator-and-future-coordinate-sigma-algebra` — authored. Source:
  Durrett §5.2, pp. 279--281. Shift measurability follows coordinatewise;
  future sigma-algebras and path functionals are distinguished. `n=0`,
  identity, and constant zero/one cases are explicit. The definitions are
  choice-free; canonical-law expectations retain their supplier's Choice
  assumption. No iff or endpoint issue. Open gaps: none.

Next action: author `thm-markov-property-for-bounded-future-path-functionals`.

- `thm-markov-property-for-bounded-future-path-functionals` — authored. Source:
  Durrett Theorem 5.2.3 and surrounding shift notation, pp. 280--282.
  Rectangular cylinders are computed by nested kernels, a lambda-system extends
  to every path event, and simple approximation plus dominated convergence
  extends to bounded signed functionals while proving `h` measurable. `r=0`,
  empty/full cylinders, zero/one, constants, and one-point paths are explicit.
  Choice supplies canonical laws and conditional-expectation versions. No iff
  claim. Open gaps: none.

Next action: author the now-supplied
`thm-markov-property-as-past-future-conditional-independence`.

- `thm-markov-property-as-past-future-conditional-independence` — authored
  after its supplier. Sources: Aldous--Chewi Theorem 9.3(c)--(d), pp. 36--37,
  and Varadhan (4.7)--(4.9), Theorem 4.9, pp. 119--120. The two directions are
  proved by conditional event tests. The statement distinguishes past/future
  CI from the extra requirement that one fixed kernel give every present-state
  one-step law; without that qualification, homogeneity would be false.
  Empty/full tests, zero/one/constants and both iff directions are covered.
  Choice supplies conditional expectations. Open gaps: none.

Next action: author `thm-discrete-strong-markov-property`.

- `thm-discrete-strong-markov-property` — authored. Source: Durrett Theorem
  5.2.5 and its complete proof, p. 283. The stopped future functional and state
  function are defined by finite-time slice sums, zero on `tau=infinity`; no
  `X_infinity` occurs. Measurability, boundedness, each `F_tau` slice, dominated
  summation, and the a.s.-finite form are explicit. Zero/one functionals,
  `tau=0`, `tau=infinity`, empty/full conditioning events, and endpoint infinity
  are covered. Choice supplies conditional expectations. Open gaps: none.

Next action: author `cor-post-hitting-chain-restarts-from-the-hit-state`.

- `cor-post-hitting-chain-restarts-from-the-hit-state` — authored. The local
  supplier `tau_D` is defined and verified as a stopping time before strong
  Markov is applied. Source: Durrett Theorem 5.2.5, p. 283. The conclusion is
  stated for all bounded path functionals and identified with the canonical
  law from the hit state. `D=empty`, `D=E`, no-hit, immediate-hit, and zero/one
  functionals are covered; no undefined `X_infinity` is used. Choice comes from
  strong Markov/canonical laws. Open gaps: none.

Next action: author `def-killed-and-absorbed-transition-kernels`.

- `def-killed-and-absorbed-transition-kernels` — authored. The cemetery
  measurable space and every source/target formula are explicit, including
  starts in `D`, `D^c`, and at `Delta`. The distinction between absorption on
  `D` and killing on exit is preserved. `D=empty`, `D=E`, immediate killing,
  no killing and mass-one conventions are covered. The construction is
  choice-free and has no iff claim. Open gaps: none.

Next action: author `lem-killed-and-absorbed-kernels-are-probability-kernels`.

- `lem-killed-and-absorbed-kernels-are-probability-kernels` — authored.
  Sectionwise countable additivity, zero/full mass, and evaluation measurability
  are checked separately for absorbed points, live points, outside starts, and
  the cemetery. `D=empty` and `D=E` are explicit. The proof uses only kernel
  axioms and is choice-free; no iff claim. Open gaps: none.

Next action: author `def-discrete-generator-of-a-countable-state-transition-matrix`.

- `def-discrete-generator-of-a-countable-state-transition-matrix` — authored.
  Source: Roch Note 24, Definition 24.1 and (24.1), pp. 1--2. The equality
  `Lf=Pf-f`, absolute-convergence bound, power-set measurability, constant
  zero/one cases and the empty-state vacuity are explicit. This definition is
  choice-free and has no iff or endpoint issue. Open gaps: none.

Next action: author `thm-countable-state-martingale-problem-characterization`.

- `thm-countable-state-martingale-problem-characterization` — authored.
  Source: Roch Theorem 24.2 and proof, p. 2. The forward increment calculation,
  integrability bound, and reverse cancellation are explicit; indicators recover
  every transition event. `n=0`, empty sum, zero/one/constant tests,
  empty/full subsets, and both iff directions are covered. Choice is confined
  to conditional expectations. Open gaps: none.

Next action: author `cor-bounded-harmonic-functions-yield-markov-chain-martingales`.

- `cor-bounded-harmonic-functions-yield-markov-chain-martingales` — authored.
  Source: Roch Note 24, pp. 1--2. Harmonicity is calculated as `Lf=0`, so the
  martingale-problem compensator vanishes; boundedness supplies integrability.
  Zero/one, time-zero and one-point cases are included. Choice is inherited
  only from the martingale conditional expectations; no converse or endpoint
  issue. Open gaps: none.

The A-page inventory is now authored. Next action: author the B-page examples,
starting with `ex-iid-sequences-as-markov-chains-with-state-independent-kernel`.

- `ex-iid-sequences-as-markov-chains-with-state-independent-kernel` — authored.
  Source: Durrett §5.1, pp. 268--270. Kernel axioms and the conditional event
  calculation from block independence are explicit. Empty/full events,
  zero/one probabilities, a one-point law and time zero are covered. Choice is
  used only by conditional expectation; no iff claim. Open gaps: none.

Next action: author `ex-deterministic-dynamical-system-as-a-markov-kernel`.

- `ex-deterministic-dynamical-system-as-a-markov-kernel` — authored. The Dirac
  section and evaluation measurability checks precede the path calculation
  `1_A(X_{n+1})=1_A(TX_n)`. Empty/full events, one-point spaces, fixed points,
  cycles, constant maps and time zero are included. Choice is used only by the
  conditional-expectation interface; the kernel itself is choice-free. No iff
  claim. Open gaps: none.

Next action: author `ex-simple-random-walk-transition-kernel`.

- `ex-simple-random-walk-transition-kernel` — authored. Source: Roch Exercise
  24.1, p. 2. The IID-sign construction identifies the natural past, calculates
  every transition event, and substitutes the two nonzero rows into the
  generator. Empty/full events, time zero, zero entries, constant functions and
  the two endpoints `+/-1` of the increment law are explicit. Choice is only
  for conditional expectation; no iff claim. Open gaps: none.

Next action: author `ex-absorbing-gamblers-ruin-chain`.

- `ex-absorbing-gamblers-ruin-chain` — authored. All matrix rows are written
  and checked; the boundary entrance time is verified directly, then restart is
  applied and absorption computes the future. `N=1`, `p=0`, `p=1`, immediate
  hit, possible no-hit, zero/one functionals and both boundary endpoints are
  covered. Choice is inherited only from strong Markov. No iff claim. Open
  gaps: none.

Next action: author `ex-gaussian-ar-one-chain`.

- `ex-gaussian-ar-one-chain` — authored. The affine-normal section and its
  parameter measurability are proved before the independent-innovation
  conditional calculation. Empty/full events, `a=0`, `sigma=0` (Dirac),
  zero/one functions and time zero are explicit. Choice is declared for normal
  laws and conditional expectations. No iff claim. Open gaps: none.

Next action: author `ex-random-mapping-representation-for-a-finite-transition-matrix`.

- `ex-random-mapping-representation-for-a-finite-transition-matrix` — authored.
  Source: Levin--Peres--Wilmer §1.2, Proposition 1.5 and its proof, printed pp.
  5--7. Row cumulative
  intervals, the endpoint convention, measurability, exact interval lengths,
  and the fresh-uniform conditional calculation are explicit. Empty and
  one-state spaces, row masses zero/one, `u=1`, empty/full events and time zero
  are covered. Choice is only for conditional expectation/canonical realization.
  No iff claim. Open gaps: none.

Next action: author `cex-identical-one-step-marginals-do-not-determine-a-markov-chain`.

- `cex-identical-one-step-marginals-do-not-determine-a-markov-chain` — authored.
  The two witnesses are an IID fair-bit chain and one constant fair bit copied
  through time. Every one-time marginal is calculated, the kernels differ at
  `(0,{0})`, and `P(X_0=X_1)=1/2` versus `1` exhibits the failed conclusion.
  Time zero, finite/nonempty state, zero/one probabilities and degeneracy are
  explicit. Choice is only inherited through Markov interfaces. No iff claim.
  Open gaps: none.

Next action: author the enlarged-filtration counterexample.

- `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration`
  — authored. The enlarged filtration is defined at every time and checked to
  be increasing, larger, and adapted. At time zero the conditional probability
  is the revealed indicator, differing from `1/2` on each positive-probability
  bit event. Empty/full events, zero/one values, and the exact failed conclusion
  are explicit. Choice is only for conditional probabilities; no iff claim.
  Open gaps: none.

Next action: author the time-inhomogeneous counterexample.

- `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state`
  — authored. The repeated state `0` forces the incompatible values
  `K(0,{1})=0` and `1`; the explicit augmented-state Dirac kernel then advances
  the clock homogeneously. Times 0/1/2, both states, zero/one probabilities and
  the exact failed conclusion are explicit. Choice is only for conditional
  probabilities; no iff claim. Open gaps: none.

All 31 assigned items are authored. Next action: construct the two owned pages,
proof contracts, and item decisions, then run batch checks.

Both owned pages are authored. The A-page presentation places the bounded
future-functional supplier before the past/future characterization while
retaining every owner-approved ID. The B page registers all nine worked
examples/counterexamples.

## Completion and decisions

Completed A-page IDs:

- `def-time-homogeneous-markov-chain-with-transition-kernel`
- `lem-bounded-function-form-of-the-markov-property`
- `def-conditional-independence-given-a-sigma-algebra`
- `lem-conditional-independence-equivalences-and-preservation`
- `lem-conditional-independence-splicing-over-a-standard-borel-variable`
- `thm-markov-property-as-past-future-conditional-independence`
- `def-initial-distribution-of-a-markov-chain`
- `def-iterated-transition-kernels`
- `thm-chapman-kolmogorov-equations`
- `thm-finite-dimensional-laws-of-a-markov-chain`
- `thm-ionescu-tulcea-construction-of-a-markov-chain`
- `cor-canonical-markov-chain-on-path-space`
- `thm-markov-chain-law-is-determined-by-initial-law-and-kernel`
- `def-shift-operator-and-future-coordinate-sigma-algebra`
- `thm-markov-property-for-bounded-future-path-functionals`
- `thm-discrete-strong-markov-property`
- `cor-post-hitting-chain-restarts-from-the-hit-state`
- `def-killed-and-absorbed-transition-kernels`
- `lem-killed-and-absorbed-kernels-are-probability-kernels`
- `def-discrete-generator-of-a-countable-state-transition-matrix`
- `thm-countable-state-martingale-problem-characterization`
- `cor-bounded-harmonic-functions-yield-markov-chain-martingales`

Completed B-page IDs:

- `ex-iid-sequences-as-markov-chains-with-state-independent-kernel`
- `ex-deterministic-dynamical-system-as-a-markov-kernel`
- `ex-simple-random-walk-transition-kernel`
- `ex-absorbing-gamblers-ruin-chain`
- `ex-gaussian-ar-one-chain`
- `ex-random-mapping-representation-for-a-finite-transition-matrix`
- `cex-identical-one-step-marginals-do-not-determine-a-markov-chain`
- `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration`
- `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state`

All 31 current item decisions were recorded one at a time at confidence 1 with
the direct manifest dependencies as the examined dependency IDs and with
item-specific evidence. Four scaffolds were accepted without structural
repair (`def-time-homogeneous-markov-chain-with-transition-kernel`,
`def-killed-and-absorbed-transition-kernels`,
`lem-killed-and-absorbed-kernels-are-probability-kernels`, and
`def-discrete-generator-of-a-countable-state-transition-matrix`); the other 27
were recorded as repaired. A current receipt check reports `31/31` closed for
this pair. No `--owner` flag or judge/audit stamp was used.

Local suppliers added by the approved enrichment and fully authored here are
the conditional-independence definition, equivalence/preservation lemma,
standard-Borel splice lemma, future-path-functional theorem, and the
killed/absorbed-kernel verification. They precede their consumers on the A
page. No further item ID was added during Step 3b.

## Checks run

- Explicit-path precheck on all 31 items: 24 proof-bearing items checked, 0
  failing.
- Explicit-path rendercheck on 31 items and both pages: 33 files, 0 errors;
  every math span parsed under the real KaTeX and every frontmatter block under
  the renderer's YAML parser.
- Owned-pair content policy: 31 scoped items, 0 errors, 0 warnings.
- Strict proof contracts: 31/31 items, 0 errors, 0 warnings. The contract gives
  each numbered step's actual claim and inputs, exact supplier-section excerpts
  and uses, and item-specific dispositions of all eight boundary classes.
- Coverage checklist on shared batch 2: 2 pages, 43 harvested results, 0 errors,
  0 warnings.
- Citation check on the 31 owned items: 31 scanned, with every recognized
  elementary move citing a home that states it.
- Manifest/frontmatter dependency equality and direct Choice propagation: 31
  checked, 0 failures.
- Page registration and local prerequisite order: 31 expected and 31 listed,
  with no missing, extra, duplicate, or supplier-after-consumer ID.
- `validate-plan research/plan-spec.json`: exit 0; declared page order is
  acyclic and consistent, with no item-level cycles, bad forward references,
  B-page dependencies, or unresolved IDs among pages whose item lists are
  populated.
- The frontier dependency ledger was refreshed and deduplicated. Batch 2 has no
  same-run cross-batch dependency row for this pair, so the empty local
  cross-batch file remains correct.

For completeness, the repo-wide dependency and forward-reference diagnostics
were also run. They currently fail only on material outside this pair: three
dependency errors (`def-nilradical-of-a-finite-dimensional-lie-algebra` has one
unresolved supplier/link, and
`cex-vector-bundle-classification-without-numerability-can-fail` has one
B-leaf dependency) and four undeclared forward links on the separate vector
bundle frontier. None names an owned item or an owned page. The extension
diagnostic exits successfully with 55 inherited recorded-not-proved warnings;
none names this pair.

## Published-item audit

No confirmed defect or evidence-backed suspicion was found in any published
item read for this pair. In particular, the published conditional-expectation,
kernel-integration, product-measure, extension, standard-Borel factorization,
and stopping-time suppliers state the hypotheses used here. The 55 extension
warnings just noted are the repository's explicit recorded-not-proved debt, not
new defect evidence, and were not reclassified as defects. Therefore there is
no published item/page ID, required supplier, or repair strategy to route to
the owner from this dispatch.

## Open obligations for serial reconciliation

1. Full shared-batch content policy currently reports 28 `scope-item-missing`
   errors, all for the sibling Brownian-motion pair that is still being
   authored. The owned-pair filtered gate is clean. Those files and decisions
   belong to the sibling owner and were not edited here; re-run the full batch
   gate once that pair is complete.
2. The live plan has `items: []` for both
   `markov-kernels-and-markov-chains` and
   `markov-kernels-and-markov-chains-examples`. Step 4 should splice the two
   item arrays from the current batch manifest, using the authored A-page order
   (which places the future-functional supplier before the conditional-
   independence characterization). This is a pre-splice plan omission, not a
   mathematical or dependency gap in the pair.

No mathematical, source, dependency, or owner-held escalation remains open for
the owned pair.
