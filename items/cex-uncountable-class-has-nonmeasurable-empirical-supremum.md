---
id: cex-uncountable-class-has-nonmeasurable-empirical-supremum
kind: counterexample
title: "An uncountable class can have a nonmeasurable empirical supremum"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-interval-uncountable
  - def-countable
  - def-countable-choice
  - def-empirical-process-and-rademacher-process
  - def-measure
  - def-probability-measure
  - def-sigma-algebra
  - lem-subset-of-countable
  - thm-countable-union-of-countable
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Section 13.3"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Sections 5-6"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Statement

Assume Countable Choice. Let $\Omega=[0,1]$, let $\mathcal A$ be the countable-cocountable sigma-algebra, and define

$$P(A):=\begin{cases}0,&A\text{ is countable},\\1,&\Omega\setminus A\text{ is countable}.\end{cases}$$

For $U:=[0,1/2]$, take the uncountable class of functions $\mathcal F:=\{f_t:t\in U\}$ with $f_t(\omega):=\mathbf1_{\{t\}}(\omega)$. Every $f_t$ is measurable and $Pf_t=0$, but for one observation $Z(\omega)=\omega$,

$$\sup_{t\in U}|f_t(Z(\omega))-Pf_t|=\mathbf1_U(\omega),$$

which is not measurable because $U$ is neither countable nor cocountable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the stated $\Omega,\mathcal A,P,U,\mathcal F$.

[A1] Countable Choice implies that a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]). The sigma-algebra closure of the stated family is established locally in step 1.1.

[F1] Every nondegenerate real interval is uncountable ([[cor-interval-uncountable]]).

[F2] Every singleton is countable and every subset of a countable set is countable ([[def-countable]], [[lem-subset-of-countable]]).

[F3] A probability measure is a countably additive measure of total mass one ([[def-measure]], [[def-probability-measure]]).

[F4] For one observation, the empirical average is $P_1f=f(Z)$ and $Pf$ is the integral of $f$ ([[def-empirical-process-and-rademacher-process]]).

[F5] A family containing the empty set and closed under complements and countable unions is a sigma-algebra ([[def-sigma-algebra]]).

## Proof

**Given:** The Axiom of Countable Choice and the objects of the Counterexample.

1.1 By [F1], $\Omega$ is uncountable. The empty set is at most countable, and complementation exchanges the countable and cocountable alternatives, so $\mathcal A$ contains the empty set and is complement-closed. For a sequence $(A_n)$ in $\mathcal A$, if every $A_n$ is countable then [A1] makes their union countable; otherwise some $A_j$ is cocountable, and $\Omega\setminus\bigcup_n A_n\subseteq\Omega\setminus A_j$ is countable by [F2]. Thus the union lies in $\mathcal A$ in either case, proving all sigma-algebra axioms in [F5]. The assignment $P$ is well-defined: a set and its complement cannot both be countable, since their union would make $\Omega$ countable. [A1, F1, F2, F5, given]

2.1 Let $(A_n)$ be pairwise disjoint members of $\mathcal A$. If every $A_n$ is countable, [A1] makes their union countable; then $P(\bigcup_nA_n)=0=\sum_nP(A_n)$. Otherwise choose $j$ with $A_j$ cocountable. For $n\ne j$, disjointness gives $A_n\subseteq\Omega\setminus A_j$, a countable set, so [F2] makes $A_n$ countable. The union is cocountable and its measure is $1=P(A_j)+\sum_{n\ne j}P(A_n)$. Also $P(\Omega)=1$ and $P$ is nonnegative, so [F3] shows that $P$ is a probability measure. [A1, F2, F3, step 1.1, given, choose]

3.1 Regard $(\Omega,\mathcal A,P)$ as the observation space and let $Z$ be its identity random element, which has law $P$. For each $t\in U$, the singleton $\{t\}$ is in $\mathcal A$ by [F2], so $f_t=\mathbf1_{\{t\}}$ is measurable and $Pf_t=P(\{t\})=0$. If $s\ne t$, then $f_s(s)=1$ and $f_t(s)=0$, so $t\mapsto f_t$ is injective; since $U$ is uncountable by [F1], $\mathcal F$ is uncountable. [F1, F2, F3, F4, given, step 2.1]

4.1 For any $\omega\in\Omega$, if $\omega\in U$ then the index $t=\omega$ gives $f_t(\omega)=1$, while if $\omega\notin U$ every $t\in U$ differs from $\omega$ and all the function values are zero. Hence the displayed supremum equals $\mathbf1_U(\omega)$. Both $U$ and $\Omega\setminus U$ contain a nondegenerate interval and are uncountable by [F1]; therefore $U\notin\mathcal A$, so the supremum is nonmeasurable. [F1, step 3.1, given] ∎
