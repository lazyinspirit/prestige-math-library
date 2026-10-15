# Bounded concurrent item reads in Step5 inventory

readLibraryItems retains its complete item inventory and its existing frontmatter/id checks. When an enumerated file temporarily disappears or has incomplete frontmatter or a mismatched id, its local read is attempted at most six times, with waits of100,200,400,800,1600ms (at most3.1seconds). Other filesystem errors fail immediately. A persistent absent/malformed/misidentified file still fails; no row is skipped, excluded, certified or passed by this mechanism. Scope and supplier integrity policies are unchanged.

The returned raw hash, guard hash and statement hash are all derived from the same successful actual source string. Step5workflow hashes consumes row.guard_sha256 instead of reopening each path after the inventory pass. This closes the second open/read race and keeps identity and hashes tied to the same observed bytes.

This is bounded tolerance of local concurrent save windows, not an atomic whole-corpus snapshot or a proof-completeness assertion. Existing frozen-frontier, supplier, evidence, drift and full native validation checks remain required. Persistent corruption, scoped deletion, and changes after a snapshot still surface as genuine errors. The helper never writes source, controls foreign writers or fabricates evidence.
