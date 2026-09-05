---
id: ex-cartan-matrix-from-d-transpose-d
kind: example
title: "A Cartan matrix computed from D^T D"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartan-matrix-is-d-transpose-d, ex-decomposition-matrix-of-s-three-in-characteristic-two]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Example

For $S_3$ in characteristic $2$, the decomposition matrix

$$D=\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix}$$

gives the Cartan matrix

$$C=D^{\mathsf T}D=\begin{pmatrix}2&0\\0&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The characteristic-$2$ decomposition matrix of $S_3$.

[L1] The Cartan matrix is $D^{\mathsf T}D$
([[thm-cartan-matrix-is-d-transpose-d]]).

[L2] The decomposition matrix of $S_3$ in characteristic $2$ is the displayed
matrix
([[ex-decomposition-matrix-of-s-three-in-characteristic-two]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $$D^{\mathsf T}=\begin{pmatrix}1&1&0\\0&0&1\end{pmatrix}.$$ [L2, given, algebra]

2.1 Multiplying gives $$D^{\mathsf T}D=\begin{pmatrix}1&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix}=\begin{pmatrix}2&0\\0&1\end{pmatrix}.$$ [step 1.1, algebra]

3.1 Therefore [L1] yields the displayed Cartan matrix. [L1, step 2.1] ∎
