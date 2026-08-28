---
id: lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices
kind: lemma
title: "The center of $M_n(k)$ consists of the scalar matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field, def-ring-matrix-product-identity-and-transpose]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.4.1(1)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $n \ge 1$. Then

$$
Z(M_n(k))=\{\lambda I_n:\lambda \in k\}.
$$

## Facts & Assumptions

**Given:** A field $k$ and an integer $n \ge 1$.

[L1] Matrix multiplication is given by $$(AB)_{ik}=\sum_{j<n} a_{ij}b_{jk},$$ and $I_n$ is the identity matrix ([[def-ring-matrix-product-identity-and-transpose]]).

## Proof

**Proof technique:** direct.

1.1 Let $X=(x_{ab}) \in Z(M_n(k))$. For each $i$, let $E_{ii}$ be the diagonal matrix with a single $1$ in position $(i,i)$. Because $E_{ii}X=XE_{ii}$ and [L1] computes matrix products entrywise, the $(a,b)$-entry comparison shows $x_{ab}=0$ whenever $a \ne b$. So $X$ is diagonal. [L1, given, algebra]

2.1 Write $X=\operatorname{diag}(d_1,\ldots,d_n)$. For $i \ne j$, let $E_{ij}$ be the matrix unit with a single $1$ in position $(i,j)$. Then [L1] gives $$E_{ij}X=d_jE_{ij}, \qquad XE_{ij}=d_iE_{ij}.$$ Since $X$ is central, these are equal, so $d_i=d_j$ for all $i,j$. Thus $X=\lambda I_n$ for one scalar $\lambda \in k$. Conversely every scalar matrix commutes with every matrix because scalar multiplication is entrywise and $I_n$ is the identity from [L1]. Hence the center consists exactly of the scalar matrices. [step 1.1, L1, given, algebra] ∎
