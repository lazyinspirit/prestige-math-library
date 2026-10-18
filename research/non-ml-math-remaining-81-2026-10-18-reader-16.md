# Step 3a reader report — batch 16

Run: non-ml-math-remaining-81-2026-10-18  
Batch: 16  
Verdict: no confirmed defect in the assigned pages or items; no edit or blocker.

## Inventory

Assigned pages opened:

- library/information-theory/distributed-source-coding.md (A page)
- library/information-theory/distributed-source-coding-examples.md (B page)

The A page prerequisites were also opened:

- library/information-theory/iid-lossless-source-coding-and-the-aep.md
- library/information-theory/method-of-types-and-finite-large-deviations.md

All 12 assigned items were opened and reviewed in dependency order:

1. def-it-gacs-korner-and-wyner-common-information
2. lem-it-finite-conditional-entropy-continuity
3. def-it-finite-iid-multisource
4. lem-it-conditional-type-class-cardinality
5. def-it-multiterminal-lossless-code
6. lem-it-multisource-block-conditional-law-factorization
7. def-it-jointly-typical-multisource-blocks
8. lem-it-conditional-typical-fan-cardinality
9. lem-it-multisource-typicality-probability
10. thm-it-slepian-wolf-rate-region
11. ex-it-binary-symmetric-slepian-wolf-region
12. ex-it-shared-random-binning-collision-probability

The direct item dependencies were opened: def-it-finite-mutual-information; def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices; def-it-finite-conditional-entropy; lem-it-finite-marginals-and-conditionals-are-pmfs; lem-it-finite-relative-entropy-continuity-on-simplex; def-finite-alphabet-iid-source; def-it-empirical-type-and-type-class; lem-it-type-class-cardinality-bounds; def-finite-law-self-information-and-entropy; def-finite-source-information-density-and-typical-set; def-identically-distributed-and-iid-random-variables; lem-finite-alphabet-iid-information-aep; thm-logarithm-derivative-and-integral; thm-it-finite-kl-nonnegative-equality; and thm-natural-logarithm-laws.

Relevant transitive suppliers and foundational definitions opened: def-finite-probability-space-and-event; def-finite-sum-in-a-commutative-monoid; lem-finite-sum-reindexing-and-fubini; def-random-element-and-real-random-variable; def-natural-logarithm; def-real-exponential-function-and-e; lem-it-finite-log-sum-inequality; lem-it-finite-product-law-is-iid; lem-it-number-of-n-types-polynomial-bound; def-it-finite-alphabet-product-law; def-convergence-in-probability; cor-iid-finite-variance-weak-law; def-measurable-function-between-measurable-spaces; def-sigma-algebra-generated-by-a-function; def-independent-families-of-event-classes; def-independent-sigma-algebras-and-events; def-independent-random-elements; def-law-or-distribution-of-a-random-element; def-convex-concave-and-midpoint-convex-functions; thm-algebra-of-derivatives; thm-algebra-of-continuous-functions; cor-mean-value-theorem; and thm-finite-jensen-inequality.

Also opened the batch manifest, notes, cross-batch dependency record, and proof-contract file. The eight proof-bearing contracts were checked against their item facts, cited sections, step references, derivations, and boundary entries. Their citations and derivation rows agree with the current authored proofs. Author notes and readiness records were used only for navigation.

## Review findings and page verdicts

No assigned or necessary dependency defect was confirmed.

- def-it-gacs-korner-and-wyner-common-information: the positive-support bipartite components give the maximal deterministic common part up to relabeling; the Wyner auxiliary-variable condition and objective are distinct and correctly stated.
- lem-it-finite-conditional-entropy-continuity: the uniform-reference KL identity proves entropy continuity on the full simplex; the entropy-difference identity handles zero-mass conditioning values.
- def-it-finite-iid-multisource and def-it-multiterminal-lossless-code: the finite alphabets, joint law, separate encoders, common decoder, error event, and subsequence/limsup rate convention are stated consistently.
- lem-it-conditional-type-class-cardinality and lem-it-multisource-block-conditional-law-factorization: the conditional type fibers factor over positions with fixed side information; the block conditional probability has a positive denominator on the stated support and factors coordinatewise.
- def-it-jointly-typical-multisource-blocks: the support restriction prevents logarithms of zero, and the conditional information terms are defined using the locally proved factorization.
- lem-it-conditional-typical-fan-cardinality: continuity controls conditional entropy near P and the finite joint-type count supplies the polynomial factor. The continuity-radius choice can be made with a smaller closed-ball radius, an immediate consequence of continuity.
- lem-it-multisource-typicality-probability: finite-symbol indicators control empirical frequencies; the finite-source AEP and finite-valued conditional surprisal variables control the information conditions, including zero-probability letters.
- thm-it-slepian-wolf-rate-region: the converse counts correctly decoded conditional typical blocks for each subset; independent per-word and per-encoder bin assignments give the stated collision product and union bound. Slack and a diagonal sequence of blocklengths establish the closed boundary under the item’s achievable-rate definition.
- ex-it-binary-symmetric-slepian-wolf-region: the four masses, conditional entropies, joint entropy, boundary rays, and p=0 and p=1/2 endpoints are correct. The deterministic common part is correctly asserted constant for p>0 only.
- ex-it-shared-random-binning-collision-probability: the two independent-map collision events have joint probability M^-2, while the shared-map conditions are the same event and have probability M^-1.

The dependency suppliers used in these arguments were checked for the needed hypotheses and conclusions. In particular, the finite-product IID proof handles all finite subfamilies; the type-class upper bound and conditional class count retain zero counts; and the finite KL nonnegativity supplier covers the example’s endpoint p=0.

**A-page verdict — Distributed Source Coding:** pass. The summary accurately describes the all-subset converse, independent random-binning achievability, nats convention, support restriction, and distinct common-information definitions. The diagram prose matches the separate encoders/common decoder model and expressly disclaims proof by diagram.

**B-page verdict — Distributed Source Coding — Examples:** pass. Its summary matches the two-source boundary and the finite collision comparison; it does not overstate the shared-map example.

## Source checks

- Cover and Thomas, Elements of Information Theory, 2nd ed., Chapter 15 §15.4.3, Theorem 15.4.2 (printed p. 556; https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf), states the many-source all-subset inequalities and says the proof follows the preceding two-source argument. Its displayed statement uses strict inequalities; the local theorem supplies a full proof and the diagonal slack argument for the closed achievable region used here.
- Cover and Thomas, Chapter 11 §11.1, Theorem 11.1.3 (printed pp. 350–352; https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf), gives the type-class upper bound and a polynomial lower bound with denominator (n+1)^|A|. The local type-class lemma claims the sharper exponent k−1 and proves it separately using the modal multinomial count and the bound on the number of attainable types; the source is not treated as proving that sharper exponent.
- Gács and Körner, “Common Information Is Far Less Than Mutual Information,” §2, printed pp. 150–151 (PDF pp. 2–3; https://cs-web.bu.edu/faculty/gacs/papers/commoninf.pdf), gives the support-equivalence/component construction underlying the deterministic common part. The source pages were inspected as scanned pages.
- Wyner, “The Common Information of Two Dependent Random Variables,” §1, printed pp. 163–165, reproduced in Tan’s EASIT notes (https://vyftan.github.io/papers/CommonInformation_EASIT.pdf), defines the quantity using a finite auxiliary variable, conditional independence, and the mutual-information objective. This supports the distinct Wyner definition in the item.

## Edits, remaining defects, and blockers

Edits: none. No confirmed defect was available for an authorized repair. No in-flight assigned item or A-page prose was changed; consequently no contract update, judge-stamp removal, reflow, precheck, or proof-layout command was needed.

Uneditable defects: none.

Blocker: none.

Coverage limitation: the run’s coverage JSON was not independently audited entry by entry; its combined terminal rendering was truncated. It was not treated as a verdict. The mathematical review covered all assigned carriers and their direct item dependencies, and the independent source checks used for this report are listed above.
