---
page: etale-covers-and-the-etale-fundamental-group-examples
title: "Etale Covers and the Etale Fundamental Group — Examples"
status: published
requires:
- etale-covers-and-the-etale-fundamental-group
items: []
examples:
- ex-etale-covers-of-gm
- cex-fundamental-group-depends-on-base-field
---

The two boundary examples of the finite étale fundamental group packet are
collected here.

The first computes the Kummer covers of the multiplicative group over an
algebraically closed field $k$: for $n$ invertible in $k$ the power map
$t\mapsto t^n$ on $\mathbb G_{m,k}$ is a connected finite étale cover of degree
$n$ whose deck group is $\mu_n(k)$, so it produces an order-$n$ continuous
quotient of $\pi_1^{\mathrm{et}}(\mathbb G_{m,k},1)$. When the characteristic
$p$ divides $n$ the same finite power map fails to be étale, with explicitly
nonreduced fibre over $1$; no claim that the Kummer covers exhaust all finite
covers in positive characteristic is made.

The second is a counterexample to base-field invariance: the finite étale
$\mathbb R$-algebra $\mathbb C$ is a connected Galois cover of
$\operatorname{Spec}\mathbb R$ of order two, so $\pi_1^{\mathrm{et}}(
\operatorname{Spec}\mathbb R)$ has a quotient of order two, while
$\pi_1^{\mathrm{et}}(\operatorname{Spec}\mathbb C)$ is trivial. Extending the
base field from $\mathbb R$ to $\mathbb C$ therefore changes the étale
fundamental group of a connected finite type scheme.
