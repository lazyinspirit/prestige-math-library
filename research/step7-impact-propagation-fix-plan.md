# Step 7 impact propagation repair

Owner authorization: fix the paused 19,412-item expansion caused by treating
all explanatory body links as transitive mathematical dependencies.

1. Separate declared load-bearing dependencies from reference candidates.
   Preserve transitive declared dependency discovery and direct reference
   examination, including aliases and published items. Reference-only edges
   terminate automatic propagation; a necessary repair or newly declared
   dependency restarts propagation from that item. Explicit worker discoveries
   remain mandatory review targets.
2. Bind review contexts to the same typed graph. Preserve completed evidence
   without pretending that stale reviews are current or manufacturing reviews.
   Legacy-context reuse must be justified by exact immutable evidence; otherwise
   requeue for genuine examination.
3. Add an engine-owned, guarded recovery for an interrupted, uncollected owner
   continuation. Retain its frozen tasks, reports and failed dispatch evidence;
   use fresh labels for corrected assignments. Never supersede successful work.
4. Run focused graph, context, continuation, certification and recovery tests,
   plus typechecking and a read-only comparison against this run's real graph.
5. Update normative documentation, commit only implementation/test/doc changes,
   recover the paused run, restart safely and verify parallel owner progress.

No mathematical item edits, blanket unaffected decisions, manual certification,
or changes to the original frontier are authorized by this implementation plan.

## Implementation verification

Implemented typed dependency/reference discovery, versioned review contexts and
evidence-bound legacy reuse, plus guarded continuation supersession. The live
read-only comparison found 10 pending examinations instead of 19,412, preserving
all 770 unique existing reviews and both explicitly reported consumers.
Graph/workflow/parallel-stage/shared-lock tests: 30 passed. Recovery safety,
immutability and interrupted-operation tests: 16 passed. Typecheck passed.
Live recovery and resumption follow the committed implementation.
