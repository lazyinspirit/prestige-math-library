# Step 7 adjudication — group **f**, run `frontier-35-ten-categories`

You are the group Alpha for batches **12**, **14**: 4 A/B pair(s), 8 page(s), 84 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-35-ten-categories-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `the-ip-equals-pspace-theorem` | A | computability-theory | 643 | `arithmetization-and-the-sum-check-protocol`, `space-complexity-savitch-and-tqbf`, `chebyshev-bounds-and-mertens-theorems` |
| 12 | `the-ip-equals-pspace-theorem-examples` | B | computability-theory | 644 | `the-ip-equals-pspace-theorem` |
| 12 | `gap-amplification-and-assignment-testing` | A | computability-theory | 647 | `expander-graphs-and-constraint-graphs`, `the-cook-levin-theorem`, `randomized-complexity-and-amplification`, `algebraic-extensions-degree-and-finite-fields`, `pi-the-equivalent-characterizations`, `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `arithmetization-and-the-sum-check-protocol` |
| 12 | `gap-amplification-and-assignment-testing-examples` | B | computability-theory | 648 | `gap-amplification-and-assignment-testing` |
| 14 | `graded-bimodules-and-tensor-functors` | A | homological-algebra | 717 | `tensor-products-of-modules`, `free-modules-and-exact-sequences`, `abelian-categories`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `tor-flatness-and-global-dimension` |
| 14 | `graded-bimodules-and-tensor-functors-examples` | B | homological-algebra | 718 | `graded-bimodules-and-tensor-functors` |
| 14 | `homological-gaussian-elimination` | A | homological-algebra | 728.1 | `chain-homotopy-and-the-homotopy-category` |
| 14 | `homological-gaussian-elimination-examples` | B | homological-algebra | 728.2 | `homological-gaussian-elimination` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-ip-equals-pspace-theorem` — The IP = PSPACE Theorem (20 item(s))

- `def-qbf-arithmetization-operators` · definition — Field arithmetization of QBF quantifiers
- `lem-quantifier-polynomials-agree-on-booleans` · lemma — Quantifier polynomials agree with QBF semantics on Boolean assignments
- `def-multilinearization-operator` · definition — Multilinearization in one variable
- `lem-multilinearization-preserves-boolean-values` · lemma — Multilinearization preserves Boolean values and bounds individual degree
- `lem-ordered-arithmetization-evaluates-to-the-truth-value` · lemma — The multilinearized ordered arithmetization evaluates to the quantified Boolean truth value
- `lem-efficient-prime-field-for-a-polynomial-soundness-budget` · lemma — A polynomial-size prime field meets the soundness budget
- `def-shamir-protocol-for-tqbf` · definition — Shamir interactive protocol for TQBF
- `lem-honest-prover-maintains-the-claim-invariant` · lemma — Honest prover maintains the field-value claim
- `lem-each-round-has-polynomial-communication` · lemma — Explicit communication, round, and evaluation bounds
- `lem-shamir-protocol-has-perfect-completeness` · lemma — Shamir protocol has perfect completeness
- `lem-first-false-claim-survives-with-root-bound-probability` · lemma — A false field claim survives one round with bounded probability
- `lem-total-soundness-follows-by-union-bound` · lemma — Total TQBF soundness by the first repaired claim
- `lem-shamir-qbf-verifier-runs-in-polynomial-time` · lemma — Shamir verifier runs in polynomial time
- `thm-tqbf-has-a-polynomial-round-interactive-proof` · theorem — TQBF has a polynomial-round interactive proof
- `thm-pspace-is-contained-in-ip` · theorem — PSPACE is contained in IP
- `thm-ip-equals-pspace` · theorem — IP equals PSPACE
- `cor-ip-is-closed-under-complement` · corollary — IP is closed under complement
- `thm-ip-can-be-given-perfect-completeness` · theorem — IP admits perfect completeness
- `fs-ip-equals-pspace-needs-no-degree-reduction` · false-statement — IP = PSPACE needs no degree reduction in this arithmetization
- `fs-the-verifier-trusts-the-final-field-value` · false-statement — The verifier can trust the final field value

### `the-ip-equals-pspace-theorem-examples` — The IP = PSPACE Theorem: Examples and Counterexamples (4 item(s))

- `ex-two-quantifier-qbf-arithmetization-transcript` · example — A two-quantifier field transcript
- `ex-multilinearization-preserves-boolean-values` · example — A concrete multilinearization calculation
- `ex-ip-can-be-given-perfect-completeness` · example — Perfect completeness through a TQBF reduction
- `cex-ip-equals-pspace-needs-no-degree-reduction` · counterexample — Exponential degree without multilinearization

### `gap-amplification-and-assignment-testing` — Gap Amplification and Assignment Testing (31 item(s))

- `def-gap-preserving-csp-reduction` · definition — Complete uniform gap-preserving CSP reductions
- `lem-complete-linear-blowup-reductions-compose` · lemma — Complete linear-blowup reductions compose
- `def-degree-reduction-by-expander-clouds` · definition — Degree reduction by expander incidence clouds
- `lem-cloud-consistency-forces-near-constant-labels` · lemma — Cloud violations control distance to plurality labels
- `thm-degree-reduction-preserves-unsatisfaction` · theorem — Degree reduction preserves unsatisfaction quantitatively
- `def-constraint-graph-powering` · definition — Constraint graph powering with local-view labels
- `lem-canonical-local-view-lift-preserves-perfect-satisfiability` · lemma — Canonical local views preserve perfect satisfiability
- `def-plurality-decoding-of-powered-local-views` · definition — Plurality decoding of powered local views
- `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws` · lemma — Nearby lazy-walk lengths have close endpoint laws
- `lem-plurality-consistency-along-middle-walk-positions` · lemma — Plurality opinions agree with local views in middle positions
- `lem-expander-walk-violated-edge-collision-bound` · lemma — Violating-edge positions have controlled collisions
- `lem-overlap-controlled-union-lower-bound` · lemma — Overlap control gives a union lower bound
- `lem-powering-preserves-perfect-satisfiability` · lemma — Powering preserves perfect satisfiability
- `lem-powering-amplifies-small-gaps` · lemma — Powering amplifies a small unsatisfaction gap
- `thm-gap-amplification-step` · theorem — A complete uniform graph gap-amplification step
- `def-explicit-constant-rate-constant-distance-code` · definition — Explicit binary codes of constant rate and distance
- `def-reed-solomon-outer-code-and-binary-linear-inner-code` · definition — Reed–Solomon outer code and binary linear inner code
- `lem-reed-solomon-outer-code-has-constant-rate-and-distance` · lemma — Reed–Solomon outer code has constant rate and distance
- `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation` · lemma — A random inner linear code has fewer than one bad word in expectation
- `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time` · lemma — Conditional expectation constructs the inner code deterministically
- `lem-concatenated-code-multiplies-rate-and-distance` · lemma — Concatenation multiplies rate and relative distance
- `thm-explicit-code-construction-and-distance` · theorem — A polynomial-time explicit constant-rate constant-distance code
- `def-assignment-tester-and-rejection-ratio` · definition — Assignment tester and rejection ratio
- `def-hadamard-linearity-constraint-system` · definition — Hadamard linearity constraints
- `thm-linearity-test-rejects-proportionally-to-distance` · theorem — BLR rejection is proportional to distance from linearity
- `def-quadratic-consistency-test` · definition — Quadratic tensor consistency test
- `lem-quadratic-test-soundness` · lemma — Quadratic tensor test rejects an inconsistent tensor
- `lem-circuit-satisfaction-is-linear-quadratic-consistency` · lemma — Circuit satisfiability becomes linear-quadratic consistency
- `lem-exponential-base-assignment-tester-from-quadratic-oracles` · lemma — An exponential-size constant-query base assignment tester
- `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester` · lemma — Gate constraints are a weak assignment tester
- `fs-repeating-constraints-amplifies-the-gap` · false-statement — Repeating constraints amplifies the gap

### `gap-amplification-and-assignment-testing-examples` — Gap Amplification and Assignment Testing: Examples and Counterexamples (3 item(s))

- `ex-degree-reduction-preserves-unsatisfaction` · example — A cloud rounding calculation
- `cex-repeating-constraints-amplifies-the-gap` · counterexample — Duplicating constraints does not change UNSAT
- `ex-plurality-decoding-of-powered-local-views` · example — Numerical local-view plurality decoding

### `graded-bimodules-and-tensor-functors` — Graded Bimodules and Tensor Functors (9 item(s))

- `def-graded-ring-module-bimodule-and-internal-shift` · definition — Associative graded algebras, bimodules, and internal shifts
- `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise` · lemma — Graded modules with degree-zero maps form an abelian category
- `def-graded-balanced-tensor-product-and-homogeneous-hom` · definition — Graded balanced tensor product and homogeneous Hom
- `lem-graded-balanced-tensor-and-shift-isomorphisms` · lemma — Graded associativity, units, and internal-shift tensor isomorphisms
- `def-finitely-generated-graded-projective-module` · definition — Finite graded projective modules
- `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules` · theorem — Finite graded projectives are finite shifted-free summands
- `thm-bimodule-tensor-exactness-and-projective-preservation` · theorem — Bimodule tensor exactness and preservation of finite projectives have separate hypotheses
- `thm-graded-bimodule-tensor-hom-adjunction` · theorem — Associative and graded bimodule tensor–Hom adjunction
- `prop-restriction-and-extension-of-scalars-on-graded-module-categories` · proposition — Restriction and extension along a graded algebra map

### `graded-bimodules-and-tensor-functors-examples` — Graded Bimodules and Tensor Functors — Examples (3 item(s))

- `ex-internal-shift-versus-a-change-of-degree` · example — An internal shift reverses the published commutative twist parameter
- `ex-right-flat-bimodule-with-nonprojective-output` · example — A right-flat tensor bimodule can have nonprojective output
- `ex-left-projective-bimodule-with-nonexact-tensor` · example — A left-projective tensor bimodule need not be right-flat

### `homological-gaussian-elimination` — Homological Gaussian Elimination (9 item(s))

- `def-complex-homotopy-and-contractibility-in-an-additive-category` · definition — Complexes, homotopies and contractibility in an additive category
- `def-invertible-differential-block-and-schur-complement-reduction` · definition — An invertible cochain differential block and its candidate reduction
- `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block` · lemma — Triangular basis changes diagonalize an invertible differential block
- `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex` · theorem — Gaussian elimination splits a contractible two-term complex
- `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract` · proposition — Explicit strong deformation retract from Gaussian cancellation
- `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology` · corollary — Gaussian cancellation preserves homotopy type and abelian-category homology
- `thm-finite-iterated-homological-gaussian-elimination` · theorem — Finite iteration of current invertible-block cancellations
- `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations` · proposition — Additive functors preserve chosen Gaussian cancellations
- `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits` · proposition — Transferred maps are functorial up to homotopy, with strict naturality limits

### `homological-gaussian-elimination-examples` — Homological Gaussian Elimination — Examples (5 item(s))

- `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign` · example — A unit pivot forces the minus Schur sign
- `ex-neighbouring-differentials-after-a-gaussian-basis-change` · example — Neighboring differentials transform with the pivot basis changes
- `ex-two-finite-cancellation-orders-and-their-composite-retracts` · example — Two adjacent noncomposable Gaussian pivots in either finite order
- `cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled` · counterexample — A nonunit differential entry cannot be cancelled
- `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps` · counterexample — Gaussian transfer is not strictly functorial on arbitrary cochain maps

## Your seams

Another group's pages depend on yours:

- `graded-quiver-algebras-and-derived-tensor-functors` (group c) requires your `graded-bimodules-and-tensor-functors`
- `type-a-soergel-bimodules-and-hecke-categorification` (group c) requires your `graded-bimodules-and-tensor-functors`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-35-ten-categories-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-35-ten-categories`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.
