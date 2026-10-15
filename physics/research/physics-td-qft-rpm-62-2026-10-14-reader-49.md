# Reader report — batch 49

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: Step 3a reader  
Date: 2026-10-15

## Verdict

I reviewed both assigned pages, all four assigned items, and the dependencies listed below. I repaired the missing state-to-density assumption in the finite-probability theorem and carried it to its assigned example and A-page summary. No uneditable defects remain. The run status command reported the run active at `3a-read` when checked; it reported no workers in flight.

## Opened inventory

Dispatch and review records consulted: `research/physics-td-qft-rpm-62-2026-10-14-batch-49.pages.json` and `research/physics-td-qft-rpm-62-2026-10-14-batch-49.proof-contracts.json`.

### Assigned pages

- `qft-x01` — `library/quantum-field-theory/qft-x01.md`
- `qft-x01-examples` — `library/quantum-field-theory/qft-x01-examples.md`

### Assigned items, in dependency order

- `def-qft-example-observable-types`
- `pthm-qft-example-regulated-probability-control`
- `ex-qft-x01`
- `ex-qft-x03`

### Dependencies opened

- `def-qft-framework-units`, `def-qft-example-data`, and the imported published `def-countable-choice`
- `def-qft-finite-bounded-kraus-instrument`, `lem-qft-finite-instrument-normalization`, and `post-qft-constructed-model-and-measurement`
- `thm-qft-example-finite-dyson-unitarity` and its mathematical supplier `thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness`
- `lem-qft-example-oscillator-feynman-prescription`, with the exact basis/recurrence supplier statements in `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization` and `thm-nrqm-oscillator-hermite-recurrence`
- For the unit and domain dictionary: `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `def-sr-si-units-and-coordinate-conventions`, `def-em-si-conventions`, `def-em-electromagnetic-tensor`, `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, and `def-unbounded-linear-operator-domain-and-graph`.

The current `research/math-imports.json` row for `items/def-countable-choice.md` gives SHA-256 `28c60d2bef81c4dc87391283f7224d87e51eaa1e2106bb41d4f3c8157d80b006`; the local snapshot has the same hash.

## Source checks

- David Tong, *Quantum Field Theory*, §0.1, https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html: natural-unit conversions and mass-dimension conventions.
- M. Srednicki, *Quantum Field Theory* draft, §12, equations (12.1)–(12.12), https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf: mass-degree bookkeeping and the scalar kinetic-term dimension used as background for the local engineering-dimension calculation.
- David Tong, *Quantum Field Theory*, §3.1.1, equations (3.215)–(3.225), https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html: the interaction-picture state equation and unitary propagator formulation. The local finite-dimensional theorem supplies the norm-convergence and error argument.
- David Tong, *Quantum Field Theory*, §§2.1.1 and 2.7.1–2.7.2, https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html: oscillator, time-ordering, and retarded Green-function context; equation (2.176) makes the retarded kernel vanish at earlier times.
- Watrous, *The Theory of Quantum Information*, author-hosted current text, §2.3.1, Definition 2.34 and equations (2.199)–(2.202), https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf: a normalized finite measurement and its state-dependent outcome probabilities.
- Griffiths, *Notes on Quantum Information Theory*, §7, equations (7.2)–(7.5), https://www.andrew.cmu.edu/course/33-658/qit7.pdf: Kraus operators, pure-state outcome probabilities, and normalization.
- Srednicki, *Quantum Field Theory* draft, §7, equations (7.12)–(7.16), https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf: oscillator Green kernel and its time-ordered ground-state correlator; the local argument supplies the stated normalization and retarded comparison.
- BIPM, *The International System of Units*, 9th edition, version 4.01, §§2.2 and 2.3.1, https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf: exact SI defining constants and the experimentally determined current status of the magnetic constant.
- Fan et al., arXiv:2209.13084v2, title and measurement description, https://arxiv.org/html/2209.13084: confirms the cited source is an electron magnetic-moment determination. The reviewed definition does not report a numerical result or reconstruct uncertainty.

## Findings and repairs

### `pthm-qft-example-regulated-probability-control`

The original Statement called $\|P_aU(\tau)\psi\|^2$ an exact model probability, but its physical postulate assigns probabilities to a supplied density operator $\rho_\tau$. The theorem had not identified that density with the evolved vector. The postulate's general Born rule did not itself supply the time-dependent evolution used by the Dyson construction; the Dyson supplier proves a mathematical unitary, not that it is the selected model's state update. The pure-vector clause of `lem-qft-finite-instrument-normalization` supplies the mathematical trace identity but does not establish that physical identification.

I added explicit assumption [A3]: the selected model prepares $T_{\psi,\psi}$ and adopts $U(\tau)\rho_0U(\tau)^*=T_{U(\tau)\psi,U(\tau)\psi}$ as its measurement-time state. The proof now traces the probability claim through [A3], the finite-instrument result, and the Born postulate, and explicitly labels it a conditional model deduction rather than an empirical observation. I also defined matrix unitarity, the standard basis for $\mathsf T_{fi}$, and $\operatorname{Im}_{\mathrm H}A=(A-A^*)/(2i)$ so the coefficient identities are unambiguous. The two-level specialization now states why its $z$ equals the earlier norm-bound parameter. Tong §3.1.1, equations (3.215)–(3.225), supports the adopted interaction-picture model form; it is not evidence that nature realizes it.

Updated the assigned proof contract's `D2` and `D4` derivations and the supplier-context records for the instrument lemma, Born postulate, and finite Dyson theorem. The contract now records the actual norm-continuity hypothesis rather than the stale `C^2` description previously attached to the theorem as an example supplier.

### `ex-qft-x01`

Updated the Example and [F1] to carry the theorem's explicit pure-state preparation and unitary state-update assumption. Its exact transition value, first-coefficient square, quartic bound, and scope remain conditional on the constructed finite model; no empirical data are introduced. Updated its supplier-context record in the proof contract.

### `qft-x01` page

Updated the A-page summary to include the explicit state-preparation/evolution assumption alongside the Born postulate. Its description of the finite error bound and the absence of continuum or experimental conclusions remains accurate.

### Other assigned content

`def-qft-example-observable-types` distinguishes finite state, observable, and measurement data; it explicitly treats formal coefficient records as unevaluated unless convergence and an evaluation map are supplied, and it does not present the Fan et al. citation as a numerical measurement claim. `ex-qft-x03` follows the exact one-mode formulas and keeps the negative-time correlation distinct from the retarded kernel; it makes no spatial-causality, signalling, continuum, or empirical claim. No repairs were needed.

## Page verdicts

- `qft-x01` — **Pass after repair.** Its theorem is conditional on an explicit physical state update and Born interpretation, and its summary now says so.
- `qft-x01-examples` — **Pass.** Both examples are scoped to constructed models and do not report observations; the two-level example now carries the theorem's physical assumption.

## Validation and blocker

- `reflow.mts` completed for `pthm-qft-example-regulated-probability-control` and `ex-qft-x01`.
- `precheck.mts` passed both changed items: 2 checked, 0 failing.
- `proof-layout.mjs` passed: 2 items, 9 steps, 0 defects. The initial invocation failed because the app checkout lacked its `tsx` loader and the fallback did not resolve the web `@/*` aliases. I reran the same renderer with a temporary resolver matching the app's `web/tsconfig.json` alias mapping; no repository tool or app file was changed.
- No `verification.judge` record was present on either changed item, so there was no stale judge stamp to remove.
- No blocker remains.

## Coverage note

The exact cited Watrous prepublication URL `TQI.2.pdf` returned an internal retrieval error. I checked the relevant claim in Watrous's author-hosted current `TQI.pdf`, §2.3.1, but did not verify that the two files are version-identical. I discovered the oscillator basis and recurrence dependencies after opening their dependent lemma; I then checked their exact statements, but this was not supplier-before-consumer reading. The local finite-instrument proof was inspected directly. No empirical quantities or uncertainties were inferred from the Fan et al. source.
