# Frontier 32 — targeted Step-3 repair for batch 13

You own only batch 13's scaffold artifacts:
`research/frontier-32-batch-13.pages.json`, its coverage JSON, and its notes.
Do not edit published items, plan structure, library pages, another batch, or
workflow state.

The current closure correctly rejects an attempt to derive the universal
`def-structural-comb-partition-hypothesis` from Huang–Ju–Zhou Lemma 6.4:
Lemma 6.4 assumes an outside vertex complete to all blocks and anticomplete to
all teeth. Preserve that qualification.

Repair the route without changing the published interface. The primary paper's
proof of Lemma 5.1 starts with the arbitrary special-vertex comb required by
property (*) (arXiv:2606.06258v2, lines 881–894) and thereafter uses only the
partition for that comb. Therefore scaffold and source-back a same-page theorem
that re-proves the criterion under the exact special-vertex-local partition
hypothesis, reusing the already-published layer lemmas and constants. This is a
proof extracted from the source proof, not a claim that the printed Lemma 5.1
has the weaker statement.

Then add the explicit co-E application needed downstream: combine the
special-vertex criterion, the batch's `{H_5, co-E}` Erdős–Hajnal lemma, and its
exact special-vertex Lemma-6.4 structural theorem to conclude that the singleton
family `{E}` has property (*). Keep the universal published structural criterion
available as background, but do not claim Lemma 6.4 establishes its hypothesis.

Give both new items complete dependency arrays and faithful coverage rows with
exact locators. Check that the resulting manifest remains dependency-closed and
that every added included/inline row is source-backed. Run the batch coverage
checklist, whole-run manifest-deps, whole-run manifest-only content policy,
`validate-plan`, and source-fetch check. Append a concise repair record to the
batch notes.
