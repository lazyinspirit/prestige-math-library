---
id: def-qft-distribution-scaling-degree
kind: definition
title: Scaling degree and local distribution extensions
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-distribution
dependency_roles:
  def-distribution: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, §5.1"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, §I.1"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 0
---

## Definition

Fix an integer $n\ge1$, put $U=\mathbb R^n\setminus\{0\}$, and use the continuous complex-linear test-function pairing of [[def-distribution]]. For $t\in\mathcal D'(U)$ and $\rho>0$, define its dilation at the origin by

$$\langle t_\rho,\varphi\rangle:=\rho^{-n}\langle t,\varphi(\cdot/\rho)\rangle,\qquad \varphi\in\mathcal D(U).$$

Positive dilations preserve $U$, so the displayed pairing is defined for every test function in $\mathcal D(U)$. If $t$ is the regular distribution induced by a locally integrable function $g$, change of variables gives $\langle t_\rho,\varphi\rangle=\int_U g(\rho x)\varphi(x)\,dx$.

Convergence $s_\rho\to0$ in $\mathcal D'(U)$ as $\rho\downarrow0$ means $\langle s_\rho,\varphi\rangle\to0$ for every fixed $\varphi\in\mathcal D(U)$. The **scaling degree at the origin** is

$$\operatorname{sd}_0(t):=\inf\{\omega\in\mathbb R:\rho^\omega t_\rho\to0\text{ in }\mathcal D'(U)\}.$$

The infimum of the empty set is $+\infty$; if every real $\omega$ belongs to the set, the infimum is $-\infty$. A finite scaling degree means a real value $\delta\in\mathbb R$. For a distribution $T\in\mathcal D'(\mathbb R^n)$ use the same dilation formula on tests in $\mathcal D(\mathbb R^n)$. An **extension** of $t$ is a distribution $T$ on $\mathbb R^n$ whose restriction to $U$ equals $t$. The degree of divergence associated with a finite scaling degree $\delta$ in dimension $n$ is $\delta-n$. Exact homogeneity of scaling degree $\delta$ means $\rho^\delta T_\rho=T$ for every $\rho>0$.

The definitions use Euclidean dilations about the specified point only. They do not assert that a given distribution arises from a product of fields or that an extension is physically selected.
