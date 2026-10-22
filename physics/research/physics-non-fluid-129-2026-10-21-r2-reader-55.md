# Step 3a reader report — batch 55

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `55`

## Inspected pages and items

Assigned pages opened:

- `nrqmx-floquet-control` — `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-floquet-control.md` (draft A page).
- `nrqmx-floquet-control-examples` — `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-floquet-control-examples.md` (draft B page).

The A page requires `qm-math-controlled-dynamics`, `nrqmx-form-spectral-methods`, and `unbounded-self-adjoint-operators-and-stones-theorem`; I opened their page carriers at `library/non-relativistic-quantum-mechanics-mathematics/qm-math-controlled-dynamics.md`, `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-form-spectral-methods.md`, and the read-only mathematics page `../library/functional-analysis/unbounded-self-adjoint-operators-and-stones-theorem.md`. The B page requires the A page. Both assigned pages are frontmatter-only as required by the selected statement-first layout.

I also read the batch-55 notes and cross-batch dependency file and checked the relevant proof-contract entries. They were treated as review context, not as verdicts.

All nine assigned items were opened and reviewed in dependency order:

- Level 0: `def-nrqmx-finite-hermitian-matrix-exponential`.
- Level 1: `lem-nrqmx-finite-hermitian-matrix-exponential`.
- Level 2: `thm-nrqmx-finite-floquet-normal-form`, `thm-nrqmx-finite-level-duhamel-error`.
- Level 3: `thm-nrqmx-floquet-sambe-domain`, `ex-nrqmx-driven-two-level-floquet`, `cex-nrqmx-quasienergy-no-order`.
- Level 4: `alg-nrqmx-floquet-fourier-galerkin`.
- Level 5: `thm-nrqmx-floquet-galerkin-correctness`.

I opened the direct prerequisite carriers needed for those claims: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-axiom-of-choice`, `def-bounded-linear-operator`, `def-complex-exponential`, `def-countable-choice`, `def-nrqm-intervals-hilbert-sobolev-spaces`, `def-operator-norm`, `def-real-and-complex-inner-product-space`, `def-relative-boundedness-with-respect-to-an-operator`, `def-self-adjoint-and-normal-endomorphism`, and `def-symmetric-self-adjoint-and-essentially-self-adjoint`; `lem-bochner-integral-norm-inequality`, `lem-classical-derivatives-are-weak-derivatives`, `lem-complex-exponential-series-converges-everywhere`, `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`, and `lem-nrqmx-finite-hermitian-matrix-exponential`; and `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-kato-rellich`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness`, `thm-nrqm-intervals-twisted-periodic-momentum-domain`, `thm-nrqmx-finite-floquet-normal-form`, `thm-nrqmx-floquet-sambe-domain`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-parametrize-the-unit-circle`, and `thm-sine-cosine-zero-sets-and-fundamental-period`.

For the matrix-series well-definedness repair, I also opened the pinned mathematics imports `thm-complex-plane-is-complete` and `thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field`. Their local import bytes match the root mathematics originals and the hashes in `research/math-imports.json` (`9511432808fa8a685379f425833ed711e1040c290cd505fb068814f5542f1001` and `dea2173073fdda5bd42265e6ae3e2152076f2cfd8d8702d03f57432955daefb5`). For the Sobolev trace check, I additionally opened `lem-nrqm-intervals-integration-by-parts` and `lem-nrqm-intervals-weak-derivative-ac-representative`.

I also opened `def-countable` as transitive context for the Countable Choice definition.

The Definition change to the finite matrix exponential has 11 direct/indirect consumers in the current item graph. I checked every assigned consumer in batch 55 and inspected the cited use in the three other current-run consumers `thm-qsmx-exchange-lie-weight-blocks`, `thm-qsmx-klr-character-specialization`, and `cex-qsmx-categorification-not-spectrum` (batch 108). Those external consumers use the supplier for convergence of a finite matrix power series; the clarified coordinate norm preserves that use. No outside carrier was edited.

## Mathematical and citation review

- `def-nrqmx-finite-hermitian-matrix-exponential` — confirmed that the old argument used norm domination without establishing completeness of the operator-norm matrix space. The Definition now specifies the coordinate inner product, induced norm, matrix action, and adjoint. It verifies the operator norm is a norm, uses completeness of `\mathbb C` and the finite-dimensional norm-equivalence theorem to establish completeness of `M_d(\mathbb C)`, and then proves the matrix partial sums are Cauchy by the scalar exponential tail bound. The two exact mathematical suppliers are added to the item’s `deps` and `dependency_roles`.
- `lem-nrqmx-finite-hermitian-matrix-exponential` — the finite spectral decomposition, reality of eigenvalues, scalar exponential identities, group law, and finite-dimensional operator-norm differentiation support the statement; no remaining proof gap found.
- `thm-nrqmx-finite-floquet-normal-form` — the propagator patching, period-unitary diagonalization, real phase lifts, branch class modulo `\hbar\omega`, and micromotion periodicity follow from the stated hypotheses and suppliers. Corrected the Appendix A locator to the source’s actual equations (A.1)–(A.6).
- `thm-nrqmx-finite-level-duhamel-error` — the oriented Duhamel integral identity and the two norm bounds are correctly proved for bounded finite matrices, including negative times. Its scope explicitly excludes unbounded coupling; no defect found.
- `thm-nrqmx-floquet-sambe-domain` — the Kato–Rellich argument and Fourier eigenbasis calculation are sound. Corrected Facts [F1]/[F5] so endpoint traces are attributed to the periodic-domain supplier and its stated interval trace convention, rather than to the Sobolev-space Definition, which defines `H^1` by weak derivatives. Corrected [F3]: the normal-form supplier gives the factorization and propagator equation, while the identity `H(t)P(t)-i\hbar P'(t)=P(t)H_F` is derived in this item’s step 1.3. Corrected the Appendix B locator to (B.1)–(B.3).
- `alg-nrqmx-floquet-fourier-galerkin` — the finite procedure specifies its input/output and one-call solver interface. It now identifies the coordinate inner product and norm from the finite-matrix Definition for all coordinate dimensions used by the procedure, including `\mathbb C^q`. Its Fourier-sector diagram was checked: for `b=1`, each arrow from input sector `m` to output `n` is labeled `H_{n-m}`, and diagonal blocks include `n\hbar\omega I_d`. The diagram is correct and is not used as proof. Corrected its Appendix B locator to (B.1)–(B.3).
- `thm-nrqmx-floquet-galerkin-correctness` — the block coefficient, derivative sign, Hermitian symmetry, exact compression, finite assignment count, and conditional termination follow from the stated routine interface. It asserts no spectral convergence or residual accuracy beyond that interface. Corrected its Section 2.3/Appendix B locators to the actual block formula and equations (B.1)–(B.3).
- `ex-nrqmx-driven-two-level-floquet` — differentiating the integrated phase yields the stated propagator, and the factorization gives the claimed periodic micromotion. The calculation is local. Updated source locators to distinguish the cited Floquet formalism from the locally supplied longitudinal calculation.
- `cex-nrqmx-quasienergy-no-order` — the zero Hamiltonian on `\mathbb C` gives Hermitian logarithm branches `n\hbar\omega` of the same one-period unitary, so the stated branch-independent least representative claim is false. The title matches the counterexample’s no-invariant-branch conclusion; no repair was needed.

The bibliography was checked against the cited PDFs. Viebahn’s *Introduction to Floquet theory* (2020), https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf, supplies the Floquet factorization in Section II, equations (10)–(20), the two-level examples in Sections II–III, and the extended-space Fourier matrix in Section IV, equations (55)–(60). Eckardt and Anisimovas (2015), https://arxiv.org/pdf/1502.06477, supplies the Floquet states and quasienergy operator in Sections 2.1–2.3, including equations (17)–(22), Appendix A equations (A.1)–(A.6), and Appendix B equations (B.1)–(B.3). The local proofs provide the exact operator domains, matrix convergence, bounded Duhamel estimate, and compression/termination arguments rather than attributing those proofs to the physics references.

The batch proof-contract file was updated to quote the current matrix-exponential and Fourier–Galerkin Definitions, bind Sambe Fact [F5] to the correct periodic-domain supplier, and bind the unchanged Galerkin boundary worksheet to the current carrier hash after its locator-only citation repair. No changed carrier had a stale `verification.judge` record to remove.

## Required checks

For each changed item, `reflow.mts` reported unchanged; `precheck.mts` passed for the four proof-bearing changed items and reported zero proof steps for the two definition-like items. The final `proof-layout.mjs` command covered all six changed items and reported `6 items, 14 steps, 0 defects`.

## Page verdicts

- `nrqmx-floquet-control` (A): **Pass**, subject to the manifest reconciliation blocker below. All seven assigned items and its three page prerequisites were reviewed.
- `nrqmx-floquet-control-examples` (B): **Pass**. Both examples are mathematical, their conditional arguments are sound, and the page correctly requires the A page.

## Unedited findings and blocker

There are no unedited mathematical or citation findings in the assigned pages/items or their relevant published suppliers.

The current batch-55 manifest remains unchanged by this reader. It still carries the pre-repair `Definition`/dependency data for `def-nrqmx-finite-hermitian-matrix-exponential` and `alg-nrqmx-floquet-fourier-galerkin`, and pre-correction source locators for the normal-form, Sambe, Galerkin, algorithm, and two-level example items. The repaired carriers now add the two published completeness prerequisites to the finite-matrix Definition and add that Definition as a direct algorithm prerequisite. The owner must reconcile those batch-manifest mirrors before the next manifest-bound gate. This reader’s write scope did not include the manifest.

Coverage is limited to batch 55, its direct item prerequisites, the transitive interval-trace suppliers needed by the Sambe proof, and focused interface checks of the three batch-108 consumers. This report does not claim a whole-library audit or a recursive audit of every published supplier’s full dependency tree.
