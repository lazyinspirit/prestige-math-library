# Final adjudication: singular planar labelled relator diagrams

Run: `phase-2-nine-step-25`. Group: `h`. Queue position: 1 of 1 in
`research/phase-2-nine-step-25-step7-fa-h-item-697f38bb73ed7c6b.json`.
Item: `def-singular-planar-labelled-relator-diagram`.
Decision: **repaired**. Source status: **verified**.

## Independent mathematical basis

The first Terra rejection (context
`cd54cbba6f8c1278c4e7bb3ca66a369017a9c66fc16a39e7c7d7f6546bd2531b`)
correctly identified missing traversal direction. Sol's repair fixes this:
the standard plane orientation, unbounded region on the left, and directed
initial occurrence determine the literal word. This also agrees with the
current published `def-van-kampen-diagram-boundary-label-and-area`, whose
outer walk keeps the complex on its right. A bridge contributes its two
different directed occurrences; the cyclic ordering retains cut-vertex
excursions. I retain this repair.

The final Terra rejection (context
`116f6c2ed85a32c0622cdd534480074ec1c09a81af520219f0eca783f65cfcd9`)
is independently valid under the explicit plane-map clauses. For example,
take a polygonal loop at v, fill it by a single relator disk, and draw a
pendant graph edge from v into that disk, ending at a second vertex there.
For the presentation with both edge labels as defining relators, label the
loop by one generator and the pendant edge by the other. The original clauses
on labels, injectivity on the open disk, and pairwise disjoint face interiors
are satisfied (there is only one face). Even a constant Cayley vertex
labelling exists in the resulting trivial group. But the pendant edge and
its endpoint lie in the face interior, so these images do not give a planar
cell decomposition. The word 'attached' alone did not explicitly require
the indicated plane realization to embed the attaching quotient.

I replaced the deficient sentence by the requirement that each open-disk
image be disjoint from the entire embedded graph and that distinct open-disk
images be disjoint from one another. Disk boundaries still attach along
cyclic edge-occurrence walks, which can repeat vertices and edges. Hence
the repair forbids the witness without imposing injectivity on closed faces
or removing loops, monogons, bigons, bridges, or cut vertices. Zero-face
diagrams satisfy the new clause vacuously, including the single vertex.
Contractibility remains a separate condition; the definition does not assert
that every thin edge of every diagram is a bridge.

The local expression lemma already starts with disjoint lollipop sectors
and maintains open face embeddings away from the folded graph. In particular,
its step 9.1 explicitly uses that an open face is connected and disjoint from
graph edges to place it entirely on one side of the auxiliary circle. The
new clause supplies the stated interface needed there. The thickening lemma
uses the stronger filled-region conclusion of that expression lemma. No
consumer proof or prerequisite item needs a mathematical edit for this
definitional correction. This is an interface review, not a new adjudication
of either consumer's complete theorem.

## Source verification

Authoritative URL read:
https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf

Bridson, *The geometry of the word problem*: the opening of §4.1 and
Definition 4.1.1 (PDF p.20), Definition 4.2.1 (PDF p.22), and the complete
combinatorial-complex construction in Appendix A.2.1 (PDF p.51).
The first sections specify plane combinatorial complexes, directed labels,
and relator labels closed under cyclic permutation and inversion. Appendix
A.2.1 starts with a disjoint union of the lower skeleton and closed disks,
then identifies only boundary points with their attaching images. Thus the
open disk images are disjoint from the lower skeleton and each other.
This verifies the exact cell convention repaired here. The library's chosen
outer traversal direction is fixed by its own published convention.

I read the underlying PDF's extracted full relevant definition passages,
not a search snippet. Three attempted screenshots of PDF pp.20–22 failed
(two cache misses and one timeout); the PDF text retrieval succeeded, including
the complete relevant attachment construction. No screenshot reading is
claimed. This definition needs no external theorem proof or new lemma.

## Local evidence and scope

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and
`articles/README.md`; the exact task and queue; the complete current item;
and the complete direct dependency statements:
`def-group-presentation`, `def-alphabet-words-and-reduction`, and
`def-multigraph-loop-and-digraph`. These respectively supply the quotient
presentation, formal inverse alphabet and finite words, and permission for
loops and parallel edges. All three declared dependencies remain unchanged.

Read both A/B pages for `asymptotic-cones-and-the-sublinear-triangle-criterion`,
the item's batch-17 manifest entry and proof contract, the relevant Bridson
coverage entries, group-h convention context, and the batch-17 reader/refute
record. The definition has no separate risk_review entry; its full boundary
record was inspected, as was the expression lemma's explicit risk_review.
Read both judge rows, the initial adjudication row, Sol's group-h repair
account, and the exact per-item final-rejection closure artifact. Neither the
reader's unflagged result nor Sol's completion note overrides the new defect.

Changed only this item and directly required batch-17 metadata: synchronized
the manifest's statement, the expression consumer's exact F1 quotation,
the definition's degenerate/endpoints boundary evidence, and its source
locator/use record. Page order, item inventory, dependencies, existing risk
reviews and judge records are retained. No prerequisite repair licence or
new-lemma scope addition is needed.

Per `briefs/tasks/frontier-dependency-ledger.md`, reviewed the owning input
`research/phase-2-nine-step-25-batch-17.cross-batch-dependencies.json`.
It remains `[]`: this repair changes no cross-batch edge, and the direct
expression consumer is in batch 17. No fictitious edge was added. Ran the
prescribed refresh successfully; the unified ledger was updated by its tool.

## Focused checks and terminal state

- Pre-repair `itemHashGuard`:
  `d7134839bb2804561b73e3c7807126b929efcb2009caae851f801191cf027d13`.
- Post-repair `itemHashGuard`:
  `9119ef7bb799e044cbb770c3aec74649a9f2f0f5aec118d02f1ccf9a0e2de16d`.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-singular-planar-labelled-relator-diagram.md`:
  exit 0, zero proof-bearing items checked, appropriate for a definition.
- `node tools/rendercheck.mjs items/def-singular-planar-labelled-relator-diagram.md`:
  exit 0, real KaTeX and renderer YAML checks passed.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-17.proof-contracts.json --strict --items def-singular-planar-labelled-relator-diagram,lem-relator-expressions-give-controlled-singular-planar-diagrams`:
  final exit 0, 2/2 checked, zero errors or warnings. Its first run required
  explicit 'Definition' anchors in two rewritten boundary records; those
  anchors were corrected before the successful rerun.
- Batch manifest, proof-contract and consumer dependency-input JSON parsed.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`:
  exit 0, refreshed and deduplicated.

No mathematical obligation remains open for this queued definition. The next
authorized action is the exact terminal recorder with disposition `repaired`
and source-status `verified`, using this evidence. The recorder's receipt is
the terminal record; this review supplies no judge verdict or pass stamp and
requests no third consumer judgment. Subsequent group work belongs to the
owning Alpha and the engine.
