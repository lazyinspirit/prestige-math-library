# Frontier 8 Alpha receipt

**Actor:** Alpha-8. **Current substage:** Step 4 prose propagation only.
**Machine scope received:** five batch manifests, sixteen pages and 227 planned
items. The corrected splice is present in `research/plan-spec.json`; Alpha did
not edit that file. No `items/` or `library/` content exists from this stage,
and no judge or authored-content audit has run.

## Step 4 propagation receipt

The approved scaffold decisions were propagated into these higher-level prose
files:

- `research/plan-algebra-track.md`: AA-4 and AA-9 were replaced by the approved
  group-homomorphism and ideal/quotient-ring designs.
- `research/plan-realanalysis-pages.md`: RA-24, RA-31, RA-33 and RA-35 now state
  the approved real $C(K)$, trigonometric, complex-exponential and
  mixed-partial scopes and their declared prerequisites.
- `research/plan-combinatorics-and-categories.md`: GT-4 was replaced by the
  finite matching/flow/Menger design with labelled residual arcs.
- `research/plan-topology-track.md`: a T9b block was added for the Samuel
  compactification pair, which previously had no dedicated prose scaffold.

The three exact replacement blocks supplied by batches 1, 2 and 4 were applied
verbatim in mathematical scope. The batch-3 and batch-5 notes supplied approved
scope rather than old/new text; their prose blocks were written to match the
spliced manifests and Step-3 decisions. Raw sweep files and superseded plans
were not edited.

## Accepted and rejected scope

| batch | accepted | rejected or deferred |
|---|---|---|
| 1 — algebra | Group kernels/images, quotient factorisation, the three group isomorphism theorems, correspondence and inner automorphisms; ideals, quotient rings, the ring isomorphism theorems, prime/maximal ideals and maximal-ideal existence. | The impossible bijective-monoid-homomorphism counterexample was dropped. The determinant mention and polynomial-ring witness were dropped; the latter was replaced by $(0)\subset\mathbb Z$. Domain characteristic remains on its planned UFD page. Ring theorem II uses a unital subring, and quotient multiplication starts from an additive subgroup. |
| 2 — trigonometric/complex | Natural-domain identities with sign and denominator conditions; Chebyshev recurrence and minimax for exact-degree monic polynomials with $n\ge1$; complex field/series/exponential, Euler, logarithms, roots and minimum-modulus FTA. | Chebyshev orthogonality, differential Weierstrass substitution, complex differentiation, alternative Euler proofs, exact-sequence terminology and path-integral logarithm claims were deferred. |
| 3 — real analysis | Real compact-metric $C(K)$ only; real Arzelà–Ascoli and Stone–Weierstrass, Bernstein approximation, Baire density and Takagi; Peano, Young, Clairaut–Schwarz, Taylor, Hessian tests and parametrized/graph constraints. | Complex Stone–Weierstrass, trigonometric/moment examples, Morse's lemma and arbitrary regular-level-set multipliers were deferred. Semidefinite Hessians remain explicitly inconclusive. |
| 4 — combinatorics | Finite Berge/Hall/SDR/deficiency, König, Gallai, integer max-flow/min-cut, integral flow decomposition, four finite Menger forms and Whitney, with distinguishable residual arcs. | Tutte and Tutte–Berge, infinite marriage and the unlicensed exact BPI attribution, arbitrary rational/real capacities and the irrational nontermination witness were deferred. |
| 5 — topology | Samuel uniformity and its total boundedness; topology recovery under DC; compactness under UFL; compact-target extension, uniqueness, totally bounded agreement and the Stone–Čech-to-Samuel surjection. | Metric sequence/filter bridges, unrestricted completion equality or uniform embedding, Gelfand/proximity catalogues, and a choice-free universal property were deferred. Nonseparated objects are reflections/completions, not silently called compactifications. |

No retained result needs a forward reference or a `proved_here: false`
fallback. No approved cross-batch item dependency was added; the intentional
same-batch page seams are group homomorphisms to ideals and fundamental
trigonometric identities to the complex exponential.

## Pre-authoring dependency-closure failures

The authoritative validator reported nine failures after the first splice.
They were repaired in the batch manifests and proof contracts before this
receipt:

1. Batch 2's finite complex reindexing uses in
   `lem-binomial-theorem-over-complex-numbers`,
   `lem-cauchy-product-of-absolutely-convergent-complex-series`, and
   `cor-sum-of-roots-of-unity` reached the later incidence-algebra page. The
   edges were replaced by published monoid finite-product and generalized
   associativity clauses, with the shift, cyclic permutation and grouping
   arguments made inline. The complex Cauchy product also reduces to the
   published real absolute Cauchy-product result coordinatewise.
2. `lem-complex-polynomial-growth-and-minimum-modulus` cited a later Euclidean
   compactness result. It now uses published Euclidean Heine–Borel and the
   metric extreme-value theorem, and the compactness page is declared.
3. Batch 3's Bernstein development used finite counting without declaring its
   page. The prerequisite was added.
4. `lem-pointwise-lipschitz-sets-in-c01-are-closed` cited the later general
   function-space uniform-limit theorem. Its closure proof now unwinds the
   published metric/uniform convergence definitions and uses the published real
   uniform-limit theorem directly.
5. `lem-definite-quadratic-forms-have-a-uniform-sphere-bound` cited a later
   Euclidean-sphere compactness corollary. It now proves the sphere nonempty,
   closed and bounded and applies the earlier Heine–Borel and metric
   extreme-value results; $n\ge1$ is explicit.
6. Three batch-5 B examples cited published B-page items. Those leaf-rule edges
   were removed: the open-interval example uses a finite-grid proof, and the
   two discrete-natural arguments define the zero-one metric and prove the
   relevant total-boundedness facts directly.

These grouped repairs are the complete disposition of the nine validator
failures recorded in `research/frontier-8-step3-decisions.md`; none was repaired
by importing a forward or external dependency.

## Source, provenance and choice constraints carried to Step 5

- The five Beta source ledgers identify reputable support for every retained
  source-backed statement. Every final `literature-derived` or `ai-altered`
  component must expose an applicable ledger URL in `sources.references`.
- A dependency target's Statement/Construction must not be `ai-generated`.
  Every published target was opened during scaffolding; labelled adapted
  targets were source-checked when conventions were material, and legacy
  targets were accepted only by exact disk review plus source checking or
  established mathematical knowledge. No published dependency repair was
  proposed.
- Batch 1's only generated construction is the non-load-bearing doubling
  counterexample. Batch 2's generated arithmetic/domain witnesses, batch 4's
  finite graph witnesses, and batch 5's discrete/indiscrete generated witnesses
  remain B-page leaves with the matching `generation.role`. Batch 5 uses
  `ai-altered` Statements throughout its A page. Batch 3 must retain its
  source-grounded adapted theorem forms and may not turn a generated B witness
  into infrastructure.
- Conjugation is $x\mapsto gxg^{-1}$; rings and subrings are unital; trigonometric
  quotient identities retain their domains; $C(K)$ is real; residual arcs are
  labelled copies; Samuel topology recovery carries DC and compactness carries
  UFL. These convention and choice seams are load-bearing authoring constraints.
- The 190 proof-bearing planned items have namespaced proof contracts covering
  exact citation clauses, every planned derivation step, and all eight standard
  boundary cases. The contracts must be synchronized with authored text before
  the strict gate; finite-smoke arrays are empty because no registered bounded
  harness matches these claims.

## Stage boundary and next action

Stage-4 checks on the four changed prose scaffolds and this receipt:

```text
prosecheck.mjs --warnings: 5 files checked, 0 errors, 120 advisory warnings;
                              no positional claim contradicts plan-spec
git diff --check:             pass
scope reconciliation:        16 pages, 227 items, 190 proof contracts
```

The prose warnings are recorded rather than mechanically rewritten because
they arise across long-lived research scaffolds and this stage is restricted to
the approved Frontier-8 blocks. No warning licenses a change to workflow or
mathematical content.

Step 4 is complete. Alpha made no item, page-composition, plan-spec, dependency,
proof-contract or judge-ledger edit. The same five scaffold Betas may now author
only their own batches in Step 5. Alpha must not audit or adjudicate authored
content until the orchestrator resumes it for Step 6 with independent readers.

## Step 6 frozen audit handoff

**Status:** complete and ready for the common paired-judge snapshot. No
mathematical content, dependency edge, source/provenance field, page body, or
rendering source was repaired in Step 6. The owner requires both DeepSeek V4 Pro
and Terra to receive the same frozen context before any repair.

### Coverage

- 227 actual manifest items, 16 page files, 797 manifest relationships, and
  all 190 proof-bearing contract records were read/audited.
- Independent read-only proof-refuter waves completed Batch 1 (55 items, 214
  edges, all 28 high/critical risks), Batch 2 (65, 235, all 7), Batch 3 (59,
  160, all 13), and Batch 4 (31, 85, all 9). Alpha directly completed Batch 5
  (17, 103, all 14), after its independent reader corroborated the scope,
  contract, dependency, and render baseline.
- All 71 high/critical items now have complete `risk_review` records persisted
  in their owning batch contracts; the merged
  `research/frontier-8-proof-contracts.json` was regenerated.
- The manifest-bound audit receipt is
  `research/frontier-8-audit-coverage.json`; the detailed frozen finding ledger
  is `research/frontier-8-alpha-audit.md`.

### Frozen gate record

- `content-policy`: 227 scoped items, 0 errors, 0 warnings.
- merged `proof-contract --strict`: 190/190 items, 0 errors, 0 warnings.
- `finite-smoke`: 0 errors, 0 checks.
- `risk-report --require-reviewed`: 71/71 required reviews complete, 0 errors.
- Scoped rendering remains intentionally failing: 27 hard errors in nine items.

The mechanical proof-contract pass is not a semantic clean bill: Batch 2 has
empty/placeholder citation and boundary contracts, Batch 3 has generic claims
and truncated quote fields, and Batch 4 has tautological derivations and generic
boundary evidence. These are recorded as audit blockers, not repaired metadata.

### Principal publish blockers for judges

The full per-id ledger distinguishes false/overbroad statements, invalid proof
logic, invalid dependency citations, source/provenance failures, and rendering.
The central mathematical blockers are: the quotient-ring universal-property
missing ideal hypothesis; the prime-quotient theorem's false coset citation;
multiple Batch-2 theorem/definition failures (including Morrie's false identity,
the d'Alembert phase, Chebyshev minimax, and complex-exponential bridge);
Batch-3's canonical-only `C^k` definition and its mixed-partial/Taylor
propagation, invalid multivariable Peano remainder, and contradictory
second-derivative-test clause; and Batch-4's incomplete Menger vertex reduction
and Whitney adjacent-terminal case. Render blockers and all nonfatal repairs
are separately enumerated in the frozen audit ledger.

**Exact next action:** have DeepSeek V4 Pro and freshly spawned Terra judge every
item in the 16 A/B pages concurrently with identical hash-attested contexts.
Do not change the frozen content until both model lanes have completed their
current-context verdicts.
