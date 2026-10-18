# Step 3a reader report — batch 20

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Assigned pages: `secrecy-and-information-privacy` (A), `secrecy-and-information-privacy-examples` (B)

## Opened inventory

Read both assigned pages and all 17 assigned items in dependency order:

- `thm-it-universal-hashing-leftover-bound`
- `def-it-finite-source-privacy-utility-region`
- `def-it-information-leakage-and-equivocation`
- `lem-it-finite-wiretap-product-kernel-is-stochastic`
- `def-it-wiretap-channel`
- `thm-it-perfect-privacy-kernel-criterion`
- `def-it-degraded-wiretap-channel`
- `def-it-weak-and-strong-secrecy`
- `lem-it-finite-dmc-information-density-concentration`
- `def-it-wiretap-secrecy-capacities`
- `lem-it-channel-resolvability-soft-covering`
- `lem-it-classical-wiretap-auxiliary-cardinality`
- `thm-it-finite-classical-wiretap-auxiliary-capacity`
- `thm-it-degraded-wiretap-secrecy-capacity`
- `ex-it-information-bottleneck-finite-model`
- `ex-it-weak-secrecy-does-not-imply-strong-secrecy`
- `ex-it-degraded-wiretap-capacity`

Opened the three A-page prerequisites listed in its frontmatter: `discrete-memoryless-channel-capacity`, `iid-lossless-source-coding-and-the-aep`, and `trust-region-and-cubic-regularization-methods`.

Opened the direct current-run draft suppliers used by the assigned proofs, before their consumers:

- Batch 7: `def-finite-probability-vector`, `def-finite-stochastic-kernel`.
- Batch 4: `def-it-information-units-and-logarithm-base`, `lem-it-finite-marginals-and-conditionals-are-pmfs`, `def-it-finite-mutual-information`, `def-it-finite-conditional-entropy`, `def-it-finite-conditional-mutual-information`, `lem-it-finite-log-sum-inequality`, `thm-it-finite-kl-nonnegative-equality`, `thm-it-finite-conditional-mutual-information-identities-and-equality`, `thm-it-finite-entropy-chain-rule`, `thm-it-finite-markov-data-processing`, `thm-it-fano-inequality`, and `cor-it-fano-with-erasure-or-out-of-alphabet-estimates`.
- Batch 12: `def-channel-sequence`, `def-discrete-memoryless-channel`, `lem-discrete-memoryless-channel-block-kernels-are-stochastic`.

Also opened the relevant published definitions and results used by those suppliers: `def-real-exponential-function-and-e`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-derivative-of-exponential`, `lem-natural-logarithm-bounded-by-argument`, `def-finite-probability-space-and-event`, `def-random-element-and-real-random-variable`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-finite-sum-in-a-commutative-monoid`, `lem-finite-sum-reindexing-and-fubini`, `def-measure-kernel-and-probability-kernel`, `def-convex-concave-and-midpoint-convex-functions`, `thm-finite-jensen-inequality`, `cor-mean-value-theorem`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `thm-logarithm-derivative-and-integral`, `thm-heine-borel-rn`, and `thm-extreme-value-metric`.

Read the batch 20 proof-contract file and compared all 11 proof-bearing contract derivation maps, boundary cases and finite checks with the current proofs. The manifest, source-evidence record, contracts and prior author notes were used as navigation and checked against the actual item text, not treated as verdicts.

## Review and page verdicts

**A page — mathematical pass.** The summary accurately distinguishes the joint Bob/Eve channel from its marginals, states the public-seed leftover-hash TV bound and its exact output-size condition, separates weak from strong secrecy, and gives the auxiliary and degraded capacity formulas proved by the assigned items. The privacy–utility and perfect-privacy descriptions match their definitions and theorem. The page prerequisites were opened; no page-prose repair was needed. One formatting defect remains in a published dependency, recorded below and routed in the JSON.

**B page — pass.** Its three-example summary matches the finite privacy calculation, the weak-but-not-strong secrecy sequence, and the degraded BEC calculation. No page-prose repair was needed.

The mathematical arguments checked out. In particular, the leftover-hash collision expansion and public-seed averaging give the stated bound in terms of `g(X|Z)`; the perfect-privacy criterion handles zero-mass release symbols; the soft-covering proof treats support, both missing-mass terms, and the truncated-likelihood variance; the cardinality reduction preserves `P_X` while not decreasing the objective; and the wiretap theorem's threshold decoder, memoryless converse telescope, codebook selection, expurgation and per-message divergence identity establish the four stated capacities. The degraded specialization and all three example computations follow from the stated finite laws.

For the main source checks, Narayan–Tyagi, *Multiterminal Secrecy by Public Discussion*, Chapter 5, Lemma 5.9 and Remark 5.10 (printed pp. 184–185), state the leftover-hash bound with classical side information and public seed. Its conditional min-entropy term is the negative logarithm of `sum_z max_x P_XZ(x,z)`, matching the local guessing-probability form. El Gamal–Kim, *Network Information Theory*, Chapter 23, pp. 23-9–23-10, gives the auxiliary formula and degraded specialization; pp. 23-19–23-20 give the corresponding converse telescope. Bloch–Laneman, §§II and V, distinguish normalized leakage from stronger secrecy metrics and treat resolvability-based memoryless wiretap coding; the assigned local proof separately establishes the unnormalized mutual-information conclusion. Makhdoumi–Salamatian–Fawaz–Médard, arXiv:1402.1774v5, §§II–III, gives the finite probabilistic privacy mapping, mutual-information leakage/utility model and privacy-funnel formulation.

## Repairs

- In `items/lem-it-finite-wiretap-product-kernel-is-stochastic.md`, inserted the required blank line between numbered proof steps and after the Proof heading. This is a formatting-only repair; the proof text and mathematics are unchanged.
- In `items/def-it-finite-source-privacy-utility-region.md`, `items/thm-it-perfect-privacy-kernel-criterion.md`, and `items/ex-it-information-bottleneck-finite-model.md`, corrected the author order in the cited Privacy Funnel paper title. The paper's arXiv v5 front page (PDF p. 1) lists Ali Makhdoumi, Salman Salamatian, Nadia Fawaz, then Muriel Médard. The existing URL and section locators were retained.
- Reflow reported `unchanged` for all three citation-corrected items. Precheck reported zero failures for each: the definition had 0 checked proofs; the theorem and example each passed their direct proof checks. No stale `verification.judge` records were present. The proof-contract dependency IDs and derivations remained accurate and needed no change because the bibliographic author order is not duplicated in those contract rows.
- Final layout check: `node tools/proof-layout.mjs items/lem-it-finite-wiretap-product-kernel-is-stochastic.md items/def-it-finite-source-privacy-utility-region.md items/thm-it-perfect-privacy-kernel-criterion.md items/ex-it-information-bottleneck-finite-model.md` — 4 items, 9 steps, 0 defects.

## Uneditable defects and blockers

- `lem-natural-logarithm-bounded-by-argument`, `## Proof`: the introductory paragraph `**Given:** The hypotheses in the Statement.` is followed immediately by step 1.1, without the required blank line between proof introduction and first step. This published item is a direct dependency of the assigned `lem-it-channel-resolvability-soft-covering`; I did not edit published content. The math itself is sound.

**Blocker:** The published proof-format defect needs owner repair before the final proof-layout validation can pass for this dependency. No other blocker.

## Coverage note

All assigned pages and items and the direct draft suppliers listed above were opened. I checked the statements and relevant proof portions of the published calculus, probability and compactness suppliers, but did not independently re-audit every upstream dependency in their own closures. Several items cite Cuff lecture PDFs; the web text extraction for Lecture 13 was garbled, so I did not rely on those lecture PDFs to resolve a claim. The local proofs and the cited book/paper passages listed above supplied the mathematical checks recorded here.
