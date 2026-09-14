# Step 3b pair report: Schauder bases, approximation, and Banach-space pathologies

- Run: `phase-2-next-18`
- Role: `alpha-high`
- Owned pages: `schauder-bases-approximation-and-banach-space-pathologies` and `schauder-bases-approximation-and-banach-space-pathologies-examples`
- Shared batch: `research/phase-2-next-18-batch-1.pages.json`

## Durable checkpoint

### Objective

Audit and repair this pair's scaffold, then author and verify every owned item, its two pages, manifest and coverage rows, proof contracts, dependency rows, and Step 3 item decisions without changing the sibling Banach-valued-integration pair.

### Verified state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the FA-11 design section, Step 3a scope artifacts, the owner scope receipt, the batch manifest and notes, the dependency ledger, and the relevant published suppliers.
- The owner scope receipt authorizes proceeding with the five proof-bearing Enflo items added in Step 3a.
- Read the complete relevant arguments in Schlumprecht's lecture notes (Schauder bases and Auerbach bases), Bühler--Salamon (James space), Müger (unconditional convergence and `ba`), Dvoretzky--Rogers (complete 1950 paper), and all nine pages of Enflo's 1973 paper.
- No owned item file, owned page, proof-contract file, or prior pair report existed at the start of this dispatch. The shared batch manifest is untracked live-run state and contains the sibling pair, which must be preserved.
- No `research/phase-2-next-18-owner-authoring-direction.md` file exists.

### Confirmed scaffold repairs required

1. `lem-dvoretzky-rogers-finite-block-estimate` must quantify `r >= 2`; its present `r=1` case is false for the zero-dimensional space.
2. `cor-absolute-and-unconditional-convergence-agree-universally-iff-finite-dimensional` directly uses `thm-unconditional-convergence-equivalences` in its finite-dimensional direction and must declare that dependency.
3. `cex-ell-one-and-ell-infinity-are-not-reflexive` must state and propagate AC, with direct dependency `def-axiom-of-choice`.
4. The Banach-mean construction must extend the ordinary limit on the convergent-sequence subspace, not merely the constant-sequence functional.
5. The four proof-bearing Enflo scaffold entries before the final theorem do not accurately state Enflo's actual fixed-generator normalized-trace criterion, Walsh polynomial estimates, or block construction. They require exact statement repair.
6. The Enflo reflexivity step needs a local proof that the Hilbertian sum of finite-dimensional Banach spaces is reflexive and correct choice propagation.

### Open owner-held blocker

Enflo's primary proof obtains failure of AP from its quantitative finite-rank obstruction by invoking Grothendieck's theorem that AP and BAP coincide for reflexive Banach spaces. No current local or published item supplies the direction “reflexive AP implies BAP.” The present generic tensor-obstruction item is not a proved replacement. Closing the promised theorem therefore requires either:

- a new, fully proved supplier `thm-reflexive-approximation-property-implies-bounded-approximation-property`, with its exact choice assumptions; or
- a complete local nuclear-tensor trace obstruction and a construction satisfying it.

Until one route is supplied and verified, the affected Enflo items cannot honestly receive an accept/repaired decision. This report retains the blocker for the owner; it does not override the owner scope receipt.

### Published-item concern to report

- Confirmed, high confidence: `thm-dual-norms-every-vector` asserts a norm-one norm-attaining functional without an AC hypothesis, while its Hahn--Banach proof suppliers require AC. Required repair: add `def-axiom-of-choice`, state “Assume AC,” and identify Hahn--Banach as the exact use. This owned pair avoids using that theorem. The serial reconciler, not this dispatch, must update `research/published-consumer-supplier-ledger.md`.

### Next action

See the final handoff below. All owned content and bookkeeping that can be
completed without an owner ruling is present; the next action is owner scope
refresh and resolution of the missing Enflo AP supplier.

## Item checkpoints

### `def-schauder-basis-and-coordinate-functionals`

- Claim/conventions: one-based ordered expansions; uniqueness is part of the definition; coordinate maps are proved algebraically linear but not assumed continuous.
- Source locator: Schlumprecht, Definition 3.1.1 and following remarks, printed pp.63-64.
- Dependencies examined: `def-banach-space`, `def-series-and-absolute-convergence-in-a-normed-space`.
- Boundary audit: zero vector has the unique all-zero expansion; an empty basis can serve only the zero space; one-vector bases are allowed; rearrangement is deliberately excluded.
- State: reader-facing definition authored. Contract, batch checks, and Step 3 decision remain open.

### `def-partial-sum-projections-and-basis-constant`

- Claim/conventions: $P_0=0$, $P_N$ is initially algebraic, and $K$ may equal infinity until boundedness is established.
- Source locator: Schlumprecht, Definition 3.1.4, printed p.65.
- Dependencies examined: `def-schauder-basis-and-coordinate-functionals`, `def-operator-norm`.
- Boundary audit: $N=0$ is explicit; the zero-space basis has $K=0$; for a nonzero basis $P_Ne_1=e_1$ for $N\ge1$, so the eventual constant is at least one.
- State: reader-facing definition authored. Contract, batch checks, and Step 3 decision remain open.

### `lem-schauder-coefficient-space-is-banach`

- Claim/conventions: coefficient sequences are normed by the supremum of finite partial sums; completeness is proved without presupposing continuity of the $e_n^*$ on $X$.
- Source locator: Schlumprecht, Proposition 3.1.3, printed pp.64-65, with the circularity removed by finite-dimensional coordinate continuity.
- Dependencies examined: `def-schauder-basis-and-coordinate-functionals`, `thm-coordinate-map-for-a-finite-dimensional-normed-space`.
- Boundary audit: the zero sequence and $N=0$ partial sum are included; completeness uses only a fixed finite coordinate map at a time and no choice; bijectivity covers both existence and uniqueness.
- State: full proof authored. Contract, focused precheck/rendering, and Step 3 decision remain open.

### `thm-coordinate-functionals-of-a-schauder-basis-are-bounded`

- Claim/conventions: under DC, $S^{-1}$ is bounded, all truncations on the coefficient space are contractions, $K\le\|S^{-1}\|$, and $e_n^*e_n=P_n-P_{n-1}$.
- Source locator: Schlumprecht, Definition 3.1.4 and Theorem 3.1.6, printed pp.65-68; local proof uses the noncircular coefficient-space route.
- Dependencies examined: `def-dependent-choice`, `def-partial-sum-projections-and-basis-constant`, `lem-schauder-coefficient-space-is-banach`, `thm-bounded-inverse-theorem`.
- Choice audit: DC is used exactly and only when invoking the local bounded-inverse theorem; the hypothesis is stated and propagates to consumers.
- Boundary audit: $P_0=0$ is explicit; the zero space is permitted; each coordinate estimate uses $e_n\ne0$; all quantified $N$ are covered uniformly.
- State: full proof authored. Contract, focused precheck/rendering, and Step 3 decision remain open.

### `cor-banach-space-with-a-schauder-basis-is-separable`

- Claim/conventions: rational finite spans in the real case and Gaussian-rational finite spans in the complex case form a countable dense set.
- Source locator: Schlumprecht, remark following Definition 3.1.1, printed p.64.
- Dependencies examined: `def-schauder-basis-and-coordinate-functionals`.
- Boundary audit: the zero space is covered by the singleton zero set; finite-dimensional and one-vector bases use the same construction; no selection from a family is used.
- State: full proof authored. Contract, focused checks, and Step 3 decision remain open.

### `def-unconditional-convergence-of-a-banach-space-series`

- Claim/conventions: every permutation must converge to the same sum; fixed-order and absolute convergence are separate notions.
- Source locator: Müger, Appendix A immediately before Theorem A.4, printed p.167.
- Dependency examined: `def-series-and-absolute-convergence-in-a-normed-space`.
- Boundary audit: the empty and zero series are unconditional; a one-term series is unconditional; the definition is meaningful in incomplete normed spaces even though the equivalence theorem will assume Banach completeness.
- State: reader-facing definition authored. Contract and checks remain open.

### `def-unconditional-and-conditional-basis`

- Claim/conventions: unconditionality quantifies over every uniquely determined basis expansion, not over the unweighted formal basis series.
- Source locator: Schlumprecht, §3.1 discussion of unconditional bases.
- Dependencies examined: `def-schauder-basis-and-coordinate-functionals`, `def-unconditional-convergence-of-a-banach-space-series`.
- Boundary audit: the empty basis of the zero space is unconditional vacuously; a one-vector basis is unconditional; “conditional” is the exact negation and supplies a witness expansion.
- State: reader-facing definition authored. Contract and checks remain open.

### `thm-unconditional-convergence-equivalences`

- Claim/conventions: permutation convergence, the finite-subset net, uniform finite-tail smallness, all subseries, and all bounded scalar multipliers are equivalent in a Banach space.
- Source locator: Müger, Theorem A.4 and complete proof, printed pp.167-169.
- Dependencies examined: `def-banach-space`, `def-unconditional-convergence-of-a-banach-space-series`.
- Choice audit: bad blocks are selected by least finite-set code, so the proof is choice-free. The bounded-multiplier implication uses a finite layer-cake convex combination, not dual norming or Hahn--Banach.
- Boundary audit: empty finite sets have sum zero; the zero series and a one-term series satisfy every clause; real and complex scalars are treated separately; all five reverse implications are explicit.
- State: full proof authored. A final semantic audit removed the inapplicable `thm-banach-series-criterion` supplier (which concerns absolute convergence) and replaced its sole intended use by Banach completeness itself; the contract and focused gates were then regenerated. The Step 3 decision remains owner-blocked.

### `def-approximation-property-and-bounded-approximation-property`

- Claim/conventions: AP is compact-uniform finite-rank approximation; $\lambda$-BAP adds a uniform operator-norm bound; no approximating sequence is built into either definition.
- Source locator: Enflo, introduction, p.309.
- Dependencies examined: `def-banach-space`, `def-bounded-linear-operator`.
- Boundary audit: the empty compact set is automatic; the zero space has $0$-BAP; $\lambda=0$ is allowed and works only where the identity is zero on the tested compacta.
- State: definition authored. Contract and checks remain open.

### `lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets`

- Claim/conventions: the pointwise limit is bounded and convergence is uniform on each norm-compact set.
- Source locator: Schlumprecht, compact-net argument following Theorem 3.1.6, printed p.68.
- Dependencies examined: `def-bounded-linear-operator`, `def-operator-norm`.
- Boundary audit: $M=0$ is handled separately; empty compact sets are vacuous; a finite net and one finite maximum suffice, so no countable choice is used.
- State: full proof authored. Contract and checks remain open.

### `thm-schauder-basis-implies-bounded-approximation-property`

- Claim/conventions: the canonical projections are finite rank, norm at most $K$, and compact-uniformly converge to the identity, yielding $K$-BAP.
- Source locator: Schlumprecht, canonical projections and Theorem 3.1.6, printed pp.65-68.
- Dependencies examined: `def-dependent-choice`, `def-approximation-property-and-bounded-approximation-property`, `thm-coordinate-functionals-of-a-schauder-basis-are-bounded`, `lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets`.
- Choice audit: DC is stated and used exactly through the bounded-inverse-dependent coordinate theorem; the compact-net step is choice-free.
- Boundary audit: $P_0$ covers the zero case; every finite rank and norm bound is explicit; BAP-to-AP is the forward definitional implication.
- State: full proof authored. Contract and checks remain open.

### `def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n`

- Claim/conventions: scalar charges are finitely additive on $\mathcal P(\mathbb N)$; variation is taken over finite partitions; countable additivity is not assumed.
- Source locator: Müger, Definition B.16, printed p.190.
- Dependency examined: `def-c-zero-and-ell-infinity`.
- Boundary audit: empty set variation is declared zero; empty partition cells may be removed; both real and complex scalars are included.
- State: definition authored. Contract and checks remain open.

### `lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity`

- Claim/conventions: real intervals and complex squares are quantized into finitely many cells in the supremum norm.
- Source locator: Müger, proof of Theorem B.18, printed pp.192-193.
- Dependency examined: `def-c-zero-and-ell-infinity`.
- Boundary audit: the zero and constant sequences already have finite range; both scalar fields and every positive tolerance are treated; no choice is used.
- State: full proof authored. Contract and checks remain open.

### `def-finitely-additive-integral-on-ell-infinity`

- Claim/conventions: $I_\nu^0$ is initially only the finite-partition formula; well-definedness and continuous extension are explicitly deferred to the next lemma.
- Source locator: Müger, Theorem B.18 and proof, printed pp.192-193.
- Dependencies examined: `def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n`, `lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity`.
- Boundary audit: zero coefficients and empty cells cause no ambiguity; a finite-range sequence's fibers give a partition; no countable additivity is imported.
- State: definition authored. Contract and checks remain open.

### `lem-finitely-additive-integral-is-well-defined-and-isometric`

- Claim/conventions: common refinements prove representation independence; a fixed dyadic quantizer constructs the extension; phase choices attain variation arbitrarily closely.
- Source locator: Müger, Theorems B.17-B.18 and proofs, printed pp.191-193.
- Dependencies examined: `def-finitely-additive-integral-on-ell-infinity`, `thm-reals-cauchy-complete`, `thm-complex-plane-is-complete`.
- Choice audit: the quantizer is fixed by an explicit grid and the near-supremal partition is a single existential choice, not a choice function.
- Boundary audit: zero charge gives the zero functional; zero partition cells use phase one; real and complex phases are explicit; both norm inequalities are proved.
- State: full proof authored. Contract and checks remain open.

### `thm-dual-of-ell-infinity-is-ba`

- Claim/conventions: $\varphi\mapsto(A\mapsto\varphi(\mathbf1_A))$ and $\nu\mapsto I_\nu$ are inverse linear isometries.
- Source locator: Müger, Theorem B.18 and proof, printed pp.192-193.
- Dependencies examined: `lem-finitely-additive-integral-is-well-defined-and-isometric`, `def-dual-space-of-a-normed-space`.
- Boundary audit: the empty set gives zero; zero cells receive an arbitrary unit phase; both injectivity and surjectivity and both norm inequalities are explicit.
- State: full proof authored. Contract and checks remain open.

### `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences`

- Claim/conventions: the real Banach mean is positive, normalized, norm one, shift invariant, and extends every ordinary convergent-sequence limit.
- Source locator: Teschl, Problem 4.20; the full Hahn--Banach construction was checked against the existing local suppliers.
- Dependencies examined: `def-axiom-of-choice`, `thm-hahn-banach-dominated-extension`, `def-c-zero-and-ell-infinity`, `def-cesaro-mean`, `def-sublinear-functional`, `def-limsup-liminf`, `thm-limsup-subadditive`.
- Choice audit: AC is stated and used exactly once, through dominated Hahn--Banach. The manifest strategy was repaired from “constant-sequence limit” to the ordinary-limit functional on the convergent-sequence subspace.
- Boundary audit: the zero sequence, constants, positive sequences, and the shift endpoint term are all explicit; norm upper and lower bounds are both proved.
- State: full proof authored. Contract and checks remain open.

### `cor-countably-additive-part-of-ba-is-ell-one`

- Claim/conventions: countably additive finite-variation charges are exactly singleton-mass $\ell^1$ sums and form a proper subspace of $ba$.
- Source locator: Müger, Definition B.20 and Proposition B.21, printed pp.193-194.
- Dependencies examined: `def-axiom-of-choice`, `thm-dual-of-ell-infinity-is-ba`, `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences`; the unused counting-measure duality dependency was removed.
- Choice audit: AC propagates solely because the properness witness is the Hahn--Banach Banach mean.
- Boundary audit: finite initial singleton partitions prove the $\ell^1$ bound; empty $A$ gives zero; both equivalence directions are proved; the properness witness has all singleton masses zero but total mass one.
- State: full proof authored. Contract and checks remain open.

### `def-james-space`

- Claim/conventions: real $c_0$, one-based increasing tuples, the cyclic closing difference, and the factor $1/2$ are frozen exactly as in the source.
- Source locator: Bühler--Salamon, Definition 2.75, printed pp.94-95.
- Dependency examined: `def-c-zero-and-ell-infinity`.
- Boundary audit: singleton tuples contribute zero; nonempty finite tuples only; the zero sequence belongs to $J$.
- State: definition authored. Contract and checks remain open.

### `lem-james-formula-defines-a-norm`

- Claim/conventions: finite Euclidean Minkowski gives the triangle inequality; two-point tuples and $x_j\to0$ give definiteness and $\|x\|_\infty\le\|x\|_J$; the $\ell^2$ upper bound is explicit.
- Source locator: Bühler--Salamon, Lemma 2.76, printed p.95.
- Dependency examined: `def-james-space`.
- Boundary audit: zero, singleton tuples, two-point tuples, and the empty-support sequence are covered; no choice is used.
- State: full proof authored. Contract and checks remain open.

### `thm-james-space-is-complete-and-separable`

- Claim/conventions: $J$ is Banach and separable; the standard unit vectors form a Schauder basis; both truncation and tail operators are contractive and the tails converge to zero.
- Source locator: Bühler--Salamon, Lemmas 2.76-2.79 and complete proofs, printed pp.95-99.
- Dependencies examined: `lem-james-formula-defines-a-norm`, `lem-c-zero-is-a-closed-subspace-of-ell-infinity`, and the newly direct `def-schauder-basis-and-coordinate-functionals`.
- Proof audit: the auxiliary endpoint norm, near-maximal tuple, remote endpoint, tuple concatenation estimate, and crossing-truncation cases are all supplied; “density” is not inferred from mere coordinate decay.
- Boundary audit: zero $x$, singleton tuples, tuples wholly before/after and crossing $N$, finite support, and coordinate uniqueness are explicit; no choice principle is used.
- State: full proof authored. Contract and checks remain open.

### `lem-james-space-dual-and-bidual-identification`

- Claim/conventions: under Countable Choice, $J^*$ is the finite-dual-norm part of $\ell^2$, $c_{00}$ is norm dense in $J^*$, and $J^{**}$ is the max-of-cyclic-and-endpoint-variation sequence space $J\oplus\mathbb R\mathbf1$.
- Source locator: Bühler--Salamon, Lemmas 2.79-2.80 and Theorem 2.81 Steps 1-6, printed pp.98-106.
- Dependencies examined: `def-countable-choice`, `thm-james-space-is-complete-and-separable`, `cor-ell-p-duality-by-counting-measure`. The DC-relative general coordinate theorem was removed: the James truncation bounds are already proved directly, and AC_omega does not imply DC.
- Choice audit: Countable Choice is used exactly to select the tail witnesses in the contradiction proving $c_{00}$ dense in $J^*$; all later recursions use least integer codes. No full Hahn--Banach norming claim is used: finite Euclidean gradients explicitly norm $q_p$ and $r_p$.
- Boundary audit: zero functionals and sequences, finite-support tails, singleton tuples, both bidual construction directions, norm equality, and uniqueness of the constant-plus-$J$ splitting are explicit.
- State: full proof authored. Contract and checks remain open.

### `thm-canonical-image-of-james-space-has-codimension-one`

- Claim/conventions: under Countable Choice, the canonical image is the closed kernel of the bounded “constant limit” coordinate and its quotient is exactly one-dimensional; $J$ is therefore nonreflexive.
- Source locator: Bühler--Salamon, Theorem 2.81 Step 6, printed p.106.
- Dependencies examined: `def-countable-choice`, `lem-james-space-dual-and-bidual-identification`, `def-reflexive-banach-space`.
- Choice audit: Countable Choice is propagated from the bidual identification and has no additional use here.
- Boundary audit: the constant-one sequence is an explicit nonzero quotient witness; closedness, dimension one, and the non-surjectivity conclusion are all proved.
- State: full proof authored. Contract and checks remain open.

### `thm-james-space-is-isometrically-isomorphic-to-its-bidual`

- Claim/conventions: $T(x)_n=x_{n+1}-x_1$ is a surjective linear isometry onto the concrete bidual model but is not the canonical embedding.
- Source locator: Bühler--Salamon, Theorem 2.81 Step 7, printed p.106.
- Dependencies examined: `def-countable-choice`, `lem-james-space-dual-and-bidual-identification`.
- Choice audit: Countable Choice is propagated only from the bidual model.
- Boundary audit: $x=0$, constant bidual elements, injectivity, surjectivity, both norm inequalities (as equality), and the canonical/noncanonical distinction are explicit.
- State: full proof authored. Contract and checks remain open.

### `def-enflo-finite-support-localized-trace-system`

- Claim/conventions: the scaffold was repaired from a false representation-independent tensor trace to Enflo's fixed dense independent generator, finite-expansion matrices, localized normalized diagonal trace, property A, and restriction norm.
- Source locator: Enflo, definitions preceding Lemmas 1-3, pp.310-311; all nine source pages were visually read at original resolution.
- Dependency examined: `def-approximation-property-and-bounded-approximation-property` (terminological context only).
- Boundary audit: $M$ is required nonempty before normalization; zero coefficients and the zero operator are allowed; independence makes every matrix coefficient unique; “finite expansion” is correctly per generator image, not a false global finite-support condition; no choice is used.
- State: definition authored. The repaired statement changes the owner-approved scope hash, so scope refresh, contract, checks, and item decision remain open.

### `lem-enflo-quantitative-trace-obstruction-to-the-approximation-property`

- Claim/conventions: Enflo Lemmas 1-3 are reproduced: finite-rank maps are norm-approximable by finite-rank finite-expansion maps; property A bounds normalized localized trace; disjoint blocks make finite-rank traces vanish; dimension growth yields the exact constant $C=K/(1-a^{-1})$.
- Source locator: Enflo, Lemmas 1-3 and complete proofs, pp.310-311.
- Dependencies examined: `def-enflo-finite-support-localized-trace-system`, `def-approximation-property-and-bounded-approximation-property`.
- Qualification: the local conclusion is failure of every finite $\lambda$-BAP. It does not by itself prove failure of AP; that final inference is the owner-held missing Grothendieck supplier.
- Boundary audit: nonempty $M_m$, zero operator, arbitrary finite rank via norm approximation, the infinite telescope, the geometric endpoint, and the compact finite-dimensional unit ball are explicit; no choice is used.
- State: full proof authored against the repaired claim. Scope refresh, contract, checks, and item decision remain open.

### `lem-enflo-walsh-block-estimates`

- Claim/conventions: the repaired item states Enflo's exact four identities for $F_m$ on $\mathbb Z_2^{2n}$ and Lemma 5's finite-symmetry normalized-trace inequality; the unsupported “uniform Hilbertian norm equivalence” claim was removed.
- Source locator: Enflo, Lemmas 4-5 and complete proofs, pp.311-313.
- Dependencies examined: `def-enflo-finite-support-localized-trace-system` for the fixed-basis normalized trace.
- Proof audit: finite counting proves (a)-(b), the generating identity and complement prove (d), coefficient integration and endpoint/geometric-mean estimates prove (c), and the explicit finite group average proves the trace estimate without probabilistic choice.
- Boundary audit: $a=0$, $|a|=1$, $0<|a|<2n$, the complement endpoint, both Walsh layers, and both sides of the trace difference are explicit; all averaging is finite.
- State: full proof authored against the repaired claim. Scope refresh, contract, checks, and item decision remain open.

### `lem-enflo-symmetry-averaging-and-block-assembly`

- Claim/conventions: under AC, Enflo's explicit $C(K_m)$ Hilbertian block sum, linked adjacent Walsh layers, incidence conditions 1--6, Lemmas 6--7, and asymptotic parameter choice produce a separable reflexive $B$ satisfying both trace-criterion hypotheses.
- Source locator: Enflo, construction after Lemma 5 through the last proof line, pp.313-317.
- Dependencies examined: `def-axiom-of-choice`, `def-enflo-finite-support-localized-trace-system`, `lem-enflo-quantitative-trace-obstruction-to-the-approximation-property`, `lem-enflo-walsh-block-estimates`, `thm-closed-subspaces-of-reflexive-spaces-are-reflexive`.
- Scaffold repair: scalar $\ell^2$ reflexivity was not misused for a Hilbertian sum of arbitrary finite-dimensional Banach spaces; the ambient block-sum duality and reflexivity are proved locally. AC is used exactly to license the Hahn--Banach-dependent closed-subspace reflexivity theorem.
- Boundary audit: finitely many bad initial indices are discarded and reindexed; all block cardinalities are positive; unique components prove independence; properties 4, 5, and 6 have separate counts; dimension growth uses $b<\alpha$ rather than the source's overloaded asymptotic symbol.
- State: full source reconstruction authored against the repaired claim. Scope refresh, contract, checks, and item decision remain open.

### `thm-enflo-separable-reflexive-banach-space-without-the-approximation-property`

- Claim/conventions: under AC, the promised conclusion is separable, reflexive, no AP, hence no Schauder basis.
- Source locator: Enflo, Theorem 1 and introduction, pp.309-310; the introduction explicitly invokes Grothendieck reference [1], p.181 Corollary 2, for reflexive AP $\Rightarrow$ BAP/MAP.
- Dependencies examined: `def-axiom-of-choice`, the two local Enflo lemmas, and `thm-schauder-basis-implies-bounded-approximation-property`.
- Verified portion: the local construction proves separability, reflexivity, the logarithmic finite-rank estimate, failure of BAP, and hence absence of a Schauder basis.
- Open fatal gap: no local supplier proves reflexive AP $\Rightarrow$ BAP/MAP. The item file records the gap explicitly and does not contain a false proof or completion mark. Required supplier: `thm-reflexive-approximation-property-implies-metric-approximation-property`, or a complete alternative nuclear-tensor obstruction.
- State: escalated mathematically; scope is also owner-held after exact statement repairs. No accept/repaired decision may be recorded.

### `rem-enflo-space-without-the-approximation-property`

- Claim/conventions: non-load-bearing primary-source record of Enflo's separable reflexive no-AP space and its stronger logarithmic estimate; under DC, no Schauder basis follows locally.
- Source locator: Enflo, Theorem 1 and complete paper, pp.309-317.
- Dependencies examined: `def-dependent-choice`, `def-approximation-property-and-bounded-approximation-property`, `thm-schauder-basis-implies-bounded-approximation-property`.
- Boundary audit: `proved_here: false`, exact external record, no consumers, and an explicit warning that this record cannot discharge the proof-bearing theorem's missing supplier.
- State: fully authored as the promised literature-only leaf. Scope refresh, contract, checks, and item decision remain open.

### `lem-finite-dimensional-auerbach-basis`

- Claim/conventions: every nonzero finite-dimensional real or complex normed space has a normalized biorthogonal basis.
- Source locator: Schlumprecht, Theorem 1.5.1 and proof, printed pp.20-22.
- Dependencies examined: `thm-coordinate-map-for-a-finite-dimensional-normed-space`, `thm-heine-borel-rn`.
- Boundary audit: zero dimension is excluded in the statement; dimension one and the complex-as-real compactness model are covered; one compact maximum is not a family choice.
- State: full proof authored. Scope refresh, contract, checks, and item decision remain open.

### `lem-dvoretzky-rogers-finite-block-estimate`

- Claim/conventions: the repaired statement requires $r\ge2$; $r=2$ is handled directly, while $r\ge3$ uses the maximal ellipsoid/contact-point proof in dimension $n=r(r-1)$.
- Source locator: Dvoretzky--Rogers, Lemmas 1-2 and complete proofs, PNAS 36 (1950), pp.193-195.
- Dependencies examined: `lem-finite-dimensional-auerbach-basis`.
- Boundary audit: empty subsets, singleton subsets, $r=2$, real and complex spaces, strict positivity of every $d_i$, and the constant $3$ are explicit. This repairs the false original $r=1$, $V=0$ case.
- State: full proof authored against the repaired claim. Scope refresh, contract, checks, and item decision remain open.

### `thm-dvoretzky-rogers`

- Claim/conventions: under Countable Choice, every infinite-dimensional Banach space has an unconditional but nonabsolute series.
- Source locator: Dvoretzky--Rogers, Theorem 2 and complete proof, p.195.
- Dependencies examined: `def-countable-choice`, `lem-dvoretzky-rogers-finite-block-estimate`, `thm-unconditional-convergence-equivalences`.
- Choice audit: block endpoints are least integers; Countable Choice is used exactly to select one vector family from each countably many nonempty block-witness sets.
- Boundary audit: blocks of length zero/one are handled directly; arbitrary finite tail subsets may cross blocks; completeness enters through the unconditional equivalence; harmonic divergence proves nonabsolute convergence.
- State: full proof authored. Scope refresh, contract, checks, and item decision remain open.

### `cor-absolute-and-unconditional-convergence-agree-universally-iff-finite-dimensional`

- Claim/conventions: under Countable Choice, universal agreement holds exactly in finite dimension, including dimension zero.
- Source locator: Dvoretzky--Rogers, Theorem 1, p.192, and Theorem 2, p.195.
- Dependencies examined: `def-countable-choice`, `thm-dvoretzky-rogers`, `thm-coordinate-map-for-a-finite-dimensional-normed-space`, and the newly direct `thm-unconditional-convergence-equivalences`.
- Proof audit: bounded phase multipliers make each scalar coordinate series absolute; a finite basis estimate then makes the vector series absolute. The reverse direction is the constructed infinite-dimensional counterexample.
- Boundary audit: zero and one dimensions, real and complex phases, zero coefficients, and both iff directions are explicit.
- State: full proof authored. Scope refresh, contract, checks, and item decision remain open.

### `ex-standard-schauder-bases-of-c0-and-ell-p`

- Claim/conventions: coordinate truncations converge in $c_0$ and every $\ell^p$, $1\le p<\infty$, are contractions, and have norm one in nonzero cases.
- Source locator: Schlumprecht, Examples 3.1.2, printed pp.63-64.
- Dependencies examined: `def-partial-sum-projections-and-basis-constant`, `lem-finite-truncations-are-dense-in-c0-and-ell-one`, `rem-ell-p-is-l-p-of-counting-measure`; the DC-relative general coordinate theorem was removed because the calculation is direct and choice-free.
- Boundary audit: $p=1$, all finite $p$, the zero vector, nonzero norm equality, existence and uniqueness are explicit; $p=\infty$ is excluded and handled next.
- State: full verification authored. Scope refresh, contract, checks, and item decision remain open.

### `cex-standard-unit-vectors-are-not-a-schauder-basis-of-ell-infinity`

- Claim/conventions: the constant-one sequence is the explicit failed-conclusion witness.
- Source locator: Schlumprecht, Examples 3.1.2 and surrounding contrast, printed pp.63-64.
- Dependencies examined: `def-schauder-basis-and-coordinate-functionals`, `def-c-zero-and-ell-infinity`.
- Boundary audit: every finite-support sequence, its uniform closure $c_0$, and the constant-one sequence at uniform distance one from every coordinate truncation are explicit.
- State: full counterexample authored. Scope refresh, contract, checks, and item decision remain open.

### `ex-the-summing-basis-of-c0-is-conditional`

- Claim/conventions: $s_n$ has $n$ initial ones; coefficients telescope as $a_n=x_n-x_{n+1}$; $x_n=(-1)^n/n$ makes the even subseries' first coordinate diverge.
- Source locator: Schlumprecht, §3.4 immediately before Theorem 3.4.1, printed p.86.
- Dependencies examined: `def-unconditional-and-conditional-basis`, `thm-unconditional-convergence-equivalences`.
- Boundary audit: every coordinate and truncation endpoint is calculated; uniqueness is explicit; the witness belongs to $c_0$; a concrete subseries fails to converge.
- State: full example and counter-witness authored. Scope refresh, contract, checks, and item decision remain open.

### `cex-reordering-a-conditional-basis-can-destroy-convergence`

- Claim/conventions: alternating blocks of unused even and odd terms make the first coordinate cross above one and below zero forever.
- Source locator: Schlumprecht, §3.4 discussion and Theorem 3.4.1, printed pp.86-87.
- Dependencies examined: `ex-the-summing-basis-of-c0-is-conditional`, `thm-unconditional-convergence-equivalences`.
- Boundary audit: the original series converges, both signed parts diverge, term norms tend to zero, every term is used exactly once, and the failed conclusion is witnessed by one coordinate.
- State: full counterexample authored. Scope refresh, contract, checks, and item decision remain open.

### `ex-banach-limit-revisited-as-a-charge`

- Claim/conventions: under AC, the Banach-mean charge is positive, has total mass one, and has every singleton mass zero, so countable additivity fails.
- Source locator: Müger, Theorem B.18 and Definition B.20, printed pp.192-194.
- Dependencies examined: newly direct `def-axiom-of-choice`, `thm-dual-of-ell-infinity-is-ba`, `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences`.
- Choice audit: AC is stated and propagates exactly from the Hahn--Banach mean.
- Boundary audit: the empty set, every singleton, arbitrary finite singleton unions, total space, and the failed countable-additivity equation are explicit.
- State: full example authored against the repaired assumption-bearing claim. Scope refresh, contract, checks, and item decision remain open.

### `cex-ell-one-and-ell-infinity-are-not-reflexive`

- Claim/conventions: under AC, real and complex $\ell^1$ and $\ell^\infty$ are nonreflexive; the strict countably additive subspace of $ba$ supplies a concrete bidual-surplus view.
- Source locator: Müger, Theorems B.18-B.21, printed pp.192-194, together with the published Schur/reflexivity suppliers.
- Dependencies examined: newly direct `def-axiom-of-choice`, `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive`, `cor-ell-one-is-not-reflexive`, real and complex $\ell^1$ duality, and `cor-countably-additive-part-of-ba-is-ell-one`.
- Choice audit: AC is stated and explicitly supplies the ultrafilter lemma, DC, Hahn--Banach, and Countable Choice assumptions of the published prerequisites.
- Boundary audit: both scalar fields, both spaces, both directions of the dual-reflexivity equivalence as used, and an explicit proper-bidual-subspace witness are covered.
- State: full counterexample authored. Scope refresh, contract, checks, and item decision remain open.

### `rem-subspaces-of-classical-spaces-can-fail-ap`

- Claim/conventions: non-load-bearing exact institutional record for every $1\le p<2$, with the abstract's related $p>2$ consequence and deliberate exclusion of $p=2$.
- Source locator: Hebrew University institutional publication record and exact abstract for Szankowski, Israel Journal of Mathematics 30 (1978), pp.123-129.
- Dependency examined: `def-approximation-property-and-bounded-approximation-property`.
- Boundary audit: `proved_here: false`, structured external record, no consumers, endpoint $p=1$ included, $p=2$ explicitly excluded.
- State: fully authored literature-only leaf. Scope refresh, contract, checks, and item decision remain open.

## Final handoff

### Authored inventory

- Authored all 34 A-page item files and all 7 B-page item files in manifest
  prerequisite order, preserving every original ID and claim slot.
- Authored both page files:
  `library/functional-analysis/schauder-bases-approximation-and-banach-space-pathologies.md`
  and its `-examples` companion.
- Registered the 41 owned IDs in
  `research/phase-2-next-18-batch-1.proof-contracts.json`; every citation row
  contains the exact local statement/definition excerpt and actual use, and
  every numbered step has its current claim and inputs.
- Refreshed the shared manifest and coverage metadata without altering the
  sibling Banach-valued-integration rows. The existing source harvest covers B
  items under the A-pair source entry, as required by the coverage schema.
- The containing batch has no same-frontier cross-batch edge from this owned
  pair, so its preserved input remains `[]`. Ran the serial refresh tool; the
  unified ledger was regenerated and deduplicated.

The theorem
`thm-enflo-separable-reflexive-banach-space-without-the-approximation-property`
is intentionally not represented as complete: its file separates the locally
proved no-BAP/no-basis argument from the missing AP inference. The other 40
assigned items have complete reader-facing content appropriate to their kind;
the two `rem-*` historical leaves are explicitly `proved_here: false` and
non-load-bearing.

### Local suppliers and repairs completed

- Supplied the noncircular Schauder coefficient-space route before coordinate
  boundedness and added the defining basis dependency at the exact pointwise
  convergence use.
- Supplied direct compact-uniform convergence, finite-range approximation and
  finitely additive integral lemmas before their consumers.
- Supplied the complete James-space norm, completeness, direct truncation,
  dual/bidual, codimension-one and noncanonical-isometry chain, with Countable
  Choice confined to the tail-witness selection.
- Supplied a local Auerbach lemma and the complete primary-source
  Dvoretzky--Rogers finite-block and infinite-series chain; repaired the false
  `r=1` endpoint to `r>=2` and declared the unconditional-equivalence use.
- Repaired the unconditional-convergence equivalence proof's Cauchy-completeness
  step to depend directly on `def-banach-space`, removing an inapplicable
  absolute-series criterion while retaining the choice-free least-code and
  finite layer-cake arguments.
- Replaced the inaccurate Enflo tensor/Hilbertian scaffold by the fixed-generator
  localized trace system, exact Walsh estimates and explicit block assembly.
  The local conclusion is failure of every finite BAP constant, not yet failure
  of AP.
- Corrected the Banach mean to extend ordinary limits and proved shift
  invariance using domination on both `x-Sx` and `Sx-x`; propagated AC to the
  charge and nonreflexivity examples.

### Checks actually run

- Explicit-path precheck: 29/29 proof-bearing owned files pass, zero failures.
- Explicit-path rendercheck: 43/43 owned item/page files pass, including KaTeX
  and frontmatter parsing.
- Strict proof contract: 41/41 pass, zero errors and zero warnings.
- Citation fidelity: 79 citations checked, zero missing quotes and zero
  widening candidates.
- Boundary audit: 328 rows checked, zero template clusters and zero
  contradicted candidates.
- Coverage checklist with destination enforcement: 2 A-page source entries,
  62 harvested results, zero errors and zero warnings.
- Full shared-batch content policy: 78 scoped items, 37 errors, all exactly the
  sibling pair's not-yet-authored files; no owned item produced a policy error.
  The manifest-only form was also invoked after authoring and, as designed for
  a pre-author baseline gate, reported the 41 now-existing owned files.
- `validate-plan research/plan-spec.json`: exit success; 1,624 pages, 18,190
  planned items, no hard error, and 3,920 pre-existing redundant-prerequisite
  warnings. This pair introduced no plan mismatch requiring a Step 4 splice.
- Manifest/on-disk dependency and kind comparison: zero mismatches across the
  41 owned items.
- Frontier dependency refresh: completed and deduplicated.

### Decision state and open obligations

The current Step 3 scope check is open and owner-held for this pair because the
exact statement repairs changed the hash of the earlier owner `proceed`
receipt. Consequently the decision tool rejects all item decisions until Step
3a is refreshed. An attempted `record-item --decision escalate` for the Enflo
theorem was rejected with `Step 3a must clear for the item pair before item
auditing`; no receipt was written, and no `--owner` or judge/audit stamp was
used.

Owner actions required:

1. Review the repaired current pair scope and record a current owner `proceed`
   receipt (or issue amendments).
2. Supply and fully prove a theorem that reflexive AP implies MAP/BAP, with its
   exact choice assumptions, or authorize a complete alternative nuclear-tensor
   obstruction. Until then the Enflo no-AP theorem must remain escalated.
3. After the scope is current, record/resolve the Enflo theorem escalation and
   permit fresh item decisions for the remaining completed items.

The confirmed published concern remains
`thm-dual-norms-every-vector`: its statement omits AC although its Hahn--Banach
suppliers require it. Required suppliers/repair are recorded above; this
dispatch did not race the serial published-consumer ledger.
