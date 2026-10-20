# Step 3a reader report — batch 87

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-87`)  
Scope: batch `87`

## Inventory opened

Assigned pages:

- A page `offline-reinforcement-learning-and-off-policy-evaluation`.
- B page `offline-reinforcement-learning-and-off-policy-evaluation-examples`.

Assigned items, reviewed in their mathematical role as definitions, procedures,
results, remarks, or examples:

- `thm-offline-coverage-impossibility-example`
- `def-offline-reinforcement-learning-dataset`
- `lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative`
- `alg-trajectory-importance-sampling-ope`
- `alg-doubly-robust-ope`
- `thm-trajectory-importance-sampling-is-unbiased`
- `thm-doubly-robust-ope-is-unbiased-under-either-correct-component`
- `rem-offline-rl-distribution-shift-and-pessimism`
- `ex-offline-ope-full-support-and-missing-support`
- `ex-offline-ope-exploding-trajectory-weights`
- `ex-offline-ope-weighted-and-clipped-estimators-can-be-biased`
- `ex-offline-ope-doubly-robust-correctness-branches`

Key local suppliers opened to check the finite-MDP path law, density identities,
integrability, and conditional-expectation interfaces:

- In-run batch-81 suppliers: `def-finite-markov-decision-process`,
  `thm-finite-mdp-policy-induces-reward-state-chain`, and
  `lem-finite-mdp-policy-action-state-reward-path-law`.
- Measure and probability interfaces: `def-probability-measure`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `def-expectation-of-a-nonnegative-or-integrable-random-variable`,
  `def-independent-random-elements`,
  `def-absolutely-continuous-with-respect-to-a-positive-measure`,
  `def-axiom-of-choice`, `def-radon-nikodym-derivative`,
  `def-measure-kernel-and-probability-kernel`,
  and `def-product-sigma-algebra-and-finite-product-sigma-algebras`.
- Measure results: `thm-ionescu-tulcea-construction-of-a-markov-chain`,
  `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
  `thm-chain-rule-for-radon-nikodym-derivatives`,
  `thm-integration-against-a-density`, and
  `thm-linearity-of-the-lebesgue-integral-on-l-one`.
- Conditional expectation interfaces/results:
  `def-conditional-expectation-given-a-sigma-algebra`,
  `def-conditional-expectation-as-an-ae-class`,
  `thm-conditional-expectation-exists-by-radon-nikodym`,
  `thm-basic-algebra-and-order-properties-of-conditional-expectation`, and
  `thm-taking-out-what-is-known`.

I also consulted the batch-87 manifest, proof-contract and source-evidence
sidecars, and batch notes as navigation evidence; their conclusions were not
treated as verdicts. I checked the cited primary-source passages directly:

- Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §5.5,
  printed pp. 128–132: action coverage, trajectory ratios, ordinary and weighted
  estimators, and the variance example.
- Jiang and Li, “Doubly Robust Off-policy Value Evaluation for Reinforcement
  Learning,” §§3.2.2–3.3 and §§4.1–4.2, PDF pp. 2–4: trajectory and step-wise
  importance sampling, WIS, the DR recursion, and Theorem 1. Their proceedings
  text defers the DR proof; the batch supplies its own finite-horizon proof.
- Levine et al., “Offline Reinforcement Learning: Tutorial, Review, and
  Perspectives on Open Problems,” §§2.4, 3.1, 3.5, 4.3–4.5, and 5.1: support
  mismatch, estimator context, policy constraints, pessimism, uncertainty, and
  model exploitation.

## Review and verdicts

The trajectory atom masses and their finite-prefix marginals use the same joint
reward/next-state law. Under full trajectory coverage, the cumulative action
ratios are the finite-prefix Radon–Nikodym densities. The OIS/PDIS proof then
applies those densities to the return and each reward term, respectively.

The DR proof establishes the two stated cases separately. With correct ratios
and trajectory coverage, its residual sum telescopes to the target value. With
the exact finite-horizon value recursion and terminal value zero, each residual
has conditional expectation zero under the behavior law, without a coverage
assumption. The finite state, action, reward, horizon, and multiplier conditions
make all relevant finite-sample quantities integrable. The coverage example,
variance example, WIS/clipping calculation, and both DR examples have the stated
values and biases. The TikZ state-transition diagram matches its text: actions
`a` and `b` go from `s_0` to `z` with rewards `0` and `1`, and `c` is a zero-reward
self-loop at `z`; the calculations do not rely on the drawing.

| Page | Verdict |
|---|---|
| `offline-reinforcement-learning-and-off-policy-evaluation` | No confirmed defect. Frontmatter-only, draft page; its eight-item inventory is present and the body is empty. |
| `offline-reinforcement-learning-and-off-policy-evaluation-examples` | No confirmed defect. Frontmatter-only, draft companion page; its four-example inventory is present and the body is empty. |

All assigned statements/definitions/examples are uninterrupted by links, with
references in the immediately following references sections. Proof steps have
separated paragraphs and valid terminal tags. No statement, title, witness,
computation, citation, algorithm branch, or diagram defect was confirmed.

## Edits and unresolved defects

- Edits: none. No confirmed repair was needed, so no proof contract or judge
  record was changed and no reflow, precheck, or proof-layout command was run.
- Defects outside this reader's write scope: none found.
- Batch-87 blocker: none. The live run status still records an unrelated
  `3a-collect` blocker for batch `57`; this did not prevent review of batch `87`.

## Coverage limitation

The exact interfaces and proofs used from the published Radon–Nikodym and
conditional-expectation results were inspected, but I did not independently
re-prove every transitive measure-theory prerequisite behind those published
results. The relevant finite-MDP in-run suppliers and the cited OPE source
passages were checked against the assigned claims.
