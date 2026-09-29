# Step 5a reader report — batch 20

- **Run:** `frontier-36-complete`
- **Role:** reader (`reader-20`)
- **Scope:** the two pages and 38 items listed by `research/frontier-36-complete-batch-20.pages.json`, plus the direct dependency items needed to check their claims.

## Opened inventory

### Assigned pages

- `library/computability-theory/alphabet-reduction-and-the-pcp-theorem.md` (A page)
- `library/computability-theory/alphabet-reduction-and-the-pcp-theorem-examples.md` (B page)

### Assigned items

**A-page items (34):**

`def-pcp-verifier-randomness-query-and-proof-length`, `def-pcp-class-with-completeness-and-soundness`, `lem-two-query-pcps-and-constraint-graphs-are-equivalent`, `def-walsh-hadamard-encoding-and-relative-distance`, `lem-walsh-hadamard-code-has-distance-one-half`, `def-robust-codeword-blocks-for-constraint-graphs`, `lem-robust-edge-circuit-has-distance-gap`, `lem-random-subsum-detects-a-nonzero-binary-vector`, `def-quadratic-equation-instance-and-tensor-code-oracles`, `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix`, `lem-blr-testing-supplies-nearby-linear-decoders`, `lem-tensor-consistency-test-soundness`, `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error`, `thm-constant-query-exponential-pcp-for-quadratic-equations`, `def-pcp-of-proximity-and-concatenation-test`, `lem-concatenation-test-enforces-a-shared-prefix`, `thm-two-piece-pcp-of-proximity`, `def-composition-with-an-assignment-tester`, `lem-composition-preserves-perfect-completeness`, `lem-composition-transfers-rejection-ratio`, `lem-bounded-arity-boolean-csp-to-binary-constraint-graph`, `thm-alphabet-reduction-step`, `lem-alphabet-reduction-controls-size-and-degree`, `def-dinur-pcp-transformation`, `lem-one-transformation-preserves-satisfiability`, `lem-one-transformation-amplifies-gap`, `lem-one-transformation-has-constant-factor-growth`, `lem-logarithmically-many-iterations-reach-constant-gap`, `lem-three-sat-to-binary-constraint-graph`, `thm-gap-csp-is-np-hard`, `thm-pcp-theorem-np-equals-pcp-log-n-o-one`, `thm-pcp-error-amplification`, `fs-gap-amplification-alone-controls-alphabet`, and `fs-pcp-proofs-are-randomized-strings`.

**B-page items (4):**

`ex-composition-preserves-perfect-completeness`, `ex-pcp-error-amplification`, `cex-gap-amplification-alone-controls-alphabet`, and `ex-walsh-hadamard-encoding-and-testing`.

### Direct dependency items opened

`def-assignment-tester-and-rejection-ratio`, `def-boolean-circuit-size-depth-fanin-and-basis`, `def-boolean-formula-cnf-and-sat`, `def-circuit-sat`, `def-constraint-graph-and-labeling-value`, `def-constraint-graph-powering`, `def-gap-csp`, `def-hadamard-linearity-constraint-system`, `def-independent-families-of-event-classes`, `def-linearity-test`, `def-np-by-verifiers`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-product-of-finite-probability-spaces`, `def-quadratic-consistency-test`, `def-self-correction-of-a-noisy-linear-function`, `def-uniform-finite-probability-space`, `lem-boolean-cube-fourier-inversion-and-parseval`, `thm-gap-amplification-step`, `thm-product-probability-has-independent-coordinate-events`, and `thm-three-sat-is-np-complete`.

## Review and repairs

The current statements, definitions, constructions, examples, computations, and proofs were checked against their hypotheses and cited dependencies. Two proof gaps in assigned in-flight items were repairable within scope.

1. **`items/thm-alphabet-reduction-step.md`, facts and proof steps 1.3 and 2.2.** The size argument bounded each edge gadget's private variables by `q_max` without first proving that the local constraint count `q_e` bounds its local variable count. Added fact F10, using the two-piece tester's construction: for `N_e >= 2 ell >= 4`, the local variable count is `2 ell + 2^(ell+1) + 2^N_e + 2^(N_e^2) <= 4 * 2^(N_e^2)`, while the nine padded test families give `q_e = 9 D_e 2^K` with `D_e >= 1` and `K >= 2 N_e^2`. Thus the number of local variables is at most `q_e`. Step 1.3 now invokes that bound before using `q_max`; step 2.2 cites it for the vertex count. The gadget counts and padding exponent follow from the explicit construction in `thm-two-piece-pcp-of-proximity`, especially its facts and steps 1.2, 2.3, and 3.2.

2. **`items/lem-alphabet-reduction-controls-size-and-degree.md`, fact F7 and proof step 2.2.** This lemma also used the private-variable bound without citing its derivation. Added F7, referring to the repaired local count in step 1.3 of `thm-alphabet-reduction-step`, and made step 2.2 use F7. This supplies the missing bound for the lemma's vertex-count estimate.

3. **`items/thm-pcp-theorem-np-equals-pcp-log-n-o-one.md`, proof steps 1.1, 2.1, 3.1, and 3.3.** The relation used for the PCP-to-NP inclusion previously ranged over proof strings of length at most `p`, while the verifier's proof interface had one fixed addressable length; its behavior on shorter strings was therefore undefined. The reverse inclusion also treated binary proof blocks as partial graph labelings. The repair chooses an integer polynomial `p` dominating the addressable length, extends the verifier to exactly `p(n)` bits by ignoring the added suffix, and defines the NP relation only on strings of exactly that length. For the converse, yes proofs are padded and no-proof candidates are restricted to their original addressable prefix. In the graph-to-PCP direction every proof has the exact block length, and a fixed surjection from seven-bit blocks onto the 66-symbol alphabet decodes every block of any binary proof to a full graph labeling. Consequently the soundness argument applies to every fixed proof.

The batch proof-contract artifact `research/frontier-36-complete-batch-20.proof-contracts.json` was updated for these repairs: the alphabet-reduction size and vertex derivations now include the local gadget count bound; the PCP theorem contracts now record the exact proof-length interface, the padded inclusion argument, and full-labeling decode in soundness and boundary evidence. The three changed items had no `verification.judge` record to remove.

### Validation after repairs

| Item | Reflow | Precheck |
|---|---|---|
| `thm-alphabet-reduction-step` | `unchanged` | PASS (constructive), 1 checked, 0 failing |
| `lem-alphabet-reduction-controls-size-and-degree` | `unchanged` | PASS (constructive), 1 checked, 0 failing |
| `thm-pcp-theorem-np-equals-pcp-log-n-o-one` | `unchanged` | PASS (direct), 1 checked, 0 failing |

## Source checks

The PCP and alphabet-reduction arguments were also compared with authoritative source statements to check terminology and the composition pattern. Dinur, *The PCP Theorem by Gap Amplification*, author-hosted PDF: <https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf>, §5, Definition 5.1 and the proof of Lemma 1.8 (printed pp. 17–18, local distance and tester rejection ratio); Theorem 1.5 (printed pp. 10–11, fixed amplification composition). Arora and Barak, *Computational Complexity: A Modern Approach*, official book PDF: <https://theory.cs.princeton.edu/complexity/book.pdf>, Theorem 18.21 and §18.4.2 (printed pp. 365–367, QUADEQ and self-correction); Corollaries 18.25–18.26 and §18.4.3 (pp. 367–369, PCP proximity and concatenation); Corollary 18.35 and Lemma 18.30 in §18.5.2 (pp. 377–379, qCSP and alphabet reduction). The checked draft claims are supported by their explicit local constructions and reductions; these sources were used as corroboration, not as substitutes for those proof steps.

## Findings and page verdicts

- **Uneditable defects:** None confirmed. No defect was confirmed in the B page or the opened published dependencies. The two confirmed defects were repaired in assigned in-flight items as described above.
- **`alphabet-reduction-and-the-pcp-theorem.md` (A page):** Acceptable after the supporting item repairs. Its overview and summaries agree with the repaired constructions and quantitative claims.
- **`alphabet-reduction-and-the-pcp-theorem-examples.md` (B page):** Acceptable. The examples and counterexample preserve the stated hypotheses, values, and conclusions.
- **Blocker:** None.

## Coverage limitation

I opened both assigned pages, all 38 assigned items, the direct dependency items listed above, and the source passages cited for the PCP construction. I did not independently audit every transitive dependency of those dependencies or every reference unrelated to the claims under review.
