---
id: prop-qft-local-counterterm-jet-classification
kind: proposition
title: Point-extension counterterms form a finite delta-jet space
status: published
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - def-dirac-delta-and-its-derivatives
  - def-qft-distribution-scaling-degree
  - def-support-of-a-distribution
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-distributions-supported-at-one-point
  - thm-qft-finite-scaling-degree-extension
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-support-of-a-distribution: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-distributions-supported-at-one-point: mathematical-premise
  thm-qft-finite-scaling-degree-extension: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Theorems 5.2–5.3"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, Theorem I.6"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 3
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

Assume the Axiom of Choice. Let $n\ge1$, let $t\in\mathcal D'(\mathbb R^n\setminus\{0\})$ have finite real scaling degree $\delta$, and let $\mathcal E_\delta(t)$ be the set of its extensions in $\mathcal D'(\mathbb R^n)$ having scaling degree exactly $\delta$. This set is nonempty by [[thm-qft-finite-scaling-degree-extension]]. If $\delta<n$, then $\mathcal E_\delta(t)$ has exactly one member. If $\delta\ge n$, let $k$ be the unique nonnegative integer with $k\le\delta-n<k+1$ (the floor of $\delta-n$). Then, for any $T_0\in\mathcal E_\delta(t)$,

$$\mathcal E_\delta(t)=T_0+\operatorname{span}_{\mathbb C}\{\partial^\alpha\delta_0:|\alpha|\le k\}.$$

Here a **point-local counterterm** means a distribution whose support, as defined in [[def-support-of-a-distribution]], is contained in $\{0\}$. Thus the same-degree freedom is finite dimensional, with precisely the displayed delta derivatives as its basis; at the threshold $\delta=n$, only a multiple of $\delta_0$ is allowed.

## Facts & Assumptions

**Given:** $n\ge1$, $t\in\mathcal D'(\mathbb R^n\setminus\{0\})$ with finite real scaling degree $\delta$, and the Axiom of Choice.

[F1] [[def-qft-distribution-scaling-degree]]: the distribution dilation is $T_\rho(\varphi)=\rho^{-n}T(\varphi(\cdot/\rho))$, and scaling degree is defined by convergence of $\rho^\omega T_\rho$.

[F2] [[thm-qft-finite-scaling-degree-extension]]: under AC, every punctured distribution with finite real scaling degree $\delta$ has at least one extension of exactly that degree.

[F3] [[thm-distributions-supported-at-one-point]]: a distribution supported in $\{0\}$ is a unique finite sum $\sum_\alpha c_\alpha\partial^\alpha\delta_0$.

[F4] [[def-dirac-delta-and-its-derivatives]]: $\langle\partial^\alpha\delta_0,\varphi\rangle=(-1)^{|\alpha|}\partial^\alpha\varphi(0)$.

[F5] [[lem-test-function-cutoffs-and-euclidean-localization]]: a smooth compact cutoff equal to one near $\{0\}$ exists in $\mathbb R^n$.

[F6] [[def-support-of-a-distribution]]: the support is the complement of the largest open set where the distribution vanishes; agreement on tests away from $0$ makes the difference supported at $\{0\}$.

[A1] The Axiom of Choice is assumed, as required by [F2].

## Proof

**Given:** The hypotheses in the statement.

1.1 By [F2], choose $T_0\in\mathcal E_\delta(t)$. For any $T\in\mathcal E_\delta(t)$ the difference $S=T-T_0$ vanishes on every test supported away from $0$, so $\operatorname{supp}S\subseteq\{0\}$ by [F6]. By [F3], $S=\sum_{|\alpha|\le m}c_\alpha\partial^\alpha\delta_0$ for some finite $m$. [given, F2, F3, F6, A1]

2.1 For $S\ne0$, let $m$ be the largest order with a nonzero coefficient, and choose $\alpha$ of order $m$ with $c_\alpha\ne0$. Choose $\eta\in\mathcal D(\mathbb R^n)$ equal to one near $0$ by [F5], and test with $\psi_\alpha(x)=\eta(x)x^\alpha/\alpha!$. The product rule gives $\partial^\beta\psi_\alpha(0)=0$ for all $|\beta|\le m$ except $\beta=\alpha$, where it equals $1$. Consequently $$\langle S_\rho,\psi_\alpha\rangle=(-1)^m c_\alpha\rho^{-n-m}.$$ For every test $\varphi$, [F4] likewise gives $\langle S_\rho,\varphi\rangle=\sum_\beta c_\beta(-1)^{|\beta|}\rho^{-n-|\beta|}\partial^\beta\varphi(0)$. The finite sum tends to zero after multiplication by $\rho^\omega$ for every $\omega>n+m$, while the chosen test prevents convergence to zero for $\omega<n+m$. Hence $\operatorname{sd}_0(S)=n+m$. [F1, F4, F5, step 1.1, algebra]

3.1 Since $T$ and $T_0$ both have degree $\delta$, for every $\omega>\delta$ both $\rho^\omega T_\rho$ and $\rho^\omega(T_0)_\rho$ tend to zero. Thus $\operatorname{sd}_0(S)\le\delta$. Step 2.1 implies that every nonzero coefficient in $S$ has order at most $\lfloor\delta-n\rfloor$; if $\delta<n$, no nonzero $S$ is possible. [F1, step 2.1, algebra]

4.1 Conversely, let $S$ be any finite sum of $\partial^\alpha\delta_0$ with $|\alpha|\le k$ when $\delta\ge n$. Step 2.1 gives $\operatorname{sd}_0(S)\le n+k\le\delta$, and $T_0+S$ still restricts to $t$. Hence $\operatorname{sd}_0(T_0+S)\le\delta$. Restriction to tests supported in $\mathbb R^n\setminus\{0\}$ gives $\operatorname{sd}_0(T_0+S)\ge\operatorname{sd}_0(t)=\delta$, so equality holds. Uniqueness of the coefficients in [F3] identifies the displayed finite-dimensional affine space. For $\delta=n$, $k=0$, giving only $c\delta_0$. [F1, F3, step 2.1, step 3.1, algebra] ∎
