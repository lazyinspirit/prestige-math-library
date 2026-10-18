# Step 3a reader report — batch 14

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Batch: `14`

## Opened inventory

Pages opened:

- `library/information-theory/finite-blocklength-and-reliability.md` (A page)
- `library/information-theory/finite-blocklength-and-reliability-examples.md` (B page)

All 21 A-page items and all 3 companion examples were opened and reviewed:

```text
lem-it-finite-affine-slice-error-bound
thm-it-berry-essen-independent-array
def-it-one-letter-gallager-exponent-functions
lem-it-dmc-mutual-information-concave-in-input
lem-it-finite-pinsker-euclidean-bound
lem-it-gallager-input-maxima-attained
def-it-channel-dispersion
def-it-gallager-and-expurgated-exponent-functions
def-it-reliability-function
lem-it-dmc-capacity-output-law-is-unique
lem-it-optimized-constant-composition-gallager-identity
thm-it-one-shot-decision-threshold-achievability
thm-it-one-shot-meta-converse
lem-it-dmc-caid-conditional-variance-identity
lem-it-dmc-dispersion-attains-minimum
thm-it-dmc-uniform-quadratic-capacity-decay
thm-it-expurgated-error-exponent-lower-bound
thm-it-random-coding-error-exponent
thm-it-sphere-packing-strict-feasibility-converse
thm-it-normal-approximation-nondegenerate-dmc
thm-it-error-exponent-zero-above-capacity
cex-it-expected-random-code-error-does-not-give-maximal-error
ex-it-dmc-one-shot-error-bound
ex-it-meta-converse-binary-channel
```

The 53 other direct dependency carriers were opened at the statements, definitions, or proof sections used by the assigned arguments:

```text
cor-mean-value-theorem
cor-second-derivative-characterises-convexity
def-axiom-of-choice
def-convex-concave-and-midpoint-convex-functions
def-countable-choice
def-discrete-memoryless-channel
def-discrete-memoryless-channel-information-capacity
def-discrete-memoryless-channel-information-density
def-finite-hypothesis-testing-beta
def-finite-kullback-leibler-divergence
def-finite-probability-vector
def-fixed-length-channel-code
def-fixed-length-channel-code-errors
def-it-finite-mutual-information
def-natural-logarithm
def-qa-35-finite-probability-entropy-and-stochastic-matrices
def-real-power
def-standard-normal-and-normal-laws
lem-absolute-real-powers-are-convex
lem-discrete-memoryless-channel-average-to-maximal-expurgation
lem-discrete-memoryless-channel-block-kernels-are-stochastic
lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound
lem-discrete-memoryless-channel-capacity-is-attained
lem-it-finite-log-sum-inequality
lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
lem-standard-normal-cdf-quantiles-and-symmetry
thm-algebra-of-continuous-functions
thm-algebra-of-derivatives
thm-chain-rule
thm-composition-of-continuous-functions
thm-continuous-implies-integrable
thm-derivative-of-exponential
thm-discrete-memoryless-channel-alphabet-scoped-strong-converse
thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
thm-exponential-beats-every-polynomial
thm-exponential-is-strictly-increasing
thm-finite-jensen-inequality
thm-ftc-first-part
thm-ftc-second-part
thm-gaussian-integral
thm-heine-cantor-metric
thm-integration-by-parts
thm-it-fano-inequality
thm-it-finite-entropy-chain-rule
thm-it-finite-kl-nonnegative-equality
thm-logarithm-derivative-and-integral
thm-logarithm-slower-than-every-positive-power
thm-monotonicity-from-the-derivative
thm-natural-logarithm-laws
thm-nearest-point-in-a-nonempty-closed-convex-set
thm-real-power-continuity-and-derivatives
thm-real-power-laws
thm-separating-hyperplane-theorem-for-disjoint-convex-sets
```

## Repairs and evidence

1. `lem-it-finite-affine-slice-error-bound`, Proof 1.2: stated why the slice $F=\Delta_d\cap M^{-1}\{b\}$ is nonempty, closed, and convex before applying the nearest-point supplier. In coordinates it is defined by finitely many closed linear inequalities and affine equations. The opened supplier `thm-nearest-point-in-a-nonempty-closed-convex-set` requires exactly those hypotheses. The affected proof-contract derivation was updated.

2. `thm-it-berry-essen-independent-array`, Proof 1.1: included zero in the supremum defining the auxiliary δ-function, so it remains a real number when no normalized arrays satisfy the moment bound. Proof 4.1 now shows the leave-one-out decomposition at $f'(S_{-i})$, uses independence for the reference term, and records the two increment estimates and moment comparison. Vershynin, [“Two Friendly Proofs of the Berry–Esseen Theorem”](https://arxiv.org/pdf/2602.06234v2), Part II §10, Definition 10.1 (PDF p. 14), defines its auxiliary error as an infimum of admissible bounds; the local zero-inclusive supremum handles the corresponding empty-class case. Part II §§6–11 (PDF pp. 9–17) supplies the smoothing, Stein equation, increment estimate, and induction structure. The finite-array constant 1088 is derived in this item. The affected proof-contract derivations were updated.

3. `thm-it-expurgated-error-exponent-lower-bound`, Proof 1.1: extended the pairwise Bhattacharyya bound to coincident codewords. The random codebook is sampled independently and can contain duplicates; in that case the pairwise Bhattacharyya sum is 1, which still bounds the pairwise error probability. The affected proof-contract derivation was updated.

4. `thm-it-normal-approximation-nondegenerate-dmc`, Proof 1.2: made the continuity/compactness argument explicit, supplied the finite mutual-information expansion, and replaced “smooth” with the needed $C^1$ regularity for the third-moment function. The local moment formula now uses a finite rowwise log-likelihood extension on every reachable row and omits zero-weight rows, avoiding the $-\infty$ information-density convention on uncharged cells. The proof chooses a compact neighborhood where reachable output probabilities stay positive, notes that $u\mapsto|u|^3$ has continuous derivative $3u|u|$, and derives bounded derivatives and the local variance/moment constants on that compact set. Added Facts [F13]–[F14]; the affected proof-contract derivation and source rows were updated.

5. Corrected source locators that did not match the opened PDFs. In `def-it-channel-dispersion`, `lem-it-dmc-caid-conditional-variance-identity`, `lem-it-dmc-dispersion-attains-minimum`, and `thm-it-normal-approximation-nondegenerate-dmc`, the Polyanskiy–Poor–Verdú locators now point to Theorem 49 and equations (269)–(270) at PDF pp. 49–51, Lemma 62 at Appendix E PDF p. 76, and Theorem 17 at PDF pp. 15–16, as applicable. The Hayashi locator in these items now points to Section II, Theorems 1–2 (PDF p. 4), where the paper defines $V_{P,W}$ and treats multiple capacity-achieving inputs. The opened PDF places the DMC result in Section II; Section III is the additive Markovian case.

6. In `thm-it-one-shot-decision-threshold-achievability` and `ex-it-dmc-one-shot-error-bound`, corrected Theorem 17 to PDF pp. 15–16. In `thm-it-one-shot-meta-converse` and `ex-it-meta-converse-binary-channel`, corrected the PPV locator to Theorem 27, PDF p. 28. In `lem-it-optimized-constant-composition-gallager-identity` and `thm-it-sphere-packing-strict-feasibility-converse`, narrowed the P&W §22.4* locators to the finite-DMC exponent formulas that appear there; the constant-composition identity and the finite-divergence strict-feasibility argument remain established by their local proofs.

No stale `verification.judge` records were present on the four proof-repaired items. No Statement or Definition section was changed.

Validation after the final edits: reflow reported all 13 changed items unchanged; precheck passed all 12 proof-bearing items and reported the definition as not applicable; one batched proof-layout run checked all 13 changed paths and reported 62 steps, 0 defects.

## Uneditable defects

None found in the assigned pages, items, or direct dependencies reviewed. No finding remains for routing.

## Page verdicts

- `finite-blocklength-and-reliability` (A): the summary, diagram description, theorem scope, and listed claims matched the reviewed items after the local repairs above. No uneditable defect remains.
- `finite-blocklength-and-reliability-examples` (B): the page summary matches the three opened examples. The noiseless-channel errors, BSC dependence-testing value $0.35$, and BSC meta-converse testing value $1/2$ check out. No defect remains.

## Blocker and coverage note

No blocker. I opened all assigned carriers and all 53 unique direct dependency carriers. I did not audit every transitive proof beneath those direct dependencies. The opening sequence began with the two dependency-level-0 assigned items before their direct suppliers; I subsequently opened those suppliers and checked the relevant support claims. This sequencing deviation is recorded rather than described as supplier-first coverage.
