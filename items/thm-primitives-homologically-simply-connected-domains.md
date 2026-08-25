---
id: thm-primitives-homologically-simply-connected-domains
kind: theorem
title: "Every holomorphic function on a homologically simply connected domain has a primitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-global-cauchy-theorem-homology, def-homologically-simply-connected-complex-domain, def-null-homologous-and-homologous-complex-cycles, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, thm-path-independence-and-complex-primitive-criterion, cor-complex-differentiability-implies-continuity, def-complex-primitive, def-complex-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a homologically simply connected complex domain
([[def-homologically-simply-connected-complex-domain]]). Then every holomorphic
$f:\Omega\to\mathbb C$ has a primitive on $\Omega$
([[def-complex-primitive]]): there is a holomorphic $F:\Omega\to\mathbb C$ with
$F'=f$.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega$ and a holomorphic $f:\Omega\to\mathbb C$.

[L1] If $\Gamma$ is a cycle with trace in an open $\Omega$, null-homologous in $\Omega$, and $f$ is holomorphic on $\Omega$, then $\int_\Gamma f\,dz=0$ ([[cor-global-cauchy-theorem-homology]]).

[L2] A complex domain is homologically simply connected when every cycle with trace in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]], [[def-null-homologous-and-homologous-complex-cycles]]).

[L3] A list of closed complex contours is a cycle; in particular a single closed contour, taken as the list of length $1$ with coefficient $1$, is a cycle, and its trace is the trace of that contour ([[def-complex-chain-and-cycle]]).

[L4] For a chain consisting of the single closed contour $\gamma$ with coefficient $1$, $\int_\Gamma f\,dz=\int_\gamma f\,dz$ ([[def-integration-and-index-of-complex-chain]]).

[L5] For a complex domain $U$ and a continuous $f:U\to\mathbb C$, the following are equivalent: $f$ has a primitive on $U$; the integral of $f$ along rectifiable contours in $U$ depends only on the endpoints; the integral of $f$ around every closed rectifiable contour in $U$ is $0$ ([[thm-path-independence-and-complex-primitive-criterion]]).

[L6] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L7] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma$ be a closed rectifiable contour with trace in $\Omega$, and let $\Gamma$ be the chain consisting of $\gamma$ with coefficient $1$. By [L3] that chain is a cycle whose trace is $\gamma^\ast\subseteq\Omega$. [given, L3]

2.1 By [L2] the cycle $\Gamma$ is null-homologous in $\Omega$, so [L1] gives $\int_\Gamma f\,dz=0$, and [L4] rewrites this as $\int_\gamma f\,dz=0$. [step 1.1, L1, L2, L4]

3.1 The set $\Omega$ is a complex domain by [L7] and $f$ is continuous on it by [L6], so [L5] applies; step 2.1 supplies its third condition for every closed rectifiable contour in $\Omega$, and the equivalence therefore yields a primitive $F$ of $f$ on $\Omega$. [given, step 2.1, L5, L6, L7] ∎
