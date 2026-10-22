---
id: lem-csm-frontier-polymer-tree-majorant
kind: lemma
title: "Rooted connected polymer sums obey the tree majorant"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-abstract-polymer
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - def-factorial-and-falling-factorial
  - def-nonnegative-extended-series
  - def-finite-sum
  - lem-finite-sum-laws
  - def-sum-over-a-finite-index-set
  - def-finite-simple-graph
  - def-spanning-tree
  - thm-connected-iff-has-spanning-tree
  - lem-spanning-tree-set-is-finite
  - def-max-min
  - lem-finite-set-has-max
  - def-canonical-natural
  - lem-of-naturals-positive
  - def-ordered-field
  - lem-of-add-order
justified_by: []
dependency_roles:
  def-csm-frontier-abstract-polymer: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-sum-over-a-finite-index-set: mathematical-premise
  def-finite-simple-graph: mathematical-premise
  def-spanning-tree: mathematical-premise
  thm-connected-iff-has-spanning-tree: mathematical-premise
  lem-spanning-tree-set-is-finite: mathematical-premise
  def-max-min: mathematical-premise
  lem-finite-set-has-max: mathematical-premise
  def-canonical-natural: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  def-ordered-field: mathematical-premise
  lem-of-add-order: mathematical-premise
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
    - title: "Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§5.4, Theorem 5.4 and its complete proof, PDF pp. 5–8 (printed pp. 224–227): the Kotecký–Preiss rooted connected-cluster majorant."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, Theorem 1 and complete rooted-cluster induction, PDF pp. 1–4."
---

## Statement

Let $(\Gamma,\sim,z)$ be an abstract polymer model, and let $a:\Gamma\to[0,\infty)$. Interpret each countable sum over polymer labels of nonnegative terms as the supremum of its finite subsums in $[0,+\infty]$, and interpret a nonnegative series as the supremum of its increasing partial sums in $[0,+\infty]$. Suppose

$$\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma\qquad(\gamma\in\Gamma).$$

For each fixed root $\gamma\in\Gamma$, define the nonnegative rooted connected-cluster sum

$$R_\gamma:=\sum_{n=1}^{\infty}\frac1{(n-1)!}\sum_{\gamma_2,\ldots,\gamma_n\in\Gamma}|U_n(\gamma,\gamma_2,\ldots,\gamma_n)|\prod_{j=2}^n|z_{\gamma_j}|$$

Then $R_\gamma$ is well-defined as a possibly extended nonnegative series and satisfies $R_\gamma\leq e^{a_\gamma}$.

## Statement references

[[def-csm-frontier-abstract-polymer]]

## Facts & Assumptions

**Given:** The abstract polymer model and the function $a$ in the Statement.

[F1] [[def-csm-frontier-abstract-polymer]], [[def-finite-simple-graph]]: countable means finite or bijective with $\mathbb N$; a simple graph has an edge set of unordered two-element vertex subsets; paths are finite vertex lists with distinct vertices and consecutive edges; connected means joined by a path; a tree is connected and has no cycle; $U_n$ sums over connected simple graphs with edge weight $-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}\in\{-1,0\}$, so $U_n$ is real-valued; a graph on the finite vertex set $[n]$ is finite.

[F2] [[def-real-exponential-function-and-e]]: for real $u$, $e^u=\sum_{k=0}^{\infty}u^k/k!$.

[F3] [[thm-exponential-is-strictly-increasing]]: the real exponential is continuous and strictly increasing.

[F4] [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]: if $z=x+iy$, then $|z|=\sqrt{x^2+y^2}$; complex modulus is nonnegative, multiplicative, and satisfies $|z+w|\leq|z|+|w|$.

[F5] [[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]: real absolute value is $x$ for $x\geq0$ and $-x$ for $x<0$; it is nonnegative, multiplicative, and satisfies the triangle inequality.

[F6] [[def-factorial-and-falling-factorial]], [[def-nonnegative-extended-series]]: $n!$ is the factorial, and a nonnegative extended series is the supremum of its increasing partial sums in $[0,+\infty]$.

[F7] [[def-finite-sum]], [[lem-finite-sum-laws]], and [[def-sum-over-a-finite-index-set]]: finite sums are defined by recursion and over finite sets by any enumeration-independent ordering; finite sums of real absolute values obey the triangle inequality by induction from the two-term triangle inequality.

[F8] [[def-spanning-tree]], [[thm-connected-iff-has-spanning-tree]]: a spanning tree has the same vertex set and an edge set contained in the graph's edge set; every finite connected graph has a spanning tree.

[F9] [[lem-spanning-tree-set-is-finite]], [[def-max-min]], [[lem-finite-set-has-max]]: a finite graph has finitely many spanning trees, and every nonempty finite set of real edge-rank sums has a minimum.

[F10] [[def-canonical-natural]], [[lem-of-naturals-positive]], [[def-ordered-field]], [[lem-of-add-order]]: the rank $\rho(e_k)=k\cdot1_{\mathbb R}$ is strictly increasing with $k$, and adding the same finite rank sum preserves strict inequality. The natural-embedding result is published with a locally reviewed proof and no independent audit stamp.

[A1] For every $\gamma\in\Gamma$, $\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma$.

## Proof

**Given:** The graph coefficient $U_n$ and the rooted majorant condition [A1].

1.1 Fix $n\geq2$ and a tuple $(\gamma_1,\ldots,\gamma_n)$, and let $H$ be the simple graph on $[n]$ whose edge $\{i,j\}$ is present exactly when $\gamma_i\sim\gamma_j$. By [F1], $U_n=\sum_{G\subseteq H,\ G\text{ connected}}(-1)^{|E(G)|}$. Here the complete graph on $[n]$ has edge set $\binom{[n]}2$, and $G\subseteq H$ means that $G$ has the same vertex set and $E(G)\subseteq E(H)$. Represent each edge $\{i,j\}$ with $i<j$ by $(i,j)$ and order these pairs lexicographically, first by $i$ and then by $j$; list the edges as $e_1<_{\rm lex}\cdots<_{\rm lex}e_m$ and assign rank $\rho(e_k)=k\cdot1_{\mathbb R}$. For a tree $T$, its rank sum is $\sum_{e\in E(T)}\rho(e)$. By [F8], each connected graph $G$ has a spanning tree; by [F9], its spanning trees form a finite nonempty set, so their finite real rank sums have a minimum. A tree has a unique path between any two vertices: connectedness gives a path, and two distinct paths would contain a cycle between their first divergence and next common vertex, contradicting acyclicity. Here is the cut and exchange argument used below. Let $f=\{u,v\}$ be an edge of a tree $T$. There is no $u$-$v$ path in $T-f$, since such a path together with $f$ would be a cycle in $T$. For any vertex $w$, the unique $T$-path from $u$ to $w$ either avoids $f$, or crosses $f$ from $u$ to $v$ and then has a suffix from $v$ to $w$ avoiding $f$. Thus every vertex is reachable from $u$ or from $v$ in $T-f$, but not both: reachability from both would concatenate to a $u$-$v$ walk avoiding $f$, and deleting repeated-vertex portions of a finite walk gives a path, contradicting the preceding observation. Vertices reachable from the same endpoint are joined by concatenating their endpoint paths and deleting repetitions. Hence $T-f$ has exactly two connected components, with vertex sets $C_u,C_v$, and no remaining tree edge crosses this partition; call it the cut of $f$. If $e=\{x,y\}\notin E(T)$ and $f$ lies on its unique $T$-path, then $x,y$ lie in opposite components, for otherwise a path in $T-f$ would contradict uniqueness of the $T$-path. Adding $e$ to $T-f$ joins the two components, so $T-f+e$ is connected. It is acyclic: a cycle would have to use $e$ since $T-f$ is acyclic, and removing $e$ from that cycle would give a path in $T-f$ between opposite components. Thus $T-f+e$ is a spanning tree on the same vertex set. Every path from one side of any such cut to the other has a crossing edge, by considering the first vertex at which its finite vertex list changes sides. The minimum-rank-sum spanning tree is unique: if distinct minimizing trees $T,S$ existed, take the least-ranked edge $e$ in their symmetric difference and, after swapping their names if needed, take $e\in T\setminus S$. Deleting $e$ from $T$ gives a cut crossed by the $S$-path between the endpoints of $e$; a crossing edge $f$ on that path lies in $S\setminus T$, and replacing $f$ by the earlier edge $e$ lowers the rank sum of $S$ by [F10], a contradiction. For a tree $T$, let $A(T)\subseteq\binom{[n]}2\setminus E(T)$ consist of the edges later than every edge on their unique $T$-path. If $G$ contains $T$ and a non-tree edge $e$ is earlier than a path edge $f$, then $T-f+e$ is a spanning tree of lower rank sum by [F10], so $T$ is not minimum. Conversely, if every non-tree edge of $G$ is later than every edge on its $T$-path, then for each $f\in T$ every other edge of $G$ crossing the cut made by deleting $f$ is later than $f$. Choose a minimum-rank-sum spanning tree $S$ of $G$, which exists by [F8]–[F9]. If $S$ omitted $f$, the $S$-path between the endpoints of $f$ crosses this cut at an edge $e$; adding $f$ to $S$ and deleting that path edge $e$ gives a spanning tree with lower rank sum by [F10], contradicting minimality of $S$. Hence $S$ contains every edge $f$ of $T$ and equals $T$: any additional edge would form a cycle with its $T$-path. Thus $T$ is the unique minimum tree of $G$ exactly when $T\subseteq G\subseteq T\cup A(T)$. Consequently, connected subgraphs of $H$ split into disjoint classes indexed by trees $T\subseteq H$, each class consisting of $T\cup A$ for $A\subseteq A(T)\cap E(H)$. The signed sum in one class is $(-1)^{n-1}(1-1)^{|A(T)\cap E(H)|}$, whose real absolute value is at most $1$. Applying the finite-sum triangle inequality from [F5, F7] to the class contributions gives $|U_n(\gamma_1,\ldots,\gamma_n)|\leq\sum_{T\in\mathcal T_n}\prod_{\{i,j\}\in E(T)}\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$. For $n=1$ both sides equal $1$. [F1, F5, F7, F8, F9, F10, algebra]

1.2 A rooted tree means a tree with one distinguished vertex; its height is the greatest number of edges in a path from that root. A size-$n$ labelled tree here has vertex set $[n]$, and in $S_\gamma^{(k)}$ its root is label $1$; removing the root separates it into child subtrees. For fixed root label $1$ of type $\gamma$, let $S_\gamma^{(k)}$ be the nonnegative sum over all such finite rooted labelled trees of height at most $k$, with all other vertex types summed over $\Gamma$, each non-root vertex of type $\eta$ weighted by $|z_\eta|$, each edge weighted by $\mathbf 1_{\{\eta\sim\eta'\}}$, and each size-$n$ sum divided by $(n-1)!$. The root has weight $1$, so $S_\gamma^{(0)}=1$. At height at most $k+1$, the root has $m$ child subtrees of height at most $k$. For ordered subtree sizes $n_1,\ldots,n_m$, assigning the $n-1$ labels to the ordered branch vertex sets contributes $(n-1)!/(n_1!\cdots n_m!)$. In each branch there are $n_j$ choices for its child-root label; with the fixed-root subtree sum normalized by $(n_j-1)!$, the factor $n_j(n_j-1)!/n_j!$ is $1$. The parent normalization $(n-1)!$ therefore leaves the product of the branch weights, and division by $m!$ removes the ordering of the branches. Since $\Gamma$ is finite or in bijection with $\mathbb N$, increasing finite type and size cutoffs exhaust the choices; by the nonnegative-sum convention [F6], the branch decomposition gives the corresponding countable-sum identity. Now suppose $S_\eta^{(k)}\leq e^{a_\eta}$ for every $\eta$. The sum $A_\gamma^{(k)}:=\sum_{\eta\sim\gamma}|z_\eta|S_\eta^{(k)}$ then satisfies $0\leq A_\gamma^{(k)}\leq a_\gamma<\infty$ by [A1]. The branch identity is therefore the convergent exponential series $S_\gamma^{(k+1)}=\sum_{m=0}^\infty(A_\gamma^{(k)})^m/m!=e^{A_\gamma^{(k)}}$, so monotonicity of the real exponential [F3] gives $S_\gamma^{(k+1)}\leq e^{a_\gamma}$. Since $S_\gamma^{(0)}=1\leq e^{a_\gamma}$ by [F2], induction gives this bound for every $k$. The nonnegative sums increase with $k$ and every finite tree has finite height, so their limit is the full rooted tree sum and is at most $e^{a_\gamma}$. [A1, F1, F2, F3, F4, F6, algebra]

2.1 Apply the pointwise graph-to-tree bound of step 1.1 to each tuple in the definition of $R_\gamma$. All weights are nonnegative after taking absolute values, so summing over the countable polymer labels and then over $n$ preserves the inequality; the right side is the rooted tree sum bounded in step 1.2. Hence $R_\gamma\leq e^{a_\gamma}$. [step 1.1, step 1.2] ∎
