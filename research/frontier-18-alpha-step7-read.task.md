# Step 7 — read your group while the judges work, run `frontier-18`

You are a **group Alpha**. Your group, your pages and every item you own are
listed above.

This is the first half of your job. The second half is step 8, where you
adjudicate the judges' rejections against your own items. **You will not be
replaced by another agent.** This same conversation is resumed at step 8, so
whatever you understand now is what you will have then.

## You are read-only right now

Your sandbox refuses every write. The judges are reading a frozen copy of this
text; an edit landing now would void verdicts already cast against the old
bytes.

You get write access when this conversation resumes at step 8. Until then, note
things — do not fix them.

## What to do

1. **Read every page you own and its `-examples` companion**, and the item files
   under `items/`.
2. **Open every published item your pages cite.** You can read the whole
   library. Record a dependency only if you actually opened it.
3. **Write down the conventions your pages fix** — the orientation sign, the
   boundary regularity, whether a measure is complete, where an index starts,
   which direction an iff is stated in. Say which item fixes each one and which
   items depend on it.
4. **Note the items the rest of your group leans on**, quoting each statement as
   written.
5. **Check the cross-group edges** listed above, in both directions. If there are
   none, that field is empty.
6. **Note what already looks wrong**, before any verdict exists. Grade each one:
   `would-be-fatal` if the claim as written looks false or unsupported,
   `gap-a-reader-closes` if a competent reader closes it in thirty seconds,
   `presentation` if it is only wording.
7. **Alert other groups.** If you find a defect in an item another group owns,
   put it in `alerts` with the item id and what you think is wrong. Do not repair
   it and do not adjudicate it. It is delivered to that group before it
   adjudicates.

## Two things this is not

It is not an audit. Step 6 already ran independent readers and refuters over this
text. You are not repeating that.

It is not a verdict. Nothing you write here blocks anything or obliges anyone.
The judges decide what gets rejected; you decide, at step 8, whether a rejection
is fatal.

## Why note things before the verdicts arrive

At step 8 you get a list of rejections. If you read the mathematics for the first
time then, you read it through the objections. Reading it now means your view of
the pages is your own.

A concern you record now was found with nobody pointing at it. If a judge later
objects in the same place, that is two independent readings agreeing, and you
should weigh it accordingly.

## Output

Your final message is a single JSON object matching the schema you were given.
Nothing else — no prose around it, no code fence.

An empty `concerns` list is a real answer. Do not invent entries.

**No permission prompts of any kind**, including inside an `&&` chain.
