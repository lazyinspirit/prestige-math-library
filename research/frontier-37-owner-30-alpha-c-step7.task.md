# Step 7 adjudication — group **c**, run `frontier-37-owner-30`

You are the group Alpha for batches **8**, **11**, **12**: 3 A/B pair(s), 6 page(s), 87 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` | A | scheme-theory | 510.0163 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `smooth-proper-curves-divisors-genus-and-ramification`, `riemann-roch-for-curves-via-euler-characteristics`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 8 | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples` | B | scheme-theory | 510.0164 | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| 11 | `hilbert-and-riesz-transforms` | A | fourier-analysis | 458.02603 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fourier-multipliers-and-sobolev-characterisations`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`, `fejer-and-poisson-summability-of-fourier-series`, `divergence-and-almost-everywhere-convergence-of-fourier-series`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 11 | `hilbert-and-riesz-transforms-examples` | B | fourier-analysis | 458.02604 | `hilbert-and-riesz-transforms` |
| 12 | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` | A | fourier-analysis | 458.02615 | `fourier-multipliers-and-sobolev-characterisations`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation` |
| 12 | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples` | B | fourier-analysis | 458.02616 | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` — Residues Serre Duality for Curves and the Full Riemann Roch Theorem (47 item(s))

- `lem-uniformizer-differential-is-a-basis` · lemma — A uniformizer differential generates the module of differentials
- `def-residue-rational-differential-curve-point` · definition — Residue of a rational differential at a separable closed point
- `lem-residue-independent-uniformizer` · lemma — The residue is independent of the uniformizer
- `lem-residue-exact-differential-zero` · lemma — Residues of exact differentials vanish
- `lem-finite-potent-trace-existence-and-uniqueness` · lemma — The trace of a finite potent endomorphism exists and is unique
- `def-commensurable-subspaces-and-ideals-of-endomorphisms` · definition — Commensurable subspaces and the ideal filtration E_0, E_1, E_2 of End_k(V)
- `lem-finite-potent-trace-linearity-and-conjugation` · lemma — Linearity and conjugation invariance of the finite potent trace
- `lem-e-ideals-and-commutator-trace` · lemma — E is a k-algebra, the E_i are ideals, and commutator traces vanish
- `thm-abstract-residue-exists-unique` · theorem — Existence and uniqueness of the abstract residue map res_V: Omega^1_{K/k} -> k
- `lem-abstract-residue-basic-properties` · lemma — Basic properties of the abstract residue: restriction, commensurability, vanishing, logarithmic residues
- `lem-abstract-residue-additivity` · lemma — Additivity of the abstract residue over intersecting subspaces
- `lem-abstract-residue-trace-under-finite-free-extension` · lemma — The abstract residue under a finite free extension of the coefficient algebra
- `cor-coefficient-trace-residue-agreement` · corollary — The abstract residue computes the coefficient-trace residue at every closed point
- `lem-adelic-quotient-computes-h1-structure-sheaf` · lemma — The adele quotient V_X/(K + A_X) computes H^1 of the structure sheaf
- `thm-global-residue-theorem-algebraic-curve` · theorem — The global residue theorem on a smooth proper curve over a perfect field
- `def-principal-parts-sheaf-line-bundle-curve` · definition — Principal parts of an invertible sheaf on a curve
- `lem-principal-parts-cech-h1-presentation` · lemma — H^1 of a line bundle on a curve as principal parts modulo rational and regular sections
- `def-residue-pairing-principal-parts` · definition — The residue pairing of a line bundle with the dual canonical twist
- `lem-residue-pairing-descends-cohomology` · lemma — The residue pairing is well defined on cohomology
- `lem-residue-pairing-functorial-line-bundle` · lemma — Functoriality of the residue pairing under line-bundle maps and connecting homomorphisms
- `lem-local-residue-annihilator-regular-sections` · lemma — Annihilators of regular sections under the local residue pairing
- `lem-global-residue-pairing-injective-left` · lemma — A nonzero global dual section detects a cohomology class
- `lem-twisting-sheaf-projective-space-ample` · lemma — The twisting sheaf of projective space is very ample and ample
- `cor-projective-embedding-every-smooth-proper-curve` · corollary — Every smooth proper curve admits a projective embedding
- `lem-global-residue-pairing-dimension-balance` · lemma — The two sides of the residue pairing have the same dimension
- `thm-serre-duality-curves-line-bundles` · theorem — Serre duality for line bundles on a smooth proper curve, and the residue realization
- `thm-serre-duality-curves-vector-bundles` · theorem — Serre duality for finite locally free sheaves on a smooth proper curve
- `thm-serre-duality-curves-coherent-sheaves` · theorem — Serre duality for coherent sheaves on a smooth proper curve, Ext form
- `cor-h1-line-bundle-dual-sections` · corollary — h^1 of a line bundle equals the space of dual sections
- `thm-full-riemann-roch-divisor` · theorem — The full Riemann-Roch theorem for divisors on a smooth proper curve
- `cor-h0-canonical-differentials-genus` · corollary — The canonical bundle has exactly g independent sections
- `cor-canonical-degree-two-g-minus-two` · corollary — The canonical divisor has degree 2g - 2
- `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` · corollary — H^1 of a line bundle vanishes above degree 2g - 2
- `cor-rr-exact-high-degree-formula` · corollary — Riemann-Roch in exact form for divisors of degree above 2g - 2
- `thm-degree-two-g-line-bundle-basepoint-free` · theorem — Line bundles of degree at least 2g are base-point-free
- `thm-degree-two-g-plus-one-line-bundle-very-ample` · theorem — Line bundles of degree at least 2g+1 are very ample
- `def-hyperelliptic-curve` · definition — Hyperelliptic curves and hyperelliptic maps
- `thm-canonical-map-nonhyperelliptic-curve` · theorem — The canonical map: base-point-freeness and the hyperelliptic exception
- `thm-adjunction-smooth-plane-curve` · theorem — Adjunction for smooth plane curves
- `cor-genus-degree-smooth-plane-curve` · corollary — The genus of a smooth plane curve in terms of its degree
- `lem-degree-pullback-divisor-finite-morphism-curves` · lemma — Fibres, pullbacks and degrees of divisors under a finite morphism of curves
- `thm-riemann-hurwitz-complete` · theorem — The Riemann-Hurwitz formula with the different
- `cor-unramified-cover-curves-genus-complete` · corollary — The genus relation for unramified covers of curves
- `thm-genus-one-canonical-bundle-trivial` · theorem — The canonical bundle of a genus-one curve is trivial
- `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` · corollary — A genus-one curve embeds as a plane cubic
- `rem-duality-trace-normalization` · remark — Normalization of the trace for Serre duality on a curve
- `rem-general-serre-duality-deferred` · remark — Higher-dimensional duality is not imported into the curve theorem

### `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples` — Residues Serre Duality for Curves and the Full Riemann Roch Theorem — Examples (11 item(s))

- `ex-residue-projective-line` · example — Residues on the projective line and the vanishing of their sum
- `ex-serre-duality-projective-line-twists` · example — Serre duality on the projective line, twist by twist
- `ex-full-rr-projective-line` · example — The full Riemann-Roch theorem on the projective line, in every degree
- `ex-genus-one-rr-degree-positive` · example — Positive-degree line bundles on a genus-one curve have exactly deg sections
- `ex-plane-cubic-canonical-trivial` · example — Adjunction on a smooth plane cubic: the canonical bundle is trivial
- `ex-plane-quartic-canonical-hyperplane` · example — Adjunction on a smooth plane quartic: the canonical bundle is the hyperplane bundle
- `cex-canonical-map-hyperelliptic-not-embedding` · counterexample — The canonical map of a hyperelliptic curve is not an embedding
- `cex-degree-two-g-minus-one-not-always-basepoint-free` · counterexample — Degree 2g-1 does not force base-point-freeness
- `cex-degree-two-g-not-always-very-ample` · counterexample — Degree 2g does not force very ampleness
- `ex-riemann-hurwitz-double-cover` · example — Riemann-Hurwitz for a tame double cover with 2r branch points
- `ex-residue-pairing-one-cocycle` · example — One cocycle carried through the residue realization of Serre duality

### `hilbert-and-riesz-transforms` — Hilbert and Riesz Transforms (16 item(s))

- `def-conjugate-function-on-the-circle` · definition — Conjugate function on the circle
- `lem-conjugate-dirichlet-kernel-and-principal-value-formula` · lemma — Conjugate Dirichlet kernel and periodic principal value
- `lem-periodic-conjugate-square-identity` · lemma — Periodic conjugate square identity
- `thm-marcel-riesz-conjugate-function-theorem` · theorem — Marcel Riesz conjugate-function theorem
- `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp` · lemma — Uniform Lp bounds for periodic Fourier partial sums
- `thm-fourier-partial-sums-converge-in-periodic-lp` · theorem — Periodic Fourier partial sums converge in the strict Lp range
- `def-truncated-hilbert-transform-and-principal-value` · definition — Truncated line Hilbert transform and principal value
- `lem-singular-kernel-sine-integral-under-countable-choice` · lemma — Sine integral for singular kernel multipliers under Countable Choice
- `lem-hilbert-transform-has-signum-fourier-multiplier` · lemma — Hilbert principal-value kernel has signum multiplier
- `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity` · corollary — Line Hilbert transform is an L² isometry and squares to minus identity
- `lem-hilbert-transform-is-skew-adjoint-on-ltwo` · lemma — Hilbert transform is skew adjoint on complex L²
- `def-riesz-transforms-on-euclidean-space` · definition — Riesz transforms on Euclidean L²
- `lem-riesz-transform-principal-value-kernel-formula` · lemma — Riesz multiplier equals the principal-value kernel on Schwartz functions
- `cor-riesz-transforms-are-ltwo-bounded` · corollary — Riesz transforms are L² contractions and their squares sum to minus identity
- `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds` · lemma — Riesz kernel size, difference and cancellation estimates
- `rem-hilbert-and-riesz-transform-endpoint-map` · remark — Endpoint map for Hilbert and Riesz transforms

### `hilbert-and-riesz-transforms-examples` — Hilbert and Riesz Transforms — Examples (5 item(s))

- `ex-hilbert-transform-of-an-interval-indicator` · example — Hilbert transform of an interval indicator
- `cex-hilbert-transform-is-not-strong-type-one-one` · counterexample — Hilbert transform is not strong type (1,1)
- `cex-hilbert-transform-does-not-map-linfinity-to-linfinity` · counterexample — Hilbert transform does not map L∞ to L∞
- `ex-hilbert-transform-of-the-poisson-kernel` · example — Hilbert transform of the line Poisson kernel
- `ex-riesz-transforms-square-to-minus-the-identity-in-sum` · example — Finite sum of Riesz squares in L²

### `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` — Riesz Potentials and the Hardy–Littlewood–Sobolev Inequality (5 item(s))

- `def-riesz-potential-of-order-alpha` · definition — Riesz potential of order alpha
- `lem-riesz-potential-near-far-splitting` · lemma — Near and far bounds for a Riesz potential
- `lem-hedberg-pointwise-inequality` · lemma — Hedberg pointwise inequality for Riesz potentials
- `thm-hardy-littlewood-sobolev-fractional-integration` · theorem — Hardy–Littlewood–Sobolev fractional integration inequality
- `rem-fractional-integration-endpoints` · remark — Endpoint bounds require separate formulations

### `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples` — Riesz Potentials and the Hardy–Littlewood–Sobolev Inequality: Examples (3 item(s))

- `ex-riesz-potential-scaling-determines-the-target-exponent` · example — Dilation determines the Riesz-potential target exponent
- `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint` · counterexample — Strong fractional integration fails at p equal to one
- `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` · counterexample — The critical Riesz potential can diverge and be essentially unbounded

## Your seams

Your pages depend on another group's:

- `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` requires `smooth-proper-curves-divisors-genus-and-ramification` (group h, batch 6)
- `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` requires `riemann-roch-for-curves-via-euler-characteristics` (group i, batch 7)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-37-owner-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
