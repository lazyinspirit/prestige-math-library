---
id: prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms
kind: proposition
title: "Shift preserves homotopy equivalences, contractibility, and quasi-isomorphisms"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy-equivalence, def-contractible-complex, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, def-shift-of-a-chain-map-and-chain-homotopy, thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories, prop-homology-of-a-shift-is-shifted-homology, def-quasi-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Statement

For every integer $k$, shift preserves chain homotopy equivalences,
contractible complexes, and quasi-isomorphisms.

## Facts & Assumptions

**Given:** An integer $k$.

[L1] Shift carries chain maps and chain homotopies to shifted ones ([[def-shift-of-a-chain-map-and-chain-homotopy]]).

[L2] Shift is an autoequivalence on chain complexes and on the homotopy category ([[thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories]]).

[L3] Homology shifts by the rule $$H_n(C[k])\cong H_{n-k}(C)$$ ([[prop-homology-of-a-shift-is-shifted-homology]]).

[L4] A quasi-isomorphism is detected degreewise on homology ([[def-quasi-isomorphism]]).

[L5] Chain homotopy equivalences are quasi-isomorphisms ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[L6] Contractibility means homotopy equivalence to the zero complex ([[def-contractible-complex]]).

[L7] A chain homotopy equivalence is a map with a homotopy inverse ([[def-chain-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 If $f:C\to D$ has homotopy inverse $g$, then [L1] shifts the homotopies $gf\simeq1_C$ and $fg\simeq1_D$ to homotopies $$g[k]f[k]\simeq1_{C[k]},\qquad f[k]g[k]\simeq1_{D[k]}.$$ The inverse shift $[-k]$ from [L2] shows this construction stays inside the same homotopy-equivalence class of objects. Thus [L7] shows that shift preserves chain homotopy equivalences. By [L6], the special case of a homotopy equivalence $C\simeq0$ shows that shift also preserves contractible complexes. [L1, L2, L6, L7, given, algebra]

2.1 Let $f$ be a quasi-isomorphism. By [L3], the map $H_n(f[k])$ identifies with $H_{n-k}(f)$ for every $n$, so $H_n(f[k])$ is an isomorphism whenever $H_{n-k}(f)$ is. Then [L4] makes $f[k]$ a quasi-isomorphism. This is compatible with step 1.1 and [L5], since every shifted homotopy equivalence is again a quasi-isomorphism. [L3, L4, L5, step 1.1, algebra] ∎
