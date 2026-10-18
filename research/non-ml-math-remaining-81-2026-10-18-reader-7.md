# Step 3a reader report — batch 7

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `7`  
At review start, Autopilot status showed `3a-read` active and this dispatch not yet counted.

## Opened inventory

### Assigned pages

- A page: `library/information-theory/f-divergences-renyi-and-hypothesis-testing.md`.
- B page: `library/information-theory/f-divergences-renyi-and-hypothesis-testing-examples.md`.
- A-page requirements opened: `library/information-theory/measure-theoretic-information-and-conditioning.md` (draft) and `library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md` (published).

### Assigned items, reviewed in dependency order

- Level 0: `def-finite-probability-vector`; `lem-convex-generator-boundary-limits-exist`; `lem-finite-kl-generator-is-admissible`; `lem-finite-renyi-generators-are-convex`.
- Level 1: `def-finite-f-divergence`; `def-finite-hypothesis-testing-beta`; `def-finite-stochastic-kernel`.
- Level 2: `def-finite-kullback-leibler-divergence`; `lem-convex-perspective-is-subadditive`; `ex-binary-neyman-pearson-randomized-threshold`.
- Level 3: `def-finite-renyi-divergence`; `lem-finite-iid-log-likelihood-concentrates`; `thm-finite-f-divergence-data-processing`.
- Level 4: `thm-finite-kullback-leibler-data-processing`; `thm-finite-renyi-data-processing`; `thm-finite-renyi-limit-is-kullback-leibler`; `thm-kl-is-iid-type-ii-error-exponent`; `ex-binary-f-and-renyi-divergences`; `ex-disjoint-support-f-and-renyi-divergences`.

### Supporting item dependencies opened

I read the claim/definition clauses and relevant metadata of: `cor-cauchy-reals-lub-complete`, `cor-exponential-reciprocal-and-positivity`, `cor-second-derivative-characterises-convexity`, `def-abs-value`, `def-complete-ordered-field`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-derivative`, `def-expectation-on-a-finite-probability-space`, `def-finite-probability-space-and-event`, `def-natural-logarithm`, `def-randomized-test`, `def-real-numbers`, `def-real-power`, `def-test-size-and-power`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-test-zero-one-loss-risk-identities`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-exponential-limits-and-range`, `thm-finite-jensen-inequality-in-euclidean-space`, `thm-logarithm-derivative-and-integral`, `thm-logarithm-slower-than-every-positive-power`, `thm-natural-logarithm-laws`, `thm-real-power-continuity-and-derivatives`, and `thm-reals-ordered-field`.

I also checked the cited source passages relevant to the submitted claims: Polyanskiy–Wu, *Information Theory: From Coding to Learning*, Ch. 1 §1.2 (finite distribution notation); Ch. 7 §7.1, Definition 7.1 and equations (7.1)–(7.2), §7.2, Theorem 7.4, and §7.12, Definition 7.22 (source URL in the items); Ch. 14 §14.1, Definition 14.1, and §14.5, Theorem 14.13 and its proof (PDF pp. 231 and 240–241). I read van Erven–Harremoës, §I-A, formula (1) (finite-alphabet Rényi formula and zero conventions); §II-C, Theorem 5 and proof (PDF pp. 6–7); and §III-A, Theorem 9, at `https://arxiv.org/pdf/1206.2459`. I read Sason–Verdú, §II-B, Definition 3 and equations (35)–(39), including the zero and recession contributions (PDF pp. 8–9), and the relative-entropy generator example, equation (43) (PDF p. 9), at `https://arxiv.org/pdf/1508.00335`. The Oxford note locators are §10.1 (PDF pp. 58–59) and §13.1.1–Definition 13.1 (PDF pp. 76–77), at `https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf`.

## Edits and evidence

1. In `items/def-finite-hypothesis-testing-beta.md`, I corrected the second reference title, which did not identify the linked PDF, to `George Deligiannidis, Foundations of Statistical Inference, §§10.1 and 13.1`. The linked PDF title page names that work and author. Section 13.1.1 (PDF pp. 76–77) defines randomized tests and the power/size quantities; §10.1 (PDF pp. 58–59) identifies the two zero-one testing risks with type-I and type-II errors. The first reference, Polyanskiy–Wu, Ch. 14 §14.1, independently supports the randomized Neyman–Pearson orientation and the lower-boundary convention.

2. In `items/lem-finite-kl-generator-is-admissible.md`, I added `def-derivative` as a direct dependency and made the identity/constant derivative calculations explicit from their difference quotients before applying the product rule and logarithm derivative. This closes the short calculus prerequisite used to obtain $f'(t)=\log t+1$ and $f''(t)=1/t$. I updated this item's proof-contract citation and derivation. The item's frontmatter had no `verification.judge` record to remove.

No mathematics or page prose required repair. I made no edits to B-page prose, published items, or other batches.

## Unedited defects

None found. There are no proposed withdrawals or unresolved mathematical defects to route.

## Page verdicts

- `f-divergences-renyi-and-hypothesis-testing`: no confirmed defect remains. The page summary accurately covers the finite alphabet, support conventions, shared-kernel data processing, order-one limit, and null/alternative orientation of the iid testing exponent.
- `f-divergences-renyi-and-hypothesis-testing-examples`: no confirmed defect found. Its summary matches the three examples' binary calculations, support cases, and randomized threshold orientation.

## Validation and blocker

- `reflow` and `precheck` ran for both changed items. The KL-generator lemma reflowed and passed direct precheck; the beta definition was unchanged by reflow and reported 0 checked / 0 failing proofs, as expected for a definition.
- Final proof-layout command: `node tools/proof-layout.mjs items/lem-finite-kl-generator-is-admissible.md items/def-finite-hypothesis-testing-beta.md` — 2 items, 3 proof steps, 0 defects.
- Blocker: none.

## Coverage note

All 19 assigned items, both assigned pages, both A-page requirement pages, and the supporting item clauses needed for these claims were opened. For published supporting items, I checked the exact relevant claim/definition clauses rather than independently auditing every unrelated proof in their dependency closures. The relevant external source passages and locations are listed above; I found no unresolved source or mathematical uncertainty.
