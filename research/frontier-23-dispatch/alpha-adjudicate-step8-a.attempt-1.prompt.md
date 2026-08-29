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
role: alpha-adjudicate
label: step8-a
covers: 1, 3, 4

# Step 8 — group **a**, run `frontier-23`

You are the group Alpha for batches **1**, **3**, **4**: 4 A/B pair(s), 8 page(s), 136 item(s), 71 open rejection(s) over 71 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-enumerating-relator-consequences-does-not-decide-nontriviality` | `decision-problems-for-finitely-presented-groups-examples` | gpt-5.6-terra | `b9d9e338e9197a43a13178e025953b57c85aab13b89fe0d89e377b2d8f1e011d` |
| `cex-the-underlying-quotient-graph-does-not-determine-the-group` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `3117d94a8f633df9e4ffd692171d08d395eec5fd197485ca96d546f0dce3b84b` |
| `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `ad6557797623acbf60a11d329b7f3d1e649f8553947fc7de68e8bfe4876d07a7` |
| `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `994bf6a83ad056028f07abe6a202f502363d619bd932ce9efccaae1c4d924fd2` |
| `cor-contraction-of-maximal-ideals-integral-extension` | `integral-extensions-and-going-up` | gpt-5.6-terra | `b3bc9cfff7e59e2acdedfc2bab949cac56d44288615e41a9e765f11101f2f1b8` |
| `cor-dimension-preserved-by-integral-extensions` | `integral-extensions-and-going-up` | gpt-5.6-terra | `9150e78cf4f82cf7406217be2364e31d6f4236038a2e2684da08dabed7d005de` |
| `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `9ca0e01f40817ff2584b346b97fd91072ab58e85d50abcb1cb67c4f61be69558` |
| `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `6b32df3e2cde7910d823a6ead32777443fc04d0fc96b381b17849a19ae923387` |
| `cor-the-character-table-is-square-and-invertible` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `6e19a5b28fca7bb1d45aa6affce9f084a5b07cad1b6f6b687d7a9990808c21f7` |
| `cor-the-regular-character-gives-the-sum-of-squares-formula` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `0b06e332d6c09b10996b459d1e13156f9f80dc1be9be19cf1b7f3b0c8323ee60` |
| `cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `2e224e20b7ca98848cf937362dd568b40db4ffb7b9cab5ce94a6a00bbd077e47` |
| `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `8676c973a1f03c5f926fe59e14dc2059c11804f9e1bc467544d0d7e2a13cd655` |
| `def-bass-serre-tree-of-a-graph-of-groups` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `3d223bddb30da6ff051df8fe3bcd49f7b1e0f3f917e0be23fbf82c62b6042a25` |
| `def-character-of-a-complex-representation` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `68d94aacd151087b4577b14a6eedf38951df3ab419deb943a3540e8c941fa8c5` |
| `def-character-table-of-a-finite-group` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `dbab7c61e8657f86e010cff05916ec6f58ddd9fd146a8a06e76b38158b0c2cef` |
| `def-dual-complex-representation` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `7d23647caf9299aebc9e20e7409472717a74be921736b6bfb6ee7f223cc4b2a4` |
| `def-g-fixed-subspace-of-a-representation` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `3fcd94e975d0e26a65860f89058fb945918e4c87eb8492d16f0ec0c28ddfa542` |
| `def-irreducible-complex-character` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `8e7563b174c0f47c491a3d814d1aaa6f0edb4c143a1c3a7f1a92ea362256554b` |
| `def-quotient-graph-of-groups-from-a-tree-action` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `a5bc910bd10c011df7842ecbaccbf797d4989b24690a809fca5f56e98ec0255a` |
| `def-reduced-graph-of-groups-word` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `490671ed55017545ea0924dc1d8d2d65290ff18552c082cc950408d538057e66` |
| `def-tensor-product-of-complex-representations` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `5ae67355db811ab46029a4f54dbbe8597e7a77a7340603baa58fc47a941769bb` |
| `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `bdf4f300a01d55b83a5742ea6ad7a1d04615b1a1f369c0ed4485067137620a76` |
| `ex-a-free-action-and-the-quotient-graph-basis` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `8e2eaa837678d43c589982d64771febdb0d71461678a92072f749cadee662558` |
| `ex-an-algebraic-relator-area-computation` | `decision-problems-for-finitely-presented-groups-examples` | gpt-5.6-terra | `3192c33f1fc0e3dd754c5c6b62292db6d43cd7867d51a02419d0c1b9c5324a50` |
| `ex-bass-serre-tree-of-a-baumslag-solitar-group` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `ecb026e0e7886415142f5c8812e7a231f36877f7b846a63996c71077d28bdca0` |
| `ex-bass-serre-tree-of-a-free-product` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `2e26045112369f8c57e096a33d9452982eb4a72aebf38ad79e11d2fa17f11a44` |
| `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `948d993e4c7485472fdadcbf10736a23554b50500225d99f70019d2d4005cdd9` |
| `ex-going-down-needs-normality` | `integral-extensions-and-going-up-examples` | gpt-5.6-terra | `4d2a737d356d9516782f27c48eaa9879fb131294ece98b5991aacafcd8481318` |
| `ex-graph-of-finite-groups-giving-a-virtually-free-group` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `377d3466df6f533c62f1f77c7a6bf139ed50e24ef8b332bbe63bc33d34f5d948` |
| `ex-incomparability-in-a-quadratic-integral-extension` | `integral-extensions-and-going-up-examples` | gpt-5.6-terra | `3e71eade41890245182979cec925b4a29b3757c7b2d216f13e162f3adf37dac6` |
| `ex-kurosh-decomposition-of-a-subgroup` | `graphs-of-groups-and-bass-serre-theory-examples` | gpt-5.6-terra | `99e898cc041f69dbf48ad7c1f1b9a554c4dcfd53df8c062b1aca5f70d6fcd339` |
| `ex-lying-over-by-quotient-and-localisation` | `integral-extensions-and-going-up-examples` | gpt-5.6-terra | `abb556289ddad827f3be869926981b434dd95900806419da067e8dd34fccdf46` |
| `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `be7c35e77e28bdad964bcb59c44676171df71b6fa4f303ff3456c70fe5b1e583` |
| `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `6400b06c19083c24696cbd3fec1554faa5dd4c590eccbacaa59e9f5d68c5729d` |
| `ex-the-character-table-of-a-four` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `a84acbf4a18e591d10f91a84ac5d82e0a1555dd7f505ffdfc0491be7fb13cca1` |
| `ex-the-character-table-of-s-four-and-its-normal-subgroups` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `ce48112f35921cb44f3135bc41b4624c6b01418a571d8d07188a7333a61be7c2` |
| `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `0d147c723c36fbffd01220525e690707c74c69214274d2a72caf880738fc16eb` |
| `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` | `decision-problems-for-finitely-presented-groups-examples` | gpt-5.6-terra | `73f1bd7abafe1dfa291c2540c5c806a03adb75b12cd143c0324b2f91789d6f6f` |
| `fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `afa6b8f879fe7f73759ed48861873d6dd46bad0c5c52c25763dd1a8f311a37a7` |
| `fs-kurosh-says-every-subgroup-of-a-free-product-is-free` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `26fefb16448d913ef541ddf7410c65cbd3f399f8d49e8e7eedb38664eb0240b8` |
| `fs-nonisomorphic-finite-groups-can-have-the-same-character-table` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `584ead264850eeb73526b944f2bda67571ac6592009f7c694b5ac5b1efb59da8` |
| `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `b374b21b2d804721d7ff4635bf92d243115a5a180da5129570f80ac74b2768fe` |
| `fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `3950157c51d922045bf5adca78245ee582542e70659d1071a9cc8bf19aac722b` |
| `fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `f7e700e8745256e6237d71da8461b0c9c4bb9b3d21542a63883986d13175cb85` |
| `fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `1119b0a7ad3c580b395c4c10686b84e80ae8d3acc5ce1a9987627f028358ad6a` |
| `lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `76d8c213914d52b48573e8bf8fdcc09fa5dc25a9a068f09fb70e12d37422c892` |
| `lem-minimal-algebraic-relator-area-exists` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `7827d0dd5e36eac41224988331def7ca7104c4ec1364832e225c7eca41186345` |
| `lem-the-bass-serre-coset-graph-is-a-tree` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `70c5121a24c5a55dcf5042e1e725e48cd2fa7e8785926e77da9bc23192560e1e` |
| `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `5d1b556554feb8c064ae5f7ac8b06efc8aaf7f6288385274d7ada6da4eb06510` |
| `prop-basic-value-properties-of-a-complex-character` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `a9ed68786e09ed4f7598fb8cf4dd319ca772dc02870b69a564b5618bb6d08974` |
| `prop-recursive-dehn-function-implies-solvable-word-problem` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `dc2798fd35196084b1983dc3ddc0baf94cde17f02bbf66ab2259838fa509203c` |
| `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `735b0b3e94c11d98a0da3d8e6e17756dbc18aa6e4a6ff15e30160e9804ff516d` |
| `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `d884bb72406218f00f977f7821529830a66849e39fddd001362bb24df106c06d` |
| `rem-standing-hypotheses-for-ordinary-character-theory` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `7503ada926955ad1c56290b24730f8470230183473e5c67cef738b58939439a2` |
| `thm-bass-serre-structure-theorem` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `2c69ddb2865753160c1947eeb6116efcd56af85cc83414f462ccb407f5560b77` |
| `thm-character-inner-product-computes-intertwiner-dimension` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `5d0826624ac35882744da1b99c19390df365dd062edb6621a1252230990ab9b4` |
| `thm-going-down-over-normal-domains` | `integral-extensions-and-going-up` | gpt-5.6-terra | `af1d97b4a60da1903191c6dab26b2d1c8d3745ceb9517cda67082fd666d1db80` |
| `thm-grushko-decomposition-and-rank-additivity` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `18e6a54c1ddeb9ead946e128af41ade14e015311093411b2009de1aedb569132` |
| `thm-incomparability-for-integral-extensions` | `integral-extensions-and-going-up` | gpt-5.6-terra | `59f1c4e85c69b6ebad520949348d7585986feb4b42b212ffa1cb6995eb157743` |
| `thm-integral-closure-is-integrally-closed` | `integral-extensions-and-going-up` | gpt-5.6-terra | `05ed52544e39e06d1692ceea8b064d946f9b603e2c5930b2638bba58d138f01c` |
| `thm-integrality-commutes-with-localisation` | `integral-extensions-and-going-up` | gpt-5.6-terra | `4472e265e16315ae5f49f7c5d654ad077861fdd5211ab0301eb8278358b1f7d7` |
| `thm-kurosh-subgroup-theorem` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `42a189da723a4a54c313904f7e6c1dfd53a0e56e0083b681abc06e6eab452798` |
| `thm-lying-over` | `integral-extensions-and-going-up` | gpt-5.6-terra | `3061cba197a4b7e10c2c8bba15a26cad750d8eb74b00d9d06ed88deb6e52f869` |
| `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `80cee42fba7cc9ba6f30784264f8026d63a4b93d5b32fcd698aadb4db43665a5` |
| `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `ef817024a95f4c6645d5107c28f6a0d0e5af851654c14f7fbb8dcc8ec59ae164` |
| `thm-normality-is-local-for-domains` | `integral-extensions-and-going-up` | gpt-5.6-terra | `ec128e23df333bced5bb8ec3675d570750cdbbfcab8a1407f938d2f6fe6e55de` |
| `thm-one-loop-graph-of-groups-is-an-hnn-extension` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `fc745d825ff2bd00a72f9b44dd38c462c73ae940b99da6517a28f05034c2d6ed` |
| `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `93764f76c586628002c5e3680cbcee056a432efe1e80e7d6ff16778a5f2fea6c` |
| `thm-second-column-orthogonality-relation-for-irreducible-complex-characters` | `characters-and-the-orthogonality-relations` | gpt-5.6-terra | `af02e2d57a19c7f929e5a71a1e69f7441fd8ea5bac4743c39f56a3ab7bdb0a49` |
| `thm-transitivity-of-integrality` | `integral-extensions-and-going-up` | gpt-5.6-terra | `5304f5898d6cca223b537614551a5accbdd0b98c6b4df695163e5c61affe9e7a` |
| `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `ea24a8d652b2be23576e6465275d9fbb44af3fddee94f188f0766e4dd264338a` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-23`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-23-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-23-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-23-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-23-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
