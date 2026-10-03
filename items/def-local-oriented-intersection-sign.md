---
id: def-local-oriented-intersection-sign
kind: definition
title: "The local oriented intersection sign"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-transverse-linear-subspaces, def-oriented-smooth-manifold-and-oriented-chart, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-product-orientation, def-orientation-of-a-finite-dimensional-real-vector-space, def-transverse-embedded-submanifolds]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed pp. 107–108 and 112 (the orientation number at a point, the order of the two factors, and the submanifold case)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lecture 15, pp. 47–48 (the orientation of $P\\cap Q$ induced by $TM=T(P\\cap Q)\\oplus N_P\\oplus N_Q$)"
---

## Definition

Let $M$ be an oriented smooth $n$-manifold and let $f:X^x\to M$ and $g:Z^z\to M$ be smooth maps from oriented smooth manifolds, with $x+z=n$ and $f,g$ transverse in the sense of [[def-transverse-smooth-maps]]. Let $a\in X$, $b\in Z$ satisfy $f(a)=g(b)=y$. Then $T_aX\oplus T_bZ$ and $T_yM$ have the same dimension, and transversality says that

$$(df_a,dg_b):T_aX\oplus T_bZ\longrightarrow T_yM,\qquad (v,w)\mapsto df_a(v)+dg_b(w),$$

is surjective, hence a linear isomorphism ([[def-transverse-linear-subspaces]]); the sum is direct because the dimensions add up. The ordered direct sum $T_aX\oplus T_bZ$ carries the product orientation with the first factor $T_aX$ and the second factor $T_bZ$ ([[def-product-orientation]]), and the three tangent spaces carry their manifold orientations ([[def-oriented-smooth-manifold-and-oriented-chart]]).

The **local oriented intersection sign** $\varepsilon(a,b)\in\{+1,-1\}$ is $+1$ when this isomorphism carries the product orientation of $T_aX\oplus T_bZ$ to the orientation of $T_yM$, and $-1$ otherwise; equivalently it is the orientation sign of the induced isomorphism of determinant lines ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]], [[def-orientation-of-a-finite-dimensional-real-vector-space]]).

For transverse oriented embedded submanifolds $A^a,B^b\subseteq M$ with $a+b=n$ one takes $f$ and $g$ to be the inclusion maps ([[def-transverse-embedded-submanifolds]]); the sign at $p\in A\cap B$ then compares $T_pA\oplus T_pB\to T_pM$ with $A$ first. The empty intersection is allowed and carries no signs. In dimension zero the sign compares the two orientation rays directly, and for $x=z=n=0$ it is $\varepsilon_X(a)\varepsilon_Z(b)\varepsilon_M(y)$, the product of the two source point signs and the ambient point sign. The factor order is part of the definition: with the two factors exchanged the signs are multiplied by $(-1)^{ab}$, exactly the graded-commutativity sign measured later on this page by the factor-interchange theorem. No compactness, closedness hypothesis or choice axiom is used in this local definition.
