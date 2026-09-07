---
id: "thm-quotient-and-lifting-regularity-across-a-regular-element"
kind: "theorem"
title: "quotient and lifting regularity across a regular element"
deps: ["lem-regular-local-quotient-by-parameter-is-regular", "thm-dimension-at-most-embedding-dimension", "thm-dimension-as-minimal-number-of-radical-generators", "thm-zero-divisors-on-a-module", "lem-regular-local-domain-induction", "thm-minimal-support-primes-are-associated"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 12.8 and Exercise 12.16, pp.116–117"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-quotient-by-parameter-is-regular]]: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$.

[F2] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

[F3] [[thm-dimension-as-minimal-number-of-radical-generators]]: Let $(R,\mathfrak m)$ be a finite-dimensional Noetherian local ring of dimension $d<\infty$. Then $d$ is the least integer $n$ for which there exists an $n$-generated ideal $J\subseteq R$ with $\sqrt J=\mathfrak m$.

[F4] [[thm-zero-divisors-on-a-module]]: Let $R$ be a Noetherian commutative ring and let $M$ be a left $R$-module. Then the set of zero divisors on $M$ is $$ \bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}\mathfrak p. $$ If $M$ is finitely generated, this is a finite union.

[F5] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

[F6] [[thm-minimal-support-primes-are-associated]]: Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. If $\mathfrak p$ is minimal in $\operatorname{Supp}_R(M)$, then $$ \mathfrak p \in \operatorname{Ass}_R(M). $$

## Proof

1.1 For a nonzerodivisor $x\in\mathfrak m$, put $d=\dim R$ and $t=\dim R/(x)$. Both dimensions are finite by the embedding bound. Lifting $t$ radical generators gives $d\le t+1$. Every prime chain containing $x$ can be extended strictly downwards by a minimal prime of $R$: minimal primes are associated, hence omit $x$ by the zero-divisor criterion. Thus $t+1\le d$, and $t=d-1$. [F2, F3, F4, F6]

2.1 If $R/(x)$ is regular, lift its $d-1$ maximal-ideal generators and adjoin $x$. This gives $\operatorname{edim}R\le d$, and the embedding bound makes it equality. If $x$ were in $\mathfrak m^2$, cotangent reduction would leave dimension unchanged, giving $\operatorname{edim}(R/(x))=d$, contrary to $d-1$. [F2, step 1.1, algebra]

3.1 In a regular local ring, a nonzero $x$ is a nonzerodivisor: the domain property is exactly F5. Thus the preceding implication applies. In the other direction, $x\notin\mathfrak m^2$ makes the quotient regular by the parameter-quotient lemma. There is no $0\ne x\in\mathfrak m$ when the regular ring has dimension zero; in dimension one the regular quotient is a field. [F1, step 2.1] ∎
