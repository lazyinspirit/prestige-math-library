# Phase 2 next 18 — Step 3a scope review — Markov kernels and Markov chains

## Decision

**Insufficient.** The current 18-item A page and 9-item B page give a strong
core treatment of kernels, path-law construction, finite-dimensional laws,
future functionals, elementary examples, killing/absorption, and the
countable-state martingale problem. They do not yet close the pair's inherited
conditional-independence seam or all of the interfaces promised to downstream
Markov-chain pages. This is a local enrichment issue; no pair merger is
recommended.

## Blocking scope omissions

1. **Conditional independence and the Markov characterization are absent.**
   The current library has no item defining conditional independence. The
   published precursor review in
   `research/frontier-31a-batch-4.coverage.json` explicitly deferred
   Aldous--Chewi Lecture 9, Definition 9.1, its preservation fact, the splice
   lemma, and the conditional-independence conclusions of Theorem 9.3 to
   `markov-kernels-and-markov-chains`; all of those deferrals were retained as
   `stands` in `research/frontier-31a-alpha-h-scope-decisions.json`. None is in
   the current manifest or coverage. Varadhan §4.4, Theorem 4.9 also identifies
   the one-sided Markov conditional-expectation identity with conditional
   independence of past and future given the present. Enrich the A page with a
   definition of conditional independence given a sigma-algebra, the needed
   conditional-expectation equivalence/preservation result, and an explicit
   corollary characterizing the Markov property as conditional independence of
   past and future given the present. The owner should also either add the
   deferred Borel-space splice lemma or explicitly reroute that retained
   obligation.

2. **The designed multi-step conditional law is missing from the result
   inventory.** The prose contract for
   `thm-chapman-kolmogorov-equations` at
   `research/plan-probability-track.md:1713` includes both
   `K^{m+n}=K^mK^n` and
   `P(X_{m+n} in A | F_m)=K^n(X_m,A)`. The current manifest statement contains
   only the kernel semigroup identity. The later future-functional theorem can
   be specialized and combined with the finite-dimensional formula to derive
   the missing identity, but no current result states this basic transition
   interface. Enrich that theorem or add a corollary stating the bounded-test
   and indicator forms explicitly. Varadhan §4.4, Theorem 4.8 gives the full
   conditional-distribution statement and its argument.

3. **Strong Markov is too narrow for the pair's downstream role.** Both
   `thm-discrete-strong-markov-property` and the post-hitting corollary assume
   the stopping/hitting time is almost surely finite. The next planned page,
   `recurrence-transience-and-hitting-times-for-markov-chains`, uses strong
   Markov at return and hitting times that may be infinite for transient
   chains. Durrett, Theorem 5.2.5 states the identity on `{tau < infinity}` for
   an arbitrary stopping time, avoiding any need to define `X_infinity`.
   Enrich the theorem and hitting-time corollary with this eventwise form (and,
   if retained from the source, uniformly bounded time-dependent future
   functionals).

## Coverage and library fit

The current three-source Markov harvest is authoritative and fetch-verified:
Durrett §§5.1--5.2 covers the deterministic- and stopping-time Markov
arguments, Shalizi's complete five-page Lecture 3 proves the
arbitrary-measurable-space Ionescu--Tulcea theorem, and Roch Note 24 §1 covers
the discrete generator and martingale problem. I independently read the full
relevant arguments in Shalizi Theorem 33, Durrett Theorems 5.2.1--5.2.5, the
complete Aldous--Chewi Lecture 9 §§9.1--9.3 argument, and Varadhan §4.4 through
Theorem 4.9. The general-space Ionescu--Tulcea scope is supported.

The current coverage nevertheless omits the Aldous--Chewi and Varadhan rows
needed to carry the missing conditional-independence and multi-step
conditional-law interfaces. Those rows should be added when the owner enriches
the scope. The B page is otherwise broad and well placed: iid, deterministic,
random-walk, absorbing, Gaussian AR(1), and random-mapping examples are paired
with counterexamples about marginals, filtration dependence, and time
inhomogeneity. Recurrence, invariant laws, ergodic limits, and Brownian hitting
theory remain correctly assigned to later pages.

## Records checked

- Current pair manifest, coverage, notes, cross-batch ledger, planning record,
  scope ledger, live plan, probability prose design, drift evidence, and Step-1
  report.
- The published precursor page and its retained destination decisions for this
  pair.
- Current dependency closure and adjacent PT-16--PT-18 designs. There is no
  current Step-3 owner receipt for this pair and no batch-2 cross-batch edge.
- Mechanical checks on the current batch pass: `manifest-deps` (55 items, 0
  errors), `content-policy --manifest-only` (0 errors/warnings),
  `coverage-checklist --require-destination` (0 errors/warnings), and
  `source-fetch-check` (6/6 fetch-verified and resolved across both batch-2
  pairs). These checks do not cure the scope omissions above.

Owner action required: enrich the current pair as above, refresh its coverage,
and record `proceed` for the resulting scope. I did not edit either scaffold or
make an owner decision.
