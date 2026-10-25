---
id: thm-support-and-annihilator-of-a-finite-module
kind: theorem
title: "For a finite module, support is the set of primes containing the annihilator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-support-membership-by-annihilator, lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports, def-annihilator-and-torsion-of-a-module]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (13.27)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.40.5"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Statement

If $M$ is a finitely generated left $R$-module, then
$$ \operatorname{Supp}_R(M)=\{\mathfrak p : \operatorname{Ann}_R(M)\subseteq\mathfrak p\}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a finitely generated left $R$-module $M$.

[L1] A prime ideal lies in $\operatorname{Supp}_R(M)$ exactly when some element of $M$ has annihilator inside it ([[lem-support-membership-by-annihilator]]).

[L2] If $m_1,\dots,m_r$ generate $M$, then $\operatorname{Supp}_R(M)=\bigcup_i \operatorname{Supp}_R(R/\operatorname{Ann}_R(m_i))$ ([[lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports]]).

[L3] The annihilator of $M$ is $\operatorname{Ann}_R(M)=\{r \in R:rm=0 \text{ for every } m \in M\}$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak p \in \operatorname{Supp}_R(M)$, [L1] gives $m \in M$ with $\operatorname{Ann}_R(m)\subseteq\mathfrak p$. Since every element of $\operatorname{Ann}_R(M)$ kills every element of $M$, one has $\operatorname{Ann}_R(M)\subseteq\operatorname{Ann}_R(m)\subseteq\mathfrak p$. [L1, L3]

1.2 Choose generators $m_1,\dots,m_r$ of $M$. If $\operatorname{Ann}_R(M)\subseteq\mathfrak p$ and no $\operatorname{Ann}_R(m_i)$ is contained in $\mathfrak p$, choose $t_i \in \operatorname{Ann}_R(m_i)\setminus\mathfrak p$ for every $i$. Then $t=t_1\cdots t_r \notin \mathfrak p$, but $t$ annihilates every generator and hence all of $M$, so $t \in \operatorname{Ann}_R(M)\subseteq\mathfrak p$, a contradiction. Thus $\operatorname{Ann}_R(m_i)\subseteq\mathfrak p$ for some $i$, and [L2] gives $\mathfrak p \in \operatorname{Supp}_R(M)$. [L2, L3, choose]

2.1 Steps 1.1 and 1.2 prove the support-annihilator formula. [step 1.1, step 1.2] ∎
