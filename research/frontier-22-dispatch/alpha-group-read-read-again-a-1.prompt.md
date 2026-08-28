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
role: alpha-group-read
label: read-again-a-1

# Step 8 — group **a**, run `frontier-22`

You are the group Alpha for batches **1**, **3**, **8**: 4 A/B pair(s), 8 page(s), 151 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

**No step-7 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-22`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
