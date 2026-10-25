---
id: lem-integral-additivity-over-a-content-zero-almost-partition
kind: lemma
title: "Additivity of the integral over finitely many Jordan pieces that fill a Jordan set up to content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-integral-over-a-jordan-set, lem-jordan-set-integral-well-defined, thm-multidimensional-integral-properties, thm-jordan-boundary-criterion, lem-riemann-integral-unchanged-by-content-zero-modification, def-null-and-content-zero-in-rn, thm-graphs-of-continuous-functions-have-content-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $A\subseteq\mathbb R^m$ be bounded and Jordan measurable, let $N\ge1$, and let $A_1,\ldots,A_N\subseteq A$ be bounded Jordan measurable sets such that $A_i\cap A_j$ has content zero whenever $i\ne j$ and such that $A\setminus\bigcup_{i=1}^NA_i$ has content zero. Let $f:A\to\mathbb R$ be bounded, Riemann integrable over $A$ and Riemann integrable over each $A_i$. Then

$$\int_Af=\sum_{i=1}^N\int_{A_i}f.$$

## Facts & Assumptions

**Given:** The sets $A$ and $A_1,\ldots,A_N$ with $N\ge1$, the content-zero hypotheses on the pairwise intersections and on the residual set $A\setminus\bigcup_iA_i$, and the bounded function $f$ integrable over $A$ and over each $A_i$, all as in the Statement.

[F1] For bounded Jordan measurable $E$ and bounded $f:E\to\mathbb R$, choosing a nondegenerate rectangle $Q\supseteq E$ and writing $\widetilde f_Q$ for the extension of $f$ by $0$ on $Q\setminus E$, the function $f$ is **Riemann integrable over $E$** when $\widetilde f_Q$ is integrable over $Q$, and then $\int_Ef=\int_Q\widetilde f_Q$ ([[def-riemann-integral-over-a-jordan-set]]).

[F2] A set has **content zero** when it can be covered by finitely many closed cubes of arbitrarily small total volume, and both nullity and content zero pass to subsets ([[def-null-and-content-zero-in-rn]]).

[L1] The definition of $\int_Ef$ is independent of the chosen bounding rectangle ([[lem-jordan-set-integral-well-defined]]).

[L2] For integrable $f,g$ on a nondegenerate rectangle $Q$ and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable and its integral is $\alpha\int_Qf+\beta\int_Qg$ ([[thm-multidimensional-integral-properties]]).

[L3] Let $E$ be bounded and Jordan measurable and let $f,g:E\to\mathbb R$ be bounded with $\{x\in E:f(x)\ne g(x)\}$ of content zero. Then $f$ is Riemann integrable over $E$ if and only if $g$ is, and when they are integrable their integrals are equal ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

[L4] A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its boundary $\partial E$ is null, equivalently has content zero ([[thm-jordan-boundary-criterion]]).

[L5] A continuous graph over a compact nondegenerate rectangle has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

## Proof

**Proof technique:** direct.

1.1 Fix one nondegenerate rectangle $Q\supseteq A$; since each $A_i\subseteq A$, the same $Q$ bounds every one of the $N+1$ sets. Write $\widetilde f$ for the zero extension of $f$ from $A$ to $Q$ and $\widetilde f_i$ for the zero extension of $f|_{A_i}$ from $A_i$ to $Q$. By hypothesis and [F1], with [L1] licensing the common choice of $Q$, all $N+1$ of these functions are integrable over $Q$, with $\int_Q\widetilde f=\int_Af$ and $\int_Q\widetilde f_i=\int_{A_i}f$. If $m=1$, the boundary of $Q=[u,v]$ is the two-point set $\{u,v\}$, and each point has content zero because for every $\varepsilon>0$ it lies in a closed interval of length below $\varepsilon$; if $m>1$, the boundary of $Q$ is the finite union of its coordinate faces, each a continuous graph over a compact nondegenerate rectangle, so [L5] makes every face content zero. Thus $\partial Q$ has content zero by [F2] in every dimension, and therefore $Q$ is Jordan measurable by [L4]. [given, F1, F2, L1, L4, L5]

2.1 Put $g:=\sum_{i=1}^N\widetilde f_i-\widetilde f$ on $Q$. By [L2] it is integrable over $Q$, being a finite linear combination of the integrable functions of step 1.1. It is bounded as well: if $A=\varnothing$ then every zero extension and hence $g$ is identically zero, while if $A\ne\varnothing$ the boundedness of $f$ supplies a real $M\ge0$ with $|f(x)|\le M$ on $A$, and then $|g|\le(N+1)M$ on $Q$. [step 1.1, L2, given]

3.1 Let $S:=\bigl(\bigcup_{i\ne j}(A_i\cap A_j)\bigr)\cup\bigl(A\setminus\bigcup_{i=1}^NA_i\bigr)$ and let $x\in Q\setminus S$. If $x\notin A$ then $\widetilde f(x)=0$ and every $\widetilde f_i(x)=0$, because $A_i\subseteq A$, so $g(x)=0$. If $x\in A$ then $x$ lies in some $A_i$, since otherwise it would lie in the residual set, and in exactly one, since otherwise it would lie in one of the pairwise intersections; hence $\sum_i\widetilde f_i(x)=f(x)=\widetilde f(x)$ and again $g(x)=0$. So $\{x\in Q:g(x)\ne0\}\subseteq S$. [step 2.1, given, algebra]

4.1 The set $S$ is the union of the $N(N-1)$ pairwise intersections and the residual set, each of content zero by hypothesis. Given $\varepsilon>0$, cover each of those finitely many sets by finitely many closed cubes of total volume at most $\varepsilon/(N(N-1)+1)$ and take all of those cubes together: this is a finite cover of $S$ by closed cubes of total volume at most $\varepsilon$, so $S$ has content zero by [F2], and so does its subset $\{x\in Q:g(x)\ne0\}$. [step 3.1, F2]

5.1 By step 1.1 the set $Q$ is bounded and Jordan measurable and $g$ is bounded on it, and by step 4.1 the set where $g$ differs from the zero function has content zero; so [L3] applies with the zero function and gives $\int_Qg=0$. [step 2.1, step 4.1, L3]

6.1 Expanding $\int_Qg$ by [L2] and using step 1.1, $0=\sum_{i=1}^N\int_Q\widetilde f_i-\int_Q\widetilde f=\sum_{i=1}^N\int_{A_i}f-\int_Af$, which is the asserted identity. For $N=1$ there is no pairwise intersection and $S$ is the residual set alone; the hypothesis $N\ge1$ excludes the empty index set, for which the right-hand side would be $0$ while the left need not be. [step 5.1, L2, F1] ∎

## Remarks

- **An individual piece may be empty.** Nothing above requires $A_i\ne\emptyset$: an empty piece contributes the integral $0$ and creates no exceptional point, so the hypothesis constrains only the overlaps and the residue.

- **Why integrability over each piece is stated explicitly.** For Jordan measurable $A_i\subseteq A$, this integrability follows from the other hypotheses by restricting the zero extension of $f$ to the integrable indicator of $A_i$. The proof records it as a hypothesis because step 1.1 starts from the piece integrals, rather than inserting that standard product argument into the additivity calculation.
