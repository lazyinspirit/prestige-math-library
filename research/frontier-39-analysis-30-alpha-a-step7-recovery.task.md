# Step 7 adjudication — group **a**, run `frontier-39-analysis-30`

You are the group Alpha for batches **1**, **11**, **28**: 3 A/B pair(s), 6 page(s), 98 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-39-analysis-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `heat-equation-maximum-principles-duhamel-and-smoothing` | A | pde | 458.013 | `the-heat-kernel-and-the-cauchy-problem`, `banach-valued-integration-and-the-radon-nikodym-property`, `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `orthonormal-bases-parseval-and-fourier-series` |
| 1 | `heat-equation-maximum-principles-duhamel-and-smoothing-examples` | B | pde | 458.014 | `heat-equation-maximum-principles-duhamel-and-smoothing` |
| 11 | `fredholm-elliptic-problems-and-the-elliptic-spectrum` | A | pde | 458.031 | `lax-milgram-and-weak-elliptic-solutions`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `unbounded-self-adjoint-operators-and-stones-theorem`, `complexification-realification-and-real-structures` |
| 11 | `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples` | B | pde | 458.032 | `fredholm-elliptic-problems-and-the-elliptic-spectrum` |
| 28 | `finite-fourier-analysis-and-the-fast-fourier-transform` | A | fourier-analysis | 510.06507 | `character-groups-and-elementary-lca-duals`, `bochner-inversion-and-plancherel-on-lca-groups`, `pontryagin-duality-for-locally-compact-abelian-groups` |
| 28 | `finite-fourier-analysis-and-the-fast-fourier-transform-examples` | B | fourier-analysis | 510.06508 | `finite-fourier-analysis-and-the-fast-fourier-transform` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `heat-equation-maximum-principles-duhamel-and-smoothing` — Heat Equation Maximum Principles Duhamel and Smoothing (31 item(s))

- `def-parabolic-cylinder-and-parabolic-boundary` · definition — Parabolic cylinder and parabolic boundary
- `lem-negative-semidefinite-hessian-at-an-interior-local-maximum` · lemma — The Hessian is negative semidefinite at an interior local maximum
- `lem-strict-subsolution-perturbation-for-the-heat-operator` · lemma — Strict-subsolution perturbation for the heat operator
- `thm-weak-parabolic-maximum-principle` · theorem — Weak parabolic maximum principle
- `def-heat-ball-and-its-slices` · definition — Heat balls and their time slices
- `lem-heat-ball-representation-formula` · lemma — Heat-ball representation formula
- `lem-submean-inequality-for-heat-subsolutions` · lemma — Submean inequality for heat subsolutions on heat balls
- `lem-heat-ball-chains-reach-earlier-points` · lemma — Heat-ball chains reach earlier points
- `thm-strong-parabolic-maximum-principle` · theorem — Strong parabolic maximum principle
- `cor-strict-positivity-for-nontrivial-nonnegative-heat-solutions` · corollary — Strict positivity propagates to later interior times
- `cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem` · corollary — Comparison and uniqueness for the bounded-cylinder heat problem
- `thm-linfinity-stability-for-the-inhomogeneous-heat-equation` · theorem — Supremum norm stability for forced heat problems
- `thm-energy-uniqueness-for-the-homogeneous-heat-equation` · theorem — Energy uniqueness for the homogeneous heat equation
- `lem-forced-heat-energy-identity` · lemma — Energy identity for the forced Dirichlet heat equation
- `lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval` · lemma — Backward uniqueness for the heat equation on a bounded interval
- `def-duhamel-heat-potential` · definition — The Duhamel heat potential
- `thm-duhamel-lone-in-time-lp-forcing-estimate` · theorem — L1 in time estimate for Lp Duhamel forcing
- `lem-whole-space-maximum-principle-under-gaussian-growth` · lemma — Maximum principle on the whole space under Gaussian growth
- `thm-whole-space-heat-uniqueness-under-gaussian-growth` · theorem — Uniqueness for the whole-space heat equation under Gaussian growth
- `thm-duhamel-principle-for-the-whole-space-heat-equation` · theorem — Duhamel principle for the whole-space heat equation
- `thm-inhomogeneous-heat-cauchy-formula` · theorem — The inhomogeneous heat Cauchy formula
- `thm-instantaneous-smoothing-of-lp-heat-flow` · theorem — Instantaneous smoothing of the Lp heat flow
- `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` · corollary — Spatial smoothing of forcing separated from the observation time
- `def-complex-time-heat-kernel-on-a-proper-sector` · definition — The complex-time heat kernel on a proper sector
- `lem-complex-time-heat-kernel-is-lone-differentiable-in-its-parameter` · lemma — The complex-time heat kernel is L1-differentiable in its parameter
- `thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup` · theorem — Complex-time heat operators form a bounded holomorphic semigroup
- `rem-the-heat-operator-family-is-an-analytic-semigroup-in-the-later-abstract-language` · remark — The heat operator family is an analytic semigroup in the later abstract language
- `lem-ltwo-normalisation-of-sine-modes-on-the-interval` · lemma — L2 normalisation of the sine modes on an interval
- `thm-backward-heat-solution-map-is-unbounded` · theorem — The backward heat solution map is unbounded
- `cor-a-nonzero-compactly-supported-final-profile-is-not-reached-by-whole-space-heat-flow` · corollary — Compactly supported nonzero terminal profiles are outside the heat range
- `rem-backward-ill-posed-does-not-mean-universal-nonexistence` · remark — Backward ill-posedness does not mean universal nonexistence

### `heat-equation-maximum-principles-duhamel-and-smoothing-examples` — Heat Equation Maximum Principles Duhamel and Smoothing — Examples (9 item(s))

- `ex-duhamel-solution-for-a-time-independent-source` · example — Duhamel solution for a time-independent source
- `ex-heat-comparison-preserves-an-interval-of-values` · example — Heat comparison preserves an interval of values
- `ex-sine-modes-decay-under-dirichlet-heat-flow` · example — Sine modes decay under Dirichlet heat flow
- `cex-final-time-face-is-not-part-of-the-parabolic-boundary` · counterexample — The final-time face is not part of the parabolic boundary
- `cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data` · counterexample — Incompatible initial and boundary values prevent corner continuity
- `rem-whole-space-zero-data-heat-solutions-without-growth-control` · remark — Tychonoff nonuniqueness: zero-data heat solutions without growth control (recorded, not proved here)
- `cex-backward-heat-amplifies-small-high-frequency-errors` · counterexample — Backward heat amplifies small high-frequency errors
- `ex-backward-heat-exists-for-finite-dirichlet-eigenfunction-sums` · example — Finite sine sums admit a backward Dirichlet heat solution
- `cex-a-mild-heat-solution-need-not-be-classical-at-initial-time` · counterexample — A mild heat solution need not be classical at the initial time

### `fredholm-elliptic-problems-and-the-elliptic-spectrum` — Fredholm Elliptic Problems and the Elliptic Spectrum (29 item(s))

- `thm-garding-inequality-for-a-divergence-form-elliptic-operator` · theorem — Garding's inequality for a divergence-form elliptic operator
- `cor-a-sufficiently-large-shift-is-coercive` · corollary — A sufficiently large shift is coercive
- `def-shifted-elliptic-solution-operator` · definition — The shifted elliptic solution operator
- `lem-shifted-elliptic-solution-operator-is-compact-on-ltwo` · lemma — The shifted solution operator is compact on $L^2$
- `lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation` · lemma — The unshifted equation is an identity-minus-compact equation
- `def-formal-adjoint-and-adjoint-weak-dirichlet-problem` · definition — The formal adjoint and the adjoint weak Dirichlet problem
- `lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem` · lemma — The adjoint solution operator solves the adjoint form problem
- `lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality` · lemma — The elliptic Fredholm range condition is orthogonality to the adjoint kernel
- `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems` · theorem — The Fredholm alternative for weak elliptic Dirichlet problems
- `cor-elliptic-kernel-and-cokernel-are-finite-dimensional` · corollary — The elliptic kernel and cokernel are finite dimensional
- `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` · corollary — Uniqueness implies existence for the elliptic Dirichlet problem
- `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set` · lemma — Smooth compactly supported functions of an open set are dense in L2
- `def-ltwo-operator-associated-with-a-symmetric-elliptic-form` · definition — The $L^2$ operator associated with a symmetric elliptic form
- `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded` · lemma — The associated elliptic operator is densely defined, symmetric and lower bounded
- `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent` · theorem — The symmetric elliptic form operator is self-adjoint with compact resolvent
- `def-symmetric-elliptic-weak-eigenpair` · definition — Symmetric elliptic weak eigenpairs
- `lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint` · lemma — The symmetric shifted solution operator is positive and self-adjoint
- `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` · theorem — Discrete spectrum of a symmetric elliptic Dirichlet operator
- `lem-eigenbasis-expansion-in-the-form-norm` · lemma — Eigenbasis expansion in the form norm
- `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue` · theorem — The Rayleigh principle for the first Dirichlet eigenvalue
- `thm-courant-fischer-minimax-for-elliptic-eigenvalues` · theorem — The Courant-Fischer min-max principle for elliptic eigenvalues
- `cor-poincare-constant-and-first-dirichlet-eigenvalue` · corollary — The Poincare constant is the reciprocal square root of the first Dirichlet eigenvalue
- `cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case` · corollary — Non-invertible elliptic shifts form a discrete set in the self-adjoint case
- `lem-elliptic-resolvent-identity` · lemma — The elliptic resolvent identity
- `cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal` · corollary — Eigenfunctions for distinct symmetric elliptic eigenvalues are L2-orthogonal
- `thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem` · theorem — Spectral series solution of an invertible symmetric elliptic problem
- `thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion` · theorem — The first Dirichlet eigenvalue is monotone under domain inclusion
- `thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation` · theorem — The first positive Neumann eigenvalue has the mean-zero Rayleigh characterisation
- `rem-neumann-spectrum-and-the-constant-zero-mode` · remark — The Neumann spectrum and the constant zero mode

### `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples` — Fredholm Elliptic Problems and the Elliptic Spectrum — Examples (10 item(s))

- `ex-dirichlet-laplacian-eigenpairs-on-an-interval` · example — Dirichlet Laplacian eigenpairs on an interval
- `ex-neumann-laplacian-has-a-zero-constant-mode` · example — The Neumann Laplacian has a zero constant mode
- `ex-shift-removes-a-negative-zero-order-obstruction` · example — A shift removes a negative zero-order obstruction
- `cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue` · counterexample — Elliptic Fredholm solvability can fail at an eigenvalue
- `cex-elliptic-eigenvalues-need-not-be-simple` · counterexample — Elliptic eigenvalues need not be simple
- `cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis` · counterexample — Coercive non-symmetric forms need not have an orthonormal eigenbasis
- `ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues` · example — A coercive non-symmetric form can have non-real Galerkin eigenvalues
- `ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue` · example — A disconnected Neumann domain has a multiple zero eigenvalue
- `rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis` · remark — A repeated eigenvalue has no canonical eigenfunction basis
- `ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue` · example — The resolvent norm blows up at an eigenvalue

### `finite-fourier-analysis-and-the-fast-fourier-transform` — Finite Fourier Analysis and the Fast Fourier Transform (14 item(s))

- `lem-orthogonality-of-characters-on-a-finite-cyclic-group` · lemma — Orthogonality of the characters $x\mapsto e^{2\pi ikx/N}$ on $\mathbb Z/N\mathbb Z$
- `def-unitary-discrete-fourier-transform-on-z-mod-n` · definition — The unitary discrete Fourier transform on $\mathbb Z/N\mathbb Z$
- `def-counting-inner-product-on-complex-functions-on-z-mod-n` · definition — The counting inner product on $\mathbb C^{\mathbb Z/N\mathbb Z}$
- `def-cyclic-convolution-on-z-mod-n` · definition — The unnormalised cyclic convolution on $\mathbb Z/N\mathbb Z$
- `thm-finite-fourier-inversion` · theorem — Finite Fourier inversion for the unitary transform on $\mathbb Z/N\mathbb Z$
- `thm-finite-parseval-and-plancherel` · theorem — Finite Parseval and Plancherel identity for the unitary DFT
- `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` · lemma — The DFT turns cyclic convolution into a scaled pointwise product
- `lem-dft-squares-to-reflection-and-has-fourth-power-identity` · lemma — $\mathcal F_N^2$ is reflection and $\mathcal F_N^4$ is the identity
- `def-unnormalised-engineering-dft-and-conversion` · definition — The unnormalised engineering DFT and its conversion to the unitary transform
- `lem-radix-two-even-odd-dft-factorisation` · lemma — The radix-two even/odd factorisation of the DFT
- `def-recursive-radix-two-fast-fourier-transform` · definition — The recursive radix-two fast Fourier transform
- `thm-radix-two-fft-correctness` · theorem — Correctness of the recursive radix-two FFT
- `thm-radix-two-fft-arithmetic-complexity` · theorem — The radix-two FFT uses $O(N\log_2N)$ complex arithmetic operations
- `rem-cooley-tukey-factorisation-for-composite-lengths` · remark — Mixed-radix factorisation for composite lengths (recorded, not proved here)

### `finite-fourier-analysis-and-the-fast-fourier-transform-examples` — Finite Fourier Analysis and the Fast Fourier Transform — Examples (5 item(s))

- `ex-unitary-dft-for-n-equals-one-and-two` · example — The unitary DFT for $N=1$ and $N=2$
- `ex-cyclic-convolution-via-the-dft` · example — Cyclic convolution on $\mathbb Z/4\mathbb Z$ via the DFT
- `ex-four-point-radix-two-fft` · example — The four-point radix-two FFT executed in full
- `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` · counterexample — Cyclic convolution wraps a high coefficient without zero padding
- `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` · counterexample — The radix-two split fails for odd $N$

## Your seams

Your pages depend on another group's:

- `fredholm-elliptic-problems-and-the-elliptic-spectrum` requires `lax-milgram-and-weak-elliptic-solutions` (group f, batch 10)
- `finite-fourier-analysis-and-the-fast-fourier-transform` requires `bochner-inversion-and-plancherel-on-lca-groups` (group j, batch 26)
- `finite-fourier-analysis-and-the-fast-fourier-transform` requires `pontryagin-duality-for-locally-compact-abelian-groups` (group j, batch 27)

Another group's pages depend on yours:

- `scalar-conservation-laws-and-entropy-solutions` (group d) requires your `heat-equation-maximum-principles-duhamel-and-smoothing`
- `poisson-summation-sampling-and-lattice-duality` (group d) requires your `finite-fourier-analysis-and-the-fast-fourier-transform`
- `interior-and-boundary-sobolev-elliptic-regularity` (group g) requires your `fredholm-elliptic-problems-and-the-elliptic-spectrum`
- `uncertainty-principles-for-fourier-analysis` (group i) requires your `finite-fourier-analysis-and-the-fast-fourier-transform`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-39-analysis-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-39-analysis-30`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
