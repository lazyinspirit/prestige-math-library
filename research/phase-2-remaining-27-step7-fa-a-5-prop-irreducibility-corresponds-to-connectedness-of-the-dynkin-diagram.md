# Final adjudication — position 5

Disposition: repaired. Source status: familiar.

Read the complete item, all seven supplier statements/definitions, root-system
A/B pages, owning Batch-11 manifest and source-coverage locators, proof contract
and risk record, both Terra records and Alpha's adjudication at line 363 of the
group-a Step-7 report. This elementary root-system argument is familiar enough
not to require external verification; no new external source reading is claimed.

Alpha's least-height repair is sound: a mixed-support positive root of smallest
height is nonsimple, so splits as two positive roots. Both summands have smaller
positive integer height, hence each has support on one side; they must occupy
opposite orthogonal sides. Reflection in one summand gives the difference of
the two, a root whose simple coefficients have mixed signs, contradicting the
signed-coordinate theorem. Every denominator is positive. Conversely, a
nontrivial orthogonal root-system splitting partitions the base, and projection
plus independence shows that both parts of the base are nonempty. They have no
edges between them.

Terra correctly notes that L1 overstates the decomposition supplier's statement
by attributing a graph-component characterization to it. Deleted that unneeded
attribution; the proof uses only the actual orthogonal decomposition interface.

Independently, the exact definition `def-reducible-and-irreducible-root-system`
explicitly calls the empty root system irreducible. The previous contract
incorrectly excluded empty carriers and both directions of the asserted iff.
The repaired statement covers every rank: irreducible iff the diagram is empty
or connected, with the standard connectedness equivalence stated separately
for nonempty systems. Step 2.1 proves the rank-zero case directly. Adjusted the
title, manifest claim, and boundary checks consistently. This preserves the
library's unusual zero-rank convention without modifying its supplier.

Focused precheck and rendercheck passed. Strict proof-contract check passed for
1/1 item with no errors or warnings after anchoring the rank-one check to step
2.1. No dependency edges changed, so no dependency-repair ledger update was
needed. No published file, supplier, page, judge verdict or pass stamp was edited.
Queue-status shows positions 1–4 current. After successful recording, continue
at position 6.
