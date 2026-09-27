---
id: cor-central-characters-are-dot-weyl-orbits
kind: corollary
title: "Central characters are dot-Weyl orbits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-central-character-of-a-lie-algebra-module, lem-harish-chandra-projection-computes-highest-weight-scalars, thm-harish-chandra-isomorphism-for-the-center]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
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

Let $\chi_\lambda$ and $\chi_\mu$ be the central characters obtained from highest weights $\lambda$ and $\mu$. Then

$$\chi_\lambda=\chi_\mu \quad \text{if and only if} \quad \mu\in W\cdot \lambda,$$

where $W\cdot \lambda:=\{w(\lambda+\rho)-\rho : w\in W\}$.

## Facts & Assumptions

**Given:** Weights $\lambda,\mu\in \mathfrak h^*$.

[F1] For a finite Weyl group, two points of $\mathfrak h^*$ lie in the same ordinary $W$-orbit exactly when every polynomial in $S(\mathfrak h)^W$ takes the same value on them.

## Proof

**Proof technique:** direct.

1.1 If $\mu=w\cdot\lambda$ for some $w\in W$, then $\mu+\rho=w(\lambda+\rho)$. By [[thm-harish-chandra-isomorphism-for-the-center]], every central element $z$ determines a Weyl-invariant polynomial $\operatorname{HC}_\rho(z)\in S(\mathfrak h)^W$, and [[lem-harish-chandra-projection-computes-highest-weight-scalars]] gives $$ \chi_\lambda(z)=\operatorname{pr}(z)(\lambda)=\operatorname{HC}_\rho(z)(\lambda+\rho), \qquad \chi_\mu(z)=\operatorname{HC}_\rho(z)(\mu+\rho). $$ Since $\operatorname{HC}_\rho(z)$ is ordinarily $W$-invariant, $\operatorname{HC}_\rho(z)(\mu+\rho)=\operatorname{HC}_\rho(z)(\lambda+\rho)$. Hence $\chi_\mu(z)=\chi_\lambda(z)$ for every central $z$, so $\chi_\mu=\chi_\lambda$. [given]

2.1 Conversely, if $\chi_\mu=\chi_\lambda$, then the equalities from step 1.1 show that $$ \operatorname{HC}_\rho(z)(\lambda+\rho)=\operatorname{HC}_\rho(z)(\mu+\rho) $$ for every central $z$. Because [[thm-harish-chandra-isomorphism-for-the-center]] identifies the image of $\operatorname{HC}_\rho$ with all of $S(\mathfrak h)^W$, every Weyl-invariant polynomial takes the same value at $\lambda+\rho$ and $\mu+\rho$. By [F1], those two points lie in the same ordinary $W$-orbit, so $\mu$ lies in the dot orbit of $\lambda$. [F1, step 1.1]

3.1 Therefore equal central characters are exactly the dot-Weyl orbits. [step 1.1, step 2.1] ∎
