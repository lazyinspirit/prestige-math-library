# Literal-preserving diagnostic reprojection — Root review requested

The five saved group-4/6/7 failures and group-5 compact-support failure are
private harness defects, not production guard defects or invalid verification
transitions. Every stored presentation delta is deep-exact to the current
`originalPresentationChanges` output. Sphere and compact-support definitions
correctly use `precheck: n/a`; the other four use `pass`. The current after
verification objects have exactly the allowed `precheck` and `repair` keys.

Each affected private prepare script injected its review through the replacement
string argument of `String.replace`. That argument interprets `$$` as a single
literal dollar. Consequently it corrupted the declared presentation deltas
containing display-math delimiters before the unchanged checker compared them
with actual pin/current source bytes. All six failures contain such dollar
pairs. The broad `unreviewed delta/verification transition` diagnostic came
from the now-corrupted exact-delta comparison, not its verification predicates.

The smallest fix is the callback replacement form. Exactly one affected call
was repaired in each `group4/prepare.mjs`, `group5/prepare.mjs`,
`group6/prepare.mjs`, and `group7/prepare.mjs`; no production checker was changed.
The full prepares were not rerun, so their preserved historical reports, saved
entries and pending consumer decisions remain intact.

Fresh v2 diagnostics use the existing five saved entries plus the already
preserved group-5 `projection-def-compactly-supported-differential-form.json`.
That projection contained the compact-support entry excluded from its saved
passing-only entries file. No new scientific review or disposition was invented.
Only the authority-read expression is injected into the unchanged actual
production checker, using the callback helper; relative imports point to their
actual existing modules. Existing checker conditions, native repair receipt,
preimage, ownership, ledger, adjudication, proof-layout, current input and
consumer checks all execute. The transient hypothetical consumer dispositions
are explicitly labelled `unaffected`; saved proposals remain pending and this
is not Root adoption or a native gate result.

Actual results: **6/6 per-entry projections pass**. Every native published-repair
authentication is `ok: true`, and every stored/computed delta is deep-exact.
`six-entry-projections-v2.json` retains actual accepted hashes, exact inputs,
verification transitions, recorded proof-layout evidence, authentication and
production-checker/authority snapshot guards. `summary-v2.json` is concise.
The canonical authority and production checker hashes were unchanged through
this diagnostic. No source, pin, gate, control, owner receipt or authority was
written. Other unsupported presentation cases remain outside this resolution.

The one meaningful regression in `projection-literal.test.mjs` round-trips exact
JSON containing `$$`, `$&`, dollar-backtick, dollar-apostrophe, backslashes and
quotes; it demonstrates the old replacement differs, and requires exactly one
injection site. It passes (`literal-regression-v2.tap`). Fresh results use unique
v2 filenames with exclusive creation; no prior report was rewritten. Current
review hashes are in `review-inputs-v2.json`. No commit has been made.
