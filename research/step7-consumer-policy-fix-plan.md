# Consumer policy fix plan — 2026-09-22

Latest owner clarification: frozen frontier membership is the Step 7 boundary.
Published items inside the frontier remain subject to its repair, adjudication,
rejudge and gates. Outside consumers do not enter those mechanisms.

1. Preserve the stopped engine and all mathematical/runtime evidence. Fix
   statement propagation roots independently of frontier eligibility: every
   actual Statement/Definition change propagates one direct hop; proof-only
   edits do not. Keep the original denominator frozen.
2. Keep outside maintenance in a separate durable queue and evidence protocol.
   Deduplicate supplier-interface events, assign disjoint lanes, and require
   concrete affected-use, necessity and minimal-edit evidence. Sound consumers
   remain unchanged. Exact edit reconstruction rejects unreported changes;
   it does not purport to prove mathematical necessity automatically.
3. Integrate that queue as separate maintenance work after frontier writers
   drain, before final stable certification. A changed maintenance statement
   propagates again; unchanged statements stop. Never feed outside targets
   into Step 7 repair/rejudge/adjudication/gates or reopen them for those checks.
4. Rewrite conflicting generated tasks and briefs. Retain three parallel
   owner lanes, source/uncertainty honesty and immutable historical evidence.
5. Test published and draft statement cascades, proof-only nonpropagation,
   necessary/minimal edit evidence, frontier membership boundaries, restart
   idempotence and all-repairs-before-certification. Run focused regressions
   and TypeScript checking; review diffs and commit only build files/docs.
6. Do not automatically resume the stopped historical wave. Report build/test
   results and any guarded recovery still required; never fabricate completion.
