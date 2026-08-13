---
id: cor-every-module-is-a-quotient-of-a-free-module
kind: corollary
title: "Every module is a quotient of a free module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-universal-property-of-free-modules, def-quotient-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\varepsilon_M:R^{(M)}\to M$, determined by $\varepsilon_M(e_m)=m$. Consequently $M\cong R^{(M)}/\ker\varepsilon_M$.

## Facts & Assumptions

**Given:** A left $R$-module $M$.

[L1] Every set map from a basis set to a module extends uniquely to a homomorphism from the free module ([[thm-universal-property-of-free-modules]]).

[F1] The quotient module $F/K$ consists of additive cosets and carries the induced module operations ([[def-quotient-module]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to the identity set map on the underlying set of $M$; this defines $\varepsilon_M:R^{(M)}\to M$ with $\varepsilon_M(e_m)=m$. [L1, construct]

2.1 Every $m\in M$ equals $\varepsilon_M(e_m)$, so $\varepsilon_M$ is surjective, including when $M=0$. [step 1.1]

2.2 Define $\phi:R^{(M)}/\ker\varepsilon_M\to M$ by $\phi(x+\ker\varepsilon_M)=\varepsilon_M(x)$. Equality of cosets makes this well defined, and [F1] makes it a homomorphism. [step 1.1, F1, construct]

3.1 The map $\phi$ is surjective by step 2.1 and injective because $\phi(x+\ker\varepsilon_M)=0$ exactly when $x\in\ker\varepsilon_M$. Hence it is an isomorphism. [step 2.1, step 2.2]

4.1 Thus $M$ is canonically a quotient of a free module. [step 3.1, discharge-construct] ∎
