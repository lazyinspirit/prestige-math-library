# FA terminal evidence — E zero

Run: `phase-2-nine-step-25`; group: `c`; queue position: 1 of 1.
Consumer: `prop-e-zero-is-the-associated-graded-complex`.
Disposition: `repaired`; source verification: `verified`.

## Independent review and exact scope

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the exact FA queue,
and briefs/tasks/frontier-dependency-ledger.md. Reviewed the current consumer
statement, facts and complete proof; all four direct dependency statements and
proofs/definitions; the filtered-chain-complex and associated-graded definitions,
the graded-quotients lemma, and the complete local subquotient/lifting calculus.
Read both spectral-sequences A/B pages, the two relevant batch-6 manifest and
proof-contract entries (including boundaries and risk reviews), and the relevant
batch-6 coverage entries. Both items already belong to group c and batch 6;
the supplier precedes the consumer on the existing A page. The queue and current
.autopilot/phase-2-nine-step-25 item closure identify the active handoff; no
historical RESUME claim was used. Repository HEAD inspected: df6550aff.

The initial Terra rejection is research/phase-2-nine-step-25-judge.jsonl,
2026-09-10T06:41:59.401Z, context
ff1fa9f5a41501849268eea26ddac9e04ece3c2b24463dd598355ee85548fecf.
The exact fatal adjudication is in the corresponding judge-adjudications.jsonl,
2026-09-10T07:32:00.000Z, consumer guard
86717ec2a086305ba2802808c52bc63e20585fe06aff8d84d03ff004c0bc642c.
Read Alpha's item entry in research/phase-2-nine-step-25-alpha-step7-c.md:
it added the page differential formula and quotient uniqueness dependency.
The one Terra rejudge rejected at 2026-09-10T08:19:32.865Z, context
900beb52aff9f7a63d1999aac31cb573548c93bc25a4d9ba6beabfea4d55532c,
judge item hash de0b421b44a7e83c0950452d1a4862c7f9ac6e251fd405f16ebcb634e372d0d9.
Read the matching item-local Step-7 closure. It objects that F3 still identifies
an unspecified existing differential with the canonical quotient differential.

I uphold that interface objection. The full supplier proof does construct the
right map, but its old statement merely asserted existence and square zero.
The quotient lemma alone cannot identify an unspecified map with that map.
The mathematical construction itself needs no replacement and no new lemma.

## Repair and complete mathematical basis

The only edited dependency is the consumer's existing direct run-local supplier
`prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`.
Its statement now specifies the canonical differential by
`d^0_{p,q} pi_{p,n} = pi_{p,n-1} (d_n restricted to F_p C_n)` and names the
resulting family as the associated graded complex. The proof already establishes
precisely this: F_(p-1)C is a subcomplex of F_p C; the composite of its restricted
differential and target quotient kills F_(p-1)C_n; cokernel universality gives
a unique induced map. Composing two induced maps with pi gives zero because
d squared is zero. Since pi is epic, the induced differential squares to zero.
The filtration index stays p and n falls by one, so q falls by one.

The consumer's F3 now cites that explicit supplier statement. F1 gives the same
chosen quotient F_p C_n/F_(p-1)C_n at E^0. F2 supplies the local representative
rule for the page differential at r=0, equivalently its composite with the
quotient projection. Both differentials therefore have the same composite;
epic cancellation identifies them. This works for arbitrary abelian categories:
local representatives mean the established epic-local calculus, not global
elements or an assumed module embedding. It uses no Choice, boundedness,
exhaustiveness, separatedness, convergence, or infinite direct sum. Zero or equal
adjacent filtration pieces cause no exception: the same cokernel identities and
uniqueness apply. This preserves the page's increasing homological convention
and fixes only the initial-page identification.

Updated the batch-6 manifest supplier statement/strategy, the consumer's exact
supplier citation in its proof contract, and both affected risk notes. Preserved
prior independent review records. The existing supplier proof and derivations
already prove the strengthened interface; no page order, coverage obligation,
scope group, or by_item addition is needed. No indirect dependency, other-group
item, or published item was edited.

The exact version-1 prerequisite licence was appended to
research/phase-2-nine-step-25-step7-owner-prerequisite-repairs.jsonl with
`authorized_by: final-adjudicator`, group c, and this consumer as found_via.
Supplier pre-guard (also matching pre-step7 baseline prefix):
83d1f006140119bde9b33ce7ff4a22280fb90d201b90fbae5625aad3c8c06f86.
Supplier post-guard:
95e425282ee8d0faf435a2286511d5c87664077d7fc27dc1034bbe712f0d0d14.

## Authoritative source verification

- https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
  Weibel, Chapter 5, section 5.4, pp.131–134, especially Construction Theorem
  5.4.1 and Construction 5.4.6 through Lemma 5.4.7 and the completion of the
  construction. Read the relevant construction and argument. This supplies the
  increasing chain-filtration quotient E^0 and the differential induced from C;
  it supports the original homological indexing used here.
- https://stacks.math.columbia.edu/tag/012K
  Stacks Project section 12.24, introduction and Lemma 12.24.2 with its complete
  proof (through the paragraph following the cokernel formula). It explicitly
  identifies the initial differential with the associated graded of d and gives
  the construction in an arbitrary abelian category via bigraded objects, without
  the introductory simplifying direct-sum hypothesis. Its decreasing
  cohomological convention translates by K^m=C_(-m), F^a K^m=F_(-a) C_(-m),
  and (a,b)=(-p,-q); degree (0,1) becomes (0,-1). The quotient uniqueness
  argument is proved locally above, not inferred from an existence statement.

The existing Sharifi URL failed its initial browser retrieval with an internal
error. It was not read or used as evidence in this review. A successful
alternative authoritative source (Stacks) resolved verification; no claim of
reading Sharifi or needing it for the repair is made.

## Focused validation and dependency ledger

- Targeted precheck on the consumer and supplier: 2 checked, 0 failing.
- Strict batch-6 proof-contract check restricted to these two IDs: final result
  0 errors, 0 warnings, 2/2 checked. The first invocation caught a single literal
  display-delimiter mismatch in the new citation; synchronized the contract and
  manifest to the actual statement and reran successfully.
- Targeted rendercheck on the two item files: passed renderer YAML, wikilinks,
  delimiters and real KaTeX checks.
- Revalidated and atomically rewrote the owning batch input
  research/phase-2-nine-step-25-batch-6.cross-batch-dependencies.json as [].
  The repaired edge is within batch 6, and the quotient-descent supplier is
  published outside this run: neither is a same-frontier cross-batch edge.
  Inserting either into that ledger would fabricate an orphan review. Ran
  `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`:
  refreshed and deduplicated successfully. No repair scope was expanded.

No mathematical obligation remains for this queued consumer. Next action:
record the repaired terminal resolution with this evidence, then verify the
exact prerequisite licence against the guard. No third consumer judgment and
no pass stamp are authorized or created by this review.

## Terminal completion

The prescribed recorder succeeded with disposition `repaired` and source status
`verified`, recording current context
9f51514a0f340b0912c15703d296b376b1df315f82777bcebc7536be53b999a8.
After recording, ran the Step-7 guard against pre-step7 with the current scope,
judge/adjudication ledgers, terminal resolutions, published-repair ledger, and
owner-prerequisite-repair ledger. Both affected IDs are recognized as changed;
there are no errors or warnings naming either. The whole-run guard reports 12
errors elsewhere, which remain outside this assignment; no whole-run pass is
claimed. The exact FA prerequisite licence is therefore accepted for this repair.
The queue is complete. The engine may resume the owning Alpha; no consumer
rejudge was invoked and no judge verdict or stamp was written.
