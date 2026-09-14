# Step 7 adjudication — group **a**, run `phase-2-next-18`

You are the group Alpha for batches **5**: 2 A/B pair(s), 4 page(s), 112 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `solvable-and-nilpotent-lie-algebras` | A | differential-geometry | 497 | `lie-algebra-representations-enveloping-algebras-and-pbw`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `linear-maps-rank-nullity-and-quotient-spaces` |
| 5 | `solvable-and-nilpotent-lie-algebras-examples` | B | differential-geometry | 498 | `solvable-and-nilpotent-lie-algebras` |
| 5 | `semisimple-lie-algebras-cohomology-and-levi-theory` | A | differential-geometry | 499 | `lie-subgroups-actions-and-homogeneous-spaces`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `solvable-and-nilpotent-lie-algebras`, `chain-complexes-and-homology`, `long-exact-sequences-in-homology`, `covering-spaces-and-lifting`, `noetherian-rings-and-hilbert-basis` |
| 5 | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | B | differential-geometry | 500 | `semisimple-lie-algebras-cohomology-and-levi-theory` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `solvable-and-nilpotent-lie-algebras` — Solvable and Nilpotent Lie Algebras (42 item(s))

- `def-derived-series-and-solvable-lie-algebra` · definition — Derived series and solvable Lie algebras
- `lem-derived-series-terms-are-characteristic-ideals` · lemma — Derived-series terms are characteristic ideals
- `def-solvable-length-of-a-lie-algebra` · definition — Solvable length
- `def-lower-central-series-and-nilpotent-lie-algebra` · definition — Lower central series and nilpotent Lie algebras
- `lem-lower-central-series-terms-are-characteristic-ideals` · lemma — Lower-central-series terms are characteristic ideals
- `def-nilpotency-class-of-a-lie-algebra` · definition — Nilpotency class
- `def-upper-central-series-of-a-lie-algebra` · definition — Upper central series
- `thm-lower-and-upper-central-series-characterize-nilpotence` · theorem — Lower and upper central series characterize nilpotence
- `prop-nilpotent-lie-algebras-are-solvable` · proposition — Nilpotent Lie algebras are solvable
- `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras` · proposition — Subalgebras, quotients, and extensions of solvable Lie algebras
- `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras` · proposition — Subalgebras, quotients, and finite products of nilpotent Lie algebras
- `prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent` · proposition — A central extension of a nilpotent Lie algebra is nilpotent
- `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center` · proposition — A nonzero nilpotent Lie algebra has nonzero center
- `def-nilpotent-linear-transformation-and-nil-representation` · definition — Nilpotent transformations and nil representations
- `lem-engel-common-zero-vector` · lemma — Engel's common-zero-vector lemma
- `thm-engels-triangularization-theorem` · theorem — Engel triangularization theorem
- `thm-engels-theorem` · theorem — Engel's theorem
- `cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series` · corollary — Nilpotent adjoint action yields a central series
- `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra` · corollary — Codimension-one ideals in nilpotent Lie algebras
- `lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field` · lemma — Codimension-one ideal in a nonzero solvable Lie algebra
- `thm-lies-theorem` · theorem — Lie's theorem
- `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations` · corollary — Simultaneous triangularization of solvable representations
- `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional` · corollary — Irreducible representations of solvable complex Lie algebras are one-dimensional
- `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent` · theorem — Derived algebra of a solvable linear Lie algebra is nilpotent
- `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero` · corollary — The derived algebra of a solvable Lie algebra is nilpotent in characteristic zero
- `thm-lies-criterion-for-solvability-by-the-derived-algebra` · theorem — Solvability criterion via the derived algebra
- `def-radical-of-a-finite-dimensional-lie-algebra` · definition — Solvable radical
- `thm-sum-of-solvable-ideals-is-solvable` · theorem — The sum of solvable ideals is solvable
- `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical` · proposition — The radical is characteristic and its quotient is semisimple
- `def-nilradical-of-a-finite-dimensional-lie-algebra` · definition — Nilradical
- `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero` · theorem — Existence and characteristicity of the nilradical in characteristic zero
- `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical` · theorem — The commutator with the radical lies in the nilradical
- `cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical` · corollary — The derived algebra of the radical lies in the nilradical
- `prop-derivations-preserve-the-nilradical-in-characteristic-zero` · proposition — Derivations preserve the nilradical in characteristic zero
- `def-semisimple-lie-algebra-by-vanishing-radical` · definition — Semisimple Lie algebras
- `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center` · definition — Reductive Lie algebras
- `fs-every-solvable-lie-algebra-is-nilpotent` · false-statement — Every solvable Lie algebra is nilpotent
- `fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent` · false-statement — Nilpotent-by-nilpotent extensions are always nilpotent
- `fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem` · false-statement — A nilpotent acting basis suffices for Engel's theorem
- `fs-lies-theorem-holds-over-every-field-and-in-every-characteristic` · false-statement — Lie's theorem is field- and characteristic-free
- `fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional` · false-statement — Every irreducible real representation of a solvable Lie algebra is one-dimensional
- `fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements` · false-statement — The nilradical is the set of all ad-nilpotent elements

### `solvable-and-nilpotent-lie-algebras-examples` — Solvable and Nilpotent Lie Algebras — Examples (12 item(s))

- `ex-abelian-lie-algebras-are-nilpotent-of-class-one` · example — Abelian Lie algebras are nilpotent of class one
- `ex-the-heisenberg-lie-algebra-is-two-step-nilpotent` · example — The Heisenberg Lie algebra is two-step nilpotent
- `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra` · example — Strictly upper triangular matrices form a nilpotent Lie algebra
- `ex-upper-triangular-matrices-form-a-solvable-nonnilpotent-lie-algebra` · example — Upper triangular matrices are solvable but not nilpotent
- `ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent` · example — The two-dimensional affine Lie algebra is solvable, not nilpotent
- `ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two` · example — The plane Euclidean-motion Lie algebra is solvable
- `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra` · example — Series of a standard filiform Lie algebra
- `ex-radical-and-nilradical-of-the-affine-lie-algebra` · example — Radical and nilradical of the affine Lie algebra
- `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent` · counterexample — A nilpotent-by-nilpotent extension need not be nilpotent
- `cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra` · counterexample — A two-dimensional irreducible real representation of an abelian Lie algebra
- `cex-positive-characteristic-failure-of-lies-theorem` · counterexample — Positive-characteristic failure of Lie's theorem
- `ex-engels-theorem-on-strictly-upper-triangular-matrices` · example — Engel's theorem for strictly upper triangular matrices

### `semisimple-lie-algebras-cohomology-and-levi-theory` — Semisimple Lie Algebras Cohomology and Levi Theory (46 item(s))

- `def-simple-semisimple-and-reductive-lie-algebras` · definition — Simple, semisimple, and reductive Lie algebras
- `def-trace-form-of-a-finite-dimensional-representation` · definition — Trace form of a representation
- `def-killing-form-of-a-finite-dimensional-lie-algebra` · definition — Killing form
- `prop-trace-forms-are-symmetric-and-invariant` · proposition — Trace forms are symmetric and invariant
- `lem-orthogonal-complements-under-invariant-forms-are-ideals` · lemma — Orthogonal complements under invariant forms are ideals
- `thm-cartans-solvability-criterion` · theorem — Cartan's solvability criterion
- `thm-cartans-semisimplicity-criterion` · theorem — Cartan's semisimplicity criterion
- `cor-semisimple-lie-algebras-are-centerless-and-perfect` · corollary — Semisimple Lie algebras are centerless and perfect
- `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals` · theorem — Semisimple Lie algebras decompose into simple ideals
- `prop-ideals-and-quotients-of-semisimple-lie-algebras` · proposition — Ideals and quotients of semisimple Lie algebras
- `def-casimir-operator-relative-to-an-invariant-form` · definition — Casimir operator relative to an invariant form
- `lem-the-casimir-operator-is-basis-independent-and-intertwining` · lemma — The Casimir operator is basis-independent and intertwining
- `thm-weyls-complete-reducibility-theorem` · theorem — Weyl's complete reducibility theorem
- `thm-equivalent-characterizations-of-reductive-lie-algebras` · theorem — Equivalent characterizations of reductive Lie algebras
- `cor-the-adjoint-representation-splits-into-simple-ideals` · corollary — The adjoint representation splits into simple ideals
- `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner` · theorem — Derivations of semisimple Lie algebras are inner
- `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra` · corollary — Lie algebra of the automorphism group
- `def-chevalley-eilenberg-cochains` · definition — Chevalley–Eilenberg cochains
- `def-chevalley-eilenberg-differential` · definition — Chevalley–Eilenberg differential
- `thm-the-chevalley-eilenberg-differential-squares-to-zero` · theorem — The Chevalley–Eilenberg differential squares to zero
- `def-lie-algebra-cohomology` · definition — Lie algebra cohomology
- `prop-zero-th-lie-algebra-cohomology-is-invariants` · proposition — Zeroth Lie algebra cohomology is invariants
- `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations` · proposition — First cohomology is derivations modulo inner derivations
- `thm-second-lie-algebra-cohomology-classifies-abelian-extensions` · theorem — Second cohomology classifies abelian extensions
- `thm-first-whitehead-lemma` · theorem — First Whitehead lemma
- `thm-second-whitehead-lemma` · theorem — Second Whitehead lemma
- `thm-long-exact-sequence-in-lie-algebra-cohomology` · theorem — Long exact sequence in Lie algebra cohomology
- `def-levi-subalgebra-and-levi-decomposition` · definition — Levi subalgebras and Levi decompositions
- `thm-levi-decomposition` · theorem — Levi decomposition theorem
- `thm-malcev-conjugacy-of-levi-subalgebras` · theorem — Malcev conjugacy of Levi subalgebras
- `cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy` · corollary — Levi factors are noncanonical but conjugate
- `thm-ado-faithful-representation-with-nilpotent-nilradical-action` · theorem — Ado's theorem with nilpotent nilradical action
- `cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra` · corollary — Every finite-dimensional characteristic-zero Lie algebra is a matrix Lie algebra
- `thm-lie-second-fundamental-theorem` · theorem — Lie's second fundamental theorem
- `thm-lie-third-fundamental-theorem` · theorem — Lie's third fundamental theorem
- `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras` · theorem — Equivalence of simply connected Lie groups and real Lie algebras
- `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations` · theorem — Connected Lie groups are central quotients of simply connected integrations
- `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism` · theorem — Exponential diffeomorphism for simply connected nilpotent Lie groups
- `cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups` · corollary — Connected nilpotent Lie groups are central quotients of BCH groups
- `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups` · corollary — Lie algebras determine connected Lie groups only locally
- `fs-centerless-implies-semisimple` · false-statement — Centerless implies semisimple
- `fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra` · false-statement — The Killing form is nondegenerate on every reductive Lie algebra
- `fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible` · false-statement — Every finite-dimensional representation of a reductive Lie algebra is completely reducible
- `fs-second-cohomology-classifies-all-nonabelian-extensions` · false-statement — Second cohomology classifies all nonabelian extensions
- `fs-levi-subalgebras-are-literally-unique` · false-statement — Levi subalgebras are literally unique
- `fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups` · false-statement — Isomorphic Lie algebras determine isomorphic connected Lie groups

### `semisimple-lie-algebras-cohomology-and-levi-theory-examples` — Semisimple Lie Algebras Cohomology and Levi Theory — Examples (12 item(s))

- `ex-killing-form-of-sl-two` · example — Killing form of sl_2
- `ex-classical-simple-lie-algebras-and-their-killing-forms` · example — Classical simple Lie algebras and their Killing forms
- `ex-a-reductive-algebra-with-degenerate-killing-form` · example — A reductive algebra with degenerate Killing form
- `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra` · example — Direct-sum decomposition of a semisimple Lie algebra
- `ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization` · example — First cohomology with trivial coefficients
- `ex-an-abelian-extension-from-a-two-cocycle` · example — The Heisenberg algebra from a two-cocycle
- `ex-a-levi-decomposition-of-the-euclidean-motion-algebra` · example — A Levi decomposition of the Euclidean-motion algebra of R^3
- `ex-distinct-conjugate-levi-subalgebras` · example — Distinct conjugate Levi subalgebras
- `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` · example — SU(2) and SO(3): same local Lie theory, different groups
- `ex-the-bch-group-of-a-nilpotent-lie-algebra` · example — The BCH group of a nilpotent Lie algebra
- `cex-centerless-does-not-imply-semisimple` · counterexample — Centerless does not imply semisimple
- `cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups` · counterexample — The circle and line have the same Lie algebra but different Lie groups

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

9 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-6f5d3bfc0a51a9d60cd8f368 · `thm-cartans-solvability-criterion`** (from group a, gap-a-reader-closes) — Step 1.1 says 'Over C, [L1] gives a basis in which h_0 is upper triangular and its derived algebra is strictly upper triangular', but the cited thm-lies-theorem states only the common-eigenvector conclusion; simultaneous triangularization is a silent induction, available in this run as cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations, which is not a declared dependency. Independently, step 2.2 passes from 'every element of [h,h] is nilpotent' to '[L2] makes that derived algebra nilpotent' although [L2] (thm-engels-theorem) is stated with the ad_x hypothesis; the bridge x nilpotent on V implies ad_x = L_x - R_x nilpotent is elementary but not stated or cited.
- **s8a-b9a7e1ee292c4537a2a6d3d6 · `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent`** (from group a, gap-a-reader-closes) — Step 2.1 concludes 'Engel's theorem [L2] therefore makes it a nilpotent Lie algebra' from the fact that each element of [g,g] is a nilpotent endomorphism of V. The cited [L2] = thm-engels-theorem is the ad_x form, so the needed one-line step (x nilpotent on V implies ad_x nilpotent via L_x - R_x, the computation actually carried out inside lem-engel-common-zero-vector step 1.3) is not stated and that lemma is not declared.
- **s8a-0ac9148c3ddb305f40185816 · `thm-ado-faithful-representation-with-nilpotent-nilradical-action`** (from group a, gap-a-reader-closes) — [L4] is glossed as 'Lie's theorem simultaneously upper-triangularizes solvable actions over an algebraically closed characteristic-zero field', but the cited thm-lies-theorem as written gives only a common eigenvector; steps 2.1 and 4.1 rely on the simultaneous triangularization (available as cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations, not declared). Also, step 3.1's finiteness assertions ('the standard filtered-leading-term argument makes U left Noetherian', 'every I^j/I^{j+1} is a finite module over the finite-dimensional algebra U/I', hence E = U/I_0 is finite-dimensional) and step 3.1's 'every extended derivation maps U into J and preserves J^N' are stated without expansion, and they carry the finite-dimensionality on which the whole Zassenhaus construction rests.
- **s8a-521a3a0f13e12b7da8c2406d · `prop-derivations-preserve-the-nilradical-in-characteristic-zero`** (from group a, gap-a-reader-closes) — Step 2.2 says 'summing over s gives (c+1) sum_i t_i in I^2, and division by c+1 then gives each t_s in I^2'. From the single total relation this does not follow: one must first use the displayed relations sum_{i != s} t_i in I^2 (each obtained from D^c(u_s) = 0) to get t_s - t_{s'} in I^2 for all s,s', and then combine those congruences with the total to reach t_s in I^2. The conclusion is correct and the surrounding estimates check out, but this sub-step is omitted.
- **s8a-43f447447c30a1deca2e29ff · `cor-semisimple-lie-algebras-are-centerless-and-perfect`** (from group a, gap-a-reader-closes) — Step 2.1 uses the invariance identity K([x,y],z) = K(x,[y,z]) (and symmetry of K) to identify D-perp with Z(g): 'Its orthogonal complement consists exactly of the elements z with K([x,y],z) = K(x,[y,z]) = 0'. Neither this identity nor prop-trace-forms-are-symmetric-and-invariant, the same-page item that proves it, is among the declared deps (only thm-cartans-semisimplicity-criterion and def-killing-form-of-a-finite-dimensional-lie-algebra).
- **s8a-501792767d93db33a1048add · `thm-malcev-conjugacy-of-levi-subalgebras`** (from group a, gap-a-reader-closes) — Step 2.1 asserts 'Then [g,r] = r by step 1.1', but step 1.1 is the base case [g,r] = 0; the argument actually needed is that the nonzero ideal m inside [g,r] produced in step 1.2 must equal r under the hypothesis that r contains no nonzero proper ideal of g, whence [g,r] = r. Step 3.1 asserts without proof that once s_0 + m = s_1 + m, 's_1 is the graph over s_0 of a 1-cocycle with values in the abelian module m'; the supporting facts (s_1 lies in s_0 + m, and the projection s_1 -> s_0 is an isomorphism because s_1 ∩ m = s_0 ∩ m = 0 with equal dimensions) are not displayed.
- **s8a-c0c2450770cbc8f59e0d57fa · `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra`** (from group a, presentation) — [L1] attributes to thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals that 'its ideals are exactly sums of subcollections of those factors'. The cited item's statement gives only the decomposition into simple ideals; the ideal classification is the statement of prop-ideals-and-quotients-of-semisimple-lie-algebras, so the gloss restates the source more strongly than the source's statement allows (the factorwise argument is short but is not in the cited statement).
- **s8a-109416225a6dd01d94fb8f47 · `thm-the-chevalley-eilenberg-differential-squares-to-zero`** (from group a, presentation) — Steps 1.1-2.1 assert the sign bookkeeping rather than displaying it: 'their omission signs shifted once, and their sum is (-1)^{i+j-1}[rho(x_i),rho(x_j)]f(...)' and 'forming [x_i,x_j] first and [x_p,x_q] second has the opposite permutation sign from forming them in the other order'. I verified the claimed cancellations in degrees 0, 1, 2 against the declared zero-based convention and the disjoint-bracket pairing is the standard one, but the permutation-sign analysis for the disjoint-bracket terms and the common overall sign in the Jacobi step are left to the reader.
- **s8a-cf17701c456118499524f39d · `thm-second-whitehead-lemma`** (from group a, presentation) — Two compressions. (i) [L4] is glossed as 'Every ideal of a semisimple algebra has a complementary ideal (thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals)'; the cited theorem's statement contains only the decomposition, the complement property being stated in prop-ideals-and-quotients-of-semisimple-lie-algebras. (ii) The homotopy identity dH + Hd = C (H = sum_i rho(e_i) iota_{e^i}) is asserted with the mechanism named ('the value-action terms give sum_i rho(e_i)rho(e^i) and the argument-action terms cancel in pairs by this invariance'); I checked it in degrees 0-2 and it is correct, using the invariance of the inverse tensor, but the computation is not written out although it is the load-bearing step for the vanishing of H^2.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
