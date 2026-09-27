---
id: prop-recursive-dehn-function-implies-solvable-word-problem
kind: proposition
title: "A recursive Dehn function yields a solution to the word problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, lem-relator-expressions-give-controlled-singular-planar-diagrams, prop-equality-of-words-in-a-presentation, thm-word-problem-for-free-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $\mathcal P=\langle X\mid R\rangle$ be a finite presentation. If its Dehn
function $\delta_{\mathcal P}$ is recursive, then the word problem for
$\mathcal P$ is solvable.

## Facts & Assumptions

**Given:** A finite presentation $\mathcal P=\langle X\mid R\rangle$ with recursive Dehn function $\delta_{\mathcal P}$, and an input word $w$.

[L1] A word is trivial in the presented group exactly when it lies in the normal closure of the relators. ([[prop-equality-of-words-in-a-presentation]])

[L2] An expression with $m$ relator factors and boundary word of length $n$ gives a singular planar diagram with at most $m$ faces, at most $Lm+n$ edges, and literal outer word $w$ ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]).

[L3] The free-group word problem is decidable by free reduction. ([[thm-word-problem-for-free-groups]])

[F1] Algebraic relator area and the Dehn function use the least number of conjugated relator factors ([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]]).

## Proof

**Proof technique:** direct.

1.1 Let $n=|w|$, $L=\max(\{0\}\cup\{|r|:r\in R\})$, and compute $B=\delta_{\mathcal P}(n)$. If $w$ is null, [F1] gives an expression using at most $B$ conjugates of relators (the empty expression when its area is zero). By [L2] there is a singular planar diagram with literal boundary $w$, at most $B$ occupied faces and at most $N=LB+n$ edges. No bound on the conjugator words is asserted or needed. [given, F1, L2]

1.2 Enumerate finite connected plane maps with at most $N$ edges: name at most $2N+1$ vertices and $N$ edges, specify the two endpoint occurrences of every edge (including loops), the cyclic order of its incident germs at every vertex, and a distinguished directed outer corner. A finite rotation system determines the facial walks, including twice-traversed bridges. There are finitely many such data up to these bounded names, and face tracing by the next-germ permutation is a finite computation. Retain only connected planar maps whose distinguished outer walk reads the literal word $w$, whose number of bounded faces is at most $B$, and for which every bounded face's directed edge labels read a cyclic conjugate of some word in $R^{\pm1}$. Assign each edge one of the finitely many generator or inverse labels and check each bounded face by [L3]. The one-vertex, zero-edge map handles $w$ empty and $B=0$. All tests are finite; planarity of the rotation system can be checked by its vertex-edge-face Euler count on the connected orientable ribbon surface, or by finite drawing search. [given, L3, algebra]

2.1 Every map retained in step 1.2 certifies that $w$ is null. To see this without assuming the group word problem, take a spanning tree of the finite plane graph and a dual spanning tree of bounded faces toward the exterior. Cut along the primal tree and remove bounded faces in reverse dual-tree order. At each removal the exterior boundary word changes by a conjugate of that face word or its inverse, with free cancellations from the two traversals of each cut edge. Once all faces have been removed, the remaining doubled tree edges freely reduce to the empty word. Thus the original exterior word lies in the normal closure of $R$; [L1] makes it trivial in the presented group. This argument also covers loops, repeated vertices and bridges because it uses directed edge occurrences in the facial walks. [L1, step 1.2]

3.1 If $w$ is null, step 1.1 supplies a diagram satisfying the finite bounds. Its rotation system, outer corner and labels occur in the enumeration of step 1.2, so the search succeeds. Conversely, a successful search certifies nullity by step 2.1. The finite search therefore decides the word problem. [step 1.1, step 1.2, step 2.1] ∎
