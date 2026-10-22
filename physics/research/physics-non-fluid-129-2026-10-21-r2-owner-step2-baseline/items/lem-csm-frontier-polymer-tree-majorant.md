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
justified_by: []
dependency_roles:
  def-csm-frontier-abstract-polymer: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: null
empirical_premises: []
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§5.4, Theorem 5.4 and its complete proof, PDF pp. 5–8 (printed pp. 224–227): the Kotecký–Preiss rooted connected-cluster majorant."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, Theorem 1 and complete rooted-cluster induction, PDF pp. 1–4."
---

## Statement

Let $(\Gamma,\sim,z)$ be an abstract polymer model. Suppose $a:\Gamma\to[0,\infty)$ satisfies

$$\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma\qquad(\gamma\in\Gamma).$$

For each fixed root $\gamma\in\Gamma$, the nonnegative rooted connected-cluster sum

$$R_\gamma:=\sum_{n=1}^{\infty}\frac1{(n-1)!}\sum_{\gamma_2,\ldots,\gamma_n\in\Gamma}|U_n(\gamma,\gamma_2,\ldots,\gamma_n)|\prod_{j=2}^n|z_{\gamma_j}|$$

is well-defined as a possibly extended nonnegative series and satisfies $R_\gamma\leq e^{a_\gamma}$.

## Statement references

[[def-csm-frontier-abstract-polymer]]

## Facts & Assumptions

**Given:** The abstract polymer model and the function $a$ in the Statement.

[F1] [[def-csm-frontier-abstract-polymer]]: $\Gamma$ is countable, $\sim$ is reflexive and symmetric, and $U_n$ is the sum over connected simple graphs with edge weight $-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$.

[F2] [[def-real-exponential-function-and-e]]: for real $u$, $e^u=\sum_{k=0}^{\infty}u^k/k!$.

[F3] [[thm-exponential-is-strictly-increasing]]: the real exponential is continuous and strictly increasing.

[A1] For every $\gamma\in\Gamma$, $\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma$.

## Proof

**Given:** The graph coefficient $U_n$ and the rooted majorant condition [A1].

1.1 Fix $n\geq2$ and a tuple $(\gamma_1,\ldots,\gamma_n)$, and let $H$ be its finite incompatibility graph: $\{i,j\}\in E(H)$ exactly when $\gamma_i\sim\gamma_j$. By [F1], $U_n=\sum_{G\subseteq H,\ G\text{ connected}}(-1)^{|E(G)|}$. Order the edges of the complete graph on $\{1,\ldots,n\}$ lexicographically and assign their distinct ranks. Every connected subgraph $G$ has a spanning tree, and its finite set of spanning trees has one minimizing the sum of edge ranks. This minimum is unique: if distinct minimizing trees $T,S$ existed, take the least-ranked edge $e$ in their symmetric difference and, after swapping their names if needed, take $e\in T\setminus S$. Deleting $e$ from $T$ gives a cut crossed by the $S$-path between the endpoints of $e$; a crossing edge $f$ on that path lies in $S\setminus T$, and replacing $f$ by the earlier edge $e$ lowers the rank sum of $S$, a contradiction. For a tree $T$, let $A(T)$ contain the non-tree edges later than every edge on their unique $T$-path. If $G$ contains $T$ and a non-tree edge $e$ is earlier than a path edge $f$, then $T-f+e$ is a spanning tree of lower rank sum, so $T$ is not minimum. Conversely, if every non-tree edge of $G$ is later than every edge on its $T$-path, then for each $f\in T$ every other edge of $G$ crossing the cut made by deleting $f$ is later than $f$. If a competing spanning tree $S$ omitted $f$, the $S$-path between the endpoints of $f$ crosses this cut at an edge $e$; adding $f$ to $S$ and deleting that path edge $e$ gives a spanning tree with lower rank sum. Thus $T$ is the unique minimum tree of $G$ exactly when $T\subseteq G\subseteq T\cup A(T)$. Consequently, connected subgraphs of $H$ split into disjoint classes indexed by trees $T\subseteq H$, each class consisting of $T\cup A$ for $A\subseteq A(T)\cap E(H)$. The signed sum in one class is $(-1)^{n-1}(1-1)^{|A(T)\cap E(H)|}$, whose absolute value is at most $1$. Summing over those trees gives $|U_n(\gamma_1,\ldots,\gamma_n)|\leq\sum_{T\in\mathcal T_n}\prod_{\{i,j\}\in E(T)}\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$. For $n=1$ both sides equal $1$. [F1, algebra]

1.2 For a fixed root label $1$ of type $\gamma$, let $S_\gamma^{(k)}$ be the nonnegative sum over all finite rooted labelled trees of height at most $k$, with root type fixed to $\gamma$, all other vertex types summed over $\Gamma$, each non-root vertex of type $\eta$ weighted by $|z_\eta|$, each edge weighted by $\mathbf 1_{\{\eta\sim\eta'\}}$, and each size-$n$ sum divided by $(n-1)!$. The root has weight $1$, so $S_\gamma^{(0)}=1$. At height at most $k+1$, the root has $m$ child subtrees of height at most $k$. For ordered subtree sizes $n_1,\ldots,n_m$, assigning the $n-1$ labels to the ordered branch vertex sets contributes $(n-1)!/(n_1!\cdots n_m!)$. In each branch there are $n_j$ choices for its child-root label; with the fixed-root subtree sum normalized by $(n_j-1)!$, the factor $n_j(n_j-1)!/n_j!$ is $1$. The parent normalization $(n-1)!$ therefore leaves the product of the branch weights, and division by $m!$ removes the ordering of the branches. Therefore, as an identity of nonnegative countable sums, $S_\gamma^{(k+1)}=\sum_{m=0}^\infty\frac1{m!}(\sum_{\eta\sim\gamma}|z_\eta|S_\eta^{(k)})^m=\exp(\sum_{\eta\sim\gamma}|z_\eta|S_\eta^{(k)})$. Countable sums here are suprema of finite subsums, so the identity follows first for finite type and size cutoffs and then by increasing limits. By [F2], $S_\gamma^{(0)}=1\leq e^{a_\gamma}$. If $S_\eta^{(k)}\leq e^{a_\eta}$ for every $\eta$, the assumed majorant [A1] gives $0\leq\sum_{\eta\sim\gamma}|z_\eta|S_\eta^{(k)}\leq a_\gamma$; [F3] then gives $S_\gamma^{(k+1)}\leq e^{a_\gamma}$. The nonnegative sums increase with $k$ and every finite tree has finite height, so their limit is the full rooted tree sum and is at most $e^{a_\gamma}$. [A1, F2, F3, algebra]

2.1 Apply the pointwise graph-to-tree bound of step 1.1 to each tuple in the definition of $R_\gamma$. All weights are nonnegative after taking absolute values, so summing over the countable polymer labels and then over $n$ preserves the inequality; the right side is the rooted tree sum bounded in step 1.2. Hence $R_\gamma\leq e^{a_\gamma}$. [step 1.1, step 1.2] ∎
