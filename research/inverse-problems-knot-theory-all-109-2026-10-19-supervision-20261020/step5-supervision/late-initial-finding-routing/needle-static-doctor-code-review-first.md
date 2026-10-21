# Independent FIRST: static doctor restart edge

**PASS — no repair requested.**

The one-line production branch uses authenticated historical loading only for `ctx.doctor` descriptor inspection. Actual engine contexts do not set that flag, so pending native dispatch retains strict current validation and rejects redispatch after the base exists. No doctor, gate, context or coverage check is bypassed.

Independently ran the real-stage/core suite: **7/7 pass**. The new regression covers a collected base plus later consumer proof edits, verifies static inspection succeeds without mutation, and verifies ordinary dispatch still rejects.

Exact three-file bindings and limits are in the JSON. No actual restart, dispatch, source, receipt or runtime change was performed by this reviewer. Root may retry the normal controller start.
