---
id: lem-csm-frontier-stable-mayer-tree-bound
kind: lemma
title: "Stable continuum Mayer coefficients obey an integrated tree bound"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-csm-stable-superstable-continuum-interaction
  - def-countable-choice
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-continuous-functions-are-borel-measurable
  - def-extended-real-valued-measurable-function
  - def-borel-sigma-algebra
  - def-borel-sigma-algebra-on-the-extended-real-line
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-borel-sets-are-lebesgue-measurable
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-simple-graph-without-a-finiteness-hypothesis
  - def-walks-paths-and-connectedness-in-a-simple-graph
  - def-cycles-trees-and-forests-in-a-simple-graph
  - def-finite-simple-graph
  - def-spanning-tree
  - thm-connected-iff-has-spanning-tree
  - lem-spanning-tree-set-is-finite
  - def-max-min
  - lem-finite-set-has-max
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - def-sum-over-a-finite-index-set
  - cor-cardinality-of-the-power-set
  - thm-subset-of-a-finite-set
justified_by: []
dependency_roles:
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
  thm-arithmetic-and-lattice-operations-preserve-measurability: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-extended-real-valued-measurable-function: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra-on-the-extended-real-line: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  def-simple-graph-without-a-finiteness-hypothesis: mathematical-premise
  def-walks-paths-and-connectedness-in-a-simple-graph: mathematical-premise
  def-cycles-trees-and-forests-in-a-simple-graph: mathematical-premise
  def-finite-simple-graph: mathematical-premise
  def-spanning-tree: mathematical-premise
  thm-connected-iff-has-spanning-tree: mathematical-premise
  lem-spanning-tree-set-is-finite: mathematical-premise
  def-max-min: mathematical-premise
  lem-finite-set-has-max: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  def-sum-over-a-finite-index-set: mathematical-premise
  cor-cardinality-of-the-power-set: mathematical-premise
  thm-subset-of-a-finite-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: null
empirical_premises: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Suren Poghosyan and Daniel Ueltschi, Abstract cluster expansion with applications to statistical mechanical systems"
      url: "https://arxiv.org/pdf/0811.4281"
      locator: "§6, Proposition 6.1(a), Lemmas 6.2–6.3 and complete proof, PDF pp. 11–14; §3, classical gas assumptions and convergence criterion, PDF pp. 4–5."
    - title: "Aldo Procacci and Sergio A. Yuhjtman, Convergence of Mayer and Virial expansions and the Penrose tree-graph identity"
      url: "https://arxiv.org/pdf/1508.07379"
      locator: "§2.2, Proposition 1, equation (2.18); §§3.1–3.3, the partition scheme, Penrose identity and proof of Proposition 1."
---

## Statement

Assume the Axiom of Countable Choice. All displayed integrals use Lebesgue measure. Let $n\in\mathbb N$ with $n\geq2$ and write $[n]=\{1,\ldots,n\}$. A simple graph on $[n]$ is $([n],E)$ with $E$ a set of unordered two-element subsets of $[n]$; a path is a finite vertex list with distinct vertices and consecutive pairs in $E$; connected means every two vertices are joined by a path; a cycle is a vertex list $(v_0,\ldots,v_k)$ with $k\geq3$, $v_k=v_0$, $v_0,\ldots,v_{k-1}$ distinct, and consecutive pairs in $E$; a tree is a connected graph with no cycle; a forest is a graph with no cycle. Finite sums and products over graph, edge, vertex, and subset sets below are enumeration-independent; the empty sum is $0$ and the empty product is $1$. Fix $d\in\mathbb N$ with $d\geq1$, let $v:\mathbb R^d\to\mathbb R\cup\{+\infty\}$ be an even Borel pair potential with no $-\infty$ values, and suppose it is stable with constant $B\in\mathbb R$, $B\geq0$. Fix $\beta\in\mathbb R$ with $\beta>0$, set $e^{-c(+\infty)}:=0$ for every $c>0$, define the Mayer function $f_\beta(x):=e^{-\beta v(x)}-1$, and suppose

$$C_\beta:=\int_{\mathbb R^d}|f_\beta(x)|\,dx<\infty.$$

Let $\mathcal C_n$ be the connected simple graphs on $[n]$ and let $\mathcal T_n$ be the trees on $[n]$. These families are finite because $[n]$ has finitely many unordered two-element subsets and each graph is determined by a subset of those edges. A spanning tree of a finite graph is a tree with the same vertex set and a subset of its edges. A leaf is a vertex incident to exactly one edge. Put

$$U_n(x_1,\ldots,x_n):=\sum_{G\in\mathcal C_n}\ \prod_{\{i,j\}\in E(G)}f_\beta(x_i-x_j).$$

For every configuration $(x_1,\ldots,x_n)\in(\mathbb R^d)^n$,

$$|U_n(x_1,\ldots,x_n)|\leq e^{2\beta Bn}\sum_{T\in\mathcal T_n}\ \prod_{\{i,j\}\in E(T)}|f_\beta(x_i-x_j)|,$$

where $\mathcal T_n$ is the set of labelled trees on $\{1,\ldots,n\}$. In particular,

$$\int_{(\mathbb R^d)^{n-1}}|U_n(0,x_2,\ldots,x_n)|\,dx_2\cdots dx_n\leq e^{2\beta Bn}n^{n-2}C_\beta^{\,n-1}.$$

## Statement references

[[def-csm-stable-superstable-continuum-interaction]]

## Facts & Assumptions

**Given:** Countable Choice, a stable even Borel pair potential $v$, its stability constant $B$, and $\beta>0$.

[F1] [[def-csm-stable-superstable-continuum-interaction]]: $v$ is even Borel with values in $\mathbb R\cup\{+\infty\}$, and stability means $\sum_{i<j}v(x_i-x_j)\geq-BN$ for every finite list of $N$ positions.

[F2] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], and [[thm-exponential-is-strictly-increasing]]: $e^u=\sum_{k\geq0}u^k/k!$, $e^{u+v}=e^ue^v$, and the real exponential is continuous and increasing.

[F3] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]: under Countable Choice, Lebesgue measure on $\mathbb R^d$ is sigma-finite and finite on bounded sets.

[F4] [[def-borel-sigma-algebra]], [[def-extended-real-valued-measurable-function]], [[def-borel-sigma-algebra-on-the-extended-real-line]], [[cor-continuous-functions-are-borel-measurable]], [[thm-composition-with-borel-functions-preserves-measurability]], and [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: a map $v:\mathbb R^d\to\overline{\mathbb R}$ is Borel when $v^{-1}(A)\in\mathcal B(\mathbb R^d)$ for every $A\in\mathcal B(\overline{\mathbb R})$; the domain Borel sigma-algebra is generated by Euclidean open sets and the target uses the order Borel sigma-algebra. Continuous coordinate maps are Borel, Borel composition and finite arithmetic preserve measurability, and $\{+\infty\}$ is target-Borel.

[F5] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] and [[thm-borel-sets-are-lebesgue-measurable]]: for two Euclidean factors, the product Borel sigma-algebra equals the Borel sigma-algebra of the product; under Countable Choice, Borel sets in Euclidean space are Lebesgue measurable.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions on sigma-finite product measure spaces may be integrated in either order.

[F7] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translation preserves Lebesgue measurability and measure.

[F8] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous for nonnegative scalar multiples.

[F9] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral is additive for sums of nonnegative measurable functions.

[F10] [[def-simple-graph-without-a-finiteness-hypothesis]], [[def-finite-simple-graph]], [[def-walks-paths-and-connectedness-in-a-simple-graph]], and [[def-cycles-trees-and-forests-in-a-simple-graph]]: a graph is a vertex set with an edge set of unordered two-element subsets; a finite graph has finite vertex set; paths, connectedness, cycles, trees, and forests have the meanings stated in the Statement; the component of a vertex is the induced subgraph on vertices joined to it by paths. [[def-spanning-tree]] defines a spanning tree as a tree on the same vertices with an edge subset.

[F12] [[def-abs-value]], [[lem-of-abs-value]], and [[lem-of-triangle-inequality]]: real absolute value is nonnegative, multiplicative and subadditive.

[F13] [[def-sum-over-a-finite-index-set]]: sums over finite sets are defined by an enumeration-independent finite sum.

[F14] [[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]]: the two-element subsets of the finite set $[n]$ form a finite set, its power set is finite, and the families $\mathcal C_n$ and $\mathcal T_n$ are finite subsets of that power set of edge sets.

[A1] Assume Countable Choice, as required for the sigma-finite Lebesgue product spaces used below. [[def-countable-choice]]

## Proof

**Given:** [F1], [F2], [F3], [F4], [F5], [F6], [F7], [F8], [F9], [A1], and the finite Mayer function and coefficient in the Statement.

1.1 Fix $n\geq2$ and positions $x_1,\ldots,x_n$, and put $f_{ij}=f_\beta(x_i-x_j)$. For each nonempty label set $I$, let $U_I=\sum_{i<j,\ i,j\in I}v(x_i-x_j)$. If $U_I=+\infty$, the adopted convention gives $e^{-2\beta U_I}=0$; otherwise all pair values in the sum are finite. In either case the exponential definition and addition law [F2], together with evenness of $v$, give $\prod_{i\in I}\prod_{j\in I\setminus\{i\}}|1+f_{ij}|=e^{-2\beta U_I}$. Stability and monotonicity [F1, F2] imply this product is at most $e^{2\beta B|I|}$. Writing $q_i=\prod_{j\in I\setminus\{i\}}|1+f_{ij}|$, all $q_i$ are nonnegative and their product is at most $e^{2\beta B|I|}$; hence some $r\in I$ has $q_r\leq e^{2\beta B}$. [F1, F2, F12, given, algebra]

1.2 The maps $(x_1,\ldots,x_n)\mapsto x_i-x_j$ are continuous and hence Borel under [A1, F4]. Since $v$ is Borel [F1], composition with $v$ is Borel [F4]. The adopted map $u\mapsto e^{-\beta u}$ on $\mathbb R\cup\{+\infty\}$ is Borel: on $\mathbb R$ it is continuous by [F2], and its value at the Borel singleton $+\infty$ is $0$ by [F4]. Thus $f_\beta$ is Borel, and $U_n$ is a finite sum of finite products of Borel factors [F4]. The same composition and arithmetic facts on $\mathbb R^{dn}$ make each tree weight Borel. Repeated application of the two-factor identity in [F5] identifies the finite product Borel sigma-algebra, and the Borel-to-Lebesgue clause in [F5] makes the tree weight measurable for product Lebesgue measure. [F1, F2, F4, F5]

2.1 For disjoint label sets $I,J$, define $g(I,J)$ as the finite sum of $\prod_{\{i,j\}\in E(G)}f_{ij}$ over simple graphs on $I\cup J$ in which every connected component meets $I$; set $g(\varnothing,\varnothing)=1$ and $g(\varnothing,J)=0$ for nonempty $J$. Evenness in [F1] makes each unordered-edge weight independent of which endpoint is written first. Choose $r\in I$ as in step 1.1 and put $I'=I\setminus\{r\}$. In each graph let $K\subseteq J$ be the neighbors of $r$ in $J$. Edges from $r$ to $I'$ are independently present or absent, and summing their two weights gives $\prod_{j\in I'}(1+f_{rj})$. Deleting $r$ leaves a graph all of whose components meet $I'\cup K$, and conversely any such graph reconstructs exactly one original graph after adjoining the chosen $r$-edges. Thus $g(I,J)=\left(\prod_{j\in I'}(1+f_{rj})\right)\sum_{K\subseteq J}\left(\prod_{k\in K}f_{rk}\right)g(I'\cup K,J\setminus K)$. [F1, F10, F13, F14, step 1.1, construct, algebra]

2.2 Under Countable Choice [A1], the product Lebesgue spaces are sigma-finite by [F3], so Tonelli [F6] applies. Root a labelled tree $T$ at $1$. A finite tree with at least two vertices has at least two leaves: a longest simple path exists in a finite graph, and each endpoint has exactly one incident edge, since another incident edge would either extend the path or create a cycle. At least one of the two leaves differs from the root. Deleting a leaf preserves connectedness and acyclicity on the remaining vertices, so the remaining graph is a tree unless only the root remains. Delete such a leaf and integrate its coordinate first. Translation invariance [F7] and evenness of $f_\beta$ give $\int_{\mathbb R^d}|f_\beta(x_\ell-x_j)|\,dx_\ell=C_\beta$. Repeating after each leaf deletion proves that the pinned tree integral is $C_\beta^{n-1}$. [A1, F3, F6, F7, F10, F12, step 1.2, given, algebra]

3.1 Let $\mathcal F_I(J)$ be the forests on $I\cup J$ with exactly one vertex from $I$ in each tree, and define $h(I,J)=e^{2\beta B(|I|+|J|)}\sum_{F\in\mathcal F_I(J)}\prod_{\{i,j\}\in E(F)}|f_{ij}|$, with the same empty-root convention as $g$. For nonempty $I$, delete the root $r$ selected in step 1.1. Its component cannot contain another vertex of $I$, and the set $K\subseteq J$ of its neighbors gives exactly the roots of the resulting branches; this is a bijection with forests in $\mathcal F_{I'\cup K}(J\setminus K)$. The exponential addition law [F2] factors the size weight, so $h(I,J)=e^{2\beta B}\sum_{K\subseteq J}(\prod_{k\in K}|f_{rk}|)h(I'\cup K,J\setminus K)$. If $I=\varnothing$, both $g$ and $h$ are $1$ for $J=\varnothing$ and $0$ otherwise. Induct on $|I|+|J|$ from these base cases. Step 1.1 supplies the root bound and step 2.1 supplies the graph recurrence; applying the finite-sum real triangle inequality from [F12, F13] gives $|g(I,J)|\leq q_r\sum_K(\prod_{k\in K}|f_{rk}|)|g(I'\cup K,J\setminus K)|$. The induction hypothesis and $q_r\leq e^{2\beta B}$ bound this by $h(I,J)$. At $I=\{1\}$, $J=\{2,\ldots,n\}$, $g(I,J)=U_n$ and every forest in $\mathcal F_I(J)$ is a spanning tree. This proves the pointwise tree bound. [F2, F10, F12, F13, step 1.1, step 2.1, construct, algebra]

4.1 In the Prüfer encoding, repeatedly delete the least-labelled leaf and record its neighbor; after $n-2$ deletions this gives a word of length $n-2$ over $\{1,\ldots,n\}$. Step 2.2 guarantees a leaf other than the root at every stage with at least two vertices, and deleting a leaf leaves a tree until the final vertex pair. At each stage a vertex occurs in the remaining word exactly once for each incident edge deleted before that vertex; it is recorded when a neighboring leaf is removed, and the vertex itself is deleted once it becomes a leaf, except for the final two vertices. Thus its occurrence count is its current degree minus one, and absence from the word is equivalent to being a current leaf. Conversely, from any such word, repeatedly join the least label absent from the remaining word to its first symbol and delete that label and symbol, then join the last two labels. Adding a new vertex with one edge to a tree makes the new vertex a leaf and preserves connectedness and acyclicity; induction on the word length therefore shows this constructs a tree. In the resulting tree the least absent label is a leaf and the first symbol is its neighbor, so encoding reverses every decoding step. The procedures give a bijection with all $n^{n-2}$ words. Integrating the pointwise tree bound of step 3.1 and using monotonicity, homogeneity and finite additivity [F8, F9] with the tree integral from step 2.2 yields $\int|U_n(0,x_2,\ldots,x_n)|\,dx_2\cdots dx_n\leq e^{2\beta Bn}n^{n-2}C_\beta^{n-1}$. [F8, F9, step 3.1, step 2.2, algebra] ∎


## Remarks

**Background context (not used in the proof).** [[thm-connected-iff-has-spanning-tree]]: every finite connected graph has a spanning tree; [[lem-spanning-tree-set-is-finite]]: a finite graph has only finitely many spanning trees; [[def-max-min]] and [[lem-finite-set-has-max]]: every nonempty finite set of real rank sums has a minimum.

## Diagram

The solid edges $12,13,14$ form a spanning tree on four vertices; the dashed edge $34$ adds one extra edge. The numerical labels distinguish the depicted edges. The proof proceeds by root deletion and a marked-forest expansion, with all bounds established algebraically above.

```tikz
\begin{tikzpicture}
  \node[circle,draw,inner sep=2pt] (v1) at (1.5,1.2) {$1$};
  \node[circle,draw,inner sep=2pt] (v2) at (0,0) {$2$};
  \node[circle,draw,inner sep=2pt] (v3) at (3,0) {$3$};
  \node[circle,draw,inner sep=2pt] (v4) at (4.5,1.2) {$4$};
  \draw (v1) -- node[left] {$1$} (v2);
  \draw (v1) -- node[below] {$2$} (v3);
  \draw (v1) -- node[above] {$3$} (v4);
  \draw[dashed,bend right=20] (v3) to node[below] {$6$} (v4);
\end{tikzpicture}
```

