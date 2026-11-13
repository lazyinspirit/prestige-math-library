---
id: lem-expander-sync-lem-2-1
title: First and second order parameter inequality — Lemma 2.1
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - lem-expander-sync-spectral-phase-sums
  - prop-expander-sync-stable-hessian
  - math:def-countable-choice
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
  - math:def-graph-walk-trail-path-and-cycle
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  prop-expander-sync-daido-properties: mathematical-premise
  lem-expander-sync-spectral-phase-sums: mathematical-premise
  prop-expander-sync-stable-hessian: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, Section 2.1 conventions; pp. 12–13, Lemma 2.1, equations
        (2.8)–(2.9) and proof; p. 18, opening of Section 3
      statement: The printed Lemma 2.1 gives the general 2alpha bound and its 3alpha/2
        refinement for d*-regular graphs. The final proof paragraph additionally
        asserts the edge-count condition implies the constant-vector equality.
        That extra assertion is recorded below as unresolved, with an exact
        counterexample to the equality inference; it is not imported as a
        premise.
      hypotheses: Stable energy-minimizing phase state on a finite connected adjacency
        spectral expander, with the stated real nonnegative rho1 convention; the
        improved printed conclusion assumes d*-regularity. Self-loops count once
        in degree.
      reading_limits: Read the complete original Lemma 2.1 and its proof, the
        preceding phase and connectedness conventions, and the self-loop degree
        convention; inspected original PDF images 11–13 and 18. No independent
        reading of the cited underlying literature [26] is claimed. This
        citation attributes the source; the local proof uses authored suppliers
        and does not assert the unresolved extra edge-count extension.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - math:def-countable-choice
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
  - math:def-graph-walk-trail-path-and-cycle
argument_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - lem-expander-sync-spectral-phase-sums
  - prop-expander-sync-stable-hessian
  - math:def-countable-choice
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
  - math:def-graph-walk-trail-path-and-cycle
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected $(n,d^*,\alpha)$-expander with $n=|V|>0$, $d^*\geq0$, $\alpha\geq0$, and symmetric binary adjacency matrix $A$, allowing self-loops. Connectedness means that the loop-free support graph on $V$, with an edge $\{x,y\}$ exactly when $x\ne y$ and $A_{xy}=1$, is connected: every two vertices are joined by a path in this finite simple graph. A path of length zero joins a vertex to itself. Here $d(x)=\sum_yA_{xy}$ counts a loop once, and the expander condition is $\|A-(d^*/n)J\|\leq\alpha d^*$, where $J$ is the all-ones matrix. Let $\theta$ be a stable state, meaning a local minimum of the homogeneous Kuramoto energy. Set $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$, and adopt the article's common-rotation convention $\rho_1\in[0,1]$ with phase representatives in $(-\pi,\pi]$. Then

$$\rho_1^2\geq\frac{1+|\rho_2|^2}{2}-2\alpha.$$

If $G$ is $d^*$-regular, then

$$\rho_1^2\geq\frac{1+|\rho_2|^2}{2}-\frac32\alpha.$$

The second bound also holds whenever $\sum_{x,y}A_{xy}=d^*n$. In particular it holds when the graph has no self-loops and $|E|=d^*n/2$. These are the proved assertions exported by this item; the additional source assertion discussed in Source notes is not an available premise.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-states]]

[[def-expander-sync-daido]]

[[prop-expander-sync-daido-properties]]

[[math:def-countable-choice]]

[[def-expander-prereq-loop-compatible-networks]]

[[math:def-connected-graph-and-connected-component]]

[[math:def-graph-walk-trail-path-and-cycle]]

## Facts & Assumptions

[F1] The graph has symmetric binary adjacency, a loop contributes one to a row sum, and $d^*$-regularity means that every row sum equals $d^*$. If $\ell$ is the number of loops, then $\sum_{x,y}A_{xy}=2|E|-\ell$, because a non-loop edge contributes two ordered entries and a loop contributes one ([[def-expander-sync-graph-notation]]).

[F2] The spectral-expander hypothesis is $\|A-(d^*/n)J\|\leq\alpha d^*$. With the stated Daido parameters, the spectral-phase-sums lemma gives

$$\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)\leq d^*n|\rho_1|^2+\alpha d^*n,$$

and

$$\sum_{x,y}A_{xy}\cos^2(\theta_x-\theta_y)\geq\frac{d^*n}{2}(1+|\rho_2|^2)-\alpha d^*n.$$

If $\sum_{x,y}A_{xy}=d^*n$, the last error improves from $\alpha d^*n$ to $\alpha d^*n/2$ ([[def-expander-sync-adjacency-expander]], [[lem-expander-sync-spectral-phase-sums]], [[def-expander-sync-daido]]).

[F3] Under countable choice, stability as a local energy minimum implies

$$\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)\geq\sum_{x,y}A_{xy}\cos^2(\theta_x-\theta_y).$$

This includes the self-loop convention: each diagonal term has $\cos0=\cos^20=1$ and cancels from the difference ([[def-expander-sync-states]], [[prop-expander-sync-stable-hessian]], [[math:def-countable-choice]]).

[F4] The order parameters have modulus at most one, and common rotation can make $\rho_1$ real and nonnegative without changing any phase difference; representatives may then be chosen in $(-\pi,\pi]$ ([[prop-expander-sync-daido-properties]]).

[F5] Deleting the diagonal entries of the symmetric binary matrix $A$ gives the finite simple support graph with edges $\{x,y\}$ exactly when $x\ne y$ and $A_{xy}=1$ ([[def-expander-prereq-loop-compatible-networks]]). Connectedness means that every pair of vertices in this nonempty graph is joined by a path ([[math:def-connected-graph-and-connected-component]]). A path is a finite vertex list whose consecutive vertices are adjacent and whose vertices are distinct; its length is the number of edges traversed. In particular, the single-vertex list is a path of length zero ([[math:def-graph-walk-trail-path-and-cycle]]).

## Proof

**Given:** The graph, nonnegative reference degree and expansion parameter and stable state in the Statement, under countable choice.

**Goal:** Prove the general estimate, the regular-graph refinement and the stated ordered-sum and loop-free sufficient conditions.

**Proof technique:** direct.

1.1 If $d^*=0$, the norm bound in [F2] forces $A=0$. Its loop-free support graph from [F5] is therefore edgeless. A path between distinct vertices would have positive length and traverse an edge, so [F5] and connectedness force $n=1$. The order-parameter formula gives $|\rho_1|=|\rho_2|=1$, and the normalization in [F4] gives $\rho_1=1$, so both asserted inequalities hold because $\alpha\geq0$. Hence it remains to treat $d^*>0$. By [F4], the normalization gives $|\rho_1|^2=\rho_1^2$. Combining the upper bound in [F2], the stability inequality in [F3], and the general lower bound in [F2] yields $d^*n\rho_1^2+\alpha d^*n\geq d^*n(1+|\rho_2|^2)/2-\alpha d^*n$. Divide by the positive number $d^*n$ and subtract $\alpha$ to obtain the first asserted bound. [F1, F2, F3, F4, F5, given, algebra]

2.1 In the remaining case $d^*>0$, if $\sum_{x,y}A_{xy}=d^*n$, use instead the improved lower bound in [F2]. The same comparison gives $d^*n\rho_1^2+\alpha d^*n\geq d^*n(1+|\rho_2|^2)/2-\alpha d^*n/2$, and division by $d^*n>0$ gives the second asserted bound. For a $d^*$-regular graph, summing the row sums from [F1] gives $\sum_{x,y}A_{xy}=d^*n$, including when loops are present. For a loop-free graph with $|E|=d^*n/2$, the counting identity in [F1] gives the same equality. Thus every stated refinement follows. [F1, F2, F3, F4, given, step 1.1, algebra] ∎

## Source notes

The two displayed inequalities in the Statement reproduce the conclusions of the printed Lemma 2.1, equations (2.8) and (2.9), in *Expander graphs are globally synchronizing*, PDF page 12. The proof above follows its Hessian-and-spectral argument on pages 12–13 using the authored suppliers. The connectedness and phase conventions are stated immediately before the lemma on page 11; the row-sum degree convention counting self-loops once is explicit on page 18. No underlying proof from reference [26] was independently read or imported here.

The final paragraph of the article's proof, PDF page 13, additionally says: “If the number of edges $|E|$ is equal to $d^*n/2$ (for example, if the graph is $d^*$-regular), then we use $\langle h,Ah\rangle=d^*n$ instead of $|\langle h,Ah\rangle-d^*n|\leq\alpha d^*n$, which leads to the improved inequality (2.9).” This additional assertion is preserved as an attributed unresolved source claim, not as a theorem or a proof input. It extends beyond the regular-graph conclusion of the printed lemma. Consumers may use only the proved Statement, not this unresolved assertion.

The equality inference in that paragraph fails with loops. In a connected graph on two vertices having their connecting edge and both loops, $A=J_2$, $n=2$, $|E|=3$, $d^*=3$ and $\alpha=1/3$. The centered matrix is $-J_2/2$ with eigenvalues $-1,0$, so the expander bound holds. The synchronized state $\theta=(0,0)$ globally minimizes the nonnegative energy and is stable; its normalized parameters are $\rho_1=\rho_2=1$. Nevertheless $|E|=d^*n/2$ while $\langle\mathbf1,A\mathbf1\rangle=4\ne6=d^*n$. This refutes that equality inference under the original connectedness and loop conventions. It does not refute the improved inequality itself, which holds in this example. No counterexample to that additional inequality or complete proof of it is claimed.

The correct identity is $\langle\mathbf1,A\mathbf1\rangle=2|E|-\ell$, with $\ell$ the number of loops. Substitution into the article's spectral-and-Hessian argument, for $d^*>0$ under $|E|=d^*n/2$, gives the supported estimate $\rho_1^2\geq(1+|\rho_2|^2)/2-3\alpha/2-\ell/(2d^*n)$. Removing the final loop term needs a further argument. The full printed lemma, including its regular case with loops allowed, is proved above without that additional assertion.
