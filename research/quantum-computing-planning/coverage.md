# Quantum-computing page and source coverage

Status: complete draft-planning source/inventory merge, 2026-10-14. This index records researcher-reported reading and exact source attribution; it is not proof acceptance. The integrator did not claim sequential reading of these corpora. Exact URLs, retrieval/failure history, hashes, extracted-text hashes, page counts and sequential page/chunk receipts remain in the source ledgers indexed by [`source-manifest.json`](source-manifest.json). Every item row has its own exact source locator in [`proposed-items.json`](proposed-items.json). Extraction alone is not treated as reading.

| Research scope | Reported full-text reading and source limits | Fetch evidence |
|---|---|---|
| QC01–QC06 | Watrous, *The Theory of Quantum Information*, 598/598 PDF pages; de Wolf v6 course, 239/239; Barnum et al. no-broadcast paper, 11/11. Preskill Chs.2–3 were independently read by qc_r2. Watrous Ch.1 is explicitly proof-free; de Wolf supplies no-broadcasting proof. | 3/3 verified source occurrences |
| QC07–QC10, QC17, QC24 | Preskill Ch.2 53/53, Ch.3 65/65, Ch.5 54/54, Ch.6 64/64; Ch.4 all 70 available pages read but author-marked incomplete. Selected independent full-text reads include Watrous and de Wolf through qc_r1; those are separate receipts. | 7/7 Preskill URLs verified |
| QC11–QC14, QC23 | de Wolf v6, 239/239; Barenco 31/31, Dawson–Nielsen 15/15, Kliuchnikov–Maslov–Mosca 23/23, Ross–Selinger 40/40, Shende–Bullock–Markov 19/19, Watrous 44/44, van Melkebeek–Watson 25/25. All are page-sequential full-document reads by qc_r3. | 17/17 page/source occurrences verified |
| QC15, QC16, QC22 | Waterloo CS766/QIC820 TQI course notes, 197/197; Aaronson–Gottesman 15/15; Raussendorf–Briegel 4/4; Raussendorf–Browne–Briegel 37/37; de Wolf Ch.20 PDF pp.185–194 read sequentially; Watrous UQIC Lesson 14 and Hein et al. are selected-scope reads, with unread ranges recorded. | 8/8 covered source occurrences verified |
| QC18–QC21 | Cleve QIC710 course, 328/328; Preskill Ch.7 actual PDF 92/92; Aharonov–Ben-Or 18/18; KLP subsystem-QEC paper 21/21; Preskill’s 25-page handwritten 2011 fault-tolerance note visually inspected page by page. The typed Preskill Ch.8 was unavailable and is not claimed read. | 11/11 source occurrences verified |
| Cross-track QC10/QC14/QC23/QC24 | Childs official lecture notes, 191/191; de Wolf v6, 239/239. This is cross-track interface support, not an extra page owner. | 1/1 Childs coverage occurrence verified |

## Page-by-page item source coverage

The source column lists the distinct full-text works cited by the proposed items on each A page. Individual item rows carry the precise section, theorem, equation, printed-page or PDF-page locator; sources are not inherited as proof suppliers. The exact branch edges and item homes are in [`pages.json`](pages.json).

| Page | Proposed A items | Item-cited full-text treatments |
|---|---:|---|
| QC01 — `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` | 10 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; The Theory of Quantum Information |
| QC02 — `registers-tensor-products-and-partial-trace` | 12 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; The Theory of Quantum Information |
| QC03 — `pure-and-mixed-states-ensembles-and-schmidt-decomposition` | 14 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; The Theory of Quantum Information; Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015) |
| QC04 — `measurements-povms-and-instruments` | 15 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; The Theory of Quantum Information; Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution (PDF title page October 2018) |
| QC05 — `channels-kraus-choi-and-stinespring-representations` | 16 | The Theory of Quantum Information; Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution (PDF title page October 2018) |
| QC06 — `trace-distance-fidelity-and-information-limits` | 32 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa, and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast; The Theory of Quantum Information; Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015) |
| QC07 — `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | 10 | Quantum Computing: Lecture Notes, Chapter 1; Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015) |
| QC08 — `controlled-gates-phase-and-entanglement` | 14 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015); Quantum Computation, Chapter 6: Quantum Algorithms (updated November 2020; personal-use-only prepublication draft) |
| QC09 — `circuit-syntax-denotational-semantics-and-measurement` | 11 | Quantum Computing: Lecture Notes, Chapter 2; Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution (PDF title page October 2018) |
| QC10 — `reversible-computation-ancillas-and-coherent-oracles` | 12 | Quantum Computing: Lecture Notes, Chapter 2; Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015) |
| QC11 — `continuous-gate-universality-and-exact-synthesis` | 13 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5; Elementary gates for quantum computation, arXiv:quant-ph/9503016v1 |
| QC12 — `approximate-universality-and-solovay-kitaev` | 12 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5; Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2; Elementary gates for quantum computation, arXiv:quant-ph/9503016v1 |
| QC13 — `clifford-t-exact-and-approximate-synthesis` | 18 | Vadym Kliuchnikov, Dmitri Maslov, and Michele Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits, arXiv:1206.5236v2; Neil J. Ross and Peter Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, arXiv:1403.2975v1 |
| QC14 — `uniform-circuit-families-promise-problems-and-complexity` | 11 | Quantum Computing: Lecture Notes, Chapter 13; Quantum Computational Complexity, arXiv:0804.3401v1 |
| QC15 — `pauli-and-clifford-groups-binary-symplectic-tableaux` | 12 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Improved Simulation of Stabilizer Circuits; M. Hein, W. Dür, J. Eisert, R. Raussendorf, M. Van den Nest, and H. J. Briegel, Entanglement in graph states and its applications; Understanding Quantum Information and Computation: A Course on the Theory of Quantum Computing (2025), Lesson 14 The Stabilizer Formalism |
| QC16 — `stabilizer-circuits-and-gottesman-knill-simulation` | 15 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Improved Simulation of Stabilizer Circuits; M. Hein, W. Dür, J. Eisert, R. Raussendorf, M. Van den Nest, and H. J. Briegel, Entanglement in graph states and its applications; CS 766/QIC 820 Theory of Quantum Information, Fall 2011 course lecture notes; Understanding Quantum Information and Computation: A Course on the Theory of Quantum Computing (2025), Lesson 14 The Stabilizer Formalism |
| QC17 — `bell-states-teleportation-and-dense-coding` | 11 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; The Theory of Quantum Information; Quantum Computation, Chapter 4: Quantum Entanglement (available 2 November 2001 version; official index says incomplete) |
| QC18 — `classical-and-quantum-error-correcting-codes` | 13 | Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026; Quantum Computation, Chapter 7: Quantum Error Correction |
| QC19 — `knill-laflamme-recovery-and-subsystem-codes` | 11 | David W. Kribs, Raymond Laflamme, David Poulin, Maia Lesosky, Operator Quantum Error Correction, arXiv:quant-ph/0504189v3 (2006); Quantum Computation, Chapter 7: Quantum Error Correction |
| QC20 — `stabilizer-css-codes-syndromes-and-procedures` | 13 | Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026; Quantum Computation, Chapter 7: Quantum Error Correction; Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten notes) |
| QC21 — `noise-fault-tolerance-concatenation-and-thresholds` | 11 | D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error, arXiv:quant-ph/9611025v2 (1996); Quantum Computation, Chapter 7: Quantum Error Correction; Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten notes) |
| QC22 — `graph-states-and-measurement-based-computation` | 15 | Quantum Computing: Lecture Notes, arXiv:1907.09415v6; A One-Way Quantum Computer; Measurement-based quantum computation on cluster states; M. Hein, W. Dür, J. Eisert, R. Raussendorf, M. Van den Nest, and H. J. Briegel, Entanglement in graph states and its applications |
| QC23 — `circuit-optimization-resource-tradeoffs-and-lower-bounds` | 17 | Dieter van Melkebeek and Thomas Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy, arXiv:0712.2545v1; Quantum Computing: Lecture Notes, arXiv:1907.09415v6; Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5; Elementary gates for quantum computation, arXiv:quant-ph/9503016v1 |
| QC24 — `state-preparation-isometry-synthesis-and-limits` | 16 | The Solovay–Kitaev Algorithm; Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015) |

## Scope and unresolved evidence

- **Existing-root prerequisite hold (current graph):** the combined QC/QA
  checker passes the structural proposal graph for 120 pages and 896 proposed
  items, but the 1,834-item root prerequisite closure still reaches ten
  existing root remarks transitively. The current checker therefore remains
  `fail`; none of the ten is a direct QC/QA proposal edge. The exact
  SHA-bound, read-only repair bundle is now available at
  [`prerequisite-repairs.json`](../quantum-planning-review/prerequisite-repairs.json)
  (18 consumer recipes and 14 proposed typed suppliers). Its separate virtual
  overlay check, [`planned-repair-check.json`](../quantum-planning-review/planned-repair-check.json),
  passes for 2,729 planned-closure nodes with no reported graph errors. That
  is a contingent planning result only: the repairs have not been applied or
  proof-accepted, and the actual library remains on hold. See
  [`prerequisite-audit.md`](prerequisite-audit.md) and the current
  [`mechanical-check.json`](../quantum-planning-review/mechanical-check.json).
  Do not start dependent authoring or claim current full prerequisite closure
  until the root repairs are applied and the actual checker passes.
- Preskill Chapter 4 is author-marked incomplete; the researchers report reading the full available 70-page file, not a complete chapter. The typed Preskill Chapter 8 was unavailable; the 25-page handwritten fault-tolerance note is a separate source with a visually inspected page-by-page receipt.
- QC06 retains the finite-dimensional no-broadcasting theorem and its singular-state support reduction. qc_r1 reports no second independent complete proof of the general theorem; its local proof obligation and source limitation remain explicit.
- QC12 records Solovay–Kitaev gate-count and exact-arithmetic bounds, but finite-precision Turing bit-time remains a separate unmet obligation. Fixed H/T synthesis distinguishes exact matrix equality from projective/whole-circuit phase, especially under control.
- QC21 retains the conditional concatenated circuit threshold with its complete intermediate gadget/recurrence obligations, the separate t=1 proof branch, and the narrower iid-Z/perfect-syndrome surface-code memory result. It does not infer a faulty-gate threshold from the memory theorem.
- No physics postulate, physical theorem, experiment, observation, or remark is a logical QC dependency. All local QC proofs and definitions remain proposed future authoring work; source reading is not acceptance.

## Audit overlay

Current inventory: 358 proposed contracts on 48 pages (24 topics), including 24 added repair suppliers. Source reading claims above remain the original researchers' claims; the auditor did not reread their complete corpora. Per-topic and per-item revised contracts are authoritative in proposed-items.json and the exhaustive audit coverage JSON. Each original report's embedded export is a historical planning snapshot, superseded by [reports/audit-amendments.md](reports/audit-amendments.md). Local graph consistency passed for the final QC inventory; this does not certify the actual root prerequisite closure or any proof.

Final parent refresh: the combined proposal has 896 items on 120 pages, 1,834 actual root prerequisites; strict actual check FAILS only on the original ten inherited remarks, with a draft Golden–Thompson warning. The conditional virtual check PASSES for 2,729 nodes with 18 recipes and 14 proposed suppliers. This supersedes earlier numeric snapshots and grants no proof acceptance or applied-root-repair claim.

QC23 additional auditor source: Eric Allender et al., *Time-Space Tradeoffs in the Counting Hierarchy*, official author-hosted17-page manuscript, personally read in full. The original qc_r3 unavailable-Allender note is historical; the audit ledger records successful recovery. Current source-level proofs still require their explicit uniform-arithmetic and tight-reduction local suppliers.
