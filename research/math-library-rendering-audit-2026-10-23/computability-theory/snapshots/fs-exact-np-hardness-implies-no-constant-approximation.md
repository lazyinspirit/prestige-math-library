---
id: fs-exact-np-hardness-implies-no-constant-approximation
kind: false-statement
title: "False: exact NP-hardness rules out constant-factor approximation"
status: published
origin: pipeline
deps:
  - def-finite-simple-graph
  - def-clique-independent-set-and-vertex-cover-problems
  - def-optimization-problem-and-approximation-ratio
  - thm-maximal-matching-is-a-two-approximation-for-vertex-cover
  - cor-independent-set-and-vertex-cover-are-np-complete
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: counterexample
sources:
  scraped: []
  references:
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §§1, 2.1, 2.2.2, PDF pp. 1–5"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.6 and §2.4, printed pp. 24–26 and 44–46"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

False claim: if exact optimization of a problem is NP-hard, then no
polynomial-time constant-factor approximation exists. Minimum vertex cover
is a counterexample: its threshold decision problem is NP-complete, yet the
endpoints of a maximal matching yield a deterministic polynomial-time
factor-two approximation. This refutes the unconditional claim; it does not
refute a separate inapproximability claim conditional on $P\ne NP$.

## Facts & Assumptions

**Given:** The universal claim under examination, and the minimum vertex cover problem on finite simple graphs with its optimal value $\operatorname{OPT}_{\mathrm{VC}}$.

[F1] VERTEX COVER, the problem of deciding whether a finite simple graph has a vertex cover of size at most $k$, is NP-complete, and a vertex cover is a set meeting every edge. ([[cor-independent-set-and-vertex-cover-are-np-complete]], [[def-clique-independent-set-and-vertex-cover-problems]])

[F2] Greedily constructed maximal matchings produce, in deterministic polynomial time, the endpoint set $C$ of the matching, with $C$ a vertex cover and $|C|=2|M|\le2\operatorname{OPT}_{\mathrm{VC}}$, including the edgeless case. ([[thm-maximal-matching-is-a-two-approximation-for-vertex-cover]])

[F3] A polynomial-time $\rho$-approximation for a minimization problem returns on every instance a feasible solution of value at most $\rho$ times the optimum, with $\rho\ge1$; the comparison is a value inequality needing no division by the optimum. ([[def-optimization-problem-and-approximation-ratio]])

[F4] A finite simple graph has a finite vertex set and its edges are two-element subsets of distinct vertices. ([[def-finite-simple-graph]])

## Refutation

**Proof technique:** counterexample.

1.1 Exact optimization of minimum vertex cover is NP-hard. Indeed, a polynomial-time algorithm computing $\operatorname{OPT}_{\mathrm{VC}}(G)$ exactly would decide VERTEX COVER by computing $\operatorname{OPT}_{\mathrm{VC}}(G)$ and comparing it with the integer $k$, which answers a problem that [F1] records as NP-complete; hence no polynomial-time exact optimizer exists unless $P=NP$. [F1, F4, given, algebra]

2.1 Nonetheless minimum vertex cover admits an unconditional constant-factor approximation: by [F2] the maximal-matching endpoints form a deterministic polynomial-time computed vertex cover of value at most $2\operatorname{OPT}_{\mathrm{VC}}$ on every finite simple graph, which by [F3] is precisely a polynomial-time $2$-approximation in the value-inequality sense. No hypothesis $P\ne NP$ is used. [F2, F3, step 1.1, algebra]

3.1 The four-vertex path $P_4$ with vertices $v_1,v_2,v_3,v_4$ and edges $v_1v_2,v_2v_3,v_3v_4$ illustrates both sides. The matching $\{v_2v_3\}$ is maximal with endpoint set $\{v_2,v_3\}$, a vertex cover of size $2$; one vertex meets at most two of the three edges, so no cover of size $1$ exists and $\operatorname{OPT}_{\mathrm{VC}}(P_4)=2$. Scanning the edges in the order $v_1v_2,v_2v_3,v_3v_4$, the greedy procedure instead inserts $v_1v_2$ and then $v_3v_4$ and returns all four vertices, so $|C|=4=2\cdot2$ realizes the factor-two upper bound, while the matching of the middle edge has size $1\le\operatorname{OPT}_{\mathrm{VC}}(P_4)=2$. [F2, F4, step 2.1, algebra]

4.1 Minimum vertex cover has NP-hard exact optimization by step 1.1 and an unconditional polynomial-time factor-two approximation by step 2.1, so it refutes the unqualified claim of [F1]. This does not refute a separate claim that approximation is impossible unless $P=NP$; such a conditional lower bound needs additional evidence, such as a gap reduction. The four-vertex path illustrates tightness, while the general theorem establishes the uniform ratio. [step 1.1, step 2.1, step 3.1, algebra] ∎
