---
id: ex-a1-nakajima-hecke-correspondence-as-fundamental-sl2-module
kind: example
title: "The A1 Nakajima correspondence in the fundamental sl2 representation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-a1-nakajima-framed-quiver-data
  - lem-a1-nakajima-varieties-and-hecke-correspondence-are-points
  - thm-a1-nakajima-hecke-correspondence-gives-sl2-action
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists, §§4.2, 4.4–4.5"
      url: "https://arxiv.org/pdf/1611.10000"
---

## Example

For the one-vertex, no-arrow quiver with framing dimension one, the two
nonempty Nakajima fibres are points at $v=0$ and $v=1$. On their fundamental
classes $e_0,e_1$, the Hecke correspondence gives
$$E=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad F=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The A1 quiver varieties and their point Hecke correspondence,
with basis ordered $(e_0,e_1)$ by dimension $v=0,1$.

[F1] [[thm-a1-nakajima-hecke-correspondence-gives-sl2-action]]: $E e_0=0$,
$E e_1=e_0$, $F e_0=e_1$, $F e_1=0$, $H e_0=e_0$ and $H e_1=-e_1$.

## Verification

1.1 In the ordered basis $(e_0,e_1)$, the six actions in [F1] give the displayed matrices column by column. [given, F1, algebra]

2.1 Direct multiplication gives $EF=\operatorname{diag}(1,0)$, $FE=\operatorname{diag}(0,1)$, $HE-EH=2E$ and $HF-FH=-2F$. Therefore $[E,F]=H$, $[H,E]=2E$ and $[H,F]=-2F$, the defining $\mathfrak{sl}_2$ brackets. [F1, step 1.1, algebra] ∎

