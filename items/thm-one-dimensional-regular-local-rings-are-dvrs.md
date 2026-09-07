---
id: "thm-one-dimensional-regular-local-rings-are-dvrs"
kind: "theorem"
title: "one dimensional regular local rings are dvrs"
deps: ["lem-regular-local-domain-induction", "lem-embedding-dimension-is-minimal-maximal-ideal-generator-number", "thm-equivalent-characterisations-of-a-dvr", "thm-krull-intersection-theorem"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 12.10, p.116"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

[F2] [[lem-embedding-dimension-is-minimal-maximal-ideal-generator-number]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

[F3] [[thm-equivalent-characterisations-of-a-dvr]]: Let $R$ be a nonfield domain. The following are equivalent. 1. $R$ is a discrete valuation ring. 2. $R$ is a Noetherian valuation ring. 3. $R$ is a one-dimensional Noetherian local integrally closed domain. 4. $R$ is a local principal ideal domain with nonzero maximal ideal.

[F4] [[thm-krull-intersection-theorem]]: The first clause below is choice-free; the second uses the published Jacobson-radical unit criterion and therefore inherits its Axiom-of-Choice boundary. Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, and let $M$ be a finite $R$-module. Put $$ K:=\bigcap_{n\ge0} I^nM. $$ Then: 1. $K$ is exactly the set of elements $m\in M$ for which $(1-a)m=0$ for some $a\in I$; 2. if $I\subseteq J(R)$, then $K=0$.

## Proof

1.1 If $R$ is regular of dimension one, it is a domain and $\mathfrak m=(t)$ for a nonzero nonunit $t$. Krull intersection gives for any $a\ne0$ a largest $n$ with $a\in(t^n)$; writing $a=t^nu$, maximality makes $u$ a unit. [F1, F2, F4]

2.1 In a nonzero ideal choose an element with least such exponent $n$. Every other nonzero element has exponent at least $n$, so the ideal is $(t^n)$. The zero ideal is principal as well. Thus $R$ is a local PID with nonzero maximal ideal, and the stated DVR equivalence applies. [F3, step 1.1, algebra]

3.1 Conversely, a DVR is a nonfield local PID of dimension one. Its maximal ideal $(t)$ is nonzero, and $t\notin(t^2)$ by cancellation in a domain. Therefore its embedding dimension is one and it is regular. [F3, F2, algebra] ∎
