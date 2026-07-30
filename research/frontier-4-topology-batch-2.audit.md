# Frontier 4 topology batch 2 — Beta step 6a audit ledger

Date: 2026-07-30

Scope: the 107 authored items and six page files for
`hereditary-and-productive-separation`,
`partitions-of-unity-and-paracompactness`, and
`countability-axioms-and-cardinal-functions`, including their three example
companions. Every authored proof step, title, Statement, Facts & Assumptions
entry, Remark, example, counterexample, false statement, dependency declaration,
and internal link was read. Every distinct published dependency target was
opened and checked against its actual Definition or Statement. There are no
coverage exceptions.

## Binary adjudication

The resume decision that Ornstein Part (B) restarts from the original arbitrary
cover was reversed after checking the primary paper. Part (B) proves that a new
set meeting a fixed small ball at \(x\) has an index \(\alpha\) for which
\(x\in C_\alpha\); this implies local finiteness only because its input
\(\{C_\alpha\}\) is the point-finite output of Part (A), renamed. The corrected
chain is Part (A) point-finite refinement, then Part (B) locally finite upgrade,
then Stone's theorem. This adjudication follows the required priority of
mathematical accuracy and citation fidelity.

## Changed files

- `lem-locally-finite-unions-and-closures`: replaced the invalid use of the
  “interior” of an arbitrary neighbourhood by an open subneighbourhood.
- `lem-algebra-of-continuous-real-maps-on-a-space`: supplied explicit
  addition, multiplication, absolute-value, reciprocal, maximum, minimum, and
  division estimates; added the exact subspace dependency.
- `lem-paracompact-hausdorff-cover-shrinking`: replaced the unproved
  “standard construction” with the complete two-stage locally finite shrinking
  and grouping argument.
- `lem-metric-open-covers-have-point-finite-refinements`: expanded Ornstein
  Part (A), including the cover and descending-ordinal arguments.
- `lem-metric-point-finite-refinements-can-be-made-locally-finite`: corrected
  its title, Statement, dependencies, proof, and Remark so Part (B) consumes the
  point-finite Part (A) output; supplied a bounded-radius version of the primary
  comparison argument.
- `thm-stone-metric-spaces-are-paracompact`: made the Part (A) and Part (B)
  dependency chain explicit.
- `lem-countably-compact-paracompact-hausdorff-is-compact`: restored the
  countable-choice hypothesis and gave the complete extraction, closed
  countable discrete set, and finite-refinement proof.
- `fs-paracompactness-is-hereditary` and
  `cex-paracompactness-is-not-open-hereditary`: cited the published ordinal
  \(T_1\) result for openness of \(\omega_1\subseteq\omega_1+1\).
- `fs-paracompactness-is-productive`: added the actual lower-limit
  regular/Lindelöf result and an explicit Choice-implies-countable-choice fact.
- `rem-paracompactness-choice-and-convention-ledger`: corrected the Ornstein
  Part (A)/(B) history and dependency account.
- `lem-countable-local-bases-can-be-open-and-decreasing`: removed hidden
  countable choice by taking interiors canonically.
- `lem-character-is-well-defined` and `lem-cellularity-is-well-defined`:
  replaced the overstatement attributed to the well-ordering theorem by a
  direct proof that the union of a bounded set of cardinals is its cardinal
  supremum.
- `cor-cardinal-functions-detect-countability-axioms`: corrected
  \(\chi\)-notation and stated the first-countability definition in the cited
  fact.
- `thm-metric-countability-equivalences`: supplied the ball-basis and
  radius-\(1/n\) subcover proofs and the countable-union choice ledger.
- `thm-countable-products-of-second-countable-spaces` and
  `thm-countable-products-of-first-countable-spaces`: supplied the finite
  support coding and countability arguments.
- `prop-separable-spaces-are-ccc`: handled the empty cellular family and empty
  dense-set edge cases.
- `prop-continuous-image-density-and-lindelof-degree`: added Choice explicitly
  to the Statement and assumptions.
- `thm-metric-weight-equals-density`: replaced the one-line assertion by the
  rational-ball proof and separate empty/finite discrete cases.
- `lem-uncountable-delta-system-for-finite-sets`: supplied the full induction,
  occurrence split, Zorn maximal disjoint family, and countable-union
  contradiction.
- `thm-cantor-cubes-are-ccc`: supplied the cylinder selection,
  \(\Delta\)-system thinning, finite-root pattern, and compatibility proof.
- `lem-large-cantor-cubes-are-not-separable`: supplied the coordinate-column
  cardinality argument and explicit missing cylinder.
- `fs-separable-spaces-are-second-countable`: removed arbitrary choice by
  enumerating a putative countable basis and taking the first eligible member.
- `fs-separability-is-hereditary`: established the lower-limit basis and
  product basis rather than assuming a locally reconstructed topology.
- `fs-lindelofness-is-hereditary`: verified the discrete real line is locally
  compact Hausdorff and noncompact before using its one-point compactification.
- `fs-lindelofness-is-productive`: corrected “least rational” to “first in a
  fixed enumeration” and supplied the countable thinning proof for the
  lower-limit line.
- `rem-countability-axiom-implication-and-choice-ledger`: removed unsupported
  convergence-hierarchy/corpus claims and retained the batch's actual choice
  ledger.
- `ex-cardinal-functions-of-the-lower-limit-line`,
  `ex-countability-profile-of-the-lower-limit-plane`,
  `ex-cardinal-functions-of-a-one-point-compactification`, and
  `ex-countability-profile-of-omega-one`: expanded the claimed lower bounds,
  witnesses, topology hypotheses, and choice-sensitive countability arguments.
- `library/topology/partitions-of-unity-and-paracompactness.md`: corrected the
  second summary paragraph to the Part (A)-then-Part (B) Ornstein chain.

No result was added, deleted, renamed, published, audited, or judged. All 107
items remain `status: draft`, `origin: session`; all six pages remain draft.

## Complete item coverage

“Checked” means the entire authored file and every dependency use were read.
Items named in the changed-file list above were repaired; every other row was
accepted unchanged.

### hereditary-and-productive-separation

- Checked `lem-t0-t1-and-hausdorff-are-hereditary`.
- Checked `lem-regularity-is-hereditary`.
- Checked `lem-complete-regularity-is-hereditary`.
- Checked `thm-positive-heredity-of-separation-axioms`.
- Checked `lem-products-preserve-t0-t1-and-hausdorff`.
- Checked `lem-products-preserve-regularity`.
- Checked `lem-finite-minima-of-continuous-unit-interval-maps`.
- Checked `lem-products-preserve-complete-regularity`.
- Checked `thm-positive-productivity-of-separation-axioms`.
- Checked `lem-normality-is-closed-hereditary`.
- Checked `thm-completely-normal-iff-hereditarily-normal`.
- Checked `cor-complete-normality-is-hereditary`.
- Checked `cor-perfect-normality-is-hereditary`.
- Checked `lem-regular-lindelof-spaces-are-normal`.
- Checked `def-lower-limit-topology`.
- Checked `lem-lower-limit-line-is-regular-and-lindelof`.
- Checked `cor-lower-limit-line-is-normal`.
- Checked `lem-jones-normal-density-discrete-bound`.
- Checked `lem-lower-limit-plane-antidiagonal`.
- Checked `thm-normality-is-not-productive`.
- Checked `lem-deleted-tychonoff-plank-is-regular-and-nonnormal`.
- Checked `thm-normality-is-not-hereditary`.
- Checked `fs-every-regular-space-is-normal`.
- Checked `rem-hereditary-and-productive-separation-ledger`.

### hereditary-and-productive-separation-examples

- Checked `ex-separation-preservation-table`.
- Checked `ex-closed-subspaces-of-normal-spaces`.
- Checked `ex-the-deleted-tychonoff-plank-separation-profile`.
- Checked `ex-the-lower-limit-line-and-plane-separation-profile`.
- Checked `cex-normality-is-not-open-hereditary`.
- Checked `cex-normality-is-not-finitely-productive`.
- Checked `cex-t1-free-regular-and-normal-conventions`.

### partitions-of-unity-and-paracompactness

- Checked `def-cover-refinement-and-local-finiteness`.
- Checked `lem-locally-finite-unions-and-closures`.
- Checked `def-paracompact-space`.
- Checked `prop-compact-spaces-are-paracompact`.
- Checked `prop-closed-subspaces-of-paracompact-spaces`.
- Checked `lem-paracompact-hausdorff-is-regular`.
- Checked `thm-paracompact-hausdorff-implies-normal`.
- Checked `def-partition-of-unity-subordinate-to-a-cover`.
- Checked `lem-algebra-of-continuous-real-maps-on-a-space`.
- Checked `lem-locally-finite-sums-are-continuous`.
- Checked `lem-normalizing-a-locally-finite-positive-family`.
- Checked `lem-paracompact-hausdorff-cover-shrinking`.
- Checked `thm-subordinate-partitions-of-unity-exist`.
- Checked `thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces`.
- Checked `cor-compact-hausdorff-partitions-of-unity`.
- Checked `lem-metric-open-covers-have-point-finite-refinements`.
- Checked `lem-metric-point-finite-refinements-can-be-made-locally-finite`.
- Checked `thm-stone-metric-spaces-are-paracompact`.
- Checked `cor-metric-spaces-admit-subordinate-partitions-of-unity`.
- Checked `lem-countably-compact-paracompact-hausdorff-is-compact`.
- Checked `lem-regular-lindelof-spaces-are-paracompact`.
- Checked `fs-paracompact-spaces-are-normal`.
- Checked `fs-paracompactness-is-hereditary`.
- Checked `fs-paracompactness-is-productive`.
- Checked `rem-paracompactness-choice-and-convention-ledger`.

### partitions-of-unity-and-paracompactness-examples

- Checked `ex-hat-partition-of-unity-on-the-real-line`.
- Checked `ex-finite-partition-of-unity-on-a-compact-space`.
- Checked `ex-locally-finite-versus-point-finite-families`.
- Checked `cex-a-non-locally-finite-sum-can-be-discontinuous`.
- Checked `ex-omega-one-is-not-paracompact`.
- Checked `cex-paracompactness-is-not-open-hereditary`.
- Checked `cex-paracompactness-is-not-productive`.

### countability-axioms-and-cardinal-functions

- Checked `def-second-countable-space`.
- Checked `def-separable-space`.
- Checked `def-countable-chain-condition`.
- Checked `def-weight-density-and-character`.
- Checked `def-lindelof-degree-and-cellularity`.
- Checked `lem-weight-is-well-defined`.
- Checked `lem-density-is-well-defined`.
- Checked `lem-character-is-well-defined`.
- Checked `lem-lindelof-degree-is-well-defined`.
- Checked `lem-cellularity-is-well-defined`.
- Checked `cor-cardinal-functions-detect-countability-axioms`.
- Checked `lem-countable-local-bases-can-be-open-and-decreasing`.
- Checked `thm-second-countable-implies-first-countable`.
- Checked `thm-second-countable-implies-separable`.
- Checked `thm-second-countable-implies-lindelof`.
- Checked `thm-metric-countability-equivalences`.
- Checked `prop-second-countability-is-hereditary`.
- Checked `thm-countable-products-of-second-countable-spaces`.
- Checked `thm-countable-products-of-first-countable-spaces`.
- Checked `prop-separable-spaces-are-ccc`.
- Checked `thm-basic-cardinal-function-inequalities`.
- Checked `prop-subspace-weight-and-character-inequalities`.
- Checked `prop-continuous-image-density-and-lindelof-degree`.
- Checked `thm-metric-weight-equals-density`.
- Checked `lem-uncountable-delta-system-for-finite-sets`.
- Checked `thm-cantor-cubes-are-ccc`.
- Checked `lem-large-cantor-cubes-are-not-separable`.
- Checked `fs-ccc-spaces-are-separable`.
- Checked `fs-first-countable-spaces-are-second-countable`.
- Checked `fs-separable-spaces-are-second-countable`.
- Checked `fs-separability-is-hereditary`.
- Checked `fs-lindelofness-is-hereditary`.
- Checked `fs-lindelofness-is-productive`.
- Checked `fs-second-countability-is-arbitrarily-productive`.
- Checked `rem-countability-axiom-implication-and-choice-ledger`.

### countability-axioms-and-cardinal-functions-examples

- Checked `ex-cardinal-functions-of-the-real-line`.
- Checked `ex-cardinal-functions-of-an-uncountable-discrete-space`.
- Checked `ex-cardinal-functions-of-the-lower-limit-line`.
- Checked `ex-countability-profile-of-the-lower-limit-plane`.
- Checked `ex-cardinal-functions-of-a-one-point-compactification`.
- Checked `ex-countability-profile-of-omega-one`.
- Checked `ex-a-ccc-nonseparable-cantor-cube`.
- Checked `cex-separability-is-not-hereditary-worked`.
- Checked `cex-lindelofness-is-not-productive-worked`.

## Page and graph checks

- All three A-page summaries have exactly two nonempty prose paragraphs:
  paragraph word counts are \(64/68\), \(66/79\), and \(52/64\).
- All three B pages have no authored body.
- Final audit manifest: 307 published-backward edges and 191 same-batch edges.
- No A item depends on a B item; cross-pair same-batch edges point only to an
  earlier A page.
- Every batch item and page has the required draft/session state, with no
  `verification.audited` or `verification.judge` block.

## Gate record

- `tools/reflow.mts`: run on all 107 authored item files.
- `tools/precheck.mts`: 80 proof-bearing items checked, 0 failing.
- `tools/prosecheck.mjs --warnings`: 113 item/page files checked, 0 errors,
  0 warnings.
- `tools/citecheck.mjs`: 107 items scanned, clean.
- `tools/depcheck.mjs`: 0 hard errors; no warning belongs to this batch.
- `tools/fwdcheck.mjs`: 0 hard errors.
- `tools/extcheck.mjs`: 0 hard errors.

There are no unresolved mathematical or citation concerns inside the assigned
write boundary.

## Fatal-error ledger for step 9

This section records only publish-blocking mathematical, logical, hypothesis, or
semantic-citation defects. It excludes reflow/numbering work, notation cleanup,
routine edge-case additions, proof enrichment that was merely a short standard
calculation, and strengthening a correct Choice theorem to its sharper
countable-choice form.

### Invalid or materially incomplete proofs

| Affected id/file | Defect type | Location | Fix disposition |
|---|---|---|---|
| `lem-locally-finite-unions-and-closures` | Logical invalidity: an arbitrary neighbourhood was treated as though it had a nonempty open interior at an arbitrary point of intersection. | Proof | Repair/replace proof: pass first to an open subneighbourhood of the fixed point and apply the closure criterion there. |
| `lem-paracompact-hausdorff-cover-shrinking` | Missing proof: the whole locally finite shrinking construction was delegated to “standard” without a dependency that stated it. | Proof | Repair/replace proof: author the one-shrink lemma inline, apply it twice, group the second refinement, and use locally finite closure-union commutation. |
| `lem-metric-open-covers-have-point-finite-refinements` | Materially incomplete primary-source proof: the cover argument and the descending-ordinal point-finiteness argument were asserted but not established. | Proof | Repair/replace proof: supply the dyadic chosen-ball definition, expanded-ball coverage contradiction, and monotone first-index argument. |
| `lem-metric-point-finite-refinements-can-be-made-locally-finite` | Logical invalidity and wrong source reconstruction: the input was an arbitrary cover, but the local-finiteness inference requires that input to be point-finite. | Title/Statement; proof; Facts/dependencies; Remark | Restate and repair/replace proof: make the input point-finite, restore the Part (A) dependency, prove the radius comparison, and retain the arbitrary-cover consequence only through Part (A). |
| `thm-metric-weight-equals-density` | Essential cases and cardinal arithmetic were unproved: one sentence did not establish the rational-ball basis or the raw empty/finite cases. | Proof | Repair/replace proof: prove the infinite-density rational-ball bound and handle empty and finite metric spaces separately. |
| `lem-uncountable-delta-system-for-finite-sets` | Proof absent in substance: the occurrence split and disjoint-subfamily case were only named. | Proof | Repair/replace proof: give the size induction, uncountable occurrence reduction, Zorn maximal disjoint family, and countable-union contradiction. |
| `thm-cantor-cubes-are-ccc` | Proof absent in substance: “two compatible cylinders” omitted cylinder selection, root-pattern thinning, and compatibility. | Proof | Repair/replace proof: select basic cylinders, apply the delta-system lemma, thin on the finite root, and explicitly construct a common point. |
| `lem-large-cantor-cubes-are-not-separable` | Proof absent in substance: the coordinate-column cardinal bound and missing open cylinder were only asserted. | Proof | Repair/replace proof: enumerate a putative dense set, map coordinates to binary columns, identify two equal columns, and exhibit the disjoint cylinder. |
| `fs-lindelofness-is-productive` | Explicit false step: a “least rational greater than \(x\)” was used although no such rational exists; the countable thinning of the usual-open part was also unsupported. | Refutation | Repair/replace proof: use the first eligible rational in a fixed enumeration and give the rational-interval thinning argument under countable choice. |

### Hidden or missing choice hypotheses

| Affected id/file | Defect type | Location | Fix disposition |
|---|---|---|---|
| `lem-countable-local-bases-can-be-open-and-decreasing` | Hidden countable choice: the proof simultaneously chose an open subset of every member of a countable local base, while the theorem had no choice hypothesis. | Proof | Repair/replace proof: take each member's interior canonically before forming finite intersections. |
| `prop-continuous-image-density-and-lindelof-degree` | Missing hypothesis: the Statement used cardinal functions whose definitions and well-definedness are under Choice, although only the title mentioned Choice. | Title/Statement; Facts/dependencies | Correct dependencies/hypotheses: state Choice explicitly in the Statement and Given clause and declare its dependency. |
| `fs-separable-spaces-are-second-countable` | Hidden arbitrary choice in a choice-free refutation: one basis member was selected independently for every real \(x\). | Refutation | Repair/replace proof: enumerate the assumed countable basis and take the least eligible index canonically. |
| `ex-cardinal-functions-of-a-one-point-compactification` | Choice-sensitive overclaim: for an arbitrary uncountable discrete set, “countable union of finite complements is countable” is not available in ZF. | Title/Statement-level example claim; example prose | Restate and repair prose: use the discrete real line, whose finite subsets have canonical increasing enumerations, and prove the first-countability and separability failures. |

### Semantic dependency or hypothesis failures

| Affected id/file | Defect type | Location | Fix disposition |
|---|---|---|---|
| `fs-paracompactness-is-productive` | Missing load-bearing facts: the cited paracompactness lemma did not itself state that the lower-limit line is regular and Lindelöf, and Choice-implies-countable-choice was unstated. | Facts/dependencies; Refutation | Correct dependencies/hypotheses: add the actual lower-limit theorem and both choice definitions, then cite them at the use. |
| `fs-paracompactness-is-hereditary` | Unsupported topological claim: openness of \(\omega_1\) in \(\omega_1+1\) used closedness of the endpoint without a \(T_1\) dependency. | Facts/dependencies; Refutation | Correct dependencies/hypotheses: add the ordinal \(T_1\) theorem and cite it at the endpoint step. |
| `cex-paracompactness-is-not-open-hereditary` | Same unsupported endpoint-closedness claim as the parent false statement. | Facts/dependencies; Counterexample | Correct dependencies/hypotheses: add and use the ordinal \(T_1\) theorem. |
| `lem-character-is-well-defined` | Semantic mis-citation: the well-ordering theorem was cited as stating existence of bounded cardinal suprema, which its body does not state. | Facts/dependencies; Proof | Correct dependencies and repair proof: use cardinality/well-order facts for minima and directly prove that the union of the bounded cardinal set is a cardinal supremum. |
| `lem-cellularity-is-well-defined` | Same semantic mis-citation of the well-ordering theorem for cardinal suprema. | Facts/dependencies; Proof | Correct dependencies and repair proof: directly prove the union-of-cardinals supremum argument. |
| `thm-metric-countability-equivalences` | Missing choice-sensitive dependency closure: the Lindelöf-to-separable direction used a countable union of countable centre sets without stating or citing that theorem. | Facts/dependencies; Proof | Correct dependencies/hypotheses and repair proof: add the countable-union theorem and explicitly construct the radius-\(1/n\) centre sets and dense union. |
| `thm-countable-products-of-second-countable-spaces` | The finite-support countability conclusion was not licensed by any cited proof fact; countability of finite supports and coordinate choices was skipped. | Facts/dependencies; Proof | Correct dependencies and repair proof: state the product/countable-union results and give the tuple coding and two countable-union applications. |
| `thm-countable-products-of-first-countable-spaces` | Same missing finite-support countability justification for local bases. | Facts/dependencies; Proof | Correct dependencies and repair proof: state the product/countable-union results and prove countability of supports and coordinate choices. |
| `fs-separability-is-hereditary` | Wrong/missing topology dependency: the proof used the lower-limit interval basis while depending on an unrelated standard-topologies definition and never established the basis. | Facts/dependencies; Refutation | Correct dependencies and repair proof: use the interval and basis-criterion items, verify the half-open basis, then use the product basis. |
| `ex-countability-profile-of-the-lower-limit-plane` | Multiple claims lacked their actual dependencies: the antidiagonal was used to infer non-second-countability and non-Lindelöfness without the hereditary/product obstruction results. | Facts/dependencies; example prose | Correct dependencies and repair prose: cite the owned antidiagonal refutations and hereditary second-countability result, and state how each conclusion follows. |

### Unsupported raw-cardinal claims and false source/scope prose

| Affected id/file | Defect type | Location | Fix disposition |
|---|---|---|---|
| `ex-cardinal-functions-of-the-lower-limit-line` | Raw equalities were underproved: only upper bounds were described for several functions, and the continuum-sized weight bound lacked its cardinal arithmetic and lower-bound construction. | Facts/dependencies; example prose | Correct dependencies and repair prose: supply finite/local lower bounds, noncompact and cellular witnesses, and both weight inequalities. |
| `rem-paracompactness-choice-and-convention-ledger` | False primary-source account: it said Part (B) restarted from the original cover and deliberately had no Part (A) dependency. | Facts/dependencies; Remark | Correct dependencies and repair prose: record the Part (A)-then-Part (B) chain and Part (B)'s use of point-finiteness. |
| `library/topology/partitions-of-unity-and-paracompactness.md` | False primary-source summary: it described Part (B) as a separate direct construction rather than the point-finite upgrade. | Page prose/summary | Repair prose: replace the history with the verified sequential Ornstein chain. |
| `rem-countability-axiom-implication-and-choice-ledger` | Unsupported scope claim: it attributed two convergence counterexamples to the companion material although those examples were not in this companion or its dependencies. | Remark | Repair prose: remove the unsupported convergence/corpus paragraph and retain only the established raw-cardinal and choice ledger. |

No fatal repair required dropping or deferring a result, and no new lemma/result
was required. Every fatal defect above was resolved by restatement, proof
replacement, prose repair, or correction of dependencies/hypotheses.
