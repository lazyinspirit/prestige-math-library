# Computability Theory diagram-candidate supplement

Integrated into the primary all-item review. Candidate diagrams are source-supported possibilities; they remain uncertain and optional pending adjudication.

## Candidate 1: `cor-hamiltonian-path-and-cycle-are-np-complete`

- Lanes: 03.
- Diagram kind: optional TikZ directed-to-undirected Hamiltonian-path gadget map.
- Why considered: The proof uses a concrete orientation-sensitive replacement: each internal directed vertex v becomes v1-v2-v3, with an input arc u→v becoming the undirected edge u3-v1. A small map can make the correspondence between directed path order and forced traversal through each triple easier to check.
- Concrete content/check: For the s≠t case only, depict a directed arc u→v and its output link u3—v1; show one internal triple v1—v2—v3, with the forced left-to-right traversal. Mark s3 and t1 as endpoint vertices. State that the separate s=t boundary case is handled in prose.
- Source lines: 56.
- Frozen source SHA-256: `1d52ff3cb0a77d827658063890af016ee6d9b7b5b344760b620c31d2537a48ef`.
- Original screenshot evidence: `cor-hamiltonian-path-and-cycle-are-np-complete--01.png` (`aa7c259d3561458593f91a2d3b747c0f25d38587f7c964f6039712bc07a1b1d7`), `cor-hamiltonian-path-and-cycle-are-np-complete--02.png` (`d885bae693a9ed4a8035ce027a90f7653fc8f05608b58ae284ba1daccd5f526f`).

## Candidate 2: `def-bounded-computation-tableau`

- Lanes: 04.
- Diagram kind: optional-clarifying-diagram.
- Why considered: The item directly defines an array-shaped mathematical object and stresses that it encodes one branch rather than the full tree.
- Concrete content/check: A time-by-tape grid with rows 0,...,T and columns 0,...,T; initial configuration in row 0; one uniquely marked state/head symbol per row; a local legal transition between consecutive rows; repeated terminal row padding; show one branch only.
- Source lines: 27, 31, 34, 35, 38, 41, 45, 55.
- Frozen source SHA-256: `f920a48ecd5bd6f30f5e91581d1c3972884769378441c6d79ddd4f88e4464cf9`.
- Original screenshot evidence: `def-bounded-computation-tableau--01.png` (`285847f9c10f8128f9a549917ea3722f8182dc56b48ea69ef0cda19596f4657a`).

## Candidate 3: `def-bounded-turing-computation-tableau-interface`

- Lanes: 06.
- Diagram kind: optional tableau schematic.
- Why considered: This construction is a central time-space array encoding, and the exact local dependency (three adjacent cells in one row determine a centre cell in the next) is easier to see in a small schematic. The drawing should be labeled as a local window and should not claim to prove tableau correctness; the item’s text and proof remain authoritative.
- Concrete content/check: Draw the finite array with time rows t=0,…,T and tape columns j=0,…,W−1; mark the unique head cell by (q,a), show the blank unmarked right endpoint, and show one interior update from the old three-cell window (a,b,c) to the new centre symbol d in row t+1.
- Source lines: 25, 27, 29.
- Frozen source SHA-256: `5ab7b738754154f0d3798afb88c343374dc813505b6095a1c23007a3cfdb0729`.
- Original screenshot evidence: `def-bounded-turing-computation-tableau-interface--01.png` (`4b22480fb4e9cb278852ac334d2998e17e5cb02b63270bd6c84d512c2145fe86`).

## Candidate 4: `def-chomsky-hierarchy`

- Lanes: 10.
- Diagram kind: mathematical schematic.
- Why considered: An optional four-node containment ladder could make the stated class ordering easier to scan: regular languages ⊆ context-free languages ⊆ decidable languages ⊆ recognizable languages. Use non-strict inclusion arrows, as the source states containments, and label this as the page-specific four-class comparison; the Remarks explicitly distinguish it from the classical Chomsky hierarchy. The current item is readable and no diagram defect is claimed.
- Concrete content/check: An optional four-node containment ladder could make the stated class ordering easier to scan: regular languages ⊆ context-free languages ⊆ decidable languages ⊆ recognizable languages. Use non-strict inclusion arrows, as the source states containments, and label this as the page-specific four-class comparison; the Remarks explicitly distinguish it from the classical Chomsky hierarchy. The current item is readable and no diagram defect is claimed.
- Source lines: 27, 29, 45, 47.
- Frozen source SHA-256: `87d0b2a480b5176cf0f8c53814f03436f8984b7d425f7b7448592a0e3cc95064`.
- Original screenshot evidence: `def-chomsky-hierarchy--01.png` (`02973876bf79dbab9762497b3fc4033e249fccdc4b9c8b443ed907989de71870`).

## Candidate 5: `def-cyk-table-and-span-variable`

- Lanes: 04.
- Diagram kind: optional-clarifying-diagram.
- Why considered: The index shifts and split relation are precise but visually dense; a small worked span triangle can expose off-by-one indexing and the whole-word top cell.
- Concrete content/check: Input positions a_1,...,a_n along the base; span cell T[i,l] covering a_i...a_{i+l-1}; one parent cell split at k into T[i,k] and T[i+k,l-k], labelled A->BC; top cell T[1,n].
- Source lines: 26, 27, 30, 32, 34, 36, 43.
- Frozen source SHA-256: `995777b5c1e00a3a3ac89fbd4c4c806a15e622b916b294fc4303e9d4a1a87ea2`.
- Original screenshot evidence: `def-cyk-table-and-span-variable--01.png` (`8a36e61fdd5019672e58cc4b3abefcf6cffc49b104f26b23fd8960dcfca9db4d`).

## Candidate 6: `def-degree-reduction-by-expander-clouds`

- Lanes: 07.
- Diagram kind: schematic graph-map diagram.
- Why considered: The definition contains two transformations and a decoding map whose port-level correspondence and orientation convention are easy to misread in prose; a schematic can display the actual map components without replacing the proof.
- Concrete content/check: Show a source vertex v with incident ports p_e (a loop contributes two distinct ports); internal H_r edges carry equality relations; each original e={u,v} maps to one external edge between its designated ports carrying the same relation in the same endpoint order. Then show the overlay H_(2m) plus 65 tautological loops per port producing G2. Indicate Dτ(v)=plurality of the port labels with fixed-order tie break. Treat the empty-edge case separately as the empty graph. Do not reverse endpoint order, merge loop ports, or depict G2 overlay as changing the alphabet.
- Source lines: 35, 36, 37, 38, 39, 40, 41, 42, 43.
- Frozen source SHA-256: `17ae32c51d16fc83832b040e30f57a2317f79ea7e7948dc2dee963c6b07723cd`.
- Original screenshot evidence: `def-degree-reduction-by-expander-clouds--01.png` (`2296f9d6db420e3246db57c04a010db1fc9b7f4414c61e04f76e8a03a675b8e8`).

## Candidate 7: `ex-a-two-step-computation-tableau-and-its-local-clauses`

- Lanes: 05.
- Diagram kind: two-step-computation-tableau.
- Why considered: A concrete construction appears in the source; decide independently whether a diagram materially clarifies it.
- Concrete content/check: A small three-row by four-cell tableau could lay out the exact accepting run and distinguish the marked state/head cell from ordinary symbols; a neighboring local-window inset could show the two transitions and the forbidden changed first successor cell from the refutation. The source gives every row and local tuple explicitly, making the content source-supported. Its absence is not a defect.
- Source lines: 30, 31, 44, 46, 48.
- Frozen source SHA-256: `0a0743a50c620207ac9f076477c90ecb70db7be8bfaa3273b4b54847e5dc187c`.
- Original screenshot evidence: `ex-a-two-step-computation-tableau-and-its-local-clauses--01.png` (`a6b6676de10cb27be3fb3015ec1706d357e84633383e97e2dcb6b00c44bbe3d5`).

## Candidate 8: `ex-acceptance-is-configuration-reachability`

- Lanes: 07.
- Diagram kind: small directed configuration graph.
- Why considered: This example is explicitly about existential reachability versus a nonhalting sibling branch; a three-node diagram makes the contrast immediate.
- Concrete content/check: Draw C0 as start with arrows C0→Cacc labeled (qacc,1,R) and C0→CL labeled (qL,1,L); add CL→CL self-loop. Mark Cacc accepting, CL nonhalting, and show the accepted path is length one. Do not imply every branch halts.
- Source lines: 33, 34, 35, 36, 37, 38, 39, 40, 45, 53, 54, 55, 56, 57.
- Frozen source SHA-256: `99bcdbf6e43f81edf00041cf505e5a9032b1d54b58d25b5f6730efe01256d22d`.
- Original screenshot evidence: `ex-acceptance-is-configuration-reachability--01.png` (`f6ff3590e208d943eb9c5f98408dc3082a7438c07bf49ed2667533714b617e36`).

## Candidate 9: `ex-bounded-reachability-recursion-is-correct`

- Lanes: 10.
- Diagram kind: mathematical schematic.
- Why considered: An optional directed path diagram could show s→a→b→t and emphasize b as the midpoint: the length-three path is not covered by Reach_1(s,t), while Reach_1(s,b) and Reach_1(b,t) witness Reach_2(s,t). This directly mirrors the example and its two recursive subproblems. The current text is readable and no diagram defect is claimed.
- Concrete content/check: An optional directed path diagram could show s→a→b→t and emphasize b as the midpoint: the length-three path is not covered by Reach_1(s,t), while Reach_1(s,b) and Reach_1(b,t) witness Reach_2(s,t). This directly mirrors the example and its two recursive subproblems. The current text is readable and no diagram defect is claimed.
- Source lines: 30, 44, 46.
- Frozen source SHA-256: `d630a350e29484382f927270962db101e3d0718b1814670f222b9e12aa933daa`.
- Original screenshot evidence: `ex-bounded-reachability-recursion-is-correct--01.png` (`9ea344126e3873c8fa1c76bfd78119e8d9b14d91bf6a0b0c78a0c93843ec4a9f`).

## Candidate 10: `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa`

- Lanes: 07.
- Diagram kind: deterministic finite automaton diagram.
- Why considered: The example gives a complete, tiny transition system and a direct language interpretation; a labeled state diagram would let the reader verify the sink completion and accepting set at a glance.
- Concrete content/check: Use ε as the initial accepting state, 1 as accepting, ⊥ as rejecting sink. Draw ε --0→ ε, ε --1→ 1, 1 --0→ ε, 1 --1→ ⊥, and ⊥ loops labeled 0,1. Check this rejects exactly strings containing 11; retain the missing transition’s direction as 1 --1→ ⊥.
- Source lines: 30, 31, 32, 33, 34, 35, 36, 37, 38, 50, 51, 52.
- Frozen source SHA-256: `2dfb80c21057901156f1e8340ef5aca747a90c6977d2f0137fa47b0637ced4a5`.
- Original screenshot evidence: `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa--01.png` (`4786c078bdc755b8cdcc93313ac1eeda1cdd948c526b57e5c1b916933085b16b`).

## Candidate 11: `ex-subset-construction-can-require-exponentially-many-states`

- Lanes: 05.
- Diagram kind: nfa-and-reachable-subset-dfa.
- Why considered: A concrete construction appears in the source; decide independently whether a diagram materially clarifies it.
- Concrete content/check: A compact paired illustration could show the three-state NFA for words whose second symbol from the end is 1, beside its four-state reachable subset DFA. The NFA should have q0 loops on 0 and 1, q0 --1--> q1, and q1 --0,1--> q2 with q2 accepting. The subset states are {q0}, {q0,q1}, {q0,q2}, {q0,q1,q2}; draw transitions by subset update. This would make the claimed four reachable subsets and their distinguishing futures easy to verify. The text already states the construction; absence is not a defect.
- Source lines: 29, 32, 46, 48.
- Frozen source SHA-256: `cd9ca9b35dc027a98043653cd9789a4ff4f676ee8d0824b194b35c41b3a533dd`.
- Original screenshot evidence: `ex-subset-construction-can-require-exponentially-many-states--01.png` (`fab5ea363cf4fe3b99a8d8535eaef8f1da28efb205439802d5566dae442bbf4a`).

## Candidate 12: `lem-bounded-reachability-recursion-is-correct`

- Lanes: 05.
- Diagram kind: midpoint-path-splitting-diagram.
- Why considered: A concrete construction appears in the source; decide independently whether a diagram materially clarifies it.
- Concrete content/check: A simple directed path sketch u ... z ... v can show the recursive midpoint condition: each half has at most 2^(i-1) edges, so concatenation gives length at most 2^i; conversely split a path at min(2^(i-1), length). This would clarify both directions of the induction. The argument is already complete in prose, so this is optional.
- Source lines: 30, 36, 42, 46.
- Frozen source SHA-256: `2c8f80624b0b00be90b6cadcca85ff64e900beeef0ad1eff867d30f50479b851`.
- Original screenshot evidence: `lem-bounded-reachability-recursion-is-correct--01.png` (`d44a958e9be29a4671b9a2757546dc2c0c349222171cc18ead0072eaa3e071b6`).

## Candidate 13: `thm-directed-reduces-to-undirected-hamiltonian-cycle`

- Lanes: 02.
- Diagram kind: potential explanatory TikZ gadget/reduction diagram.
- Why considered: The direction encoding and converse orientation argument are the central map and are easier to inspect in a small labelled gadget plus a cyclic chain schematic.
- Concrete content/check: Show a single vertex gadget v_1—v_2—v_3, with v_2 degree two; show an arc u→v becoming only the undirected cross-edge u_3—v_1; then show the cycle order v^(1)_1,v^(1)_2,v^(1)_3,…,v^(n)_1,v^(n)_2,v^(n)_3,v^(1)_1. Label the arrows as the source orientation and the line edges as the target graph. Do not imply cross-edges in both endpoint orientations.
- Source lines: 45, 47, 49, 51.
- Frozen source SHA-256: `146637dc75668b77923bf9e971322259c6d9a27f3ba2d97fb40164f8b7f118f4`.
- Original screenshot evidence: `thm-directed-reduces-to-undirected-hamiltonian-cycle--01.png` (`e9b22be6f939c35cf407e65e4cfdfb78084c6af255583452216dc24027b31e52`), `thm-directed-reduces-to-undirected-hamiltonian-cycle--02.png` (`36ef107e9eb3a395e39093ec21fe7bb19af1301a5990fc8f4ff4f79313e9bec4`).

## Candidate 14: `thm-directed-st-connectivity-is-nl-complete`

- Lanes: 03.
- Diagram kind: optional TikZ configuration graph schematic.
- Why considered: The hardness construction explicitly maps valid machine configurations to vertices, legal transitions to directed arcs, and every accepting configuration to a fresh target. A small schematic could clarify how an accepting computation branch becomes a directed path to that target.
- Concrete content/check: Show a start configuration, a short directed sequence of legal-configuration transitions, branching as appropriate, several accepting configurations each pointing to the fresh target t_x, and a nonaccepting branch with no target edge. Label the drawing schematic and not an exhaustive configuration graph.
- Source lines: 42, 48.
- Frozen source SHA-256: `cfe47cf2b331afa56dbd1e7503d6b345bd9ff79c699771869e7a74dda61fe2bf`.
- Original screenshot evidence: `thm-directed-st-connectivity-is-nl-complete--01.png` (`c90676c72e986054c873ed10c5973dd7a4ad3a47a6080fc41a2a49f91ea4ec45`).

## Candidate 15: `thm-one-way-and-two-way-tapes-are-equivalent`

- Lanes: 04.
- Diagram kind: optional-clarifying-diagram.
- Why considered: The sign/index mapping and four crossings at the origin are easy to reverse; a map would make the exact coordinate convention visible.
- Concrete content/check: A two-way tape with indices ...,-2,-1,0,+1,+2,... mapped to one-way cells 2,1,0,1,2,... where each positive one-way cell stores the ordered pair (+n,-n); mark the head component; show transitions through 0.
- Source lines: 48, 50, 52.
- Frozen source SHA-256: `467c878d237d2efa76867b9edbf673e21c1ffa5bbc57111a1a368d70892aaed6`.
- Original screenshot evidence: `thm-one-way-and-two-way-tapes-are-equivalent--01.png` (`c0e014caf79042f00f7653f7063e1f7f2a53444745a27b0fa11385da46391669`), `thm-one-way-and-two-way-tapes-are-equivalent--02.png` (`d3ecaac79e2a8e55f4cdcb7e9349f22bfe7938f9df8337dce3d8959b834fdbf4`).

## Candidate 16: `thm-stay-put-elimination-with-explicit-simulation-interface`

- Lanes: 08.
- Diagram kind: candidate; optional explanatory TikZ state/configuration diagram.
- Why considered: The theorem depends on an explicit two-step macro simulation; one diagram could make the embedding and the marked interior configuration easier to follow. No existing diagram is present, and this is a suggestion rather than a required addition.
- Concrete content/check: Show a one-step stay transition from E(C)=((q,0),h,t) with δ(q,t(h))=(p,b,S): simulator transition to ((p,1),h+1,t[h:=b]), then forced return to E(C′)=((p,0),h,t[h:=b]); label the tag sequence 0→1→0 and head trace h→h+1→h; show the scanned symbol at h+1 is rewritten unchanged, and annotate the middle state nonhalting even if p is an original halting state. Include L/R as direct one-step unmarked edges only if space allows.
- Source lines: 32, 34, 36, 44, 62.
- Frozen source SHA-256: `c99d078e49a77138930a74a2f5655aa2e7db59325743bb8c6ece967ff26651a6`.
- Original screenshot evidence: `thm-stay-put-elimination-with-explicit-simulation-interface--01.png` (`17ae3e50c60859b62034e2fcf692478f94aa272a7dd0ae54b948158bded22c3d`), `thm-stay-put-elimination-with-explicit-simulation-interface--02.png` (`2aa83291da902788f955e6826fea1f79b443d09eb5772c53a3ee7d4628460d21`), `thm-stay-put-elimination-with-explicit-simulation-interface--03.png` (`5d1e946721d443f6ad268179b26bda38e82100ad1ce92063dfa3fbfea3e4fd84`).

## Candidate 17: `thm-three-sat-reduces-to-directed-hamiltonian-cycle`

- Lanes: 09.
- Diagram kind: potential TikZ graph-gadget diagram.
- Why considered: The proof relies on the orientation of a repeated crossbar and on clause vertices inserted as detours at particular literal pairs. A small indexed schematic can make the occurrence-to-arc map and forward/reverse route interpretation easier to inspect; it should be a schematic rather than a full graph whose size depends on n,m.
- Concrete content/check: Show one variable gadget with ordered crossbar vertices s_{i,j-1}, ℓ_{i,j}, r_{i,j}, s_{i,j}; indicate the bidirected crossbar edges, the p_i/q_i boundary arcs, the positive-literal detour ℓ_{i,j}→c_j→r_{i,j}, and the negative-literal detour r_{i,j}→c_j→ℓ_{i,j}. Mark left-to-right as x_i=true and right-to-left as x_i=false. If including the cycle conversion, separately show zφ→sφ and tφ→zφ. Verify occurrence indices and all arrow orientations against source lines 61–67.
- Source lines: 61, 63, 65, 67.
- Frozen source SHA-256: `3752ed79e60cb0542f7b794bff624d1b9da17db26515d3bf72661850c1f55bee`.
- Original screenshot evidence: `thm-three-sat-reduces-to-directed-hamiltonian-cycle--01.png` (`60d462b3a61c66ebba80b300c18a81a1b5281a565434e2eebef6ce8232c2e354`), `thm-three-sat-reduces-to-directed-hamiltonian-cycle--02.png` (`b7d49d8ea2b8d17594a7e7cf3748521b92ad967d07346576e304021f01e2a6a7`).

## Candidate 18: `thm-three-sat-reduces-to-three-colourability`

- Lanes: 01.
- Diagram kind: optional-gadget-graph-diagram.
- Why considered: The proof defines a concrete reduction graph using variable triangles, a distinguished reference vertex, clause triangles and occurrence-matched connecting edges, then proves both colouring directions in prose. A small generic gadget diagram would expose the edge pattern and colour constraints at a glance; no correctness defect is visible in the prose or current preview.
- Concrete content/check: Draw one variable triangle on u, ¬u, ν with ν fixed colour 2 and u,¬u in colours 0,1. Draw one clause triangle with three position-labelled vertices (j,1),(j,2),(j,3), joining position r to the literal vertex for occurrence r. Indicate clause-triangle colours 0,1,2 and that the two literal positions with opposite Boolean values can take opposite colours, with the third clause node taking 2. Preserve separate occurrence vertices when a literal repeats.
- Source lines: 52, 54, 56.
- Frozen source SHA-256: `7aa52829ad90370b2084b41aaccedead4262ec006111d7b86ba88b4d58bbdf28`.
- Original screenshot evidence: `thm-three-sat-reduces-to-three-colourability--01.png` (`33f721cf760b5c6111b00b58a76cafa5e00df613696a48f89c5f36a67da363ab`).
