---
id: def-robust-codeword-blocks-for-constraint-graphs
kind: definition
title: "Shared codeword blocks and edge acceptance circuits"
status: draft
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - lem-walsh-hadamard-code-has-distance-one-half
  - def-constraint-graph-and-labeling-value
  - def-boolean-circuit-size-depth-fanin-and-basis
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1 and §18.5.2 proof of Lemma 18.30, printed pp. 363–364 and 378–379"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
---

## Definition

Fix a finite ordered alphabet $\Sigma=\{\sigma_0,\ldots,\sigma_{W-1}\}$ with
$W\ge2$. Put $k=\lceil\log_2W\rceil$ and $\ell=2^k$. Let
$u^{(0)},\ldots,u^{(2^k-1)}$ be the $k$-bit vectors in lexicographic order and
define the codeword of $\sigma_i$ to be
$$C(\sigma_i):=\operatorname{WH}_k(u^{(i)})\in\{0,1\}^{\ell},\qquad 0\le i<W.$$
The map $C$ is injective, and every two distinct selected codewords have
relative distance $\delta=1/2$ by
[[lem-walsh-hadamard-code-has-distance-one-half]]. Moreover,
$W\le\ell<2W$: the lower bound follows from $k=\lceil\log_2W\rceil$, and
$2^{k-1}<W$ gives the strict upper bound.

For a constraint graph over $\Sigma$ as in
[[def-constraint-graph-and-labeling-value]], discard its isolated vertices
(which do not affect its value). Give each remaining vertex $v$ one physical
block $B_v\in\{0,1\}^{\ell}$, shared by all incident edges. A block is
**valid** when it equals $C(a)$ for some $a\in\Sigma$; its decoded label is
then the unique such $a$. The table order inside each block is that of
[[def-walsh-hadamard-encoding-and-relative-distance]].

For each edge $e=(v,w)$ with its specified endpoint order and relation
$R_e\subseteq\Sigma^2$, define an edge circuit with formal input pieces
$X,Y\in\{0,1\}^{\ell}$. Its Boolean function is
$$E_{R_e}(X,Y):=\bigvee_{(a,b)\in R_e}\bigl([X=C(a)]\land[Y=C(b)]\bigr),$$
where $[P]$ is $1$ when $P$ holds and $0$ otherwise, and the empty disjunction
is $0$. Thus $E_{R_e}(X,Y)=1$ exactly when both blocks are valid and their
decoded labels form a pair in $R_e$. This function has an explicit circuit in
the AND/OR/NOT basis of [[def-boolean-circuit-size-depth-fanin-and-basis]]:
compare each input bit to the corresponding constant codeword bit, conjoin the
$2\ell$ comparisons for each allowed pair, then OR the pair tests. The circuit
uses $O(|R_e|\ell)$ gates (or the constant-zero output if $R_e=\varnothing$),
so at most $O(W^2\ell)=O(W^3)$ gates. In the graph, compose its first formal
piece with $B_v$ and its second with $B_w$; for a loop $v=w$, both pieces use
the same physical block, so the test is exactly the diagonal test
$R_e(a,a)$ required for loops. Reversing an endpoint order transposes the
relation and swaps the formal pieces. If the graph has no edges, it has no
blocks or edge circuits after isolated vertices are discarded.
