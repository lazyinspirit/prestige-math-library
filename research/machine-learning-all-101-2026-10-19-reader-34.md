# Reader report — batch 34

Run: `machine-learning-all-101-2026-10-19`  
Role: Step 3a reader  
Assignment: batch `34`

## Inventory reviewed

Opened both assigned pages:

- `message-passing-graph-neural-networks` (A): 11 listed items; draft; frontmatter-only; `page_layout: compact-v1`.
- `message-passing-graph-neural-networks-examples` (B): 3 listed examples; draft; frontmatter-only; `page_layout: compact-v1`; requires the A page.

Opened all 14 assigned items in dependency order:

| Level | Items |
| ---: | --- |
| 0 | `def-finite-labeled-graph`; `def-multiset` |
| 1 | `def-graph-isomorphism`; `def-message-passing-gnn`; `def-one-dimensional-weisfeiler-lehman-test`; `lem-countable-bounded-multiset-sum-encoding` |
| 2 | `alg-message-passing-forward-pass`; `def-graph-isomorphism-network`; `lem-one-wl-isomorphism-invariance`; `thm-message-passing-gnn-no-more-powerful-than-1wl`; `ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl`; `ex-mean-max-aggregation-lose-multiplicity` |
| 3 | `thm-injective-message-passing-matches-1wl`; `ex-gin-irrational-self-weight-encoding` |

Also reviewed the batch-34 proof contracts, coverage bundle and author notes, the applicable repository instructions and reader brief, and the current ML-33 plan row. The current plan, batch manifest and A page all have no ML-32 page prerequisite; the older author note's reported requirement conflict is not present in the current records. Logical item dependencies for the assigned claims are within this batch.

## Mathematical review

- The finite labeled-graph, multiset, graph-isomorphism, message-passing, WL and GIN definitions have the stated domains and hypotheses. The forward-pass algorithm specifies initialization, aggregation-before-update, graph readout, and the depth-zero case.
- The bounded-multiset encoding proof is complete: with (B=\max\{2,M+1\}), base-(B) multiplicities are unique under the size bound, and the irrational coefficient separates different centers. The proof covers (M=0).
- The WL-isomorphism lemma correctly transports colors and their multiplicities along the label-preserving vertex bijection. The upper-bound theorem's induction maps each round's WL colors to common GNN states, then pushes equal final color multisets to equal state multisets. The matching theorem uses the stated joint injectivity hypotheses at every encountered layer and at readout; its separate GIN code clause retains countability, bounded neighborhood size, bounded graph size for the readout code, and the finite-MLP caveat.
- The six-cycle and two-triangle example has the stated 2-regular edge sets, is disconnected only on the two-triangle side, and retains one common color at every WL round. Its TikZ drawing has the listed edges and components; the shared vertex label \(\star\) is stated in the diagram description. No additional diagram is needed for the other items.
- The one-copy/two-copy witness gives equal nonempty mean and coordinatewise-maximum outputs for distinct multisets. The two-color GIN witness has the computed values (3+\sqrt2) and (3+2\sqrt2), and proves the required irrationality.
- Statement, definition and example descriptions are uninterrupted by links. Their references follow the complete sections; proof and fact sections retain the needed local supplier links. The seven proof-bearing items have contract derivations and citations consistent with their current proof steps and dependencies.

## Edit and evidence

Corrected the Xu et al. source locator in `ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl` in both `sources.references` and `Example references`. The prior locator attributed the regular-graph 1-WL limitation to §5.2, whose subject is mean/max pooling. Xu et al. §4 identifies regular graphs as known 1-WL exceptions, while §2 gives the 1-WL convention. The revised locator points to §2 and §4. The statement, proof, local supplier links and contract derivations were unchanged, so no contract field was affected; the item has no `verification.judge` record.

Checks after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl.md` — pass.
- `node tools/proof-layout.mjs items/ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl.md` — 1 item, 3 steps, 0 defects.

## Source checks

- Xu, Hu, Leskovec, and Jegelka, [“How Powerful are Graph Neural Networks?”](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf), published ICLR 2019 version: §2 (message passing, graph readout and WL); Lemma 2 and Appendix A (upper bound); Theorem 3 and Appendix B (injective matching); §4.1, Lemma 5, Corollary 6 and Appendices D–E (bounded sum codes and irrational self-weight); §5.2 (mean/max pooling).
- Morris et al., [“Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks”](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262), AAAI 2019: §2 (labeled graphs, isomorphism and Eq. (1) color update); §3 (Eqs. (5)–(6), Theorems 1–2 and 1-WL limitations).
- Li and Leskovec, [*Graph Representation Learning*, Chapter 5](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf): §§5.3.2–5.3.4 (message passing, Theorems 5.2–5.3, Lemma 5.1 and Remark 5.5); §5.4.1 (regular-graph limitations).

The exact source statements and proof locations support the reviewed model conventions and theorem directions. Xu et al.'s Appendix D uses (f(x)=N^{-Z(x)}) for bounded multiset encoding; the local item supplies its own base-power proof rather than relying on that source argument.

## Unedited defects and page verdicts

No confirmed defect remains in an assigned item or page. No defect outside the authorized scope was found. No proposed withdrawal is needed.

- `message-passing-graph-neural-networks` — pass. The A-page inventory, draft status and empty body are consistent with the current assignment and compact layout.
- `message-passing-graph-neural-networks-examples` — pass. The B-page inventory contains the three reviewed examples, its companion requirement points to the A page, and its body is empty.

## Blocker

No batch-34 blocker. The read-only autopilot status snapshot at `2026-10-19T11:36:58Z` showed the run active at `3a-read` and an existing unrelated `3a-split` blocker for batch 8; this review did not change run state.
