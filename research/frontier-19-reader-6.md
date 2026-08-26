# frontier-19 reader-6 report

## Fatal defects repaired

- `items/def-steiner-systems-and-steiner-triple-systems.md:22-28` - ill-formed definition. The old text formally introduced a general `S(t,k,v)` as a `t`-`(v,k,1)` design even though this batch only defines `2`-designs and never defines general `t`-designs. I narrowed the formal definition to `STS(v)=2-(v,3,1)` and kept the broader `S(2,3,v)` notation only as a remark.
- `items/thm-bose-construction-produces-a-steiner-triple-system.md:31-35,55-61` - false/ill-formed block indexing. The theorem stated blocks `B_{x,y,i}` for ordered pairs `x != y`, but the proof simultaneously counted only `3 * binom(n,2)` such blocks. Since `x circle y = y circle x`, the ordered-pair statement duplicated every nonvertical block. I rewrote the construction to index nonvertical blocks by two-element subsets `{x,y}` and updated the proof accordingly.
- `items/cex-two-latin-squares-need-not-be-orthogonal.md:39` - false computation. The old proof claimed `(0,0)` appears in all three diagonal cells of the duplicated addition table of `F_3`, which is false. I replaced it with the correct obstruction: identical copies only produce pairs `(u,u)`, so `(0,1)` never appears.

## Nonfatal defects repaired

- `items/cex-a-symmetric-design-need-not-be-a-projective-plane.md:32-42` - citation/inference defect. The previous proof cited the Fano-plane fact for the conclusion that every projective plane has `lambda=1`. I rewrote the argument so the contradiction comes directly from `cor-finite-projective-planes-are-symmetric-two-designs` plus the explicit seven-line witness.
- `library/combinatorics/block-designs-and-finite-projective-planes.md:39-44` - overbroad A-page summary wording. The summary said Bose constructs the `3 mod 6` Steiner systems, but the page only constructs Steiner triple systems. I narrowed the prose to match the actual page content.
- `research/frontier-19-batch-6.proof-contracts.json` - citation/derivation drift in the repaired items. I updated the Bose, Steiner-triple, and counterexample contract rows so the stored quotes still match the cited source text and the derivation claims match the repaired proofs.

## Edits made

- `items/def-steiner-systems-and-steiner-triple-systems.md` - narrowed the formal definition to the in-scope triple-system case and moved the general notation to a remark.
- `items/thm-bose-construction-produces-a-steiner-triple-system.md` - replaced ordered-pair block indexing with unordered-pair indexing and aligned the proof steps with that construction.
- `items/cex-a-symmetric-design-need-not-be-a-projective-plane.md` - repaired the proof's dependency routing so the projective-plane obstruction is cited correctly.
- `items/cex-two-latin-squares-need-not-be-orthogonal.md` - corrected the witness argument for the identical-copy counterexample.
- `library/combinatorics/block-designs-and-finite-projective-planes.md` - narrowed one A-page summary phrase from "Steiner systems" to "Steiner triple systems".
- `research/frontier-19-batch-6.proof-contracts.json` - updated quote strings and derivation rows for the repaired items.

## Coverage

- Opened `41` assigned in-flight items.
- Opened `16` published dependency items:
  `def-addition-and-multiplication-modulo-n`,
  `def-congruence-modulo-an-integer`,
  `def-edge-density-between-vertex-sets`,
  `def-homogeneous-set-and-homogeneous-number`,
  `def-integers-modulo-n`,
  `def-logarithm-to-a-base`,
  `lem-a-weakly-sparse-set-has-a-large-sparse-subset`,
  `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field`,
  `lem-complement-swaps-cliques-and-stable-sets`,
  `lem-greedy-colouring-bound`,
  `lem-sparsity-depends-only-on-the-induced-subgraph`,
  `thm-clique-independence-chromatic-bounds`,
  `thm-existence-of-finite-fields`,
  `thm-integers-modulo-n-basic-algebra`,
  `thm-p3-free-graphs-have-square-root-homogeneous-sets`,
  `thm-standard-representatives-modulo-n`.
- Opened `4` assigned page files.
- Verified the source-backed remarks `rem-fox-sudakov-quantitative-density-theorem` and `rem-loglog-quantitative-density-theorem` against arXiv `2301.10147`, and `rem-skolem-construction-produces-a-steiner-triple-system` against Davidson's Steiner triple systems notes.
- Blockers: none.

## Page verdicts

- `library/combinatorics/block-designs-and-finite-projective-planes.md` - pass after the repaired A-page summary wording and item repairs.
- `library/combinatorics/block-designs-and-finite-projective-planes-examples.md` - pass after the repaired counterexample/example items.
- `library/combinatorics/classical-and-loglog-erdos-hajnal-bounds.md` - pass; no content defect found.
- `library/combinatorics/classical-and-loglog-erdos-hajnal-bounds-examples.md` - pass; no content defect found.

## Verification

- Ran `node tools/tsx-run.mjs tools/reflow.mts` and `node tools/tsx-run.mjs tools/precheck.mts` on:
  `items/def-steiner-systems-and-steiner-triple-systems.md`,
  `items/thm-bose-construction-produces-a-steiner-triple-system.md`,
  `items/cex-a-symmetric-design-need-not-be-a-projective-plane.md`,
  `items/cex-two-latin-squares-need-not-be-orthogonal.md`.
- Rechecked all modified proof-contract quotes against their cited source files; no remaining quote mismatches.
