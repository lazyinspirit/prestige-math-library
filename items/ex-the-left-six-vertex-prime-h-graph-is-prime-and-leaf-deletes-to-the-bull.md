---
id: ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull
kind: example
title: "The left six-vertex prime $\\mathcal H$-graph: primeness and leaf/co-leaf deletions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-left-six-vertex-prime-h-graph, def-prime-graph, def-module-of-a-graph, def-bull-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized graph-identity and finite-proof repair; exhaustive module check and targeted precheck/rendercheck; no independent judgment."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Figure 1"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The left six-vertex prime $\mathcal H$-graph $L$ is prime. Its leaves are
$c,f$, and $b$ is its unique co-leaf, meaning a vertex of degree
$|V(L)|-2=4$. Deleting $f$ leaves a diamond with a pendant leaf at $b$;
deleting $b$ leaves the path $a-d-e-f$ and isolated vertex $c$.
Deleting either leaf does **not** give the bull.

## Facts & Assumptions

**Given:** The graph $L$ with vertices $a,b,c,d,e,f$ and edges
$ab,bc,ad,bd,be,de,ef$ from [[def-left-six-vertex-prime-h-graph]].

[L1] A graph is prime exactly when it has no nontrivial module
([[def-prime-graph]], [[def-module-of-a-graph]]).

[L2] The bull has five edges ([[def-bull-graph]]).

[F1] The neighbourhoods computed from the given edge set are
$$N(a)=\{b,d\},\quad N(b)=\{a,c,d,e\},\quad N(c)=\{b\},\quad N(d)=\{a,b,e\},\quad N(e)=\{b,d,f\},\quad N(f)=\{e\}.$$

## Verification

**Proof technique:** direct finite check.

1.1 By [F1], exactly $c,f$ have degree one and exactly $b$ has degree four. Deleting $f$ leaves edges $ab,bc,ad,bd,be,de$: on $a,b,d,e$ these form a complete graph minus $ae$, with $c$ attached only to $b$. Deleting $b$ leaves exactly $ad,de,ef$ and isolated $c$. Deleting either leaf removes one of the seven edges, leaving six, so neither resulting graph is the five-edge bull. [given, F1, L2]

1.2 If a module $M$ contains a set $S$ and a vertex outside $S$ has both a neighbour and a nonneighbour in $S$, that vertex must also belong to $M$. Otherwise it would violate the defining uniform outside adjacency of a module. Thus such vertices can be forced into $M$ successively. [L1]

2.1 The following table covers every unordered pair of vertices. Starting from the pair in the first column, append the vertices in the second column from left to right. At each append, [F1] shows that the new vertex has a neighbour and a nonneighbour in the set already obtained. Consequently step 1.2 forces all six vertices into every module containing the initial pair. [F1, step 1.2]

| Initial pair | Successive forced vertices |
|---|---|
| $a,b$ | $c,d,e,f$ |
| $a,c$ | $d,e,f,b$ |
| $a,d$ | $e,f,b,c$ |
| $a,e$ | $f,b,c,d$ |
| $a,f$ | $b,c,d,e$ |
| $b,c$ | $a,d,e,f$ |
| $b,d$ | $c,a,e,f$ |
| $b,e$ | $a,c,d,f$ |
| $b,f$ | $a,c,d,e$ |
| $c,d$ | $a,e,f,b$ |
| $c,e$ | $d,a,f,b$ |
| $c,f$ | $b,a,d,e$ |
| $d,e$ | $a,f,b,c$ |
| $d,f$ | $a,b,c,e$ |
| $e,f$ | $b,a,c,d$ |

3.1 Every set with at least two vertices contains one of those pairs, so step 2.1 excludes every proper module of size at least two. By [L1], $L$ is prime. Together with step 1.1 this proves all the stated claims. [L1, step 1.1, step 2.1] ∎

## Remarks

The stable item ID retains its earlier bull-deletion wording for link
compatibility. That claim concerned the superseded net interpretation of
the left graph. The title, statement and verification above concern the
actual Nguyen–Scott–Seymour Figure 1 graph.
