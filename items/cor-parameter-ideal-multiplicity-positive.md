---
id: cor-parameter-ideal-multiplicity-positive
kind: corollary
title: "For a nonzero finite module and an ideal of definition, Hilbert-Samuel multiplicity is a positive integer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hilbert-samuel-multiplicity, thm-existence-of-hilbert-samuel-polynomial, cor-nakayama-generators-modulo-an-ideal]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.59: Noetherian local rings"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §21"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M\neq0$ be a finite
$R$-module, and let $I$ be an ideal of definition for $M$. Then the
Hilbert-Samuel multiplicity $e_I(M)$ is a positive integer.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring $(R,\mathfrak m)$, a nonzero finite $R$-module $M$, and an ideal of definition $I$ for $M$.

[L1] The Hilbert-Samuel function agrees for large $n$ with a polynomial written in binomial form $$ \chi_{I,M}(n)=\sum_{j=0}^d a_j\binom{n+j}{j} $$ for integers $a_j$ ([[thm-existence-of-hilbert-samuel-polynomial]]).

[L2] If a finite module over a local ring satisfies $M/I^{n+1}M=0$, then $M=0$, because the empty generating family lifts across the Jacobson-radical ideal $I^{n+1}\subseteq \mathfrak m$ ([[cor-nakayama-generators-modulo-an-ideal]]).

[L3] Hilbert-Samuel multiplicity is the factorial-scaled leading coefficient of the eventual Hilbert-Samuel polynomial ([[def-hilbert-samuel-multiplicity]]).

## Proof

**Proof technique:** direct.


1.1 By [L1], there are integers $a_0,\ldots,a_d$ and a polynomial $P_{I,M}(n)=\sum_{j=0}^d a_j\binom{n+j}{j}$ such that $\chi_{I,M}(n)=P_{I,M}(n)$ for all sufficiently large $n$. [L1, given]


1.2 For every $n\ge0$, the quotient $M/I^{n+1}M$ is nonzero. Indeed, if $M/I^{n+1}M=0$, then $M=I^{n+1}M$; since $I^{n+1}\subseteq \mathfrak m=J(R)$, [L2] would force $M=0$, contradicting the hypothesis. Thus $\chi_{I,M}(n)=\ell_R(M/I^{n+1}M)>0$ for every $n$. [L2, given, algebra]


2.1 The polynomial $P_{I,M}$ therefore takes positive values for all sufficiently large integers, so its leading coefficient is positive. In the binomial expansion of step 1.1 the leading coefficient is $a_d/d!$, hence $a_d>0$. [step 1.1, step 1.2, algebra]


3.1 By [L3], the Hilbert-Samuel multiplicity is $e_I(M)=d!\cdot(\text{leading coefficient of }P_{I,M})=a_d$. Since $a_d\in \mathbb Z_{>0}$, the multiplicity is a positive integer. [L3, step 2.1, algebra] ∎
