# U-P300 impartial published-item scan

Read CLAUDE.md and README.md fully. Follow this owner-requested scan policy
where it differs from earlier repair work. Read your numbered group in
`research/up300-sol-scan-assignments.json`: exactly 100 items, in listed order.
No extra agents. Scan ONE item at a time and record its disposition before
starting the next. Do not repair any item or change shared plan/prose/ledger,
workflow files, publication state or verification stamps.

Read the entire current item, its actual used dependency contracts, and the
relevant supplier proofs when needed to judge adequacy. Check the argument,
hypotheses, quantifiers, definitions, boundary cases and implicit/unjustified
uses, not only declared links. The old U-P label and publication/judge stamps
are not verdicts. Historical ledger concerns are leads to investigate, not
facts to adopt. Do not infer an item defect from an unrelated item sharing a
prerequisite page. False-statement items need a correct refutation, not a true
headline. Honest non-load-bearing recorded remarks are not automatically defects.

For unfamiliar or uncertain mathematics, search the web and read the full
relevant argument from authoritative sources: original papers, author/university
notes, or references such as Stacks. Search snippets and an inaccessible URL
do not count. Record the URL and exact sections/pages actually read. Resolve
uncertainty before a verdict; inability to fetch a source alone is not a
confirmed mathematical defect. Escalate uncertainty to the parent while
continuing to investigate that item, rather than inventing a binary verdict.

Only these completed dispositions are allowed:

- `clear`: free of defects within this item scan and its used dependency
  interfaces. An implicit but correct use of an already PUBLISHED adequate
  result is clear under the owner's rule, even if its dependency metadata is
  incomplete. Record the exact implicit supplier and verification. Do not
  call it repaired. Do not claim independent certification of every transitive
  proof or of unrelated content.
- `U-C`: unaudited and confirmed defective, meaning repair audit remains
  pending. This includes every demonstrated mathematical defect, unjustified
  load-bearing premise, and unmet prerequisite requiring Phase 3, even when
  its future Phase-2 supplier is already scoped. Planned or drafted is not
  published. Name the exact defect and location; separate mathematical
  invalidity from dependency incompleteness. Do not put scan findings in A-P.

Assume AC as authorized. A correct implicit use of available published AC
is not itself a defect in this scan; a false claim of choice-freedom or an
inadequate choice principle is substantive. Never use Recorded, Not Proved
Here as proof supply. Do not waive an actual cycle or unavailable premise
because a label or source states the conclusion.

For U-C, identify exact already-published or planned suppliers and their
availability, the relevant Phase-2 A-page/prose location where found, and a
concise repair strategy. If required machinery is absent from Phase 2, report
the precise missing obligation to the parent; do not edit shared scope yourself.
Neither a metadata-only missing link to a correct published supplier nor
mere supplier-page proximity is a defect under this owner's criterion.

Write only `research/up300-sol-agent-N.json` for your N directly. Initialize it as
{"agent":N,"results":[]}. After EACH item use apply_patch to append one object:

    {"id":"canonical-id","disposition":"clear or U-C",
     "sha256":"hash of scanned current item bytes",
     "scope":"what was checked; any unexamined portions after a confirmed defect",
     "findings":["exact location, argument and evidence"],
     "published_dependencies_checked":["IDs; actual clauses where useful"],
     "implicit_dependencies":["ID, mathematical use and verified availability"],
     "phase2_suppliers":["exact ID, A home, state, adequacy/remaining scope"],
     "repair_strategy":"for U-C; empty when clear",
     "source_reads":[{"url":"...","locator":"full passage read"}],
     "limitations":"bounded scan, not whole-library certification"}

After each append, validate your JSON and run
`node research/up300-sync-ledger.mjs --apply`. This authorized helper uses an
exclusive lock and apply_patch to merge completed, byte-matching results into
the canonical ledger and update counts. It makes no mathematical verdicts.
Do not edit the ledger by hand. If the helper reports malformed JSON or changed
item bytes, resolve your own receipt or notify the parent; never suppress the
check. The helper refuses conflicting A-R/A-P moves for manual reconciliation.

Do not prefill verdicts, classify by string matching, or claim scans for
unread items. A script may organize evidence but cannot supply a mathematical
verdict. Check bytes before recording; if another session changed them,
reread affected text. After each result notify the parent with ID, disposition
and a short reason. The locked helper serializes findings into the existing
canonical ledger with one classification row per published item; the parent
resolves conflicts, uncertainty and missing Phase-2 scope.
Checkpoint clearly before compaction. Finish all 100; end with exact totals.
