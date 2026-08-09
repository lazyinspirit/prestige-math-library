# Wave 8 A8 follow-up — adjudicate one exact-final certifier refusal

You are a fresh Audit-Alpha follow-up for Wave 8 A8. Read the repository
instructions, complete durable Wave 8 record, `research/audit/wave8-A8.md`,
the current item, and the full independent result below. Do not ask for shell
or edit permission. Do not touch any item except
`cor-q-is-meager-and-not-g-delta`. Do not start A9 or any judge sweep.

The first A8 Alpha adjudicated all eight A7 rejections and confirmed exactly one
fatal row, licensing a minimal repair to this item. Its first repair deleted the
false unused L1 claim that every at-most-countable family has an N-indexed
presentation. The exact-final normalized hash after that edit was
`c96ab3f27d07d81e8b0d702d01867c4b868b7739d0e01647af8126cc95975324`.

The orchestrator then ran the staged current-text Terra certifier on the host.
Read the full evidence at:

- `research/audit/wave8-dispatch/certifier-a8-final-host-cor-q-is-meager-and-not-g-delta.result.json`
- `research/audit/wave8-dispatch/certifier-a8-final-host-cor-q-is-meager-and-not-g-delta.log`

It returned `REFUSED` against that exact hash. The named fatal finding is that
the first Remark still says claim 1 works in “any countable space.” That is
false: a nonempty countable discrete space has no nonempty nowhere-dense sets
and is not meager.

Adjudicate the refusal from current disk. If confirmed, make the smallest
same-item correction, such as retaining the exact explanation that claim 1 is
a listing argument together with the fact that real singletons are nowhere
dense, without the false generalization to arbitrary countable spaces. The
original `confirmed_fatal` A8 row already licenses edits to this item; no new
judge-adjudication row or additional item is licensed. Preserve the Statement
and proof unless current evidence requires otherwise.

Then refresh every affected hash-bound A8 record, contract/impact record if
needed, repair ledger, `wave8-A8.md`, and `wave8-alpha.md`; rerun the
`pre-a8` fatal-only guard and direct gates. Remove no additional dependency
unless the final text makes it genuinely unused. Stage a fresh, complete,
exact-final Terra certification task/index/runner. A prior refusal cannot be
reused as a pass. If sandbox transport fails, leave the non-overwriting host
command/task ready for the orchestrator. Do not write `verification.verified`
or `verification.judge` without exact-final independent evidence.

The targeted A8 paired-rejudge set must remain exactly:

- `cor-q-is-meager-and-not-g-delta`

Report any repeated-touch personal-audit obligation. No deletion, id change,
source change, page edit, sibling edit, consumer edit, or reading-order change
is authorized.
