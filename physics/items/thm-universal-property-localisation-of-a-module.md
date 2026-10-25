---
id: thm-universal-property-localisation-of-a-module
kind: theorem
title: "Universal property of localisation for modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-of-a-module, lem-localised-module-addition-independent-of-representatives, lem-localised-module-scalar-action-independent-of-representatives, thm-localisation-equivalence-and-ring-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 5.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S \subseteq R$ be multiplicative, let $M$ be a left $R$-module, and let $N$ be an $S^{-1}R$-module. Every $R$-linear map $f:M \to N$ factors uniquely through the localisation map $\lambda_M:M \to S^{-1}M$ by an $S^{-1}R$-linear map
$$ \widetilde{f}:S^{-1}M \longrightarrow N, \qquad \widetilde{f}(m/s)=(1/s)f(m). $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a left $R$-module $M$, an $S^{-1}R$-module $N$, and an $R$-linear map $f:M \to N$.

[L1] In $S^{-1}M$, the localisation map is $\lambda_M(m)=m/1$, addition is $(m/s)+(n/t)=(tm+sn)/(st)$, and the scalar action is $(a/u)(m/s)=am/(us)$ ([[def-localisation-of-a-module]]).

[L2] The addition formula of $S^{-1}M$ is independent of representatives ([[lem-localised-module-addition-independent-of-representatives]]).

[L3] The scalar action of $S^{-1}R$ on $S^{-1}M$ is independent of representatives ([[lem-localised-module-scalar-action-independent-of-representatives]]).

[L4] In $S^{-1}R$, every $s/1$ with $s \in S$ is a unit with inverse $1/s$ ([[thm-localisation-equivalence-and-ring-laws]]).

## Proof

**Proof technique:** direct.

1.1 Define $\widetilde{f}(m/s):=(1/s)f(m)$. If $m/s=m'/s'$, choose $u \in S$ with $u(s'm-sm')=0$; applying $f$ gives $(u/1)\bigl((s'/1)f(m)-(s/1)f(m')\bigr)=0$, and multiplying by the units $(u/1)^{-1}(s/1)^{-1}(s'/1)^{-1}$ from [L4] gives $(1/s)f(m)=(1/s')f(m')$. [L1, L4, given, algebra]

2.1 For $m/s,n/t \in S^{-1}M$, $\widetilde{f}((m/s)+(n/t))=(1/st)f(tm+sn)=(1/s)f(m)+(1/t)f(n)=\widetilde{f}(m/s)+\widetilde{f}(n/t)$, and for $a/u \in S^{-1}R$ one has $\widetilde{f}((a/u)(m/s))=(1/us)f(am)=(a/u)\widetilde{f}(m/s)$. [step 1.1, L1, L2, L3, algebra]

2.2 For every $m \in M$, $\widetilde{f}(\lambda_M(m))=\widetilde{f}(m/1)=f(m)$. [step 1.1, L1]

3.1 If $g:S^{-1}M \to N$ is $S^{-1}R$-linear and $g \lambda_M=f$, then for every $m/s$ one has $g(m/s)=g((1/s)(m/1))=(1/s)g(m/1)=(1/s)f(m)=\widetilde{f}(m/s)$, so $g=\widetilde{f}$. [L1, L4, step 2.2]

4.1 Steps 1.1, 2.1, 2.2, and 3.1 prove the stated unique $S^{-1}R$-linear factorisation. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
