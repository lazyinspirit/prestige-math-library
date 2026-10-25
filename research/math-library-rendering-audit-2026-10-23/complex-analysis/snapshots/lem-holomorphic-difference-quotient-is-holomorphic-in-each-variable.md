---
id: lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable
kind: lemma
title: "The filled difference quotient is holomorphic in each variable separately"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cauchy-difference-quotient-exceptional-extension, lem-continuous-function-holomorphic-off-a-point-is-holomorphic, lem-holomorphic-difference-quotient-is-jointly-continuous]
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
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic
and let $g$ be its filled difference quotient
([[lem-holomorphic-difference-quotient-is-jointly-continuous]]). Then for each
fixed $z\in\Omega$ the map $\zeta\mapsto g(\zeta,z)$ is holomorphic on the whole
of $\Omega$, the point $\zeta=z$ included; and by symmetry, for each fixed
$\zeta\in\Omega$ the map $z\mapsto g(\zeta,z)$ is holomorphic on $\Omega$.

## Facts & Assumptions

**Given:** An open $\Omega\subseteq\mathbb C$, a holomorphic $f:\Omega\to\mathbb C$ and its filled difference quotient $g$.

[L1] With $U$ open, $f$ holomorphic on $U$ and $z\in U$ fixed, the function equal to $(f(\zeta)-f(z))/(\zeta-z)$ for $\zeta\ne z$ and to $f'(z)$ at $\zeta=z$ is continuous on $U$ and holomorphic on $U\setminus\{z\}$; no holomorphy at the filled point is asserted ([[lem-cauchy-difference-quotient-exceptional-extension]]).

[L2] If $U\subseteq\mathbb C$ is open, $p\in U$ and $h:U\to\mathbb C$ is continuous on $U$ and holomorphic on $U\setminus\{p\}$, then $h$ is holomorphic on $U$ ([[lem-continuous-function-holomorphic-off-a-point-is-holomorphic]]).

[L3] The filled difference quotient $g$ of a holomorphic $f$ on $\Omega$ is $(f(\zeta)-f(z))/(\zeta-z)$ off the diagonal and $f'(z)$ on it, and it satisfies $g(\zeta,z)=g(z,\zeta)$ ([[lem-holomorphic-difference-quotient-is-jointly-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z\in\Omega$. By [L3] the map $\zeta\mapsto g(\zeta,z)$ is exactly the function of [L1] for that $z$, so it is continuous on $\Omega$ and holomorphic on $\Omega\setminus\{z\}$. [given, L1, L3]

2.1 Applying [L2] with $U=\Omega$, $p=z$ and $h=g(\cdot,z)$, step 1.1 upgrades that function to a holomorphic function on all of $\Omega$. [step 1.1, L2]

3.1 By the symmetry $g(\zeta,z)=g(z,\zeta)$ of [L3], the map $z\mapsto g(\zeta,z)$ for fixed $\zeta$ is the map of step 2.1 with the roles of the two arguments exchanged, hence holomorphic on $\Omega$ as well. [step 2.1, L3] ∎
