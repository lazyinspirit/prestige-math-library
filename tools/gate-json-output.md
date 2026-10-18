# Complete piped gate reports and historical ordinary guard exclusions

Gate JSON is machine input. `runGate` transports complete stdout to the strict
frontier projector. The reporter may bound the human-facing event `output`, while
`rawOutput` and structured frontier diagnostics retain complete evidence. Never
parse an intentionally shortened display as if it were the original JSON or
turn an unreadable document into a pass.

Validators must let stdout/stderr drain after emitting a report. An immediate
`process.exit()` can truncate even a successful multi-megabyte JSON document in
a native pipe. Terminal report paths use `process.exitCode` with the identical
exit predicate. Finite-smoke's early read/shape errors return after emitting one
report, preserving original control flow; its self-test path remains separate.
Usage/runtime failures remain strict. No JSON parser or scope partition is relaxed.
The backpressure fixtures exercise complete success/advisory/error JSON from all
four formerly affected producers, including every final diagnostic and exit code.

The Step5 guard also honors the exact historical ordinary-published exclusion
contract already enforced by verifyWave/checkWorkflow. It revalidates that typed
record against current bytes and original authenticated publication/native
history. These baseline changes receive no new native review/audit license and
are counted separately from centralized native certification. No blanket
published skip is introduced. Unknown or later changed published items, invalid
receipts, forged exclusions and deletions still fail. Frozen scope, source/context
checks, prerequisites, ordinary consumer reviews and gates remain unchanged.
