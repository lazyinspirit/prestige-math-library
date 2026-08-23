# Frontier 17, batch 6 — Beta-6 scaffold notes

## Scope, artifact protocol, and plan drift

This batch owns `outer-measure-and-the-caratheodory-extension-theorem` at order 288.005 and its B companion at order 288.006. The A page has 35 items and the B page has 8. The A page is below the binding 60-item ceiling, so no split is proposed.

The four namespaced artifacts are this file, `research/frontier-17-batch-6.pages.json`, `research/frontier-17-batch-6.proof-contracts.json`, and the separately mandatory `research/frontier-17-batch-6.coverage.json`. The dispatch's three-file list accidentally omits the coverage artifact that the same dispatch and `QUALITY-CONTROLS.md` require and gate. I followed the canonical-coverage requirement, as the most recently completed batch-1 notes did for the same prompt defect, and wrote no non-namespaced file.

### Design/spec drift held for the engine

The MT-3 design says exactly:

```text
`requires`: MT-1, MT-2, `series-and-nonnegative-tests`,
`suprema-and-infima`, `metric-spaces`
```

The current plan spec and dispatched skeleton say exactly:

```json
"requires": [
  "measures-and-their-basic-properties-examples"
]
```

I did not choose between them. The manifest retains the spec value exactly. Its item dependencies use the published content from MT-1, MT-2, nonnegative series, generated sigma-algebras, completions, and metric spaces that the mathematics actually needs. Stage 1's drift unit must adjudicate the direct-page-edge discrepancy.

`SCHEMA.md` §6 still describes a 100-item review ceiling, while `CLAUDE.md`, this dispatch, and the current workflow enforce 60. This pair stays below both and makes no normative-document edit.

## Findings for Step-3 Alpha, in severity order

### B6-1 — approve the explicit countable-choice ledger

The prose design states the covering-cost construction and abstract extension without a choice hypothesis. In this library, countable subadditivity of the covering infimum requires selecting one near-minimizing cover for each member of a countable family, and regular hull construction requires selecting one near-minimizing cover for each reciprocal error. The scaffold therefore states countable choice on `thm-covering-cost-construction-produces-an-outer-measure`, `cor-premeasure-induced-set-function-is-an-outer-measure`, `thm-caratheodory-extension-theorem`, `thm-premeasure-induced-outer-measure-is-regular`, the regular-outer-measure continuity theorem, and the completion identification. If declined, those Statements contradict the choice ledger already enforced by `def-countable-choice` and by the published countable-union results.

### B6-2 — approve the noncircular regularity proof

A measurable hull means a Carathéodory measurable superset of equal outer measure, and regularity means every subset has one. Continuity from below for arbitrary subsets is proved by selecting hulls \(H_n\) and replacing them with the increasing tail intersections \(G_n=\bigcap_{k\ge n}H_k\). The tempting replacement \(H_n\cup H_{n-1}\) is invalid: equality \(\mu^*(H_n)=\mu^*(E_n)<\infty\) does not imply \(H_n\setminus E_n\) is null when \(E_n\) is not measurable. If this recommendation is declined, the page is likely to ship exactly that false subtraction argument.

### B6-3 — approve Folland's comparison and Tao's algebra-approximation characterization

The prose scaffold names extension and uniqueness but omits two source results inside the harvested range: every competing extension is bounded above by the Carathéodory extension and agrees on finite-measure sets, and finite Carathéodory measurable sets are exactly those approximable in induced outer measure by source-algebra sets. Both close from the existing machinery and materially explain uniqueness and completion. If declined, the coverage file would need unjustified declines of results central to the same theorem, and the completion proof would lose its clean approximation seam.

### B6-4 — approve the two-point nonregular outer-measure counterexample

Folland Exercise 20(c) asks for this witness. The scaffold uses values \(0,1,1,3/2\) on the four subsets of a two-point set; exhaustive checking proves it is an outer measure, neither singleton is measurable, and neither has a same-value measurable hull. If declined, regularity appears only as a positive hypothesis, with the source's explicit failure mode silently omitted.

### B6-5 — acknowledge the design/spec prerequisite drift without editing either side here

The design has five direct prerequisite labels and the plan spec has one direct prerequisite page. This batch uses the spec unchanged, as the dispatch requires. If Alpha silently rewrites the manifest instead of leaving the decision to the drift unit, different batches can be built against inconsistent plan versions.

### B6-6 — record the stale published scope denial for later owner/lead handling

`items/rem-lebesgue-measure-and-integral.md` says, verbatim, “This library does not prove any of it” and “The whole measure track is deferred.” Those scope claims are already false because `sigma-algebras-and-borel-sets` and `measures-and-their-basic-properties` are published, and this run will make them still more false. The remark is not a load-bearing dependency of this batch, so the narrow published-dependency-repair licence does not authorize Beta-6 to edit it. If no later owner/lead action retires or narrows the remark, public prose will contradict published disk state.

## Applyable amendments to `plan-measure-theory-track.md`

### Amendment MT3-1 — make measurable hulls and regularity one settled convention

Recommendation: approve.

Target: MT-3 `**DEFS.**`.

Exact old text:

```text
a **regular** outer measure; a **measurable hull**; a **metric outer measure** on a
metric space (additive on positively separated pairs).
```

Exact new text:

```text
a **measurable hull** of \(E\), meaning a Carathéodory measurable
\(H\supseteq E\) with \(\mu^*(H)=\mu^*(E)\); a **regular outer measure**, meaning
one for which every subset has a measurable hull; and a **metric outer measure**
on a metric space, additive on positively separated nonempty pairs, with the
empty-set cases supplied by \(\mu^*(\varnothing)=0\).
```

Without this edit, “a regular outer measure has measurable hulls” reads as a theorem while the design never states which of the competing regularity conventions it chose.

### Amendment MT3-2 — expose the choice cost and the safe continuity proof

Recommendation: approve.

Target: MT-3 `**THMS.**`, the sentence beginning “A regular outer measure”.

Exact old text:

```text
A regular outer measure has measurable hulls, and for a regular \(\mu^*\) continuity from below holds
on **all** subsets, not merely measurable ones (a genuinely useful and often-omitted
theorem, used by MT-17).
```

Exact new text:

```text
Assuming countable choice, a regular outer measure is continuous from below on
all subsets, not merely measurable ones. For \(E_n\uparrow E\), choose measurable
hulls \(H_n\) and use the increasing measurable hulls
\(G_n:=\bigcap_{k\ge n}H_k\); do not infer that \(H_n\setminus E_n\) is null
unless \(E_n\) is measurable.
```

### Amendment MT3-3 — add the choice hypothesis to covering and extension existence

Recommendation: approve.

Target: MT-3 `**THMS.**`, the extension paragraph.

Exact old text:

```text
**The extension theorem** (**landmark**, well-definedness #6): for a premeasure
\(\mu_0\) on an algebra \(\mathcal{A}_0\), the induced \(\mu^*\) is an outer
measure, every \(A\in\mathcal{A}_0\) is measurable, and
\(\mu^*\!\restriction\!\mathcal{A}_0=\mu_0\) — the last clause is where countable
additivity of \(\mu_0\) is consumed and it is a separate item.
```

Exact new text:

```text
**The extension theorem** (**landmark**, well-definedness #6), assuming
countable choice: the countable-covering-cost construction is first proved in
generality to produce an outer measure; for a premeasure \(\mu_0\) on an algebra
\(\mathcal{A}_0\), every \(A\in\mathcal{A}_0\) is measurable and
\(\mu^*\!\restriction\!\mathcal{A}_0=\mu_0\). The agreement clause is a separate
item: an arbitrary algebra cover is disjointified inside \(A\), and this is
exactly where countable additivity of \(\mu_0\), rather than finite additivity,
is consumed.
```

### Amendment MT3-4 — retain the source's comparison and approximation results

Recommendation: approve.

Target: MT-3 `**THMS.**`, immediately after the extension-theorem sentence.

Exact old text:

```text
**Uniqueness**: if \(\mu_0\) is \(\sigma\)-finite then the extension to
\(\sigma(\mathcal{A}_0)\) is unique (via MT-2's uniqueness theorem), and
\(\mu^*\) restricted to the Carathéodory \(\sigma\)-algebra is the completion of
that extension.
```

Exact new text:

```text
Every other extension \(\nu\) to \(\sigma(\mathcal A_0)\) satisfies
\(\nu(E)\le\mu^*(E)\), with equality whenever \(\mu^*(E)<\infty\). A set \(E\)
of finite induced outer measure is Carathéodory measurable exactly when, for
every \(\varepsilon>0\), some \(A\in\mathcal A_0\) satisfies
\(\mu^*(E\mathbin{\triangle}A)<\varepsilon\). **Uniqueness**: if \(\mu_0\) is
\(\sigma\)-finite then the extension to \(\sigma(\mathcal{A}_0)\) is unique via
MT-2's uniqueness theorem, and, assuming countable choice, the full
Carathéodory restriction is the completion of that extension.
```

### Amendment MT3-5 — add the harvested nonregular witness to the B page

Recommendation: approve.

Target: MT-3 `**B page.**`, after the three-point counterexample.

Exact old text:

```text
*Counterexamples*: an outer measure with a non-measurable set (the two-point
example above, or \(\mu^*\) on a three-point set);
```

Exact new text:

```text
*Counterexamples*: an outer measure with a non-measurable set, using the
three-point values \(0,1,2\); a nonregular outer measure on two points with
singleton value \(1\) and whole-space value \(3/2\);
```

## Planned A-page summary for Step 5

Measures and Their Basic Properties supplies measures, complete measure spaces, continuity from below, completions, and uniqueness on a sigma-finite generating pi-system. Sigma Algebras and Borel Sets supplies algebras, generated sigma-algebras, and the Borel sigma-algebra. Nonnegative extended series and their Tonelli theorem license countable covering costs, while Metric Spaces supplies set distance and the metric topology.

An outer measure is defined on every subset and becomes a complete measure on its Carathéodory measurable sets. Covering costs turn a premeasure on an algebra into an outer measure, agreement on the algebra yields the extension theorem, and sigma-finiteness gives uniqueness and identifies the full Carathéodory domain with the completion. Regular outer measures admit continuity from below on arbitrary subsets, while metric outer measures make every Borel set measurable.

## Web research and canonical-coverage ledger

- Gerald B. Folland, *Real Analysis*, 2nd ed., Section 1.4, printed pp. 28–33, and Section 11.2 through Proposition 11.16: `https://djvu.online/file/NPF4BEtSuqdFA`. This supports outer measures, the general covering construction, Carathéodory's theorem and its decomposition, premeasures, extension comparison and uniqueness, measurable hulls/completion, the nonunique-extension and nonregular witnesses, metric outer measures, and the boundary-layer proof of Borel measurability.
- Terence Tao, *An Introduction to Measure Theory*, Sections 1.7.1–1.7.2, printed pp. 179–189: `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`. This independently supports the outer-measure and Carathéodory definitions, completeness, premeasures, Hahn–Kolmogorov extension, the necessity of sigma-finiteness for uniqueness, generated measurable hulls, and approximation by the source algebra.
- Convention disagreement: Tao calls an algebra a Boolean algebra and calls the premeasure extension the Hahn–Kolmogorov theorem; Folland and this library use “algebra” and separate Carathéodory's outer-measure theorem from the premeasure extension theorem. The scaffold follows the design's algebra convention and uses distinct ids for the two theorems.
- Choice convention: both sources work in ordinary mathematics with choice available; this library exposes the exact \(\mathrm{AC}_\omega\) expenditure. That is an adaptation, not a claim that the sources state the ZF separation.
- Regularity convention: the scaffold fixes “regular” to mean that every subset has a Carathéodory measurable hull of equal outer measure. It does not confuse this abstract notion with inner/outer regularity of a Borel measure on a topological space.
- The coverage file contains the source's own named headings across the exact ranges read, not a topic summary. Its deferred destinations were opened in `research/plan-spec.json`: `lebesgue-measure-on-euclidean-space` and `hausdorff-measure-and-hausdorff-dimension`.

Mechanical source results:

- `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-6.coverage.json --stamp`: 2/2 fetch-verified, 0 newly stamped, exit 0. The stamps are the durable hashes already established for the identical full-text URLs in frontier-16.
- `node tools/coverage-checklist.mjs research/frontier-17-batch-6.coverage.json --require-destination`: 1 page, 50 harvested results, 0 errors, 0 warnings.

+## Planned component provenance and Step-5 source rationale

Every mathematical-content item has an expected component label below. “Folland” and “Tao” refer to the full-text URLs in the source ledger. An ai-altered proof follows a named literature route but is decomposed or rewritten for phase format; an ai-generated proof is a locally written verification and does not alter the Statement label.

### A page

- def-outer-measure — statement literature-derived; proof not-applicable. The clauses follow Folland §1.4 and Tao Definition 1.7.1, with zero-based indices.
- def-caratheodory-measurable-set — statement literature-derived; proof not-applicable. The universal test-set identity is Folland §1.4 and Tao Definition 1.7.2.
- rem-caratheodory-measurability-versus-differentiability — statement ai-altered; proof not-applicable. It juxtaposes two exact published Statements to resolve the name collision.
- lem-caratheodory-subadditive-inequality-is-automatic — statement ai-altered; proof ai-altered. Folland's observation immediately before Theorem 1.11 is promoted to the focused reusable lemma.
- prop-caratheodory-measurable-sets-form-an-algebra — statement ai-altered; proof ai-altered. This is the first subclaim in Folland Theorem 1.11 and Tao Theorem 1.7.3.
- lem-finite-caratheodory-splitting — statement ai-altered; proof ai-altered. It isolates the finite induction carried inside both source proofs.
- thm-countable-disjoint-caratheodory-splitting — statement literature-derived; proof ai-altered. The exact test-set formula is Folland Exercise 17 and occurs in Tao's proof.
- prop-outer-null-sets-are-caratheodory-measurable — statement literature-derived; proof ai-altered. Tao Exercise 1.7.1 supplies the claim; the hereditary clause is the same monotonicity argument.
- thm-caratheodory-outer-measure-theorem — statement literature-derived; proof ai-altered. This is Folland Theorem 1.11 and Tao Theorem 1.7.3, delegated to the focused earlier items.
- fs-every-subset-is-caratheodory-measurable — statement literature-derived; proof ai-generated. The false universal contrast is source-backed; its two-point refutation is local.
- fs-outer-measures-are-countably-additive-on-power-sets — statement literature-derived; proof ai-generated. Both sources contrast subadditivity with additivity; the finite refutation is local.
- def-regular-outer-measure-and-measurable-hull — statement literature-derived; proof not-applicable. The convention follows Folland Exercises 18 and 20 and is kept distinct from regular Borel measures.
- thm-regular-outer-measures-are-continuous-from-below — statement ai-altered; proof ai-altered. It combines measurable-hull regularity with measure continuity, exposes countable choice, and uses safe tail intersections.
- thm-covering-cost-construction-produces-an-outer-measure — statement literature-derived; proof ai-altered. This is Folland Proposition 1.10 with the choice cost and zero-based errors exposed.
- def-premeasure-on-an-algebra — statement literature-derived; proof not-applicable. It follows Folland §1.4 and Tao Definition 1.7.7 and includes finite and sigma-finite premeasures.
- def-outer-measure-induced-by-a-premeasure — statement literature-derived; proof not-applicable. This is Folland formula (1.12) and Tao's Theorem 1.7.8 construction.
- cor-premeasure-induced-set-function-is-an-outer-measure — statement literature-derived; proof ai-altered. It is Folland Proposition 1.10 specialized exactly as the following source paragraph does.
- lem-disjointification-of-an-algebra-cover — statement ai-altered; proof ai-altered. It isolates least-index disjointification from Folland Proposition 1.13(a).
- lem-induced-outer-measure-agrees-with-premeasure — statement literature-derived; proof ai-altered. This is Folland Proposition 1.13(a), with its exact countable-additivity expenditure exposed.
- lem-source-algebra-is-caratheodory-measurable — statement literature-derived; proof ai-altered. This is Folland Proposition 1.13(b) and Tao's corresponding extension step.
- thm-caratheodory-extension-theorem — statement literature-derived; proof ai-altered. This is Folland Theorem 1.14 and Tao Theorem 1.7.8.
- thm-premeasure-induced-outer-measure-is-regular — statement ai-altered; proof ai-altered. It packages Folland Exercises 18(a) and 20(b), adds countable choice, and records hulls in the generated sigma-algebra.
- thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation — statement literature-derived; proof ai-altered. Tao Exercise 1.7.9(ii–iii) gives both directions.
- prop-caratheodory-extension-compares-with-other-extensions — statement literature-derived; proof ai-altered. This is the comparison and finite-equality clause of Folland Theorem 1.14.
- thm-sigma-finite-premeasure-extension-is-unique — statement literature-derived; proof ai-altered. Folland Theorem 1.14 and Tao Exercise 1.7.7 support it; the proof uses MT-2's published pi-system theorem.
- cor-finite-premeasure-extension-is-unique — statement literature-derived; proof ai-generated. It is the immediate finite special case using the constant whole-space exhaustion.
- lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls — statement literature-derived; proof ai-altered. Folland Exercise 18(c) and Tao Exercise 1.7.9(i) supply the conclusion.
- thm-caratheodory-domain-is-the-completion-under-sigma-finiteness — statement literature-derived; proof ai-altered. This is Folland Exercise 22(a), routed through the published completion theorem.
- fs-finitely-additive-functions-on-algebras-always-extend — statement literature-derived; proof ai-altered. Tao §1.7.2 and Exercise 1.7.6 supply the obstruction.
- fs-premeasure-extensions-are-always-unique — statement literature-derived; proof ai-altered. Tao Exercise 1.7.8 and Folland Exercise 23 supply the interval witness.
- fs-induced-outer-measures-always-agree-with-finitely-additive-data — statement literature-derived; proof ai-altered. It is the failed weakening behind Tao Exercises 1.7.4(iii) and 1.7.6.
- def-metric-outer-measure — statement literature-derived; proof not-applicable. It follows Folland §11.2 and respects the library's nonempty set-distance convention.
- lem-metric-outer-measure-boundary-layer-continuity — statement ai-altered; proof ai-altered. It isolates the alternating-annulus argument inside Folland Proposition 11.16.
- prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures — statement ai-altered; proof ai-altered. It is the closed-set subclaim in Folland Proposition 11.16.
- thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures — statement literature-derived; proof ai-altered. This is Folland Proposition 11.16 with the boundary-layer work delegated.

### B page

- ex-zero-one-outer-measure-on-a-two-point-set — statement ai-generated; proof ai-generated; generation role example. The design requests the exact computed witness, but neither harvested backing source states this construction.
- ex-counting-outer-measure — statement literature-derived; proof ai-altered. It is the published counting measure viewed through the source outer-measure definitions.
- ex-counting-premeasure-on-the-finite-cofinite-algebra — statement ai-altered; proof ai-generated. It adapts source-backed counting measure and premeasure machinery to the design's algebra.
- ex-counting-outer-measure-is-metric-on-the-real-line — statement ai-altered; proof ai-generated. It combines Folland's metric definition with source-backed counting measure.
- cex-three-point-outer-measure-has-only-trivial-caratheodory-sets — statement ai-generated; proof ai-generated; generation role counterexample. The exact finite construction is locally selected from the design's requested pattern.
- cex-finite-cofinite-set-function-is-not-a-premeasure — statement literature-derived; proof ai-altered. Tao Exercises 1.7.4(iii) and 1.7.6 support it.
- cex-nonsigma-finite-premeasure-has-distinct-extensions — statement literature-derived; proof ai-altered. Tao Exercise 1.7.8 and Folland Exercise 23 supply it.
- cex-two-point-outer-measure-need-not-be-regular — statement ai-generated; proof ai-generated; generation role counterexample. Folland Exercise 20(c) requests a witness, while the exact values \(1,1,3/2\) are locally chosen.

+### Step-5 source-reference URL assignment

- Use Folland's full-text URL, https://djvu.online/file/NPF4BEtSuqdFA, on every literature-derived or ai-altered outer-measure, Carathéodory, premeasure, extension, regularity, completion, metric-criterion, and nonunique-extension component above.
- Add Tao's official full-text URL, https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf, on the abstract outer-measure theorem, premeasure definition, extension theorem, sigma-finite uniqueness, generated-hull, algebra-approximation, and finite/cofinite non-premeasure items.
- The disambiguation remark uses the Folland URL for the measure-theory meaning and links the already published thm-caratheodory-characterisation for the differentiability meaning; it introduces no additional unverified external URL.
- The generated two-point example and the two generated finite counterexamples must not acquire fabricated literature references. Their generated provenance, explicit generation blocks, finite exhaustive verifications, and dependencies disclose their actual origin.

### Generated-claim truth-risk obligations

The generated items are non-load-bearing and no item lists them in deps. Step 5 must give each the matching generation block.

- For ex-zero-one-outer-measure-on-a-two-point-set, exhaust all subsets and union types and verify each singleton fails against the whole space.
- For cex-three-point-outer-measure-has-only-trivial-caratheodory-sets, exhaust union types and verify the crossing two-point test for every nonempty proper subset. Testing only against the whole space is deliberately insufficient.
- For cex-two-point-outer-measure-need-not-be-regular, exhaust all subsets, verify \(3/2\le1+1\), classify the measurable sets, and check that the only measurable singleton superset has the wrong value.

These exhaustive finite checks are the required counterexample searches. None matches a registered finite-smoke check type, so the empty finite_smoke arrays are honest and are not evidence for the claims. There is no external fallback.

+## Per-page item list

### outer-measure-and-the-caratheodory-extension-theorem — 35 items

1. def-outer-measure — definition — Outer measures
2. def-caratheodory-measurable-set — definition — Carathéodory measurable sets
3. rem-caratheodory-measurability-versus-differentiability — remark — Carathéodory measurability is not Carathéodory's differentiability criterion
4. lem-caratheodory-subadditive-inequality-is-automatic — lemma — In the Carathéodory identity, the subadditive inequality is automatic
5. prop-caratheodory-measurable-sets-form-an-algebra — proposition — Carathéodory measurable sets form an algebra
6. lem-finite-caratheodory-splitting — lemma — Outer measure splits exactly over finite Carathéodory-measurable partitions
7. thm-countable-disjoint-caratheodory-splitting — theorem — Countable disjoint unions of Carathéodory measurable sets are measurable and split every test set
8. prop-outer-null-sets-are-caratheodory-measurable — proposition — Every outer-null set is Carathéodory measurable
9. thm-caratheodory-outer-measure-theorem — theorem — Carathéodory's theorem: measurable sets form a sigma-algebra carrying a complete measure
10. fs-every-subset-is-caratheodory-measurable — false-statement — FALSE: every subset is Carathéodory measurable for every outer measure
11. fs-outer-measures-are-countably-additive-on-power-sets — false-statement — FALSE: every outer measure is countably additive on the whole power set
12. def-regular-outer-measure-and-measurable-hull — definition — Measurable hulls and regular outer measures
13. thm-regular-outer-measures-are-continuous-from-below — theorem — Assuming countable choice, regular outer measures are continuous from below on all subsets
14. thm-covering-cost-construction-produces-an-outer-measure — theorem — Assuming countable choice, countable covering costs define an outer measure
15. def-premeasure-on-an-algebra — definition — Premeasures on algebras of sets
16. def-outer-measure-induced-by-a-premeasure — definition — The outer set function induced by a premeasure
17. cor-premeasure-induced-set-function-is-an-outer-measure — corollary — Assuming countable choice, the outer set function induced by a premeasure is an outer measure
18. lem-disjointification-of-an-algebra-cover — lemma — A countable algebra cover disjointifies inside the covered algebra set
19. lem-induced-outer-measure-agrees-with-premeasure — lemma — The induced outer measure agrees with the premeasure on the source algebra
20. lem-source-algebra-is-caratheodory-measurable — lemma — Every source-algebra set is measurable for the induced outer measure
21. thm-caratheodory-extension-theorem — theorem — Assuming countable choice, a premeasure extends through its induced outer measure
22. thm-premeasure-induced-outer-measure-is-regular — theorem — Assuming countable choice, a premeasure-induced outer measure is regular with generated measurable hulls
23. thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation — theorem — Among sets of finite outer measure, Carathéodory measurability is equivalent to source-algebra approximation
24. prop-caratheodory-extension-compares-with-other-extensions — proposition — The Carathéodory extension dominates every other extension and agrees with it on finite-measure sets
25. thm-sigma-finite-premeasure-extension-is-unique — theorem — A sigma-finite premeasure has at most one extension to its generated sigma-algebra
26. cor-finite-premeasure-extension-is-unique — corollary — A finite premeasure has at most one extension to its generated sigma-algebra
27. lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls — lemma — Under sigma-finiteness, every Carathéodory measurable set differs from a generated measurable hull by a null set
28. thm-caratheodory-domain-is-the-completion-under-sigma-finiteness — theorem — Assuming countable choice, the Carathéodory domain is the completion of the sigma-finite extension
29. fs-finitely-additive-functions-on-algebras-always-extend — false-statement — FALSE: every finitely additive nonnegative function on an algebra extends to a measure
30. fs-premeasure-extensions-are-always-unique — false-statement — FALSE: the extension of a premeasure is always unique
31. fs-induced-outer-measures-always-agree-with-finitely-additive-data — false-statement — FALSE: the covering construction agrees with every finitely additive source function
32. def-metric-outer-measure — definition — Metric outer measures
33. lem-metric-outer-measure-boundary-layer-continuity — lemma — Boundary layers of finite metric outer measure exhaust the complement of a closed set in outer measure
34. prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures — proposition — Closed sets are Carathéodory measurable for metric outer measures
35. thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures — theorem — Every Borel set is Carathéodory measurable for a metric outer measure

### outer-measure-and-the-caratheodory-extension-theorem-examples — 8 items

1. ex-zero-one-outer-measure-on-a-two-point-set — example — The zero-one outer measure on a two-point set has only the trivial measurable sets
2. ex-counting-outer-measure — example — Counting measure is an outer measure for which every subset is measurable
3. ex-counting-premeasure-on-the-finite-cofinite-algebra — example — Counting premeasure on the finite-cofinite algebra induces counting outer measure
4. ex-counting-outer-measure-is-metric-on-the-real-line — example — Counting outer measure is a metric outer measure on the real line
5. cex-three-point-outer-measure-has-only-trivial-caratheodory-sets — counterexample — A three-point outer measure has nonmeasurable subsets despite passing the whole-space split
6. cex-finite-cofinite-set-function-is-not-a-premeasure — counterexample — Zero on finite sets and infinity on cofinite sets is finitely additive but not a premeasure
7. cex-nonsigma-finite-premeasure-has-distinct-extensions — counterexample — A non-sigma-finite premeasure has distinct Borel extensions
8. cex-two-point-outer-measure-need-not-be-regular — counterexample — An outer measure on two points need not be regular

## Per-pair richness report

Both required passes were performed.

Long-proof decomposition:

- Carathéodory's outer-measure theorem is decomposed through the automatic inequality, algebra closure, finite splitting, countable disjoint splitting, and outer-null measurability. The landmark theorem only assembles those proved pieces into a complete measure.
- Premeasure extension is decomposed through the general covering-cost theorem, algebra-cover disjointification, agreement with the premeasure, and measurability of every source-algebra set. Countable additivity of the premeasure is consumed only in the agreement lemma.
- Regularity and completion are decomposed through generated measurable hulls, source-algebra approximation, comparison with other extensions, sigma-finite uniqueness, the hull-mod-null lemma, and the final completion identification.
- The metric criterion is decomposed through the alternating boundary-layer argument, closed-set measurability, and generated-sigma-algebra minimality for Borel sets.
- The nonunique extension witness proves interval infinitude inline by repeated bisection; it does not cite a homeless item.

Corollary pass:

- cor-premeasure-induced-set-function-is-an-outer-measure records the reusable direct specialization of the covering theorem.
- cor-finite-premeasure-extension-is-unique records the useful finite special case of sigma-finite uniqueness.
- No further immediate consequence survived the no-restatement test. In particular, no separate corollary says merely that the restriction is a measure, because that is already part of the landmark Carathéodory theorem.

The A page has 35 items and does not approach the 60-item ceiling. No pruning was performed and no split is proposed.

+### Step-5 landmark plan

Set landmark true on def-outer-measure, thm-caratheodory-outer-measure-theorem, def-premeasure-on-an-algebra, thm-caratheodory-extension-theorem, thm-sigma-finite-premeasure-extension-is-unique, def-metric-outer-measure, and thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures. Keep the decomposition lemmas and companion examples non-landmarks so the flowchart remains birds-eye.

## Forward references and cross-batch dependencies

No forward reference is kept. The Tao headings on concrete Lebesgue measure and Hausdorff measure are deferred only in the coverage ledger to the opened plan destinations lebesgue-measure-on-euclidean-space and hausdorff-measure-and-hausdorff-dimension; they are not proof dependencies.

There is no dependency on another frontier-17 batch. The required measure-theory foundations are already published from frontier-16. No other frontier-17 batch is expected to consume a batch-6 item at Step 2 because the other dispatched pairs are in number theory, algebra, real analysis below this order, topology, complex analysis, and category theory. The later measure-theory pages already present in plan-spec are the intended downstream consumers.

## New-id collision report

All 43 proposed ids are new. The exact id search was run after finalizing the manifest by reading its ids and invoking ripgrep against items and plan-spec:

    node -e "const cp=require('child_process');const p=require('./research/frontier-17-batch-6.pages.json');const ids=p.flatMap(x=>x.items.map(y=>y.id));const re='^(id: )?('+ids.join('|')+')(\\\"|$)';const r=cp.spawnSync('rg',['-n',re,'items','research/plan-spec.json'],{encoding:'utf8'}); ..."

Result: ripgrep exit 1, meaning no match, for 43 candidate ids. The semantic search

    rg -n -i 'outer measure|Carath.odory measur|premeasure|pre-measure|metric outer|measurable hull|regular outer|extension.*premeasure|premeasure.*extension' items research/plan-spec.json

found no existing abstract outer-measure, premeasure, measurable-hull, or metric-outer-measure item. It did find the published recorded-not-proved rem-lebesgue-measure-and-integral and the unrelated differentiability theorem thm-caratheodory-characterisation. The former neither proves the abstract results nor is eligible as a load-bearing dependency; the latter is intentionally linked only in the disambiguation remark.

## Proof-contract and boundary handoff

The version-1 contract has 36 proof-bearing ids, 36 entries, no missing or extra entry, exact planned citations with source clauses and uses, an input map for every planned numbered step, all eight boundary dispositions per contract, and no fabricated Alpha risk review. At Step 5 the authored Statements and Facts must preserve the contract quotes exactly or the contract must be updated in the same authoring pass.

Boundary points requiring special attention:

- Natural-number sequences begin at zero. Finite splitting includes the empty partition, covering errors use \(2^{-(j+1)}\), and metric layers use \(1/(n+1)\), never \(1/n\).
- Outer measure is defined on every subset; measures and premeasures are not.
- No proof subtracts from \(+\infty\). Finite cancellation is used only after an explicit finite-measure localization.
- Set distance is defined in the published library only for two nonempty sets. Metric-outer-measure definitions and proofs discharge empty-set cases before writing \(d(A,B)\).
- Carathéodory measurability quantifies over every test set; the three-point counterexample explicitly shows the whole-space test is insufficient.
- Existence and regularity spend countable choice; sigma-finite uniqueness does not, because its exhaustion is given.
- Both directions of the source-algebra approximation equivalence have separate contract steps.
- Completion uses a generated measurable null hull of \(H\setminus E\); it does not assume the null difference itself belongs to the generated sigma-algebra.

## Honest confidence statement

Confidence is high in the theorem statements, dependency direction, and proof routes. I checked the Carathéodory decomposition against both source proofs, the extension agreement step against Folland Proposition 1.13, comparison and uniqueness against Folland Theorem 1.14 and Tao Exercises 1.7.7–1.7.9, and the alternating-layer metric proof against Folland Proposition 11.16. I independently checked all finite witnesses and the completion representation.

I did not author any item or page composition, run precheck or a judge, prove the source-harvest faithfulness beyond the exact ranges read, or run the authoritative spliced-plan gates. The current plan is not yet spliced, so validate-plan and depsource cannot classify these new ids authoritatively. The local dependency-order audit is recorded in the gate section below.

+## Gate and consistency record

- content-policy in manifest-only mode: 43 scoped items, 0 errors, 0 warnings.
- coverage-checklist, both the dispatch's exact command and the stricter destination form: 1 page, 50 harvested rows, 0 errors, 0 warnings.
- source-fetch-check with --stamp: 2/2 full-text sources fetch-verified, 0 newly stamped.
- prosecheck with warnings over all four artifacts: 0 errors and 9 warnings. Eight are count-in-prose warnings in this required audit report; one quotes the stale published scope denial that finding B6-6 must identify. There is no page summary or item-title warning.
- JSON parse: all three JSON artifacts parse.
- Contract structural audit: 36 proof-bearing manifest ids, 36 contracts, no missing or extra entry, all eight boundary cases per contract, no repeated planned step, and no citation source absent from the citing item's deps.
- Published citation-clause audit: every contract quote whose source already exists on disk is an exact substring of the cited Definition, Statement, or Example; 0 mismatches. Planned same-batch clauses remain Step-5 obligations.
- Dependency-order audit over the unspliced manifest: 0 missing ids, 0 unpublished dependencies, 0 homeless published dependencies, 0 same-page forward edges, and 0 dependency on a page of equal or greater order.
- Generated-claim audit: 0 dependency edges target any of the generated example/counterexample Statements.
- Trailing-whitespace scan over all four artifacts: no match.
- validate-plan on the current unspliced plan-spec exited 0. This validates the current plan only; it does not validate the batch-6 ids before Step 4.
- depsource on the current unspliced plan reported 0 unresolved. This is likewise not the authoritative post-splice classification for batch 6.
- proof-contract --strict was not run because the planned item files do not exist at Step 2; the tool would correctly report item-missing. The namespaced structural audit above is the applicable pre-authoring check.
- No precheck, rendercheck, depcheck over authored content, Step-6 review, risk review, or paired judge was run or claimed.

Expected post-splice result: every new dependency classifies as planned-earlier within the A/B pair or published on a strictly earlier page; no planned-later or unresolved edge is expected. The design/spec direct-prerequisite discrepancy remains intentionally delegated to the drift unit.

## Dependency closure and published-item inspection

Every proposed external dependency was opened from `items/` and its `status: published`, exact Definition or Statement, hypotheses, conclusion, and direction were checked. The load-bearing published set is:

`def-extended-reals`, `def-nonnegative-extended-series`, `thm-tonelli-for-nonnegative-double-series`, `def-countable-choice`, `def-algebra-of-subsets`, `def-sigma-algebra`, `lem-algebra-with-countable-disjoint-unions-is-sigma`, `def-measure`, `def-complete-measure-space`, `def-completion-of-a-measure-space`, `thm-completion-of-a-measure-space`, `def-generated-sigma-algebra`, `thm-generated-sigma-algebra-exists-and-is-minimal`, `def-pi-system`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-continuity-from-below-for-measures`, `prop-measure-of-a-set-difference`, `def-metric-space`, `def-metric-bounded-diameter`, `def-borel-sigma-algebra`, `def-counting-measure`, `prop-counting-measure-is-a-measure`, `lem-real-line-is-a-metric-space`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `def-countable`, and `thm-caratheodory-characterisation`.

None is legacy-unclassified: each carries component provenance. The AI-altered published statements used here were checked against their exact disk text; the sigma-finite uniqueness statement was also source-checked against Folland Theorem 1.14 and Tao Exercise 1.7.7, and the metric-set-distance convention was checked against Folland's Proposition 11.16 proof. No proposed dependency has `provenance.statement: ai-generated`. All load-bearing dependencies are either published on a strictly earlier page or earlier within this pair. There are no external fallbacks, no `proved_here: false` items, no load-bearing forward references, and no current-run cross-batch dependency.

## Step-3 fix pass

- **B6-1 — already correct.** The manifest explicitly states countable choice in the titles of the regular-continuity, covering-cost, induced-outer-measure, extension, regular-hull, and completion results where it is load-bearing. Their strategies and proof contracts cite `def-countable-choice` or record the inherited choice expenditure; sigma-finite uniqueness instead uses its given exhaustion and declares no new choice.
- **B6-2 — already correct.** `thm-regular-outer-measures-are-continuous-from-below` uses the increasing tail intersections $G_n=\bigcap_{k\ge n}H_k$ in both its strategy and proof contract. It explicitly forbids inferring that $H_n\setminus E_n$ is null when $E_n$ is nonmeasurable, so no measurable-hull subtraction enters the route.
- **B6-3 — already correct.** The manifest retains the extension-comparison proposition, the source-algebra approximation theorem, the regular-hull and completion chain, and the nonregularity counterexample. It decomposes Carathéodory extension and the metric criterion through the focused lemmas identified by Alpha; the Folland and Tao coverage rows map each harvested result to those item ids.
- **B6-4 — already correct (report-only).** The stale sentences in published `rem-lebesgue-measure-and-integral` were recorded verbatim in these notes before review. That item is not a manifest dependency, and no scaffold file attempts the out-of-scope published-prose repair; the finding remains available for the lead's later scope-denial sweep.

## Step-5 authoring

### Authored artifacts and per-item ledger

Both page compositions were authored as drafts. The A composition has exactly the retained definitions and proof results in its `items` list, with the retained false statements in `examples`; the B composition has an empty `items` list and the retained worked constructions in `examples`. The A summary has the required two prose paragraphs, and the B page has no authored body. No planned item was dropped, merged, or renamed, so every `included` coverage row remains true of disk.

The finalized component labels and source/edit histories are below. `pass` means the authored phase body passed the batch precheck; `n/a` is used only for definitions and the mathematical remark.

- `def-outer-measure`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. The definition follows Folland Section 1.4 and Tao Definition 1.7.1, with power-set domain and zero-based subadditivity explicit.
- `def-caratheodory-measurable-set`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. The universal test-set identity follows Folland Section 1.4 and Tao Definition 1.7.2.
- `rem-caratheodory-measurability-versus-differentiability`: precheck `n/a`; statement `ai-altered`, proof `not-applicable`. The prose juxtaposes the sourced measure-theory definition with the exact published differentiability theorem and makes no new mathematical claim.
- `lem-caratheodory-subadditive-inequality-is-automatic`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. Folland's observation was isolated as a reusable lemma and proved by the fixed two-piece cover, including empty and infinite values.
- `prop-caratheodory-measurable-sets-form-an-algebra`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. The first closure part of Folland Theorem 1.11 and Tao Theorem 1.7.3 was expanded into the four-cell argument without subtraction.
- `lem-finite-caratheodory-splitting`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. The finite induction inside both source proofs was isolated, including the empty partition at index zero.
- `thm-countable-disjoint-caratheodory-splitting`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Exercise 17 and Tao's theorem proof supply the exact splitting formula; the local proof compares finite partial sums without cancelling infinity.
- `prop-outer-null-sets-are-caratheodory-measurable`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao Exercise 1.7.1 supplies the claim, and the hereditary clause is obtained by monotonicity.
- `thm-caratheodory-outer-measure-theorem`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Theorem 1.11 and Tao Theorem 1.7.3 supply the theorem; the authored proof assembles the focused algebra, disjoint-splitting, and null-set results.
- `fs-every-subset-is-caratheodory-measurable`: precheck `pass`; statement `literature-derived`, proof `ai-generated`. The sourced false universal was refuted locally by exhaustive verification of the zero-one outer measure on two points.
- `fs-outer-measures-are-countably-additive-on-power-sets`: precheck `pass`; statement `literature-derived`, proof `ai-generated`. The sourced distinction between subadditivity and additivity was refuted locally on the disjoint singleton pair.
- `def-regular-outer-measure-and-measurable-hull`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. The measurable-hull convention follows Folland Exercises 18 and 20 and is explicitly separated from topological regularity of measures.
- `thm-regular-outer-measures-are-continuous-from-below`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. The Folland hull route was adapted to expose countable choice and to use the safe tail intersections $G_n=\bigcap_{k\ge n}H_k$.
- `thm-covering-cost-construction-produces-an-outer-measure`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Proposition 1.10 was adapted to expose countable choice, the zero-based geometric error budget, Tonelli, and an explicit enumeration of the double cover.
- `def-premeasure-on-an-algebra`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. The definition follows Folland Section 1.4 and Tao Definition 1.7.7 and records finite and sigma-finite cases.
- `def-outer-measure-induced-by-a-premeasure`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. Folland formula 1.12 and Tao's construction supply the formula; the body discharges nonempty cover and infimum existence.
- `cor-premeasure-induced-set-function-is-an-outer-measure`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. This is the exact source specialization of the covering-cost theorem to an algebra and a premeasure.
- `lem-disjointification-of-an-algebra-cover`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. The least-index construction from Folland Proposition 1.13(a) was isolated and the index-zero empty union was checked.
- `lem-induced-outer-measure-agrees-with-premeasure`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Proposition 1.13(a) supplies the equality; the proof identifies countable additivity as the consumed premeasure clause.
- `lem-source-algebra-is-caratheodory-measurable`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Proposition 1.13(b) and Tao's extension proof supply the claim; finite and infinite test costs are separated before approximation.
- `thm-caratheodory-extension-theorem`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Theorem 1.14 and Tao Theorem 1.7.8 supply the extension; the local proof assembles the induced outer measure, exact agreement, source-algebra measurability, and generated-sigma-algebra minimality.
- `thm-premeasure-induced-outer-measure-is-regular`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. Folland Exercises 18(a) and 20(b) were packaged with explicit countable choice and generated measurable hulls.
- `thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao Exercise 1.7.9(ii-iii) supplies both directions, which are separately scoped in the proof and contract.
- `prop-caratheodory-extension-compares-with-other-extensions`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Theorem 1.14 supplies comparison and finite equality; the proof localizes finite subtraction to a finite-measure covering union.
- `thm-sigma-finite-premeasure-extension-is-unique`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Theorem 1.14 and Tao Exercise 1.7.7 supply uniqueness; the given sigma-finite cover is converted canonically to the published pi-system exhaustion without new choice.
- `cor-finite-premeasure-extension-is-unique`: precheck `pass`; statement `literature-derived`, proof `ai-generated`. This is the direct finite special case using the constant whole-space exhaustion.
- `lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Exercise 18(c) and Tao Exercise 1.7.9(i) supply the conclusion; finite-measure localization licenses the null-excess calculation.
- `thm-caratheodory-domain-is-the-completion-under-sigma-finiteness`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Exercise 22(a) supplies the identification; the reverse inclusion uses a generated measurable null hull before invoking the published completion theorem.
- `fs-finitely-additive-functions-on-algebras-always-extend`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao's premeasure discussion supplies the obstruction, and the power-set witness is checked against the singleton partition.
- `fs-premeasure-extensions-are-always-unique`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao Exercise 1.7.8 and Folland Exercise 23 supply the non-sigma-finite interval-algebra witness and its two extensions.
- `fs-induced-outer-measures-always-agree-with-finitely-additive-data`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao Exercises 1.7.4(iii) and 1.7.6 supply the failed weakening, realized by the zero-cost singleton cover.
- `def-metric-outer-measure`: precheck `n/a`; statement `literature-derived`, proof `not-applicable`. The definition follows Folland Section 11.2 and separately handles empty sets because published set distance requires nonempty inputs.
- `lem-metric-outer-measure-boundary-layer-continuity`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. The alternating-layer argument from Folland Proposition 11.16 was isolated, with empty closed sets, empty complements, index zero, positive separation, and finite outer measure checked.
- `prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures`: precheck `pass`; statement `ai-altered`, proof `ai-altered`. This is the closed-set subclaim of Folland Proposition 11.16, using the authored boundary-layer lemma and no distance notation on empty sets.
- `thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Folland Proposition 11.16 supplies the result; generated-sigma-algebra minimality completes the passage from closed and open sets to Borel sets.
- `ex-zero-one-outer-measure-on-a-two-point-set`: precheck `pass`; statement `ai-generated`, proof `ai-generated`, generation role `example`. The counterexample search exhausted all subsets and cover-union types; both singleton failures were verified against the whole-space test.
- `ex-counting-outer-measure`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. The published counting measure and the sourced outer-measure definition give the example, including finite, infinite, and empty sets.
- `ex-counting-premeasure-on-the-finite-cofinite-algebra`: precheck `pass`; statement `ai-altered`, proof `ai-generated`. The sourced counting and premeasure constructions were adapted to the finite-cofinite algebra; finite and infinite covering costs were verified separately.
- `ex-counting-outer-measure-is-metric-on-the-real-line`: precheck `pass`; statement `ai-altered`, proof `ai-generated`. Folland's metric definition was combined with published counting measure and the usual real metric; empty-set distance cases were separated.
- `cex-three-point-outer-measure-has-only-trivial-caratheodory-sets`: precheck `pass`; statement `ai-generated`, proof `ai-generated`, generation role `counterexample`. The counterexample search exhausted subset and union types, checked the whole-space split, and used a crossing two-point test for every nontrivial set.
- `cex-finite-cofinite-set-function-is-not-a-premeasure`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao's exercises supply the witness; finite additivity and failure on the zero-based singleton partition were checked.
- `cex-nonsigma-finite-premeasure-has-distinct-extensions`: precheck `pass`; statement `literature-derived`, proof `ai-altered`. Tao Exercise 1.7.8 and Folland Exercise 23 supply the interval-algebra witness, Borel generation, non-sigma-finiteness, and distinct extensions.
- `cex-two-point-outer-measure-need-not-be-regular`: precheck `pass`; statement `ai-generated`, proof `ai-generated`, generation role `counterexample`. The counterexample search exhausted all four subsets and cover types, checked $3/2\le1+1$, classified the measurable sets, and verified that neither singleton has an equal-value measurable hull.

### Scaffold deltas

No title or mathematical claim was narrowed, strengthened, dropped, merged, or renamed. Four dependency additions were required by the final written proofs:

- `thm-covering-cost-construction-produces-an-outer-measure` adds `thm-product-of-countable` because a double family must be enumerated as one countable cover before it satisfies the definition of outer measure.
- `prop-caratheodory-extension-compares-with-other-extensions` adds `thm-finite-and-countable-subadditivity-of-measures` because the comparison begins by bounding a competing measure on an arbitrary algebra cover.
- `lem-metric-outer-measure-boundary-layer-continuity` adds `def-metric-topology` because closedness is used to obtain a positive-radius ball outside the closed set.
- `prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures` adds `def-metric-topology` because closedness occurs in its Statement and in the boundary-layer route.

All added targets were opened before their Facts were written. `thm-product-of-countable` has an `ai-altered` Statement; its exact product-countability claim, no-choice convention, and Hunter, Lebl, and Tao references were checked against the disk text. `thm-finite-and-countable-subadditivity-of-measures` and `def-metric-topology` have source-backed component provenance, and their exact domains, hypotheses, and conclusions were checked on disk. None has an `ai-generated` Statement.

The namespaced manifest remains the approved scaffold baseline; these authored dependency deltas are recorded here for the Step-6 planned-versus-authored receipt. The proof contract includes the new direct facts and every use.

### Gate record

- Reflow and precheck were run over all authored ids. Every proof-bearing item passed, and definitions and the remark legitimately carry `precheck: n/a`.
- `validate-plan.mjs research/plan-spec.json` passed on the spliced plan.
- `content-policy.mjs research/frontier-17-batch-6.pages.json` passed with 43 scoped items and no errors or warnings.
- `proof-contract.mjs research/frontier-17-batch-6.proof-contracts.json --strict` passed 36 of 36 contracts with no errors or warnings.
- `coverage-checklist.mjs research/frontier-17-batch-6.coverage.json` passed with 50 harvested rows and no errors or warnings.
- `prosecheck.mjs` over the 43 items and both page compositions passed with no errors or warnings.
- `boundary-audit.mjs` checked all 288 boundary rows, found no contradicted disposition, and found no repeated template cluster after the item-specific iff rationales were written.
- `citation-fidelity.mjs` checked 96 citations and found no missing exact quote or widening candidate.
- `finite-smoke.mjs` ran with zero errors and zero registered checks. None of the finite witnesses matches a registered smoke-test type, so this is not claimed as mathematical evidence.
- `risk-report.mjs` ran without error. It routes the high and critical items to Step 6; no author-written `risk_review` was fabricated.
- `fwdcheck.mjs` and `extcheck.mjs` completed without a batch finding. `citecheck.mjs` emitted repository advisory warnings, none for a batch-6 item.
- Repository-wide `depcheck.mjs` exited nonzero on five errors in files outside batch 6: YAML escapes in `cex-a-reflexive-pair-whose-coequalizer-is-not-preserved` and `ex-beta-of-the-naturals-as-an-ultrafilter-algebra`, plus a missing `sources_checked` record on `rem-sine-period-arc-length-integrand-is-nonelementary`. Its filtered output named no batch-6 item. Repository-wide `rendercheck.mjs` likewise exited nonzero on the two unrelated frontmatter files and named no batch-6 item. These two whole-tree commands are not claimed as passes.

### Escalations and confidence

No required new item, false scaffold claim, external fallback, or published-dependency repair blocked this authoring. The report-only finding `B6-4` remains: the published `rem-lebesgue-measure-and-integral` contains a stale corpus-wide scope denial, is not a dependency of this batch, and stays assigned to the lead's scope-denial sweep.

Confidence is high in the statements, dependency directions, choice ledger, finite witnesses, and proof routes. The authored text was checked against the exact published dependency Statements, both harvested source routes recorded above, the strict proof contract, standard boundary axes, and the mechanical gates listed here. I did not run a judge, write an Alpha risk review, perform the independent Step-6 read, refresh the existing source-fetch stamps over the network, certify the canonical harvest independently, repair the unrelated whole-tree gate failures, or publish any file.
