# Step 7 adjudication — group **j**, run `frontier-39-analysis-30`

You are the group Alpha for batches **17**, **26**, **27**: 3 A/B pair(s), 6 page(s), 93 item(s), 0 open rejection(s) over 0 item(s).

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
| 17 | `strongly-continuous-semigroups-and-hille-yosida` | A | pde | 458.043 | `constrained-variational-problems-and-variational-inequalities` |
| 17 | `strongly-continuous-semigroups-and-hille-yosida-examples` | B | pde | 458.044 | `strongly-continuous-semigroups-and-hille-yosida` |
| 26 | `bochner-inversion-and-plancherel-on-lca-groups` | A | fourier-analysis | 510.06503 | `character-groups-and-elementary-lca-duals`, `fourier-transform-convolution-and-approximate-identities`, `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `gelfand-theory-and-commutative-c-star-algebras`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `haar-measure-existence-and-uniqueness`, `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |
| 26 | `bochner-inversion-and-plancherel-on-lca-groups-examples` | B | fourier-analysis | 510.06504 | `bochner-inversion-and-plancherel-on-lca-groups`, `fejer-and-poisson-summability-of-fourier-series`, `finite-abelian-characters-for-combinatorics` |
| 27 | `pontryagin-duality-for-locally-compact-abelian-groups` | A | fourier-analysis | 510.06505 | `character-groups-and-elementary-lca-duals`, `bochner-inversion-and-plancherel-on-lca-groups`, `uniform-spaces`, `subspaces-products-and-quotients`, `inverse-systems-profinite-groups-and-completion`, `itos-formula-and-brownian-martingales` |
| 27 | `pontryagin-duality-for-locally-compact-abelian-groups-examples` | B | fourier-analysis | 510.06506 | `pontryagin-duality-for-locally-compact-abelian-groups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `strongly-continuous-semigroups-and-hille-yosida` — Strongly Continuous Semigroups and Hille Yosida (33 item(s))

- `def-strongly-continuous-semigroup` · definition — Strongly continuous semigroup
- `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval` · lemma — A semigroup with continuity at zero is uniformly bounded on every compact time interval
- `lem-strong-continuity-at-zero-implies-orbit-continuity` · lemma — Continuity at time zero implies continuity of every orbit
- `thm-exponential-bound-for-a-c-zero-semigroup` · theorem — Exponential bound for a C0-semigroup
- `lem-linearity-of-the-bochner-integral` · lemma — Linearity of the Bochner integral
- `lem-average-convergence-of-a-continuous-banach-valued-function` · lemma — Average convergence for a continuous Banach-valued function
- `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve` · lemma — Mean value inequality for a differentiable Banach-valued curve
- `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` · lemma — Fundamental theorem of calculus for Banach-valued continuous curves
- `def-infinitesimal-generator-of-a-c-zero-semigroup` · definition — Infinitesimal generator of a C0-semigroup
- `lem-semigroup-generator-commutes-with-orbits-on-its-domain` · lemma — The generator commutes with the semigroup on its domain
- `lem-integrated-semigroup-orbits-belong-to-the-generator-domain` · lemma — Time integrals of semigroup orbits lie in the generator domain
- `thm-generators-are-closed-and-densely-defined` · theorem — The generator is closed and densely defined
- `def-resolvent-of-a-closed-operator` · definition — Resolvent and spectrum of a closed operator on a Banach space
- `lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity` · lemma — Resolvent identity for closed operators
- `thm-laplace-transform-formula-for-the-semigroup-resolvent` · theorem — Laplace transform formula for the resolvent
- `cor-resolvent-power-estimates-for-semigroup-generators` · corollary — Resolvent power estimates for semigroup generators
- `lem-exponential-series-of-a-bounded-operator` · lemma — The exponential series of a bounded operator
- `lem-yosida-resolvent-converges-strongly-to-the-identity` · lemma — The Yosida resolvent converges strongly to the identity
- `def-yosida-approximants` · definition — Yosida approximants
- `lem-yosida-approximants-are-bounded-and-converge-on-the-domain` · lemma — Yosida approximants are bounded and converge on the domain
- `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup` · theorem — Bounded Yosida semigroups converge to the generated semigroup
- `thm-hille-yosida-generation-theorem` · theorem — Hille-Yosida generation theorem
- `cor-contraction-hille-yosida-theorem` · corollary — Contraction Hille-Yosida theorem
- `def-dissipative-operator` · definition — Dissipative operator
- `thm-lumer-phillips-generation-theorem` · theorem — Lumer-Phillips generation theorem
- `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing` · lemma — The variation-of-constants integral is continuous for integrable forcing
- `def-classical-strong-and-mild-abstract-cauchy-solutions` · definition — Classical, strong and mild abstract Cauchy solutions
- `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation` · theorem — Well-posedness of the abstract Cauchy problem is equivalent to generation
- `thm-variation-of-constants-formula` · theorem — Variation of constants for the inhomogeneous abstract Cauchy problem
- `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class` · theorem — Uniqueness of the scalar Laplace transform in the exponential-growth class
- `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups` · lemma — Laplace uniqueness identifies two exponentially bounded semigroups
- `cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup` · corollary — Restriction to a closed invariant subspace is a C0-semigroup and its generator is the part
- `rem-semigroup-sign-and-generator-conventions` · remark — Semigroup sign and generator conventions

### `strongly-continuous-semigroups-and-hille-yosida-examples` — Strongly Continuous Semigroups and Hille Yosida — Examples (10 item(s))

- `ex-bounded-operator-exponential-semigroup` · example — The exponential of a bounded operator is a uniformly continuous semigroup
- `ex-right-translation-semigroup-on-lp` · example — The right-translation semigroup on Lp has the weak derivative as generator
- `ex-multiplication-semigroup-and-its-generator` · example — A multiplication semigroup with an unbounded generator
- `ex-dirichlet-heat-semigroup-from-the-laplacian` · example — The Dirichlet Laplacian generates the heat semigroup
- `cex-strong-continuity-does-not-imply-operator-norm-continuity` · counterexample — Strong continuity does not imply operator-norm continuity
- `cex-a-mild-solution-need-not-be-classical` · counterexample — A mild solution need not be classical
- `cex-translation-semigroup-is-not-strongly-continuous-on-linfinity` · counterexample — The translation semigroup is not strongly continuous on L-infinity
- `thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain` · theorem — An orbit is right differentiable at zero exactly on the generator domain
- `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero` · corollary — A semigroup with unbounded generator is not norm continuous at zero
- `cex-first-resolvent-estimate-does-not-give-hille-yosida-bound` · counterexample — A first resolvent estimate does not ensure the prescribed semigroup bound

### `bochner-inversion-and-plancherel-on-lca-groups` — Bochner Inversion and Plancherel on Lca Groups (21 item(s))

- `def-fourier-transform-on-an-lca-group` · definition — The Fourier transform on an LCA group
- `lem-lca-haar-measure-is-inversion-invariant` · lemma — Haar measure on an abelian group is invariant under inversion
- `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` · lemma — L^1 of an LCA group is a commutative Banach star algebra under convolution
- `lem-lca-translations-and-normalised-local-approximate-identities` · lemma — Translation continuity and normalised local approximate identities on an LCA group
- `lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations` · lemma — Nonzero multiplicative functionals on L^1 of an LCA group are Fourier evaluations
- `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` · lemma — Fourier transform intertwines translation, modulation and convolution
- `lem-lca-lone-character-topology-is-the-compact-open-topology` · lemma — The character topology on L^1 of an LCA group is the compact-open topology
- `lem-lca-scalar-unitization-character-space-and-spectrum` · lemma — Scalar unitisation of L^1 of an LCA group: characters, spectrum and identity criterion
- `thm-riemann-lebesgue-lemma-on-lca-groups` · theorem — Riemann-Lebesgue lemma on LCA groups
- `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` · lemma — Fourier-Stieltjes transforms determine finite Radon measures
- `def-positive-definite-function-on-an-abelian-group` · definition — Positive definite functions on an abelian group
- `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` · lemma — Fourier-Stieltjes transforms of positive measures are continuous positive definite
- `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` · lemma — Positive definite functions give positive bounded functionals on the transform core
- `lem-bochner-functional-extends-and-has-a-radon-representing-measure` · lemma — The Bochner functional extends and has a Radon representing measure
- `thm-bochner-theorem-for-lca-groups` · theorem — Bochner's theorem for LCA groups
- `cor-normalised-positive-definite-functions-correspond-to-probability-measures` · corollary — Normalised positive definite functions correspond to probability measures
- `lem-lca-positive-convolution-squares-form-an-inversion-core` · lemma — Positive convolution squares form a dense inversion core
- `thm-compatible-dual-haar-normalisation` · theorem — Compatible dual Haar normalisation
- `thm-lca-fourier-inversion-for-integrable-transform` · theorem — Fourier inversion for integrable transforms on LCA groups
- `lem-lca-parseval-pairing-on-the-integrable-core` · lemma — Parseval pairing on the integrable core
- `thm-lca-plancherel-isometric-extension` · theorem — Plancherel isometric extension on LCA groups

### `bochner-inversion-and-plancherel-on-lca-groups-examples` — Bochner Inversion and Plancherel on Lca Groups — Examples (5 item(s))

- `ex-haar-normalisations-on-the-circle-and-the-integers` · example — Haar normalisations on the circle and the integers
- `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` · example — Haar normalisations on a finite abelian group and its dual
- `ex-a-character-is-positive-definite` · example — A character is positive definite
- `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` · counterexample — A continuous function of modulus at most one need not be positive definite
- `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` · counterexample — LCA Fourier inversion is not an everywhere statement for arbitrary L^1 functions

### `pontryagin-duality-for-locally-compact-abelian-groups` — Pontryagin Duality for Locally Compact Abelian Groups (21 item(s))

- `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` · lemma — Compact-open neighbourhoods on the dual give a neighbourhood basis on the group
- `lem-positive-compactly-supported-transform-bump-on-the-dual` · lemma — Compactly supported nonnegative transform bumps on the dual
- `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` · lemma — A locally compact subgroup of a Hausdorff topological group is closed
- `lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca` · lemma — The quotient of an LCA group by a closed subgroup is LCA
- `thm-pontryagin-biduality` · theorem — Pontryagin biduality: the evaluation map is a topological isomorphism
- `lem-continuous-characters-separate-points-of-an-lca-group` · lemma — Continuous characters separate points of an LCA group
- `def-annihilator-of-a-subgroup` · definition — The annihilator of a subgroup
- `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` · theorem — The dual of a quotient is the annihilator
- `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` · lemma — Annihilators reverse inclusions and the double annihilator closes the subgroup
- `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` · lemma — Characters of a closed subgroup extend to the ambient LCA group
- `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` · theorem — The dual of a closed subgroup is a quotient of the dual
- `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` · lemma — The Plancherel transform range is dense in L^2 of the dual
- `thm-plancherel-theorem-for-lca-groups` · theorem — The Plancherel theorem for locally compact abelian groups
- `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` · corollary — Compact and discrete transforms are the two extreme Plancherel cases
- `thm-compact-discrete-duality-for-lca-groups` · theorem — Compactness and discreteness are exchanged by duality
- `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` · lemma — Biduality commutes with products, closed subgroups and quotients
- `cor-pontryagin-duality-is-a-contravariant-involution` · corollary — Dualisation is a contravariant involution
- `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` · lemma — Totally disconnected LCA groups have bases of compact open subgroups
- `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index` · lemma — Every LCA group has an open compactly generated subgroup with no open subgroup of infinite index
- `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean` · lemma — A compactly generated LCA group with no open subgroup of infinite index is Euclidean times compact
- `thm-principal-structure-theorem-for-lca-groups` · theorem — The principal structure theorem for LCA groups

### `pontryagin-duality-for-locally-compact-abelian-groups-examples` — Pontryagin Duality for Locally Compact Abelian Groups — Examples (3 item(s))

- `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` · example — Annihilators of closed subgroups of Euclidean space
- `ex-bidual-map-on-the-circle-and-the-integers` · example — The bidual map on the circle and the integers
- `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` · counterexample — Forgetting the compact-open topology destroys Pontryagin duality

## Your seams

Your pages depend on another group's:

- `strongly-continuous-semigroups-and-hille-yosida` requires `constrained-variational-problems-and-variational-inequalities` (group i, batch 16)

Another group's pages depend on yours:

- `finite-fourier-analysis-and-the-fast-fourier-transform` (group a) requires your `bochner-inversion-and-plancherel-on-lca-groups`
- `finite-fourier-analysis-and-the-fast-fourier-transform` (group a) requires your `pontryagin-duality-for-locally-compact-abelian-groups`
- `poisson-summation-sampling-and-lattice-duality` (group d) requires your `pontryagin-duality-for-locally-compact-abelian-groups`
- `analytic-semigroups-and-linear-evolution-equations` (group e) requires your `strongly-continuous-semigroups-and-hille-yosida`

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

# Step 7 batch adjudication, `frontier-39-analysis-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
