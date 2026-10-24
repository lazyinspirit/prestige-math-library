---
id: lem-the-hom-complex-differential-squares-to-zero
kind: lemma
title: "The Hom-complex differential squares to zero"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hom-complex-of-chain-complexes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

For every pair of chain complexes $C_\bullet,D_\bullet$, the differential
$\partial$ of [[def-hom-complex-of-chain-complexes]] satisfies
$$\partial_{r-1}\partial_r=0$$
for every $r\in\mathbb Z$.

## Facts & Assumptions

**Given:** A degree-$r$ graded morphism $u=(u_n)_n\in\underline{\operatorname{Hom}}(C,D)_r$.

[L1] The differential on the Hom complex is $$ (\partial u)_n=d^D_{n+r}u_n-(-1)^r u_{n-1}d^C_n $$ ([[def-hom-complex-of-chain-complexes]]).

## Proof

**Proof technique:** direct.

1.1 Using [L1] twice, the $n$th component of $\partial(\partial u)$ is $$d^D_{n+r-1}d^D_{n+r}u_n-(-1)^r d^D_{n+r-1}u_{n-1}d^C_n-(-1)^{r-1}d^D_{n+r-1}u_{n-1}d^C_n-u_{n-2}d^C_{n-1}d^C_n.$$ [L1, given, algebra]

2.1 The middle two terms cancel because $-(-1)^r-(-1)^{r-1}=0$, and the outer two terms vanish because successive differentials in $C$ and $D$ compose to zero. Hence every component of $\partial(\partial u)$ is zero, so $\partial^2=0$. [step 1.1, algebra] ∎
