# Step 3a reader report — batch 43

Run: `physics-td-qft-rpm-62-2026-10-14`  
Batch: `43`  
Role: independent reader

## Verdict

No confirmed defect was found in the assigned page prose or item mathematics. No item or page was edited. Each item conclusion is conditional on its listed mathematical prerequisites, including the current QFT draft suppliers. No finding remains for routing.

## Opened assigned pages

| Page | Carrier | Verdict |
|---|---|---|
| `qft-mf04` | `library/quantum-field-theory-mathematics/qft-mf04.md` | Pass under the stated draft suppliers. Its summary accurately describes the tempered construction, the `iδ` normalization, the action variations, and the operator-domain results; it does not present these as measurements or interacting-field results. |
| `qft-mf04-examples` | `library/quantum-field-theory-mathematics/qft-mf04-examples.md` | Pass. The summary accurately states the mode jump, massless-apex convention, and limits of the example. |

## Opened assigned items

| Item | Review result |
|---|---|
| `lem-qft-free-time-ordered-kernel` | The shell integral is absolutely convergent with a Schwartz-seminorm bound, including the massless apex. The one-dimensional derivative jump is `-i`, so the `(-,+,+,+)` operator gives `+iδ`; reciprocal Fourier normalization gives the four-dimensional source. The two Wightman orderings and spacelike-support statement follow from the exact current scalar-field and causal-commutator interfaces. No gap was found. |
| `lem-qft-free-action-equations` | The scalar integration-by-parts sign matches `Box=-∂₀²+Δ`. The commuting-spinor variation uses the stated gamma-matrix adjoint identity, and the bump-test arguments establish both stationarity converses pointwise. The source's opposite metric convention and Grassmann-field scope are identified; the local proof supplies the fixed conventions. No gap was found. |
| `lem-qft-free-domain-observables` | The scalar and Dirac domains match their cited maximal-multiplier results. The finite-mean/variance claim uses only `Ψ∈D(A)`, and the composition-domain qualification is exact. The scalar approximate-point vectors have shell norms diverging by Fatou; the equal-time Dirac CAR gives the operator-norm lower bound. These are representation- and topology-qualified statements, not claims that a model describes nature. No gap was found. |
| `ex-qftmath-timeordered-jump` | The one-sided derivatives give jump `-i`; half-line integration by parts gives `g''+ω²g=-iδ`, and the negative spatial Fourier multiplier gives the claimed `+iδ` source. The omitted massless apex does not affect the locally integrable shell pairing. No gap was found. |

All four assigned carriers were opened in full, including frontmatter, statements, facts, proofs, remarks, and metadata.

## Dependency context opened

I checked the current exact statements/interfaces of the direct prerequisites used by the four items:

- `def-countable-choice`, `def-schwartz-space-and-its-seminorms`, `def-tempered-distribution`, `def-test-function-space-d-of-an-open-set`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-fourier-inversion-on-schwartz-space`, `thm-dominated-convergence`, `thm-fatou-lemma`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-p-series-real-exponents`, `lem-smooth-bump-between-concentric-euclidean-balls`, and `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound`;
- `def-qft-scalar-mass-shell`, `def-qft-fock-and-test-spaces`, `lem-qft-smeared-free-scalar`, `lem-qft-scalar-causal-commutator`, `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`, `lem-qft-fock-ccr-car`, `lem-qft-dirac-fermionic-translation-spectrum`, `lem-qft-free-dirac-car-locality`, `lem-qft-mass-shell-measure-invariant`, `lem-qft-mass-shell-test-range-dense`, `lem-qft-second-quantized-spectrum`, and `lem-qft-segal-weyl-domain`.

I inspected the complete current proof bodies of `lem-qft-smeared-free-scalar`, `lem-qft-scalar-causal-commutator`, and `lem-qft-free-dirac-car-locality`, which supply the time-ordering, locality, and Dirac point-smearing steps. Their statements match the uses made here. The other direct prerequisites were checked at their current exact interfaces; this report does not re-audit every proof in their full transitive mathematical dependency closures.

The assigned items cite and distinguish the following source conventions:

- David Tong, *Quantum Field Theory*, Chapter 1, §1.1.1, equations 1.6–1.15 (scalar action and Klein–Gordon equation): <https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S1.html>. Tong uses `(+---)`; the assigned item fixes `(-+++)` and redoes the variation.
- David Tong, Chapter 2, §§2.6.1 and 2.7–2.7.1, equations 2.163–2.174 (causal commutator, positive-frequency two-point function, time ordering, and contour representation): <https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html>. The local carrier defines its own tempered extension and normalization.
- David Tong, Chapter 4, §§4.2–4.3, equations 4.342–4.359 (Dirac adjoint, action, and equations): <https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html>. Its metric and independent-variation conventions are noted in the item.
- Mark Srednicki, *Quantum Field Theory*, author-hosted 2006 draft, §3 equations 3.7–3.16, §8 equations 8.11–8.15, and §36 equations 36.1–36.18: <https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf>. The scalar mass parameter and propagator normalization differences are qualified; §36's anticommuting-spinor context is not imported into the local commuting-spinor proof.

These references support context and normalization only where the items state them as such; the assigned distributional and norm-domain claims are established by their displayed local arguments and mathematical suppliers.

## Edits and uneditable defects

- Edits: none. No repair evidence or contract changes were required.
- Confirmed defects not editable: none.
- Unresolved mathematical defect: none identified in this review.

## Run context and coverage limit

At the status check, the run was at `3a-read`, with other batch reviews and later stages pending. The current batch-43 cross-batch ledger leaves some QFT-MF01-dependent edges for `lem-qft-smeared-free-scalar` and `lem-qft-free-dirac-car-locality` open while their exact draft statements are consumed conditionally here. I did not treat that workflow status alone as a mathematical defect or as acceptance of those suppliers.

I did not independently re-prove every transitive prerequisite in the larger dependency closure. The verdicts above concern the assigned items under the exact direct prerequisite statements inspected; they do not certify the full QFT-MF01/02/03 supplier chains or run readiness.
