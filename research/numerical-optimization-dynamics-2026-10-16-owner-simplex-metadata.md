# Simplex metadata blocker: guarded proposal

Batch 26 owns `items/thm-revised-simplex-primal-pivot-objective-ray-optimality.md`. The state records its first attempt without an end time, and dispatch PID 598148 was observed running the beta-26 task. The active carrier was not edited.

The source `deps` block begins with `- -`, which is not an ID string, and repeats its two KKT suppliers. The batch-26 manifest already lists the correct four unique dependencies: standard-form LP definition, basis dictionary, inequality/KKT geometry definition, and convex-KKT sufficiency theorem. Replace only the source deps block with these four IDs after author drain and root authorization, or let the active author make the correction. The exact old/new blocks and guards are in the JSON companion. Retain all logical suppliers and full method/proof scope.

Source dependency_level is currently 3 while manifest says 2; no level change is proposed without authoritative current supplier evaluation. This repair concerns only the malformed ID array and duplicate removal. If the author has already corrected the source, take no action. No tests, gates, hashes, stamps, proof-layout or commits were run, and no runtime files were modified.
