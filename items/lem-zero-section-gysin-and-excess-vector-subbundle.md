---
id: lem-zero-section-gysin-and-excess-vector-subbundle
kind: lemma
title: "Zero-section Gysin and excess intersection for vector subbundles"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-bivariant-chow-operations
  - lem-operational-chern-classes-and-whitney-formula
  - lem-vector-bundle-chow-homotopy-invariance
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Lemma 42.44.2 and Lemma 42.36.3 (tags 0FA8, 02TX)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Lemma 42.44.2 (Chern classes and sections) and Lemma 42.36.3 (vector bundle homotopy invariance)"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Introduction to Intersection Theory, Class 19"
      url: "https://math.stanford.edu/~vakil/245/245class19.pdf"
      locator: "Class 19, Section 2.1: the distinguished section in a projective bundle and the regular-section top-Chern computation; the subbundle excess formula is Stacks 42.44.2"
---

## Statement

All schemes and base changes below are locally of finite type over a fixed
field $k$, and all morphisms are $k$-morphisms.

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. For a rank-$r$ vector
bundle $p:N\to T$, let $s_N^!=(p^*)^{-1}$. If $0\to N'\to N\to Q\to0$ is exact
and $a:N'\hookrightarrow N$ is the vector subbundle immersion, then
$s_N^!a_*p'^*\alpha=c_{\operatorname{rank}Q}(Q)\cap\alpha$. In particular
$s_N^!s_*\alpha=c_r(N)\cap\alpha$. These identities and proper/flat/divisor
compatibility hold after every base change.

## Facts & Assumptions

**Given:** the Axiom of Choice; a rank-$r$ vector bundle $p:N\to T$; an exact sequence $0\to N'\to N\to Q\to0$ of vector bundles with subbundle immersion $a:N'\hookrightarrow N$ and projection $p':N'\to T$.

[L1] Flat pullback along a vector bundle is bijective with inverse $s_N^!$, compatibly with every base change ([[lem-vector-bundle-chow-homotopy-invariance]]).

[L2] Chern classes are operational, commute with bivariant operations, satisfy $c_r(N)\cap[T]=[Z(s)]$ when $T$ is pure-dimensional and a section of $N$ has regularly embedded zero scheme of codimension $r$, and obey the Whitney formula ([[lem-operational-chern-classes-and-whitney-formula]], [[def-bivariant-chow-operations]]).

## Proof

**Proof technique:** direct; pull the identity back along the bijection $p^*$, where it becomes the regular-section formula for the universal quotient section.

1.1 Compatibility. Since $p^*$ is bijective with inverse $s_N^!$ by [L1], the displayed identities are equivalent after applying $p^*$ to the corresponding identities of bivariant operations: proper, flat and divisor compatibility of $s_N^!$ follows by applying $p^*$ and the corresponding push-pull or Cartier identities to each equality; all constructions are stable under base change by [L1] and [L2]. [L1, L2, given, algebra]

1.2 The excess formula. Consider the universal section of $p^*Q$ on $N$, namely the image of the vector coordinate under the composite $N\to Q$ (equivalently the section of $p^*Q$ whose value at a point is the class of the tautological vector); its zero scheme is exactly the subbundle $N'$. After a local splitting of $0\to N'\to N\to Q\to0$ the section cuts $\operatorname{rank}Q$ independent fibre coordinates, so its zero scheme is regularly embedded of codimension $\operatorname{rank}Q$. For an integral $V\subseteq T$, write $N_V=p^{-1}(V)$ and $N'_V=p'^{-1}(V)$. These are integral and pure-dimensional, of dimensions $\dim V+r$ and $\dim V+\operatorname{rank}N'$, with flat-pullback cycles $[N_V]=p^*[V]$ and $[N'_V]=p'^*[V]$. On $N_V$ the restricted universal section again cuts independent fibre coordinates, so [L2] applies there. Pushing its section formula along $N_V\hookrightarrow N$ and using proper compatibility and flat naturality of Chern operators gives $a_*p'^*[V]=c_{\operatorname{rank}Q}(p^*Q)\cap p^*[V]=p^*(c_{\operatorname{rank}Q}(Q)\cap[V])$. Applying $s_N^!$ and extending linearly gives $s_N^!a_*p'^*\alpha=c_{\operatorname{rank}Q}(Q)\cap\alpha$ for all $\alpha$. [L2, given, algebra]

2.1 The zero-section case. Taking $N'=0$ and $Q=N$ gives the zero section $s:T\to N$ of $N$ and the identity $s_N^!s_*\alpha=c_r(N)\cap\alpha$; the local splittings used in step 1.2 verify regularity only and do not assert a global splitting of the sequence. [L2, step 1.2, given, algebra] ∎ 