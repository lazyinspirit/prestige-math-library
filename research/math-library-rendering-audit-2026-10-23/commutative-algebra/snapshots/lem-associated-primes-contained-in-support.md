---
id: lem-associated-primes-contained-in-support
kind: lemma
title: "Associated primes lie in the support"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, def-support-of-a-module, def-localisation-at-a-prime-ideal, def-localisation-of-a-module, lem-zero-in-a-localised-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.63.2"
      url: "https://stacks.math.columbia.edu/tag/00L9"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a commutative ring and let $M$ be a left $R$-module. Then
$$ \operatorname{Ass}_R(M)\subseteq \operatorname{Supp}_R(M). $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a left $R$-module $M$.

[L1] A prime ideal $\mathfrak p$ is associated to $M$ exactly when $\mathfrak p=\operatorname{Ann}_R(m)$ for some $m \in M$ ([[def-associated-prime-of-a-module]]).

[L2] A prime ideal lies in $\operatorname{Supp}_R(M)$ exactly when the localization $M_{\mathfrak p}$ is nonzero ([[def-support-of-a-module]]).

[L3] The module localization $M_{\mathfrak p}$ consists of fractions $m/s$ with $s\in R\setminus\mathfrak p$, and $m/1=0$ exactly when some $s\notin\mathfrak p$ kills $m$ ([[def-localisation-of-a-module]], [[lem-zero-in-a-localised-module]], [[def-localisation-at-a-prime-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p \in \operatorname{Ass}_R(M)$. By [L1], choose $m \in M$ with $\operatorname{Ann}_R(m)=\mathfrak p$. If $m/1=0$ in $M_{\mathfrak p}$, then by the definition of localization there exists $s \notin \mathfrak p$ with $sm=0$. Hence $s \in \operatorname{Ann}_R(m)=\mathfrak p$, a contradiction. So $m/1 \neq 0$ in $M_{\mathfrak p}$. [L1, L3, choose, algebra]

2.1 By [L2], step 1.1 shows $\mathfrak p \in \operatorname{Supp}_R(M)$. Thus $\operatorname{Ass}_R(M)\subseteq \operatorname{Supp}_R(M)$. [L2, step 1.1] ∎
