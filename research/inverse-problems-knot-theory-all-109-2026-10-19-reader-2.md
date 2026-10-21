# Step 3a reader report — batch 2

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Verdict: no confirmed defects; no edits; no blocker.

## Opened inventory

The assigned pages were opened as YAML-only files:

- `library/inverse-problems/linear-operators-pseudoinverses-and-picard-criteria.md`
- `library/inverse-problems/linear-operators-pseudoinverses-and-picard-criteria-examples.md`

All six assigned items were read in dependency order:

1. `def-ip-unbounded-hilbert-moore-penrose-inverse`
2. `def-ip-compact-linear-inverse-model`
3. `thm-ip-closed-range-pseudoinverse-stability`
4. `thm-ip-picard-range-criterion-for-compact-operators`
5. `cex-ip-picard-orthogonality-clause-essential`
6. `ex-ip-dense-nonclosed-diagonal-range`

The 27 distinct direct item dependencies opened were: `cor-archimedean-reciprocal`, `cor-finite-dimensional-subspaces-are-closed`, `def-bounded-linear-operator`, `def-compact-linear-operator`, `def-countable-choice`, `def-hilbert-space`, `def-hilbert-space-adjoint`, `def-ip-forward-map-and-solution-classes`, `def-natural-numbers`, `def-orthogonality-and-orthogonal-complement`, `def-real-and-complex-inner-product-space`, `def-square-summable-family-on-an-arbitrary-index-set`, `lem-finite-bessel-inequality`, `lem-finite-rank-operators-are-compact`, `lem-kernel-range-orthogonality-for-hilbert-adjoints`, `lem-pythagorean-theorem-and-finite-orthogonal-sums`, `lem-square-summable-sequences-form-a-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-hilbert-space-fourier-expansion`, `thm-metric-closure-characterisation`, `thm-norm-limit-of-compact-operators-is-compact`, `thm-p-series-real-exponents`, `thm-recursion`, `thm-reals-cauchy-complete`, `thm-singular-value-decomposition-for-compact-operators`, `thm-well-ordering-principle`, and `thm-orthogonal-decomposition-by-a-closed-subspace`. The absolute-value/singular-value definition and compact self-adjoint spectral theorem were also opened to verify the null-sequence property used by the closed-range proof.

The run manifest, reader brief, current batch-2 proof-contract records, cross-batch dependency record, source-coverage record, and current autopilot status were consulted as navigation evidence. The Step 1 interface edge from `def-ip-compact-linear-inverse-model` to the batch-1 draft `def-ip-forward-map-and-solution-classes` was checked against both current item files; no mathematical defect was found. The authors' contract conclusions were not treated as verdicts.

## Review results

### Pages

- `linear-operators-pseudoinverses-and-picard-criteria`: pass. The four-item inventory, companion, prerequisite-page declarations, draft status, and `page_layout: compact-v1` match the assigned manifest. Its Markdown body is empty, as required.
- `linear-operators-pseudoinverses-and-picard-criteria-examples`: pass. The two-example inventory, companion, prerequisite-page declarations, draft status, and `page_layout: compact-v1` match the assigned manifest. Its Markdown body is empty, as required.

### Items

- `def-ip-unbounded-hilbert-moore-penrose-inverse`: pass. Boundedness makes the kernel closed; the orthogonal decomposition gives the restriction's surjectivity, and its kernel/complement intersection gives injectivity. Pythagoras proves the minimum-norm claim. The domain is a well-defined direct sum even when the range is not closed. The Definition has no statement hyperlinks; its references follow in `Definition references`.
- `def-ip-compact-linear-inverse-model`: pass. The model states the compact forward map, Hilbert parameter/data spaces, exact-data form, and absence of injectivity, surjectivity, or closed-range assumptions. Its complete Definition is uninterrupted; references follow in `Definition references`.
- `thm-ip-closed-range-pseudoinverse-stability`: pass. The finite-singular-system estimate handles rank zero and rank one; in the infinite case the recursively selected singular directions yield a convergent range sequence whose limit cannot lie in the range, and they make the pseudoinverse unbounded. The compact SVD and its singular-value definition supply `s_j → 0`. The theorem references are outside the complete Statement.
- `thm-ip-picard-range-criterion-for-compact-operators`: pass. Necessity uses the adjoint identity and finite Bessel; sufficiency constructs the minimum-norm preimage from the square-summable series and Fourier expansion; orthogonal decomposition of the datum into `closure R(K)` and `R(K)^perp` proves the pseudoinverse-domain equality and the distinct exact-range condition. The single `tikzcd` diagram is commutative: both paths send `λ` to `λ s_j u_j`. No proof step relies on it. The Statement is uninterrupted, with its references immediately afterward.
- `cex-ip-picard-orthogonality-clause-essential`: pass. The explicit rank-one map has the stated adjoint, singular pair, left-null datum, zero Picard sum, and datum outside the range. The `Statement refuted` description is complete and uninterrupted; its references follow in `Statement references`.
- `ex-ip-dense-nonclosed-diagonal-range`: pass. Finite-rank truncations converge in operator norm, the range contains all finitely supported sequences and is dense, and the specified datum is in `ell^2` but not in the range. The singular system and every Picard summand are computed correctly. The complete Example has no inline hyperlinks; references follow in `Example references`.

The proof-contract step/citation maps were compared with the current item proofs, including the zero, finite-rank, infinite-rank, empty-series, and one-direction boundary cases. No contract mismatch or omitted hypothesis was found.

## External-source checks

- Christian Clason, *Regularization of Inverse Problems*, arXiv:2001.00617v2: Theorem 3.3 in §3.1 supports the restricted inverse and domain; Theorem 3.7 and Corollary 3.8 support the closed-range/continuity result; Theorems 3.9–3.10 in §3.2 and the complete proof of Theorem 3.10 support the singular-system and Picard-series arguments. [Full PDF](https://arxiv.org/pdf/2001.00617).
- Otmar Scherzer and Leonidas Mindrinos, *Inverse Problems: Lecture Notes*, §6.1, Theorems 6.6–6.7, printed pp. 86–87: Theorem 6.6 supplies singular-system context; Theorem 6.7 states the orthogonality and Picard conditions. The cited pages do not provide a proof of Theorem 6.7, so it was used only for statement-level confirmation. [Full PDF](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf).
- Vesa Kaarnioja, *Inverse Problems: Fourth Lecture*, “Solvability of `y=Ax`,” PDF pp. 10–12: the theorem and proof give an independent real, separable-Hilbert check of the orthogonality condition and projected equation. The slides write the projection as having range `Ran(A)`; the local proof uses the projection onto the closed range closure explicitly and does not infer that the algebraic range is closed. This narrower source setting was not used to restrict the local general-Hilbert statements. [PDF](https://vkaarnioja.github.io/ip23/week4.pdf).

These are the relevant source sections, not a claim that every page of the PDFs was read. The local proofs supply the broader hypotheses and arguments used by the items.

## Edits, validation, and blockers

No item or page was edited. No uneditable defect remains. Since no item path changed, reflow, precheck, and `proof-layout.mjs` were not run. No blocker was found.
