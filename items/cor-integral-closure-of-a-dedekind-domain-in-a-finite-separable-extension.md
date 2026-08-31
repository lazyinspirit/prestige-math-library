---
id: cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension
kind: corollary
title: "The integral closure of a Dedekind domain in a finite separable extension is Dedekind"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-domain, thm-finite-integral-closure-in-a-finite-separable-extension, cor-dimension-preserved-by-integral-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain with fraction field $F$, let $L/F$ be a finite separable field extension, and let $A$ be the integral closure of $R$ in $L$. Then $A$ is a Dedekind domain.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ with fraction field $F$, a finite separable extension $L/F$, and the integral closure $A$ of $R$ in $L$.

[F1] A Dedekind domain is a Noetherian integrally closed domain of dimension $1$ ([[def-dedekind-domain]]).

[L1] The integral closure $A$ is a finite $R$-module ([[thm-finite-integral-closure-in-a-finite-separable-extension]]).

[L2] Assuming Choice, an injective integral extension of nonzero commutative rings preserves Krull dimension ([[cor-dimension-preserved-by-integral-extensions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the ring $A$ is a finite $R$-module, hence integral over $R$. Since $R$ is Noetherian by [F1], every ideal of $A$ is an $R$-submodule of the finite $R$-module $A$, so $A$ is Noetherian. If $x\in\operatorname{Frac}(A)\subseteq L$ is integral over $A$, then transitivity of integrality makes $x$ integral over $R$, so the defining property of $A$ forces $x\in A$. Thus $A$ is integrally closed. [F1, L1, given, algebra]

1.2 The inclusion $R\subseteq A$ is an injective integral extension of nonzero domains. Since [F1] gives $\dim R=1$, [L2] gives $\dim A=1$. [F1, L1, L2, given]

2.1 Steps 1.1 and 1.2 show that $A$ is a Noetherian integrally closed domain of dimension $1$. Hence [F1] makes $A$ a Dedekind domain. [F1, step 1.1, step 1.2] ∎
