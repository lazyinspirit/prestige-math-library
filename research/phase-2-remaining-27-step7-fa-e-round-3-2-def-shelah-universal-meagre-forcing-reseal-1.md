# Final adjudication recovery — universal-meagre forcing

Run phase-2-remaining-27, group e, round 3, position 2.
Disposition: repaired. Source status: verified.

Position 1 was recorded successfully before substantive position-2 review.
Before the citation correction, this item's itemHashJudge was
7d9e8af16d4bcbdb3dee88197c7e445a59acfdedb5fee5da3cbe9c557b0c8691,
identical to its previous receipt. Its stale status came from shared context.
Read the current definition, all four declared published dependencies, both
current pages, own batch-15 manifest and contract (including Alpha's risk
record), coverage clauses, Alpha adjudication, original Terra rejection and
subsequent acceptance, and the earlier FA basis. The owner correction and
prior FA repair are preserved. The judge history contains a later acceptance,
not a final rejection of these bytes; this reseal does not invent one.

Source verification on this recovery:

- https://shelah.logic.at/files/95333/176.pdf — downloaded the original paper,
  rendered and visually read printed p. 36, Definition 7.7. It specifies a
  perfect nowhere-dense witness tree and a preserved finite record, with
  enlarging witness trees giving stronger conditions. Read Claim 7.11,
  printed p. 41, which explicitly uses a weakest coordinate; read Claim 7.15,
  p. 43, as the separate absorption assertion. The library reverses the source
  order and indexes its finite record by the maximum included height.
- https://shelah.logic.at/files/95909/672.pdf — read §0.2(9), printed p. 586,
  prescribing a distinguished weakest condition. No later theorem from this
  paper is used to establish the local generic-tree claims.

Independent mathematical check against current page conventions:
Nonempty perfection supplies a root and nodes at every finite level. Height
zero is allowed; the separate weakest element is not the empty-tree pair.
The no-consecutive-ones tree is a witness: append zero and then either bit to
split, and append consecutive ones to obtain a cylinder missing its body.
For two conditions with heights n1 <= n2, a common extension must preserve
both records and include T1 through n2 inside t2. Conversely, under those
conditions T1 union T2 with record t2 is a witness. Its body equals the union
of the bodies: if a branch misses both trees, a sufficiently long prefix
misses their union. Sequential shrinking of a cylinder proves that a finite
union of closed nowhere-dense bodies remains nowhere dense. This verifies
both the compatibility criterion and the fixed-record directed classes.
The displayed 11 counterexample correctly rules out mere record agreement.

The transitive-ground generic-filter dependency has exactly the order and
genericity used here. A set dense below p is met by a generic containing p,
by adjoining conditions incompatible with p. Directedness rules out the latter.
Applying this to height extensions includes every witness node in the union
of records; each such node inherits two incomparable extensions. For each
finite word s the ground dense set recording a missing extension v of s
ensures v is absent from every generic witness. Least-child recursion proves
that a node of a pruned binary ground tree lies on a ground branch, so body
nowhere density supplies such a missing v without choice. Directedness and
preservation of the recorded levels make its absence permanent. Thus the
generic body's perfection, closedness and nowhere density remain proved.
Finite permutations preserve tails, their partial bijections extend by finite
lexicographic matching, and least codes of directed classes inject any
antichain into omega in ZF. No changed sibling or quotient convention is used
as a proof premise of this definition. Absorption is a Remarks pointer, not
a circular dependency. No supplier or published mathematical defect arises.

Only corrected the malformed combined forcing-order/genericity wikilink into
two already declared dependency links. No statement, scope, contract obligation
or supplier changed. Updated the owning consumer-batch record as required by
briefs/tasks/frontier-dependency-ledger.md, confirming the published-dependency
interface and absence of a new same-run cross-batch edge; refreshed the unified
record using the prescribed tool. Preserved the earlier risk attribution.

Focused batch contract, rendercheck and prosecheck each pass with zero errors
and warnings; targeted whitespace check passes. Definition proof precheck is
not applicable. No judge, self-review decision or pass stamp was created.
No unresolved mathematical obligation for this item. Next: run queue-status,
reseal any predecessor if necessary, record this repaired item, then confirm
both positions current.
