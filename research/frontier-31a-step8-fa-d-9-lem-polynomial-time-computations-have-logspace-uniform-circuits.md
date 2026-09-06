# FA terminal evidence — queue d, position 9

Item: `lem-polynomial-time-computations-have-logspace-uniform-circuits`.
Decision: repaired.

Read the lemma, both direct definitions in full, the underlying published
multitape and one-step machine conventions (right-infinite tapes, clamping
at zero, no successor from halting states), batch-22 contract, page and
manifest/coverage conventions, reader/refuter reports, both Terra reasons,
and Alpha's adjudication. Alpha correctly restricted M itself to polynomial
time. Terra's early-halting objection is valid: the last tableau row had
not been defined after a machine halted.

The new construction extends the circuit's configuration update by the
identity on halting states. It does not add transitions to the underlying
machine. Induction now proves the last state bit records acceptance even
when halting occurs much earlier. I also corrected a separate multitape gap:
a fixed-radius cell neighborhood does not contain symbols scanned by distant
heads on other tapes. For each tape and symbol a binary OR chain computes
its scanned-symbol bit from head and symbol indicators. The finite transition
table then computes state, write symbols, and directions; local cell/head
updates use these shared global control bits. At position zero a left move
clamps; positions beyond n+B+1 cannot be reached in B steps.

A fixed polynomial B=(n+2)^k+k bounds every runtime, including n=0. Each
layer has O(n+B) gates and there are B layers, hence polynomial size. Exactly
n labeled input nodes initialize the configuration. All ORs are binary
chains, and the final accepting-state bit is designated. The regular block
layout makes all gate indices, offsets, and predecessor calculations fixed
polynomial arithmetic on O(log(n+2))-bit integers; this supplies the complete
uniform query/streaming interface, not just circuit existence.

This construction is familiar elementary circuit simulation; no external
verification was necessary. The explicit global scanned-symbol construction,
halting update, and indexing argument discharge the potentially delicate
parts locally. No direct dependency was edited. The statement/interface is
unchanged, so earlier example receipts remain mathematically applicable.

Updated the item's batch and consolidated contracts, including the stale L2
quote exposed at position 4 and the early-halting/boundary obligations.
Focused precheck, rendercheck, and strict proof-contract checks passed.
No judge stamp was made. Unresolved obligations: none. Next: record, then
review position 10.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.
