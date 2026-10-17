---
id: thm-tgr-kms-orbit-time-rescaling
kind: theorem
title: KMS orbit clock rescaling
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-qsm-kms-state
  - lem-tgr-killing-thermal-normalization
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  lem-tgr-killing-thermal-normalization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Definition 3.4.4, printed p. 74
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, printed pp. 13–14
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Let $\mathcal A$ be a unital complex $C^*$-algebra and let $t\mapsto\alpha_t$ be a strongly continuous one-parameter group of $*$-automorphisms of $\mathcal A$. Let $\omega$ be a $\beta_K$-KMS state for $\alpha$ in the physical-time convention of [[def-qsm-kms-state]], where $\beta_K>0$ has units $\mathrm{J}^{-1}$ and $\hbar>0$ has units $\mathrm{J\,s}$. For a constant dimensionless $\lambda>0$, define
$$\alpha^\lambda_\tau:=\alpha_{\tau/\lambda},$$
where $t$ and $\tau$ are real time parameters in seconds. Then $\omega$ is a $\lambda\beta_K$-KMS state for $\alpha^\lambda$, with strip width $\lambda\beta_K\hbar$ seconds. Conversely, if $\omega$ is a $\widehat\beta$-KMS state for $\alpha^\lambda$, then it is a $(\widehat\beta/\lambda)$-KMS state for $\alpha$.

On a single stationary observer orbit with Killing-time parameter $t_K$ and proper-time parameter $\tau=N t_K$, the lapse $N>0$ is constant along that orbit by [[lem-tgr-killing-thermal-normalization]]. Thus a reference inverse temperature $\beta_K=(k_BT_K)^{-1}$ rescales to $\beta_{\mathrm{loc}}=N\beta_K$, corresponding to $T_{\mathrm{loc}}=T_K/N$. This is an orbitwise statement: no spatially varying lapse is treated as one global time-rescaled automorphism group.

## Facts & Assumptions

**Given:** A unital complex $C^*$-algebra, a strongly continuous $*$-automorphism group, a $\beta_K$-KMS state in physical time, and a constant $\lambda>0$.

[A1] The rescaling is by one fixed positive constant on the stated system. In the geometric interpretation, proper time and Killing time are related along each selected orbit by $\tau=N t_K$ with that orbit's constant $N>0$.

[F1] [[def-qsm-kms-state]]: a $\beta$-KMS state for a strongly continuous automorphism group has, for every $A,B$, a bounded function continuous on $0\le\operatorname{Im}z\le\beta\hbar$, holomorphic inside, and with boundary values $\omega(A\alpha_t(B))$ and $\omega(\alpha_t(B)A)$.

[F2] [[lem-tgr-killing-thermal-normalization]]: on the connected selected stationary carrier, $\beta$ is Killing exactly when $NT=T_K$ for a positive constant; then $\beta=\xi/(k_BT_K)$ and $\xi(N)=0$. Its current item is draft and has a current ready Step 1 record, which is authoring readiness only.

## Proof

1.1 For $A,B\in\mathcal A$, let $F_{A,B}$ be the strip function supplied by [F1]. Define $\widetilde F_{A,B}(z):=F_{A,B}(z/\lambda)$. If $0\le\operatorname{Im}z\le\lambda\beta_K\hbar$, then $0\le\operatorname{Im}(z/\lambda)\le\beta_K\hbar$; hence $\widetilde F$ is bounded and continuous on the rescaled closed strip and holomorphic inside. For real $\tau$, $\widetilde F_{A,B}(\tau)=\omega(A\alpha_{\tau/\lambda}(B))=\omega(A\alpha^\lambda_\tau(B))$, and at the upper edge $\widetilde F_{A,B}(\tau+i\lambda\beta_K\hbar)=\omega(\alpha^\lambda_\tau(B)A)$. Thus it is the required $\lambda\beta_K$-KMS function. [given, A1, F1, construct, algebra]

1.2 Conversely, if $\widetilde F_{A,B}$ witnesses the $\widehat\beta$-KMS property for $\alpha^\lambda$, define $G_{A,B}(z):=\widetilde F_{A,B}(\lambda z)$. Positive $\lambda$ maps the strip of width $(\widehat\beta/\lambda)\hbar$ to the strip of width $\widehat\beta\hbar$, so boundedness, boundary continuity and interior holomorphy are preserved. The lower edge is $\omega(A\alpha^\lambda_{\lambda t}(B))=\omega(A\alpha_t(B))$, and the upper edge is $\omega(\alpha_t(B)A)$. This proves the converse. [given, A1, F1, algebra]

2.1 On a stationary orbit, [F2] makes $N$ constant along its Killing flow and gives $T_{\mathrm{loc}}=T_K/N$. Therefore $(k_BT_{\mathrm{loc}})^{-1}=N(k_BT_K)^{-1}=N\beta_K$, exactly the inverse-temperature scaling proved in step 1.1 when $\lambda=N$. The result applies separately on each orbit; it constructs no global automorphism with position-dependent rescaling. [given, A1, F2, step 1.1, algebra] ∎
