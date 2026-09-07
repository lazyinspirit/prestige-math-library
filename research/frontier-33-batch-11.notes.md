# Batch 11 scaffold checkpoint — frontier-33

Authorised artifacts: this notes file, sibling pages.json and coverage.json only. Stage 1 scaffold; no item bodies or publication changes.

Design read: plan-combinatorics-and-categories.md §§16.1–16.5 (especially 16.2 order 439/440, 16.3 and 16.5). Spec agrees on order and A prerequisite co-e-free-comb-structure; the design table gives scope rather than a separate prerequisite list. No identified design/spec conflict. Source §6.2 opening incorrectly says Bird-free; Lemma 6.5 and this scaffold say co-Bird-free. The final EH deductions belong to order 441 and are not dependencies here.

Conventions: finite simple undirected graphs; forbidden copies are induced; E has edges p1p2,p2p3,p3p4,p4p5,p3q; Bird uses the published edge-list definition. All witness vertices are distinct and outside the tested induced set. x,y are nonadjacent, both complete to that set; u is adjacent to x and nonadjacent to y. A vertex is pure when complete or anticomplete. Use anticonnectivity, not connectivity, for E-overlap classes. No hypotheses on edges between comb teeth beyond the published comb definition. The extra v is outside all blocks and teeth, complete to blocks and anticomplete to teeth. Every block is nonempty. For a tooth with no E copy, use X={b}, Y=B minus {b}, and the singleton blockade; this preserves all conclusions without calling an empty sequence a blockade. For nonempty overlap support use actual overlap classes. Order classes by a fixed enumeration of the finite vertex set, retaining the first member ordering after mergers; no choice axiom is needed.

Sources read using web fetch: Huang–Ju–Zhou, https://arxiv.org/html/2606.06258v2, §6 opening Lemmas 6.1–6.2 and entire §6.2 through the final proof sentence (HTML lines 919–961, 1049–1126); §6.1 was also read for comparison, Claims 6.4.1–6.4.3 and surrounding quotient construction (975–1048). Diestel author-hosted chapter https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf, §1.1 pp.2–4 and §1.4 pp.10–11 through the component paragraph only; table of contents fetched at https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Contents.pdf. Diestel independently supports the induced/complement/connectivity foundations, not the new co-Bird theorem. No claim of a second independent proof of Lemma 6.5. Only the specified textbook ranges are harvested; later headings visible in search context are not claimed as read proofs.

Dependency reading: published def-comb-in-a-graph, def-blockade-length-and-width, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph, def-anticonnected-graph-and-anticonnected-component and def-pattern-graph-of-a-pure-blockade read in full. Earlier quotient statements first located in plan-spec.json: mixed reachability equivalence, quotient definition, connectivity preservation, different-class purity, opposite member blocks and Lemma 6.2 descent. Reuse the earlier nonedge witness lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge. Direct disk verification subsequently confirmed that every external dependency is published. The quotient definition, connectivity-preservation lemma, opposite-member-block lemma, descending-witness lemma and nonedge-witness lemma were then read in full from their items/*.md files; their statements and proofs match the exact uses planned here. Source Lemmas 6.1–6.2 verify their exact required hypotheses. No dependency on the B page or on the final E EH theorem.

Verification already performed: exhaustive 64 adjacency masks on the fixed E edge list, rejecting exactly the two forbidden local patterns from Claim 6.5.1, leave only masks 0 and 63. Both Figure 9 six-vertex edge sets were checked by all vertex permutations against the complement of the published Bird edge set; both yield isomorphism (5,3,0,4,2,1) in the zero-based orders recorded below. This supports the proposed handwritten case proofs, not a replacement for them.

## Item checkpoints

### lem-co-bird-free-edge-plus-isolate-witness-obstruction

Claim/construction: In a co-Bird-free graph, x,y outside H are nonadjacent and complete to an induced H=P2+P1. No outside u in N(x) minus N(y) is mixed on the edge and anticomplete to the isolate.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.1(1), proof and Figure 9.

Dependencies: def-bird-graph-and-co-bird-graph, def-edges-between-sets-and-pure-mixed-pairs, def-h-free-and-family-free-graph.

Proof route: Label H by edge ab and isolate c, with ua an edge and ub,uc nonedges. List exactly the nine edges xa,xb,xc,ya,yb,yc,xu,ua,ab on x,y,u,a,b,c and identify their complement with Bird.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-co-bird-free-path-plus-isolate-witness-obstruction

Claim/construction: Under the same complete nonedge-pair hypotheses, H=P3+P1 cannot have u adjacent to its isolate and two consecutive path vertices but not the third.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.1(2), proof and Figure 9.

Dependencies: def-bird-graph-and-co-bird-graph, def-edges-between-sets-and-pure-mixed-pairs, def-h-free-and-family-free-graph.

Proof route: Use path a-b-c and isolate d with N(u) on H equal to {b,c,d}. On y,u,a,b,c,d the edges are ya,yb,yc,yd,ub,uc,ud,ab,bc; identify co-Bird and check all six remaining pairs are nonedges.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges

Claim/construction: For a co-Bird-free graph with nonadjacent x,y complete to E, an outside u in N(x) minus N(y) mixed on its underlying P5 is pure on p1p2 and p4p5.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.2 proof, paragraph beginning Therefore.

Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, def-e-graph-and-co-e-graph.

Proof route: If u mixes on p1p2, the edge-plus-isolate obstruction forces q,p4,p5 to be neighbours. In the up1 case the path-plus-isolate test on {p1,p3,p4,p5} forces up3 and the test on {p2,p3,q,p5} contradicts it. In the up2 case {p1,p3,q} forces up3, then {p1,p2,p3,p5} contradicts the second obstruction. Reflect the path for p4p5.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs

Claim/construction: Under the two-complete-nonadjacent-vertices hypothesis, every outside u in N(x) minus N(y) is pure to E. In a special-vertex comb, each vertex in another block is pure to every E copy in B_i.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.2, whole proof.

Dependencies: lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges, lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, def-e-graph-and-co-e-graph, def-comb-in-a-graph.

Proof route: First if u is complete or anticomplete to P5 use {q,p3,p4,p1} or {p1,p3,q} to force the matching q adjacency. Otherwise terminal-edge purity reduces to both terminal pairs complete, both anticomplete, or opposite. The first two contradict the tests {p1,p2,p3,p5} and {p2,p3,p5}; in the opposite case force up3, then force uq absent using {p1,q,p3,p4}, contradict {p3,q,p5}. Substitute (x,y)=(v,a_i).

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### def-e-overlap-chain-relation-in-a-comb-block

Claim/construction: Let X be all vertices lying in an induced E in B_i and Y=B_i minus X. On X relate d,d-prime when there is a finite vertex chain from d to d-prime with consecutive vertices lying in a common induced E in B_i; allow length-zero chains.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5 proof after Claim 6.5.2, definitions of X,Y,R.

Dependencies: def-e-graph-and-co-e-graph, def-comb-in-a-graph.

Proof route: Definition; well-definedness established by the next lemma.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-e-overlap-classes-form-an-anticonnected-partition

Claim/construction: The E-overlap relation is an equivalence relation. If X is nonempty its classes partition X into nonempty anticonnected sets; each E copy belongs to one class.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5 proof, R equivalence and E anti-connected paragraph.

Dependencies: def-e-overlap-chain-relation-in-a-comb-block, def-anticonnected-graph-and-anticonnected-component, def-e-graph-and-co-e-graph.

Proof route: Reflexivity uses zero-length chains, symmetry reverses chains and transitivity concatenates them. The complement of E is connected: p1 reaches p3,p4,p5,q directly and p2 via p4. Successive E copies along a chain overlap, so paths in their complements join through common vertices.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-purity-on-every-e-propagates-along-an-overlap-class

Claim/construction: An external vertex pure to every induced E in B_i is pure to every E-overlap class.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.3 base case and last contradiction.

Dependencies: def-e-overlap-chain-relation-in-a-comb-block, def-edges-between-sets-and-pure-mixed-pairs.

Proof route: Copies sharing a vertex must have the same complete/anticomplete label. Propagate this label along the chain and note every vertex of X lies in a copy.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### def-e-overlap-blockade-and-iterated-mixed-quotients

Claim/construction: For nonempty X order its equivalence classes to form L1; recursively put L(s+1)=L(s)/M, using the established mixed-reachability quotient.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5 proof, construction of L1 and Ls.

Dependencies: lem-e-overlap-classes-form-an-anticonnected-partition, def-quotient-blockade-by-mixed-block-reachability.

Proof route: Definition; well-definedness established by the next lemma.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade

Claim/construction: For nonempty X the E-overlap quotient sequence reaches a pure blockade in at most |L1|-1 strict mergers; every stage has anticonnected blocks and coarsens L1.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5 proof, finite termination paragraph.

Dependencies: def-e-overlap-blockade-and-iterated-mixed-quotients, lem-quotient-blocks-preserve-connectedness-and-anticonnectedness, thm-well-ordering-principle.

Proof route: A mixed pair belongs to one nontrivial reachability class, strictly decreasing the positive block count. A fixed stage has no mixed pair. Apply the earlier quotient connectivity lemma in the complement at each stage, retaining the coarsening invariant.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing

Claim/construction: In a co-Bird-free graph let D1,D2 be disjoint nonempty sets with D2 anticonnected; distinct outside x,y,z satisfy xy nonedge, x,y complete to D1 union D2, zx edge, zy nonedge, z complete to D1 and anticomplete to D2. No vertex of D1 mixes on D2.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.3 proof, nonedge paragraph.

Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge, def-edges-between-sets-and-pure-mixed-pairs.

Proof route: A mixed b1 in D1 has opposite adjacency to a nonedge b2,b2-prime in D2 by the earlier anticonnected witness lemma. Thus H={b1,b2,b2-prime} is edge-plus-isolate and z violates the first obstruction.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-co-bird-free-external-purity-survives-e-overlap-quotients

Claim/construction: In a co-Bird-free special-vertex comb, every vertex of another comb block is pure to every block at every stage of the E-overlap quotient sequence.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.3, entire induction and descending witness proof.

Dependencies: lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs, lem-purity-on-every-e-propagates-along-an-overlap-class, def-e-overlap-blockade-and-iterated-mixed-quotients, lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing, lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks, lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks, def-comb-in-a-graph.

Proof route: Induct on the stage. Initial purity follows from E purity and overlap propagation. A later mixed outside vertex yields two mixed previous blocks on which its adjacency differs. Begin with x=v,y=a_i,z=u. The no-forward-mixing lemma supplies the no-mixing hypothesis of Lemma 6.2 at each descent. That lemma reduces the level, preserving outside distinct vertices, xy nonedge and all completeness relations. At L1 no-forward-mixing plus mixedness produces u2 in A2 mixed on A1. Apply E purity with (x,y,u)=(y-prime,z-prime,u2) and then overlap propagation, contradiction.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### lem-terminal-e-overlap-quotient-pattern-is-e-free

Claim/construction: The pattern of the terminal pure E-overlap quotient has no induced E.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5 proof, paragraph proving (2.2).

Dependencies: lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, def-e-overlap-chain-relation-in-a-comb-block, def-pattern-graph-of-a-pure-blockade, def-e-graph-and-co-e-graph.

Proof route: Choose one representative from each of six supposed pattern vertices. Purity lifts every edge and nonedge to an induced E in B_i. Those six representatives were all in one initial E-overlap class, whereas they lie in six distinct terminal blocks; coarsening forbids this.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition

Claim/construction: For each block B_i of a comb in a co-Bird-free graph with outside v complete to all blocks and anticomplete to all teeth, there is B_i=X_i disjoint union Y_i with Y_i E-free and X_i partitioned into a nonempty pure blockade with E-free pattern, every block of which is pure to each individual vertex of every other comb block.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5(1),(2.1)–(2.3), complete proof; singleton convention adjustment.

Dependencies: def-e-overlap-chain-relation-in-a-comb-block, lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-terminal-e-overlap-quotient-pattern-is-e-free, lem-co-bird-free-external-purity-survives-e-overlap-quotients, def-comb-in-a-graph, def-h-free-and-family-free-graph, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph.

Proof route: If overlap support is nonempty, take X to be that support and its terminal quotient as the partition. Y contains no E by definition. Use terminal purity, E-free pattern and external purity. If B_i contains no E, choose b in nonempty B_i and set X={b}, Y=B_i minus {b}; the singleton partition has all required properties. This proves only the special-vertex structural statement, not an unrestricted-comb or EH conclusion.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### ex-co-bird-edge-plus-isolate-adjacency-witness

Claim/construction: Use vertex order (x,y,u,a,b,c) and edges xa,xb,xc,ya,yb,yc,xu,ua,ab.

Source: https://arxiv.org/html/2606.06258v2, Figure 9, first witness.

Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, def-bird-graph-and-co-bird-graph.

Proof route: Check all 15 pairs. Map the listed vertices to (w,y,x1,z,x3,x2) in the published Bird labels; the nine listed edges correspond exactly to co-Bird edges.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### ex-co-bird-path-plus-isolate-adjacency-witness

Claim/construction: Use vertex order (y,u,a,b,c,d) and edges ya,yb,yc,yd,ub,uc,ud,ab,bc.

Source: https://arxiv.org/html/2606.06258v2, Figure 9, second witness.

Dependencies: lem-co-bird-free-path-plus-isolate-witness-obstruction, def-bird-graph-and-co-bird-graph.

Proof route: Check all 15 pairs and the same target order (w,y,x1,z,x3,x2). Relate the missing endpoint adjacency to the path-plus-isolate obstruction.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### ex-co-bird-e-neighbourhood-case-table

Claim/construction: On E with ordered vertices p1,p2,p3,p4,p5,q, the 64 possible external adjacency subsets reduce to the empty and full subsets after excluding the two Claim 6.5.1 patterns.

Source: https://arxiv.org/html/2606.06258v2, Claim 6.5.2 proof, finite neighbourhood case expansion.

Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs, def-e-graph-and-co-e-graph.

Proof route: Group by the terminal-edge case proof; give for every mixed subset one explicit induced P2+P1 or P3+P1 and the forbidden adjacency pattern. Independently enumerate all 64 subsets as a verification aid; masks 0 and 63 are the only survivors.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

### ex-co-bird-e-free-comb-singleton-partition

Claim/construction: Take vertices a,b,v and edges ab,vb. The one-tooth comb (a,{b}) with special vertex v has no E; choose X={b},Y=empty and the one-block partition.

Source: https://arxiv.org/html/2606.06258v2, Lemma 6.5, empty-overlap convention boundary case.

Dependencies: thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition, def-comb-in-a-graph, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph.

Proof route: Verify the graph is co-Bird-free by its order three, the comb and v adjacencies, and the E-free one-vertex pattern. This illustrates why the theorem uses a singleton in the empty-overlap case.

Status: scaffolded; source passage read. Full phase proof/verification remains for step 5; next action is the next checkpoint or final gates.

## Scope and remaining gates

13 A items and 4 B items; no split required (limit 60). No generated theorem or duplicated base nonedge lemma. No cheaply proved EH corollary belongs here: the E EH input and Bird final reduction belong to order 441. Every manifest item has explicit deps. All mathematical authoring remains for step 5. Current next action: run coverage, whole-run manifest content policy, validate-plan, fetch stamps and URL recovery/liveness; record exact outcomes here.

## Final validation receipt and blocker

- Batch coverage checklist with --require-destination: initial pass, 25 rows, zero errors/warnings; final expanded harvest PASS: 36 rows, zero errors/warnings.
- Whole-run `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only`: PASS, 17 scoped items, zero errors and warnings. The other current manifests were empty at this check.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS, exit 0. Because the authorised scaffold is not spliced into the shared spec, also checked a temporary in-memory overlay written only to /tmp/frontier33-b11-projected-plan.json: PASS, exit 0, with the 13 A and 4 B items included; no cycles, forward references, B dependencies or unresolved IDs. Shared spec untouched.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-11.coverage.json --stamp --timeout-sec 20`: FAIL, 0/2 fetch stamps. Both exact recorded source URLs fail with EAI_AGAIN in the shell environment. Browser fetches retrieved the HTML article and the 35-page author-hosted chapter for reading, but do not supply the raw byte hash required by this tool. No stamp has been invented or copied.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-11.coverage.json --out /tmp/frontier33-b11-liveness.json --recover --fail-on-dead`: FAIL, 0/3 live, each curl exit 6 (could not resolve host). URLs: https://arxiv.org/html/2606.06258v2; https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf; https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Contents.pdf. Recovery reports no archive, but DNS failure does not establish absence from archives. The browser fetched each original URL; keep these verified same-text URLs rather than replacing sources to evade the network gate. No original_url field is needed because no source URL was replaced.

Readiness: NOT READY until the exact fetch and liveness gates succeed. The mathematical scaffold, source harvest and dependency graph are complete for this dispatch; step-5 proofs remain future work. The remaining dispatch obligation is mechanical source verification in a network-capable runtime. Next action: rerun the two exact failed commands, then source-backing with --require-verified; retain the current source harvest and exact claims. No permission request and no workflow-state changes.

Additional source navigation: fetched Nguyen's https://web.math.princeton.edu/~tunghn/ehnotes.pdf while checking whether it could supply an additional comb-specific treatment; did not use it for any new mathematical claim or substitute it for either harvested source. The pair's independent foundations treatment is Diestel; the novel co-Bird argument is explicitly attributed only to Huang–Ju–Zhou.

Final source-backing gate: `node tools/source-backing.mjs --coverage research/frontier-33-batch-11.coverage.json --liveness /tmp/frontier33-b11-liveness.json --require-verified` exited 1, reporting all 17 scaffold items as backing-lost because the shell liveness probe and raw fetch stamps failed. This is the same DNS/runtime blocker, not evidence that the browser-read documents disappeared. No result or source was removed. All required validators were run; readiness remains blocked on source gates.

## Step-3 fix pass

- Finding ID: none assigned. The stable finding is the group-g verdict entry for `co-bird-free-comb-structure` in `research/frontier-33-alpha-g-step3-scaffold-review.md` §"Verdicts" and `research/frontier-33-alpha-g-step3-verdicts.json`: **sufficient**. Disposition: affirmed; no batch-11 repair is called for. Evidence: the review's Batch-11 route/convention audit names the exact 13 A and 4 B records, the existing `co-e-free-comb-structure` prerequisite closure, the anticonnected quotient descent, and the singleton no-E boundary. I re-read the designated design range (`plan-combinatorics-and-categories.md` L3919, §§16.3–16.5) and confirmed that the manifest remains the required P2+P1/P3+P1 witness, E-overlap, Lemma-6.5 route, with the final EH deductions deferred to order 441. Changed scaffold record: none; `frontier-33-batch-11.pages.json` and `frontier-33-batch-11.coverage.json` already carry the reviewed 17 records, explicit `deps` arrays, and the complete dispositions.

- Finding ID: none assigned. The only concrete "In-scope scaffold repair" in the group review is the batch-18 `the-cook-levin-theorem` prerequisite addition. Disposition: explicitly pushed back as not applicable to batch 11: it concerns `def-arithmetization-of-a-boolean-formula`, neither batch-11 page, item, nor dependency. Evidence: review lines 35–49 assign the edit exclusively to `research/frontier-33-batch-18.pages.json`; review lines 55–78 independently verify batch 11's actual closure. Changed scaffold record: none.

- Source re-verification: read the primary treatment at https://arxiv.org/html/2606.06258v2, §6 opening Lemmas 6.1–6.2 and §6.2 L1049–1126, including Lemma 6.5, Claims 6.5.1–6.5.3, and Figure 9. Lemma 6.5 is explicitly co-Bird-free despite the preceding subsection sentence's Bird-free typo; its clauses exactly support the two obstruction items, E purity, overlap quotient, external-purity descent, E-free terminal pattern, and structural partition. Re-read the independent textbook treatment at https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf, §1.1 pp.2–4 and §1.4 pp.10–11 through the component paragraph after Proposition 1.4.1: it supplies the finite-simple graph, induced-subgraph, complement, connectivity, and component foundations, not a second proof of Lemma 6.5. Both recorded source URLs now pass exact receipt validation: `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-11.coverage.json --timeout-sec 20` -> `2/2 source(s) fetch-verified`; no URL replacement or harvest deletion occurred.

- Final fix-pass validators: `node tools/coverage-checklist.mjs research/frontier-33-batch-11.coverage.json --require-destination` -> 1 page, 36 harvested results, 0 errors/warnings; `node tools/manifest-deps.mjs research/frontier-33-batch-11.pages.json` -> 17 items, 0 errors; whole-run `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only` -> 923 scoped items, 0 errors/warnings; `node tools/validate-plan.mjs research/plan-spec.json` -> PASS, acyclic and consistent. The historical DNS/source-backing blocker above is superseded for the required fetch gate; it is retained as a dated record rather than rewritten. Next action: engine-owned splice, then step-5 authoring; no plan, workflow state, published content, or non-batch artifact was changed here.

## Step-5 authoring

Current authoring scope: the 17 manifest items, their two combinatorics pages, and proof contracts. Required inputs and group-g sufficient verdict read. Exact external dependency statements read from current items. Sources re-read: Huang–Ju–Zhou https://arxiv.org/html/2606.06258v2 §6 Lemmas 6.1–6.2 and §6.2 through line 1126; Diestel https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf §1.1 pp.2–4 and §1.4 pp.10–11 through components. Diestel supplies foundations, not an independent proof of the novel structural theorem. All new artifacts are draft. No scaffold claims dropped or narrowed. Checks pending.

### Authored `lem-co-bird-free-edge-plus-isolate-witness-obstruction`

Claim and conventions: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.1(1), Figure 9. Dependencies: def-bird-graph-and-co-bird-graph, def-edges-between-sets-and-pure-mixed-pairs, def-h-free-and-family-free-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-co-bird-free-path-plus-isolate-witness-obstruction`

Claim and conventions: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.1(2), Figure 9. Dependencies: def-bird-graph-and-co-bird-graph, def-edges-between-sets-and-pure-mixed-pairs, def-h-free-and-family-free-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges`

Claim and conventions: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. If $u$ is mixed on $S$, it is nevertheless pure to both terminal edges $\{p_1,p_2\}$ and $\{p_4,p_5\}$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.2, terminal-edge cases. Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, def-e-graph-and-co-e-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs`

Claim and conventions: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. Then $u$ is pure to $S$. In particular, in an $(\ell,w)$-comb with an outside vertex $v$ complete to all blocks and anticomplete to all teeth, each $u\in B_k$, $k\ne i$, is pure to every induced $E$ in $B_i$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.2. Dependencies: lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges, lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, def-e-graph-and-co-e-graph, def-comb-in-a-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `def-e-overlap-chain-relation-in-a-comb-block`

Claim and conventions: Fix a block $B_i$ of a finite graph comb ([[def-comb-in-a-graph]]). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in [[def-e-graph-and-co-e-graph]]. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5, overlap relation. Dependencies: def-e-graph-and-co-e-graph, def-comb-in-a-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; definition has no proof. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-e-overlap-classes-form-an-anticonnected-partition`

Claim and conventions: The relation $R_i$ on the overlap support $X_i$ is an equivalence relation. Its classes partition $X_i$; every induced $E$ in $B_i$ lies within one class. Each class is nonempty and anticonnected. If $X_i=\varnothing$, there are no classes.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5, overlap classes. Dependencies: def-e-overlap-chain-relation-in-a-comb-block, def-anticonnected-graph-and-anticonnected-component, def-e-graph-and-co-e-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-purity-on-every-e-propagates-along-an-overlap-class`

Claim and conventions: Fix a comb block $B_i$ and its $E$ overlap relation. Let $u\notin B_i$ be pure to every induced $E$ in $B_i$. Then $u$ is pure to every overlap class.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.3, overlap propagation. Dependencies: def-e-overlap-chain-relation-in-a-comb-block, def-edges-between-sets-and-pure-mixed-pairs. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `def-e-overlap-blockade-and-iterated-mixed-quotients`

Claim and conventions: Fix a comb block $B_i$ with nonempty $E$ overlap support $X_i$. By [[lem-e-overlap-classes-form-an-anticonnected-partition]], its overlap classes are nonempty anticonnected sets partitioning $X_i$. Fix an enumeration of the finite set $B_i$, and order the classes by their least enumerated vertex to obtain $\mathcal L^1$. Define recursively $\mathcal L^{s+1}=\mathcal L^s/\mathcal M$ for $s\geq1$, using [[def-quotient-blockade-by-mixed-block-reachability]] and its least-member ordering. Thus one replaces each mixed-reachability class of blocks by its union. This construction is used only when $X_i\ne\varnothing$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5, quotient construction. Dependencies: lem-e-overlap-classes-form-an-anticonnected-partition, def-quotient-blockade-by-mixed-block-reachability. Provenance: source statement adapted to explicit distinctness/finite conventions; definition has no proof. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade`

Claim and conventions: For nonempty overlap support, put $n=|\mathcal L^1|$. Every stage $\mathcal L^s$ partitions the same support into nonempty anticonnected blocks and coarsens $\mathcal L^1$. There is a least $q\geq1$ for which $\mathcal L^q$ is pure, with $q\leq n$. At most $n-1$ strict transitions occur, and all stages from $q$ onward are identical.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5, termination. Dependencies: def-e-overlap-blockade-and-iterated-mixed-quotients, lem-quotient-blocks-preserve-connectedness-and-anticonnectedness, thm-well-ordering-principle. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing`

Claim and conventions: Let $G$ be finite simple and co-Bird-free. Let $D_1,D_2$ be disjoint nonempty vertex sets, with $D_2$ anticonnected. Suppose distinct $x,y,z\notin D_1\cup D_2$ satisfy $xy\notin E(G)$, both $x,y$ are complete to $D_1\cup D_2$, $zx\in E(G)$, $zy\notin E(G)$, and $z$ is complete to $D_1$ and anticomplete to $D_2$. Then no vertex of $D_1$ is mixed on $D_2$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.3, nonedge obstruction. Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge, def-edges-between-sets-and-pure-mixed-pairs. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-co-bird-free-external-purity-survives-e-overlap-quotients`

Claim and conventions: Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. Fix $i$ with nonempty $E$ overlap support. For every $s\geq1$, every block $L$ of $\mathcal L^s$ and every vertex $u\in\bigcup_{k\ne i}B_k$, the vertex $u$ is pure to $L$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.3, full descent. Dependencies: lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs, lem-purity-on-every-e-propagates-along-an-overlap-class, def-e-overlap-blockade-and-iterated-mixed-quotients, lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing, lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks, lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks, def-comb-in-a-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `lem-terminal-e-overlap-quotient-pattern-is-e-free`

Claim and conventions: For a comb block with nonempty $E$ overlap support, the pattern graph of its terminal pure quotient blockade $\mathcal L^q$ is $E$-free.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5(2.2). Dependencies: lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, def-e-overlap-chain-relation-in-a-comb-block, def-pattern-graph-of-a-pure-blockade, def-e-graph-and-co-e-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition`

Claim and conventions: Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. For every $i\in[\ell]$ there exist disjoint sets $X_i,Y_i$ with $B_i=X_i\cup Y_i$ such that $G[Y_i]$ is $E$-free, and $X_i$ has a partition into a nonempty ordered sequence $(A^i_1,\ldots,A^i_{t_i})$ of nonempty sets satisfying: the sequence is a pure blockade, its pattern is $E$-free, and each individual vertex of every other comb block is pure to each $A^i_j$. The blocks $A^i_j$ may additionally be chosen anticonnected.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5. Dependencies: def-e-overlap-chain-relation-in-a-comb-block, lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-terminal-e-overlap-quotient-pattern-is-e-free, lem-co-bird-free-external-purity-survives-e-overlap-quotients, def-comb-in-a-graph, def-h-free-and-family-free-graph, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `ex-co-bird-edge-plus-isolate-adjacency-witness`

Claim and conventions: On six distinct vertices $(x,y,u,a,b,c)$ take exactly the edges $xa,xb,xc,ya,yb,yc,xu,ua,ab$. This graph is co-Bird and realizes the edge-plus-isolate obstruction configuration.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Figure 9, first witness. Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, def-bird-graph-and-co-bird-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `ex-co-bird-path-plus-isolate-adjacency-witness`

Claim and conventions: On six distinct vertices $(y,u,a,b,c,d)$ take exactly the edges $ya,yb,yc,yd,ub,uc,ud,ab,bc$. This graph is co-Bird and is the six-vertex witness for the path-plus-isolate obstruction.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Figure 9, second witness. Dependencies: lem-co-bird-free-path-plus-isolate-witness-obstruction, def-bird-graph-and-co-bird-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `ex-co-bird-e-neighbourhood-case-table`

Claim and conventions: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. The 64 subsets $N(u)\cap S$, encoded by six adjacency bits, reduce to the empty and full subsets after imposing the two local obstruction tests. The table gives a witness for each of the 62 mixed subsets.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Claim 6.5.2, explicit finite expansion. Dependencies: lem-co-bird-free-edge-plus-isolate-witness-obstruction, lem-co-bird-free-path-plus-isolate-witness-obstruction, lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs, def-e-graph-and-co-e-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Authored `ex-co-bird-e-free-comb-singleton-partition`

Claim and conventions: Let $V(G)=\{a,b,v\}$ and $E(G)=\{ab,vb\}$. The one-tooth $(1,1)$-comb $((a,\{b\}))$ has special vertex $v$. In the structural partition take $X=\{b\}$, $Y=\varnothing$ and the singleton blockade $(\{b\})$.

Source: https://arxiv.org/html/2606.06258v2, §6.2 Lemma 6.5, singleton boundary adaptation. Dependencies: thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition, def-comb-in-a-graph, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph. Provenance: source statement adapted to explicit distinctness/finite conventions; local expanded proof/verification is AI-altered from the named source route. Validation pending focused final checks; no unresolved mathematical obligation in this item. Next action: author the next assigned item, then run gates.

### Final Step-5 receipt

Authored all 13 A items and 4 B items listed in the per-item checkpoints above, and wrote both draft pages directly at `library/combinatorics/co-bird-free-comb-structure.md` and `library/combinatorics/co-bird-free-comb-structure-examples.md`. The reviewed `frontier-33-batch-11.pages.json` remains the exact manifest output; no plan structure or manifest IDs changed. All 17 items and both pages remain draft. No judge or publication stamp was written.

Provenance rationale: A statements/definitions and source figure examples are AI-altered adaptations of Huang–Ju–Zhou §6.2, with explicit finite graph types, outside distinctness, full adjacency witnesses and expanded proofs. The 64-mask example expands Claim 6.5.2 rather than generating a dependency target. The three-vertex singleton example is a generated example with `generation.role: example` and AI-generated verification; no item depends on it. Diestel supports the graph and complement-connectivity foundations only. Definitions use dedicated `justified_by` fields for the overlap equivalence and quotient well-definedness. No forward or recorded-not-proved material was needed.

Claim clarification made during the exact-citation pass: `lem-purity-on-every-e-propagates-along-an-overlap-class` explicitly proves the local form: for an overlap class A, a vertex outside A pure to every E contained in A is pure to A; the originally planned outside-B_i assertion is its particular case. Every copy meeting A is wholly in A, and its chain proof remains inside A. This is the precise local assertion used when the descent produces u_2 inside B_i but outside A_1. Its statement, displayed fact in the descent, and exact citation contract now agree. The theorem also records the anticonnectedness already established by its construction. No planned claim was dropped or narrowed; no unrestricted-comb or Erdős–Hajnal conclusion was added.

Required validation actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 17 explicit manifest `items/ID.md` arguments: initial run requested canonical phase repair. Adopted final phase 2.1 and the explicit induction base, induction-hypothesis use and discharge tags. Final full batch rerun: 15 proof-bearing items checked, 0 failing (two definitions have no proof body).
- The literally requested `node tools/validate-plan.mjs` invocation exits 2 with usage because the tool requires a plan path. Ran the required functional form `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved IDs among populated pages. Global informational/redundant-prerequisite warnings were retained; no other owner's artifacts were edited.
- `node tools/content-policy.mjs research/frontier-33-batch-11.pages.json`: 17 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-11.proof-contracts.json --strict`: 15/15 proof-bearing entries, 0 errors, 0 warnings. Entries record exact current source-section quotes, every fact use, every numbered proof step, and item-specific boundary dispositions. The fixed-stage equivalence has both directions explicitly checked.
- Additional focused renderer check over all 17 items and both pages: 19 files pass YAML, math-delimiter and real KaTeX parsing.
- Independent finite verification of the stored examples: both six-vertex bijections preserve all fifteen pairs, and every one of the 62 stored mask witnesses has the asserted induced edges, distinct vertices and adjacency bits. Masks 0 and 63 survive the local tests. This finite check is corroboration; the general claim is proved by the symbolic case analysis in the A items.

Unresolved obligations/blockers: none in the assigned authoring scope. The earlier source-fetch blocker was already superseded by Step 3; this dispatch fetched and read the exact source passages again and did not rewrite independent source receipts or reviews. Next action: return these draft artifacts to the build driver for its subsequent transition; authoring does not alter workflow state or publish content.

### Gate repair checkpoint

The co-Bird examples page title now uses an actual em dash instead of the invalid double-quoted YAML escape reported by depcheck. Its manifest title was already semantically identical. Focused rendering, depcheck, and the refreshed author receipt pass.
