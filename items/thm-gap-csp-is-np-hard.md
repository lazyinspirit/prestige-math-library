---
id: thm-gap-csp-is-np-hard
kind: theorem
title: "Constant-gap binary CSP is NP-hard"
status: published
origin: pipeline
deps:
  - lem-three-sat-to-binary-constraint-graph
  - thm-three-sat-is-np-complete
  - lem-logarithmically-many-iterations-reach-constant-gap
  - def-gap-csp
  - def-polynomial-time-many-one-reduction
  - def-constraint-graph-and-labeling-value
  - def-dinur-pcp-transformation
  - lem-one-transformation-has-constant-factor-growth
  - lem-one-transformation-amplifies-gap
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3 Theorem 1.2 (inapproximability form, printed p. 3) and Theorem 1.5 (printed pp. 4–5)"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5 (reduction from qCSP to GAP qCSP), printed pp. 370–371"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $\Sigma_\star$ be the fixed $66$-symbol alphabet of
[[def-dinur-pcp-transformation]], let $T=T_t$ be the fixed transformation of
[[lem-one-transformation-amplifies-gap]] and let
$\alpha=\min(1/2,\kappa\beta c/\sqrt t)>0$ be its cap. Then
$\operatorname{GapCSP}(1,1-\alpha)$ on explicit binary constraint graphs over
$\Sigma_\star$, in the promise sense of [[def-gap-csp]], is NP-hard under
deterministic polynomial-time many-one promise reductions: for every language
$L\in\mathrm{NP}$ there is a total function $f_L$ on instances, computable by
a deterministic polynomial-time algorithm, such that $f_L(x)$ is an explicit
binary constraint graph over $\Sigma_\star$ satisfying
$$\operatorname{val}(f_L(x))\ge1\quad\text{for }x\in L,\qquad \operatorname{val}(f_L(x))\le1-\alpha\quad\text{for }x\notin L.$$

## Facts & Assumptions

**Given:** Use the fixed alphabet $\Sigma_\star$, the fixed map $T$ and the fixed cap $\alpha>0$.

[F1] For a three-CNF formula $F$ with $m$ clauses, each having exactly three literal occurrences, there is a polynomial-time binary constraint graph over the fixed alphabet $$\widehat\Sigma=\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^3\}$$ with exactly $3m$ edges. Its value is one exactly when $F$ is satisfiable. If $F$ is unsatisfiable and $m\ge1$, then $$\operatorname{UNSAT}(G_F)\ge\frac1{3m}.$$ The zero-clause formula maps to an edgeless graph. ([[lem-three-sat-to-binary-constraint-graph]])

[F2] The language 3-SAT of satisfiable CNF formulas with exactly three literals per clause is NP-complete. ([[thm-three-sat-is-np-complete]])

[F3] For every finite binary constraint graph $G_0$ over $\Sigma_\star$ with $m=\lvert E(G_0)\rvert\ge1$ edge records and $\operatorname{UNSAT}(G_0)>0$, the iterates $G_k:=T^k(G_0)$ at $k:=\lceil\log_2 m\rceil$ satisfy $$\operatorname{UNSAT}(G_k)\ge\alpha,\qquad \lvert E(G_k)\rvert\le C^k m=m^{O(1)}.$$ ([[lem-logarithmically-many-iterations-reach-constant-gap]])

[F4] If instead $\operatorname{UNSAT}(G_0)=0$, then $\operatorname{UNSAT}(G_k)=0$ for every $k\ge0$: all iterates of a satisfiable graph are satisfiable. ([[lem-logarithmically-many-iterations-reach-constant-gap]])

[F5] The cap is $\alpha=\min(1/2,\kappa\beta c/\sqrt t)>0$, a constant fixed before any input. ([[lem-one-transformation-amplifies-gap]])

[F6] $T$ is a deterministic map from finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs, so the same transformation can be used in every round. ([[lem-one-transformation-amplifies-gap]])

[F7] $\operatorname{GapCSP}(c,s)$ is the disjoint yes/no pair $$Y=\{G:\operatorname{val}(G)\ge c\},\qquad N=\{G:\operatorname{val}(G)\le s\},$$ and for $0<\varepsilon\le1$ the pair $\operatorname{GapCSP}(1,1-\varepsilon)$ distinguishes satisfiability from $\operatorname{UNSAT}(G)\ge\varepsilon$. ([[def-gap-csp]])

[F8] A polynomial-time many-one reduction from a language $A$ to a language $B$ is a total function $f$ computable by a deterministic Turing machine in polynomial time with $x\in A\iff f(x)\in B$ for every instance $x$. ([[def-polynomial-time-many-one-reduction]])

[F9] For a labeling $\sigma$ the number $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied, and $\operatorname{val}(G)=\max_\sigma\operatorname{val}_\sigma(G)$, $\operatorname{UNSAT}(G)=\min_\sigma(1-\operatorname{val}_\sigma(G))$. ([[def-constraint-graph-and-labeling-value]])

[F10] The transformation alphabet is the fixed alphabet of $66$ symbols $$\Sigma_\star=\{B(0),B(1)\}\sqcup\{0,1\}^6.$$ ([[def-dinur-pcp-transformation]])

[F11] There are constants $C_E,C_V\ge1$, fixed before any input, such that every finite $\Sigma_\star$-graph $G$ with $m=\lvert E(G)\rvert$ edge records satisfies $\lvert E(T(G))\rvert\le C_Em$, $\lvert V(T(G))\rvert\le C_Vm$, and $T$ is deterministic and computable in time polynomial in the bit length of the explicit encoding of $G$. ([[lem-one-transformation-has-constant-factor-growth]])

## Proof

**Given:** Use the fixed alphabet $\Sigma_\star$, the fixed map $T$ and $\alpha>0$, and let $x$ be an arbitrary instance of a language $L\in\mathrm{NP}$.

1.1 By [F2] and [F8] there is a deterministic polynomial-time total reduction $g$ from $L$ to 3-SAT, which we fix; put $\varphi:=g(x)$, with $m$ clauses, each of exactly three literal occurrences. By [F1] the formula $\varphi$ has a polynomial-time computable graph $G_\varphi$ over $\widehat\Sigma=\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^3\}$ with exactly $3m$ edges, and by [F10] the transformation alphabet is $\Sigma_\star=\{B(0),B(1)\}\sqcup\{0,1\}^6$. Let $f$ be the fixed injection $f:\widehat\Sigma\to\Sigma_\star$ with $f(B(i))=B(i)$ and $f(T(a))=(a,0,0,0)$, and let $\hat G$ be the graph with the same vertices, incidence slots and endpoint orders as $G_\varphi$ and relations $f(R_e)=\{(f(a),f(b)):(a,b)\in R_e\}$; then $\hat G$ is an explicit binary constraint graph over $\Sigma_\star$ with exactly $3m$ edges. Put $K:=\lceil\log_2(3m)\rceil$ if $m\ge1$, and define $h(\varphi):=T^K(\hat G)$ for $m\ge1$ (a finite $\Sigma_\star$-graph by [F6]) while $h(\varphi)$ is the edgeless graph over $\Sigma_\star$ for $m=0$. [F1, F2, F6, F8, F10, given, construct]

2.1 For a labeling $\sigma$ of $\hat G$, define $\sigma_0(v):=f^{-1}(\sigma(v))$ if $\sigma(v)\in f(\widehat\Sigma)$ and $\sigma_0(v):=B(0)$ otherwise. If an edge $e$ is satisfied by $\sigma$ in $\hat G$, then $(\sigma(u),\sigma(v))\in f(R_e)$, so both labels lie in $f(\widehat\Sigma)$ and $(\sigma_0(u),\sigma_0(v))=(f^{-1}\sigma(u),f^{-1}\sigma(v))\in R_e$: the same edge is satisfied by $\sigma_0$ in $G_\varphi$. Hence $\operatorname{val}_\sigma(\hat G)\le\operatorname{val}_{\sigma_0}(G_\varphi)\le\operatorname{val}(G_\varphi)$ for every $\sigma$ by [F9], so $\operatorname{val}(\hat G)\le\operatorname{val}(G_\varphi)$; conversely the labelings $f\circ\tau$ of $\hat G$ for $\tau:V\to\widehat\Sigma$ realize the same satisfied edges, so $\operatorname{val}(\hat G)\ge\operatorname{val}(G_\varphi)$. Thus $\operatorname{val}(\hat G)=\operatorname{val}(G_\varphi)$ and $\operatorname{UNSAT}(\hat G)=\operatorname{UNSAT}(G_\varphi)$. [F1, F9, step 1.1, algebra]

2.2 For the size and time bound, each iterate multiplies the number of edge records by at most $C_E$ and has at most $C_V$ times the previous number of edge records vertices by [F11], so after $i\le K=O(\log m)$ rounds $\lvert E(T^i(\hat G))\rvert\le C_E^i\cdot3m$ and, for $i\ge1$, $\lvert V(T^i(\hat G))\rvert\le C_V\lvert E(T^{i-1}(\hat G))\rvert\le C_VC_E^{i-1}\cdot3m$, both of size $m^{O(1)}$. Each of the $K+1$ applications of $T$ runs in deterministic polynomial time in the bit length of its input by [F11], and that input has size $m^{O(1)}$ throughout, so the computation of $h(\varphi)$ from $\varphi$ is deterministic polynomial time; the relabeling $G_\varphi\mapsto\hat G$ and the reduction $g$ are also polynomial time. [F1, F8, F11, step 1.1, algebra]

3.1 Suppose $x\in L$, so $\varphi\in3$-SAT. If $m=0$, then $h(\varphi)$ is edgeless, so $\operatorname{val}(h(\varphi))=1$ by [F9]. If $m\ge1$, then $\operatorname{val}(G_\varphi)=1$ by [F1], hence $\operatorname{val}(\hat G)=1$ by step 2.1, and the zero-unsatisfaction clause [F4] of the iteration lemma applied to $G_0=\hat G$ with $\lvert E(\hat G)\rvert=3m$ gives $\operatorname{UNSAT}(h(\varphi))=0$, that is, $\operatorname{val}(h(\varphi))=1$. In both cases $\operatorname{val}(h(\varphi))\ge1$. [F1, F4, F9, step 1.1, step 2.1]

3.2 Suppose $x\notin L$, so $\varphi\notin3$-SAT is unsatisfiable; a formula with no clauses is satisfiable, so $m\ge1$. By [F1], $\operatorname{UNSAT}(G_\varphi)\ge1/(3m)>0$ and $\lvert E(G_\varphi)\rvert=3m\ge1$, and step 2.1 transfers both to $\hat G$, whose edge count is $3m$. The positive-gap clause [F3] of the iteration lemma applied to $G_0=\hat G$ with $\lvert E(\hat G)\rvert=3m$ and $K=\lceil\log_2(3m)\rceil$ gives $\operatorname{UNSAT}(h(\varphi))\ge\alpha$, hence $\operatorname{val}(h(\varphi))\le1-\alpha$ by [F9]. [F1, F3, F9, step 1.1, step 2.1]

4.1 The map $f_L:x\mapsto h(g(x))$ is total, deterministic and polynomial time by steps 1.1 and 2.2, and it sends instances of $L$ to graphs of value at least $1$ by step 3.1 and instances outside $L$ to graphs of value at most $1-\alpha$ by step 3.2. By [F7] the target pair is $\operatorname{GapCSP}(1,1-\alpha)$ with $c=1$ and $s=1-\alpha$, and by [F8] this is a deterministic polynomial-time many-one promise reduction in the two-sided sense. Since $L\in\mathrm{NP}$ was arbitrary, $\operatorname{GapCSP}(1,1-\alpha)$ is NP-hard. [F2, F5, F7, F8, step 1.1, step 2.2, step 3.1, step 3.2, discharge-construct] ∎

## Remarks

The route is the classical one: 3-SAT is reduced to a fixed-alphabet binary constraint graph, the fixed transformation $T$ is iterated logarithmically many times, and the Dinur transformation turns the $1/(3m)$ unsatisfaction gap of an unsatisfiable instance into the absolute gap $\alpha$, while satisfiable instances stay satisfiable. The relabeling of the ten-symbol gadget alphabet into the $66$-symbol alphabet $\Sigma_\star$ preserves value because a labeling that uses a symbol outside the image satisfies no edge incident to that vertex, so the clamped labeling satisfies at least as many edges. The reduction is deterministic and runs in polynomial time because the intermediate graphs have polynomially many edges and vertices. No choice principle is used: all constructions are fixed by the input and by absolute constants.
