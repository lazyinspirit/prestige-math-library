---
id: def-universal-affine-vacuum-module
kind: definition
title: Universal affine vacuum module
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-untwisted-affine-central-extension
  - def-universal-enveloping-algebra-as-a-tensor-quotient
  - lem-affine-vacuum-character-at-level-k
justified_by: [lem-affine-vacuum-module-pbw-basis]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §3.1
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra, let $B$ be the normalized invariant form in [[def-untwisted-affine-central-extension]], and let $k\in\mathbb C$. Write $\widehat{\mathfrak g}=\overline{L\mathfrak g}$ and let $K$ denote its central generator (called $c$ in that definition). Put $\mathfrak p=\mathfrak g[t]\oplus\mathbb CK$ and let $\mathbb C_k$ be the one-dimensional $\mathfrak p$-module from [[lem-affine-vacuum-character-at-level-k]]. The **universal affine vacuum module** at level $k$ is
$$V^k(\mathfrak g):=U(\widehat{\mathfrak g})\otimes_{U(\mathfrak p)}\mathbb C_k,$$
with vacuum $\mathbf1=1\otimes1$. We write $x_n$ for the action of $x\otimes t^n$ and $J^x(z)=\sum_{n\in\mathbb Z}x_nz^{-n-1}$ for its current distribution when it is a field. The central element acts as $k\operatorname{id}$.

This is an algebraic induced module. The affine Lie algebra here has no degree derivation, and no completion, unitarity, integrability, simple quotient, or conformal vector is part of this definition. The nonzero vacuum and ordered negative-mode basis are established by [[lem-affine-vacuum-module-pbw-basis]].
