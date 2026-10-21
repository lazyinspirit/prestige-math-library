# Step 3a reader report — batch 23

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-23`)

## Opened inventory

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch 23 pages manifest, and the batch 23 source-evidence bundle. The run status at the start of this review was `running`; batch 23 was still uncovered at `3a-read`.

Assigned pages and items:

- Pages: `posterior-computation-error-and-diagnostics` (A) and `posterior-computation-error-and-diagnostics-examples` (B).
- Items, reviewed supplier-first: `def-ip-posterior-computation-error-budget`; `prop-ip-bounded-posterior-functional-error`; `ex-ip-exact-invariant-kernel-short-run`; `ex-ip-low-ess-despite-correct-invariance`; `ex-ip-biased-pde-solver-posterior-error`.

Local suppliers opened to check the assigned definitions, theorem steps, and examples:

- Probability and Markov-chain interfaces: `def-axiom-of-choice`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-measure-kernel-and-probability-kernel`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `def-moments-variance-and-covariance`, `def-stationary-process-and-canonical-shift`, `def-total-variation-distance-for-probability-laws`, `def-statistical-and-computational-error-ledger`, `def-functional-specific-effective-sample-size`, and `def-standard-normal-and-normal-laws`.
- Result suppliers: `thm-pathwise-error-ledger-decomposition`, `thm-total-variation-bounds-for-expectations`, `thm-invariant-initial-law-makes-the-chain-stationary`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, and `cor-canonical-markov-chain-on-path-space`.
- Markov-chain proof context: `def-conditional-probability-given-a-sigma-algebra`, `def-filtration-and-filtered-probability-space`, `def-stochastic-process-and-finite-dimensional-distributions`, `def-initial-distribution-of-a-markov-chain`, `def-iterated-transition-kernels`, `thm-finite-dimensional-laws-of-a-markov-chain`, and `thm-dynkin-pi-lambda`.
- Conditional-expectation and finite-sum properties used in the repaired examples: `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-taking-out-what-is-known`, and `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Also inspected the current batch 23 and run-wide proof-contract files before updating the affected entries.

## Review and repairs

- `def-ip-posterior-computation-error-budget`: the common measurable state space and pushforward-law convention make each endpoint comparable; the six terms telescope as stated. The TikZ diagram has the correct direction and labels each adjacent pair by its absolute difference. No defect found.
- `prop-ip-bounded-posterior-functional-error`: the total-variation constant 2 matches the library event-supremum convention; the complete-budget bound is the pathwise telescoping theorem; and the stationary finite-sample variance expansion has `N` diagonal terms and `N-k` pairs at lag `k`. Absolute covariance summability gives the stated finite bound and does not assert a CLT. No defect found.
- `ex-ip-exact-invariant-kernel-short-run`: repaired the missing chain-existence premise by explicitly assuming AC, specifying the discrete sigma-algebra, defining the kernel on every event, and invoking the Ionescu–Tulcea construction for the canonical path-space chain. Added direct suppliers for chain construction, conditional-expectation algebra, and expectation linearity. The calculation remains `lambda_0 = 1 - 2/1000 = 499/500` and `100^-1 sum_{j=1}^{100} lambda_0^j = (499/100)(1 - (499/500)^100) > 0`, so exact invariance and positive finite-run bias are both established.
- `ex-ip-low-ess-despite-correct-invariance`: made the same state-space, complete-kernel, and chain-existence repairs. Added the conditional-expectation and “taking out what is known” suppliers. The covariance argument now derives `E[X_n] = 0` before identifying covariance, and explicitly uses the bounded `F_k`-measurable factor `X_0`. It gives `rho_f(k) = (49/50)^k`, `tau_f = 99`, and theoretical `ESS_f(10,000) = 10,000/99`, without inferring a CLT.
- `ex-ip-biased-pde-solver-posterior-error`: completion of squares gives the exact posterior `N(0, 1/2)` and solver posterior `N(-1, 1/2)`; the indicator expectations are `1/2` and `Phi_0(sqrt(2))`, respectively. The solver term is assigned to the correct ledger edge, and the text limits the example to its declared toy solver. No defect found.

Updated both `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-23.proof-contracts.json` and the run-wide proof-contract mirror for the two repaired examples. Their supplier citations and proof-step maps now match the current item text. The prior author `risk_review` entries are labeled as pre-reader snapshots; this report does not add a post-repair author review. The repaired items had no `verification.judge` record to remove. No page or other item was edited.

The cited locators checked against the source PDFs include Dashti–Stuart, §4.2, Assumptions 4.7 and Theorems 4.8–4.9; Cotter et al., §4.2, pCN proposal (4.7)–(4.11), and §6.1, Theorem 6.2; Gibbs–Su, §2, equation (2); Geyer, §1.1, equation (1.9) and the adjoining CLT caution; Levin–Peres–Wilmer, §4.1, Example 4.1 and Proposition 4.5; and Vehtari et al., §3.2, equations (7)–(9). The local proofs independently establish the claims used here.

## Remaining uneditable finding

The published dependency `thm-invariant-initial-law-makes-the-chain-stationary`, Verification step 1.2, forms a lambda-system using `P_X(theta^(-m) B)` before establishing that the shift preimage of every product-measurable set `B` is measurable. Step 5.2 later proves shift measurability from cylinder preimages, so this is an immediately closable, nonfatal omission. Establish shift measurability before defining/using the lambda-system, or include preimage measurability in its definition. The assigned consumer is `ex-ip-low-ess-despite-correct-invariance`. This published item was not edited.

## Page review

- `posterior-computation-error-and-diagnostics` (A): no page defect found. YAML frontmatter only; item inventory matches the assigned definition and proposition; `page_layout: compact-v1` is present.
- `posterior-computation-error-and-diagnostics-examples` (B): no page defect found. YAML frontmatter only; example inventory matches the three assigned examples; `page_layout: compact-v1` is present.

Both pages have empty Markdown bodies and contain no summaries. All assigned item statements keep their links after the complete statement/example sections.

## Validation and blocker

- `reflow.mts`: unchanged for both repaired items.
- `precheck.mts`: pass for both repaired items (`direct` strategy).
- `proof-layout.mjs items/ex-ip-exact-invariant-kernel-short-run.md items/ex-ip-low-ess-despite-correct-invariance.md`: 2 items, 9 steps, 0 defects.
- Blocker: none. The only remaining finding is the published, nonfatal proof-step omission described above.
