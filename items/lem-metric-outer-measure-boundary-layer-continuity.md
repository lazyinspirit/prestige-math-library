---
id: lem-metric-outer-measure-boundary-layer-continuity
kind: lemma
title: "Boundary layers of finite metric outer measure exhaust the complement of a closed set in outer measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-outer-measure, def-metric-bounded-diameter, def-nonnegative-extended-series, def-metric-topology]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., proof of Proposition 11.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Let $\mu^*$ be a metric outer measure on $(X,d)$, let $F\subseteq X$ be closed, and let $A\subseteq X$ satisfy $\mu^*(A)<+\infty$. If $F\ne\varnothing$, define

$$B_n:=\{x\in A\setminus F:d(x,F)\ge 1/(n+1)\},$$

and if $F=\varnothing$, put $B_n=A$. Then $B_n\subseteq B_{n+1}$, $\bigcup_nB_n=A\setminus F$, and

$$\sup_{n\in\mathbb N}\mu^*(B_n)=\mu^*(A\setminus F).$$

Thus, for a closed set $F$ and a finite-outer-measure test set $A$, the positive-distance layers inside $A\setminus F$ increase to $A\setminus F$ in outer measure.

## Facts & Assumptions

**Given:** The metric outer measure, the closed set $F$, and the finite-outer-measure set $A$ from the Statement.

[F1] An outer measure on a metric space is a **metric outer measure** when $\mu^*(A\cup B)=\mu^*(A)+\mu^*(B)$ for all nonempty $A,B$ with $d(A,B)>0$. ([[def-metric-outer-measure]])

[F2] In a metric space, $d(x,A)$ is defined exactly when $A$ is nonempty, and $d(A,B)$ exactly when both sets are nonempty; no boundedness is required for either distance. ([[def-metric-bounded-diameter]])

[F3] For a nonnegative extended-real sequence, the series is the supremum of its finite partial sums, and a tail series is formed by shifting the sequence. ([[def-nonnegative-extended-series]])
## Proof

**Proof technique:** direct.

1.1 If $F=\varnothing$ or $A\setminus F=\varnothing$, the asserted constant layers give the result without set-distance notation. Otherwise [F2] licenses $d(x,F)$, the layers are increasing, and closedness means every $x\notin F$ has a ball disjoint from $F$, hence $d(x,F)>0$ and $x$ enters some $B_n$; thus $B_n\uparrow A\setminus F$. Put $C_n=B_{n+1}\setminus B_n$. [F2, construct]

2.1 The function $x\mapsto d(x,F)$ is $1$-Lipschitz, since the triangle inequality gives $d(x,F)\le d(x,y)+d(y,F)$ and symmetrically. Therefore two nonempty annuli $C_i,C_j$ of the same parity with $i<j$ are positively separated: their distance-to-$F$ ranges are separated by the positive gap between $1/(i+2)$ and $1/(j+1)$. Repeated use of [F1] on finite parity unions gives $\sum_{k<m}\mu^*(C_{2k})\le\mu^*(A)$ and $\sum_{k<m}\mu^*(C_{2k+1})\le\mu^*(A)$, with empty annuli omitted. [step 1.1, F1, algebra]

3.1 By [F3], each parity series is the supremum of its increasing finite partial sums, and step 2.1 bounds that supremum by the finite number $\mu^*(A)$. Given $\varepsilon>0$, choose a partial sum within $\varepsilon/2$ of each supremum; every later tail is then below $\varepsilon/2$, so both parity tails tend to zero. Now $(A\setminus F)\setminus B_n=\bigcup_{k\ge n}C_k$, so subadditivity bounds its outer measure by those two tails. Thus all sufficiently large $n$ satisfy $\mu^*(B_n)\le\mu^*(A\setminus F)\le\mu^*(B_n)+\varepsilon$, and taking the supremum over $n$ proves the stated equality. [step 1.1, step 2.1, F3, algebra] ∎
