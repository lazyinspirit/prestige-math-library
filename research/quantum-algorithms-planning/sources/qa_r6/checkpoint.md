# QA researcher 6 checkpoint — handoff

Recorded UTC: 2026-10-14T10:10:37Z. Status: planning research complete for owned QA32–QA35 outputs; inventory and source ledger frozen for integration, with theorem promotions conditional on explicit authoring holds below.

## Files owned and validation

- `sections/qa_r6.md`: source-backed prose and cross-track prerequisite/model audit.
- `qa_r6-items.json`: 61 unique proposed items with exact interfaces, dependencies, citations, proof obligations, and explicit unresolved holds.
- `qa_r6-pages.json`: 8 A/B pages; A-page item counts QA32=11, QA33=21, QA34=11, QA35=10.
- `source-ledgers/qa_r6.json`: eight read source records, content hashes, PDF page counts, exact read ranges, bibliographic retrieval gap, and excluded-source mismatch.
- `sources/qa_r6/coverage.json`: source-fetch-check stamped 13/13, 0 drops, 0 newly stamped on final validation.

JSON parsing, duplicate-ID checks, page/item coverage, local dependency closure, and A-page minimum counts passed. QA34 references QC06's canonical `thm-qc-diamond-norm-ancilla-dimension-bound`. It also references QC24 `def-qc-state-preparation-cost-model`, `alg-qc-state-preparation`, and canonical `thm-qc-state-preparation-cost`; its O(D)-rotation/O(nD)-bounded-arity-gate bound with O(n) clean ancillas assumes exact continuous rotations. Table encoding, precision, and access remain explicit, while finite-gate approximation and synthesis costs are separately charged under QC12. Source-fetch-check remains 13/13 verified. No canonical plan, shared inventory, root library item, physics item, autopilot/engine file, or other researcher’s file was edited.

## Actual source-reading boundary

- De Wolf, *Quantum Computing: Lecture Notes* v6: read sequentially PDF pp.1–222 (the full mathematical body); PDF pp.223–239 are unread as proof text. PDF p.236 was inspected only to verify the Newman–Szegedy bibliography entry.
- Childs, *Lecture Notes on Quantum Algorithms*: complete selected chapters/sections only—Ch.1 PDF pp.9–12, Ch.2 pp.15–18, Ch.33 pp.179–184. All other course pages are unread.
- Watrous, *Quantum Computational Complexity*: full 44-page paper read. Watrous, *The Theory of Quantum Information*: selected complete sections PDF pp.68–76, 133–139, 302–310; all other pages are unread.
- Aharonov–Naveh, *Quantum NP — A Survey* (23pp); Kempe–Kitaev–Regev, *The Complexity of the Local Hamiltonian Problem* (30pp); Buhrman–Cleve–Watrous–de Wolf, *Quantum Fingerprinting* (8pp); and Tang, *A quantum-inspired classical algorithm for recommendation systems* v3 (32pp): each full document/proof text read sequentially, including relevant appendices.
- The mistaken arXiv:1610.06381 artifact is retained but excluded: it is Wang–Xie–Duan on SDP strong-converse bounds, not Vidick–Watrous *Quantum Proofs*.
- Newman–Szegedy, *Public vs. private coin flips in one round communication games*, STOC 1996, DOI 10.1145/237814.238004: official ACM PDF request returned HTTP 403; metadata says no OA copy. Only references were read; no proof claim is made.

No cached de Wolf, Watrous, or Childs source file was edited. Exact hashes and byte/page metadata are in `source-ledgers/qa_r6.json`.

## Frozen interfaces and completed audit

QA32 reuses root `def-promise-problem` and exact QC14 stems `def-qc-promise-computation-model`, `def-qc-uniform-circuit-family`, `def-qc-quantum-acceptance-probability`, `def-qc-circuit-cost-model`, `def-qc-bqp-promise-class`, `alg-qc-bounded-error-amplification`, and `thm-qc-bounded-error-amplification-correct`. The fixed model is deterministic polynomial-time full-list generation on `1^n`, exact finite `{H,T,T†,CNOT}` matrices over `Q(ζ8)`, clean ancillas, explicit input/output registers and predicate. The exact QC01 interface `def-qc-dirac-notation-conversion` is used where ket/bra notation appears.

QA35 uses the reconciled QC06 `thm-qc-measurement-variation-at-most-trace-distance`; it does not depend on QC17. Physics-context items were inspected for vocabulary only; none is a logical supplier. Root suppliers for promise/reduction, PTM and BPP, finite probability/product independence/Chernoff/union bounds, Boolean uniformity, PP/GapP, PSPACE, trace/adjoint/spectral facts, and classical oracle models were checked against actual statements. Classical oracle diagonalization is not used as a quantum query theorem.

## Unresolved AUTHORING prerequisites

1. PromiseP/BPP-to-QC14 compilation needs exact reversible gate expansion and a proof from indexed Boolean circuits to a full-list generator with fanout-sensitive resources.
2. BQP⊆PP and BQP⊆PSPACE need a full proof in the frozen `Q(ζ8)` gate model. PP needs GapP coefficient vectors plus algebraic comparison under the bounded-error margin; rational path counting is invalid. PSPACE needs certified field arithmetic/space bounds.
3. Matrix-only Local Hamiltonian membership and the 5-/2-local QMA-completeness closure remain conditional on the fixed-arity local measurement synthesis and QC12 effective bit-time compiler interface. The item DAG separately includes entangled-witness amplification, Feynman–Kitaev path gap, input/output penalties, geometric soundness, unary-clock locality, and KKR’s four projection-lemma restrictions.
4. Tang’s recommendation theorem remains conditional on a local FKV/ModFKV low-rank sampling proof detail. Its same-data-structure ℓ2 sample/query model, output distribution, norm/precision parameters, and row-norm-ratio cost are stated.
5. A uniform fingerprint protocol needs an explicit efficiently generated linear-rate code family with distance proof; the random-code union bound establishes only a nonuniform codebook.
6. The private-coin SMP equality Ω(√n) lower bound remains unread and unproved locally. Do not substitute deterministic Ω(n) or public-coin O(1) communication.

The QC interfaces, QMA result dependencies, output/precision limits, and source-retrieval gaps were sent to `/root` and `/root/qa_integrator` for integration.
