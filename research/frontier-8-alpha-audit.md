# Frontier 8 — Alpha frozen-text audit

**Status:** in progress; no mathematical, dependency, provenance, or rendering
repair has been made.  This ledger is the frozen scope to be supplied unchanged
to the paired DeepSeek/Terra judges after Alpha coverage is complete.

**Scope:** all 227 manifest items and 16 planned pages, manifest SHA-256
`73362ab776da059127d6896fa833b945cbe276107413aa32f7ffb8fada07cc17`.

## Mechanical coverage completed

- `content-policy` passes on each of the five batch manifests (227 scoped items).
- The merged proof-contract strict check and finite-smoke check pass mechanically.
  Those passes do **not** establish semantic citation correctness; Batch 2 in
  particular has placeholder contracts, recorded below.
- No unresolved B leaves, forward references, external dependencies, or
  AI-generated statement dependencies were found by the structural gates.
- All 14 AI-generated statements are labelled as examples/counterexamples and
  have provenance/source metadata.  They are not used as dependencies.
- The plan reconciliation receipt has eight dependency deltas.  Each still
  requires Alpha's written justification before the receipt is finalised.

## Confirmed blockers awaiting paired adjudication

These are Alpha audit findings, not repairs.  “Fatal” means the current proof or
statement cannot safely be published as a dependency in the library's stated
foundational/citation framework.

| Severity | Item | Frozen defect |
| --- | --- | --- |
| nonfatal | `thm-peano-mixed-partial-theorem` | Under this library's convention, Step 2.1 takes the limits in the wrong order: taking `k` first gives `f_xy` again, not `f_yx`. Taking `h` first supplies the desired quotient; the correction is a sub-30-second local bridge. |
| nonfatal | `thm-arzela-ascoli-for-real-ck` | Its compactness-equivalence dependency explicitly states Countable Choice and Dependent Choice while this item does not repeat them. Those axioms are globally adopted in this library; retain an explicit scope/citation note and the short closure-of-totally-bounded bridge. |
| nonfatal | `thm-baire-category-for-complete-metric-spaces` | Dependent Choice is used in the nested-ball construction but is not repeated in the Statement. It is globally adopted; the proof itself is locally sound. |
| nonfatal | `thm-nowhere-differentiable-functions-are-dense-in-c01` | It should make its inherited Baire/choice scope and the definition of `G` clearer; the local argument is sound under adopted axioms. |
| nonfatal | `lem-pointwise-lipschitz-sets-in-c01-are-closed` | It needs an exact metric sequential-closure citation and a short account of the interval subsequential limit; its local conclusion is sound under the adopted axioms. |
| fatal | `def-ck-and-multi-index-notation-in-several-variables` | It defines only one canonical ordered derivative for each multi-index, then uses that to define `C^k`. This does not establish reordered iterated partials and makes the downstream Clairaut/higher-symmetry/Taylor spine circular. |
| fatal | `lem-rectangle-second-difference-mean-value-formula` | Its “relevant mixed derivative on a rectangle” does not state which derivative or the closed-rectangle/interior regularity needed for two sequential mean-value applications. |
| fatal | `cor-multivariable-taylor-formula-with-peano-remainder` | It infers a remainder uniform over varying directions from one-variable Peano applied separately to each direction; that uniformity does not follow. |
| fatal | `thm-multivariable-second-derivative-test` | Its “semidefinite Hessian gives no conclusion” clause overlaps and contradicts its preceding definite clauses, because the stated definition makes every definite form semidefinite. |
| fatal | `thm-real-stone-weierstrass-for-compact-metric-spaces` | Besides hard delimiter failures, it permits empty `K` although its local function-algebra definition and proof use nonemptiness. |
| fatal | `thm-quotient-ring-universal-property` | The Statement omits the required two-sided-ideal hypothesis, so the quotient ring `R/I` is not defined for an arbitrary subset.  Its Facts section silently adds the missing assumption. |
| fatal | `thm-quotient-is-domain-iff-ideal-prime` | The proof needs `a+P=0+P iff a in P`, but cites a dependency which does not state that coset-zero equivalence. |

## Batch-2 contract integrity blocker

All 54 Batch-2 proof contracts are placeholders: `citations` is empty, every
derivation claim is the generic “Authored derivation step.”, and every boundary
case is marked `not_applicable`.  The corresponding proof-bearing items have no
numbered Facts entries, yet their derivations use `[given]` as a surrogate for
load-bearing facts.  The currently passing mechanical contract checker does not
detect this loss of semantic evidence.

An independent reader completed all 65 Batch-2 items and all 235 manifest
edges (112 published-backward, 123 same-batch), with exact target-statement
checks.  Its local classification, apart from the systemic failure, is 17 direct
fatal defects, one transitively blocked theorem, 12 nonfatal defects, and 35
locally clean items.  All seven high-risk items lack the mandatory review
receipt.  It found no forward/cross-batch reference, B-leaf, external fallback,
or additional TeX error.  The principal direct fatal defects are:

- `ex-morries-law`: the proof asserts the false equality
  `sin(4x)=sin(pi/2-x)` at `x=pi/9`.
- `thm-cofunction-supplementary-and-reflection-identities`: the title promises
  all six-function cofunction/supplementary/quarter-turn/reflection formulas,
  but its Statement lists four sine/cosine equalities and its proof relies on
  an undeclared addition-formula dependency.
- `thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant`:
  the secant/cosecant “formulas” are tautological reciprocals rather than the
  claimed addition/subtraction identities.
- `thm-half-angle-identities-with-sign-conditions`: its signs are declared in
  `{−1,1}` but the Statement then uses zero for a zero radicand.
- `def-real-polynomial-degree-and-monic-normalization` and
  `def-complex-polynomial-and-degree`: each relies on unproved/covert
  coefficient uniqueness while mixing formal-polynomial and polynomial-function
  meanings.
- `lem-chebyshev-degree-leading-coefficients-and-extreme-values`: its title
  promises alternating extrema that its Statement and proof do not contain.
- `thm-real-de-moivre-binomial-multiple-angle-formulas`: it uses complex `i`
  before the subsequent complex-number construction and lacks a Pascal-rule
  dependency.
- `thm-chebyshev-minimax-monic-polynomial`: the proof omits both the
  `|T_n| <= 1` bound and the ordered alternation points needed for its minimax
  conclusion.
- `ex-trigonometric-identities-worked-at-pi-over-twelve`: it assumes uncited
  sixth-angle values that no dependency establishes.
- `thm-complex-exponential-addition-and-real-extension`: the Cauchy-product
  coefficient requires the factorial/binomial closed-form bridge, absent from
  its facts and dependencies.
- `def-complex-logarithms-principal-logarithm-and-complex-powers`: it does not
  define the resulting multivalued complex powers.
- `thm-no-continuous-logarithm-on-the-punctured-complex-plane`: the IVT proof
  assumes unlicensed continuity and a real/integer-valued quotient bridge.
- `lem-complex-polynomial-growth-and-minimum-modulus`: it omits the quantified
  dominant-term estimate and continuity licensing needed by the FTA argument.
- `lem-dalembert-minimum-modulus-descent`: the selected phase has the wrong
  sign; for example `p(a)=1` and `c_m=i` make the alleged cross term positive;
  it also omits a quantitative remainder bound.
- `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`: transitive blocker
  through the preceding two fatal FTA lemmas.
- `cex-complex-continuous-multiplicative-map-not-the-standard-exponential` and
  `ex-complex-geometric-power-series`: respectively omit their trig/continuity
  licensing and cite a real-only geometric-series theorem for a complex claim.

The source audit additionally found categorically mismatched references on the
real-polynomial definition/factor/root chain and the complex-polynomial
definition.  The Batch-2 trigonometry A summary also violates the page prose
rule by using page-survey wording.  These are nonfatal compared with S1/S2.

## Batch-1 independent-reader completion

The independent reader has completed Batch 1: 55/55 items, 4/4 pages, 47/47
proof contracts, all 214 manifest edges, 43 direct published dependencies, and
all 28 high/critical risk items. Its two publication blockers are the two
Batch-1 entries in the table above. It found no forward/external reference,
B-leaf violation, AI-generated dependency, or page/rendering defect.

Additional nonfatal, frozen cleanup findings include:

- `thm-quotient-group-universal-property`: frontmatter/visible proof-technique
  mismatch and misplaced contract ownership for representative independence.
- `thm-correspondence-theorem-groups`: normality preservation is asserted
  without its promised conjugation computation.
- `thm-inner-automorphisms-normal-in-automorphism-group`: does not establish
  `Inn(G)` is a subgroup of `Aut(G)` before applying normality.
- `cex-trivial-kernel-does-not-imply-surjective`: integer two-torsion
  cancellation is not supplied by the cited generic group fact.
- `thm-sum-and-product-of-ideals-are-ideals` and
  `thm-quotient-ring-multiplication-well-defined-iff-ideal`: a cited target is
  abbreviated as distributivity; the missing derivation is local under the
  30-second policy.
- `thm-quotient-is-field-iff-ideal-maximal`: the `M=R` boundary is silently
  skipped.
- `thm-proper-ideal-contained-in-maximal-ideal`: the Zorn citation suppresses
  its explicit AC hypothesis (ambient policy supplies AC).
- `ex-nz-maximal-iff-prime` begins from an equality rather than the necessary
  divisibility premise; `cex-zero-ideal-prime-not-maximal-in-z` does not verify
  that `2Z` is an ideal.

The Batch-1 contract also has three nonmathematical scope drifts (the
conjugation example, ideal-criterion one-sided variants, and a commutativity
claim in quotient-ring laws) and one harmless alpha-renaming in nested ideals.
All are recorded for repair after the common judge pass.

## Batch-4 independent-reader completion

The independent reader has completed all 31 items, two pages, 85 manifest
edges, 24 proof contracts, 15 direct published dependencies, and all nine
required high/critical risk records. The structural dependency graph and the
six AI-generated B witnesses are clean; three publication blockers remain:

- `thm-menger-finite-directed-and-undirected-path-forms` compresses the
  directed vertex-splitting reduction into two unsupported sentences. The
  omitted source/sink preprocessing, split-network construction, finite cut
  bound excluding high-capacity transport arcs, cut-to-separator extraction,
  and internally-disjoint path recovery are load bearing and exceed the
  30-second allowance.
- `cor-whitney-k-connected-path-characterisation` has no valid adjacent-pair
  case. A repair must distinguish the nontrivial x-side from the singleton
  x-side (where the degree contradiction is needed); it is also downstream
  blocked by Menger.
- The Batch-4 proof-contract artifact contains tautological derivation claims
  and generic `"statement"` boundary evidence for all cases, so no item has the
  required semantic obligation/boundary trace despite a structural pass.

`cex-konig-fails-on-triangle` has an additional hard unmatched-dollar render
failure. Local nonfatal findings include Hall's unannounced strong-induction
use, the integral-flow pure-circulation branch, the Gallai general-source
gap, and several short citation/step-anchor gaps. No other page/TeX issue was
found.

## Batch-3 independent-reader completion

The independent reader has completed all 59 manifest items (50 proof-bearing
and nine definitions), four pages, 160 manifest edges, 87 direct targets, and
all 13 required risk reads. The A/B graph and AI-generated-dependency policy
are clean. Its publication blockers are:

- The canonical-only `C^k` definition, the underspecified rectangle MVT lemma,
  and the resulting circular Clairaut/higher-mixed-partial/line-derivative
  spine. The local Taylor/Lagrange result is transitive-blocked through this
  spine.
- The multivariable Peano-remainder corollary's invalid conversion of
  pointwise directional `o(1)` to uniform `o(||h||^k)`.
- The second-derivative test's internally contradictory semidefinite clause.
- The Stone--Weierstrass empty-domain issue and hard delimiter failures, and
  the unmatched delimiter in the Bernstein definition.
- The Batch-3 contracts use generic derivation claims and often truncate their
  cited-source quote before the licensing clause; all 13 required `risk_review`
  records are null, while multiple explicitly handled boundaries are marked
  not-applicable.

The source/provenance audit found dead sole-reference URLs for the six
Bernstein and three nowhere-differentiability items, plus unrecorded/mismatched
provenance for the critical-point counterexample and Rudin spikes. Remaining
local findings are nonfatal short citations, endpoint/boundary records, or
proof-compression issues; the reader's full 13-risk review is awaiting Alpha
receipt writing.

## Batch-5 direct Alpha completion

Alpha read all 17 actual Batch-5 scope items (12 A and five B), both pages, all
103 manifest edges (74 published-backward, 29 same-batch), 15 proof contracts,
and all 14 required high/critical items. The reader's independent preliminary
confirmed this scope, its edge counts, the absence of generated dependency
targets/forward references, and that the Batch-5 contracts are materially
authored (83 citations, 65 non-generic derivations, 120 item-specific boundary
records), unlike the placeholder-contract batches.

The present blockers are the existing hard render failures in
`lem-totally-bounded-uniformities-equal-their-samuel-uniformity` and
`ex-samuel-compactification-of-the-open-unit-interval`. The theorem/proof
chain is otherwise locally sound on Alpha review under its explicitly stated
choice assumptions. `ex-samuel-compactification-of-discrete-naturals-is-beta-n`
needs the missing Tychonoff/discrete-topology bridge before applying the
evaluation-closure Stone--Cech theorem; this is a nonfatal semantic-citation
repair. The five B items remain true leaves, with the two AI-generated examples
properly tagged and unused as dependencies.

## Rendering blockers (frozen)

The scoped render check reports **27 hard errors and no warnings** in these nine
items.  No render/LaTex source has been changed before paired judging.

- `def-bernstein-polynomial` — unbalanced inline delimiter.
- `thm-real-stone-weierstrass-for-compact-metric-spaces` — two blank-line-in-inline-math errors.
- `lem-flow-cut-identity-and-weak-duality` — multiline display.
- `cex-konig-fails-on-triangle` — unbalanced delimiter and two blank-inline errors.
- `def-samuel-uniformity` — unbalanced delimiter, blank-inline delimiter, and wikilink in math.
- `lem-samuel-uniformity-is-totally-bounded` — unbalanced delimiter, two wikilinks in math, and six blank-inline errors.
- `lem-totally-bounded-uniformities-equal-their-samuel-uniformity` — unbalanced delimiter and three blank-inline errors.
- `ex-samuel-compactification-of-the-open-unit-interval` — unbalanced delimiter, two blank-inline errors, and wikilink in math.

## Reader waves

| Wave | Scope | Reviewer status |
| --- | --- | --- |
| 1 | Batch 1 — groups and quotient rings | complete: 55 items, 214 edges, 28 required risk reviews read |
| 1 | Batch 2 — trigonometry and complex analysis | complete: 65 items, 235 edges, 7 required risk reviews read |
| 2 | Batch 3 — approximation, mixed partials, extrema | complete: 59 items, 160 edges, 13 required risk reads |
| 2 | Batch 4 — matchings and connectivity | complete: 31 items, 85 edges, 9 required risk reads |
| 3 | Batch 5 — Samuel compactification | Alpha completion: 17 items, 103 edges, 14 required risk reads; reader preliminary corroborated scope/contracts/render findings |

## Next frozen action

Complete reader-wave coverage; write the high/critical Alpha risk reviews into
their owning batch contracts and regenerate the merged proof contract; finalise
the audit receipt and defect ledger.  Only then freeze a common judge package
for DeepSeek and Terra.  No repair, judging, publication, commit, or deployment
is authorised in this step.
