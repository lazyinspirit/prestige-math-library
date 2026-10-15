---
id: lem-tdmath-conditional-memory-entropy
kind: lemma
title: "Conditional entropy of finite memory given side information"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-finite-probability-space-and-event","def-finite-sum","def-natural-logarithm","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-finite-probability-space-and-event":"mathematical-premise","def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement

Let $M$ and $R$ take values in finite sets under a joint probability law $p(m,r)\ge0$ with $\sum_{m,r}p(m,r)=1$. For any finite random variable $Y$ with law $p_Y$, define its Shannon entropy by $H(Y):=-\sum_{y:p_Y(y)>0}p_Y(y)\log p_Y(y)$; for a pair, $H(M,R)$ means this definition applied to its joint law. Put $a_r:=\sum_m p(m,r)$ and, when $a_r>0$, $q(m|r):=p(m,r)/a_r$. Thus $H(R)=-\sum_{r:a_r>0}a_r\log a_r$. Define $H(M|R):=\sum_{r:a_r>0}a_r[-\sum_{m:q(m|r)>0}q(m|r)\log q(m|r)]$. Then $H(M,R)=H(R)+H(M|R)$ and $H(M|R)\ge0$.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $M,R$ take values in finite sets under the joint probability law $p(m,r)$.

[F1] [[def-finite-probability-space-and-event]] and [[def-finite-sum]]: joint weights are nonnegative and sum to one, and all displayed sums are finite.

[F2] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: logarithms of positive products add, $\log 1=0$, and $\log x\le0$ for $0<x\le1$.

## Proof

**Given:** A finite joint probability law for $M$ and $R$.

1.1 For every $r$ with $a_r>0$, the numbers $q(m|r)$ are nonnegative and sum to one. The joint identity $p(m,r)=a_rq(m|r)$ on positive entries gives $\log p(m,r)=\log a_r+\log q(m|r)$; summing $-p\log p$ over each fixed $r$ yields $-a_r\log a_r+a_r[-\sum_mq(m|r)\log q(m|r)]$. Terms with $a_r=0$ have all $p(m,r)=0$ and contribute nothing. Summing over finite $r$ proves the chain rule. [A1, F1, F2]

2.1 For each positive conditional probability $q(m|r)\le1$, [F2] gives $-q(m|r)\log q(m|r)\ge0$. Multiplying by $a_r\ge0$ and summing proves $H(M|R)\ge0$. [A1, F1, F2, step 1.1] ∎
