# Second and final focused cycle: actual initial collection boundary

Root reports the actual first 5.1 native collection gate failed at 03:14:03 with
`Step 5 initial metadata history: wrong live initial collection boundary`, then
the run returned to an owner hold at 03:14:34. This research review does not
claim an independent native execution or revalidation of those reported times.

The faulty first-cycle code required live `paused:true` for 5.1 collection.
Actual native initial collection gates run unpaused after owner permission and
resume. The adapter already authenticates the earlier actual paused/drained
5.1 creation state/request separately. Requiring another pause at consumption
was an implementation error in my proposal.

The sole code replacement permits live drained `5.1-adjudicate` or drained
pre-dispatch `5.2-impact` when validating current collection inputs. It changes
only the live stage/pause condition: run identity, drained status, current
source/manifest equality, complete graph, original native107 handoffs, immutable
attempts, sole exact numeric label delta and no-impact guards remain intact.
The recorder still requires actual live paused/drained 5.1 and captures native
bytes itself; archived creation validation still requires paused/drained 5.1
with the genuine matching request. Historical reviews remain separate from
current coverage, with the explicit pending5.2 target and current review duty
unchanged. No source, manifest, receipt or native evidence needs rewriting.

`guarded-successor.json` provides one unique literal code replacement and the
targeted document replacement, complete exact current preimages and unapplied
successors. Root owns hashes, installation, fresh process reload, preparation
and ordinary native retry. No canonical edits, hashes, tests, gate commands,
native execution or runtime control were performed for this second cycle.
