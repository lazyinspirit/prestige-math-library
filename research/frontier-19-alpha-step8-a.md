# Frontier 19 — Step 8 group a adjudication

Scope: batches 1 and 9. I adjudicated all 38 current Terra rejections in
`research/frontier-19-alpha-a-step8.task.md` against the exact on-disk items and
the cited published dependencies opened during the Step-7 read.

## Outcomes

| item | outcome | evidence and disposition |
|---|---|---|
| `cex-a-kan-extension-that-is-not-pointwise` | `false_positive` | The item is a worked counterexample while `fs-every-kan-extension-is-pointwise` is a false-statement refutation. Reusing the canonical witness in those two reader-facing roles is redundancy, not a mathematical defect. No edit. |
| `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer` | `confirmed_fatal` · dependency citation | The old [L1] constrained block systems but step 2.1 applied it to one block. `def-primitive-and-imprimitive-actions` now states primitivity by triviality of every block, and the corollary now checks an arbitrary block by translating it through the basepoint. |
| `def-absolute-kan-extension` | `false_positive` | The final comparison is correct. For the left-handed case, the contravariant representable `E(-,e):E^op→Set` is equivalently a covariant functor `E→Set^op`; absoluteness quantifies over that target as well. No edit. |
| `def-dense-subcategory` | `confirmed_fatal` · dependency citation | The Yoneda model case needs both full faithfulness and the self-Kan theorem. The exact published full-faithfulness theorem is now a dependency and is cited separately. |
| `def-isometric-proper-and-cobounded-actions-on-metric-spaces` | `confirmed_fatal` · logic | Coarse density of one orbit is not equivalent to coboundedness for arbitrary non-isometric actions. The equivalence is now explicitly restricted to isometric actions. |
| `def-polynomial-subexponential-exponential-and-intermediate-growth` | `confirmed_fatal` · dependency citation | Transferring the four growth classes across equivalent growth functions uses transitivity of `≼`. The preorder lemma is now a direct dependency and citation. |
| `def-primitive-and-imprimitive-actions` | `confirmed_fatal` · logic | The one-block-partition formulation failed on the empty transitive action because an empty subset is not a block. Primitive is now defined by triviality of every block; the invariant-partition formulation is stated only for nonempty `Ω`. |
| `ex-a-kan-extension-computing-a-free-functor` | `confirmed_fatal` · dependency citation | The old [L2] attributed `Grp(Z,G)≅U(G)` to a theorem that states the chosen free-functor adjunction, and uniqueness of left adjoints was uncited. The witness now uses the theorem's chosen free group on a singleton, and adjoint uniqueness is cited explicitly. |
| `ex-free-groups-acting-geometrically-on-regular-trees` | `confirmed_nonfatal` | In this finite-rank Cayley tree, each vertex has finite degree and bounded balls are finite; that closes the properness step immediately. This is a sub-30-second proof gap, so no edit under R1. |
| `ex-imprimitive-wreath-product-block-system` | `confirmed_fatal` · logic | The fiber `B×{σ}` may be empty under the general wreath-product definition. The example now assumes the `H`-set `B` is nonempty and verifies this before applying the block definition. |
| `ex-induction-and-coinduction-of-group-representations` | `confirmed_fatal` · dependency citation | The abstract limit/colimit definition does not state the concrete Set quotient or compatible-family constructions. Fact F2 now cites the exact Set small-colimit and small-limit theorems. |
| `ex-integers-acting-geometrically-on-the-line` | `confirmed_nonfatal` | The straight segment `t↦(1-t)x+ty` establishes geodesicity of the usual real line immediately. This is a sub-30-second omitted proof step. No edit. |
| `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` | `confirmed_nonfatal` | A nested diagram of inclusions in Set has union as its colimit by the elementary universal property. The gap is locally closed in under 30 seconds. No edit. |
| `ex-left-kan-extension-along-a-full-subcategory-inclusion` | `confirmed_nonfatal` | The remaining comma categories at `0` and `1` have the identity objects as terminal objects; with the already computed value at `2`, the supplied colimits assemble by the cited comma theorem. This is a short proof-step omission. No edit. |
| `ex-projective-linear-action-and-iwasawas-hypotheses` | `confirmed_nonfatal` | The kernel of the fractional-linear `SL_2` action is the scalar center, so passage to `PSL_2` makes the action faithful. This is a standard sub-30-second verification between proof steps. No edit. |
| `ex-z-n-acting-geometrically-on-euclidean-n-space` | `confirmed_nonfatal` | Euclidean space is geodesic by affine line segments. This is a sub-30-second omitted step. No edit. |
| `fs-every-kan-extension-is-pointwise` | `false_positive` | A false-statement item and its companion worked counterexample may use the same canonical witness; the shared witness does not make either argument false or unsupported. No edit. |
| `fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular` | `confirmed_fatal` · dependency citation | The cited natural-action example did not state normality of `A_n` or primitivity of the `S_n` action. The item now cites the alternating-group normality corollary, lower-transitivity lemma, and double-transitivity criterion separately. |
| `fs-every-subexponential-growth-group-has-polynomial-growth` | `confirmed_nonfatal` | The given existence of an intermediate-growth group plus the definition “subexponential but not polynomial” closes the refutation immediately. The missing definitional invocation is a sub-30-second step. No edit. |
| `fs-iwasawas-criterion-needs-only-transitivity` | `confirmed_fatal` · dependency citation | [L1] dropped faithfulness from the cited primitive-action conclusion. It is now exact, and the Statement was sharpened to the precise false claim that primitivity may be replaced by transitivity. |
| `fs-the-yoneda-embedding-preserves-colimits` | `confirmed_nonfatal` | The empty set is initial in Set because it has one function to every set; pointwise computation then gives the initial presheaf. This is an elementary sub-30-second gap. No edit. |
| `lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets` | `confirmed_nonfatal` | When the displacement is zero, the element already lies in `S`; separating that case removes the displayed division by zero. This is exactly a sub-30-second boundary branch between proof steps. No edit under R1. |
| `lem-metric-properness-agrees-with-proper-discontinuity-on-proper-discrete-metric-spaces` | `confirmed_nonfatal` | Every finite subset of any metric space is bounded; the reverse direction quoted in the rejection is elementary and closes in under 30 seconds. No edit. |
| `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz` | `confirmed_fatal` · logic | The maximum generator displacement was undefined for the empty finite generating set of the trivial group. The definition now takes the maximum after adjoining `0`. |
| `prop-doubly-transitive-actions-are-primitive` | `confirmed_nonfatal` | Double transitivity gives ordinary transitivity immediately (with the zero/one-point cases vacuous or trivial), and the proof already establishes every block is trivial. This is a short gap. No edit. |
| `rem-bass-guivarch-growth-degree-formula` | `confirmed_fatal` · dependency citation | The body used the source-backed record to discharge finite generation of lower-central quotients, but `external_dependency.exact_statement` recorded only the growth formula. The exact external statement now includes both the structural fact and the weighted-rank formula. |
| `rem-gromov-polynomial-growth-theorem` | `confirmed_fatal` · logic | The remark conflated the nilpotent corollary with the full virtually-nilpotent backward implication. It now states that the latter also needs the finite-index quasi-isometry argument. |
| `thm-block-systems-and-g-invariant-equivalence-relations-correspond` | `confirmed_fatal` · logic | A partition into blocks need not be invariant. The title, Statement, and proof now give the true correspondence between `G`-invariant partitions into blocks and invariant equivalence relations. |
| `thm-density-as-a-self-kan-extension-for-a-small-category` | `confirmed_fatal` · dependency citation | Objectwise density colimits did not by themselves establish the local Kan universal property. The proof now cites the assembly theorem and verifies that its forced arrow maps and unit are the identities. |
| `thm-free-groups-of-rank-at-least-two-have-exponential-growth` | `confirmed_fatal` · dependency citation | Equality of word length and reduced length did not state uniqueness of reduced representatives. The exact reduced-word free-group theorem and uniqueness of free groups now license distinctness of the counted words. |
| `thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups` | `confirmed_nonfatal` | Choose `c` as the maximum of the two quasi-inverse closeness constants. That single standard enlargement makes the fiber bound for `q` valid and closes in under 30 seconds. No edit. |
| `thm-kan-extensions-as-coends` | `confirmed_fatal` · logic | The cited weighted end/coend theorem requires functorial choices of powers and copowers. The Statement, Given data, and Fact L1 now carry that exact choice and naturality scope. |
| `thm-left-adjoints-preserve-left-kan-extensions` | `confirmed_nonfatal` | The two displayed transpose formulas are inverse by the triangle identities, giving uniqueness of adjuncts in a routine calculation. This is a sub-30-second gap. No edit. |
| `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` | `confirmed_nonfatal` | “The terminal category” conventionally denotes the one-object identity-only category, and the comma-category identification is immediate. The citation quirk is nonfatal. No edit. |
| `thm-svarc-milnor-lemma` | `confirmed_nonfatal` | The Given geometric action is isometric by `def-geometric-action-on-a-metric-space`; applying that definition supplies the displacement equality in step 1.3 immediately. No edit. |
| `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` | `confirmed_fatal` · dependency citation | Fact L2 quoted only the complement-decision consequence but step 2.1 used the converse characterization. L2 now states the full iff and the finite-union prime clause. |
| `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` | `confirmed_fatal` · dependency citation | The proof applied the fully faithful extension theorem to Yoneda without citing full faithfulness. New Fact L7 supplies the exact theorem before the application. |
| `thm-the-two-notions-of-pointwise-agree` | `confirmed_fatal` · logic | The converse misused the one-way comma construction theorem. It is now proved by identifying comma cones with `Nat(D(d,K-),E(e,F-))`, applying the preserved right-Kan universal property, and then covariant Yoneda. |

The resulting outcome set is 20 confirmed fatal defects, 15 confirmed nonfatal
proof gaps, and 3 false positives. These are outcomes, not a rejection-rate
claim.

## Changed items for targeted rejudge

- `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer`
- `def-dense-subcategory`
- `def-isometric-proper-and-cobounded-actions-on-metric-spaces`
- `def-polynomial-subexponential-exponential-and-intermediate-growth`
- `def-primitive-and-imprimitive-actions`
- `ex-a-kan-extension-computing-a-free-functor`
- `ex-imprimitive-wreath-product-block-system`
- `ex-induction-and-coinduction-of-group-representations`
- `fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular`
- `fs-iwasawas-criterion-needs-only-transitivity`
- `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz`
- `rem-bass-guivarch-growth-degree-formula`
- `rem-gromov-polynomial-growth-theorem`
- `thm-block-systems-and-g-invariant-equivalence-relations-correspond`
- `thm-density-as-a-self-kan-extension-for-a-small-category`
- `thm-free-groups-of-rank-at-least-two-have-exponential-growth`
- `thm-kan-extensions-as-coends`
- `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad`
- `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion`
- `thm-the-two-notions-of-pointwise-agree`

No materially rewritten item carried a `verification.judge` block. The repair
pass regenerated the affected entries in
`research/frontier-19-batch-1.proof-contracts.json` and
`research/frontier-19-batch-9.proof-contracts.json`, including consumers whose
quoted dependency clauses changed.

## Unlicensed Step-7 concerns

The following Step-7 concerns remain unedited because no exact current judge
rejection licenses their items. They are blockers for a targeted verdict or a
supervising-session decision, not silent repair authority:

- `prop-blocks-in-a-finite-transitive-action-have-equal-size` is false under
  the still-current definition of a block system as an arbitrary partition
  into blocks. The regular `C_4` partition `{{0,2},{1},{3}}` has unequal block
  sizes.
- `thm-svarc-milnor-lemma` uses `D` in its Statement without quantifying a
  coboundedness constant there. Its actual rejection concerned a short omitted
  isometricity invocation and was therefore adjudicated nonfatal; that cannot
  license this distinct Statement repair.
- `cor-finitely-generated-nilpotent-groups-have-polynomial-growth` and
  `ex-growth-degree-of-the-discrete-heisenberg-group` use their load-bearing
  Bass–Guivarch assertion as an unlinked `[A1]`; their batch contracts likewise
  omit that external citation.
- The surface repairs to `def-primitive-and-imprimitive-actions` and
  `thm-block-systems-and-g-invariant-equivalence-relations-correspond` expose
  stale fact wording in unlicensed consumers, notably
  `cor-transitive-actions-of-prime-degree-are-primitive`,
  `thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained`,
  and `prop-doubly-transitive-actions-are-primitive`. Their contract quotes were
  regenerated, but R1 forbids changing the item prose without their own fatal
  rejection.

## Gates and shared artifacts

- Exact adjudications: 38 rows appended to
  `research/frontier-19-judge-adjudications.jsonl`.
- Defect ledger: 20 matching fatal rows appended as
  `frontier-19-S8-a-001` through `frontier-19-S8-a-020`; the generated view was
  refreshed.
- `precheck`: all repaired proof-bearing items pass after canonical
  stratification.
- Both owning batch proof contracts pass `proof-contract --strict`.
- `citation-fidelity`: every recorded quote occurs in its cited item; the one
  reported `n≥2` candidate is a detector false positive because the cited
  Statement asserts normality for every natural `n` and restricts only its
  cardinality clause.
- `boundary-audit`: no template cluster or contradicted disposition.
- `content-policy`: 103 scoped items, no errors or warnings.
- `depcheck`, `fwdcheck`, and `extcheck`: clean hard-gate exits.
- `rendercheck`: all 20 repaired items parse under the renderer's YAML and
  KaTeX checks.
- `step8-scope check`: 0 open rejections and 0 cross-group alerts.
- `defect-ledger check`: 0 errors.
- `step8-guard`: every changed item in the shared Step-8 window is licensed by
  an exact confirmed-fatal adjudication or terminal receipt.

No cross-group finding was raised or answered, and no published item was
repaired or escalated by group a.
