---
id: thm-pc-high-dimensional-consistency
kind: theorem
title: "High-dimensional consistency of Gaussian PC structure learning"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-pc-causal-discovery
  - def-causal-discovery-oracle-regime
  - def-cpdag-markov-equivalence-class
  - def-gaussian-partial-correlation
  - def-sample-partial-correlation
  - lem-pc-fisher-transform-uniform-concentration
  - lem-pc-skeleton-separation
  - thm-gaussian-zero-partial-correlation-is-conditional-independence
  - thm-pc-oracle-correctness
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - def-faithfulness-of-a-dag-model
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is assumed through the Gaussian conditional-independence and topological-kernel probability interfaces. The concentration, union-bound, and finite-graph arguments use no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, Theorems 1–2 and Appendix A.2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Assume AC. For each $n$, let $p_n\ge2$ observed variables form a finite
causally sufficient Markovian recursive structural causal model over a DAG
$G_n$. Assume the full-joint law is nondegenerate Gaussian, has a finite
topological parent-kernel factorization, and is faithful to $G_n$. Let
$X^{(1)},\ldots,X^{(n)}$ be independent observations from that law. Let
$q_n$ be an integer with $0\le q_n\le p_n-1$ that bounds the maximum degree of the skeleton of $G_n$.
Suppose, for constants $a\ge0$, $0<b\le1$, $0<d<b/2$, and $M<1$,
$$ p_n=O(n^a),\qquad q_n=O(n^{1-b}),\qquad c_n^{-1}=O(n^d),\qquad 0<c_n\le M, $$
and every population partial correlation with $|S|\le q_n$ satisfies
$|\rho_{ij\mid S}|\le M$, while each nonzero such partial correlation has
$|\rho_{ij\mid S}|\ge c_n$. For sufficiently large $n$ with
$n-q_n-3>0$, and for each tested pair and conditioning set, define the
two-sided Fisher statistic
$$T_{ij\mid S}=\sqrt{n-|S|-3}\,\left|g(\widehat\rho_{ij\mid S})\right|, \qquad g(r)=\tfrac12\log\frac{1+r}{1-r}.$$
Declare conditional independence exactly when
$$T_{ij\mid S}\le\frac{\sqrt n\,c_n}{2},$$
and for larger conditioning sets assign the test answer “dependent.” If a
tested sample covariance block is not positive definite, also assign
“dependent”; this affects only a probability-zero event for sufficiently large
$n$. Run the
PC skeleton and orientation steps in any fixed vertex order using
conditioning sets of size at most $q_n$, with $q_n$ as the maximum level cap:
after each level, stop if the ordinary degree stopping condition holds or the
current level equals $q_n$, then orient unshielded colliders and close under
R1–R3. Then for all sufficiently large $n$ the output equals the
CPDAG of $G_n$ with probability at least
$$1-\exp\bigl(-C n^{1-2d}\bigr)$$
for some constant $C>0$ independent of $n$. This is a theoretical threshold:
it depends on the unknown lower bound $c_n$.

## Statement references

[Kalisch and Bühlmann, Theorems 1–2 and Appendix A.2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Lauritzen, §2.6](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** AC, the Gaussian and DAG sequence, independent observations, the degree and partial-correlation bounds, and the thresholded PC procedure in the Statement.

[F1] The sample partial correlation is the residual correlation after projecting off the intercept and conditioning columns; the Fisher transform is $g(r)=\tfrac12\log((1+r)/(1-r))$. [[def-sample-partial-correlation]]

[F2] Gaussian partial correlation is the normalized off-diagonal entry of the conditional covariance block. [[def-gaussian-partial-correlation]]

[F3] For a nondegenerate Gaussian law, zero partial correlation is equivalent to conditional independence. [[thm-gaussian-zero-partial-correlation-is-conditional-independence]]

[F4] Uniformly over tested pairs and sets with $|S|\le q_n$, the Fisher-transform error has tail at most $C_M\exp(-c_M(n-|S|-1)t^2)$ for $0<t\le1$. [[lem-pc-fisher-transform-uniform-concentration]]

[F5] The population PC algorithm terminates and recovers the CPDAG when its oracle gives exact conditional-independence answers. [[thm-pc-oracle-correctness]]

[F6] The population PC algorithm tests current-adjacency subsets in level order, then orients colliders and closes under R1–R3. [[alg-pc-causal-discovery]]

[F7] The parent-kernel factorization implies d-separation conditional independence, and faithfulness gives the reverse implication. [[thm-dag-factorization-implies-d-separation-conditional-independence]] [[def-faithfulness-of-a-dag-model]]

[F8] Every nonadjacent pair in a finite DAG has a separating set among the parents of one endpoint. [[lem-pc-skeleton-separation]]

[F9] The finite observed Markovian SCM, full-joint factorization, and faithfulness conditions are those of the discovery regime. [[def-causal-discovery-oracle-regime]]

[A1] AC is required by the Gaussian conditional-independence and recursive-model probability interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $q_n=O(n^{1-b})$ with $b>0$, eventually $n-q_n-3>0$, so [F1] makes every sample statistic in the capped search defined almost surely. The sample procedure terminates for every answer sequence: it processes at most $q_n+1$ finite levels, each with finitely many pair-and-subset tests, and its finite R1–R3 closure directs at most $\binom{p_n}{2}$ edges. Since $c_n\le M<1$, take $t=c_n/4\le1$ in [F4]. For every tested triple $(i,j,S)$, the probability that $|g(\widehat\rho_{ij\mid S})-g(\rho_{ij\mid S})|>c_n/4$ is at most $C_M\exp(-c_M(n-|S|-1)c_n^2/16)$. For large $n$, $q_n/n\to0$ and $n-q_n-1\ge n/2$, so each such probability is at most $C_M\exp(-c'_M n c_n^2)$ for a constant $c'_M>0$. [given, F1, F4, F6, A1, construct, algebra]

2.1 There are at most $N_n=\binom{p_n}{2}\sum_{\ell=0}^{q_n}\binom{p_n-2}{\ell} \le p_n^2(q_n+1)p_n^{q_n}\le p_n^{q_n+3}$ distinct pair-and-set tests, since $q_n\le p_n-1$ and $q_n+1\le p_n$. A union bound, which requires no independence between tests, shows that the event $E_n$ on which every test of size at most $q_n$ has Fisher-transform error at most $c_n/4$ has failure probability at most $C_M\exp\!\left((q_n+3)\log p_n-c'_M n c_n^2\right).$ The assumptions imply $n c_n^2\ge C_0 n^{1-2d}$ eventually and $(q_n+3)\log p_n=O(n^{1-b}\log n)=o(n^{1-2d})$, because $2d<b$. Thus, after reducing the positive constant in the exponent, $\mathbb P(E_n^c)\le\exp(-C n^{1-2d})$ for all sufficiently large $n$. [given, F6, step 1.1, algebra]

3.1 On $E_n$, if $\rho_{ij\mid S}=0$, then [F1] gives $|g(\widehat\rho_{ij\mid S})|\le c_n/4$. By [F3], this is the population conditional-independence case. Hence $T_{ij\mid S}\le\sqrt n c_n/4<\sqrt n c_n/2$, so the test declares independence. If $\rho_{ij\mid S}\ne0$, then [F2] and the lower-bound hypothesis give $|\rho_{ij\mid S}|\ge c_n$, and $|g(\rho_{ij\mid S})|\ge|\rho_{ij\mid S}|$ because $|\operatorname{atanh}(r)|\ge|r|$ for $|r|<1$. Therefore $|g(\widehat\rho_{ij\mid S})|\ge3c_n/4$. Since $(n-|S|-3)/n\ge(n-q_n-3)/n\to1$, for all sufficiently large $n$ we have $\sqrt{(n-|S|-3)/n}>2/3$, so $T_{ij\mid S}>\sqrt n c_n/2$ and the test declares dependence. By [F3] these are exactly the dependent cases. [given, F1, F2, F3, step 2.1, algebra]

4.1 On $E_n$ the capped sample PC search makes the same decisions as the uncapped perfect-oracle procedure through level $q_n$. True edges are never removed, because their one-edge paths prevent d-separation and [F7] makes every such test dependent. For each nonedge, [F8] supplies a separating parent set of size at most the true maximum degree $q_n$; its parent edges remain, so the algorithm tests and removes that nonedge no later than level $q_n$. Thus by completion of that level the sample search and the perfect-oracle run have the exact skeleton and the same separating records. The oracle run cannot need another level: on an exact skeleton of maximum degree at most $q_n$, no remaining edge can have an endpoint with the $q_n+1$ other neighbors required to advance after level $q_n$. If either run stops earlier by its ordinary degree condition, their identical decisions make both stop; otherwise both stop after level $q_n$, the sample run by its cap. Their collider and R1–R3 orientations therefore agree, and [F5] identifies the oracle run's output, hence the sample output, as the CPDAG of $G_n$. [F5, F6, F7, F8, F9, step 3.1, cases]

5.1 The only failure event is contained in $E_n^c$, whose probability has the bound from step 2.1. Step 4.1 identifies the output on $E_n$ as the CPDAG. This proves the stated consistency bound. The threshold uses $c_n$, so the theorem does not provide a data-driven choice of that parameter. [given, F5, step 2.1, step 4.1] ∎
