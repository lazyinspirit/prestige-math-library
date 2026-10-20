# Batch 34 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-34`; scope: batch 34 only.

The scope routes one touched carrier, no page obligations and no reader/refuter findings. Five HIGH/CRITICAL risk reviews are owed. The engine owns hashes, judging and gates. Live disk status confirms an active Step 3 run; Git HEAD was `7c486cefe9` at review entry.

## Completed in dependency order

1. `def-graph-isomorphism` (level 1): complete risk review, no defect. The finite labeled graph supplier gives two-element undirected edges and a common label set. The bijection and both adjacency directions preserve nonedges and neighborhoods; empty, singleton and repeated-label cases are sound. Sources checked: Morris et al. §2, p.4604; Li–Leskovec Definition 5.3, p.69 (specialized to the entire vertex set). Definition and its reference section are clean; no edit or decision owed.

2. `lem-one-wl-isomorphism-invariance` (level 2): complete risk review, no defect. Read the full current proof and exact graph, isomorphism, multiset and WL definitions. The base round is label preservation; inverse adjacency and bijectivity give the neighborhood bijection; tuples and multiplicity transport establish the induction and histogram conclusion, including empty graphs and isolated vertices. Sources: Morris §2 Eq.(1); Xu §2. No choice use or diagram is required; no edit or decision owed.

3. `thm-message-passing-gnn-no-more-powerful-than-1wl` (level 2): complete risk review, no defect. The induction is on all vertices of both graphs, so it defines a common color-to-state function. Its multiset pushforward and the shared final readout prove equality and the exact contrapositive through depth K. Noninjective initial embeddings, K=0, empty graphs and isolated vertices cause no gap. Sources: Xu Lemma 2 / Appendix A (p.14), Morris Theorem 1 (p.4605), Li–Leskovec Theorem 5.2 (p.73). No item edit or decision owed.

4. `ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl` (level 2): complete risk review; `accepted_repair`, confidence 1. The exact native-pre-matching archive and current/native-post bytes differ only in the two Xu locators. Pre SHA-256: `7add864fc8d42f6510250195251389e0d4d182aff8f75e4454590c60318632cc`; post/current: `34339bad68d083d237fa9d16f1422b140608640c9b3c13ac648a8989dd5aba75`. Xu §2 (p.3) defines refinement and §4 (p.4) names regular-graph exceptions; §5.2 (p.7) instead studies mean/max pooling. Closed defect: `ml101-b34-3a-regular-graph-source-locator`. Each edge list has degree two, constant-label tuple induction keeps six identical colors in both graphs, and the path argument rules out an isomorphism. Reviewed all TikZ nodes and edges: exact six-cycle and separate triangles; no orientation or accidental edge. The proof uses edge lists, independently of the picture. No Statement/Definition, proof, dependency, provenance or manifest correction required.

5. `thm-injective-message-passing-matches-1wl` (level 3): complete risk review, no defect. Reviewed every step and all six supplier carriers, including the full bounded-code proof and GIN Definition. The color-to-state map is well-defined and injective on both graphs together; either a differing center or neighbor multiset produces a distinct encountered update pair. Injective multiset pushforward reflects histogram inequality and injective readout separates outputs. K=0 and empty/nonempty pairs work; two empty graphs cannot satisfy WL distinction. The code lemma uses B=max(2,M+1), domination of lower digits and irrational/integer separation; M=0 and an empty feature universe are sound without AC. Delta and N are used for their separate multiset-size bounds; countability and the finite-MLP caveat are retained. Sources: Xu Theorem 3, Appendix B pp.14–15, Lemma 5/Corollary 6 and Appendices D–E p.16; Morris Theorem 2 p.4605; Li–Leskovec Theorem 5.3 p.74 and §5.3.4 pp.75–76. No edit or decision owed.

## Source locations

- [Morris et al., Weisfeiler and Leman Go Neural](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262): §2, notation/background and Eq.(1).
- [Xu et al., How Powerful are Graph Neural Networks?](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf): §2 pp.2–3; §4 p.4; §4.1 p.5; §5.2 p.7; Appendices A–B pp.14–15 and D–E p.16. Complete relevant arguments were read using the publisher PDF and local PDF text extraction.
- [Li and Leskovec, Graph Representation Learning, Chapter 5](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf): §5.1 Definition 5.3 p.69; Theorems 5.2–5.3 pp.73–74; §5.3.4 pp.75–76; §5.4.1 pp.77–78.

## Dependencies, published content and scope

The owned cross-batch dependency artifact is empty. All actual logical suppliers of the five reviewed carriers are in batch 34. No original Statement or Definition changed, so there are no changed-interface consumer repairs. No defective published supplier/consumer, outside-scope repair, proposed withdrawal or escalation was established. Stable IDs, inventories and existing withdrawal proposals remain present. The frontier dependency ledger records this scoped review.

The single decision is `touched:34:ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl`, accepted with confidence 1 and one closed nonfatal citation row. Reader/refuter findings are empty. All fourteen current item raw hashes match native reader-post; the one touched preimage matches native reader-pre and its complete diff is known. There is no historical-byte uncertainty. Alpha changed no item, page, manifest, claim, proof or provenance; only five risk-review records and adjudication/ledger evidence were authored. Existing contracts exactly quote the unchanged mathematical suppliers and proofs. No judge record was invalidated.

## Checks

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-34.proof-contracts.json` — 0 errors, five HIGH/CRITICAL carriers routed and independently reviewed.
- The same command with `--require-reviewed` — 0 errors, all five required risk records complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-34.proof-contracts.json --strict` — 14/14 checked, 0 errors and 0 warnings.
- Focused `tools/precheck.mts` on the accepted touched example — 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl.md` — clean; real KaTeX and renderer YAML checks passed. Diagram mathematics was inspected in source; this is not a claim of an independent TikZ rendering pass.
- After all edits, `node tools/proof-layout.mjs items/ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl.md` — 1 item, 3 steps, 0 defects.
- Focused JSON assertions — exactly 1/1 owed decision, matching closed ledger linkage, and all 14/14 item raw hashes equal native reader-post.

No remaining batch blocker or unresolved mathematical uncertainty. No judge, stamp, self-certification, engine gate battery, publication or scheduling action was performed. Engine collection and scheduled gates remain next.
