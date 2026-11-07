---
dependency_level: 2
id: lem-gl3-periodic-zero-mean-distribution-canonical-at-infinity
kind: lemma
title: "Canonical Extension of a Periodic Distribution with Zero Mean"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
  - lem-gl3-canonical-extension-is-unique
proof_strategy: direct
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, Proposition 2.19"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Facts & Assumptions

**Given:** A period-one distribution $T$ of mean zero on the circle; put $a_m=\langle T,e(-m\cdot)\rangle$, so $a_0=0$.

[F1] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]]: a canonical extension across infinity is an extension in the coordinate $u=1/x$ that vanishes to infinite order at $u=0$.

[F2] [[lem-gl3-canonical-extension-is-unique]]: two extensions agreeing off $u=0$ and vanishing to the same positive order there are equal.

## Statement

Every period-one distribution $T$ on $\mathbb R$ satisfying $\langle T,1\rangle=0$ on $\mathbb R/\mathbb Z$ has a canonical extension across $\infty$ in $\mathbb R\cup\{\infty\}$.

## Statement references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, Proposition 2.19](https://arxiv.org/pdf/math/0403030v1)

## Proof

**Proof technique:** direct.

1.1 Continuity of $T$ on the compact circle gives constants $C>0$ and an integer $M$ such that $|\langle T,\phi\rangle|\leq C\max_{0\leq j\leq M}\|\phi^{(j)}\|_\infty$ for every smooth periodic $\phi$. Applying this bound to $\phi(x)=e(-mx)$ gives $|a_m|\leq C'(1+|m|)^M$. Here continuity gives a bound by finitely many defining smooth seminorms: a neighborhood on which $|T|<1$ contains a set $\max_{j\le M}\|\phi^{(j)}\|_\infty<\epsilon$, and scaling gives the asserted bound. For a smooth periodic test $\phi$, integration by parts $N$ times gives $|\widehat\phi(n)|\le C_N(1+|n|)^{-N}$. Its Fourier series converges to $\phi$ in every smooth seminorm. Indeed the coefficient decay gives convergence with every derivative; identification with $\phi$ follows from the Fejér kernels $N^{-1}|\sum_{j=0}^{N-1}e(jx)|^2$: they have integral one, are nonnegative, and their mass outside any neighborhood of zero tends to zero by the finite geometric-sum formula. Convolution therefore tends uniformly to each continuous derivative of $\phi$, while these convolutions are the Cesàro means of its Fourier sums. Applying $T$ to the smooth Fourier sums now gives $\langle T,\phi\rangle=\sum_m a_m\widehat\phi(-m)$, an absolutely convergent sum. Thus $T=\sum_{m\ne0}a_me(mx)$ as a distribution, rather than as an additional hypothesis. Choose any integer $k>M+1$ and put $F_k(x)=\sum_{m\ne0}a_m(2\pi i m)^{-k}e(mx)$. The series converges absolutely and uniformly, so $F_k$ is continuous and periodic, and termwise distributional differentiation gives $D_x^kF_k=T$. [given, construct]

2.1 In the coordinate $u=1/x$ near infinity, set $G_k(u)=F_k(1/u)$ for $u\ne0$ and choose any bounded representative at $u=0$. Then $G_k\in L^\infty_{\mathrm{loc}}$ and $T(1/u)=(-u^2D_u)^kG_k(u)=u^k\sum_{j=1}^k b_{k,j}u^jD_u^jG_k(u)$, where the constants $b_{k,j}$ are obtained by iterating $-u^2D_u$. This extends $T$ across $u=0$ and vanishes to order $k$ by [F1]. [step 1.1, F1, algebra, construct]

3.1 Vanishing to order $k+1$ implies vanishing to order $k$: on a bounded smaller interval put $h_j(u)=\int_0^u f_j(v)\,dv$. Then $|h_j(u)|\le |u|\|f_j\|_\infty$, and integration by parts against a compactly supported smooth test (or Fubini applied to this integral) gives $Dh_j=f_j$ distributionally. Hence $D^{m_j+1}h_j=D^{m_j}f_j$ and the exact normal-form identity is $u^{k+1}u^{m_j}D^{m_j}f_j=u^ku^{m_j+1}D^{m_j+1}h_j$. Iterate this reduction for each nonnegative smaller order. Therefore each extension in step 2.1 vanishes to every order $r\leq k$. [step 2.1, F1, algebra]

4.1 For any two integers $k,k'>M+1$, the extensions in step 2.1 agree off $0$ and each vanishes to order at least one by step 3.1. By [F2] they are the same distribution. Since $k$ can be arbitrarily large, their common extension vanishes to every order; it is the canonical extension required. [step 2.1, step 3.1, F2] ∎

