# frontier-19 reader-10

## Edited batch content

- `items/lem-small-total-copy-expectation-forces-many-homogeneous-k-sets.md`
  Added the missing positive-vertex hypothesis on the forbidden family and rewrote the deletion step in terms of counted induced embeddings, so the lemma no longer fails on the `K_0` boundary.
- `items/lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets.md`
  Inserted the missing `u\ge n` branch and re-stratified the induction so the application of the maximum-degree hypothesis to `S=V(G)` is licensed.
- `items/thm-a-finite-family-with-the-erdos-hajnal-property-is-viral.md`
  Replaced the non-integer threshold `u=\delta n` by `u=\lceil\delta n\rceil`, propagated the resulting quantitative bounds, and made the small-copy expectation estimate explicit.
- `items/cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted.md`
  Replaced an invalid appeal from “the witness graph is `P_3`-free” to “`\{P_3\}` has the polynomial Rödl property” with the published three-vertex Erdős–Hajnal corollary plus the singleton equivalence theorem.
- `research/frontier-19-batch-10.proof-contracts.json`
  Updated the affected contracts, citation uses, derivation claims, and step numbering to match the repaired proofs.

No assigned page body required editing. The B-page body remained untouched.

## Confirmed defects

### Fatal

1. Subject: `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets`
   Location: Statement and proof steps `2.1`–`3.1`.
   Defect: missing hypothesis / false claim.
   Evidence: with `\mathcal F=\{K_0\}`, the condition “every `\mathcal F`-free graph has the `(t,k)`-homogeneous property” is vacuous, `Y(X)=1` for every sampled set, and the proof cannot choose a vertex from a zero-vertex copy. For example, with `t=2`, `k=3`, and `G=C_4`, the hypothesis `\mathbb E[Y]\le t/2` holds but `G` has no homogeneous `3`-set.
   Severity: fatal.
   Repair: required every graph in `\mathcal F` to have at least one vertex and rewrote the deletion argument to delete from the image of each counted induced embedding.

2. Subject: `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`
   Location: proof steps `6.1`–`8.2` (originally the `5.3`/`6.3`/`9.1` block).
   Defect: ill-formed / unlicensed inference.
   Evidence: the proof applied `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` with `u=\delta n`, but that lemma is stated for a positive integer `u` and its conclusion uses the natural-valued term `\binom{u}{k-\ell}`.
   Severity: fatal.
   Repair: replaced the threshold by `u=\lceil\delta n\rceil`, used `u\le2\delta n` after the `\delta n\ge1` branch, and reran the contradiction estimate with the corrected upper bound.

3. Subject: `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted`
   Location: proof step `1.4` (originally `2.1`).
   Defect: unlicensed inference.
   Evidence: the original proof inferred that `\{P_3\}` has the polynomial Rödl property from the fact that the chosen witness graph `G` is `P_3`-free. A single `P_3`-free graph does not imply a structural property of the forbidden graph `P_3`.
   Severity: fatal.
   Repair: proved first that `P_3` has the Erdős–Hajnal property via the published three-vertex classification, then invoked the singleton equivalence theorem.

### Nonfatal

4. Subject: `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets`
   Location: proof branch at step `1.3` (originally `2.1`).
   Defect: unlicensed inference.
   Evidence: the original proof applied the hypothesis to `S=V(G)` without first justifying `u<n`; when `u\ge n`, the argument needs a separate trivial counting branch instead.
   Severity: nonfatal.
   Repair: inserted the `u\ge n` branch and re-stratified the induction.

### Uneditable published-dependency defects

5. Subject: `def-erdos-hajnal-property-and-constant`
   Location: `items/def-erdos-hajnal-property-and-constant.md:21`.
   Defect: citation inaccurate.
   Evidence: the cited URL `https://arxiv.org/html/2606.06258v2` is titled `Erdős-Hajnal beyond the five-vertex path` on arXiv, not `Erdos-Hajnal properties in graphs and hypergraphs, introduction`.
   Severity: nonfatal.

6. Subject: `lem-erdos-hajnal-constants-are-downward-closed`
   Location: `items/lem-erdos-hajnal-constants-are-downward-closed.md:24`.
   Defect: citation inaccurate.
   Evidence: the same URL `https://arxiv.org/html/2606.06258v2` is cited with the same incorrect title metadata.
   Severity: nonfatal.

## Assigned page verdicts

- `polynomial-rodl-and-viral-equivalence`: pass after repaired item-level defects; the A-page summary/body itself is mathematically and contractually acceptable.
- `polynomial-rodl-and-viral-equivalence-examples`: pass after repairing one counterexample item; the B-page body remained correctly empty.

## Coverage and blockers

- Items opened: `45` total.
  Assigned items: `15`.
  Cited dependency items opened for verification: `30`.
- Pages opened: `4` total.
  Assigned pages: `2`.
  Prerequisite pages opened for summary/dependency verification: `2`.
- Blockers: none.
