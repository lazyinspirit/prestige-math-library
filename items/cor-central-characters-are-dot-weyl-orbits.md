---
id: cor-central-characters-are-dot-weyl-orbits
kind: corollary
title: "Central characters are dot-Weyl orbits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-central-character-of-a-lie-algebra-module, lem-harish-chandra-projection-computes-highest-weight-scalars, thm-harish-chandra-isomorphism-for-the-center, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-central-characters-are-dot-weyl-orbits). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, a chosen positive-root system and corresponding Borel, Weyl group $W$, and half-sum $\rho$ of positive roots. Let $\chi_\lambda$ and $\chi_\mu$ be the central characters obtained from highest weights $\lambda,\mu\in\mathfrak h^*$ for this Borel. Then

$$\chi_\lambda=\chi_\mu \quad \text{if and only if} \quad \mu\in W\cdot \lambda,$$

where $W\cdot \lambda:=\{w(\lambda+\rho)-\rho : w\in W\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the indicated semisimple Lie algebra, Cartan, positive-root system, Borel, Weyl group, and weights $\lambda,\mu\in \mathfrak h^*$.

[F1] The Weyl group $W$ is finite, so two distinct orbits are disjoint finite subsets of the affine space $\mathfrak h^*$.

[F2] Under AC, the shifted Harish--Chandra map is an algebra isomorphism from the center onto $S(\mathfrak h)^W$ ([[thm-harish-chandra-isomorphism-for-the-center]]).

## Proof

**Proof technique:** direct.

1.1 If $\mu=w\cdot\lambda$ for some $w\in W$, then $\mu+\rho=w(\lambda+\rho)$. Under the stated AC, [F2] makes every central element $z$ determine a Weyl-invariant polynomial $\operatorname{HC}_\rho(z)\in S(\mathfrak h)^W$, and [[lem-harish-chandra-projection-computes-highest-weight-scalars]] gives $$ \chi_\lambda(z)=\operatorname{pr}(z)(\lambda)=\operatorname{HC}_\rho(z)(\lambda+\rho), \qquad \chi_\mu(z)=\operatorname{HC}_\rho(z)(\mu+\rho). $$ Since $\operatorname{HC}_\rho(z)$ is ordinarily $W$-invariant, $\operatorname{HC}_\rho(z)(\mu+\rho)=\operatorname{HC}_\rho(z)(\lambda+\rho)$. Hence $\chi_\mu(z)=\chi_\lambda(z)$ for every central $z$, so $\chi_\mu=\chi_\lambda$. [F2, given]

1.2 Let $a,b\in\mathfrak h^*$ have distinct $W$-orbits $O_a,O_b$. Their union is finite and disjoint by [F1]. For each $x\in O_a$ and each other $y\in O_a\cup O_b$, choose an affine linear polynomial $L_{x,y}$ with $L_{x,y}(x)=1$ and $L_{x,y}(y)=0$; a coordinate on which $x,y$ differ supplies one. Then $p_x=\prod_{y\ne x}L_{x,y}$ equals $1$ at $x$ and $0$ at every other point of the union. The polynomial $p=\sum_{x\in O_a}p_x$ equals $1$ on $O_a$ and $0$ on $O_b$. Averaging $p$ over the finite group, $q(z)=|W|^{-1}\sum_{w\in W}p(wz)$, gives $q\in S(\mathfrak h)^W$ with $q(a)=1$ and $q(b)=0$. [F1, construct, algebra]

2.1 Conversely, if $\chi_\mu=\chi_\lambda$, step 1.1 and the surjectivity in [F2] under the stated AC show that every polynomial in $S(\mathfrak h)^W$ takes the same value at $\lambda+\rho$ and $\mu+\rho$. Step 1.2 rules out distinct ordinary $W$-orbits, so $\mu$ lies in the dot orbit of $\lambda$. [F2, step 1.1, step 1.2]

3.1 Therefore equal central characters are exactly the dot-Weyl orbits. [step 1.1, step 2.1] ∎
