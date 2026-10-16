# Quantum computing and quantum algorithms: controlling planning brief

Owner request, 2026-10-14: six GPT-6 Luna/max full-text quantum-computing researchers and one GPT-6 Luna/max quantum-computing prose integrator; seven GPT-6 Luna/max quantum-algorithms agents (six research/section authors plus one integrator). These are prose-planning assignments, NOT engine Step-1 author dispatches. Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md fully before writing. Use research/plan-braid-groups-track.md and its planning inventories as format examples. No agent may control the autopilot, alter live runs, publish, push, edit existing items, edit research/plan-spec.json, or claim a gate passed. Do not spawn additional agents. Record a durable progress/checkpoint before compaction; the repository requests a 500,000-token compaction threshold, but do not claim the collaboration API configured an unsupported setting.

## Shared mathematical boundary

Both new categories are mathematical, with slugs quantum-computing and quantum-algorithms. No physics-theorem, physical-postulate, experiment, or observation may be a logical supplier. Read and use BOTH existing libraries fully within the relevant dependency closure: reuse actual mathematical items in root items/; inspect physics/items/ and physics/library/non-relativistic-quantum-mechanics* for conventions, proofs and reusable mathematics. A mathematically pure physics-namespace item may inform a root-local supplier proposal, with its exact origin, hypotheses and complete proof obligations recorded; never silently import it as a resolving root ID. Physical origins belong only in explicit nonlogical remarks. Remarks are NEVER deps or justified_by targets in these tracks. Define finite-dimensional mathematical state spaces, density matrices, measurements, channels, circuit execution, probability laws, and unitary evolution rather than assert empirical quantum postulates. No claim about physical realization is needed. An adopted mathematical probability law is a definition; positivity, normalization, existence, invariance and equivalence assertions require proved suppliers.

Define ALL terminology, notation and procedures rigorously, including ancillary bits, phase, control, inverse access, promise problems, encodings, uniformity, query/gate/bit complexity, precision and success probabilities. An alg- item specifies inputs, outputs, domains and EXACT finite instructions including failure branches, loops, subroutine calls and access model. Correctness, termination, success probability and complexity are separate result items. No circular deps from an algorithm/definition to its correctness/well-definedness theorem; use justified_by according to SCHEMA.md. Distinguish exact/approximate synthesis, relative/global phase (global phase becomes observable under control), clean/dirty ancillas, classical output vs quantum-state output, promise vs total problem, oracle query vs gate/bit cost, and physical motivation vs mathematical assertion. Do not assume an efficient controlled-U or state-preparation/QRAM oracle from a bare matrix.

## Sources and honest reading

Research agents must retrieve complete authorized book/lecture-note PDFs or full HTML/source corpora, extract ALL text locally, and actually read their assigned complete primary corpus sequentially in manageable chunks (do not mistake an abstract, TOC, grep hit, automatic extraction or selected paragraphs for complete reading). At least two independent full-text treatments per planned A page; one comprehensive textbook or complete lecture-note course. Prefer author/institution-hosted copies; publisher-only/paywall works may be bibliography but never claimed read. Read full relevant proofs in corroborating sources. Preserve source URLs, redirects, retrieval attempts/failures, bytes, SHA256, PDF page count, extracted-text SHA256 and length, exact chunk/read page ranges and supported claims in each agent's source ledger. Mark full-document vs selected-chapters honestly and report unread remainder. Cache in YOUR OWN assigned source subdirectory to avoid concurrent edits; cross-link other agents' caches without modifying them. node tools/source-fetch-check.mjs --coverage YOUR-COVERAGE.json --stamp provides mechanical fetch evidence; inspect its accepted coverage schema first, and do not fabricate stamps. Retrieval failure recovery is bounded to five attempts per source; use lawful full-text alternatives and retain failures. Write original synthesis and concise locators, not copied textbook chapters. Source evidence is not proof acceptance. Significant gaps remain explicit obligations with suppliers, consumers, hypotheses and disposition; never narrow away central approved topics to conceal work.

Candidate comprehensive texts: John Preskill, Caltech Physics 219/CS219 full lecture notes (theory.caltech.edu/~preskill/ph219/, chapters 2–6 and relevant advanced chapters); John Watrous, The Theory of Quantum Information, author full book (cs.uwaterloo.ca/~watrous/TQI/); Ronald de Wolf, Quantum Computing: Lecture Notes (arxiv.org/pdf/1907.09415); Andrew Childs, Lecture Notes on Quantum Algorithms (cs.umd.edu/~amchilds/qa/qa.pdf); John Watrous, Waterloo CS766/QIC820 Theory of Quantum Information course notes (cs.uwaterloo.ca/~watrous/); Richard Cleve, Waterloo quantum information/computing course notes (cs.uwaterloo.ca/~cleve/), or another verified comprehensive institutional course if unavailable. Nielsen–Chuang, Mermin, Kaye–Laflamme–Mosca and Kitaev–Shen–Vyalyi may be corroborating bibliography only unless an authorized full copy is actually obtained. No invented access.

## Complete quantum-computing topic order (QC)

Each number is an A page with a B examples companion (B pages are logical leaves). Supply enough separate prerequisite definitions and lemmas, target 10–35 A items/page, split if needed; limit 60 proposed A items/page, hard schema cap 100. This is a branching prerequisite order, not an assertion all earlier pages are dependencies. Proposed IDs begin def-qc-, alg-qc-, lem-qc-, thm-qc-, prop-qc-, ex-qc-, cex-qc-, rem-qc-. Shared primitives are owned HERE and consumed by QA.

QC01 finite complex inner-product spaces, bra/ket conventions, adjoints, trace, positive operators, spectral/SVD interfaces and matrix norms (reuse root linear algebra).
QC02 tensor registers, ordered computational bases, binary encoding/endianness, tensor maps, permutations and partial trace.
QC03 pure states/rays, density operators, ensembles, convexity, purification and Schmidt decomposition.
QC04 projective measurements, POVMs, instruments, outcome kernels, conditional states, normalization and zero-probability branches.
QC05 isometries, unitary channels, CPTP maps, Kraus/Choi/Stinespring representations and their finite-dimensional equivalences.
QC06 trace distance/fidelity, distinguishability, contractivity, tensor/composition error bounds, no-cloning/no-broadcasting with precise scope.
QC07 qubits, Bloch sphere, Pauli algebra and exact one-qubit gates/rotations.
QC08 controlled gates, CNOT/CZ/SWAP, multi-controlled operations, relative phase and entanglement.
QC09 circuit syntax/denotational semantics, wire ordering, sequential/parallel composition, measurements, classical control and deferred measurement.
QC10 reversible Boolean computation, Toffoli/Fredkin, clean/dirty ancillas, Bennett uncomputation and coherent function oracles.
QC11 universal continuous gates, two-level decompositions, Euler decompositions and exact multi-qubit synthesis.
QC12 discrete approximate universality, group density, Solovay–Kitaev hypotheses/proof obligations and resource scaling.
QC13 Clifford+T exact/approximate synthesis, algebraic number rings, ancilla/precision accounting (no falsely universal exact finite gate set).
QC14 circuit families, uniformity, computation/promise models, acceptance and bounded-error amplification; foundational classes consumed by QA complexity.
QC15 Pauli groups, Clifford groups, symplectic binary representation and tableaux.
QC16 stabilizer states/circuits, Gottesman–Knill simulation including measurement updates.
QC17 Bell states, mathematical teleportation/dense coding and resource/correction semantics.
QC18 classical codes over finite fields and quantum codes/subspaces, distance and error detection.
QC19 Knill–Laflamme error-correction criterion, recovery maps and subsystem variants with full local proof routes.
QC20 stabilizer/CSS codes, syndromes, encoding/decoding procedures and worked small codes.
QC21 channels/noise models as mathematical maps, fault locations, fault-tolerant gadgets, concatenation and precise threshold theorem model/obligations.
QC22 graph states and measurement-based computation, adaptive patterns and circuit equivalence.
QC23 circuit optimization, ancilla/time-space tradeoffs and lower bounds under explicit models.
QC24 state preparation/isometry synthesis, information-theoretic limits and mathematical interfaces for QA (no free data loading).

QC dependencies: 01 -> 02 -> 03; {01,03}->04; {01,02,03,04}->05; {03,04,05}->06. {01,03}->07; {02,07}->08; {04,05,08}->09; {09,classical computability}->10. {07,08,09}->11; {11,norms,Lie/group facts}->12; {10,11,12,number-theory}->13; {06,09,10,12}->14; {07,08,finite-fields}->15->16; {04,08,09}->17; classical code suppliers->18; {05,18}->19; {15,18,19}->20; {06,09,19,20}->21; {09,15,16,17}->22; {10,11,13,14}->23; {03,09,11,13}->24. Extra actual dependencies must be explicit and acyclic. QC21 substantial threshold theory must be fully decomposed or marked an unresolved AUTHORING obligation, not asserted via a physics theorem or labelled an open problem.

## Complete quantum-algorithms topic order (QA)

A/B pairs, same caps and logical-leaf rule. IDs def-qa-, alg-qa-, lem-qa-, thm-qa-, prop-qa-, ex-qa-, cex-qa-, rem-qa-. QA uses explicit QC interfaces, and adds algorithm-specific prerequisites locally or in proposed shared supplier pages with ownership; never creates QC -> QA cycles.

QA01 computational tasks/promise relations, circuit/oracle/access models, output/error criteria, query/gate/bit complexity and reductions.
QA02 coherent reversible arithmetic, compute–copy–uncompute, phase kickback and bit/phase oracle conversion.
QA03 Deutsch/Deutsch–Jozsa and Bernstein–Vazirani with exact promises and classical comparisons.
QA04 Simon algorithm, finite-field elimination, rank/sample/success analysis.
QA05 finite Fourier analysis and characters of finite abelian groups (reuse algebra/harmonic analysis; add missing suppliers).
QA06 exact/approximate QFT circuits, bit reversal, truncation/error bounds and gate complexity.
QA07 phase estimation, eigenstate/superposition outputs, tail bounds, inverse/controlled-power access costs.
QA08 order finding and rational reconstruction, continued fractions, bad samples and bounded repetition.
QA09 Shor factoring, classical randomized reduction, exceptional cases and modular arithmetic gate/bit cost.
QA10 finite abelian hidden-subgroup algorithms, Fourier sampling and subgroup reconstruction; nonabelian limitations.
QA11 Grover search as invariant-plane rotations, integer iteration counts and known/unknown marked counts.
QA12 amplitude amplification, general initial procedures, reflections and robust success guarantees.
QA13 amplitude estimation/counting, precision/success/query bounds and variants.
QA14 query lower bounds: hybrid/Bennett–Bernstein–Brassard–Vazirani and optimal unstructured search.
QA15 polynomial method and approximate degree with exactly specified query models.
QA16 adversary methods, spectral bounds and general adversary tightness proof obligations.
QA17 discrete-time/Szegedy quantum walks, reversible chains, discriminants, stationary distributions and spectral mapping.
QA18 walk search, hitting-time/spectral-gap bounds and element distinctness.
QA19 continuous-time walks, Hamiltonians as Hermitian matrices, spatial search and graph applications.
QA20 Hamiltonian simulation models and product formulas, commutator/error bounds and input cost.
QA21 linear combination of unitaries, oblivious amplitude amplification and truncated Taylor simulation.
QA22 block encodings, normalization, composition, controlled access and preparation costs.
QA23 quantum signal processing, polynomial parity/boundedness constraints and constructive synthesis.
QA24 quantum singular-value transformation, singular subspaces, polynomial transformation and error/resource accounting.
QA25 qubitization and near-optimal simulation, exact oracle assumptions and lower-bound comparisons.
QA26 HHL/phase-estimation linear-system solver, condition number, inversion approximation and postselection cost.
QA27 block-encoding linear systems, variable-time amplification and state-output limitations.
QA28 eigenvalue/singular-value estimation, matrix functions and algorithmic spectral estimation.
QA29 quantum sampling, expectation/Monte Carlo estimation and integration speedups with data-access costs.
QA30 optimization/SDP and variational algorithms, objective/measurement/oracle definitions and proved guarantees only; no universal advantage claims.
QA31 period/hidden-shift/number-theoretic extensions (discrete logarithm mandatory), lattice/dihedral scope limits.
QA32 algorithmic complexity: BQP, EQP, ZQP, oracle separations, classical containments and amplification (do not assume BQP versus classical separation).
QA33 QMA and verification, local-Hamiltonian completeness/Feynman–Kitaev mathematical construction with required substantial suppliers.
QA34 algorithm composition, precision budgets, verification, dequantization and input/output bottlenecks.
QA35 quantum communication algorithms, fingerprints and communication complexity (mathematical protocols).
QA36 adiabatic computation as a mathematical path of finite Hermitian matrices, gap/regularity/adiabatic bounds and circuit equivalence, no empirical postulates.

QA dependencies: QC foundations ->01->02; {01,02}->03,04. Finite group algebra->05->{06,10}; {02,06}->07->{08,13,26,28}; {08,coherent modular arithmetic}->09. {01,02,QC reflections}->11->12->13. {01,11}->14; {01,algebra/polynomials}->15->16 (14 optional comparison). Markov-chain foundations + QC->17->{18,19}; {QC matrix norms/exponentials,19}->20; {12,20}->21; {QC24,21}->22->23->24->25; {07,12,linear-algebra}->26; {22,24,variable-time prerequisites}->27; {07,24}->28; {13,28}->29->{30}; {05,07,08,10}->31; {QC14,01,14,15}->32->33; all used algorithms + QC06->34; {QC states/measurements,01,finite probability}->35; {QC spectral calculus,20,gap estimates}->36. Explicit exact QC supplier IDs/interfaces must appear, not vague 'quantum mechanics'. Avoid forcing unrelated advanced topics into every student's core path.

## Outputs and exclusive ownership

QC researchers qc_r1..qc_r6 own only research/quantum-computing-planning/reports/qc_rN.md, sources/qc_rN/, source-ledgers/qc_rN.json and optional coverage files there. They provide rigorous source-backed topic inventories, exact definitions/contracts, proof/well-definedness routes, examples, real library supplier audits, gaps and page/item dependency proposals. QC integrator owns research/plan-quantum-computing-track.md and research/quantum-computing-planning/{pages.json,proposed-items.json,source-manifest.json,prerequisite-audit.md,coverage.md}, plus draft library/quantum-computing/_category.md and research/quantum-computing-planning/pathway.md. No placeholder item carriers. Canonical page/item registration is deferred to the root owner after review; planning pages.json is a proposal.

QA agents qa_r1..qa_r6 own only research/quantum-algorithms-planning/sections/qa_rN.md, sources/qa_rN/, source-ledgers/qa_rN.json and section inventories qa_rN-items.json, qa_rN-pages.json. Each produces complete prose sections and machine inventories for their assigned pages, backed by full-text reading and actual supplier audit. QA integrator qa_integrator owns research/plan-quantum-algorithms-track.md and research/quantum-algorithms-planning/{pages.json,proposed-items.json,source-manifest.json,prerequisite-audit.md,coverage.md}, plus draft library/quantum-algorithms/_category.md and research/quantum-algorithms-planning/pathway.md. Root owns this brief and final integration/check receipts. All files are draft planning, no acceptance/readiness/verification stamps.

Machine proposals: pages.json object {category,status:'draft-planning',pages:[{label,page,title,kind:'A'|'B',category,requires:[page IDs],companion,items:[proposed IDs],summary}]}; proposed-items.json object {category,status:'draft-planning',items:[{id,kind,title,page,deps:[exact item IDs],justified_by:[],statement_or_definition,proof_obligations:[...],sources:[{url,locator}],existing_supplier_checks:[...],unresolved_obligations:[...]}]}. Include local order/dependency_level if feasible. Unauthored planned suppliers are explicitly unresolved, never certified available. B inventory must not supply A/other-page dependencies. Remarks never supply logic. Every page/topic has coverage and source locators. Both categories overviews >=120 words. Do not create library pathway links to nonexistent library pages or parts: [] (pathcheck rejects empty parts even in drafts). Keep the proposed branching pathway in research/<category>-planning/pathway.md and omit library/_pathway.md until real page carriers exist; a category with no published pages may omit the pathway. If real draft A/B page summaries are created later, keep their canonical items/examples arrays empty until normal engine authoring, then supply a nonempty valid library pathway.

Communicate exact findings to your integrator and root, preserving original reports. Do not wait idly for other writers; draft against explicit contracts then reconcile actual received evidence. Finish with a concise artifact list, sources actually read and unmet obligations. Source extraction alone is not completion.
