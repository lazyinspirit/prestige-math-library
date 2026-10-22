# Reader report — batch 56

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Batch: `56`

## Inventory reviewed

Assigned pages:

- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-certified-spectral-computation.md`
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-certified-spectral-computation-examples.md`

Assigned items, read in prerequisite order and checked against the batch manifest:

- `alg-nrqmx-rayleigh-ritz-procedure`
- `thm-nrqmx-spectral-residual-certificate`
- `cex-nrqmx-small-residual-no-label`
- `thm-nrqmx-ritz-upper-bounds`
- `thm-nrqmx-schrodinger-residual-bound`
- `ex-nrqmx-oscillator-ritz-exact`

The five proof-bearing assigned items have records in
`research/physics-non-fluid-129-2026-10-21-r2-batch-56.proof-contracts.json`;
I checked their proof-step mappings, supplier citations, boundary records, and
finite checks against the current carriers. The algorithm has no proof worksheet.
Both assigned pages are draft, have inventories matching the manifest, and have
empty bodies as expected under this run's compact statement-first page policy.

Direct item suppliers opened and checked for the claims used here:

- `thm-complex-spectral-theorem-for-normal-endomorphisms`
- `def-axiom-of-choice`; `def-countable-choice`
- `thm-cauchy-schwarz-in-an-inner-product-space`
- `lem-scalar-and-complex-measures-from-a-pvm`
- `lem-unbounded-pvm-integral-is-well-defined-and-closed`
- `thm-spectral-theorem-for-unbounded-self-adjoint-operators`
- `thm-unbounded-borel-functional-calculus`
- `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator`
- `thm-nrqmx-closed-form-representation`; `thm-nrqmx-form-min-max`
- `def-strongly-measurable-banach-valued-function`
- `lem-banach-valued-simple-integral-is-well-defined`; `def-bochner-integrable-function`
- `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`
- `thm-stone-one-parameter-unitary-groups`
- `thm-bochner-integrability-criterion`
- `lem-linearity-of-the-bochner-integral`
- `lem-bochner-integral-norm-inequality`
- `lem-average-convergence-of-a-continuous-banach-valued-function`
- `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`
- `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`
- `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`
- `def-closed-sectorial-form-and-its-associated-operator`

No TikZ or tikzcd diagrams occur in the assigned pages or items; no missing
diagram is needed to state or prove the reviewed claims.

## Findings not editable in this assignment

1. `alg-nrqmx-rayleigh-ritz-procedure`, `## Definition`, opening paragraph and
   the sentence after procedure step 3: the complex sesquilinear form is called
   “symmetric,” but the item neither states the convention
   `q(u,v)=overline{q(v,u)}` nor identifies an exact earlier definition. The
   subsequent claim that the form matrix is Hermitian, and the order inequality
   and form norm, require real diagonal values and Hermitian symmetry. State the
   identity explicitly (or identify and state the exact earlier definition).
   This is an unresolved definition-level defect.

2. `alg-nrqmx-rayleigh-ritz-procedure`, `## Definition`, the post-procedure
   sentence “Each returned vector satisfies ...”: this states algorithm
   correctness (`Ac_j=ρ_jGc_j` and `c_j^*Gc_k=δ_jk`) in the algorithm
   definition, without a separate proved result establishing it from the
   procedure. The physics algorithm rules require correctness properties in a
   separate lemma, theorem, proposition, or corollary. A separate proof should
   derive both identities from `B y_j=ρ_j y_j`, `c_j=G^{-1/2}y_j`, and the
   positive square root of `G`.

3. `thm-nrqmx-ritz-upper-bounds`, `## Facts & Assumptions [F6]` and `## Proof
   1.1`: the proof treats the exact generalized eigenvalue and Gram-orthonormal
   output property as supplied by the algorithm. The only cited support is the
   algorithm's unproved post-procedure correctness sentence. Add the short
   matrix derivation from the procedure (or cite a separate proved algorithm
   correctness result) before using the resulting eigenbasis. The missing
   calculation is immediate, so this proof-step gap is nonfatal, but it remains
   unedited in this read-only assignment.

No other confirmed or suspected defect was found in the assigned carriers.

## Page verdicts

- `nrqmx-certified-spectral-computation`: no page-level defect. Its frontmatter
  matches the assigned A-page inventory and lists the expected prerequisite
  pages. Its empty body follows the active compact-layout policy. The algorithm
  and theorem issues above are item-level findings.
- `nrqmx-certified-spectral-computation-examples`: no page-level defect. Its
  frontmatter matches the assigned B-page inventory, points to the A page, and
  its empty body follows the active compact-layout policy.

## Edits and checks

No library item or page was edited because this is a read-only reader assignment.
The Markdown report and findings JSON are the only authored outputs. No reflow,
precheck, or proof-layout command was run; the task requires those after edits,
and there were no item edits.

## Coverage limitation

I reviewed all assigned pages and items, all of their direct item suppliers, and
the cited clauses of secondary suppliers needed for the audited arguments. I did
not independently re-prove every transitive dependency in the extensive
published mathematical supplier graphs. No external web search was needed to
resolve a mathematical uncertainty in the reviewed claims.
