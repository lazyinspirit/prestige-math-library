# FA terminal evidence — queue a/2

Item: `fs-the-universal-coefficient-short-exact-sequence-splits-naturally`.
Decision: **repaired**. Source status: **verified**.

Queue item 1 was accepted by the terminal recorder before substantive review
of this item began. Read the current item and its original direct UCT supplier,
both Schur A/B pages, batch-1 manifest, coverage and notes, the batch and merged
proof contracts, refuter record, reader report/findings, Alpha step8 context
and adjudication report, Sol's fatal adjudication and both Terra rejection
rows. The original contract has no separate risk_review field; its old
boundary evidence did not establish a counterexample. The refuter's batch
record has no item-specific flag here; the reader's template-proof concern
was checked against the actual later repaired text, not treated as current
bytes. The page convention is M(G)=H_2(G;Z), with trivial coefficient action
for the degree-two cohomological UCT. Naturality of its exact maps does not
imply naturality of any section.

## Adjudication and repair basis

Terra's final rejection is correct. Sol replaced dependence-on-choices
reasoning with Boardman's general nonnaturality statement. A failure to split
naturally on all free chain complexes need not persist on the subcategory
coming from groups. Neither the current proof nor its contract supplied the
missing implication. The direct UCT supplier correctly asserts only existence
of splittings after choices and is not defective on this point.

The new proof fixes A=C_2 and V=C_2 x C_2. A natural section s would restrict
s_V(lambda) to zero on every cyclic order-two subgroup because M(C_2)=0.
There exists a nonzero lambda:M(V)->C_2: the determinant alternating pairing
on F_2^2 factors through the exterior square, identified with M(V). If alpha
is its image under s_V, then p_V(alpha)=lambda is nonzero.

Represent alpha by a central extension E of V by C_2. Vanishing of each
cyclic restriction says that each order-two subgroup has preimage C_2 x C_2.
These preimages, together with the kernel, cover E. Every element of E thus
has square one. Consequently E is abelian; lifts of the two basis elements
commute and have order two, explicitly giving a homomorphic section V->E.
The extension class is zero, contradicting its nonzero image lambda. This
excludes every section natural in G even with A fixed, so also excludes
naturality in both variables. It does not confuse nonuniqueness with
nonnaturality and does not assert failure of objectwise splitting.

All five direct suppliers were read completely:

- `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two`;
- `prop-schur-multiplier-of-a-cyclic-group-is-trivial`;
- `thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square`;
- `lem-exterior-square-has-the-alternating-universal-property`;
- published `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action`.

The first three are earlier on the same A page; the classification theorem is
an established prerequisite. The exterior-square definition and the underlying
PID UCT statement/proof were also opened. The cyclic calculation and
alternating-pairing calculation are familiar elementary algebra. In particular,
the pairing takes value one on the basis pair, proving lambda nonzero without
requiring any unjustified count of extension classes. Pullback compatibility
and the zero-class criterion are explained by factor sets in fact L4.
No supplier bytes were edited, so no prerequisite-repair licence is needed.

## External source verification

- https://math.jhu.edu/~jmb/note/uctcoh.pdf
  — read the complete two-page note, especially Theorem 1 and its proof.
  This supports the general free-integral-chain-complex split exact sequence
  and identifies precisely the scope limitation in Sol's citation. It is
  retained as background, not used to prove group-specific nonnaturality.
- https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
  — read Theorem 1.5.10 and its complete proof, printed pp. 33–37;
  Remark 1.5.11, pp. 37–38; and Theorem 1.5.13 and proof, pp. 38–40.
  These verify classification by factor sets, the split-extension/zero-class
  correspondence, and functoriality under group homomorphisms, including
  subgroup restriction. They support the new group's extension argument.
  The nonnaturality witness itself is the explicit independent deduction
  above, not an assertion attributed to this source.

## Exact local changes and validation

Replaced the queued item's refutation, made trivial-action and naturality
variables explicit, added the four exact prerequisite edges and changed
proof_strategy to contradiction. Updated only this item's dependency list
in `research/frontier-31a-batch-1.pages.json` and its entry in both
`research/frontier-31a-batch-1.proof-contracts.json` and
`research/frontier-31a-proof-contracts.json`. The new contracts contain exact
supplier quotations, every step's inputs, and concrete boundary/choice checks.
No Sol adjudication or judge stamp was written; no judge was called.

Checks:

- Focused precheck: PASS, 1 proof, contradiction strategy.
- Focused rendercheck: PASS, 1 file.
- Focused strict batch and merged proof contracts: both PASS, 0 errors and
  warnings. An initial contract-generation regex included internal fact
  brackets; fixed the extraction and reran both successfully.
- Batch content-policy: PASS, 74 scoped items, 0 errors and warnings.
- Repository depcheck: OK, no cycles, all references resolve, no draft items
  on published pages; unrelated legacy warnings remain, none for this item.
- Scoped git diff --check: exit 0.
- Independent exhaustive calculation of normalized C_2-valued cocycles on
  V: 16 cocycles, 2 coboundaries, 8 cohomology classes. The kernel of
  restriction to all three cyclic subgroups equals exactly the coboundaries.
  This separately verifies the detection step used in the proof.

Final file SHA-256:
`09f2e3d44d6369aedbe458af1e1bf58eaa4786ee1aaec3bd1106e1b6cf94e612`.
No unresolved mathematical obligation remains. Next action: record these exact
bytes with the prescribed terminal recorder; this finishes queue a round 1.

The first recording attempt was refused because this repaired Statement
changed the shared A/B context of queue item 1. Its unchanged acceptance was
independently rechecked and resealed at context
`ada13eba2f7e33db3554605658368d46c2aa9e79524d8ca475771dfa0f63e31f`.
No mathematical or tool code edit was needed to satisfy the predecessor gate.
