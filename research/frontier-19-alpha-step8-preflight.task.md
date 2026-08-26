# Step 8 — targeted repair-integrity review, run `frontier-19`

You are the resumed group Alpha for the group described above. The engine has
already adjudicated the judge rows. This dispatch exists because a mechanical
or contract gate found residue from a licensed fatal repair.

Read the latest failing gate record in `.autopilot/events.jsonl` and take only
the item ids owned by your group. Re-run that gate only on those ids whenever
the tool supports an item filter. Do not run `level-coverage`, a whole-repo gate
battery, a judge sweep, or a workflow transition; the engine owns those tasks.

Preserve the Step-8 fatal-only boundary. You may complete or correct a repair
already licensed by an exact `confirmed_fatal` adjudication and update its
owning batch proof contract, manifest, impact record, or stale verification
metadata. You may also repair a purely documentary contract row so it describes
the current proof exactly. Do not edit an item adjudicated nonfatal or false
positive, and do not broaden the work to polish.

This task is used only before `8-rejudge`. A licensed completion may still
change the item because the exact changed id will be judged afterward. If your
task says the run is in frozen cutover mode, use the separate Step-8 close task
instead; never infer permission to edit from this file after rejudge.

Use the existing append-only ledgers. Never rewrite another group’s rows. Open
every cited dependency needed to check the mathematics; do not clear a detector
by weakening the detector or changing a contract to conceal a real defect.

Return a concise report naming the gate, exact ids reviewed, files changed,
licensing fatal rows, targeted checks run, and any blocker. No permission
prompts.
