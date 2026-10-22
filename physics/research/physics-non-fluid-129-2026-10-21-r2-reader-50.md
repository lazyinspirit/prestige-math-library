# Step 3a reader report — batch 50

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `50`

## Opened inventory

The assigned draft pages are `nrqmx-measurement-compatibility` (A) and
`nrqmx-measurement-compatibility-examples` (B). I opened both current page
carriers and all ten assigned items:

- `def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse`
- `lem-nrqmx-bernoulli-hoeffding`
- `thm-nrqmx-instrument-stinespring-register`
- `thm-nrqmx-sharp-joint-measurability`
- `lem-nrqmx-finite-hermitian-trace-inner-product`
- `alg-nrqmx-linear-tomography-procedure`
- `lem-nrqmx-frame-pseudoinverse-reconstruction`
- `thm-nrqmx-tomography-identifiability-stability`
- `cex-nrqmx-same-povm-distinct-disturbance`
- `ex-nrqmx-pauli-tomography`

I read the batch manifest, cross-batch dependency file (empty array), proof
contracts, and batch notes as evidence, not as review verdicts. The four page
prerequisites of the A page were also opened: `qm-math-composites`,
`qsm-dt-channels`,
`the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and
`symmetrization-rademacher-complexity-and-covering-entropy`.

The direct item suppliers used by the assigned arguments were opened: `lem-qsm-matrix-state-calculus`,
`lem-qsm-dt-finite-trace-pairing-cyclicity`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
`def-moore-penrose-pseudoinverse`,
`thm-moore-penrose-pseudoinverse-exists-and-is-unique`,
`thm-singular-value-decomposition`,
`lem-bounded-variable-hoeffding-mgf`,
`def-qsm-dt-channel-definition`,
`thm-qsm-dt-choi-kraus`,
`lem-nrqm-composites-finite-effects-and-instruments`, and
`cor-cauchy-reals-lub-complete`. I also checked the exact characterization of
adjoints in `def-adjoint-of-a-linear-map-between-inner-product-spaces` before
locally stating the relevant characterization in the frame definition.
`research/math-imports.json` identifies the Moore–Penrose definition and
theorem, the Cauchy–Schwarz theorem, the bounded-variable MGF lemma, and the
Cauchy-reals completeness corollary as imported mathematical suppliers.

All assigned items are mathematical-domain items. No physical postulate,
reported experiment, empirical premise, or statistical claim about actual
laboratory data occurs in this batch.

## Item review and edits

| Item | Verdict and action |
|---|---|
| `def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse` | The trace pairing, Gram matrix, pseudoinverse, and dual-frame setup are consistent with its well-definedness lemma. The original Definition used `S*` without stating its characterization. I added the real dot product on `R^m` and the adjoint identity `c^T(S*X)=<Sc,X>_HS`; the linked lemma constructs this map and proves the trace pairing is an inner product. I checked the affected in-batch consumers: the trace-inner-product lemma, tomography algorithm, reconstruction lemma, tomography theorem, and Pauli example. Their uses remain compatible. |
| `lem-nrqmx-bernoulli-hoeffding` | The finite product law gives independent Bernoulli indicators with the stated parameter; the MGF factorization, Markov bound, choice of `4t`, union bound, and endpoint cases are correct. No edit. |
| `thm-nrqmx-instrument-stinespring-register` | The finite Kraus families combine into an isometry and disjoint label projections; the partial trace gives the claimed outcome map, including a zero outcome. The proof is independent of its diagram. The original `I_a` arrow terminated at an empty cell. I redirected it to the displayed output and aligned the partial-trace arrow with the same output. |
| `thm-nrqmx-sharp-joint-measurability` | The commuting products are positive projections with the stated marginals. Conversely, positivity and the projection bounds give the two support relations; the marginals then force `G_ij=P_iQ_j`, commutation, and uniqueness. The explicit finite setting is a specialization of the cited sharp-observable result. No edit. |
| `lem-nrqmx-finite-hermitian-trace-inner-product` | The trace pairing is real, symmetric, bilinear, and positive definite on Hermitian matrices. Its Gram and kernel identities follow from the stated finite synthesis map; the adjoint coordinate formula is now explicit in its Definition supplier. No edit. |
| `alg-nrqmx-linear-tomography-procedure` | The finite Gram/pseudoinverse procedure and simplex input conditions are explicit; the procedure makes no positivity claim for sample frequencies. No edit. |
| `lem-nrqmx-frame-pseudoinverse-reconstruction` | The positive spectral part gives the real Moore–Penrose inverse, the support projection has kernel `ker G`, and spanning yields reconstruction even for redundant frames. I made the nonnegativity of the eigenvalues and the finite real orthonormalization step explicit in the spectral-resolution proof. |
| `thm-nrqmx-tomography-identifiability-stability` | The finite product sampling argument and union bound are sound. The Statement allowed every real `f` in its deterministic estimate but called `X(f)` the algorithm output, although the algorithm accepts only normalized nonnegative frequencies. I defined `Delta_m`, made `X` the linear extension to `R^m`, and restricted the algorithm-output identification to `Delta_m`. The Pauli example consumer uses a valid probability vector and remains compatible. |
| `cex-nrqmx-same-povm-distinct-disturbance` | The two explicit normalized Kraus families have equal effects and different outcome updates on `P_0`; this refutes the displayed implication. No edit. |
| `ex-nrqmx-pauli-tomography` | The Gram eigenspaces and pseudoinverse coefficients check out. The Statement used `p_{j,±}`, the Bloch coordinates, the POVM condition, and “valid frequency vector” before defining them. I stated the trace convention and positive-semidefinite condition, defined the POVM and informational-completeness conditions, defined the unique Bloch coordinates and trace probabilities, and specified the frequency simplex. I also defined `r` and its Euclidean norm in the proof and made the coefficient extraction explicit. |

The affected proof-contract supplier excerpts were refreshed for the clarified
frame Definition and tomography Statement. The deterministic-estimate and
real-spectral-resolution derivation notes were refreshed. None of the five changed items carried a
`verification.judge` record to remove. The root-authored boundary worksheet in
the frame-definition contract still binds the pre-edit item hash
`b6aaa8fdb6fec7f1eeaadbc2a9e8d50563982299378fe816c74e7ff3f975cf16`; the
current item hash is `2b66fdbc2f46dc67f563e841072a8634c58803ae31f36a105d622167cb531c33`.
I preserved that owner-bound record. The owner must refresh it before strict
proof-contract validation can treat that review as current.

## Source and diagram checks

I checked the cited locations relevant to the assigned arguments:

- Turkeshi and Heinrich, *Quantum Information Methods for Many-Body Physics*,
  `3.1, equations (3.7)–(3.9), PDF p. 22:
  [source](https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf).
  That account assumes an invertible frame superoperator. The assigned
  redundant-frame extension is established by the local pseudoinverse proof;
  I do not attribute the redundant case to that source.
- Panchenko, MIT OCW 18.465 Lecture 07, Theorems 7.1–7.2, PDF pp. 1–2:
  [source](https://live.ocw.mit.edu/courses/18-465-topics-in-statistics-statistical-learning-theory-spring-2007/8fc2f7e9e92e6ed03edf22dd35f37eb5_lecture07.pdf).
  The notes present a one-sided Chernoff/Hoeffding argument and obtain the
  lower-tail result by complementing variables. The assigned Bernoulli item
  proves its two-sided bound locally from the finite product law and MGF.
- Heinosaari, Reitzner, and Stano, Appendix, Proposition 8, PDF p. 16:
  [source](https://arxiv.org/pdf/0811.0783). It states that jointly measurable
  observables with at least one sharp member commute and have a unique
  product-valued joint observable; the assigned finite PVM claim is within
  that scope.
- Watrous, *The Theory of Quantum Information*, Chapter 2, Theorem 2.22:
  [source](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf). It gives the finite
  completely-positive/Choi/Kraus equivalence. Its Choi tensor ordering differs
  from the local supplier's order, which the supplier explicitly reconciles by
  swapping tensor factors.
- Cleve, *Quantum Information Processing*, ``3.3.1–3.5:
  [source](https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F23/Qic710QuantumInformationTheory2023V2.pdf).
  The cited sections cover Kraus-to-Stinespring realization and the
  measurement/channel connection. The outcome-register projections in the
  assigned item are constructed and verified in its own proof.

The only TikZ/tikzcd diagram among the assigned items is the outcome-register
factorization in `thm-nrqmx-instrument-stinespring-register`; it now connects
the source map, outcome sandwich, partial trace, and `I_a` map to the correct
displayed objects.

## Page verdicts

- `nrqmx-measurement-compatibility` (A): pass after the in-scope item
  clarifications. Its draft placement and four declared page prerequisites
  resolve.
- `nrqmx-measurement-compatibility-examples` (B): pass after the Pauli-example
  clarification. Its draft placement and prerequisite on the A page resolve.

The published page `qm-math-composites` has one uneditable false claim in its
final paragraph: it says “All items are draft mathematics under construction,”
while its frontmatter is published and its listed item
`lem-nrqm-composites-finite-effects-and-instruments` is itself published. This
published page finding is routed with assigned consumer
`alg-nrqmx-linear-tomography-procedure`, whose `deps` directly reaches that
published page member. It is recorded in the findings JSON; I did not edit the
published page.

The other opened prerequisite pages (`qsm-dt-channels`, the Moore–Penrose
pseudoinverse page, and the symmetrization/Rademacher page) had no defect
identified in the reviewed claims and summaries.

## Checks and coverage limit

- `reflow.mts` on all five changed items: unchanged.
- `precheck.mts` on all five changed items: zero failures; the four
  proof-bearing items passed and the definition had no proof steps to check.
- `proof-layout.mjs` on the five changed items: 5 items, 16 steps, 0 defects.
- `rendercheck.mjs` on the five changed items and both assigned pages: 7 files,
  no math, delimiter, wikilink-in-math, or frontmatter errors.

I reviewed every assigned carrier, both assigned pages, the four declared
page prerequisites, and the direct suppliers needed by the assigned proofs.
The batch notes report 1,532 items in the transitive dependency context; I did
not independently audit every deeper ancestor in that full closure. The
published mathematical suppliers used directly by the assigned proofs were
opened and their actual relevant Statements and Proofs were checked. The
owner-bound stale hash above remains the workflow blocker for strict
proof-contract validation.
