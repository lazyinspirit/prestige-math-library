---
id: thm-localisation-equivalence-and-ring-laws
kind: theorem
title: 'The localisation relation is an equivalence relation and fraction arithmetic is well defined'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multiplicative-subset-and-localisation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.9: Localization'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement

For every commutative ring $R$ and multiplicative subset $S$, the relation $\sim$ in [[def-multiplicative-subset-and-localisation]] is an equivalence relation. The displayed addition and multiplication are independent of representatives and make $S^{-1}R$ a commutative ring with zero $0/1$ and identity $1/1$. The map $\lambda_S(r)=r/1$ is a unital ring homomorphism, and every $s/1$ with $s\in S$ is a unit with inverse $1/s$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a multiplicative subset $S\subseteq R$.

[F1] A multiplicative subset contains $1$, is closed under products, and localisation uses $(r,s)\sim(r',s')$ exactly when some $u\in S$ satisfies $u(rs'-r's)=0$ ([[def-multiplicative-subset-and-localisation]]).

## Proof

**Proof technique:** direct construction.

1.1 Reflexivity has witness $1$, and symmetry uses the same witness with the negative equation. If $u(rs'-r's)=0$ and $v(r's''-r''s')=0$, then $uvs'\in S$ and the identity $s'(rs''-r''s)=s''(rs'-r's)+s(r's''-r''s')$ shows $uvs'(rs''-r''s)=0$; hence the relation is transitive. [F1, algebra]

2.1 Suppose $(r,s)\sim(\rho,\sigma)$ with witness $u$. For fixed $(a,t)$, multiplying the relation by $t^2$ shows $(rt+as,st)\sim(\rho t+a\sigma,\sigma t)$, and multiplying it by $at$ shows $(ra,st)\sim(\rho a,\sigma t)$. Changing the second representative in the same way proves both operations are well defined. [F1, step 1.1, algebra]

3.1 Associativity, commutativity, and distributivity follow by expanding the displayed fraction formulas over common denominators. The classes $0/1$ and $1/1$ satisfy the zero and identity laws, and additive inverses are $(-r)/s$. [step 2.1, algebra]

4.1 The formulas give $\lambda_S(r+r')=\lambda_S(r)+\lambda_S(r')$, $\lambda_S(rr')=\lambda_S(r)\lambda_S(r')$, and $\lambda_S(1)=1/1$. Finally $(s/1)(1/s)=s/s=1/1$, since $(s,s)\sim(1,1)$ with witness $1$. [F1, step 2.1, algebra] ∎
