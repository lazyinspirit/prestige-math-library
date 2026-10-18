---
id: lem-affine-vacuum-module-is-restricted
kind: lemma
title: The universal affine vacuum module is restricted
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-universal-affine-vacuum-module
  - lem-affine-vacuum-module-pbw-basis
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §3.1
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Statement

For every $k\in\mathbb C$, the current action on $V^k(\mathfrak g)$ from [[def-universal-affine-vacuum-module]] is restricted in the sense of [[def-positive-energy-affine-module]]: for each $v\in V^k(\mathfrak g)$ and $x\in\mathfrak g$, $x_m v=0$ for all sufficiently large positive integers $m$.

## Facts & Assumptions

**Given:** A finite-dimensional complex simple $\mathfrak g$, its normalized affine central extension, level $k\in\mathbb C$, and a vector in its universal affine vacuum module.

[F1] [[lem-affine-vacuum-module-pbw-basis]]: every vector is a finite linear combination of ordered negative-mode monomials applied to $\mathbf1$.

[F2] [[def-untwisted-affine-central-extension]]: $[x_m,y_{-r}]=[x,y]_{m-r}+mB(x,y)\delta_{m,r}K$.

[F3] [[def-universal-affine-vacuum-module]]: $K$ acts as $k$ and $\mathfrak g[t]$ kills the vacuum.

[F4] [[def-positive-energy-affine-module]]: restrictedness means every fixed vector is killed by all sufficiently large positive modes of each fixed current.

## Proof

1.1 We prove by induction on the length of a negative-mode monomial $W\mathbf1$ that, for fixed $x\in\mathfrak g$, $x_mW\mathbf1=0$ for all sufficiently large $m$. For the empty monomial this holds for every $m\ge0$, since $\mathfrak g[t]$ kills $\mathbf1$. [F1, F3, given, algebra]

2.1 For the induction step write $W\mathbf1=y_{-r}W'\mathbf1$ with $r\ge1$. By induction choose bounds for $x_mW'\mathbf1$ and $[x,y]_{m-r}W'\mathbf1$. Take $m$ larger than both bounds and larger than $r$. Then [F2] and [F3] give $x_m y_{-r}W'\mathbf1=y_{-r}x_mW'\mathbf1+[x,y]_{m-r}W'\mathbf1+mkB(x,y)\delta_{m,r}W'\mathbf1=0$. The first two terms vanish by the chosen bounds and the central term vanishes because $m>r$. This proves the induction step. [F1, F2, F3, step 1.1, algebra]

3.1 By [F1], any $v$ is a finite linear combination of such monomials. For each summand step 2.1 supplies a bound; the maximum of these finitely many bounds works for $v$. This is exactly the restrictedness condition in [F4], with no energy grading or unitarity assumed. [F1, F4, step 2.1, algebra] ∎
