---
id: thm-universal-affine-vertex-algebra
kind: theorem
title: Universal affine vertex algebras exist at every complex level
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-vertex-algebra-state-field
  - def-universal-affine-vacuum-module
  - lem-affine-vacuum-module-pbw-basis
  - lem-affine-vacuum-module-is-restricted
  - lem-affine-translation-derivation
  - lem-affine-current-fields-are-local
  - lem-state-field-reconstruction-from-local-generators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §3.1, Proposition 3.1
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§3.5 and 4.3
      url: https://arxiv.org/pdf/0809.1380
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra, let $B$ be the normalized invariant form of [[def-untwisted-affine-central-extension]], and let $k\in\mathbb C$. The induced module $V^k(\mathfrak g)$ of [[def-universal-affine-vacuum-module]] has a unique vertex-algebra structure in the convention of [[def-vertex-algebra-state-field]] for which $\mathbf1$ is the vacuum and
$$Y(x_{-1}\mathbf1,z)=J^x(z)=\sum_{n\in\mathbb Z}x_nz^{-n-1}\qquad(x\in\mathfrak g).$$
This construction is valid for every complex level, including values at which a normalized Sugawara denominator vanishes. It asserts no conformal vector, simple quotient, unitarity, or integrability.

## Facts & Assumptions

**Given:** The finite-dimensional complex simple Lie algebra, normalized invariant form, arbitrary complex level $k$, and the induced affine vacuum module.

[F1] [[def-universal-affine-vacuum-module]]: $V^k(\mathfrak g)$ has vacuum $\mathbf1$ and current modes $x_n$.

[F2] [[lem-affine-vacuum-module-pbw-basis]]: ordered negative-mode monomials $x^1_{-n_1}\cdots x^r_{-n_r}\mathbf1$ with $n_i\ge1$ span $V^k(\mathfrak g)$.

[F3] [[lem-affine-vacuum-module-is-restricted]]: every current $J^x(z)$ is lower-truncated on each vector.

[F4] [[lem-affine-translation-derivation]]: $T\mathbf1=0$ and $[T,x_n]=-nx_{n-1}$.

[F5] [[lem-affine-current-fields-are-local]]: the current fields are creative, translation-covariant and pairwise local.

[F6] [[lem-state-field-reconstruction-from-local-generators]]: a creative translation-covariant local generating family whose negative modes span the space extends uniquely to a vertex-algebra state–field map.

[F7] [[def-vertex-algebra-state-field]]: the required state-field axioms are lower truncation, vacuum/creation, translation covariance and locality.

## Proof

1.1 Let $\mathcal S=\{J^x(z):x\in\mathfrak g\}$. By [F2], each basis monomial of $V^k(\mathfrak g)$ is obtained from $\mathbf1$ by successively applying negative modes of fields in $\mathcal S$; hence their negative modes span the module. By [F3] these are fields, and [F5] supplies their creation, translation covariance and pairwise locality. [F1, F2, F3, F5, given, algebra]

2.1 The hypotheses of [F6] now hold for $V^k(\mathfrak g)$, $\mathbf1$, $T$, and $\mathcal S$, giving a state-field map with the prescribed currents and the axioms in [F7]. For any competing structure with translation $T'$, [F7] gives $T'\mathbf1=0$ and $[T',J^x(z)]=\partial_zJ^x(z)$, hence $[T',x_n]=-nx_{n-1}$. By [F4], $T'-T$ kills $\mathbf1$ and commutes with every current mode, so it vanishes on the spanning monomials of [F2]. Thus $T'=T$, and uniqueness for this fixed translation in [F6] proves uniqueness of the entire structure. [F2, F4, F5, F6, F7, step 1.1, construct, algebra]

3.1 Every construction and verification above uses only the affine bracket, the vacuum character at level $k$, and formal field operations. No step divides by a function of $k$ or assumes a grading, positivity, or a Sugawara operator. Therefore the same vertex-algebra construction applies to every $k\in\mathbb C$, with the claimed limits on its conclusion. [F1, F2, F5, step 2.1, algebra] ∎
