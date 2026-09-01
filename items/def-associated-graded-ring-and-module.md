---
id: def-associated-graded-ring-and-module
kind: definition
title: "The associated graded ring and associated graded module of an ideal-adic filtration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graded-ring-and-graded-module]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.57: Graded modules"
      url: "https://stacks.math.columbia.edu/tag/00JR"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §20"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Definition

Let $R$ be a commutative ring, let $I\subset R$ be an ideal, and let $M$ be an
$R$-module. The **associated graded ring** of the $I$-adic filtration is
$$
\operatorname{gr}_I(R):=\bigoplus_{n\ge0} I^n/I^{n+1}.
$$
Multiplication is induced by multiplication in $R$:
$$
(a+I^{m+1})(b+I^{n+1})=ab+I^{m+n+1}.
$$

The **associated graded module** is
$$
\operatorname{gr}_I(M):=\bigoplus_{n\ge0} I^nM/I^{n+1}M,
$$
viewed as a graded $\operatorname{gr}_I(R)$-module by
$$
(a+I^{m+1})(x+I^{n+1}M)=ax+I^{m+n+1}M.
$$
