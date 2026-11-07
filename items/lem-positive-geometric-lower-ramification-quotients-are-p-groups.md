---
id: lem-positive-geometric-lower-ramification-quotients-are-p-groups
kind: lemma
title: "Positive lower ramification quotients are p-groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - lem-geometric-local-integers-are-power-series-in-a-uniformizer
  - lem-geometric-lower-ramification-groups-normal-and-terminate
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Statement

Let $L/K$ be a finite Galois extension of complete discretely valued fields of characteristic $p>0$ with algebraically closed residue field $k$, group $G$, and lower ramification groups $G_i$. For every integer $i\geq1$, the quotient $G_i/G_{i+1}$ is a finite $p$-group. Consequently $G_1$ is a finite $p$-group.

## Statement references

[[def-lower-ramification-groups-of-a-geometric-local-extension|Lower ramification groups of a geometric local extension]]

[[lem-geometric-local-integers-are-power-series-in-a-uniformizer|Complete geometric local integers are power series in a uniformizer]]

[[lem-geometric-lower-ramification-groups-normal-and-terminate|Geometric lower ramification groups are normal and terminate]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §2.2.4](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** $L/K$, $G$, $v_L$, a uniformizer $\pi$ of $L$, and the lower groups in the Statement.

[F1] [[def-lower-ramification-groups-of-a-geometric-local-extension]]: membership in $G_i$ means that every integral element is moved by valuation at least $i+1$.

[F2] [[lem-geometric-local-integers-are-power-series-in-a-uniformizer]]: every element of $\mathcal O_L$ has a unique expansion $\sum_{n\geq0}c_n\pi^n$ with $c_n\in k$.

[F3] [[lem-geometric-lower-ramification-groups-normal-and-terminate]]: the lower groups decrease and become trivial at a finite index.

## Proof

1.1 By [F2], every $\sigma\in G$ fixes each coefficient $c_n\in k$ and is continuous. For $i\geq1$ and $\sigma\in G_i$, define $\theta_i(\sigma)=\overline{(\sigma(\pi)-\pi)/\pi^{i+1}}\in k$; the quotient is integral by [F1]. A power-series expansion shows that membership in $G_i$ is equivalent to $v_L(\sigma(\pi)-\pi)\geq i+1$: for $a=\sum c_n\pi^n$, each difference $(\sigma\pi)^n-\pi^n$ is divisible by $\sigma\pi-\pi$ and the remaining factor is integral. [F1, F2, given, algebra]

2.1 The kernel of $\theta_i$ consists exactly of those $\sigma$ for which $v_L(\sigma(\pi)-\pi)\geq i+2$, hence it is $G_{i+1}$ by [F1] and step 1.1. For $\sigma,\tau\in G_i$, $\sigma\tau(\pi)-\pi=\sigma(\tau(\pi)-\pi)+\sigma(\pi)-\pi$. Because $\sigma(\pi)\equiv\pi\pmod{\pi^{i+1}}$ and $\sigma$ induces the identity on $k$, reduction after division by $\pi^{i+1}$ gives $\theta_i(\sigma\tau)=\theta_i(\sigma)+\theta_i(\tau)$. Thus $\theta_i$ induces an injection $G_i/G_{i+1}\hookrightarrow(k,+)$. A finite subgroup of $(k,+)$ is a finite-dimensional vector space over $\mathbb F_p$, so the quotient is a finite $p$-group. [F1, F2, step 1.1, algebra]

3.1 By [F3], the chain $G_1\supseteq G_2\supseteq\cdots$ reaches the identity. Each successive quotient is a finite $p$-group by step 2.1; multiplying their orders shows that $|G_1|$ is a power of $p$. [F3, step 2.1, algebra] ∎
