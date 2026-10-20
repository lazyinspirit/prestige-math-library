# Batch 85 authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Pair: `rl-function-approximation-and-off-policy-limits`  
Batch: `85` · role: beta  
Dispatch scheduling input: `ed5ad49f0238e7c3a4c7d41c110f57dee3a15305957bf4e1074042acb3cbb0ae`

## Plan and scheduling reconciliation

The complete ML-77 design section in `research/plan-machine-learning-track.md` and the corresponding `research/plan-spec.json` entry agree on the page IDs, prerequisites, claims, examples, and proof route. No design/spec conflict was found. The pair keeps Baird’s result restricted to the expected/deterministic update, treats the matched-MRP claim as Bellman-error non-identifiability rather than unseen-action MDP impossibility, and makes no general deep-RL convergence claim.

The dispatch assigns batch 85 level 2 with batch 81 as prerequisite. The current shared `batch-dependency-levels.json` also assigns level 2 but lists batches 16, 80, and 81. The current observed input hash is `5a1484f822a022d713e953731abbaf1047884523a7bf1ed136cfb767d3c82a62`; four earlier observed inputs recorded in `batch-85.dependency-inputs.json` had the same batch-85 level and prerequisite set. The direct supplier paths explain the additional batch-16 projection lemma and batch-80 MDP/Bellman items. Both the dispatch hash and the observed artifact history are recorded; no shared scheduling file was changed.

## Inventory and dependency levels

The A/B inventory is seven items, below the 100-item page cap. The lemma that establishes the weighted projection is listed before the definition it justifies. An audit found and removed the circular edge from that lemma to the definition; the lemma now states the quotient, feature span, and Bellman residual independently and cites the finite-MDP and policy-Bellman interfaces. The definition depends on this lemma through both `deps` and `justified_by`.

| Item | Page | Level | Claim and direct suppliers |
|---|---|---:|---|
| `lem-projected-bellman-error-is-well-defined` | A | 2 | Positive-support quotient is a finite-dimensional inner-product space; finite feature span has a unique orthogonal projection. Depends on the finite-MDP and policy-Bellman definitions, finite indexed sums, finite-sum laws, and the finite-span projection lemma. |
| `def-projected-bellman-error` | A | 3 | Defines fixed state weighting, quotient inner product, Bellman error, and projected Bellman error. Depends on the finite-MDP and policy-Bellman definitions, finite indexed sums, and the preceding well-definedness lemma. |
| `thm-bairds-counterexample-off-policy-td-diverges` | A | 4 | Proves divergence of the specified expected semi-gradient TD and synchronous expected-DP recurrences for every positive step size. Depends on the finite-MDP/policy-Bellman/projected-error definitions, the eigenvalue definition, the geometric-sequence result, and Euclidean Cauchy–Schwarz. |
| `thm-bellman-error-unlearnability-example` | A | 4 | Proves identical stationary feature/reward pair laws and distinct Bellman-error objectives for two finite MRPs, with exact minimizers. Depends on Choice, the finite-MDP/policy-Bellman/projected-error definitions, the finite-MDP reward-state path-law theorem, and Ionescu–Tulcea. |
| `ex-on-policy-one-state-linear-td-is-stable` | B | 4 | Gives the exact scalar recurrence and geometric convergence for a fixed step size. Depends on the finite-MDP and projected-error definitions and the geometric-sequence result. |
| `ex-bairds-seven-state-star-expected-update` | B | 5 | Computes the exact first expected Baird iterate at step size `1/100`. Depends on the Baird theorem. |
| `ex-matched-observation-mrps-have-distinct-bellman-errors` | B | 5 | Specializes the exact MRP result to discount `1/2`. Choice is declared and used only through the path-law theorem. Depends on Choice, the projected-error definition, and the MRP theorem. |

The item labels were recomputed against the full current run graph: all seven assigned labels match the computed values. The batch dependency input also records ten external supplier pages, 11 unique direct external item suppliers, 21 item edges and two required-page edges. There are no unresolved supplier IDs.

## Supplier verification

- Batch 80 actual bodies were inspected for `def-finite-markov-decision-process`, `def-policy-bellman-operator`, and `thm-finite-mdp-policy-induces-reward-state-chain`, including the relevant transition/reward, policy-Bellman, and path-law clauses. Their current Step-1 records are closed and `ready`, with `owner: true`; exact hashes and excerpts are in the dependency inputs. This records the current supplier interface, not independent approval.
- Batch 16 `lem-finite-span-orthogonal-projection-in-inner-product-space` and its orthonormal-basis supplier were inspected. Its current record is closed and `ready`, `owner: true`; hash `446767ba8a07de710045bc84b28af873f1a4d28084fb91fbb7006ec674176f53`.
- Batch 81 `tabular-prediction-and-control` is retained as the declared A-page prerequisite. Its A page has 12 items with no open rows in the ordinary full-run snapshot. The actual episodic/TD convention and `alg-td-zero-prediction` were inspected. That algorithm is explicitly on-policy; it is not used as the off-policy Baird supplier. Baird’s model and update convention are stated and derived locally.
- Published suppliers inspected include finite indexed-sum definitions/laws, the finite-span projection statement, the eigenvalue definition, Cauchy–Schwarz, Choice, Ionescu–Tulcea, and geometric-sequence divergence. Their exact supplier excerpts and applicable hypotheses are in the proof contracts and cross-batch evidence.

## Mathematical audit and conventions

`def-projected-bellman-error` fixes a probability weighting `mu` that need not be stationary, takes the quotient by zero weighted distance, and defines both error objectives for each fixed feature parameter. The well-definedness lemma does not claim that parameters agreeing only on the positive-weight support give the same Bellman residual; a transition from a positive-weight state may depend on values at zero-weight states.

For Baird’s star, the behavior-action expectation has importance ratio 7 on solid and 0 on dashed. On the symmetric coordinates `(a,b,c)`, the mean matrix is `B/7` with

`B = [[-4, 2 gamma, 4 gamma - 2], [0, gamma - 1, 2 gamma - 2], [-12, 8 gamma - 2, 16 gamma - 10]]`.

At `gamma=99/100`, the proof uses `q(t)=t^2-(183/100)t+13/50` and the positive left eigenvalue `t_+=(183+sqrt(23089))/200`; it proves the initial left-eigenvector pairing is positive and invokes the cited geometric-sequence divergence result. The argument proves only the two specified deterministic expected updates, not probability-one divergence of individual stochastic TD trajectories. A finite-step example separately computes the exact first iterate.

For the MRP pair, the observed sequence is explicitly `Y_n=(psi(S_n),R_(n+1))`. Both processes have initial mass `1/3` on each of `x_A=((1,0),0)`, `x_+=((0,1),1)`, and `x_-=((0,1),-1)`, and both have kernel `x_A -> (x_+ + x_-)/2`, `x_+ -> x_A`, `x_- -> (x_+ + x_-)/2`. Choice is used only for the infinite path-law construction and uniqueness. The weighted Bellman-error formulas and global minimizers are proved by exact residual and normal-equation calculations.

The source `Sutton–Barto, Example 11.4` prints `(-1/2,0)` as the limiting MRP-2 minimizer as discount tends to one. The exact finite-discount objective gives the unique minimizer `(-gamma/(1+gamma+gamma^2), gamma/(2(1+gamma+gamma^2)))`, whose limit is `(-1/3,1/6)`. At the excluded endpoint `gamma=1`, the objective is minimized by every vector with `b-a=1/2`, including `(-1/2,0)`. The authored theorem proves the exact formula and records this source-text discrepancy; it does not repeat the inconsistent limit.

The TikZ diagrams on the Baird theorem, MRP theorem, and one-state example explain the state-transition conventions. Their captions define the routing-symbol and reward/probability labels; no proof relies on a diagram.

## Source reading and retrieval

Three full-text treatments are recorded in `batch-85.source-evidence.json` and `batch-85.coverage.json`:

- Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., complete 548-page copy at `https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf`. Inspected §9.2 (PDF p. 221, printed p. 199), §§11.4–11.5 (PDF pp. 288–295, printed pp. 266–273), §11.2 (PDF pp. 282–285, printed pp. 260–263), and §11.6/Example 11.4 (PDF pp. 298–299, printed pp. 276–277).
- Tsitsiklis and Van Roy, “An Analysis of Temporal-Difference Learning with Function Approximation,” complete 17-page MIT copy at `https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf`. Inspected §III.A, §IV including Theorem 1 and Assumptions 1–4, and the complete §IX off-line state-sampling counterexample.
- Hutter, Yang-Zhao, and Majeed, “Conditions on Features for Temporal Difference-Like Methods to Converge,” author-hosted 13-page arXiv v1 at `https://www.hutter1.net/publ/rlwlinfa.pdf`. Inspected §§2.1–2.2, 3.2, and §4 including Figure 2 and the MRP transition matrices. The paper omits supporting proofs; no omitted proof is imported.

The original IJCAI PDF URL `https://www.ijcai.org/Proceedings/2019/0357.pdf` failed on six attempts (the initial attempt plus five retries), each with `UND_ERR_CONNECT_TIMEOUT`. Search located the author-hosted full text, which was retrieved and inspected. The prior `incompleteideas.net` Sutton URL had a TLS certificate-name mismatch, a chapter mirror returned 404, and the retrieved 2014 Stanford draft lacked current §11.6. These attempts and their outcomes are preserved in the source evidence; no source is dropped and no `source_resolution` disposition is needed. The exact browser query string was not retained and is not reconstructed.

`source-fetch-check --stamp` verified the three distinct active URLs (one new author-copy stamp); the final assigned coverage check verified all six page/source rows: 6/6 fetched and resolved, zero documented drops.

## Scoped checks

- `proof-layout`: 7 items, 20 steps, 0 defects.
- Normative precheck: 6 proof-bearing items checked, 0 failures; the definition has no phase proof body.
- `rendercheck`: 9 item/page files passed KaTeX, YAML-frontmatter, and delimiter checks.
- Scoped statement-first: 7 items, 0 defects.
- `content-policy`: 7 items, 0 errors/warnings.
- `coverage-checklist`: 2 pages, 11 harvested results, 0 errors/warnings.
- Strict proof contracts: 7/7 items, 22 supplier citations, 20 derivation steps, 56 boundary dispositions; no registered finite-smoke selector applies to these RL calculations. The exact finite examples are verified in their local arguments.
- Batch 85 evidence reconciliation: 7 items, 2 pages, 23 cross-batch records, 0 mismatches.
- Full-run `item-dependency-levels` exits nonzero on 30 empty scaffold inventories outside this batch; the seven batch-85 labels all match the full-graph calculation. The affected pages are `adaptive-gradient-optimizers`, `adaptive-gradient-optimizers-examples`, `overparameterized-training-and-interpolation`, `overparameterized-training-and-interpolation-examples`, `norm-and-margin-generalization-for-neural-networks`, `norm-and-margin-generalization-for-neural-networks-examples`, `algorithmic-stability-of-stochastic-training`, `algorithmic-stability-of-stochastic-training-examples`, `self-supervised-and-contrastive-representation-learning`, `self-supervised-and-contrastive-representation-learning-examples`, `generative-adversarial-networks`, `generative-adversarial-networks-examples`, `score-sdes-and-reverse-time-generation`, `score-sdes-and-reverse-time-generation-examples`, `multimodal-contrastive-alignment-and-transfer`, `multimodal-contrastive-alignment-and-transfer-examples`, `foundation-models-transfer-and-scaling-evidence`, `foundation-models-transfer-and-scaling-evidence-examples`, `predictive-calibration-and-uncertainty-under-shift`, `predictive-calibration-and-uncertainty-under-shift-examples`, `contextual-expert-bandits`, `contextual-expert-bandits-examples`, `constrained-mdps-and-policy-safety`, `constrained-mdps-and-policy-safety-examples`, `monotone-risk-calibration-and-deployment-guarantees`, `monotone-risk-calibration-and-deployment-guarantees-examples`, `verifiable-generation-and-test-time-sampling`, `verifiable-generation-and-test-time-sampling-examples`, `active-querying-version-spaces-and-abstention`, and `active-querying-version-spaces-and-abstention-examples`.

The ordinary full-run Step-1 snapshot after recording this batch reports 1107 items, 959 ready, `closed:false`, and 178 open work rows including those 30 empty pages. All seven batch-85 records are closed `ready`, `owner:false`, with their direct dependencies recorded. The current `.autopilot` status remains at `1-scaffold`, 73/101 pairs covered, nothing in flight, with the existing owner repair/recertification blocker at `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The current Git log ends at `50139bdcb6` (“Defer compact construction artifact scans until author drain”); active-run status and current disk artifacts, not historical handoff claims, guided this report. These records are authoring readiness only, not independent approval or publication.

A read-only run-wide `frontier-dependency-ledger.collect` check is blocked before batch 85 by an unrelated invalid row in `research/machine-learning-all-101-2026-10-19-batch-48.cross-batch-dependencies.json`: row 4 declares page consumer `sample-covariance-resolvent-limits`, supplier `marchenko-pastur-law-and-edge-bounds`, status `verified`, but that consumer is not owned by batch 48’s manifest. No batch-48 or run-wide ledger file was edited.

The seven assigned items, their two YAML-only A/B pages, the batch manifest, coverage, source/proof/dependency evidence, notes, and ordinary Step-1 authoring records are complete. No shared plan, published content, autopilot state, or verdict was changed.
