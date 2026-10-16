# Batch 11 authoring and handoff notes

Run `quantum-computing-algorithms-60-2026-10-15`, batch 11, role beta. This records Step 1 authoring and interface evidence; it is not independent mathematical acceptance or publication approval.

## Scope and plan reconciliation

The QC11 row of `research/plan-quantum-computing-track.md` sets the scope: continuous-gate universality, two-level and Euler decompositions, and exact multi-qubit synthesis. The assigned page IDs, titles, order (2186/2187), category, companions, and ten A-page `requires` entries agree with the current `research/plan-spec.json`. The plan-spec item arrays are empty, so item-level inventory is supplied by the live batch manifest. That manifest contains 19 A-page items and one B-page example, below the 100-item cap.

The six local proof suppliers now included in the live A-page inventory are `lem-qc-two-unitary-block-demultiplexing`, `lem-qc-unitary-group-cayley-charts`, `thm-qc-two-qubit-cartan-decomposition`, `lem-qc-multiplexed-axis-rotation-gray-code`, `thm-qc-one-control-unitary-two-cnot`, and `thm-qc-two-qubit-unitary-three-cnot-synthesis`. They provide the block, group-chart, Cartan, multiplexor, controlled-gate, and exact two-qubit arguments needed by the assigned consumers. The A/B page carriers now repeat the manifest's exact `requires` lists. No shared plan, published page, or engine state was changed.

## Inventory and item dependency levels

Item levels were recomputed from the current full run graph. The dispatch assigns batch dependency level 7, with prerequisite batches 2, 3, 4, 7, 8, 9, and 10; the scheduling input recorded for this dispatch is `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. The assigned manifest, item frontmatter, and recomputed levels agree:

| Item level | Assigned items |
|---:|---|
| 0 | `def-qc-global-phase-equivalence`; `lem-qc-two-unitary-block-demultiplexing`; `lem-qc-unitary-group-cayley-charts`; `thm-qc-cosine-sine-block-decomposition` |
| 2 | `def-qc-two-level-unitary` |
| 3 | `alg-qc-two-level-unitary-elimination` |
| 4 | `thm-qc-two-level-unitary-elimination-correct` |
| 6 | `thm-qc-one-qubit-euler-decomposition` |
| 7 | `thm-qc-two-qubit-cartan-decomposition`; `lem-qc-global-phase-under-control`; B-page `ex-qc-two-level-unitary-synthesis` |
| 9 | `lem-qc-generic-cnot-parameter-count`; `lem-qc-multiplexed-axis-rotation-gray-code`; `thm-qc-one-control-unitary-two-cnot`; `thm-qc-two-qubit-unitary-three-cnot-synthesis` |
| 10 | `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`; `thm-qc-generic-unitary-cnot-lower-bound`; `thm-qc-multicontrolled-ancilla-resource-tradeoff` |
| 11 | `alg-qc-two-level-gate-to-elementary-gates` |
| 12 | `thm-qc-two-level-gate-synthesis-correct` |

The run-wide level command still exits nonzero on 46 diagnostics (38 empty inventories and 8 stale level labels in other batches). It reports zero QC11-specific diagnostics. Those other manifests were left untouched.

## Supplier and mathematical findings

All ten page prerequisites are present. The five in-run prerequisite pages are QC02 registers, QC07 one-qubit gates, QC08 controlled gates, QC09 circuit syntax/semantics, and QC10 reversible computation/ancillas; their current draft carriers and relevant interfaces were inspected. QC09's live semantics carrier and manifest agree at level 6, and its resource carrier and manifest agree at level 8. The other five required pages are the published Hilbert/Riesz, inner-product, root-systems, Sard/transversality, and spectral/SVD pages. The cross-batch file records the exact page and item interfaces; it is authoring evidence, not supplier acceptance.

The QC7 rotation convention is explicit and consistent throughout the Euler theorem, controlled-gate proofs, and B example: $R_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2})$ and $R_y(t)=\begin{pmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{pmatrix}$. The B example uses the corresponding exact matrix for $R_y(\pi/2)$.

The two-qubit Cartan proof normalizes the determinant phase, constructs a determinant-one symmetric-unitary square root in the magic basis, proves the local $SU(2)\otimes SU(2)\to SO(4)$ image using its six generators and plane-rotation elimination, and handles repeated eigenvalues without a nondegeneracy assumption. The CSD proof includes singular values 0 and 1. The generic CNOT parameter argument distinguishes the AC$_\omega$ volume branch from the optional full-AC Haar identification. The Gray-code proof supplies the character orthogonality identity and restores the parity network exactly.

The corrected three-CNOT identity uses the QC7 signs and exact scalar phase. Its proof gives the two parity blocks and the CNOT permutation matrices; the contract's finite smoke check agrees at three parameter choices with maximum entrywise residuals $3.51\times10^{-16}$, $2.78\times10^{-16}$, and $1.11\times10^{-16}$. A stale, unrelated arXiv identifier `quant-ph/0306071` was removed and the correct NIST full-text source was added.

Two proof obligations remain escalated, without weakening the target statements:

* `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`: the recurrence and controlled-$Z$ optimization through the $13/24$ bound are proved. The final $23/48$ bound additionally needs `lem-qc-terminal-diagonal-migration`, an exact proof of the two-qubit terminal diagonal-extraction/migration identity used to save $4^{n-2}-1$ CNOTs. Appendix A.2 / Theorem 14 supplies a diagram and instruction but no proof of this identity.
* `thm-qc-multicontrolled-ancilla-resource-tradeoff`: the square-root identity, branch cases, clean-bit return, and $\Omega(m)$ lower bound are proved. The $O(m^2)$ no-workspace and $O(m)$ one-clean-bit upper bounds need `lem-qc-borrowed-bit-multicontrolled-x-linear`, an exact $O(r)$ $r$-controlled-$X$ ladder whose borrowed wire returns unchanged for every input. The cited Barenco diagrams do not give the complete invariant. `alg-qc-two-level-gate-to-elementary-gates` proves path conjugation but its cost expansion remains escalated on this missing helper; `thm-qc-two-level-gate-synthesis-correct` inherits that escalation.

The existing CNOT definition `def-qc-cnot-and-control-target-order` gives the required control-first basis action, but its Verification step 2.1 calls the basis permutation unitary without citing computational-basis orthonormality. QC11 consumers cite `thm-qc-computational-basis-orthonormal` and establish unitarity locally from the permutation. The supplier's own verification issue remains open for owner repair; no other pair was edited.

## Sources and source-resolution history

The A-page source set has two independent treatments, including full lecture notes; the B page reuses Barenco. Full texts and relevant locators are recorded in `research/quantum-computing-algorithms-60-2026-10-15-batch-11.coverage.json`, including item-level dispositions:

* Barenco et al., [Elementary gates for quantum computation](https://arxiv.org/pdf/quant-ph/9503016), complete 31-page paper, §§4.1, 5–7, and 8 (Euler/controlled gates, multicontrol, and two-level synthesis).
* de Wolf, [Quantum Computing: Lecture Notes](https://arxiv.org/pdf/1907.09415), complete 239-page notes, §§1.4 and 2.2 and the global-phase discussion.
* Shende, Bullock, and Markov, [Synthesis of Quantum Logic Circuits](https://arxiv.org/pdf/quant-ph/0406176), complete 19-page paper, Theorems 8 and 10–13, §5.3, and Appendices A.1–A.2.
* Shende, Markov, and Bullock, [Minimal Universal Two-Qubit CNOT-Based Circuits](https://arxiv.org/pdf/quant-ph/0308033), complete paper, §§II–III, Lemma II.2, and Proposition III.1.
* Vatan and Williams, [Optimal quantum circuits for general two-qubit gates](https://arxiv.org/pdf/quant-ph/0308006), complete paper, canonical decomposition and Fig. 6.
* Shende, Markov, and Bullock, [Smaller Two-Qubit Circuits for Quantum Communication and Computation](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50704), complete NIST full text for the exact three-CNOT circuit treatment.

`source-fetch-check --stamp` previously verified all 7 source entries; 3 were newly stamped and none dropped. The final no-stamp check reports 7/7 fetch-verified and 7/7 resolved. No retrieval failed, so no `source_resolution` recovery entry was needed. Existing source history and stamps were preserved.

## Cross-batch evidence and readiness

`research/quantum-computing-algorithms-60-2026-10-15-batch-11.cross-batch-dependencies.json` has 127 rows. Reconciliation against the current manifests and assigned carriers found all 69 direct in-run item/page edges, with no missing or stale edge. Its three open rows are: the separate CNOT supplier-verification audit above; `lem-qc-terminal-diagonal-migration`; and `lem-qc-borrowed-bit-multicontrolled-x-linear`. The latter two are proposed local helper interfaces, not supplied proofs.

The individual Step 1 records are present: 16 `ready` records have current hashes and 4 `escalated` records carry their exact blockers; all are `owner: false`. The escalations are the QSD theorem, multicontrol theorem, and the two-level elementary-gate algorithm and its correctness consumer. Their examined declared dependencies are in the records; no `--owner` flag was used and no existing escalation was overwritten.

Scoped final checks passed:

* `depcheck` focused on the 20 assigned IDs: zero errors and warnings; prerequisite cycle checks covered 1,647 items and 354 pages.
* `precheck`: 20 items checked, zero failures.
* `proof-layout`: 20 items, 78 numbered steps, zero defects.
* `proof-contract --strict`: 20/20 items, zero errors and warnings.
* `rendercheck`: all 20 items and both pages, zero frontmatter or math-rendering errors.
* `content-policy`: 20 items, zero errors and warnings.
* `source-fetch-check`: 7/7 sources fetch-verified and resolved, zero drops.
* Manifest/page and item-level consistency: 20 items across two pages, zero issues.

Two run-wide checks cannot close from this pair. `item-dependency-levels check` reports the 46 unrelated empty-inventory/label diagnostics above, with no QC11 mismatch. `step1-decisions check` exits while processing the unrelated `def-qa-finite-abelian-character-dual` record: its alias scan reaches malformed YAML at `items/alg-qa-19-complete-graph-spatial-search.md:31`, where the unquoted source title `Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1` triggers “Nested mappings are not allowed in compact mappings” (frontmatter parser line 30, column 14). The 20 assigned records were evaluated individually: the 16 ready records have current hashes and the 4 escalations remain open. No unrelated file was repaired.
