---
id: cex-ip-vsc-unit-coefficient-does-not-control-bregman-error
kind: counterexample
title: A unit VSC coefficient need not force Bregman convergence
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20 and equation (2.26)"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
---

## Statement refuted

For $X=Y=\mathbb R$ with the usual norm and pairing, $D(F)=\mathbb R$, $F(x)=0$, $R(x)=\max\{0,-x\}$, $x^\dagger=0$, $y=0$, $\xi^\dagger=-1\in\partial R(0)$, $R_0=1$, $p=2$, and $\psi(t)=\sqrt t$, the boundary source inequality with coefficient $\beta_1=1$

$$-\xi^\dagger(x-x^\dagger)\le D_R^{\xi^\dagger}(x,x^\dagger)+\psi\!\left(|F(x)-F(x^\dagger)|^2\right)\qquad(R(x)\le R_0),$$

holds for every $x$ with $R(x)\le R_0$, where $D_R^{\xi^\dagger}(x,0):=R(x)-R(0)-\xi^\dagger x$. For every $\delta\in(0,1]$, set $y^\delta=0$, $\alpha(\delta)=\delta$, and $J_\delta(x):=\frac12|F(x)-y^\delta|^2+\alpha(\delta)R(x)$. A global minimizer means a point $x_\delta$ with $J_\delta(x_\delta)\le J_\delta(z)$ for every $z\in\mathbb R$. The false claim is that every family of such global minimizers satisfies $D_R^{\xi^\dagger}(x_\delta,0)=O(\delta)$ as $\delta\downarrow0$, meaning $D_R^{\xi^\dagger}(x_\delta,0)\le C\delta$ for some fixed $C$ and all sufficiently small $\delta>0$.

## Statement references

[[def-ip-banach-convex-subgradient-and-dual-pairing|Banach subgradient inequality]]

[[def-ip-bregman-distance|Bregman distance]]

[[def-ip-variational-source-condition|Variational source condition]]

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20 and equation (2.26)](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The scalar model and source inequality in the Statement.

[F1] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $\xi\in\partial R(x)$ exactly when $R(z)\ge R(x)+\langle\xi,z-x\rangle$ for every $z$.

[F2] [[def-ip-bregman-distance]]: $D_R^\xi(x,x^\dagger)=R(x)-R(x^\dagger)-\langle\xi,x-x^\dagger\rangle$.

[F3] [[def-ip-variational-source-condition]]: the rate theorem's VSC requires a coefficient strictly below one; this item tests the same source inequality at its excluded boundary value one.

## Counterexample


1.1 The function $R$ is finite and nonnegative, hence proper. For $u,v\in\mathbb R$ and $t\in[0,1]$, $R((1-t)u+tv)=\max\{(1-t)0+t0,(1-t)(-u)+t(-v)\}\le(1-t)\max\{0,-u\}+t\max\{0,-v\}$, so $R$ is convex. For every $z\in\mathbb R$, $R(z)\ge-z=R(0)+(-1)(z-0)$, so [F1] gives $\xi^\dagger=-1\in\partial R(0)$. By [F2], $D_R^{-1}(x,0)=R(x)+x$, which equals $x$ for $x\ge0$ and $0$ for $x<0$. Since $F$ is zero, the source inequality has left side $x$ and right side $D_R^{-1}(x,0)$; it holds for all $x$, hence on $R(x)\le1$, with boundary coefficient $\beta_1=1$. [given, F1, F2, F3, algebra]

2.1 For every $\delta>0$, $J_\delta(x)=\delta R(x)\ge0$, and it equals zero for every $x\ge0$. Thus $x_\delta=1$ is a global minimizer for every $\delta$, but $D_R^{-1}(1,0)=1$. No fixed constant bounds $1$ by $C\delta$ for all sufficiently small $\delta$, so the claimed rate fails. [given, step 1.1, algebra] ∎
