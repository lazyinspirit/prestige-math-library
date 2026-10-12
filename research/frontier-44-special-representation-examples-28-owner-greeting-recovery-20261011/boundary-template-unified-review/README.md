The helper builds research-only review artifacts. It never writes canonical items,
contracts, decisions, runtime state or gate results.

Run `node .../boundary-template-unified-review/build-review.mjs --screen` to refresh
the inventory diagnostic and virtual merged/source-overlay inputs. The copied native
pure module screens those inputs without invoking the boundary-audit CLI or a gate.

Run the helper with `--strict-review` only when all exact 912 assigned cases and
same-owner prospective bindings are supplied. It checks every canonical contract
raw guard and expected row/field before producing review batch copies. It refuses
missing case operations, remaining owner holds, source-hash mismatches, duplicate
or overlapping field operations and native review-reason reuse across three items.
Actual integration and actual same-owner source/case afterbinding remain root work.

Final owner successors are selected explicitly in `owner-final-packet-overrides.json`:
`packets` maps partition numbers to final packet paths; `row_supplements` contains
partition/path pairs and replaces only matching physical row pointers. Additional
`source_proposals` records contain id, path, proposal, before_raw_sha256,
after_raw_sha256, author and genuine evidence. `source_field_operations` contains
exact path/pointer/before/after guards with author/evidence. No future binding is
accepted merely because a requested hash was supplied: the genuine source file
must exist and match its sealed raw and guard hashes.

The prospective bodies currently come directly from the actual source-owner packets:
A's two proof-only repairs; B's cellular supplier and two Facts-only consumers;
the final formatted pyramid; and the empty tensor unit proof. Chain-source and
row successors must be explicitly selected when their actual author seals them.
No reviewer prose, prior review histories or mathematical counters are altered.
