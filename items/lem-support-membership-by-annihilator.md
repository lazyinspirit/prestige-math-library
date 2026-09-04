---
id: lem-support-membership-by-annihilator
kind: lemma
title: "A prime lies in the support exactly when some element has annihilator inside it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-support-of-a-module, def-annihilator-and-torsion-of-a-module, lem-zero-in-a-localised-module, def-localisation-at-a-prime-ideal]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 13"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For a left $R$-module $M$ and a prime ideal $\mathfrak p$ of $R$,
$$ \mathfrak p \in \operatorname{Supp}_R(M) \quad \Longleftrightarrow \quad \operatorname{Ann}_R(m) \subseteq \mathfrak p \text{ for some } m \in M. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, and a prime ideal $\mathfrak p$.

[L1] The support condition $\mathfrak p \in \operatorname{Supp}_R(M)$ means $M_{\mathfrak p}\neq 0$, and localisation at $\mathfrak p$ uses denominators outside $\mathfrak p$ ([[def-support-of-a-module]], [[def-localisation-at-a-prime-ideal]]).

[L2] The annihilator of $m \in M$ is $\operatorname{Ann}_R(m)=\{r \in R:rm=0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

[L3] A localised fraction is zero exactly when one denominator kills its numerator ([[lem-zero-in-a-localised-module]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathfrak p \in \operatorname{Supp}_R(M)$ and choose $m/s \neq 0$ in $M_{\mathfrak p}$. If $t \notin \mathfrak p$ satisfied $tm=0$, then [L3] would give $m/s=0$. Hence every element of $\operatorname{Ann}_R(m)$ lies in $\mathfrak p$, so $\operatorname{Ann}_R(m)\subseteq\mathfrak p$. [L1, L2, L3]

1.2 Conversely, if $\operatorname{Ann}_R(m)\subseteq\mathfrak p$ and $m/1=0$ in $M_{\mathfrak p}$, then [L3] gives $t \notin \mathfrak p$ with $tm=0$, so $t \in \operatorname{Ann}_R(m)\subseteq\mathfrak p$, a contradiction. Thus $m/1\neq0$, so $M_{\mathfrak p}\neq0$. [L1, L2, L3]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
