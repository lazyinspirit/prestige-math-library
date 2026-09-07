# Frontier 33 — Step 6b group g adjudication

Run: `frontier-33`  
Role: Alpha  
Group: `g`  
Owned batches: 11, 17, 18

## Outcome

All 45 routed obligations are closed on the current carriers: 25 are `accepted_repair` and 20 are `amended_repair`; none is reverted. There are no reader or refuter findings in the three collected scopes. The exact obligation, route, verdict, evidence, unique defect-ledger reference, and stamped carrier hash for every decision are in `research/frontier-33-alpha-g-6b-decisions.json`.

The reader repairs are mathematically confirmed:

- Batch 11, `ex-co-bird-path-plus-isolate-adjacency-witness`: verification step 2.1 now correctly says the displayed induced co-Bird has six vertices and that the full obstruction configuration adds the seventh vertex `x`. The current item keeps that clarification; subsequent strict contract reconciliation makes the composite carrier an amended repair.
- Batch 18, `def-sum-check-instance-and-protocol`: the definition now requires `deg_{X_i} g <= d_i` for every coordinate. This is an essential hypothesis for honest-message admissibility and the root-bound soundness argument, including zero bounds and the zero polynomial. The definition carrier exactly matches the reader repair.
- The six batch-18 proof contracts that quote the definition are synchronized: `lem-sum-check-perfect-completeness`, `lem-first-false-round-is-caught-by-root-bound`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `fs-sum-check-computes-all-exponential-summands`, `ex-sum-check-three-variable-transcript`, and `cex-sum-check-computes-all-exponential-summands`. Their later pre-6b contract reconciliation and, where applicable, risk review make them amended repairs.

The post-reader/pre-6b comparison created 37 additional obligations: 14 in batch 11 (including one page), 9 in batch 17, and 14 in batch 18. Component comparison showed contract-only changes for every item and a frontmatter-only title repair for `co-bird-free-comb-structure-examples`; item and manifest bytes were otherwise unchanged. Each current carrier was independently reread. The accepted carriers exactly equal the frozen pre-6b state. The amended carriers differ from both frozen states only because the required item-specific risk review was added during this adjudication.

## Mathematical review

### Batch 11 — co-Bird-free comb structure

The exact conventions checked were finite simple graphs, induced freeness, the six-vertex Bird/co-Bird and E graphs, complete/anticomplete pairs, nonempty comb blocks, E-overlap chains with zero-length chains, anticonnected quotient blocks, and pure-blockade pattern edges and nonedges. The local obstruction witnesses retain all outside-vertex and complete-nonedge hypotheses. The complete-nonedge-pair argument exhausts the terminal-pair adjacency cases. The quotient proof descends a separated witness through finitely many anticonnected levels and closes by overlap propagation. The terminal pattern lifts all fifteen pairs of an induced E, and the structural theorem separately handles empty overlap support by a singleton block, including `ell=1` and empty `Y_i`.

All 62 nonconstant masks in `ex-co-bird-e-neighbourhood-case-table` were independently enumerated against the five-edge E graph: every row has its claimed induced type and adjacency bits; masks 0 and 63 are exactly the two survivors.

Key in-batch interfaces reread include `lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs`, `lem-purity-on-every-e-propagates-along-an-overlap-class`, `lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade`, `lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing`, `lem-co-bird-free-external-purity-survives-e-overlap-quotients`, and `lem-terminal-e-overlap-quotient-pattern-is-e-free`. The source route is Huang–Ju–Zhou, *Erdős–Hajnal beyond the five-vertex path*, §6.2, Lemmas 6.1–6.2 and 6.5 with Claims 6.5.1–6.5.3; foundational graph conventions were checked against Diestel, Ch. 1 §§1.1 and 1.4.

### Batch 17 — PH, relativization, expanders, and constraint graphs

The PH review checked fixed alternation level, uniform predicates, nonempty length-zero string domains, empty indexed conjunction/disjunction, circuit-to-3CNF/3DNF final-block polarity, malformed QBF rejection, total-oracle semantics, promise completions, and finite-extension diagonalization. The two retained false statements make only the intended invalid-transfer claims.

The expander review kept ordered adjacency slots distinct from ordinary reverse-paired edges, treated loop slots explicitly, and separated absolute nontrivial norm `alpha` from algebraic gap `gamma`. The mixing identity, Cheeger indicator and positive-part estimates, layer-cake constants, exact-size quotient/laziness construction, Fourier affine phase, Margulis factor of two, walk contraction for `t=0` and `n=1`, and bad-edge second-moment bound all recompute. Key dependency interfaces include `def-spectral-edge-and-vertex-expansion`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`.

Sources checked were Arora–Barak §§3.5 and 5.1–5.3.1/5.5; Goldreich Lecture 9 and promise-problem survey §§1.1–1.2; Chang §3; Hoory–Linial–Wigderson §§2.1–2.4, 3.1–3.2, 4.5 and Chapter 8; and Dinur §§1.1–1.2, 2.1–2.2 and 4.

### Batch 18 — arithmetization, sum-check, BLR, and self-correction

The arithmetization review distinguished formula-tree evaluation from expanded-polynomial size and used occurrence counts for individual degrees. Multilinear interpolation was checked as a formal-polynomial statement over every field, including characteristic two and dimension zero. Sum-check message timing fixes each prover message before the fresh challenge; conditioning and the root bound therefore cover adaptive randomized provers. The first-false-round union bound does not assume round independence. Field-operation, bit-operation, sampling, trusted-evaluation, and prover costs remain separated. The integer counting iff is correctly limited to supplied prime fields `p>2^n`, with both endpoints and the characteristic-two failure recorded.

For BLR, normalized real characters give the cubic identity, the proof takes the signed maximum Fourier coefficient, and repetition includes `k=0`. The self-corrector uses uniform marginals and a union bound rather than independence of `y` and `x+y`; uniqueness, `x=0`, `n=0`, zero noise, and the excluded quarter-noise endpoint are explicit. Key dependency interfaces include `thm-root-bound-for-polynomials-over-a-domain`, `def-finite-field-and-its-order`, `def-multivariate-polynomial-ring-by-iteration`, `lem-boolean-cube-fourier-inversion-and-parseval`, and `def-self-correction-of-a-noisy-linear-function`.

Sources checked were Thaler §§3.4–3.5 and §4.1, and Arora–Barak §§8.5.1–8.5.3, 18.4.1, and 19.3.1–19.3.2.

## Risk review

The required mathematical `risk_review` records are complete under reviewer `alpha-6b-g` for all HIGH/CRITICAL items:

- Batch 11: `ex-co-bird-e-free-comb-singleton-partition`, `ex-co-bird-e-neighbourhood-case-table`, `lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs`, `lem-co-bird-free-external-purity-survives-e-overlap-quotients`, `lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade`, `lem-terminal-e-overlap-quotient-pattern-is-e-free`, `thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition`.
- Batch 17: `lem-cheeger-indicator-and-positive-part-energy`, `lem-cheeger-sweep-and-layer-cake`, `lem-constant-vector-is-a-top-eigenvector`, `lem-expander-size-adjustment-and-laziness`, `lem-expander-walk-contraction`, `lem-finite-torus-fourier-orthogonality-and-affine-change`, `lem-fourier-analysis-of-margulis-adjacency`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `prop-expander-walk-hits-bad-edges`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-expander-mixing-lemma`.
- Batch 18: `ex-existence-and-uniqueness-of-multilinear-extension`, `ex-sum-check-three-variable-transcript`, `lem-first-false-round-is-caught-by-root-bound`, `prop-arithmetized-formula-counting-sum`, `thm-blr-linearity-test-soundness`, `thm-existence-and-uniqueness-of-multilinear-extension`, `thm-linear-self-correction`.

No new mathematical defect was confirmed during these 26 risk reviews.

## Validation and accountability

- `risk-report --require-reviewed`: batches 11, 17, and 18 each pass with zero errors.
- Strict proof contracts: 15/15, 49/49, and 21/21 pass with zero errors or warnings.
- Citation fidelity: 57, 86, and 31 citations checked; no missing quote and no widening candidate.
- Content policy: 17, 64, and 28 scoped items; zero errors or warnings.
- Focused precheck: 15, 49, and 21 proof-bearing items; zero failures.
- Focused rendercheck: 19, 68, and 30 item/page files; all frontmatter and math render cleanly.
- Defect ledger: 45 unique rows appended through `tools/defect-ledger.mjs`; `validate --run frontier-33` reports zero errors, and the generated view was refreshed.
- Decision carrier hashes: all 45 stamped by `tools/step6-scope.mjs stamp --run frontier-33 --group g`.

The adjudication checker validates every owned decision and reaches only two current global published-repair consistency errors concerning batch 6 (`def-tensor-product-total-complex-of-chain-complexes` / `reader:6:1`). Those artifacts are outside group g and were not edited. There is no unresolved mathematical obligation or blocker within batches 11, 17, or 18.
