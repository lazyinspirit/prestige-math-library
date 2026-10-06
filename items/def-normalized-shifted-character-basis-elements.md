---
id: def-normalized-shifted-character-basis-elements
kind: definition
title: "Normalized shifted character observables $\\eta_\\rho$"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-joint-convergence-and-normalized-cycle-character-observables, def-shifted-character-observables-and-profile-moments, thm-shifted-character-basis-and-weight-filtration, prop-plancherel-expectations-of-shifted-character-observables, prop-basic-value-properties-of-a-complex-character, def-plancherel-measure-on-partitions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§6, formulas (6.2)-(6.5), printed p. 30 (the localization $A_{\\mathrm{ext}}$ and the normalization $\\eta_\\rho$)"
---

## Definition

Fix $n\ge1$. For a partition $\rho$ of [[def-shifted-character-observables-and-profile-moments]] write $|\rho|_1:=|\rho|+m_1(\rho)$, where $m_1(\rho)$ is the multiplicity of the part $1$. For $\lambda\vdash n$ with $n\ge|\rho|$ define the **normalized observable**
$$\eta_\rho^{(n)}(\lambda):=\frac{p_\rho^\#(\lambda)}{n^{|\rho|_1/2}\prod_{k\ge2}k^{m_k(\rho)/2}} .$$
For $n<|\rho|$ declare $\eta_\rho^{(n)}(\lambda):=0$, consistently with $p_\rho^\#(\lambda)=0$ there. Since $p_1^\#(\lambda)=n$, the definition can be written in the equivalent localized form
$$\eta_\rho^{(n)}=\frac{p_\rho^\#}{\bigl(p_1^\#\bigr)^{m_1(\rho)}\prod_{k\ge2}\bigl(k(p_1^\#)^k\bigr)^{m_k(\rho)/2}}\qquad\text{on }Y_n,$$
which is the concrete evaluation of the source's localization $A_{\mathrm{ext}}=A[(p_1^\#)^{1/2},(p_1^\#)^{-1/2}]$ on each $Y_n$; the equality uses $p_1^\#(\lambda)=n$, a positive number for $n\ge1$, so the square roots are ordinary positive real roots. In particular, for a single part $\rho=(k)$, $k\ge2$, one has $\eta_{(k)}^{(n)}=p_k^\#/(\sqrt k\,n^{k/2})=\eta_k^{(n)}$, the observable of [[def-joint-convergence-and-normalized-cycle-character-observables]].

Each $\eta_\rho^{(n)}$ is a real function on the finite set $Y_n$, hence a random variable on $(Y_n,P_n)$ ([[def-plancherel-measure-on-partitions]]), and for every $n\ge|\rho|$ the expectation of [[prop-plancherel-expectations-of-shifted-character-observables]] gives
$$\mathbb E_{P_n}\bigl[\eta_\rho^{(n)}\bigr]=\begin{cases}\dfrac{n^{\downarrow|\rho|}}{n^{|\rho|_1/2}\prod_{k\ge2}k^{m_k(\rho)/2}},&\rho=(1^{|\rho|}),\\[4pt]0,&\rho\ne(1^{|\rho|}),\end{cases}$$
so the expectation vanishes whenever $m_1(\rho)=0$ and $\rho\ne\emptyset$, and equals $\prod_{j=0}^{|\rho|-1}(1-j/n)\le1$ for $\rho=(1^{|\rho|})$; in every case it is $O(1)$ uniformly in $n$. Moreover
$$\bigl|\eta_\rho^{(n)}(\lambda)\bigr|\le n^{(|\rho|-m_1(\rho))/2}\prod_{k\ge2}k^{-m_k(\rho)/2}$$
for every $\lambda\vdash n$, $n\ge|\rho|$: by [[prop-basic-value-properties-of-a-complex-character]] every irreducible character satisfies $|\chi^\lambda_\mu|\le\chi^\lambda_{(1^n)}=\dim_{\mathbb C}S^\lambda$, so $|p_\rho^\#(\lambda)|\le n^{\downarrow|\rho|}\le n^{|\rho|}$, and dividing by $n^{|\rho|_1/2}\prod_{k\ge2}k^{m_k(\rho)/2}=n^{(|\rho|+m_1(\rho))/2}\prod_{k\ge2}k^{m_k(\rho)/2}$ gives the displayed bound. This normalization is the one used in [[lem-hermite-leading-terms-for-normalized-shifted-characters]] and [[thm-kerov-central-limit-theorem-for-normalized-cycle-characters]]. No choice principle is used.
