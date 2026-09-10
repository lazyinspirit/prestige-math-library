# HG-P batch 1 — Step-1 scaffold notes

Current repair evidence is in `phase-2-hg-prerequisite-owner-repair-progress.md`.
The manifest now has 22 A items, 3 B items and five verified sources. F1-F4
amendments and the F5 occurrence/peeling clarification are applied, pending
current-input final adjudication. The Step-1 notes below are historical evidence, not
the current checkpoint; their initial network failures have been resolved.

## Authority and current state

Run `phase-2-hg-prerequisite`, role beta, batch 1. Read the repository entrypoint, full `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch task, complete HG-P design and frontier-dependency bookkeeping instructions. The owned A/B pair is `asymptotic-cones-and-the-sublinear-triangle-criterion` and its `-examples` companion. Only the batch `.pages.json`, `.coverage.json`, and these notes are authored. Published items, plan, prose design, other batches and both consolidated ledgers remain outside this writer's authority.

The authoritative plan agrees with HG-P on IDs, category `group-theory`, orders 302.00405/302.0041, companions and requires. Its item inventory is empty before reconciliation; this is not a conflicting mathematical inventory. No design/plan conflict found. The design's twelve mandatory A IDs and three mandatory B IDs are retained in order. Seven supporting A lemmas bring A to 19 items, below the plan's 60-item limit; no padding or scope deletion. No additional A/B pair has been shown necessary: the two open planar obligations can potentially be completed within this pair. If that proves impossible, the batch must remain blocked pending an explicitly inventoried earlier supplier pair and authorized plan/prose updates.

The active state was checked with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-hg-prerequisite --state-dir .autopilot/phase-2-hg-prerequisite`: step 0 done, step 1 scaffold active. Recent git history included `3a3ced783`, `174473973`, `52bba95d9`. No research RESUME file was used as live-run authority. Unrelated existing modifications and generated task files were left alone. No agent delegation or engine transition was initiated.

## Changes and mathematical interfaces

All 22 items have stable prefixed IDs, explicit `deps`, statements, provenance and proof strategies where applicable. The seven additions are:

- `lem-bounded-real-ultralimits-and-free-tail-extension` — tail-filter extension under AC; deterministic bounded-real limit calculus.
- `lem-rescaled-ultradistance-is-a-quotient-metric` — quotient and representative independence.
- `lem-triangle-extrema-and-real-tree-tripod-rules` — compact parameter extrema, arc/tripod/0-slim equivalence and ray/line rules.
- `lem-relator-expressions-give-controlled-singular-planar-diagrams` — singular diagrams, literal boundary reduction/reinsertion and surviving-edge bound; planar proof obligation remains open.
- `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` — genuine disk and controlled subdivision; topology/count obligation remains open.
- `lem-polygonal-boundary-crossing-for-affine-disk-maps` — local finite signed-crossing and polygon-area argument.
- `lem-point-wedges-preserve-a-common-triangle-minsize-bound` — independent uniformity supplier.

The cone quotient and tree/minsize definitions have explicit `justified_by` obligations discharged by following local lemmas. These obligations introduce definitions before their well-definedness proofs; no earlier proof invokes the result it is supposed to establish. No B item supplies any item, including another B item.

The ultrafilter is fixed; basepoints and ordinary positive null scales remain arbitrary. The source also permits scales converging only along the ultrafilter; the local ordinary-limit convention is the binding design convention and suffices for all selected violating sequences. AC is explicit on geodesic selection, fat-triangle selection and wedge uniformity, including the tree-cone B example. The source's false Remark 10.1 assertion about countable choice by induction is rejected. Bounded-real limit calculus for a supplied ultrafilter is deterministic.

The all-cones converse retains both bounded and unbounded third-side ratios, global triangle-side maximality, escaping endpoints and signed ray/line orientations. The endpoint-distance >1 restriction in two-side control is handled explicitly: for endpoints within 1, shorten a side of length at least 3 by 3, obtaining endpoint distance between 2 and 4; otherwise both sides have length below 4. This gives a bound `(4M+4) max(1,d(y,z))` and avoids an unjustified extension of a geodesic beyond its endpoint.

The distance-coordinate estimate exports `m <= 2 r sqrt(N) + 2 r`, with an additional `2e` for boundary approximation. The source's bound at boundary vertices does not automatically persist on affine boundary edges. The local proof uses `h=m/2-r`, retaining the discretization term. Finite signed crossing and finite polygonal dissection replace an imported degree/Jordan/measure theorem.

Uniformity in K,L has a separate point-wedge proof. A triangle with two vertices in one factor has a core triangle through its root, using its actual chosen root segments; with three factors all sides contain the root. The common nondecreasing sublinear minsize majorant survives the wedge. Countably many counterexamples to a uniform slimness bound would then contradict the owned sublinear criterion. This exports existence of a constant depending only on K,L; it does not pretend to give an explicit formula.

The earlier word-metric theorem concerns vertices of a simple Cayley graph. The coarse-filling strategy now constructs the unit-edge realization metric explicitly by minimizing over the four endpoint-pair routes (and the direct same-edge route). Identity generators collapse to repeated vertices. The triangle-to-edge-loop passage preserves a length bound P+6 and bounded side errors.

## Fatal open obligations

| Finding | Exact owned use and remaining work |
|---|---|
| HG-P-PLANAR-FOLD | `lem-relator-expressions-give-controlled-singular-planar-diagrams` must supply an actual finite planar move argument for Bridson's exterior-sector collapse and enclosed-region deletion, including loops and thin edges. The source's complete proof was read, but its planar parameterization is not yet replaced by a certified earlier local result or a complete inline construction. This feeds `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` → `lem-relator-disks-give-area-controlled-coarse-fillings` → `thm-linear-relator-area-implies-slim-geodesic-triangles` → `lem-uniform-filling-data-give-a-uniform-slimness-bound`. |
| HG-P-DISK-COUNT | `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` must prove that the thickening is a genuine disk and count every subdivision, including monogons, bigons, repeated incidences and cut vertices. The draft strategy's `100(L+1)` is explicitly provisional, not an established exported constant. Existence without the uniform count is insufficient. The same downstream path remains blocked. |
| HG-P-TRANSITIVE-AUDIT | Immediate suppliers and several deeper real-number interfaces were read and checked, but the complete semantic audit of every transitive proof and load-bearing body reference is not certified. The candidate closure below is an audit queue, not a certificate. Each remaining actual edge needs statement/hypothesis/convention/axiom/use adjudication; merely resolving it does not close this finding. |
| HG-P-SOURCE-GATES | All three active sources failed shell DNS resolution; no fetch stamp was earned. URL-liveness failed 0/3, and source-backing with `--require-verified` consequently reports all 22 included items unbacked. Browser full-text recovery does not override these failed mechanical gates. |

There is no source drop or manufactured `source_resolution` decision. The original documents are accessible through the browser. The uncertainty above concerns local mathematical closure, not an unavailable-original alternate proof. This batch cannot be marked ready by treating those sources as absent from the open web or by declaring certainty about the pending planar construction.

## Dependency evidence and limits

Read the actual published bodies for the following immediate interfaces, not just their IDs:

| Published interface | Exact use, hypotheses and assessment |
|---|---|
| `thm-ultrafilter-lemma`, `thm-ultrafilter-characterisation`, `def-ultrafilter`, `def-axiom-of-choice` | The tail filter is a proper filter on N. The published extension proof uses AC through Zorn; maximality supplies the dichotomy needed for interval bisection. The owned free-filter lemma explicitly assumes AC. No Fréchet-filter B example is used. |
| `def-metric-space`, `def-geodesic-and-geodesic-metric-space` | Real-valued metric and isometric-interval geodesics; exactly the local distance estimates and parameterizations. Nonnegativity also follows from the metric triangle axiom. The later hyperbolic geodesic definition is not used. |
| `def-complete-ordered-field`, `cor-cauchy-reals-lub-complete` | A definition of completeness alone cannot prove the library's Cauchy reals complete. Added the actual LUB corollary to the bounded-real, extrema/tree and polygonal suppliers. Its proof was read: bisection invokes Cauchy completeness, Archimedean cofinality and rational density. |
| `thm-reals-cauchy-complete`, `lem-cauchy-reals-archimedean`, `def-real-numbers` | Read the Cauchy approximation and Archimedean proofs and quotient convention. Choosing approximating rationals in completeness can be made deterministic by enumerating rational numerator/denominator pairs and selecting the first qualifying pair; this observation is not a completed audit of every foundational supplier. |
| `prop-normal-closure-is-products-of-conjugates`, `thm-reduced-words-form-the-free-group`, `def-group-presentation` | Normal-closure expressions are products in the free group, including the empty product. They do not assert equality of unreduced literal words. Local diagram reduction/reinsertion handles that distinction. |
| `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` | Area counts conjugates, not conjugator length. The minimum is a natural-number minimum; its existence is supplied inline. No diagram-area equality is assumed. |
| `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` | Supplies equality on vertices for a generating set and the simple-graph convention. The unit-edge geodesic realization is an additional local argument, not a claim already proved by this item. |

The first declared-deps-only scan of ten root interfaces found 190 items and no missing ID. That scan was insufficient: the final conservative scan starts at all 13 external manifest roots and follows published `deps`, `justified_by` and all body links before Remarks (including possible non-load-bearing links). It finds 252 candidate published items, no missing ID, no B home and no item on `deferred-set-theory-beyond-choice`. Body candidates must still be classified semantically; orientation-only Remarks were not silently promoted to proof edges. `extcheck` separately enforces the repository-wide Foundations `deps`/`justified_by`/`forward_refs` boundary. No owned item introduces an external fallback, recorded supplier or later HG dependency.

A temporary plan overlay containing the actual manifest inventory was validated in `/tmp/hgp-plan-overlay.json`; the authoritative plan was not edited. This verifies structural requires closure, legal order, no item cycles, no B suppliers and no missing prerequisite page for the proposed inventory. It does not verify every transitive proof. Supporting scratch evidence: `/tmp/hgp-fullgraph.json` (candidate edges), `/tmp/hgp-closure.json` (initial narrower scan). The root and candidate inventories are embedded below so these notes survive deletion of scratch files.

## Published-consumer/supplier ledger reconciliation

These findings belong in the consolidated ledger when its authorized writer reconciles notes. They are Phase-3 consumer debt and are not used to block this supplier pair. The actual owned blockers are the local proof obligations above.

- `items/def-van-kampen-diagram-boundary-label-and-area.md` allows only a topological closed disk or a point. It excludes the whiskers and zero-face trees needed for arbitrary literal null words. For the empty-relator free presentation, the literal word `aa^{-1}` has algebraic area zero but cannot be the boundary of a zero-face closed disk or the permitted single point.
- `items/thm-van-kampen-lemma.md` constructs whiskered disks excluded by that definition and passes from equality in the free group to a literal boundary without complete reduction/reinsertion.
- `items/thm-diagram-area-agrees-with-algebraic-relator-area.md` inherits that incompatible model. Both directions require reconciliation after the diagram definition and cancellation constructions are repaired.

These exact findings already appear in the ledger's U-C19 additional supplier rows (around lines 17085–17087). Preserve their existing repair suppliers: `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` on `small-cancellation-disc-diagrams-and-torsion-toolkit`. Repair strategy: admit singular planar diagrams and outer boundary walks, preserve literal words, prove exterior cancellations and spur reinsertion, then prove the two area inequalities. The new HG-P singular-diagram and thickening lemmas are the owned reroute for coarse fillings, not a silent replacement of the ledger's toolkit ownership.

The owned manifest has no edge to any of those three defective published items. This is justified mathematically: only an algebraic relator expression and its length-minimum are needed; the new local construction must produce the controlled coarse disk directly. Likewise no unused edge to `lem-minimal-algebraic-relator-area-exists` is retained: the natural-number minimum is proved inline. We did not remove or edit any published edge.

The ledger's existing HG-CONE-CONVERSE route remains unchanged: HG-P's `thm-linear-relator-area-implies-slim-geodesic-triangles` and `lem-uniform-filling-data-give-a-uniform-slimness-bound` feed planned `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons` and `thm-quantitative-hyperbolic-geometry-toolkit`. These are planned consumers; publication and subsequent Phase-3 repairs still wait for accepted suppliers. No published consumer has been declared repaired by this dispatch.

The recorded Löh §7.4.1/Touikan §3.5 citations in the published area/diagram route are not complete construction backing for the needed arbitrary singular diagram: Löh's targeted section concerns the hyperbolic word problem, and Touikan's direct existence discussion is §3.1 with an explicit folding warning. Bridson §4.2 is the recovered complete relevant treatment. This citation observation does not certify or condemn unrelated co-resident items.

Same-frontier cross-batch finding: none; the run owns one batch. The input would be `[]`. Step 1's three-file authority does not include writing or refreshing consolidated ledgers or creating the Step-3 consumer input. Record this empty finding for the authorized reviewer; do not expand authority to satisfy bookkeeping.

## Source record and actual access

The coverage file has three independent active sources, including the Druţu–Kapovich monograph, with exact named locators and 32 dispositions. The browser returned the complete relevant PDF text for each, and the target proofs were read beyond their statements. Full-book reading is not claimed.

1. Druţu–Kapovich, revised 837-page *Geometric Group Theory*: <https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf>. Targeted Chapter 10 construction, bounded limits and parameterized geodesics; full Lemma 11.168/Proposition 11.167 converse; full Proposition 11.176/Lemma 11.177 argument; full Propositions 9.103–9.104; Theorem 11.181; §7.10.2 singular disks and canonical enlargement. The cone definition at the start of §10.6 is **unnumbered**; 10.66 is an exercise, not its definition number. Source and local scales are compared above.
2. Frigerio–Sisto, *Characterizing hyperbolic spaces and real trees*: <https://arxiv.org/pdf/0810.1526>. Complete §1.1, Definition 3 and sequence quotient in §1.3, and Lemma 11 with its entire path-containment proof. The paper's separate quantitative threshold proof is not used as a shortcut around the binding fat-triangle route.
3. Bridson, *The geometry of the word problem*: <https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf>. Complete §4.1 definition and Proposition 4.1.2 proof, and §4.2's two cancellation/insertion lemmas and final Van Kampen proof, PDF pp.20–24. OCR splits letters but the relevant text is present. No universal-cover theorem is imported from §4.3.

Actual shell attempts: the initial DK curl failed DNS resolution. The first `source-fetch-check --stamp` recorded six EAI_AGAIN attempts apiece for DK and arXiv in the coverage's `recovery_attempts` arrays. The final three-source run also recorded real attempts, earning zero stamps. The URL sweep's archive recovery also failed in the same DNS environment. Its generic “no archived snapshot ... re-sourcing is justified” text is **not** accepted as evidence of open-web absence. Browser recovery of the author-hosted PDFs and arXiv text succeeded, so further source-absence retries and a source drop would be inappropriate. No unavailable-text locator or read/fetch stamp was invented. Browser access evidence is distinct from the unmet machine-fetch gate.

## Checks actually run

| Check | Result and scope |
|---|---|
| `node tools/coverage-checklist.mjs research/phase-2-hg-prerequisite-batch-1.coverage.json --require-destination` | PASS: 1 A page, 32 harvested dispositions, 0 errors/warnings. Dispositions do not certify the pending proofs. |
| `node tools/manifest-deps.mjs research/phase-2-hg-prerequisite-batch-*.pages.json` | PASS, whole run: 22 items, 0 normalized, 0 errors. No `--write`. |
| `node tools/content-policy.mjs --manifest-only research/phase-2-hg-prerequisite-batch-1.pages.json` | PASS: 22 items, 0 errors/warnings. |
| `node tools/validate-plan.mjs research/plan-spec.json` | PASS with existing redundant-prerequisite warnings. The empty authoritative HG-P inventory alone is insufficient. |
| `node tools/validate-plan.mjs /tmp/hgp-plan-overlay.json` | PASS with the actual proposed item inventory; no cycles, forward edges or missing declared prerequisite. Existing redundant-prerequisite warnings remain. |
| `node tools/extcheck.mjs --quiet` | PASS, repository-wide hard gates; 61 existing recorded-not-proved warnings. This tool has no manifest mode. Earlier invocation with `--help` also actually ran the gate, because that option is not implemented. |
| `node tools/url-sweep.mjs --coverage research/phase-2-hg-prerequisite-batch-1.coverage.json --out /tmp/hgp-url-liveness.json --recover --fail-on-dead --timeout-ms 10000` | FAIL: 0/3 live, 3 DNS failures, 0 recoveries. All URLs remain active because browser full text was recovered. |
| `node tools/source-fetch-check.mjs --coverage research/phase-2-hg-prerequisite-batch-1.coverage.json --stamp --timeout-sec 10` | FAIL: 0/3 fetch-verified, 0 newly stamped, 3 EAI_AGAIN failures, 0 documented drops. |
| `node tools/source-backing.mjs --coverage research/phase-2-hg-prerequisite-batch-1.coverage.json --liveness /tmp/hgp-url-liveness.json --reharvest-plan /tmp/hgp-reharvest-plan.json --require-verified` | FAIL: all 22 included result IDs lack machine-verified live backing. Scratch reharvest plan is a failed-gate receipt, not evidence that original documents are unavailable. |
| Custom published candidate dependency scan | 13 roots, 252 candidate items, 0 missing IDs, 0 B homes, 0 forbidden-catalogue homes. Semantic audit remains open. |

A final artifact consistency rerun is recorded below after any locator-only corrections. No runtime or web-app tests were needed for this prose/JSON scaffold dispatch; no authoring, proof verification or publication checks are claimed.

## Candidate audit inventory (not certification)

External manifest roots:

```text
cor-cauchy-reals-lub-complete
def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation
def-axiom-of-choice
def-complete-ordered-field
def-geodesic-and-geodesic-metric-space
def-group-presentation
def-metric-space
def-ultrafilter
prop-normal-closure-is-products-of-conjugates
thm-reduced-words-form-the-free-group
thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph
thm-ultrafilter-characterisation
thm-ultrafilter-lemma
```

Conservative transitive candidates; exact proof uses still require adjudication:

```text
cor-cauchy-reals-lub-complete
cor-nat-addition-well-defined
cor-nat-multiplication-well-defined
cor-of-one-positive
cor-there-is-no-set-of-all-sets
def-abs-value
def-admissible-set
def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation
def-alphabet-words-and-reduction
def-archimedean-field
def-axiom-of-choice
def-axiom-of-extensionality
def-axiom-of-infinity
def-axiom-of-pairing
def-axiom-of-power-set
def-axiom-of-union
def-axiom-schema-of-separation
def-binary-operation
def-bounded-set
def-bw-extremal
def-cartesian-product
def-cayley-graph
def-chain
def-chain-complete-poset
def-choice-function
def-complete-ordered-field
def-connected-graph-and-connected-component
def-coset
def-countable
def-directed-labelled-cayley-graph
def-divergence-to-infinity
def-equinumerous
def-equivalence-relation
def-equivalent-metrics
def-extended-reals
def-field
def-filter
def-filter-base
def-finite-alphabet-encoding-and-algorithm
def-finite-cardinality
def-finite-intersection-property
def-finite-simple-graph
def-finitely-generated-group
def-free-group
def-function
def-generated-subgroup
def-geodesic-and-geodesic-metric-space
def-graph-adjacency-incidence-neighbourhood-and-degree
def-graph-isomorphism-and-complement
def-graph-path-metric
def-graph-walk-trail-path-and-cycle
def-group
def-group-homomorphism
def-group-power
def-group-presentation
def-identity-element
def-image-and-preimage-under-a-relation
def-index
def-indexed-family
def-indexed-union-and-intersection
def-inductive-set
def-infimum
def-injection-surjection-bijection
def-int-operations
def-int-order
def-integers
def-intersection-of-a-set-and-binary-intersection
def-inverse-relation-composition-and-restriction
def-invertible-element
def-isometry-and-metric-embedding
def-labelled-directed-graph-and-labelled-graph-isomorphism
def-language-of-set-theory
def-max-min
def-maximal-element
def-metric-ball
def-metric-bounded-diameter
def-metric-continuity
def-metric-space
def-metric-topology
def-multigraph-loop-and-digraph
def-nat-addition
def-nat-multiplication
def-nat-order
def-natural-numbers
def-normal-closure
def-normal-subgroup
def-null-sequence
def-ordered-field
def-ordered-pair
def-partial-order
def-peano-system
def-power-set
def-properties-of-a-relation-on-a-set
def-quotient-group
def-rat-operations
def-rat-order
def-rational-cauchy-sequence
def-rationals
def-real-limit
def-real-numbers
def-real-order
def-recursive-and-finite-group-presentations
def-recursive-and-recursively-enumerable-languages
def-relation-domain-range-and-field
def-relators-relations-and-finite-presentations
def-semigroup-and-monoid
def-sequence
def-set-difference-and-symmetric-difference
def-simple-graph-without-a-finiteness-hypothesis
def-subgraph-induced-subgraph-and-spanning-subgraph
def-subgroup
def-subset-and-proper-subset
def-the-identity-and-membership-relations-on-a-set
def-ultrafilter
def-union-of-a-set-and-binary-union
def-unordered-pair-and-singleton
def-upper-bound
def-walks-paths-and-connectedness-in-a-simple-graph
def-word-length-with-respect-to-a-generating-set
def-word-metric
def-word-problem-for-a-fixed-finite-presentation
fs-every-set-has-sup
lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group
lem-a-relation-is-included-in-the-product-of-its-domain-and-range
lem-admissible-is-chain
lem-admissible-set-exists
lem-all-extremal
lem-cauchy-away-from-zero
lem-cauchy-bounded
lem-cauchy-reals-archimedean
lem-convergent-implies-bounded
lem-coset-membership-and-equality
lem-coset-partition
lem-equivalence-classes-partition
lem-every-graph-walk-contains-a-path-between-its-endpoints
lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints
lem-extremal-comparability
lem-extremal-cut-closed-under-f
lem-extremal-cut-closed-under-sups
lem-filter-base-generates
lem-finite-set-has-max
lem-finite-subsets-listable
lem-fip-generates-filter
lem-group-cancellation
lem-group-homomorphism-basic-properties
lem-group-inverse-laws
lem-group-power-laws
lem-identity-unique
lem-inf-epsilon
lem-int-add-well-defined
lem-int-cancellation
lem-int-embeds-rat
lem-int-equivalence
lem-int-mul-well-defined
lem-intersection-of-normal-subgroups
lem-intersection-of-subgroups
lem-inverse-relations-composites-and-restrictions-are-sets
lem-inverse-unique
lem-left-and-right-cosets-equinumerous
lem-max-is-sup
lem-metric-nonnegativity
lem-nat-add-associative
lem-nat-add-cancellative
lem-nat-add-commutative
lem-nat-add-identity
lem-nat-add-successor-left
lem-nat-discrete
lem-nat-embeds-int
lem-nat-mult-associative
lem-nat-mult-commutative
lem-nat-mult-distributive
lem-nat-mult-identity
lem-nat-no-zero-divisors
lem-nat-nonzero-is-successor
lem-nat-order-add-compatible
lem-nat-order-is-membership
lem-nat-order-mult-compatible
lem-nat-successor-neq-self
lem-nat-transitive-irreflexive
lem-nat-trichotomy
lem-null-ideal
lem-null-is-cauchy
lem-null-maximal
lem-of-abs-value
lem-of-add-order
lem-of-inverse-unique
lem-of-mult-neg
lem-of-naturals-positive
lem-of-sign-rules
lem-of-square-positive
lem-of-triangle-inequality
lem-of-zero-mult
lem-omega-smallest-inductive
lem-ordered-pairs-lie-in-the-double-power-set
lem-pigeonhole
lem-rat-archimedean
lem-rat-embeds-dense
lem-rat-equivalence
lem-rat-inverse-well-defined
lem-rat-ops-well-defined
lem-rat-positive-denominator
lem-rat-triangle
lem-reflection
lem-subgroup-criterion
lem-successor-of-extremal
lem-sup-epsilon
lem-sup-metric-is-a-metric
lem-sup-monotone
lem-sup-of-extremals
lem-sup-scale
lem-sup-sum
lem-sup-translate
lem-sup-unique
lem-the-domain-and-range-of-a-relation-are-sets
lem-the-intersection-of-a-nonempty-set-is-a-set
lem-the-power-set-of-a-set-is-a-set
lem-union-of-chain-of-filters
lem-unions-and-intersections-of-small-families
lem-unordered-pair-equality
lem-word-length-is-well-defined-and-satisfies-the-length-laws
prop-normal-closure-is-products-of-conjugates
rem-finite-simple-graph-convention
rem-metric-axiom-conventions
rem-sup-conventions
thm-bourbaki-witt
thm-cauchy-ring
thm-coset-multiplication-well-defined-iff-normal
thm-induction-principle
thm-infimum-property
thm-int-comm-ring
thm-int-ordered-ring
thm-nat-linear-order
thm-normal-subgroup-characterisations
thm-of-archimedean
thm-omega-is-peano-system
thm-quotient-group-laws
thm-rat-field
thm-rat-ordered-field
thm-reals-cauchy-complete
thm-reals-field
thm-reals-ordered-field
thm-recursion
thm-reduced-words-form-the-free-group
thm-russells-paradox
thm-the-characterising-property-of-ordered-pairs
thm-the-empty-set-exists-and-is-unique
thm-the-path-metric-of-a-connected-simple-graph-is-a-metric
thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph
thm-ultrafilter-characterisation
thm-ultrafilter-lemma
thm-well-ordering-principle
thm-zorn
```

## Final artifact consistency receipt

After the cone-definition locator correction and deterministic-extrema clarification, reran coverage-checklist, whole-run manifest-deps, manifest-only content-policy, authoritative validate-plan and the current-inventory temporary overlay validate-plan. All five exited 0; coverage remained 32 dispositions and the manifest 22 items. Plan/overlay logs are `/tmp/hgp-final-plan.log` and `/tmp/hgp-final-overlay.log`. The failed source checks remain failed; no URL was changed, no source dropped and no stamp fabricated. No semantic readiness is implied.

- `phase-2-hg-prerequisite-batch-1.pages.json` SHA-256: `5b4fd8751e2e2ece15a31fde5c50a21e0ed89752c6fe727515efd501f75d18c3`
- `phase-2-hg-prerequisite-batch-1.coverage.json` SHA-256: `05bbfe287d24b848bdb97bcb5ecd43989c6b16b9cb220ae30626a631d145f0fb`

## Step-3 fix pass

This pass changes only the owned manifest and coverage record, and this notes
file. The original source-recovery attempts and receipts above are retained as
history; the current assessment below supersedes their stale source-gate
conclusion. `research/phase-2-hg-prerequisite-batch-1.cross-batch-dependencies.json`
was reread and remains `[]`; the required whole-run frontier-ledger refresh
also reports no cross-batch edge. Thus no new A/B pair or shared-plan edit is
needed. The A inventory is now 21 items (below the 60-item limit), and B has
3 items.

- **HG-P-1 — resolved in the manifest.** Added
  `def-singular-planar-labelled-relator-diagram` before
  `lem-relator-expressions-give-controlled-singular-planar-diagrams` and made
  the latter depend on it. The definition fixes the finite plane multigraph,
  loops/parallel edges, face and outer occurrence walks, thin edges, cut
  vertices, labels and Cayley map. The lemma now specifies the exterior
  fold/deletion and spur re-insertion constructions, their face-label/area and
  boundary invariants, no-hole argument, and the final `E <= Lm+n` incidence
  bound. Evidence: Bridson, *The geometry of the word problem*, §4.1–4.2,
  especially Lemma 4.2.3, Remark 4.2.5 and Lemma 4.2.6 (PDF pp.20–24), read
  from the verified source record. Remaining blocker: independent Step-3
  recheck only.

- **HG-P-2 — resolved in the manifest.**
  `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` is
  narrowed to the preceding controlled singular diagrams and now gives the
  regular-neighbourhood disk construction, its no-hole/topological-disk
  proof, subdivision count `4E+2Lm+4`, and `C(L)=6(L+1)`. The downstream
  relator-disk lemma uses that exact construction. Evidence: Drutu--Kapovich,
  *Geometric Group Theory*, §7.10.2, Definition 7.98 and canonical
  enlargement discussion (PDF pp.261–265), with the count and topology proved
  locally rather than inferred from the source picture. Remaining blocker:
  independent Step-3 recheck only.

- **HG-P-3 — resolved in the manifest.** Added
  `def-geodesic-rays-and-lines` with the interval, orientation, origin,
  signed-parameter, tail and common-tail conventions, and added it directly
  to every user of those notions. The ultralimit proof now uses an AC-selected
  bounded-neighbourhood witness and parameter clamping instead of an
  unsupported nearest point on a compact segment. Evidence: Drutu--Kapovich,
  §1.2 and §10.4, Lemmas 10.48–10.51 (PDF pp.45, 365–366). Remaining blocker:
  independent Step-3 recheck only.

- **HG-P-4 — resolved in the manifest.**
  `def-real-tree-tripods-and-geodesic-triangle-minsize` now directly declares
  the Heine--Borel, metric-Hausdorff, metric-continuity and
  compact-image dependencies used for its arc/compactness interface;
  `lem-triangle-extrema-and-real-tree-tripod-rules` has the ray/line
  dependency it uses. The minsize profile is defined only for nonempty
  geodesic spaces, while degenerate triangles have a proved nonempty side;
  the sublinear lemma/theorem separately state the nonempty hypothesis and
  the empty case. Remaining blocker: independent Step-3 recheck only.

- **HG-P-5 — resolved in the manifest.**
  `lem-relator-disks-give-area-controlled-coarse-fillings` directly depends
  on `thm-well-ordering-principle` and uses it on the nonempty set of
  candidate relator-expression lengths. Its count is made explicit. The
  coarse filling-to-minsize lemma directly depends on `thm-of-square-roots`
  and derives `h <= r sqrt(N)` from `h^2 <= Nr^2` using that result.
  Remaining blocker: independent Step-3 recheck only.

- **HG-P-5B — resolved in the manifest.**
  `ex-asymptotic-cones-of-lines-and-trees` now declares
  `lem-real-line-is-a-metric-space`. Both Euclidean minsize examples declare
  `lem-metrics-on-rn` and `thm-of-square-roots`, and give the affine
  parametrizations of their three sides plus a direct `d_2` isometry check,
  including after scaling. Remaining blocker: independent Step-3 recheck
  only.

- **HG-P-6 — resolved in the coverage record.** All three active source
  records already contain current full-PDF `fetch_verified` stamps; the stale
  audit text claiming machine verification was unfulfilled is replaced with
  that fact, while historical failed attempts remain intact. Added the two
  new definition-to-source dispositions and updated the formerly stale
  planar/thickening supports. `status` remains `blocked` solely pending the
  prescribed independent Step-3 recheck and final semantic adjudication, not
  because the record lacks a current source receipt.

Checks run after the repair:

- `coverage-checklist ... --require-destination`: exit 0 (1 page, 34
  harvested results, no errors or warnings).
- whole-run `manifest-deps` over the batch manifests: exit 0 (24 items, no
  normalization or dependency errors); manifest JSON parses and has no
  unresolved `proof_obligations` field.
- manifest-only `content-policy`: exit 0 (24 scoped items, no errors or
  warnings).
- authoritative `validate-plan research/plan-spec.json`: exit 0; its reported
  general plan warnings are outside this batch.
- `extcheck --quiet`: exit 0, with 61 published-item warnings and no
  batch-specific error.
- `source-fetch-check --stamp`: exit 0 (3/3 fetch-verified, 0 newly stamped);
  `source-backing --require-verified`: exit 0 (24/24 authored results backed).
- `frontier-dependency-ledger refresh --run phase-2-hg-prerequisite`: exit 0
  (no cross-batch edge), and `git diff --check`: exit 0.

- Current `phase-2-hg-prerequisite-batch-1.pages.json` SHA-256:
  `9baa45a3fb1f67ebaeb81b8771322189ea4f6af6e9c6fd4173e85c27a7eb70a9`
- Current `phase-2-hg-prerequisite-batch-1.coverage.json` SHA-256:
  `fd90388fa1c3b1d707b52b1e3c8c1f609d0e64e35205a14014e109b2ff69c6dc`

## Final adjudication — 2026-09-09

Outcome: escalated; pair remains insufficient. See `research/phase-2-hg-prerequisite-alpha-a-step3-recheck.md` for current F1 (invalid exterior identity extension and loop-boundary gap), F2 (unverified disk topology/count), and F3 (actual-inventory plan failure: missing compactness prerequisite). No mathematical manifest change or shared plan/prose edit was applied. The fix receipt above records attempted repairs, not final acceptance. Three source stamps remain valid; source availability is not a blocker. All ordinary required checks passed, but the current-inventory plan overlay failed with the one exact F3 error. The compactness use is actual; removing its edge without rerouting the arc proof is not permitted. Full semantic transitive-closure certification remains uncompleted because the pair is escalated.

The sole batch cross-dependency input remains `[]`; refreshed ledger has no edges. Published strict-disc consumer defects remain separate Phase-3 debt in the canonical ledger, with exact current IDs `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, and `thm-diagram-area-agrees-with-algebraic-relator-area`. Their SC suppliers are now published per ledger entries; those consumer repairs remain pending. HG-P supplies the later HG linear-area/uniform-slimness route and remains scaffold-only and blocked. No published file was edited. Owner resolution of F1/F2 and the exact F3 shared prerequisite amendment are required; no further Beta/review was requested.

## Current final adjudication — dispatch 5f927b6eb7e8485f

The revised 22-A/3-B scaffold is escalated for F4, the unverified cut-annulus relative ambient extension and the PL control consumed by the folding construction. See research/phase-2-hg-prerequisite-alpha-a-step3-recheck.md for exact dependency path, source reading/recovery and owner decision needed. The earlier identity-map, 4E+2Lm+4 count and missing-compactness objections are superseded by the changed scaffold; the current plan overlay passes. The new 4d/8/4k count is adequate conditional on the topology. All four existing source receipts pass; no new fetch stamp or source drop. No mathematical manifest repair was attempted. Published consumer debt stays in the canonical ledger; no new published defect asserted. Scope declines are reconciled with the current route. Full transitive semantic certification remains incomplete after the required escalation stop.

## Current final adjudication — dispatch 3c62ad827e62de2b

Escalated for F5, adjudicator uncertainty about occurrence-level loop/bigon deletion and retained face attachments in `lem-relator-expressions-give-controlled-singular-planar-diagrams`. The current PL disk-extension/notch repair resolves the earlier F4 objection. No counterexample is asserted and no mathematical manifest repair was applied. Exact uncertainty, source recovery attempts, bounded dependency audit and passing mechanical checks are in the current section of `research/phase-2-hg-prerequisite-alpha-a-step3-recheck.md`; earlier reports remain historical. Owner adjudication is needed; no further reviewer requested. Batch dependency input stays empty and published consumer debt stays separate. Full semantic closure is not certified.

## Current final adjudication — dispatch edf8bd74588a7360

Escalated; ordinary verdict insufficient. Revised F5 germ bookkeeping addresses the old deletion uncertainty, but F6 identifies the missing one-occurrence/monogon case in the relative peeling construction, and F7 identifies mixed original/rescaled parameter units in the segment-limit construction. Exact witnesses, proposed amendments, source readings, actual dependency paths and audit limits are in the current section of research/phase-2-hg-prerequisite-alpha-a-step3-recheck.md. No mathematical manifest repair was applied and no complete transitive semantic certification is claimed. No published content or shared plan/prose was changed. Coverage now records the mathematical block and five passing existing source receipts; its Exercise 10.49 locator was corrected. The six declines stand, batch dependency input remains [], and existing strict-disc/HG consumer debt remains in the canonical ledger. Owner resolution of the complete interfaces is needed; no new Beta or review was requested.


## Final adjudication 07258ae1146c6857 — escalation

F6 (monogon contraction) and F7 (scaled interval parameters) are resolved in the current manifest. The pair remains insufficient because the final adjudicator has not certified the full choice-free completeness prerequisite interface: bounded-real ultralimit lemma → cor-cauchy-reals-lub-complete → thm-reals-cauchy-complete, proof 1.1. This is an incomplete audit/potential issue, not a confirmed false theorem. Aitken Chapter 9 §8, Lemma 30 and footnote 3 give deterministic rational approximations. Candidate local support is thm-rationals-countable + thm-well-ordering-principle + lem-rat-embeds-dense and the original field/Cauchy dependencies; a complete reroute was not applied or certified. Owner must settle the exact interface. See the current group recheck report for source reading, full paths, audit limits and checks. No new Phase-2 pair is proposed; no published edit was made. Preserve this as U-P/incomplete prerequisite-audit evidence for canonical-ledger reconciliation, separate from the existing strict-disc consumer debt.


## Final adjudication 0e052e93e6d98426 — repaired

Current evidence and exact dependency/source locators are in `research/phase-2-hg-prerequisite-alpha-a-step3-recheck.md`, current leading section. U8 is closed by the current published deterministic least-triple rational approximation and the checked earlier Cauchy/rational interface. F1–F7 remain resolved. Applied two inline supplements: the full corrected reciprocal Cauchy/maximality argument in the bounded-real lemma (six added earlier deps), and a least-upper-bound proof of interval path separation in the tree-extrema lemma (existing deps). The 22 A/3 B inventories and scope are preserved. Updated coverage support/status, current group scope evidence and ordinary verdict. No published, shared plan/prose or owner-decision file was edited.

For canonical published-consumer ledger reconciliation: `items/lem-null-maximal.md`, proof 3.1, incorrectly asserts a strict intermediate inequality when a_m=a_n. Use <= in that comparison, then the strict Cauchy estimate at epsilon delta², with index max(N0,N_Cauchy); ab−1 is eventually null and the generated ideal contains 1. The complete argument is installed in the owned bounded-real strategy, using `lem-cauchy-away-from-zero`, `thm-cauchy-ring`, `lem-null-ideal`, `lem-rat-triangle`, `def-null-sequence`, `thm-rat-ordered-field`. Thus its exact prerequisite input is discharged locally without consuming the affected result to prove itself. The published line remains Phase-3 debt; no new pair is required. The actual completeness/field dependency path, Aitken full-text review support, and the still-unrepaired strict-disc consumers with their exact planned suppliers are recorded in the current report.

Post-edit checks passed: manifest-deps, content-policy, coverage-checklist, source-fetch-check --stamp (5 existing receipts, no new stamp), source-backing with existing run liveness, shared and actual-inventory overlay validate-plan, extcheck (existing warnings), scope refresh/check. The sole batch dependency input remains []; no cross-batch supplier exists. Current report contains final bookkeeping and terminal decision evidence.

## Step-5 authoring

Completed the assigned 22 A items, 3 B examples, and both draft pages. This section is the current author checkpoint; earlier sections preserve the scaffold/review history. The current group is `a` (`covers: [1]`); its final Step-3 recheck for dispatch `0e052e93e6d98426` supersedes the initial insufficient scaffold review. No assigned input was missing. The current manifest and authoritative plan agree on both page IDs, category, item inventory and prerequisite pages, including `compactness` (the earlier task’s shorter prerequisite list is stale).

Completed pages:

- `library/group-theory/asymptotic-cones-and-the-sublinear-triangle-criterion.md` — all 22 A IDs below.
- `library/group-theory/asymptotic-cones-and-the-sublinear-triangle-criterion-examples.md` — all 3 B IDs below.

The manifest remains `research/phase-2-hg-prerequisite-batch-1.pages.json`. Proof contracts are complete for all 25 IDs in `research/phase-2-hg-prerequisite-batch-1.proof-contracts.json`: each numbered argument step has exactly one derivation row with its actual claim and inputs, every fact links an exact current source Statement/Definition excerpt to its actual uses, and all eight boundary categories have item-specific dispositions. Definitions retain their construction conventions and their schema well-definedness links.

### Mathematical decisions and dependency input

Preserved every promised item and proof route. The cone convention uses one fixed free ultrafilter, arbitrary moving basepoints, and positive scales tending ordinarily to zero. AC is explicit at the free-filter and countable-geodesic/witness selections; deterministic bisection and least-grid extrema do not silently spend countable choice. The bounded-real lemma includes the rational reciprocal calculation with a nonstrict intermediate comparison. Segment limits use rescaled clamping and allow off-large-set normalization. The converse handles both finite and infinite limiting third-side distance ratios; the sublinear proof identifies every cone geodesic, not just selected limit segments.

The planar route supplies finite polygon separation, PL disk parametrizations, prescribed-boundary extensions and positive-width collars locally. The fold uses two genuine notched disks and a whole-plane collapse map that deforms the complement. Fresh midpoint subdivisions handle loops; the bigon deletion checks cyclic germ blocks and whole retained characteristic walks; monogon contraction is separate from the retained-arc homotopy. Every domain triangle counts. The compatible vertex/band/face subdivision gives `16E+4I+4` and preserves `C(L)=20(L+1)`. Triangle endpoint rounding gives perimeter at most `P+6` and vertex-set Hausdorff error at most 3. The affine barrier is `h=m/2-r`, retaining the `2r` loss, followed by `2e`. The resulting common majorant uses `A=2r sqrt(C(L)(K+2))`, `B=2r+10`. A point wedge proves existence of a common slimness constant for fixed K,L; no explicit delta formula is asserted.

Direct dependency edits made after checking their statements:

- `lem-finite-polygonal-disk-and-collar-surgery` adds `cor-cauchy-reals-lub-complete` for interval connectedness in the parity argument.
- `lem-triangle-extrema-and-real-tree-tripod-rules` adds `thm-well-ordering-principle` for least grid and subsequence indices.
- `thm-sublinear-triangle-minsize-implies-hyperbolicity` adds `lem-bounded-real-ultralimits-and-free-tail-extension` for free-ultrafilter existence.
- `lem-relator-disks-give-area-controlled-coarse-fillings` adds `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `prop-normal-closure-is-products-of-conjugates`, and `def-group-presentation`, separating the nonempty algebraic expression set from its least length and the diagram construction.

All these suppliers are in this batch or published. The consumer input `research/phase-2-hg-prerequisite-batch-1.cross-batch-dependencies.json` is therefore the accurate empty array. It was replaced atomically and the prescribed `frontier-dependency-ledger.mjs refresh --run phase-2-hg-prerequisite` was run after dependency/input edits. The derived ledger was never edited by hand. No plan, workflow state, published mathematical content, other batch, or independent review was edited.

### Sources and provenance

All 25 statements retain `ai-altered`; the 20 supplied arguments retain `ai-altered`, and the five definitions retain proof `not-applicable`. These are source-based constructions with locally supplied extensions and detailed arguments, not literal transcriptions. No generated statement is a supplier; no `generation`, recorded-unproved fallback, or new forward reference is introduced. No judge, source-fetch, or audit stamp was written. The final proofs are author work, not an independent mathematical certification.

Complete relevant passages were checked using the browser text for Druţu–Kapovich, Frigerio–Sisto and Erickson, and the recovered original Bridson PDF at `/tmp/hgp-bridson-bfs.pdf` (PDF pp.20–24). Bridson’s extracted font encoding is imperfect; the actual relevant text was read, not inferred from its title. Shell DNS failure did not justify dropping available originals. Exact named locators appear in each item and contract. Particularly relevant passages are DK §10.4 Lemmas 10.48 and 10.51; the unnumbered opening cone definition in §10.6 (PDF p.372), §11.20 Lemma 11.168(a) and full Proposition 11.167(a), §11.21 Proposition 11.176 and Lemma 11.177 (PDF pp.448–449), §9.7.4 Propositions 9.103–9.104 (PDF pp.350–352), and the full canonical-enlargement passage after Definition 7.98 (PDF pp.261–262). Frigerio–Sisto Lemma 11 (PDF pp.7–8) supports the arc/tree comparison. Erickson, Simple Polygons §§1.2,1.4,1.6 (PDF pp.4–9,13–14) supplies the polygon comparison; Planar Graphs (2023), Abstract graphs through Rotation systems, supplies dart/germ conventions. The added collar, occurrence and quantitative count arguments are explicitly local. The source’s unsupported affine vertex-to-edge shortcut is not used; the local barrier has the necessary loss of r.

### Checks actually run

| Check | Final result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts` followed by all 25 explicit manifest `items/ID.md` paths | Exit 0: 20 proof-bearing items checked, zero failing; five definitions have no proof section. Initial repair output was adopted through the normative checker, with all references and contract/boundary anchors remapped. |
| `node tools/validate-plan.mjs` | Actual bare invocation exited 2 and printed required plan-file usage. This was corrected by the next invocation. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; declared reading order and listed item graph pass. Existing whole-plan redundant-prerequisite warnings remain (3569 rows); 683 unrelated pages have no item inventory. |
| `node tools/validate-plan.mjs /tmp/hgp5-plan-overlay.json` | Exit 0 with the same existing warnings. This temporary copy substitutes the current owned manifest, including all six new direct edges, without editing the authoritative plan. |
| `node tools/content-policy.mjs research/phase-2-hg-prerequisite-batch-1.pages.json` | Exit 0: 25 scoped items, zero errors or warnings. Initial source-list parser failures were repaired with canonical block reference objects. |
| `node tools/proof-contract.mjs research/phase-2-hg-prerequisite-batch-1.proof-contracts.json --strict` | Exit 0: 25/25 items checked, zero errors, one `shotgun-bracket` warning. The warning is at the area-construction step 1.2: F6 identifies the quotient kernel, F5 supplies finite expressions, F2 supplies their least length, and F4 constructs the corresponding diagram. All four facts are used at that exact step; it is not a blanket citation at an announcement. |
| `node tools/rendercheck.mjs` followed by all 25 owned item paths and both page paths | Exit 0: all 27 files pass the real KaTeX and renderer-YAML parse and delimiter checks. |
| `node tools/manifest-deps.mjs research/phase-2-hg-prerequisite-batch-1.pages.json` | Exit 0: 25 items, zero missing or malformed dependency lists. |
| Owned metadata comparison | All 25 draft item dependency lists equal the manifest, all IDs resolve to the intended files, all 20 proof-bearing items have numbered arguments, and there are no judge or generation fields. |

No scripts were used to convert scaffold strategies into proofs. Temporary scripts formatted the individually written arguments, applied canonical phase repairs, and synchronized contracts from the actual completed paragraphs. Mechanical checks establish format and structural consistency only.

### Unresolved obligations and next action

No owned mathematical gap or scope-change request remains. No narrowing, removal, or new prerequisite page is proposed. The pre-existing published strict-disk/exact-area consumer repairs remain with their owning Alpha/toolkit; this batch neither consumes those defective diagram theorems nor declares those external repairs complete. Subsequent independent review and engine transitions belong to the build driver and owning roles. Authoring is complete; the next action is the driver’s review of these draft artifacts.

### Completed item checkpoints

#### def-rescaled-ultralimit-and-asymptotic-cone

Claim and conventions:

Fix a free ultrafilter $\omega$ on $\mathbb N=\{1,2,\ldots\}$, in the sense of [[def-ultrafilter]]. A set in $\omega$ is called **large**. For a real sequence, $\lim_\omega a_n=a$ means that $\{n:|a_n-a|<\varepsilon\}$ is large for every $\varepsilon>0$.

Let $(X_n,d_n,e_n)$ be pointed metric spaces ([[def-metric-space]]) and $\lambda_n>0$. Put

$$\mathcal B=\{(x_n)\in\prod_nX_n:\sup_n\lambda_nd_n(x_n,e_n)<\infty\},\qquad D(x,y)=\lim_\omega\lambda_nd_n(x_n,y_n).$$

Declare $x\sim y$ when $D(x,y)=0$. The **rescaled ultralimit** is $\mathcal B/\!\sim$, with distance $d_\omega([x],[y])=D(x,y)$ and basepoint $[e]$. These formulas are provisional until the two results in `justified_by` establish existence of the real limit and the quotient metric.

For one fixed space $X_n=X$ and positive scales $\lambda_n\to0$ in the ordinary sense, write $\operatorname{Cone}_\omega(X,e,\lambda)$ and call it an **asymptotic cone**. Basepoints $e_n$ may vary arbitrarily. A sequence bounded only on a large set is interpreted by replacing its other coordinates with $e_n$; the quotient-metric lemma proves independence of that replacement.

Dependencies: `def-metric-space`, `def-ultrafilter`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §10.4 opening construction; §10.6 opening cone definition, PDF p.372.

Decision: completed without scope deletion. Contract: 0 actual numbered derivation rows, 0 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-bounded-real-ultralimits-and-free-tail-extension

Claim and conventions:

Assuming AC, there is a free ultrafilter on $\mathbb N$. For any supplied ultrafilter $\omega$ on $\mathbb N$, every bounded real sequence has a unique ultralimit. For bounded sequences $u_n,v_n$, limits $u,v$, and $c\in\mathbb R$,

$$\lim_\omega(u_n+v_n)=u+v,\quad\lim_\omega cu_n=cu,\quad\lim_\omega u_nv_n=uv,\quad\lim_\omega|u_n|=|u|.$$

An inequality holding on a large set passes to the limits. Altering a sequence off a large set preserves its limit. For a free ultrafilter, an ordinary convergent bounded sequence has the same ultralimit. The supplied-ultrafilter assertions require no new choice.

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `thm-ultrafilter-lemma`, `thm-ultrafilter-characterisation`, `def-complete-ordered-field`, `def-axiom-of-choice`, `cor-cauchy-reals-lub-complete`, `lem-cauchy-away-from-zero`, `thm-cauchy-ring`, `lem-null-ideal`, `lem-rat-triangle`, `def-null-sequence`, `thm-rat-ordered-field`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §10.1 Lemma 10.25 and real ultralimit calculus; local rational reciprocal supplement.

Decision: completed without scope deletion. Contract: 11 actual numbered derivation rows, 10 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-rescaled-ultradistance-is-a-quotient-metric

Claim and conventions:

For the bounded sequence space in the rescaled-ultralimit definition, $D$ is a finite pseudometric, $D(x,y)=0$ is an equivalence relation, and $d_\omega([x],[y])=D(x,y)$ is a metric. Changes off a large set do not change a point. Representatives bounded only on a large set give the same quotient after replacement by the basepoints elsewhere.

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `def-metric-space`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §10.4 initial pseudometric and quotient construction.

Decision: completed without scope deletion. Contract: 5 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### def-geodesic-rays-and-lines

Claim and conventions:

In a geodesic metric space ([[def-geodesic-and-geodesic-metric-space]]), an **oriented geodesic ray** is an isometric embedding $\rho:[0,\infty)\to X$. Its origin is $\rho(0)$, its parameter increases in the chosen orientation, and its $T$-tail is $\rho([T,\infty))$, for $T\ge0$.

An **oriented geodesic line** is an isometric embedding $\ell:\mathbb R\to X$. Its origin is $\ell(0)$ and its signed parameter increases in the chosen orientation. Its positive and negative $T$-tails are $\ell([T,\infty))$ and $\ell((-\infty,-T])$. Replacing $\ell(t)$ by $\ell(-t)$ reverses the orientation.

The maps include parameter and origin data; their images alone do not. Two rays have a **common tail** when $\rho([S,\infty))=\sigma([T,\infty))$ for some specified nonnegative $S,T$. Hausdorff distances between rays or lines always refer to their images.

Dependencies: `def-geodesic-and-geodesic-metric-space`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §1.2 interval geodesics; §10.4 limit geodesics.

Decision: completed without scope deletion. Contract: 0 actual numbered derivation rows, 0 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-geodesic-segments-have-isometric-ultralimits

Claim and conventions:

Assume AC. A rescaled ultralimit of pointed geodesic spaces is geodesic. Suppose oriented finite segments $S_n$ meet a uniformly bounded rescaled neighbourhood of the basepoints on a large set. Their represented limit means the classes with a representative belonging to $S_n$ on a large set. Replace segments outside that large set by the constant segment at $e_n$ when forming the following parameters. Choose origins $o_n\in S_n$ there and write their original-distance parameterizations as $\gamma_n:[-\alpha_n,\beta_n]\to S_n$, with $\gamma_n(0)=o_n$ and $\alpha_n,\beta_n\ge0$. If $a=\lim_\omega\lambda_n\alpha_n$ and $b=\lim_\omega\lambda_n\beta_n$, allowing $+\infty$, their represented limit is isometric to $[-a,b]\cap\mathbb R$. Every admissible sequence of points on $S_n$ lies on this limit. The possibilities are a closed interval (including a point), a ray, or a line.

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-rescaled-ultradistance-is-a-quotient-metric`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `def-geodesic-and-geodesic-metric-space`, `def-geodesic-rays-and-lines`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §10.4 Lemmas 10.48 and 10.51, PDF pp.366–367.

Decision: completed without scope deletion. Contract: 6 actual numbered derivation rows, 5 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### def-real-tree-tripods-and-geodesic-triangle-minsize

Claim and conventions:

A **real tree** is a geodesic metric space in which every two distinct points are joined by a unique topological arc. An arc means a subspace homeomorphic to $[0,1]$, with the two specified endpoints. An injective continuous parameterization by $[0,1]$ also suffices: the interval is compact by [[thm-heine-borel-r]], the metric image is Hausdorff by [[thm-metric-hausdorff-separation]], metric and topological continuity agree by [[thm-metric-continuity-characterisations]], and the compact-to-Hausdorff clause of [[thm-compactness-under-continuous-maps]] makes the bijection onto its image a homeomorphism.

For three vertices, a **chosen geodesic triangle** consists of three specified geodesic segments ([[def-geodesic-and-geodesic-metric-space]]), allowing repeated vertices and zero-length sides. A **tripod triangle** is the union of three legs meeting at one branch point, with each side the union of the corresponding two legs and with distances given by the resulting tree metric; legs may have length zero.

For sides $S_1,S_2,S_3$ put

$$\operatorname{slim}(\Delta)=\max_i\max_{x\in S_i}d(x,S_j\cup S_k),\qquad \operatorname{minsize}(\Delta)=\min_{x_i\in S_i}\max_{i,j}d(x_i,x_j).$$

Here $\{i,j,k\}=\{1,2,3\}$ and $d(x,A)=\inf_{a\in A}d(x,a)$. The extrema are justified by the following local lemma, rather than assumed from the formulas. A triangle is **$\delta$-slim** if its slimness is at most $\delta\ge0$; a space is **hyperbolic** here if some finite $\delta$ works for every chosen triangle.

For a nonempty geodesic space and $P\ge0$ define $m_X(P)=\sup\{\operatorname{minsize}(\Delta):\operatorname{perimeter}(\Delta)\le P\}$. Degenerate triangles at each point ensure a nonempty family; each diameter is at most the perimeter, so $0\le m_X(P)\le P$. No profile is assigned to the empty space, which is nevertheless vacuously $\delta$-slim for every $\delta\ge0$.

For nonempty subsets define $d_H(A,B)=\max\{\sup_{a\in A}d(a,B),\sup_{b\in B}d(b,A)\}$, allowing $+\infty$. This extends the finite metric convention of [[def-metric-space]] only for subset distance, not for distances between points.

Dependencies: `def-geodesic-and-geodesic-metric-space`, `def-metric-space`, `thm-heine-borel-r`, `thm-metric-hausdorff-separation`, `thm-metric-continuity-characterisations`, `thm-compactness-under-continuous-maps`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4 Definitions 9.101–9.102; §11.21 Definition 11.175.

Decision: completed without scope deletion. Contract: 0 actual numbered derivation rows, 0 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-triangle-extrema-and-real-tree-tripod-rules

Claim and conventions:

Minsize and slimness attain their extrema on every finite chosen geodesic triangle. For a geodesic metric space, these conditions are equivalent: unique topological arcs between distinct points; all chosen triangles are tripods; all chosen triangles are $0$-slim. In such a space, rays with the same origin at finite Hausdorff distance coincide, rays at finite Hausdorff distance have common tails, and lines at finite Hausdorff distance coincide.

Dependencies: `def-real-tree-tripods-and-geodesic-triangle-minsize`, `def-geodesic-rays-and-lines`, `def-complete-ordered-field`, `cor-cauchy-reals-lub-complete`, `thm-well-ordering-principle`.

Sources: https://arxiv.org/pdf/0810.1526 — §3 Lemma 11, PDF pp.7–8; local interval extrema and branch proofs.

Decision: completed without scope deletion. Contract: 11 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-tree-cones-give-uniform-two-side-control

Claim and conventions:

Assume AC and fix a free ultrafilter $\omega$. Let $X$ be geodesic and suppose $\operatorname{Cone}_\omega(X,e,\lambda)$ is a real tree for every basepoint sequence and every positive ordinary-null scale sequence. There exists $M>0$ such that, for every $x,y,z$ and all choices of the two segments,

$$d(y,z)>1\quad\Longrightarrow\quad d_H([x,y],[x,z])\le M d(y,z).$$

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-geodesic-segments-have-isometric-ultralimits`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `def-geodesic-rays-and-lines`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.20 Lemma 11.168(a), PDF p.443.

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### thm-all-asymptotic-cones-are-trees-implies-uniform-slimness

Claim and conventions:

Assume AC. Fix one free ultrafilter $\omega$. If a geodesic space $X$ has a real tree as $\operatorname{Cone}_\omega(X,e,\lambda)$ for every sequence $e$ of basepoints and every positive sequence $\lambda_n\to0$ ordinarily, then some finite $\delta\ge0$ makes every chosen geodesic triangle in $X$ $\delta$-slim.

Dependencies: `lem-tree-cones-give-uniform-two-side-control`, `lem-geodesic-segments-have-isometric-ultralimits`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `def-geodesic-rays-and-lines`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.20 Proposition 11.167(a), full proof PDF pp.443–445.

Decision: completed without scope deletion. Contract: 8 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic

Claim and conventions:

Assume AC. Let $X$ be nonempty and geodesic with $m_X(P)=o(P)$ as $P\to\infty$. In any asymptotic cone, let $a=[a_n]$, $b=[b_n]$. For every choice of original segments $[a_n,b_n]$, their limit is the unique geodesic segment between $a,b$.

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-geodesic-segments-have-isometric-ultralimits`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.21 Lemma 11.177, PDF p.449.

Decision: completed without scope deletion. Contract: 5 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### thm-sublinear-triangle-minsize-implies-hyperbolicity

Claim and conventions:

Assume AC. Every nonempty geodesic space $X$ with $m_X(P)/P\to0$ as $P\to\infty$ has a finite uniform slimness constant. The empty space is separately vacuously $\delta$-slim for every $\delta\ge0$; no minsize profile is assigned to it.

Dependencies: `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic`, `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `def-axiom-of-choice`, `lem-bounded-real-ultralimits-and-free-tail-extension`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.21 Proposition 11.176, reverse implication, PDF pp.448–449.

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 5 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### def-bounded-edge-coarse-triangular-filling

Claim and conventions:

Let $X$ be a metric space ([[def-metric-space]]). A **coarse triangular disk of edge bound $r>0$** is a finite combinatorial triangulation $D$ of a topological closed disk, together with a vertex map $f:V(D)\to X$ such that $d(f(u),f(v))\le r$ for every edge $uv$. Its area $N$ is the number of domain triangles, including triangles whose vertex images coincide or are otherwise degenerate.

The boundary map is specified by a cyclic list of vertices of $X$; repeated entries and additional repetitions are allowed. For a boundary divided into three consecutive closed arcs $B_1,B_2,B_3$, sharing their corner vertices, its **coarse minsize** is the minimum diameter of $\{f(v_1),f(v_2),f(v_3)\}$ with $v_i$ a vertex of $B_i$. Each arc contains a corner, so these are finite nonempty sets.

Only the vertex map to $X$ is required. No continuous extension to $X$ is part of the data. Later coordinate maps to $\mathbb R^2$ are extended affinely on the abstract triangles. For a presentation, **algebraic relator area** retains the normal-closure-expression convention of [[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]]; it is not defined as this coarse triangle count.

Dependencies: `def-metric-space`, `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4 Definitions 9.101–9.102 and coarse filling conventions.

Decision: completed without scope deletion. Contract: 0 actual numbered derivation rows, 0 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### def-singular-planar-labelled-relator-diagram

Claim and conventions:

Fix a presentation $\mathcal P=\langle X\mid R\rangle$ ([[def-group-presentation]]) and words with formal inverses as in [[def-alphabet-words-and-reduction]]. A **singular planar labelled relator diagram** consists of an embedded finite connected plane multigraph, with loops and parallel edges as in [[def-multigraph-loop-and-digraph]], and finitely many characteristic polygon disks attached along cyclic edge-occurrence walks. Each characteristic map is injective on its open disk; face interiors in the plane are disjoint. Edges are polygonal arcs, with distinct germs at the two ends of a loop. Geometric bends are not additional labelled edge occurrences.

Oriented edges carry letters in $X\sqcup X^{-1}$; reversing orientation inverts the letter. Each face's attaching walk reads a cyclic conjugate of a defining relator or its inverse. Occurrences are counted with multiplicity, even if an attaching walk repeats vertices or edges; neither its closed frontier nor its attaching map is required to be injective.

The **outer boundary walk** follows the edge occurrences bordering the unbounded region, in their plane cyclic order. An initial occurrence is specified when a literal linear word is read. Excursions at cut vertices are retained. A **thin edge** has no incident relator face. A **bridge** disconnects the graph when its open edge is deleted; a **cut vertex** disconnects it upon vertex deletion. These are distinct notions in the definition. The constructed diagrams below will have every thin edge a bridge traversed twice by the outer walk.

The diagram is **contractible** if its plane carrier has a contraction to a point. The single-vertex zero-face diagram is allowed. A **Cayley vertex labelling** is a map $g:V\to\langle X\mid R\rangle$ satisfying $g(w)=g(v)x$ on each oriented edge $v\to w$ labelled $x$. This condition includes loop edges.

Dependencies: `def-group-presentation`, `def-alphabet-words-and-reduction`, `def-multigraph-loop-and-digraph`.

Sources: https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf — §4.1 and §4.2 Definition 4.2.1, PDF pp.20–22.

Decision: completed without scope deletion. Contract: 0 actual numbered derivation rows, 0 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-finite-polygonal-disk-and-collar-surgery

Claim and conventions:

All arcs and graphs in this lemma are finite and polygonal: their edges have disjoint interiors except at specified shared endpoints. A simple polygon separates the plane into one bounded and one unbounded component; the closure of the bounded component is a disk. A prescribed piecewise-linear homeomorphism between the boundaries of two such disks extends to a piecewise-linear homeomorphism of the disks, with piecewise-linear inverse after finite subdivisions.

A finite embedded arc has a disk neighbourhood made from vertex disks and edge strips. A finite connected plane graph has a compact disk-and-band neighbourhood; filling its bounded complementary boundary circles produces a closed disk. Subdividing an edge does not change these conclusions. Loops use two distinct attachment germs. No ambient-plane extension is asserted.

Dependencies: `def-ordered-field`, `def-continuous-map-top`, `def-subspace-topology-top`, `thm-compactness-under-continuous-maps`, `cor-cauchy-reals-lub-complete`.

Sources: https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf — §1.2 complete separation proof; §1.4 Lemma 1.4/Theorem 1.5; §1.6 Theorem 1.10, PDF pp.4–9,13–14.

Decision: completed without scope deletion. Contract: 10 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-relator-expressions-give-controlled-singular-planar-diagrams

Claim and conventions:

Suppose a word $w$ of length $n$ is equal in the free group to a product of $m$ conjugates of defining relators or their inverses, each of length at most $L$. There is a contractible singular planar labelled relator diagram with literal outer word $w$, at most $m$ faces, and $E\le Lm+n$ edges. Every bounded graph region is occupied by one open relator face. Each occupied edge side corresponds to one characteristic-polygon side occurrence. Every thin edge is a bridge traversed twice by the outer walk. The diagram admits a consistent Cayley vertex labelling.

Dependencies: `def-bounded-edge-coarse-triangular-filling`, `def-singular-planar-labelled-relator-diagram`, `prop-normal-closure-is-products-of-conjugates`, `thm-reduced-words-form-the-free-group`, `def-group-presentation`, `lem-finite-polygonal-disk-and-collar-surgery`.

Sources: https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf — §4.2 Lemma 4.2.3, Remark 4.2.5, Lemma 4.2.6 and final existence proof, PDF pp.22–24; local PL and occurrence supplement; https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html — Abstract graphs; Planar graphs and planar maps; Rotation systems.

Decision: completed without scope deletion. Contract: 15 actual numbered derivation rows, 5 exact fact/source-use rows, all eight boundary dispositions, and one finite-smoke obligation tied to step 13.1's exact assertion that a finite connected graph without cycles is a tree. The registered `tree-characterisation` search passed on every simple graph through five vertices; the strict contract check remained at 25/25 items with zero errors and the pre-existing nonfatal `shotgun-bracket` warning, and a temporary merged-contract liveness run reported one live finite-smoke check. The full author check was then refreshed successfully at fingerprint `ca3c30cd73e4b7b028b1705f9fd611a4ee37308614ffb35b4e69e79f823520f3`. This contract-only gate repair does not change the item, its dependencies, sources, manifest, risk review, reader/refuter evidence, or defect ledger. Open gap: none identified in this carrier. Next action: the engine may regenerate the shared merged contract and run the complete gate battery.

#### lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings

Claim and conventions:

A diagram supplied by the preceding construction, with $E$ edges, $m$ faces, outer length $n$ and total face incidence $I\le Lm$, has a coarse triangular disk retaining its outer vertex walk up to inserted repetitions, with edge bound $r=\max(1,L)$ and at most $16E+4I+4$ triangles. In particular it has at most $20(L+1)(m+n+1)$ triangles when $E\le Lm+n$. This includes loops, monogons, bigons, repeated occurrences and zero-face diagrams.

Dependencies: `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `def-bounded-edge-coarse-triangular-filling`, `lem-finite-polygonal-disk-and-collar-surgery`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §7.10.2, Definition 7.98 and the complete canonical-enlargement passage, PDF pp. 261–262 (printed pp. 241–242).

Decision: completed without scope deletion. Contract: 6 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-relator-disks-give-area-controlled-coarse-fillings

Claim and conventions:

Let a finite presentation have defining relators of length at most $L\geq0$. Give the simple Cayley graph its unit-edge metric realization $X$; identity letters traverse constant paths. This is a geodesic metric space inducing the word metric on vertices. Put $r=\max(1,L)$ and $C(L)=20(L+1)$. Every null word $w$ of length $n$ has a coarse triangular filling with
$$N\leq C(L)(\operatorname{Area}(w)+n+1),$$
whose boundary reads $w$ (with permitted subdivisions and repetitions) and whose edge images have length at most $r$. Here algebraic area is the least number of conjugates of defining relators or their inverses in an expression for $w$ in the free group.

Every chosen geodesic triangle in $X$ of perimeter $P$ admits a null edge word of length $n\leq P+6$, marked into three arcs. Each original side and its corresponding edge-path image have Hausdorff distance at most $3$. The same bound $3$ holds between the side and the finite vertex set on that arc.

Dependencies: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`, `def-bounded-edge-coarse-triangular-filling`, `thm-well-ordering-principle`, `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph`, `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `prop-normal-closure-is-products-of-conjugates`, `def-group-presentation`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4, Definition 9.101 and Proposition 9.103 (PDF pp. 349–351); explicit local conversion and count.

Decision: completed without scope deletion. Contract: 7 actual numbered derivation rows, 6 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-polygonal-boundary-crossing-for-affine-disk-maps

Claim and conventions:

Let a finite triangulated closed disk map to $\mathbb R^2$, affinely on every triangle. Its boundary is marked into three successive arcs. The first two map into the two nonnegative coordinate axes and meet at the origin. The third maps into $\{(s,t):\max(s,t)\geq h\}$ and has endpoints on the axes at coordinates at least $h$. For $h>0$ the image contains $(0,h)^2$. (For $h\leq0$ that open square is empty.) If both coordinate differences along each edge of every image triangle are at most $r\geq0$, the area of their union is at most $Nr^2$, where $N$ is the number of domain triangles. In particular, for $h>0$, $h^2\leq Nr^2$. Area here is ordinary finite polygonal area, with overlaps counted only once.

Dependencies: `def-bounded-edge-coarse-triangular-filling`, `def-complete-ordered-field`, `cor-cauchy-reals-lub-complete`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4, proof of Propositions 9.103–9.104, PDF pp. 350–352; the crossing and finite-area argument is supplied here.

Decision: completed without scope deletion. Contract: 8 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-coarse-triangle-minsize-is-bounded-by-square-root-area

Claim and conventions:

If a coarse triangular boundary has an $r$-edge filling with $N$ triangles, and $A_1,A_2,A_3$ are its nonempty finite marked vertex-image sets, put
$$m=\min_{a_i\in A_i}\operatorname{diam}\{a_1,a_2,a_3\}.$$
Then $m\leq2r\sqrt N+2r$. If three continuous boundary sides have Hausdorff distance at most $e\geq0$ from the corresponding finite sets $A_i$, their minsize is at most $2r\sqrt N+2r+2e$.

Dependencies: `lem-polygonal-boundary-crossing-for-affine-disk-maps`, `def-bounded-edge-coarse-triangular-filling`, `def-real-tree-tripods-and-geodesic-triangle-minsize`, `thm-of-square-roots`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4, Propositions 9.103–9.104, PDF pp. 350–352; corrected affine-edge barrier $h=m/2-r$.

Decision: completed without scope deletion. Contract: 5 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### thm-linear-relator-area-implies-slim-geodesic-triangles

Claim and conventions:

Assume the Axiom of Choice. Let a finite presentation have relator lengths at most $L\geq0$ and satisfy $\operatorname{Area}(w)\leq K|w|$ for every null word, with $K\geq0$. Its unit-edge metric Cayley realization $X$ has uniformly slim geodesic triangles. More precisely, writing $m_X(P)$ for the supremum of minsize over triangles of perimeter at most $P$, one has
$$m_X(P)\leq A(K,L)\sqrt{P+7}+B(L)\quad(P\geq0),$$
where $r=\max(1,L)$, $C(L)=20(L+1)$, $A(K,L)=2r\sqrt{C(L)(K+2)}$, and $B(L)=2r+10$.

Dependencies: `lem-relator-disks-give-area-controlled-coarse-fillings`, `lem-coarse-triangle-minsize-is-bounded-by-square-root-area`, `thm-sublinear-triangle-minsize-implies-hyperbolicity`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §9.7.4, Theorem 9.100 and Proposition 9.103; §11.20, Proposition 11.167(a).

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-point-wedges-preserve-a-common-triangle-minsize-bound

Claim and conventions:

Assume AC. Let $(X_i,o_i)$ be a countable family of pointed geodesic metric spaces, and let $F:[0,\infty)\to[0,\infty)$ be nondecreasing with $m_{X_i}(P)\leq F(P)$ for every $i,P$. Form the disjoint union with all roots identified to $o$ and retain one root even for an empty family. Give it the metric that restricts to $d_i$ on a factor and satisfies
$$d(x,y)=d_i(x,o_i)+d_j(o_j,y)\quad(i\ne j).$$
This wedge $W$ is geodesic; every factor is isometrically and geodesically embedded, in the strong sense that every ambient geodesic between its points lies in that factor. Moreover $m_W(P)\leq F(P)$.

Dependencies: `def-real-tree-tripods-and-geodesic-triangle-minsize`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `def-axiom-of-choice`.

Sources: https://arxiv.org/pdf/0810.1526 — Lemma 11 (PDF pp. 7–8), sublinear criterion context; local wedge argument for uniformity.

Decision: completed without scope deletion. Contract: 6 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### lem-uniform-filling-data-give-a-uniform-slimness-bound

Claim and conventions:

Assume AC. For every $K,L\geq0$ there exists a finite $\delta(K,L)$ such that every finite presentation with relator lengths at most $L$ and $\operatorname{Area}(w)\leq K|w|$ for every null word has $\delta(K,L)$-slim triangles in its unit-edge metric Cayley realization. More generally, a countable family of nonempty geodesic spaces with a common nonnegative nondecreasing majorant $F$ for $m_X$, satisfying $F(P)/P\to0$ as $P\to\infty$, has a common finite slimness bound. The claim is existence, without an explicit numerical formula for $\delta$.

Dependencies: `thm-linear-relator-area-implies-slim-geodesic-triangles`, `lem-point-wedges-preserve-a-common-triangle-minsize-bound`, `thm-sublinear-triangle-minsize-implies-hyperbolicity`, `def-axiom-of-choice`.

Sources: https://arxiv.org/pdf/0810.1526 — Lemma 11 (PDF pp. 7–8); point-wedge contradiction supplied locally to make uniformity precise.

Decision: completed without scope deletion. Contract: 3 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### ex-asymptotic-cones-of-lines-and-trees

Claim and conventions:

Assume AC. For every free ultrafilter $\omega$, positive scales $\lambda_n\to0$ and real basepoints $e_n$, the cone of $(\mathbb R,|x-y|)$ is isometric to $\mathbb R$ via
$$[x_n]\longmapsto\lim_\omega\lambda_n(x_n-e_n),\qquad t\longmapsto[e_n+t/\lambda_n].$$
Every asymptotic cone of a nonempty real tree is a real tree; the cone need not be isometric to the original tree.

Dependencies: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `lem-geodesic-segments-have-isometric-ultralimits`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic`, `lem-real-line-is-a-metric-space`, `def-axiom-of-choice`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §10.6 (cones) and §11.21, Proposition 11.176 (PDF pp. 448–449), with the explicit line calculation.

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 7 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### ex-euclidean-triangle-has-positive-linear-minsize

Claim and conventions:

In $(\mathbb R^2,d_2)$ consider the triangle with vertices $(0,0),(s,0),(0,s)$, where $s>0$. Its perimeter is $(2+\sqrt2)s$ and its minsize $\mu(s)$ satisfies
$$s/2\leq\mu(s)\leq s,\qquad \mu(s)=s\mu(1).$$
In particular its minsize is a positive linear function of its scale; no optimal coefficient is asserted.

Dependencies: `def-real-tree-tripods-and-geodesic-triangle-minsize`, `lem-metrics-on-rn`, `thm-of-square-roots`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.21, Definition 11.175 and Proposition 11.176, comparison with the Euclidean-plane example; explicit computation here.

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 3 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.

#### ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter

Claim and conventions:

Let $X$ be a nonempty geodesic metric space with $m_X(P)=o(P)$. If $\lambda_n>0$ tends to zero and $P_n\geq0$ with $\sup_n\lambda_nP_n<\infty$, then $\lambda_nm_X(P_n)\to0$. A fixed bound on the unscaled perimeters also forces vanishing after rescaling, even without sublinearity, but gives no conclusion for perimeters of order $1/\lambda_n$. The Euclidean right triangles of scale $n$ at $\lambda_n=1/n$ display this distinction.

Dependencies: `def-real-tree-tripods-and-geodesic-triangle-minsize`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `lem-metrics-on-rn`, `thm-of-square-roots`.

Sources: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf — §11.20, Lemma 11.168(a), PDF pp. 443–445; explicit scaling calculation and independent Euclidean witness.

Decision: completed without scope deletion. Contract: 4 actual numbered derivation rows, 4 exact fact/source-use rows, and all eight boundary dispositions. Checks: included in the successful final batch checks above. Open gap: none identified. Next action: independent review of the saved draft.
