# FA terminal evidence — queue d, position 2

Item: `def-efficient-universal-simulation-with-clock`. Decision: repaired.

Read the current definition, its three direct dependencies (effective machine
encoding, constructibility, and DTIME/NTIME/DSPACE/NSPACE), hierarchy A/B pages,
batch-21 manifest and coverage (Chapter 3 and section 2.1 simulation entries),
batch notes, reader/refuter risks, both Terra rejections, and Alpha's repair
and independent reader-warning disposition. This definition has no proof
section or individual proof contract. The published class interface uses
multitape machines and all-tapes space; the earlier encoding is explicitly
one-tape, so I specified the finite-table multitape extension locally.

The original missing decoding cost and small-clock defects are repaired by
Alpha's n term and log(b+2). The reader's space objection is also addressed by
the n term. The final rejection is valid as an interface ambiguity: an arbitrary
integer b is not a specified constructor. The independent repair distinguishes
an already supplied binary clock from a clock h(n), fixes its constructor and
eventual linear floor, and accounts separately for constructor time and space.
In particular time constructibility alone does not promise small workspace;
W_h is charged explicitly. Building unary length costs O(n), and constructor
time O(h) is absorbed by the displayed total time. Binary countdown uses
O(log(b+2)) space and at most O(b log(b+2)) time, even with a simple counter.

Source verification: https://theory.cs.princeton.edu/complexity/book.pdf
Arora–Barak, Appendix 1.A, printed pp. 35–38 (PDF pages 50–53, zero based),
read completely through its final amortized estimate. It supplies multitape
universal simulation with logarithmic time overhead and constants depending
on the simulated machine. Its geometric buffer construction stores tape
symbols with constant-factor buffer slack; allocating buffers as the visited
span grows gives linear space in the represented span. The input copy and
binary counter are additional local bookkeeping, explicitly charged here.
The constructor convention itself is verified from the exact local definition,
which outputs the binary bound in O(h) time and requires the clocking floor.
The source's unclocked estimate is not being treated as a bound on constructor
space or as a uniform constant across arbitrary machine descriptions.

No direct dependency was edited. No proof contract exists for this definition;
its manifest strategy already calls for an explicit clock and quantitative
overhead. Focused rendercheck passed; precheck correctly checked zero proofs
with zero failures. No judge verdict or stamp was written.

Unresolved obligations: none for this item. Next: record the final bytes, then
review queue position 3. Queue position 1 was recorded before this review began.

Context refresh at position 6: the sibling budgeting example fixes M,c before
letting padding grow, and separately charges clock construction. This agrees
with this definition's fixed-M constants and constructor-cost interface.
This item's bytes and independent source verification remain unchanged.

Context refresh at position 7: the enumeration now explicitly constructs its
step counter and distinguishes a cell cap from forced halting. Its fixed-pair
padding and step-clock behavior retain exactly the interfaces used here.
The current item bytes and prior mathematical decision remain unchanged.

Context refresh at position 8: the sibling padding lemma now specifies both
translated runtime bounds and their separate decider hypotheses. It retains
the existing delimiter convention and does not change the simulator or
clocked-pair interfaces used here. This item and its decision are unchanged.

Context refresh at position 10: the read-only workspace simulator now
distinguishes fixed-machine cell caps from uniform encoded-storage caps and
explicitly rejects overflow. This changes no time-clock, padding, or effective
decoding premise used by this item. Its bytes and decision remain unchanged.

Context refresh at position 11: the time-diagonal lemma now uses an actual
outer transition clock, with both constructors and fixed-pair eventual
completion explicit. This supplies the global cutoff underlying the budgeting
example and retains the simulator and enumeration conventions. This item
requires no change; its previously proved claim remains valid.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.
