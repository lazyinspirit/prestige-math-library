# Step 3a Reader Report — Batch 122

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `122`

## Verdict

Both assigned pages pass their page-level review. Their draft frontmatter inventories and page prerequisites match the batch manifest; their empty bodies follow the current frontmatter-only page layout. The A-page items and B-page example were reviewed in dependency order. Four local edits below repair wording and short proof gaps. Two nonfatal proof omissions remain in published dependencies and are recorded in the findings file. No blocker remains within the assigned scope.

## Opened inventory

### Assigned pages

- `library/thermodynamics-and-general-relativity-mathematics/tgrx-relative-entropy-balance.md` — draft A page; three A items, no examples.
- `library/thermodynamics-and-general-relativity-mathematics/tgrx-relative-entropy-balance-examples.md` — draft B page; no theorem items and one example.

### Page prerequisite context

Opened the two local required pages and checked frontmatter for the nine imported mathematical pages listed below. This checked page identity, status, and inventory context; unrelated page prose and its items were not audited.

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs05.md`
- `library/quantum-statistical-mechanics/qsm-states-ensembles.md`
- `library/information-theory/quantum-information-measures.md`
- `library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md`
- `library/functional-analysis/bounded-linear-operators-and-quotient-spaces.md`
- `library/real-analysis/the-logarithm-and-general-powers.md`
- `library/real-analysis/series-and-nonnegative-tests.md`
- `library/real-analysis/power-series-and-real-analytic-functions.md`
- `library/real-analysis/the-derivative-and-mean-value-theorems.md`
- `library/quantum-computing/registers-tensor-products-and-partial-trace.md`
- `library/linear-algebra/inner-product-spaces-and-orthogonality.md`

### Assigned items, suppliers first

Assigned items reviewed in dependency order:

1. `items/lem-tgrx-finite-matrix-entropy-variation.md`
2. `items/prop-tgrx-finite-modular-balance.md`
3. `items/prop-tgrx-entropy-first-variation.md`
4. `items/ex-tgrx-qubit-first-variation.md`

Direct mathematical suppliers opened for those claims:

- `lem-qsm-matrix-state-calculus`
- `def-trace-of-an-endomorphism`
- `def-operator-norm`
- `cor-triangle-inequality-for-inner-product-norm`
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`
- `def-natural-logarithm`
- `thm-natural-logarithm-laws`
- `thm-logarithm-derivative-and-integral`
- `thm-geometric-series`
- `thm-termwise-differentiation-of-a-real-power-series`
- `cor-zero-derivative-implies-constant`
- `def-derivative`
- `def-it-finite-dimensional-quantum-relative-entropy`
- `def-it-von-neumann-entropy`
- `def-qc-partial-trace`
- `thm-it-quantum-relative-entropy-partial-trace-data-processing`
- `thm-algebra-of-derivatives`

Additional supplier statements opened to check the data-processing use were `def-qc-density-operator`, `thm-it-quantum-relative-entropy-joint-convexity`, `lem-it-quantum-relative-entropy-isometric-invariance`, `thm-qc-partial-trace-positive-and-trace-preserving`, and `thm-non-negative-operator-characterisations`. Published suppliers remain read-only.

## Source review

The local finite-dimensional proofs carry the deductions. The cited source sections were opened to check their scope and source fidelity:

- [John Watrous, *The Theory of Quantum Information*](https://jhwatrous.github.io/TQI.pdf), §§5.2.1 and 5.2.3: entropy and relative-entropy definitions with support conventions; Corollary 5.33 gives joint convexity and Theorem 5.35 gives monotonicity for positive semidefinite inputs under a channel. The hosted copy identifies itself as a prepublication draft.
- [Mark M. Wilde, *From Classical to Quantum Shannon Theory*](https://arxiv.org/pdf/1106.1445v8), §§11.1 and 11.8: the entropy definition and relative-entropy monotonicity statement. The latter section defers its proof to Chapter 12, so it is corroboration only here. This copy also identifies itself as a prepublication manuscript.
- [Aron C. Wall, “A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices”](https://arxiv.org/pdf/1105.3445), §2.5, equation (38): finite-dimensional relative entropy. Its later Gibbs/GSL discussion is not used to infer a physical claim in this batch.

No experiment, measurement, statistical inference, continuum limit, physical energy, or gravitational entropy claim is made by these mathematical items.

## Edits and evidence

- `lem-tgrx-finite-matrix-entropy-variation`: restricted the function $G$ to the neighborhood where the matrix logarithm is defined; established continuity before applying the zero-derivative result; proved finite-dimensional endomorphisms are bounded before using their operator norms; defined $B_t$ before use and bounded its eigenvalues inside the scalar logarithm series domain. The trace and noncommuting matrix remainder estimates remain explicit. The pre-reader item SHA-256 is `8c14bae4a011b01578525830f2da7e0795bad416954d553305267b1d8c7c1734`; current SHA-256 is `bdbc6c5a4d7a67babee8765fe065cf62032ae632144da3a066a2ee9a16d6062f`.
- `prop-tgrx-finite-modular-balance`: corrected Fact F2, which had attributed the local lowercase $s$ notation to a supplier defining uppercase $S$; removed the unused $D(\sigma\|\sigma)=0$ sentence and an unneeded assertion about nested partial traces. The finite identity and partial-trace inequality are unchanged. Pre-reader SHA-256: `84a800dce2f1635066a5270535832ad4db94b82681b92f8b66386eb754230ac7`; current SHA-256: `eca19e7a59e493bf6a024821e3b4bf8c4290dd35a82f77dd5d34ca8d1cb0a517`.
- `prop-tgrx-entropy-first-variation`: renamed the title to describe the proved finite-dimensional entropy variation; the carrier is a general single-system state and has no bipartite entanglement quantity. The statement and proof are unchanged. Pre-reader SHA-256: `169b378c2c8b1deb7ca7fc8055730ca024649385bc6d373f23c7c242cf1bbc8e`; current SHA-256: `644fd2b7b3286db2fe79896d31ada782cb9c8eacf6e41b1da5131a4edc0d9630`.
- `ex-tgrx-qubit-first-variation`: renamed the title to avoid describing the $p=1/2$ case as biased or as entanglement; specified $H=\mathbb C^2$ and its standard basis in the statement and assumptions, and stated positive definiteness directly. The derivative calculation is unchanged. Pre-reader SHA-256: `ef04dcb9e8584f51468fb5e1ee8971e09c36c3aa4439c358c27eed30c098f30a`; current SHA-256: `5e3b7b995abbebc29ec876bdbba657e710f8dd679096f12fa76e893c47713b1a`.

Updated `research/physics-non-fluid-129-2026-10-21-r2-batch-122.proof-contracts.json` and `research/physics-non-fluid-129-2026-10-21-r2-proof-contracts.json` for the changed proof-step text and supplier-use record; the two contract records remain synchronized. The example contract's finite-check label now says “two-level tangent” to match the corrected title. The proposition title-only change does not alter a derivation. None of the four items had a `verification.judge` record to remove.

## Remaining defects outside write scope

- `lem-qsm-matrix-state-calculus`, Proof step 5.1, final sentence: the converse extremality argument says that two positive eigenvalues “allow a sufficiently small opposite transfer of weight” but does not construct the two distinct density matrices. A reader can close this immediately by choosing $0<\delta<\min(p_i,p_j)$ and perturbing those two eigenvalues by $\pm\delta$. This is a nonfatal omission in a published dependency used by `lem-tgrx-finite-matrix-entropy-variation`.
- `thm-it-quantum-relative-entropy-partial-trace-data-processing`, Proof step 1.2, tensor-scaling identity: the proof handles support inclusion and shifts the tensor eigenvalue logarithms, but does not show the cross-trace factorization for arbitrary noncommuting $C,D$. On $\operatorname{supp}(D)\otimes H_B$, the calculation should state $\log(D\otimes I_B/d)=(\log D)\otimes I_B-(\log d)I$ and derive $\operatorname{tr}((C\otimes I_B/d)((\log D)\otimes I_B))=\operatorname{tr}(C\log D)$ from the finite product-basis trace and $\operatorname{tr}(I_B/d)=1$. This is a nonfatal local omission; Watrous Theorem 5.35 independently corroborates the claimed data-processing conclusion. It is a published dependency used by `prop-tgrx-finite-modular-balance`.

Both defects are recorded as nonfatal published-dependency findings. Other current-run batches were outside this review.

## Page verdicts

- `tgrx-relative-entropy-balance`: pass. The draft mathematics page has the three assigned A items, no examples, and the manifest’s required-page list; its empty body is the current compact layout. The assigned items are reviewed above.
- `tgrx-relative-entropy-balance-examples`: pass. The draft mathematics page has no theorem items and lists the assigned example under `examples`; its required pages match the manifest and its empty body is the current compact layout.

Neither assigned page nor item contains a TikZ/tikzcd diagram.

## Checks and blocker

- Reflow: all four changed items reported unchanged.
- Precheck: all four changed items passed individually.
- Final `proof-layout.mjs` command over all four changed item paths: 4 items, 17 steps, 0 defects.
- Blocker: none.

Coverage limitation: I checked the assigned pages and items, the directly used supplier statements and proof portions, the relevant finite-dimensional data-processing chain, and the exact source sections listed above. I did not audit every transitive prerequisite proof or unrelated prose/diagrams on dependency pages.
