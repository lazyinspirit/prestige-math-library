# Published Green-foundation audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the exact published dependency path used by the
active Green-correspondence batch:

- `thm-green-vertex-source-existence-and-conjugacy`;
- `thm-higman-criterion-for-relative-projectivity`;
- `thm-krull-schmidt-for-finite-dimensional-kg-modules`; and
- `thm-composition-series-iff-noetherian-and-artinian`, only in the clause
  cited by the Krull--Schmidt page.

Before classification, the complete canonical ledger was searched by all four
exact IDs, the phrases `relative trace`, `double coset`, `Mackey trace`,
`finite-dimensional`, `composition series`, `dependent choice`, and the exact
supplier IDs. Neither Green existence/conjugacy nor Higman's criterion had a
classification row. Krull--Schmidt had one U-P row for this same inherited-DC
mechanism; this audit moves and extends that row rather than adding a second
one. The older batch-11 note and impact-table mention are evidence locators,
not additional classifications. None of the four items has an alias relevant
to this finding.

This is an exact target and used-clause audit. It does not certify unused
clauses or the full transitive module-theory closure.

## Confirmed Krull--Schmidt proof-interface gap

Published target:
`items/thm-krull-schmidt-for-finite-dimensional-kg-modules.md`

SHA-256:
`03de45880421bc12b83827c62de9c0503105323aaf190bc65b8d199456878d81`

Exact supplier:
`thm-composition-series-iff-noetherian-and-artinian`, SHA-256
`9231201f3991db3cc9f3df285609a138033a74956c5b65b00ca3f13d4dab2321`
(published).

The target's Fact L1 says that finite-dimensional modules have finite length
and cites the supplier above. Proof 1.1 then starts induction on composition
length, and proof 2.1 uses finite length to stabilize kernels and images. The
cited theorem does not prove the finite-dimensional premise. Its converse says
that Noetherian and Artinian modules have composition series **assuming
dependent choice**, and its proof explicitly spends DC when selecting maximal
proper submodules successively. The Krull--Schmidt item neither assumes DC nor
derives the needed finite length directly from finite dimension.

The theorem is true without that inherited choice cost, but the printed proof
has an unresolved premise. Repair it by induction on the supplied finite vector
space dimension. Every nontrivial direct-sum decomposition has two nonzero
summands of smaller dimension. Ascending kernel chains and descending image
chains stabilize after at most `dim X` strict changes, giving the displayed
Fitting decomposition directly. For uniqueness, if one composite
`X_1 -> Y_j -> X_1` is a unit, it splits `X_1` off `Y_j`; indecomposability of
`Y_j` makes the complementary kernel zero, hence the map is an isomorphism and
the summand can be cancelled. These are finite arguments and require no new
published supplier or Phase-2 pair.

Classification: move the existing single row from U-P to A-P. This is a proof
gap, not a false theorem. Active Green drafts explicitly assume AC, so their
black-box use can satisfy the published proof's stronger inherited contract;
the published page nevertheless remains unrepaired.

## Bounded clear: Higman's criterion

Published target:
`items/thm-higman-criterion-for-relative-projectivity.md`

SHA-256:
`fd01ef92aa88dca5a26c1e7ae4cd19418f96894841b8bb9249c587a546324a91`

The proof identifies relative projectivity with splitting the induction--
restriction counit. From a splitting it evaluates at the identity to obtain an
`H`-endomorphism and recovers the relative trace; conversely the displayed
formula `s(m)(g)=alpha(g^{-1}m)` is balanced, equivariant and splits the
counit. The transversal is finite. The exact clause used by the Green theorem
is sound, and no arbitrary family of witnesses is selected. Classification:
new bounded no-repair-needed disposition.

## Bounded clear: Green existence and conjugacy

Published target:
`items/thm-green-vertex-source-existence-and-conjugacy.md`

SHA-256:
`23aba83bcc8785f5bb567a8be02005d4387d95435bc8e908c3d6924155d8138a`

Proof 1.2 compresses the finite double-coset trace calculation, but it contains
the data needed for the inference. Expanding
`Tr_Q^G(alpha) Tr_R^G(beta)` gives a finite sum indexed by pairs of left
cosets. Diagonal left translation partitions those pairs into orbits indexed
by `Q\G/R`. For the representative `(Q,xR)`, the stabilizer is
`D_x=Q cap xRx^{-1}`, and the representative composite
`alpha (x beta x^{-1})` commutes with `D_x`. Its orbit sum is therefore
`Tr_{D_x}^G(gamma_x)`. This proves the displayed regrouping without a new
choice principle or undeclared mathematical theorem.

The remaining used steps are coherent: finite subgroup minimality gives a
vertex; finite Krull--Schmidt extraction gives a source; locality makes one
summand of an identity invertible; minimality then conjugates vertices; and
the finite induced-module double-coset decomposition plus indecomposability
gives normalizer-conjugacy of sources. The theorem inherits the separate open
Krull--Schmidt proof issue above. Active consumers assume AC, so that inherited
contract is locally available; there is no distinct Green-trace defect or live
authoring blocker from this page. Classification: new bounded
no-repair-needed disposition for the target's own argument, with the upstream
Krull--Schmidt repair retained separately.

## Limits

The external Webb and MacQuarrie references were not newly fetched or read in
this pass. No source receipt, independent judgment or exhaustive audit is
claimed. The draft
`lem-relative-projectivity-mackey-intersections-for-finite-modules` is not a
published repair and does not enter the canonical published-item index.
