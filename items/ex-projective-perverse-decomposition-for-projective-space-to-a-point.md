---
id: ex-projective-perverse-decomposition-for-projective-space-to-a-point
kind: example
title: "Perverse decomposition of projective space over a point"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 26
deps: [def-axiom-of-choice,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete final-version PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§2.1 Theorem 2.1.1 and §3.6 (perversity conditions), printed pp. 7–8 and 26–27"
    - title: "A. Hatcher, «Algebraic Topology» (author-hosted complete PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Example 0.6 and §2.2 (the cell structure of complex projective space and its cellular chain complex), printed pp. 7 and 138–140"
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Let $f:\mathbb P^n\to\mathrm{pt}$. In the perverse category on a point, perversity equals the ordinary cohomological t-structure. For characteristic-zero $k$, $Rf_*k[n]$ has one copy of $k$ in each degree $-n,-n+2,\ldots,n$ and is the finite sum $\bigoplus_{j=0}^n k[n-2j]$.

## Verification

**Given:** The morphism $f:\mathbb P^n\to\mathrm{pt}$ with its standard projective-space structure, a characteristic-zero coefficient field $k$, and the Axiom of Choice inherited from the cited geometry suppliers.

[F1] Cellular cochains compute cohomology with the constant coefficient system $k$, by [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]].

[F2] The support and cosupport bounds on the sole zero-dimensional stratum define the ordinary t-structure, by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]].

[F3] The finite perverse splitting for this smooth projective source is [[thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]].

1.1 The standard characteristic maps exhibit the cellular filtration $\mathbb P^0\subset\mathbb P^1\subset\cdots\subset\mathbb P^n$ with exactly one real cell in each dimension $0,2,\ldots,2n$: the map from the closed unit ball in $\mathbb C^j$ sending $w$ to $[w:\sqrt{1-\lVert w\rVert^2}]$ has interior mapping homeomorphically onto the last-coordinate affine chart and boundary mapping onto $\mathbb P^{j-1}$. Adjacent cellular groups sit in degrees of opposite parity, so the cellular differential vanishes and [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] gives $H^{2j}(\mathbb P^n;k)=k$ for $0\le j\le n$ and $H^m(\mathbb P^n;k)=0$ for all other $m$. [given, F1, algebra]

2.1 On a point the perverse support and cosupport inequalities are $H^q=0$ for $q>0$ and for $q<0$, respectively, by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]. Thus the perverse t-structure equals the ordinary one, its heart consists of finite-dimensional $k$-vector spaces in degree zero, and ${}^pH^i(Rf_*k[n])=H^{n+i}(\mathbb P^n;k)$. Since $\mathbb P^n$ is smooth projective and $f$ is projective, [[thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]] supplies the finite splitting $Rf_*k[n]\cong\bigoplus_i{}^pH^i(Rf_*k[n])[-i]$. Substituting step 1.1 gives $Rf_*k[n]\cong\bigoplus_{j=0}^nk[n-2j]$, with a simple copy of $k$ exactly in degrees $-n,-n+2,\ldots,n$. For $n=0$ this is the single summand $k$; an empty source is outside the example. [F2, F3, step 1.1, algebra] ∎
