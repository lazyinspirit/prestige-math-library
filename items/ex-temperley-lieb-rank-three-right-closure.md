---
id: ex-temperley-lieb-rank-three-right-closure
kind: example
title: "Right closure on the five rank-three diagrams"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-diagram-tower-and-right-closure
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-diagram-tower-conditional-expectation-identities
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - thm-temperley-lieb-diagrams-have-catalan-cardinality
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§2.1.4, PDF pp. 7–8: right closure, trace preservation and the Markov value."
---

## Statement

For $\delta\in\mathbb C^\times$, use the five standard basis diagrams $1_3,d_1,d_2,d_1d_2,d_2d_1$ of $\mathrm{TL}_3(\mathbb C,\delta)$. Their right closures are
$$E_2(1_3)=1_2,\quad E_2(d_1)=d_1,\quad E_2(d_2)=\delta^{-1}1_2,\quad E_2(d_1d_2)=E_2(d_2d_1)=\delta^{-1}d_1.$$
The normalized trace satisfies $\tau_3(D)=\tau_2(E_2(D))$ for all five diagrams.

## Facts & Assumptions

**Given:** $\delta\ne0$, the tower map, closure, trace, and elementary generators.

[F1] The five matchings are $1_3$ (all three through strands), $d_1$ (cap/cup at positions $1,2$), $d_2$ (cap/cup at $2,3$), $d_1d_2$ (top cap $1,2$, bottom cup $2,3$, through strand from top $3$ to bottom $1$), and $d_2d_1$ (top cap $2,3$, bottom cup $1,2$, through strand from top $1$ to bottom $3$); they are distinct members of the noncrossing diagram basis, whose rank-three Catalan count is five. ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagrams-have-catalan-cardinality]])

[F2] $E_2$ is the normalized right closure, is bimodular and trace-preserving, and sends $\iota_2(x)d_2$ to $\delta^{-1}x$. ([[def-temperley-lieb-diagram-tower-and-right-closure]], [[lem-temperley-lieb-diagram-tower-conditional-expectation-identities]])

[F3] The normalized closure trace has $\tau_2(1_2)=1$ and $\tau_2(d_1)=\delta^{-1}$. ([[def-temperley-lieb-normalized-markov-trace-by-closure]])

## Proof

**Given:** The five rank-three diagrams and [F1]–[F3].

1.1 Since $1_3=\iota_2(1_2)$ and $d_1=\iota_2(d_1)$, the identity $E_2\iota_2=\mathrm{id}$ gives the first two values. Also $d_2=\iota_2(1_2)d_2$, so the right-generator Markov rule in [F2] gives $E_2(d_2)=\delta^{-1}1_2$. [F2, given, algebra]

2.1 The tower inclusion sends $d_1$ to the first generator on three strands. Bimodularity and the last value therefore give $E_2(d_1d_2)=d_1E_2(d_2)=\delta^{-1}d_1$ and $E_2(d_2d_1)=E_2(d_2)d_1=\delta^{-1}d_1$. This lists all five basis images by [F1]. [F1, F2, step 1.1, algebra]

3.1 Trace preservation [F2] gives $\tau_2(E_2(D))=\tau_3(D)$ for every basis element $D$ and hence for their linear combinations. Explicitly, the values are $1$ on $1_3$, $\delta^{-1}$ on $d_1,d_2$, and $\delta^{-2}$ on $d_1d_2,d_2d_1$, by [F3] and the displayed closures. [F2, F3, step 1.1, step 2.1, algebra] ∎
