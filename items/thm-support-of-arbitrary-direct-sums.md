---
id: thm-support-of-arbitrary-direct-sums
kind: theorem
title: "Support of an arbitrary direct sum is the union of the supports"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-support-of-a-module, thm-localisation-of-modules-commutes-with-quotients-and-sums]
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
    - title: "The Stacks Project, Section 10.40: Support"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Statement

For any family $(M_i)_{i \in I}$ of left $R$-modules,
$$
\operatorname{Supp}_R\!\left(\bigoplus_{i \in I} M_i\right)=\bigcup_{i \in I}\operatorname{Supp}_R(M_i).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a family $(M_i)_{i \in I}$ of left $R$-modules.

[L1] A prime ideal $\mathfrak p$ lies in the support of a module exactly when the localisation at $\mathfrak p$ is nonzero ([[def-support-of-a-module]]).

[L2] Localisation commutes with arbitrary direct sums ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

## Proof

**Proof technique:** direct.

1.1 Fix a prime ideal $\mathfrak p$. By [L2], $\left(\bigoplus_i M_i\right)_{\mathfrak p}\cong\bigoplus_i (M_i)_{\mathfrak p}$. This direct sum is nonzero exactly when at least one summand $(M_i)_{\mathfrak p}$ is nonzero. [L2]

2.1 By [L1], step 1.1 says exactly that $\mathfrak p$ lies in the support of $\bigoplus_i M_i$ if and only if it lies in the support of some $M_i$. [L1, step 1.1]

3.1 Since this holds for every prime ideal $\mathfrak p$, the support of the direct sum is the union of the supports. [step 2.1] ∎
