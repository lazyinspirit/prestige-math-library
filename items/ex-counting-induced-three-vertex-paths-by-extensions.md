---
id: ex-counting-induced-three-vertex-paths-by-extensions
kind: example
title: "Counting the induced copies of $P_3$ in $P_4$ by extension sets"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-induced-copies-counted-by-extending-a-deleted-vertex, def-induced-copy-number, def-induced-embedding-and-induced-copy, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The identity that counts induced copies by extension sets can be seen directly in
$P_4$: the induced-copy number of $P_3$ in $P_4$ is $4$, and the extension-set
sum of [[lem-induced-copies-counted-by-extending-a-deleted-vertex]] gives the
same value.

## Facts & Assumptions

**Given:** The path $P_4$ with vertices $0,1,2,3$, and the pattern $P_3$ obtained by deleting an endpoint from $P_4$.

[L1] The induced-copy number counts induced embeddings of the pattern, not only vertex subsets ([[def-induced-copy-number]], [[def-induced-embedding-and-induced-copy]]).

[L2] The extension lemma expresses the induced-copy number of a graph by summing, over the induced embeddings of the graph with one deleted vertex, the sizes of the corresponding extension sets ([[lem-induced-copies-counted-by-extending-a-deleted-vertex]]).

## Verification

**Proof technique:** direct.

1.1 Exactly the vertex sets $\{0,1,2\}$ and $\{1,2,3\}$ induce a copy of $P_3$ inside $P_4$. [given]

2.1 Each of those two vertex sets supports two induced embeddings of $P_3$, one for each automorphism of the path, so [L1] gives $\operatorname{ind}_{P_3}(P_4)=4$. [step 1.1, L1]

3.1 Delete the endpoint labelled $0$ from the pattern $0$-$1$-$2$. The six oriented edge embeddings $1\mapsto a,2\mapsto b$ in $P_4$ have extension-set sizes $0,1,1,1,1,0$ for $(a,b)=(0,1),(1,0),(1,2),(2,1),(2,3),(3,2)$ respectively: the extending image of $0$ must be adjacent to $a$ and nonadjacent to $b$. Their sum is $4$, agreeing with step 2.1 and [L2]. [step 2.1, L2, given] ∎
