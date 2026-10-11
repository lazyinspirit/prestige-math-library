---
id: def-uniform-representation-stability-for-consistent-sn-sequences
kind: definition
title: "Uniform representation stability for consistent sequences of $S_n$-modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-fi-category-and-fi-module,
       def-first-row-padding-of-a-partition,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-complex-specht-modules-are-irreducible]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Remark 3.3.1 and Definition 3.3.2, printed pp. 21–22: consistent sequences, the three conditions (injectivity, surjectivity of the $S_{n+1}$-span, multiplicity stability), and the warning that not every consistent sequence comes from an FI-module"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "§1, printed p. 1: representation stability as the characteristic-zero motivating notion"
---

## Definition

Let $k$ be a field of characteristic $0$. A **consistent sequence** is a
sequence $(V_n,\varphi_n)_{n\ge0}$ in which each $V_n$ is a finite-dimensional
left $kS_n$-module and each $\varphi_n\colon V_n\to V_{n+1}$ is
$S_n$-equivariant, the target being regarded as an $S_n$-module by restriction
along the standard inclusion $S_n\hookrightarrow S_{n+1}$ that fixes $n$. An
FI-module $V$ over $k$ with finite-dimensional values
([[def-fi-category-and-fi-module]]) determines such a sequence by
$V_n:=V([n])$ and $\varphi_n:=f_*$ for the standard inclusions
$f\colon[n]\to[n+1]$; these maps are $S_n$-equivariant by functoriality and the
conjugation action, since $f\circ\sigma=\Phi_f(\sigma)\circ f$ with
$\Phi_f(\sigma)$ the extension of $\sigma$ by the fixed point $n$.

The sequence is **uniformly representation stable with stable range $n\ge N$**
when all three of the following hold.

1. **(I) Injectivity.** The map $\varphi_n\colon V_n\to V_{n+1}$ is injective for
   every $n\ge N$.
2. **(II) Surjectivity.** The $S_{n+1}$-span of the image $\varphi_n(V_n)$ is
   all of $V_{n+1}$ for every $n\ge N$.
3. **(III) Multiplicities.** For each partition $\lambda$ and each $n$ with
   $n\ge|\lambda|+\lambda_1$, let $V(\lambda)_n$ be the irreducible $kS_n$-module
   indexed by the first-row padding $\lambda[n]=(n-|\lambda|,\lambda_1,\lambda_2,\dots)$
   ([[def-first-row-padding-of-a-partition]]), namely the scalar extension
   $k\otimes_{\mathbb Q}S^{\lambda[n]}_{\mathbb Q}$ of the rational Specht model,
   which is the unique irreducible $kS_n$-module with that label
   ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]];
   over $\mathbb C$ this is the published complex Specht classification
   [[thm-complex-specht-modules-are-irreducible]]). Decompose
   $V_n\cong\bigoplus_{\lambda}c_{\lambda,n}V(\lambda)_n$ with multiplicities
   $c_{\lambda,n}\ge0$, the sum over those $\lambda$ with
   $n\ge|\lambda|+\lambda_1$. Then for every fixed $\lambda$ the multiplicity
   $c_{\lambda,n}$ is independent of $n$ for all $n\ge N$.

The sequence is **uniformly representation stable** when it is so for some
$N\ge0$. All three conditions are part of the definition, and (II) is not a
consequence of (I) and (III): the sequence with $V_n=k^2$ carrying the trivial
$S_n$-action and $\varphi_n$ the inclusion of the first coordinate is injective
and has constant multiplicities $c_{\varnothing,n}=2$, but its images span only
a one-dimensional subspace of $V_{n+1}$. No choice principle is used.
