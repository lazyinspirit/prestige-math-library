---
id: thm-toen-derived-hall-number-formula
kind: theorem
title: "Toën derived Hall numbers have the higher-Ext orbit formula"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-toen-derived-hall-algebra
  - lem-derived-hall-moduli-spaces-and-convolution-are-finite
  - lem-perfect-dg-modules-have-finite-total-ext
  - def-homotopy-fiber-of-a-map
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - lem-derived-hall-stabilizer-homotopy-sequence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §5, Proposition 5.1"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Statement

Let $x,y,z$ be perfect right dg $\mathcal T$-modules for a locally finite dg-enhancement $\mathcal T$. Define
$$
[x,z]_y:=\{f\in\operatorname{Hom}_{\mathcal D(\mathcal T)}(x,z):\operatorname{Cone}(f)\cong y\}
$$
and let $\operatorname{Aut}(x)$ act on this finite set by precomposition. For $f\in[x,z]_y$, write
$$
\operatorname{Aut}(f/z):=\{a\in\operatorname{Aut}(x): f\circ a=f\}.
$$
Then the coefficient in [[def-toen-derived-hall-algebra]] is
$$
g^z_{x,y} = \sum_{[f]\in[x,z]_y/\operatorname{Aut}(x)} \frac{1}{|\operatorname{Aut}(f/z)|} \prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i} |\operatorname{Ext}^{-i}(x,x)|^{(-1)^{i+1}}
$$
and equivalently
$$
g^z_{x,y} = \frac{|[x,z]_y|\displaystyle\prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i}} {|\operatorname{Aut}(x)|\displaystyle\prod_{i>0}|\operatorname{Ext}^{-i}(x,x)|^{(-1)^i}}.
$$
All products are finite because perfect modules have finite total Ext.

## Facts & Assumptions

**Given:** A finite field $k=\mathbb F_q$, a locally finite dg-enhancement $\mathcal T$, perfect modules $x,y,z$, and the coefficient $g^z_{x,y}$ from [[def-toen-derived-hall-algebra]].

[F1] The coefficient $g^z_{x,y}$ is the weighted homotopy cardinality of the fiber of the target map over $z$, restricted to arrows with source isomorphic to $x$ and cofiber isomorphic to $y$ ([[def-toen-derived-hall-algebra]]).

[F2] The homotopy type of this restricted fiber is locally finite; its connected components are represented by arrows into $z$ ([[lem-derived-hall-moduli-spaces-and-convolution-are-finite]]).

[F3] For perfect modules, every total Ext space is finite-dimensional over $k$ and vanishes outside a finite range ([[lem-perfect-dg-modules-have-finite-total-ext]]).

[F4] For a component represented by $f:x\to z$ in the target fiber, its homotopy weight is $|\operatorname{Aut}(f/z)|^{-1}\prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i}|\operatorname{Ext}^{-i}(x,x)|^{(-1)^{i+1}}$ ([[lem-derived-hall-stabilizer-homotopy-sequence]]).

## Proof

1.1 Fix a representative $x$. The fiber in [F1] fixes the target $z$ and restricts the source and cofiber to the isomorphism classes of $x$ and $y$; it retains no chosen equivalence of the source to $x$ or of the cofiber to $y$. For an arrow $x'\to z$ in that restriction, choose a source equivalence $x\simeq x'$ to express its derived morphism as $f:x\to z$ with cofiber isomorphic to $y$. A different source identification precomposes $f$ by an element of $\operatorname{Aut}(x)$. Two such representatives lie in the same component precisely when there is a source equivalence over $z$ up to homotopy: after the identifications this says $f'=f\circ a$ in the derived category for some $a\in\operatorname{Aut}(x)$ (using its inverse if the equivalence is oriented oppositely). Conversely that equality gives a homotopy between the maps and hence an equivalence of arrows in the target homotopy fiber. The cofiber condition restricts components and adds no framing. Thus the component set is exactly $[x,z]_y/\operatorname{Aut}(x)$. This identifies only components; their higher homotopy and stabilizer weights are retained in the following weight calculation. [F1, F2, choose, construct]

1.2 By [F4], the weight of the component represented by $f$ is its stabilizer reciprocal times the higher-Ext factor displayed in the first formula. This uses the homotopy exact sequence in [F4], including its low-degree stabilizer tail; in particular the stabilizer is not the component set of the mapping-space fiber. [F1, F2, F4]

2.1 Summing the component weights from step 1.2 over the component set in step 1.1 gives the first displayed formula by [F1]. [F1, step 1.1, step 1.2]

3.1 For a finite group $G$ acting on a finite set $S$, each orbit of $s$ has size $|G|/|\operatorname{Stab}(s)|$, so $|S|/|G|=\sum_{[s]\in S/G}1/|\operatorname{Stab}(s)|$. Apply this with $G=\operatorname{Aut}(x)$ and $S=[x,z]_y$, then collect the common Ext factor in step 2.1. This gives the second formula. [F1, F3, step 2.1, algebra] ∎
