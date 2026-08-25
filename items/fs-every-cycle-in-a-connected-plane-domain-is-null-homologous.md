---
id: fs-every-cycle-in-a-connected-plane-domain-is-null-homologous
kind: false-statement
title: "Every cycle in a connected plane domain is null-homologous in that domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-homologous-and-homologous-complex-cycles, def-homologically-simply-connected-complex-domain, cex-annulus-is-connected-but-not-homologically-simply-connected, thm-winding-number-circle-traversed-k-times, cor-global-cauchy-theorem-homology, cor-normalized-circle-integral-about-its-centre-is-one, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, thm-algebra-of-complex-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every complex chain which is a cycle with trace in a complex
domain is null-homologous in that domain.

## Facts & Assumptions

**Given:** The annulus $A=\{z:\tfrac12<|z|<2\}$ and the contour $C(t)=\exp(it)$ on $[0,2\pi]$, taken as the chain with the single term $(1,C)$.

[L1] A cycle $\Gamma$ with trace in an open $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,q)=0$ for every $q\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L2] A complex domain is homologically simply connected when every cycle with trace in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]]).

[L3] The annulus $\{\tfrac12<|z|<2\}$ is a complex domain, and the unit circle $C$ in it is a cycle with $n(C,0)=1$, so $C$ is not null-homologous in that annulus ([[cex-annulus-is-connected-but-not-homologically-simply-connected]]).

[L4] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with index $k$ for $|z-a|<r$ and $0$ for $|z-a|>r$ ([[thm-winding-number-circle-traversed-k-times]]).

[L5] If $\Gamma$ is a cycle with trace in an open $\Omega$, null-homologous in $\Omega$, and $f$ is holomorphic on $\Omega$, then $\int_\Gamma f\,dz=0$ ([[cor-global-cauchy-theorem-homology]]).

[L6] For a positively oriented circle $a+r\exp(it)$ with $r>0$, $(2\pi i)^{-1}\int_\gamma dz/(z-a)=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]).

[L7] A single closed contour with coefficient $1$ is a cycle whose trace is that contour's trace ([[def-complex-chain-and-cycle]]) and whose index is that contour's winding number ([[def-integration-and-index-of-complex-chain]]).

[L8] Nonvanishing quotients of functions complex differentiable at a point are complex differentiable there ([[thm-algebra-of-complex-derivatives]]).

## Refutation

**Proof technique:** direct.

1.1 By [L3] the annulus $A$ is a complex domain and the chain $C$ is a cycle with trace $\{|z|=1\}\subseteq A$; by [L4] and [L7] its index at $0$ is $1$. [given, L3, L4, L7]

2.1 The point $0$ lies in $\mathbb C\setminus A$, and step 1.1 gives $n(C,0)=1\ne0$, so [L1] denies that $C$ is null-homologous in $A$; the claim is therefore false, and by [L2] it is exactly the claim that every complex domain is homologically simply connected. [step 1.1, L1, L2]

3.1 The hypothesis is not removable from Cauchy's theorem either: $f(z)=1/z$ is holomorphic on $A$ by [L8], since $0\notin A$, and $\int_C dz/z=2\pi i\ne0$ by [L6], so the conclusion of [L5] fails for this cycle in this domain. [step 2.1, L5, L6, L8] ∎
