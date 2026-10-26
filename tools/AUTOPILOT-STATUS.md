# Status checks without overlapping scans

Both `tools/autopilot/bin/autopilot.mts status` and
`tools/physics-autopilot/bin/autopilot.mts status` use the shared
`tools/autopilot-status.mjs` admission control. The supported TypeScript runners
and direct loader invocations use the same path.

Only one CLI status computation can run at a time across math, physics and all
run namespaces in this checkout. The guard is acquired before loading either
executor or its stage graph. Other callers return immediately, without queuing
or starting another scan. Worker concurrency and controller scheduling are
independent of this slot.

A successful status report is cached for five seconds. Cache identity includes
the workflow entrypoint, command arguments, workspace, state directory, and shared
and run-local configuration stamps. Cached output names its computation time and
is an observation, never readiness or gate evidence. After the TTL, the next
uncontended caller recomputes from disk. During contention, an older cached report
is explicitly dated; otherwise the last controller report is labeled with its
file timestamp. If neither exists, the command reports that computation is in
progress and asks the caller to retry. An unavailable or failed recomputation is
never cached with a new successful timestamp.

The Linux/WSL implementation requires util-linux `flock` on `PATH`. Its kernel
lock is held for the computation's lifetime and is released on exit, kill, or
reboot. The persistent `.autopilot/status-computation.lock` file is intentional;
its existence does not indicate ownership, and it must not be deleted to recover
a dead process. Cache files are atomic `status-cache-*.json` replacements in each
run's state directory. If locking is unavailable, status fails closed with a
labeled fallback and exit code 2; it never launches an unguarded scan.

Contended checks exit successfully with their explicit observation/unavailable
message. Callers must not treat this diagnostic command's exit code or cached
text as transition authorization. The native controller retains its own current
coverage, readiness, writer and gate checks.

Focused regression coverage:

```bash
node --test tools/autopilot/test/status-single-flight.test.mjs
```

The tests cover 20 concurrent polls, sharing across workflows, cache expiration
and scope isolation, changed configuration, killed computations, missing locking,
failed-report caching, and both real CLI entrypoints.
