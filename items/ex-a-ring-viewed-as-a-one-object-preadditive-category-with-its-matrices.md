---
id: ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices
kind: example
title: "A ring viewed as a one-object preadditive category with its matrices"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring, def-the-additive-category-of-matrices-over-a-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.2"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "Gabriele Lobbia, Wojciech Rozowski, Ralph Sarkis, and Fabio Zanasi, Quantitative Monoidal Algebra, Definition 25"
      url: "https://arxiv.org/pdf/2410.09229"
pipeline_run: frontier-20
---

## Example

For a ring $R$, the one-object preadditive category of
[[thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]] becomes,
after adjoining finite biproducts, the matrix category $\mathbf{Mat}_R$. In
particular, the object $2$ of $\mathbf{Mat}_R$ is the biproduct of two copies of
the unique object of the ring category.

## Facts & Assumptions

**Given:** A ring $R$.

[L1] A one-object preadditive category is the same thing as a ring
([[thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]]).

[L2] In $\mathbf{Mat}_R$, a morphism $n\to m$ is an $m\times n$ matrix
([[def-the-additive-category-of-matrices-over-a-ring]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the unique object $*$ of the ring category has endomorphism ring $R$. In $\mathbf{Mat}_R$, the object $1$ recovers that same one-object category, because endomorphisms $1\to1$ are $1\times1$ matrices, hence elements of $R$, by [L2]. [L1, L2]

2.1 The object $2$ has the standard column injections $1\to2$ and row projections $2\to1$, namely $\begin{pmatrix}1\\0\end{pmatrix}$, $\begin{pmatrix}0\\1\end{pmatrix}$, $\begin{pmatrix}1&0\end{pmatrix}$, and $\begin{pmatrix}0&1\end{pmatrix}$. Their block identities are exactly the biproduct equations, so $2\cong1\oplus1$. [L2, step 1.1] ∎
