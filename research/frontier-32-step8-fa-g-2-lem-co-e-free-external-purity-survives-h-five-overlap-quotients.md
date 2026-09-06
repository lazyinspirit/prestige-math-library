# Final adjudicator evidence — queue position 2

Item: `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`; run frontier-32, group g, round 1. Decision: **repaired**. Source status: **verified**.

Queue order: the recorder accepted position 1 at guard 18f37421921aadcaccea2416b49f2ae90be5a33c0be52962bb34431d862c9b2a before this item's substantive review began.

## Reviewed interfaces and conventions

I independently read the current statement, full proof, all thirteen direct dependencies, and the published overlap/comb/blockade and mixed-reachability definitions underlying them. The direct dependencies are:

- `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`
- `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs`
- `lem-h-five-overlap-classes-are-connected`
- `lem-purity-on-every-h-five-propagates-along-an-overlap-class`
- `def-h-five-overlap-blockade-and-iterated-mixed-quotients`
- `lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade`
- `lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge`
- `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness`
- `lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks`
- `def-comb-in-a-graph`
- `def-e-graph-and-co-e-graph`
- `def-h-zero-through-h-five`
- `def-edges-between-sets-and-pure-mixed-pairs`

Context checked: both co-e-free-comb-structure A/B page files; the item's strategy and dependencies in frontier-32-batch-13.pages.json; frontier-32-batch-13.coverage.json and batch notes; the batch and aggregate proof contracts, including boundaries and independent risk_review; frontier-32-reader-13.md and refute-13.json; group-g Step-8 context and conventions; Alpha's fourth adjudication and reader-warning disposition in frontier-32-alpha-step8-g.md; both exact judge rejection rows and the existing Sol adjudication ledger row.

Graphs are finite, simple, undirected. H_5 has eleven vertices (five-wheel and five rim leaves); co-E complements the six-vertex path-with-middle-leaf graph. Blocks are nonempty, ordered, and pairwise disjoint. Mixedness of a pair means it has a cross-edge and a cross-nonedge; it does not assert vertex mixedness in a prescribed direction. The special outside vertex v remains an essential hypothesis. Iterates start at one and the statement assumes a nonempty initial overlap blockade.

## External source verification

I opened and read the original paper, Huang, Ju, and Zhou, *Erdős-Hajnal beyond the five-vertex path*, https://arxiv.org/html/2606.06258v2 . Exact relevant passages: Section 6 opening and full Lemmas 6.1–6.2 (HTML lines 919–961), Lemma 6.4 statement (977–995), full Claims 6.4.1–6.4.2 and their proofs (998–1022), overlap construction (1023–1026), and full Claim 6.4.3 through its conclusion (1027–1048). Lemma 6.2 verifies the direction of its no-mixed-vertex hypothesis and the outside witness triple after descent. Claim 6.4.1 supplies the induced three-vertex path obstruction. Claim 6.4.2 supports the general complete-nonedge application. Claim 6.4.3 uses the descended pair (y',u') for its terminal contradiction. The full relevant argument, including the final paragraph, was fetched; no snippet or aggregator was used.

## Independent adjudication and repair

Alpha correctly repaired the original wrong substitution in the final application of F1. Its repaired substitution (y',u',u_2) is valid once u_2 has been obtained. The final Terra rejection, context b2b00ed1c2e316ff2d2cc19bb7f7ed15077b50ec3edf79b24adb3efa935cdb1a, identifies a missing justification for obtaining u_2 from pair mixedness alone. Its further suggestion that the preceding step forbids the reverse direction conflates two directions. The proof needed the directional inference made explicit rather than rejection of the theorem.

The decisive elementary argument is now step 4.1. The path obstruction implies each vertex of A_1 is pure to A_2. Since their pair is mixed, those vertices cannot all have the same complete/anticomplete label. Choose a complete-labeled p and an anticomplete-labeled q in A_1. Every vertex of nonempty A_2 is then adjacent to p and not to q. Thus every such vertex, in particular the chosen u_2, is mixed on A_1. This directly excludes the alternative configuration mentioned by the rejudge under the actual directional hypothesis.

I also expanded the formerly compressed descent so every application has its exact premises. Initial connectivity and quotient preservation give connectivity at every level. At an induction successor, a change in the external vertex's pure label along a mixed member-block chain gives an ordered opposite-label mixed pair. The auxiliary configuration explicitly retains outside vertices, the nonedge xy, completeness of x and y to both blocks, and the one-sided vertex z. If b in the first block mixes on the connected second block, an edge cc' with opposite adjacency to b gives an induced path b-c-c'. On that path z has adjacency pattern 1,0,0, with all required exterior pair hypotheses verified. This rules out precisely the first-to-second mixed vertex.

The descent lemma applies at each level r>1 to the preceding connected blockade and preserves the full outside-triple configuration. The index decreases by one, so it reaches the initial classes; s=2 needs no descent. At the terminal configuration, y' and u' are nonadjacent and complete to A_1; u_2 is adjacent to y' and nonadjacent to u'. F1 applies to every induced H_5 within A_1, and F2 propagates this purity throughout A_1, contradicting the explicitly derived mixedness. The induction proves all positive iterates, including fixed iterates after termination. No external vertices makes the claim vacuous; no empty block is chosen.

No hypothesis or conclusion was weakened. No dependency item was edited, so no prerequisite-repair licence was needed. Only the queued item and its own corresponding contract entries were updated. Citation quotes and step uses now match the expanded facts and canonical phase numbering. Boundary metadata now correctly says there is no level zero and justifies the nonempty mixed-vertex choice. The independent Alpha risk_review and historical reviews were preserved; this file records the FA correction to their compressed and zero-index descriptions. The existing manifest strategy already specifies this proof route and needs no change.

## Checks and closure

After adopting the required phase numbering, focused precheck passed (1/1). Final rendercheck passed (1 file). Strict batch proof-contract validation passed (15/15, zero errors/warnings). Citation-fidelity checked 42 citations across 15 items: every quote found, no widening candidate. Batch content-policy passed (17 items, zero errors/warnings). The final item was reread after these edits.

No unresolved mathematical obligation remains for this queued item. Next action: record the repaired exact bytes with the supplied terminal recorder. This resolution is not a judge verdict and creates no pass stamp or third judge call.
