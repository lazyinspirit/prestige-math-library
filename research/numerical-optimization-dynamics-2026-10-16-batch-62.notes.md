# Batch 62 authoring notes

## Scope and controlling plan

Batch 62 owns the A/B pair interval-newton-krawczyk-and-polynomial-root-isolation and interval-newton-krawczyk-and-polynomial-root-isolation-examples, and only its assigned carriers, pages, manifests, and evidence were edited. The complete repository instructions, schema, workflow, owner authoring direction, assigned task, controlling design, plan-spec.json, current plan, dependency-level input, and prerequisite batch evidence were read before authoring.

The current owner authoring direction overrides the stale task/design text. The controlling design at research/plan-numerical-linear-track.md §1974 and the corresponding plan-spec.json entry agree on page IDs, category, order, requirements, and mathematical scope. No conflict needed recording. Both pages remain drafts; no published item, shared plan, run state, or verdict was edited.

The dispatch scheduling input is 6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510. The output inventory is 15 A-page items and three B-page examples, below the 100-item page cap. The cross-batch file distinguishes the three declared page requirements from the actual item-level imports.

## Inventory, dependencies, and levels

The batch inventory and each item dependency list are in research/numerical-optimization-dynamics-2026-10-16-batch-62.pages.json; item frontmatter was checked against that manifest. The local batch dependency calculation gives:

- Level 0: lem-polynomial-squarefree-decomposition-and-multiplicity, thm-sturm-sign-variation-counts-distinct-roots.
- Level 1: lem-squarefree-integer-polynomial-root-separation-bound.
- Level 2: alg-rational-polynomial-root-isolation.
- Level 3: thm-rational-polynomial-root-isolation-is-sound-and-finite, def-real-boxes-and-interval-jacobian-enclosures.
- Level 4: lem-brouwer-fixed-point-for-closed-box, lem-real-interval-arithmetic-preserves-enclosure, ex-double-polynomial-root-has-no-sign-change.
- Level 5: alg-scalar-interval-newton-certification, alg-krawczyk-root-certification.
- Level 6: alg-smooth-function-root-isolation.
- Level 7: lem-interval-jacobian-mean-value-enclosure, thm-scalar-interval-newton-exclusion-and-inclusion.
- Level 8: thm-smooth-function-root-isolation-soundness, thm-krawczyk-inclusion-exclusion-and-uniqueness, ex-validated-mass-action-equilibrium-root.
- Level 9: ex-event-root-with-derivative-separated-from-zero.

The B event example directly names thm-scalar-interval-newton-exclusion-and-inclusion because its verification cites that theorem. This does not change its level: its smooth-soundness dependency is already level 8.

The assigned pair declares batch 3 nonlinear-equations-and-newton-methods, batch 14 outward-rounded-interval-and-ball-arithmetic, and batch 61 verified-linear-systems-and-spectral-enclosures as page requirements. The batch-3 page was reviewed as nonlinear-equation/Newton context; no batch-3 item is imported as a premise. The batch-61 linear-family Krawczyk theorem is also not imported: this batch proves the nonlinear mean-value and Krawczyk claims locally, and derives a closed-box fixed-point lemma from the published closed-ball Brouwer theorem. Batch 14 supplies actual interval and calculus item premises; their exact item edges and hypotheses are listed in research/numerical-optimization-dynamics-2026-10-16-batch-62.cross-batch-dependencies.json.

The batch-61 notes contain historical text saying some batch-14 interval suppliers were escalated. That status is stale. The current exact batch-14 records for def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, lem-directed-dyadic-rounding-enclosure-and-error, def-continuity-and-derivative-on-real-interval, and lem-mean-value-theorem-on-closed-interval are ready, owner=true, with current content hashes; their recorded author-readiness is not independent proof approval.

## Mathematical review and repairs

The exact polynomial route uses rational arithmetic throughout. The local gcd decomposition proves the characteristic-zero multiplicity drop and derives pairwise-coprime factors with exact multiplicity labels. The root-separation proof gives the Cauchy coefficient-height bound and the discriminant/resultant integer argument. The Sturm theorem states the squarefree hypothesis as gcd(P,P')=1; its no-consecutive-zero argument now derives a Bezout identity over Q[x] and evaluates it over C, so it does not confuse a rational gcd with a complex gcd. The final nonzero Euclidean remainder need only be a nonzero constant; its Bezout identity is normalized to one without altering the stated Sturm sequence. Internal zero terms are handled after deleting zero entries. The exact dyadic isolator separates p=0, nonzero constants, degree one, exact dyadic endpoint/midpoint roots, active constant factors, and open one-root intervals. Its finite termination uses the explicit positive root-separation bound and geometric decay.

The interval arithmetic lemma proves real addition, subtraction, multiplication, division away from zero, squaring, and finite DAG enclosure from the actual endpoint formulas and directed-rounding premise. Non-finite statuses make no finite enclosure claim. The vector mean-value proof applies the scalar MVT separately to each component and uses only finite choice of one point per row; it does not assert a single common Jacobian point.

The scalar interval Newton proof covers root inclusion, range and empty-intersection exclusion, strict inclusion existence, derivative-sign uniqueness, contracted-singleton exact-root status, root preservation through every interval update, and the inconclusive budget branch. The Krawczyk proof uses the processed box Y consistently in its mean-value and Brouwer arguments; its exact rational left-inverse witness establishes nonsingularity by rank-nullity. Strict inclusion proves existence, while the separately bounded infinity-norm defect is required for uniqueness. A non-finite per-box evaluation is recorded unresolved and processing continues so the remaining queue stays covered. The smooth isolator retains unresolved boxes and makes no all-roots claim when any remain. Its proof and algorithm now state accurately that a scalar exact-singleton certificate can leave the recorded smooth interval with the root at an endpoint.

The imported topological input is the current published thm-brouwer-fixed-point-theorem. Its body proof and immediate no-retraction and fixed-point-free-retraction arguments were inspected. The local closed-box reduction handles degenerate sides by deleting fixed coordinates, identifies the positive-side box with a cube, and gives an explicit homeomorphism between the cube and closed Euclidean ball. The proof uses only finite-dimensional coordinates and finite choice; no axiom of choice is added. Polynomial proofs use the ordinary field/complex field and FTA branches; interval proofs use the declared Dedekind-complete ordered real field and finite outward operations. No distinct axiom branch was collapsed.

## Sources and harvest

Four complete primary treatments were read for the A page, exceeding the normal two-treatment target. The B page reuses Kearfott and Ó Dúnlaing for its scalar interval-Newton and Sturm calculations. Current source inspection evidence records the actual web.open full-text PDF view and relevant locators; earlier fetch/local-path history is retained separately rather than asserted as the current reading method.

- Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, complete 163-page article, §§4 and 5.5, Theorem 6.2 and full proof, and §§13.1–13.3 including the Krawczyk/Brouwer proof. Scalar inclusion is included; rowwise vector mean value is proved inline; the verified linear preconditioner construction and convergence-rate claims are out of scope.
- R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, complete 23-page article, §§1–2, including exact interval formulas, outward rounding, Brouwer framing, and full Theorem 2 proof. Interval operation enclosure is proved locally; the box fixed-point reduction and scalar inclusion theorem are included; global branch-and-bound optimization is out of scope.
- Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, complete 51-page course text, §2 including polynomial division/gcd, squarefree reduction, Sturm recurrence, no-consecutive-zero reasoning, and the full sign-variation proof. The local squarefree proof fills the source's stated-but-unproved multiplicity lemma; the Sturm theorem is included; the source's separate worked polynomial is out of scope.
- Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, complete 27-page tutorial, root-estimation proof, Sturm sequence conditions, full root-count proof, and Euclidean-remainder sequence proposition. The local coefficient-height and separation argument is proved directly; the Sturm theorem is included; VCA, complex, and multivariate isolation are out of scope.

Every harvested named result has a disposition in the source-coverage file. No retrieval failure occurred, so no recovery search or source_resolution record was needed.

## Evidence and checks

The proof-contract file maps every numbered proof step to its actual claim and inputs, gives exact supplier excerpts for every labelled fact, records boundary-case dispositions, and includes finite exact checks where applicable. A/B pages, coverage, source coverage, item manifest, and cross-batch inputs are kept consistent.

The final scoped checks passed:

- Precheck: 18 items, 13 proof-bearing items passed, five definitions/algorithms were not applicable, zero failures. The `verification.precheck` metadata matches those results.
- Proof contracts: 13 proof-bearing items checked in strict mode, zero errors or warnings.
- Proof layout: 18 explicitly selected items, 56 numbered steps, zero defects.
- Render check: 18 items and both pages, zero errors or warnings.
- Manifest dependencies: 18 items, zero normalization changes or errors. Content policy: 18 scoped items, zero errors or warnings.
- Scoped depcheck: 18 item IDs, zero errors or warnings.
- Scoped dependency-level closure: 32 in-run items across three relevant pages; zero graph errors and all 18 batch-62 target labels matched their recomputed levels.
- Coverage checklist: two pages and 20 harvested results, zero errors or warnings. Source fetch check: six source entries fetch-verified, zero drops.
- The cross-batch input has 22 rows: all three declared page requirements and 19 item-level edges. Every expected in-run edge is present and verified, and every recorded supplier excerpt matches its current source section.
- Per-item Step 1 records were written for all 18 items as `ready`, `owner: false`; a focused hash check found all 18 records closed against current item and dependency inputs. These are author readiness records, not independent approval.

Two run-wide checks remain blocked by existing work outside this pair. The full item-dependency-level check reports 34 empty scaffold inventories and no dependency-level mismatch or cycle. The empty A/B page pairs are iterative-regularization-and-early-stopping, spectral-collocation-and-galerkin-methods, finite-basis-projector-energies-and-variational-electronic-structure, exponential-and-integrating-factor-integrators, deferred-correction-and-collocation-iterations, discrete-continuous-and-pde-adjoint-sensitivities, self-consistent-projector-iterations-and-certified-mixing, imex-and-operator-splitting-methods, polynomial-chaos-stochastic-collocation-and-galerkin-uq, direct-transcription-and-numerical-ode-optimal-control, finite-element-pde-constrained-optimization, numerical-identifiability-and-optimal-experiment-design, simulation-gradient-estimation-and-simultaneous-perturbation, multirate-and-partitioned-time-integration, event-location-and-hybrid-trajectory-error, langevin-splittings-and-invariant-measure-error, and global-sensitivity-anova-and-sobol-estimation, each with its matching `-examples` page.

The full `step1-decisions check` and read-only frontier dependency-ledger collection cannot parse an unrelated batch-87 carrier: items/alg-finite-sectional-forward-euler-positivity-cfl.md has an unquoted source title containing `I:` in its frontmatter reference at line 21. No other pair's file was edited. The 18 batch-62 readiness records themselves were individually verified current, as noted above. The autopilot run remains in its existing owner-held state; no run state or verdict was changed.
