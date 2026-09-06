---
id: cor-trace-and-norm-of-an-algebraic-integer
kind: corollary
title: "Trace and norm of an algebraic integer"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-algebraic-integer-minimal-polynomial-criterion, def-field-norm-and-trace, thm-field-norm-and-trace-by-embeddings]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Corollary 2.21"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

If $\alpha\in\mathcal O_K$, then $\operatorname{Tr}_{K/\mathbb Q}(\alpha)$ and $N_{K/\mathbb Q}(\alpha)$ belong to $\mathbb Z$.

## Facts & Assumptions

**Given:** $\alpha\in\mathcal O_K$.

[F1] Trace and norm are the trace and determinant of multiplication ([[def-field-norm-and-trace]]).

[F2] The monic minimal polynomial of an algebraic integer has coefficients in $\mathbb Z$ ([[cor-algebraic-integer-minimal-polynomial-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $f(X)=X^r+c_{r-1}X^{r-1}+\cdots+c_0$ be the minimal polynomial of $\alpha$ over $\mathbb Q$. Fact [F2] gives $c_j\in\mathbb Z$. [F2, given]

2.1 Put $h=[K:\mathbb Q(\alpha)]$. Regarding $K$ as a $\mathbb Q(\alpha)$-vector space, multiplication by $\alpha$ acts as the scalar $\alpha$ on each of $h$ basis directions. Hence its characteristic polynomial over $\mathbb Q$ is $f(X)^h$. By [F1], $$\operatorname{Tr}_{K/\mathbb Q}(\alpha)=-h c_{r-1},\qquad N_{K/\mathbb Q}(\alpha)=(-1)^{rh}c_0^h,$$ which are integers. [F1, step 1.1, algebra] ∎
