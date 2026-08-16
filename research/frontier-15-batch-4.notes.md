# Frontier-15 batch 4 — Beta-4 scaffold notes

Run: `frontier-15`  
Batch: `4`  
Role: Beta-4, steps 1–2  
Pair: `sigma-algebras-and-borel-sets` / `sigma-algebras-and-borel-sets-examples`

## Continuity checkpoint

Substage: Step 2 scaffold and dependency closure complete. Owned artifacts are `research/frontier-15-batch-4.pages.json`, `research/frontier-15-batch-4.coverage.json`, `research/frontier-15-batch-4.proof-contracts.json`, and this file. The source harvest has been read and the structural coverage gate passes. Both pages remain below the split threshold. Every external dependency in the manifest is published on a strictly smaller-order A page, and no cross-batch or forward dependency is planned.

Open adjudications: approve the correction from AC_omega to full AC for the cardinal equality `|B(R^n)| = c`; approve replacing the design's load-bearing use of `thm-regularity-of-the-alephs` by the sharper published `thm-countable-subsets-of-omega-one-are-bounded`; approve the one documented external fallback `rem-the-borel-hierarchy-never-stabilizes`. Exact next action: Step-3 Alpha reads the three findings in severity order, verifies the source harvest and dependency statements from disk, and records approve/decline decisions before Step 4 splices the manifest.

## Findings for Step-3 Alpha, in severity order

### Finding 1 — approve the stronger choice hypothesis on the Borel-cardinality equality

Recommendation: **approve** the scaffolded replacement of the design's “assuming AC_omega, `|B(R^n)| = c`” by `thm-cardinality-of-the-borel-sigma-algebra-on-rn`, whose Statement assumes the full Axiom of Choice.

What is wrong: AC_omega suffices to select codes for a countable family of Borel sets and, in a second-countable space, to identify ordinary Borel sets with codable Borel sets. It gives a surjection from a real code space onto the Borel sets. It does not in general turn that surjection into an injection of the Borel sets into the reals, so it does not establish a bijection. Fremlin §567E(b) states the image/coding conclusion, not cardinal equality. Tao's Exercise 1.4.16 assumes the Axiom of Choice throughout the text. The expert set-theory discussions recorded below independently flag the same gap; they are corroboration, not the primary backing.

Proposed exact replacement:

- keep `thm-transfinite-description-of-generated-sigma-algebras` under AC_omega;
- state `thm-cardinality-bound-for-generated-sigma-algebras` under full AC, matching Tao's convention and the library's definition of infinite cardinal exponentiation;
- state `thm-cardinality-of-the-borel-sigma-algebra-on-rn` under full AC;
- let `fs-every-subset-of-r-is-borel` use that equality and Cantor's theorem, explicitly observing that the cardinality proof selects no witness.

If declined: the page publishes a choice-strength claim that its cited theorem does not imply. In models without full choice, two opposite surjections do not license Schroeder–Bernstein, and the displayed cardinal equality is not established.

### Finding 2 — approve the sharper omega-one dependency

Recommendation: **approve** using published `thm-countable-subsets-of-omega-one-are-bounded` and `def-countable-choice` as the load-bearing dependencies of the transfinite theorem, rather than `thm-regularity-of-the-alephs`.

What is wrong: clause (b) of the actual published `thm-regularity-of-the-alephs` assumes the full Axiom of Choice. The exact statement the proof needs is only that an at-most-countable collection of countable ordinals has a supremum below omega-one. Published `thm-countable-subsets-of-omega-one-are-bounded` states precisely that under AC_omega and identifies the one step spending the axiom.

Proposed proof: for a sequence of sets drawn from the union of the stages, AC_omega selects one stage for each set; the selected countable set of ordinals is bounded below omega-one by `thm-countable-subsets-of-omega-one-are-bounded`, so one successor stage contains their union. Transfinite recursion itself remains choice-free by `thm-transfinite-recursion`.

If declined: citing `thm-regularity-of-the-alephs` overstates the proof's dependency and silently strengthens the theorem from AC_omega to full AC.

### Finding 3 — approve the narrow external fallback for strictness of the Borel hierarchy

Recommendation: **approve** `rem-the-borel-hierarchy-never-stabilizes` as a source-cited `proved_here: false` remark on the B page, with `fs-the-borel-hierarchy-closes-after-two-steps` depending on it.

Exact sourced statement used: for the Borel hierarchy on the real line, iterating countable unions and intersections does not stabilize at any countable stage. Source: Michael Christ, Math 202B Lecture 1, “Comment — The Borel Hierarchy,” PDF page 9, `https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf`.

Failed local route: the elementary closure laws and the transfinite union theorem prove that every Borel set occurs at some countable stage, but they do not prove that every countable stage is proper. Cardinality cannot separate a finite Borel level from the whole Borel sigma-algebra because both have continuum-sized code spaces. A local diagonal proof needs universal sets or equivalent descriptive-set-theoretic coding absent from MT-1; that is a subject-area expansion, not a missing elementary lemma.

Necessity: the prose design explicitly requires the false statement that the construction closes after two rounds. Without strictness, the refutation does not close. The external remark is confined to the leaf B page and has no downstream consumers.

If declined: remove both the external remark and the false-statement item. Keeping the false statement without the fallback would leave a known proof gap.

## Exact applyable amendments to the prose scaffold

### Amendment A — `research/plan-measure-theory-track.md`, §MT-1, transfinite proof strategy

Exact old text:

> The transfinite description needs `thm-transfinite-recursion` and the fact that $\omega_1$ is **regular**, i.e. that a countable subset of $\omega_1$ is bounded — that is `thm-regularity-of-the-alephs` at order 247, and it is a **choice-dependent** fact (`DEFERRED.md` §3a records the Feferman–Levy model where $\mathrm{cf}(\omega_1)=\omega$); the Statement must therefore carry AC$_\omega$.

Exact new text:

> The transfinite description needs `thm-transfinite-recursion` and the exact boundedness statement `thm-countable-subsets-of-omega-one-are-bounded`: under AC$_\omega$, every at-most-countable subset of $\omega_1$ has a supremum below $\omega_1$. The proof selects a stage for each member of a countable family and then bounds those stages. `thm-regularity-of-the-alephs` is not load-bearing here because its successor-aleph clause assumes full AC. `DEFERRED.md` §3a records the Feferman–Levy failure without AC$_\omega$.

### Amendment B — `research/plan-measure-theory-track.md`, §MT-1, cardinality paragraph

Exact old text:

> Consequently $\lvert\sigma(\mathcal{E})\rvert\le\lvert\mathcal{E}\rvert^{\aleph_0}$ when $\mathcal{E}$ is infinite, and $\lvert\mathcal{B}(\mathbb{R}^n)\rvert=\mathfrak{c}$ (**landmark**; the choice cost is AC$_\omega$ and the Statement says so).

Exact new text:

> Assuming the Axiom of Choice, $\lvert\sigma(\mathcal{E})\rvert\le\lvert\mathcal{E}\rvert^{\aleph_0}$ for an infinite family $\mathcal{E}$, and $\lvert\mathcal{B}(\mathbb{R}^n)\rvert=\mathfrak{c}$ for $n\ge1$ (**landmark**). AC$_\omega$ remains the exact hypothesis of the preceding omega-one-stage description, but it does not by itself turn the surjection from real Borel codes onto the Borel sets into a bijection.

### Amendment C — `research/plan-measure-theory-track.md`, §MT-1, B-page counterexamples

Exact old text:

> *Counterexamples*: the $\lambda$-system $\{\emptyset,\{1,2\},\{3,4\},\{1,3\},\{2,4\},\{1,4\},\{2,3\},X\}$ on $X=\{1,2,3,4\}$, which is not a $\pi$-system, so the $\pi$-hypothesis in Dynkin's theorem is not decoration; the increasing sequence $\mathcal{A}_n := \sigma(\{\{0\},\dots,\{n-1\},\{n,n+1,\dots\}\})$ on $\mathbb{N}$ whose union is the algebra of finite-or-cofinite sets, not a $\sigma$-algebra; the union of $\sigma(\{A\})$ and $\sigma(\{B\})$ for two crossing sets; a monotone class that is not an algebra; a non-Borel subset of $\mathbb{R}$ **by cardinality alone**, with the explicit observation that this exhibits no witness.

Exact new text:

> *Counterexamples*: the $\lambda$-system $\{\emptyset,\{1,2\},\{3,4\},\{1,3\},\{2,4\},\{1,4\},\{2,3\},X\}$ on $X=\{1,2,3,4\}$, which is not a $\pi$-system; the increasing monotone classes $\mathcal M_n=\mathcal P(\{0,\ldots,n-1\})$, whose union is not a monotone class; the increasing sequence $\mathcal{A}_n := \sigma(\{\{0\},\dots,\{n-1\},\{n,n+1,\dots\}\})$ on $\mathbb{N}$ whose union is the finite-cofinite algebra; the union of the sigma-algebras generated by two crossing sets; a monotone class that is not an algebra; and, assuming AC, a non-Borel subset of $\mathbb{R}$ **by cardinality alone**, with the explicit observation that no witness is exhibited.

### Amendment D — `research/plan-measure-theory-track.md`, §MT-1, two-step Borel false statement

Exact old text:

> $\mathcal{B}(\mathbb{R})$ is the collection of countable unions of countable intersections of open and closed sets (i.e. the process closes after two steps).

Exact new text:

> $\mathcal{B}(\mathbb{R})$ is the collection of countable unions of countable intersections of open and closed sets (i.e. the process closes after two steps). Its refutation depends on the source-cited external remark `rem-the-borel-hierarchy-never-stabilizes`; the strictness theorem belongs to descriptive set theory and is not proved on MT-1.

## Exact A-page summary for Step 5

Replace the A-page body with exactly these two paragraphs:

> Sigma-algebras isolate the set operations that survive countable constructions. Starting from algebras of subsets and measurable spaces, this page proves that generated sigma-algebras exist before using the phrase “the smallest sigma-algebra,” develops their comparison calculus, and separates pi-systems, lambda-systems, and monotone classes. The good-sets arguments in Dynkin's pi-lambda theorem and the monotone class theorem are split into named lemmas so that both applications of each closure argument are visible.
>
> Borel sigma-algebras connect this set calculus to topology. The development identifies standard generators on the real line and Euclidean spaces, proves agreement with traces on subspaces and with preimages under continuous maps, and describes generation through countable ordinal stages. The omega-one construction states its AC_omega cost, while the cardinal bounds and the continuum-sized Borel sigma-algebra state their stronger Axiom-of-Choice hypothesis explicitly.

The B companion has no authored summary body.

## Web source ledger and convention audit

All URLs below were opened successfully during this session.

| Code | Source and exact range read | Planned support | Convention audit |
|---|---|---|---|
| BASS | `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`, Ch. 2 §§2.1–2.3, printed pp. 11–16 | Algebra, sigma-algebra, measurable space, generated sigma-algebra, Borel generators, monotone class theorem, limsup/liminf, and the companion counterexamples | Bass indexes sequences from 1 in this chapter; every new sequence here starts at 0. Bass silently works with ordinary choice and therefore does not expose the AC_omega cost of countable-cocountable closure. |
| TAO | `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`, §1.4.2, Definition 1.4.12–Remark 1.4.18, printed pp. 85–89 | Generated sigma-algebras, Borel sigma-algebra, Euclidean generators, omega-one hierarchy, cardinal bound, and non-Borel existence | Tao assumes full AC throughout. His cardinal-exponent and Borel-cardinality exercises therefore cannot be cited as AC_omega theorems. His notation uses angle brackets for generated families; the library uses sigma(E). |
| DEMBO | `https://adembo.su.domains/stat-310b/lnotes.pdf`, Definition 1.1.36–Theorem 1.1.44, printed pp. 14–16 | Pi-systems, lambda-systems, Dynkin's theorem, monotone classes, and the monotone class theorem | Dembo does not require a pi-system to be nonempty; the design does. The empty pi-system is harmless for Dynkin's inclusion, but Step 5 must state the library convention exactly. Dembo's lambda-system formulation matches the relative-difference and increasing-union convention. |
| FREMLIN | `https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf`, §561A and result 567E(b) | Choice audit, R equinumerous with P(N) in ZF, codable Borel sets, and the distinction between a code-space image and a cardinal bijection | Fremlin distinguishes codable Borel sets from ordinary Borel sets without choice. Under the relevant countable-choice principle they coincide, but the source states only that the Borel sigma-algebra is an image of the code space. |
| CHRIST | `https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf`, “Comment — The Borel Hierarchy,” PDF p. 9 | External strictness result used only by the two-step-hierarchy false statement | The note states non-stabilization and says precise formulation needs countable ordinals; it does not supply the universal-set proof needed to make the result internal here. |
| MSE-CHECK | `https://math.stackexchange.com/questions/2846493/is-countable-choice-enough-to-prove-that-there-are-continuum-many-borel-sets` | Corroborating choice-strength check only | The accepted expert answer says countable choice is insufficient for the equality and distinguishes continuum many codes from continuum many Borel sets. This is not primary backing. |
| MO-CHECK | `https://mathoverflow.net/questions/32720/non-borel-sets-without-axiom-of-choice` | Corroborating code-space and non-Borel-existence check only | The discussion records the AC_omega surjection and explicitly retracts the unsupported inference from opposite surjections to a bijection. This is not primary backing. |

The complete source-heading harvest and per-result dispositions are in `research/frontier-15-batch-4.coverage.json`. The structural gate accepts the harvest without errors or warnings.

## Published dependency audit

Every item in this table was opened from `items/` and had `status: published`. No legacy-unclassified item is used. An AI-generated proof is irrelevant to eligibility; no dependency below has `provenance.statement: ai-generated`.

| Dependency | Page order | Statement provenance | Confidence route and exact use |
|---|---:|---|---|
| `def-topological-space` | 249 | ai-altered | source-checked against TAO Definition 1.4.16 and the topology prerequisites; supplies open sets and complements |
| `thm-rational-points-and-boxes-in-rn` | 257 | ai-altered | source-checked against the Euclidean basis treatment and its exact on-disk `n>=1` statement; supplies the countable rational-box basis |
| `def-metric-topology` | 118 | literature-derived | established-from-knowledge and checked against its exact ball criterion; supplies the open-ball generator argument |
| `cor-heine-borel-in-the-product-topology` | 257 | ai-altered | source-checked against TAO Exercise 1.4.14 and its exact on-disk compact iff closed-and-bounded statement; supplies compact truncations |
| `def-subspace-topology-top` | 249 | ai-altered | source-checked against its exact on-disk trace definition; supplies open traces |
| `thm-continuity-characterisations-top` | 249 | ai-altered | source-checked against its exact clause (b); supplies open preimages |
| `thm-transfinite-recursion` | 243 | ai-altered | established-from-knowledge and checked against its exact schema statement; supplies the stage family without choice |
| `def-countable-choice` | 18 | ai-altered | source-checked against FREMLIN and its exact on-disk definition; records the selected-stage cost |
| `thm-countable-subsets-of-omega-one-are-bounded` | 245 | ai-altered | source-checked against FREMLIN's choice ledger and its exact on-disk boundedness clause; supplies the common stage |
| `def-axiom-of-choice` | 18 | literature-derived | established-from-knowledge; hypothesis for cardinal exponentiation and cardinal equality |
| `def-cardinal-arithmetic` | 247 | ai-altered | source-checked against the on-disk warning that infinite exponentiation is stated under AC |
| `lem-cardinal-arithmetic-basic-laws` | 247 | ai-altered | source-checked against TAO's AC convention and the exact monotonicity/exponent clauses on disk |
| `thm-cardinal-power-set-and-cantor` | 247 | ai-altered | source-checked against its exact full-AC cardinal statement; used only where full AC is assumed |
| `thm-hessenberg` | 247 | literature-derived | established-from-knowledge; exact on-disk statement is the ZF equality kappa times kappa equals kappa |
| `cor-cardinal-absorption` | 247 | ai-altered | source-checked against the exact on-disk nonzero and infinite-cardinal hypotheses |
| `thm-cantor-powerset` | 18 | ai-altered | established-from-knowledge and exact on disk; supplies the choice-free diagonal contradiction |
| `thm-schroder-bernstein` | 18 | ai-altered | established-from-knowledge and exact on disk; combines explicit injections only |
| `def-countable` | 18 | ai-altered | source-checked for the library convention that “countable” means at most countable |
| `thm-countable-union-of-countable` | 18 | ai-altered | source-checked against FREMLIN and exact on disk; its Statement carries AC_omega |
| `def-f-sigma-g-delta` | 133 | literature-derived | established-from-knowledge and opened in full; it is specific to R and is used only for R |
| `cor-q-is-meager-and-not-g-delta` | 133 | ai-altered | source-checked against its exact conclusion that Q is F-sigma and not G-delta |
| `def-cantor-set` | 133 | literature-derived | established-from-knowledge and opened in full; supplies the subspace C only |
| `thm-cantor-set-ternary-description` | 133 | ai-altered | source-checked against its exact bijection between binary sequences and C |
| `thm-rationals-countable` | 18 | ai-altered | established-from-knowledge and exact on disk; supplies Q approximately N |
| `lem-of-q-dense` | 9 | literature-derived | established-from-knowledge and exact on disk; makes the rational-cut map injective |
| `lem-cardinal-operations-are-well-defined` | 247 | ai-altered | source-checked against its exact power-set transport and function-space clauses |
| `def-equinumerous` | 18 | ai-altered | established-from-knowledge and exact on disk; fixes the choice-free size notation |
| `def-injection-surjection-bijection` | 18 | ai-altered | established-from-knowledge and exact on disk; fixes all comparison maps |

The design-named `thm-regularity-of-the-alephs` was also opened. Its successor-aleph clause assumes full AC, so it is deliberately not load-bearing. No published dependency was found to contain an unambiguous falsehood requiring the repair protocol.

## Dependency closure and order

The A page is order 288.001 and the B page is order 288.002. All internal edges point to an earlier item on the same page. Every external manifest dependency above is published on an A page of order at most 257, strictly smaller than 288.001. `stone-weierstrass-general-examples` is only the page anchor in `requires`; no item cites a B-page item from it. The B page cites only the A companion, earlier published A-page items, or an earlier item on the same B page. Nothing outside the pair may depend on the external strictness remark because the companion is a leaf.

There are no forward references and no cross-batch dependencies. No item is expected from another `frontier-15` batch, and this batch exports no dependency that another current batch has declared.

## Proof-obligation and boundary map

The machine-readable map is `research/frontier-15-batch-4.proof-contracts.json`; it scopes every proof-bearing item and gives each planned step an input list plus all standard boundary dispositions. The critical obligations are:

- generated sigma-algebra: prove the family intersected is nonempty using the power set before claiming minimality;
- set limits: sequences start at 0, the tail is `k>=n`, and both membership directions are proved;
- pi-lambda: first prove a lambda-system with intersections is sigma, then the fixed-A good-set lemma, then apply it twice to the generated lambda-system;
- monotone class: prove complement closure, prove the first good-set pass against algebra members, then apply the good-set argument a second time for arbitrary generated-class members;
- rational generators: preserve all endpoint directions and keep the real-line families within `thm-seven-generators-of-the-borel-sigma-algebra-on-r`;
- Euclidean generators: assume `n>=1`; prove the open, closed, compact, open-ball, box, rational-open-box, and rational-half-open-box families generate the same sigma-algebra, including both rational-open to rational-half-open and reverse inclusions without a zero-dimensional metric claim;
- transfinite stages: define stage 0 and every successor/limit stage by recursion; use AC_omega only to choose stages for a countable family; use boundedness to stay below omega-one;
- cardinal results: full AC is stated before infinite cardinal exponentiation or cardinal equality is written;
- infinite sigma-algebras: separate the choice-free listed-family lemma from the AC_omega extraction of a listed infinite subfamily; prove the union map from P(N) is injective;
- partitions: handle the empty partition only when `X` is empty, handle one block, and prove both directions of the finite/countable equivalence;
- companion witnesses: check the four-point lambda-system set by set, start the tail partition at `n=0`, and say explicitly that the cardinality proof gives no named non-Borel subset.

The available finite-smoke registry contains graph, group, poset, and category checks but no set-system check. Every `finite_smoke` array is therefore empty; the four-point and finite-partition obligations remain explicit proof steps rather than being misreported as mechanically checked.

## Per-item expected component provenance

Source codes refer to the ledger above. `ai-altered` means the exact library statement or proof route changes presentation, choice bookkeeping, or decomposition while preserving a sourced result. No planned Statement or Construction is `ai-generated`; there is no truth-risk counterexample-search obligation and no `generation` frontmatter is planned.

| Item | Statement | Proof | Rationale and Step-5 reference |
|---|---|---|---|
| `def-algebra-of-subsets` | literature-derived | not-applicable | BASS Definition 2.1; equivalent closure presentation |
| `def-sigma-algebra` | literature-derived | not-applicable | BASS Definition 2.1 and TAO Definition 1.4.12 |
| `def-measurable-space` | literature-derived | not-applicable | BASS Definition 2.1 and TAO Definition 1.4.12 |
| `def-generated-sigma-algebra` | literature-derived | not-applicable | BASS Lemma 2.7 and TAO Definition 1.4.14; smallest-language withheld until justified |
| `thm-generated-sigma-algebra-exists-and-is-minimal` | literature-derived | ai-altered | BASS Lemma 2.7 and TAO Exercise 1.4.13; explicit power-set nonemptiness |
| `def-pi-system` | ai-altered | not-applicable | DEMBO Definition 1.1.36, with the design's nonempty convention added |
| `def-lambda-system` | literature-derived | not-applicable | DEMBO Definition 1.1.36 and equivalent relative-difference formulation |
| `def-generated-lambda-system` | literature-derived | not-applicable | DEMBO Theorem 1.1.38 proof route, intersection definition made explicit |
| `def-monotone-class` | literature-derived | not-applicable | BASS Definition 2.9 and DEMBO Definition 1.1.43 |
| `def-generated-monotone-class` | literature-derived | not-applicable | BASS Definition 2.9 discussion and theorem proof |
| `def-borel-sigma-algebra` | literature-derived | not-applicable | TAO Definition 1.4.16 and BASS §2.1 |
| `def-trace-sigma-algebra` | literature-derived | not-applicable | TAO Exercise 1.4.12 |
| `def-set-limsup-and-liminf` | literature-derived | not-applicable | BASS Exercise 2.9; reindexed from 0 |
| `thm-sigma-algebra-closure-laws` | literature-derived | ai-altered | BASS Definition 2.1 consequences and Exercise 2.9 |
| `prop-set-limsup-and-liminf-membership` | literature-derived | ai-altered | BASS Exercise 2.9; both quantifier directions exposed |
| `thm-generated-sigma-algebra-calculus` | literature-derived | ai-altered | BASS §2.1 monotonicity and idempotence |
| `thm-generated-sigma-algebra-comparison-criterion` | ai-altered | ai-altered | TAO Exercise 1.4.14 hint and design workhorse, stated symmetrically |
| `lem-algebra-with-countable-disjoint-unions-is-sigma` | literature-derived | ai-altered | standard disjointification route recorded in the MT design; BASS as page reference |
| `lem-algebra-with-increasing-unions-is-sigma` | literature-derived | ai-altered | BASS monotone-class proof route and MT design |
| `lem-lambda-system-with-finite-intersections-is-sigma` | literature-derived | ai-altered | DEMBO Proposition 1.1.37 |
| `lem-lambda-good-sets` | ai-altered | ai-altered | the standard proof underlying DEMBO Theorem 1.1.38, isolated for auditability |
| `lem-generated-lambda-system-closed-under-intersections` | ai-altered | ai-altered | DEMBO Theorem 1.1.38 proof route; both good-set passes stated |
| `thm-dynkin-pi-lambda` | literature-derived | ai-altered | DEMBO Theorem 1.1.38 |
| `lem-generated-monotone-class-closed-under-complements` | ai-altered | ai-altered | first good-class step of BASS Theorem 2.10 |
| `lem-monotone-good-sets-for-algebra-elements` | ai-altered | ai-altered | first intersection pass of BASS Theorem 2.10 |
| `lem-generated-monotone-class-closed-under-intersections` | ai-altered | ai-altered | second intersection pass of BASS Theorem 2.10 |
| `thm-monotone-class` | literature-derived | ai-altered | BASS Theorem 2.10 and DEMBO Theorem 1.1.44 |
| `prop-sigma-algebras-are-lambda-systems-and-monotone-classes` | literature-derived | ai-altered | DEMBO Proposition 1.1.37 and Definitions 1.1.36/1.1.43 |
| `thm-trace-is-a-sigma-algebra` | literature-derived | ai-altered | TAO Exercise 1.4.12 |
| `thm-generated-trace-commutes` | ai-altered | ai-altered | design identity derived by the generated-family criterion; TAO trace reference |
| `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` | literature-derived | ai-altered | BASS Proposition 2.8 plus published rational-basis theorem |
| `thm-seven-generators-of-the-borel-sigma-algebra-on-r` | ai-altered | ai-altered | BASS Proposition 2.8 extended by the design's rational families |
| `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` | ai-altered | ai-altered | TAO Exercise 1.4.14 plus the published rational-box basis and Heine-Borel; rational endpoint families added, while elementary sets remain at MT-4 |
| `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` | literature-derived | ai-altered | TAO Exercise 1.4.12 and the published subspace definition |
| `thm-continuous-preimages-of-borel-sets-are-borel` | literature-derived | ai-altered | TAO generated-family principle plus published continuity clause |
| `thm-transfinite-description-of-generated-sigma-algebras` | ai-altered | ai-altered | TAO Exercise 1.4.15, corrected to exact AC_omega bookkeeping with published boundedness |
| `thm-cardinality-bound-for-generated-sigma-algebras` | ai-altered | ai-altered | TAO Exercise 1.4.16 under Tao's full-AC convention |
| `thm-cardinality-of-the-borel-sigma-algebra-on-rn` | ai-altered | ai-altered | TAO Exercise 1.4.16, strengthened to an honest full-AC hypothesis; FREMLIN choice audit |
| `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` | ai-altered | ai-altered | BASS Exercises 2.6/2.8; listed-family form isolates the choice-free core |
| `thm-infinite-sigma-algebra-has-continuum-many-members` | literature-derived | ai-altered | BASS Exercise 2.6 and standard Boolean-algebra argument; AC_omega stated |
| `cor-no-sigma-algebra-is-countably-infinite` | literature-derived | ai-altered | BASS Exercise 2.8; choice-free corollary from an actual listing |
| `thm-sigma-algebra-generated-by-a-countable-partition` | literature-derived | ai-altered | BASS Example 2.6 and TAO atomic-algebra discussion; all index-set cases included |
| `ex-trivial-and-discrete-sigma-algebras` | literature-derived | ai-altered | BASS Example 2.2 and TAO Exercise 1.4.10 |
| `ex-countable-cocountable-sigma-algebra` | ai-altered | ai-altered | BASS Example 2.3 with the hidden AC_omega hypothesis made explicit |
| `ex-finite-partition-sigma-algebra` | literature-derived | ai-altered | BASS Examples 2.4–2.6 and TAO atomic algebras |
| `ex-f-sigma-and-g-delta-sets-are-borel` | literature-derived | ai-altered | TAO Definition 1.4.16 and published `def-f-sigma-g-delta` |
| `ex-rationals-are-borel-but-not-g-delta` | literature-derived | ai-altered | published `cor-q-is-meager-and-not-g-delta`; TAO Borel hierarchy context |
| `ex-closed-rays-form-a-borel-generating-pi-system` | literature-derived | ai-altered | BASS Proposition 2.8 and DEMBO pi-system convention |
| `ex-borel-trace-on-the-cantor-set` | ai-altered | ai-altered | TAO trace exercise instantiated at published `def-cantor-set` |
| `fs-lambda-systems-are-closed-under-finite-intersections` | literature-derived | ai-altered | DEMBO Proposition 1.1.37 shows the extra hypothesis; design supplies the finite witness |
| `fs-increasing-unions-of-monotone-classes-are-monotone-classes` | literature-derived | ai-altered | BASS Exercise 2.4; finite-initial-segment witness |
| `fs-increasing-unions-of-sigma-algebras-are-sigma-algebras` | literature-derived | ai-altered | BASS Exercise 2.3; design supplies the 0-based tail witness |
| `fs-unions-of-two-sigma-algebras-are-sigma-algebras` | literature-derived | ai-altered | BASS Exercise 2.2; crossing two-block partitions witness |
| `fs-every-monotone-class-is-an-algebra` | literature-derived | ai-altered | BASS Exercise 2.1; finite stabilization witness |
| `fs-every-subset-of-r-is-borel` | literature-derived | ai-altered | TAO Exercise 1.4.16/Remark 1.4.18 under full AC; cardinality only, no witness |
| `fs-countably-infinite-sigma-algebras-exist` | literature-derived | ai-altered | BASS Exercise 2.8 |
| `rem-the-borel-hierarchy-never-stabilizes` | literature-derived | not-supplied | CHRIST Borel-hierarchy comment; `proved_here: false` external fallback |
| `fs-the-borel-hierarchy-closes-after-two-steps` | literature-derived | ai-altered | CHRIST strictness statement refutes the design's two-step claim |

## External fallback authoring record

`rem-the-borel-hierarchy-never-stabilizes` must be authored with:

- `proved_here: false`;
- `external_dependency.source_url`: `https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf`;
- `external_dependency.exact_statement`: `For the Borel hierarchy on the real line, iterating countable unions and intersections never stabilizes at a countable stage.`;
- `external_dependency.local_proof_attempt`: `The internal closure and transfinite-stage theorems give exhaustion but not strictness. Cardinality cannot separate levels. A diagonal proof needs universal Borel sets or equivalent descriptive-set-theory coding, which is not developed in MT-1.`;
- `external_dependency.necessity`: `The MT-1 design requires a refutation of closure after two steps; strictness is exactly the missing premise and the leaf B page prevents downstream propagation.`;
- a `sources.references` entry whose URL exactly matches the `source_url` above;
- no Proof section and `verification.precheck: n/a`.

The consumer `fs-the-borel-hierarchy-closes-after-two-steps` lists the remark in `deps`, so both receive the reader-visible fuchsia external-dependency treatment.

## New-id collision search

Command run from the repository root:

```sh
for id in <every id in research/frontier-15-batch-4.pages.json>; do
  rg -l --fixed-strings "$id" items research/plan-spec.json
done
```

It returned no exact-id hits before the manifest was written. A semantic search over `items/` and `research/plan-spec.json` for algebra of subsets, generated sigma-algebra, pi-system, lambda-system, monotone class theorem, trace sigma-algebra, set limsup/liminf, Borel hierarchy stabilization, countably infinite sigma-algebra, and countable partition generation found no published or planned duplicate. All 58 ids in the manifest are new.

New decomposition ids and their parents:

- `lem-lambda-system-with-finite-intersections-is-sigma`, `lem-lambda-good-sets`, and `lem-generated-lambda-system-closed-under-intersections` support `thm-dynkin-pi-lambda`;
- `lem-generated-monotone-class-closed-under-complements`, `lem-monotone-good-sets-for-algebra-elements`, and `lem-generated-monotone-class-closed-under-intersections` support `thm-monotone-class`;
- `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` supports the continuum lower bound and the choice-free countably-infinite corollary;
- `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` supports the seven-generator theorem.

## Per-page item inventory

### `sigma-algebras-and-borel-sets` — 42 items

1. `def-algebra-of-subsets` — definition — Algebras of subsets
2. `def-sigma-algebra` — definition — Sigma-algebras
3. `def-measurable-space` — definition — Measurable spaces and measurable sets
4. `def-generated-sigma-algebra` — definition — The sigma-algebra generated by a family of sets
5. `thm-generated-sigma-algebra-exists-and-is-minimal` — theorem — Nonempty intersections of sigma-algebras are sigma-algebras, so the generated sigma-algebra exists and is minimal
6. `def-pi-system` — definition — Pi-systems
7. `def-lambda-system` — definition — Lambda-systems, or Dynkin systems
8. `def-generated-lambda-system` — definition — The lambda-system generated by a family of sets
9. `def-monotone-class` — definition — Monotone classes of sets
10. `def-generated-monotone-class` — definition — The monotone class generated by a family of sets
11. `def-borel-sigma-algebra` — definition — The Borel sigma-algebra of a topological space
12. `def-trace-sigma-algebra` — definition — The trace of a sigma-algebra on a subset
13. `def-set-limsup-and-liminf` — definition — Limit superior and limit inferior of a sequence of sets
14. `thm-sigma-algebra-closure-laws` — theorem — Sigma-algebras are closed under countable intersections, differences, symmetric differences, and set limits
15. `prop-set-limsup-and-liminf-membership` — proposition — Set liminf means eventual membership, set limsup means repeated membership, and liminf is contained in limsup
16. `thm-generated-sigma-algebra-calculus` — theorem — Generated sigma-algebras are monotone in their generators and idempotent
17. `thm-generated-sigma-algebra-comparison-criterion` — theorem — Two families generate the same sigma-algebra when each lies in the sigma-algebra generated by the other
18. `lem-algebra-with-countable-disjoint-unions-is-sigma` — lemma — An algebra closed under countable disjoint unions is a sigma-algebra
19. `lem-algebra-with-increasing-unions-is-sigma` — lemma — An algebra closed under increasing countable unions is a sigma-algebra
20. `lem-lambda-system-with-finite-intersections-is-sigma` — lemma — A lambda-system closed under finite intersections is a sigma-algebra
21. `lem-lambda-good-sets` — lemma — For a member A of a lambda-system D, the sets B with A intersection B in D form a lambda-system
22. `lem-generated-lambda-system-closed-under-intersections` — lemma — The lambda-system generated by a pi-system is closed under finite intersections
23. `thm-dynkin-pi-lambda` — theorem — Dynkin's pi-lambda theorem
24. `lem-generated-monotone-class-closed-under-complements` — lemma — The monotone class generated by an algebra is closed under complements
25. `lem-monotone-good-sets-for-algebra-elements` — lemma — Every member of the generated monotone class intersects every original algebra member inside the generated class
26. `lem-generated-monotone-class-closed-under-intersections` — lemma — The monotone class generated by an algebra is closed under finite intersections
27. `thm-monotone-class` — theorem — The monotone class generated by an algebra equals the sigma-algebra it generates
28. `prop-sigma-algebras-are-lambda-systems-and-monotone-classes` — proposition — Every sigma-algebra is a lambda-system and a monotone class
29. `thm-trace-is-a-sigma-algebra` — theorem — The trace of a sigma-algebra is a sigma-algebra on the traced subset
30. `thm-generated-trace-commutes` — theorem — Generating a sigma-algebra commutes with taking traces
31. `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` — lemma — Every open subset of the real line is a countable union of open intervals with rational endpoints
32. `thm-seven-generators-of-the-borel-sigma-algebra-on-r` — theorem — Seven generating families for the Borel sigma-algebra on the real line
33. `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` — theorem — For n at least one, open sets, closed sets, compact sets, open balls, boxes, rational open boxes, and rational half-open boxes generate the Borel sigma-algebra on R^n
34. `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` — theorem — The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra
35. `thm-continuous-preimages-of-borel-sets-are-borel` — theorem — A continuous map has Borel preimages of Borel sets
36. `thm-transfinite-description-of-generated-sigma-algebras` — theorem — Assuming countable choice, a generated sigma-algebra is obtained in omega-one stages of complements and countable unions
37. `thm-cardinality-bound-for-generated-sigma-algebras` — theorem — Assuming the Axiom of Choice, an infinite family E generates at most |E|^aleph-zero sets
38. `thm-cardinality-of-the-borel-sigma-algebra-on-rn` — theorem — Assuming the Axiom of Choice, the Borel sigma-algebra on R^n has cardinality continuum for n at least one
39. `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` — lemma — A sigma-algebra with a listed infinite subfamily contains a disjoint sequence of nonempty members
40. `thm-infinite-sigma-algebra-has-continuum-many-members` — theorem — Assuming countable choice, every infinite sigma-algebra contains a copy of the power set of the natural numbers
41. `cor-no-sigma-algebra-is-countably-infinite` — corollary — No sigma-algebra is countably infinite
42. `thm-sigma-algebra-generated-by-a-countable-partition` — theorem — A countable partition generates exactly the unions of its blocks, and the resulting sigma-algebra is countable exactly for a finite partition

### `sigma-algebras-and-borel-sets-examples` — 16 items

1. `ex-trivial-and-discrete-sigma-algebras` — example — The trivial and discrete sigma-algebras are the two extremes
2. `ex-countable-cocountable-sigma-algebra` — example — Assuming countable choice, the countable-cocountable family is a sigma-algebra
3. `ex-finite-partition-sigma-algebra` — example — A partition into k nonempty blocks generates a sigma-algebra with 2^k members
4. `ex-f-sigma-and-g-delta-sets-are-borel` — example — F-sigma and G-delta subsets of the real line are Borel
5. `ex-rationals-are-borel-but-not-g-delta` — example — The rationals are Borel and F-sigma but neither open nor closed nor G-delta
6. `ex-closed-rays-form-a-borel-generating-pi-system` — example — Closed left rays form a pi-system generating the Borel sigma-algebra on the real line
7. `ex-borel-trace-on-the-cantor-set` — example — The Borel sigma-algebra of the Cantor set is the trace of the real Borel sigma-algebra
8. `fs-lambda-systems-are-closed-under-finite-intersections` — false-statement — FALSE: every lambda-system is closed under finite intersections
9. `fs-increasing-unions-of-monotone-classes-are-monotone-classes` — false-statement — FALSE: the union of an increasing sequence of monotone classes is a monotone class
10. `fs-increasing-unions-of-sigma-algebras-are-sigma-algebras` — false-statement — FALSE: the union of an increasing sequence of sigma-algebras is a sigma-algebra
11. `fs-unions-of-two-sigma-algebras-are-sigma-algebras` — false-statement — FALSE: the union of two sigma-algebras on one set is a sigma-algebra
12. `fs-every-monotone-class-is-an-algebra` — false-statement — FALSE: every monotone class is an algebra
13. `fs-every-subset-of-r-is-borel` — false-statement — FALSE: every subset of the real line is Borel
14. `fs-countably-infinite-sigma-algebras-exist` — false-statement — FALSE: a countably infinite sigma-algebra exists
15. `rem-the-borel-hierarchy-never-stabilizes` — remark — The Borel hierarchy on the real line never stabilizes at a countable stage
16. `fs-the-borel-hierarchy-closes-after-two-steps` — false-statement — FALSE: every Borel subset of the real line is a countable union of countable intersections of open and closed sets

## Richness report

The long-proof decomposition pass was performed. Dynkin's theorem is decomposed into the finite-intersection criterion, the fixed-A good-set lemma, and the explicit two-pass generated-lambda intersection lemma. The monotone class theorem is decomposed into complement closure, the first intersection pass against algebra members, and the second pass for arbitrary generated-class members. The generated-sigma well-definedness proof, rational-basis reduction, transfinite construction, cardinal bound, and infinite-sigma disjoint-family construction are likewise separated from their consumers.

The corollary pass was performed. It added the choice-free `cor-no-sigma-algebra-is-countably-infinite`; the eventual/repeated membership consequence for set limits; idempotence and comparison consequences for generated sigma-algebras; and the finite-versus-infinite counting consequence inside the partition theorem. No cosmetic restatement was added.

Both pages remain below the 60-item ceiling, so no split is proposed. Nothing was pruned to meet the ceiling.

## Gates and checks actually run

- `node tools/coverage-checklist.mjs research/frontier-15-batch-4.coverage.json --json` — passed without errors or warnings.
- `node tools/content-policy.mjs research/frontier-15-batch-4.pages.json --manifest-only --json` — passed without errors or warnings over the complete manifest scope.
- JSON parsing with `jq empty` — passed for all JSON artifacts.
- Proof-contract structural cross-check — passed after correcting one planned citation-use step: 45 scope ids, 45 contracts, every citation use names a planned step, and every contract has all eight boundary rows.
- Published citation-clause precheck — all clauses whose source item already exists occur verbatim in the named source section; the remaining clause points to an in-flight internal item and must be synchronized at authoring.
- Local dependency-order cross-check — every internal edge points backward, and every external dependency is published, housed on a smaller-order page, and has non-generated Statement provenance.
- `node tools/prosecheck.mjs ... --warnings` — completed with no errors; its remaining warnings are the per-page inventory totals that this Step-3 report is required to state.
- Exact-id collision search — no hits before creation.

`node tools/validate-plan.mjs research/plan-spec.json` and `node tools/depsource.mjs` were not claimed as passing because this batch file has not been spliced into `research/plan-spec.json`. The engine owns that authoritative Step-4 splice and gate.

## Confidence statement

Confidence is high in the set-family mathematics, proof decomposition, page order, and published dependency closure. Confidence is also high that the design's AC_omega cardinal-equality claim must not ship as written; full AC is sufficient, while I did not determine the weakest choice principle that would suffice for the bijection. The strictness of the Borel hierarchy was source-checked but deliberately not proved; that is the only external fallback. I did not verify semantic faithfulness of the source harvest against a second independent reader, did not run post-splice plan gates, and could not validate exact citation substrings against in-flight item bodies because those bodies do not yet exist. Step 5 must keep the proof contracts synchronized with the authored Facts and numbered steps.

Dependency-closure statement: every proposed published dependency was opened from disk; every load-bearing dependency is internal to the pair or already published on a strictly smaller-order A page. The sole exception is the documented, source-cited strictness remark on the leaf B page. There are no forward references, no cross-batch dependencies, no legacy-unclassified dependency, and no AI-generated Statement/Construction used as a dependency target.

## Step-3 fix pass

This section supersedes the earlier item totals, new-id total, and the dependency-audit rows for `thm-cantor-set-ternary-description` and `lem-of-q-dense`. The stable finding ids are those in `research/frontier-15-alpha-b-step3-scaffold-review.md`; none has been renumbered.

### B4-1 — applied

Added `lem-generated-lambda-system-exists-and-is-minimal` immediately after `def-generated-lambda-system` and `lem-generated-monotone-class-exists-and-is-minimal` immediately after `def-generated-monotone-class`. Each proves that the defining indexing family is nonempty by exhibiting the power set, that a nonempty intersection preserves the relevant closure axioms, that the intersection contains the generators, and that it is contained in every system or class containing them. The generated-lambda intersection argument and Dynkin theorem now depend explicitly on the first lemma. The complement, first good-set, second good-set, and final monotone-class arguments now depend explicitly on the second lemma wherever they use the fact that the generated object is a monotone class or invoke its minimality.

Both new items have machine-readable contracts with all eight boundary dispositions. Their empty and degenerate cases include an empty ambient set and empty generating family; their nonempty-family obligation is discharged by the explicit power-set construction, with no choice principle. Canonical coverage rows were added for both items.

Expected component provenance:

- `lem-generated-lambda-system-exists-and-is-minimal`: `provenance.statement: ai-altered`, because the well-definedness/minimality statement is isolated from the construction used in DEMBO Theorem 1.1.38; `provenance.proof: ai-altered`, because Step 5 will spell out preservation of every lambda-system axiom under nonempty intersections and the power-set witness. Reference URL: `https://adembo.su.domains/stat-310b/lnotes.pdf`.
- `lem-generated-monotone-class-exists-and-is-minimal`: `provenance.statement: ai-altered`, because the statement isolates the generated-class construction used around BASS Definition 2.9 and Theorem 2.10; `provenance.proof: ai-altered`, because Step 5 will spell out both monotone closure clauses and the power-set witness. Reference URL: `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`.

Neither Statement is AI-generated, so neither creates a generated-claim counterexample-search obligation. Exact-id and semantic collision searches over `items/` and `research/plan-spec.json` returned no match for either proposed id or statement before insertion.

### B4-2 — already correct

The manifest still states both `thm-cardinality-bound-for-generated-sigma-algebras` and `thm-cardinality-of-the-borel-sigma-algebra-on-rn` under the full Axiom of Choice and declares `def-axiom-of-choice`. The weaker countable-choice hypothesis remains confined to `thm-transfinite-description-of-generated-sigma-algebras`, exactly as Alpha approved.

### B4-3 — already correct

`thm-transfinite-description-of-generated-sigma-algebras` still cites `thm-countable-subsets-of-omega-one-are-bounded` and does not cite `thm-regularity-of-the-alephs`. This preserves the approved AC_omega-strength route.

### B4-4 — closed on disk at recheck

The leaf-page fallback remains `rem-the-borel-hierarchy-never-stabilizes` with `proved_here: false` planned, and its sole consumer remains `fs-the-borel-hierarchy-closes-after-two-steps`. The recheck Alpha accepted the refusal to fabricate an unfetched book URL, then added and fetch-stamped David Marker's *Descriptive Set Theory* notes, §2, Corollary 2.38. That corollary gives the exact strictness statement for every countable Borel rank and includes the universal-set diagonal proof. Step 5 must take `external_dependency.exact_statement` from Marker Corollary 2.38, keep the Christ note only as corroboration, and preserve the documented failed local route through universal sets.

### B4-5 — applied

Removed `thm-cantor-set-ternary-description` and `lem-of-q-dense` from `thm-cardinality-of-the-borel-sigma-algebra-on-rn`. The proof contract no longer builds a separate rational-cut/Cantor-set dictionary. Its lower bound is now the direct injection
$x\mapsto\{(x,0,\ldots,0)\}$ from `R` into the Borel subsets of `R^n` for `n>=1`; the singleton is closed, and `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` supplies that closed subsets are Borel. The upper bound uses the countable rational-box generator, the generated-sigma-algebra cardinal bound, and the existing cardinal-arithmetic dependencies. Schroeder-Bernstein then closes the equality. Every retained dependency has a named proof-contract use.

### Corrected per-page inventory

`sigma-algebras-and-borel-sets` has 44 items:

1. `def-algebra-of-subsets` — definition — Algebras of subsets
2. `def-sigma-algebra` — definition — Sigma-algebras
3. `def-measurable-space` — definition — Measurable spaces and measurable sets
4. `def-generated-sigma-algebra` — definition — The sigma-algebra generated by a family of sets
5. `thm-generated-sigma-algebra-exists-and-is-minimal` — theorem — Nonempty intersections of sigma-algebras are sigma-algebras, so the generated sigma-algebra exists and is minimal
6. `def-pi-system` — definition — Pi-systems
7. `def-lambda-system` — definition — Lambda-systems, or Dynkin systems
8. `def-generated-lambda-system` — definition — The lambda-system generated by a family of sets
9. `lem-generated-lambda-system-exists-and-is-minimal` — lemma — The generated lambda-system exists and is minimal
10. `def-monotone-class` — definition — Monotone classes of sets
11. `def-generated-monotone-class` — definition — The monotone class generated by a family of sets
12. `lem-generated-monotone-class-exists-and-is-minimal` — lemma — The generated monotone class exists and is minimal
13. `def-borel-sigma-algebra` — definition — The Borel sigma-algebra of a topological space
14. `def-trace-sigma-algebra` — definition — The trace of a sigma-algebra on a subset
15. `def-set-limsup-and-liminf` — definition — Limit superior and limit inferior of a sequence of sets
16. `thm-sigma-algebra-closure-laws` — theorem — Sigma-algebras are closed under countable intersections, differences, symmetric differences, and set limits
17. `prop-set-limsup-and-liminf-membership` — proposition — Set liminf means eventual membership, set limsup means repeated membership, and liminf is contained in limsup
18. `thm-generated-sigma-algebra-calculus` — theorem — Generated sigma-algebras are monotone in their generators and idempotent
19. `thm-generated-sigma-algebra-comparison-criterion` — theorem — Two families generate the same sigma-algebra when each lies in the sigma-algebra generated by the other
20. `lem-algebra-with-countable-disjoint-unions-is-sigma` — lemma — An algebra closed under countable disjoint unions is a sigma-algebra
21. `lem-algebra-with-increasing-unions-is-sigma` — lemma — An algebra closed under increasing countable unions is a sigma-algebra
22. `lem-lambda-system-with-finite-intersections-is-sigma` — lemma — A lambda-system closed under finite intersections is a sigma-algebra
23. `lem-lambda-good-sets` — lemma — For a member A of a lambda-system D, the sets B with A intersection B in D form a lambda-system
24. `lem-generated-lambda-system-closed-under-intersections` — lemma — The lambda-system generated by a pi-system is closed under finite intersections
25. `thm-dynkin-pi-lambda` — theorem — Dynkin's pi-lambda theorem
26. `lem-generated-monotone-class-closed-under-complements` — lemma — The monotone class generated by an algebra is closed under complements
27. `lem-monotone-good-sets-for-algebra-elements` — lemma — Every member of the generated monotone class intersects every original algebra member inside the generated class
28. `lem-generated-monotone-class-closed-under-intersections` — lemma — The monotone class generated by an algebra is closed under finite intersections
29. `thm-monotone-class` — theorem — The monotone class generated by an algebra equals the sigma-algebra it generates
30. `prop-sigma-algebras-are-lambda-systems-and-monotone-classes` — proposition — Every sigma-algebra is a lambda-system and a monotone class
31. `thm-trace-is-a-sigma-algebra` — theorem — The trace of a sigma-algebra is a sigma-algebra on the traced subset
32. `thm-generated-trace-commutes` — theorem — Generating a sigma-algebra commutes with taking traces
33. `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` — lemma — Every open subset of the real line is a countable union of open intervals with rational endpoints
34. `thm-seven-generators-of-the-borel-sigma-algebra-on-r` — theorem — Seven generating families for the Borel sigma-algebra on the real line
35. `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` — theorem — For n at least one, open sets, closed sets, compact sets, open balls, boxes, rational open boxes, and rational half-open boxes generate the Borel sigma-algebra on R^n
36. `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` — theorem — The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra
37. `thm-continuous-preimages-of-borel-sets-are-borel` — theorem — A continuous map has Borel preimages of Borel sets
38. `thm-transfinite-description-of-generated-sigma-algebras` — theorem — Assuming countable choice, a generated sigma-algebra is obtained in omega-one stages of complements and countable unions
39. `thm-cardinality-bound-for-generated-sigma-algebras` — theorem — Assuming the Axiom of Choice, an infinite family E generates at most |E|^aleph-zero sets
40. `thm-cardinality-of-the-borel-sigma-algebra-on-rn` — theorem — Assuming the Axiom of Choice, the Borel sigma-algebra on R^n has cardinality continuum for n at least one
41. `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` — lemma — A sigma-algebra with a listed infinite subfamily contains a disjoint sequence of nonempty members
42. `thm-infinite-sigma-algebra-has-continuum-many-members` — theorem — Assuming countable choice, every infinite sigma-algebra contains a copy of the power set of the natural numbers
43. `cor-no-sigma-algebra-is-countably-infinite` — corollary — No sigma-algebra is countably infinite
44. `thm-sigma-algebra-generated-by-a-countable-partition` — theorem — A countable partition generates exactly the unions of its blocks, and the resulting sigma-algebra is countable exactly for a finite partition

`sigma-algebras-and-borel-sets-examples` remains the 16-item inventory printed above; no B-page id, kind, title, order, or dependency changed in this pass.

### Richness, order, and closure after the fixes

The long-proof decomposition pass and corollary pass were rerun. B4-1 adds the two missing well-definedness lemmas because they close genuine proof obligations; it does not add cosmetic microlemmas. No further corollary follows cheaply without restating an existing result. The A page remains below the 60-item ceiling, so no split is proposed and nothing was pruned.

All new internal edges point backward on the A page. No forward reference or cross-batch dependency was introduced. The two new items use only earlier same-page definitions. The external dependency set is smaller after B4-5, and all retained external targets remain published on strictly smaller-order A pages with eligible Statement provenance. The sole external fallback remains the already documented Borel-hierarchy strictness remark on the leaf companion.

### Step-3 fix-pass gates

- `node tools/coverage-checklist.mjs research/frontier-15-batch-4.coverage.json` — passed with 61 harvested results and no errors or warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-4.pages.json` — passed: 60 scoped items, no errors or warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed for the current, pre-splice spec: declared order is acyclic and the pages with item lists have no item cycle, forward reference, B-page dependency, or unresolved id. This is not a claim that batch 4 has already been spliced.
- JSON parsing passed for all three JSON artifacts.
- The scaffold-structural proof-contract check passed: 47 proof-bearing manifest items, 47 scope ids, 47 contracts, and all eight boundary rows on every contract. `node tools/proof-contract.mjs ... --strict` was also tried but is an authoring-stage gate: it reported the expected `item-missing` error for every planned item because no Step-5 `items/*.md` file exists yet.
- `node tools/prosecheck.mjs ... --warnings` passed with no errors. Its count warnings are the required historical and corrected per-page inventories in this report.
- `node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-4.coverage.json --stamp` could not stamp any source because this sandbox returned `ENOTFOUND` for all five hosts. No permission prompt or escalation was attempted, and no verification metadata was fabricated. The coverage structure remains clean, but the engine must rerun the fetch-stamp command in a network-capable environment before treating URL liveness as closed.

## Scaffold-fix round

The ids in this section follow `research/frontier-15-scaffold-closure.json`, whose numbering differs from the earlier Markdown review scheme.

### B4-1 — pushed back

The finding is stale against the current scaffold. `lem-generated-lambda-system-exists-and-is-minimal` is already immediately after `def-generated-lambda-system`; its contract proves nonemptiness of the indexing family via the power set, preservation of every lambda-system axiom under nonempty intersections, containment of the generators, and minimality. `lem-generated-lambda-system-closed-under-intersections` and `thm-dynkin-pi-lambda` both declare the lemma. The coverage ledger records the item in `canonical`, and the Dembo source row and locator carry the construction used in Theorem 1.1.38. No second copy or replacement id is warranted.

### B4-2 — pushed back

The finding is stale against the current scaffold. `lem-generated-monotone-class-exists-and-is-minimal` is already immediately after `def-generated-monotone-class`; its contract proves the power-set witness, preservation of increasing unions and decreasing intersections under nonempty intersections, containment of the generators, and minimality. The complement lemma, both good-set passes, the intersection lemma, and `thm-monotone-class` declare it where needed. The coverage ledger records the item in `canonical`, and the Bass source row and locator carry Definition 2.9 and the proof route of Theorem 2.10. No duplicate item is warranted.

### B4-3 — pushed back

The premise that Christ is the only backing is stale. The recheck Alpha fetched, read, and stamped David Marker, *Descriptive Set Theory*, §2, Definition 2.36 through Corollary 2.38, and added a faithful three-row harvest. Corollary 2.38 states that for every uncountable Polish space and every countable ordinal rank, the additive and multiplicative Borel classes differ, hence the hierarchy is strict, and the source supplies a proof. `research/frontier-15-alpha-b-recheck.md` expressly accepted this scholarly full-proof treatment in place of an unfetched book URL and changed the Step-5 obligation to quote Marker Corollary 2.38. A shell fetch of the proposed Kechris institutional mirror in this round failed at DNS resolution, so no unverified URL or fabricated stamp was added.

### B4-4 — pushed back

The finding is stale against the current scaffold. Neither `thm-cantor-set-ternary-description` nor `lem-of-q-dense` remains in the dependency list of `thm-cardinality-of-the-borel-sigma-algebra-on-rn`. Its contract instead uses the injection $x\mapsto\{(x,0,\ldots,0)\}$, the closed-set clause of `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn`, the rational-box upper bound, and Schroeder--Bernstein. Every retained dependency has a named use, so restoring either removed edge would reintroduce the cited defect.

### B4-5 — pushed back

The finding itself says that no change is owed. The approved state remains intact: `thm-transfinite-description-of-generated-sigma-algebras` assumes countable choice and cites `thm-countable-subsets-of-omega-one-are-bounded`, while both cardinality theorems state the full Axiom of Choice and declare `def-axiom-of-choice`. No adjudicated hypothesis or dependency was reopened.

### Gate rerun

- `node tools/coverage-checklist.mjs research/frontier-15-batch-4.coverage.json` passed with no errors or warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-4.pages.json` passed with no errors or warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` passed for the current pre-splice plan. This does not claim that Batch 4 has been spliced.
- JSON parsing passed for the owned page-manifest, coverage, and proof-contract artifacts. Every coverage source carries a substantive PDF `fetch_verified` stamp.
- `node tools/prosecheck.mjs ... --warnings` reported no errors. Its warnings are the required historical and corrected per-page inventories already present in this report.

## Step-5 authoring

Authored the complete pair `library/measure-theory/sigma-algebras-and-borel-sets.md` and `library/measure-theory/sigma-algebras-and-borel-sets-examples.md`, together with every item declared for the pair. The A-page summary has exactly two nonempty prose paragraphs, and the B page has no authored body. All items remain `status: draft` and `origin: session`; no `verification.audited`, `verification.verified`, or judge record was written.

For the per-item ledger below, `literature-derived` means that the claim or construction is present in the named source and only the notation and local hypotheses were aligned with the library. `ai-altered` on a Statement means that a source-backed claim was isolated, combined, or narrowed for this dependency graph; it does not mean the claim was invented. `ai-altered` on a proof means that the numbered derivation was written locally and checked against the exact Facts on disk. `not-applicable` is used only for definitions with no local derivation, and `not-supplied` is used only for the disclosed external fallback. There are no `ai-generated` Statements or Constructions in this batch, so no generated-claim counterexample search was required.

### Per-item result and component-provenance ledger

- `def-algebra-of-subsets` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Definition 2.1 supplies the definition, with no local proof claim.
- `def-sigma-algebra` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Definition 2.1 supplies the countable-closure definition, adapted to sequences indexed from zero.
- `def-measurable-space` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Definition 2.1 supplies the measurable-space terminology.
- `def-generated-sigma-algebra` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Lemma 2.7 supplies the intersection construction, with existence forwarded to its named theorem.
- `thm-generated-sigma-algebra-exists-and-is-minimal` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Lemma 2.7 supplies the result and the local proof verifies nonempty intersections, the power-set witness, and minimality.
- `def-pi-system` — precheck `n/a`; statement `ai-altered`, proof `not-applicable`; Dembo Definition 1.1.36 supplies the concept, altered only to retain the scaffold's explicit nonempty-family convention.
- `def-lambda-system` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Dembo Definition 1.1.36 supplies the relative-difference and increasing-union formulation used by every local proof.
- `def-generated-lambda-system` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Dembo's proof of Theorem 1.1.38 supplies the intersection construction, with well-definedness forwarded to the next lemma.
- `lem-generated-lambda-system-exists-and-is-minimal` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the result is isolated from Dembo's Theorem 1.1.38 proof, and the local proof checks the power-set witness, all closure axioms, containment, and minimality.
- `def-monotone-class` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Definition 2.9 supplies the definition.
- `def-generated-monotone-class` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Definition 2.9 and Theorem 2.10 supply the generated-class construction, with well-definedness forwarded to the next lemma.
- `lem-generated-monotone-class-exists-and-is-minimal` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the result is isolated from Bass's construction, and the local proof checks both monotone operations, the power-set witness, containment, and minimality.
- `def-borel-sigma-algebra` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Tao Definition 1.4.16 supplies the definition.
- `def-trace-sigma-algebra` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Tao Exercise 1.4.12 supplies the trace construction, and `justified_by` records the forward proof of the sigma-algebra axioms.
- `def-set-limsup-and-liminf` — precheck `n/a`; statement `literature-derived`, proof `not-applicable`; Bass Exercise 2.9 supplies the set-limit definitions, reindexed from zero.
- `thm-sigma-algebra-closure-laws` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Definition 2.1 and Exercise 2.9 supply the closure claims, and the local proof derives each operation from the sigma-algebra axioms.
- `prop-set-limsup-and-liminf-membership` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.9 supplies the membership characterizations, and the local proof discharges both directions and the initial index.
- `thm-generated-sigma-algebra-calculus` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Section 2.1 supplies monotonicity and idempotence, proved locally from minimality.
- `thm-generated-sigma-algebra-comparison-criterion` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the comparison criterion is isolated from Tao Exercise 1.4.14 and proved locally by two applications of monotonicity.
- `lem-algebra-with-countable-disjoint-unions-is-sigma` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Section 2.1 supplies the disjointification criterion and the local proof writes the disjoint pieces explicitly.
- `lem-algebra-with-increasing-unions-is-sigma` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass's monotone-class proof route supplies the criterion and the local proof uses finite partial unions.
- `lem-lambda-system-with-finite-intersections-is-sigma` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Dembo Proposition 1.1.37 supplies the result and the local proof derives complements, finite unions, and countable unions.
- `lem-lambda-good-sets` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; this named good-set lemma is isolated from Dembo's proof of Theorem 1.1.38 and every lambda-system axiom is checked locally.
- `lem-generated-lambda-system-closed-under-intersections` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Dembo's two-pass argument supplies the source route and the local proof records both minimality applications.
- `thm-dynkin-pi-lambda` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Dembo Theorem 1.1.38 supplies the theorem and the local proof combines the preceding intersection lemma, the sigma criterion, and both minimalities.
- `lem-generated-monotone-class-closed-under-complements` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the complement good-class is isolated from Bass's proof of Theorem 2.10 and proved by minimality.
- `lem-monotone-good-sets-for-algebra-elements` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the first intersection pass is isolated from Bass's proof and checked for increasing unions and decreasing intersections.
- `lem-generated-monotone-class-closed-under-intersections` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the second intersection pass is isolated from Bass's proof and closed by minimality.
- `thm-monotone-class` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Theorem 2.10 supplies the equality and the local proof builds the algebra and proves both inclusions.
- `prop-sigma-algebras-are-lambda-systems-and-monotone-classes` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Dembo Definitions 1.1.36 and 1.1.43 supply the inclusions and the local proof derives each closure property.
- `thm-trace-is-a-sigma-algebra` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao Exercise 1.4.12 supplies the result and the local proof checks the three sigma-algebra axioms on the traced set.
- `thm-generated-trace-commutes` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the commuting identity is adapted from Tao Exercise 1.4.12 and the reverse inclusion is proved with an explicit good-family argument.
- `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Proposition 2.8 supplies the rational-interval basis result, with the empty open set handled explicitly.
- `thm-seven-generators-of-the-borel-sigma-algebra-on-r` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Bass Proposition 2.8 supplies the generator list and the local proof verifies the exact open, half-open, and ray identities using rational density.
- `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Tao Exercise 1.4.14 supplies the generator theorem and the local proof checks rational half-open endpoints, the countable ball basis, and compact truncations for `n>=1`.
- `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao Exercise 1.4.12 supplies the identity and the local proof obtains both inclusions from the subspace topology and generated minimality.
- `thm-continuous-preimages-of-borel-sets-are-borel` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao Remark 1.4.15 supplies the induction principle and the local good-family proof checks complements and countable unions.
- `thm-transfinite-description-of-generated-sigma-algebras` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Tao Exercise 1.4.15 supplies the stage description, altered to state the exact countable-choice cost, and the local proof records recursion, common-stage boundedness, closure, and minimality.
- `thm-cardinality-bound-for-generated-sigma-algebras` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Tao Exercise 1.4.16 supplies the AC cardinal bound, and the local proof verifies the successor, limit, and omega-one union bounds.
- `thm-cardinality-of-the-borel-sigma-algebra-on-rn` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Tao Exercise 1.4.16 and Fremlin supply the source-backed size claim under full AC, and the local proof gives explicit injections rather than inferring a bijection from code-space surjections.
- `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Bass Exercises 2.6 and 2.8 supply the disjoint-family route, and the local proof separates the persistent-atom and atomless-splitting cases with a recursive construction.
- `thm-infinite-sigma-algebra-has-continuum-many-members` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.6 supplies the claim and the local proof records the countable-choice selection, the disjoint sequence, the power-set injection, and Cantor's obstruction.
- `cor-no-sigma-algebra-is-countably-infinite` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.8 supplies the corollary and the local contradiction uses a bijective listing, disjoint members, and Cantor's theorem.
- `thm-sigma-algebra-generated-by-a-countable-partition` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Examples 2.4–2.6 supply the block-union description and the local proof handles the empty partition, finite count, and both directions of finiteness.
- `ex-trivial-and-discrete-sigma-algebras` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Example 2.2 supplies the examples and the local verification includes the empty ambient set where the extremes coincide.
- `ex-countable-cocountable-sigma-algebra` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; Bass Example 2.3 supplies the family, altered to expose its countable-choice hypothesis, and the local proof handles both union cases.
- `ex-finite-partition-sigma-algebra` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Examples 2.4–2.6 supply the example and the local proof instantiates the partition theorem and counts subsets.
- `ex-f-sigma-and-g-delta-sets-are-borel` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao Definition 1.4.16 supplies the Borel closure claim and the local proof invokes exactly the closed/open and countable closure clauses.
- `ex-rationals-are-borel-but-not-g-delta` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao's Borel definition and the published category result supply the claim, while the local proof separately checks countability, density, non-openness, and non-closedness.
- `ex-closed-rays-form-a-borel-generating-pi-system` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Proposition 2.8 supplies the generator family and the local proof checks intersections before invoking the real-line generator theorem.
- `ex-borel-trace-on-the-cantor-set` — precheck `pass`; statement `ai-altered`, proof `ai-altered`; the Cantor-set instance is adapted from Tao Exercise 1.4.12 and the local proof applies the subspace trace theorem to the fixed subset.
- `fs-lambda-systems-are-closed-under-finite-intersections` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Dembo Proposition 1.1.37 identifies the missing hypothesis and the local four-point witness verifies the lambda axioms and exhibits the failed intersection.
- `fs-increasing-unions-of-monotone-classes-are-monotone-classes` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.4 supplies the false claim and the local finite-subset witness includes the zero stage.
- `fs-increasing-unions-of-sigma-algebras-are-sigma-algebras` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.3 supplies the false claim and the local tail-partition witness identifies the finite-cofinite union and the missing even set.
- `fs-unions-of-two-sigma-algebras-are-sigma-algebras` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.2 supplies the false claim and the local crossing-set witness exhibits failure of intersection closure.
- `fs-every-monotone-class-is-an-algebra` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.1 supplies the false claim and the local finite-chain witness exhibits the missing complement.
- `fs-every-subset-of-r-is-borel` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Tao Exercise 1.4.16 and Remark 1.4.18 supply non-Borel existence under the stated cardinal route, and the local contradiction notes that the omitted set cannot be empty.
- `fs-countably-infinite-sigma-algebras-exist` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Bass Exercise 2.8 supplies the false claim and the local contradiction invokes the preceding corollary.
- `rem-the-borel-hierarchy-never-stabilizes` — precheck `n/a`; statement `literature-derived`, proof `not-supplied`; Marker Corollary 2.38 is quoted as the primary exact statement, Christ is corroboration, and the absent universal-set proof is disclosed in `external_dependency`.
- `fs-the-borel-hierarchy-closes-after-two-steps` — precheck `pass`; statement `literature-derived`, proof `ai-altered`; Marker Corollary 2.38 supplies strictness and the local contradiction shows that the proposed fixed closure stage would force stabilization.

### Scaffold and authoring ledger

No item id or title changed, and no planned item was dropped, renamed, or merged. The Statement of `fs-every-subset-of-r-is-borel` now says “Assume the Axiom of Choice” because its approved cardinal refutation and Tao source both carry that hypothesis; the title and refuted conclusion are unchanged. No other authored Statement was narrowed from the approved scaffold. The optional equivalent complement-and-disjoint-union axiom system for lambda-systems was not stated because no proof on this pair uses it; the Dembo coverage heading was split so the definition remains `included` and that unused subresult is now honestly `deferred` with a reason.

The following dependency-list additions record facts genuinely used by the final prose:

- `thm-seven-generators-of-the-borel-sigma-algebra-on-r` adds `lem-q-and-irrationals-dense-r` for every rational endpoint and ray identity.
- `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` adds `cor-cauchy-reals-lub-complete`, `thm-of-archimedean`, and `cor-archimedean-reciprocal` for the complete-field hypothesis, reciprocal ball radii, endpoint intersections, and compact truncations.
- `thm-cardinality-bound-for-generated-sigma-algebras` adds `thm-omega-one-is-the-least-uncountable-ordinal` for `omega_1 <= 2^{aleph_0}`.
- `thm-cardinality-of-the-borel-sigma-algebra-on-rn` adds `thm-hessenberg` for `N x N` being equinumerous with `N` in the function-space upper bound.
- `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence` adds `thm-recursion` for the canonical atomless splitting branch.
- `thm-infinite-sigma-algebra-has-continuum-many-members`, `cor-no-sigma-algebra-is-countably-infinite`, and `thm-sigma-algebra-generated-by-a-countable-partition` each add `def-sigma-algebra` for their countable-union constructions; the first also adds `def-countable` to justify the final uncountability implication.
- `ex-countable-cocountable-sigma-algebra` adds `lem-subset-of-countable` for the cocountable-union branch.
- `ex-rationals-are-borel-but-not-g-delta` adds `lem-q-and-irrationals-dense-r` for the independent non-open and non-closed checks.
- `fs-every-subset-of-r-is-borel` adds `def-sigma-algebra` to close the empty-subset boundary explicitly.

`def-trace-sigma-algebra` also adds `justified_by: [thm-trace-is-a-sigma-algebra]`, because its construction is a family of subsets immediately but its sigma-algebra status is a forward well-definedness obligation. The proof route for `thm-cardinality-of-the-borel-sigma-algebra-on-rn` was changed from the scaffold note's singleton embedding of `R` to the direct injection `P(N) -> B(R^n)`, sending a subset to the union of its coordinate-axis singleton points. This avoids a forbidden dependency on the published continuum example housed on a B page and proves the required lower bound directly. The Statement and choice hypothesis are unchanged.

The external fallback was authored exactly as approved: `rem-the-borel-hierarchy-never-stabilizes` is `proved_here: false`, its `external_dependency.source_url` is Marker, its exact statement is Marker Corollary 2.38, the failed local universal-set route and necessity are present, and Christ is only corroboration. Its sole consumer is the leaf false-statement item.

The final mathematical and rendering read made proof-only clarifications without changing claims or dependency lists: the rational-ball basis now chooses the reciprocal radius before the rational centre so the chosen ball both contains the point and stays inside the original ball; the Boolean-algebra disjoint-sequence lemma now proves that the complement of the finite atom union is nonempty; the four-point lambda-system witness now lists the direct containment `emptyset subset X` explicitly; and the countable-partition proof now writes the generator as the well-formed family `\{P_i:i\in I\}`. The last correction was mirrored in the proof contract before the final strict and render checks.

### Step-5 gates actually run

- `tools/reflow.mts` over all batch items — no file needed reflowing.
- `tools/precheck.mts` over all batch items — all proof-bearing items passed; definitions and the external remark are correctly `n/a`.
- `tools/proof-contract.mjs ... --strict` — passed with every numbered step mapped exactly once and every direct fact citation carrying its exact source-section excerpt and all uses.
- `tools/boundary-audit.mjs ... --fail-on-template --fail-on-contradicted` — passed with no template cluster and no contradicted disposition.
- `tools/citation-fidelity.mjs ... --fail-on-missing-quote` — passed: every quote was found and no widening candidate remained.
- `tools/finite-smoke.mjs` — passed; this batch has no registry-selected finite-smoke obligation.
- `tools/risk-report.mjs` without `--require-reviewed` — passed and produced the Step-5 routing tiers; no Alpha-only review field was fabricated.
- `tools/coverage-checklist.mjs` — passed after synchronizing the deferred lambda-system equivalence row.
- `tools/validate-plan.mjs research/plan-spec.json` — passed for the spliced plan: order is acyclic and there is no item cycle, forward edge, B-page dependency, or unresolved id in pages with item lists.
- `tools/content-policy.mjs research/frontier-15-batch-4.pages.json` — passed for all scoped items with no errors or warnings.
- `tools/prosecheck.mjs` over the batch items and both pages — passed with no errors or warnings.
- `tools/rendercheck.mjs` over the batch items and both pages — passed for all scoped files: frontmatter parsed, all math parsed under real KaTeX, and no delimiter or wikilink-in-math defect remained.
- `tools/source-fetch-check.mjs --coverage research/frontier-15-batch-4.coverage.json` — passed with all six recorded sources fetch-verified. This supersedes the scaffold-stage network failure recorded above; no source metadata was fabricated while the network was unavailable.
- `tools/depsource.mjs` — the global scan exited cleanly with zero unresolved dependencies.
- `tools/extcheck.mjs` — passed. `tools/citecheck.mjs` also exited cleanly; none of its heuristic warnings names a batch-4 item.

The required global `tools/depcheck.mjs` and `tools/fwdcheck.mjs` initially exposed this batch's malformed backslashes in double-quoted `short` fields and an unrelated unresolved in-flight link. The batch YAML was repaired, and a final rerun after the concurrent file settled passed both global gates. There is no scoped mathematical, citation, or repository-gate blocker.

No judge was run, as required. No published dependency was edited, so the dependency-repair protocol was not invoked.

### Confidence and limits

Confidence is high in the authored set-system arguments, the choice-strength separation between the transfinite theorem and the cardinal theorems, the zero/one and empty-partition handling, and the exact dependency citations. The durable contract is synchronized to the final prose and passes both the boundary and citation-fidelity detectors.

I did not run a Step-7 judge, did not perform Alpha's Step-6 risk review, and did not independently reproduce Marker's universal-set diagonal proof. I also did not determine the weakest choice principle below full AC that could recover the Borel-cardinality equality. The source-fetch checker did revalidate all recorded source stamps, but that liveness check is not an independent mathematical verification of their contents. The only nonlocal mathematical premise left unproved is the disclosed Marker strictness theorem; all requested repository-wide gates were green on the final rerun.
