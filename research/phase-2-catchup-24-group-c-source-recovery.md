# Group c source recovery

Root, 2026-09-09, after the final worker's DNS-only failure.

The actual current `url-sweep` over batch5/6/7 coverage, with a 20-second
timeout, returned **18/18 live, zero failed or suspect URLs**. Output:
`research/phase-2-catchup-24-group-c-source-liveness-20260909.json` (exact
copy of `/tmp/phase2-root-c-live-20260909.json`, SHA256
`b5f955c7eedf43c68ebc03ed422e6ec5a9e54bb70e67368a4c84e4c5ee52e7a9`). Using that exact liveness file,
`source-backing --require-verified` returned **47/47 authored results backed**
across all three coverage files. No fetch stamp, source drop or passing
liveness entry was fabricated. This resolves the worker's environmental
source-backing failure, not its unfinished mathematical judgment.

The canonical `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` already
has all five current published/live dependencies, including left-module
flatness detection and the left-variable Tor LES. Root verified this exact
array after the final report; that reported metadata mismatch is no longer
current. Six Tor result destinations remain under reconciliation in
`phase-2-catchup-24-tor-deferred-destinations.md`; no acceptance is claimed.

Fresh independent terminal decisions are still required. The original
worker report remains evidence of what it actually checked and failed.
