# General CW homotopy-extension audit

2026-09-10. Owner-authorized bounded published-item repair, no judges or shared/live edits. This is a defect-focused local audit, not independent acceptance or whole-closure certification.

## prop-relative-cw-inclusions-are-cofibrations

Disposition: **A-R**. The published proof had two confirmed gaps: retracting a collar-containing neighbourhood does not supply a retraction of the entire disk cylinder, and the weak topology on X alone does not immediately justify continuity on X times I. Both are now closed locally with adequate earlier published interfaces. No Phase-2 supplier is consumed and no choice assumption is introduced.

Before SHA256: `78a7c4d7730cc41e49719dc9518ca734824be5f3cd52fc2cb0b9c744baf424a2`.

After SHA256: `1e649f15a23f7942ed0682ddebd61509e3a4a4805490be057c14a2c7230dd8e7`.

### Complete repair route

1. Published exponential law is exactly sufficient: its metric domain is I, whereas the parameter space and target are arbitrary topological spaces. Neither a metric on X nor CGWH hypotheses on Y are imported. The proof and its continuous-transpose and continuous-evaluation suppliers were read in full.
2. Local quotient-cylinder mapping criterion is proved by transposition: if a set map h on B times I pulls back continuously along a quotient q:E→B, its transpose pulls back continuously along q, descends continuously by the definition of quotient topology, and untransposes continuously. Slice continuity uses an individual representative, not a family of representatives. No claim that an arbitrary quotient is closed is made.
3. The fixed global disk-cylinder retraction has a=max(1−t/2, norm(u)), lambda=1/a, and image (lambda u, 2+lambda(t−2)). The proof checks a≥1/2, all coordinate bounds, membership in bottom-or-side, and pointwise fixation on that strip. Dimension zero is handled explicitly.
4. Construct maps on the actual skeleta X^n. On cells in A use the supplied H on their entire characteristic cylinders; on all other cells compose the fixed retraction with the finite-closed-pasted bottom/boundary map. The supplied attachment quotient and the proved quotient-cylinder criterion give continuous stage maps. This avoids assuming without proof that A union X^n has some separately specified quotient topology.
5. The construction is a deterministic successor on a set of stage-number/partial-map pairs; published natural-number recursion suffices. There is no selection over the possibly arbitrary cell index sets.
6. At the limit, prove each characteristic disk is quotient onto its closed cell using compactness and Hausdorffness. Continuous images of compact sets in arbitrary topological targets are proved here directly by pulling back an open cover: the published theorem with that informal name is metric-target-only and is deliberately NOT used. Transpose the assembled map to X→C(I,Y); its restriction to each closed cell is continuous by that quotient argument, hence the CW weak topology makes the transpose continuous. The exponential law then gives joint continuity on the ordinary product X times I. This closes arbitrary cardinalities of cells and unbounded dimensions, not merely finite CW complexes.

The contract preserves the original full HEP statement, spells out arbitrary Y and ordinary products, and explicitly retains choice-freeness for a supplied CW structure. Stale owner-audit metadata was replaced with an honest delegated local verification record.

### Actual direct suppliers and publication/order receipt

All 14 direct suppliers are published, and their actual definitions/proofs were read fully. Same-page definitions are earlier than this proposition. Newly added earlier-page suppliers precede the target at order 366.007.

| Exact supplier IDs | Home/order | Actual use |
|---|---|---|
| `def-cell-attachment-by-a-characteristic-map`; `def-cw-complex-with-closure-finiteness-and-weak-topology`; `def-skeleta-cw-subcomplex-and-relative-cw-complex` | `cw-complexes-and-cellular-homology`, 366.007, earlier definitions | Supplied characteristic maps, skeleton attachment quotients, Hausdorffness, weak topology, cellwise subcomplex condition |
| `def-quotient-topology` | `subspaces-products-and-quotients`, 251 | Descent and quotient test, replayed directly |
| `thm-the-exponential-law`; `def-compact-open-topology`; `def-locally-compact-metric-space` | `function-space-topologies`, 283 | Metric domain I and arbitrary parameter/target; compact I is locally compact |
| `thm-heine-borel-rn` | `compactness-in-metric-spaces`, 120 | Compact interval and disks; singleton dimension zero handled directly |
| `thm-compactness-agrees-with-metric-compactness`; `thm-closed-subspace-of-a-compact-space-is-compact`; `thm-compact-subset-of-a-hausdorff-space-is-closed` | `compactness`, 255 | Topological compactness, closed subsets of disks, quotient characteristic maps |
| `lem-continuity-is-local-and-pastes` | `topological-spaces-and-continuity`, 249 | Composition and two-piece closed pasting only |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` | `rn-as-a-normed-space`, 167 | Continuous explicit retraction formula |
| `thm-recursion` | `construction-of-the-natural-numbers`, 6 | Deterministic countable stage recursion, no DC/CC/AC |

Also read full proofs of `thm-exponential-correspondence-is-continuous` and `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain`, the two substantive immediate suppliers of the exponential law. Their interfaces genuinely permit arbitrary Y. This receipt does not certify every item on any prerequisite page.

### Source and checks

Read the full Proposition 0.16 proof, printed page 15 / PDF page 23, in Allen Hatcher, *Algebraic Topology*, full 560-page PDF: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf . The source gives global radial projection from (0,2) and skeleton-by-skeleton homotopy extension. The local proof makes that projection explicit and supplies the infinite-product continuity bridge by the earlier exponential law instead of treating a weak-topology slogan as a proof. Only the relevant full proof is claimed read, not the whole textbook.

Read the group-d final finding in `research/phase-2-catchup-24-alpha-d-step3-scaffold-recheck.md`. The pending AT10 `lem-finite-cw-basepoints-have-explicit-homotopy-extension` and compact-test lemmas are not cited, declared, or treated as published.

Targeted precheck: initially requested canonical dependency-layer numbering; adopted the canonical order and reran: **1 checked, 0 failing**. Targeted rendercheck: **1 file, pass**. `git diff --check` on the target: clean. Canonical page order checked read-only against current `research/plan-spec.json` and published page frontmatter, not merely publication status. No independent judge, whole-repository certification, or owner acceptance is claimed.

Changed files: target item and this report only. Parent must reconcile the one U-C index row to A-R, receipt hash, and any canonical dependency metadata; this agent did not edit shared plan, ledger, live scaffolds, source decisions, or engine state.
