# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-22
role: alpha-adjudicate
label: step8-a
covers: 1, 3, 8

# Step 8 — group **a**, run `frontier-22`

You are the group Alpha for batches **1**, **3**, **8**: 4 A/B pair(s), 8 page(s), 151 item(s), 61 open rejection(s) over 61 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-22-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-22-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `hnn-extensions-and-brittons-lemma` | A | group-theory | 71.011 | `subgroups-of-free-groups-and-schreier-rewriting-examples`, `free-products-and-amalgamation` |
| 1 | `hnn-extensions-and-brittons-lemma-examples` | B | group-theory | 71.012 | `hnn-extensions-and-brittons-lemma` |
| 1 | `simplicial-trees-and-group-actions` | A | group-theory | 302.009 | `amenable-groups-and-folner-criteria-examples` |
| 1 | `simplicial-trees-and-group-actions-examples` | B | group-theory | 302.01 | `simplicial-trees-and-group-actions` |
| 3 | `maschkes-theorem-and-complete-reducibility` | A | abstract-algebra | 145 | `the-group-algebra-and-representations` |
| 3 | `maschkes-theorem-and-complete-reducibility-examples` | B | abstract-algebra | 146 | `maschkes-theorem-and-complete-reducibility` |
| 8 | `subobject-lattices-generators-and-the-grothendieck-axioms` | A | category-theory | 365.017 | `abelian-categories-examples`, `chains-antichains-sperner-and-dilworth` |
| 8 | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | B | category-theory | 365.018 | `subobject-lattices-generators-and-the-grothendieck-axioms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hnn-extensions-and-brittons-lemma` — Hnn Extensions and Brittons Lemma (23 item(s))

- `def-hnn-extension-and-stable-letter` · definition — An HNN extension with its stable letter
- `lem-equivalent-hnn-presentation-with-associated-subgroups` · lemma — The edge-group presentation is equivalent to the associated-subgroup presentation
- `def-hnn-word-pin-and-britton-reduced-word` · definition — HNN words, pins, and Britton-reduced words
- `lem-elementary-hnn-reductions-preserve-the-represented-element` · lemma — Elementary HNN reductions preserve the represented element
- `def-choice-of-transversals-for-hnn-normal-forms` · definition — The transversal data used for HNN normal forms
- `thm-hnn-normal-form-theorem` · theorem — Normal forms in an HNN extension are unique relative to chosen transversals
- `thm-brittons-lemma` · theorem — Britton's lemma
- `cor-the-base-group-embeds-in-its-hnn-extension` · corollary — The base group embeds in its HNN extension
- `cor-the-stable-letter-has-infinite-order` · corollary — The stable letter has infinite order
- `def-associated-homomorphism-to-the-integers` · definition — The associated homomorphism from an HNN extension to the integers
- `prop-universal-property-of-an-hnn-extension` · proposition — The universal property of an HNN extension
- `def-ascending-hnn-extension` · definition — Ascending HNN extensions of injective endomorphisms
- `prop-normal-form-for-an-ascending-hnn-extension` · proposition — Ascending HNN extensions admit the one-sided normal form
- `rem-higman-neumann-neumann-embedding-theorem` · remark — Higman-Neumann-Neumann: every countable group embeds in a two-generator group
- `def-cyclically-britton-reduced-hnn-word` · definition — Cyclically Britton-reduced HNN words
- `lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word` · lemma — Every HNN conjugacy class contains a cyclically Britton-reduced representative
- `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate` · lemma — Cyclic permutations of a cyclically Britton-reduced HNN word stay in the same conjugacy class
- `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy` · lemma — Conjugacy between cyclically Britton-reduced HNN words reduces to base-group conjugacy after cyclic permutation
- `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words` · theorem — Collins' conjugacy theorem for cyclically reduced HNN words
- `fs-the-base-group-may-collapse-in-an-hnn-extension` · false-statement — FALSE: the base group may collapse in an HNN extension
- `fs-every-word-containing-a-stable-letter-is-nontrivial` · false-statement — FALSE: every word containing a stable letter is nontrivial
- `fs-hnn-normal-form-is-canonical-without-transversals` · false-statement — FALSE: HNN normal form is canonical without choosing transversals
- `fs-every-hnn-extension-is-an-ascending-hnn-extension` · false-statement — FALSE: every HNN extension is an ascending HNN extension

### `hnn-extensions-and-brittons-lemma-examples` — Hnn Extensions and Brittons Lemma - Examples (6 item(s))

- `ex-the-direct-product-a-times-z-as-an-hnn-extension` · example — The direct product A x Z as an HNN extension
- `ex-baumslag-solitar-groups-as-hnn-extensions` · example — Baumslag-Solitar groups as HNN extensions
- `ex-an-ascending-hnn-extension-from-doubling-the-integers` · example — The doubling endomorphism of Z gives an ascending HNN extension
- `ex-britton-reduction-of-a-word-with-two-pins` · example — Britton reduction of a word with two pins
- `ex-hnn-extension-realising-two-conjugate-subgroups` · example — An HNN extension realising two conjugate subgroups
- `cex-a-stable-letter-word-that-is-not-britton-reduced` · counterexample — A word containing a stable letter need not be Britton-reduced

### `simplicial-trees-and-group-actions` — Simplicial Trees and Group Actions (25 item(s))

- `def-oriented-graph-with-edge-reversal` · definition — An oriented graph with edge reversal
- `def-simplicial-path-reduced-path-cycle-and-connectedness` · definition — Finite simplicial paths, reduced paths, cycles, and connectedness
- `def-simplicial-tree` · definition — A simplicial tree
- `thm-unique-reduced-path-characterisation-of-simplicial-trees` · theorem — A simplicial graph is a tree exactly when every two vertices are joined by a unique reduced path
- `def-simplicial-path-metric` · definition — The simplicial path metric on the vertices of a tree
- `lem-path-metric-on-a-tree-is-geodesic-and-integer-valued` · lemma — The path metric on a simplicial tree is geodesic and integer-valued
- `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion` · theorem — Finite simplicial trees agree with the published finite-tree notion
- `def-graph-automorphism-and-group-action-on-a-simplicial-graph` · definition — Graph automorphisms and group actions on a simplicial graph
- `def-edge-inversion-and-action-without-inversions` · definition — Edge inversions and actions without inversions
- `lem-barycentric-subdivision-removes-edge-inversions` · lemma — Barycentric subdivision removes edge inversions while preserving tree actions
- `def-quotient-graph-of-an-action-without-inversions` · definition — The quotient graph of an action without inversions
- `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions` · lemma — Vertex and edge stabilizers fit together by incidence inclusions
- `def-fixed-subtree-and-minimal-invariant-subtree` · definition — Fixed subtrees and minimal invariant subtrees
- `lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree` · lemma — The nonempty fixed-vertex set of a tree automorphism is a subtree
- `def-translation-length-of-a-tree-automorphism-without-inversions` · definition — The translation length of a tree automorphism without inversions
- `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms` · theorem — A tree automorphism without inversions is elliptic or hyperbolic
- `cor-translation-length-is-conjugacy-invariant-and-homogeneous` · corollary — Translation length is conjugacy-invariant and homogeneous
- `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision` · lemma — Finite groups acting on trees have a global fixed vertex after barycentric subdivision
- `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free` · corollary — Groups acting freely without inversions on trees are torsion-free
- `thm-ping-pong-for-hyperbolic-tree-automorphisms` · theorem — Hyperbolic tree automorphisms satisfy a ping-pong criterion for freeness
- `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees` · false-statement — FALSE: the published finite-tree definition already covers Bass-Serre trees
- `fs-every-tree-action-is-without-edge-inversions` · false-statement — FALSE: every tree action is without edge inversions
- `fs-every-tree-automorphism-fixes-a-vertex` · false-statement — FALSE: every tree automorphism fixes a vertex
- `fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint` · false-statement — FALSE: translation length is always the distance from an arbitrary basepoint
- `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree` · false-statement — FALSE: a quotient of a tree by a group action is always a tree

### `simplicial-trees-and-group-actions-examples` — Simplicial Trees and Group Actions - Examples (6 item(s))

- `ex-the-bi-infinite-line-and-its-translation-action` · example — The bi-infinite line with its translation action
- `ex-regular-cayley-trees-of-free-groups` · example — Regular Cayley trees of free groups
- `ex-an-edge-inversion-and-its-barycentric-subdivision` · example — An edge inversion and its barycentric subdivision
- `ex-a-finite-group-fixing-the-centre-of-a-tree` · example — A finite group fixes the centre of a finite tree
- `ex-elliptic-and-hyperbolic-automorphisms` · example — Elliptic and hyperbolic automorphisms of simplicial trees
- `cex-the-quotient-of-a-tree-can-have-cycles` · counterexample — The quotient of a tree can have cycles

### `maschkes-theorem-and-complete-reducibility` — Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$ (19 item(s))

- `def-completely-reducible-representation` · definition — A completely reducible representation as a finite direct sum of irreducible subrepresentations
- `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` · theorem — Maschke's theorem for finite groups over fields whose characteristic does not divide $|G|$
- `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order` · corollary — If $\operatorname{char} k \nmid |G|$, every finite-dimensional representation of $G$ is completely reducible
- `cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order` · corollary — If $\operatorname{char} k \nmid |G|$, then $k[G]$ is a semisimple ring
- `thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order` · theorem — If $\operatorname{char} k \mid |G|$, the augmentation ideal of $k[G]$ has no $k[G]$-module complement in the regular representation
- `cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order` · corollary — If $\operatorname{char} k \mid |G|$, then $k[G]$ is not semisimple
- `def-isotypic-component-of-a-completely-reducible-representation` · definition — The isotypic component of a completely reducible representation
- `thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique` · theorem — The isotypic decomposition of a completely reducible representation is unique
- `rem-decomposition-into-irreducible-summands-need-not-be-unique` · remark — A decomposition into irreducible summands need not be unique even when the isotypic decomposition is
- `def-center-of-the-group-algebra` · definition — The center $Z(k[G])$ of the group algebra
- `def-class-sum-of-a-conjugacy-class-in-k-g` · definition — The class sum $\widehat C$ of a conjugacy class $C$
- `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, then $k[G]\cong\prod_{i=1}^r M_{n_i}(k)$
- `thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, there are finitely many irreducible representations, and each occurs in the regular representation with multiplicity equal to its degree
- `cor-sum-of-squares-formula-for-irreducible-degrees` · corollary — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, then $\sum_i (\dim_k V_i)^2=|G|$
- `lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices` · lemma — The center of $M_n(k)$ consists of the scalar matrices
- `thm-class-sums-form-a-basis-of-the-center-of-k-g` · theorem — For a finite group, the class sums form a basis of $Z(k[G])$
- `cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes` · corollary — The dimension of $Z(k[G])$ is the number of conjugacy classes of $G$
- `thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, the number of irreducible representations of $G$ equals the number of conjugacy classes
- `cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero` · corollary — Over an algebraically closed field of characteristic $0$, every element of finite order acts diagonalisably in a finite-dimensional representation

### `maschkes-theorem-and-complete-reducibility-examples` — Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$ — Examples (10 item(s))

- `ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c` · example — $\mathbb C[\mathbb Z/3\mathbb Z]\cong\mathbb C\times\mathbb C\times\mathbb C$
- `ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c` · example — $\mathbb C[S_3]\cong\mathbb C\times\mathbb C\times M_2(\mathbb C)$
- `ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition` · example — $\mathbb C[Q_8]$ and $\mathbb C[\operatorname{Dih}(C_4)]$ both decompose as $\mathbb C^4\times M_2(\mathbb C)$
- `ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters` · example — The regular representation of $\mathbb Z/4\mathbb Z$ over $\mathbb C$ splits into its four characters
- `ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component` · example — The two-dimensional trivial representation of $C_2$ has many irreducible splittings but one isotypic component
- `fs-maschkes-theorem-without-the-characteristic-hypothesis` · false-statement — False statement: Maschke's theorem holds over every field
- `fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple` · false-statement — False statement: every finite-dimensional algebra over a field is semisimple
- `fs-decomposition-into-irreducible-subrepresentations-is-unique` · false-statement — False statement: a completely reducible representation has a unique decomposition into irreducible subrepresentations
- `fs-the-sum-of-the-irreducible-degrees-equals-the-group-order` · false-statement — False statement: the sum of the irreducible degrees equals $|G|$
- `fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r` · false-statement — False statement: a group with $r$ conjugacy classes has an irreducible representation of degree $r$

### `subobject-lattices-generators-and-the-grothendieck-axioms` — Subobject Lattices Generators and the Grothendieck Axioms (54 item(s))

- `def-modular-lattice` · definition — Modular lattice
- `def-the-join-of-subobjects-in-an-abelian-category` · definition — The join of two subobjects in an abelian category
- `thm-the-join-of-subobjects-is-their-least-upper-bound` · theorem — The join of two subobjects is their least upper bound
- `thm-the-meet-of-subobjects-is-their-pullback` · theorem — The meet of two subobjects is their pullback
- `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice` · theorem — The subobjects of an object in an abelian category form a lattice
- `thm-the-subobject-lattice-of-an-abelian-category-is-modular` · theorem — The subobject lattice of an abelian category is modular
- `rem-the-published-modular-law-for-subgroups-is-the-instance` · remark — The published subgroup modular law is the group instance
- `cex-a-subobject-lattice-need-not-be-distributive` · counterexample — A subobject lattice of an abelian category need not be distributive
- `thm-second-isomorphism-theorem-in-an-abelian-category` · theorem — Second isomorphism theorem in an abelian category
- `def-the-direct-image-and-inverse-image-of-a-subobject` · definition — Direct and inverse image of a subobject
- `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection` · theorem — Direct and inverse image of subobjects form a Galois connection
- `cor-inverse-image-preserves-meets-and-direct-image-preserves-joins` · corollary — Inverse image preserves meets and direct image preserves joins
- `cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism` · corollary — Kernel and image are inverse and direct images along a morphism
- `def-simple-object` · definition — Simple object
- `def-composition-series-and-composition-factors-of-an-object` · definition — Composition series and composition factors of an object
- `thm-zassenhaus-butterfly-lemma-in-an-abelian-category` · theorem — Zassenhaus butterfly lemma in an abelian category
- `thm-schreier-refinement-theorem-in-an-abelian-category` · theorem — Schreier refinement theorem in an abelian category
- `thm-jordan-holder-theorem-in-an-abelian-category` · theorem — Jordan-Hölder theorem in an abelian category
- `def-object-of-finite-length` · definition — Object of finite length
- `thm-length-is-additive-along-a-subobject` · theorem — Length is additive along a subobject
- `thm-objects-of-finite-length-form-an-abelian-subcategory` · theorem — Objects of finite length form an abelian subcategory
- `rem-the-published-group-development-is-the-instance` · remark — The published group composition-series development is the instance
- `def-generator-and-cogenerator-of-a-category` · definition — Generator and cogenerator of a category
- `def-the-axioms-ab3-and-ab3-star` · definition — The axioms AB3 and AB3*
- `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree` · theorem — The cancellation and epimorphism descriptions of a generator agree
- `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered` · theorem — A locally small abelian category with a generator is well-powered
- `rem-generator-separator-and-the-three-inequivalent-looking-definitions` · remark — Generator, separator, and the three inequivalent-looking definitions
- `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied` · corollary — A cocomplete locally small abelian category with a generator satisfies the SAFT hypotheses dually, once representatives are supplied
- `thm-a-generator-detects-equality-of-subobjects` · theorem — A generator detects equality of subobjects
- `def-the-axioms-ab4-and-ab4-star` · definition — The axioms AB4 and AB4*
- `def-the-axioms-ab5-and-ab5-star` · definition — The axioms AB5 and AB5*
- `thm-ab5-implies-ab4` · theorem — AB5 implies AB4
- `def-grothendieck-category` · definition — Grothendieck category
- `thm-module-categories-are-grothendieck-categories` · theorem — Module categories are Grothendieck categories
- `thm-abelian-groups-satisfy-ab4-star` · theorem — Abelian groups satisfy AB4*
- `cex-abelian-groups-do-not-satisfy-ab5-star` · counterexample — Abelian groups do not satisfy AB5*
- `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star` · theorem — A nonzero abelian category cannot satisfy both AB5 and AB5*
- `cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5` · counterexample — The opposite of abelian groups does not satisfy AB5
- `def-projective-object` · definition — Projective object
- `thm-projective-object-characterisations` · theorem — Characterisations of projective objects
- `def-injective-object` · definition — Injective object
- `thm-injective-object-characterisations` · theorem — Characterisations of injective objects
- `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective` · theorem — A coproduct of projectives is projective, and a product of injectives is injective
- `thm-a-direct-summand-of-a-projective-is-projective` · theorem — A direct summand of a projective is projective
- `def-a-category-with-enough-projectives-and-with-enough-injectives` · definition — A category with enough projectives and enough injectives
- `thm-module-categories-have-enough-projectives` · theorem — Module categories have enough projectives
- `rem-module-categories-have-enough-injectives-is-already-published` · remark — Module categories have enough injectives is already published
- `thm-a-projective-generator-detects-isomorphisms` · theorem — A projective generator detects isomorphisms
- `fs-the-subobject-lattice-of-an-abelian-category-is-distributive` · false-statement — FALSE: the subobject lattice of an abelian category is distributive
- `fs-every-abelian-category-has-a-generator` · false-statement — FALSE: every abelian category has a generator
- `fs-every-object-of-an-abelian-category-has-a-composition-series` · false-statement — FALSE: every object of an abelian category has a composition series
- `fs-ab4-implies-ab5` · false-statement — FALSE: AB4 implies AB5
- `fs-a-generator-is-the-same-thing-as-a-projective-generator` · false-statement — FALSE: a generator is the same thing as a projective generator
- `fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category` · false-statement — FALSE: Jordan-Hölder needs only a finiteness hypothesis on the category

### `subobject-lattices-generators-and-the-grothendieck-axioms-examples` — Subobject Lattices Generators and the Grothendieck Axioms — Examples (8 item(s))

- `ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve` · example — The subobject lattice of a cyclic group of order twelve
- `ex-the-subobject-lattice-of-a-two-dimensional-vector-space` · example — The subobject lattice of a two-dimensional vector space
- `ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism` · example — The Galois connection of images and preimages for a module homomorphism
- `ex-two-composition-series-of-a-module-refined` · example — Two composition series of a module refined
- `ex-the-ring-as-a-generator-of-its-module-category` · example — The ring as a generator of its module category
- `cex-an-abelian-category-with-no-nonzero-projective-object` · counterexample — The category of finite abelian groups has no nonzero projective object
- `ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup` · example — A directed union of subgroups meeting a fixed subgroup
- `ex-length-computed-for-a-finite-abelian-group` · example — Length computed for a finite abelian group

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-abelian-groups-do-not-satisfy-ab5-star` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `760826f9d4fc6e25f2854a1c4c2c9f76960c95bcef65667e3f1de11ac190ca8e` |
| `cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `88dec04121b0f07ea8f1d17315ac3c1dad47e88495c81404699578e02d4670bc` |
| `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `a264692e85adb8e09223d689ae8a336d009c129aa9ed6d79100252d37552c1fb` |
| `cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `4c9bbaadf0cac5a8d9d94653b6e880d19fa9af36be9d46939605c592cdf6fb65` |
| `cor-the-stable-letter-has-infinite-order` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `fb5c0374afe01dcb187a90f1cb18eaa2f365eba63f0dd2db57280087c61750f5` |
| `def-ascending-hnn-extension` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `7b050d98d6dcac36a9edd6d90d760cda5f53b849d50a3a37534519f9180d4ac2` |
| `def-choice-of-transversals-for-hnn-normal-forms` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `6e17ded561a5f80c5176edee722cfaea4d4f12e224f4b1c19b622802f84ba1ec` |
| `def-hnn-extension-and-stable-letter` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `6f31be39dc2750709f6a613e26115fe2c339d4a600ef46e9f6b65b7af1ea8181` |
| `def-simplicial-tree` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `57aa8fe40cb43fe6e1d3258e978fd60a2e5550ba73af3998c0ad267056096c87` |
| `def-the-axioms-ab5-and-ab5-star` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `9038dc14a3285b9d72d012943458e9ed0a80cfe179c95b345139bdbe91b6e263` |
| `def-the-direct-image-and-inverse-image-of-a-subobject` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `791923ae6d78ffc83aa365627165761d9be352d1ca3d83fbd811bfd9d30c6c7b` |
| `ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup` | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | gpt-5.6-terra | `6dd1bea1ad32426e39b736362cfa7f659d3ad9f100edc568e8e17946a05fa994` |
| `ex-an-ascending-hnn-extension-from-doubling-the-integers` | `hnn-extensions-and-brittons-lemma-examples` | gpt-5.6-terra | `b88e5b9f02dcafad7a4f46628b6b36c72ef77bcd69806adc936a4ee5e476e6fd` |
| `ex-elliptic-and-hyperbolic-automorphisms` | `simplicial-trees-and-group-actions-examples` | gpt-5.6-terra | `109709fdd0d0fbcfd656e184b282d169d2e828a28147e7a70c9ac3c11b1620a0` |
| `ex-hnn-extension-realising-two-conjugate-subgroups` | `hnn-extensions-and-brittons-lemma-examples` | gpt-5.6-terra | `68ef4ff22a392cbd1743474aa52748e1b4f3f03194f49981883d7521dc31a6a6` |
| `ex-length-computed-for-a-finite-abelian-group` | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | gpt-5.6-terra | `f35fa11e4c0b028a2e600ed5fe4c07239ce45529807c98f162e553612e7568fe` |
| `ex-regular-cayley-trees-of-free-groups` | `simplicial-trees-and-group-actions-examples` | gpt-5.6-terra | `6d6e0318e6bd8f517c3e37ad6a51fa4ea729bc03197a50f695ca2b5d0316bf3a` |
| `ex-the-bi-infinite-line-and-its-translation-action` | `simplicial-trees-and-group-actions-examples` | gpt-5.6-terra | `278e99c4f4c4ca5fa13a7e5ae23087b1711b415f0d7be43f560eccde7c1ffcca` |
| `ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c` | `maschkes-theorem-and-complete-reducibility-examples` | gpt-5.6-terra | `ffea12c10d2984fa3e0dfedf0a6036a36c8e61fca77ea9c184646d12455f4df6` |
| `ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c` | `maschkes-theorem-and-complete-reducibility-examples` | gpt-5.6-terra | `cc205da865b4c13ab4d19ea8319d0ae920bf8ab37c1ff4673e01c5113155c666` |
| `ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition` | `maschkes-theorem-and-complete-reducibility-examples` | gpt-5.6-terra | `f52dc9a3beb1222da1f0677f5411088c5a384bc7e7bd52c1aa38011ea4e600a0` |
| `ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve` | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | gpt-5.6-terra | `8066c7bfe30b916e61ff12bdd7f33024ecab7d84ec88090759b4fe787eefadba` |
| `ex-the-subobject-lattice-of-a-two-dimensional-vector-space` | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | gpt-5.6-terra | `e30b7e1d60b82f686203564111ce8796e604a31ffb7e247a9428b927ec29ea62` |
| `ex-two-composition-series-of-a-module-refined` | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | gpt-5.6-terra | `8e6322b95da7b7a88b90ccfb94ab0fde1c85b117c4ee2ee6140ef3c2be43768a` |
| `fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r` | `maschkes-theorem-and-complete-reducibility-examples` | gpt-5.6-terra | `b5e64cf11e5d3a8c60aeadfb9e52757cd7f73bd9cd5c735f7b00b8ccd40ac468` |
| `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `ba559ddd7167cdeca896dc3e1526f852987425462744de8087d6e6485282d3cd` |
| `fs-ab4-implies-ab5` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `a5a9e63149d67e5b34d334789c9f1439d4b0b9a991fd16fa8598bf5a3f08efd9` |
| `fs-every-abelian-category-has-a-generator` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `08bfb1d9395a3ce02fd428dfc72a3d880d657520dcc84af77c5db21c2767c6ec` |
| `fs-every-tree-action-is-without-edge-inversions` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `41e186319e50a520cbd99fff1430d853944e1a4067a5e03e93f5ef336b268eb6` |
| `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `4e9170bb36f030fe398ccee302c8f9886129fb6d849081c82ce4f978d3fc5fb9` |
| `fs-the-sum-of-the-irreducible-degrees-equals-the-group-order` | `maschkes-theorem-and-complete-reducibility-examples` | gpt-5.6-terra | `bc75d410a2f1083bb2b41de6633d92910eeaf385e4b069b3b7ff93bd8ea6554c` |
| `lem-barycentric-subdivision-removes-edge-inversions` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `4706127eb7c02f9ad8ed1edb3d3da3bf643aa97baac8d954742468ca0aa3cfab` |
| `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `cbd18a0374d6e1520958abef0e268c1d1a7acc6ed871413adeda4dfa0bc89200` |
| `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `b1d9aed30cd6d3c66624307f9b1a371d53d6c5be84570481cccd15f2f8afefe5` |
| `lem-equivalent-hnn-presentation-with-associated-subgroups` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `8d90867bd0357ec48882c204833c88e1c2b1e163bcabe5435f8403354d73522d` |
| `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `adde4ee8019797480ee33a90d33525a3c93e5efa128a29122541804fcb3dface` |
| `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `17dca8c33e5353ed4616d3ba3c54979a65759448a4c91b35d48e8e9b30365730` |
| `prop-normal-form-for-an-ascending-hnn-extension` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `ce03bdd49bb2e192c91b9cec9771c8b551f6f6f73b84529668690c218c7fcc6a` |
| `rem-the-published-group-development-is-the-instance` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `c43cad23ed197bfb33d725afc520284b2b0c18f06ee6067cda2cfede75a6fe2e` |
| `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `90d6b911a0255b23d8f3a110f295622f0b99ff2386088be2c4dc60251fc3f77e` |
| `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `19889268858e2b5ae9e0fd7f261d2085752d3402ea9352a19f22aeda2c8b38dc` |
| `thm-a-projective-generator-detects-isomorphisms` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `0c0ccdaf1aeb330d1a0709b0ecfda33454a14e43a9e6e379b0e8786fae79fe18` |
| `thm-ab5-implies-ab4` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `3b0fad359fa13954df90d1448df7a96b5c5c3184bf1f79a2ba3296e2fdaeae58` |
| `thm-abelian-groups-satisfy-ab4-star` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `8c095b76e449f04e6ce85643e7ad3c9f3e1ef96cbd53e55e9235345e2c44bd56` |
| `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `573a37e9691487cc81a449825e4ae44230627fe455af16252124ab9859a053f8` |
| `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `64e96995c2ae4ead96ec4392b6925bdfe5f18c56f7f67346bff44c54b450cc4e` |
| `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `9ae2466168f88525e392e6c4353eeef5b2f8c468db853b85271cba4597f989b9` |
| `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `661a43d2e7be99c1e833bef50037c27c1112c1acbc7db485d40f87433d3202d3` |
| `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field` | `maschkes-theorem-and-complete-reducibility` | gpt-5.6-terra | `24e3d7176995f977cf8af6edf77612e45b2f98da849e2400ea2f36c1ec30d89f` |
| `thm-hnn-normal-form-theorem` | `hnn-extensions-and-brittons-lemma` | gpt-5.6-terra | `133401f7d7214666b3393a845b2af6d315411732f2c6aaf9d8d99c81d191cd78` |
| `thm-length-is-additive-along-a-subobject` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `28d01440b4cc1510efcf18da9b2e3c2bddbe95a73de34c8689637d08fcb970bd` |
| `thm-module-categories-are-grothendieck-categories` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `ee1ecdf95fbc3f4ea2d0ef324717ac8feb05db8a76686ac8144ec4ecfc756cb6` |
| `thm-module-categories-have-enough-projectives` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `0571e674556d77c0c769ad8019eb18d9066921dc653a56e9e75555288c332db0` |
| `thm-ping-pong-for-hyperbolic-tree-automorphisms` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `a70c61d021038a0c4d818098960dbeca9810d529c10fb8e18caddb0038ac7b60` |
| `thm-projective-object-characterisations` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `0cedf86d179d77a9ce7efa5a0f2e48b3c5f1179c99b41163682e91356bc80d34` |
| `thm-schreier-refinement-theorem-in-an-abelian-category` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `84dce5b2deec3b83871d528397e44bac94a64a6846acc37298ddd6e72ec1dffd` |
| `thm-second-isomorphism-theorem-in-an-abelian-category` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `6cd700f8150b6b363662ae92c03dc9f9cd75e99adcc5f111b08f18130bf83d7b` |
| `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `d42fe06b9ca942e69b19d2ae46c85080d67f5010cd467aebaa270a953686e83d` |
| `thm-the-subobject-lattice-of-an-abelian-category-is-modular` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `564be3c4bfc0319b80a99eb938382d483b990434508333690ebfcbf2d87fffa0` |
| `thm-unique-reduced-path-characterisation-of-simplicial-trees` | `simplicial-trees-and-group-actions` | gpt-5.6-terra | `e4ab2eb173db8cfd24458dd89d36f8f99741352bc09bd189707d7001f584cca2` |
| `thm-zassenhaus-butterfly-lemma-in-an-abelian-category` | `subobject-lattices-generators-and-the-grothendieck-axioms` | gpt-5.6-terra | `0d56618cb3c2854768e3ff057974805972634c077b54477073f28dbb488bee42` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-22`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-22-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-22-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-22-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-22-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
