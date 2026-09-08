# Final adjudication — group e, queue position 1

Run: phase-2-wave-1. Item: `ex-complex-mollification-by-components`.
Disposition: **repaired**. Source status: **familiar**.

## Independent evidence and decision

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the frozen FA queue,
the current item and all seven original direct dependencies in full, and the
additional published simple-integral agreement proposition in full. Read the
A/B pages `complex-lp-spaces-and-test-function-conventions` and its examples
companion, batch-4 manifest entry, coverage entries (Teschl 10.18 averaging
clause and the original two-step example), item proof contract including its
boundary and risk records, batch-4 reader and refuter reports, group-e Step-8
context conventions and Sol report. Inspected both exact Terra rejection rows
in `research/phase-2-wave-1-judge.jsonl` and the original Sol adjudication in
`research/phase-2-wave-1-judge-adjudications.jsonl`.

The original rejection correctly identified an unsupported attribution of
pointwise domination to the quotient-norm theorem. Sol's addition of integral
monotonicity and the simple-integral definition supplies the intended estimate.
The final Terra rejection (2026-09-08T16:58:01.249Z, context
`27e08e6aea48c5ff12599cc0da6aa3becddcb847a9525c1a3a353b139b45c0b6`)
correctly objects to F1's phrase “preserve the compact-support bound.” The
supplier's Statement promises compact output for compact input, not preservation
of the original support interval. Although step 1.1 already proves the correct
expanded bound independently, the cited fact should not overstate its supplier.
I replaced that phrase with “send compactly supported inputs to compactly
supported outputs.” No supplier mathematics was changed.

I also made explicit the directly required bridge between the simple integral
and the nonnegative Lebesgue integral in F6, citing the existing published
`prop-the-nonnegative-integral-agrees-with-the-simple-integral`. This removes
any ambiguity in the exact interfaces used by Sol's repair. Added that dependency
to the item and its batch-4 manifest, and its exact Statement quotation and use
in step 2.1 to both batch and merged item contracts. No new lemma, prerequisite
item edit, page change, or group-scope expansion was needed.

## Mathematical verification

The mathematics is familiar elementary Lebesgue integration and mollification;
no uncertainty required external verification, and no external source was
consulted or claimed verified. The local canonical supplier statements, rather
than the item's bibliography, are the source evidence for this decision.

For fixed x, membership of x-t in [0,1] and [1,2] gives respectively the
intervals [x-1,x] and [x-2,x-1]. Component integration gives the displayed
formula, with no sign reversal. The input is measurable and bounded by sqrt(2)
on [0,2], hence integrable. F1 applies with n=1 and the explicitly assumed
countable choice; its real mass-one smooth kernel has the required hypotheses.
The integrals vanish outside [-epsilon,2+epsilon], a closed interval, so the
ordinary closed support lies there. This bound follows from the integrands,
not from an assertion that convolution leaves support unchanged.

Outside the three closed epsilon-neighborhoods of 0,1,2 the kernel samples
only one constant region. Unit mass therefore reproduces f there. Each real
and imaginary component lies in [0,1] both before and after convolution,
including f(1)=1+i. Thus the error modulus is at most sqrt(2), hence 2,
everywhere. F3 gives length 2 epsilon for each neighborhood and F4 gives
mu(U)<=6 epsilon. F5 gives the inequality between nonnegative integrals;
the two explicit F6 suppliers give integral(2^p 1_U)=2^p mu(U). F2 identifies
the resulting p-functional with the quotient norm. Taking p-th roots proves
the exact stated bound, including p=1, and convergence for every fixed finite p.
No symmetry of rho is used.

For a continuous complex h with essential error below 1/2, the infimum
convention permits a single essential-bound witness a<1/2. On either open
one-sided interval at zero, continuity upgrades the a.e. bound to an everywhere
bound: a strict failure would persist on an open interval of positive F3
measure. Taking limits gives |h(0)|<=a and |h(0)-1|<=a, contradicting the
complex triangle inequality. Unbounded h has infinite essential error and
causes no exception. The null endpoint values do not affect this argument.
Countable choice is inherited explicitly from F1/F3; no arbitrary-index choice
or general infinity-norm approximation is asserted. These conventions agree
with both page summaries and the surrounding complex Lp definition.

## Dependency bookkeeping and checks

The final direct dependencies are the mollification interface, quotient-norm
theorem, countable-choice definition, box-measure theorem, measure subadditivity,
nonnegative-integral monotonicity, simple-integral definition, and the added
simple/nonnegative-integral agreement proposition (exact IDs are in item deps).
All external-to-batch suppliers are already published; both run-local suppliers
belong to batch 4. Following `briefs/tasks/frontier-dependency-ledger.md`,
atomically reconciled the owning consumer-batch input
`research/phase-2-wave-1-batch-4.cross-batch-dependencies.json` to the correct
empty array and ran the prescribed refresh successfully. No fictitious
same-frontier edge was introduced for a published supplier.

- Focused precheck: 1 checked, 0 failing.
- Focused rendercheck: 1 file, all YAML and math passed.
- Strict batch-4 proof contract restricted to this item: 0 errors, 0 warnings.
- Dependency check: exit 0; no cycles, unresolved references, or draft items on
  published pages; 473 existing repository warnings.
- Frontier dependency refresh: successful and deduplicated.

No mathematical obligation remains for this queued item. Next action: record
these exact final bytes with the prescribed terminal recorder, disposition
repaired and source-status familiar. This decision is terminal closure evidence,
not an independent judge pass stamp, and no third consumer judgment is requested.
