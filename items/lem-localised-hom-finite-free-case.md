---
id: lem-localised-hom-finite-free-case
kind: lemma
title: "The localised Hom map is an isomorphism for finite free sources"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-localisation-of-hom-natural-map, lem-hom-from-a-finite-free-module, lem-zero-in-a-localised-module, lem-hom-module-over-a-commutative-ring, def-generated-cyclic-finitely-generated-and-free-modules, def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 12.25"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S \subseteq R$ be multiplicative, let $M$ be a finite free $R$-module, and let $N$ be a left $R$-module. Then the natural map
$$
\theta_{M,N}:S^{-1}\!\operatorname{Hom}_R(M,N) \longrightarrow \operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)
$$
from [[lem-localisation-of-hom-natural-map]] is an isomorphism.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a finite free $R$-module $M$ with basis $e_1,\dots,e_n$, and a left $R$-module $N$.

[L1] The natural map $\theta_{M,N}$ satisfies $\theta_{M,N}(f/s)(m/u)=f(m)/(su)$ ([[lem-localisation-of-hom-natural-map]]).

[L2] A basis means that every element of $M$ has a unique finite linear combination in the basis elements ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[L3] A homomorphism from a finite free module is uniquely determined by its basis values, and every tuple of target values occurs as those basis values ([[lem-hom-from-a-finite-free-module]]).

[L4] A localised fraction is zero exactly when one element of $S$ kills its numerator ([[lem-zero-in-a-localised-module]]).

[L5] The group $\operatorname{Hom}_R(M,N)$ is an $R$-module ([[lem-hom-module-over-a-commutative-ring]]).

[L6] In $S^{-1}M$, addition and scalar multiplication satisfy $m/u=\sum_i (a_i/u)(e_i/1)$ whenever $m=\sum_i a_i e_i$ in $M$ ([[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L6], every element of $S^{-1}M$ is an $S^{-1}R$-linear combination of $e_1/1,\dots,e_n/1$, so two $S^{-1}R$-linear maps $S^{-1}M \to S^{-1}N$ that agree on all $e_i/1$ are equal. [L2, L6, algebra]

1.2 If $\theta_{M,N}(f/s)=0$, then $f(e_i)/s=0$ for each $i$, so [L4] gives $u_i \in S$ with $u_i f(e_i)=0$. Let $u=u_1 \cdots u_n$. Then $u f(e_i)=0$ for every $i$, hence $uf=0$ by [L3]. Since $\operatorname{Hom}_R(M,N)$ is an $R$-module by [L5], [L4] applied there gives $f/s=0$. Thus $\theta_{M,N}$ is injective. [L1, L3, L4, L5, choose]

1.3 Let $\varphi:S^{-1}M \to S^{-1}N$ be $S^{-1}R$-linear. Write $\varphi(e_i/1)=n_i/s_i$ with $n_i \in N$ and $s_i \in S$, set $s=s_1 \cdots s_n$, and set $m_i=(s/s_i)n_i$. By [L3], there is a unique $R$-linear map $f:M \to N$ with $f(e_i)=m_i$ for all $i$. [L3, choose]

2.1 For each basis vector, $\theta_{M,N}(f/s)(e_i/1)=f(e_i)/s=(s/s_i)n_i/s=n_i/s_i=\varphi(e_i/1)$, so step 1.1 gives $\theta_{M,N}(f/s)=\varphi$. Thus $\theta_{M,N}$ is surjective. [L1, step 1.1, step 1.3, algebra]

3.1 Steps 1.2 and 2.1 prove that $\theta_{M,N}$ is an isomorphism. [step 1.2, step 2.1] ∎
