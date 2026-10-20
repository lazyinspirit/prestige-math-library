# Batch 35 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-35`.

Scope has exactly three touched obligations and no reader/refuter findings or page obligations. Reader and refuter reports were read as evidence; current items and actual prerequisite statements were independently checked. Initial risk-report: 18 items routed, ten HIGH/CRITICAL, zero errors. No agents, judge cycles, stamps, publication or dispatch transitions were initiated.

## def-linear-state-space-model

Reviewed the complete Definition against all six published prerequisites. Countable Choice supplies the complete Lebesgue measure space; the box theorem with n=1 covers bounded open/closed/half-open/degenerate intervals, and the countable union of intersections with [-n,n] covers unbounded intervals. Compact-subinterval integrability and coordinatewise absolute continuity have the cited meanings. t0 excludes the empty interval; a singleton is null and the differential condition can be excluded there. No existence or uniqueness theorem is asserted. Zero data and finite real/complex dimensions are admitted. Accepted the measurability clarification without changing the model interface. Gu et al. §2.1 supplies the ODE convention; no additional choice is used.

Current risk review complete; no new repair needed.

## lem-woodbury-dplr-bilinear-inverse

Checked every product dimension and both inverse expansions, using (I+V*D^-1U)W^-1=I and its reverse. Conversely Ww=0 implies x=D^-1Uw is in the kernel of D+UV*, then x=0 and w=Ww=0; finite dimensionality gives invertibility. Zero U or V gives W=I; singular W is not used in the inverse formula. Finite positive dimensions are the intended domain and zero-dimensional extensions satisfy the same identities. No choice or analytic limit is used. Gu et al. Appendix C.3 Proposition 4 agrees, and the local proof supplies both directions.

Current risk review complete; no new repair needed.

## thm-cauchy-root-grid-matvec-numerical-cost

Read all six steps independently. The arc radius formula follows from chord length; equally spaced centers have separation at least 4/J, so disjoint radius-2/J disks give fewer than 18 near nodes per pole per depth and fewer than 36 candidates at the next level. The overlapping 3R/2 and 2R tests terminate with finite supplied certified enclosures. Each target/pole pair belongs to exactly one stopped node or leaf. The geometric remainder is bounded by (2/3)^p A/d, including repeated poles. Streaming degrees and depths gives linear word space independent of p; zero poles and M=1 use direct branches. Division perturbation and the K recurrence keep each divisor at least D/2 and total error at most eta*s after truncation and rounding. Certificates and input constants are supplied and their construction/bit cost excluded, as explicitly stated. Checked Pan Lemma 6.1, Lemma 6.3 and §6.4; local proof establishes its own accuracy/precision and streaming bounds rather than importing stronger source guarantees.

Current risk review complete; no new repair needed.

FFT base case: current `alg-radix-two-fft` supplies omega=1 at M=1, so both defining sum and conjugated inverse are defined and return the one coordinate. Reversing exactly this sentence edit reproduces the pre-reader SHA256; current bytes equal the post-reader SHA256. Verdict accepted_repair. The interval-definition reverse edit (sentence, added dependency and reference) likewise exactly reproduces its pre-reader SHA256, and its current bytes equal post-reader. Verdict accepted_repair. Direct consumer review is recorded below after their actual uses.

Next: complete level-one FFT/Cauchy risk reviews before level-two cost review.

## alg-cauchy-matvec-at-roots-of-unity

Checked full procedure and supplier alg-radix-two-fft. Disjoint balanced index splitting terminates, rational numerators combine by common denominators, repeated poles remain valid, and folding modulo z^M-1 preserves every root value. Any primitive radix-two root is a unique odd power of the standard root when M>1; exhaustive power comparison and output permutation cost O(M) in the exact zero-test model. M=1 needs no root search; n=0 returns zeros; collisions report a status rather than divide. The repaired FFT supplies omega=1, so both M=1 DFT calls are now defined. No change needed; no choice used. Pan §§3.2–3.3 contextualizes rational evaluation; correctness/cost are supplied separately by the owned theorem.

Risk review complete; next item follows dependency order.

## lem-roots-of-unity-fft-complexity

Read four proof steps and exact FFT definition. Finite geometric orthogonality yields F*F=MI, including M=1. Even/odd splitting and omega^(M/2)=-1 prove the recursion by q-induction. The butterfly recurrence solves to O(M log(2+M)); freeing completed recursive buffers gives O(M) space by a geometric series. The least radix-two padding length is at least 2n-1 and less than twice it for n>1; degree at most 2n-2 avoids cyclic wraparound. n=1 uses length one. The inverse uses conjugate roots and 1/M. No choice or analytic convergence is needed. Gu Appendix C.2 and Pan §3.3 checked; the elementary local proof establishes the stronger specific radix-two bounds.

Risk review complete; next item follows dependency order.

## thm-cauchy-matvec-at-roots-of-unity-exact-cost

Checked every step against the two completed level-one suppliers. Induction gives P/D=sum a_j/(z-mu_j) away from all poles, also for repeated poles. Balanced tree levels cost O(n log(2+n)); depth-first completed sibling sizes form a geometric sum, so total tree cost is O(n log^2(2+n)) and space O(n). Folding costs O(n+M), two FFTs and supplied-root reindexing cost O(M log(2+M)), and all final denominators are nonzero by the hypothesis. n=1 and M=1 are included; zero weights do not alter denominator validity. No claim of stability or bit cost is inferred. Pan §3.3 is contextual; local FFT multiplication and rational-tree proof supply this exact root-grid bound.

Risk review complete. Next: level-three resolvent reduction and scalar example.

## lem-s4-convolution-root-of-unity-reduction

Checked all six steps against the DPLR definition, S4 procedure, Cauchy procedure and Woodbury lemma. I-z*Abar factors as G^-1*alpha*(1+z)*(sI-A), so required diagonal/correction inverses make the geometric resolvent valid. The finite identity uses z^M=1 and Ctilde*=C*(I-Abar^M); no infinite-series convergence is assumed. At -1, I+Abar=2G^-1 and the finite value is Delta/2*Ctilde*B. Mapping lambda!=-a gives mu=(a-lambda)/(a+lambda) and weight -2/(a+lambda); lambda=-a contributes the constant Delta/2. mu=-1 is impossible because a>0; other collisions are excluded by diagonal invertibility. M=1 has only z=1. The 1,r,r,r^2 blocks give at most (r+1)^2 calls, also with empty sums or repeated poles. Gu Appendix C.3 Lemmas C.3–C.4 checked; the local argument handles exceptional roots explicitly. No choice is spent.

Risk review complete; no item edit.

## ex-s4-scalar-recurrent-and-convolutional-views

Read all three steps against both actual suppliers. A=0, Delta=1 gives G=1, Abar=Bbar=1, and zero initial state x_-1 makes x_t=sum_{s=0}^t u_s by finite induction; C=1 gives the same output. Kernel entries are all one, and substitution s=t-j gives identical causal convolution. L=1 and t=0 give u0; arbitrary complex or real inputs, zero input and cancellation are valid. This example uses recurrent/kernel definitions, not the nonresonant root-evaluation theorem: Abar=1 would be resonant at z=1 and that theorem is not invoked. No choice or analytic limit is used; Gu §§2.3–2.4 checked.

Risk review complete; no item edit.

Next: level-four filter complexity, with all actual mathematical suppliers reviewed. HiPPO supplier was also read in full: direct entry checks give LegS/LagT rank-one corrections and LegT parity rank-two correction after the stated diagonal similarity. The published complex spectral theorem applies to the resulting finite-dimensional normal matrices. Input/output changes S^-1 B and S* C preserve the same state-space map; LegS time dependence is explicitly retained.

## thm-s4-convolution-filter-complexity

Reviewed all nine proof steps and seven suppliers. The corrected positive-to-negative root permutation j=-k mod M is bijective, preserves all pole distances and infinity error, and adds only O(M) work/words. Exact (r+1)^2 Cauchy evaluations, fixed-r correction inverses and inverse DFT recover all M coefficients; M<2L yields the claimed exact bound. Empty Cauchy lists are constants, lambda=-a uses its finite contribution, and -1 uses the finite direct formula. With delta=epsilon/[32r*w^2*(b+1)^2] the block infinity errors are at most e=r*delta, w*e<1/2, and the Neumann series gives inverse norm <=2w and inverse error <=2w^2*e. Expanding the triple product gives generating error <=9*epsilon/32; inverse DFT infinity norm <=1 preserves it. The entire selected rational circuit includes weight formation, exceptional sums, correction inverses, root and twiddle errors; its certified nonzero divisors and finite intermediate bounds permit the stated u and add at most epsilon/2. Thus total error is <epsilon, with logarithmic kappa dependence. Adj/determinant evaluation is constant work at fixed r; precision, certificates and forming Ctilde are explicitly excluded from scalar/word counts. HiPPO use is conditional on the same invertibility hypotheses and equivalent coordinates, not a claim about time-invariant LegS dynamics. Accepted the reindexing clarification; no claim strength changed. Gu Appendix C.3 and Pan §§3.3,6.1–6.4,7.1 checked, without importing a fixed-word claim.

Current item equals reader-post hash. Removing the reindexing sentence and reversing “absolute tolerance” to “tolerance” reproduces its exact pre-reader hash. Thus the complete historical delta is known; verdict accepted_repair, repair_confidence 1. Statement and dependencies are unchanged.

Next: level-five cost-scope example.

## ex-s4-filter-cost-excludes-training

Checked the complete Example and all three proof steps against the current theorem and algorithm. Exact DPLR data, zero/correction invertibility, supplied Ctilde, exceptional partition, finite-constant terms, b/w/s bounds, kappa, epsilon range, supplied routing enclosures and finite-circuit precision assumptions match the actual supplier. No fixed-word, bit-cost, certificate-construction or Ctilde-formation cost is asserted. The filter procedure returns coefficients and performs neither gradients nor optimizer updates; its cost therefore counts only that subroutine. M=L=1, empty scaled Cauchy sums and a separately added direct term are covered by the supplier. Empirical long-context accuracy is not inferred. No choice is spent in this finite computation. No defect or item edit needed.

All ten HIGH/CRITICAL risk reviews are complete.

## Consumer and presentation review

Direct item/reference consumers of the FFT definition are `lem-roots-of-unity-fft-complexity` (F1 and recursion proof), `alg-cauchy-matvec-at-roots-of-unity` (two DFT calls including M=1), and `alg-s4-state-space-recurrence-and-convolution` (inverse transform including L=1). Each current use is sound after omega=1 is specified. The sole direct item/reference consumer of the state-space definition is `def-s4-dplr-parameterization`; its finite complex single-input/output equations, coordinate changes and separate direct term use the same unchanged measure/ODE interface. No consumer item needs repair, so there is no further propagation hop. A repository item search found no outside direct consumer of either changed definition.

Synchronized only the two stale definition statement mirrors and the added box-measure dependency in the owned batch page manifest. The theorem statement mirror is unchanged and current. Both actual A/B pages remain frontmatter-only with compact-v1 and unchanged inventory. No page obligation is owed. Routed carriers contain no TikZ/tikzcd diagrams and require no additional diagram to support their arguments. The contextual RNN graph in the page manifest has the stated T=2 state, input and shared-parameter arrows; no diagram change is needed. All routed complete statements/definitions/examples are hyperlink-free with following per-reference paragraphs.

No published mathematical defect, outside repair, withdrawal or open prerequisite was found. Published suppliers were opened for the needed statements and proofs; this is not a new audit of every transitive foundation. Stable item IDs and existing ledger proposals are preserved.

## Source evidence

Opened [Gu, Goel and Ré, Efficiently Modeling Long Sequences with Structured State Spaces](https://arxiv.org/pdf/2111.00396): §2.1, pp.3–4 for state-space conventions; Appendix C.2, pp.21–22 for root-grid inversion; Appendix C.3, pp.22–25, Proposition 4, Lemmas C.3–C.4, Proposition 5 and the transformed-output discussion for the resolvent and cost context. The local proofs, rather than the source asymptotics alone, establish the checked hypotheses, exceptional cases, norm and arithmetic model.

Opened [Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials](https://arxiv.org/pdf/1506.02285): §3.2–3.3, pp.4–5 for rational/Cauchy evaluation and precision cautions; §6.1, pp.14–15, Definition/Lemma 6.1 for geometric separation and truncation; §6.3, p.17, Lemma 6.3 for arc-center separation; §6.4, pp.17–18, Theorems 6.2–6.3, and §7.1 for the conditional approximation context. No generic fixed-precision guarantee was imported.

Published prerequisite source paths read: `items/def-countable-choice.md`, `items/def-integrable-real-and-complex-functions-and-their-integrals.md`, `items/def-absolutely-continuous-function.md`, `items/def-lebesgue-measure-and-the-lebesgue-sigma-algebra.md`, `items/thm-lebesgue-measure-is-a-complete-measure.md`, `items/thm-lebesgue-measure-of-a-box-of-every-kind.md`, and `items/thm-complex-spectral-theorem-for-normal-endomorphisms.md`. All direct owned prerequisites named in the item reviews were read in their current carriers. No claim of a transitive foundational re-audit is made.

## Decisions, records and validation

Exactly three decisions are in the companion JSON, all `accepted_repair`, each with `repair_confidence: 1` and one closed defect row: `ml101-b35-3a-fft-singleton-root`, `ml101-b35-3a-interval-measurability`, and `ml101-b35-3a-fourier-grid-reindexing`. The FFT boundary defect is undefined notation in the original procedure; the interval and permutation clarifications are nonfatal prerequisite/proof omissions. All rows are owned at `3a-adjudicate`; no row was created for a mechanical failure. `defect-ledger.mjs append --file /tmp/ml101-b35-3a-ledger-rows.json --no-render` appended three valid rows. The frontier dependency ledger records the actual owned consumer checks. No published ledger edit was needed.

Actual local checks, all exit 0:

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-35.proof-contracts.json`: 18 items, zero errors; ten HIGH/CRITICAL reviews required.
- The same command with `--require-reviewed`, after completing all ten specific reviews: 18 items, zero errors.
- `node tools/tsx-run.mjs tools/precheck.mts` on the eleven ordered routed/risk-review item paths: eight proof-bearing items checked, zero failures; three definitions/algorithms had no phase proof to check.
- After all content/manifest edits, `node tools/proof-layout.mjs items/alg-radix-two-fft.md items/def-linear-state-space-model.md items/thm-s4-convolution-filter-complexity.md`: three items, nine steps, zero defects. No item was edited by Alpha, so no Alpha reflow was needed; this final layout pass covers all three accepted reader-edited carriers.
- Focused integrity script: decisions exactly equal the three scope obligations; all 18 item raw hashes still equal reader-post; both actual compact-v1 page bodies are empty. Each touched item’s reverse reader delta reproduces its immutable pre-reader hash.
- Live status recomputed from `.autopilot/machine-learning-all-101-2026-10-19` with the dispatched status command: run active at Step 3a, no in-flight dispatch reported. Recent Git history was checked; no historical handoff was used as active-state authority.

Alpha changed the batch proof contracts (risk reviews), two stale definition mirrors in the batch page manifest, the frontier ledger, and the canonical defect ledger, and wrote only the two task-named report/decision outputs. Item mathematical carriers and actual page files were preserved. No precheck stamp, judge record, hash stamp, gate battery, commit or stage transition was authored. Engine-owned stamping and gates remain pending.

Blockers: none in batch 35. Local adjudication obligations are complete.
