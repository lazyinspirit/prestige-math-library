# Step 3a reader report — batch 21

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-21`)

## Opened inventory

Assigned pages:

- `emg-fx06` — [library/einstein-maxwell-models-mathematics/emg-fx06.md](../library/einstein-maxwell-models-mathematics/emg-fx06.md), draft, mathematics. It places five mathematical items and requires `emg-fx04`, `emg-fx05`, and published page `gr-einstein-and-matter`.
- `emg-fx06-examples` — [library/einstein-maxwell-models-mathematics/emg-fx06-examples.md](../library/einstein-maxwell-models-mathematics/emg-fx06-examples.md), draft, mathematics. It places `cex-emg-fx-negative-bound-state` and requires `emg-fx06`.

Both pages use the run's frontmatter-only A/B page layout; their bodies are empty as required by the current compact statement-first workflow. The current cross-batch ledger has verified page edges from `emg-fx06` to `emg-fx04` and `emg-fx05`. I inspected those two current page carriers and the published `gr-einstein-and-matter` page carrier for their identities, classifications, inventories, and prerequisite declarations.

Assigned in-flight items, in dependency order where applicable:

| ID | Kind | Review |
|---|---|---|
| `def-emg-fx-wave-currents` | definition | The local stress tensor, current, deformation term, and chain flux conventions are explicit. The definition does not extend fields beyond the supplied open set. |
| `thm-emg-fx-coupled-potential-energy` | theorem | The energy identity, source estimate, positivity hypothesis, decay assumptions, and units are stated and proved. The proof does not assert a coupled Einstein–Maxwell stability result. |
| `lem-emg-fx-multiplier-divergence` | lemma | The potential/source divergence terms and the conditional pointwise positivity calculation follow from the listed geometry and observer decomposition. |
| `lem-emg-fx-rn-scalar-wave-potential` | lemma | The charged RN radial equation, tortoise-coordinate range, positivity and boundedness of the scalar potential, conserved energy condition, and horizon degeneracy are derived locally. One published dependency has a separate unit-statement defect below. |
| `prop-emg-fx-conditional-bootstrap` | proposition | The inverse-square-root comparison and first-zero argument support the claimed bound on the given existence interval. Countable and dependent choice are explicit in the proof's `Given`/assumptions and supplier map. The comparison ODE is not presented as an RN or Kerr–Newman estimate. |
| `cex-emg-fx-negative-bound-state` | counterexample | The smooth negative potential, decaying bound-state profile, growing solution, and failure of a uniform-in-time bound are verified directly; the example does not claim to model an Einstein–Maxwell master potential. |

I inspected the six assigned proof-contract rows, including derivation-to-step mappings, supplier excerpts, finite checks, and boundary worksheets. Relevant mathematical suppliers opened for the arguments include `def-gr-metric-volume-form-and-current-flux`, `lem-gr-metric-volume-form-patching-and-face-normal`, `def-gr-smooth-lorentzian-objects`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-observer-and-rest-space`, `lem-gr-observer-projection-decomposition`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-gr-timelike-fields-define-equal-or-opposite-future-cones`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-differentiation-under-the-integral-sign`, `def-emg-xs-rn-data`, `lem-gr-metric-divergence-and-density-formula`, `cor-primitives-of-a-continuous-function`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `def-absolutely-continuous-function`, `def-dependent-choice`, `cor-mean-value-theorem`, `thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-logarithm-derivative-and-integral`, `thm-real-power-continuity-and-derivatives`, and `def-countable-choice`.

## Source review

- Dafermos and Rodnianski, [*Lectures on black holes and linear waves*, arXiv:0811.0354v1](https://arxiv.org/pdf/0811.0354): Appendix D defines the massless scalar stress tensor/current; §3.2.2 gives the Schwarzschild Killing-current flux identity; §3.2.4 identifies horizon degeneration; Appendix F.2 gives Schwarzschild Regge–Wheeler coordinates and its wave-operator expression. The assigned local potential/source and charged RN calculations are not attributed to that Schwarzschild source.
- Giorgi, [*The linear stability of Reissner–Nordström spacetime for small charge*, arXiv:1904.04926v2](https://arxiv.org/pdf/1904.04926): §§1.2–1.3 and 8.1.2–8.4 describe coupled perturbation systems, transformations, and the distinct low-mode structure. The assigned scalar estimate is explicitly limited to a test scalar on a fixed RN metric and is not used as a substitute for the coupled result.

## Defect not editable in this assignment

- **Published dependency `def-emg-xs-rn-data`, reached directly by assigned consumer `lem-emg-fx-rn-scalar-wave-potential`:** in `items/def-emg-xs-rn-data.md`, Definition, the sentence after the metric and field display says, “The metric components are dimensionless in length coordinates.” But the same definition assigns metres to r and dimensionless angles and gives gθθ = r² and gφφ = r² sin²θ; those angular coordinate components have units m², while the t,r block components are dimensionless. This is a false unit claim in the published supplier. It does not invalidate the assigned radial equation or energy proof, so severity is nonfatal. The supplier is published and outside this reader's edit scope.

No other confirmed item, page, proof-contract, citation, or diagram defect was found. No item or page was edited.

## Page verdicts

- `emg-fx06`: **Pass** for its current page carrier, mathematical classification, inventory, required-page declarations, and five assigned item placements. The published RN-data unit claim is separately routed against the assigned consuming item.
- `emg-fx06-examples`: **Pass** for its current page carrier and placement of the scoped negative-potential counterexample.

## Blockers and coverage limits

No blocker prevented the assigned item/page review. I reviewed the direct and claim-relevant suppliers and the cited source passages; I did not re-audit every transitive foundation beneath the already-published mathematical suppliers. The current wave-current definition was opened before its supplier excerpts during initial inventory; those suppliers were then inspected before reviewing its dependent multiplier lemma. No source files were changed, so item reflow, precheck, and proof-layout commands were not applicable.
