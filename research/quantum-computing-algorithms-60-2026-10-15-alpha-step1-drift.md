# Prerequisite drift review — quantum-computing-algorithms-60-2026-10-15

## Review basis and limits

Reviewed the scope ledger, all 60 assigned batch manifests, the QC and QA prose designs, and the corresponding A-page rows in `research/plan-spec.json`. The manifest IDs and orders match the canonical plan. The `research/quantum-computing-planning/` and `research/quantum-algorithms-planning/` proposed item inventories were also checked for cross-page suppliers: no proposed item dependency maps to a supplier page outside its consumer A page's transitive declared closure. The rendered drift bundle's nearby names were treated as candidate search hints, not findings.

No backward edge or ordering correction is justified, so this review applies no additional plan edit. The run's existing plan content is left as found. These findings concern page-level prerequisite closure only: the canonical A rows still have empty `items[]`, and the proposed item contracts are not authored or proof-accepted. The mathematical proof obligations, source qualifications, and unresolved authoring holds remain for their later workflow stages.

For the higher-risk QA-16 route, I read the relevant primary-source argument in [Lee–Mittal–Reichardt–Špalek–Szegedy, *Quantum query complexity of state conversion*](https://arxiv.org/html/1011.3020), §§3–4.2: filtered-γ₂/SDP comparison, the effective spectral-gap argument, phase detection, and the Boolean-function specialization. The proposed page contains local finite-SDP-duality, effective-gap, and query-evaluator suppliers, with the convex-separation, finite-dimensional spectral, and phase-estimation interfaces in its closure.

For QA-30, I read Brandão–Svore, [*Quantum Speed-ups for Semidefinite Programming*](https://arxiv.org/html/1609.05537v5), §§1.1–1.2 and 3.1, including the Arora–Kale feasibility argument. The proposed matrix-multiplicative-weights theorem consumes `lem-finite-dimensional-golden-thompson-trace-inequality`; that item is currently published and supplied through `robust-covariance-and-high-dimensional-stability` (order 1910), which QA-30 already requires. The proposal's older note calling this a draft supplier is stale, but does not leave a closure gap. I found no defect in the published Golden–Thompson carrier while checking its stated argument and dependencies.

## A-page decisions

### finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
VERDICT: no-drift

Order 2166. QC01's Dirac, adjoint, trace, positivity, spectral/SVD, and trace-norm interfaces are supported by the declared finite-dimensional linear-algebra closure, including matrix norms. No additional quantum page is a prerequisite.

### registers-tensor-products-and-partial-trace
VERDICT: no-drift

Order 2168. QC02's ordered registers, tensor maps, permutations, and partial trace have the declared tensor-product, basis, matrix, and QC01 suppliers in closure.

### pure-and-mixed-states-ensembles-and-schmidt-decomposition
VERDICT: no-drift

Order 2170. QC03's density operators, ensembles, purification, and Schmidt claims use the declared register/partial-trace and finite spectral/SVD foundations.

### measurements-povms-and-instruments
VERDICT: no-drift

Order 2172. QC04's finite outcome laws and conditional-state claims have finite probability, density-operator, register, matrix, and spectral suppliers in closure.

### channels-kraus-choi-and-stinespring-representations
VERDICT: no-drift

Order 2174. QC05's channel and Kraus/Choi/Stinespring equivalences are downstream of the declared measurement, state, register, matrix, and finite spectral interfaces.

### trace-distance-fidelity-and-information-limits
VERDICT: no-drift

Order 2176. QC06's distance, fidelity, contractivity, and information-limit claims have the declared channels, states, measurements, trace/matrix-norm, and spectral prerequisites in closure.

### qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
VERDICT: no-drift

Order 2178. QC07's Bloch-sphere and Pauli calculations are covered by the declared finite-dimensional, state, register, and spectral foundations.

### controlled-gates-phase-and-entanglement
VERDICT: no-drift

Order 2180. QC08's controlled operations, phase distinctions, and entanglement claims have QC07, register, state, and measurement suppliers in closure.

### circuit-syntax-denotational-semantics-and-measurement
VERDICT: no-drift

Order 2182. QC09's circuit composition, measurement, and classical-control semantics have the declared channel, instrument, controlled-gate, and register interfaces.

### reversible-computation-ancillas-and-coherent-oracles
VERDICT: no-drift

Order 2184. QC10's reversible Boolean procedures and coherent-oracle conversions have the declared Boolean-circuit, computation-model, circuit-semantics, controlled-gate, and register suppliers.

### continuous-gate-universality-and-exact-synthesis
VERDICT: no-drift

Order 2186. QC11's continuous universality and exact synthesis scope declares the Lie, Sard/transversality, root-system, circuit, and finite-dimensional gate suppliers it uses.

### approximate-universality-and-solovay-kitaev
VERDICT: no-drift

Order 2188. QC12's group-density and Solovay–Kitaev scope has the declared exact-gate, Lie-group, number-field, matrix-norm, and spectral prerequisites.

### clifford-t-exact-and-approximate-synthesis
VERDICT: no-drift

Order 2190. QC13's Clifford+T exact and approximate synthesis scope has the declared algebraic-number, polynomial, circuit, gate, and ancilla suppliers.

### uniform-circuit-families-promise-problems-and-complexity
VERDICT: no-drift

Order 2192. QC14's uniformity, promise-computation, acceptance, and amplification interfaces have the declared circuit, probability, complexity, measurement, and state-distance suppliers.

### pauli-and-clifford-groups-binary-symplectic-tableaux
VERDICT: no-drift

Order 2194. QC15's Pauli/Clifford and binary-symplectic representations have the declared finite-field, bilinear-form, linear-algebra, qubit, and register suppliers.

### stabilizer-circuits-and-gottesman-knill-simulation
VERDICT: no-drift

Order 2196. QC16's stabilizer updates and measurement simulation have the declared circuit, finite-character, Pauli/Clifford, state, and measurement interfaces.

### bell-states-teleportation-and-dense-coding
VERDICT: no-drift

Order 2198. QC17's Bell-state protocols and correction semantics are covered by the declared circuit, controlled-gate, measurement, qubit, and register pages.

### classical-and-quantum-error-correcting-codes
VERDICT: no-drift

Order 2200. QC18's finite-field codes, code subspaces, distance, and error-detection scope has the declared field, linear-algebra, matrix, and register foundations.

### knill-laflamme-recovery-and-subsystem-codes
VERDICT: no-drift

Order 2202. QC19's recovery and subsystem-code claims have the declared channel, code, inner-product, register, and spectral prerequisites.

### stabilizer-css-codes-syndromes-and-procedures
VERDICT: no-drift

Order 2204. QC20's CSS/stabilizer syndromes and encoding procedures have the declared code, Pauli/Clifford, circuit, gate, and recovery suppliers.

### noise-fault-tolerance-concatenation-and-thresholds
VERDICT: no-drift

Order 2206. QC21's finite noise models, concatenation, and threshold route has the declared channels, codes, recovery, probability, and trace-distance foundations.

### graph-states-and-measurement-based-computation
VERDICT: no-drift

Order 2208. QC22's graph-state preparation and adaptive measurement claims have the declared graph, circuit, gate, measurement, stabilizer, and register suppliers.

### circuit-optimization-resource-tradeoffs-and-lower-bounds
VERDICT: no-drift

Order 2210. QC23's explicit resource models and lower-bound scope has the declared circuit, synthesis, counting-complexity, and encoding suppliers.

### state-preparation-isometry-synthesis-and-limits
VERDICT: no-drift

Order 2212. QC24's state/isometry preparation claims have the declared circuit, synthesis, state, register, and ancilla interfaces; access and precision limits remain explicit in the design.

### computational-problems-promises-and-cost-models
VERDICT: no-drift

Order 2214. QA-01's finite task, promise, encoding, uniformity, and cost interfaces have the declared QC circuit/register models and classical complexity suppliers.

### reversible-arithmetic-and-oracle-conversion
VERDICT: no-drift

Order 2216. QA-02's reversible arithmetic and oracle-conversion procedures have QA-01, CRT, circuit, gate, register, and state suppliers in closure.

### exact-oracle-algorithms
VERDICT: no-drift

Order 2218. QA-03's exact oracle procedures use the declared reversible-oracle, cost-model, qubit, register, and finite-probability interfaces.

### simon-algorithm-and-finite-field-recovery
VERDICT: no-drift

Order 2220. QA-04's Simon sampling and hidden-period recovery scope declares the finite-field, Gaussian-elimination, probability, measurement, and reversible-oracle suppliers.

### finite-abelian-fourier-analysis
VERDICT: no-drift

Order 2222. QA-05's character orthogonality, inversion, and annihilator claims have the declared finite-group, character, complex-exponential, and vector-space prerequisites.

### quantum-fourier-transform-circuits
VERDICT: no-drift

Order 2224. QA-06's cyclic/binary QFT circuits and truncation-error scope have the declared finite Fourier, synthesis, register, controlled-gate, and matrix-norm interfaces.

### quantum-phase-estimation
VERDICT: no-drift

Order 2226. QA-07's phase-estimation distribution and tail claims have QFT, controlled/inverse circuit access, finite Fourier, state, and measurement suppliers in closure.

### quantum-order-finding-and-rational-reconstruction
VERDICT: no-drift

Order 2228. QA-08's order-finding and good-sample reconstruction claims have phase estimation, continued fractions, arithmetic, and reversible-oracle suppliers.

### shors-factoring-algorithm
VERDICT: no-drift

Order 2230. QA-09's factoring procedure and success analysis have order finding, gcd/Bezout, unit-group, congruence, and prime-factorization suppliers.

### finite-abelian-hidden-subgroup-algorithms
VERDICT: no-drift

Order 2232. QA-10's finite abelian HSP sampling and recovery claims have the declared Fourier, group, circuit, measurement, state, and register interfaces.

### grover-search-and-invariant-plane-rotations
VERDICT: no-drift

Order 2234. QA-11's marked-set promise, phase oracle, and invariant-plane proof have the declared oracle-conversion, circuit, state, gate, and cost-model prerequisites.

### amplitude-amplification
VERDICT: no-drift

Order 2236. QA-12's general good/bad-subspace rotations and reflection conventions are specified for local proof; its declared state, measurement, controlled-access, and uniform-circuit suppliers suffice without importing Grover's special case.

### amplitude-estimation-and-counting
VERDICT: no-drift

Order 2238. QA-13's estimation variants and confidence bounds have phase estimation, amplitude amplification, measurement, arithmetic, and cost-model suppliers.

### quantum-query-lower-bounds-and-search-optimality
VERDICT: no-drift

Order 2240. QA-14's hybrid/search lower bounds have the declared matching query-cost, reversible-oracle, Grover, register, and uniform-circuit interfaces.

### polynomial-method-and-approximate-degree
VERDICT: no-drift

Order 2242. QA-15's oracle-polynomial representation and approximate-degree scope has the declared query model, arithmetic, trigonometric, and combinatorial linear-algebra suppliers.

### adversary-methods-and-quantum-query-complexity
VERDICT: no-drift

Order 2244. QA-16's local finite-SDP-duality, filtered-γ₂, effective-gap, and reflection/phase-detection suppliers cover the tightness argument. The checked state-conversion proof uses these local claims plus declared convex separation, spectral, query, and phase-estimation interfaces; no additional page supplier is missing.

### discrete-quantum-walks-and-szegedy-theory
VERDICT: no-drift

Order 2246. QA-17's reversible-chain discriminants, walk unitarity, and spectral mapping have the declared Markov-chain, finite spectral, register, and circuit suppliers.

### quantum-walk-search-and-element-distinctness
VERDICT: no-drift

Order 2248. QA-18's walk-search and element-distinctness claims have QA-17, phase estimation, Markov-chain hitting-time, query-model, and circuit-access suppliers.

### continuous-time-quantum-walks
VERDICT: no-drift

Order 2250. QA-19's finite Hermitian-generator evolution has the declared matrix exponential, spectral, register, measurement, and circuit interfaces.

### hamiltonian-simulation-and-product-formulas
VERDICT: no-drift

Order 2252. QA-20's commutator-based product-formula claims have the declared continuous-time evolution, spectral, controlled-access, and reversible-oracle prerequisites.

### lcu-oblivious-amplitude-amplification-and-taylor-simulation
VERDICT: no-drift

Order 2254. QA-21's LCU normalization, oblivious amplification, and Taylor remainder route has the declared Hamiltonian simulation, state preparation, ancilla, controlled-access, and register suppliers.

### block-encodings
VERDICT: no-drift

Order 2256. QA-22's block-encoding definitions and composition/error rules have the declared state-preparation, circuit, matrix, spectral, controlled-access, and register interfaces.

### quantum-signal-processing
VERDICT: no-drift

Order 2258. QA-23's QSP phase/parity conventions and synthesis claims have the declared polynomial, exponential, controlled-gate, circuit, and finite-dimensional suppliers.

### quantum-singular-value-transformation
VERDICT: no-drift

Order 2260. QA-24's singular-subspace transformations and parity/error rules have QA-22/23, spectral, circuit, and controlled-access suppliers.

### qubitization-and-optimal-hamiltonian-simulation
VERDICT: no-drift

Order 2262. QA-25's qubiterate spectral relation and simulation bound have the declared Hamiltonian-simulation, QSVT/block-encoding, walk, access, and finite spectral interfaces.

### hhl-phase-estimation-linear-systems
VERDICT: no-drift

Order 2264. QA-26's HHL solver conditions, eigenvalue cutoff, output semantics, and cost route have the declared phase estimation, amplification, Hamiltonian simulation, and spectral suppliers.

### block-encoding-linear-systems-and-variable-time-amplification
VERDICT: no-drift

Order 2266. QA-27's inverse-polynomial and variable-time solver route has QA-24/26, block encodings, circuit access, and spectral suppliers.

### quantum-spectral-estimation-and-matrix-functions
VERDICT: no-drift

Order 2268. QA-28's eigenvalue/singular-value estimation and matrix-function guarantees have the declared phase-estimation, simulation, QSVT, block-encoding, measurement, and complexity interfaces.

### quantum-sampling-expectation-and-monte-carlo
VERDICT: no-drift

Order 2270. QA-29's expectation and Monte Carlo comparisons have amplitude estimation, probability/expectation, independence, sampling, and output-cost suppliers.

### quantum-optimization-sdp-and-variational-algorithms
VERDICT: no-drift

Order 2272. QA-30's MMW/Gibbs/SDP and variational claims have the declared matrix-function, sampling, and robust-covariance suppliers. In particular, the published Golden–Thompson supplier is already in the closure through `robust-covariance-and-high-dimensional-stability` (order 1910).

### period-hidden-shift-and-number-theoretic-algorithms
VERDICT: no-drift

Order 2274. QA-31's period, hidden-shift, and number-theoretic extensions have the declared order-finding, abelian HSP/Fourier, group, arithmetic, and oracle interfaces.

### quantum-complexity-classes-and-oracle-separations
VERDICT: no-drift

Order 2276. QA-32's uniform EQP/BQP/ZQP and oracle-separation claims have the declared complexity, counting, reduction, uniform-circuit, probability, and query-cost suppliers.

### qma-verification-and-local-hamiltonian
VERDICT: no-drift

Order 2278. QA-33's QMA and local-Hamiltonian route explicitly includes local projection, clock-gap, penalty, locality, and reduction lemmas; declared spectral, circuit, witness-state, measurement, and complexity suppliers cover their external prerequisites.

### algorithm-composition-precision-and-dequantization
VERDICT: no-drift

Order 2280. QA-34's composition and precision claims have the declared channel, trace-distance, state-preparation, circuit, probability, and synthesis interfaces.

### quantum-communication-and-fingerprinting
VERDICT: no-drift

Order 2282. QA-35's finite-dimensional protocols and communication bounds have the declared state, measurement, register, trace-distance, classical-probability, and circuit-cost suppliers.

### adiabatic-computation-and-circuit-equivalence
VERDICT: no-drift

Order 2284. QA-36's finite-path, minimum-gap, schedule, and circuit-equivalence scope has the declared Hamiltonian simulation, spectral, state, measurement, walk, and circuit suppliers; the theorem's regularity and gap conditions remain explicit proof hypotheses.

## Validation results

- `node tools/drift-review-check.mjs --run quantum-computing-algorithms-60-2026-10-15 --before-apply`: passed; 60 pages reviewed, decisions valid, no exact owner-resolved blockers. Materialization and buildability remain engine-owned/pending.
- `node tools/validate-plan.mjs research/plan-spec.json --run quantum-computing-algorithms-60-2026-10-15`: passed declared page-order validation; 120 selected pages, 0 new items, no page-order cycles or forward prerequisites. The validator notes that all 120 page rows are still page-only (`items[]` empty), so item dependencies are not asserted by the canonical plan yet; it also emits redundant-prerequisite advisories.
