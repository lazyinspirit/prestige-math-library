---
id: "thm-quotient-and-lifting-regularity-across-a-regular-element"
kind: "theorem"
title: "quotient and lifting regularity across a regular element"
deps: ["def-axiom-of-choice", "lem-regular-local-quotient-by-parameter-is-regular", "thm-dimension-at-most-embedding-dimension", "thm-dimension-as-minimal-number-of-radical-generators", "lem-regular-local-domain-induction", "thm-minimal-support-primes-are-associated"]
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-quotient-and-lifting-regularity-across-a-regular-element). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Proposition 12.8 and Exercise 12.16, pp.116–117"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement, including the Axiom of Choice. The choice assumption supplies the prime-filtration proof of [F6] and the regular-local supplier proofs used here.

[F1] [[lem-regular-local-quotient-by-parameter-is-regular]]: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$.

[F2] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

[F3] [[thm-dimension-as-minimal-number-of-radical-generators]]: Let $(R,\mathfrak m)$ be a finite-dimensional Noetherian local ring of dimension $d<\infty$. Then $d$ is the least integer $n$ for which there exists an $n$-generated ideal $J\subseteq R$ with $\sqrt J=\mathfrak m$.

[F5] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

[F6] [[thm-minimal-support-primes-are-associated]]: Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. If $\mathfrak p$ is minimal in $\operatorname{Supp}_R(M)$, then $$ \mathfrak p \in \operatorname{Ass}_R(M). $$

## Proof

1.1 For a nonzerodivisor $x\in\mathfrak m$, put $d=\dim R$ and $t=\dim R/(x)$. Both dimensions are finite by the embedding bound. Lifting $t$ radical generators gives $d\le t+1$. Every prime chain containing $x$ can be extended strictly downwards by a minimal prime $\mathfrak q$ of $R$. By [F6], $\mathfrak q=\operatorname{Ann}_R(m)$ for some nonzero $m\in R$. If $x\in\mathfrak q$, then $xm=0$, contradicting that $x$ is a nonzerodivisor. Thus every minimal prime omits $x$, the chain extends by one, and $t+1\le d$. Hence $t=d-1$. [F2, F3, F6, given]

2.1 If $R/(x)$ is regular, lift its $d-1$ maximal-ideal generators and adjoin $x$. This gives $\operatorname{edim}R\le d$, and the embedding bound makes it equality. If $x$ were in $\mathfrak m^2$, cotangent reduction would leave dimension unchanged, giving $\operatorname{edim}(R/(x))=d$, contrary to $d-1$. [F2, step 1.1, algebra]

3.1 In a regular local ring, a nonzero $x$ is a nonzerodivisor: the domain property is exactly F5. Thus the preceding implication applies. In the other direction, $x\notin\mathfrak m^2$ makes the quotient regular by the parameter-quotient lemma. There is no $0\ne x\in\mathfrak m$ when the regular ring has dimension zero; in dimension one the regular quotient is a field. [F1, step 2.1] ∎
