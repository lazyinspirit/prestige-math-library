---
id: lem-principal-unit-generators-of-p-adic-units
kind: lemma
title: Topological generators of the principal p-adic units
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-p-adic-integers-as-compatible-residue-classes
- def-p-adic-valuation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: §4.3, printed pp. 138–139
verification: {}
---

## Statement

If $p$ is odd, $1+p$ topologically generates $1+p\mathbb Z_p$. For $p=2$, $5$ topologically generates $1+4\mathbb Z_2$.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §4.3, pp. 138–139](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** A prime $p$ and the p-adic unit filtration.

[F1] $\mathbb Z_p$ is complete and its residue quotients are $\mathbb Z/p^n\mathbb Z$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] $v_p(m)$ is the exponent of $p$ in a nonzero integer $m$. [[def-p-adic-valuation]]

## Proof

1.1 Let $p$ be odd. For $r=0$, $v_p((1+p)-1)=1$. If $x=1+cp^m$ with $p\nmid c$ and $m\ge1$, then the binomial expansion of $x^p-1$ has first term $cp^{m+1}$ and every later term is divisible by $p^{m+2}$; hence $v_p(x^p-1)=m+1$. Inductively, $v_p((1+p)^{p^r}-1)=r+1$.[F1, F2, algebra]

2.1 Modulo $1+p^n\mathbb Z_p$, the quotient $1+p\mathbb Z_p$ has $p^{n-1}$ elements. The valuation equality in step 1.1 shows $(1+p)$ has order exactly $p^{n-1}$ in this quotient. Thus it generates every finite quotient, so its powers are dense and it topologically generates the inverse limit.[F1, F2, step 1.1, algebra]

3.1 For $p=2$, $v_2(5-1)=2$. If $x\equiv1\pmod4$, then $v_2(x+1)=1$, so $v_2(x^2-1)=v_2(x-1)+1$. Induction gives $v_2(5^{2^r}-1)=r+2$. The quotient $(1+4\mathbb Z_2)/(1+2^n\mathbb Z_2)$ has $2^{n-2}$ elements for $n\ge2$, and this valuation equality shows that $5$ has that order in every quotient. Its powers are therefore dense in $1+4\mathbb Z_2$.[F1, F2, induction, algebra] ∎
