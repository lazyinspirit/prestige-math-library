# Frontier 12 batch 2 — Beta scaffold notes

Run: frontier-12  
Batch: 2, filtration and exactness  
Role: Beta, steps 1–2; returning step-5 author

## Outcome and split decision

The machine scaffold contains four pages:

| order | page | kind | items |
|---:|---|:---:|---:|
| 66 | composition-series-and-solvable-groups | A | 27 |
| 67 | composition-series-and-solvable-groups-examples | B | 10 |
| 104 | free-modules-and-exact-sequences | A | 29 |
| 105 | free-modules-and-exact-sequences-examples | B | 10 |

No split is proposed. Both A pages are below the binding 60-item ceiling after the canonical harvest. The counts were reached by combining clauses only when they share one proof mechanism, not by dropping source results to meet a target.

There is no edge between the two pairs. The in-memory splice into plan-spec.json passes validate-plan.mjs; all B items cite A or published items only, and no item anywhere in this batch depends on a B-page item.

## Proposed two-paragraph A-page summaries

### composition-series-and-solvable-groups

A subnormal series filters a group by successive normal subgroups, exposing quotient factors that may depend on the chosen chain. The Zassenhaus butterfly lemma compares one pair of adjacent factors, the Schreier theorem assembles those comparisons into equivalent refinements, and the Jordan–Hölder theorem then proves that the simple factors and composition length of a finite group are independent of its composition series. Worked chains for cyclic and symmetric groups show both the theorem's force and its limit: equal composition factors do not determine the group.

The derived series gives a canonical test for solvability and proves closure under subgroups, quotients, extensions, and finite products; it also makes the nonsolvability of \(A_5\) and \(S_n\) for \(n\ge5\) immediate from the published simplicity results. The upper and lower central series similarly characterize nilpotence, prove that finite \(p\)-groups are nilpotent, and explain why nilpotent groups are solvable while arbitrary extensions of nilpotent groups need not be nilpotent.

### free-modules-and-exact-sequences

Direct sums lead to free modules through a universal property: a function on a basis extends uniquely to a module homomorphism, and every module is a quotient of a free one. Finite rank is invariant over every nonzero commutative ring by a choice-free determinant argument, but an explicit endomorphism ring has a regular module with bases of sizes one and two. Exact and short exact sequences then organize kernels, images, cokernels, splitting, the Four and Five Lemmas, and the connecting map of the Snake Lemma.

Projective modules lift through epimorphisms, injective modules extend across monomorphisms, and the splitting and Hom-exactness criteria make that duality precise. Free modules and direct sums supply enough projectives; Baer's criterion, divisible groups, coinduction, products of injectives, and the character-dual construction supply enough injectives. Every statement marks its choice cost: finite lifts are choice-free, while arbitrary bases, arbitrary products, Baer's Zorn argument, and the resulting enough-projective/injective theorems use full AC rather than merely countable choice or dependent choice.

## Canonical source ledger

The full heading-by-heading ledger is research/frontier-12-batch-2.coverage.json. These are the treatments actually read:

| pair | source and exact range | role |
|---|---|---|
| composition series | J. S. Milne, Group Theory, Chapter 3, Definition 3.6 and Remark 3.7(a), plus Chapter 6, pp. 86–95, chapter heading through Corollary 6.17, https://www.jmilne.org/math/CourseNotes/GT.pdf | Primary full course notes for characteristic subgroups, composition series, solvability, derived series, nilpotence, and central extensions. |
| composition series | Keith Conrad, Subgroup Series I, Theorem 4.13 through Theorem 5.7, pp. 8–15, https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf | Independent lecture-note treatment of upper/lower central series and their extremal properties. |
| composition series | Kiyoshi Igusa, Notes on Jordan–Hölder, §5, pp. 1–2, Definitions 5.1–5.2 through Theorem 5.5, https://people.brandeis.edu/~igusa/Math131b/JH.pdf | Independent proof spine for Zassenhaus, Schreier refinement, and Jordan–Hölder. |
| modules | Alexander Kleshchev, Lectures on Abstract Algebra for Graduate Students, §§3.6, 3.14, 3.15, pp. 137–139 and 163–175 through Theorem 3.15.5, https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf | Primary full course notes for free, projective, injective, exact, Hom, Baer, divisible, and enough-injective results. |
| modules | The Stacks Project, tags 05CD, 01D6, 01D8, and 07JV, at the exact numbered ranges in the coverage file | Independent monograph treatment of projectives, injectives, functorial injective embeddings, and the Snake Lemma. |
| modules | Pedram Hekmati, Homological Algebra, §3.1, Theorems 3.1.3–3.1.4 and following remarks, p. 19, https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf | Independent lecture-note statement of the Snake and Five Lemmas. |

### Harvest yield and declines

The checklist contains 137 source/canonical headings after the Alpha stage-0 coverage closure:

- composition page: 51 included headings mapping to 36 distinct included targets, 7 inline, 2 already-published, and 10 declines; the union of dispositions names all 37 scaffolded items in the pair;
- module page: 52 included headings mapping to 37 distinct included targets, 8 inline, and 7 declines; the union of dispositions names all 39 scaffolded items in the pair.

The 22 added mappings are coverage-only: no item, id, order, dependency, proof
strategy, or proof contract changed. Source rows now name the unnumbered Milne
finite-existence and factor-order statements, Milne's characteristic and
derived-series material, and the exact Kleshchev clauses for direct sums, rank,
short-exact endpoints, the canonical split sequence, Hom's failure boundary,
and projective nonfreeness. Canonical rows explicitly identify the seven local
boundary witnesses that have no separately named heading in the declared
locators. All seven are `ai-altered`, not `ai-generated`; this batch still has
no AI-generated Statement or Construction.

The four Stacks Project source entries are uniformly classified as `monograph`
in the coverage artifact, matching D9/C10. That classification was already
present when this fix round began, so no source-kind mutation was needed.

The declines most likely to be challenged are deliberate subject-boundary decisions, not missing local lemmas:

1. **Every group of order below 60 is solvable.** Milne obtains this from his preceding Sylow chapter. This page proves the in-closure small-order payload \(S_3\), \(S_4\), and all finite \(p\)-groups, but a uniform order-by-order theorem would duplicate the later Sylow page.
2. **Feit–Thompson.** Its proof is monograph-scale and classification-adjacent; no result here depends on it.
3. **Schur–Baer–Hall finiteness refinements.** Conrad's finite-index relationships between upper and lower central terms require substantial later commutator machinery.
4. **Arbitrary infinite bases over a commutative ring have equal cardinality.** The library deliberately defines vector-space dimension only for finite bases and has not developed the cardinal arithmetic needed to compare arbitrary bases. The finite invariant-basis-number theorem is fully built here.
5. **Ext characterizations of projectivity and the Noetherian refinement.** Ext and resolutions are later pages; the lifting, splitting, direct-summand, and Hom-exactness characterizations are all built now.
6. **Injective hulls and projective covers.** Minimality/essential-extension theory and the finiteness conditions for covers belong with later resolutions and semisimple modules.
7. **Abelian-category versions of Snake and Five.** The module theorems receive complete element chases; the categorical generalizations wait for the category/abelian-category track.

The linear-group examples in Milne and Conrad (flag stabilizers, affine groups, and \(GL_2\)) are also declined because page 66 has no matrix-page prerequisite. The integral Heisenberg example is retained using its explicit \(\mathbb Z^3\) group law, avoiding that illegal edge.

## Convention and source disagreements

1. **Normal versus subnormal series.** Milne and the library call a chain subnormal when each term is normal only in the preceding term, and normal when every term is normal in \(G\). Conrad calls the first object a “normal series.” Authored text must use the library/Milne convention and mention Conrad's variant once.
2. **Commutators.** The library and current Milne edition use \([g,h]=ghg^{-1}h^{-1}\); sources using \(g^{-1}h^{-1}gh\) reverse several displayed identities.
3. **Central-series indexing.** Use \(\gamma_1(G)=G\), \(\gamma_{r+1}(G)=[G,\gamma_r(G)]\), \(Z_0(G)=1\), and class \(c\) when \(\gamma_{c+1}=1\), equivalently \(Z_c=G\).
4. **“Metabelian.”** Milne uses the word near class-two nilpotence. The standard meaning is derived length at most two, which is weaker. The scaffold does not adopt Milne's terminology.
5. **Sides of modules.** The library's unqualified module is a unital left module. Baer's criterion therefore uses left ideals, and coinduction uses \((r\varphi)(s)=\varphi(sr)\). The Stacks Algebra material is commutative-ring oriented; the coinduction proof establishes enough injectives for arbitrary unital rings, while the character-dual functorial construction is stated here for commutative rings.
6. **Choice.** The sources work in ordinary ZFC and often suppress selections. This scaffold states full AC at arbitrary free-basis lifts, arbitrary direct sums/products, Baer, and enough projectives/injectives; finite versions use the published finite-choice theorem.
7. **Kleshchev typos.** The injective clause of Theorem 3.14.9 says “projective” where the diagram and proof require “injective.” The proof of Theorem 3.14.18 calls the containing abelian group “free,” while Lemma 3.14.16 supplies a divisible group. Neither wording will be copied.
8. **Rank.** Invariant basis number means finite \(R^m\cong R^n\Rightarrow m=n\). Infinite cardinal-valued rank is not defined on this page. The zero ring is excluded from the commutative-ring theorem.

## Choice-strength ledger

| result | exact cost in this scaffold |
|---|---|
| finite group composition series; Zassenhaus, Schreier, Jordan–Hölder; derived and central series | ZF; all constructions and inductions are finite |
| direct sums, free modules, their universal properties, and every module as a quotient of a free module | ZF; finite support makes all displayed sums finite |
| finite invariant basis number over a nonzero commutative ring | ZF; the determinant expansion avoids maximal ideals and vector-space bases |
| a finite free module is projective | finite choice, hence a theorem of ZF in the published formulation |
| an arbitrary free module is projective | full AC, choosing one lift for every basis element |
| arbitrary direct sums of projectives and arbitrary products of injectives | full AC for simultaneous coordinate lifts/extensions; finite families need only finite choice |
| enough projectives | full AC, because the canonical free cover is projective only after the arbitrary-basis lift |
| splitting, Hom left exactness, Four, Five, and Snake Lemmas | ZF; each lift is one existential instantiation in a fixed finite diagram |
| Baer's converse | full AC through Zorn's lemma |
| injective implies divisible over a PID | ZF |
| divisible implies injective over a PID | full AC through Baer/Zorn |
| every abelian group embeds in a divisible group | ZF via \(\mathbb Z^{(A)}\subseteq\mathbb Q^{(A)}\) and a quotient |
| coinduction of an injective abelian group | no additional choice beyond the injectivity hypothesis |
| enough injectives and the functorial character-dual target | full AC through Baer and arbitrary products |

No proof uses countable choice or dependent choice as a separate principle.

## Published dependencies opened on disk

Every direct published dependency in the manifest was opened in full. No published item with missing component provenance is load-bearing.

| id | on-disk provenance and confidence route |
|---|---|
| cor-derived-subgroups-of-symmetric-and-alternating-groups | Literature-derived statement, AI-altered proof; exact statement matches Milne and was audited in frontier 11. |
| cor-determinant-vanishes-with-a-zero-or-repeated-column | Literature-derived statement, AI-altered proof; exact alternating-multilinear consequence checked directly. |
| cor-order-of-a-quotient-group | AI-altered statement, AI-generated proof; formula independently confirmed in Milne/Judson and used only at statement level. |
| def-axiom-of-choice | Literature-derived definition; exact family/product formulation checked. |
| def-center-of-a-group | Literature-derived definition; exact convention checked. |
| def-commutator-and-commutator-subgroup | Literature-derived definition; orientation checked against Milne. |
| def-determinant-of-a-square-matrix | Literature-derived definition; commutative-ring and \(n\ge1\) scope checked. |
| def-generated-cyclic-finitely-generated-and-free-modules | Literature-derived definition; finite-linear-combination basis convention checked. |
| def-generated-subgroup | AI-altered definition; standard intersection definition independently verified and source-backed. |
| def-group | AI-altered definition; audited standard group/abelian-group convention. |
| def-group-homomorphism | AI-altered definition; exact product-preserving convention checked. |
| def-group-isomorphism-and-automorphism | Literature-derived definition; exact automorphism convention checked. |
| def-injection-surjection-bijection | AI-altered definition; audited and used only for its elementary clauses. |
| def-left-and-right-modules | Literature-derived definition; unital-left default and right convention checked. |
| def-module-homomorphism-kernel-image-and-cokernel | Literature-derived definition; exact clauses checked. |
| def-normal-subgroup | Literature-derived definition; conjugation convention checked. |
| def-principal-ideal-domain | Literature-derived definition; domain and principal-ideal clauses checked. |
| def-quotient-group | Literature-derived definition; coset multiplication and normality scope checked. |
| def-quotient-module | Literature-derived definition; additive-coset scalar action checked. |
| def-ring | AI-altered definition; audited unital, possibly noncommutative convention checked. |
| def-ring-matrix-product-identity-and-transpose | AI-altered statement; formulas independently matched Waterloo/Massot. |
| def-simple-group | Literature-derived definition; nontriviality is explicit. |
| def-subgroup | AI-altered definition; audited closure formulation checked. |
| def-submodule | Literature-derived definition; exact additive/scalar clauses checked. |
| def-zero-divisor-and-integral-domain | AI-altered definition; audited nonzero commutative-domain convention checked. |
| lem-composition-and-identity-linear-maps | Literature-derived statement, AI-generated proof; exact claim independently verified from definitions. |
| lem-conjugating-a-cycle-relabels-its-entries | Literature-derived statement/proof; right-factor-first convention checked. |
| lem-every-integer-above-one-has-a-prime-divisor | AI-altered statement, AI-generated proof; audited least-divisor argument checked; statement only is used. |
| lem-finite-choice | AI-altered statement/proof; audited natural-number-indexed scope and empty family checked. |
| prop-linear-maps-form-a-vector-space | Literature-derived statement, AI-generated proof; pointwise-operation claim independently verified. |
| thm-alternating-group-is-simple-for-n-at-least-five | Literature-derived statement/proof; audited in frontier 11. |
| thm-cauchys-theorem-for-finite-groups | Literature-derived statement, AI-altered proof; matches Conrad/Judson. |
| thm-classification-of-cyclic-groups | Literature-derived statement, AI-altered proof; finite/infinite alternatives checked. |
| thm-correspondence-theorem-groups | Literature-derived statement, AI-altered proof; inclusion and normality clauses checked. |
| thm-determinant-is-the-unique-normalized-alternating-multilinear-function | Literature-derived statement, AI-altered proof; commutative-ring scope checked. |
| thm-external-direct-product-is-a-group | Literature-derived statement, AI-altered proof; coordinate law checked. |
| thm-first-isomorphism-theorem-groups | Literature-derived statement, AI-altered proof; quotient-to-image map checked. |
| thm-first-isomorphism-theorem-modules | Literature-derived statement, AI-altered proof; quotient-to-image map checked. |
| thm-lagrange | AI-altered statement/proof; audited cardinality equation checked. New text never repeats its legacy applied-\(\iota\) notation. |
| thm-module-kernel-image-and-injectivity | Literature-derived statement, AI-altered proof; exact submodule/trivial-kernel clauses checked. |
| thm-nontrivial-center-of-a-finite-p-group | Literature-derived statement, AI-altered proof; divisibility conclusion checked against Conrad/Judson. |
| thm-quotient-abelian-iff-contains-commutator-subgroup | AI-altered statement, AI-generated proof; biconditional independently confirmed in Milne/EoM. |
| thm-quotient-group-universal-property | Literature-derived statement, AI-altered proof; factorization/uniqueness checked. |
| thm-quotient-module-universal-property | Literature-derived statement, AI-altered proof; factorization/uniqueness checked. |
| thm-rat-field | Literature-derived statement, AI-altered proof; field structure needed for the divisible hull checked. |
| thm-ring-matrix-arithmetic-laws | Literature-derived statement, AI-altered proof; rectangular multiplication laws checked. |
| thm-second-isomorphism-theorem-groups | Literature-derived statement, AI-altered proof; exact quotient convention checked. |
| thm-zorn | Literature-derived statement, AI-altered proof; AC and maximal-not-greatest clauses checked. |

cor-prime-order-group-is-cyclic was also opened during triage but rejected as a direct dependency because its legacy statement uses applied \(\iota\). The scaffold instead proves the needed simple-abelian conclusion from Cauchy's theorem and the prime-divisor lemma.

## Component provenance plan and rationale

No planned Statement or Construction is AI-generated. Definitions use proof: not-applicable. “Literature-derived proof” means the numbered proof will follow the cited source after notation changes; “AI-altered proof” means the statement is source-backed but the proof architecture is a synthesis or a new explicit computation requiring full step-5 checking.

### Composition A

| item | statement | proof | rationale |
|---|---|---|---|
| def-subnormal-normal-series-refinement-and-equivalence | literature-derived | not-applicable | Milne and Igusa definitions, with library terminology. |
| def-composition-series-composition-factors-and-length | literature-derived | not-applicable | Milne/Igusa definition and simple-factor convention. |
| thm-every-finite-group-has-a-composition-series | literature-derived | literature-derived | Standard maximal-normal-subgroup induction in Milne/Igusa. |
| lem-dedekind-modular-law-for-subgroups | literature-derived | AI-altered | Standard law; proof is the scaffold's short specialized two-inclusion argument. |
| thm-zassenhaus-butterfly-lemma | literature-derived | literature-derived | Exact Igusa Lemma 5.3, expanded for normality and denominators. |
| thm-schreier-refinement-theorem | literature-derived | literature-derived | Exact Igusa Theorem 5.4 grid construction. |
| thm-jordan-holder-theorem-for-groups | literature-derived | literature-derived | Igusa Theorem 5.5/Milne Theorem 6.2 via Schreier. |
| cor-order-is-the-product-of-composition-factor-orders | literature-derived | AI-altered | Standard telescoping quotient-order corollary. |
| def-characteristic-subgroup | literature-derived | not-applicable | Standard automorphism-invariance definition. |
| lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive | literature-derived | literature-derived | Standard inner-automorphism and restriction proof. |
| thm-derived-subgroup-is-characteristic-and-abelianization-is-universal | literature-derived | AI-altered | Milne Proposition 6.9 plus the published quotient universal property. |
| def-derived-series-solvable-group-and-derived-length | literature-derived | not-applicable | Milne/Conrad definition with explicit length convention. |
| lem-homomorphisms-respect-commutators-and-derived-series | literature-derived | AI-altered | Standard commutator calculation and synthesized induction. |
| thm-solvable-iff-it-has-an-abelian-factor-series | literature-derived | literature-derived | Milne Proposition 6.10/Conrad Theorem 4.13. |
| thm-subgroups-and-quotients-of-solvable-groups-are-solvable | literature-derived | literature-derived | Milne Proposition 6.6(a). |
| thm-extensions-and-direct-products-of-solvable-groups-are-solvable | literature-derived | AI-altered | Milne extension argument plus direct-product commutators. |
| thm-finite-solvable-iff-composition-factors-have-prime-order | literature-derived | literature-derived | Conrad Theorem 5.5, with the simple-abelian step built locally. |
| thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable | literature-derived | AI-altered | Milne's observation specialized to published \(A_n,S_n\) results. |
| def-subgroup-commutator-and-lower-central-series | literature-derived | not-applicable | Conrad Definition 4.14. |
| def-upper-central-series | literature-derived | not-applicable | Conrad Definition 4.23/Milne construction. |
| def-nilpotent-group-and-nilpotency-class | literature-derived | not-applicable | Milne/Conrad definition with fixed indexing. |
| lem-central-series-commutator-criterion | literature-derived | AI-altered | Conrad Theorem 5.4 isolated as local machinery. |
| thm-upper-and-lower-central-characterizations-of-nilpotence | literature-derived | literature-derived | Conrad Theorems 4.22, 4.27 and Corollary 4.28. |
| thm-subgroups-quotients-and-finite-products-of-nilpotent-groups | literature-derived | AI-altered | Milne Proposition 6.13/Conrad Theorem 5.7 via the lower series. |
| thm-finite-p-groups-are-nilpotent | literature-derived | literature-derived | Milne Corollary 6.17 and the published center theorem. |
| cor-nilpotent-groups-and-finite-p-groups-are-solvable | literature-derived | AI-altered | Conrad Theorem 5.3 with explicit derived/lower containment. |
| thm-central-extensions-and-nilpotency-class | literature-derived | literature-derived | Milne Corollary 6.16. |

### Composition B

| item | statement | proof | rationale |
|---|---|---|---|
| ex-two-composition-series-of-the-cyclic-group-of-order-twelve | AI-altered | AI-altered | Milne's cyclic example specialized and computed. |
| ex-composition-and-derived-series-of-s-three | AI-altered | AI-altered | Milne Example 6.1(a) plus direct commutators. |
| ex-composition-and-derived-series-of-s-four | AI-altered | AI-altered | Milne Example 6.1(b)/Conrad Example 5.6, expanded. |
| ex-upper-and-lower-central-series-of-the-dihedral-group-of-order-eight | AI-altered | AI-altered | Conrad's dihedral examples with explicit presentation calculation. |
| ex-heisenberg-group-is-nilpotent-of-class-two | AI-altered | AI-altered | Milne/Conrad example rebuilt as an in-closure integer-triple group. |
| fs-composition-factors-determine-a-finite-group-up-to-isomorphism | AI-altered | AI-altered | Standard \(C_4\) versus \(C_2^2\) counterexample. |
| fs-every-solvable-group-is-abelian | AI-altered | AI-altered | Standard \(S_3\) counterexample. |
| fs-an-extension-of-nilpotent-groups-is-nilpotent | AI-altered | AI-altered | Standard \(1\to A_3\to S_3\to C_2\to1\) witness. |
| fs-every-subnormal-series-is-a-normal-series | AI-altered | AI-altered | Verified \(S_4\) chain, checked by conjugation. |
| fs-normal-in-characteristic-implies-normal-in-the-whole-group | AI-altered | AI-altered | Verified \(C_2\trianglelefteq V_4\operatorname{char}A_4\) witness; rejected near-misses remain in strategy. |

### Modules A

| item | statement | proof | rationale |
|---|---|---|---|
| def-direct-sum-of-a-family-of-modules | literature-derived | not-applicable | Standard finitely supported construction. |
| thm-universal-property-of-module-direct-sums | literature-derived | literature-derived | Standard finite-support universal property. |
| def-free-module-on-a-set-and-standard-basis | literature-derived | not-applicable | Kleshchev §3.6. |
| thm-universal-property-of-free-modules | literature-derived | literature-derived | Kleshchev Theorem 3.6.4. |
| cor-every-module-is-a-quotient-of-a-free-module | literature-derived | literature-derived | Kleshchev Corollary 3.6.5. |
| def-invariant-basis-number-and-rank-of-a-free-module | literature-derived | not-applicable | Standard finite IBN definition; rank only where invariant. |
| thm-nonzero-commutative-rings-have-invariant-basis-number | literature-derived | AI-altered | Kleshchev statement; new choice-free determinant proof. |
| def-exact-and-short-exact-sequences-of-modules | literature-derived | not-applicable | Kleshchev Definition 3.14.6. |
| lem-endpoints-in-a-short-exact-sequence | literature-derived | AI-altered | Standard zero-endpoint calculation isolated for chases. |
| def-split-short-exact-sequence | literature-derived | not-applicable | Kleshchev Definition 3.14.7. |
| thm-splitting-lemma-for-modules | literature-derived | literature-derived | Kleshchev Lemma 3.14.8, with direct-sum isomorphism explicit. |
| def-hom-groups-and-induced-hom-maps | literature-derived | not-applicable | Kleshchev §3.15/standard Hom construction. |
| thm-hom-functors-are-left-exact | literature-derived | literature-derived | Kleshchev Theorems 3.15.1–3.15.2. |
| lem-four-lemma-for-modules | literature-derived | AI-altered | Standard diagram lemma; both variants synthesized. |
| thm-five-lemma-for-modules | literature-derived | AI-altered | Hekmati Theorem 3.1.4, proved through the local Four Lemma. |
| thm-snake-lemma-for-modules | literature-derived | AI-altered | Stacks 10.4.1/Hekmati 3.1.3; full local element chase. |
| def-projective-module | literature-derived | not-applicable | Kleshchev/Stacks lifting definition. |
| thm-free-modules-are-projective-with-choice-boundary | literature-derived | AI-altered | Standard basis lift with suppressed choice exposed. |
| thm-projective-module-characterizations | literature-derived | literature-derived | Kleshchev/Stacks conditions, excluding Ext. |
| thm-direct-sums-of-projectives-and-enough-projectives | literature-derived | AI-altered | Direct-sum theorem plus free cover and exact AC ledger. |
| def-injective-module | literature-derived | not-applicable | Kleshchev extension definition. |
| thm-injective-module-characterizations | literature-derived | literature-derived | Kleshchev split/Hom-exactness equivalences. |
| thm-baer-criterion-for-injective-modules | literature-derived | literature-derived | Kleshchev 3.14.12/Stacks 15.56.4. |
| def-divisible-module-over-an-integral-domain | literature-derived | not-applicable | Kleshchev Definition 3.14.13. |
| thm-injective-modules-over-a-pid-are-exactly-divisible | literature-derived | literature-derived | Kleshchev 3.14.14/Stacks 15.55.1. |
| lem-every-abelian-group-embeds-in-a-divisible-group | literature-derived | AI-altered | Kleshchev 3.14.16 with corrected \(\mathbb Q^{(A)}/K\) construction. |
| thm-products-of-injective-modules | literature-derived | AI-altered | Kleshchev 3.14.3 with arbitrary-family choice exposed. |
| lem-coinduced-modules-are-injective | literature-derived | literature-derived | Kleshchev 3.14.17 and evaluation at one. |
| thm-module-categories-have-enough-injectives | literature-derived | AI-altered | Kleshchev 3.14.18 plus Stacks 15.56.5–9, separating arbitrary-ring and commutative routes. |

### Modules B

| item | statement | proof | rationale |
|---|---|---|---|
| ex-standard-basis-and-universal-map-from-r-three | AI-altered | AI-altered | Checkable specialization of the free universal property. |
| cex-z-mod-n-is-not-a-free-z-module | AI-altered | AI-altered | Standard torsion obstruction. |
| cex-free-module-rank-fails-over-an-endomorphism-ring | literature-derived | AI-altered | Classical non-IBN example with four explicit shift maps. |
| ex-projective-nonfree-module-z-two-over-z-six | AI-altered | AI-altered | Standard idempotent/direct-summand example. |
| cex-nonsplit-short-exact-sequence-of-integers-mod-two | AI-altered | AI-altered | Standard section/retraction obstruction. |
| ex-canonical-split-sequence-of-a-direct-sum | AI-altered | AI-altered | Direct coordinate verification. |
| cex-contravariant-hom-need-not-be-right-exact | literature-derived | AI-altered | Standard Hom application to multiplication by two. |
| fs-every-short-exact-sequence-splits | AI-altered | AI-altered | Same witness, reproved without B-page dependency. |
| fs-every-projective-module-is-free | AI-altered | AI-altered | Same idempotent witness, reproved without B-page dependency. |
| fs-every-injective-module-is-projective | AI-altered | AI-altered | \(\mathbb Q/\mathbb Z\) is injective torsion; projective abelian groups are summands of torsion-free free groups. |

## Prose-scaffold amendments for step 4

These are applyable replacements in research/plan-algebra-track-expansion.md; this Beta does not edit that file.

### Amendment 1 — replace AG-2 in full

Replace the block beginning with the exact heading “## AG-2. Composition Series, the Jordan–Hölder Theorem and Solvable Groups” and ending at its “Forward references” line with a section whose metadata is order 66, requires pages 64/36/38, and estimate A 27/B 10, followed by:

> **DEFS.** subnormal and normal series, factors, refinement and equivalence; composition series, factors and length; characteristic subgroups; abelianization; derived series, solvability and derived length; subgroup commutators; lower and upper central series; nilpotence and class.
>
> **THMS.** finite existence; Dedekind modular law; Zassenhaus; Schreier refinement; Jordan–Hölder; product of factor orders; characteristic transitivity; characteristic derived subgroup and universal abelianization; homomorphism functoriality of derived series; solvable iff an abelian-factor series; subgroup, quotient, extension and finite-product closure; finite solvable iff prime-order composition factors; nonsolvability of \(A_5,A_n,S_n\) in the published range; central-series commutator criterion; upper/lower characterizations; nilpotent subgroup, quotient and finite-product closure; finite \(p\)-groups nilpotent; nilpotent implies solvable; central extensions raise class by at most one.
>
> **B.** \(C_{12}\), \(S_3\), \(S_4\), \(D_8\), and the integral Heisenberg group; false claims that factors determine the group, solvable implies abelian, nilpotent extensions are closed, subnormal means normal, and normal-in-characteristic implies ambient normal.
>
> **Traps.** Zassenhaus and Schreier remain separate proof-bearing items. Use the library's subnormal/normal convention and commutator orientation. Feit–Thompson is mention-only. “All groups below order 60” waits for Sylow; this page still proves \(S_3,S_4\) and every finite \(p\)-group solvable. Nilpotence is homed here by the frontier-12 dispatch, so there is no forward pointer to AG-4 and no cross-batch dependency.
>
> **Forward references: NONE.**

### Amendment 2 — replace MOD-2 in full

Replace the block beginning with the exact heading “## MOD-2. Free Modules, Exact Sequences, Projective and Injective Modules” and ending at its “Forward references” line with a section whose metadata is order 104, requires pages 102/84/10, and estimate A 29/B 10, followed by:

> **DEFS.** arbitrary direct sums; free module on a set and standard basis; IBN and finite rank; exact and short exact sequences; split sequences; Hom groups and induced maps; projective and injective modules; divisible modules over a domain.
>
> **THMS.** direct-sum and free universal properties; every module is a quotient of a free module; finite IBN for nonzero commutative rings by a choice-free determinant argument; endpoint exactness and splitting lemma; Hom left exactness; Four, Five and Snake Lemmas; free/projective choice boundary; projective lifting/splitting/direct-summand/Hom criteria; direct sums and enough projectives; injective extension/splitting/Hom criteria; Baer; PID injective iff divisible; every abelian group embeds in a divisible group; products of injectives; coinduction; enough injectives, including the commutative character-dual functorial construction.
>
> **B.** standard \(R^3\); \(\mathbb Z/n\) not free; explicit non-IBN endomorphism ring; projective nonfree \(\mathbb Z/2\) over \(\mathbb Z/6\); split and nonsplit sequences; Hom not right exact; false universal splitting, projective-free, and injective-projective claims.
>
> **Traps.** Infinite cardinal-valued rank remains deferred with cardinal arithmetic. Enough projectives and enough injectives use full AC; the free cover and divisible-hull embedding as maps are choice-free. Baer uses left ideals and Zorn. Snake must prove the connecting map well defined and exact at all six terms. For noncommutative rings keep left/right sides explicit; state the Stacks character-dual construction only in the commutative case unless the right-module version is built.
>
> **Forward references: NONE.**

The old integrality/algebraic-integer block is removed from MOD-2: it is not part of this dispatch, and keeping it would displace exactness machinery harvested from every canonical source. This is a topic rehome for orchestrator adjudication, not a theorem declined for lack of one local lemma.

### Amendment 3 — §9 enough-injectives row

Replace the current row that homes enough injectives on the tensor-product page with:

> | **enough injectives** (coinduction over an arbitrary unital ring; for commutative rings also the functorial character-dual construction) | free-modules-and-exact-sequences | 104 |

No Hom–tensor adjunction is required: \(\operatorname{Hom}_{\mathbb Z}(R,D)\) and evaluation at \(1\) give the needed elementary adjunction directly.

### Amendment 4 — §10 choice rows

Replace the rank-invariance row claiming Zorn/maximal ideals with:

> | finite IBN for free modules over a nonzero commutative ring | none; rectangular determinant expansion, no maximal ideal | 104 |

Replace the Baer/enough-injectives row with:

> | arbitrary free modules/direct sums projective; arbitrary products injective; Baer; enough projectives/injectives | full AC (Baer through Zorn); finite families need only finite choice; no separate use of countable choice or DC | 104 |

## Licensing and reuse

All sources are research references only. No source prose or proof is to be copied verbatim; statements are mathematical facts and proofs will be independently phrased with reader-visible citations.

- The Stacks Project pages state GNU Free Documentation License coverage. Citation and independent restatement avoid importing licensed prose.
- No explicit permissive reuse license was observed on the Milne, Conrad, Igusa, Kleshchev, or Hekmati PDFs during this pass. They are citation-only sources.
- No Wikipedia or encyclopedia entry is a primary source for either pair.

## Step-5 obligations and blockers

The proof-contract file scopes every proof-bearing scaffold item. At authoring, replace prospective local-source clauses with exact on-disk quotes, synchronize every numbered step, and add no risk_review; that remains Alpha's role. The finite-smoke registry has no applicable checker for these group-series or module claims, so every finite_smoke array is empty by design.

No blocker remains. Direct shell download was unavailable and pdftotext is not installed, but indexed web text exposed the exact Igusa headings and theorem text; all other source ranges were readable through their web/PDF index or HTML, so this did not prevent the harvest.
