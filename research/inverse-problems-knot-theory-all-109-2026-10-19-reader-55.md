# Step 3a reader report — batch 55

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Scope: batch `55` only

## Opened inventory

Assigned pages:

- `library/inverse-problems/dynamic-data-identifiability-and-system-realization.md` — draft, `compact-v1`, five A-items, empty Markdown body.
- `library/inverse-problems/dynamic-data-identifiability-and-system-realization-examples.md` — draft, `compact-v1`, five B examples, empty Markdown body.

Assigned items, reviewed by their in-batch dependency levels:

- Level 0: `def-ip-discrete-linear-input-state-output-experiment`.
- Level 1: `alg-ip-exact-block-hankel-realization`, `thm-ip-finite-observability-identifies-initial-state`, `thm-ip-state-similarity-preserves-input-output-data`, `cex-ip-continuous-time-frequency-aliasing`.
- Level 2: `thm-ip-hankel-realization-recovers-controllable-observable-system`, `ex-ip-similar-state-space-realizations-same-data`, `ex-ip-unobservable-state-mode`.
- Level 3: `ex-ip-forward-euler-observation-model-error`, `ex-ip-small-hankel-singular-value-amplifies-realization-perturbation`.

Direct item-supplier interfaces opened: `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `prop-standard-coordinate-inner-products`, `def-rank-and-nullity`, `thm-rank-nullity`, `thm-matrix-multiplication-laws`, `def-invertible-matrix-and-general-linear-group`, `thm-singular-value-decomposition`, `cor-rank-equals-number-of-nonzero-singular-values`, `def-moore-penrose-pseudoinverse`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `prop-full-column-rank-pseudoinverse-formula`, `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, `lem-pythagorean-theorem-and-finite-orthogonal-sums`, `def-singular-values-of-an-endomorphism`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `lem-derivative-of-a-power`, `lem-finite-rank-operators-are-compact`, `def-bounded-linear-operator`, `def-hilbert-space`, and `thm-reals-cauchy-complete`.

The cross-batch item supplier `def-ip-error-budget-for-computed-inversion` (batch `4`, draft) was opened at its Definition interface. The nine page-level `requires` targets were checked for current page identity and status; all targets exist. The run-specific rendered reader bundle was not present in the inspected run state, so current carriers and the batch proof contract were used directly.

## Review and edits

1. `ex-ip-forward-euler-observation-model-error`, Example and Verification step 1.2: the example invoked the computed-inversion error-budget definition, whose input includes a datum `b ∈ Y`, but did not provide one while claiming that all definition hypotheses held. I added `b=0` to the example and its Given line, and made step 1.2 check `b=0 ∈ Y=R`. The definition’s value of `d_h` is independent of `b`; the added datum completes the interface instance. I updated the `verify-error-budget-hypotheses` proof-contract claim to match the repaired step. No stale `verification.judge` record was present.

2. `alg-ip-exact-block-hankel-realization`, source locator: after opening the cited MIT notes, I made the locator name both the Theorem 25.3 proof’s Hankel/pseudoinverse argument (PDF pp. 7–8) and Exercise 25.4(a)–(e), which gives the Markov-parameter construction (PDF p. 12). The local algorithm and recovery proof remain the mathematical basis of the assigned claims.

The exact scalar and matrix calculations in the remaining examples check out. The observability estimate follows from the least singular value inequality and the orthogonal-projection contraction. The recovery theorem’s full-rank factors give the common invertible coordinate change, and its empty-state case is consistent with the zero-sized matrix conventions. The state-similarity diagram commutes: both paths apply `T^{-1}A`; the proof establishes the result independently by induction. No other diagrams occur in the assigned items.

The assigned statement/definition/example sections are complete and uninterrupted by links; references appear in the corresponding following reference sections. Both assigned pages have no summaries or Markdown body. No other defect requiring an edit or escalation was found.

Uneditable defects: none.

## Source checks

- Mohammed Dahleh, Munther A. Dahleh, and George Verghese, [*Lectures on Dynamic Systems and Control*, Chapter 25](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf): §25.3, equations (25.10)–(25.12), PDF p. 5, gives the impulse/Markov-parameter convention with the one-sample shift; §25.4, Theorem 25.3 proof, PDF pp. 7–8, uses Hankel factors and pseudoinverses to obtain similarity; Exercise 25.4(a)–(e), PDF p. 12, constructs a realization from Markov parameters and a block-Hankel factorization.
- Sanjay Lall, [*State-Space Realization*, Engr207c lecture notes](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf): §9.2, Theorem 8 and the finite Hankel factorization discussion, PDF pp. 5–6; §9.3, realization-algorithm discussion, PDF pp. 7–8.

These passages support the realization context and conventions. The finite-horizon statements reviewed here are established by their local proofs, not attributed to a source theorem with different hypotheses.

## Page verdicts

- `dynamic-data-identifiability-and-system-realization`: no page-presentation or inventory defect found. It is a draft compact-v1 A-page with its five assigned items and no body summary. Its nine prerequisite-page edges are present; none is used as an item-level proof premise.
- `dynamic-data-identifiability-and-system-realization-examples`: no page-presentation or inventory defect found. It is a draft compact-v1 B-page with its five assigned examples and no body summary.

## Validation and blockers

- Reflow: unchanged for both changed items.
- Precheck: `ex-ip-forward-euler-observation-model-error` passed; the algorithm definition was not applicable (0 proof items checked, 0 failures).
- Final proof layout: `node tools/proof-layout.mjs items/alg-ip-exact-block-hankel-realization.md items/ex-ip-forward-euler-observation-model-error.md` reported 2 items, 4 steps, 0 defects.
- No batch-55 blocker remains. The active run status showed a separate `split-30` blocker in batch `30`, outside this assignment.

## Coverage note

I opened the current assigned carriers before supplier files to determine their exact current dependency list; the mathematical review then checked the supplier interfaces used by each proof. Thus the literal file-opening order was not supplier-first. I checked the relevant interfaces of the direct published suppliers but did not re-prove their entire transitive proof chains. I also checked all nine page-level prerequisite targets’ frontmatter, not their item bodies, because no assigned proof uses those pages as a premise. No known mathematical defect remains unreported.
