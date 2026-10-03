# Step 6 Alpha group reader — read-only digest — group **j**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **9**, **11**, **19**: 3 A/B pair(s), 6 page(s), 72 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `the-hook-length-formula-and-rsk-correspondence` | A | representation-theory | 510.051 | `young-diagrams-tableaux-and-permutation-modules`, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `the-branching-rule-and-the-young-graph` |
| 9 | `the-hook-length-formula-and-rsk-correspondence-examples` | B | representation-theory | 510.052 | `the-hook-length-formula-and-rsk-correspondence` |
| 11 | `peter-weyl-theory-for-general-compact-groups` | A | representation-theory | 510.073 | `haar-measure-existence-and-uniqueness`, `the-modular-function-and-l1-group-algebras`, `unitary-representations-positive-type-and-gns`, `complete-reducibility-for-compact-groups`, `stone-weierstrass-general`, `compact-operators-and-riesz-schauder-theory`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `character-groups-and-elementary-lca-duals`, `characters-and-the-orthogonality-relations` |
| 11 | `peter-weyl-theory-for-general-compact-groups-examples` | B | representation-theory | 510.074 | `peter-weyl-theory-for-general-compact-groups`, `inverse-systems-profinite-groups-and-completion`, `lie-groups-invariant-fields-and-the-exponential-map`, `lie-subgroups-actions-and-homogeneous-spaces` |
| 19 | `jucys-murphy-elements-and-seminormal-forms` | A | representation-theory | 807 | `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `the-branching-rule-and-the-young-graph`, `tensor-products-of-modules`, `braided-and-symmetric-monoidal-categories` |
| 19 | `jucys-murphy-elements-and-seminormal-forms-examples` | B | representation-theory | 808 | `jucys-murphy-elements-and-seminormal-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-hook-length-formula-and-rsk-correspondence` — The Hook Length Formula and Rsk Correspondence (20 item(s))

- `def-hook-arm-leg-and-hook-length` · definition — Hook, arm, leg, and hook length of a box
- `lem-standard-tableau-removal-recursion` · lemma — The removal recursion for standard tableaux
- `lem-hook-product-change-under-corner-removal` · lemma — Removing a corner changes hooks only along its hook
- `lem-hook-product-branching-identity` · lemma — The hook-product ratios sum to the size
- `thm-hook-length-formula` · theorem — The hook length formula
- `def-row-insertion-and-bumping-route` · definition — Row insertion and the bumping route
- `lem-row-bumping-route-monotonicity` · lemma — Row insertion preserves standardness and its route is monotone
- `lem-robinson-schensted-recording-tableau-is-standard` · lemma — The recording tableau of row insertion is standard
- `def-reverse-row-deletion` · definition — Reverse row deletion from a removable box
- `lem-row-insertion-and-reverse-deletion-are-inverse` · lemma — Row insertion and reverse deletion are two-sided inverses
- `thm-robinson-schensted-correspondence` · theorem — The Robinson-Schensted correspondence
- `lem-first-row-insertion-basic-subsequences` · lemma — Basic subsequences of the first row
- `def-column-insertion-for-distinct-letters` · definition — Column insertion
- `lem-row-and-column-insertion-commute` · lemma — Row and column insertion commute
- `lem-word-reversal-transposes-the-insertion-tableau` · lemma — Reversing a word transposes its insertion tableau
- `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` · theorem — Schensted's longest increasing and decreasing subsequence theorem
- `thm-rsk-correspondence-for-two-line-arrays` · theorem — The RSK correspondence for two-line arrays
- `cor-rsk-symmetry-under-inversion` · corollary — RSK interchanges the insertion and recording tableaux under inversion
- `cor-sum-of-squares-of-standard-tableau-numbers` · corollary — The sum of squares of the standard tableau numbers
- `cor-involutions-are-counted-by-standard-tableaux` · corollary — Involutions are counted by standard tableaux

### `the-hook-length-formula-and-rsk-correspondence-examples` — The Hook Length Formula and Rsk Correspondence — Examples (5 item(s))

- `ex-hook-table-for-shape-three-two-one` · example — Hook table for the shape (3,2,1)
- `ex-hook-lengths-for-row-column-and-hook-shapes` · example — Hook lengths for one-row, one-column and hook shapes
- `ex-rsk-insertion-and-reverse-deletion` · example — A complete RSK insertion and reverse deletion run
- `ex-rsk-for-involutions` · example — RSK pairs with P=Q for involutions
- `ex-empty-and-singleton-rsk-boundaries` · example — The empty and singleton RSK boundaries

### `peter-weyl-theory-for-general-compact-groups` — Peter Weyl Theory for General Compact Groups (17 item(s))

- `def-unitary-dual-of-a-compact-group` · definition — The unitary dual of a compact group
- `def-representative-function-on-a-compact-group` · definition — Representative functions on a compact group
- `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` · lemma — Direct sums and tensor products of finite-dimensional unitary representations
- `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` · lemma — Representative functions form a self-adjoint translation-invariant algebra
- `lem-compact-convolution-operators-commute-with-right-translations` · lemma — Compact convolution operators commute with right translations and have conjugate-kernel adjoints
- `lem-finite-rank-spectral-pieces-of-compact-convolution` · lemma — Finite-rank spectral pieces of a self-adjoint compact convolution operator
- `lem-compact-group-matrix-coefficients-separate-points` · lemma — Matrix coefficients of finite-dimensional representations separate points of a compact group
- `thm-uniform-peter-weyl-density` · theorem — Uniform density of representative functions (topological Peter-Weyl theorem)
- `def-normalized-irreducible-matrix-coefficient-basis` · definition — The normalized irreducible matrix coefficient family
- `thm-l2-peter-weyl-orthonormal-basis` · theorem — The normalized matrix coefficients form an orthonormal basis of L2(K)
- `def-hilbert-direct-sum-of-unitary-representations` · definition — Hilbert direct sums of unitary representations
- `lem-l1-action-of-a-unitary-representation` · lemma — The L1 action of a strongly continuous unitary representation
- `lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` · lemma — Every nonzero unitary representation of a compact group has a finite-dimensional subrepresentation
- `thm-regular-representation-peter-weyl-decomposition` · theorem — Peter-Weyl decomposition of the regular representation
- `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` · theorem — Unitary representations of compact groups are discrete Hilbert sums of irreducibles
- `cor-parseval-and-fourier-inversion-for-compact-groups` · corollary — Parseval and Fourier inversion for compact groups
- `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` · corollary — Each vector has at most countably many nonzero isotypic components

### `peter-weyl-theory-for-general-compact-groups-examples` — Peter Weyl Theory for General Compact Groups — Examples (7 item(s))

- `lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients` · lemma — Continuous finite-dimensional representations of profinite groups factor through finite quotients
- `ex-peter-weyl-for-a-profinite-group` · example — Peter-Weyl for a profinite group
- `lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct` · lemma — Continuous finite-dimensional representations of a product of finite groups factor through a finite subproduct
- `ex-peter-weyl-for-an-infinite-product-of-finite-groups` · example — Peter-Weyl for an infinite product of finite groups
- `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` · example — The circle: the Peter-Weyl basis is the integer characters
- `lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero` · lemma — An L1 function whose modulus is invariant under all translations of the line is zero
- `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` · counterexample — The regular representation of R is not a Hilbert direct sum of irreducibles

### `jucys-murphy-elements-and-seminormal-forms` — Jucys–Murphy Elements and Seminormal Forms (19 item(s))

- `def-content-vector-of-a-standard-tableau` · definition — The content of a node and the content vector of a standard tableau
- `def-gelfand-tsetlin-algebra-for-the-symmetric-group-chain` · definition — The Gelfand-Tsetlin algebra of the symmetric group chain
- `def-jucys-murphy-elements-of-the-symmetric-group-algebra` · definition — The Jucys-Murphy elements of the symmetric group algebra
- `lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group` · lemma — Every element of $S_n$ is inverted by an involution of $S_{n-1}$
- `cor-jucys-murphy-elements-commute-pairwise` · corollary — The Jucys-Murphy elements commute pairwise
- `lem-a-partition-is-determined-by-its-multiset-of-node-contents` · lemma — A partition is determined by the multiset of its node contents
- `lem-addable-nodes-of-a-partition-have-distinct-contents` · lemma — Distinct addable nodes of a partition have distinct contents
- `lem-jucys-murphy-local-relations` · lemma — Local relations between the Jucys-Murphy elements and adjacent transpositions
- `lem-relative-centralizer-for-sn-minus-one-in-sn-is-commutative` · lemma — The centralizer of $\mathbb C[S_{n-1}]$ in $\mathbb C[S_n]$ is commutative
- `thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum` · theorem — Elementary symmetric Jucys-Murphy evaluations are cycle-count class sums
- `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis` · theorem — The Gelfand-Tsetlin algebra is the diagonal algebra of the Young basis
- `lem-transposition-class-sum-acts-on-a-specht-module-by-total-content` · lemma — The transposition class sum acts on a complex Specht module by total content
- `thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors` · theorem — The joint spectrum of the Jucys-Murphy elements is the set of tableau content vectors
- `thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation` · theorem — Primitive tableau idempotents by Jucys-Murphy interpolation
- `thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element` · theorem — The relative centralizer is generated by the previous centre and the last Jucys-Murphy element
- `thm-young-seminormal-form-from-jucys-murphy-eigenlines` · theorem — Young's seminormal form from the Jucys-Murphy eigenlines
- `thm-jucys-murphy-elements-generate-the-gelfand-tsetlin-algebra` · theorem — The Jucys-Murphy elements generate the Gelfand-Tsetlin algebra
- `thm-young-orthogonal-form-from-seminormal-rescaling` · theorem — Young's orthogonal form from the seminormal rescaling
- `thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center` · theorem — Symmetric polynomials in the Jucys-Murphy elements give exactly the centre

### `jucys-murphy-elements-and-seminormal-forms-examples` — Jucys–Murphy Elements and Seminormal Forms — Examples (4 item(s))

- `ex-elementary-jucys-murphy-class-sums-through-s4` · example — Elementary Jucys-Murphy class sums through S_4
- `cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision` · counterexample — Ordinary Jucys-Murphy projection formulas do not survive content collision
- `ex-jucys-murphy-spectrum-and-projectors-for-s3` · example — The Jucys-Murphy spectrum and projectors for S_3
- `ex-seminormal-and-orthogonal-block-for-shape-two-one` · example — The seminormal and orthogonal blocks for shape (2,1)

## Your seams

Your pages depend on another group's:

- `peter-weyl-theory-for-general-compact-groups` requires `character-groups-and-elementary-lca-duals` (group b, batch 10)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
