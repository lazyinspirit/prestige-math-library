---
id: thm-discriminant-as-an-embedding-determinant
kind: theorem
title: "Embedding determinant formula"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-discriminant-of-a-number-field-basis-and-order, thm-field-norm-and-trace-by-embeddings, thm-dedekind-linear-independence-of-characters]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Proposition 2.26"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Let $\sigma_1,\ldots,\sigma_n$ be the $n$ distinct embeddings $K\to\mathbb C$.
For every ordered $\mathbb Q$-basis $\alpha_1,\ldots,\alpha_n$ of $K$,
$$\operatorname{disc}(\alpha_1,\ldots,\alpha_n)=\det(\sigma_i(\alpha_j))^2,$$
and the determinant is nonzero.

## Facts & Assumptions

**Given:** An ordered basis of the number field.

[F1] In a separable extension, trace is the sum over the embeddings ([[thm-field-norm-and-trace-by-embeddings]]).

[F2] Distinct field embeddings are linearly independent as characters ([[thm-dedekind-linear-independence-of-characters]]).

## Proof

**Proof technique:** direct.

1.1 With $A=(\sigma_i(\alpha_j))$, [F1] gives $G=A^tA$ for the trace Gram matrix. [F1, given]

1.2 If $A$ were singular, a nonzero linear combination of its rows would vanish on the basis and hence on every element of $K$, contradicting [F2]. Thus $\det A\ne0$. [F2, given]

2.1 Taking determinants in step 1.1 gives $\det G=\det(A)^2$, and step 1.2 gives the asserted nonvanishing. [step 1.1, step 1.2, algebra] ∎
