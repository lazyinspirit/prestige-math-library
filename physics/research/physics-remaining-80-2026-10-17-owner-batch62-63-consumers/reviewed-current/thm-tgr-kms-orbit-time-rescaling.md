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
  - def-countable-choice
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  lem-tgr-killing-thermal-normalization: mathematical-premise
  def-countable-choice: mathematical-premise
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

For the geometric interpretation, let $O$ be a connected open subset of a smooth time-oriented Lorentzian four-manifold $(M,g)$ of signature $(-,+,+,+)$, and let $\xi$ be a smooth future-directed timelike Killing field on $O$ with dimensionless components in length coordinates $x^0=ct$, where $c>0$ is the speed of light in $\mathrm{m\,s^{-1}}$. Define $N_\xi(x):=\sqrt{-g_x(\xi_x,\xi_x)}>0$ and $u:=\xi/N_\xi$. For a selected point $x_0\in O$, let $I_K\subseteq\mathbb R$ be an interval in seconds containing $0$, and let $\gamma_{x_0}:I_K\to O$ be the $C^1$ integral curve of $c\xi$ with $\gamma_{x_0}(0)=x_0$, so $\gamma_{x_0}'(t_K)=c\,\xi_{\gamma_{x_0}(t_K)}$; this is the Killing orbit through $x_0$ with Killing-time parameter $t_K$. For a cell assigned to $x_i$, take $x_0=x_i$ and denote this curve by $\gamma_i$. Define its proper-time parameter from the metric by
$$\tau(t_K):=\frac1c\int_0^{t_K}\sqrt{-g_{\gamma_{x_0}(s)}\bigl(\gamma_{x_0}'(s),\gamma_{x_0}'(s)\bigr)}\,ds,\qquad \tau(0)=0.$$
By [[lem-tgr-killing-thermal-normalization]], $\xi(N_\xi)=0$, so $N:=N_\xi(x_0)>0$ is constant along this orbit. The metric definition then gives $d\tau=N\,dt_K$ and, with the chosen origins, $\tau=Nt_K$; equivalently $d\gamma_{x_0}/d\tau=cu$ for $u=\xi/N_\xi$. For $k_B>0$ in $\mathrm{J\,K^{-1}}$ and reference temperature $T_K>0$ in kelvins, the inverse temperature $\beta_K=(k_BT_K)^{-1}$ rescales orbitwise to $\beta_{\mathrm{loc}}:=N\beta_K$; defining $T_{\mathrm{loc}}:=(k_B\beta_{\mathrm{loc}})^{-1}$ gives $T_{\mathrm{loc}}=T_K/N$. No spatially varying lapse is treated as one global time-rescaled automorphism group.

## Facts & Assumptions

**Given:** A unital complex $C^*$-algebra, a strongly continuous $*$-automorphism group, a $\beta_K$-KMS state in physical time, and a constant $\lambda>0$.

[A1] For a selected point $x_0\in O$, $I_K$ is an interval in seconds containing $0$, $\gamma_{x_0}:I_K\to O$ is $C^1$ with $\gamma_{x_0}(0)=x_0$ and $\gamma_{x_0}'=c\xi\circ\gamma_{x_0}$, and $\tau(t_K)=c^{-1}\int_0^{t_K}\sqrt{-g_{\gamma_{x_0}(s)}(\gamma_{x_0}'(s),\gamma_{x_0}'(s))}\,ds$ is its proper time in seconds. For a cell at $x_i$, $x_0=x_i$ and this curve is denoted $\gamma_i$. The positive lapse $N_\xi=\sqrt{-g(\xi,\xi)}$ is constant along the orbit by [F2]; $N=N_\xi(x_0)$ is the constant used in the rescaling.

[A2] [[def-countable-choice]] is the explicit $\mathrm{AC}_\omega$ assumption on the smooth stationary geometry carrier used by [F2]; no stronger choice principle is used.

[F1] [[def-qsm-kms-state]]: a $\beta$-KMS state for a strongly continuous automorphism group has, for every $A,B$, a bounded function continuous on $0\le\operatorname{Im}z\le\beta\hbar$, holomorphic inside, and with boundary values $\omega(A\alpha_t(B))$ and $\omega(\alpha_t(B)A)$.

[F2] [[lem-tgr-killing-thermal-normalization]]: under [A2] and its selected stationary-carrier hypotheses, its proof derives $\xi(N_\xi)=0$ from the Killing equation and metric compatibility; when the inverse-temperature vector $\beta$ is also Killing, the lemma gives $N_\xi T=T_K$ for a positive constant and $\beta=\xi/(k_BT_K)$. Its current item is draft and has a current ready Step 1 record, which is authoring readiness only.

## Proof

1.1 For $A,B\in\mathcal A$, let $F_{A,B}$ be the strip function supplied by [F1]. Define $\widetilde F_{A,B}(z):=F_{A,B}(z/\lambda)$. If $0\le\operatorname{Im}z\le\lambda\beta_K\hbar$, then $0\le\operatorname{Im}(z/\lambda)\le\beta_K\hbar$; hence $\widetilde F$ is bounded and continuous on the rescaled closed strip and holomorphic inside. For real $\tau$, $\widetilde F_{A,B}(\tau)=\omega(A\alpha_{\tau/\lambda}(B))=\omega(A\alpha^\lambda_\tau(B))$, and at the upper edge $\widetilde F_{A,B}(\tau+i\lambda\beta_K\hbar)=\omega(\alpha^\lambda_\tau(B)A)$. Thus it is the required $\lambda\beta_K$-KMS function. [given, A1, F1, construct, algebra]

1.2 Conversely, if $\widetilde F_{A,B}$ witnesses the $\widehat\beta$-KMS property for $\alpha^\lambda$, define $G_{A,B}(z):=\widetilde F_{A,B}(\lambda z)$. Positive $\lambda$ maps the strip of width $(\widehat\beta/\lambda)\hbar$ to the strip of width $\widehat\beta\hbar$, so boundedness, boundary continuity and interior holomorphy are preserved. The lower edge is $\omega(A\alpha^\lambda_{\lambda t}(B))=\omega(A\alpha_t(B))$, and the upper edge is $\omega(\alpha_t(B)A)$. This proves the converse. [given, A1, F1, algebra]

2.1 Along $\gamma_{x_0}$, [F2] gives $\xi(N_\xi)=0$, hence $\frac{d}{dt_K}N_\xi(\gamma_{x_0}(t_K))=c\,\xi(N_\xi)(\gamma_{x_0}(t_K))=0$ and $N_\xi(\gamma_{x_0}(t_K))=N$. By [A1] and $\gamma_{x_0}'=c\xi$, the proper-time definition yields $\frac{d\tau}{dt_K}=c^{-1}\sqrt{-g(\gamma_{x_0}',\gamma_{x_0}')}=c^{-1}\sqrt{-g(c\xi,c\xi)}=N$; integrating from $0$ gives $\tau=Nt_K$. Step 1.1 with $\lambda=N$ gives $\beta_{\mathrm{loc}}=N\beta_K$; by the stated definition, $T_{\mathrm{loc}}=(k_B\beta_{\mathrm{loc}})^{-1}=T_K/N$. The result applies separately on each orbit; it constructs no global automorphism with position-dependent rescaling. [given, A1, A2, F2, step 1.1, algebra] ∎
