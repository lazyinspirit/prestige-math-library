# Current published-unaudited evidence map — 2026-09-26

This is a read-only reconciliation of current proved-here published items with
bounded audit evidence. The machine-readable companion
`frontier-35-ten-categories-published-unaudited-evidence-map-20260926.jsonl`
has one exact ID, complete-file SHA-256, status, cohort, evidence path and hash
binding per item. No item, plan, ledger or verification field was written for
this map, and it is not a Step-3 gate certificate.

Two strict `node tools/depcheck.mjs --json` snapshots around this map each
reported **355 `published-unaudited`** proved-here items, **zero
`published-unchecked`** recorded items, and one separate braid
`link-unresolved`. At the final hash join the map had 355 unique IDs, no
missing or extra diagnostic IDs, and no SHA-256 mismatch against any current
item file. The entries partition as follows:

| Cohort | Current IDs | Positive bounded item/interface reads | Defect-focused A-P, proof pending |
| --- | ---: | ---: | ---: |
| Selected-manifest published ancestors | 39 | 39 | 0 |
| Outside shards 01–11 | 275 | 273 | 2 |
| Outside shard 12 | 13 | 13 | 0 |
| Special cases and post-repair follow-ups outside the work orders | 28 | 25 | 3 |
| **Total** | **355** | **350** | **5** |

Of the 39 selected ancestors, 34 unchanged queue hashes have bounded local
reads in `frontier-35-ten-categories-selected-published-ancestor-audit-20260926.md`
and the queue supplies their exact matching hash binding. Two definitions have
separate same-hash owner interface reads, and three repaired prerequisites
have same-hash independent owner rereads. The shard verdict/independent records
bind each of the 273 positive shard01–11 proofs to current bytes; the changed
classical Erdős–Hajnal parameter example uses its later four-consumer reread.
The shard12 note binds all 13 proofs and the three later UCT/Cayley-tree
consumer repairs. The 25 positive special items are bound to the listed
current-hash follow-up, source, or independent-receipt records. The two
earlier shard01 `with-ledger-gap` proof reads now have explicit no-repair-needed
rows in the canonical published ledger. Four earlier downstream-caveat items
have separate repaired-consumer follow-up paths in their map rows.

The five **pending A-P** subjects are:

| ID | Current SHA-256 | Defect evidence |
| --- | --- | --- |
| `thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect` | `3d6c330ef67ed5eadefe9cff14d1d3fc93b6f75663495676bd11143ba42a8b22` | Bull-free blocker audit: unproved local odd-hole/antihole perfection criterion. |
| `thm-basic-bull-free-graphs-are-two-narrow` | `45915d4f72f0a732aec4b3e183b2126a86410037687e47e2d6adf5a99f7aa5ac` | Same inherited bull-free perfection debt. |
| `thm-bull-free-graphs-are-two-narrow` | `429ae63ee1f7327e5b794e150e7003f2fa7f6de3cf9d4a84a398aa65bf1dc4b1` | Same inherited bull-free perfection debt. |
| `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter` | `57a6cfc83a021cf60a0f7856cb6e71c8fa2d916dd6c4acd7f5b5dff3748a0a41` | Same inherited bull-free perfection debt; its exponent arithmetic alone is sound. |
| `thm-erdos-hajnal-pach-pure-pair-theorem` | `6c3d1697af1586aea53dc9f47df43f39cc5073132a3da9db7692a7d3ed0f7d12` | EH–Pach owner deferral: Fact F1 imports the whole target theorem without a local proof. |

The EH–Pach owner audit was originally bound to raw SHA-256
`3fcdc2b135157279316072b1c8a2ad04f4f27597968acf93230588b3581a02ee`.
The owner subsequently replaced an obsolete judge-pass field with explicit
`verification.review_pending`. Reconstructing the prior published bytes from
HEAD reproduces that old hash exactly; the entire Statement/Facts/Proof body
is byte-identical to the current file. Its A-P mathematical disposition thus
still applies at the new raw hash, while no favorable proof verdict is implied.

The source verdict prose for the Euclidean Ascoli corollary and Jacobson
radical definition names each result by description and gives its exact
current hash without spelling out its ID in the same passage. The JSONL map
explicitly binds those unique current file hashes to the exact IDs; these are
identity bridges, not missing mathematical rereads. Every other positive row
has either a same-record ID/hash verdict or the selected-ancestor queue hash
plus the audit's explicit unchanged-byte check. At this observed snapshot
there is **no missing current-hash evidence row**. Any later item edit or new
depcheck subject requires a refreshed join and, for content changes, an
appropriate new mathematical read before certification. The separate braid
link error remains outside this audit map.
