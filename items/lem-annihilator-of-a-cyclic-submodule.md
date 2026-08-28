---
id: lem-annihilator-of-a-cyclic-submodule
kind: lemma
title: "A cyclic submodule is a residue module by its annihilator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilator-and-torsion-of-a-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (17.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let $m \in M$.
Then the cyclic submodule $Rm$ is naturally isomorphic to
$$
R/\operatorname{Ann}_R(m).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, and an element $m \in M$.

[L1] The annihilator of $m$ is $\operatorname{Ann}_R(m)=\{r \in R : rm=0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Define $\varphi:R/\operatorname{Ann}_R(m)\to Rm$ by $$ \varphi(r+\operatorname{Ann}_R(m))=rm. $$ If $r-r' \in \operatorname{Ann}_R(m)$, then $(r-r')m=0$, so $rm=r'm$; hence $\varphi$ is well-defined. Every element of $Rm$ has the form $rm$, so $\varphi$ is surjective. [L1, given, construct]

2.1 If $\varphi(r+\operatorname{Ann}_R(m))=0$, then $rm=0$, so $r \in \operatorname{Ann}_R(m)$ by [L1]. Thus $r+\operatorname{Ann}_R(m)=0$ and $\varphi$ is injective. [L1, step 1.1]

3.1 Steps 1.1 and 2.1 show that $\varphi$ is the claimed natural isomorphism. [step 1.1, step 2.1] ∎
