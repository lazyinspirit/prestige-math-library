# Step 5 adjudication — group **s**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 55, 56, 57: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **55**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **56**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 55 | `dynamic-data-identifiability-and-system-realization` | A | inverse-problems | 3106 | `bochner-inversion-and-plancherel-on-lca-groups`, `orthonormal-bases-parseval-and-fourier-series`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `the-spectral-theorem-and-singular-value-decomposition`, `inverse-problems-identifiability-and-stability`, `linear-operators-pseudoinverses-and-picard-criteria`, `operator-approximation-and-regularization-error`, `statistical-inverse-model-misspecification`, `nonlinear-inverse-problems-and-tangential-cone-conditions` |
| 55 | `dynamic-data-identifiability-and-system-realization-examples` | B | inverse-problems | 3107 | `dynamic-data-identifiability-and-system-realization` |
| 56 | `wirtinger-presentations-and-knot-groups` | A | knot-theory | 3108 | `the-seifert-van-kampen-theorem`, `oriented-links-braid-closures-and-markov-equivalence` |
| 56 | `wirtinger-presentations-and-knot-groups-examples` | B | knot-theory | 3109 | `wirtinger-presentations-and-knot-groups` |
| 57 | `knot-exteriors-and-peripheral-systems` | A | knot-theory | 3110 | `pontryagin-thom-and-framed-cobordism`, `oriented-links-braid-closures-and-markov-equivalence` |
| 57 | `knot-exteriors-and-peripheral-systems-examples` | B | knot-theory | 3111 | `knot-exteriors-and-peripheral-systems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dynamic-data-identifiability-and-system-realization` — Dynamical observations and finite system realization (5 item(s))

- `def-ip-discrete-linear-input-state-output-experiment` · definition — Discrete linear input-state-output experiments
- `alg-ip-exact-block-hankel-realization` · algorithm — Exact block-Hankel realization
- `thm-ip-finite-observability-identifies-initial-state` · theorem — Finite observability identifies the initial state
- `thm-ip-state-similarity-preserves-input-output-data` · theorem — State similarity preserves input-output data
- `thm-ip-hankel-realization-recovers-controllable-observable-system` · theorem — Hankel realization recovers a controllable and observable system

### `dynamic-data-identifiability-and-system-realization-examples` — Dynamical observations and finite system realization — Examples and Counterexamples (5 item(s))

- `cex-ip-continuous-time-frequency-aliasing` · counterexample — Continuous-time frequencies alias under fixed discrete sampling
- `ex-ip-similar-state-space-realizations-same-data` · example — Two similar realizations with identical data
- `ex-ip-unobservable-state-mode` · example — An unobserved state mode
- `ex-ip-forward-euler-observation-model-error` · example — Forward Euler creates an observation-map error
- `ex-ip-small-hankel-singular-value-amplifies-realization-perturbation` · example — A small Hankel singular value amplifies a realization perturbation

### `wirtinger-presentations-and-knot-groups` — Wirtinger presentations and knot groups (8 item(s))

- `def-knot-planar-code` · definition — Finite planar codes for oriented knot diagrams
- `lem-compact-knot-has-choice-free-tube` · lemma — A compact smooth knot has a choice-free normal tube
- `lem-wirtinger-crossing-ball-cover` · lemma — A crossing-ball cover of a knot complement
- `lem-wirtinger-local-meridian-conjugacy` · lemma — Local meridian conjugacy at a Wirtinger crossing
- `lem-knot-group-infinity-collar` · lemma — Removing the point at infinity preserves the knot group
- `alg-knot-wirtinger-presentation-from-code` · algorithm — Wirtinger presentation from a finite diagram code
- `thm-knot-wirtinger-presentation-correctness` · theorem — Correctness of the Wirtinger presentation
- `lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes` · lemma — Explicit unknot and figure-eight oriented Wirtinger codes

### `wirtinger-presentations-and-knot-groups-examples` — Wirtinger presentations and knot groups — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-01-worked-cases` · example — Worked Wirtinger presentations
- `cex-knot-kt-01-boundary-case` · counterexample — Equal abelianizations do not classify knots

### `knot-exteriors-and-peripheral-systems` — Knot exteriors and peripheral systems (6 item(s))

- `def-knot-exterior` · definition — Knot exterior
- `lem-knot-normal-circle-bundle-trivialization` · lemma — The oriented normal bundle of a knot is trivial
- `def-knot-meridian-and-preferred-longitude` · definition — Meridian and preferred longitude
- `lem-knot-tubular-exterior-and-boundary` · lemma — Tubular exterior and boundary torus
- `lem-knot-exterior-has-peripheral-torus` · lemma — The knot exterior has a peripheral torus basis
- `thm-knot-exterior-homology-and-longitude` · theorem — Homology and preferred longitude of a knot exterior

### `knot-exteriors-and-peripheral-systems-examples` — Knot exteriors and peripheral systems — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-02-worked-cases` · example — Worked case: the unknot exterior
- `cex-knot-kt-02-boundary-case` · counterexample — An arbitrary parallel push-off need not be preferred

## Your seams

Your pages depend on another group's:

- `dynamic-data-identifiability-and-system-realization` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `dynamic-data-identifiability-and-system-realization` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `dynamic-data-identifiability-and-system-realization` requires `operator-approximation-and-regularization-error` (group b, batch 4)
- `dynamic-data-identifiability-and-system-realization` requires `statistical-inverse-model-misspecification` (group e, batch 14)
- `dynamic-data-identifiability-and-system-realization` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)

Another group's pages depend on yours:

- `connected-sums-and-prime-decomposition` (group t) requires your `knot-exteriors-and-peripheral-systems`
- `seifert-matrices-and-the-alexander-module` (group u) requires your `knot-exteriors-and-peripheral-systems`
- `fox-colorings-and-quandle-invariants` (group u) requires your `wirtinger-presentations-and-knot-groups`
- `multivariable-alexander-modules-and-chain-models` (group v) requires your `wirtinger-presentations-and-knot-groups`
- `multivariable-alexander-modules-and-chain-models` (group v) requires your `knot-exteriors-and-peripheral-systems`
- `twisted-alexander-polynomials-and-reidemeister-torsion` (group v) requires your `wirtinger-presentations-and-knot-groups`
- `twisted-alexander-polynomials-and-reidemeister-torsion` (group v) requires your `knot-exteriors-and-peripheral-systems`
- `cyclic-branched-covers-and-knot-determinants` (group v) requires your `knot-exteriors-and-peripheral-systems`
- `dehn-surgery-on-knots-and-homology` (group w) requires your `knot-exteriors-and-peripheral-systems`
- `dehn-surgery-on-knots-and-homology` (group w) requires your `wirtinger-presentations-and-knot-groups`
- `three-manifold-surgery-presentations-and-kirby-moves` (group w) requires your `knot-exteriors-and-peripheral-systems`
- `torus-knots-and-seifert-fibered-exteriors` (group x) requires your `knot-exteriors-and-peripheral-systems`
- `satellite-knots-and-jsj-tori` (group x) requires your `knot-exteriors-and-peripheral-systems`
- `hyperbolic-knot-complements-and-volume` (group x) requires your `knot-exteriors-and-peripheral-systems`
- `hyperbolic-dehn-filling-and-exceptional-slopes` (group y) requires your `knot-exteriors-and-peripheral-systems`
- `smooth-sliceness-and-four-ball-genus-obstructions` (group aa) requires your `knot-exteriors-and-peripheral-systems`
- `khovanov-homology-detects-the-unknot` (group ag) requires your `knot-exteriors-and-peripheral-systems`
- `knot-exterior-rigidity-and-the-complement-theorem` (group ag) requires your `wirtinger-presentations-and-knot-groups`
- `knot-exterior-rigidity-and-the-complement-theorem` (group ag) requires your `knot-exteriors-and-peripheral-systems`
- `character-varieties-and-the-a-polynomial` (group ag) requires your `wirtinger-presentations-and-knot-groups`
- `character-varieties-and-the-a-polynomial` (group ag) requires your `knot-exteriors-and-peripheral-systems`
- `planar-diagram-codes-and-knot-table-enumeration` (group ah) requires your `wirtinger-presentations-and-knot-groups`
- `normal-surface-unknot-recognition` (group ai) requires your `knot-exteriors-and-peripheral-systems`
- `bridge-presentations-and-unknotting-number` (group aj) requires your `wirtinger-presentations-and-knot-groups`
- `milnor-invariants-and-link-peripheral-nilpotent-quotients` (group aj) requires your `wirtinger-presentations-and-knot-groups`
- `milnor-invariants-and-link-peripheral-nilpotent-quotients` (group aj) requires your `knot-exteriors-and-peripheral-systems`
- `zero-traces-and-conway-nonsliceness` (group ak) requires your `knot-exteriors-and-peripheral-systems`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
