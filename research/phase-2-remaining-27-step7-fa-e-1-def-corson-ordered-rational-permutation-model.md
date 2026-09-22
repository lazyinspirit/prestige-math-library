# Final adjudication — Corson model

Run `phase-2-remaining-27`, group e, round 3, position 1.
Disposition: **repaired**. Source status: **verified**.

## Inspected evidence and exact issue

Read the current definition and all five originally declared dependencies in
`items/`, its A/B pages, batch-14 manifest, coverage entry and own proof contract,
the group-e context/conventions, Alpha's item adjudication, the relevant reader
and refuter limitations, and the owner prerequisite correction in
`research/phase-2-remaining-27-escalation-sol-2b-e-cluster.md`.
The rendered Step-7 bundle contains no item blocks. No separate item risk row
was found in the audit manifest; the contract boundaries and risks below were
checked directly rather than inferred from past approvals.

The judge ledger contains an initial topology rejection and a later Terra
acceptance (2026-09-19T18:39:00.339Z), not a final mathematical rejection of
these current bytes. The subsequent licensed owner correction removes external
transitivity. Its new interface needs independent review because the published
`thm-fraenkel-mostowski-permutation-model` states a transitive-ground theorem.
It does not directly imply the arbitrary-internal-model conclusion.

## Source verification

- https://arxiv.org/pdf/2001.06513 — read Section 2's construction, printed p. 2,
  and the opening of §2.2, p. 3. Corson uses a ZFA+AC ground with countably
  infinite atoms, an independently ordered rational metric structure, all
  order-and-metric automorphisms and finite supports. The metric is an HS
  object. No metric/order topology agreement is required.
- https://www.repository.cam.ac.uk/bitstream/1810/253759/1/thesis.pdf — read
  §2.1, printed pp. 16–20, Definitions 2.1–2.9 and Theorem 2.5. Its setup
  permits a model of ZFA+AC without an external transitivity premise;
  hereditary symmetry gives a ZFA interpretation with unchanged pure kernel.
  The source states the general model theorem, rather than proving the full
  axiom verification there. The local verification below was independently
  checked, not claimed to have been read as a proof in that source.

## Mathematical basis and bounded repair

The normality calculation is exact: finite support intersections use unions,
and conjugation sends fix(e) to fix(g[e]). The action and HS predicate are
constructed by rank recursion *inside* M. Internal induction makes HS
membership-closed and permutation-invariant. The new local argument checks
Pairing, Union, Power Set, Separation and Replacement. In particular, for each
fixed formula relativized to HS, its invariant unique-value relation gives an
M-set range whose support is the finite union of the domain and parameter
supports. Every range member is HS. Power Set is P^M(x) restricted to HS,
formed by M-Separation and supported by a support of x. Foundation and
Extensionality restrict by membership closure; Infinity and Empty Set are pure.
All atoms and the atom set survive. Pure descendants are unchanged, hence so
is the pure kernel. This uses no induction on external membership and applies
even when M is externally ill-founded.

The definition now explicitly assumes an internally countably infinite full
atom set, equips it with the structure through an internal enumeration, and
registers `def-axiom-of-choice`. Ambient AC licenses the homogeneous structure
construction, with no claim of AC in HS. The metric/order relation graphs have
empty support; their tuples and every descendant have finite atom support or
are pure. Thus their membership in HS is justified hereditarily, not merely
by symmetry. Rational values lie in the shared pure reals, so the inherited
metric axioms have the same interpretation. Countability and order type are
asserted in M, not in HS. The independent order imposes no topological relation
on the metric.

The published FM theorem is retained only for its transitive-ground special
case. Its narrower premise is not itself a published mathematical defect;
this was a consumer citation mismatch. No published edit or new lemma is
needed. The existing topology repair is upheld. Other Corson results, BPI,
nonmetacompactness and transfer proofs are outside this terminal decision.

Updated only this item's manifest and own boundary entries in batch/unified
contracts, plus the owning batch-14 consumer record prescribed by
`briefs/tasks/frontier-dependency-ledger.md`. No new same-run cross-batch item
edge arises. Refreshed the unified frontier ledger through its tool.

## Validation and continuity

Selected batch and unified strict proof-contract checks pass (1 item each,
zero errors/warnings). An initial boundary anchor failure was corrected by
explicitly locating its evidence in the Definition. Rendercheck passes with
real KaTeX/YAML parsing; prosecheck passes with zero errors/warnings; targeted
diff whitespace check passes. Definition proof precheck is not applicable.
Queue status before recording: both positions unrecorded, no stale predecessor.
No independent judge verdict or pass stamp was created.

No unresolved obligation for this item. Next action: record these repaired
bytes through the terminal tool, then and only then inspect position 2.

## Dispatch recovery verification

On recovery the queue already contained a current repaired receipt for position
1. Independently reread the current definition, all six declared dependencies,
A/B page context, own batch manifest/contract, Alpha adjudication and owner
correction, and the original rejection and Terra acceptance. Read the cited
Corson §2 and Kleppmann §2.1 sources afresh. The internal recursion and
formula-by-formula invariant Separation/Replacement argument above remains
valid; no external well-founded induction or AC inside HS is used. The audit
manifest's old order-topology edge is superseded by the current manifest and
explicitly removed topological compatibility claim. No new mathematical review
wave or reopening of the settled mathematical conclusion is needed.

Corrected only the malformed `[[def-metric-space, def-axiom-of-choice]]`
citation to two links to the already declared dependencies. The owning batch-14
consumer record already documents this dependency repair and its lack of new
same-run cross-batch edges. Selected strict batch contract, rendercheck and
prosecheck each pass with zero errors/warnings on the corrected bytes.
No published finding or supplier edit arises. Retain disposition repaired.
Next: refresh the position-1 receipt, then reseal position 2 in queue order.

Recovery completed: terminal recorder accepted both repaired receipts in order;
final queue-status reports both current, pending 0 of 2. Repository depcheck
reports OK (no cycles, all references resolve, no draft items on published
pages), with existing citation warnings. Both owning consumer-batch records
were updated and the unified frontier record refreshed. No remaining action
in this dispatch; no further judgment or pass stamp was created.
