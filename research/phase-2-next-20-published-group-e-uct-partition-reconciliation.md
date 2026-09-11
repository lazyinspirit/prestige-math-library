# Group-e published UCT and partition reconciliation

Date: 2026-09-11

## Scope and deduplication

This audit reconciles the published concerns in
`research/phase-2-next-20-step3b-e.md`. The complete canonical ledger was
searched before disposition by every exact target ID, aliases, the mechanisms
`UCT extension`, `cycle projection`, `Ext representative`, `balanced Ext`,
`partition of unity`, `countable shrinking`, `CW compactness`, and every exact
supplier ID named below.

Four UCT targets each had exactly one U-C classification row for the same
mechanism. They move to A-P after complete target and exact used-supplier
review; no new ID or duplicate record is added. The compact-CW lemma and three
boundaryless partition targets already each have one A-P row with the exact
current mechanisms, so their reconfirmation changes no classification.

The published spectral-sequences page's draft-item composition is workflow
status evidence. Draft IDs do not enter this published mathematical-item index
and no proof defect is inferred from page composition alone.

## UCT target hashes

| Published ID | SHA-256 |
|---|---|
| `lem-the-cohomology-universal-coefficient-extension-map` | `0124bd984182d61142a248959f1bbfefc09e4f93c00b28fb824a61809ace7363` |
| `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` | `d8b37c03b1463df9cb128b3fccce2ff8ce8175a3e0f49924978d76efdf2b9615` |
| `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` | `a7e1e2949f6696de33aef768c35795cee49b8b01c2b5e1dba0cf182304bd414e` |
| `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` | `3f5e1f538e26c3270222e93de1091057eb8dbc3992f930fc39ba8dddb23dda0e` |

## Extension-map defects and repair

The extension-map lemma is stated without a choice hypothesis. Its declared
`lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` supplier
explicitly assumes AC, while its declared `def-balanced-ext-bifunctor`
explicitly assumes DC and supplied projective/injective resolution systems.
Neither contract is exposed by the target.

Proof 2.1 also does not establish its map. For
`psi:B_{n-1}C -> G`, the cochain is the pullback `psi d_n`. If the Ext
representative changes to `psi+g|B`, choose a cycle projection
`pi_{n-1}:C_{n-1}->Z_{n-1}C`; then

`(psi+g|B)d_n-psi d_n = delta(g pi_{n-1})`.

Conversely, if `psi d_n=delta(phi)=phi d_n`, surjectivity of the corestricted
`d_n` gives `psi=phi|B`; restricting `phi` to `Z_{n-1}` proves that the Ext
class is zero. The printed two-sentence proof gives neither argument and does
not check the naturality asserted by the Statement.

Repair under explicit AC using published
`lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces` for the cycle
projections, `thm-free-modules-are-projective-with-choice-boundary`, and
`def-ext-via-a-projective-resolution-of-the-first-variable` for the displayed
length-one resolution. If balanced Ext is retained, state its exact supplied
resolution/DC interface and prove independence/naturality through its published
comparison maps. The current draft singular-UCT extension lemma demonstrates a
local version but is not a published backward supplier.

Classification: U-C to A-P.

## General UCT and splitting theorem

The general UCT Statement explicitly assumes AC. Under the canonical
adequate-implicit-use rule, omission of a direct `def-axiom-of-choice` edge is
optional declaration cleanup rather than a separate defect: the hypothesis is
already present and implies the supplier's DC requirement.

The theorem nevertheless uses the extension-map lemma's exact affected clause
to identify the left injection and kernel. Proof 2.1 also compresses the needed
kernel calculation: a zero-evaluation cocycle vanishes on `Z_n`; it factors
through `d_n:C_n -> B_{n-1}`, and coboundaries correspond to restrictions from
`Z_{n-1}` only after using a cycle projection to extend such maps to
`C_{n-1}`. Write this calculation after repairing the extension map, and check
chain-map naturality. Classification: U-C to A-P.

The nonnatural splitting theorem's own formula is sound under its explicit AC:
the chosen section of `d_n` gives `pi=1-sd_n`, and
`sigma(f)=[f q pi]` is a cocycle and a right inverse to evaluation. Its
Statement, however, repeats the full affected UCT exact sequence and directly
depends on that theorem. The item remains pending until the left injection and
exactness are repaired; there is no second defect in its section construction.
Classification: U-C to A-P.

## Finite-dimensional field duality

The field corollary states no choice principle but invokes both the general
AC-qualified UCT and `prop-modules-over-a-field-are-projective-flat-and-injective`,
whose Statement also explicitly assumes AC. This is an exact inherited
hypothesis mismatch, not a missing direct-edge-only concern.

The stated finite-dimensional result has a choice-free repair. In the two
relevant degrees, extend a functional from homology to cycles and from cycles
to the chain group by finite basis extension. Evaluation is then surjective.
A cocycle with zero evaluation vanishes on cycles, factors through the boundary
image, and that functional extends across the preceding finite-dimensional
chain group, making the cocycle a coboundary. This directly proves the
evaluation isomorphism without arbitrary-module injectivity or the general
UCT. Classification: U-C to A-P.

## Reconfirmed existing A-P findings

The following current files were reread and match their single existing A-P
records:

| Published ID | SHA-256 | Reconfirmed mechanism |
|---|---|---|
| `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` | `4c4a0e1433f2237cb636eb32021ce0f0e151f410e1b85a932789e05ea57b52cb` | Proof 1.1 selects data over every point; proof 2.1 invokes the explicitly AC-omega Lindelof supplier without assuming it. |
| `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` | `d5103dfca89f36c969aa0b8771b14c3fc385fb416671ed056949510063478335` | Proof 3.1 selects local nested data; proof 4.1 collects one finite subcover for each countably many annuli without a countable-choice contract. |
| `thm-smooth-partitions-of-unity-exist-on-manifolds` | `06cbcc64ddc1151ccfe2fc283bbf8922ed1ef6a31b7bdf62262a83a6895b7e42` | It uses both affected cover/shrinking suppliers and selects one bump for every countable index without assuming countable choice. |
| `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` | existing exact evidence in `research/phase-2-next-20-published-cw-compactness-choice-audit.md` | Proof 1.1 chooses a countable family of met cells and then a point in each intersection without a choice contract. |

The shrinking recurrence can take each least eligible natural index, so that
line is not an additional countable-choice defect. Forming all admissible local
tuples can also avoid the point-indexed selections, but selecting finite covers
over countably many annuli and bumps over the resulting countable family still
requires the recorded contract. Published `def-countable-choice` and
`thm-second-countable-implies-lindelof` are the exact existing suppliers. No
row, count or repair state changes for these four reconfirmations.

Active group-e drafts state the needed AC where these interfaces are used or
give local finite-dimensional constructions. No new live authoring blocker or
Phase-2 pair is identified by this audit.

## Limits

This is a full-target and exact used-interface audit of the four UCT items and
a focused reconfirmation of the four existing A-P records. It does not certify
all direct consumers or every transitive algebra/topology supplier. No external
source was newly fetched or read, no independent judge result is claimed, and
published items were not edited.
