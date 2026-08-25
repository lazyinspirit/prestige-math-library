---
id: thm-cauchy-davenport
kind: theorem
title: "Cauchy–Davenport: for $p$ prime and nonempty $A,B\\subseteq\\mathbb{Z}/p$, $\\lvert A+B\\rvert\\ge\\min\\{p,\\lvert A\\rvert+\\lvert B\\rvert-1\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-combinatorial-nullstellensatz, lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime, thm-z-mod-p-is-a-field, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, def-monomials-multidegree-and-total-degree, def-binomial-coefficient, def-prime, def-finite-cardinality, thm-standard-representatives-modulo-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Theorem 3.2"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
    - title: "O. Pikhurko, An Introduction to Combinatorics, §11.1"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $A,B\subseteq\mathbb{Z}/p$ be nonempty. Then

$$\lvert A+B\rvert\ge\min\{p,\lvert A\rvert+\lvert B\rvert-1\}.$$

## Facts & Assumptions

**Given:** a prime number $p$ and nonempty subsets $A,B\subseteq\mathbb{Z}/p$.

[F1] The quotient ring $\mathbb{Z}/p$ is a field when $p$ is prime ([[thm-z-mod-p-is-a-field]], [[def-integers-modulo-n]]).

[L1] Over a field, if $\deg f=t_1+t_2$, the coefficient of $x^{t_1}y^{t_2}$ is nonzero, and $|S_i|>t_i$, then $f$ is nonzero at some point of $S_1\times S_2$ ([[thm-combinatorial-nullstellensatz]]).

[L2] If $0\le k\le m<p$, then $p\nmid\binom{m}{k}$ ([[lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime]]).

## Proof

**Proof technique:** direct.

1.1 If $\lvert A\rvert+\lvert B\rvert-1>p$, then the claimed lower bound is $p$. In that case every class $c\in\mathbb{Z}/p$ has a representation $c=a+b$ with $a\in A$ and $b\in B$: otherwise the translate $c-B$ would be disjoint from $A$, so the two subsets $A$ and $c-B$ of the $p$-element set $\mathbb{Z}/p$ would have total size at most $p$, contradicting $\lvert A\rvert+\lvert B\rvert>p$. Hence $A+B=\mathbb{Z}/p$ and the theorem holds. [given]

1.2 Now assume $\lvert A\rvert+\lvert B\rvert-1\le p$, and suppose toward contradiction that $\lvert A+B\rvert\le\lvert A\rvert+\lvert B\rvert-2$. Choose a set $C\subseteq\mathbb{Z}/p$ with $A+B\subseteq C$ and $\lvert C\rvert=\lvert A\rvert+\lvert B\rvert-2$, and consider the polynomial $$f(x,y):=\prod_{c\in C}(x+y-c)\in(\mathbb{Z}/p)[x,y].$$ [F1, assume-contra]

2.1 The total degree of $f$ is $\lvert C\rvert=t_1+t_2$ with $t_1=\lvert A\rvert-1$ and $t_2=\lvert B\rvert-1$. The coefficient of $x^{t_1}y^{t_2}$ is $\binom{\lvert A\rvert+\lvert B\rvert-2}{\lvert A\rvert-1}$, and this is nonzero in $\mathbb{Z}/p$ by [L2] because the top is below $p$. [L2, step 1.2]

3.1 The polynomial $f$ vanishes at every point of $A\times B$, because $a+b\in A+B\subseteq C$ for every $a\in A$ and $b\in B$. But [L1] and step 2.1 say that no polynomial with these degree data and this nonzero top coefficient can vanish on all of $A\times B$. This contradiction proves the theorem. [L1, step 1.2, step 2.1, discharge-contradiction] ∎

## Remarks

- Primality is load-bearing twice: it makes $\mathbb{Z}/p$ a field, and it keeps the critical binomial coefficient nonzero there.
