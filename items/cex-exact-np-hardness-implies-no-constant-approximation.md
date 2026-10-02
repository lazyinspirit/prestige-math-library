---
id: cex-exact-np-hardness-implies-no-constant-approximation
kind: counterexample
title: "Minimum vertex cover refutes the exact-hardness approximation claim"
status: published
origin: pipeline
deps:
  - fs-exact-np-hardness-implies-no-constant-approximation
  - def-finite-simple-graph
  - def-clique-independent-set-and-vertex-cover-problems
  - def-matching-maximum-perfect-and-matching-number
  - thm-maximal-matching-is-a-two-approximation-for-vertex-cover
  - cor-independent-set-and-vertex-cover-are-np-complete
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §2.2.2 Theorem 8, PDF pp. 4–5"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement refuted

Minimum vertex cover has an NP-complete exact threshold problem and a
deterministic polynomial-time $2$-approximation. For the three-edge path
$P_4$, a maximal middle-edge matching returns the two middle vertices, the
matching lower bound is one, and a maximal matching of the two outer edges
returns all four vertices; the general theorem, not this single graph,
establishes the uniform factor two. This refutes the unqualified claim that
exact NP-hardness rules out every constant-factor approximation; it does not
refute a conditional claim that no approximation exists unless $P=NP$.

## Facts & Assumptions

**Given:** The universal claim under examination, and the minimum vertex cover problem on finite simple graphs.

[F1] The claim under examination is: if exact optimization of a problem is NP-hard, then no polynomial-time constant-factor approximation exists. ([[fs-exact-np-hardness-implies-no-constant-approximation]])

[F2] VERTEX COVER, deciding whether a finite simple graph has a vertex cover of size at most $k$, is NP-complete, where a vertex cover meets every edge. ([[cor-independent-set-and-vertex-cover-are-np-complete]], [[def-clique-independent-set-and-vertex-cover-problems]])

[F3] Every maximal matching in a finite simple graph gives, in deterministic polynomial time, a vertex cover $C$ consisting of its endpoints with $|C|=2|M|\le2\operatorname{OPT}_{\mathrm{VC}}$; a matching is a set of pairwise disjoint edges, and a maximal matching is contained in no strictly larger matching. ([[thm-maximal-matching-is-a-two-approximation-for-vertex-cover]], [[def-matching-maximum-perfect-and-matching-number]])

[F4] A finite simple graph is a pair $(V,E)$ with finite vertex set and edges the two-element subsets of distinct vertices. ([[def-finite-simple-graph]])

## Counterexample

**Proof technique:** counterexample.

1.1 Minimum vertex cover has NP-hard exact optimization: by [F2] its threshold problem is NP-complete, so a polynomial-time exact optimizer would decide an NP-complete problem and imply $P=NP$. Yet [F3] gives a deterministic polynomial-time algorithm that always returns a vertex cover of size at most $2\operatorname{OPT}_{\mathrm{VC}}$. Thus the existence of a constant-factor approximation is compatible with exact NP-hardness and refutes the unqualified claim of [F1]; it does not establish or refute a lower bound conditioned on $P\ne NP$. [F1, F2, F3, given, algebra]

2.1 The four-vertex path $P_4$ with vertices $v_1,v_2,v_3,v_4$ and edges $v_1v_2,v_2v_3,v_3v_4$ exhibits the two matchings. The single edge $v_2v_3$ is a maximal matching whose endpoint set $\{v_2,v_3\}$ is a vertex cover: it meets $v_1v_2$ at $v_2$, $v_2v_3$ itself, and $v_3v_4$ at $v_3$. One vertex meets at most two of the three edges, so no cover of size one exists and $\operatorname{OPT}_{\mathrm{VC}}(P_4)=2$; the matching lower bound is $|M|=1\le2$. Scanning edges in the order $v_1v_2,v_2v_3,v_3v_4$ instead inserts the disjoint outer edges $v_1v_2$ and $v_3v_4$, a maximal matching whose endpoint set is all of $V$ with $|C|=4=2\cdot\operatorname{OPT}_{\mathrm{VC}}(P_4)$, realizing the factor-two upper bound on this graph. [F3, F4, step 1.1, algebra]

3.1 Minimum vertex cover has NP-hard exact optimization and a polynomial-time factor-two approximation by step 1.1, so it refutes the unqualified claim of [F1]. The path in step 2.1 illustrates the tightness of the factor but does not establish the uniform ratio; that is the content of the general theorem in [F3]. A conditional claim that approximation is impossible unless $P=NP$ is not refuted here. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
