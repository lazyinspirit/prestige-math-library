---
id: ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl
kind: example
title: "A six-cycle and two disjoint triangles are regular but one-WL-indistinguishable"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-labeled-graph
  - def-graph-isomorphism
  - def-multiset
  - def-one-dimensional-weisfeiler-lehman-test
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§§2 and 5.2, one-WL refinement and its regular-graph limitation."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.4.1, regular-graph examples indistinguishable by 1-WL and message passing."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, stated shared limitations of 1-WL and standard GNNs."
verification:
  precheck: pass
---

## Example

Let $G$ have vertices $0,1,2,3,4,5$, edges $\{\{0,1\},\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{5,0\}\}$, and the same initial label $\star$ at every vertex. Let $H$ have vertices $a_0,a_1,a_2,b_0,b_1,b_2$, edges $\{\{a_0,a_1\},\{a_1,a_2\},\{a_2,a_0\},\{b_0,b_1\},\{b_1,b_2\},\{b_2,b_0\}\}$, and the same initial label $\star$ at every vertex. Both graphs are 2-regular. Every pair of vertices in $G$ can be joined by a finite edge path, whereas no edge path joins a vertex among $a_0,a_1,a_2$ to a vertex among $b_0,b_1,b_2$ in $H$. The graphs are nonisomorphic, yet one-dimensional Weisfeiler–Leman color refinement gives the same graph color multiset at every finite round.

## Example references

[[def-finite-labeled-graph|finite graphs and neighborhoods]]

[[def-graph-isomorphism|label-preserving graph isomorphisms]]

[[def-multiset|finite multisets]]

[[def-one-dimensional-weisfeiler-lehman-test|one-dimensional color refinement]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §§2 and 5.2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.4.1](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

## Diagram

The left component draws the six vertices and six cyclic edges of $G$. The right component draws the two separate three-vertex cycles of $H$; no edge joins those cycles. The vertex names are shown, and every vertex has label $\star$. The verification below uses the listed edge sets and does not rely on the drawing.

```tikz
\begin{tikzpicture}[scale=0.9]
\node[draw,circle,inner sep=2pt] (v0) at (0,1.4) {$0$};
\node[draw,circle,inner sep=2pt] (v1) at (1.2,2.1) {$1$};
\node[draw,circle,inner sep=2pt] (v2) at (2.4,1.4) {$2$};
\node[draw,circle,inner sep=2pt] (v3) at (2.4,0) {$3$};
\node[draw,circle,inner sep=2pt] (v4) at (1.2,-0.7) {$4$};
\node[draw,circle,inner sep=2pt] (v5) at (0,0) {$5$};
\draw (v0)--(v1)--(v2)--(v3)--(v4)--(v5)--(v0);
\node at (1.2,-1.35) {$G$};
\begin{scope}[xshift=5.5cm]
\node[draw,circle,inner sep=2pt] (a0) at (0,1.1) {$a_0$};
\node[draw,circle,inner sep=2pt] (a1) at (1,1.1) {$a_1$};
\node[draw,circle,inner sep=2pt] (a2) at (0.5,2) {$a_2$};
\draw (a0)--(a1)--(a2)--(a0);
\node[draw,circle,inner sep=2pt] (b0) at (2.5,1.1) {$b_0$};
\node[draw,circle,inner sep=2pt] (b1) at (3.5,1.1) {$b_1$};
\node[draw,circle,inner sep=2pt] (b2) at (3,2) {$b_2$};
\draw (b0)--(b1)--(b2)--(b0);
\node at (1.75,0.25) {$H$};
\end{scope}
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The two graphs and their uniform initial labels in the Example. Verify regularity, nonisomorphism, and one-WL indistinguishability.

[F1] [[def-finite-labeled-graph]]: A vertex neighborhood consists exactly of vertices joined to it by an edge.

[F2] [[def-graph-isomorphism]]: A graph isomorphism is a bijection preserving adjacency in both directions.

[F3] [[def-one-dimensional-weisfeiler-lehman-test]]: The next color is the ordered pair of the current color and the multiset of current neighbor colors.

[F4] [[def-multiset]]: A finite multiset records every element with its multiplicity.

## Verification

1.1 In $G$, vertex $i$ has the two distinct neighbors $i-1$ and $i+1$ modulo $6$. In $H$, each vertex has the other two vertices of its own triangle as neighbors. Thus every vertex in each graph has degree $2$. [given, F1, algebra]

1.2 At round $0$, all vertices of both graphs have color $\star$. If every vertex in both graphs has a common color $c_t$ at round $t$, then each vertex has the neighbor-color multiset with exactly two copies of $c_t$. The update [F3] therefore assigns the same ordered-pair color to every vertex in both graphs at round $t+1$. By induction, each graph has six copies of the same color at every round, so their color multisets agree and 1-WL never distinguishes them. [given, F3, F4, induction, algebra]

2.1 Suppose an isomorphism $\varphi:G\to H$ existed. Choose one vertex from each of the two triangles of $H$ and take their preimages under the surjection $\varphi$. In $G$ a finite sequence of cyclically consecutive vertices joins those preimages. Applying $\varphi$ to that sequence gives an edge path in $H$ by [F2], but $H$ has no edge between its triangles and hence no such path. This contradiction proves nonisomorphism. [given, F2, algebra] ∎
