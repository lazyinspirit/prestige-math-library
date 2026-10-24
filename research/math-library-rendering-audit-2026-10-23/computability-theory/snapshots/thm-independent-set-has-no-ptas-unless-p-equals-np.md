---
id: thm-independent-set-has-no-ptas-unless-p-equals-np
kind: theorem
title: "Maximum independent set has no PTAS unless P=NP"
status: published
origin: pipeline
deps:
  - def-p
  - def-np-by-verifiers
  - def-np-hard-and-np-complete
  - prop-p-is-contained-in-np-intersection-conp
  - def-clique-independent-set-and-vertex-cover-problems
  - def-ptas-fptas-and-apx
  - lem-pcp-verifier-reduces-to-gap-max-three-sat
  - lem-gap-three-sat-reduces-to-gap-independent-set
  - def-gap-problem-and-gap-preserving-reduction
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.5 Lemma 18.16 and Remark 18.17, printed pp. 359–361"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice for the currently published PCP supplier proof
route. A polynomial-time approximation scheme for maximum independent set on
finite simple graphs implies $P=NP$. On the graphs $G_x$ from the two gap
reductions, $\alpha(G_x)=M$ when $x$ is a yes instance and
$\alpha(G_x)\le(1-\delta)M$ when $x$ is a no instance, for the same fixed
$\delta>0$.

## Facts & Assumptions

**Given:** A language $L\in NP$, a PTAS $A=(A_\epsilon)$ for the maximum independent set problem on finite simple graphs, and the two gap reductions below.

[F1] Under the Axiom of Choice for its published proof route, the PCP verifier gives, for each input $x$, a 3-CNF formula $F_x$ with $M\ge1$ clauses and a fixed $\delta>0$ such that $x\in L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$ and $x\notin L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$. ([[lem-pcp-verifier-reduces-to-gap-max-three-sat]])

[F2] The clause-literal consistency graph $G$ of a 3-CNF formula with $m$ clauses of three literal occurrences is a simple graph with $3m$ vertices, computable in polynomial time, with $\alpha(G)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$; for $m\ge1$ the gap promise $m$ versus $(1-\delta)m$ transfers with unchanged $\delta$ and positive scale $m$, and any independent set of size $k$ decodes in polynomial time to an assignment satisfying at least $k$ clauses. ([[lem-gap-three-sat-reduces-to-gap-independent-set]], [[def-gap-problem-and-gap-preserving-reduction]])

[F3] A subset of the vertex set of a finite simple graph is independent when no two of its vertices are adjacent, and $\alpha(G)$ denotes the largest size of an independent set. ([[def-clique-independent-set-and-vertex-cover-problems]])

[F4] A PTAS for a maximization problem is a family $(A_\epsilon)_{0<\epsilon<1}$ such that for every fixed $\epsilon$ the algorithm runs in polynomial time in the input length and returns a feasible solution of value at least $(1-\epsilon)$ times the optimum, in the value-inequality sense. ([[def-ptas-fptas-and-apx]])

[F5] $P$ is the class of languages decided by some deterministic Turing machine in polynomial time, and every language in $P$ belongs to $NP$, so $P\subseteq NP$. ([[def-p]], [[prop-p-is-contained-in-np-intersection-conp]], [[def-np-by-verifiers]])

[F6] $C$ is NP-hard when every language $L\in NP$ reduces to it in polynomial time. ([[def-np-hard-and-np-complete]])

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function; it is assumed here solely through the published PCP supplier route used by [F1]. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 Fix $L\in NP$ and the reduction of [F1], which supplies the fixed constant $\delta>0$ and, for each input $x$, the formula $F_x$ with $M\ge1$ clauses; for each $x$ apply the polynomial-time construction of [F2] to obtain the finite simple graph $G_x$ with $3M$ vertices and $\alpha(G_x)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)$, whose scale is the number $M$ of clause clusters. Assume the PTAS $A=(A_\epsilon)$ of [F4] and fix a rational $\epsilon$ with $0<\epsilon<\delta$, for instance $\epsilon=\delta/2$. The PCP supplier route is used under the Axiom of Choice hypothesis of [F7]. [F1, F2, F3, F4, F7, given, construct]

2.1 By [F1] and the exact optimum equality of [F2], the graphs $G_x$ satisfy $\alpha(G_x)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$ when $x\in L$, and $\alpha(G_x)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$ when $x\notin L$; the scale $M$ is positive and unchanged, so the same fixed $\delta>0$ separates the two cases. [F1, F2, step 1.1, algebra]

3.1 Define the decision procedure: on input $x$, construct $G_x$, run the fixed algorithm $A_\epsilon$ on $G_x$ to obtain an independent set $I$, let $s=|I|$, and accept $x$ exactly when $s>(1-\delta)M$. The graph construction is polynomial by [F2], the algorithm $A_\epsilon$ is polynomial time for the fixed $\epsilon$ by [F4], and the returned set is independent of size $s$; by the PTAS guarantee the value satisfies $s\ge(1-\epsilon)\alpha(G_x)$. [F2, F3, F4, step 2.1, construct]

4.1 If $x\in L$, then $\alpha(G_x)=M$ by step 2.1, so $s\ge(1-\epsilon)M>(1-\delta)M$ because $\epsilon<\delta$; hence the procedure accepts $x$. [F4, step 2.1, step 3.1, algebra]

4.2 If $x\notin L$, then $\alpha(G_x)\le(1-\delta)M$ by step 2.1, and $s\le\alpha(G_x)$ because $s$ is the size of an independent set; hence $s\le(1-\delta)M$ and the procedure rejects $x$. [F3, step 2.1, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 show that the deterministic polynomial-time procedure accepts exactly the inputs of $L$, so $L\in P$; since $L\in NP$ was arbitrary (the quantifier in [F6]), $NP\subseteq P$, and $P\subseteq NP$ by [F5], so $P=NP$. Therefore a PTAS for maximum independent set implies $P=NP$, and on the graphs $G_x$ one has $\alpha(G_x)=M$ for yes instances and $\alpha(G_x)\le(1-\delta)M$ for no instances with the same fixed $\delta>0$. [F5, F6, step 4.1, step 4.2, algebra] ∎
