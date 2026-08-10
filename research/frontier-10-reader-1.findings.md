# frontier-10 · independent Step-6 reader · batch 1

Role: independent reader for the four dispatched pages. I authored none of the
Step-5 material and did not judge any item.

## Outcome and coverage

I read all 59 in-scope item files in full, both A-page summaries, both empty
B-page bodies, the batch manifest, notes, coverage harvest, and all 45 proof
contracts. The mathematical pass covered all 126 numbered proof/verification
steps and all 99 fact-to-item citation edges. I opened the actual on-disk
Statement, Definition, or Example of every cited dependency, including all 36
external published dependencies and every earlier same-page dependency. No proof
step or dependency citation was skipped.

**No fatal defect was found.** I found and repaired 13 nonfatal defects or
defect clusters: nine short proof/citation gaps, one domain mismatch, two groups
of inaccurate source metadata, and one group of proof-contract excerpts that
quoted too little of their sources. All are gaps that a competent reader could
close within Alpha's 30-second rule; none changes the mathematical result.

The component-provenance pass found 42 `literature-derived`, 8 `ai-altered`, and
9 `ai-generated` Statements/Constructions. I tried to refute or independently
recomputed every one of the nine generated constructions. Their permutation
tables, products, signs, matrix products, basis changes, and square-zero
argument are correct.

No item was added or deleted. Twelve item files were changed, together with the
batch proof contract, source-coverage ledger, batch notes, and the shared touch
ledger. Alpha remains the adjudicator of every finding and repair below.

## Findings and repairs

### F1 · finite-domain mismatch in disjoint-cycle commutativity — nonfatal, repaired

`lem-disjoint-cycles-commute` quantified over an arbitrary set `X`, but its only
cited local definition defines support and cycles only for finite `X`. The
mathematical theorem is true more generally, but the cited vocabulary did not
license that domain. I narrowed the Statement and Given to finite `X`, which is
the domain used by this page and all consumers. I also synchronized the
downstream counterexample's exact contract quote.

### F2 · disjoint-cycle decomposition omitted two licensing facts — nonfatal, repaired

In `thm-disjoint-cycle-decomposition`, step 1.1 identified the orbit with the
integer powers of `sigma` without citing the theorem that identifies the cyclic
subgroup with those powers. Step 4.1 took powers factor-by-factor without citing
commutativity of disjoint cycles. I added exact Facts for
`lem-cyclic-subgroup-is-the-set-of-powers` and
`lem-disjoint-cycles-commute`, then rewrote the two steps to spend them
explicitly. Existence, uniqueness, singleton orbits, the empty set, and the
identity's empty product remain unchanged and correct.

### F3 · permutation-order proof compressed two substantive moves — nonfatal, repaired

`cor-order-of-a-permutation-from-its-cycle-lengths` used commutativity without
citing `lem-disjoint-cycles-commute`, asserted without demonstration that a
`d`-cycle has identity `k`-th power exactly when `d | k`, and invoked the order
definition only through the Given. I added exact Facts, stated the shift-by-`k`
calculation, and cited the least-positive-exponent definition. The empty cycle
list still gives order 1.

### F4 · “generate” conclusion lacked its defining citation — nonfatal, repaired

The last step of `thm-transpositions-generate-the-symmetric-group` concluded
that the transpositions generate `S_n` without citing the on-disk definition of
the generated subgroup. I added that Fact and made the smallest-subgroup
argument explicit. The empty-product cases `S_0` and `S_1` remain covered.

### F5 · alternating-group fibre count used uncited sign and sum facts — nonfatal, repaired

In `cor-alternating-group-is-normal-and-has-half-the-elements`, step 2.1 used a
specific odd transposition without a Fact licensing its sign, step 3.1 invoked
the finite disjoint-union sum rule without citing it, and step 4.1 used the
small-`n` image of sign without citing the sign theorem. I instead choose an odd
element from the theorem's surjectivity clause, wrote the inverse left
multiplication explicitly, and added exact sign and sum-rule Facts. This avoids
an unnecessary calculation and covers `n=0,1` directly.

### F6 · the decisive conjugation in the A4 example was asserted, not shown — nonfatal, repaired

`ex-a-four-has-no-subgroup-of-order-six`, step 3.1, said direct conjugation
forces all eight three-cycles but displayed neither conjugators nor results.
For `g=(a b c)` and fourth symbol `d`, I now display
`u=(a b d)`, `ugu^{-1}=(b d c)=h`, and
`hgh^{-1}=(a d b)=k`. Normality and inverses put
`g,g^{-1},h,h^{-1},k,k^{-1}` in the hypothetical subgroup; with the identity
these are seven distinct elements, already contradicting order 6. This is the
explicit route in Judson Proposition 6.9, adapted to the page's zero-based
symbols.

### F7 · the A4 proof cited the wrong Judson location — nonfatal, repaired

The same item cited “§5.1, Example 8.” Example 8 lists the elements of `A_4` and
mentions the conclusion, but the proof is Proposition 6.9 in §6.2. I corrected
the item reference, separated the two locations in the coverage harvest, and
corrected the provenance rationale in the batch notes.

### F8 · a bijective linear representation map was called an isomorphism too early — nonfatal, repaired

`thm-matrix-representation-is-a-vector-space-isomorphism` proved that `Phi` is
linear, injective, and surjective, but the local definition of linear
isomorphism requires a two-sided **linear** inverse. I added the unique-coordinate
and isomorphism Facts and proved the inverse linear by pulling addition and
scalar multiplication back through the bijection. The arbitrary-column
construction and both zero-dimensional cases remain explicit.

### F9 · the invertible-matrix correspondence omitted linearity and squareness — nonfatal, repaired

`thm-invertible-matrices-correspond-to-linear-isomorphisms` had three short
licensing gaps. Step 1.1 used `L_A` and `L_B` as linear maps without proving
linearity; step 2.1 represented the inverse map without citing matrix
representation; and the general `V -> W` claim called the rectangular
representation matrix invertible without first showing the two bases have the
same length. I added the matrix laws, representation isomorphism, and dimension
Facts; proved `L_A` linear; and observed that an isomorphism sends the domain
basis to a codomain basis, forcing equal dimensions. The proof explicitly
includes `n=0`.

### F10 · the two-sided basis-change proof described the factors in reverse order — nonfatal, repaired

The Statement and formula in `thm-two-sided-change-of-basis-formula` were
correct, but step 2.1 listed the first-applied, middle, and last-applied maps and
then called that list “the multiplication order.” I replaced the ambiguous
sentence with the actual displayed product, noting that the matrix of the
last-applied map is on the left. All three shapes still type-check, including
zero dimensions.

### F11 · the converse similarity construction skipped three licences — nonfatal, repaired

In `thm-similarity-is-an-equivalence-relation-and-models-basis-change`, the
converse used `T=L_A` without proving it linear, called the standard coordinate
columns and the columns of `P` bases without tying the independence/spanning
checks to the basis definition, and did not state why `[L_A]_E^E=A`. I added
matrix-law and basis Facts and made all three points explicit. I also corrected
the proof-contract quote for matrix units so it now quotes their definition,
not merely the preceding Kronecker-delta definition. The `n=0` case remains
valid.

### F12 · four proof-contract excerpts did not contain the clause their Facts used — nonfatal, repaired

The item Facts were accurate after reading their targets, but the supposedly
exact excerpts were too short in:

- `lem-matrix-unit-multiplication` and
  `cor-dimensions-of-matrix-and-linear-map-spaces`: the excerpts stopped at the
  Kronecker delta instead of the matrix-unit entries;
- `cor-dimensions-of-matrix-and-linear-map-spaces` and
  `cor-endomorphism-ring-is-a-matrix-ring`: the excerpts displayed the
  representation map but omitted the sentence saying it is an isomorphism.

I expanded each quote to the exact load-bearing source clause. The item proofs
did not need mathematical changes.

### F13 · three Axler references mislabelled numbered results — nonfatal, repaired

The source titles for `def-change-of-basis-matrix` and
`thm-change-of-basis-matrices-are-inverses` called Axler 3.82 a Definition, and
the similarity theorem called 3.84 a Definition in §3C. In the cited fourth
edition, 3.82 and 3.84 are results in §3D. I corrected those references and
described 3.81/3.84 as results in the two-sided formula's reference. No
mathematical text changed for this finding.

## Per-item reading record

### `symmetric-groups-and-the-sign-homomorphism` (13/13)

- `def-permutation-support-disjoint-cycles-and-cycle-type` — Read all definitions and boundary conventions; finite-domain support, omitted one-cycles, empty product, and cycle-type counts are coherent. Clean.
- `lem-disjoint-cycles-commute` — Pointwise three-case proof is correct. F1 repaired.
- `thm-disjoint-cycle-decomposition` — Checked orbit construction, least return time, product action on each orbit, uniqueness, empty set, and identity. F2 repaired.
- `cor-order-of-a-permutation-from-its-cycle-lengths` — Checked divisibility in both directions and the empty-list value. F3 repaired.
- `thm-transpositions-generate-the-symmetric-group` — Verified the displayed factorisation with the rightmost factor acting first and the `n=0,1` cases. F4 repaired.
- `def-inversions-inversion-number-and-sign` — Checked inversion indexing and the empty/singleton signs. Clean.
- `lem-a-transposition-reverses-inversion-sign` — Verified the adjacent-swap argument, the odd-length adjacent factorisation of `(a b)`, and the passage from position swaps to composition. Clean.
- `thm-parity-of-transposition-factorisations-is-well-defined` — Checked the repeated sign flips, existence of a factorisation, and the empty identity factorisation. Clean.
- `thm-sign-is-a-homomorphism` — Checked concatenation order, multiplicativity, surjectivity for `n>=2`, and the trivial `S_0,S_1` images. Clean.
- `cor-sign-from-disjoint-cycle-structure` — Checked the `k-1` factor count and `sum(k_i-1)=n-c(sigma)` including fixed points. Clean.
- `def-alternating-group` — Checked that the definition is exactly the sign kernel. Clean.
- `cor-alternating-group-is-normal-and-has-half-the-elements` — Kernel normality and finite fibre count are correct. F5 repaired.
- `cor-sign-is-the-unique-nontrivial-homomorphism-to-signs` — Checked explicit conjugacy of transpositions, abelian target conjugacy invariance, generation, and both possible images. Clean.

### `symmetric-groups-and-the-sign-homomorphism-examples` (7/7)

- `ex-one-line-composition-and-disjoint-cycle-decomposition` — Independently recomputed the image table and recovered cycles. Generated construction accepted; no counterexample.
- `cex-overlapping-cycles-need-not-commute` — Recomputed both products at `0`; they differ. Generated counterexample accepted. Its contract quote was synchronized with F1.
- `ex-s-three-cycle-inversion-and-sign-table` — Recomputed all six one-line permutations, inversion counts, signs, and `A_3` membership. Clean.
- `ex-two-transposition-factorisations-have-the-same-parity` — Multiplied both factorisations and checked their parity against the inversion count. Generated construction accepted.
- `ex-signs-of-five-and-six-cycles` — Checked the four- and five-transposition expansions and signs. Generated construction accepted.
- `ex-elements-of-the-alternating-group-a-four` — Checked the cycle-type enumeration and count `1+8+3=12`. Clean.
- `ex-a-four-has-no-subgroup-of-order-six` — Counting premise and contradiction are true. F6 and F7 repaired.

### `matrices-and-the-matrix-of-a-linear-map` (32/32)

- `def-matrix-product-and-identity-matrix` — Checked shapes, row-by-column indices, identities, and all empty sums. Clean.
- `thm-matrix-multiplication-laws` — Checked the arbitrary-field double-sum interchange, distributive/scalar laws, identities, and zero intermediate dimension. Clean.
- `cor-square-matrices-form-a-ring` — Checked all ring axioms inherited from the prior results and the allowed zero ring `M_0(F)`. Clean.
- `def-matrix-units` — Checked delta indices and zero-sized no-index convention. Clean.
- `lem-matrix-unit-multiplication` — Entry computation is correct for rectangular shapes. Mathematical text clean; exact contract excerpt repaired under F12.
- `cor-matrix-rings-are-noncommutative-in-dimension-at-least-two` — Checked `E_01 E_10=E_00` and the reversed product. Clean.
- `def-transpose-of-a-matrix` — Checked shape reversal and entry convention. Clean.
- `prop-transpose-laws` — Checked linearity, involution, reversed product, scalar commutativity, and zero shapes. Clean.
- `def-vector-space-of-linear-maps` — Pointwise operations and common-field domain are correctly stated. Clean.
- `prop-linear-maps-form-a-vector-space` — Checked closure, pointwise axioms, empty domain, and zero codomain. Clean.
- `def-linear-isomorphism-and-invertible-linear-map` — Two-sided linear inverse and uniqueness are correctly defined. Clean.
- `lem-composition-and-identity-linear-maps` — Direct linearity calculations are complete. Clean.
- `def-coordinate-column-and-matrix-of-a-linear-map` — Checked ordered-basis coordinates, column convention, shapes, and zero bases. Clean.
- `thm-coordinate-action-of-a-linear-map` — Checked the finite double expansion and row-by-column identification. Clean.
- `thm-matrix-representation-is-a-vector-space-isomorphism` — Arbitrary-column surjectivity and zero dimensions are correct. F8 repaired.
- `cor-dimensions-of-matrix-and-linear-map-spaces` — Checked the matrix-unit basis, `mn` count, transported basis, and zero dimensions. Mathematical text clean; excerpts repaired under F12.
- `thm-matrix-of-a-composite-is-the-product` — Checked basis compatibility, multiplication order, and shapes. Clean.
- `cor-endomorphism-ring-is-a-matrix-ring` — Checked ring operations, unit, product preservation, and bijectivity. Mathematical text clean; excerpt repaired under F12.
- `def-invertible-matrix-and-general-linear-group` — Checked two-sided inverse and `GL_0(F)`. Clean.
- `thm-invertible-matrices-correspond-to-linear-isomorphisms` — Both implications and inverse-matrix formula are true. F9 repaired.
- `cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension` — Checked basis transport and construction in both directions, including dimension zero. Clean.
- `cor-general-linear-group-is-a-group` — Checked identification with ring units and the trivial zero-dimensional group. Clean.
- `def-change-of-basis-matrix` — Coordinate direction is correct. Source label repaired under F13.
- `thm-change-of-basis-matrices-are-inverses` — Checked both coordinate conversion and both inverse equations, including empty bases. Source label repaired under F13.
- `thm-two-sided-change-of-basis-formula` — Checked direction and all rectangular shapes. F10 and F13 repaired.
- `def-similar-matrices` — Conjugation convention is coherent. Mathematical definition clean; its sole MIT source was not externally retrievable in this session.
- `thm-similarity-is-an-equivalence-relation-and-models-basis-change` — Checked all equivalence-relation laws and both directions of the operator characterisation. F11 and F13 repaired.
- `def-trace-of-a-square-matrix` — Checked the diagonal sum and empty trace. Clean.
- `prop-trace-is-linear` — Checked entrywise finite-sum calculation and `M_0(F)`. Clean.
- `thm-trace-of-ab-equals-trace-of-ba` — Checked the rectangular double sums, scalar commutativity, and both zero dimensions. Clean.
- `cor-trace-is-invariant-under-similarity` — Checked the rectangular cyclic trace application and reassociation. Clean.
- `def-trace-of-an-endomorphism` — Checked basis independence through similarity, including dimension zero. Clean.

### `matrices-and-the-matrix-of-a-linear-map-examples` (7/7)

- `ex-matrix-of-a-map-between-coordinate-spaces` — Recomputed the two image columns and the general matrix-vector product. Clean.
- `ex-one-operator-in-two-ordered-bases` — Recomputed both operator matrices, both transition matrices, and the conjugation identity. Clean.
- `ex-quarter-turn-matrix-on-the-real-plane` — Recomputed the columns and square `-I_2`. Generated construction accepted.
- `ex-two-by-two-matrix-multiplication-is-not-commutative` — Recomputed both matrix-unit products. Generated construction accepted.
- `ex-nonzero-square-zero-matrix-is-not-similar-to-a-diagonal-matrix` — Checked `N^2=0`, conjugation of squares, and the field step `d_i^2=0 => d_i=0`; the argument would indeed need alteration over a ring with nilpotents. Generated construction accepted.
- `ex-two-sided-basis-change-for-a-rectangular-linear-map` — Independently multiplied the displayed transition and map matrices and recomputed the new-basis image columns. Generated construction accepted.
- `ex-rectangular-products-have-equal-traces` — Independently recomputed both differently sized products and both traces. Generated construction accepted.

## Source and harvest check

I checked the recorded mathematical locations in Judson, Milne, the Stanford
permutation supplement, Axler, and Leonard's Kentucky notes. In particular,
Judson Proposition 6.9 supplies the explicit seven-element `A_4` contradiction,
Milne Proposition 4.26 supplies disjoint-cycle uniqueness, Stanford supplies the
parity flip, Axler 3.81–3.86 supplies composition/change-of-basis/inverse
formulas, Axler 8.49–8.51 supplies trace cyclicity and basis independence, and
Leonard §3.4 supplies the matrix-unit formula.

The MIT Day 9 PDF at the recorded URL could not be retrieved by the available
browser in this session, and search did not expose its text. I therefore could
not independently confirm its internal numbering (including Definition 38 and
Proposition 26). Nothing mathematical was left unchecked because the relevant
claims were verified from disk and, where source comparison mattered, against
Axler or direct calculation. Alpha may wish to re-fetch the MIT PDF solely for
bibliographic confirmation.

The two A summaries satisfy the two-paragraph, under-150-words-per-paragraph
contract and make no false mathematical or corpus-wide claim. Both B pages have
no authored body. The 94-row canonical harvest has a disposition for every
recorded heading after the Judson correction above.

## Validation and handoff

- `reflow.mts`: run on every changed proof item; one display in the two-sided formula was mechanically reflowed.
- `precheck.mts`: 10 changed proof-bearing items, 10 passed, 0 failed.
- `proof-contract.mjs --strict`: 45/45 proof-bearing items, 0 errors, 0 warnings.
- `content-policy.mjs`: 59/59 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 94/94 harvested results, 0 errors, 0 warnings.
- `rendercheck.mjs` and `prosecheck.mjs`: all 59 items plus four pages, 0 errors and 0 warnings.
- `citecheck.mjs`: all 59 items clean.
- Repository-wide `depcheck.mjs`, `fwdcheck.mjs`, and `extcheck.mjs`: 0 hard errors. Their legacy/global warnings do not name a batch-1 item.
- `touchlog.mjs`: the final current-state snapshot is `after-step6-reader-1-final`. An earlier interim snapshot means the `--min 2` report names three batch-1 items: `ex-a-four-has-no-subgroup-of-order-six` (later source correction), `thm-similarity-is-an-equivalence-relation-and-models-basis-change` (later source correction), and `thm-two-sided-change-of-basis-formula` (reflow plus source correction). The aggregate impact comparison also sees concurrent edits from other batches; Alpha owns the hash-bound impact dispositions.

There are no unresolved mathematical concerns and no unexamined item or proof
step. The sole incomplete external check is retrieval of the MIT source noted
above.
