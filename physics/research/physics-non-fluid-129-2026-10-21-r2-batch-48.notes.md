# Batch 48 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2` · batch 48 · role beta.

## Plan and scope

The batch design section at `research/plan-non-relativistic-quantum-mechanics-frontier-expansion-track.md` and the corresponding records in `research/plan-spec.json` agree on the A/B IDs, title, category, library, page orders, and the three A-page prerequisites. No conflict needed resolution. The owner authoring-direction override file was absent when checked. The required page prerequisites remain `qm-math-orbital-and-spin`, `qm-math-fock-and-equilibrium`, and `the-branching-rule-and-the-young-graph`.

The source design fixes the finite spin-half normalization $e_i=I-s_i=2P_i$, loop weight $2$, the exchange Hamiltonian identity, and the planar character convention $e^{i\theta}$ per exchange and $e^{2i\theta}$ per full relative winding. It explicitly preserves P6 as an adopted physical sector postulate and forbids deriving it from representation theory. The authored items keep that separation: no generic-$q$ deformation, faithfulness, material realization, experimental observation, fusion category, or non-Abelian statistics claim is made. The planar computation is scoped to the two-point configuration space in $\mathbb R^2$; ordinary three-dimensional particle statistics remain outside it.

Six A-page helper items were added to give the planned results complete local interfaces and proofs: `def-nrqmx-spin-half-tensor-chain`, `def-nrqmx-planar-two-particle-configuration-space`, `lem-nrqmx-temperley-lieb-star-involution`, `lem-nrqmx-planar-two-particle-config-fundamental-group`, `def-nrqmx-planar-character-line-bundle`, and `thm-nrqmx-planar-character-line-bundle`. They are declared as inventory expansions in the batch manifest. No supplier from another assigned pair was authored or altered.

## Items and in-batch dependency levels

The levels are recomputed from the batch-48 item manifest; external published imports do not raise an in-run level.

| Level | Items |
|---:|---|
| 0 | `def-nrqmx-spin-half-tensor-chain`; `def-nrqmx-planar-two-particle-configuration-space`; `lem-nrqmx-temperley-lieb-star-involution`; `thm-nrqmx-schur-weyl-exchange-blocks` |
| 1 | `lem-nrqmx-planar-two-particle-config-fundamental-group`; `thm-nrqmx-spin-half-temperley-lieb`; `cex-nrqmx-permutation-invariance-not-bosons` |
| 2 | `thm-nrqmx-heisenberg-exchange-tl`; `def-nrqmx-planar-character-line-bundle` |
| 3 | `thm-nrqmx-planar-character-line-bundle`; `ex-nrqmx-three-spin-blocks` |
| 4 | `thm-nrqmx-two-dimensional-exchange-holonomy` |

The run-level dependency map assigns batch 48 level 0 with no in-run batch prerequisites. Accordingly the cross-batch dependency artifact is the JSON array `[]`; all page-level prerequisite IDs named above are outside this run. The batch-wide dependency-level command reports empty inventories in other unworked batches, so the scoped check was performed on the complete 12-item batch-48 manifest and found no level mismatch or cycle.

## Prerequisite and proof audit

The current published statements and relevant proofs were inspected before authoring. Schur–Weyl uses the left place-action convention and the exact length cutoff; the local proof separately establishes the normalized Hilbert–Schmidt inner product and the unitary evaluation map. The spin-half Temperley–Lieb proof evaluates the two-site Pauli swap on all four basis states and computes both three-site contractions. The exchange Hamiltonian proof retains the finite chain length, positive $\hbar$, real couplings and unit interpretation. The topology proof identifies center, relative radius and relative angle modulo $\pi$, and computes the generator with the positive orientation stated in the plan. The associated character quotient is checked as a universal cover and flat unitary line bundle with locally constant transition phases.

The original P6 clause in `post-nrqm-framework-identical-particles-and-spin` was read in full: the boson/fermion sector assignment is an adopted physical input, spin representation is separately assigned, and spin-statistics is not derived. It is referenced only as scope context, not as an item dependency. Mathematical items use mathematical prerequisites only.

No prerequisite carrier was missing or stale. Draft labels and pending independent approval were not treated as gaps. No cycle, unresolved proof dependency, cross-batch change, page-capacity issue, or mathematical uncertainty remains in this pair.

## Source inspection and retrieval evidence

All four selected full-text sources were retrieved and inspected in full, and `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-48.coverage.json --stamp` verified their actual byte counts and hashes. Each source fetched on its initial attempt; there were no retrieval failures, recovery retries, or drops.

| Source | Full-text locator | Supported items and disposition |
|---|---|---|
| [UChicago, *Representation Theory*](https://math.uchicago.edu/~margalit/repthy/RepThry.pdf) | Complete 60-page notes inspected. Theorems 3.8 and 3.10, PDF pp. 6–7; §23.14, Theorem 23.15, and §24.9, PDF pp. 56–60. | `thm-nrqmx-schur-weyl-exchange-blocks`: included for the orthogonal finite-group decomposition and Schur–Weyl context; the local proof supplies the exact unitary evaluation interface. Other chapters: out of scope. |
| [Gruson–Serganova, *A Sentimental Journey through Representation Theory*](https://math.berkeley.edu/~serganov/math252/Bookrep.pdf) | Complete 159-page text inspected. Chapter 6 §2.2, Theorem 2.4, Lemmas 2.7 and 2.9, PDF pp. 112–114. Exercise 2.8 is identified in the text as an omitted step. | `thm-nrqmx-schur-weyl-exchange-blocks`: included as an independent second Schur–Weyl treatment. The abbreviated Hom notation and exercise-dependent proof are not used as a supplier. Other chapters: out of scope. |
| [Ikhlef–Jacobsen–Saleur, *A Temperley–Lieb quantum chain with two- and three-site interactions*](https://arxiv.org/pdf/0901.4685) | Complete 9-page paper inspected. Introduction and §2, PDF pp. 1–4. | `thm-nrqmx-spin-half-temperley-lieb`: included for the $q=1$ singlet normalization and loop weight; local contractions prove every relation. `thm-nrqmx-heisenberg-exchange-tl`: inline support for the TL/Heisenberg connection; the exact Pauli identity is derived locally. Sections 3–5: out of scope. |
| [Nayak et al., *Non-Abelian Anyons and Topological Quantum Computation*](https://arxiv.org/pdf/0707.1889) | Complete 73-page review inspected. §II.A.1, PDF pp. 2–4. | `def-nrqmx-planar-two-particle-configuration-space` and `thm-nrqmx-two-dimensional-exchange-holonomy`: included for the planar exchange/winding convention and scope distinction. `thm-nrqmx-planar-character-line-bundle`: inline convention context only; its quotient construction, local trivializations and monodromy are proved from the stated covering. Material, experimental, fusion and topological-computation sections: out of scope. |

Browser candidates that could not be opened were not cited or treated as evidence. Their URLs and the actual successful retrievals are retained in the batch coverage ledger.

## Final evidence

The batch manifest contains 10 A items and 2 B items; the page files, coverage ledger, proof contracts, cross-batch input, and this note use the same IDs and interfaces. Final checks on the 12 items and two pages returned:

- Scoped item dependency levels: 12 items, no errors or cycles; levels 0–4 match the table above.
- Proof layout: 12 items, 39 numbered steps, 0 defects.
- Precheck: all 9 proof-bearing items pass; all 3 definitions are not applicable; 0 failures.
- Strict proof contracts: 12/12 checked, 0 errors and 0 warnings.
- Scoped dependency check: 0 errors and 0 warnings; 1,109 dependency-closure items and 296 closure pages.
- Render check: all 14 files checked, 0 errors and 0 warnings.
- Source fetch: 4/4 sources fetch-verified and resolved, 0 newly stamped and 0 documented drops.
- Cross-batch dependency input: valid JSON array `[]`; the assigned pages add no in-run cross-batch edges.
- Step-1 records: all 12 items are `ready` with current hashes and their examined direct dependencies. Readiness records current authored prerequisites; they do not imply independent acceptance.

The run-wide `batch-dependency-levels.json` check reports a stale input hash after the authorized batch-48 manifest update. Recomputing its full graph gives the same recorded graph, including batch 48 at level 0 with no prerequisites; only the manifest digest differs. That run-wide derived record was left to its owner. The scoped batch-48 item-level calculation passes and is the level check for this dispatch.
