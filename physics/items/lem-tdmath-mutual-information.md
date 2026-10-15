---
id: lem-tdmath-mutual-information
kind: lemma
title: "Mutual information of finite random variables"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["cor-mean-value-theorem","def-finite-probability-space-and-event","def-finite-sum","def-natural-logarithm","lem-tdmath-conditional-memory-entropy","thm-logarithm-derivative-and-integral"]
justified_by: []
dependency_roles: {"cor-mean-value-theorem":"mathematical-premise","def-finite-probability-space-and-event":"mathematical-premise","def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","lem-tdmath-conditional-memory-entropy":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise"}
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

For finite random variables $M,R$ with joint law $p(m,r)$ and marginals $p_M,p_R$, use the entropy definition $H(Y)$ of [[lem-tdmath-conditional-memory-entropy]] for $Y=M,R,(M,R)$. Define $I(M;R):=\sum_{p(m,r)>0}p(m,r)\log\frac{p(m,r)}{p_M(m)p_R(r)}$. Then $I(M;R)=H(M)+H(R)-H(M,R)=H(M)-H(M|R)\ge0$, with equality exactly when $p(m,r)=p_M(m)p_R(r)$ for every pair.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $p(m,r)$ is a joint probability law on finite sets and $p_M,p_R$ are its marginal laws.

[F1] [[def-finite-probability-space-and-event]] and [[def-finite-sum]]: the joint and marginal probabilities are finite normalized sums, and if $p(m,r)>0$ then both marginals are positive.

[F2] [[lem-tdmath-conditional-memory-entropy]]: finite Shannon entropies are defined there and satisfy $H(M,R)=H(R)+H(M|R)$.

[F3] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log t$ is differentiable for $t>0$ with derivative $1/t$.

[F4] [[cor-mean-value-theorem]]: derivative signs determine monotonicity on an interval.

## Proof

**Given:** A finite joint law $p(m,r)$ and its two marginals.

1.1 Define $\phi(t):=t-1-\log t$ for $t>0$. Its derivative is $1-1/t$, nonpositive on $(0,1]$ and nonnegative on $[1,\infty)$; the mean-value theorem [F4] gives $\phi(t)\ge\phi(1)=0$, with equality only at $t=1$. Thus $-\log t\ge1-t$, strictly unless $t=1$. [F3, F4]

1.2 Expanding the finite logarithmic sum gives $I(M;R)=H(M)+H(R)-H(M,R)$; applying [F2] rewrites it as $H(M)-H(M|R)$. [A1, F1, F2, F3, algebra]

2.1 Put $q(m,r):=p_M(m)p_R(r)$. For $p(m,r)>0$, $q(m,r)>0$ by [F1], and step 1.1 with $t=q/p$ gives $p\log(p/q)\ge p-q$. Summing over the support of $p$ yields $I(M;R)\ge1-\sum_{p>0}q\ge0$. Equality forces $q=p$ on the support and no $q$-mass outside it, hence equality at every pair; conversely independence makes each positive logarithm zero. [A1, F1, step 1.1, step 1.2] ∎
