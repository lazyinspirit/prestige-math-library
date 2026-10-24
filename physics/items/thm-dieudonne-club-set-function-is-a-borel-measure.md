---
id: thm-dieudonne-club-set-function-is-a-borel-measure
kind: theorem
title: "The Dieudonne club-set function is a Borel measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, lem-countable-intersections-of-club-subsets-of-omega-one-are-club, def-borel-sigma-algebra, def-measure]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ and put $Y=[0,\omega_1)$. For a Borel set $B\subseteq Y$, define
$$m(B)=\begin{cases}1,&B\text{ contains a club subset of }\omega_1,\\0,&\text{otherwise.}\end{cases}$$
Then $m$ is a probability measure on $\mathcal B(Y)$. Its extension to $X=[0,\omega_1]$ given by $\bar m(E)=m(E\cap Y)$ is a Borel probability measure.

## Facts & Assumptions

**Given:** $Y$ has the order topology and $\mathrm{AC}_\omega$ holds.

[L1] Countable intersections of club subsets of $\omega_1$ are club. ([[lem-countable-intersections-of-club-subsets-of-omega-one-are-club]])

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal D$ be the sets $A\subseteq Y$ for which either $A$ or $Y\setminus A$ contains a club. Two disjoint sets cannot both contain clubs, since two clubs intersect by [L1]. Complements preserve $\mathcal D$. For a sequence $(A_n)\subseteq\mathcal D$, if some $A_n$ contains a club then so does $\bigcup_nA_n$; otherwise each complement contains a club and [L1] puts a club in the complement of the union. Thus $\mathcal D$ is a sigma-algebra. [L1]

1.2 Every open $U\subseteq Y$ belongs to $\mathcal D$: if the closed complement is unbounded, it is club; if it is bounded by $\alpha$, then the tail $[\alpha+1,\omega_1)$ is a club contained in $U$. Hence $\mathcal B(Y)\subseteq\mathcal D$. [given]

2.1 On $\mathcal D$, the displayed $0$-$1$ rule is countably additive. Indeed, among pairwise disjoint $A_n$ at most one has value $1$; if none does, the intersection of club subsets of their complements is club by [L1], so their union has value $0$. Also $m(Y)=1$. Restriction $E\mapsto E\cap Y$ is a sigma-homomorphism from $\mathcal B(X)$ to $\mathcal B(Y)$, proving the assertion for $\bar m$. [step 1.1, L1] ∎
