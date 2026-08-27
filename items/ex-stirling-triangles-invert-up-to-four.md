---
id: ex-stirling-triangles-invert-up-to-four
kind: example
title: "The Stirling triangles invert up to size $4$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-signed-stirling-inversion]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Example

For $0\leq n,k\leq4$, the lower-triangular matrices are

$$S=\begin{pmatrix}1&0&0&0&0\\0&1&0&0&0\\0&1&1&0&0\\0&1&3&1&0\\0&1&7&6&1\end{pmatrix},\qquad s=\begin{pmatrix}1&0&0&0&0\\0&1&0&0&0\\0&-1&1&0&0\\0&2&-3&1&0\\0&-6&11&-6&1\end{pmatrix}.$$

Multiplying them gives the $5\times5$ identity matrix, which is the concrete
size-$4$ instance of [[thm-signed-stirling-inversion]].
