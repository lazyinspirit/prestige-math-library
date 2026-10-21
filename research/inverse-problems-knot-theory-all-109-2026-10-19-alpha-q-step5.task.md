# Step 5 adjudication — group **q**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 49, 50, 51: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `plug-and-play-mmse-regularization` | A | inverse-problems | 3094 | `learned-reconstruction-targets-and-risk`, `proximal-gradient-and-accelerated-composite-optimization` |
| 49 | `plug-and-play-mmse-regularization-examples` | B | inverse-problems | 3095 | `plug-and-play-mmse-regularization` |
| 50 | `score-diffusion-inverse-solvers` | A | inverse-problems | 3096 | `learned-reconstruction-targets-and-risk`, `unrolled-inverse-solvers-and-generalization`, `plug-and-play-mmse-regularization`, `weak-convergence-tightness-and-representation`, `forward-ito-sde-well-posedness` |
| 50 | `score-diffusion-inverse-solvers-examples` | B | inverse-problems | 3097 | `score-diffusion-inverse-solvers` |
| 51 | `inverse-problem-benchmarking-and-shift` | A | inverse-problems | 3098 | `learned-reconstruction-targets-and-risk`, `neural-operator-eit-inverse-map`, `unrolled-inverse-solvers-and-generalization`, `plug-and-play-mmse-regularization`, `score-diffusion-inverse-solvers`, `statistical-inverse-model-misspecification`, `manifold-and-physical-constraint-inversion`, `numerical-pde-inversion-and-adjoint-error-control`, `losses-risk-and-decision-rules` |
| 51 | `inverse-problem-benchmarking-and-shift-examples` | B | inverse-problems | 3099 | `inverse-problem-benchmarking-and-shift` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `plug-and-play-mmse-regularization` — Plug-and-play MMSE denoisers and stationarity (4 item(s))

- `lem-ip-tweedie-mmse-jacobian-and-prox-potential` · lemma — Tweedie identity, positive Jacobian, and the MMSE proximal potential
- `def-ip-pnp-ista-with-denoiser` · definition — Plug-and-play ISTA with a denoiser
- `thm-ip-exact-mmse-pnp-ista-stationarity` · theorem — Exact-MMSE PnP-ISTA has monotone objective and vanishing gradient
- `rem-ip-arbitrary-denoiser-has-no-inherited-objective` · remark — An arbitrary denoiser does not inherit the exact-MMSE objective

### `plug-and-play-mmse-regularization-examples` — Plug-and-play MMSE denoisers and stationarity — Examples and Counterexamples (3 item(s))

- `ex-ip-scalar-mmse-exact-denoiser` · example — Exact scalar MMSE denoiser for a two-point prior
- `cex-ip-pnp-iterative-awgn-error-model` · counterexample — Gaussian measurement noise need not remain Gaussian at later PnP-ISTA inputs
- `ex-ip-approximate-cnn-mmse-denoiser` · example — A biased one-pixel CNN approximates but is not the exact MMSE denoiser

### `score-diffusion-inverse-solvers` — Score and diffusion methods for inverse data (4 item(s))

- `lem-ip-conditional-score-and-tweedie-identities` · lemma — Conditional-score and Tweedie identities for Gaussian smoothing
- `def-ip-diffusion-prior-score-and-measurement-score` · definition — Diffusion prior and measurement scores
- `alg-ip-measurement-guided-diffusion-reconstruction` · algorithm — Measurement-guided reverse-kernel reconstruction
- `prop-ip-plugged-in-measurement-score-is-approximate` · proposition — Posterior-mean plug-in measurement scores need not be exact

### `score-diffusion-inverse-solvers-examples` — Score and diffusion methods for inverse data — Examples and Counterexamples (2 item(s))

- `ex-ip-finite-score-guidance-laws-converge-without-finite-exactness` · example — Weakly convergent finite-step output laws need not be exact
- `ex-ip-diffusion-inverse-method-families-and-exactness` · example — Diffusion inverse solver families and their target laws

### `inverse-problem-benchmarking-and-shift` — Benchmarks, prior shift, and solver admissibility (2 item(s))

- `def-ip-benchmark-risk-and-compute-budget` · definition — Benchmark risk, compute budgets, and uncertainty records
- `rem-ip-inversebench-scoped-findings` · remark — Scope of InverseBench findings

### `inverse-problem-benchmarking-and-shift-examples` — Benchmarks, prior shift, and solver admissibility — Examples and Counterexamples (7 item(s))

- `ex-ip-inversebench-first-born-scattering` · example — First-Born optical scattering benchmark
- `ex-ip-inversebench-multicoil-mri` · example — Multi-coil MRI benchmark
- `ex-ip-inversebench-black-hole-imaging` · example — Black-hole VLBI benchmark
- `ex-ip-inversebench-full-waveform-inversion` · example — Full waveform inversion benchmark
- `ex-ip-inversebench-navier-stokes` · example — Two-dimensional Navier–Stokes benchmark
- `ex-ip-inversebench-prior-shift` · example — Prior-matched and out-of-distribution cases
- `ex-ip-inversebench-solver-invalid-iterate` · example — A solver-invalid FWI iterate

## Your seams

Your pages depend on another group's:

- `plug-and-play-mmse-regularization` requires `learned-reconstruction-targets-and-risk` (group p, batch 46)
- `score-diffusion-inverse-solvers` requires `learned-reconstruction-targets-and-risk` (group p, batch 46)
- `score-diffusion-inverse-solvers` requires `unrolled-inverse-solvers-and-generalization` (group p, batch 48)
- `inverse-problem-benchmarking-and-shift` requires `learned-reconstruction-targets-and-risk` (group p, batch 46)
- `inverse-problem-benchmarking-and-shift` requires `neural-operator-eit-inverse-map` (group p, batch 47)
- `inverse-problem-benchmarking-and-shift` requires `unrolled-inverse-solvers-and-generalization` (group p, batch 48)
- `inverse-problem-benchmarking-and-shift` requires `statistical-inverse-model-misspecification` (group e, batch 14)
- `inverse-problem-benchmarking-and-shift` requires `manifold-and-physical-constraint-inversion` (group l, batch 35)
- `inverse-problem-benchmarking-and-shift` requires `numerical-pde-inversion-and-adjoint-error-control` (group o, batch 44)

Another group's pages depend on yours:

- `open-frontiers-in-learned-inverse-problems` (group r) requires your `plug-and-play-mmse-regularization`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `score-diffusion-inverse-solvers`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `inverse-problem-benchmarking-and-shift`

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
