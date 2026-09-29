# Step 5a reader report — batch 12

## Scope and inventory

Read the batch manifest `research/frontier-36-complete-batch-12.pages.json`,
the reader brief, and the batch proof contracts in
`research/frontier-36-complete-batch-12.proof-contracts.json`.

Assigned pages opened:

- `library/pde/bessel-potential-completions-and-real-order-sobolev-spaces.md`
- `library/pde/bessel-potential-completions-and-real-order-sobolev-spaces-examples.md`

Assigned items opened (all currently say `status: draft`):

- `lem-japanese-bracket-powers-preserve-schwartz-space`
- `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`
- `lem-bessel-potential-norm-is-positive-definite`
- `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo`
- `def-real-order-bessel-potential-sobolev-space`
- `thm-bessel-potential-completions-embed-in-tempered-distributions`
- `cor-bessel-potential-spaces-are-hilbert-and-complete`
- `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation`
- `ex-zero-order-bessel-completion-is-ltwo`
- `ex-schwartz-functions-in-every-bessel-potential-completion`

External dependency items opened to check the assigned proof steps:

- `def-schwartz-space-and-its-seminorms`
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`
- `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`
- `lem-schwartz-space-is-dense-in-l-two`
- `lem-complex-lp-completeness-density-and-inner-product`
- `def-countable-choice`
- `thm-plancherel`
- `def-complex-lp-and-euclidean-test-function-conventions`
- `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`
- `def-completion-of-a-normed-space`
- `thm-metric-completion-carries-a-unique-banach-space-structure`
- `def-hilbert-space`
- `def-tempered-distribution`
- `def-weak-and-strong-topologies-on-tempered-distributions`
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`
- `thm-polynomial-growth-functions-define-tempered-distributions`

## Mathematical review

The bracket derivative expansion gives polynomial bounds for every derivative
of both bracket powers. The published multiplier result then supplies the
Schwartz and dual-space continuity; pointwise reciprocal weights prove the
inverse statements.

The candidate form is the first-variable-linear complex (L^2) pairing of
the weighted Fourier images. The positivity proof correctly uses Plancherel
and continuity of actual Schwartz functions to pass from almost-everywhere
vanishing to pointwise vanishing. The weighted range contains every
frequency-side (C_c^\infty) function by an explicit reciprocal-weight and
inverse-Fourier construction, so the cited smooth-density result proves
density in complex (L^2).

The completion definition uses the proved positive-definite norm and the
stated countable-choice metric-completion interface. In the embedding theorem,
the weighted transforms of completion representatives converge in (L^2);
density and countable choice establish surjectivity. The test-function
Cauchy–Schwarz estimate establishes temperateness and continuity in both dual
topologies. The local pairing and approximation arguments establish
Schwartz-class agreement, sequence independence, and injectivity. The Hilbert
corollary pulls back the complex (L^2) inner product. The characterization
proves both inclusions, uniqueness of the (L^2) witness, and the norm
identity. Both examples follow from these results and preserve the stated
Fourier normalization.

I also checked the cited source passages. Dyatlov, *Lecture Notes for 18.155*,
§11.1, Definition 11.1 (printed p. 119), defines its Fourier transform with
kernel (e^{-ix\cdot\xi}), whereas these items explicitly use the repository's
negative-sign (2\pi) convention. Dyatlov §12.1.2, Definition 12.3 and
(12.4)–(12.6) (printed pp. 139–141), gives the weighted Fourier description,
norm formula, (H^0=L^2), and Schwartz inclusion. Melrose, *Differential
Analysis*, Chapter 3, (4.14) and Proposition 4.8, (4.17) (printed pp. 68–69),
gives the corresponding weighted-space context and norm formula for integer
orders. Those references do not establish the batch's exact (2\pi)
normalization or its real-order completion construction; the assigned proofs
derive those claims locally from the repository's Fourier, (L^2), completion,
and distribution interfaces. The sources' scope and convention therefore do
not create an unsupported inference in the current proofs.

- [Dyatlov, Lecture Notes for 18.155](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)
- [Melrose, Differential Analysis, Chapter 3](https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf)

## Verdicts

- **A page — `bessel-potential-completions-and-real-order-sobolev-spaces`: pass.**
  Its summary accurately reflects the assigned definitions, embedding,
  Hilbert-space result, and characterization.
- **B page — `bessel-potential-completions-and-real-order-sobolev-spaces-examples`: pass.**
  Its summary accurately states Schwartz inclusion and the order-zero
  factor-one identification, with the stated limits on what the examples
  assert.

No mathematical or citation defect requiring repair was found in the assigned
items or pages. The batch proof-contract derivations and boundary clauses are
consistent with the current proofs. No files other than this report were
edited; there were no item repairs, contract updates, judge-record removals,
or required reflow/precheck runs.

## Uneditable defects

None found in the published dependency items opened above.

## Blocker and coverage limitation

The expected `.autopilot/frontier-36-complete/` state directory is absent, so
the autopilot status command could not independently verify the run's current
stage or that the draft items remain in-flight. I proceeded under the explicit
batch dispatch and recorded draft statuses. The mathematical review covered
both assigned pages, all ten assigned items, their proof contracts, and the
external dependency items directly needed by their cited steps; it was not a
full transitive audit of the published library.
