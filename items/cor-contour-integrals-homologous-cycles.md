---
id: cor-contour-integrals-homologous-cycles
kind: corollary
title: "Holomorphic integrals agree on homologous cycles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-global-cauchy-theorem-homology, def-null-homologous-and-homologous-complex-cycles, thm-winding-number-chain-laws, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic,
and let $\Gamma_0,\Gamma_1$ be complex chains which are cycles with traces in
$\Omega$ and which are homologous in $\Omega$
([[def-null-homologous-and-homologous-complex-cycles]]). Then

$$\int_{\Gamma_0}f(z)\,dz=\int_{\Gamma_1}f(z)\,dz.$$

## Facts & Assumptions

**Given:** An open $\Omega$, a holomorphic $f:\Omega\to\mathbb C$, and cycles $\Gamma_0,\Gamma_1$ with traces in $\Omega$, homologous in $\Omega$.

[L1] If $\Gamma$ is a cycle with trace in an open $\Omega$, null-homologous in $\Omega$, and $f$ is holomorphic on $\Omega$, then $\int_\Gamma f\,dz=0$ ([[cor-global-cauchy-theorem-homology]]).

[L2] Two cycles with traces in $\Omega$ are homologous in $\Omega$ when their difference is null-homologous in $\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L3] $(\Gamma_1+\Gamma_2)^\ast=\Gamma_1^\ast\cup\Gamma_2^\ast$ and $(-\Gamma)^\ast=\Gamma^\ast$; the sum of two cycles and the negative of a cycle are cycles; and for $f$ continuous on the traces involved, $\int_{\Gamma_1+\Gamma_2}f\,dz=\int_{\Gamma_1}f\,dz+\int_{\Gamma_2}f\,dz$ and $\int_{-\Gamma}f\,dz=-\int_\Gamma f\,dz$ ([[thm-winding-number-chain-laws]]).

[L4] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$ ([[def-integration-and-index-of-complex-chain]]), a chain being a finite list of integer-weighted complex contours ([[def-complex-chain-and-cycle]]).

[L5] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] the chain $\Gamma_0-\Gamma_1$ is a cycle and its trace is $\Gamma_0^\ast\cup\Gamma_1^\ast$, which lies in $\Omega$; and $f$ is continuous on that trace by [L5]. [given, L3, L4, L5]

1.2 By [L2] the chain $\Gamma_0-\Gamma_1$ is null-homologous in $\Omega$, since $\Gamma_0$ and $\Gamma_1$ are homologous there. [given, L2]

2.1 Steps 1.1 and 1.2 put $\Gamma_0-\Gamma_1$ under the hypotheses of [L1], so $\int_{\Gamma_0-\Gamma_1}f\,dz=0$. [step 1.1, step 1.2, L1]

3.1 By [L3] the left-hand side of step 2.1 equals $\int_{\Gamma_0}f\,dz-\int_{\Gamma_1}f\,dz$, so the two integrals agree. [step 2.1, L3] ∎
