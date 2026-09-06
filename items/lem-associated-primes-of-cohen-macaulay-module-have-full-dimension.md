---
id: lem-associated-primes-of-cohen-macaulay-module-have-full-dimension
title: Associated primes of a Cohen--Macaulay module have full dimension
kind: lemma
status: published
origin: pipeline
deps: [def-associated-prime-of-a-module, def-cohen-macaulay-local-module-and-ring, lem-depth-bounded-by-associated-prime-quotient-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local and let $0\ne M$ be a finite
Cohen--Macaulay $R$-module of dimension $d$. For every
$\mathfrak p\in\operatorname{Ass}_R(M)$,
$$\dim(R/\mathfrak p)=d.$$

## Facts & Assumptions

**Given:** every associated prime belongs to $\operatorname{Supp}(M)$.

## Proof

**Proof technique:** direct.

1.1 Cohen--Macaulayness and the associated-prime depth bound give $d=\operatorname{depth}_R(M)\le\dim(R/\mathfrak p)$. [given]

2.1 Since $V(\mathfrak p)\subseteq\operatorname{Supp}(M)$, the reverse inequality $\dim(R/\mathfrak p)\le d$ holds. The two inequalities give equality. [step 1.1, algebra] ∎
