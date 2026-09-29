# Outside edge slice cross-check

Compared the 29 rows in `research/frontier-36-complete-5b-verdicts.jsonl` with the independently reviewed edge slice `research/frontier-36-complete-5b-outside-edges-0-139.jsonl` and current item files.

- Of 21 live `edge` rows, 8 overlap the slice (manifest indices 0, 9, 24, 48, 63, 64, 65, and 125). All eight are `accurate` in both records, and both recorded item hashes match the current files. The other 13 edge rows are outside this slice; their carrier hashes also match current files.
- The 6 live `forward` rows have current item, target, and evidence hashes. For the 2 live `item` rows, `subject_sha256` is the cross-group carrier hash, not the raw item hash. Row 9 for `thm-proper-holomorphic-map-riemann-surfaces-has-degree` matches its current carrier (`e82086bbf8f618d8c973c6ec94c1cd92de59ced0a6e315d9d9b5d1aaf7539062`). Row 10 for `rem-proj-does-not-recover-graded-ring-literally` is stale: it records `fbdb55fbb5a0ecc9dae782042646f8be02f2756cd4535df4be75e87bf98aef6f`, while the current carrier is `d3332ee5d57df34c81a3322274ffca86facb12fbea48ee41c11135a76d4b79df` after the contract-boundary refresh.
- The independent slice’s edge 5 (`cex-h0-not-euler-characteristic-before-serre-vanishing` → `def-coherent-module-scheme`) is `needs-repair` and is not among the live edge rows, so it has no live edge disposition to compare.

No overlapping edge verdict or edge carrier hash is inconsistent. The only stale Step 5b carrier hash is the row 10 item verdict above.
