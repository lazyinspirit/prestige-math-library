# Information Theory coverage ledger

Status: independently repaired research scaffold, 2026-10-17. All six source lanes and their scoped proof supplements have been incorporated and independently checked within the exact item contracts. Source read extents below are lane-reported; audit/final-report.md states the independent auditor's actual reading limits. No production acceptance is asserted.

## Coverage by proposed A/B pair

| Pair | Mathematical scope | Primary source lanes | Current-library interface | Main proof/assumption gate |
|---|---|---|---|---|
| IT01 | finite entropy/KL, log-sum, conditional entropy, Fano, finite DPI | r1, r5 | QA finite entropy; published KL/nonnegativity; finite probability/statistics | finite sums, support zeros, natural-log units, equality and Markov hypotheses |
| IT02 | general law entropy, MI/CMI, conditional kernels, KL partitions/variational formula | r1 | KL/RN, conditional expectations, kernels/RCD/disintegration, standard Borel | general entropy `H(X)=I(X;X)` is distinct from differential entropy; explicit kernel versions; no `∞−∞` |
| IT15 | types, type-class bounds, finite Sanov | r2, r3 | finite combinatorics, finite KL, concentration/probability | exact finite alphabets, polynomial factors, threshold and limit regimes |
| IT16 | f-divergence, Rényi, testing, likelihood ratios | r1, r3 | general KL, finite/statistical testing | singular mass, endpoint conventions, beta orientation, variational domains |
| IT03 | prefix/UD codes, Kraft–McMillan, Shannon/Huffman, arithmetic coding | r2 | published binary prefix and Kraft interfaces | finite source alphabet, exact decoder, ties/EOF, arithmetic precision and resource model |
| IT04 | finite-IID AEP and lossless source coding | r2, r1 | product probability, WLLN/SLLN, finite entropy | positive-probability support, information-density moment, fixed-length and error criterion |
| IT05 | finite-alphabet stationarity/AMS, entropy rates, SMB, LZ | r2, r1 | stationary process/shift, ergodic theorem, probability kernels | IID versus stationary versus AMS; LZ78 expected, LZ78 finite-state, and LZ77 ergodic claims stay distinct |
| IT06 | operational and finite-memoryless/ergodic rate-distortion, BA | r4, r1 | convexity/Jensen, Gaussian/statistical tools | bounded additive distortion and stationarity; finite BA full support/certified gap; continuous formulas remain restricted |
| IT07 | finite DMC capacity, converse, achievability, strong converse | r3, r1 | finite entropy, KL, Fano/testing, finite probability | finite alphabets, average/maximal error; strong converse only with source-supported alphabet conditions |
| IT08 | cost, scalar/vector AWGN, Gaussian entropy, feedback | r3, r4 | Gaussian probability/statistics, linear algebra, convex optimization | real/complex normalization, average/per-codeword cost, covariance and feedback conditions, nonattainment |
| IT09 | DT, RCU/meta-converse, dispersion, normal approximation, exponents | r3 | Neyman–Pearson testing and likelihood ratios | exact beta orientation, average/maximal error, multiple CAID dispersion, support and cost regimes |
| IT17 | point-to-point source-channel separation | r4, r3, r2 | lossless/lossy source coding and DMC capacity | finite-memoryless source/channel and asymptotic criteria; no finite-block or zero-delay claim |
| IT10 | finite-IID k-source Slepian–Wolf | r5, r1 | finite entropy, finite probability, product measures | all-subset inequalities, conditional-typical-set counting, independent bins, genie/Fano converse |
| IT18 | Wyner–Ziv and Berger–Tung | r4, r5 | general/finite MI, rate-distortion, conditional laws | exact Wyner–Ziv model and cardinality; Berger–Tung is an inner bound only |
| IT11 | product-input DM-MAC, separate continuous AWGN-MAC, degraded BC exact regions | r5, r3 | conditional entropy/MI, finite DMC, Gaussian maximum entropy | independent messages, Gaussian power/code model, public time-sharing, physical degradedness |
| IT19 | relay inner/outer bounds, noisy network coding, interference bounds | r5, r3 | conditional MI and DMC | decode/compress-forward and cut-set are bounds; exact interference only under named regimes |
| IT12 | classical wiretap, resolvability, leftover hashing, privacy utility | r6, r1 | general KL/MI, testing, finite probability | weak vs strong secrecy; auxiliary distributions; output-length leakage condition; model-specific privacy |
| IT13 | finite quantum entropy/QRE definitions and entropy identities | r6 | published finite QC states/channels/POVMs, spectral theorem, trace | support condition; root inner product linear in first argument; finite dimensionality |
| IT20 | QRE DPI, SSA, conditional MI, Holevo measurement bound | r6; independent ladder by auditor | finite spectral/trace/positive operators and CPTP maps | explicit resolvent/Jensen/support/joint-convexity suppliers; no citation-only Lieb/interpolation jump |
| IT14 | Schumacher and HSW classical communication over cq channel | r6 | finite quantum states, measurements, entropy inequalities | finite input/output systems, iid source/channel, asymptotic error and code model |
| IT21 | quantum/private capacities, EA capacity, degradable/erasure cases | r6 | QRE, QC channels, codes/recovery | regularization and superadditivity/Fekete; additive EA; no general single-letter/private additivity claim |
| IT22 | composable QKD security | r6 | finite measurement/channel model and classical/quantum trace distance | authenticated transcript, abort weighting, ideal/real Eve distance, separate correctness |
| IT23 | finite quantizers, exact finite Lloyd/global search, restricted compact compander high-rate limit | r4 context; independent auditor local proofs | finite sums, Borel maps, real calculus and Holder | exact comparisons; finite empirical domain; positive C1 compact 1D densities; no general vector/overload claim |
| IT24 | finite trellis/Viterbi and HMM sequence MAP | r2/r4 context; independent auditor local proofs | finite graph, finite probabilities, logarithms | finite layers, no minus infinity, deterministic ties, positive posterior evidence |

## Source reading and evidence status

| Lane | Source extent reported by lane | Supplementary proof evidence | Handoff |
|---|---|---|---|
| r1 | Gray corrected author-hosted *Entropy and Information Theory*, full consecutive PDF pp. 1–324; van Erven–Harremoës v2 paper, full pp. 1–24 | Gray corrected *Probability, Random Processes, and Ergodic Properties*, only complete relevant proof spans pp. 127–133 and 156–160; EIT targeted reread pp. 59–67; local AMS/component-mixture proof notes | ready: `researchers/r1/{source-manifest,reading-ledger,findings,supplier-map,ready}.json/md` plus `ams-nonergodic-smb-proof-notes.md` |
| r2 | MacKay v7.2 fourth printing, full consecutive pp. 1–640 including appendices/reference matter; Moffat–Neal–Witten arithmetic paper pp. 1–39; Stanford EE376C LZ note pp. 1–11; Gray corrected EIT Ch. 3 pp. 47–70 | Ziv–Lempel 1978 complete 7-page scan; Kontoyiannis 1998 complete 16-page visual read, recurrence theorem and overlapping match-length inversion | ready: `researchers/r2/{source-manifest,reading-ledger,findings,supplier-map,ready}` |
| r3 | Polyanskiy–Wu authorized author draft, substantive pp. 1–696; PPV manuscript pp. 1–121; Cao–Tomamichel correction pp. 1–6; Shannon scan pp. 1–46 | Vershynin v2 complete 17-page read and independent-array/Fourier Berry–Esseen proof; r3 has supplied a separate complete finite-DMC O(log n) consumer proof development | ready core, Berry–Esseen supplement, and complete scoped DMC normal-approximation proof note; independently checked and integrated within the stated regimes |
| r4 | Gray *Source Coding Theory* complete 197-page read | MIT 6.441 S16 Chs. 23–25; Wyner–Ziv 1976; Equitz–Cover 1991, full reads; independent finite BA convergence/certificate proof | ready |
| r5 | El Gamal–Kim historical arXiv v3 complete 641-page read; all 13 Stanford EE376B decks | ETW, WTV, and NNC primary articles complete reads | ready |
| r6 | Wilde v8 substantive text/appendices pp. 1–745; bibliography/index not claimed complete | Devetak 2004 and Portmann–Renner 2014 complete reads; finite QRE operator ladder independently developed | ready |

The exact source edition, page locators, hashes, extraction/read limits and published supplier status are in each lane’s `source-manifest.json`, `reading-ledger.json`, `findings.md`, `supplier-map.json`, and `ready.json`. The integrator index is `source-manifest.json`. The auditor’s source, AMS, entropy-affinity and dependency notes remain in `audit/` and are read-only to the integrator.

## Proof scope and remaining work

The canonical local developments now cover the named finite/standard-Borel foundations, finite and stationary source coding, constrained procedures, bounded finite-source stationary RDF, finite WZ/BT, scalar Gaussian two-encoder expected-MSE region, point-to-point bounds and the scoped normal approximation, finite and Gaussian MAC/BC/relay/interference bounds, strong secrecy, and finite-dimensional quantum coding/security. The ETW development includes the exact nine-facet projection and a constructive union of decoding/prefix schemes; it does not claim a false fixed-split seven-facet projection.

Production item carriers have not been authored or accepted. That editorial work is separate from mathematical proof gaps. The inventory's `unresolved_obligations` records only remaining local mathematical gaps, not the absence of production carriers.

Unused broader results remain outside the proved contracts: bare setwise AMS needs a probability-stationary-mean bridge; the reliability converse endpoint, cost/zero-dispersion normal approximations, unrestricted stationary/unbounded distortion, general exact network regions, and infinite-dimensional quantum coding require separate work. These are not logical premises. General quantum nonadditivity is retained as source context, while the B-page example proves only the explicit fixed-input coherent-information limitation. Dated source remarks do not certify a present open-problem classification.

The final journal Gaussian NNC claim is the simultaneous nonnegative clipped `0.63N` coordinate approximation. The older sharper per-cut quantities remain proved RHS comparisons; the obsolete preprint vector wording is nonlogical source history. Quantization, Viterbi, finite-window LZ77 and static finite-register arithmetic coding have explicit algorithms, resource bounds, termination and correctness proofs within their stated domains.
