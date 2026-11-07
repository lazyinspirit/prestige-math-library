---
id: thm-rigidity-of-height-zero-loci-for-polarized-systems-over-function-curves
kind: theorem
title: "Rigidity of height-zero loci over a function curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - def-one-variable-function-field-dynamical-setting
  - def-polarized-endomorphism-of-projective-variety
  - thm-function-field-admissible-canonical-metric-existence
  - thm-function-field-adelic-intersection-product-exists
  - thm-function-field-arithmetic-hodge-index-with-trace
  - thm-function-field-successive-minima-inequality
  - thm-lang-neron-finite-generation-modulo-the-trace
  - thm-k-k-trace-existence-and-uniqueness
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§§3.1–3.4, 4.1–4.3; Theorem 4.6 and Lemmas 4.7–4.8"
---

## Statement

Let $k$ be algebraically closed, let $K=k(B)$ for a smooth projective curve $B/k$, and let $X/K$ be geometrically normal, geometrically integral, projective, and of dimension at least one. Let $(X,f,L,d)$ and $(X,g,M,e)$ be polarized dynamical systems. Write
$$Z_f=\{P\in X(\overline K):h_{\bar L_f}(P)=0\},\qquad Z_g=\{P\in X(\overline K):h_{\bar M_g}(P)=0\},$$
where $\bar L_f$ and $\bar M_g$ are the admissible metrics and $h_{\bar L_f},h_{\bar M_g}$ are their normalized point-intersection heights. Let $Z$ be the Zariski closure in $X_{\overline K}$ of $Z_f\cap Z_g$. Then
$$
Z_f\cap Z(\overline K)=Z_g\cap Z(\overline K).
$$

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[thm-function-field-admissible-canonical-metric-existence]]

## Facts & Assumptions

**Given:** An algebraically closed constant field $k$; $K=k(B)$; a geometrically normal, geometrically integral projective variety $X/K$; two polarizations $(f,L,d)$ and $(g,M,e)$; their admissible metrics and point heights; and $Z=\overline{Z_f\cap Z_g}$.

[F1] Each polarized system has a nef admissible adelic metric whose normalized point height satisfies the functional equation, is nonnegative, and is zero on every preperiodic point. ([[thm-function-field-admissible-canonical-metric-existence]])

[F2] The current Hodge-index supplier states the negative-semidefinite pairing and trace kernel for underlying numerically trivial classes equipped with flat metrics; it does not state the full equality criterion for arbitrary integrable adelic metrics. ([[thm-function-field-arithmetic-hodge-index-with-trace]])

[F3] A dense set of zero-height points for a nef adelic metric forces the corresponding subvariety height to vanish by the successive-minima inequality. ([[thm-function-field-successive-minima-inequality]])

[F4] The $K/k$-trace exists, and Lang–Néron supplies finite generation modulo its image, which is used in constructing the equivariant Picard splitting. ([[thm-k-k-trace-existence-and-uniqueness]], [[thm-lang-neron-finite-generation-modulo-the-trace]])

## Remaining local proof obligations

Carney's proof first proves polarization independence of the zero set, normalizes an irreducible component of $Z$, and uses Lang–Néron to construct the $f^*$- and $g^*$-equivariant lifts of the same Néron–Severi class modulo the trace. Their sum is nef and has zero height on a dense subset by the successive-minima theorem. A small positive base-line-bundle perturbation makes it arithmetically positive; the arithmetic Hodge-index equality criterion then puts the difference of the two canonical classes in the trace kernel, and the trace terms have height zero, yielding equality of the two zero loci on $Z$. The required stronger equality interface is Carney 2019 Theorem 3.1 (arbitrary integrable $\bar M$, underlying degree orthogonality, arithmetically positive nef $\bar L_i$, and $\bar L_i$-boundedness), together with Theorem 3.2 identifying zero-height and numerical-triviality classes. Underlying numerical triviality alone does not prove that an arbitrary metric is flat. These stronger local suppliers and the positivity-preserving base perturbation must be proved before the final trace-kernel inference. The local files for Lang–Néron, the function-field arithmetic Hodge index, successive minima, and admissible metrics have no complete local proofs. The full argument, including normalization, finite extension, polarization-independence, and the final trace-kernel step, has not been reconstructed as a proof contract here. This item remains escalated.
