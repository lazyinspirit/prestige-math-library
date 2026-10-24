---
id: thm-irreducible-separable-polynomial-iff-galois-group-transitive
kind: theorem
title: "A positive-degree separable polynomial is irreducible exactly when its Galois group is transitive on the roots"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-galois-group-embeds-in-the-symmetric-group-on-the-roots, thm-isomorphisms-extend-to-splitting-fields, thm-evaluation-kernel-and-minimal-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 4.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Theorem 1.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

A positive-degree separable polynomial is irreducible if and only if its Galois group acts transitively on its roots.

## Facts & Assumptions

**Given:** A positive-degree separable polynomial $f\in F[x]$, its splitting field $L$, and the faithful root action of [[thm-galois-group-embeds-in-the-symmetric-group-on-the-roots]]; the minimal-polynomial correspondence for a simple algebraic extension ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L1] An isomorphism between base fields taking one polynomial to another extends to an isomorphism between their splitting fields ([[thm-isomorphisms-extend-to-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose $f$ is irreducible and let $\alpha,\beta$ be roots. The rule sending $\alpha$ to $\beta$ gives an $F$-isomorphism $F(\alpha)\to F(\beta)$ because both have minimal polynomial associated to $f$; by [L1] it extends to an $F$-automorphism of $L$. Thus some Galois element sends any chosen root to any other, so the action is transitive. This includes degree one. [L1, given, choose]

2.1 For the reverse direction, suppose the action is transitive and let $g$ be a monic irreducible factor of $f$ containing one root $\alpha$. For every $\sigma\in G_f$, the coefficients of $g$ are fixed, so $g(\sigma\alpha)=\sigma(g(\alpha))=0$. Transitivity puts every root of $f$ among the roots of $g$; since $f$ is separable, $g$ has the full degree of $f$, so $f$ is a scalar multiple of $g$ and is irreducible. A root equal to zero causes no exception. [given, algebra] ∎
