# Step 8 — group **b**, run `frontier-20`

You are the group Alpha for batches **3**, **9**: 3 A/B pair(s), 6 page(s), 98 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-20`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
