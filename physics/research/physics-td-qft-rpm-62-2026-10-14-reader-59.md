# Step 3a reader report — batch 59

- **Run:** `physics-td-qft-rpm-62-2026-10-14`
- **Role:** independent, read-only reader
- **Scope:** batch `59`
- **Outcome:** no defect found in an assigned item or page; two nonfatal findings are recorded against published mathematical dependencies.

## Opened inventory

### Assigned pages

- `library/quantum-field-theory-mathematics/qft-ir01.md` — A-page, including the summary and item placement.
- `library/quantum-field-theory-mathematics/qft-ir01-examples.md` — B-page, including the summary and example placement.

### Assigned items

Reviewed the authored item files in dependency order, with each item's statement, facts, proof or definition, frontmatter, and relevant proof-contract entries:

- Level 0: `def-qft-regulated-polynomial-hamiltonian`.
- Level 1: `lem-qft-coercive-polynomial-form-domain`.
- Level 2: `lem-qft-cube-poincare-compact-form-inclusion`; `lem-qft-hermite-oscillator-research-supplier`.
- Level 3: `lem-qft-polynomial-positive-compact-resolvent`.
- Level 4: `thm-qft-self-adjoint-regulated-interaction`.
- Level 5: `thm-qft-regulated-global-unitary-evolution`; `thm-qft-regulated-gibbs-trace`; `lem-qft-regulated-ground-variational-bound`; `rem-qft-cutoff-vs-continuum-interaction`.
- Level 6: `ex-qft-quartic-ground-energy-bound`.

The item inventory matches `research/physics-td-qft-rpm-62-2026-10-14-batch-59.pages.json`. I also reviewed `research/physics-td-qft-rpm-62-2026-10-14-batch-59.proof-contracts.json`: the derivation entries map to the numbered proof steps of each proof-bearing assigned item; the definition has no proof derivations. Contract citations and boundary worksheets were treated as review evidence and checked against the relevant carrier text, not as verdicts.

### Supporting dependency items opened

I opened the exact statements or definitions and the clauses needed for the assigned uses in these mathematical suppliers:

- `def-countable-choice`; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`; `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`; `thm-cauchy-schwarz-in-an-inner-product-space`; `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`; `def-compact-linear-operator`.
- `thm-nrqm-oscillator-hermite-recurrence`; `thm-nrqm-oscillator-multidimensional-oscillator-completeness`; `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`; `thm-hilbert-space-fourier-expansion`; `thm-parseval-equivalences-for-a-complete-orthonormal-family`; `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma`; `thm-nrqm-oscillator-diagonal-spectrum`.
- `thm-riesz-representation-for-hilbert-space`; `def-bounded-linear-operator`; `def-self-adjoint-positive-unitary-and-normal-operator`; `thm-double-orthogonal-complement-is-closure`; `thm-spectral-theorem-for-compact-self-adjoint-operators`; `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`; `def-unbounded-linear-operator-domain-and-graph`; `def-adjoint-of-a-densely-defined-unbounded-operator`; `def-symmetric-self-adjoint-and-essentially-self-adjoint`.
- `lem-finite-rank-operators-are-compact`; `thm-norm-limit-of-compact-operators-is-compact`; `lem-nuclear-series-characterizes-trace-norm`; `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`; `thm-trace-is-absolutely-convergent-and-basis-independent`.
- `thm-dominated-convergence`; `cor-mean-value-theorem`.

## Review results

The finite-mode definition specifies $N\ge1$, the real polynomial and coercive lower bound, the complex $L^2$ convention, the test-function domain, and the differential expression. It explicitly refrains from choosing an operator domain or asserting a limit. The form-completion proof correctly uses Countable Choice for countably many approximants, identifies weak derivatives by testing, and proves injectivity through density. The cube-mean/tail argument supplies finite nets and compactness for each finite $N$. The scaled Hermite construction identifies the parameters, proves form-domain membership by cutoffs, and obtains the form expansion from completeness in both Hilbert spaces.

The variational inverse is bounded, positive, injective, compact, and has dense range under the stated suppliers. The subsequent spectral construction states the selected realization and coefficient domain while expressly avoiding a claim of essential self-adjointness or uniqueness among other extensions. The evolution proof carries the spectral domain through the unitary group and proves the converse differentiability condition. The Gibbs proof bounds the trace by the explicit oscillator sum and proves the bounded-operator expectation formula with absolute convergence. The variational lemma, fixed-regulator scope remark, and one-mode quartic estimate preserve their stated hypotheses; the quartic calculation's Gaussian moments and numerical coefficient check.

No assigned item was edited. No repair, precheck, reflow, proof-layout, or judge-stamp action was performed.

## Uneditable findings

1. **Published item `thm-nrqm-oscillator-multidimensional-oscillator-completeness`, Proof step 1.1 / Facts & Assumptions [F3].** [F3] identifies the diagonal-operator lemma and diagonal-spectrum theorem. Their opened statements do not establish the Fourier expansion or Parseval identity attributed to [F3] in step 1.1. The actual Parseval-equivalence theorem is a listed dependency but is not identified in [F3] or cited at that step. This is a citation defect in the supplier's additional expansion claim; the assigned Hermite item uses the supplier's basis-completeness result and has its own Hilbert-space Fourier-expansion dependency. A local fact and citation to `thm-parseval-equivalences-for-a-complete-orthonormal-family` would close the citation gap. Routed as `citation-inaccurate`, nonfatal, with assigned consumer `lem-qft-hermite-oscillator-research-supplier`.

2. **Published item `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, Proof steps 1.1–2.1.** Step 1.1 places a tag group before a second sentence and adds another tag group; step 2.1 inserts a tag group mid-sentence and then has a second terminal group. This does not meet the required single complete paragraph per step with one valid trailing tag group. The density argument itself is present and legible. Routed as `ill-formed`, nonfatal, with assigned consumer `lem-qft-coercive-polynomial-form-domain`.

## Page verdicts

- **`qft-ir01` — pass with nonfatal external notes.** The page summary accurately describes the fixed finite-$N$ results, their selected operator realization, and the absence of a continuum or infinite-volume claim. No assigned item defect was found. The two published-dependency findings above remain for owner disposition.
- **`qft-ir01-examples` — pass with nonfatal external notes.** The page summary accurately limits the example to the one-mode quartic bound and the scope remark. No assigned item or page-prose defect was found. Its prerequisite closure reaches the same published suppliers noted above.

## Blocker

None. This was a read-only assignment; the report and routed findings are the handoff.
