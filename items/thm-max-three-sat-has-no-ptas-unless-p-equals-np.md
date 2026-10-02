---
id: thm-max-three-sat-has-no-ptas-unless-p-equals-np
kind: theorem
title: "Max-3SAT has no PTAS unless P=NP"
status: draft
origin: pipeline
deps:
  - def-p
  - def-np-by-verifiers
  - def-np-hard-and-np-complete
  - prop-p-is-contained-in-np-intersection-conp
  - def-ptas-fptas-and-apx
  - lem-pcp-verifier-reduces-to-gap-max-three-sat
  - def-gap-problem-and-gap-preserving-reduction
  - def-axiom-of-choice
  - thm-three-sat-is-np-complete
  - def-polynomial-time-many-one-reduction
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.5 and the inapproximability discussion, printed pp. 359–361"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.5 and §16.2, printed pp. 21–25 and 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice for the currently published PCP supplier proof
route. If Max-3SAT has a polynomial-time approximation scheme, then $P=NP$.
More precisely, fix the preceding reduction for the NP-complete language
$3$-SAT and its gap $\delta>0$. Any
polynomial-time algorithm with maximization factor $\rho>1-\delta$ would decide
every language in NP.

## Facts & Assumptions

**Given:** Fix $L:=3$-SAT and its gap $\delta$ from the preceding reduction. Assume either a PTAS $A=(A_\epsilon)$ for Max-3SAT or a polynomial-time algorithm $A$ with value guarantee $\operatorname{val}\ge\rho\,\operatorname{OPT}$ for a fixed rational $\rho>1-\delta$.

[F1] Under the Axiom of Choice for its published proof route, the constant-query PCP verifier gives a deterministic polynomial-time map $x\mapsto F_x$ to a 3-CNF formula with $M\ge1$ clauses and a fixed $\delta>0$ such that $x\in L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$ and $x\notin L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$. ([[lem-pcp-verifier-reduces-to-gap-max-three-sat]])

[F2] A PTAS for an optimization problem is a family $(A_\epsilon)_{0<\epsilon<1}$ such that for each fixed $\epsilon$ the algorithm runs in polynomial time in the input length and, for maximization, returns a feasible solution of value at least $(1-\epsilon)\operatorname{OPT}$ in the value-inequality sense. ([[def-ptas-fptas-and-apx]])

[F3] For Max-3SAT the scale is the number of clauses and $\operatorname{OPT}_{\mathrm{Max3SAT}}$ is the maximum number of simultaneously satisfied clauses, so any particular assignment satisfies at most $\operatorname{OPT}_{\mathrm{Max3SAT}}$ clauses. ([[def-gap-problem-and-gap-preserving-reduction]])

[F4] $C$ is NP-hard when for every language $L\in NP$ one has $L\le_p C$, and NP-complete when $C$ is NP-hard and $C\in NP$. ([[def-np-hard-and-np-complete]])

[F5] $P$ is the class of languages decided by some deterministic Turing machine in time polynomial in the input length. ([[def-p]])

[F6] Every language in $P$ belongs to $NP$, so $P\subseteq NP$. ([[prop-p-is-contained-in-np-intersection-conp]], [[def-np-by-verifiers]])

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function; it is assumed here solely through the published PCP supplier route used by [F1]. ([[def-axiom-of-choice]])

[F8] The language $3$-SAT is NP-complete. ([[thm-three-sat-is-np-complete]])

[F9] A polynomial-time many-one reduction from $B$ to $C$ is a total polynomial-time computable function $f$ with $x\in B$ if and only if $f(x)\in C$. ([[def-polynomial-time-many-one-reduction]])

## Proof

**Proof technique:** direct.

1.1 By [F8], $L:=3$-SAT belongs to NP. Fix its gap reduction from [F1], under the Axiom of Choice hypothesis of [F7]. The construction in that supplier's proof supplies a rational $\delta=(1-s)/K$ with $0<\delta<1$, because its rational soundness bound satisfies $0<s<1$ and its integer $K\ge4$. In the PTAS case fix $\epsilon:=\delta/2$, so $0<\epsilon<\delta<1$, and use $A_\epsilon$ from [F2]; in the factor-$\rho$ case use the given $A$. All these constants and algorithms are fixed for $3$-SAT, independently of any later source language. [F1, F2, F7, F8, given, construct]

2.1 Define the decision procedure: on input $x$, compute $F_x$, run the fixed algorithm ($A_\epsilon$ or $A$) on $F_x$ to obtain an assignment, evaluate that assignment clause by clause to count the number $s(x)$ of satisfied clauses, and accept $x$ exactly when $s(x)>(1-\delta)M$. The formula is polynomial size in $n=|x|$, the fixed algorithm runs in polynomial time, and the exact comparison of the integer $s(x)$ with the rational threshold $(1-\delta)M$ is polynomial. [F1, F2, step 1.1, construct]

3.1 If $x\in L$, then $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$ by [F1], so in the PTAS case $s(x)\ge(1-\epsilon)M>(1-\delta)M$ and in the factor-$\rho$ case $s(x)\ge\rho M>(1-\delta)M$, because $\epsilon<\delta$ and $\rho>1-\delta$; in both cases $s(x)>(1-\delta)M$ and the procedure accepts $x$. [F1, F2, step 2.1, algebra]

3.2 If $x\notin L$, then $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$ by [F1], and the counted assignment satisfies $s(x)\le\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)$ by [F3], so $s(x)\le(1-\delta)M$ and the procedure rejects $x$. [F1, F3, step 2.1, algebra]

4.1 Steps 2.1, 3.1 and 3.2 give a deterministic polynomial-time decider for $3$-SAT in either case. For any language $B\in NP$, [F4] and [F8] give a polynomial-time many-one reduction $f_B$ to $3$-SAT. On input $x$, compute $f_B(x)$ and run this decider; [F9] gives the correct answer for $B$. The output length of $f_B$ is polynomially bounded by its running time, so this composition is polynomial-time. Thus $NP\subseteq P$ by [F5], while $P\subseteq NP$ by [F6]. [F4, F5, F6, F8, F9, step 2.1, step 3.1, step 3.2, construct]

5.1 Hence a PTAS, or a polynomial-time maximization factor $\rho>1-\delta$ for this fixed $3$-SAT gap, forces $P=NP$ under the stated Axiom of Choice hypothesis. [step 4.1, algebra] ∎
