# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-20-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-20
role: alpha-adjudicate
label: step8-b
covers: 3, 9

# Step 8 — group **b**, run `frontier-20`

You are the group Alpha for batches **3**, **9**: 3 A/B pair(s), 6 page(s), 98 item(s), 54 open rejection(s) over 54 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-20-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-20-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `subharmonic-functions-and-the-dirichlet-problem` | A | complex-analysis | 329 | `harmonic-functions-and-the-poisson-integral`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-topology-of-euclidean-space` |
| 3 | `subharmonic-functions-and-the-dirichlet-problem-examples` | B | complex-analysis | 330 | `subharmonic-functions-and-the-dirichlet-problem` |
| 9 | `the-residue-theorem` | A | complex-analysis | 319 | `convexity`, `isolated-singularities-and-laurent-series`, `improper-integrals` |
| 9 | `the-residue-theorem-examples` | B | complex-analysis | 320 | `the-residue-theorem` |
| 9 | `the-hartogs-phenomena` | A | complex-analysis | 351 | `subharmonic-functions-and-the-dirichlet-problem`, `holomorphic-functions-of-several-variables`, `complete-metrizability-and-baire`, `isolated-singularities-and-laurent-series` |
| 9 | `the-hartogs-phenomena-examples` | B | complex-analysis | 352 | `the-hartogs-phenomena` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `subharmonic-functions-and-the-dirichlet-problem` — Subharmonic Functions and the Dirichlet Problem (31 item(s))

- `rem-standard-upper-semicontinuous-subharmonic-convention` · remark — This page uses the standard upper-semicontinuous subharmonic convention
- `def-plane-subharmonic-function` · definition — Subharmonic functions on plane domains
- `def-plane-superharmonic-function` · definition — Superharmonic functions on plane domains
- `lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined` · lemma — Upper semicontinuous functions are Borel and their circle averages are defined
- `thm-harmonic-majorant-characterization-of-plane-subharmonicity` · theorem — Subharmonicity is equivalent to harmonic comparison on compactly contained discs
- `thm-c-two-characterization-of-plane-subharmonicity` · theorem — A C^2 function is subharmonic exactly when its Laplacian is nonnegative
- `thm-plane-subharmonic-functions-are-locally-integrable` · theorem — Plane subharmonic functions are locally integrable
- `thm-log-modulus-of-a-holomorphic-function-is-subharmonic` · theorem — The logarithm of the modulus of a holomorphic function is subharmonic
- `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` · corollary — Positive powers of the modulus of a holomorphic function are subharmonic
- `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` · lemma — Positive linear combinations and finite maxima preserve subharmonicity
- `thm-decreasing-limit-theorem-for-plane-subharmonic-functions` · theorem — A decreasing limit of plane subharmonic functions is subharmonic or identically -infinity
- `def-upper-semicontinuous-regularization` · definition — Upper-semicontinuous regularization
- `thm-upper-envelope-theorem-for-plane-subharmonic-functions` · theorem — The upper-semicontinuous regularization of a locally bounded-above subharmonic supremum is subharmonic
- `thm-maximum-principle-for-plane-subharmonic-functions` · theorem — A plane subharmonic function with an interior maximum is constant on its component
- `def-poisson-modification-of-a-subharmonic-function` · definition — Poisson modification on a compactly contained disc
- `lem-gluing-lemma-for-plane-subharmonic-functions` · lemma — Subharmonic pieces glue across a boundary under the limsup inequality
- `thm-poisson-modification-preserves-subharmonicity-and-majorizes` · theorem — Poisson modification is subharmonic and majorizes the original function
- `def-perron-family-for-the-plane-dirichlet-problem` · definition — The Perron lower family for continuous boundary data
- `def-perron-envelope-for-the-plane-dirichlet-problem` · definition — The Perron envelope and its regularization
- `lem-perron-family-is-nonempty-and-bounded` · lemma — The Perron family is nonempty and uniformly bounded by the boundary data
- `thm-perron-envelope-is-harmonic` · theorem — The regularized Perron envelope is harmonic
- `def-barrier-and-regular-boundary-point` · definition — Barriers and regular boundary points
- `thm-barrier-characterization-of-regular-boundary-points` · theorem — A boundary point is regular exactly when it admits a barrier
- `thm-perron-solves-dirichlet-on-regular-plane-domains` · theorem — On a regular bounded plane domain, Perron's method solves the Dirichlet problem
- `thm-exterior-disc-and-exterior-cone-points-are-regular` · theorem — Exterior disc points and exterior cone points are regular
- `lem-local-subharmonic-peak-function-globalizes` · lemma — A local strict subharmonic peak function globalizes
- `lem-weak-local-subharmonic-peak-function-implies-regularity` · lemma — A weak local subharmonic peak function implies regularity
- `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular` · lemma — A boundary point whose complementary component contains another point is regular
- `thm-nonsingleton-boundary-component-is-regular` · theorem — A point on a nonsingleton boundary component is regular
- `cor-simply-connected-proper-plane-domains-are-regular` · corollary — Every bounded simply connected proper plane domain is regular
- `thm-conformal-transport-of-plane-dirichlet-solutions` · theorem — A conformal homeomorphism of closures transports continuous Dirichlet solutions

### `subharmonic-functions-and-the-dirichlet-problem-examples` — Subharmonic Functions and the Dirichlet Problem — Examples (9 item(s))

- `ex-basic-plane-subharmonic-functions` · example — The functions |z|^2 and log|z| are subharmonic
- `ex-poisson-modification-of-a-radial-quadratic-on-a-disc` · example — Poisson modification of |z|^2 on a concentric disc is constant there
- `ex-perron-solution-on-an-annulus-with-radial-data` · example — The Perron solution on an annulus with radial boundary data is affine in log|z|
- `ex-a-square-corner-has-an-explicit-barrier` · example — A corner of a square has an explicit barrier
- `cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum` · counterexample — The punctured disc has an irregular boundary point and a continuous datum with no harmonic solution
- `fs-every-bounded-plane-domain-has-a-dirichlet-solution` · false-statement — FALSE: every bounded plane domain admits a continuous harmonic solution for every continuous boundary datum
- `fs-the-perron-envelope-always-attains-the-boundary-data` · false-statement — FALSE: the Perron envelope always attains the boundary values
- `fs-a-subharmonic-function-can-attain-an-interior-maximum` · false-statement — FALSE: every subharmonic function attains a maximum somewhere in the interior
- `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` · false-statement — FALSE: the raw pointwise supremum of an arbitrary family of subharmonic functions is subharmonic

### `the-residue-theorem` — The Residue Theorem and the Evaluation of Real Integrals (22 item(s))

- `rem-cauchy-principal-value-dictionary` · remark — This page keeps Cauchy principal values distinct from genuine improper convergence
- `def-standard-residue-contours` · definition — Standard semicircle, rectangle, keyhole, indentation, and sector contours
- `def-admissible-cycle-for-residue-theorem` · definition — Admissible cycles for the residue theorem
- `lem-finiteness-support-residue-sum` · lemma — Only finitely many singularities contribute to the residue sum of an admissible cycle
- `thm-residue-theorem-null-homologous-cycle` · theorem — The residue theorem for a null-homologous cycle
- `cor-residue-theorem-circle` · corollary — A positively oriented circle integral is the sum of the enclosed residues
- `lem-large-semicircle-vanishing` · lemma — A rational large-semicircle integral vanishes under the zR(z) to 0 condition
- `lem-jordans-lemma-rational-functions` · lemma — Jordan's lemma for rational functions of one complex variable
- `lem-indented-arc-residue-limit` · lemma — An indented arc around a simple singularity contributes the expected residue fraction
- `thm-residue-evaluation-rational-real-integrals` · theorem — Rational improper integrals without real poles are upper-half-plane residue sums
- `thm-residue-evaluation-principal-value-real-poles` · theorem — Indented real-axis contours compute principal values with half-residue corrections
- `thm-residue-evaluation-rational-fourier-integrals` · theorem — Rational Fourier integrals are evaluated by residues and Jordan's lemma
- `thm-trigonometric-integral-unit-circle-substitution` · theorem — Trigonometric integrals become contour integrals by the unit-circle substitution
- `lem-keyhole-branch-boundary-values` · lemma — A keyhole contour sees the two boundary values of z^(alpha-1)
- `thm-keyhole-residue-formula-mellin-rational-integrals` · theorem — Keyhole contours evaluate Mellin-type rational integrals
- `thm-cotangent-residue-summation-rational-functions` · theorem — Cotangent residues sum a rational function over the integers
- `thm-cosecant-residue-alternating-summation-rational-functions` · theorem — Cosecant residues sum an alternating rational series over the integers
- `cor-basel-sum-by-residues` · corollary — The Basel sum is pi squared over six by a residue computation
- `fs-residue-theorem-applies-to-any-cycle-in-the-domain` · false-statement — FALSE: the residue theorem applies to every cycle in the ambient domain
- `fs-principal-value-convergence-implies-improper-convergence` · false-statement — FALSE: existence of a Cauchy principal value forces improper convergence
- `fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence` · false-statement — FALSE: denominator degree one more than numerator degree already forces convergence
- `fs-large-arc-vanishing-follows-from-pointwise-decay-alone` · false-statement — FALSE: pointwise decay alone makes every large semicircle integral vanish

### `the-residue-theorem-examples` — The Residue Theorem and the Evaluation of Real Integrals — Examples (11 item(s))

- `ex-residue-evaluates-int-one-over-one-plus-x-squared` · example — The integral of 1 / (1 + x^2) over the real line is pi
- `ex-residue-evaluates-int-one-over-one-plus-x-fourth` · example — The integral of 1 / (1 + x^4) over the real line is pi over sqrt(2)
- `ex-residue-evaluates-cos-over-one-plus-x-squared` · example — The integral of cos x / (1 + x^2) over the real line is pi / e
- `ex-residue-evaluates-sine-over-x-principal-value` · example — The principal value of the sine integral is pi / 2
- `ex-trigonometric-integral-one-over-a-plus-cos-theta` · example — The integral of 1 / (a + cos theta) over [0, 2 pi]
- `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` · example — The integral of x^(alpha-1) / (1 + x) over (0, infinity) is pi / sin(pi alpha)
- `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle` · example — A rectangle contour evaluates the Gaussian cosine integral
- `ex-residue-evaluates-the-basel-sum` · example — The residue theorem gives the Basel sum
- `cex-sine-over-x-is-only-conditionally-convergent` · counterexample — The sine integral converges conditionally but not absolutely
- `cex-one-over-z-defeats-the-large-semicircle-estimate` · counterexample — The function 1 / z makes the large-semicircle shortcut fail
- `cex-misidentifying-a-double-pole-gives-the-wrong-residue` · counterexample — Treating a double pole as simple gives the wrong answer

### `the-hartogs-phenomena` — The Hartogs Phenomena (19 item(s))

- `def-holomorphic-extension-and-domain-of-holomorphy` · definition — Holomorphic extension and domains of holomorphy in several variables
- `def-hartogs-figure-and-polydisc-hull` · definition — The Hartogs figure H(r,s) and its bidisc hull
- `lem-holomorphic-dependence-of-slice-laurent-coefficients` · lemma — Laurent coefficients on Hartogs slices depend holomorphically on the remaining variables
- `lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure` · lemma — Negative Laurent coefficients vanish on a Hartogs figure
- `thm-hartogs-figure-extension` · theorem — A holomorphic function on a Hartogs figure extends to the full bidisc
- `cor-hartogs-figure-obstruction-to-domain-of-holomorphy` · corollary — A domain containing a Hartogs figure but not its hull is not a domain of holomorphy
- `thm-removability-of-a-puncture-in-several-complex-variables` · theorem — An isolated puncture is removable in complex dimension at least two
- `cor-no-isolated-holomorphic-singularities-in-several-complex-variables` · corollary — Holomorphic functions of several variables have no isolated singularities
- `lem-bounded-punctured-slice-has-holomorphic-parameter-extension` · lemma — A locally bounded punctured slice has a holomorphic parameter extension
- `thm-riemann-extension-across-a-coordinate-hyperplane` · theorem — A locally bounded holomorphic function extends across a coordinate hyperplane
- `lem-local-boundedness-of-separately-holomorphic-functions` · lemma — Separate holomorphy forces local boundedness on smaller polydiscs
- `thm-hartogs-separate-holomorphy` · theorem — Separate holomorphy implies joint holomorphy in finite dimensions
- `lem-local-hartogs-extension-across-polydisc-shells` · lemma — Hartogs figures give local extension across polydisc shells
- `lem-propagation-and-gluing-of-hartogs-extensions` · lemma — Local Hartogs extensions propagate along chains and glue uniquely
- `thm-hartogs-extension-across-compact-holes` · theorem — Hartogs extension across a connected compact hole
- `fs-punctured-domain-functions-must-be-unbounded` · false-statement — FALSE: every holomorphic function on a punctured several-variable domain is unbounded near the puncture
- `fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue` · false-statement — FALSE: isolated singularities in several variables can be poles or essential
- `fs-every-domain-in-c-two-is-a-domain-of-holomorphy` · false-statement — FALSE: every domain in C^2 is a domain of holomorphy
- `fs-separate-holomorphy-can-fail-to-imply-local-boundedness` · false-statement — FALSE: separate holomorphy can fail to imply local boundedness

### `the-hartogs-phenomena-examples` — The Hartogs Phenomena — Examples (6 item(s))

- `ex-hartogs-figure-in-modulus-coordinates` · example — The Hartogs figure in (|z1|, |z2|) coordinates
- `ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure` · example — The function 1 / (1 - z1 z2) extends holomorphically from a Hartogs figure
- `ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc` · example — A holomorphic function on the punctured bidisc extends across the origin
- `ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy` · example — The bidisc minus the origin is not a domain of holomorphy
- `cex-one-over-z-has-a-nonremovable-puncture-in-one-variable` · counterexample — The one-variable function 1 / z does not extend across the origin
- `cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy` · counterexample — C^2 minus a complex line is a domain of holomorphy

## Your seams

Your pages depend on another group's:

- `subharmonic-functions-and-the-dirichlet-problem` requires `the-lebesgue-integral-and-the-convergence-theorems` (group a, batch 2)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy` | `the-hartogs-phenomena-examples` | gpt-5.6-terra | `e5af00788c0c9fd8d7eed48371b30ce381bebeafa45b47c3271da51392870197` |
| `cex-sine-over-x-is-only-conditionally-convergent` | `the-residue-theorem-examples` | gpt-5.6-terra | `37cd806211e40499b1c45e92c2917a1af279556980337e6f30e9cc0577fd6470` |
| `cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum` | `subharmonic-functions-and-the-dirichlet-problem-examples` | gpt-5.6-terra | `8b9a9023e5ed342d16aabea2756008032877cc7ab2ccfc7ebc0f5d41adeac65b` |
| `cor-basel-sum-by-residues` | `the-residue-theorem` | gpt-5.6-terra | `66a04a143c10c671ebf29a36ab5af4a890174b857fe17c47ee8b94174b0bbfe9` |
| `cor-hartogs-figure-obstruction-to-domain-of-holomorphy` | `the-hartogs-phenomena` | gpt-5.6-terra | `ce24ff6c9076f448cfcccbea1d96f364e788523b1d538acfe4a952e0cb102dd1` |
| `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `4b711667c36be71fbf2b81f37793c420cd6ccf52bacad4a9286402f74c820441` |
| `cor-no-isolated-holomorphic-singularities-in-several-complex-variables` | `the-hartogs-phenomena` | gpt-5.6-terra | `88190d5be9fc7bee8b0031a09db81ddc76f9dce239b1df1012d6f87f2a72cbae` |
| `def-holomorphic-extension-and-domain-of-holomorphy` | `the-hartogs-phenomena` | gpt-5.6-terra | `0e3b6337c0df3ad86142c70bddeecdb61935790d5fa7cdf044fa0e9085a28865` |
| `def-perron-envelope-for-the-plane-dirichlet-problem` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `1e43ef657186f1083a6d4379303a9ccf4b6c946661649423cbe087ed826c1a58` |
| `def-poisson-modification-of-a-subharmonic-function` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `293b2312e5b8633c9c1b55eb143887f98aaef9cc828a09bbca77771c73f274e4` |
| `def-standard-residue-contours` | `the-residue-theorem` | gpt-5.6-terra | `480fad58935edb1bb7bb0544f92042d34fa187421bd7015105748ddc53996d12` |
| `ex-a-square-corner-has-an-explicit-barrier` | `subharmonic-functions-and-the-dirichlet-problem-examples` | gpt-5.6-terra | `88f3a2106b116872db0b832749877fa6d3b2466b73f3c5c66dca5eb001989546` |
| `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` | `the-residue-theorem-examples` | gpt-5.6-terra | `92fe11a9b0133846815d2d989d1360b7039f7ced01b60d82accc23997840516d` |
| `ex-poisson-modification-of-a-radial-quadratic-on-a-disc` | `subharmonic-functions-and-the-dirichlet-problem-examples` | gpt-5.6-terra | `df62acedb8a3cd69134d773d1e7907df11f6ec2dbfed54408e1e10d7018d6aeb` |
| `ex-residue-evaluates-sine-over-x-principal-value` | `the-residue-theorem-examples` | gpt-5.6-terra | `c13f5b742e7318faa6b98789c6465e06766e00c77a82b7432787ee48f8c20059` |
| `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle` | `the-residue-theorem-examples` | gpt-5.6-terra | `514351ac03859a8a5cba6814696e26ed7a2348887d4605ce1c320112eb968085` |
| `ex-trigonometric-integral-one-over-a-plus-cos-theta` | `the-residue-theorem-examples` | gpt-5.6-terra | `3e7a3525a4b762b3d7bcd8ce74e0aa605729421c254df1f6fb49fb6da8a0f1ba` |
| `fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence` | `the-residue-theorem` | gpt-5.6-terra | `3641210859910233e87b5a752363fd43c9101b86997f82ce4dd5dac2b71f5c87` |
| `fs-residue-theorem-applies-to-any-cycle-in-the-domain` | `the-residue-theorem` | gpt-5.6-terra | `edee00ca06fcfacae764818e9eaf12a4bd74d5252d1949b1e414537fb4b2f07b` |
| `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` | `subharmonic-functions-and-the-dirichlet-problem-examples` | gpt-5.6-terra | `59ecbae97f1cc37598babc12f83b286efc627abb7eadeb282f03124eee4cf4b0` |
| `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `753e211f2dfc2c0144e02abe64f1d6d6d672900d7f01b41ce3a6f839f3b81515` |
| `lem-bounded-punctured-slice-has-holomorphic-parameter-extension` | `the-hartogs-phenomena` | gpt-5.6-terra | `0b466ab0f146daf493ee2ede7fb7f2f6002f378cb0c4d5d875bef5db4c8c502c` |
| `lem-finiteness-support-residue-sum` | `the-residue-theorem` | gpt-5.6-terra | `9c7fed770a9df314349b323591e2736ae660b5b971b421e90d97140406c0b6cb` |
| `lem-gluing-lemma-for-plane-subharmonic-functions` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `8d1b36ab10613ef415e6b4d5fcc4168e3011eaffa6f69b4b0ed026d7894494e5` |
| `lem-holomorphic-dependence-of-slice-laurent-coefficients` | `the-hartogs-phenomena` | gpt-5.6-terra | `e0d18ab1f18218e14914cac09f4136ad7572981844a78913852def717fd3a3a3` |
| `lem-indented-arc-residue-limit` | `the-residue-theorem` | gpt-5.6-terra | `b75d0c733f50cf7ec9b1b2514d24066e0524df110f86cbf48b16b2a5a888f66d` |
| `lem-jordans-lemma-rational-functions` | `the-residue-theorem` | gpt-5.6-terra | `467c18d724590ab76c8216de3b558546ebe90dd26148cc3785c7d53ea50f792d` |
| `lem-large-semicircle-vanishing` | `the-residue-theorem` | gpt-5.6-terra | `fa928a77ac3c3f4793a3c124af9c6c48c0c7b77f6aca3385f450e83f094b529a` |
| `lem-local-boundedness-of-separately-holomorphic-functions` | `the-hartogs-phenomena` | gpt-5.6-terra | `efb6bfe5caa7b82dcedd9293bc34d8c70bdaf57679e70312cd0c4f7d164798c4` |
| `lem-local-hartogs-extension-across-polydisc-shells` | `the-hartogs-phenomena` | gpt-5.6-terra | `2edc9ddce3f03ea2d2e9ebc718e99f2e9e552960a1a17375c2542cbf6f41dee3` |
| `lem-local-subharmonic-peak-function-globalizes` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `5aee65bf71594e6786627cf9415a4ab96454b902cbf747668a31b961af100a99` |
| `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `7825994bcd469d84290f608680ce68b16a12b6b1b40e118d7eb10e94d882a0ab` |
| `lem-propagation-and-gluing-of-hartogs-extensions` | `the-hartogs-phenomena` | gpt-5.6-terra | `72a5bbe7cbf126a396ee010e34f381a7cabc2be60bdbe2f6ec25573320acad9d` |
| `lem-weak-local-subharmonic-peak-function-implies-regularity` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `63e13039a9cf39f84da565b9e58f91bf00020eeb0c61fa70648e6300a351a2c1` |
| `thm-barrier-characterization-of-regular-boundary-points` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `8962142cb1e5b09fbfa9f1a6e169a3ad52428e1b6bad7d7b26c89d3085c60343` |
| `thm-c-two-characterization-of-plane-subharmonicity` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `a84ce101355533258b0ccb80073ceb25131f0be3b2be4b8e54bd0e526edc678d` |
| `thm-cotangent-residue-summation-rational-functions` | `the-residue-theorem` | gpt-5.6-terra | `ab58ad9102c06885dafbe0ea9dda1710f8dd1a405dfd29f09ab484f314febf29` |
| `thm-exterior-disc-and-exterior-cone-points-are-regular` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `5f6fd540f887db61cc233ae98e924e609a8cc593be09f5aeb0087bf077d09b33` |
| `thm-harmonic-majorant-characterization-of-plane-subharmonicity` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `9be18a2225618df41ceff1550db9f8990599190fa94397ee488edf5686ccd5cd` |
| `thm-hartogs-figure-extension` | `the-hartogs-phenomena` | gpt-5.6-terra | `03885f7c89f1d9346b6f3c43f38f5af7d916aae5073d50dbbbf902de7b695f3e` |
| `thm-keyhole-residue-formula-mellin-rational-integrals` | `the-residue-theorem` | gpt-5.6-terra | `c099e6c4a50970baa386b2e8e9de0e1ea1bc3034d44679fe3061f3f6d9ed3650` |
| `thm-log-modulus-of-a-holomorphic-function-is-subharmonic` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `dbb430c5875b8d13952d8b35bce369e39bba44520a6eaedd50280fff6b4698b4` |
| `thm-maximum-principle-for-plane-subharmonic-functions` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `fa2a2302758f29f977a7b165232fa1037a083f59ea09e59951c0357fa9ad56ff` |
| `thm-perron-envelope-is-harmonic` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `563e6c78c3c0866de82a992308fc05be60d3731e34347e9388adc326adb4b31d` |
| `thm-plane-subharmonic-functions-are-locally-integrable` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `aa2c953f8a267f7ed344dcafc79d82e80341524826909c31ac9cd69c9c7a42b2` |
| `thm-poisson-modification-preserves-subharmonicity-and-majorizes` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `e53c69e5b377e486b4edac67032e7a510a3b3a5db3318b78675f2c7bf44715c7` |
| `thm-removability-of-a-puncture-in-several-complex-variables` | `the-hartogs-phenomena` | gpt-5.6-terra | `d47439c3fb3c1a606966bfa9dfabc03acf17a24b8959a239cbe91ea3db10862a` |
| `thm-residue-evaluation-principal-value-real-poles` | `the-residue-theorem` | gpt-5.6-terra | `faceb451c21292e3d1e90006be0353f643770153ad168709c1ba9b388a477caa` |
| `thm-residue-evaluation-rational-fourier-integrals` | `the-residue-theorem` | gpt-5.6-terra | `7f77c8504846d0f31eddcfa1d03b3878e4382148d4a84a331acc1a9b2e812a3c` |
| `thm-residue-evaluation-rational-real-integrals` | `the-residue-theorem` | gpt-5.6-terra | `9f96eb0bae5611a421ed291156b437fb84804c6617729d7a83400a126346ba83` |
| `thm-residue-theorem-null-homologous-cycle` | `the-residue-theorem` | gpt-5.6-terra | `b3506a4e436199ddfa400c6dd4318c5b85d573b6d73f42396f56094cbb30bf0f` |
| `thm-riemann-extension-across-a-coordinate-hyperplane` | `the-hartogs-phenomena` | gpt-5.6-terra | `0627876f044e0f88981ec0ad90b7276ab8568ae8521816a5eb6563ab0257a4ce` |
| `thm-trigonometric-integral-unit-circle-substitution` | `the-residue-theorem` | gpt-5.6-terra | `31048d538f01f023a35c0aaa1c0900f161a3d9779ce6c4f7994941bad82e9e12` |
| `thm-upper-envelope-theorem-for-plane-subharmonic-functions` | `subharmonic-functions-and-the-dirichlet-problem` | gpt-5.6-terra | `0a8e8e23957044b69e70dec79fb6534a6e3d54a8014593653a978fa0787ce43d` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-20`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-20-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-20-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-20-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-20-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
