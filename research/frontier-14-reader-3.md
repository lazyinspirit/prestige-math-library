# Frontier-14 batch 3 — Step 6a independent-reader report

Scope: all 86 items on the four pages in
`research/frontier-14-batch-3.pages.json`. I opened all 86 scoped item files and
all 91 additional distinct item files in their direct dependency lists, for 177
unique item files opened in total. I reconciled all 268 `[F#]`/`[A#]`/`[L#]`
obligations against the cited files on disk. The mechanical citation-fidelity
and boundary-audit passes reported no candidates; the semantic defects below
are therefore failures those detectors did not find.

## Findings

### R3-1 — `lem-countable-intersection-of-completely-metrizable-subspaces` — fatal

**Exact location:** title at `items/lem-countable-intersection-of-completely-metrizable-subspaces.md:4`; Fact [F3] at `:43`, used in proof step 1.1 at `:51`.

**Defect:** The title drops the Statement's Axiom of Countable Choice
hypothesis, and [F3] quotes only the opening words of that axiom while step 1.1
uses its selection clause.

**Evidence:** The cited definition's operative clause is: for every family
`(X_n)` of nonempty sets indexed by `N`, there is a function `f` with
`f(n) in X_n` for every `n`. [F3] says only “The Axiom of Countable Choice ...
is the following statement.” It therefore does not license selecting one
compatible complete metric for every `Y_n`. The title also asserts the result
without the hypothesis that the Statement and proof retain.

### R3-2 — `thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable` — fatal

**Exact location:** Statement at `items/thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable.md:33`; Facts [F1]/[F3] at `:39`/`:43`; proof steps 2.1-3.1 at `:51-53`.

**Defect:** The unconditional Statement is proved by [F3], whose cited theorem
explicitly assumes Countable Choice. In addition, [F1] is only the opening line
of the cited `G_delta` definition, although step 2.1 uses the omitted
countable-open-intersection clause.

**Evidence:** [F3]'s exact hypothesis is “Assume the Axiom of Countable
Choice.” The actual [F1] clause says that `A` is `G_delta` when there is a
sequence of open sets `(V_n)` with `A=intersection_n V_n`; [F1] stops before
that clause. Thus neither the choice use nor the `G_delta` expansion is licensed
by this item's stated inputs.

### R3-3 — `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` — fatal

**Exact location:** title at `items/thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta.md:4`; Facts [F2]/[F3] at `:41-43`; proof steps 2.1-3.1 at `:53-55`.

**Defect:** There are three independent failures. The title drops the
Statement's Dependent Choice hypothesis. [F2] and [F3] quote only the opening
words of the `G_delta` and DC definitions. Finally, the cover constructed in
step 2.1 is not strong enough to imply step 3.1.

**Evidence:** The cited DC clause requires a nonempty set, an entire relation,
a prescribed start `a`, and a sequence `x_0=a`, `x_n R x_{n+1}`; none of this
appears in [F3]. More substantively, step 2.1 asks only for ambient open sets
whose traces have small diameter in the chosen compatible complete metric. It
does not also impose small ambient-`d` diameter (or an equivalent overlap
condition). Hence membership of `x` in every union does not imply that the
chosen `y_n` converges to `x` in the ambient metric, which step 3.1 asserts.

### R3-4 — `thm-alexandrov-complete-metrizability-characterisation` — fatal

**Exact location:** title at `items/thm-alexandrov-complete-metrizability-characterisation.md:4`, versus the Statement at `:33`.

**Defect:** The title states Alexandrov's biconditional without qualification,
while the Statement and proof assume Dependent Choice.

**Evidence:** The Statement begins “Assume Dependent Choice.” The title omits
that hypothesis and therefore asserts more than the proved result.

### R3-5 — `cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces` — fatal

**Exact location:** title/Statement at `items/cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces.md:4` and `:33`; Fact [F2] and proof step 2.1 at `:41` and `:53`.

**Defect:** The title and Statement are unconditional, but the cited
Alexandrov theorem used for the `G_delta` case explicitly assumes Dependent
Choice.

**Evidence:** [F2] begins “Assume Dependent Choice.” No such hypothesis occurs
in this item, so the arbitrary-`G_delta` branch of the asserted trichotomy is
not licensed by its proof.

### R3-6 — `cor-completely-metrizable-spaces-are-baire` — nonfatal

**Exact location:** proof step 2.1 at `items/cor-completely-metrizable-spaces-are-baire.md:51`.

**Defect:** The step applies the complete-metric Baire theorem “to every
nonempty open subspace,” although restricting a complete metric to an open
subspace need not leave it complete.

**Evidence:** `(0,1)` with the restricted Euclidean metric is the standard
counterexample to that intermediate assertion. The result is repaired in well
under 30 seconds by applying [F2] directly to the whole nonempty space; hence
this is nonfatal rather than fatal.

### R3-7 — `lem-standard-complete-metric-on-a-countable-product` — fatal

**Exact location:** Facts [F1]-[F3] and proof steps 1.1-3.1 at `items/lem-standard-complete-metric-on-a-countable-product.md:39-55`.

**Defect:** [F1] reproduces only the product set and projections from
`def-product-topology`, but step 2.1 uses the omitted product-topology basis.
[F2] is only the opening line of the completeness definition, and [F3] is only
the opening setup of the series definition, while the three proof steps assert
the nontrivial metric, topology, convergence, and completeness arguments.

**Evidence:** The cited product clause actually says that the product topology
is generated by inverse images under projections and that finite-coordinate
boxes form a basis. None of that appears in [F1]. Thus “balls and
finite-coordinate basic neighbourhoods generate the same product topology” is
not licensed by the cited restatement.

### R3-8 — `thm-countable-products-of-completely-metrizable-spaces` — fatal

**Exact location:** Fact [F3] and proof step 1.1 at `items/thm-countable-products-of-completely-metrizable-spaces.md:43` and `:51`.

**Defect:** [F3] is only the opening sentence of Countable Choice, while step
1.1 uses it to select a compatible complete metric in every factor.

**Evidence:** The cited operative clause is the indexed nonempty-family choice
function clause quoted under R3-1. It is absent from [F3], so the selection is
not supported by the stated fact.

### R3-9 — `thm-hilbert-cube-universal-for-separable-metrizable-spaces` — fatal

**Exact location:** Fact [F3] and proof steps 4.1-5.1 at `items/thm-hilbert-cube-universal-for-separable-metrizable-spaces.md:43` and `:57-59`.

**Defect:** [F3] quotes only the product set and projections, but the proof uses
it to identify coordinate convergence and the induced topology with the
product topology.

**Evidence:** The source's load-bearing clause is the later finite-coordinate
basis description at `items/def-product-topology.md:89-109`; none of that text
is in [F3]. The embedding theorem is classically true, but this citation does
not license its topology step.

### R3-10 — `thm-polish-subspaces-are-exactly-g-delta-subspaces` — fatal

**Exact location:** Statement at `items/thm-polish-subspaces-are-exactly-g-delta-subspaces.md:33`; Fact [F2] and proof step 1.1 at `:41` and `:53`.

**Defect:** The Statement assumes only Countable Choice, whereas [F2], which is
used for the complete-metrizability biconditional, assumes Dependent Choice.

**Evidence:** `def-dependent-choice` explicitly records that the recursive
selection supplied by DC is not covered by `AC_omega`. The proof therefore
uses a strictly stronger hypothesis than the Statement supplies.

### R3-11 — `thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube` — fatal

**Exact location:** title at `items/thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube.md:4`; Statement at `:33`; Fact [F4] and proof steps 1.1/3.1 at `:45`, `:51`, and `:55`.

**Defect:** The title drops the Statement's Countable Choice hypothesis. The
proof additionally invokes [F4], whose exact hypothesis is the full Axiom of
Choice, while the Statement supplies only `AC_omega`.

**Evidence:** [F4] begins “Assume the Axiom of Choice.” Compactness is not
needed for the Polish conclusion and the citation could be removed in a
repair, but the present proof does make an unlicensed stronger-choice claim;
the false unconditional title is independently fatal.

### R3-12 — `cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish` — fatal

**Exact location:** title at `items/cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish.md:4`, versus the Statement at `:33`.

**Defect:** The title asserts both closure properties unconditionally, while
the Statement and every load-bearing fact assume Countable Choice.

**Evidence:** The Statement begins “Assume the Axiom of Countable Choice.” The
title omits that hypothesis and therefore asserts more than the proof gives.

### R3-13 — `thm-baire-sequence-space-is-polish` — fatal

**Exact location:** unconditional Statement at `items/thm-baire-sequence-space-is-polish.md:33`; Fact [F4] and proof step 3.1 at `:45` and `:55`.

**Defect:** Step 3.1 proves separability by invoking a countable-union theorem
whose exact hypothesis is Countable Choice, but the item assumes no choice
principle.

**Evidence:** [F4] begins “Assume the Axiom of Countable Choice.” An explicit
coding of eventually constant sequences could avoid that theorem, but the
written inference is conditional and its hypothesis is absent.

### R3-14 — `thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space` — fatal

**Exact location:** title/Statement at `items/thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space.md:4` and `:33`; Fact [F3] and proof step 3.1 at `:43` and `:57`.

**Defect:** The unconditional result is proved by explicitly invoking
Dependent Choice to select a nested branch. No DC hypothesis is stated, and
[F3] itself stops at the opening words of the DC definition.

**Evidence:** The actual cited clause requires a nonempty set, an entire
relation, a prescribed starting point, and a sequence following that relation.
Those quantifiers are absent from [F3], and the Statement supplies no DC.

### R3-15 — `lem-simple-continued-fraction-convergents-and-cylinders` — fatal

**Exact location:** Statement at `items/lem-simple-continued-fraction-convergents-and-cylinders.md:33`; proof steps 1.1-2.1 at `:53-55`; boundary rows at `research/frontier-14-batch-3.proof-contracts.json:2667-2682`.

**Defect:** The Statement is not well formed at its boundary indices and
conflates a code cylinder with a closed real interval. The proof contract's
generic “checked” rows do not resolve either defect.

**Evidence:** `p_n` and `q_n` are never defined and no initial values for
`p_{-2},p_{-1},q_{-2},q_{-1}` are supplied, although the recurrence and
determinant formula require them at the first indices. Moreover,
`def-simple-continued-fraction-coding` defines a cylinder as a set of codes in
`N^N`; its irrational image excludes the two rational finite-continued-fraction
endpoints. Step 2.1 instead calls the cylinders “closed,” so the Statement and
proof assert incompatible objects.

### R3-16 — `thm-simple-continued-fractions-parametrise-the-irrationals` — fatal

**Exact location:** Fact [F2] and proof step 2.1 at `items/thm-simple-continued-fractions-parametrise-the-irrationals.md:41` and `:55`.

**Defect:** The proof says nested intervals with vanishing diameter “exclude
rational endpoints,” but [F2] gives only recurrence, nesting, and vanishing
diameter; it contains no endpoint-exclusion clause.

**Evidence:** A nested sequence of closed continued-fraction intervals can
converge to a rational endpoint. Excluding those endpoints requires an
additional argument and, as written, [F2] is itself the defective R3-15 lemma.

### R3-17 — `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces` — fatal

**Exact location:** Statement at `items/lem-finite-refining-small-diameter-covers-of-compact-metric-spaces.md:33`.

**Defect:** The Statement demands a **finite** rooted tree with a nonempty level
for every `n in N`, because every node has a finite nonempty set of children.
Those requirements are inconsistent.

**Evidence:** Starting at the root, nonempty children inductively produce a
node at every level, so the union over all natural levels is infinite. The
intended property is “finitely branching” (and finite at each level), not a
finite tree.

### R3-18 — `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space` — fatal

**Exact location:** unconditional Statement at `items/thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space.md:33`; Fact [F1], Fact [F6], and proof steps 1.1/3.1 at `:39`, `:49`, `:55`, and `:59`.

**Defect:** The construction depends on the impossible “finite” infinite-level
tree from R3-17 and explicitly invokes Dependent Choice for surjectivity without
assuming it.

**Evidence:** [F6] is only the opening of the DC definition, while step 3.1
recursively selects a child containing a prescribed point. The Statement is
unconditional and therefore is not established by the written proof.

### R3-19 — `thm-cech-completeness-is-independent-of-compactification` — fatal

**Exact location:** title at `items/thm-cech-completeness-is-independent-of-compactification.md:4`; Statement at `:33`; Facts [F3]/[F4] and proof step 2.1 at `:43-45` and `:53`.

**Defect:** The title drops the ultrafilter-lemma hypothesis. More importantly,
the proof assumes existence of a Stone-Cech compactification under the
ultrafilter lemma alone, but neither cited fact supplies existence under that
hypothesis.

**Evidence:** [F3] is only the definition of a Stone-Cech compactification.
[F4] is uniqueness “under the hypotheses of”
`thm-stone-cech-evaluation-closure-universal-property`; that theorem's exact
Statement assumes both the ultrafilter lemma **and Dependent Choice**. Step 2.1
therefore uses an unavailable common dominator.

### R3-20 — `thm-frolik-internal-characterisation-of-cech-completeness` — fatal

**Exact location:** title at `items/thm-frolik-internal-characterisation-of-cech-completeness.md:4`; Statement at `:33`; proof step 1.1 and Fact [F4] at `:53` and `:45`.

**Defect:** The title omits the Statement's ultrafilter-lemma hypothesis. Step
1.1 also uses compact-Hausdorff regularity without a fact that states it.

**Evidence:** [F4], `thm-the-separation-implication-chain`, expressly gives
`Tychonoff => regular` and says it omits an additional classical arrow; it does
not state `compact Hausdorff => regular`. The needed published dependency is
`thm-a-compact-hausdorff-space-is-regular-and-normal`, whose Statement exactly
supplies regularity, but it is neither a fact nor a dependency here.

### R3-21 — `thm-completely-metrizable-spaces-are-cech-complete` — fatal

**Exact location:** title at `items/thm-completely-metrizable-spaces-are-cech-complete.md:4`, versus the Statement at `:33`.

**Defect:** The title is unconditional, while the Statement and proof assume
both the ultrafilter lemma and the full Axiom of Choice.

**Evidence:** Those two hypotheses are the opening words of the Statement. The
title therefore asserts more than the proof gives even if the body is otherwise
repaired.

### R3-22 — `thm-metrizable-cech-complete-spaces-are-completely-metrizable` — fatal

**Exact location:** title at `items/thm-metrizable-cech-complete-spaces-are-completely-metrizable.md:4`; Statement at `:33`; proof step 2.1 and Fact [F4] at `:55` and `:45`.

**Defect:** The title drops the ultrafilter-lemma hypothesis. Step 2.1 also
applies [F4]'s compactification theorem to the metric completion without any
fact establishing its required Tychonoff hypothesis.

**Evidence:** [F4] applies only “If `X` is Tychonoff.” [F3] establishes that the
completion is a metric space, not that metric spaces are Tychonoff. The
published result `thm-metric-spaces-are-tychonoff-and-perfectly-normal` is not a
fact or dependency of this item.

### R3-23 — `cor-metrizable-cech-complete-iff-completely-metrizable` — fatal

**Exact location:** unconditional title/Statement at `items/cor-metrizable-cech-complete-iff-completely-metrizable.md:4` and `:33`; Facts [F1]/[F2] at `:39-41`.

**Defect:** Both directions are asserted unconditionally, but [F1] assumes the
ultrafilter lemma and full Choice, while [F2] assumes the ultrafilter lemma.

**Evidence:** Proof step 2.1 simply combines those conditional implications; it
does not discharge or remove their hypotheses. The title and Statement are
therefore stronger than the proof.

### R3-24 — `cor-locally-compact-hausdorff-spaces-are-cech-complete` — fatal

**Exact location:** Statement and proof steps 1.1-3.1 at `items/cor-locally-compact-hausdorff-spaces-are-cech-complete.md:33` and `:49-53`.

**Defect:** Čech-completeness in [F1] is defined only for Tychonoff spaces, but
the proof establishes only a Hausdorff compactification and an open/`G_delta`
image. It never proves that the locally compact Hausdorff source is Tychonoff.

**Evidence:** The repository's exact theorem supplying that bridge is
`thm-a-locally-compact-hausdorff-space-is-completely-regular`, and it assumes
Dependent Choice. This item neither cites it nor assumes DC. [F3] is also only
the opening line, not the operative `G_delta` definition.

### R3-25 — `thm-cech-complete-spaces-are-baire` — fatal

**Exact location:** Facts [F2]/[F4] and proof steps 2.1-3.1 at `items/thm-cech-complete-spaces-are-baire.md:41-45` and `:55-57`.

**Defect:** [F2] quotes only the opening setup of Dependent Choice although step
3.1 uses its recursive-sequence clause. Separately, step 2.1 uses
compact-Hausdorff regularity, which [F4]'s separation chain does not state.

**Evidence:** The exact DC clause is the nonempty-entire-relation sequence
clause quoted under R3-3. The exact missing regularity clause is supplied by
`thm-a-compact-hausdorff-space-is-regular-and-normal`, not by [F4]. Both are
load-bearing for the nested-open-set construction.

### R3-26 — `prop-topological-sums-of-cech-complete-spaces` — fatal

**Exact location:** title at `items/prop-topological-sums-of-cech-complete-spaces.md:4`; Statement at `:33`; Fact [F4] and proof step 1.1 at `:45` and `:51`.

**Defect:** The title drops the Statement's full Choice hypothesis. [F4] is
also only “The Axiom of Choice is the following statement,” while step 1.1
selects compactification witnesses for an arbitrary family of summands.

**Evidence:** The cited operative clause is exactly “Every family of nonempty
sets has a choice function.” It is absent from [F4], so the selection is not
licensed by the fact as written.

### R3-27 — `thm-countable-products-of-cech-complete-spaces` — fatal

**Exact location:** title at `items/thm-countable-products-of-cech-complete-spaces.md:4`, versus the Statement at `:33` and Fact [F2] at `:41`.

**Defect:** The title says Countable Choice is sufficient, while the Statement
adds “the compactness principle used in Tychonoff's theorem” and the proof's
[F2] is the full-Choice version of Tychonoff.

**Evidence:** [F2] begins “Assume the Axiom of Choice.” Thus the title omits a
load-bearing hypothesis that the Statement and proof explicitly retain.

### R3-28 — `fs-every-baire-space-is-completely-metrizable` — fatal

**Exact location:** no choice hypotheses in the Statement/Given at `items/fs-every-baire-space-is-completely-metrizable.md:31-35`; Facts [F1], [F2], [F4] and refutation steps 1.1-3.1 at `:37-55`.

**Defect:** The counterexample proof uses Dependent Choice, full Choice, and
Countable Choice without assuming any of them.

**Evidence:** [F2]'s Tychonoff theorem assumes full AC to make the Cantor cube
compact; [F1] assumes DC to make the locally compact Hausdorff space Baire; and
[F4] assumes `AC_omega` to control the countable union of finite coordinate
sets. The Cantor-cube witness is valid under those classical hypotheses, and I
found no counterexample to the intended refutation, but the written proof does
not state the hypotheses on which it depends.

### R3-29 — `ex-hilbert-cube-as-a-compact-polish-universal-space` — fatal

**Exact location:** title/Example at `items/ex-hilbert-cube-as-a-compact-polish-universal-space.md:4` and `:31`; Fact [F3] and verification step 2.1 at `:41` and `:51`.

**Defect:** Compactness is asserted unconditionally, but its only proof is the
full-Choice Tychonoff theorem [F3], with no Choice hypothesis in the item.

**Evidence:** [F3] exactly begins “Assume the Axiom of Choice.” The weighted
metric and universality clauses do not supply compactness, so this Example
asserts more than its proof establishes.

### R3-30 — `cor-nowhere-differentiable-functions-are-residual-in-c01` — nonfatal

**Exact location:** proof step 2.1 at `items/cor-nowhere-differentiable-functions-are-residual-in-c01.md:51`.

**Defect:** The step proves that a residual set is contained in the set of
nowhere differentiable functions, then concludes the larger set is residual
without citing closure of meagre sets under subsets.

**Evidence:** The missing bridge is exactly
`prop-meagre-subsets-form-a-sigma-ideal`: the complement of the larger set is a
subset of the meagre complement of the residual subset. This is a sub-30-second
repair, so it is nonfatal.

### R3-31 — `fs-every-metrizable-space-is-cech-complete` — fatal

**Exact location:** no choice hypothesis in the Statement/Given at `items/fs-every-metrizable-space-is-cech-complete.md:31-35`; Fact [F2] and refutation step 2.1 at `:39` and `:51`.

**Defect:** The refutation says every Čech-complete space is Baire “under the
same stated Dependent Choice assumption,” but this item states no such
assumption.

**Evidence:** [F2] exactly begins “Assume Dependent Choice.” The rational-line
witness is the standard classical witness, but the inference excluding its
Čech-completeness is conditional and the condition is missing here.

### R3-32 — `ex-trivial-coverings-and-discrete-fibre-products` — polish

**Exact location:** Facts [F2]/[F3] and verification step 1.1 at `items/ex-trivial-coverings-and-discrete-fibre-products.md:39-47`.

**Defect:** [F2] quotes only the product set, not the product topology, and
[F3] stops before the discrete-topology clause, although step 1.1 uses both to
identify the open sheets `U x {f}`.

**Evidence:** The full cited definitions immediately supply the missing
clauses, and the product-cover computation is correct. This is a short
definitional repair, so it is polish.

### R3-33 — `prop-number-of-sheets-is-locally-constant` — polish

**Exact location:** Facts [F2]/[F3] and proof steps 1.1-2.1 at `items/prop-number-of-sheets-is-locally-constant.md:39-49`.

**Defect:** [F2] is only the opening line of `def-connected-space`, and [F3] is
only the opening line of `def-equinumerous`, although the proof uses the omitted
no-separation and exists-a-bijection clauses.

**Evidence:** The actual clauses are: connected means no partition into two
nonempty disjoint open sets, and `A approximately B` means there exists a
bijection `A -> B`. Quoting those clauses closes the otherwise correct proof
immediately.

### R3-34 — `thm-path-lifting-for-covering-maps` — fatal

**Exact location:** Facts [F2]/[F4] and proof step 1.1 at `items/thm-path-lifting-for-covering-maps.md:39-49`.

**Defect:** [F2]'s Lebesgue-number theorem requires a compact metric domain,
but no fact establishes that the unit interval is compact. [F4] is only the
opening line of the compactness definition and does not prove that hypothesis.

**Evidence:** `def-path-connected` identifies `I=[0,1]`; it does not state
Heine-Borel or interval compactness. The subdivision inference therefore uses
a nontrivial missing theorem, not an elementary algebra step.

### R3-35 — `thm-homotopy-lifting-for-covering-maps` — fatal

**Exact location:** Facts [F3]/[F5] and proof step 1.1 at `items/thm-homotopy-lifting-for-covering-maps.md:41-51`.

**Defect:** The local time-strip argument uses compactness of `I`, while [F5]
is only the opening line of the compactness definition and no fact proves the
interval compact. [F3] likewise gives only the product set, not the product
topology used for the strips.

**Evidence:** Pointwise path lifting [F2] does not by itself give continuity in
the `Y` variable. The standard finite-strip proof needs the missing compactness
and product-neighbourhood inputs.

### R3-36 — `cor-lifted-path-endpoints-depend-only-on-path-homotopy` — fatal

**Exact location:** Fact [F3] and proof step 2.1 at `items/cor-lifted-path-endpoints-depend-only-on-path-homotopy.md:41` and `:49`.

**Defect:** [F3] quotes only the opening line of `def-connected-space`, and no
fact establishes that the interval is connected. Step 2.1 uses both omitted
inputs to make a continuous map from the endpoint edge into a discrete fibre
constant.

**Evidence:** The actual connectedness definition is the no-separation clause
at `items/def-connected-space.md:42-45`; the connectedness of `[0,1]` is a
separate nontrivial result. Neither appears among this item's inputs.

### R3-37 — `thm-uniqueness-of-lifts-from-a-connected-space` — polish

**Exact location:** Fact [F2] and proof step 3.1 at `items/thm-uniqueness-of-lifts-from-a-connected-space.md:39` and `:51`.

**Defect:** [F2] is only the opening line of the connectedness definition, but
step 3.1 uses the omitted no-nontrivial-clopen-partition clause.

**Evidence:** The equaliser and its complement have already been proved open,
so inserting the exact definition clause closes the step immediately. The
result itself is correct.

### R3-38 — `thm-covering-space-lifting-criterion` — fatal

**Exact location:** Fact [F4] and proof step 1.1 at `items/thm-covering-space-lifting-criterion.md:43` and `:51`.

**Defect:** Step 1.1 claims necessity “by functoriality,” but [F4] cites a
definition that explicitly says the **next theorem** proves functoriality; the
definition does not assert it.

**Evidence:** The cited file's exact caveat is that
`thm-induced-fundamental-group-map-functoriality` proves representative
independence, the homomorphism property, and identity/composition laws. That
theorem is not a fact or dependency here, so [F4] is an insufficient citation
for the step.

### R3-39 — `prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback` — polish

**Exact location:** Fact [F3] and the finite-product part of proof step 1.1 at `items/prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback.md:41` and `:49`.

**Defect:** [F3] quotes only the product set and projections, while the proof
uses product-open neighbourhoods and products of sheets.

**Evidence:** The actual cited clause is the finite-coordinate basis at
`items/def-product-topology.md:89-109`. Adding that clause makes this routine
finite-product verification immediate; the Statement is otherwise correct.

### R3-40 — `prop-local-path-connectedness-lifts-and-descends-along-coverings` — polish

**Exact location:** Facts [F2]/[F3] and proof step 2.1 at `items/prop-local-path-connectedness-lifts-and-descends-along-coverings.md:39-49`.

**Defect:** [F2] stops before the definition of local path-connectedness, and
[F3] stops before the definition of homeomorphism, although step 2.1 uses both
omitted clauses.

**Evidence:** The exact source clauses are the open path-connected
neighbourhood-base condition and “continuous bijection with continuous
inverse.” Quoting them closes the two directions in under 30 seconds.

### R3-41 — `thm-universal-cover-uniqueness-and-dominating-property` — fatal

**Exact location:** Statement at `items/thm-universal-cover-uniqueness-and-dominating-property.md:31`; proof step 2.1 at `:51`.

**Defect:** [F2]'s lifting criterion produces a unique continuous lift over the
base, not a **covering map**. Step 2.1 silently upgrades the lift, and the proof
never proves local homeomorphism or surjectivity onto the connected target
covering.

**Evidence:** The exact [F2] conclusion is “A based lift exists ...; when it
exists it is unique.” It contains no covering-map conclusion. The Statement's
stronger map type is therefore not established; because this is Statement
overreach, the 30-second rule does not downgrade it.

### R3-42 — `thm-sheets-equal-fundamental-group-index` — fatal

**Exact location:** title/Statement at `items/thm-sheets-equal-fundamental-group-index.md:4` and `:31`; Facts [F4]/[F5] and proof steps 3.1/5.1 at `:43-45`, `:55`, and `:59`.

**Defect:** The title and Statement call the sets `H[alpha]` “left cosets,” but
the cited library definition calls `gH` left cosets and `Hg` right cosets.

**Evidence:** [F4]'s exact clause is `gH` = left coset and `Hg` = right coset.
Step 3.1 obtains `H[alpha]`, hence right cosets. [F5] quotes only the left-coset
definition of index and omits the cited source's later clause that left and
right coset sets are equinumerous. Thus the title is false in the repository's
own convention and step 5.1 lacks its needed bridge.

### R3-43 — `thm-compactness-is-invariant-under-finite-sheeted-coverings` — nonfatal

**Exact location:** Fact [F2] and proof steps 2.1-3.1 at `items/thm-compactness-is-invariant-under-finite-sheeted-coverings.md:39` and `:49-51`.

**Defect:** [F2] quotes only the opening line of compactness, and step 2.1 says
to choose a suitable neighbourhood “over each basepoint,” which literally
makes an arbitrary-family selection without a choice hypothesis.

**Evidence:** Both issues have a short repair: quote the finite-subcover clause
and take the family of **all** suitable base neighbourhoods rather than choosing
one for each point. Compactness then extracts finitely many. The theorem is
correct, so this is nonfatal under the 30-second rule.

### R3-44 — `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` — nonfatal

**Exact location:** proof step 4.1 at `items/thm-deck-group-of-a-universal-cover-is-the-fundamental-group.md:57`.

**Defect:** “Freeness gives injectivity” uses freeness of the deck-group action,
which only says a deck transformation is determined by its value at one point.
It does not show that two loop classes with the same lifted endpoint are equal.

**Evidence:** The missing bridge is that the stabiliser of the fibre point is
`p_* pi_1(tilde B)`, which is trivial because the universal cover is simply
connected (using covering-map injectivity on fundamental groups). An expert
can insert this in under 30 seconds, so the gap is nonfatal.

### R3-45 — `ex-pullback-over-an-evenly-covered-open-set-is-trivial` — polish

**Exact location:** verification step 1.1 at `items/ex-pullback-over-an-evenly-covered-open-set-is-trivial.md:47`.

**Defect and evidence:** The Example and Given use an inclusion `U -> B`, but
step 1.1 writes `U -> X`. No `X` is in scope there. Replacing `X` by `B` fixes
the notation; the pullback computation is correct.

### R3-46 — `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space` — nonfatal

**Exact location:** `one` boundary row at `research/frontier-14-batch-3.proof-contracts.json:3235`.

**Defect:** The row says the singleton/one case is checked by step 4.1, but its
quoted evidence addresses only why a nonempty domain cannot surject onto the
empty target.

**Evidence:** Empty target and singleton target are different boundary axes.
The singleton case is easy and the item can handle it, but this row does not
record that check.

### R3-47 — `thm-countable-products-of-cech-complete-spaces` — nonfatal

**Exact location:** `one` boundary row at `research/frontier-14-batch-3.proof-contracts.json:4772`.

**Defect:** The row marks the one-factor case `not_applicable` even though the
item's own Statement and construction explicitly concern products and the
one-factor product is a live boundary.

**Evidence:** For one factor the product and compactification should reduce to
that factor and its selected witness. The row's generic claim that “one-factor
... cases do not arise” is false; the underlying result is unaffected.

## Checks with no finding

- All 86 scoped mathematical-content items contain both
  `provenance.statement` and `provenance.proof`. The split is 15
  `literature-derived`/`not-applicable`, 68
  `literature-derived`/`ai-altered`, and 3
  `ai-altered`/`ai-altered`. No scoped Statement is `ai-generated`, so there is
  no load-bearing AI-generated Statement.
- I separately tested the three `ai-altered` Statements. The distance-coordinate
  Hilbert-cube embedding is injective and topologically initial as claimed; the
  two-interval surjective-local-homeomorphism counterexample has the advertised
  fibre jump and is not a covering; and the Cantor-cube witness refutes “every
  Baire space is completely metrizable” under the classical choice hypotheses
  its proof uses. I found no counterexample to those intended targets; R3-9 and
  R3-28 concern their written citations/hypotheses.
- The two A-page summaries each have exactly two nonempty prose paragraphs and
  make no separate claim beyond their page contents. Both B pages have no
  authored body, as required.

## Per-page verdicts

- **`complete-metrizability-and-baire` — 40/40 items opened; not ready.**
  Fatal defects are R3-1 through R3-5, R3-7 through R3-27, with R3-6 nonfatal
  and R3-46/R3-47 inaccurate boundary records. The fatal set includes false
  choice-free titles, missing choice hypotheses, incomplete fact clauses,
  invalid continued-fraction and refining-tree Statements, and missing
  compact-Hausdorff regularity/Stone-Cech inputs. I found no additional defect
  in the remaining scoped items on this page.

- **`complete-metrizability-and-baire-examples` — 6/6 items opened; not ready.**
  R3-28, R3-29, and R3-31 are fatal choice-hypothesis failures; R3-30 is a
  nonfatal short bridge. The rational-line false statement was clean on this
  read. The Baire-space/irrational example has no separate local defect, but its
  verification depends on the R3-15/R3-16 continued-fraction chain.

- **`covering-spaces-and-lifting` — 32/32 items opened; not ready.** R3-34
  through R3-36, R3-38, R3-41, and R3-42 are fatal. R3-33, R3-37, R3-39, and
  R3-40 are definitional citation polish; R3-43 and R3-44 are nonfatal proof
  gaps. I found no further defect in the remaining items on this page.

- **`covering-spaces-and-lifting-examples` — 8/8 items opened; no fatal local
  mathematical defect found.** R3-45 is a notation-only polish finding. The
  surjective-local-homeomorphism witness, variable-sheet witness, quotient
  covering computations, power-map fibres, unit-loop argument, and Hawaiian
  earring obstruction were otherwise correct on this read. R3-32 belongs to
  this page and is also polish.

**Counts:** 86/86 scoped items opened; 91 additional direct dependency targets
opened; 177 unique item files opened. Findings: **35 fatal, 6 nonfatal, 6
polish**.
