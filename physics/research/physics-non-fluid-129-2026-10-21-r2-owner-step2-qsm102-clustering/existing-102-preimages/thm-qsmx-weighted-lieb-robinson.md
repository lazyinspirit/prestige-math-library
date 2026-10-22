---
id: thm-qsmx-weighted-lieb-robinson
kind: theorem
title: Weighted interaction commutator bound
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsmx-summable-interaction-norm
  - lem-qsmx-lattice-weight-convolution
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsmx-summable-interaction-norm: mathematical-premise
  lem-qsmx-lattice-weight-convolution: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, Theorem 4.6 and §4.2"
      url: "https://arxiv.org/pdf/1102.0842"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorem 4.1.2 and §4.1 proof"
      url: "https://arxiv.org/pdf/1311.2717"
---

## Statement

Let $G$ be either $F_a$, $a>0$, or $F_\rho$, $\rho>d$, as in the weighted-interaction definition. Let $\Phi_u$ be a norm-continuous family of finite interactions on $\mathbb Z^d$, indexed by $u\in[0,T]$, with $M_G:=\sup_{u\in[0,T]}\|\Phi_u\|_G<\infty$. For finite $\Lambda\subset\mathbb Z^d$, define $H_\Lambda(u)=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi_u(Z)$ and let $U_\Lambda(0)=I$ solve

$$\frac{d}{du}U_\Lambda(u)=-iH_\Lambda(u)U_\Lambda(u)/\hbar.$$

Set $\alpha_u^\Lambda(A)=U_\Lambda(u)^* A U_\Lambda(u)$, extended by the identity outside $\Lambda$. If $A\in\mathcal A_X$, $B\in\mathcal A_Y$ for disjoint finite nonempty $X,Y\subset\Lambda$, then

$$\|[\alpha_u^\Lambda(A),B]\|\le \frac{2\|A\|\|B\|}{C_G} \left(e^{2C_GM_Gu/\hbar}-1\right) \sum_{x\in X,\,y\in Y}G(d_\infty(x,y)).$$

The same estimate holds for the inverse path. In particular, for a constant interaction $\Phi$ evolved in physical time $t$ by $\tau_t^{\Lambda,\Phi}$, take $u=|t|$ and the constant path $\Phi_u=\Phi$ to obtain

$$\|[\tau_t^{\Lambda,\Phi}(A),B]\|\le \frac{2\|A\|\|B\|}{C_G} \left(e^{2C_G\|\Phi\|_G|t|/\hbar}-1\right) \sum_{x\in X,\,y\in Y}G(d_\infty(x,y)).$$

In physical units, $u,T,t$ are times, $M_G$ and $\|\Phi\|_G$ have energy units, and $\hbar$ has energy-times-time units; the weights and convolution constants are dimensionless, so the exponential arguments are dimensionless.

## Statement references

[[def-qsmx-summable-interaction-norm]]

[[lem-qsmx-lattice-weight-convolution]]

[[def-qsm-local-spin-algebras]]

## Facts & Assumptions

**Given:** $d\ge1$, a finite volume $\Lambda$, finite nonempty disjoint supports $X,Y\subseteq\Lambda$, a norm-continuous finite-interaction path $\Phi_u$, and the bounds in the Statement.

[F1] [[def-qsmx-summable-interaction-norm]]: $H_\Lambda(u)$ is a finite self-adjoint matrix, $\|\Phi_u\|_G$ is the supremum of the pair-weighted interaction sums, and the finite-volume dynamics are matrix conjugations.

[F2] [[lem-qsmx-lattice-weight-convolution]]: $G$ is summable and $\sum_zG(d_\infty(x,z))G(d_\infty(z,y))\le C_GG(d_\infty(x,y))$, with $C_G>0$.

[F3] [[def-qsm-local-spin-algebras]]: finite local algebras are matrix algebras; operators in disjoint tensor factors commute, and their factor inclusions preserve the operator norm.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F3], $M_G<\infty$, and $\hbar>0$ in the constant-interaction statement.

1.1 For a finite nonempty $S\subseteq\Lambda$, define $C_B^\Lambda(S,u)=\sup_{D\in\mathcal A_S,\;D\ne0}\|[\alpha_u^\Lambda(D),B]\|/\|D\|$. Let $U_S(u)$ solve $U_S'(u)=-iH_S(u)U_S(u)/\hbar$, $U_S(0)=I$, where $H_S(u)=\sum_{\varnothing\ne Z\subseteq S}\Phi_u(Z)$. Put $\widetilde\alpha_u^S(D)=U_S(u)D U_S(u)^*$ and $f(u)=[\alpha_u^\Lambda(\widetilde\alpha_u^S(D)),B]$. Product differentiation and the Jacobi identity give $f'(u)=\frac{i}{\hbar}[K_S(u),f(u)]+\frac{i}{\hbar}\sum_{\substack{Z\subseteq\Lambda\\Z\cap S\ne\varnothing,\;Z\not\subseteq S}} [\alpha_u^\Lambda(\widetilde\alpha_u^S(D)),[B,\alpha_u^\Lambda(\Phi_u(Z))]],$ where $K_S(u)=\sum_{Z\subseteq\Lambda:\,Z\cap S\ne\varnothing,\;Z\not\subseteq S}\alpha_u^\Lambda(\Phi_u(Z))$ is self-adjoint. Indeed, the local propagator cancels the terms contained in $S$, and terms disjoint from $S$ commute with $D$ by [F3]. The homogeneous equation $g'=(i/\hbar)[K_S(u),g]$ preserves norm because its propagator is unitary; existence follows from the uniformly convergent finite-dimensional Picard series. Variation of constants, $\|[R,Q]\|\le2\|R\|\|Q\|$, and enlargement of the crossing-support sum to all terms meeting $S$ therefore give $C_B^\Lambda(S,u)\le C_B^\Lambda(S,0)+\frac{2}{\hbar}\sum_{\substack{Z\subseteq\Lambda\\Z\cap S\ne\varnothing}}\int_0^u\|\Phi_v(Z)\|C_B^\Lambda(Z,v)\,dv.$ The same inequality applies to the inverse path, which is generated over a reversed parameter interval by the interaction $-\Phi_{u-v}$ and has the same norm bound. [given, F1, F3, algebra]

2.1 At $u=0$, disjointness gives $C_B^\Lambda(S,0)=0$ when $S\cap Y=\varnothing$, while $C_B^\Lambda(S,u)\le2\|B\|$ for all supports and times by the commutator inequality and isometry of the dynamics. Iteration of step 1.1 produces time-ordered integrals over $0\le v_n\le\cdots\le v_1\le u$ and chains $Z_1,\ldots,Z_n$ with $Z_1\cap S\ne\varnothing$, $Z_{j+1}\cap Z_j\ne\varnothing$ and $Z_n\cap Y\ne\varnothing$, with product $\prod_{j=1}^n\|\Phi_{v_j}(Z_j)\|$. All support sums are finite. For the iteration remainder, put $Q_\Lambda=\sum_{\varnothing\ne Z\subseteq\Lambda}\sup_{v\in[0,T]}\|\Phi_v(Z)\|<\infty$, which is finite by norm continuity and compactness. Its absolute size after $n$ iterations is at most $2\|B\|(2Q_\Lambda u/\hbar)^n/n!$, so it tends to zero. This volume-dependent number is used only to discard the remainder. For the chain terms, define the time-dependent kernel $K_v(x,y)=\sum_{Z\subseteq\Lambda:\,x,y\in Z}\|\Phi_v(Z)\|$. At each fixed time tuple, summing over all endpoint and overlap sites overcounts each nonnegative interaction-chain term at least once. Thus the order-$n$ contribution for $S=X$ is at most $$2\|B\|(2/\hbar)^n\int_{0\le v_n\le\cdots\le v_1\le u}\sum_{x\in X,y\in Y}(K_{v_1}\cdots K_{v_n})(x,y)\,dv_n\cdots dv_1.$$ Kernel products here sum only over sites of the finite volume. No supremum over time has been moved inside an interaction sum for this bound. [given, F1, F3, step 1.1, algebra]

3.1 By [F1], for each $v\in[0,T]$ separately, $K_v(x,y)\le M_GG(d_\infty(x,y))$. Induction using [F2] gives $$(K_{v_1}\cdots K_{v_n})(x,y)\le M_G^n C_G^{n-1}G(d_\infty(x,y))\qquad(n\ge1):$$ the intermediate-site convolution over the finite volume is bounded by the full nonnegative lattice convolution. This bound is uniform in every time tuple. Its integral over the time-ordered simplex is $u^n/n!$ times that bound. Substituting into step 2.1 and summing the convergent exponential series gives $C_B^\Lambda(X,u)\le \frac{2\|B\|}{C_G}(e^{2C_GM_Gu/\hbar}-1)\sum_{x\in X,y\in Y}G(d_\infty(x,y))$. The finite-volume remainder justifies the iteration limit; alternatively the displayed factorial majorant dominates every partial chain sum. Multiplication by $\|A\|$ proves the path estimate, including $A=0$. Applying the same time-ordered argument to the reversed interaction path, whose norm at every time is bounded by $M_G$, proves the inverse estimate. For a constant interaction take $u=|t|$; reversal changes its sign but not its norm. All constants in the resulting estimates depend only on $C_G,M_G$, not on the volume-dependent remainder bound. [given, F1, F2, step 2.1, algebra] ∎
