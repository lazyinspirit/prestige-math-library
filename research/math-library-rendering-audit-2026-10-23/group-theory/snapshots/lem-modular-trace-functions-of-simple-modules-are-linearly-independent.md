---
id: lem-modular-trace-functions-of-simple-modules-are-linearly-independent
kind: lemma
title: "Trace functionals of split simple modules are independent"
status: published
origin: pipeline
deps: [lem-a-finite-dimensional-algebra-separates-its-simple-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Yanqi Lake Lectures on Algebra I, Theorems 11.1.5 and 11.2.2, pp.128 and 130"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

For $A$ and $S_i$ as in the separation lemma, the functions $\tau_i:A\to k$, $\tau_i(a)=\operatorname{tr}(a|S_i)$, are linearly independent. If $A=kG$ for a finite group, their restrictions to $G$ are linearly independent.

## Facts & Assumptions

**Given:** The finite-dimensional algebra and distinct split simple modules in the Statement.

[F1] The action map onto the product of the endomorphism algebras is surjective ([[lem-a-finite-dimensional-algebra-separates-its-simple-modules]]).

## Proof

1.1 In a basis of the nonzero $S_i$, the matrix $E_{11}$ has trace $1$, including when the characteristic divides $\dim S_i$. By surjectivity choose $a_i$ acting as $E_{11}$ on $S_i$ and as zero on every other $S_j$. Hence $\tau_j(a_i)=\delta_{ij}$. [F1, given]

2.1 If $\sum_j c_j\tau_j=0$, evaluation at $a_i$ gives $c_i=0$ for every $i$. For $kG$, a relation vanishing on $G$ vanishes on $a=\sum_g a_gg$ since $\sum_jc_j\tau_j(a)=\sum_g a_g\sum_jc_j\tau_j(g)=0$. It is therefore the zero relation by the first assertion. An empty family has only the empty relation. [step 1.1, algebra] ∎
