---
id: lem-regular-value-choice-does-not-change-the-framed-cobordism-class
kind: lemma
title: "The framed preimage class is independent of regular value and positive basis"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - lem-positively-oriented-bases-are-path-connected
  - lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages
  - def-framed-cobordism-of-embedded-submanifolds
  - lem-framed-cobordism-is-an-equivalence-relation
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - def-the-standard-smooth-step-function
  - thm-morse-sard-for-smooth-manifolds
  - cor-regular-values-form-a-dense-g-delta-set
  - def-homotopy-relative-and-path-homotopy
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Theorem A and Lemmas 1-2, printed pp.44-46"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 3.9, well-definedness of the forward map, printed p.27"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "Sard's theorem and Theorem 3.14, printed pp.25-26"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be a closed
smooth manifold and let $f:X\to S^k$ be smooth, with $k\ge1$.

(i) At a regular value $y$ of $f$, two positive bases $b,b'$ of $T_yS^k$ give
framed-cobordant framed preimages $(f^{-1}(y),f_*b)$ and $(f^{-1}(y),f_*b')$.

(ii) If $y,y'$ are regular values of $f$ with positive bases $b,b'$, then the
framed preimages $(f^{-1}(y),f_*b)$ and $(f^{-1}(y'),f_*b')$ are framed
cobordant ([[def-framed-regular-preimage-of-a-map-to-a-sphere]],
[[def-framed-cobordism-of-embedded-submanifolds]]).

Consequently the framed cobordism class of a regular preimage depends only on
the smooth homotopy class of $f$: smoothly homotopic maps have
framed-cobordant preimages for any choices of regular values and positive
bases.

## Facts & Assumptions

**Given:** A closed smooth manifold $X$, a smooth map $f:X\to S^k$, regular values and positive bases as in (i) and (ii), and the Pontryagin manifolds $(f^{-1}(y),f_*b)$ of [[def-framed-regular-preimage-of-a-map-to-a-sphere]].

[F1] Any two positive bases of an oriented vector space are joined by a smooth path of positive bases ([[lem-positively-oriented-bases-are-path-connected]]).

[F2] The cylinder $N\times I\subseteq X\times I$ with a framing that is the pullback of $f_*b$ near $t=0$ and of $f_*b'$ near $t=1$ is a framed cobordism from $(N,f_*b)$ to $(N,f_*b')$ ([[def-framed-cobordism-of-embedded-submanifolds]]); the standard smooth step function smooths the two junctions obtained by concatenating the constant path at $b$, a path of positive bases and the constant path at $b'$, so a smooth path of positive bases can be reparametrised to be constant near $t=0$ and $t=1$ ([[def-the-standard-smooth-step-function]]).

[F3] If $f_0,f_1:X\to S^k$ are smoothly homotopic and $y$ is a regular value of both with fixed positive basis $b$, then the framed preimages are framed cobordant ([[lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages]]).

[F4] Framed cobordism is an equivalence relation, so framed cobordisms can be concatenated ([[lem-framed-cobordism-is-an-equivalence-relation]]).

[F5] Rotations of $\mathbb R^{k+1}$ have determinant one and form a group; the rotations in a coordinate plane give explicit smooth one-parameter families ([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

[F6] Two smooth maps $f_0,f_1:X\to S^k$, $k\ge1$, have a common regular value: their critical sets are closed by the local rank-minor condition and compact because $X$ is compact; their critical-value images are therefore closed and null by Sard. Each regular-value set is consequently open and dense, and the intersection of these two open dense sets is nonempty ([[thm-morse-sard-for-smooth-manifolds]], [[cor-regular-values-form-a-dense-g-delta-set]]).

## Proof

1.1 (Basis independence (i).) Let $N=f^{-1}(y)$ and let $b,b'$ be positive bases of $T_yS^k$. The change-of-basis matrix carries $b$ to $b'$ and has positive determinant, so [F1] gives a smooth path $b_t$, $t\in[0,1]$, of positive bases with $b_0=b$, $b_1=b'$; by the reparametrisation recorded in [F2] we may take $b_t$ smooth and constant near $t=0$ and $t=1$. On $N\times I\subseteq X\times I$ the normal bundle is canonically $\operatorname{pr}_N^*\nu(N\subseteq X)$, and the formula $\Psi(x,t):=f_*b_t(x)$ defines a smooth bundle isomorphism $\nu(N\times I\subseteq X\times I)\to N\times I\times\mathbb R^k$ which over the end collar $t\in[0,\varepsilon)$ equals the pullback of $f_*b$ and over $t\in(1-\varepsilon,1]$ the pullback of $f_*b'$. Hence $(N\times I,\varepsilon,\Psi)$ is a framed cobordism from $(N,f_*b)$ to $(N,f_*b')$ by [F2]. [F1, F2, given]

1.2 (A rotation family and a homotopy.) Let $y,y'\in S^k$ be regular values of $f$ and choose an orthonormal pair $u,v$ in $\mathbb R^{k+1}$ spanning a plane containing $y$ when $y'=-y$; when $y'=y$ take the constant identity family; otherwise there is an explicit rotation $R_1$, identity on the orthogonal complement of a two-plane and equal to a plane rotation there, with $R_1(y)=y'$: rotate in the plane $\operatorname{span}\{y,y'\}$ if $y'\ne\pm y$, and by angle $\pi$ in a plane containing $y$ if $y'=-y$. Let $R_t$ be the corresponding family of rotations through angle $t\theta$, so that $t\mapsto R_t$ is smooth, $R_0=\mathrm{id}$, $R_1(y)=y'$, and each $R_t$ has determinant one by [F5]. Put $F(x,t):=R_t(f(x))$; this is a smooth homotopy from $f_0:=f$ to $f_1:=R_1\circ f$. The value $y'$ is a regular value of $f_0=f$ by hypothesis, and of $f_1$ because $f_1^{-1}(y')=f^{-1}(R_1^{-1}y')=f^{-1}(y)$ and $df_1=dR_1\circ df$ is surjective there. [F5, given]

2.1 (The cobordism from the homotopy.) Apply [F3] to the smooth homotopy $F$ from $f$ to $R_1\circ f$ and the common regular value $y'$ with the positive basis $b'$: the framed preimages $(f^{-1}(y'),f_*b')$ and $((R_1f)^{-1}(y'),(R_1f)_*b')$ are framed cobordant. The second preimage is $f^{-1}(y)$; and since $dR_1$ is invertible and orientation-preserving, the basis $b'':=dR_1^{-1}(b')$ is positive at $y$ and $(R_1f)_*b'=f_*b''$ by the chain rule: the framing of the preimage of a composition is the framing of the inner map read through the invertible differential. Hence $(f^{-1}(y'),f_*b')$ is framed cobordant to $(f^{-1}(y),f_*b'')$. [F3, step 1.2]

3.1 (Independence of the regular value (ii).) By step 1.1 applied to the regular value $y$ of $f$ and the two positive bases $b''$ and $b$, the framed preimages $(f^{-1}(y),f_*b'')$ and $(f^{-1}(y),f_*b)$ are framed cobordant. Concatenating this cobordism with the one of step 2.1 by [F4] gives a framed cobordism from $(f^{-1}(y'),f_*b')$ to $(f^{-1}(y),f_*b)$, which is (ii). [F4, step 1.1, step 2.1]

4.1 (Consequence for smooth homotopies.) Let $f_0,f_1:X\to S^k$ be smoothly homotopic via $F$, and let $y_i$ be regular values of $f_i$ with positive bases $b_i$, $i=0,1$. By [F6] choose a common regular value $p$ of $f_0$ and $f_1$; choose any positive basis $c$ of $T_pS^k$. Applying [F3] to the homotopy $F$ and the common regular value $p$ gives a framed cobordism between $(f_0^{-1}(p),f_{0*}c)$ and $(f_1^{-1}(p),f_{1*}c)$; applying (ii) of step 3.1 to $f_0$ gives one between $(f_0^{-1}(y_0),f_{0*}b_0)$ and $(f_0^{-1}(p),f_{0*}c)$, and applying it to $f_1$ gives one between $(f_1^{-1}(y_1),f_{1*}b_1)$ and $(f_1^{-1}(p),f_{1*}c)$. Concatenating the three framed cobordisms by [F4] gives a framed cobordism between $(f_0^{-1}(y_0),f_{0*}b_0)$ and $(f_1^{-1}(y_1),f_{1*}b_1)$, as asserted. [F3, F4, F6, step 1.1, step 3.1]

5.1 (Conclusion.) Steps 1.1 and 3.1 prove (i) and (ii); step 4.1 proves that smoothly homotopic maps with any choices of regular values and positive bases have framed-cobordant preimages, so the framed cobordism class of a regular preimage depends only on the smooth homotopy class of the map. Empty preimages are included. The hypothesis $k\ge1$ is essential: for a constant map $X\to S^0$, the two regular-value preimages are $X$ and $\varnothing$, which need not be framed cobordant. Only $\mathrm{AC}_\omega$, inherited from the cited suppliers, is used. [F1, F2, F3, F4, F6, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
