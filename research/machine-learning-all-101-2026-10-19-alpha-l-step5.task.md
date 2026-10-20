# Step 5 adjudication — group **l**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 35, 36, 37: 3 A/B pair(s), 6 page(s), 88 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **35**: `research/machine-learning-all-101-2026-10-19-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/machine-learning-all-101-2026-10-19-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **37**: `research/machine-learning-all-101-2026-10-19-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 35 | `recurrent-and-state-space-networks` | A | machine-learning | 2764 | `the-spectral-theorem-and-singular-value-decomposition`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 35 | `recurrent-and-state-space-networks-examples` | B | machine-learning | 2765 | `recurrent-and-state-space-networks` |
| 36 | `attention-and-transformer-expressivity` | A | machine-learning | 2766 | `feedforward-networks-and-universal-approximation` |
| 36 | `attention-and-transformer-expressivity-examples` | B | machine-learning | 2767 | `attention-and-transformer-expressivity` |
| 37 | `neural-operators-and-physics-informed-learning` | A | machine-learning | 2768 | `approximation-and-compactness-in-ck`, `feedforward-networks-and-universal-approximation`, `heat-equation-maximum-principles-duhamel-and-smoothing`, `lax-milgram-and-weak-elliptic-solutions`, `schauder-and-lp-elliptic-estimates`, `schauder-bases-approximation-and-banach-space-pathologies`, `uniform-spaces`, `sard-theorem-and-transversality`, `strongly-continuous-semigroups-and-hille-yosida`, `parabolic-finite-element-methods` |
| 37 | `neural-operators-and-physics-informed-learning-examples` | B | machine-learning | 2769 | `neural-operators-and-physics-informed-learning` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `recurrent-and-state-space-networks` — Recurrent, LSTM, and structured state-space models (15 item(s))

- `def-recurrent-neural-network` · definition — Shared-parameter recurrent neural network
- `def-linear-state-space-model` · definition — Continuous-time linear state-space model
- `alg-radix-two-fft` · algorithm — Radix-two discrete Fourier transform
- `lem-woodbury-dplr-bilinear-inverse` · lemma — Woodbury inverse for a diagonal-plus-low-rank update
- `def-lstm-cell` · definition — Standard LSTM cell
- `def-s4-dplr-parameterization` · definition — DPLR structured state-space parameterization
- `lem-roots-of-unity-fft-complexity` · lemma — Roots-of-unity orthogonality and radix-two FFT cost
- `alg-cauchy-matvec-at-roots-of-unity` · algorithm — Exact Cauchy matrix-vector product on a radix-two root grid
- `thm-hippo-leg-matrices-have-low-rank-structure` · theorem — HiPPO LegS, LegT, and LagT generators have normal-plus-low-rank form
- `alg-s4-state-space-recurrence-and-convolution` · algorithm — S4 state-space recurrence and convolution procedure
- `thm-cauchy-matvec-at-roots-of-unity-exact-cost` · theorem — Exact roots-of-unity Cauchy matvec has quasi-linear arithmetic cost
- `thm-dplr-discretized-step-linear-cost` · theorem — A fixed-rank DPLR bilinear recurrent step has linear arithmetic cost
- `lem-s4-convolution-root-of-unity-reduction` · lemma — DPLR SSM filter values reduce to Cauchy products
- `thm-cauchy-root-grid-matvec-numerical-cost` · theorem — Numerical Cauchy products on a root grid with explicit accuracy scale
- `thm-s4-convolution-filter-complexity` · theorem — S4 convolution-filter arithmetic and numerical cost

### `recurrent-and-state-space-networks-examples` — Recurrent, LSTM, and structured state-space models — Examples (3 item(s))

- `ex-lstm-scalar-gates` · example — A scalar LSTM cell with constant gates
- `ex-s4-scalar-recurrent-and-convolutional-views` · example — A scalar state-space layer has matching recurrent and convolutional outputs
- `ex-s4-filter-cost-excludes-training` · example — The filter-operation bound is not a training-cost bound

### `attention-and-transformer-expressivity` — Attention, transformer universality, and sequence limits (18 item(s))

- `lem-2dyck-pcfg-prefix-mass-positive` · lemma — Exact 2DYCK PCFG prefix laws and positive paired-prefix mass
- `def-scaled-dot-product-attention` · definition — Scaled dot-product attention
- `def-positional-encoding-and-causal-mask` · definition — Positional encodings and causal masks
- `lem-paired-crossentropy-mixture-bound` · lemma — Close paired predictions incur mixture entropy
- `def-multihead-self-attention` · definition — Multi-head attention and self-attention
- `def-hahn-hard-soft-attention-sequence-model` · definition — Hard and soft attention sequence models
- `def-transformer-encoder-decoder-layer` · definition — Transformer encoder, decoder, and fixed-width expressivity blocks
- `lem-hard-attention-depth-reduction` · lemma — Hard-attention depth reduction under input restrictions
- `thm-hard-attention-languages` · theorem — Fixed-depth hard attention cannot recognize PARITY or 2DYCK
- `lem-soft-attention-one-symbol-influence` · lemma — A nonfinal token has inverse-length influence under bounded soft attention
- `thm-soft-attention-parity-chance-limit` · theorem — Fixed soft attention has no parity advantage over the unigram predictor
- `alg-transformer-forward-pass` · algorithm — Transformer encoder-decoder forward pass
- `thm-transformer-permutation-equivariance-without-position` · theorem — Position-free unmasked self-attention is permutation equivariant
- `lem-soft-2dyck-crossentropy-gap-paired-prefixes` · lemma — Paired-prefix lower bound for soft-attention 2DYCK prediction
- `thm-transformer-formal-language-limits` · theorem — Hard and soft attention limits for formal-language prediction
- `lem-yun-transformer-grid-lookup` · lemma — Two-head fixed-width Transformers implement finite-grid lookups
- `lem-dense-attention-cost-and-path-length` · lemma — Dense full-attention interaction cost and path length
- `thm-fixed-width-transformer-lp-universality` · theorem — Fixed-width Transformer approximation on compact domains

### `attention-and-transformer-expressivity-examples` — Attention, transformer universality, and sequence limits — Examples (3 item(s))

- `ex-position-free-vs-position-encoded-token-order` · example — Position-free versus position-encoded token order
- `ex-two-token-causal-next-token-mask` · example — A two-token causal next-token mask
- `ex-fixed-length-vs-unbounded-sequence-limits` · example — Fixed-length universality and unbounded sequence limits

### `neural-operators-and-physics-informed-learning` — Neural operators and PINN consistency (42 item(s))

- `def-discretization-invariant-operator-family` · definition — Discretization-invariant operator family
- `def-physics-informed-neural-network-loss` · definition — Physics-informed residual loss and Hölder regularization
- `def-shin-elliptic-divergence-form-operator` · definition — Shin's positive divergence-form elliptic operator
- `def-shin-parabolic-operator-and-boundary` · definition — Shin's parabolic operator, data, and initial-lateral boundary
- `lem-pinn-random-samples-are-space-filling` · lemma — Lower cell-mass bounds give a random fill-distance estimate
- `lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent` · lemma — The printed all-scale probability cell-mass bound is inconsistent
- `lem-shin-radial-smooth-cutoff` · lemma — A smooth radial profile with a prescribed inner plateau
- `lem-neural-operator-compact-union-under-uniform-convergence` · lemma — Uniformly convergent images of a compact set have compact union
- `thm-neural-operator-input-output-spaces-have-ap` · theorem — The neural-operator input and output spaces have the approximation property
- `alg-empirical-pinn-objective` · algorithm — Empirical Hölder-regularized PINN objective
- `def-neural-operator` · definition — Neural operator between function spaces
- `def-neural-operator-activation-classes` · definition — Activation classes for neural-operator universality
- `lem-shin-elliptic-energy-estimate` · lemma — Elliptic H1 error estimate from the source coefficient bound
- `lem-shin-elliptic-residual-stability` · lemma — Elliptic residual and boundary stability from a maximum principle
- `lem-shin-bounded-open-set-hilbert-evolution-triple` · lemma — The zero-boundary Sobolev evolution triple on an arbitrary bounded open set
- `lem-shin-parabolic-energy-estimate` · lemma — Parabolic L2 energy estimate with zero initial-lateral trace
- `lem-shin-parabolic-residual-stability` · lemma — Variable-coefficient parabolic residual and boundary stability
- `lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures` · lemma — Finite sampling reconstruction bridges compact-uniform raw quadrature limits
- `alg-neural-operator-mesh-discretization` · algorithm — Riemann-sum realization of a neural operator
- `cex-pinn-regularization-thresholds-need-balanced-sample-counts` · counterexample — The PINN regularization thresholds need not be comparable under the stated count condition
- `cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain` · counterexample — Exterior-sphere domains need not have global C2alpha Dirichlet solutions
- `fs-shin-global-holder-dirichlet-claim` · false-statement — Exterior spheres and continuous boundary data do not give global bounded C2alpha solvability
- `def-fourier-neural-operator-layer` · definition — Fourier neural-operator layer
- `lem-neural-operator-ba-class-is-empty-as-defined` · lemma — The printed diameter-bounded activation class is empty
- `lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs` · lemma — Kernel Riemann sums converge uniformly on compact continuous-input sets
- `lem-pinn-residual-loss-from-fill-distance` · lemma — Fill-distance control of the population PINN loss
- `lem-shin-interior-parabolic-schauder-estimate` · lemma — Interior parabolic Schauder estimates by freezing the Gaussian kernel
- `lem-shin-parabolic-classical-approximation-and-boundary-attainment` · lemma — Classical parabolic solvability by weak approximation and exterior-ball barriers
- `lem-shin-zero-data-parabolic-classical-energy-identification` · lemma — Zero-data bounded classical parabolic errors are weak energy solutions
- `thm-shin-parabolic-initial-boundary-existence-and-residual-stability` · theorem — Variable-coefficient parabolic initial-boundary existence and residual stability
- `thm-neural-operator-discretization-invariance` · theorem — Neural-operator quadratures in the uniform norm and compatible Banach norms
- `lem-pinn-cell-occupancy-controls-uniform-residual` · lemma — Populated sampling cells control the uniform PINN residual
- `thm-pinn-regularized-loss-consistency` · theorem — Regularized PINN minimizers have vanishing residuals under sample refinement
- `lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap` · lemma — Smooth elliptic Dirichlet solvability from a boundary Sobolev bootstrap
- `lem-shin-uniform-boundary-schauder-estimate-for-smooth-dirichlet-approximants` · lemma — Uniform boundary Schauder bounds and smooth interior domain approximants
- `thm-shin-elliptic-dirichlet-existence-and-residual-stability` · theorem — Exterior-sphere elliptic Dirichlet existence, energy and residual stability
- `thm-pinn-linear-elliptic-consistency` · theorem — Elliptic PINN minimizers converge to the Dirichlet solution
- `thm-pinn-linear-parabolic-consistency` · theorem — Parabolic PINN minimizers converge to the initial-boundary solution
- `thm-neural-operator-compact-uniform-universality` · theorem — Neural operators approximate continuous maps uniformly on compacta
- `lem-ap-finite-dimensional-factorization-of-continuous-maps` · lemma — Approximation property gives finite-dimensional factorization on compacta
- `lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains` · lemma — Inward mollification and smooth finite-rank approximation on Lipschitz domains
- `lem-smooth-integral-functionals-approximate-on-compact-function-sets` · lemma — Smooth integral functionals approximate bounded functionals on compact sets

### `neural-operators-and-physics-informed-learning-examples` — Neural operators and PINN consistency — Examples (7 item(s))

- `ex-non-global-training-stationary-point` · example — Gradient descent can stay at a non-global stationary point
- `ex-sparse-pinn-collocation-aliases-residual` · example — A smooth residual can vanish at every collocation point and remain nonzero in population loss
- `ex-fourier-neural-operator-layer-and-claim-boundary` · example — A one-frequency Fourier layer on the circle
- `ex-neural-operator-grid-refinement-vs-fixed-grid-network` · example — A kernel integral has a mesh-refinement limit while a fixed-grid map needs a separate interface
- `cex-neural-operator-sup-norm-discretization-does-not-control-c1` · counterexample — A one-neuron kernel has convergent uniform quadratures and divergent C1 quadratures
- `cex-raw-neural-operator-local-term-needs-input-reconstruction` · counterexample — A raw neural-operator local term cannot be reconstructed exactly from finitely many samples
- `ex-pinn-small-scale-cube-sampling-has-instances` · example — Uniform cube sampling satisfies the corrected small-scale conditions

## Your seams

Your pages depend on another group's:

- `attention-and-transformer-expressivity` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `neural-operators-and-physics-informed-learning` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)

Another group's pages depend on yours:

- `foundation-models-transfer-and-scaling-evidence` (group x) requires your `attention-and-transformer-expressivity`
- `exact-tiled-attention-and-memory-aware-differentiation` (group ae) requires your `attention-and-transformer-expressivity`
- `low-rank-adaptation-and-parameter-update-geometry` (group af) requires your `attention-and-transformer-expressivity`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
