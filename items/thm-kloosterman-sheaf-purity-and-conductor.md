---
id: thm-kloosterman-sheaf-purity-and-conductor
kind: theorem
title: "Purity and Conductor of the Hyper-Kloosterman Sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-l-adic-middle-extension-sheaf-over-finite-field
  - def-weight-zero-trace-function
  - def-trace-function-conductor
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 9–10; normalized hyper-Kloosterman sum, trace identity, rank, purity and Swan data"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, choose a nontrivial additive character $\psi:\mathbb F_p\to\mathbb C^\times$, and let $n\ge2$. For $x\in\mathbb F_p^\times$, define the normalized hyper-Kloosterman sum
$$\operatorname{Kl}_n(x;p)=(-1)^{n-1}p^{-(n-1)/2}\sum_{\substack{y_1,\ldots,y_n\in\mathbb F_p^\times\\ y_1\cdots y_n=x}}\psi(y_1+\cdots+y_n).$$
There exists a geometrically irreducible (its geometric-monodromy representation is irreducible) middle-extension $\overline{\mathbb Q}_\ell$-sheaf $\mathcal K\ell_n$ on $\mathbb P^1_{\mathbb F_p}$, lisse on $\mathbb G_m$, whose trace function equals $\operatorname{Kl}_n(x;p)$ for $x\in\mathbb F_p^\times$. It has rank $n$ and is pointwise pure of weight zero on its lisse locus $\mathbb G_m$; its middle-extension boundary stalks have weights at most zero in the weight-zero convention. Its singular points are $0$ and $\infty$; it is tamely ramified at $0$ with Swan conductor $0$ and has Swan conductor $1$ at $\infty$. Its Fouvry–Kowalski–Michel complexity is therefore $c(\mathcal K\ell_n)=n+3$.

## Statement references

[[def-l-adic-middle-extension-sheaf-over-finite-field|ℓ-adic middle-extension sheaf over a finite field]]

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[def-trace-function-conductor|Trace-function conductor]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Proof status

The source states this construction and its rank, purity, singularity, and Swan-conductor data, but the batch has no local Fourier-transform or multiplicative-convolution construction and no local monodromy calculation proving the Swan values. Deligne/Katz is named as source authority, but those structural proofs are not reconstructed here. The theorem is retained with its exact hypotheses and escalated; the source statement is not counted as a proof.

## Purity convention

Here purity zero is asserted on the lisse locus, as in FKM's representation convention (trace-functions-pisa Definition2.3 and Section3.3, printed pp7 and10-11). The boundary weights are bounded above by zero; the source term does not assert that every nonzero boundary eigenvalue has weight exactly zero. This explicit distinction matches the current purity and weight-zero definitions. The full Kloosterman construction, boundary-weight and local-monodromy proofs remain held.
