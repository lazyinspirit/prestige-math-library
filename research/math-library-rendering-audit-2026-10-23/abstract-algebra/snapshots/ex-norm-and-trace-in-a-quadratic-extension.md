---
id: ex-norm-and-trace-in-a-quadratic-extension
kind: example
title: "For $\\mathbb Q(\\sqrt d)/\\mathbb Q$, the embedding formulas match the determinant and trace of multiplication"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-field-norm-and-trace-by-embeddings, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Section 1"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 5"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let $d\in\mathbb Q$ be nonsquare, let $K=\mathbb Q(\sqrt d)$, and write
$\alpha=a+b\sqrt d$ with $a,b\in\mathbb Q$. Then

$$N_{K/\mathbb Q}(\alpha)=a^2-db^2,\qquad \operatorname{Tr}_{K/\mathbb Q}(\alpha)=2a.$$

In the basis $(1,\sqrt d)$, multiplication by $\alpha$ has matrix

$$\begin{pmatrix}a&bd\\ b&a\end{pmatrix},$$

so the field norm and trace agree with the determinant and trace of that matrix.

## Facts & Assumptions
**Given:** The quadratic extension $K=\mathbb Q(\sqrt d)$ with $d$ nonsquare, and the element $\alpha=a+b\sqrt d$.

[L1] Norm and trace are the product and sum of the embeddings in the separable case ([[thm-field-norm-and-trace-by-embeddings]]).

[L2] Field norm and trace agree with determinant and trace of multiplication by the element ([[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]).

## Verification

**Proof technique:** direct.

1.1 The two $\mathbb Q$-embeddings of $K$ send $\sqrt d$ to $\pm\sqrt d$, so [L1] gives $$N_{K/\mathbb Q}(\alpha)=(a+b\sqrt d)(a-b\sqrt d)=a^2-db^2,$$ and $$\operatorname{Tr}_{K/\mathbb Q}(\alpha)=(a+b\sqrt d)+(a-b\sqrt d)=2a.$$ [L1, algebra]

2.1 Multiplication by $\alpha$ sends $$1\mapsto a+b\sqrt d,\qquad \sqrt d\mapsto bd+a\sqrt d,$$ so its matrix in the basis $(1,\sqrt d)$ is the displayed matrix. That matrix has determinant $a^2-db^2$ and trace $2a$, agreeing with step 1.1 as [L2] predicts. [L2, step 1.1, algebra] ∎
