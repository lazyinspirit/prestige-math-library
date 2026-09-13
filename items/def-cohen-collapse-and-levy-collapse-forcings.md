---
id: def-cohen-collapse-and-levy-collapse-forcings
kind: definition
title: Cohen, collapse, and Lévy-collapse forcing orders
status: draft
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, def-cardinal-arithmetic, def-aleph-and-beth-hierarchies]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapters 3–4", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

For infinite $\kappa$ and nonzero $\lambda$,

$$\operatorname{Add}(\kappa,\lambda)=\operatorname{Fn}(\lambda\times\kappa,2,{<}\kappa),$$

the partial functions of domain size $<\kappa$, ordered by reverse inclusion. For infinite $\kappa\le\lambda$ put

$$\operatorname{Col}(\kappa,\lambda)=\operatorname{Fn}(\kappa,\lambda,{<}\kappa).$$

For an ordinal $\theta$, the finite-condition Lévy order $\operatorname{Lv}(\theta)$ consists of finite functions $p$ with $\operatorname{dom}p\subseteq\theta\times\omega$ and $p(\alpha,n)<\alpha$ whenever $(\alpha,n)\in\operatorname{dom}p$. In all three cases the empty function is largest and compatible conditions have union as a common extension. These are ground-model sets when used as forcing orders. The second order adds one $\kappa$-indexed surjection onto $\lambda$; the third simultaneously addresses every nonzero $\alpha<\theta$.

