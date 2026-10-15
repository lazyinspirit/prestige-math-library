---
id: ex-hh-free-hopf-module-over-polynomial-hopf-algebra
kind: example
title: "The free Hopf module over the polynomial Hopf algebra"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-free-right-right-hopf-module
  - lem-hh-coinvariants-of-free-hopf-module
  - lem-hh-hopf-module-coinvariant-projection
  - thm-hh-fundamental-theorem-of-hopf-modules
  - def-hh-hopf-algebra-and-antipode
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []
---

## Example

Let $k$ be any field and let $H=k[x]$ have the primitive Hopf structure $\Delta(x)=x\otimes1+1\otimes x$, $\varepsilon(x)=0$, and $S(x)=-x$. For any vector space $V$, give $V\otimes H$ the free right-right Hopf-module structure. Then
$$\rho(v\otimes x^n)=\sum_{i=0}^n\binom ni(v\otimes x^i)\otimes x^{n-i},\quad P(v\otimes x^n)=\begin{cases}v\otimes1&n=0,\\0&n>0,\end{cases}$$
and $\beta(v\otimes x^n)=(v\otimes1)\otimes x^n$. The coinvariants are $V\otimes1$, in every characteristic.

## Facts & Assumptions

**Given:** A field $k$, the polynomial algebra $k[x]$, and a $k$-vector space $V$.

[F1] The free action and coaction are $(v\otimes h)g=v\otimes hg$ and $\rho(v\otimes h)=\sum(v\otimes h_1)\otimes h_2$ ([[lem-hh-free-right-right-hopf-module]]).

[F2] The coinvariant projection is $P(m)=\sum m_0S(m_1)$, and the inverse map is $\beta(m)=\sum P(m_0)\otimes m_1$ ([[lem-hh-hopf-module-coinvariant-projection]], [[thm-hh-fundamental-theorem-of-hopf-modules]]).

[F3] The Hopf structure uses $\varepsilon(x)=0$, $\varepsilon(1)=1$, and the counit identities ([[def-hh-hopf-algebra-and-antipode]]); coinvariants in $V\otimes H$ are the range of $v\mapsto v\otimes1$ ([[lem-hh-coinvariants-of-free-hopf-module]]).

## Verification

1.1 Define $\Delta$ as the algebra map sending $x$ to $x\otimes1+1\otimes x$, define $\varepsilon$ by $x\mapsto0$, and define $S$ by $x\mapsto-x$. Coassociativity and the counit equations hold on $1$ and $x$ by direct substitution; since both sides are algebra maps from $k[x]$, the identities hold on all polynomials. Thus the algebra and coalgebra structures satisfy the bialgebra axioms. [given, F3, algebra]

2.1 The binomial theorem gives $\Delta(x^n)=\sum_{i=0}^n\binom ni x^i\otimes x^{n-i}$. Hence $\sum_i\binom ni S(x^i)x^{n-i}=\left(\sum_i\binom ni(-1)^i\right)x^n$ and $\sum_i\binom ni x^iS(x^{n-i})=\left(\sum_i\binom ni(-1)^{n-i}\right)x^n$. Each coefficient is $1$ for $n=0$ and $0$ for $n>0$ by $(1-1)^n$. These are the two antipode equations on the monomial basis; by linearity they hold on all polynomials, so $k[x]$ is a Hopf algebra in every characteristic. [F3, step 1.1, algebra]

3.1 Applying the free coaction in [F1] to the coproduct from step 2.1 yields $\rho(v\otimes x^n)=\sum_{i=0}^n\binom ni(v\otimes x^i)\otimes x^{n-i}$. [F1, step 2.1]

4.1 If $z\in(V\otimes k[x])^{\operatorname{co}H}$, apply $\operatorname{id}_V\otimes\varepsilon\otimes\operatorname{id}_H$ to $\rho(z)=z\otimes1$; the counit identity gives $z=(\operatorname{id}_V\otimes\varepsilon)(z)\otimes1$. Conversely every $v\otimes1$ is coinvariant. Thus the coinvariants equal $V\otimes1$, as also recorded by [F3]. [F3, step 3.1]

4.2 For a monomial, [F2] and step 3.1 give $P(v\otimes x^n)=\sum_{i=0}^n\binom ni(v\otimes x^i)S(x^{n-i})=\left(\sum_{i=0}^n\binom ni(-1)^{n-i}\right)v\otimes x^n$. The parenthesized integer is $1$ for $n=0$ and $0$ for $n>0$, proving the stated formula even when $k$ has positive characteristic. [F1, F2, step 3.1, algebra]

5.1 In $\beta(v\otimes x^n)=\sum_i\binom niP(v\otimes x^i)\otimes x^{n-i}$, step 4.2 makes every term vanish except $i=0$, leaving $(v\otimes1)\otimes x^n$. Applying $\alpha$ gives $v\otimes x^n$. By linearity these formulas hold on finite sums and verify the decomposition. [F2, step 4.2, algebra] ∎
