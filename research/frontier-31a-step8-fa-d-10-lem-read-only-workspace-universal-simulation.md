# FA terminal evidence — queue d, position 10

Item: `lem-read-only-workspace-universal-simulation`. Decision: repaired.

Read the current lemma and both direct dependencies, the full local workspace
and repaired effective-enumeration interfaces, batch-21 contract, manifest,
coverage, hierarchy A/B conventions and risk records, both Terra reasons, and
Alpha's adjudication. Alpha correctly charges addresses against total encoded
length. The final rejection is valid: the statement must condition faithful
simulation on staying inside the cap or explicitly reject an overflow.

The repair defines both initial and subsequent overflow rejection and states
faithfulness only through the permitted part of a computation. It also repairs
an independent quantifier issue: a uniform binary simulator cannot treat an
arbitrary simulated alphabet/tape count as a universal constant. The
visited-cell simulation is O_M(s+log(n+2)) for each fixed M. A separate uniform
O(s+log(n+2)) claim applies to a cap on actual visited simulator storage,
including its encoded configuration and scratch space, with auxiliary
logarithmic addressing/counters. It rejects before exceeding the storage cap;
it does not promise faithful simulation for every M using s simulated cells.
The supplied binary cap is charged. No constructor cost or forced halting is
silently supplied. Within-cap loops may continue, consistently with the
separate halting lemma on the page.

Source verification: https://theory.cs.princeton.edu/complexity/book.pdf
Arora–Barak, Definition 4.1, Remark 4.2, and Claim 4.4 with its proof,
printed pp. 75–78 (PDF pages 90–93, zero based), read through the complete
configuration-description argument. These support the uncharged input,
logarithmic input-address floor, and configuration encoding whose constant
explicitly depends on alphabet size and tape count. The local cap monitor
and field-rescanning implementation are independently supplied in the proof.

No dependency was edited. Updated this item's batch and consolidated proof
contracts with cap, overflow, and nonhalting boundaries. Focused precheck,
rendercheck, and strict proof-contract checks passed. No judge stamp was made.

Unresolved obligations: none for this item. Next: refresh compatible earlier
hierarchy contexts, record position 10, then review position 11.

Context refresh at position 11: the time-diagonal lemma now uses an actual
outer transition clock, with both constructors and fixed-pair eventual
completion explicit. This supplies the global cutoff underlying the budgeting
example and retains the simulator and enumeration conventions. This item
requires no change; its previously proved claim remains valid.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.

Final risk-routing check: the expanded proof now crosses the mechanical high-risk threshold. Added an explicit final-adjudicator risk_review to this item's own batch/consolidated contract, documenting the already completed independent analysis above. This is metadata, not an Alpha adjudication or a judge verdict.
