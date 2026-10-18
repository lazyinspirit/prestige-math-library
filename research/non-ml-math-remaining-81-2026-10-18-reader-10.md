# Step 3a Reader Report — batch 10

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Scope: batch `10`

## Inventory opened

Pages:

- `library/information-theory/stationary-ergodic-sources-and-universal-coding.md` (A)
- `library/information-theory/stationary-ergodic-sources-and-universal-coding-examples.md` (B)

Assigned items, read in dependency order:

`def-finite-alphabet-stationary-source`, `def-finite-block-information-and-entropy`, `def-finite-support-binary-prefix-code`, `lem-triangular-information-averages`, `lem-finite-kl-nonnegative-choice-free`, `alg-lz78-incremental-prefix-code`, `def-ams-source-and-stationary-mean`, `def-finite-block-source-code`, `def-finite-state-compressibility`, `def-general-process-information-rate`, `def-lz77-previous-match-phrase-length`, `def-past-information-density-finite-alphabet`, `lem-prefix-code-entropy-bounds`, `lem-finite-block-entropy-chain-rule`, `lem-aep-implies-fixed-rate-lossless-coding`, `lem-lz78-distinct-parse-ziv-inequality`, `thm-ams-stationary-mean-asymptotic-dominance`, `thm-lz78-prefix-code-lossless`, `thm-stationary-entropy-rate-limit`, `lem-ams-stationary-mean-dominates-tail-events`, `thm-lz78-individual-sequence-finite-state-optimality`, `lem-finite-alphabet-past-information-convergence`, `thm-stationary-expected-prefix-code-rate`, `thm-componentwise-shannon-mcmillan-breiman`, `thm-lz78-stationary-expected-rate`, `lem-infinite-past-conditional-block-information-rate`, `cor-ergodic-shannon-mcmillan-breiman`, `cor-smb-limit-is-conditional-entropy-under-ac`, `cor-fixed-rate-lossless-coding-stationary-ergodic`, `thm-ams-ergodic-information-aep`, `thm-lz77-phrase-length-entropy-rate`, `cor-fixed-rate-lossless-coding-ams-ergodic`, `ex-nonstationary-block-entropy-rate-oscillation`, `ex-lz78-parse-with-explicit-terminator`, and `ex-iid-and-markov-source-entropy-rates`.

External suppliers opened as needed included `def-measure-preserving-transformation-and-system`, `def-ergodic-measure-preserving-system`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-birkhoff-ergodic-theorem`, `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`, `thm-dominated-convergence`, `def-integral-logarithm`, `cor-integral-logarithm-agrees-with-natural-logarithm`, `thm-monotonicity-of-the-integral`, `def-oriented-integral`, `thm-kraft-inequality`, `thm-fatou-lemma`, `def-axiom-of-choice`, `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`, `def-measure-concentrated-on-a-measurable-set`, `def-mutually-singular-measures`, `thm-monotone-class`, `thm-monotone-convergence-for-the-integral`, `thm-conditional-probability-multiplication-and-chain-rules`, `thm-birkhoff-ergodic-probability-case-for-strong-laws`, `thm-kac-return-time-formula`, `thm-ergodicity-and-invariant-functions`, `thm-birkhoff-limit-identification-on-finite-measure-spaces`, `def-strict-and-mod-null-invariant-sigma-algebras`, `def-conditional-expectation-given-a-sigma-algebra`, `thm-first-borel-cantelli`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-integral-triangle-inequality`, and `thm-linearity-of-the-lebesgue-integral-on-l-one`.

## Source checks

- Robert M. Gray, *Entropy and Information Theory*, Chapter 8 §§8.2–8.4, printed pp.153–164 ([text](https://ee.stanford.edu/~gray/it.pdf)): finite-past information, stationary SMB and AMS context.
- Robert M. Gray, *Probability, Random Processes, and Ergodic Properties*, §6.3, printed pp.130–132 ([text](https://ee.stanford.edu/~gray/arp.pdf)): asymptotic domination and null future-tail transfer.
- Algoet and Cover, “A Sandwich Proof of the Shannon–McMillan–Breiman Theorem,” Theorem 4, PDF pp.8–9 ([paper](https://isl.stanford.edu/~cover/papers/paper83.pdf)): the AMS likelihood-ratio sandwich result.
- MIT OCW 6.441, Chapter 8, Theorem 8.1 and the §8.2 proof through printed p.95 ([notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/099eee31611a15cbb951bd427a89428f_MIT6_441S16_chapter_8.pdf)): stationary-ergodic SMB and its finite-order Markov approximation argument.
- Stanford EE376C, *Universal Schemes in Information Theory*, §§1.3–1.4, Theorems 1.3.3, 1.3.6 and 1.4.1, PDF pp.6–10 ([notes](https://ee376c.sites.stanford.edu/sites/g/files/sbiybj31816/files/media/file/combined_lecture_notes_0.pdf)): the Ziv inequality, expected-rate argument and individual-sequence theorem statement.
- Kontoyiannis, *Recurrence and Waiting Times in Stationary Processes and Their Applications in Data Compression*, Chapter 5 §§5.1–5.2, PDF pp.49–54 ([dissertation](https://www.dpmms.cam.ac.uk/~ik355/PAPERS/thesis.pdf)): recurrence-time definition, Theorem 6, Corollary 6(a), and recurrence/match-length relation.
- Satyadev Nandakumar, *Lempel Ziv 1978*, §§1–3, PDF pp.1–7 ([notes](https://www.cse.iitk.ac.in/users/satyadev/sp14/LZ78.pdf)): information-lossless finite-state encoders and LZ78 individual-sequence context.
- Northeastern EE477, Lempel–Ziv Lecture 3–4, Theorem 3, PDF p.5 ([notes](https://www.khoury.northeastern.edu/home/vip/teach/IRcourse/2_indexing_ngrams/lecture_notes/lempel_ziv/lecture3_4.pdf)): the stationary-ergodic recurrence-time limit and event duality.

The linked Cover–Thomas PDF endpoint returned an internal error in the browser. I did not rely on that source for a proof finding; the relevant bounds were checked against the local proofs and the accessible sources above.

## Edits and evidence

1. **`lem-triangular-information-averages`, proof steps 1.2, 2.1 and 3.1; Facts & Assumptions F5–F7.** The original proof used setwise measure preservation as if it directly supplied integral invariance, and inferred equality of the integral of the Birkhoff limit without spelling out continuity under $L^1$ convergence. It also passed from decreasing Birkhoff limits with integrals tending to zero to a zero infimum without naming the dominated-convergence step. Added the exact suppliers for integral invariance, integral linearity and the integral triangle inequality; step 3.1 now applies dominated convergence under the integrable envelope $U_1^*$. Added the three suppliers to `deps` and the corresponding citations/derivations to the proof contract. No `verification.judge` record was present.

2. **`lem-infinite-past-conditional-block-information-rate`, proof step 2.2.** The original factorization used the unshifted $p_{k+i}(X_i)$; the conditional probability of $X_i$ given the refined past $X_{-k}^{i-1}$ is the time-$i$ shift of the finite-past conditional probability. Rewrote the factors as $p_{k+i}(X_0)\circ T^i$, then passed to the shifted limit. Updated the exact proof-contract derivation and finite-smoke assertion, and corrected two boundary-evidence references that pointed to nonexistent old proof steps. No `verification.judge` record was present.

3. **`thm-ams-ergodic-information-aep`, proof step 3.1.** The original proof transferred the stationary SMB conclusion to suffixes with moving start $k(n)$ without establishing the almost-sure result at those starts. Added the countable intersection of shifted SMB full-measure sets and used $(n-k(n))/n\to1$. Updated the exact proof-contract derivation. No `verification.judge` record was present.

No original Statement or Definition changed, so no dependency-interface consumer review was triggered.

## Checks

| Item | Reflow | Precheck |
|---|---|---|
| `lem-triangular-information-averages` | unchanged | PASS |
| `lem-infinite-past-conditional-block-information-rate` | unchanged | PASS |
| `thm-ams-ergodic-information-aep` | unchanged | PASS |

Final proof-layout command on all three changed items: `proof-layout: 3 items, 14 steps, 0 defects`.

## Defects not edited

None found outside the authorized repair scope.

## Page verdicts

- **`stationary-ergodic-sources-and-universal-coding` (A): pass.** Its summaries accurately distinguish stationary, ergodic and AMS assumptions; identify the separate AC conditional-expectation result; and state the coding-rate boundary and LZ78/LZ77 conclusions without adding stronger claims. The checked source locators support the relevant descriptions.
- **`stationary-ergodic-sources-and-universal-coding-examples` (B): pass.** The source summary matches the bit convention and the LZ78 terminator convention. The finite parse, trie labels, deterministic/fair block entropy subsequences, and IID/Markov rate computations are consistent with the assigned items.

## Blocker

None.

## Coverage limits

All 35 assigned items and both assigned pages were opened, along with the direct external suppliers used in their proofs. I did not independently audit every transitive proof closure of published suppliers. The Cover–Thomas PDF was inaccessible and is not treated as inspected evidence; accessible local proofs and the cited sources above resolve the mathematical claims reviewed here.
