# Step 5 adjudication — group **j**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 32, 33, 34: 3 A/B pair(s), 6 page(s), 30 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **32**: `research/bayesian-computational-statistics-62-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/bayesian-computational-statistics-62-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **34**: `research/bayesian-computational-statistics-62-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 32 | `general-state-mcmc-kernels-and-reversibility` | A | bayesian-computational-statistics | 2104 | `stationary-markov-chains-and-ergodic-limits`, `losses-risk-and-decision-rules` |
| 32 | `general-state-mcmc-kernels-and-reversibility-examples` | B | bayesian-computational-statistics | 2105 | `general-state-mcmc-kernels-and-reversibility`, `orthonormal-bases-parseval-and-fourier-series` |
| 33 | `metropolis-hastings-algorithm-and-invariance` | A | bayesian-computational-statistics | 2106 | `general-state-mcmc-kernels-and-reversibility`, `dominated-experiments-likelihood-and-sufficiency`, `conformal-prediction-and-exchangeable-ranks` |
| 33 | `metropolis-hastings-algorithm-and-invariance-examples` | B | bayesian-computational-statistics | 2107 | `metropolis-hastings-algorithm-and-invariance` |
| 34 | `gibbs-sampling-and-scan-schemes` | A | bayesian-computational-statistics | 2108 | `metropolis-hastings-algorithm-and-invariance`, `mixed-effects-and-longitudinal-models`, `structural-causal-models-dags-and-adjustment` |
| 34 | `gibbs-sampling-and-scan-schemes-examples` | B | bayesian-computational-statistics | 2109 | `gibbs-sampling-and-scan-schemes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `general-state-mcmc-kernels-and-reversibility` — General-state Markov kernels, invariance, and reversibility (2 item(s))

- `def-general-state-reversibility-by-symmetric-flow-measure` · definition — General-state reversibility by symmetric flow measure
- `thm-general-state-reversibility-implies-invariance` · theorem — General-state reversibility implies invariance

### `general-state-mcmc-kernels-and-reversibility-examples` — General-state Markov kernels, invariance, and reversibility — Examples (3 item(s))

- `ex-finite-two-state-reversible-markov-kernel` · example — A finite reversible two-state Markov kernel
- `ex-continuous-symmetric-random-walk-on-the-circle` · example — A symmetric random walk on the circle
- `cex-systematic-composition-of-reversible-kernels-is-not-reversible` · counterexample — A systematic composition of reversible kernels need not be reversible

### `metropolis-hastings-algorithm-and-invariance` — Metropolis–Hastings kernels (5 item(s))

- `lem-common-submeasure-density-is-pointwise-minimum` · lemma — The common submeasure of two finite densities
- `lem-common-submeasure-and-bounded-radon-nikodym-density` · lemma — The common submeasure and its bounded density
- `alg-metropolis-hastings-kernel` · algorithm — Metropolis–Hastings kernel
- `lem-metropolis-hastings-density-ratio` · lemma — The common-density Metropolis–Hastings ratio
- `thm-metropolis-hastings-kernel-is-reversible-and-invariant` · theorem — Metropolis–Hastings flow is reversible and invariant

### `metropolis-hastings-algorithm-and-invariance-examples` — Metropolis–Hastings kernels — Examples (4 item(s))

- `ex-random-walk-metropolis-hastings` · example — A three-state random-walk Metropolis kernel
- `ex-independence-metropolis-hastings` · example — A two-state independence sampler
- `ex-metropolis-hastings-proposal-support-failure` · example — A proposal with disconnected support
- `ex-metropolis-hastings-rejected-self-transition` · example — Rejection creates a self-transition

### `gibbs-sampling-and-scan-schemes` — Gibbs sampling and scan schemes (13 item(s))

- `def-gibbs-full-conditional-kernel` · definition — Proper full conditional kernel
- `def-gibbs-reversibility-for-a-markov-kernel` · definition — Reversibility for a probability kernel
- `def-finite-markov-chain-reducible` · definition — Reducibility of a finite Markov chain
- `cor-gibbs-density-formula-supplies-full-conditional-kernels` · corollary — A joint density supplies a proper full conditional kernel
- `alg-gibbs-block-update` · algorithm — Exact Gibbs block update
- `cor-bivariate-normal-full-conditional-kernels` · corollary — Proper full conditionals of a nondegenerate bivariate normal law
- `lem-gibbs-block-update-is-a-probability-kernel` · lemma — The Gibbs block update is a probability kernel
- `alg-gibbs-scan-schemes` · algorithm — Random and systematic Gibbs scan schemes
- `lem-gibbs-block-refresh-is-conditionally-independent` · lemma — A Gibbs refresh is conditionally independent of the old block
- `lem-gibbs-block-update-is-reversible-and-invariant` · lemma — Each exact Gibbs block update is reversible and invariant
- `lem-gibbs-scan-schemes-are-probability-kernels` · lemma — Random and systematic scan kernels are well-defined
- `thm-random-scan-gibbs-is-reversible-and-invariant` · theorem — Random-scan Gibbs is reversible and invariant
- `thm-systematic-gibbs-sweep-preserves-target` · theorem — A systematic Gibbs sweep preserves the target

### `gibbs-sampling-and-scan-schemes-examples` — Gibbs sampling and scan schemes — Examples (3 item(s))

- `ex-single-site-gibbs-reducible-on-disconnected-support` · example — A constrained support can make single-site Gibbs reducible
- `ex-bivariate-normal-gibbs-full-conditionals` · example — Full conditionals for a correlated bivariate normal target
- `ex-systematic-gibbs-sweep-is-not-reversible` · example — A systematic Gaussian Gibbs sweep need not be reversible

## Your seams

Another group's pages depend on yours:

- `mcmc-ergodicity-and-mixing` (group k) requires your `gibbs-sampling-and-scan-schemes`
- `hamiltonian-monte-carlo-and-leapfrog` (group k) requires your `metropolis-hastings-algorithm-and-invariance`
- `langevin-monte-carlo-mala-and-ula` (group l) requires your `metropolis-hastings-algorithm-and-invariance`
- `particle-mcmc-pmmh-and-particle-gibbs` (group o) requires your `metropolis-hastings-algorithm-and-invariance`
- `abc-mcmc-and-sequential-abc` (group o) requires your `metropolis-hastings-algorithm-and-invariance`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `bayesian-computational-statistics-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
