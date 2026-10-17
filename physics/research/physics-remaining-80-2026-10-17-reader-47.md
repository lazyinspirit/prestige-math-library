# Independent reader report — batch 47

Run: `physics-remaining-80-2026-10-17`  
Role: Step 3a reader  
Assigned batch: `47`

## Verdict

I found and repaired eight in-scope definition, prerequisite, proof, or units omissions. I found no confirmed defect requiring an uneditable finding. Both assigned pages pass review as draft pages, subject to the owner workflow hold recorded below.

The postulates are presented as adopted model assumptions, the physics theorem is conditional on them, and the examples make no empirical observation claim. None of these items interprets mathematical agreement as evidence that a physical model describes nature.

## Opened inventory

### Assigned pages

| Page | Carrier | Verdict |
|---|---|---|
| `qsm-dt-response` | `library/quantum-statistical-mechanics/qsm-dt-response.md` | Pass. Summary matches the finite-matrix, normal-state, domain, spectral, and algebraic results and retains their stated scope. |
| `qsm-dt-response-examples` | `library/quantum-statistical-mechanics/qsm-dt-response-examples.md` | Pass. The summary accurately describes the bounded projected oscillator transition and the two-level first-order response; neither example is presented as a measurement or a relaxation result. |

### Assigned items

The A page contains the 19 opened items:

`lem-qsm-dt-banach-volterra-dyson`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-dt-lorentzian-distribution-limits`, `lem-qsm-dt-stationary-variance-integral-identity`, `thm-qsm-dt-normal-state-kubo`, `thm-qsm-dt-finite-unitary`, `thm-qsm-dt-cesaro-dephasing`, `thm-qsm-dt-finite-kubo`, `thm-qsm-dt-finite-recurrence`, `thm-qsm-dt-strong-domain-response`, `post-qsm-dt-isolated-model`, `post-qsm-dt-physical-control`, `thm-qsm-dt-spectral-fdt`, `lem-qsm-dt-trace-gibbs-correlation-series`, `thm-qsm-dt-trace-gibbs-correlation-measure`, `pthm-qsm-dt-prepared-response`, `thm-qsm-dt-algebraic-kubo`, `thm-qsm-dt-isolated-dc-obstruction`, and `thm-qsm-dt-variance-green-kubo`.

The examples page contains the two opened items `ex-qsm-dt-bounded-oscillator-response` and `ex-qsm-dt-qubit-isolated-response`.

### Dependency and affected-consumer context

I opened the prerequisite pages `qsm-finite-range-spin-dynamics`, `qsm-quasilocal-states`, `qsm-states-ensembles`, `relations-functions-and-quotients`, `the-lebesgue-integral-and-the-convergence-theorems`, and `cm-math-fluid`. I opened the relevant supplier carriers `def-axiom-of-choice`, `def-countable-choice`, `def-operator-norm`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-c-star-algebra`, `def-trace-class-operator`, `def-qsm-density-trace-state`, `def-qsm-bounded-finite-range-interaction`, `def-qsm-local-spin-algebras`, `def-qsm-quasilocal-spin-algebra`, `def-qsm-infinite-algebraic-state`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`, `lem-qsm-local-spin-inclusions-isometric`, `lem-qsm-consistent-local-states`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `lem-qsm-matrix-state-calculus`, `lem-qsm-trace-state-calculus`, `lem-qsm-finite-gibbs-kms`, `lem-qsm-matrix-exponential-response`, `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`, `lem-qsm-boundary-dynamics-cauchy`, `lem-qsm-quasilocal-completion`, `lem-qsm-finite-range-commutator-path-bound`, `lem-nuclear-series-characterizes-trace-norm`, `post-qsm-normal-measurement-state`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-cyclicity-of-the-trace`, `thm-dominated-convergence`, `thm-hilbert-adjoint-properties`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, `thm-qsm-finite-range-spin-dynamics`, and `thm-qsm-trace-gibbs-variational`.

After the interface clarifications, I checked the assigned downstream consumers `thm-qsm-dt-finite-kubo`, `thm-qsm-dt-strong-domain-response`, `thm-qsm-dt-algebraic-kubo`, `thm-qsm-dt-cesaro-dephasing`, `thm-qsm-dt-variance-green-kubo`, `thm-qsm-dt-finite-recurrence`, `thm-qsm-dt-spectral-fdt`, `post-qsm-dt-isolated-model`, and `ex-qsm-dt-qubit-isolated-response`. I also checked the out-of-batch draft consumers `thm-qsm-dt-reduced-unitary` and `thm-tgr-finite-response-redshift`; the clarified finite-unitary entropy convention and spectral time/frequency units do not require a downstream repair in either item.

## Repairs

1. `thm-qsm-dt-normal-state-kubo`, Facts & Assumptions [F3], new [F7]–[F8], and Proof 1.1–1.3: the proof used trace-norm finite-rank approximation and `||rho||_1 = 1`, neither of which was stated in the cited ideal theorem or density definition. I added the published nuclear-series characterization and positive-trace formula as direct mathematical prerequisites, stated their exact relevant consequences, and used them where the proof approximates trace-class operators and normalizes the Volterra remainder. The relevant exact suppliers are `lem-nuclear-series-characterizes-trace-norm` (Statement: the SVD attains the trace-norm infimum) and `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` (Statement: positive trace equals trace norm). I updated this item's proof contract and confirmed no stale `verification.judge` record was present.

2. `lem-qsm-dt-finite-matrix-trace-ideal`, Statement and Proof 2.1, 4.1: I defined the operator norm as the norm induced by the Hilbert-space norm, replaced the unnamed inner-product estimate in the unitary trace supremum argument with a direct orthogonal-projection calculation, and replaced the unproved finite Cauchy–Schwarz invocation by the identity `d sum(s_j^2) - (sum s_j)^2 = sum_{i<j}(s_i-s_j)^2`. I updated the proof-contract derivations.

3. `thm-qsm-dt-cesaro-dephasing`, dependencies, Facts [F2], and Proof 2.1: the conclusion used trace-norm convergence without a trace-norm supplier. I added `lem-qsm-dt-finite-matrix-trace-ideal` as a mathematical prerequisite and cited its exact finite-dimensional norm statement. I updated the proof contract.

4. `lem-qsm-dt-banach-volterra-dyson`, Statement: I gave the operator norm on `B(X)` by its unit-ball supremum so the norm used in the coefficient bound is explicitly defined.

5. `thm-qsm-dt-finite-recurrence`, Statement and Proof 2.1: I defined the induced operator norm in the recurrence claim and stated why the diagonal phase error is bounded by the maximum diagonal modulus. I updated the proof-contract derivation.

6. `thm-qsm-dt-spectral-fdt`, Statement: I specified time in seconds, the Fourier frequency and positive regulator in s^-1, and the units of the response kernel and retarded transform. The units are consistent with the exponent, denominator, and Fourier convention. I updated the proof-contract endpoint evidence. I checked both in-batch and out-of-batch consumers of its spectral convention.

7. `lem-qsm-dt-stationary-variance-integral-identity`, Statement and Fact [F2]: I stated that its complex C*-algebra is used as an underlying real Banach space for the time integrals, matching the exact real-vector-space scope of `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`. I updated the proof-contract supplier-use note.

8. `thm-qsm-dt-finite-unitary`, Statement: I made the zero-eigenvalue convention for `Tr(rho log rho)` explicit by defining the logarithm on the positive support and assigning `0 log 0 = 0`. The existing proof contract already records this boundary case.

## Source checks

For the quantum-spin locality dependency, I checked the exact Lieb–Robinson estimate and its finite-range setting in [Nachtergaele and Sims, Theorem 2.3, printed pp. 4–7](https://arxiv.org/pdf/1004.2086), and [Naaijkens, Theorem 4.1.2, printed p. 97, and Theorem 4.2.1, printed pp. 101–102](https://arxiv.org/pdf/1311.2717). The local commutator and boundary-Duhamel arguments were checked directly in the dependency items; the source citations do not substitute for those local proofs.

For the response sign and retarded convention, I read [MIT OpenCourseWare 8.512, Lecture 1, §§1.1–1.3, printed pp. 1–4](https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf). It presents the interaction-picture commutator response with a retarded regulator; the sign in the assigned items follows their explicitly adopted perturbation `H - epsilon h B`. The cited Kubo 1957 PDF opened but returned no extractable text in the browser, so I did not use it to certify source fidelity; the relevant finite-dimensional and trace-class response deductions were checked from the local proofs and their exact mathematical suppliers.

## Page verdicts and uneditable defects

- `qsm-dt-response`: pass as a draft A page. Its summary separates the normal trace-class and algebraic-state settings, does not infer relaxation or dc transport, and accurately records the conditional postulate/theorem roles.
- `qsm-dt-response-examples`: pass as a draft examples page. The projected oscillator computation and two-level Kubo response match their items; the summary claims no measurement or thermal relaxation.
- Uneditable defects: none identified.

## Validation and blocker

For each of the eight changed items, reflow reported unchanged source and precheck passed. The single batched proof-layout command reported `8 items, 31 steps, 0 defects`. No `verification.judge` record was present on the changed carriers.

The inspected `research/physics-remaining-80-2026-10-17-batch-47.dependency-inputs.json` reports `batch_schedule_status: stale`: the current prerequisite set is batches 36, 38, and 39, while the stored set is batch 39. The repairs also add explicit direct dependencies to the normal-state Kubo and Cesaro items that are absent from the frozen batch-47 manifest. These are owner workflow inputs and need reconciliation before a batch gate; the reader did not change the frozen manifest or schedule.

The source review does not independently accept draft suppliers from other batches. Their claims remain conditional on their own review and workflow gates.
