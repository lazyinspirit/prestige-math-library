---
id: thm-derivative-of-the-simple-spectral-projector
kind: theorem
title: "The derivative of the simple spectral projector is expressed by the reduced resolvent and the perturbation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simple-spectral-projector,
       prop-reduced-resolvent-identities-for-a-simple-eigenvalue,
       thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Benjamin Texier, Basic matrix perturbation theory"
      url: "https://ems.press/content/serial-article-files/44369?nt=1"
---

## Statement

Let $A(t)$ be differentiable, let $\lambda(t)$ be a simple eigenvalue branch,
let $P(t)$ be the corresponding simple spectral projector, and let $S$ be the
reduced resolvent at $t=0$. Then

$$P'(0)=-S A'(0)P(0)-P(0)A'(0)S.$$

## Facts & Assumptions

**Given:** A differentiable simple spectral projector branch $P(t)$ for a simple eigenvalue branch of $A(t)$, and the reduced resolvent $S$ at $t=0$.

[L1] The reduced resolvent satisfies $SP=PS=0$ and $S(A-\lambda I)=(A-\lambda I)S=I-P$ ([[prop-reduced-resolvent-identities-for-a-simple-eigenvalue]]).

## Proof
**Proof technique:** direct.

1.1 Differentiate $(A-\lambda I)P=0$ at $t=0$: $$\bigl(A'(0)-\lambda'(0)I\bigr)P+(A-\lambda I)P'=0.$$ Left-multiplying by $S$ and using [L1] together with $SP=0$ gives $$(I-P)P'=-SA'(0)P.$$ Differentiating $P(A-\lambda I)=0$ and right-multiplying by $S$ similarly gives $$P'(I-P)=-PA'(0)S.$$ [L1, given, algebra]

2.1 Differentiating $P^2=P$ gives $P'=P'P+PP'$. Because $PP'P=0$, this decomposes as $P'=(I-P)P'P+PP'(I-P)$. Substituting the two identities from step 1.1 yields $$P'=-SA'(0)P-PA'(0)S,$$ which is the claimed formula. [L1, step 1.1, algebra] ∎
