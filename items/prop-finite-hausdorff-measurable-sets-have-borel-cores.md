---
id: "prop-finite-hausdorff-measurable-sets-have-borel-cores"
kind: "proposition"
title: "Borel cores of sigma-finite Hausdorff measurable sets"
deps: ["thm-hausdorff-measure-has-borel-hulls", "thm-continuity-from-below-for-measures"]
verification:
  audited: 2026-09-07
sources:
  references:
    - title: Fremlin, Measure Theory, 264F(c)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Falconer, The Geometry of Fractal Sets, Theorem 1.6(b)
      url: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. Let $E$ be $\mathcal H^s$-measurable and sigma-finite, where $s\ge0$ is finite. There are Borel sets $E_-\subseteq E\subseteq E_+$ such that $\mathcal H^s(E_+\setminus E_-)=0$. If $E\subseteq\mathbb R^n$ has finite measure, it contains an $F_\sigma$ set of equal measure; for every $\varepsilon>0$ it contains a closed set $F$ with $\mathcal H^s(E\setminus F)<\varepsilon$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Every set has an equal-measure Borel hull; in Euclidean space it has an equal-measure $G_\delta$ hull, under Countable Choice. [[thm-hausdorff-measure-has-borel-hulls]]

[F2] Measures are continuous from below on increasing sequences of measurable sets, without a finiteness hypothesis. [[thm-continuity-from-below-for-measures]]

## Proof

1.1 First suppose $\mathcal H^s(E)<\infty$. Choose a Borel hull $B$ of $E$. Measurability of $E$ gives $\mathcal H^s(B)=\mathcal H^s(E)+\mathcal H^s(B\setminus E)$, hence $B\setminus E$ is null. Choose a null Borel hull $N$ of that difference; then $B\setminus N\subseteq E\subseteq B$ is the required sandwich. This also covers empty or null $E$. [F1]

1.2 For the Euclidean assertion take $G=\bigcap_{i\ge1}O_i\supseteq E$, with $O_i$ open and $\mathcal H^s(G\setminus E)=0$. Each $O_i$ has an increasing closed exhaustion: if its complement is nonempty, use $F_{ij}=\{x:|x|\le j,\ d(x,O_i^c)\ge1/j\}$; for $O_i=\mathbb R^n$ use the closed balls. Continuity of the distance function follows from its triangle-inequality Lipschitz bound. These sets exhaust $O_i$. [F1]

2.1 For sigma-finite $E$, write $E=\bigcup_j E_j$ with measurable finite-measure $E_j$ and apply the first step to each. The unions of the lower and upper hulls are Borel, and their difference is contained in the union of the null differences. Thus it is null. Only the finite pieces required subtraction; this includes infinite $E$. [F1, step 1.1]

2.2 Fix $\varepsilon>0$. Continuity from below on $E\cap F_{ij}$, with $\mathcal H^s(E)<\infty$, gives $j_i$ such that $\mathcal H^s(E\setminus F_{i j_i})<\varepsilon2^{-i}$. The closed set $F=\bigcap_i F_{i j_i}$ lies in $G$ and loses less than $\varepsilon$ of $E$. Its excess $F\setminus E$ is null. Take a null $G_\delta$ hull $N$ of that excess. Then $F\setminus N$ is $F_\sigma$, lies in $E$, and loses less than $\varepsilon$ of $E$. [F1, F2, step 1.2]

3.1 Apply this for $\varepsilon=1/k$ and take the union of the resulting $F_\sigma$ sets; it is an $F_\sigma$ subset $H$ of $E$ with $\mathcal H^s(E\setminus H)=0$. Express $H$ as an increasing union of closed sets (replace any closed sequence by its finite unions). Continuity from below now gives a closed subset of $E$ with deficit less than any prescribed positive number. The argument applies to $s=0$ as well; in that case finite-measure $E$ is finite. [F2, step 2.2] ∎
