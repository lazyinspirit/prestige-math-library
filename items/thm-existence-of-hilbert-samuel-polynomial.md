---
id: thm-existence-of-hilbert-samuel-polynomial
kind: theorem
title: "The Hilbert-Samuel function agrees eventually with a rational polynomial in binomial form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hilbert-samuel-function-and-polynomial, thm-hilbert-serre-theorem, def-associated-graded-ring-and-module, thm-noetherian-ring-ideal-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Proposition 10.59.5"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §21"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite
$R$-module, and let $I\subset R$ be an ideal of definition for $M$. Then the
Hilbert-Samuel function
$$
\chi_{I,M}(n)=\ell_R(M/I^{n+1}M)
$$
agrees for all sufficiently large $n$ with a polynomial in $\mathbb Q[n]$.
Equivalently, there are integers $a_0,\ldots,a_d$ such that for large $n$,
$$
\chi_{I,M}(n)=\sum_{j=0}^d a_j\binom{n+j}{j}.
$$

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$, a finite $R$-module $M$, and an ideal of definition $I\subset R$ for $M$.

[L1] The associated graded objects $$ \operatorname{gr}_I(R)=\bigoplus_{n\ge0}I^n/I^{n+1},\qquad \operatorname{gr}_I(M)=\bigoplus_{n\ge0}I^nM/I^{n+1}M $$ are graded, and $$ \chi_{I,M}(n)=\sum_{j=0}^n \ell_R(I^jM/I^{j+1}M) $$ ([[def-associated-graded-ring-and-module]], [[def-hilbert-samuel-function-and-polynomial]]).

[L2] Hilbert-Serre gives a rational Hilbert series and eventual polynomial growth for finite graded modules over standard graded algebras ([[thm-hilbert-serre-theorem]]).

[L3] Every ideal of a Noetherian commutative ring is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** direct.


1.1 Because $M/IM$ has finite length over the local ring $(R,\mathfrak m)$, some power $\mathfrak m^c$ annihilates it. Equivalently, $\mathfrak m^cM\subseteq IM$. Multiplying by $I^n$ gives $\mathfrak m^cI^nM\subseteq I^{n+1}M$ for every $n\ge0$, so each graded piece $I^nM/I^{n+1}M$ is naturally a module over the Artinian local ring $A:=R/\mathfrak m^c$. [L1, given, algebra]


1.2 By [L3], choose generators $x_1,\ldots,x_r$ of $I$, and choose generators $m_1,\ldots,m_s$ of $M$. The classes of the $m_j$ in degree $0$ generate $\operatorname{gr}_I(M)$ over the standard graded $A$-algebra $A[T_1,\ldots,T_r]$, where $T_i$ acts by multiplication with the class of $x_i$. Indeed every class in $I^nM/I^{n+1}M$ is represented by a finite sum of monomials $x_{i_1}\cdots x_{i_n}m_j$. [L1, L3, given, choose]


2.1 Length over $R$ and over $A=R/\mathfrak m^c$ agree on each module $I^nM/I^{n+1}M$, because that quotient is annihilated by $\mathfrak m^c$ and has the same submodules in either category. Applying [L2] to the finite graded $A[T_1,\ldots,T_r]$-module $\operatorname{gr}_I(M)$, the function $ n\longmapsto \ell_R(I^nM/I^{n+1}M) $ agrees for large $n$ with a polynomial $Q(n)$. Equivalently, the Hilbert series of $\operatorname{gr}_I(M)$ is rational with denominator a power of $(1-t)$. [L1, L2, step 1.1, step 1.2]


3.1 By [L1], the Hilbert-Samuel function is the cumulative sum of these graded-piece lengths: $ \chi_{I,M}(n)=\sum_{j=0}^n \varphi_{I,M}(j). $ Summing a polynomial tail again produces a polynomial tail, and summing the standard binomial basis $\binom{j+d-1}{d-1}$ produces $\binom{n+d}{d}$. Therefore $\chi_{I,M}(n)$ is eventually a polynomial in binomial form. [L1, step 2.1, algebra]


4.1 Hence the Hilbert-Samuel polynomial exists. [step 3.1] ∎
