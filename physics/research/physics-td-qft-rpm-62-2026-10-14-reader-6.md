# Step 3a reader report — batch 6

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader, read-only  
Scope: batch 6 only

## Opened inventory

The current batch manifest assigns 28 items on two pages. The accompanying notes say 27 items (25 A-page and 2 B-page items); I followed the current manifest and proof-contract scope, both of which contain 28 items.

### Assigned pages

- A page: td-math-convex-contact-and-mixing, “Convex Contact And Mixing.”
- B page: td-math-convex-contact-and-mixing-examples, “Convex Contact And Mixing — Examples.”

I opened both page files and their summaries. The A page requires td-math-local-pfaff-geometry, the-exponential-function, and jacobi-fields-conjugate-points-and-the-cut-locus. The B page requires the A page and the-logarithm-and-general-powers. I opened all four distinct required-page files. The required-page edge from the A page to td-math-local-pfaff-geometry is still open in the current cross-batch dependency record.

### A-page items

def-tdmath-forward-sector-hypotheses; def-tdmath-thermal-contact-hypotheses; lem-tdmath-relative-interior-segment; lem-tdmath-relative-boundary-support; lem-tdmath-unique-support-inward-ray; lem-tdmath-convex-function-local-lipschitz; lem-tdmath-integral-zero-uniqueness; lem-tdmath-forward-spectator-cancellation; def-tdmath-forward-signed-comparison; lem-tdmath-thermal-scaling-invariance; lem-tdmath-reference-strip-coordinate; lem-tdmath-convex-sector-closedness; lem-tdmath-sector-interior; thm-tdmath-sector-nesting; thm-tdmath-forward-boundary-graph; thm-tdmath-reference-strip-gluing; lem-tdmath-contact-energy-orientation; lem-tdmath-thermal-class-dichotomy; thm-tdmath-conditional-contact-calibrator; thm-tdmath-arbitrary-family-calibration; def-tdmath-decorated-chain-costs; lem-tdmath-decorated-cost-algebra; thm-tdmath-unattained-cost-entropy-inference; def-tdmath-cost-offset-difference-space; lem-tdmath-cost-offset-difference-space-well-defined; thm-tdmath-splitting-cost-quotient.

### B-page items

cex-tdmath-bare-contact-interface-incoherent; ex-tdmath-logarithmic-coherence-witness.

### Prerequisite items

I read the complete current draft supplier items in dependency order:

- Batch 3: def-tdmath-tagged-scalable-compound; def-tdmath-type-offset-vector-space; lem-tdmath-reciprocal-naturals-tend-zero; lem-tdmath-compound-mass-well-defined; lem-tdmath-type-offset-vector-space-well-defined; def-tdmath-comparison-and-stability; thm-tdmath-infinite-no-sinks-sandwich; def-tdmath-signed-comparison; lem-tdmath-spectator-cancellation; lem-tdmath-reference-order; lem-tdmath-reference-supremum-bounds; thm-tdmath-additive-entropy-representation.
- Batch 4: lem-tdmath-closed-convex-separation.

I read the Definition or Statement and relevant hypothesis sections for the 59 published mathematical item suppliers in the transitive dependency closure: cor-every-vector-space-has-a-basis; cor-mean-value-theorem; cor-of-one-positive; def-algebraic-dual-and-linear-functional; def-axiom-of-choice; def-axiom-of-infinity; def-axiom-of-pairing; def-axiom-of-power-set; def-axiom-of-union; def-axiom-schema-of-replacement; def-axiom-schema-of-separation; def-canonical-natural; def-cartesian-product; def-ck-euclidean-maps-and-diffeomorphisms; def-complete-ordered-field; def-convex-subset-of-euclidean-space; def-darboux-integral; def-euclidean-inner-product; def-extended-reals; def-finite-sum; def-function-space; def-linear-basis; def-linear-independence; def-linear-subspace; def-nat-addition; def-nat-order; def-natural-logarithm; def-natural-numbers; def-real-limit; def-sublinear-functional; def-total-derivative-in-euclidean-space; def-vector-space; lem-finite-dimensional-unit-spheres-are-sequentially-compact; lem-finite-sum-laws; lem-finite-sum-reindexing-and-fubini; lem-nat-add-commutative; lem-nat-add-identity; lem-nat-order-add-compatible; lem-of-inverse-positive; lem-of-naturals-positive; lem-of-q-embeds; lem-of-sign-rules; lem-rat-embeds-dense; thm-algebra-of-derivatives; thm-cauchy-schwarz-and-the-euclidean-norm; thm-chain-rule; thm-chain-rule-for-total-derivatives; thm-continuous-implies-integrable; thm-continuous-partial-derivatives-imply-total-differentiability; thm-derivative-of-exponential; thm-every-independent-set-extends-to-a-basis; thm-exponential-two-point-convexity; thm-extreme-value-metric; thm-hahn-banach-dominated-extension; thm-heine-borel-rn; thm-logarithm-derivative-and-integral; thm-natural-logarithm-laws; thm-newton-leibniz-with-interior-derivative; thm-weighted-am-gm-real.

The 59 imported item snapshots all match their raw SHA-256 pins in research/math-imports.json. I also opened the exact root definitions relevant to the flagged terminology, including the definitions of supporting hyperplane, metric boundary/interior/closure, paths, and Lipschitz maps.

## Manifest and contract review

- All 28 assigned source dependency lists match their current manifest rows.
- The current proof-contract scope has 28 items. Every numbered step in the 22 proof-bearing assigned items has one matching contract derivation row; I found no missing or stale step IDs.
- Contracts, the batch notes, and cross-batch records were treated as evidence rather than mathematical verdicts.
- The batch notes' 27-item count conflicts with the current 28-item manifest and contract scope.

## Findings I could not edit

The assignment is read-only, so no item or page source was changed.

1. def-tdmath-forward-sector-hypotheses — Definition, lines 36 and 52–54: the hypotheses use open and convex Euclidean charts, local Lipschitz regularity, and arcwise connectedness without supplying the exact topology/convexity definitions or defining the local regularity/connectivity conditions. The item dependencies do not include the exact convex-set definition; no local definition or exact supplier is given for the other conditions. These assumptions drive the later sector theorems. Ill-formed; fatal.
2. lem-tdmath-relative-interior-segment — Statement, line 29: relative interior is defined using H = aff C, but affine hull is not defined or supplied by its only dependency, which defines convexity. The published affine-space definition does not define the affine hull of a subset. Supply its construction or an exact definition. Ill-formed; fatal.
3. lem-tdmath-relative-interior-segment — Proof step 2.1, line 39: the proof selects y_m in C for every natural m from the nonempty sets C intersect B(y,1/m), without a countable-choice premise or a choice-free construction. A direct fixed-neighborhood argument can select one sufficiently close point of C and avoid this sequence. Unlicensed inference; nonfatal.
4. lem-tdmath-convex-function-local-lipschitz — Statement, line 29: the conclusion uses the norm ||x-y|| without identifying its definition or supplier; the only declared dependency defines convexity. State the Euclidean norm and its exact supplier. Ill-formed; fatal.
5. lem-tdmath-relative-boundary-support — Statement, line 36, and proof step 5.1, line 66: the statement uses aff C and the conclusion uses ambient supporting hyperplanes without an exact definition or supplier in its dependencies. The metric/convexity suppliers do not define affine hull or the supporting-hyperplane relation. Define these locally or cite exact earlier definitions. Ill-formed; fatal.
6. lem-tdmath-relative-boundary-support — Proof step 5.1, line 66: affine dimension at most d-2 is used to assert dim(H-perp) at least two and choose two nonparallel normals. Neither the facts nor dependencies establish the orthogonal-complement dimension formula. Add the finite-dimensional dimension result, such as cor-double-orthogonal-complement-and-dimension, or prove it locally. Unlicensed inference; nonfatal.
7. lem-tdmath-relative-boundary-support — Frontmatter deps, line 10, and Facts & Assumptions, line 42: lem-tdmath-closed-convex-separation is declared as a prerequisite while the item explicitly labels it “Additional context, not used in the proof”; no proof step uses it. Remove the unnecessary edge or state its actual load-bearing use. Ill-formed dependency; nonfatal.
8. lem-tdmath-unique-support-inward-ray — Statement, line 32: boundary/interior notation and “supporting hyperplane” are used without the exact metric-boundary and supporting-hyperplane definitions in the item's dependencies. The item needs the corresponding definitions or local formulations. Ill-formed; fatal.
9. lem-tdmath-unique-support-inward-ray — Proof step 3.1, line 54: Heine–Borel establishes compactness of the closed neighborhood but does not itself establish that the displayed continuous barycentric coefficient function is bounded. This can be closed directly from nonnegative barycentric coordinates summing to one, or by citing the extreme-value theorem. Unlicensed inference; nonfatal.
10. lem-tdmath-integral-zero-uniqueness — Statement, line 34, and proof step 1.1, line 50: the formula uses the Darboux integral from 0 to 0 at t=0, while def-darboux-integral defines its integral for a<b and does not extend it to a degenerate interval. Define the degenerate integral as zero or state the inequality for t>0 and handle f(0) separately. Ill-formed; fatal.
11. lem-tdmath-integral-zero-uniqueness — Proof step 1.1, line 50: differentiability and continuity of h(t)=integral from 0 to t are derived using integral additivity and the estimate |integral_s^t f| <= M|t-s|. Those Darboux-integral properties are neither listed as facts nor proved from the Darboux sums. Supply the local derivation or an exact integral-properties result. Unlicensed inference; fatal.
12. def-tdmath-decorated-chain-costs — Definition, lines 29–35: X_T is only constrained to be a nonempty state set of fixed composition. No operation or closure condition says that products of states lie in X_(T times T') or that scaled states lie in X_(tT), nor that product states factor into endpoint/catalyst states. lem-tdmath-decorated-cost-algebra and thm-tdmath-unattained-cost-entropy-inference use exactly these constructions. Define the state-space maps and closure conditions. Ill-formed; fatal.
13. def-tdmath-decorated-chain-costs — Definition, line 37: F is defined using infimum and the values +infinity and -infinity, but its extended-real codomain/order and infimum convention are not defined or supplied by its dependencies. Add the exact extended-real/infimum suppliers or define the conventions. Ill-formed; fatal.
14. thm-tdmath-unattained-cost-entropy-inference — Statement, lines 34–38: it quantifies over every pair of types and states, but the comparison relation is defined only on equal-mass pairs. For unequal type masses the left side is undefined; F=+infinity does not make an undefined relation false. Restrict the statement to equal masses or define the relation outside its domain. Ill-formed; fatal.
15. thm-tdmath-additive-entropy-representation — Batch 3 in-run dependency, proof step 2.1, line 60; assigned consumer lem-tdmath-thermal-class-dichotomy: the cited reference-order lemma compares unit-mass maps R_lambda, but A_R and B_R have arbitrary common mass M. The step needs an M=0 branch and, for M>0, normalization by M or a direct scaling argument. Unlicensed inference; nonfatal. The exact observed producer bytes match its immutable pre-reader snapshot, raw SHA-256 715941f3af23dde78fd6c06d98d70ec040bc667c8625b2980a248c39476c5e69.
16. td-math-convex-contact-and-mixing — Page summary, opening sentence: it says the page proves the convex-geometry, boundary-graph, nesting, and comparison-completeness results, although the assigned proofs have the unresolved definition and justification gaps above. The summary overstates the current proof status. Overstrong title or statement; fatal.

## Page verdicts

- td-math-convex-contact-and-mixing: requires repair due to the item findings above. Its current page-level requirement to td-math-local-pfaff-geometry is also open in the current cross-batch record; I opened that page summary, and the assigned item closure does not use its Frobenius or rank results.
- td-math-convex-contact-and-mixing-examples: the countermodel and logarithmic consistency witness are internally coherent as mathematical examples and do not claim empirical evidence. Overall page readiness remains unresolved because it depends on the A page and the A page's open required-page edge.

## Edits and checks

No item or page was edited because the reader brief is read-only. Accordingly, no reflow, precheck, or proof-layout command was run.

## Blocker and coverage limits

The required page edge td-math-convex-contact-and-mixing to td-math-local-pfaff-geometry remains open; the B page inherits the A-page prerequisite. I did not audit that unassigned page's item proofs. I checked exact statements and hypotheses of the pinned published mathematical suppliers, but did not re-audit every published supplier proof body or retrieve the cited Lieb–Yngvason and Arovas source texts. I therefore make no external-citation-fidelity claim.
