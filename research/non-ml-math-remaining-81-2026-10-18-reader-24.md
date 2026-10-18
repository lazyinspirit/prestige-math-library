# Step 3a reader report — batch 24

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: `reader`  
Batch: `24`

## Opened inventory

Assigned pages:

- A-page: `library/information-theory/quantum-channel-capacities-and-entanglement-assistance.md`
- B-page: `library/information-theory/quantum-channel-capacities-and-entanglement-assistance-examples.md`

The A-page's required prerequisite pages were also opened:

- `library/information-theory/quantum-source-compression-and-cq-capacity.md`
- `library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes.md`
- `library/quantum-computing/bell-states-teleportation-and-dense-coding.md`

All 34 assigned items were opened and reviewed in the batch's dependency order:

1. `lem-it-finite-unitary-averaging-decoupling-bound`
2. `lem-it-finite-extension-from-purification-channel`
3. `def-it-qudit-erasure-channel`
4. `lem-it-finite-superadditive-sequence-limit`
5. `def-it-quantum-channel-complement-and-coherent-information`
6. `lem-it-flagged-state-entropy-formula`
7. `thm-it-qudit-erasure-channel-is-cptp`
8. `def-it-degradable-channel`
9. `lem-it-quantum-coherent-information-complement-identity`
10. `lem-it-exponential-cq-spectral-projectors`
11. `def-it-quantum-channel-private-information`
12. `lem-it-maximum-coherent-information-attained`
13. `lem-it-qudit-erasure-channel-complement-and-degradability`
14. `lem-it-private-information-is-coherent-information-difference`
15. `lem-it-quantum-and-private-information-product-additivity`
16. `lem-it-qudit-erasure-channel-coherent-information`
17. `def-it-quantum-channel-operational-capacities`
18. `thm-it-finite-quantum-mutual-information-data-processing`
19. `lem-it-finite-mixture-entropy-bounds`
20. `lem-it-quantum-entropy-maximized-at-maximally-mixed-state`
21. `lem-it-degradable-channel-coherent-information-concavity-and-subadditivity`
22. `lem-it-flat-input-entanglement-assisted-achievability`
23. `lem-it-flat-spectral-type-information-approximation`
24. `lem-it-dimension-dependent-quantum-entropy-continuity`
25. `lem-it-flat-input-coherent-information-achievability`
26. `lem-it-entanglement-assisted-information-is-additive`
27. `lem-it-finite-cq-wiretap-strong-secrecy-achievability`
28. `thm-it-quantum-channel-capacity-regularized-coherent-information`
29. `thm-it-entanglement-assisted-classical-capacity-additive-formula`
30. `thm-it-quantum-channel-capacity-regularized-private-information`
31. `ex-it-noiseless-qubit-entanglement-assisted-capacity`
32. `thm-it-degradable-channel-single-letter-capacities`
33. `thm-it-qudit-erasure-channel-exact-capacities`
34. `ex-it-qudit-erasure-channel-capacity-regimes`

The batch-24 proof-contract artifact `research/non-ml-math-remaining-81-2026-10-18-batch-24.proof-contracts.json` was consulted for supplier interfaces and boundary cases, as navigation evidence only.

Current-run supplier items needed for the coding and entropy arguments were opened from batches 4, 21, 22, and 23. These included the finite Fano and entropy chain rules; the finite KL, quantum relative-entropy, Holevo, entropy-identity, partial-trace, and strong-subadditivity arguments; the finite Weyl twirl; and the gentle-measurement, Hayashi–Nagaoka, typical-projector, square-root-packing, HSW, and entropy-continuity results. The relevant helper proofs for the relative-entropy data-processing chain, POVM measurement channel, finite cq block state, and square-root order inequality were also opened.

Direct published supplier statements used in the proofs were checked, including the finite channel, partial-trace, purification, Stinespring, Schmidt, fidelity, trace-norm, tensor-basis, operator-positivity, probability, logarithm, compactness, and dense-coding interfaces. The published dense-coding theorem and Bell-basis definition were opened in full.

## Mathematical review and source checks

The definitions use finite-dimensional spaces, the declared ordered tensor factors, and natural-log units consistently. The erasure dilation is trace-preserving on the full operator space, including both endpoints. Its complementary map and degradation maps have the stated directions and parameters, including the common boundary at erasure probability one half.

The entropy lemmas preserve support conditions and zero-probability branches. The exact spectral-type decomposition uses finite type counts and yields the stated entropy losses. The exponential spectral-projector result only asserts average high acceptance, and the later cq coding proofs use that average rather than assuming a per-word acceptance bound. The finite unitary walk argument identifies the first- and second-moment fixed spaces, controls finite-moment errors, and obtains a finite ensemble satisfying both claimed bounds. The cq wiretap construction's average-error estimate, finite codebook selection, and unnormalized Holevo leakage estimate follow from its stated packing and dimension-dependent entropy bounds.

The capacity arguments preserve their coding conventions: isometric subspace encoders for quantum transmission, mixed input states and strong Holevo secrecy for private transmission, and arbitrary finite shared states with message-dependent channels for entanglement assistance. The superadditivity limits are linearly bounded, the converse bounds use the stated average-error criteria, and no general single-letter assertion is made outside the degradable case. The degradable-channel and erasure-channel endpoint claims follow from the stated data-processing, coherent-information, and private-information identities.

For the coding and erasure formulas, authoritative primary sources were checked at the relevant statements and proof passages:

- John Watrous, *The Theory of Quantum Information*, Chapter 8, Lemma 8.49 and its decoupling proof (printed pp. 521–524), Theorems 8.41 and 8.55. Source: <https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf>.
- Igor Devetak, “The private classical capacity and quantum capacity of a quantum channel,” Theorem 1 and the direct-coding proof of Theorem 5 (PDF pp. 4–12). Source: <https://arxiv.org/pdf/quant-ph/0304127>.
- Mark Wilde, *From Classical to Quantum Shannon Theory*, Proposition 21.6.1 (entanglement-assisted erasure capacity, §21.6.1) and Proposition 24.7.1 (quantum erasure capacity, §24.7.1). Source: <https://arxiv.org/pdf/1106.1445v8>.

The Wilde §24.7.1 proposition states the quantum erasure capacity; the assigned erasure theorem's private-capacity equality is derived locally from the assigned degradable-channel and private-information results. Its entanglement-assisted formula agrees with Wilde §21.6.1 and is also proved locally. Watrous §8.3.2 gives the 50%-erasure self-complementary case used for context.

## Repairs and remaining findings

No item or page prose was edited. No confirmed or suspected defect remains in the assigned items or page summaries. There are no uneditable findings to route. The declared Schumacher dependency in the entanglement-assisted capacity theorem is not used in that proof; it does not affect the theorem or its justification.

Because no item changed, reflow, precheck, and proof-layout were not run. There is no blocker.

## Page verdicts

- **A-page — pass.** Its finite-dimensional scope, unit conventions, regularized/general versus degradable/single-letter distinction, erasure regimes, and coding-proof summary match the reviewed items.
- **B-page — pass.** Its examples and summary match the noiseless-qubit computation and the five qubit-erasure parameter values. The table's units and the self-complementary half-erasure label are correct.

## Coverage note

All assigned items and pages and the three A-page prerequisite pages were opened. Direct current-run supplier arguments needed for the assigned proofs were checked, and direct published supplier statements were checked at the cited interfaces. This was not a re-audit of every transitive proof history behind all published foundational dependencies.
