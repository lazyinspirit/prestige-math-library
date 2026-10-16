# Information Theory prerequisite audit

Status: independently expanded supplier audit, 2026-10-17. This is a current-tree supplier
inspection, not a whole-library mathematical recertification. Status and home
were read from current root item/page carriers. Only `published` items are
treated as completed logical suppliers; items with draft/default status and
unregistered plans do not close a prerequisite. Root owns any published-source
or hash correction.

## Exact reusable information-theory and probability suppliers

| Existing item — current status and path | Actual contract interface | Scaffold use / limit |
|---|---|---|
| `def-qa-35-finite-probability-entropy-and-stochastic-matrices` — published; [`library/quantum-algorithms/quantum-communication-and-fingerprinting.md`](../../library/quantum-algorithms/quantum-communication-and-fingerprinting.md) | Finite probability vectors on `[k]`, Shannon entropy in nats with `0 ln 0 = 0`, finite KL with `+∞` when `p_i>0=q_i`, and row-stochastic matrices. | Reuse as the finite definition interface; local IT results prove chain rules, log-sum, Fano, data processing and operational theorems. This item does not define general measurable-space entropy or MI. Its actual dependency is finite probability; its home page has additional communication prerequisites that are page context, not new entropy premises. |
| `def-kullback-leibler-divergence` — published; [`library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`](../../library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md) | Directional relative entropy for probability measures on one measurable space; value `+∞` if `P` is not absolutely continuous with respect to `Q`; otherwise integrate the log of an RN density against `P`, with finite negative part and representative invariance. Its carrier explicitly assumes AC through the RN interface. | Reuse for general measurable KL, with the AC assumption carried to every consumer that cites it. For finite distributions, provide a choice-free explicit finite RN representative and state the conditional bridge separately; do not erase the published definition's AC clause. |
| `thm-kullback-leibler-is-nonnegative` — published; [`library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md`](../../library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md) | General directional KL nonnegativity and equality iff the probability laws agree, under AC; also a normalized-density variational identity with explicit absolute-integrability hypotheses. | Reuse where its exact AC/RN hypotheses are acceptable. Its density identity is not a general posterior-existence result. |
| `thm-pinsker` — published; [`library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`](../../library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md) | Sharp arbitrary-measurable-space event-supremum total variation: `sup_A |P(A)-Q(A)| ≤ sqrt(D(P||Q)/2)` for natural-log KL, assuming AC. | Reuse rather than duplicate the general Pinsker theorem. The factor convention and nats are part of the supplier. |
| `thm-product-kl-additivity` — published; [`library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`](../../library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md) | KL additivity for finite products of arbitrary measurable probability spaces under AC, including the singular-factor `+∞` case. | Reuse for memoryless products and finite independent experiments; it does not establish asymptotic coding theorems. |
| `def-mutual-information-for-finite-hypothesis-testing` — published; [`library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`](../../library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md) | MI for a finite *uniform* hypothesis index and an arbitrary measurable observation, defined as the average KL to its mixture law. | Reuse only for uniform finite testing. Nonuniform prior MI, general `D(P_XY||P_X⊗P_Y)`, and conditional MI receive local definitions. |
| `thm-fano-packing` — published; [`library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`](../../library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md) | Finite uniform-prior hypothesis testing/minimax risk lower bound under a reference-law KL bound, arbitrary randomized decision kernels, metric separation, and explicit loss conversion. | Reuse only for the minimax testing claim. It is not the generic entropy Fano inequality; IT01 proves that inequality locally. |
| `lem-weighted-pinsker-inequality-for-probability-laws` — published; [`library/bayesian-computational-statistics/langevin-monte-carlo-mala-and-ula.md`](../../library/bayesian-computational-statistics/langevin-monte-carlo-mala-and-ula.md) | Weighted TV bound for Borel probability laws on `R^d`, Borel `W≥1`, finite second moments, and directional KL, with a nonsharp constant. | Reuse only in a matching Euclidean weighted application. It is not the sharp arbitrary-space Pinsker supplier. |

## Probability, kernels, and ergodic foundations

| Existing page and exact inspected items | Interface | Limits that remain local to Information Theory |
|---|---|---|
| [`library/probability/probability-spaces-random-variables-and-expectation.md`](../../library/probability/probability-spaces-random-variables-and-expectation.md): `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-change-of-variables-for-expectation`, `thm-jensen-inequality-for-expectation` — published. | Measurable random elements, push-forward laws, expectation as a Lebesgue integral, change of variables, finite and general Jensen interfaces. | Provides probability and integration primitives; entropy and code definitions remain explicit. |
| [`library/probability/conditional-distributions-and-regular-conditional-probability.md`](../../library/probability/conditional-distributions-and-regular-conditional-probability.md): `def-measure-kernel-and-probability-kernel`, `thm-measurability-of-integration-against-a-kernel`, `def-regular-conditional-distribution`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-conditional-integration-through-a-regular-conditional-law` — published. | Kernel integration and measurability; standard-Borel target existence; joint-law disintegration; conditional integration. | Conditional MI and rate-distortion extensions state standard-Borel hypotheses and prove product-kernel measurability/version invariance locally. Do not assume an arbitrary measurable target admits a regular conditional law. |
| [`library/probability/conditional-expectation.md`](../../library/probability/conditional-expectation.md): `def-conditional-expectation-given-a-sigma-algebra`, `thm-conditional-jensen-inequality`, `thm-tower-property-of-conditional-expectation` — published. | Conditional expectation as an a.e. class and conditional convexity. | A measurable function of a conditioning variable requires a standard-Borel factorization interface; an a.e. class is not a canonical pointwise kernel. |
| [`library/probability/markov-kernels-and-markov-chains.md`](../../library/probability/markov-kernels-and-markov-chains.md): `def-conditional-independence-given-a-sigma-algebra`, `def-measure-kernel-and-probability-kernel`, `thm-ionescu-tulcea-construction-of-a-markov-chain` — published. | Conditional independence and kernels; countable path-law constructions under stated measurable conditions. | Finite Markov DPI/equality is proved from finite conditional entropy; kernel CMI uses the explicit same-marginal product law. |
| [`library/probability/stationary-markov-chains-and-ergodic-limits.md`](../../library/probability/stationary-markov-chains-and-ergodic-limits.md): `def-stationary-process-and-canonical-shift` — published. [`library/measure-theory/measure-preserving-systems-and-mixing-criteria.md`](../../library/measure-theory/measure-preserving-systems-and-mixing-criteria.md): `def-ergodic-measure-preserving-system`, `thm-mixing-implies-weak-mixing-implies-ergodicity` — published. [`library/measure-theory/the-ergodic-theorems-of-von-neumann-and-birkhoff.md`](../../library/measure-theory/the-ergodic-theorems-of-von-neumann-and-birkhoff.md): `thm-birkhoff-ergodic-theorem`, `thm-birkhoff-limit-identification-on-finite-measure-spaces`, `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`, and `thm-stationary-process-birkhoff-ergodic-limit` — published. | Pointwise averages, identification of their limit with conditional expectation onto the invariant sigma-field, and finite-measure L1 convergence, under each item’s integrability/AC premises. | IT05 locally proves finite-alphabet SMB, measurable component kernels and coding statements; the general Birkhoff theorem alone does not supply those results. |

## Coding, convexity, and inference interfaces

| Existing page/items — current status | Actual interface | Scaffold decision |
|---|---|---|
| [`library/computability-theory/formal-languages-encodings-and-decision-problems.md`](../../library/computability-theory/formal-languages-encodings-and-decision-problems.md): `def-effective-binary-encoding-and-decoder` — published. [`library/computability-theory/kolmogorov-complexity-and-algorithmic-randomness.md`](../../library/computability-theory/kolmogorov-complexity-and-algorithmic-randomness.md): `def-prefix-free-machine-and-prefix-complexity`, `thm-kraft-inequality` — published. | Effective binary encodings and prefix-free sets; binary Kraft inequality and effective request allocation for c.e. request lists. | Reuse the binary prefix inequality where its statement fits; still prove McMillan for uniquely decodable codes, Shannon/Huffman optimality, arithmetic coder correctness, and operational source-coding results. These computability suppliers do not supply Shannon code optimality. |
| [`library/real-analysis/convexity.md`](../../library/real-analysis/convexity.md), [`library/real-analysis/convex-and-semicontinuous-functions-on-rn.md`](../../library/real-analysis/convex-and-semicontinuous-functions-on-rn.md), and [`library/probability/conditional-expectation.md`](../../library/probability/conditional-expectation.md): `thm-jensen-inequality-for-expectation`, `thm-conditional-jensen-inequality`, convexity definitions and finite-dimensional separation suppliers — published. | Scalar and conditional Jensen; convexity, lower semicontinuity, and finite-dimensional optimization interfaces. | The finite log-sum inequality is proved with precise zero conventions. BA optimality/stopping results remain IT-local and finite-alphabet. |
| [`library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md`](../../library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md) and `library/mathematical-statistics/likelihood-asymptotics-wald-score-and-likelihood-ratio.md` — published pages. | Randomized tests, likelihood ratios, asymptotic likelihood frameworks. | The one-shot testing function `β_{1−ε}` needs an IT definition that fixes the optimization/rejection convention; the IT meta-converse is proved with that convention and average error. |

## Quantum and operator interfaces

| Existing page and exact items — current status | Interface | Remaining obligations |
|---|---|---|
| [`library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`](../../library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md): `def-non-negative-and-positive-operator`, finite-dimensional complex spectral theorem, positive square root and SVD items — published. [`library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md`](../../library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md): `def-trace-of-an-endomorphism`, cyclic trace — published. | Finite-dimensional operator positivity, eigenvalues, logarithm by spectral calculus, and trace. | Quantum entropy and quantum relative entropy are new; use only finite-dimensional spaces, nonzero state systems, and explicit support projections. |
| [`library/functional-analysis/hilbert-space-geometry-and-riesz-representation.md`](../../library/functional-analysis/hilbert-space-geometry-and-riesz-representation.md): `def-real-and-complex-inner-product-space` — published; [`library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md`](../../library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md): `def-qc-density-operator`, finite density/spectral-ensemble/purification items — published. | Root inner products are linear in the first argument; QC state interface is finite-dimensional. | Translate any ket/bra formula into the root convention explicitly. Do not import unbounded/infinite-dimensional state claims. |
| [`library/quantum-computing/channels-kraus-choi-and-stinespring-representations.md`](../../library/quantum-computing/channels-kraus-choi-and-stinespring-representations.md): `def-qc-quantum-channel`, `def-qc-choi-matrix`, `thm-qc-kraus-choi-equivalence`, finite Stinespring and channel-composition items — published. | Finite-dimensional CPTP maps; Choi order is input factor first, output factor second. | Quantum relative entropy/DPI, SSA, Holevo bounds, and quantum capacities are not supplied by CP/TP definitions alone. |
| [`library/quantum-computing/measurements-povms-and-instruments.md`](../../library/quantum-computing/measurements-povms-and-instruments.md) and [`library/quantum-computing/trace-distance-fidelity-and-information-limits.md`](../../library/quantum-computing/trace-distance-fidelity-and-information-limits.md): finite POVM/instrument definitions, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-fidelity-data-processing-and-equality` — published. | Finite measurement outcome laws, state updates, trace distance and fidelity contractivity. | Fidelity/trace-distance DPI does not imply quantum relative-entropy DPI. The latter needs its own finite operator proof ladder, support regularization, and consumer audit. |
| [`library/quantum-computing/classical-and-quantum-error-correcting-codes.md`](../../library/quantum-computing/classical-and-quantum-error-correcting-codes.md), [`library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes.md`](../../library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes.md), and [`library/quantum-computing/bell-states-teleportation-and-dense-coding.md`](../../library/quantum-computing/bell-states-teleportation-and-dense-coding.md) — published. | Finite quantum code and recovery interfaces, teleportation, dense coding. | These supply finite coding objects and applications, not Schumacher, HSW, LSD, or entanglement-assisted capacity proofs. |

## Confirmed gaps and non-suppliers

Targeted repo-wide ID/title inspection found no published root item defining a
general mutual information `D(P_XY || P_X⊗P_Y)`, a general conditional MI, a
conditional KL kernel-integral theorem, Shannon–McMillan–Breiman, source
coding theorem, rate-distortion theorem, DMC capacity theorem, Slepian–Wolf,
general MAC/BC/relay capacities, wiretap secrecy capacity, quantum entropy,
quantum relative entropy, Holevo capacity, or a quantum Shannon coding theorem.
Each remains a local proposal with an actual proof route and standard source
locators; this inventory finding is subject to the independent auditor's
repo-wide check.

The following are explicitly *not* accepted as broader suppliers:

- `def-mutual-information-for-finite-hypothesis-testing` is only the uniform
  finite-hypothesis experiment. It does not settle general MI or CMI.
- `thm-fano-packing` is a minimax testing/risk result. IT01's entropy Fano
  inequality is separate.
- `lem-weighted-pinsker-inequality-for-probability-laws` is a weighted
  `R^d` result with a nonsharp constant and moment assumptions. Sharp general
  Pinsker is supplied by `thm-pinsker`.
- `def-effective-binary-encoding-and-decoder` and `thm-kraft-inequality`
  define binary/computability interfaces only; they do not prove
  McMillan, Huffman optimality, arithmetic-coder precision, or a source-coding
  theorem.
- Quantum state/channel and fidelity/trace-distance items are
  finite-dimensional and cannot discharge QRE, SSA, Holevo, HSW, or general
  quantum-capacity claims without a separate argument.
- No existing statistical, physics, or planned information-theory statement
  is a supplier merely because its title is relevant. Physics paths and
  unproved proposed claims never enter the root mathematical dependency graph.

## Current repair and closure questions

Before audit handoff, the exact transitive deps of every reused supplier must
be resolved from current published IDs, including AC for the general KL family,
standard-Borel existence for kernel results, and finite-dimensional root
operator conventions for quantum results. `pages.json` is a path-level
orientation; it is not itself proof that an item-level transitive closure is
complete. The independent auditor must check every proposed item and its
affected consumers, especially the general conditional-KL construction,
stationary SMB/AEP, Markov source coding, finite BA convergence, channel
meta-converse, network rate regions, and finite quantum QRE data processing.


The root probability/measure library has no published ergodic-decomposition, AMS asymptotic/tail domination, or information-theoretic SMB item. The scaffold proposes and locally proves the finite stationary component kernel using countable cylinder Cesaro limits, conditional distributions, Birkhoff limit identification and L1 approximation; it does not treat a source citation as a substitute.


## Independent supplier and prerequisite repairs

The finite core reuses published QA finite entropy and the choice-free finite Jensen inequality; it does not require a measurable-KL bridge merely to prove finite log-sum. Published mathematical-statistics KL/testing/Pinsker, arbitrary-sub-sigma RCD/disintegration, ergodic conditional-expectation and operator/QC/QA suppliers were read at their actual contracts. The nearest-projection theorem supports the locally proved finite-face residual bound; the unrelated Farkas item is draft and is not consumed. The Fourier Berry–Esseen proof retains its actual CC/AC assumptions; the Gaussian-cell smoothing proof uses `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` (CC), and the AWGN information-supremum nonattainment example uses `thm-uniqueness-of-a-law-from-its-characteristic-function` (AC). Finite-dimensional quantum coding uses the actual published purification equivalence, Uhlmann and Fuchs–van de Graaf contracts, together with the local QRE-DPI/SSA and conditional-entropy continuity proofs. Published Hoeffding/mgf suppliers are used within their bounded-independent-variable premises.

Every proposed supplier has one home, precedes local consumers, and has a required-page path to external proposed consumers. All immediate existing-item dependencies are checked as published by the focused inventory check. This is a scoped dependency check, not whole-library recertification.
