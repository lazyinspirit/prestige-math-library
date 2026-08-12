---
id: prop-localisation-zero-equality-and-kernel-criteria
kind: proposition
title: 'Equality, vanishing, and the kernel of the localisation map'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-localisation-equivalence-and-ring-laws, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
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

Let $R$ be a commutative ring and $S\subseteq R$ multiplicative. For $r,r'\in R$ and $s,s'\in S$,
$$ \frac r s=\frac{r'}{s'}\quad\Longleftrightarrow\quad u(rs'-r's)=0\text{ for some }u\in S, $$
and
$$ \frac r s=0\quad\Longleftrightarrow\quad ur=0\text{ for some }u\in S. $$
Consequently
$$ \ker\lambda_S=\{r\in R:ur=0\text{ for some }u\in S\}. $$
The map $\lambda_S$ is injective if and only if every $u\in S$ has trivial annihilator. If $R$ is nonzero, this is equivalent to $0\notin S$ and no member of $S$ being a zero divisor.
Moreover, $S^{-1}R$ is the zero ring if and only if $0\in S$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S$, and its localisation map $\lambda_S$.

[F1] Fractions are precisely equivalence classes for the relation $u(rs'-r's)=0$ for some $u\in S$, and $0=0/1$ ([[thm-localisation-equivalence-and-ring-laws]]).

[F2] In a nonzero commutative ring, a zero divisor is a nonzero element annihilating some nonzero element; by convention, $0$ itself is not called a zero divisor ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 The equality criterion is the definition of equality of equivalence classes. Taking $(r',s')=(0,1)$ gives $r/s=0/1$ exactly when $u(r\cdot1-0\cdot s)=ur=0$ for some $u\in S$. [F1]

2.1 If $0\in S$, step 1.1 makes every fraction zero by using $u=0$. Conversely, if $S^{-1}R$ is the zero ring, then $1/1=0$, so step 1.1 gives $u\in S$ with $u\cdot1=0$, whence $u=0$ and $0\in S$. [step 1.1]

2.2 Since $\lambda_S(r)=r/1$, step 1.1 gives the displayed kernel. Thus $\lambda_S$ is injective exactly when $ur=0$ with $u\in S$ always forces $r=0$, which says precisely that every member of $S$ has trivial annihilator. [step 1.1]

3.1 Assume $R$ is nonzero. If every member of $S$ has trivial annihilator, then $0\notin S$, because $0\cdot1=0$ and $1\ne0$, and no $u\in S$ is a zero divisor by [F2]. Conversely, if $0\notin S$ and $S$ contains no zero divisor, then $u\in S$ is nonzero and $ur=0$ forces $r=0$ by [F2]. [F2, step 2.2] ∎
