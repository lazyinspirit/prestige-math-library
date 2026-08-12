## Batch 5 of run `frontier-12` — finite probability and the probabilistic method

**One A/B pair, deliberately.** This is the highest-leverage pair in the run: 27
unscaffolded A pages sit downstream of it. You have a whole Beta's attention for
one subject — use it to read more of each source, not to finish early.

| | |
|---|---|
| A page | order **221** · `finite-probability-and-the-probabilistic-method` · "Finite Probability and the Probabilistic Method" · `combinatorics` |
| B page | order **222** · `finite-probability-and-the-probabilistic-method-examples` |
| requires | `extremal-graph-theory` (219), `the-exponential-function` (175), `the-logarithm-and-general-powers` (177) |
| prose scaffold | `research/plan-combinatorics-and-categories.md` |

### The library has no probability at all — you are building it

Check this from disk before you plan. There is no probability space, no random
variable, no expectation, no independence anywhere in `items/`. That makes this a
textbook case of the owner's **build the machinery** rule (2026-08-11): every
definition this subject needs gets written here, from the finite probability
space up. Declining a result because "the library has no expectation operator"
is not an available disposition — building the expectation operator is the job.

Expected shape, at minimum: finite probability space, events, conditional
probability, independence (pairwise vs mutual — get this distinction right),
random variables on a finite space, expectation and its linearity **without**
any independence hypothesis, indicator variables, variance and covariance,
Markov and Chebyshev, the union bound, the first-moment method, the
second-moment method, the deletion/alteration method, the Lovász Local Lemma if
and only if you can prove it here, and the classical applications — Ramsey lower
bounds `R(k,k) > 2^{k/2}`, tournaments with property `S_k`, graphs of high girth
and high chromatic number, dominating sets, `MAX-CUT ≥ m/2`, sum-free subsets.

`extremal-graph-theory` (219) and the Ramsey material already published are your
bridge into the applications; open them on disk and cite them exactly.

### This is a strong split candidate

Finite-probability foundations plus the probabilistic method plausibly exceeds
the **60-item ceiling** (`validate-plan` error `size`). If it does, do **not**
trim results to fit. Propose the split in your notes at step 2 with proposed page
ids and the exact cut — the natural seam is foundations (spaces, expectation,
variance, the classical inequalities) versus method-and-applications. The
orchestrator adjudicates at step 3 and splices new ids at step 4. Splitting
before authoring costs a spec edit; after authoring it is a rewrite.

### Provenance care

Probabilistic-method bounds are easy to state slightly wrong (constants,
`\ge` vs `>`, which of `k`/`n` the asymptotic is in). Every bound needs a
literature-derived statement with the source's exact form recorded, and any
result you cannot source exactly gets proved locally from what you build here.
An AI-generated statement may never be load-bearing.
