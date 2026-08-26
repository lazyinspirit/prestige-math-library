---
id: lem-localised-module-addition-independent-of-representatives
kind: lemma
title: "Addition of localised module fractions is independent of representatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-of-a-module, lem-localised-module-fraction-equivalence-is-an-equivalence-relation]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

If $m/s = m'/s'$ and $n/t = n'/t'$ in $S^{-1}M$, then
$$
\frac{tm+sn}{st}=\frac{t'm'+s'n'}{s't'}.
$$
So the addition formula of [[def-localisation-of-a-module]] is independent of the chosen representatives.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a left $R$-module $M$, and equalities $m/s=m'/s'$ and $n/t=n'/t'$ in $S^{-1}M$.

[L1] In $S^{-1}M$, the equality $x/u = y/v$ means that $q(vx-uy)=0$ for some $q \in S$, and addition is defined by $(x/u)+(y/v)=(vx+uy)/(uv)$ ([[def-localisation-of-a-module]]).

[L2] The relation defining $S^{-1}M$ is an equivalence relation ([[lem-localised-module-fraction-equivalence-is-an-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $u,v \in S$ with $u(s'm-sm')=0$ and $v(t'n-tn')=0$. [given, L1, L2, choose]

2.1 Multiplying the first equality by $vtt'$ and the second by $uss'$ and then adding gives $uv\bigl(s't'(tm+sn)-st(t'm'+s'n')\bigr)=0$. [step 1.1, algebra]

3.1 Step 2.1 is exactly the relation witnessing $(tm+sn)/(st) = (t'm'+s'n')/(s't')$, so the addition formula is independent of representatives. [step 2.1, L1] ∎
