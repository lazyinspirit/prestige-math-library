# Batch 97 authoring notes

Run `machine-learning-all-101-2026-10-19`; owner pair `discrete-masked-diffusion-and-reverse-generation` only. All new carriers remain draft.

## Plan and batch evidence

- The assigned task, current owner-authoring direction, complete ML-89 design section, current plan-spec pair, and current batch-level artifact were read. ML-89 and its plan-spec row agree on the six named A-page interfaces, the finite vocabulary/mask convention, the strictly decreasing survival schedule, the single-token posterior, the SUBS-style reverse kernel, the finite cross-entropy identity, the whole-state-space TV telescope, and the three promised B-page examples. The three required pages in the task and manifest agree.
- Current `research/plan-machine-learning-track.md` SHA-256 is `2ebe29e29b45d4585dbf91f8d1789a02f9a6f144339179ddfd4e89d6611de5fc`; the current `plan-spec.json` ML-89 row points to that same hash and reproduces the same finite masking, reverse-kernel, KL, TV-telescope and warning scope. There is no current plan/design conflict. No shared plan or plan-spec file was edited.
- The generated batch task records dispatch scheduling input `c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4`. At final metadata inspection (2026-10-18T22:29:21.088Z), the shared batch-dependency-levels artifact has raw SHA-256 `be1e1abb526c4c11435c55b434a6ae28be61cdcb23a00bd8aecf2f94ebf124b3` and embedded `input_sha256` `ed5ad49f0238e7c3a4c7d41c110f57dee3a15305957bf4e1074042acb3cbb0ae`; its current batch-97 row is level 1, requires ["2"]. The dispatch row agrees with the current artifact row, while the scheduling hash differs. This exact drift is for owner reconciliation; the shared artifact is unchanged.
- Current autopilot status at handoff: running at `1-scaffold`, 53/101 pairs covered, no in-flight writers, with the owner repair/recertification hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. No old handoff was used as current evidence.

## Declared item inventory and logical levels

The scaffold manifest initially declared 10 A-page items and 3 B-page examples/counterexamples. Before authoring the ELBO corollary, its missing joint-model, admissibility, finite product-KL, and backward path-factorization prerequisites were identified and added as five A-page items: a generative-model definition, its normalization lemma, the forward-law admissibility lemma, finite product-KL additivity, and backward finite path factorization. The current manifest therefore declares 15 A-page items and 3 B-page items. Levels use actual in-run `deps` only: 0 with no in-run supplier; otherwise one plus the maximum supplier level.

| Item | Level | Logical in-run suppliers |
|---|---:|---|
| `def-finite-masking-diffusion-chain` | 0 | none |
| `lem-finite-state-kernel-error-controls-mixtures` | 0 | none |
| `lem-finite-product-kl-additivity` | 0 | none |
| `thm-finite-chain-reverse-kernel-error-telescope` | 1 | `lem-finite-state-kernel-error-controls-mixtures` |
| `lem-finite-masking-chain-is-well-defined` | 1 | `def-finite-masking-diffusion-chain` |
| `alg-finite-grid-masked-diffusion-sampler` | 1 | `def-finite-masking-diffusion-chain` |
| `lem-finite-grid-masked-sampler-is-well-defined` | 2 | `alg-finite-grid-masked-diffusion-sampler` |
| `thm-masking-chain-posterior` | 2 | `def-finite-masking-diffusion-chain`, `lem-finite-masking-chain-is-well-defined` |
| `lem-finite-masking-path-reversal-factorization` | 3 | `def-finite-masking-diffusion-chain`, `lem-finite-masking-chain-is-well-defined`, `thm-masking-chain-posterior` |
| `thm-masked-diffusion-kl-reduces-to-cross-entropy` | 3 | `alg-finite-grid-masked-diffusion-sampler`, both finite-chain lemmas, `lem-finite-product-kl-additivity`, `thm-masking-chain-posterior`, and the three current batch-2 ML-01 suppliers |
| `def-finite-masked-diffusion-generative-model` | 3 | `alg-finite-grid-masked-diffusion-sampler`, `def-finite-masking-diffusion-chain`, `lem-finite-grid-masked-sampler-is-well-defined` |
| `lem-finite-masked-generative-joint-law-is-normalized` | 4 | `def-finite-masked-diffusion-generative-model`, `lem-finite-grid-masked-sampler-is-well-defined` |
| `lem-forward-path-is-admissible-for-finite-masked-model` | 4 | `def-finite-masked-diffusion-generative-model`, `def-finite-masking-diffusion-chain`, `lem-finite-masking-chain-is-well-defined` |
| `cor-masked-diffusion-finite-elbo-cross-entropy` | 5 | cross-entropy theorem, generative-model definition/normalization/admissibility, sampler/chain suppliers |
| `rem-discrete-diffusion-factorization-and-endpoint-limits` | 6 | finite ELBO/KL/model suppliers |
| `ex-finite-chain-model-error-accumulates-with-zero-mesh-error` | 2 | `thm-finite-chain-reverse-kernel-error-telescope` |
| `cex-factorized-reverse-kernel-fails-for-correlated-tokens` | 3 | `alg-finite-grid-masked-diffusion-sampler`, `def-finite-masking-diffusion-chain`, `thm-masking-chain-posterior` |
| `ex-masked-diffusion-single-token-posterior` | 3 | `def-finite-masking-diffusion-chain`, `thm-masking-chain-posterior` |

## Supplier interfaces, hypotheses, and decisions

- Read the actual published `def-measure-kernel-and-probability-kernel`: pointwise probability kernels are defined without Choice. Read the actual published `def-time-homogeneous-markov-chain-with-transition-kernel`, `thm-finite-dimensional-laws-of-a-markov-chain`, and complete `thm-ionescu-tulcea-construction-of-a-markov-chain` proof. Those conditional-expectation / countable-product constructions assume Choice. This assignment has finite state spaces and finite horizon, so the local forward path law and reverse sampler are proved directly by finite row sums; no arbitrary-index or countable choice premise is imported.
- Read the actual published `def-total-variation-distance-for-probability-laws` (event-supremum convention, equal to half the finite-state L1 distance) and the complete published `lem-total-variation-coupling-and-kernel-contraction` proof. Its probability-kernel contraction applies to the finite stochastic kernels here. A local mixture-row lemma supplies the distinct `Q` versus `P` kernel-error bound before the telescoping theorem.
- Read the actual published `def-finite-kullback-leibler-divergence`, whose finite-vector convention handles zero support with `+infinity` and needs no Choice. The local per-step identity is stated as an extended-valued equality, so zero model probability on a positive posterior event is recorded as infinite loss rather than hidden by a positivity assumption.
- Read the actual published `def-variational-family-and-elbo` and complete `thm-elbo-kl-decomposition` proof. Its density-ratio identity is choice-free, while its identification with library KL and nonnegativity use AC. The finite cross-entropy theorem remains choice-free; only `cor-masked-diffusion-finite-elbo-cross-entropy` assumes AC, lists `def-axiom-of-choice`, and names the ELBO use.
- Read the actual current batch-2 carriers `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`, including the latter's complete proof. Their draft status is allowed by the run-local direction. The ordinary full-run snapshot returned current `ready` rows for all three; the risk-measurability supplier and the population-risk definition are therefore usable at their exact finite conditional prediction problems. The KL-to-cross-entropy theorem lists all three as direct dependencies.
- The ML-89 finite theorem does not claim an exact reverse for dependent token laws, continuous-time convergence, or variance reduction from the paper's loose use of “Rao–Blackwellization.” The B-page counterexample and A-page remark retain those qualifications. Exact endpoints are required before deleting reconstruction/prior terms; the ELBO corollary states where those terms vanish.

## Source reading and retrieval record

The complete relevant arguments were inspected before authoring. The required `source-fetch-check --stamp` completed successfully: 9/9 page-scoped source entries fetch-verified, 9 newly stamped, 0 failures and 0 drops. Six unique full-text sources cover the A/B pages; source stamps and page scopes are in the source-coverage and source-evidence ledgers.

| Source | URL and locator | Supported assigned items / disposition |
|---|---|---|
| Sahoo et al., *Simple and Effective Masked Diffusion Language Models*, arXiv v1 | `https://arxiv.org/pdf/2406.07524v1`; §3.2.1–3.2.3, Appendix A.2.1–A.2.4 and B.1 | Forward absorbing chain, mask posterior, SUBS sampling, finite diffusion KL and ELBO endpoint terms are included; the paper's continuous-time extension/experiments are out of scope. The authors explicitly use “Rao–Blackwellization” loosely; no variance-reduction theorem is harvested. |
| Austin et al., *Structured Denoising Diffusion Models in Discrete State-Spaces* | `https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`; §3, absorbing-state discussion, Eqs. (2)–(3), §4 text/KL discussion | Independent discrete transition-matrix, absorbing-mask and token-factorization treatment; supports the finite model/posterior/cross-entropy interface. Empirical model-quality claims are out of scope. |
| Polyanskiy and Wu, *Information Theory: From Coding to Learning* | `https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf`; Ch. 2 §2.5, Theorem 2.16(d), tensorization, PDF pp. 33–34 | Independent product-KL additivity treatment; the local lemma supplies the finite support cases explicitly. No general standard-Borel chain rule is used in the proof. |
| Levin and Peres, *Markov Chains and Mixing Times*, 2nd ed. | `https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf`; Ch. 1 §1.1; Ch. 4 §4.1, Props. 4.2 and 4.5 | Finite stochastic rows, total-variation convention, half-L1/event duality and bounded-test-function representation support the local finite-kernel and telescope proofs. No stationary-limit or infinite-chain conclusion is imported. |
| Blei, Kucukelbir, and McAuliffe, *Variational Inference: A Review for Statisticians* | `https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf`; §2.2, Eqs. (11)–(14) | Independent ELBO/reverse-KL identity and lower-bound account for the finite ELBO corollary; source assumptions are checked against the library admissibility definition. |
| Zheng, Hu, and Deng, CMU 10-708 Lecture 13, *Variational Inference II* | `https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf`; full 9-page PDF retrieved, §2.3.2 read in full | Independent Jensen and log-evidence derivation for the ELBO; used as a secondary treatment, not as a replacement for the library proof. |

`tools/source-resolution.mjs` found no source-resolution record to add: no retrieval failure, source drop, or alternative proof is being claimed. The actual fetch result and any recovery attempts will be copied into the coverage/evidence ledgers after the required fetch check.

## Item checkpoints

Items are recorded here after each carrier is complete. At initial checkpoint, the inventory and dependency graph are declared.

### `def-finite-masking-diffusion-chain` — complete

- **Claim/convention:** Finite clean vocabulary $V$, separate absorbing mask $m$, length $L\ge1$, finite strict grid $0=t_0<\cdots<t_N=1$, survival $1=\alpha_0>\cdots>\alpha_N=0$, and data probability vector on $V^L$. Each clean coordinate survives step $j$ with $r_j=\alpha_j/\alpha_{j-1}$; sequence transition rows are products. The statement fixes the entire conditional finite-path mass and independence convention.
- **Dependencies/level:** `def-measure-kernel-and-probability-kernel`; level 0. `lem-finite-masking-chain-is-well-defined` is the separate `justified_by` supplier and will prove the finite path mass is normalized; it is not a `deps` edge.
- **Sources:** Sahoo et al., arXiv v1 §3.2.1 (`https://arxiv.org/pdf/2406.07524v1`); Austin et al. §3 (`https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`). The one-coordinate TikZ graph is explicitly tied to the displayed row probabilities; no proof relies on it.
- **Decision/evidence:** Use finite row products rather than the general infinite-path Ionescu–Tulcea supplier; this keeps the construction choice-free. Source-body review complete; source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-state-kernel-error-controls-mixtures` — complete

- **Claim/convention:** For finite $S$ and probability kernels $Q,P$, a uniform event-supremum TV row bound $\varepsilon$ controls every common input mixture by the same $\varepsilon$. This is the specific `Q`-versus-`P` ingredient that ordinary same-kernel contraction does not provide.
- **Dependencies/level:** `def-measure-kernel-and-probability-kernel`, `def-total-variation-distance-for-probability-laws`; no in-run suppliers, level 0.
- **Proof:** Fixed-event expansion of the finite mixture, row-TV bound, then event supremum. No Choice or diagrams used.
- **Source:** Levin and Peres, *Markov Chains and Mixing Times*, Ch. 4 §4.1, Props. 4.2 and 4.5, `https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf`; the local finite proof is complete and does not rely on the book as a proof substitute.
- **Decision/evidence:** Full current published TV and probability-kernel definitions were read. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-product-kl-additivity` — complete

- **Claim/convention:** For finite product probability vectors, directional KL is the sum of factor KLs, including the singular case where one factor has positive source mass at a zero reference mass.
- **Dependencies/level:** `def-finite-kullback-leibler-divergence`; no in-run supplier, level 0.
- **Proof:** Split on factorwise support. In the singular branch, choose positive-source points in the other finite factors and obtain a positive product source mass over zero reference mass. Otherwise factor the log likelihood ratio and sum out the other coordinates.
- **Source:** Polyanskiy and Wu, *Information Theory: From Coding to Learning*, Ch. 2 §2.5, Theorem 2.16(d), `https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf`; the source's tensorization result is specialized to finite products, with a complete local support-boundary proof.
- **Decision/evidence:** This explicit local result replaces an inline undeclared product-KL step in the cross-entropy theorem. Source body and full relevant chain-rule reasoning were inspected; fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-masking-path-reversal-factorization` — complete

- **Claim/convention:** On each positive finite path, the conditional law of the predecessor given the current state and all later states equals the one-step posterior given the current state; multiplying these conditional probabilities gives the reversed path factorization.
- **Dependencies/level:** finite masking definition and path law plus `thm-masking-chain-posterior` (level 2); item level 3.
- **Proof:** The future transition product is constant in the predecessor once the current state is fixed, so it cancels from the conditional ratio. Repeated finite conditioning yields the product identity.
- **Source:** Sahoo et al., Appendix A.2 (`https://arxiv.org/pdf/2406.07524v1`); the full finite cancellation proof is local and uses no infinite-chain theorem.
- **Decision/evidence:** Positive-path restriction avoids conditional probabilities on null suffixes. No Choice or regular-conditional-law premise. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `thm-finite-chain-reverse-kernel-error-telescope` — complete

- **Claim/convention:** For reverse kernels indexed $N,\ldots,1$, an initial TV discrepancy and uniform whole-state-space row errors bound the endpoint discrepancy by their sum, clamped at one. No marginal-token error is substituted for a full-sequence kernel error.
- **Dependencies/level:** `lem-finite-state-kernel-error-controls-mixtures` (in-run level 0), published `lem-total-variation-coupling-and-kernel-contraction`, `def-total-variation-distance-for-probability-laws`, and probability-kernel definition; item level 1.
- **Proof:** At each step insert $\nu_jQ_j$; apply same-kernel contraction and the local mixture-row bound, then telescope and use $\operatorname{TV}\le1$. Boundary cases $N=1$, zero errors, and sum at least one are stated.
- **Source:** Levin and Peres, *Markov Chains and Mixing Times*, Ch. 1 §1.1 and Ch. 4 §4.1, Props. 4.2 and 4.5, `https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf`. The proof is complete locally; no convergence-to-stationarity result is used.
- **Decision/evidence:** Current published contraction lemma and total-variation convention were inspected in full. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-masking-chain-is-well-defined` — complete

- **Claim/convention:** Every finite sequence-state row is stochastic; backward finite summation normalizes the conditional path law and averaging over the clean-data probability vector normalizes the joint law.
- **Dependencies/level:** `def-finite-masking-diffusion-chain` (in-run level 0) and published `def-measure-kernel-and-probability-kernel`; level 1. This is the explicit `justified_by` result for the definition.
- **Proof:** One-coordinate row sums, product row sums, then finite backward summation over the path coordinates. The proof is choice-free and includes the empty mask/token branches through the stated zero entries.
- **Sources:** Sahoo et al., §3.2.1 (`https://arxiv.org/pdf/2406.07524v1`); Levin and Peres, Ch. 1 §1.1 (`https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf`). Source-body review complete; fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Decision/evidence:** The finite direct construction is used instead of the published infinite-path Ionescu–Tulcea theorem, whose actual proof uses Choice. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `alg-finite-grid-masked-diffusion-sampler` — complete

- **Claim/convention:** The sampler starts at $m^L$, applies a finite reverse grid, uses $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$, copies unmasked positions, and conditionally samples each masked position independently from its own clean-vocabulary vector. The full row kernel and random-source law are explicit; $c_1=1$ at the clean endpoint.
- **Dependencies/level:** `def-finite-masking-diffusion-chain`; level 1. `lem-finite-grid-masked-sampler-is-well-defined` will discharge normalization and is a `justified_by` supplier, not a `deps` edge.
- **Sources:** Sahoo et al., §§3.2.2–3.2.3 (`https://arxiv.org/pdf/2406.07524v1`); Austin et al., §3 (`https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`). The item states conditional factorization as a model choice; it does not assert exact reversal of arbitrary dependent clean data.
- **Decision/evidence:** Finite independent uniform draws and the induced product kernel are specified; no continuous-time process, pseudorandom-generator guarantee, or unproved seed property is assumed. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-grid-masked-sampler-is-well-defined` — complete

- **Claim/convention:** Each reverse position row has total mass one, the finite product row is a probability kernel, finite composition preserves total mass, and $c_1=1$ makes the final output clean for every seed.
- **Dependencies/level:** `alg-finite-grid-masked-diffusion-sampler` (in-run level 1) and published probability-kernel definition; item level 2. This is the algorithm's explicit `justified_by` supplier.
- **Proof:** Show $0<c_j\le1$, sum each coordinate row, multiply finite rows, compose the finite kernels, and verify the clean endpoint directly.
- **Source:** Sahoo et al., §§3.2.2–3.2.3 (`https://arxiv.org/pdf/2406.07524v1`); local finite argument fully supplied. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Decision/evidence:** Zero clean-token probabilities are permitted here; they yield zero transition mass and are handled later as infinite KL when they conflict with positive posterior mass. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `thm-masking-chain-posterior` — complete

- **Claim/convention:** Given a fixed clean string and an observed positive-probability later state, each unmasked coordinate is copied backward; each masked coordinate has clean-token probability $(\alpha_s-\alpha_t)/(1-\alpha_t)$ and mask probability $(1-\alpha_s)/(1-\alpha_t)$. The conditional posterior factorizes over positions only after conditioning on the clean string.
- **Dependencies/level:** `def-finite-masking-diffusion-chain` (level 0) and `lem-finite-masking-chain-is-well-defined` (level 1); item level 2.
- **Proof:** Multiply the forward survival ratios to get $\alpha_s$ and $\alpha_t$, take the finite conditional ratio on the positive mask event, then use the conditional path factorization. The statement excludes the zero-probability mask event at time zero and checks both endpoints.
- **Sources:** Sahoo et al., §3.2.1 and Appendix A.2.1, Eqs. (19)–(24) (`https://arxiv.org/pdf/2406.07524v1`); Austin et al., §3, Eqs. (2)–(3) (`https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`). Both support the finite posterior interface; the local conditional-product argument is supplied in full.
- **Decision/evidence:** This is choice-free finite Bayes conditioning; no regular conditional distribution theorem is used. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `thm-masked-diffusion-kl-reduces-to-cross-entropy` — complete

- **Claim/convention:** For each grid step, true versus learned reverse KL, averaged over clean data and forward corruption, equals $\sum_i(\alpha_{j-1}-\alpha_j)$ times the conditional masked-token population cross-entropy risks. The equality is extended-valued; $h(x)=0$ on positive posterior support yields $+\infty$ on both sides. Positionwise independence is used only for the declared conditional kernels, not for the clean data law.
- **Dependencies/level:** finite masking definition, forward/posterior and learned-sampler suppliers, finite KL definition, and batch-2 `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `lem-population-and-empirical-risk-are-measurable`; maximum in-run supplier level 2 gives level 3.
- **Proof:** Step 1.1 now cites the explicit finite product-KL lemma; step 1.2 computes the coordinate KL, then conditional masking probability $1-\alpha_j$ converts $c_j$ to $\alpha_{j-1}-\alpha_j$ in step 2.1. No Choice, infinite-time limit, or finite-loss assumption is used.
- **Sources:** Sahoo et al., Appendix A.2.1–A.2.3 and §3.2.3 (`https://arxiv.org/pdf/2406.07524v1`); Austin et al., §3 Eq. (3) and §4 (`https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`). The exact local finite identity and zero-support branch are fully proved.
- **Cross-batch suppliers:** Current full-run readiness was rechecked for `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`; all three returned `closed: true` at the supplier snapshot. Their actual bodies were read, and the consumer's conditional law is finite and measurable. Exact cross-batch edge rows will be added to the owned sidecar.
- **Decision/evidence:** The theorem depends directly on the batch-2 risk-interface items and the new level-0 finite product-KL lemma; this preserves the planned ML-01 requirement and keeps product additivity explicit. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved supplier hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `def-finite-masked-diffusion-generative-model` — complete

- **Claim/convention:** A terminal point mass at $m^L$, the learned finite reverse kernels, and an explicitly normalized clean-state decoder define a finite joint mass on clean outputs and latent paths. The fallback decoder on masked states is uniform; the exact reverse schedule reaches clean states, so this fallback does not alter generated outputs.
- **Dependencies/level:** `alg-finite-grid-masked-diffusion-sampler`, finite masking definition, and reverse-sampler normalization lemma; level 3. `lem-finite-masked-generative-joint-law-is-normalized` is its `justified_by` supplier.
- **Source:** Sahoo et al., §3.2.2 (`https://arxiv.org/pdf/2406.07524v1`); the terminal point mass and decoder extension are explicit local conventions.
- **Decision/evidence:** This definition makes the latent joint law used by the ELBO corollary precise, including a normalized decoder on unreachable masked output states. The normalization proof is the next item; source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-finite-masked-generative-joint-law-is-normalized` — complete

- **Claim/convention:** The decoder has row sum one both on clean endpoint states and on masked states; finite summation over output and then reverse path coordinates gives joint total mass one.
- **Dependencies/level:** `def-finite-masked-diffusion-generative-model` (in-run level 3) and `lem-finite-grid-masked-sampler-is-well-defined` (level 2); item level 4. This is the model definition's `justified_by` supplier.
- **Proof:** Sum the decoder first, then successively sum each reverse kernel row in finite state space; the terminal indicator leaves one unit of mass.
- **Source:** Sahoo et al., §3.2.2 (`https://arxiv.org/pdf/2406.07524v1`); the decoder extension and complete normalization argument are local.
- **Decision/evidence:** Choice-free; no missing row, normalizer, or endpoint case. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `lem-forward-path-is-admissible-for-finite-masked-model` — complete

- **Claim/convention:** Under full support of every clean-token predictor row, each forward-positive path has positive model mass. The evidence is positive and at most one; finiteness of the path space gives the exact absolute-log-integrability clause required by the library variational definition.
- **Dependencies/level:** finite generative model (level 3), forward chain/normalization, reverse sampler/normalization, and `def-variational-family-and-elbo`; item level 4.
- **Proof:** Enumerated all three possible positive forward transitions (clean-to-clean, clean-to-mask, mask-to-mask), verified each reverse factor is positive, then checked normalizer, support domination, and finite weighted logs.
- **Source:** Blei et al., §2.2 (`https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf`); the exact finite-support specialization is proved locally.
- **Decision/evidence:** Full support is required only for this finite ELBO corollary; the preceding KL identity remains valid with $+\infty$ loss when support fails. No Choice is used in this admissibility proof. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `cor-masked-diffusion-finite-elbo-cross-entropy` — complete

- **Claim/convention:** For full-support clean-token predictors, the finite generative model has positive evidence and the exact forward path law is admissible. Under AC, the finite ELBO identity/bound applies; the data-averaged negative ELBO is precisely the weighted conditional cross-entropy sum. Reconstruction/prior terms vanish only at the exact clean/all-mask endpoints.
- **Dependencies/level:** local generative model (level 3), its normalization/admissibility lemmas (level 4), explicit backward path-factorization lemma (level 3), the finite KL-to-risk theorem (level 3), and published ELBO/KL suppliers; item level 5.
- **Proof:** Apply the actual library ELBO theorem only after local support and absolute-log-integrability are established. Use the proved finite backward factorization and exact endpoint prior/decoder to expand the log ratio; average the resulting reverse-KL sum with the already-proved cross-entropy identity.
- **Axiom branch:** Explicit `Assume AC`; AC is used only in the application of `thm-elbo-kl-decomposition` to identify the library KL and use nonnegativity. The finite path/model/support and per-step identities remain choice-free.
- **Sources:** Sahoo et al., Appendix A.2.4/B.1 (`https://arxiv.org/pdf/2406.07524v1`); Blei et al., §2.2 Eqs. (11)–(14) (`https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf`); CMU 10-708 Lecture 13 §2.3.2 (`https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf`). Local admissibility and endpoint checks are complete.
- **Decision/evidence:** Exact endpoints are used; approximate-endpoint reconstruction/prior terms are explicitly retained as a caveat. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources).. No unresolved supplier hypothesis.
- **Next action:** Final scoped validation and readiness recording completed below.

### `ex-finite-chain-model-error-accumulates-with-zero-mesh-error` — complete

- **Claim/convention:** On a fixed two-state, two-step chain, each learned row is within $\varepsilon$ of the identity row, but the endpoint TV error is $2\varepsilon-\varepsilon^2$. “Zero mesh error” means no time discretization is made; it does not erase model error.
- **Dependencies/level:** published finite-state TV definition and `thm-finite-chain-reverse-kernel-error-telescope`; level 2.
- **Verification:** Computed both step-row errors and the exact two-step mass; at $\varepsilon=1/4$, endpoint TV is $7/16$ and the theorem bound is $1/2$. This is a complete finite calculation, not a registered asymptotic smoke test.
- **Source:** Levin and Peres, Ch. 4 §4.1, `https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf`; local row and endpoint calculations are complete.
- **Decision/evidence:** No continuous-time process or mesh estimate is invoked. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `cex-factorized-reverse-kernel-fails-for-correlated-tokens` — complete

- **False claim refuted:** The exact reverse conditional always factorizes across positions for every finite clean-sequence law. Witness: $X=(0,0)$ or $(1,1)$ with probability $1/2$, terminal all-mask state, and a learned independent uniform product draw.
- **Dependencies/level:** finite masking definition, true posterior theorem, learned finite-grid sampler; level 3.
- **Proof:** The true reverse law is the correlated clean-data law with mass $1/2$ on the diagonal; the learned product law gives mass $1/4$ to each string. The counterexample does not claim forward corruption is dependent conditional on the clean sequence.
- **Sources:** Sahoo et al., §3.2 (`https://arxiv.org/pdf/2406.07524v1`); Austin et al., §3 (`https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf`). The exact finite witness is fully verified locally.
- **Decision/evidence:** No continuous-time or neural-network claim. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

### `ex-masked-diffusion-single-token-posterior` — complete

- **Claim/convention:** With $\alpha=(1,1/2,0)$, the later all-mask state has predecessor clean/mask probabilities $(1/2,1/2)$ at $(s,t)=(1,2)$; the preceding reverse pair has deterministic unmasking at $(s,t)=(0,1)$ on its positive mask event.
- **Dependencies/level:** finite masking definition and true posterior theorem; level 3.
- **Verification:** Directly evaluated both $c_{s,t}$ ratios and checked the conditioned event at $t=1$ has probability $1/2>0$.
- **Source:** Sahoo et al., §3.2.1 Eq. (8), Appendix A.2.1 (`https://arxiv.org/pdf/2406.07524v1`); the arithmetic is complete locally.
- **Decision/evidence:** No zero-probability conditioning or time-zero division. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

## Page carriers

- `library/machine-learning/discrete-masked-diffusion-and-reverse-generation.md` contains only YAML frontmatter, 15 A-page items, and the three required pages.
- `library/machine-learning/discrete-masked-diffusion-and-reverse-generation-examples.md` contains only YAML frontmatter and the three promised B-page examples/counterexamples. Both bodies are empty; no summary was authored.

### `rem-discrete-diffusion-factorization-and-endpoint-limits` — complete

- **Claim/convention:** The learned conditional product is a modeling assumption, not an exact reverse for arbitrary dependent clean data. Results stay on the finite grid, exact endpoints are required to remove reconstruction/prior terms, and the source's loose “Rao–Blackwellization” label is not treated as a variance theorem.
- **Dependencies/level:** finite model/algorithm/posterior/KL/ELBO suppliers; highest in-run supplier is the ELBO corollary at level 5, so item level 6. The B-page counterexample is a nonlogical `forward_refs` target, not a `deps` target.
- **Sources:** Sahoo et al., §3.3 and Appendix B.1, `https://arxiv.org/pdf/2406.07524v1`; lines inspected state that the authors use the term somewhat loosely. No empirical variance claim is harvested.
- **Decision/evidence:** All hyperlinks follow the complete Remark in a `Remark references` section. No proof supplied or needed for the prose qualification; the nonfactorization claim is witnessed by the assigned B-page counterexample. Source fetch verified in the batch source-coverage ledger (9/9 page-scoped entries; 6 unique sources)..
- **Next action:** Final scoped validation and readiness recording completed below.

## Final authoring and validation checkpoint

- **Statement and proof review:** All 18 assigned carriers were audited; the four proofs normalized by precheck were re-read after phase relabeling. Link-free statement/definition/algorithm/example/counterexample/remark sections and their immediately following reference sections were checked; all reference links are on distinct source paragraphs. The ELBO corollary explicitly defines the finite forward chain, learned reverse rows, decoder, KL convention, and admissibility claim, with decoder and KL notation separated. The finite KL-to-risk theorem now gives the true and learned posterior rows directly and checks $d_1=0$ and terminal mask-event probability one. No unresolved mathematical gap remains within this pair.
- **Proof contracts:** `research/machine-learning-all-101-2026-10-19-batch-97.proof-contracts.json` contains all 14 proof-bearing item contracts, 47 exact supplier-section excerpts, 42 exact numbered-step mappings, all eight standard boundary dispositions per item, and empty finite-smoke lists because no registered finite check applies. `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-97.proof-contracts.json --strict` passed: 0 errors, 0 warnings, 14/14 checked.
- **Source evidence:** `research/machine-learning-all-101-2026-10-19-batch-97.coverage.json`, `research/machine-learning-all-101-2026-10-19-batch-97.source-coverage.json`, and `research/machine-learning-all-101-2026-10-19-batch-97.source-evidence.json` record the six full-text sources, locators, supported items/dispositions, actual fetch stamps, and direct supplier status. Fetch command result: `source-fetch-check: 9/9 source(s) fetch-verified (9 newly stamped); 9/9 resolved (0 documented drops)`, exit code 0. No retrieval failure, recovery retry, source drop, or source-resolution escalation occurred.
- **Cross-batch supplier reconciliation:** Both required published pages and the draft prediction/risk page were checked at their current locations. The three batch-2 draft risk suppliers have actual current statement/proof bodies and current `ready` Step-1 records; all three exact uses in `thm-masked-diffusion-kl-reduces-to-cross-entropy` are recorded in `research/machine-learning-all-101-2026-10-19-batch-97.cross-batch-dependencies.json`. There are no unavailable cross-pair suppliers.
- **Pages and inventory:** The first exact comparison caught two A-page frontmatter omissions (`lem-finite-product-kl-additivity` and `lem-finite-masking-path-reversal-factorization`) after their addition to the scaffold. Both were inserted at their dependency positions. The final comparison passes: the A page has exactly 15 manifest items and the B page exactly 3 examples, both YAML-only with empty bodies. No published item, other pair, shared plan, batch-level artifact, engine state, or verdict was edited.
- **Dependency levels:** `dependencyLevels` recomputed all 18 owned item labels with no errors; levels are recorded in `batch-97.dependency-inputs.json`. The required whole-run `node tools/item-dependency-levels.mjs check --run ...` exits 1 on 74 empty scaffold inventories in other pages and reports no other error. Those pages are outside this assignment. The dispatch row itself still agrees at batch level 1 / prerequisite batch 2; its scheduling hash differs from the current shared artifact as recorded above.
- **Scoped checks:** `proof-layout` passed on all 18 items (42 numbered steps, 0 defects); precheck passed 14/14; strict proof contracts passed 14/14 (0 errors, 0 warnings); content-policy passed (18 items, 0 errors/warnings); focused depcheck passed for 18 items and 400 pages; rendercheck passed all 20 item/page files; source-fetch check passed 9/9 page-scoped entries. Both page inventories match the batch manifest exactly.
- **Readiness:** `node tools/step1-decisions.mjs record` recorded all 18 owned items `ready` with their declared item dependencies and scoped evidence. The subsequent ordinary check reports these 18 as current-ready (0 missing or stale owned records). Whole-run Step-1 remains open: 862 items, 598 ready, 264 other unready item records and 72 empty inventories (336 work rows total); the existing owner repair/recertification hold remains.
- **Run-wide contract coverage:** `proof-contract-coverage` could not load the full run because of the unrelated empty inventory `distribution-shift-and-domain-adaptation`. Batch-local strict contract validation passed; no foreign manifest was modified.
