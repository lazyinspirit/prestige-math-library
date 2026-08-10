# Beta-frontier-10-2 — scaffold notes (steps 1–2)

This is the durable reasoning record for orders 40–41 and 62–63. The only files in this Beta's write scope are this note and the three sibling `frontier-10-batch-2` JSON artifacts. No plan specification, published item, library page, or normative document was edited.

## 1. Result and reading order

| order | page | kind | items |
|---:|---|---|---:|
| 40 | `the-structure-of-finite-abelian-groups` | A | 27 |
| 41 | `the-structure-of-finite-abelian-groups-examples` | B | 8 |
| 62 | `free-products-and-amalgamation` | A | 27 |
| 63 | `free-products-and-amalgamation-examples` | B | 8 |

The batch has 70 items. Neither A page exceeds the binding 60-item limit, so **no split is proposed**. The exact dispatched cut remains mathematically coherent: the first pair proves only the finite abelian classification, while the second develops ordinary free products, arbitrary group pushouts, and injective amalgamation. The finitely generated abelian structure theorem is not imported into order 40.

All same-page dependencies point backward. Every B-page dependency lies on its A page, on a published earlier A page, or earlier on its own B page. The free-product A page and its companion now both declare `cyclic-groups-and-direct-products` in `requires`, in addition to their pair-specific prerequisites. There are no forward references, cross-batch dependencies, external fallbacks, or dependencies on a published B-page item.

## 2. Exact prose-scaffold amendments

### 2.1 `research/plan-algebra-track.md`

Replace the complete block beginning `## AA-5b. The Fundamental Theorem of Finite Abelian Groups  (order 36)` and ending with the sentence about the additive rationals with these two A-page summary paragraphs:

> Finite abelian groups are first separated into their intrinsic $p$-primary components, using an abelian proof of Cauchy's theorem and an internal-direct-product recognition theorem. For a finite abelian $p$-group, a cyclic subgroup of maximal element order is proved to split off; induction then gives a product of cyclic prime-power groups. The proof includes the hard complement lemma rather than appealing to Sylow theory, and treats the trivial group through the empty-product convention.
>
> Successive quotients $p^iG/p^{i+1}G$ recover the elementary divisors and prove their uniqueness. Chinese-remainder regrouping then gives the unique invariant-factor chain. The converse of Lagrange's theorem for finite abelian groups, order and exponent formulas, cyclicity, indecomposable factors, partition counts, the number of abelian groups of a prescribed finite order, and the squarefree cyclicity criterion follow as corollaries. The companion computes both classification forms, exhibits nonunique complements, and uses the additive rationals and a nonabelian finite group to show why the hypotheses matter.

The replacement removes the obsolete proposed drop of the finite-subgroup-of-a-field theorem without importing it: that theorem is not one of the harvested canonical results for this finite-abelian classification pair, and it belongs with field polynomial-root machinery rather than as an unharvested aside here.

### 2.2 `research/plan-topology-set-theory-track.md`

Replace the complete block beginning `## FG-2. Free Products and Amalgamation  (order 58, abstract-algebra)` and ending at `Forward references: NONE load-bearing.` with these two A-page summary paragraphs:

> Free products of arbitrary families are defined by their coproduct property and constructed from reduced syllable words. The van der Waerden permutation action supplies associativity and the normal-form theorem, hence factor embeddings, uniqueness, retractions, union presentations, and the identification of free products of free groups on disjoint bases. Cyclic reduction shows that finite-order elements are conjugate into factors, while normal-form comparison makes the center trivial when at least two factors are nontrivial. In particular, the free product of two infinite cyclic groups is the free group of rank two.
>
> Arbitrary group pushouts are constructed as quotients of free products by the amalgamating relations. For injective edge maps, the page defines free products with amalgamation and builds Schreier's transversal permutation machinery, proving normal form, factor embeddings, and the exact intersection theorem. The companion computes cyclic amalgams and the infinite dihedral presentation, contrasts free and direct products, and gives a noninjective pushout where a factor collapses. HNN extensions, Kurosh and Grushko theorems, and Bass–Serre theory are outside this page's declared prerequisite closure.

This deliberately reverses the old denial of amalgam normal form and factor injectivity. The owner instruction says to build locally available machinery, and Torres plus Neumann provide the complete normal-form route. The statement “canonical factor maps into every group pushout are injective” remains false for arbitrary noninjective edge maps and is represented by an explicit B-page witness.

### 2.3 Stale order annotations in the dispatched prose files

Apply these exact identifier-adjacent repairs while preserving historical remapping tables that explicitly show both an old and a new order:

- In `research/plan-algebra-track-expansion.md`, change `the-structure-of-finite-abelian-groups` `(36)` and `(order 36)` to `(40)` and `(order 40)`; change the FG-1/FG-2 order pair `56 / 58` to `60 / 62`; and change prose that names FG-1 at order 56 or FG-2 at order 58 to orders 60 and 62.
- In `research/plan-topology-set-theory-track.md`, change the FG-2 section heading's order 58 to 62, the active FG band `56–59` to `60–63`, and identifier-adjacent active citations of `free-products-and-amalgamation` `(58)` to `(62)`. Leave the top-of-file old-to-new repair row `58` → `62` intact because both numbers are its subject.
- In `research/plan-complex-analysis-track.md`, change the dependency annotation `58 (`free-products-and-amalgamation`)` to `62 (`free-products-and-amalgamation`)`.
- `research/plan-combinatorics-and-categories.md` names the finite-abelian page without an order and needs no mathematical edit from this batch.

## 3. Canonical-coverage harvest

The repaired machine harvest enumerates 84 headings across six independent treatments:

- finite abelian groups: 33 included, 12 inline, one already published, one deferred, and one out of scope;
- free products and amalgamation: 31 included, three inline, one already published, and one out of scope;
- combined: **79 incorporated** (64 included and 15 inline), **two already published**, and **three declined**.

Every decline is tied to a specific source result and a whole different topic, rather than to a locally buildable prerequisite:

| page | disposition | source result | reason |
|---|---|---|---|
| finite abelian groups | out-of-scope | Conrad Remark 3.5, nonabelian odd-$p$ extension and the quaternion exception | This is nonabelian $p$-group structure; it is not used by, nor a consequence of, the finite abelian classification built here. |
| finite abelian groups | deferred | Elman Remark 14.8, arbitrary bounded-$p$-exponent abelian groups via Zorn's lemma | This is an infinite abelian-group theorem. The dispatch expressly reserves broader abelian structure and asks for the finite, not finitely generated or arbitrary, theorem. |
| free products and amalgamation | out-of-scope | Torres Theorem 2.50, classification of torus knots | The cyclic amalgam presentation is included, but classifying knots up to ambient homeomorphism requires knot topology and invariants, not a missing group-theoretic lemma. |

The declines most likely to be challenged are Elman's bounded-exponent splitting theorem, because it is adjacent to the finite theorem, and Torres's torus-knot classification, because its group presentation is on the B page. In each case the algebraic machinery available at this point is retained; only the result whose statement belongs to another subject is declined.

The repair adds Judson's exact finite-abelian converse-of-Lagrange exercise and both clauses of Hatcher's free-product exercise; their three source rows and three canonical rows all point to the new scaffold ids. The harvest checker passed with zero errors and zero warnings after repair. The exact heading-by-heading dispositions are in `research/frontier-10-batch-2.coverage.json`.

## 4. Source ledger, locators, and licences

- **[C] Keith Conrad, “Decomposition of Finite Abelian Groups.”** <https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf>. Read §§1–4, pp. 1–6, from Theorem 1.1 through the partition consequence after Theorem 4.1 and before Appendix A. This is the full lecture-note treatment backing primary decomposition, indecomposables, the maximal-cyclic complement theorem, elementary-divisor uniqueness, and examples. No reuse licence was found in the read material; Step 5 must paraphrase.
- **[E] Richard Elman, _Lectures on Abstract Algebra_.** <https://www.math.ucla.edu/~rse/algebra_book.pdf>. Read Exercises 13.7(3)–(6), p. 69; Chapter 14, Lemma 14.1 through Theorem 14.11, pp. 70–74; and Exercises 14.27(2)–(6), p. 78. This textbook independently backs internal products, abelian Cauchy, primary and cyclic decomposition, both uniqueness forms, the order-360 exercise, and the squarefree criterion. No reuse licence was found in the read material; paraphrase.
- **[T] George D. Torres, _Combinatorial Group Theory_.** <https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf>. Read Definition 2.1 and §2.1 through Proposition 2.4; Definition 2.17 and Theorem 2.23 through Remark 2.26; Definition 2.48 through Corollary 2.54, pp. 2–3, 7–9, 14–15. This full lecture-note set backs coproducts, reduced words, pushout quotients, union presentations, injective amalgamation, and its normal-form consequences. Corollary 2.54's displayed proof ends with a TODO, so it is used only as a statement cross-check; Neumann supplies the proof route. No reuse licence was found; paraphrase.
- **[N] B. H. Neumann, _Lectures on Topics in the Theory of Infinite Groups_, notes by M. Pavman Murthy.** <https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf>. Read Chapter 9, §§4–5, pp. 128–140, from Schreier's Theorem 3 through Theorem 4 and its corollary. This monograph supplies the transversal normal words, constituent permutation actions, length lemma, generalized free-product theorem, and independence of transversals. Its title page expressly prohibits reproduction without written permission; Step 5 may use the mathematics but must not copy its prose.
- **[J] Thomas W. Judson, _Abstract Algebra: Theory and Applications_, Chapter 13 exercises.** <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/13%3A_The_Structure_of_Groups/13.04%3A_Exercises>. Read §13.4, Exercise 6 only. It states exactly that if a positive integer divides the order of a finite abelian group, then the group has a subgroup of that order. The hosted text is GNU FDL 1.3; Step 5 will paraphrase and retain the reference rather than copy prose.
- **[H] Allen Hatcher, _Algebraic Topology_.** <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>. Read Chapter 1, §1.2 exercises, p. 52, Exercise 1 only. Its two clauses state that a free product of two nontrivial groups has trivial center and that its finite-order elements are conjugates of finite-order elements of the factors. The scaffold adapts both statements to the already-built arbitrary-family normal form. No reuse licence was found in the PDF; Step 5 must paraphrase.

No encyclopedia is primary backing for either pair. No `proved_here: false` external fallback is planned.

## 5. Planned component provenance

Codes [C], [E], [T], [N], [J], and [H] are the exact URLs and locators above. A source-backed Statement may have an AI-generated local proof without changing its Statement provenance. Definitions have proof provenance `not-applicable`. Generated claims are restricted to direct, checkable leaves and are listed again below with their truth-risk obligations.

| item | statement | proof/construction | source | rationale |
|---|---|---|---|---|
| `def-internal-direct-product-of-subgroups` | literature-derived | not-applicable | [E] | source-named result, standard source definition, or explicit source example |
| `thm-internal-direct-product-recognition` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `def-p-primary-component-of-an-abelian-group` | literature-derived | not-applicable | [C], [E] | source-named result, standard source definition, or explicit source example |
| `thm-cauchy-for-finite-abelian-groups` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `thm-p-primary-component-of-a-finite-abelian-group` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `thm-primary-decomposition-of-a-finite-abelian-group` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `lem-unique-subgroup-of-order-p-forces-cyclicity` | literature-derived | ai-generated | [C] | source-named result, standard source definition, or explicit source example |
| `thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `thm-cyclic-decomposition-of-finite-abelian-p-groups` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `def-elementary-divisor-data-for-a-finite-abelian-group` | literature-derived | not-applicable | [C], [E] | source-named result, standard source definition, or explicit source example |
| `lem-successive-p-multiple-quotients-recover-elementary-divisors` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `def-invariant-factor-data-for-a-finite-abelian-group` | literature-derived | not-applicable | [E] | source-named result, standard source definition, or explicit source example |
| `lem-elementary-divisors-regroup-into-invariant-factors` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `cor-converse-of-lagrange-for-finite-abelian-groups` | literature-derived | ai-generated | [J] | Judson Exercise 13.4.6 gives the exact statement; the local strong-induction proof through an order-$p$ subgroup and quotient is independently designed |
| `def-exponent-of-a-finite-group` | ai-altered | not-applicable | [C], [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `cor-order-and-exponent-from-invariant-factors` | ai-altered | ai-generated | [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `cor-finite-abelian-group-cyclic-iff-one-invariant-factor` | ai-altered | ai-generated | [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `def-indecomposable-finite-abelian-group` | literature-derived | not-applicable | [C] | source-named result, standard source definition, or explicit source example |
| `thm-finite-abelian-groups-decompose-into-indecomposable-subgroups` | literature-derived | ai-generated | [C] | source-named result, standard source definition, or explicit source example |
| `cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `def-partition-of-a-positive-integer` | literature-derived | not-applicable | [C], [E] | source-named result, standard source definition, or explicit source example |
| `cor-abelian-p-groups-of-order-pn-are-counted-by-partitions` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `cor-number-of-abelian-groups-of-a-given-finite-order` | ai-altered | ai-generated | [C], [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `def-squarefree-positive-integer` | ai-altered | not-applicable | [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `ex-z-six-in-elementary-divisor-and-invariant-factor-forms` | ai-altered | ai-generated | [C], [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `ex-the-five-abelian-groups-of-order-sixteen` | literature-derived | ai-generated | [C], [E] | source-named result, standard source definition, or explicit source example |
| `ex-successive-p-layers-read-a-cyclic-decomposition` | ai-altered | ai-generated | [C], [E] | source-backed specialization or recombination for the dispatched vocabulary |
| `ex-the-six-abelian-groups-of-order-three-hundred-sixty` | literature-derived | ai-generated | [E] | source-named result, standard source definition, or explicit source example |
| `ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique` | literature-derived | ai-generated | [C] | source-named result, standard source definition, or explicit source example |
| `ex-unit-group-modulo-one-hundred-decomposition` | literature-derived | ai-generated | [C] | source-named result, standard source definition, or explicit source example |
| `cex-additive-rationals-show-finiteness-is-essential` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |
| `fs-every-finite-group-is-a-product-of-cyclic-prime-power-groups` | ai-altered | ai-generated | [C], [E] | source-backed deliberate overgeneralisation of the finite-abelian classification, refuted by an explicit finite nonabelian group |
| `def-free-product-of-a-family-of-groups` | literature-derived | not-applicable | [T] | source-named result, standard source definition, or explicit source example |
| `def-reduced-syllable-word-in-a-family-of-groups` | literature-derived | not-applicable | [T] | source-named result, standard source definition, or explicit source example |
| `lem-factor-elements-act-on-reduced-syllable-words` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `thm-reduced-syllable-words-form-the-free-product` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `thm-normal-form-for-free-products` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `cor-torsion-in-a-free-product-is-conjugate-into-a-factor` | ai-altered | ai-generated | [H] | Hatcher states the two-factor theorem; the scaffold extends the same cyclic-reduction argument to the arbitrary family already constructed here |
| `cor-center-of-a-free-product-is-trivial` | ai-altered | ai-generated | [H] | Hatcher states the two-factor theorem; the scaffold formulates the exact arbitrary-family hypothesis of at least two nontrivial factors |
| `cor-free-product-factor-maps-are-injective` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `cor-free-products-are-unique-up-to-unique-isomorphism` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `cor-each-factor-is-a-retract-of-a-free-product` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `thm-presentation-of-a-free-product` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `thm-free-product-of-free-groups-on-disjoint-bases` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `cor-free-product-of-infinite-cyclic-groups-is-free` | ai-altered | ai-generated | [T] | source-backed specialization or recombination for the dispatched vocabulary |
| `cor-z-free-product-z-is-free-group-of-rank-two` | ai-altered | ai-generated | [T] | source-backed specialization or recombination for the dispatched vocabulary |
| `def-pushout-of-group-homomorphisms` | literature-derived | not-applicable | [T] | source-named result, standard source definition, or explicit source example |
| `thm-group-pushout-as-an-amalgamated-quotient` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `def-free-product-with-amalgamation` | literature-derived | not-applicable | [T] | source-named result, standard source definition, or explicit source example |
| `thm-presentation-of-a-free-product-with-amalgamation` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `def-normal-form-data-for-amalgamated-free-products` | literature-derived | not-applicable | [N], [T] | source-named result, standard source definition, or explicit source example |
| `lem-factor-elements-act-on-amalgamated-normal-words` | literature-derived | ai-generated | [N], [T] | source-named result, standard source definition, or explicit source example |
| `thm-normal-form-for-free-products-with-amalgamation` | literature-derived | ai-generated | [N], [T] | source-named result, standard source definition, or explicit source example |
| `cor-factors-embed-in-a-free-product-with-amalgamation` | literature-derived | ai-generated | [N], [T] | source-named result, standard source definition, or explicit source example |
| `cor-factor-images-intersect-in-the-amalgamated-subgroup` | literature-derived | ai-generated | [N], [T] | source-named result, standard source definition, or explicit source example |
| `cor-trivial-amalgamation-is-the-free-product` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `prop-kernels-of-amalgamating-maps-collapse-in-the-pushout` | ai-altered | ai-generated | [T] | source-backed specialization or recombination for the dispatched vocabulary |
| `cor-amalgamation-along-an-isomorphism-recovers-the-other-factor` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |
| `rem-free-product-and-amalgamation-conventions` | ai-altered | not-applicable | [T] | source-backed specialization or recombination for the dispatched vocabulary |
| `ex-two-involutions-generate-the-infinite-dihedral-group` | ai-altered | ai-generated | [T] | source-backed specialization or recombination for the dispatched vocabulary |
| `ex-c-two-free-product-c-three-is-infinite` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |
| `ex-canonical-map-from-free-product-to-direct-product` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |
| `fs-free-product-of-abelian-groups-is-abelian` | ai-altered | ai-generated | [T] | source-backed deliberate strengthening of the factor hypotheses, refuted by two distinct reduced normal forms |
| `ex-cyclic-amalgamation-with-relation-xm-equals-yn` | literature-derived | ai-generated | [T] | source-named result, standard source definition, or explicit source example |
| `ex-amalgamating-c-two-inside-c-four-and-c-six` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |
| `fs-canonical-factor-maps-into-every-group-pushout-are-injective` | ai-altered | ai-generated | [T] | source-backed deliberate extension of the monomorphism-only embedding theorem to arbitrary pushouts, refuted by kernel collapse |
| `ex-amalgamation-along-a-whole-factor` | ai-generated | ai-generated | — (generated leaf; no source claim) | directly checkable leaf; see truth-risk obligation |

### Generated-Statement truth-risk obligations

- `cex-additive-rationals-show-finiteness-is-essential`: verify torsion-freeness directly and observe that any nontrivial product of nontrivial finite cyclic prime-power groups contains a nonzero finite-order element. Dependency-leaf check required.
- `fs-every-finite-group-is-a-product-of-cyclic-prime-power-groups`: apply the published A-page symmetric-group lemma to three distinct points and the finite-bijection theorem to obtain a finite nonabelian group; prove directly from componentwise multiplication that a finite direct product of cyclic groups is abelian. Dependency-leaf check required.
- `cor-amalgamation-along-an-isomorphism-recovers-the-other-factor`: write both cocone maps and both inverse composites from the pushout universal property, including the trivial-group boundary. Dependency-leaf check required.
- `ex-c-two-free-product-c-three-is-infinite`: distinguish the reduced words $(st)^n$ by their lengths, including $n=0$. Dependency-leaf check required.
- `ex-canonical-map-from-free-product-to-direct-product`: verify surjectivity from the two factor images and exhibit a nontrivial reduced cross-commutator in the kernel. Dependency-leaf check required.
- `fs-free-product-of-abelian-groups-is-abelian`: compare the distinct normal forms $st$ and $ts$ in $C_2*C_2$. Dependency-leaf check required.
- `ex-amalgamating-c-two-inside-c-four-and-c-six`: verify the edge maps and presentation explicitly, then invoke the source-backed embedding/intersection theorems. Dependency-leaf check required.
- `fs-canonical-factor-maps-into-every-group-pushout-are-injective`: compute the pushout of $C_2\to 1$ and $C_2\xrightarrow{\mathrm{id}}C_2$ as the trivial group. Dependency-leaf check required.
- `ex-amalgamation-along-a-whole-factor`: construct a concrete cyclic cocone and verify the universal mediator rather than citing the generated corollary. Dependency-leaf check required.

The manifest dependency graph was checked after assigning these labels: none of these AI-generated Statement ids is a `deps` target. The standard infinite-dihedral example is source-adapted rather than generated because the following false-statement item cites it.

## 6. Proof decomposition and corollary passes

For the finite-abelian pair, the long classification proof is decomposed into internal-product recognition, abelian Cauchy, the full-order primary component, primary decomposition, the unique-order-$p$ lemma, the maximal-cyclic complement theorem, cyclic $p$-group decomposition, successive-layer uniqueness, and elementary-divisor regrouping. The separate regrouping lemma prevents the invariant-factor theorem from concealing a second classification proof. The corollary pass now includes the converse of Lagrange for finite abelian groups, the order/exponent formula, cyclicity criterion, indecomposable classification, partition counts, arbitrary-order count, and squarefree criterion. Both passes were performed; no valuable result was pruned for size.

For the free-product pair, ordinary normal form is decomposed into reduced-word data, the factor permutation action, construction, and uniqueness; amalgamated normal form is independently decomposed into transversal data, the convention-corrected right-multiplication action, and the normal-form theorem. Pushout construction and the presentation theorem are separate from that injective machinery. The repaired corollary pass adds the general torsion-conjugacy and trivial-center consequences alongside factor embeddings, uniqueness, retractions, free-group dictionaries, amalgamated intersection, trivial amalgamation, kernel collapse, and the isomorphism-edge consequence. Both passes were performed; no valuable result was pruned for size.

## 7. Convention decisions and disagreements

- Conrad and Elman use differing notation for primary components; the planned item uses $G(p)$ and includes the identity by allowing exponent zero. It does not define the component by the misleading equation `ord(g)=p^k` with an implicitly positive $k$.
- Invariant factors are written in increasing divisibility order $1<n_1\mid\cdots\mid n_r$, unit factors are excluded, and the trivial group has the empty list. Elementary divisors remain an unordered multiset of nontrivial prime powers.
- The generic term **group pushout** permits arbitrary homomorphisms. The notation $G*_K H$ is reserved here for monomorphisms, matching Torres's amalgamated-product convention. Embedding claims are never transferred to the generic pushout.
- The amalgam normal form uses left-coset representatives and a terminal $K$ coefficient. To respect the library's fixed function-composition convention, the Schreier permutation is defined using right multiplication by $g^{-1}$, so $P_{gh}=P_g\circ P_h$ rather than an accidental antihomomorphism.
- Torres states the amalgamated normal form but leaves its proof as TODO. The proof contract follows Neumann's permutation construction and treats Torres only as an independent statement check at that point.
- Neumann says “generalised free product with an amalgamated subgroup”; the reader-facing terminology remains “free product with amalgamation.”
- Hatcher states the two new normal-form consequences for two nontrivial factors. The page's free product is already defined for an arbitrary family: torsion conjugacy is stated for nonidentity elements so the empty family is vacuous, and the center theorem assumes at least two nontrivial factors. The same finite reduced-word proofs apply without a binary-only convention.

## 8. Published prerequisites and direct-dependency audit

I opened `library/abstract-algebra/cyclic-groups-and-direct-products.md` and every published item from it that the finite-abelian pair uses. The page is intentionally thin on internal direct products, so those definitions and the recognition theorem are built locally. I opened the rewritten `library/abstract-algebra/free-groups-and-presentations.md` and its companion on disk; I did not rely on its older 6+1-item state. The rewritten page supplies the actual free-group, presentation, von Dyck, normal-closure, and rank vocabulary used here.

Every direct dependency outside this batch was then opened from `items/` at its actual Definition, Statement, or Example. All 60 are `status: published`. No load-bearing dependency has an `ai-generated` Statement; where a published item's local proof is AI-generated, only its eligible literature-derived or AI-altered Statement is cited. No unambiguous falsehood was found in a published dependency.

| dependency | statement / proof provenance | confidence route |
|---|---|---|
| `cor-g-to-the-group-order-is-identity` | ai-altered / ai-altered | audit 2026-08-01; exact section re-opened |
| `cor-order-of-a-quotient-group` | ai-altered / ai-generated | audit 2026-08-02; exact section re-opened |
| `cor-prime-order-group-is-cyclic` | ai-altered / ai-altered | published-audit gpt-5.6-sol-codex-subscription certify 2026-08-03; exact section re-opened |
| `cor-quotient-of-an-abelian-group-is-abelian` | ai-altered / ai-generated | audit 2026-08-02; exact section re-opened |
| `def-axiom-of-choice` | literature-derived / not-applicable | published-rehoming-repair claude-opus-5 certify 2026-08-06; exact section re-opened |
| `def-center-of-a-group` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened for the free-product center corollary |
| `def-commutator-and-commutator-subgroup` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened |
| `def-coset` | literature-derived / not-applicable | audit 2026-08-01; exact section re-opened |
| `def-divides-in-z` | ai-altered / not-applicable | audit 2026-07-28; exact section re-opened for the finite-abelian converse of Lagrange |
| `def-external-direct-product-of-groups` | literature-derived / not-applicable | audit 2026-08-03; exact section re-opened |
| `def-free-group` | literature-derived / not-applicable | audit 2026-08-03; exact section re-opened |
| `def-generated-subgroup` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-group` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-group-homomorphism` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-group-isomorphism-and-automorphism` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened |
| `def-group-power` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-group-presentation` | literature-derived / not-applicable | audit 2026-08-03; exact section re-opened |
| `def-monoid-finite-product` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-nat-finite-sum-and-product` | ai-altered / ai-generated | published-audit claude-opus-5 certify 2026-08-02; exact section re-opened |
| `def-natural-numbers` | literature-derived / not-applicable | audit 2026-07-25; exact section re-opened |
| `def-normal-closure` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened |
| `def-normal-subgroup` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened |
| `def-order-in-a-group` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `def-quotient-group` | literature-derived / not-applicable | audit 2026-08-02; exact section re-opened |
| `def-rank-of-a-finite-rank-free-group` | ai-altered / not-applicable | audit 2026-08-11; exact section re-opened |
| `def-rationals` | literature-derived / not-applicable | audit 2026-07-24; exact section re-opened |
| `def-relators-relations-and-finite-presentations` | ai-altered / not-applicable | audit 2026-08-11; exact section re-opened |
| `def-symmetric-group` | ai-altered / not-applicable | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened for the finite nonabelian witness |
| `def-unit-group-modulo-n-and-euler-totient` | ai-altered / not-applicable | audit 2026-07-31; exact section re-opened |
| `lem-cyclic-subgroup-is-the-set-of-powers` | ai-altered / ai-generated | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `lem-every-integer-above-one-has-a-prime-divisor` | ai-altered / ai-generated | published-audit gpt-5.6-sol-codex-subscription certify 2026-08-03; exact section re-opened for the prime choice in the finite-abelian induction |
| `lem-group-homomorphism-basic-properties` | ai-altered / ai-generated | published-audit claude-opus-5 certify 2026-08-02; exact section re-opened |
| `lem-group-power-laws` | ai-altered / ai-generated | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened for the finite-order conjugacy argument |
| `lem-inverse-of-bijective-group-homomorphism` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `lem-order-characterisation` | ai-altered / ai-generated | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `lem-product-with-normal-subgroup` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `lem-symmetric-group-is-a-group` | ai-altered / ai-generated | judge z-ai/glm-5.2 pass 2026-07-27; audit 2026-07-27; exact section re-opened |
| `prop-integers-modulo-n-as-a-quotient-group` | ai-altered / ai-generated | audit 2026-08-02; exact section re-opened |
| `prop-normal-closure-is-products-of-conjugates` | literature-derived / ai-generated | audit 2026-08-11; exact section re-opened |
| `prop-order-of-finite-direct-product` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-bezout-identity` | ai-altered / ai-altered | judge z-ai/glm-5.2 pass 2026-07-28; audit 2026-07-28; exact section re-opened |
| `thm-canonical-prime-factorisation` | ai-altered / ai-generated | published-audit gpt-5.6-sol-codex-subscription certify 2026-08-03; exact section re-opened |
| `thm-chinese-remainder-theorem` | ai-altered / ai-altered | audit 2026-07-31; exact section re-opened |
| `thm-classification-of-cyclic-groups` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-correspondence-theorem-groups` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `thm-eulers-theorem` | literature-derived / ai-altered | published-audit gpt-5.6-sol-codex-subscription certify 2026-08-03; exact section re-opened |
| `thm-external-direct-product-is-a-group` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-free-groups-unique-up-to-unique-isomorphism` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-group-homomorphism-injective-iff-trivial-kernel` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `thm-lagrange` | ai-altered / ai-altered | published-audit gpt-5.6-sol-codex-subscription certify 2026-08-03; exact section re-opened |
| `thm-normal-form-for-the-word-quotient-model` | literature-derived / ai-altered | audit 2026-08-11; exact section re-opened for the one-generator infinite-cyclic calculation |
| `thm-number-of-bijections-of-a-finite-set` | ai-altered / ai-generated | judge z-ai/glm-5.2 pass 2026-07-28; audit 2026-07-29; exact section re-opened for finiteness of the symmetric-group witness |
| `thm-order-of-element-in-direct-product` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-quotient-group-universal-property` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `thm-second-isomorphism-theorem-groups` | literature-derived / ai-altered | audit 2026-08-02; exact section re-opened |
| `thm-strong-induction` | ai-altered / ai-altered | published-audit claude-opus-5 certify 2026-08-02; exact section re-opened |
| `thm-subgroups-of-cyclic-groups-are-cyclic` | literature-derived / ai-altered | audit 2026-08-03; exact section re-opened |
| `thm-von-dyck` | literature-derived / ai-altered | audit 2026-08-11; exact section re-opened |
| `thm-well-ordering-principle` | literature-derived / ai-altered | published-audit claude-opus-5 certify 2026-08-02; exact section re-opened |
| `thm-word-quotient-model-is-free` | literature-derived / ai-altered | audit 2026-08-11; exact section re-opened for the empty-relator one-generator factor presentation |

The confidence route is the item's own published audit or certification metadata plus this direct section read. The proof-contract skeleton records every declared dependency as a planned fact; Step 5 must replace each `Planned Statement` placeholder with the exact quoted clause and final numbered-step uses after the authored source sections exist.

## 9. Dependency closure, id search, and blockers

All 70 proposed ids are unique. A whole-corpus search of `items/` and `research/plan-spec.json` found no id collision, and a semantic title search found no published duplicate requiring an alias. Every external direct dependency resolves to a published item, every own-page dependency is earlier, and the two required A pages are published and earlier in the dispatched reading order. There are no forward or cross-batch edges.

The mandatory notation scan finds no canonical embedding applied to a natural number in any batch artifact. Bare basis-inclusion notation is not needed here. Empty families, the trivial group, $n=0$ in the partition corollary, $n=1$ in the arbitrary-order and squarefree corollaries, singleton free-product families, trivial amalgams, whole-factor amalgams, and both directions of every iff are explicit in strategies or proof-contract boundaries.

Environment preflight completed every repository and application check available in the sandbox, but its outer process checks could not spawn `codex`, `claude`, `git`, or `df` because this runtime returned `EPERM`. The required Node gates themselves remain runnable without escalation. No mathematical or source blocker remains.

## 10. Step-4 B-leaf repair

- `cor-free-product-of-infinite-cyclic-groups-is-free` uses route 1. The dependency on `ex-free-group-on-one-generator` was replaced by the published A-page definition of a free group and the published cyclic-power, infinite-order, and exponent-law results. Its proof contract now constructs the singleton universal property inline before invoking the disjoint-basis theorem.
- `ex-cyclic-amalgamation-with-relation-xm-equals-yn` uses route 1. The same published example was replaced by the A-page word-quotient normal-form and freeness theorems, together with the presentation definition and the products-of-conjugates theorem for the empty normal closure. This supplies the precise one-generator empty-relator presentation within the example itself.
- `fs-every-finite-group-is-a-product-of-cyclic-prime-power-groups` uses route 1. The dependency on `ex-symmetric-group-on-three-letters` was replaced by `def-symmetric-group`, the A-page lemma that supplies noncommuting transpositions on any three distinct points, and the finite-bijection theorem that makes the witness finite. The cyclic-power lemma and direct-product results license the abelianness comparison.

No item was added, dropped, or retitled, so the 84-row canonical harvest and its 70 item references remain unchanged. The proof contracts were synchronized with every replacement fact.

## 11. Gate ledger

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json`: exits 1 with 18 errors because `plan-spec.json` still contains the pre-repair Step-4 copy. Six name this batch: the three removed B-leaf edges, the consequential undeclared examples-page prerequisite caused by the finite-group edge, and the two now-added `cyclic-groups-and-direct-products` requirements. Editing or re-splicing the plan is outside this Beta's scope.
- An in-memory replacement of exactly this batch's four page objects in the plan reduces the gate to 12 errors, all belonging to other batches. None names `the-structure-of-finite-abelian-groups`, `free-products-and-amalgamation`, either companion, or any batch-2 item.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-2.coverage.json`: passed with 84 harvested headings, zero errors, and zero warnings.
- `node tools/content-policy.mjs research/frontier-10-batch-2.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json`: passed with 70 scoped items, zero errors, and zero warnings.
- The direct dependency-source check has zero unresolved dependencies. The repaired scaffolds use only opened, published A-page dependencies, and the proof-contract scope remains exact at all 56 proof-bearing items.
- Per the dispatch, `tools/gates.mjs` was not run. No escalation was requested.

## 12. Continuity checkpoint

The B-leaf repair is complete in all four batch artifacts: the three forbidden
example dependencies are gone, both free-product pages declare the cyclic-groups
prerequisite, coverage still maps all 84 harvested headings, and proof-contract
scope still matches all 56 proof-bearing items. The remaining handoff action is
for the orchestrator to re-splice these four page objects into `plan-spec.json`;
the exact required gates are the final verification commands for this dispatch.

## 13. Step-5 authoring record

All 70 settled ids were authored without a drop, merge, rename, or new item.
The four page files reproduce the authoritative reading order. Each A summary
has exactly two prose paragraphs below 150 words; both B files have no body.
The canonical harvest therefore remains unchanged: all 64 `included` rows name
files now present on disk, all 15 `inline` rows remain absorbed as recorded,
both `already-published` rows still resolve, and the three specific boundary
declines remain the only declined headings.

The component-provenance table in section 5 is the final per-item rationale.
Three provisional truth-risk labels were corrected during authoring without
changing the settled mathematics. The three `fs-` claims are deliberate false
overgeneralisations of source-backed statements, while future-scope policy
forbids an `ai-generated` false-statement kind. They are therefore `ai-altered`
at statement level and retain `ai-generated` local refutations. The Conrad and
Elman references support the finite-abelian source claim; Torres supports the
free-product and pushout source claims. No other component label changed.

Every permitted AI-generated construction received the planned dependency-leaf
truth check. The additive rationals were checked directly to be torsion-free;
the pushout along an isomorphism was checked by its universal property; the
words $(st)^n$ were separated by reduced length including $n=0$; the map to a
direct product was checked for surjectivity and a nontrivial commutator kernel;
the $C_4*_{C_2}C_6$ edge maps and presentation were checked explicitly; the
noninjective pushout was computed as the trivial group; and the whole-factor
cyclic example was checked through the unique mediator. No counterexample to
any retained construction was found. None is a dependency target.

Three authored dependencies differ from the scaffold. The proof of
`thm-cauchy-for-finite-abelian-groups` uses cyclic-group classification when a
chosen nonidentity element generates the whole group, so
`thm-classification-of-cyclic-groups` was added. Closure of the primary
component explicitly uses the commutative power law, so `lem-group-power-laws`
was added to `thm-p-primary-component-of-a-finite-abelian-group`. Finally, the
splitting proof uses the finite-order characterisation both to identify the
unique order-$p$ subgroup of its cyclic factor and to compare quotient and lift
orders, so `lem-order-characterisation` was added there. All three are cited in
the corresponding Facts blocks. Omitting any of these edges would leave a
displayed deduction unlicensed. No dependency was added merely to satisfy a
checker, and no published dependency was edited.

The proof-contract file was rebuilt from the final 56 proof-bearing bodies. It
maps each direct Fact wikilink to an exact source-section excerpt and every use,
maps every numbered step exactly once, and anchors or specifically disposes all
eight standard boundary cases. There is no external fallback, forward
reference, published-item repair, or A-page size blocker.

During the final proof read, the Facts extractor was found to stop at the first
source line when a dependency statement spanned multiple lines. The authored
files and contracts were regenerated with each complete cited Definition,
Statement, Example, or Remark section. This repaired the evidence ledger, not
the item set. The amalgamated normal-form proof was also made explicit that its
inverse-normalisation is an involution and cannot delete a nontrivial
transversal syllable; its statement now says directly that the represented
group and conclusions are independent of the chosen transversals. The settled
title, kind, purpose, and result did not change.

The final strategy audit also replaced six provisional `direct` labels with
the strategies actually used. Cauchy's theorem, maximal-cyclic splitting,
cyclic $p$-group decomposition, and decomposition into indecomposables now use
`induction` with explicit base, induction-hypothesis, and discharge tags. The
unique-order-$p$ lemma and the free-product centre corollary now use
`contradiction` with explicit assumption and discharge tags. Scoped precheck
passes each item under the corrected strategy; no proof was weakened to obtain
that result.

## 14. Step-5 verification and boundary ledger

Batch-local verification is complete. Reflow left all 70 files unchanged, and
the scoped precheck passed all 56 proof-bearing items; the 13 definitions and
one remark are correctly not applicable to precheck. Scoped rendercheck passed
all 70 items plus four page files with zero errors. Scoped prosecheck also
passed those 74 files with zero errors and five `count-in-prose` heuristic
warnings caused by dependency excerpts containing the ordinary phrase “two
definitions.” The two A summaries contain exactly two nonempty prose paragraphs:
53 and 60 words for the finite-abelian page, and 46 and 66 words for the
free-product page. Both B-page bodies are empty. A direct notation scan found
no applied `\iota`, and page-list, status, origin, and two-component provenance
integrity checks passed for all 70 items.

The strict proof-contract gate passed all 56 contracts. Its eight-case worksheet
records the following concrete dispositions: empty internal products and empty
factor families; trivial primary groups and amalgams; zero exponents, zero-part
partitions, and length-zero words; the one-factor and order-one cases; first and
last syllable seams; nonempty choices of maximal-order elements, order-$p$
subgroups, factors, and transversals (with the stated choice assumption);
degenerate cyclic, trivial-edge, whole-factor, and noninjective-pushout cases;
and both directions of every recognition or classification iff. Cases without
such a parameter are specifically marked `not_applicable`, not silently omitted.

The three batch-scoped dispatch gates are green: content policy checked 70 items
with zero errors or warnings; coverage checked 84 harvested headings with zero
errors or warnings; and strict proof contracts checked 56 of 56 with zero errors
or warnings. Coverage yield is 64 `included`, 15 `inline`, two
`already-published`, two `out-of-scope`, and one `deferred`. The two excluded
headings are the nonabelian $p$-group remark and torus-knot classification; the
deferred heading is the infinite bounded-exponent abelian-group theorem.

The first exact repository-wide finish pass at 2026-08-11 06:23 +1000 could not
be left wholly green because concurrently authored files outside this batch
were incomplete. Global precheck reported nine failures: six untagged-step
items and three auto-repair-only items, all in the Riemann--Stieltjes batch.
Global depcheck reported 28 errors confined to Riemann--Stieltjes and
change-of-variables files (invalid YAML/provenance values and unresolved
determinant prerequisites). Global rendercheck reported nine errors in the same
two external areas. Global prosecheck passed all 3334 files with zero errors.
No failing diagnostic names a batch-2 item. Those files are outside this
dispatch's writable artifacts, so they were not edited and no permission was
requested. A final repository-wide rerun remains necessary after their owners
finish.

## 15. Final exact-command snapshot

The seven commands in the dispatch were run exactly again after the final
batch-2 edits. The three scoped commands are green: content policy reports
70 items, zero errors, zero warnings; coverage reports 84 headings, zero errors,
zero warnings; and strict proof contracts report 56 of 56, zero errors, zero
warnings. Global prosecheck also exits zero, checking 3416 files with zero
errors and 580 heuristic warnings. A separate batch-2 invocation of precheck
passes all 56 proof-bearing items; scoped rendercheck passes all 74 owned item
and page files; scoped prosecheck has zero errors and the five harmless
`count-in-prose` warnings recorded above. No batch-2 id occurs in a global
depcheck diagnostic.

The other three repository-wide commands remain blocked by in-flight work
outside this dispatch. At the final snapshot, global precheck exits one with
eight external failures: three bad/unfinished Riemann--Stieltjes or improper-
integral phase tags and auto-repair findings in one improper-integral example
and four Ramsey items. Global depcheck exits one with 56 external errors,
principally unfinished provenance/YAML in the improper-integral batch and
determinant/row-reduction dependencies whose authoritative items belong to
batch 9 and are not yet on disk. Global rendercheck exits one with 19 external
errors in the same unfinished analysis files. Editing any named file would
cross the dispatch's ownership boundary, so none was edited and no permission
was requested.

While this authoring pass was still performing its proof-strategy audit, a
concurrent orchestrator committed an intermediate batches-2--5 snapshot as
`6090b68a7220d7e4da15615baa971b9f8db28c94`. The final post-snapshot refinements
therefore remain visible as working-tree modifications in eight owned items
(`thm-cauchy-for-finite-abelian-groups`,
`lem-unique-subgroup-of-order-p-forces-cyclicity`,
`thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group`,
`thm-cyclic-decomposition-of-finite-abelian-p-groups`,
`thm-finite-abelian-groups-decompose-into-indecomposable-subgroups`,
`cor-center-of-a-free-product-is-trivial`,
`thm-normal-form-for-free-products-with-amalgamation`, and
`ex-amalgamating-c-two-inside-c-four-and-c-six`), this notes file, and the proof
contracts. They must be included in the orchestrator's next authorized commit;
this Beta did not stage or commit them.
