---
id: fs-every-finitely-additive-set-function-is-a-measure
kind: false-statement
title: "FALSE: every finitely additive nonnegative set function on a sigma-algebra is a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-additive-set-function, def-measure, def-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

**False claim.** Every finitely additive nonnegative set function on a sigma-algebra is countably additive and therefore is a measure.

## Facts & Assumptions

**Given:** The power-set sigma-algebra $\mathcal P(\mathbb N)$.

[L1] Finite additivity requires additivity on disjoint pairs and value $0$ at the empty set ([[def-finitely-additive-set-function]]).

[L2] A measure must be countably additive on disjoint measurable sequences ([[def-measure]]).

[L3] Finite sets are those equinumerous with a natural number ([[def-countable]]).

## Refutation

**Proof technique:** direct.

1.1 Define $m(A)=0$ when $A\subseteq\mathbb N$ is finite and $m(A)=+\infty$ when $A$ is infinite; in particular $m(\varnothing)=0$. [given, L3]

2.1 If disjoint $A,B$ have finite union, then both are finite and $m(A\cup B)=0=0+0$; if their union is infinite, at least one is infinite and both sides of $m(A\cup B)=m(A)+m(B)$ are $+\infty$. Thus $m$ is finitely additive. [step 1.1, L1]

2.2 The singletons $\{k\}$ are disjoint, each has value $0$, and their union is $\mathbb N$, which has value $+\infty$. [step 1.1, L3]

3.1 Step 2.2 violates countable additivity, so the finitely additive set function of step 2.1 is not a measure and the claim is false. [step 2.1, step 2.2, L2] ∎
