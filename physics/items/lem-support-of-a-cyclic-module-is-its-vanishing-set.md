---
id: lem-support-of-a-cyclic-module-is-its-vanishing-set
kind: lemma
title: "The support of a cyclic quotient is its vanishing set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-support-of-a-module, thm-localisation-commutes-with-quotients, thm-localisation-at-a-prime-is-local]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (13.27)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For an ideal $I$ of a commutative ring $R$,
$$ \operatorname{Supp}_R(R/I)=\{\mathfrak p : I \subseteq \mathfrak p\}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an ideal $I \trianglelefteq R$.

[L1] A prime ideal $\mathfrak p$ lies in $\operatorname{Supp}_R(R/I)$ exactly when $(R/I)_{\mathfrak p}\neq0$ ([[def-support-of-a-module]]).

[L2] Localisation commutes with quotients: $(R/I)_{\mathfrak p}\cong R_{\mathfrak p}/IR_{\mathfrak p}$ ([[thm-localisation-commutes-with-quotients]]).

[L3] The local ring $R_{\mathfrak p}$ has maximal ideal $\mathfrak pR_{\mathfrak p}$, and the units are exactly the fractions with numerator outside $\mathfrak p$ ([[thm-localisation-at-a-prime-is-local]]).

## Proof

**Proof technique:** direct.

1.1 Fix a prime ideal $\mathfrak p$. By [L2], $(R/I)_{\mathfrak p}\neq0$ exactly when $R_{\mathfrak p}/IR_{\mathfrak p}\neq0$. [L1, L2]

1.2 If $I \subseteq \mathfrak p$, then every generator $i/1$ of $IR_{\mathfrak p}$ lies in the maximal ideal $\mathfrak pR_{\mathfrak p}$ from [L3], so $IR_{\mathfrak p}$ is proper and the quotient is nonzero. [L3]

1.3 If $I \nsubseteq \mathfrak p$, choose $i \in I \setminus \mathfrak p$. Then $i/1$ is a unit in $R_{\mathfrak p}$ by [L3], and it lies in $IR_{\mathfrak p}$, so $IR_{\mathfrak p}=R_{\mathfrak p}$ and the quotient is zero. [L3, choose]

2.1 By steps 1.1, 1.2, and 1.3, $\mathfrak p$ lies in $\operatorname{Supp}_R(R/I)$ exactly when $I \subseteq \mathfrak p$. [step 1.1, step 1.2, step 1.3] ∎
