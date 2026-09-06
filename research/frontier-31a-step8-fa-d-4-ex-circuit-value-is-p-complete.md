# FA terminal evidence — queue d, position 4

Item: `ex-circuit-value-is-p-complete`. Decision: repaired.

Read the item, both cited dependencies in full, its exact batch-22 contract,
the previously opened logarithmic-space A/B pages and conventions, manifest,
coverage, reader/refuter risks, both Terra rejections, and Alpha's repair.
Alpha corrected L2's invented reduction name. The final rejection is valid:
the lemma's statement guarantees acceptance-equivalent uniform circuits, not
that this particular two-gate circuit is exactly its tableau construction.

Repaired L1 to state the supplied interface. Replaced the claimed identity
with the general construction by an independent four-node encoding: input
nodes 1,2, NOT node 3 with predecessor 1, AND node 4 with predecessors 3,2,
and designated output 4. This is topological and respects the fixed binary
basis. Its output equals one iff the input is 01; the concrete input 01 gives
both gate values one. A fixed encoding takes constant work space to emit.
The machine description is now explicitly restricted to the promised two-bit
inputs; no unproved exact two-step decider claim is needed. The example
illustrates the general acceptance-preserving reduction without asserting
identity with its mechanically unrolled tableau.

This is familiar Boolean evaluation and elementary finite encoding; no external
verification was needed. The direct proof discharges this example independently
of internal construction details in the lemma. No dependency edit is necessary.
Updated this item's batch and consolidated contracts to match the new argument,
canonical phase numbers, and both directions of the Boolean equivalence.

Focused precheck, rendercheck, and strict proof-contract check all passed.
An initial whole-batch contract check also exposed the expected stale quote
in the queued circuit-construction lemma after position 3's definition repair;
that is reserved for its own position 9 review. It is not an unresolved proof
obligation of this direct finite example. No judge stamp was created.

Unresolved obligations for this item: none. Next: record, then review position 5.

Context refresh at position 5: the sibling composition example now specifies
its alphabet and languages and proves its two reduction equivalences. These
changes impose no new circuit convention or logical premise on this item.
Its mathematical review and item bytes remain unchanged; reseal the context.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.
