# Step 6A independent reader report — batch 6

Run: `phase-2-wave-1`  
Batch: `6`  
Reader: `reader-6`

## Scope opened

Pages read in full:

- `library/group-theory/hall-malcev-coordinates-and-bass-guivarch-growth.md` (A)
- `library/group-theory/hall-malcev-coordinates-and-bass-guivarch-growth-examples.md` (B)

All 27 assigned current items were read in full (20 A, 7 B):

- `lem-hall-malcev-integer-abelian-structure-and-rank`
- `lem-hall-malcev-commutator-product-identities`
- `lem-hall-malcev-three-subgroup-containment`
- `lem-hall-malcev-lower-central-commutators-add-weights`
- `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian`
- `lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated`
- `lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup`
- `lem-hall-malcev-upper-central-factors-are-torsion-free`
- `lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement`
- `def-bass-guivarch-dimension`
- `def-lower-central-generators-and-weighted-coordinate-length`
- `lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks`
- `lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup`
- `lem-finite-lower-central-coordinate-systems-exist`
- `lem-hall-malcev-finite-collection-alphabets-include-torsion-carries`
- `lem-weighted-collection-in-lower-central-coordinates`
- `lem-hall-malcev-powers-in-the-last-central-term-have-short-words`
- `thm-last-lower-central-term-has-exact-weighted-distortion`
- `lem-weighted-coordinate-boxes-give-matching-growth-bounds`
- `thm-bass-guivarch-growth-degree-formula-with-proof`
- `ex-bass-dimension-of-a-free-abelian-group`
- `ex-bass-dimension-of-the-discrete-heisenberg-group`
- `ex-central-distortion-in-the-discrete-heisenberg-group`
- `ex-bass-dimension-of-unitriangular-four-by-four-integers`
- `ex-hirsch-length-and-growth-degree-need-not-agree`
- `cex-counting-every-lower-central-generator-with-weight-one`
- `cex-torsion-free-nilpotent-group-with-torsion-in-abelianization`

The direct published item interfaces opened were
`lem-subgroups-of-z-are-cyclic`, `thm-division-algorithm-in-z`,
`thm-well-ordering-principle`, `thm-first-isomorphism-theorem-groups`,
`thm-rat-field`, `cor-independent-set-is-no-larger-than-a-finite-spanning-set`,
`prop-abelian-groups-are-z-modules`,
`def-subgroup-commutator-and-lower-central-series`,
`def-finitely-generated-group`,
`thm-upper-and-lower-central-characterizations-of-nilpotence`,
`thm-subgroups-quotients-and-finite-products-of-nilpotent-groups`,
`def-word-length-with-respect-to-a-generating-set`,
`lem-word-length-is-well-defined-and-satisfies-the-length-laws`,
`prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite`,
and `thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics`.
I also opened the three declared prerequisite pages and the two published
items named by the inherited closure notes:
`thm-composition-series-iff-noetherian-and-artinian` and
`thm-principal-ideal-domains-are-unique-factorisation-domains`.

The binding design section in `research/plan-group-theory-track.md` §BG and
the live entries in `research/plan-spec.json` were compared. The current plan
has the design's seven A-only prerequisites for the Cayley page, so the former
B-page-edge assertion in older batch notes is stale. The batch's own planned
A/B pair, title, order, companion, and three direct requirements agree.

Source passages opened directly from the current URLs were: Conrad, *Modules
over a PID*, Theorem 2.2 (finite-rank submodules); Brussel, *Finitely
Generated Modules over a PID*, the Euclidean pivot reduction at pp. 4--5;
Druţu--Kapovich's 837-page edition, Remark 13.83(2), the last-term
compression proof, and the cited collection/growth section; the 585-page
draft's cited commutator, torsion, and compression passages; and Löh,
Theorem 5.3.6 and Example 5.3.7. Löh explicitly omits the general proof, and
the local coordinate-box proof rather than that omission supplies the result.

## Mathematical reading

The integer reduction proves finite subgroup generation, diagonal reduction,
the torsion/free decomposition, and intrinsic free rank without using the
published PID classification. Its pivot descent has a genuinely decreasing
positive integer; unit, zero, and empty-matrix cases are included. The
finite-kernel rank argument correctly factors homomorphisms to $\mathbb Q$.

The commutator convention is held fixed through the Hall--Witt calculation.
The normal-subgroup containment, lower-central weight inequality, and induced
biadditive pairing have the necessary conjugation and representative checks.
Finite torsion is proved by class induction; the quotient is formed before
torsion-free central-refinement coordinates are used. The mixed
lower-central coordinates separately retain finite residues, as witnessed by
the torsion-free Heisenberg subgroup with torsion abelianization.

The collection recurrence uses ambient lower-central depth, not the intrinsic
series of a lower term. Carries strictly raise depth, and the binomial count
keeps a weight-$j$ contribution at $O(R^j)$. Last-term compression provides
the reverse distortion direction; the finite-last-term case is explicitly
separated. The coordinate boxes are proved in both directions before their
unique tuples are counted. Thus the final theorem asserts only two-sided
polynomial bounds, including degree zero for finite groups, and no unsupported
leading coefficient.

The matrix checks are correct: for $\operatorname{UT}_3(\mathbb Z)$ the normal
coordinate is $k$, not its $(1,3)$ matrix entry $ab+k$; for
$\operatorname{UT}_4(\mathbb Z)$ the lower-central ranks are $3,2,1$ and the
weighted degree is $10$. The commutator rectangle gives the stated Heisenberg
quadratic distortion bounds. All displayed empty, zero, finite-torsion, and
boundary cases relevant to these arguments were checked.

## Verdicts

| Page | Verdict | Basis |
| --- | --- | --- |
| `hall-malcev-coordinates-and-bass-guivarch-growth` | local mathematical pass | The summary matches the full item chain: finite torsion, distinct coordinate systems, ambient-weight collection, both distortion bounds, and two-sided box/growth bounds. |
| `hall-malcev-coordinates-and-bass-guivarch-growth-examples` | pass | The summary matches the three computations and both counterexamples, including the finite-residue warning. |

No confirmed defect remains in an assigned in-flight item or assigned A-page
prose. No repair was made; therefore no proof-contract update, stale judge
record removal, or reflow was applicable.

## Uneditable observations and blockers

The two opened published items remain defective exactly as their current text
shows: the composition-series theorem's `deps` omit
`def-dependent-choice` despite its converse using DC, and its successor
relation has no successor at zero; the PID-to-UFD theorem invokes the
DC-costed maximal-condition route while stating no such assumption or
dependency. These are protected published-content defects. They are not in
the current direct `deps` closure of any assigned item: the local integer
lemma deliberately replaces the old PID-classification route. Accordingly
they are recorded here as inherited page-prerequisite/closure blockers, not
as inaccurate item-level JSON findings.

The stronger `BG-CLOSURE` obligation remains open: a structural traversal is
not a statement-by-statement semantic audit of every inherited published
supplier. This reader independently checked the current direct proof chain,
not the asserted 2,540-ID closure. The pre-existing batch notes are also
stale in calling the current inventory 26 items (it is 27: 20 A and 7 B).

## Checks

- `node tools/tsx-run.mjs tools/precheck.mts` on all 25 proof/verification-bearing assigned items: pass (25 checked, 0 failing). The two definitions were read in full.
- `node tools/rendercheck.mjs` on both assigned pages: pass.
- `node tools/depcheck.mjs --quiet`: failed on pre-existing repository-wide diagnostics (81 errors and many warnings in unrelated content); the output contains no batch-6-specific diagnostic.

Edits: none. Uneditable JSON findings: none, because no uneditable defect is
reached by a current assigned item's declared dependency closure. Proposed
withdrawals: none.
