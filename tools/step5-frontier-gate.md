# Mathematical Step 5 frontier gate adapter

`step5-frontier-gate.mjs` scopes the Step 5.8/7.10 mathematical gate battery
to the validated frozen original frontier. Its item-ID grammar recognizes all
canonical mathematical prefixes in [SCHEMA.md](../SCHEMA.md), including `op-`
for an `open-problem`. As required by the schema and current frontier item
selectors, ASCII letters and digits are permitted in each hyphen-separated
segment after the lowercase kind prefix. Existing mixed-case mathematical
segments are case-sensitive and are never normalized. The same grammar
identifies item-file diagnostics;
recognizing this prefix does not classify an open problem as a proved result
or permit it as a logical supplier. Its formulation and status retain the
schema's separate source-review requirements.

Frontier integrity and run identity are checked before gate construction.
Projection uses detector-owned subjects and known item IDs: frontier findings
remain blocking, while recognized outside findings are recorded as excluded,
not passed. Unsupported gates and global, unknown, malformed, runtime or
stderr diagnostics retain the existing fail-closed behavior. Raw detector
output and exit codes remain available separately. Adding the canonical `op-`
prefix changes neither frontier membership nor any of these projection guards.
