---
id: lem-support-is-specialisation-closed
kind: lemma
title: "The support of any module is closed under specialisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-support-of-a-module, lem-support-membership-by-annihilator, cor-specialisation-order-is-prime-inclusion]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Definition (13.26)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.40: Support"
      url: "https://stacks.math.columbia.edu/tag/080S"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring, let $M$ be an $R$-module, and let $\mathfrak p,\mathfrak q\in\operatorname{Spec}(R)$ with $\mathfrak p\subseteq\mathfrak q$. If $\mathfrak p\in\operatorname{Supp}_R(M)$, then $\mathfrak q\in\operatorname{Supp}_R(M)$. Equivalently, the support of any module is closed under specialisation.

## Facts & Assumptions

**Given:** A commutative ring $R$, an $R$-module $M$, prime ideals $\mathfrak p\subseteq\mathfrak q$, and the Axiom of Choice.

[L1] A prime ideal lies in the support exactly when some module element has annihilator contained in that prime ([[lem-support-membership-by-annihilator]]).

[L2] In a prime spectrum, specialisation is reverse inclusion ([[cor-specialisation-order-is-prime-inclusion]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathfrak p\in\operatorname{Supp}_R(M)$, fact [L1] gives an element $m\in M$ with $\operatorname{Ann}_R(m)\subseteq\mathfrak p$. Because $\mathfrak p\subseteq\mathfrak q$, the same annihilator satisfies $\operatorname{Ann}_R(m)\subseteq\mathfrak q$. [L1, given, choose]

2.1 Applying [L1] again, step 1.1 implies $\mathfrak q\in\operatorname{Supp}_R(M)$. The equivalent specialisation language follows from [L2]. [L1, L2, step 1.1]

3.1 Therefore the support of any module is closed under specialisation. [step 2.1] ∎
