# Step 3a reader report — batch 12

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `12`

## Opened inventory

Assigned pages reviewed: `emg-pcp03` and `emg-pcp03-examples`.

Assigned items reviewed: `post-emg-trivial-classical-charged-scalar-model`,
`pthm-emg-classical-charged-scalar-model-evolution`, and
`ex-emg-adopted-zero-classical-scalar`.

Workspace instructions read: `../CLAUDE.md`, `CLAUDE.md`, `README.md`,
`SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and
`briefs/reader.md`.

Opened model and action suppliers: `def-emg-trivial-potential-charged-scalar-system`,
`def-emg-classical-charged-scalar-finite-regularity-system`,
`lem-emg-classical-charged-scalar-compact-variation`,
`lem-emg-charged-scalar-variation`, `def-emg-geometry-units`,
`post-emg-einstein-maxwell-action`, `def-countable-choice`,
`def-dependent-choice`, and `thm-gronwall-integral-inequality`.

Opened Cauchy/reduction suppliers: `thm-emg-local-classical-charged-scalar-development`,
`def-emg-periodic-high-sobolev-state`,
`thm-emg-symmetric-hyperbolic-research-supplier`,
`def-gr-periodic-symmetric-hyperbolic-system`,
`lem-emg-temporal-scalar-positive-symmetric-reduction`,
`lem-emg-fieldstrength-positive-symmetric-reduction`,
`lem-emg-charged-scalar-subsidiary-chain`,
`def-gr-harmonic-gauge-and-reduced-equations`,
`lem-gr-reduced-einstein-principal-part`,
`thm-gr-local-geometric-development`,
`thm-gr-local-geometric-uniqueness`,
`thm-gr-constraint-equations-in-normal-frame`,
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
`thm-gr-periodic-symmetric-hyperbolic-existence`,
`thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`,
`thm-gr-periodic-symmetric-hyperbolic-smooth-persistence`,
`lem-gr-periodic-sobolev-embedding`, `lem-gr-periodic-sobolev-algebra`, and
`lem-gr-smooth-composition-and-commutator-estimates`.

Also opened the dependency pages `emg-cp04` and `emg-g04`; the assigned
`research/physics-remaining-80-2026-10-17-batch-12.pages.json`, batch-12
cross-batch ledger and proof contracts; and batch-11 page/routing metadata and
pre-reader baseline (`research/physics-remaining-80-2026-10-17-batch-11.pages.json`
and `research/physics-remaining-80-2026-10-17-step3-hash-11-pre.json`) relevant
to the current mathematical Cauchy supplier.
These records were used as navigation and evidence, not as verdicts.

For source fidelity, I checked Tong, [*Gauge Theory*](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf),
§2.5.2 (PDF pp. 89–91, printed pp. 78–80); Friedrich–Rendall,
[*The Cauchy Problem for the Einstein Equations*](https://arxiv.org/pdf/gr-qc/0002074),
§3.1 and §5.4; and Carroll,
[*Lecture Notes on General Relativity*](https://arxiv.org/pdf/gr-qc/9712019v1),
Ch. 4, eqs. (4.68)–(4.70). Tong gives the four-dimensional Abelian–Higgs
functional and charged derivative at the cited location, while explicitly
distinguishing the relativistic model from a material superconductor.
Friedrich–Rendall describes §3.1 as an outline of the symmetric-hyperbolic
technique rather than a complete proof of this coupled system. Carroll's
equations give action/stress normalization context; the local SI conventions
and coupled proof are supplied in this workspace.

## Review and edits

### `post-emg-trivial-classical-charged-scalar-model`

The item adopts a global real-potential classical model, states the field
regularity, units, coupling and self-potential domain, and separates the
adopted action from mathematical variation consequences. The compact-variation
supplier has the same C3-metric/C2-matter domain and action coefficients.
The literature is presented as motivation and convention context, not evidence
that the model describes nature. I found no confirmed defect requiring an
edit.

### `pthm-emg-classical-charged-scalar-model-evolution`

The physical claim is conditional on the adopted action, the complete charged
data, the stated constraints, admissible-state hypotheses, and ACω/DC. The
finite branch is explicitly confined to the classical C3/C2 action domain; no
empirical or global-existence conclusion is made.

The current mathematical supplier uses the positively oriented h-orthonormal
Maxwell state components, as required by its symmetric Maxwell block. The
assigned physical theorem initially named periodic-coordinate components in
its first-order state. I repaired that mismatch by specifying the global
Gram–Schmidt orthonormal frame from the periodic state definition, using
$(\widehat e_A,\widehat b_A)$ as state variables, and carrying that convention
through the field scale and proof contract. The data remain spatial vector
fields with Hs coordinate components; the current mathematical supplier's
regularity argument transfers them to the orthonormal state components.

I traced the changed state interface to its assigned consumer,
`ex-emg-adopted-zero-classical-scalar`. The example uses the theorem's field
equations and complete zero-scalar Cauchy conditions, but does not use the
Maxwell component representation. No consumer repair was needed. The A-page
summary likewise describes the complete data without fixing a coordinate
Maxwell state convention.

### `ex-emg-adopted-zero-classical-scalar`

The original Verification asserted that multiplying the scalar wave system by
energy variables yields $E'\le CE$ but did not define the scalar state or energy,
derive the symmetric matrices, identify the zero Cauchy data, or show the local
side-flux sign. I repaired the proof. It now writes the real scalar state
$(\varphi,\pi_0,\pi_i)$, displays its positive time and symmetric spatial
matrices, identifies bounded zero-order coefficients on compact cylinders,
and derives the energy identity. On the torus the periodic flux cancels; in a
local chart, a shrinking coordinate cube has positive face matrices for a
speed greater than the spatial-matrix bound divided by the time-matrix lower
bound. One-variable integration and the cited Gronwall result give zero scalar
state from the zero initial data in both time directions. The finite-regularity
case uses the C3/C2 output established in the Cauchy theorem's proof.

The batch-12 example contract was updated with separate derivations for the
zero-scalar reduction and energy estimate. Neither changed item had a
`verification.judge` record to remove. The proof precheck first proposed the
canonical next phase number `3.1`; I adopted it and removed a self-reference
that the checker interpreted as a forward step reference.

## Validation

- `ex-emg-adopted-zero-classical-scalar`: reflow completed; final precheck
  passed (`1 checked, 0 failing`).
- `pthm-emg-classical-charged-scalar-model-evolution`: reflow completed; final
  precheck passed (`1 checked, 0 failing`).
- Final proof-layout command on both changed items: `2 items, 7 steps, 0 defects`.
- No test suite was run.

## Page verdicts

- `emg-pcp03` (A page): the summary accurately describes the model, regularity,
  conditional Cauchy claim and exclusions. No page prose edit was needed. The
  theorem's state notation is now aligned with its current mathematical
  supplier. **Verdict: no page-prose defect found; draft mathematical
  dependencies remain draft.**
- `emg-pcp03-examples` (B page): the summary accurately describes the exact
  zero-scalar reduction and the conditional Cauchy branch. The item now proves
  the energy estimate it cites. B-page prose was not edited. **Verdict: no
  page-summary defect found.**

## Uneditable historical observation and blocker

At an earlier read, `thm-emg-local-classical-charged-scalar-development` used
coordinate Maxwell state variables $(e^i,b^i)$ while Proof 1.3 applied the
$\alpha^{-1}I_6$ symmetric block proved for orthonormal-frame components. That
version did not establish the symmetric-hyperbolic hypotheses for its stated
state. The current carrier has since changed: it now uses $(e_i,b_i)$ as
orthonormal-frame variables. The
current raw SHA-256 at the final check was
`d1cfb09593391f79c90d1341527abb69f7a3a1116e352fceaca26ea67f4b376d`. I did not
capture the earlier observed bytes' raw hash, so this report does not attribute
the historical defect to the current source.
`research/physics-remaining-80-2026-10-17-step3-hash-11-pre.json` contains a
baseline fingerprint, but that fingerprint alone does not bind the
bytes I observed. The historical finding is preserved with
`observed_source: null` in the findings JSON; exact-byte binding is unavailable.

There is no remaining batch-12 source blocker after the two item repairs. The
historical cross-batch observation remains routed for owner disposition because
its original bytes cannot be bound.

## Coverage limitation

The declared `deps`/`justified_by` closure for the three assigned items contains
2,307 item IDs. I reviewed the assigned carriers, their immediate suppliers,
and the main local Cauchy, symmetric-reduction, subsidiary and action-variation
chain, but did not audit every transitive mathematical item in that closure.
In particular, older draft foundations beneath the smooth variation supplier
and the full closure of all published mathematical foundations were not
independently audited. No coverage or proof acceptance is claimed for those
unread transitive items.
