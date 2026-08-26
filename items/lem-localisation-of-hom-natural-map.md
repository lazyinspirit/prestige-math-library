---
id: lem-localisation-of-hom-natural-map
kind: lemma
title: "There is a natural localisation map on Hom"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-hom-module-over-a-commutative-ring, thm-universal-property-localisation-of-a-module]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 12.25"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S \subseteq R$ be multiplicative, and let $M,N$ be left $R$-modules. There is a natural $S^{-1}R$-linear map
$$
\theta_{M,N}:S^{-1}\!\operatorname{Hom}_R(M,N) \longrightarrow \operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)
$$
given by
$$
\theta_{M,N}(f/s)(m/u)=f(m)/(su).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, and left $R$-modules $M,N$.

[L1] For a commutative ring $A$ and $A$-modules $X,Y$, the group $\operatorname{Hom}_A(X,Y)$ is an $A$-module under pointwise scalar multiplication ([[lem-hom-module-over-a-commutative-ring]]).

[L2] The localisation map of a module is universal for maps into modules over the localised ring ([[thm-universal-property-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For each $R$-linear map $f:M \to N$, apply [L2] to the composite $M \xrightarrow{f} N \to S^{-1}N$ to obtain a unique $S^{-1}R$-linear map $S^{-1}f:S^{-1}M \to S^{-1}N$ with $(S^{-1}f)(m/u)=f(m)/u$. [L2, construct]

2.1 The assignment $f \mapsto S^{-1}f$ is $R$-linear because for $f,g \in \operatorname{Hom}_R(M,N)$, $r \in R$, and $m/u \in S^{-1}M$ one has $(S^{-1}(f+g))(m/u)=(f(m)+g(m))/u$ and $(S^{-1}(rf))(m/u)=rf(m)/u=(r/1)(f(m)/u)$. [step 1.1, L1, algebra]

3.1 By [L1], $\operatorname{Hom}_R(M,N)$ is an $R$-module, while $\operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)$ is an $S^{-1}R$-module; therefore [L2] applied to the $R$-linear map of step 2.1 gives a unique $S^{-1}R$-linear map $\theta_{M,N}$ with $\theta_{M,N}(f/1)=S^{-1}f$. [step 2.1, L1, L2, construct]

4.1 Since $\theta_{M,N}$ is $S^{-1}R$-linear, $\theta_{M,N}(f/s)=(1/s)\theta_{M,N}(f/1)$, so for $m/u \in S^{-1}M$ one gets $\theta_{M,N}(f/s)(m/u)=(1/s)(f(m)/u)=f(m)/(su)$. [step 3.1, algebra]

5.1 Steps 3.1 and 4.1 produce the stated natural $S^{-1}R$-linear map. [step 3.1, step 4.1] ∎
