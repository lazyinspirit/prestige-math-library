# Information Theory pathway — draft

Status: draft-planning. Each A page is paired with a B page of worked examples
and counterexamples. B pages are leaves: they do not supply later A pages.
Existing library prerequisites remain linked as external context and are not
re-authored here.

## Foundations

1. IT01 Finite-Alphabet Entropy and Divergence.
2. IT02 Measure-Theoretic Information and Conditioning.
3. IT15 Method of Types and Finite Large Deviations.
4. IT16 F-Divergences, Rényi Information, and Hypothesis Testing.

Finite probability identities come first. General entropy is KL-based and
remains separate from differential entropy. Standard-Borel hypotheses,
conditional-kernel versions, support, and extended-real conventions are made
explicit before general chain rules and variational or testing results.

## Lossless source coding

5. IT03 Prefix Codes and Finite Lossless Coding.
6. IT04 IID Lossless Source Coding and the AEP.
7. IT05 Stationary Ergodic Sources and Universal Coding.

Finite code inequalities precede the IID asymptotic theorem. Stationary/AMS
entropy rates and SMB are separate from IID AEP. LZ78 expected-rate,
individual-sequence finite-state, and LZ77 phrase-length claims retain their
own source hypotheses and operational overhead.

## Lossy source coding

8. IT06 Rate Distortion and Lossy Source Coding.
9. IT18 Lossy Source Coding with Side Information.
10. IT23 Finite Quantization, Lloyd Iteration, and Compact Companders.

Operational distortion and the information rate-distortion function are
separate from particular exact formulae and algorithms. Finite-alphabet BA
uses a proved objective and certified gap. Wyner–Ziv's decoder-only
side-information theorem is separate from Berger–Tung's multiterminal inner
bound.

## Point-to-point channels and separation

11. IT07 Discrete Memoryless Channel Capacity.
12. IT08 Cost-Constrained, Gaussian, and Feedback Channels.
13. IT09 Finite-Blocklength Bounds and Reliability.
14. IT17 Point-to-Point Source–Channel Separation.

The finite channel model, code, and error criterion precede capacity. Cost,
continuous alphabets, feedback, one-shot bounds, and normal approximations
retain their premises. Separation is stated for its asymptotic memoryless
models; it does not assert finite-block or zero-delay equivalence.

## Networks and secrecy

15. IT10 Distributed Source Coding.
16. IT11 Multiuser Channel Networks.
17. IT19 Relay and Interference Channel Bounds.
18. IT12 Secrecy and Information Privacy.

The k-source Slepian–Wolf, product-input MAC, and degraded broadcast regions
are exact in their stated models. Relay and general interference claims are
kept as inner or outer bounds except for named exact regimes. Wiretap secrecy
metrics and finite-source privacy models are defined before the corresponding
capacity and extraction bounds.

## Quantum information and communication

19. IT13 Quantum Information Measures.
20. IT20 Quantum Relative Entropy, Data Processing, and Strong Subadditivity.
21. IT14 Quantum Source Compression and Classical Communication over Quantum
    Channels.
22. IT21 Quantum Channel Capacities and Entanglement Assistance.
23. IT22 Quantum Key Distribution and Composable Secrecy.

Finite-dimensional matrix/state/channel interfaces are reused with the root
linear-first inner-product convention. Quantum relative-entropy DPI and strong
subadditivity have a dedicated operator proof ladder. Schumacher, HSW,
regularized channel-capacity, degradable, and QKD theorems state dimension,
support, error, secrecy, authentication, and asymptotic assumptions. No
finite-dimensional result silently supplies an infinite-dimensional
energy-constrained theorem.

## Finite decoding algorithms

IT24 Finite Trellises, Viterbi, and Sequence Decoding follows finite code definitions. Finite layered dynamic programming is independent of asymptotic channel-capacity theorems; posterior sequence MAP additionally requires a finite HMM and positive evidence. Its B companion distinguishes sequence MAP from coordinate marginal MAP.
