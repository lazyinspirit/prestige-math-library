# Reader report — advanced-qft-supersymmetry-build-2026-10-23, batch 1

## Scope and opened inventory

Reviewed batch `1` independently as `reader-1`. Opened both assigned pages and all 16 assigned item carriers, in dependency order. The pages are:

- `aqft-susy-math-foundations` (A), `library/quantum-field-theory-mathematics/aqft-susy-math-foundations.md`.
- `aqft-susy-math-foundations-examples` (B), `library/quantum-field-theory-mathematics/aqft-susy-math-foundations-examples.md`.

Assigned items, in dependency order:

- `def-qftx-super-poincare-algebra-4d`
- `lem-qftx-super-poincare-graded-jacobi`
- `def-qftx-unitary-super-poincare-representation`
- `thm-qftx-supermultiplet-mass-degeneracy`
- `thm-qftx-n-extended-central-charge-bounds`
- `def-qftx-superspace-grassmann-algebra`
- `lem-qftx-grassmann-coefficient-calculus`
- `def-qftx-n1-chiral-superfield`
- `lem-qftx-n1-chiral-superspace-identities`
- `lem-qftx-supercharge-positive-energy-pairing`
- `def-qftx-graded-trace-class-index-data`
- `thm-qftx-witten-index-beta-independence`
- `ex-qftx-n1-supercharge-oscillator`
- `ex-qftx-n2-shortened-rest-fiber`
- `ex-qftx-berezin-coefficient-extraction`
- `ex-qftx-finite-witten-index-cancellation`

Opened the 23 direct external math dependencies recorded in the batch manifest: `cor-exponential-is-a-bijection-onto-positive-reals`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-complex-numbers-and-arithmetic`, `def-countable-choice`, `def-densely-defined-closed-and-closable-operator`, `def-hilbert-space`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `def-projection-valued-measure`, `def-real-and-complex-inner-product-space`, `def-real-exponential-function-and-e`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `def-unbounded-integral-against-a-pvm`, `def-unbounded-linear-operator-domain-and-graph`, `lem-scalar-and-complex-measures-from-a-pvm`, `lem-unbounded-pvm-integral-is-well-defined-and-closed`, `thm-bounded-borel-pvm-integral`, `thm-complex-numbers-form-a-field`, `thm-exponential-is-strictly-increasing`, `thm-of-square-roots`, and `thm-pvm-integral-is-a-star-homomorphism`. Their raw item hashes matched the imported-mathematics registry (23/23). Also opened `def-strongly-continuous-unitary-representation`, `def-complete-ordered-field`, `cor-cauchy-reals-lub-complete`, and the real-foundations prerequisite page for the exact definitions and completeness claim used below. No imported mathematical item was edited.

## Repairs and evidence

- `def-qftx-unitary-super-poincare-representation`, Definition (line 66) and final paragraph (line 86): expanded “strongly continuous unitary representation” to specify the topology on the semidirect product, the unitary target, the homomorphism law, grading commutation, and norm-continuity of every orbit map. Defined a graded subspace as a closed complex-linear subspace invariant under `Γ`, with its equivalent parity decomposition. This matches the published definition in `../items/def-strongly-continuous-unitary-representation.md` (topological group, unitary homomorphism, norm-continuous orbit maps) and removes ambiguity needed by the irreducibility condition.

  The Definition interface’s direct and indirect in-run consumer closure was reviewed: batch 1 `thm-qftx-supermultiplet-mass-degeneracy`, `thm-qftx-n-extended-central-charge-bounds`, `ex-qftx-n2-shortened-rest-fiber`; batch 29 `pthm-qftx-n2-bps-saturation-kernel-equivalence`, `def-qftx-bps-state-and-saturation`, `ex-qftx-n2-short-rest-fiber-algebra`, `ex-qftx-n2-long-rest-fiber-algebra`; batch 33 `pthm-qftx-n2-bps-central-charge-mass`; batch 34 `def-qftx-global-susy-vacuum-state`, `pthm-qftx-global-susy-vacuum-energy`; batch 53 `def-qftx-physical-bps-index`, `pthm-qftx-physical-index-beta-independence`, `ex-qftx-witten-index-finite-superpartner-pair`; and batch 54 `def-qftx-physical-bps-charge-data`, `pthm-qftx-physical-bps-wall-crossing`, `ex-qftx-physical-bps-kronecker-hall-sector`. The clarification makes the intended representation structure explicit; no consumer repair was indicated.

- `lem-qftx-super-poincare-graded-jacobi`, Proof 4.1 (line 70): removed the appended rest-bracket calculation involving `P_0=-M` and `P_i=0`. The lemma’s statement and facts give no rest-fiber or mass `M`; that calculation is not part of the sigma-matrix identity proved by this lemma. Updated the step-4.1 proof-contract claim to match the remaining matrix calculation.

- `thm-qftx-supermultiplet-mass-degeneracy`, Facts & Assumptions and Proof 3.1/4.1 (lines 72, 87, 89): added `F5` with the exact least-upper-bound statement from `cor-cauchy-reals-lub-complete`. The nonempty set `R` is bounded below by zero; applying the supplier to `-R` constructs `inf R`, and its greatest-lower-bound property supplies the approximation used in Step 4.1. Updated the contract citation and both derivation inputs. The supplier is in the item’s existing mathematical dependency closure and in the A-page prerequisite chain; no new dependency edge was added.

- `thm-qftx-witten-index-beta-independence`, Statement (line 39): defined `m_0^±:=dim H_0^±` as the dimensions of the datum’s finite-dimensional even and odd zero-energy subspaces before using the symbols. Synchronized the in-batch example’s F2 proof-contract quote. Reviewed its in-run consumers: `ex-qftx-finite-witten-index-cancellation` in this batch and batch 53 `def-qftx-physical-bps-index`, `pthm-qftx-physical-index-beta-independence`, `ex-qftx-witten-index-finite-superpartner-pair`; the notation clarification changes no result or downstream hypothesis.

- `def-qftx-graded-trace-class-index-data`, source metadata and Definition references (lines 44–78), `thm-qftx-witten-index-beta-independence`, source metadata and Statement references (lines 23–51), and `ex-qftx-finite-witten-index-cancellation`, source metadata and Example references (lines 33–57): corrected the locators and labels for Martin §7.1 (positivity and the zero-energy condition) and Gates et al. §8.4 (mass-squared supertrace formulae). Added David Tong §1.2.2, printed p. 14, as the accurate Witten-index reference: that section defines the Witten index as the parity-weighted heat trace and explains positive-energy cancellation in the supersymmetric quantum-mechanics setting. The local statements retain their own discrete trace-class hypotheses and proofs. Sources checked: [Martin, *A Supersymmetry Primer*, §7.1](https://arxiv.org/pdf/hep-ph/9709356v7), [Gates et al., *Superspace*, §8.4](https://arxiv.org/pdf/hep-th/0108200), and [Tong, *Supersymmetric Quantum Mechanics*, §1.2.2](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf).

No other defects were confirmed. The assigned mathematical items make conditional mathematical claims; no empirical observations or measured inputs are asserted.

## Page verdicts

- `aqft-susy-math-foundations`: pass. The A-page is frontmatter-only, has `page_layout: compact-v1`, matches its assigned 12-item inventory, and has no summary body.
- `aqft-susy-math-foundations-examples`: pass. The B-page is frontmatter-only, has `page_layout: compact-v1`, matches its assigned 4-item inventory, and has no summary body.

## Validation and remaining issues

Reflow and precheck were run on each of the six changed items. All four proof-bearing items passed direct precheck; the two definitions reported zero proof checks and no failures. `proof-layout.mjs` was run once on all six paths: 6 items, 18 steps, 0 defects. A scoped scan found no hyperlinks interrupting any assigned complete statement and no TikZ/tikzcd diagrams in the assigned items. The in-batch proof-contract changes cover each proof repair; none of the six changed items had a stale `verification.judge` record. No defect remains that requires an out-of-scope edit, and there is no blocker.
