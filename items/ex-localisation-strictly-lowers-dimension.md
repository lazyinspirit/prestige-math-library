---
id: ex-localisation-strictly-lowers-dimension
kind: example
title: "Localisation can strictly lower dimension"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-localisation-dimension-does-not-increase, def-height-of-a-prime-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Example

Let $R=k[x,y]$ and let $S=R\setminus(x)$. Then
$$ S^{-1}R=R_{(x)} $$
has dimension $1$, strictly smaller than $\dim R=2$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[x,y]$, and the multiplicative set $S=R\setminus(x)$.

[L1] Localization does not increase dimension ([[cor-localisation-dimension-does-not-increase]]).

[L2] The polynomial ring $k[x,y]$ has dimension $2$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L3] The quotient $R/(x)\cong k[y]$ is a domain, so $(x)$ is prime. Any polynomial in $(x)$ factors as $x^rg$ with $x\nmid g$.

[L4] By definition, the height of a prime equals the dimension of the localization at that prime ([[def-height-of-a-prime-ideal]]).

## Verification

**Proof technique:** direct computation.

1.1 By [L2], $\dim R=2$. If a prime $Q\subsetneq(x)$ contained a nonzero $f=x^rg$ with $x\nmid g$, primality would imply $x\in Q$ or $g\in Q$. The former contradicts strict containment, and the latter contradicts $g\notin(x)$. Thus $Q=(0)$, and the chain $(0)\subsetneq(x)$ proves $\operatorname{ht}((x))=1$. By [L4], $\dim(S^{-1}R)=\dim(R_{(x)})=1$. [L2, L3, L4, given, algebra]

2.1 Fact [L1] independently gives $\dim(S^{-1}R)\le\dim R=2$, so the computed value $1$ is compatible with the general one-sided inequality. Since $1<2=\dim R$, this localization strictly lowers dimension. [L1, step 1.1]

3.1 So localization can strictly lower Krull dimension. [step 1.1, step 2.1] ∎
