---
id: lem-localised-module-scalar-action-independent-of-representatives
kind: lemma
title: "The localised scalar action is independent of representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-of-a-module, def-multiplicative-subset-and-localisation]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.9: Localization"
      url: "https://stacks.math.columbia.edu/tag/00CM"
pipeline_run: null
---

## Statement

If $a/u = a'/u'$ in $S^{-1}R$ and $m/s = m'/s'$ in $S^{-1}M$, then
$$
\frac{am}{us}=\frac{a'm'}{u's'}.
$$
So the scalar action of [[def-localisation-of-a-module]] is independent of both ring-fraction and module-fraction representatives.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a left $R$-module $M$, and equalities $a/u=a'/u'$ in $S^{-1}R$ and $m/s=m'/s'$ in $S^{-1}M$.

[L1] In $S^{-1}M$, the equality $x/r = y/t$ means that $q(tx-ry)=0$ for some $q \in S$, and the proposed scalar action is $(b/v)(x/r)=bx/(vr)$ ([[def-localisation-of-a-module]]).

[L2] In $S^{-1}R$, the equality $b/v = c/w$ means that $q(wb-vc)=0$ for some $q \in S$ ([[def-multiplicative-subset-and-localisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], choose $v,w \in S$ with $v(u'a-ua')=0$ and $w(s'm-sm')=0$. [given, L1, L2, choose]

2.1 Multiplying the module-fraction equality by $auv$ and the ring-fraction equality by $usm'w$, then adding, gives $$ uvw(u's'am-usa'm')=au'vw(s'm-sm')+usm'vw(u'a-ua')=0. $$ So $uvw(u's'am-usa'm')=0$. [step 1.1, algebra]

3.1 Step 2.1 is exactly the relation witnessing $am/(us)=a'm'/(u's')$, so the scalar action is independent of representatives. [step 2.1, L1] ∎
