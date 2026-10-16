# QA3 source and drafting checkpoint

Status: research and draft inventory complete for QA11–QA16; awaiting final integration reconciliation. All writes are confined to the `qa_r3`-owned section, inventory, page slice, source ledger and source directory.

## Draft outputs

- `research/quantum-algorithms-planning/sections/qa_r3.md` records page-level contracts, proof routes, supplier audit and remaining work.
- `research/quantum-algorithms-planning/qa_r3-items.json` contains the item-level definitions, operational procedures, separate correctness/success/termination/query-cost results, exact supplier dependencies, sources and unresolved proof obligations. The current count is 109 items across QA11–QA16 and their B companions; page map synchronized: QA11=20, QA12=19, QA13=16, QA14=11, QA15=10 and QA16=21 A items, plus two B items per page. QA01/02/07 stems and source locators are reconciled; QA11 preserves the exact-maximizer and adds a finite nine-round randomized known-count procedure. QC reservation IDs are matched to the proposed QC definitions; only central merge remains.
- `research/quantum-algorithms-planning/qa_r3-pages.json` is the synchronized owned page slice; QA16 has no QA15 prerequisite and declares QA07 plus the root convex-separation page.
- `research/quantum-algorithms-planning/source-ledgers/qa_r3.json` records retrieval, hashes, page ranges, reading completeness, root-supplier audit and proof gaps.
- `research/quantum-algorithms-planning/sources/qa_r3/coverage.json` has eight checked retrieval records; `node tools/source-fetch-check.mjs --coverage research/quantum-algorithms-planning/sources/qa_r3/coverage.json` passes.

## Full independent treatments read

- de Wolf, *Quantum Computing: Lecture Notes*, complete 239-page PDF and complete extracted text, read sequentially from beginning to end. Shared read-only cache: `research/quantum-computing-planning/sources/qc_r3/de-wolf-1907.09415.{pdf,txt}`. Text extract: 15,951 lines, 649,213 bytes; PDF SHA-256 `b797f4165555d28180438586412e7629fecadb94a7ea81c761de8bdfd37a1fc1`; text SHA-256 `ea2d701fd56e377670038855ccf14e0c87cbaa58491a5019aa1fe7e2123d3a34`. QA locators: §§7.1–7.3, 11.1–11.3 and 12.1–12.3.
- Childs, *Lecture Notes on Quantum Algorithms*, complete 191-page PDF and complete extracted text, read sequentially from beginning to end. Shared read-only cache: `research/quantum-computing-planning/sources/qc_r6/childs-lecture-notes.{pdf,txt}`. Text extract: 16,658 lines, 462,433 bytes; PDF SHA-256 `6e3a32f0aede35e954d665c909fec41f716b955f041957e723e2724ae3efabd1`; text SHA-256 `f7456fdbf599429bf093c9345c45536cbeb979d37be762819a151e6d2497c8b5`. QA locators: §§19.1–19.3, 21.3–21.6, 23.1–23.3 and 24.6.

Both full treatments were read sequentially rather than inferred from search snippets. They independently cover all assigned A pages. De Wolf sketches the unknown-marked-count cost and treats several amplitude-estimation details as exercises. Childs states the SDP duality under Slater conditions and notes the dual-adversary algorithm need not be gate-efficient. BHMT, Høyer, BBBV and Lee–Mittal–Reichardt–Špalek–Szegedy provide specialist corroboration; exact reading scope is in the source ledger.

## Specialist texts and honesty limits

- BHMT, arXiv:quant-ph/0005055: complete 32-page PDF and 2,462-line text read sequentially, including QSearch Theorem 3, amplitude-estimation Theorem 12, counting Theorem 13 and approximate/exact counting results. QSearch's expected-cost proof is explicitly only a sketch, so the local proof obligation remains.
- Høyer, arXiv:quant-ph/0006031: complete six-page PDF and 522-line extract read sequentially. Theorem 1 gives `tan(ϕ/2)=tan(φ/2)(1−2a)`; Theorems 2–3 give stated phase-robustness results.
- BBBV, arXiv:quant-ph/9701001: complete 18-page PDF and 1,036-line extract read sequentially. Theorem 3.3 and Corollary 3.4 supply the query-magnitude hybrid argument. The random-oracle Theorem 3.5 is kept distinct from the direct search lower bound.
- Reichardt, arXiv:0904.2759: complete PDF/text retrieved; selected sections only read. Theorem 10.1 has a logarithmic overhead; §11 conjectures its removal. It is not used as the tight adversary supplier.
- Lee et al., arXiv:1011.3020: complete PDF/text retrieved; §§2.2–4.2 and Appendix A read. Theorem 1.1 states tightness and gives the filtered-γ₂/reflection/effective-gap/phase-detection proof route, which remains decomposed into local obligations.
- Suzuki et al., arXiv:1904.10246: complete 13-page PDF/text retrieved; selected §§1–3.2 read. It gives asymptotic Cramér–Rao analysis and numerical behavior, not a finite-sample tail theorem for the proposed finite-grid procedure.

## Supplier and access audit

- QA01/QA02 dependencies now use the checked-in stems `def-qa-standard-bit-query`, `def-qa-phase-query`, and `thm-qa-bit-query-to-phase-query`. Grover search is specified with standard bit-query access: phase marking costs one bit query per iterate through phase kickback, and measured-candidate verification costs a bit query. Bare uncontrolled phase access is not used for verification.
- QA13 QPE-based estimation requires explicitly controlled Grover/good-reflection access. The contract does not infer controlled access from a bare phase oracle or bare A. The median wrapper has fixed `ε,δ` constants and separate success and query-cost results for QA29 to consume.
- Follow-up interface correction: QA11 exact-known, randomized-known and BBHT preparations, plus the QA13 power-of-two counting specialization, specify fresh `|0^n⟩` followed by exactly `H^⊗n`; QC07 defines H and QC09 charges its gate/resource use. No fixed uniform-state row depends on QC24’s amplitude-table-specific synthesis algorithm, and QA11–13 page edges no longer require QC24. QA13 counting is explicitly specialized to `N=2^n`; its controlled reflection remains an explicit resource.
- QA14 lower-bound model is stated for the standard XOR bit oracle directly. QA16's consistency reflection is an explicit controlled compute/phase/uncompute subroutine with exactly two ordinary bit queries; it does not assume a free controlled unknown oracle.
- QA16 now directly depends on the published `thm-strict-separation-of-a-point-from-a-closed-convex-set` as one finite-dimensional separation ingredient. It does not by itself establish SDP Slater: the exact local proof must still exhibit strict primal/dual witnesses, prove closedness/boundedness/attainment, and identify the separating functional with the dual multiplier.
- QA16 has no item-level logical dependency on QA15. Its local page slice removes the inherited QA15 edge and includes QA07 phase estimation plus the root convex-separation page required by the direct dependency.
- SCHEMA §Algorithms is followed: every algorithm has empty `justified_by`; correctness, success, termination and resource results are separate result items whose `deps` include the algorithm.

## Existing mathematical suppliers and excluded physics

The full contents of the exact root items in `source-ledgers/qa_r3.json` were reviewed. These include finite-dimensional inner-product, adjoint, operator-norm, PSD, spectral theorem, trace, finite-probability, polynomial degree/multilinearization, Chebyshev, and strict-separation items. The root probability Markov item is not a polynomial derivative bound; no root item supplies the finite-grid Ehlich–Zeller step.

Physics state-vector/ray, density-operator, measurement-carrier and `qm-state-geometry` materials were read for notation and context only. Physical postulates and all `physics/` item IDs are excluded from dependencies. The cross-track convention is linear-first inner product with explicit QC Dirac conversion.

## Remaining mathematical authoring work

1. Author and audit the finite average and nine-round success proof for the new known-count randomized variant; finish the BBHT geometric random-iteration average and expected-cost sum.
2. Complete exact-success amplitude amplification with clean-ancilla rotation branches, all controlled/inverse access costs, and matching phase branches.
3. Prove the QA15 grid-return and continuous Chebyshev-Markov derivative lemmas and the OR approximate-degree consequence.
4. Fully instantiate the finite QA16 primal/dual SDPs, strict witnesses, finite strong duality, filtered-γ₂ identity, signed progress constants, Jordan effective gap, phase-zero error budget and final tightness composition.
5. Do not advertise finite-sample success for the Suzuki-inspired iterative-likelihood procedure without a new proof.

No proof has been authored or accepted by this planning report, and no readiness/gate status is claimed.
