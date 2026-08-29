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
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
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

run: frontier-23
role: alpha-group-read
label: read-again-a-1

# Step 8 — group **a**, run `frontier-23`

You are the group Alpha for batches **1**, **3**, **4**: 4 A/B pair(s), 8 page(s), 136 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `decision-problems-for-finitely-presented-groups` | A | group-theory | 71.013 | `hnn-extensions-and-brittons-lemma-examples` |
| 1 | `decision-problems-for-finitely-presented-groups-examples` | B | group-theory | 71.014 | `decision-problems-for-finitely-presented-groups` |
| 1 | `graphs-of-groups-and-bass-serre-theory` | A | group-theory | 302.011 | `hnn-extensions-and-brittons-lemma`, `simplicial-trees-and-group-actions-examples` |
| 1 | `graphs-of-groups-and-bass-serre-theory-examples` | B | group-theory | 302.012 | `graphs-of-groups-and-bass-serre-theory` |
| 3 | `integral-extensions-and-going-up` | A | commutative-algebra | 111.011 | `associated-primes-and-primary-decomposition-examples` |
| 3 | `integral-extensions-and-going-up-examples` | B | commutative-algebra | 111.012 | `integral-extensions-and-going-up` |
| 4 | `characters-and-the-orthogonality-relations` | A | abstract-algebra | 147 | `maschkes-theorem-and-complete-reducibility`, `inner-product-spaces-and-orthogonality`, `tensor-products-of-modules` |
| 4 | `characters-and-the-orthogonality-relations-examples` | B | abstract-algebra | 148 | `finite-fields-and-cyclotomic-extensions`, `the-fundamental-theorem-of-algebra`, `characters-and-the-orthogonality-relations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `decision-problems-for-finitely-presented-groups` — Decision Problems for Finitely Presented Groups (27 item(s))

- `def-finite-alphabet-encoding-and-algorithm` · definition — Finite alphabets, encoded inputs, and algorithms
- `def-recursive-and-recursively-enumerable-languages` · definition — Recursive and recursively enumerable languages
- `def-recursive-and-finite-group-presentations` · definition — Recursive presentations and finite presentations of groups
- `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` · lemma — The trivial words of a recursively presented group form a recursively enumerable language
- `def-word-problem-for-a-fixed-finite-presentation` · definition — The word problem for a fixed finite presentation
- `def-uniform-word-problem-for-finite-presentations` · definition — The uniform word problem for finite presentations
- `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` · proposition — Solvability of the word problem does not depend on the chosen finite generating set
- `thm-word-problem-for-free-groups` · theorem — The word problem for a finitely generated free group is solvable by free reduction
- `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form` · remark — Finitely generated abelian groups admit invariant-factor normal form
- `thm-word-problem-for-finitely-generated-abelian-groups` · theorem — The word problem for finitely generated abelian groups is solvable
- `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` · theorem — Free products and suitable amalgamated free products have solvable word problem
- `def-conjugacy-problem-for-a-finitely-generated-group` · definition — The conjugacy problem for a finitely generated group
- `def-isomorphism-problem-for-a-class-of-finite-presentations` · definition — The isomorphism problem for a class of finite presentations
- `def-markov-property-of-finitely-presented-groups` · definition — A Markov property of finitely presented groups
- `rem-novikov-boone-undecidability-of-the-word-problem` · remark — Novikov-Boone: some finitely presented group has unsolvable word problem
- `rem-adian-rabin-undecidability-for-markov-properties` · remark — Adian-Rabin: every Markov property is undecidable on finite presentations
- `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations` · remark — Triviality and finiteness are undecidable for finite presentations
- `rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups` · remark — The isomorphism problem for finitely presented groups is undecidable
- `rem-groups-with-unsolvable-conjugacy-problem` · remark — There exist finitely presented groups with unsolvable conjugacy problem
- `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` · definition — Algebraic relator area and the Dehn function of a finite presentation
- `lem-minimal-algebraic-relator-area-exists` · lemma — Every null word has a minimal algebraic relator area
- `prop-recursive-dehn-function-implies-solvable-word-problem` · proposition — A recursive Dehn function yields a solution to the word problem
- `fs-every-finitely-presented-group-has-solvable-word-problem` · false-statement — FALSE: every finitely presented group has solvable word problem
- `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` · false-statement — FALSE: recursively enumerable trivial words already give a decision algorithm
- `fs-unsolvable-word-problem-means-no-word-can-be-decided` · false-statement — FALSE: an unsolvable word problem means no individual word can be decided
- `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only` · false-statement — FALSE: the Novikov-Boone theorem proves only the uniform problem is unsolvable
- `fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem` · false-statement — FALSE: Tietze-equivalent finite presentations can differ on whether their word problem is solvable

### `decision-problems-for-finitely-presented-groups-examples` — Decision Problems for Finitely Presented Groups — Examples (6 item(s))

- `ex-word-problem-by-free-reduction` · example — Free reduction decides a word in a free group
- `ex-word-problem-in-a-finite-cyclic-presentation` · example — The word problem in a finite cyclic presentation
- `ex-conjugacy-in-a-free-group-by-cyclic-reduction` · example — Conjugacy in a free group by cyclic reduction
- `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` · example — Todd-Coxeter as a partial coset-enumeration procedure
- `ex-an-algebraic-relator-area-computation` · example — Computing an algebraic relator area
- `cex-enumerating-relator-consequences-does-not-decide-nontriviality` · counterexample — Enumerating relator consequences does not decide nontriviality

### `graphs-of-groups-and-bass-serre-theory` — Graphs of Groups and Bass Serre Theory (26 item(s))

- `def-graph-of-groups` · definition — A graph of groups
- `def-maximal-subtree-of-a-connected-graph` · definition — A maximal subtree of a connected graph
- `def-path-group-of-a-graph-of-groups` · definition — The path group of a graph of groups
- `def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree` · definition — The fundamental group of a graph of groups relative to a maximal tree
- `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic` · theorem — Different maximal trees give isomorphic graph-of-groups fundamental groups
- `def-reduced-graph-of-groups-word` · definition — Reduced words in a graph of groups
- `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` · theorem — Normal form for the fundamental group of a graph of groups
- `cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group` · corollary — Vertex groups embed in the fundamental group of a graph of groups
- `def-bass-serre-tree-of-a-graph-of-groups` · definition — The Bass-Serre tree of a graph of groups
- `lem-the-bass-serre-coset-graph-is-a-tree` · lemma — The Bass-Serre coset graph is a tree
- `thm-fundamental-group-acts-on-its-bass-serre-tree` · theorem — The fundamental group acts without inversions on its Bass-Serre tree
- `def-quotient-graph-of-groups-from-a-tree-action` · definition — The quotient graph of groups attached to a tree action
- `lem-boundary-monomorphisms-from-stabilizers-are-well-defined` · lemma — The boundary monomorphisms from stabilizers are well-defined
- `thm-bass-serre-structure-theorem` · theorem — Bass-Serre structure theorem
- `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` · theorem — A one-segment graph of groups gives an amalgamated free product
- `thm-one-loop-graph-of-groups-is-an-hnn-extension` · theorem — A one-loop graph of groups gives an HNN extension
- `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` · corollary — A group acting freely without inversions on a tree is free
- `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free` · corollary — The fundamental group of a graph with trivial groups is free
- `thm-kurosh-subgroup-theorem` · theorem — Kurosh subgroup theorem
- `thm-grushko-decomposition-and-rank-additivity` · theorem — Grushko decomposition and rank additivity
- `rem-stallings-theorem-on-ends-and-splittings` · remark — Stallings's theorem on ends and splittings
- `fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition` · false-statement — FALSE: the fundamental group of a graph of groups is a topological fundamental group by definition
- `fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy` · false-statement — FALSE: vertex stabilizers are literally the chosen vertex groups without conjugacy ambiguity
- `fs-every-tree-action-is-a-free-action` · false-statement — FALSE: every tree action is free
- `fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data` · false-statement — FALSE: the quotient graph determines the acting group without stabilizer data
- `fs-kurosh-says-every-subgroup-of-a-free-product-is-free` · false-statement — FALSE: Kurosh says every subgroup of a free product is free

### `graphs-of-groups-and-bass-serre-theory-examples` — Graphs of Groups and Bass Serre Theory — Examples (7 item(s))

- `ex-bass-serre-tree-of-a-free-product` · example — The Bass-Serre tree of a free product
- `ex-bass-serre-tree-of-an-amalgamated-free-product` · example — The Bass-Serre tree of an amalgamated free product
- `ex-bass-serre-tree-of-a-baumslag-solitar-group` · example — The Bass-Serre tree of a Baumslag-Solitar group
- `ex-a-free-action-and-the-quotient-graph-basis` · example — A free action and the quotient-graph basis
- `ex-kurosh-decomposition-of-a-subgroup` · example — A Kurosh decomposition of a subgroup of a free product
- `ex-graph-of-finite-groups-giving-a-virtually-free-group` · example — A graph of finite groups giving a virtually free group
- `cex-the-underlying-quotient-graph-does-not-determine-the-group` · counterexample — The underlying quotient graph does not determine the acting group

### `integral-extensions-and-going-up` — Integral Extensions and Going Up (17 item(s))

- `def-integral-ring-extension` · definition — Integral ring maps and integral extensions
- `def-integral-closure-and-integrally-closed-domain` · definition — Integral closure in an extension ring and integrally closed domains
- `thm-transitivity-of-integrality` · theorem — Integral extensions are transitive
- `thm-integral-closure-is-integrally-closed` · theorem — The integral closure of a domain in a field extension is integrally closed
- `thm-integrality-commutes-with-localisation` · theorem — Integrality and integral closure commute with localisation
- `lem-field-integrality-criterion` · lemma — For an integral extension of domains, the upper ring is a field if and only if the lower ring is
- `cor-contraction-of-maximal-ideals-integral-extension` · corollary — Under an integral extension, a prime is maximal if and only if its contraction is maximal
- `thm-lying-over` · theorem — Lying over for integral ring maps
- `thm-incomparability-for-integral-extensions` · theorem — Comparable primes with the same contraction are equal under an integral map
- `thm-going-up` · theorem — Going up for integral ring maps
- `cor-integral-extension-lifts-finite-prime-chains` · corollary — Integral extensions lift finite prime chains from the base
- `lem-integral-extension-chain-contraction-is-strict` · lemma — Strict prime chains contract strictly under integral extensions
- `cor-dimension-preserved-by-integral-extensions` · corollary — Injective integral extensions preserve Krull dimension
- `lem-integrally-closed-minimal-polynomial-coefficients` · lemma — Minimal polynomials of integral elements over an integrally closed domain have coefficients in the domain
- `thm-normality-is-local-for-domains` · theorem — A domain is integrally closed if and only if its prime localisations are, equivalently if and only if its maximal localisations are
- `thm-going-down-over-normal-domains` · theorem — Going down holds for integral extensions over integrally closed domains
- `cor-height-preserved-under-going-down-integral-extensions` · corollary — Under going down and incomparability, lying-over primes have the same finite height

### `integral-extensions-and-going-up-examples` — Integral Extensions and Going Up — Examples (6 item(s))

- `ex-integrality-equation-and-power-basis` · example — Every element of k[X] is integral over k[X^2], and k[X] has basis 1, X over k[X^2]
- `ex-integral-elements-subring-computation` · example — Z[square-root of 2, square-root of 3] is finite over Z and contains the sum and product of its generators
- `ex-integrality-localisation-clearing-denominators` · example — The element 1/p is integral over Z[1/p] but not over Z
- `ex-lying-over-by-quotient-and-localisation` · example — Lying over in k[t^2, t^3] subset k[t]
- `ex-incomparability-in-a-quadratic-integral-extension` · example — In k[Y] subset k[X] with Y = X^2, comparable primes do not share a contraction
- `ex-going-down-needs-normality` · example — An integral domain extension can fail going down when the base is not normal

### `characters-and-the-orthogonality-relations` — Characters and the Orthogonality Relations (30 item(s))

- `rem-standing-hypotheses-for-ordinary-character-theory` · remark — Standing hypotheses for ordinary character theory: $G$ finite, $k=\mathbb C$, and every representation finite-dimensional
- `def-character-of-a-complex-representation` · definition — The character $\chi_V(g)=\operatorname{tr}(\rho_V(g))$ of a finite-dimensional complex representation
- `def-class-function-and-the-space-of-complex-class-functions` · definition — Class functions and the complex vector space $\mathrm{cf}(G)$
- `def-standard-inner-product-on-complex-class-functions` · definition — The standard inner product on $\mathrm{cf}(G)$
- `def-irreducible-complex-character` · definition — An irreducible complex character
- `def-character-table-of-a-finite-group` · definition — The character table of a finite group
- `def-tensor-product-of-complex-representations` · definition — The tensor product of two complex representations
- `def-dual-complex-representation` · definition — The dual or contragredient complex representation
- `def-kernel-of-a-complex-character` · definition — The kernel of a complex character
- `prop-basic-value-properties-of-a-complex-character` · proposition — For a complex character, $\chi(1)=\dim V$, $\chi$ is a class function, and $|\chi(g)|\le\chi(1)$ with equality exactly at scalars
- `thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel` · theorem — The kernel of a complex character agrees with the kernel of any representation affording it
- `thm-characters-of-direct-sums-tensor-products-and-duals` · theorem — Characters add on direct sums, multiply on tensor products, and conjugate on duals
- `thm-character-of-a-permutation-representation-counts-fixed-points` · theorem — The character of a permutation representation counts fixed points
- `def-g-fixed-subspace-of-a-representation` · definition — The fixed subspace $V^G$ of a representation
- `lem-averaging-operator-projects-onto-the-fixed-subspace` · lemma — The averaging operator projects onto the fixed subspace
- `lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation` · lemma — For finite-dimensional complex $V$, the intertwiners $V\to W$ are exactly the fixed points of $V^*\otimes W$
- `thm-character-inner-product-computes-intertwiner-dimension` · theorem — The class-function inner product $\langle\chi_V,\chi_W\rangle$ equals $\dim\operatorname{Hom}_G(V,W)$
- `thm-first-orthogonality-relation-for-irreducible-complex-characters` · theorem — The first orthogonality relation for irreducible complex characters
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` · theorem — The irreducible complex characters form an orthonormal basis of $\mathrm{cf}(G)$
- `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product` · corollary — The multiplicity of an irreducible summand is a character inner product
- `thm-complex-representations-are-determined-by-their-characters` · theorem — Finite-dimensional complex representations of a finite group are determined up to isomorphism by their characters
- `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one` · corollary — A complex character is irreducible if and only if its self-inner-product is $1$
- `thm-character-of-the-regular-representation` · theorem — The regular character is $|G|$ at $1$ and $0$ away from $1$
- `cor-the-regular-character-gives-the-sum-of-squares-formula` · corollary — The regular character gives a second proof of the sum-of-squares formula
- `thm-second-column-orthogonality-relation-for-irreducible-complex-characters` · theorem — The second orthogonality relation for irreducible complex characters
- `cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size` · corollary — For $g\in G$, the sum of $|\chi_i(g)|^2$ over the irreducible complex characters is $|C_G(g)|$
- `cor-the-character-table-is-square-and-invertible` · corollary — The character table is square and invertible
- `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient` · proposition — A representation with kernel containing a normal subgroup factors through the quotient, and irreducibility is unchanged by inflation
- `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters` · theorem — The normal subgroups of a finite group are exactly the intersections of kernels of irreducible complex characters
- `thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one` · theorem — A finite group is abelian if and only if all its irreducible complex characters have degree $1$

### `characters-and-the-orthogonality-relations-examples` — Characters and the Orthogonality Relations - Examples (17 item(s))

- `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root` · example — The irreducible complex characters of a finite cyclic group are the $n$ powers of a primitive $n$th root
- `ex-the-character-table-of-a-finite-cyclic-group-over-c` · example — The character table of a finite cyclic group over $\mathbb C$
- `ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one` · example — The standard representation of $S_n$ has character equal to the number of fixed points minus $1$
- `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two` · example — $S_3$ has three irreducible complex characters of degrees $1$, $1$, and $2$
- `ex-the-character-table-of-s-three` · example — The character table of $S_3$
- `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` · example — The square of the two-dimensional $S_3$ character decomposes as $1+\operatorname{sgn}+\chi_2$
- `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes` · example — $A_4$ has a normal Klein four subgroup and four conjugacy classes
- `ex-the-character-table-of-a-four` · example — The character table of $A_4$
- `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` · example — $S_4$ has five conjugacy classes of sizes $1$, $6$, $3$, $8$, and $6$
- `ex-the-character-table-of-s-four-and-its-normal-subgroups` · example — The character table of $S_4$ and the normal subgroups it reveals
- `ex-the-character-table-of-q-eight` · example — The character table of $Q_8$
- `ex-the-character-table-of-dih-c-four` · example — The character table of $\operatorname{Dih}(C_4)$
- `fs-nonisomorphic-finite-groups-can-have-the-same-character-table` · false-statement — FALSE: nonisomorphic finite groups always have different character tables
- `fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism` · false-statement — FALSE: a complex character of a finite group is always a group homomorphism
- `fs-every-value-of-an-irreducible-complex-character-is-real` · false-statement — FALSE: every value of an irreducible complex character is real
- `fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees` · false-statement — FALSE: distinct irreducible complex characters of a finite group have distinct degrees
- `fs-every-complex-class-function-with-self-inner-product-one-is-a-character` · false-statement — FALSE: every complex class function with self-inner-product $1$ is a character

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
`research/frontier-23-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-23`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
