---
id: lem-compact-c1-leaf-has-finitely-generated-fundamental-group
kind: lemma
title: A compact C¹ leaf has finitely generated fundamental group
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-c1-regular-codimension-one-foliation-and-transverse-orientation
- thm-smooth-partitions-of-unity-exist-on-manifolds
- def-mollifier-family-generated-by-a-unit-mass-smooth-bump
- thm-a-regular-level-set-is-an-embedded-submanifold
- thm-existence-and-uniqueness-of-a-maximal-ode-solution
- lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
- def-cw-complex-with-closure-finiteness-and-weak-topology
- thm-seifert-van-kampen
- thm-higher-dimensional-spheres-are-simply-connected
- def-based-loops-and-fundamental-group
- def-axiom-of-choice
- thm-euclidean-inverse-function-theorem
- lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface
- lem-axiom-of-choice-implies-countable-choice
- thm-fundamental-theorem-on-flows
- thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
  - title: John Milnor, Morse Theory (Annals of Mathematics Studies 51; complete PDF)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf
    locator: §3, Theorem 3.5, printed pp. 20–21 (finite CW homotopy type); the C¹ smoothing and the flow comparison
      are proved locally
  - title: David Gabai, Commentary on Thurston's Foliations and the Thurston norm
    url: https://web.math.princeton.edu/facultypapers/Gabai/Commentary-Thurston-Foliations.pdf
    locator: Theorem 0.8, PDF p. 2 (compact C¹ leaf setting)
dependency_level: 3
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If $L$ is a compact
connected leaf of a transversely oriented $C^1$ codimension-one foliation of a
smooth manifold, then $\pi_1(L,x)$ is finitely generated for every $x\in L$
([[def-based-loops-and-fundamental-group]]).

## Facts & Assumptions

**Given:** A compact connected leaf $L$ of a transversely oriented $C^1$ codimension-one foliation of a smooth manifold, and a base point $x\in L$.

[F1] A compact leaf of a $C^1$ codimension-one foliation is an embedded $C^1$ hypersurface, so near each of its points there are foliation charts $(z,t)$ with $L$ given by $t=0$ and transverse coordinate $t$ ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]], [[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]).

[F2] Smooth partitions of unity subordinate to any open cover exist on a smooth manifold; the sum of a locally finite family of $C^1$ functions with supports in foliation charts is $C^1$, and on a compact set finitely many terms are active ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F3] A family of standard mollifiers on Euclidean space is obtained by rescaling a unit-mass smooth bump, and convolution with a mollifier is smooth ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]). For a compactly supported $C^1$ function, differentiation in the form $\int f(x-y)\varphi_\varepsilon(y)\,dy$ gives $\partial_j(f*\varphi_\varepsilon)=(\partial_jf)*\varphi_\varepsilon$. For $a=f$ or $a=\partial_jf$, the difference from $a(x)$ is bounded by $\|\varphi\|_1\sup_{|y|\le R\varepsilon}|a(x-y)-a(x)|$, where $R$ bounds the bump support. Uniform continuity makes this tend uniformly to zero; thus the required approximation is in $C^1$, not merely a property of the mollifier definition.

[F4] For a smooth flow $\Phi$ with $\Phi_0=\mathrm{id}$ and generator $V$, the map $(p,t)\mapsto\Phi_t(p)$ has derivative at $(p,0)$ given by $(v,s)\mapsto v+sV(p)$; if $V(p)$ is transverse to the kernel of a $C^1$ function $f$ with $df_p(V(p))>0$, then the derivative of $(p,t)\mapsto(f(\Phi_t(p)),\text{base})$ is invertible where the flow collar is used: the $C^1$ inverse function theorem applies and gives a local flow collar ([[thm-fundamental-theorem-on-flows]], [[thm-euclidean-inverse-function-theorem]]).

[F5] A regular level set of a smooth function with nowhere-vanishing differential is an embedded smooth hypersurface ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[F6] A closed smooth manifold has the homotopy type of a finite CW complex, under the Axiom of Choice ([[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]], [[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F7] The fundamental group of a finite CW complex is finitely generated: the $1$-skeleton is a finite graph giving finitely many generators, finitely many $2$-cells add finitely many relations by Seifert–van Kampen, and cells of dimension at least $3$ have simply connected attaching spheres and do not change $\pi_1$ ([[thm-seifert-van-kampen]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[def-based-loops-and-fundamental-group]]).

[F8] The Axiom of Choice implies the countable choice principle ([[lem-axiom-of-choice-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 (A $C^1$ defining function.) By [F1] the leaf $L$ is a compact embedded $C^1$ hypersurface; cover $L$ by finitely many foliation charts whose transverse coordinate $t_i$ vanishes exactly on $L$ and is positive on the cooriented positive side, and let $\chi_i$ be a smooth partition of unity subordinate to these charts [F1, F2]. The weighted sum $f:=\sum_i\chi_i t_i$, extended by zero outside the supports, is a $C^1$ function on a neighbourhood of $L$; it vanishes on $L$, and at every $p\in L$ its differential $df_p=\sum_i\chi_i(p)\,d(t_i)_p$ is a positive multiple of the coorientation conormal, because every active $d(t_i)_p$ is such a positive multiple [F1, F2]. In particular $df_p\neq0$ on $L$. [F1, F2]

1.2 (Smooth defining function and flow collar.) Since $L$ is compact and $df\neq0$ along it, a finite subcover argument and a partition of unity produce a smooth vector field $V$ and a constant $c>0$ with $df(V)>c$ on a neighbourhood of $L$ [F2]. The flow $\Phi$ of $V$ exists there for a uniform time by compactness, and its derivative at $(p,0)$ is invertible, so by the inverse function theorem the flow is locally a collar of $L$. It is globally injective after shortening the time interval: otherwise, from pairs with equal image and times tending to zero, compactness gives a subsequence converging to two points of $L$ with equal image, hence to the same point; both pairs then lie in a single local inverse neighborhood, a contradiction. Thus it gives a collar in which $f$ is strictly increasing along the flow lines, one on each side of $L$ [F4]. Mollify $f$ on a compact subcollar by a finite-chart mollifier argument: decompose $f$ with a finite smooth partition, extend each compactly supported chart expression by zero, convolve with a standard mollifier, and use uniform continuity of $f$ and its first derivatives on the compact supports to obtain a smooth function $\widetilde f$, arbitrarily $C^1$-close to $f$ [F3]. Choose $\widetilde f$ close enough that $d\widetilde f(V)>c/2$ and that its values at the two ends of every flow segment have opposite signs; then $d\widetilde f$ is nowhere zero there and $\widetilde f$ has exactly one zero on each flow segment, so the zero set $Z=\widetilde f^{-1}(0)$ is a smooth compact hypersurface and the flow projection defines a homeomorphism $Z\to L$ [F3, F4, F5]. [F2, F3, F4, F5]

2.1 ($\pi_1$ of the smooth model.) The set $Z$ is a closed smooth hypersurface [F5]; since the flow collar is a homeomorphism onto a collar of $L$, $Z$ is compact and connected for a sufficiently small collar, and the flow projection is a homeomorphism $Z\to L$ [F4]. By [F6] the closed smooth manifold $Z$ has the homotopy type of a finite CW complex, and a homotopy equivalence induces the isomorphism $\pi_1(Z,z)\cong\pi_1(X,*)$ for the finite CW complex $X$; the fundamental group of a finite CW complex is finitely generated [F7]. Hence $\pi_1(Z,z)$ is finitely generated, and the homeomorphism $Z\cong L$ transfers finite generation to $\pi_1(L,x)$, which is therefore finitely generated. [F5, F6, F7, step 1.2]

3.1 The compact leaf $L$ has a smooth compact hypersurface model $Z$ homeomorphic to it, the fundamental group of $Z$ is finitely generated, and homeomorphism invariance of $\pi_1$ gives the same for $\pi_1(L,x)$ [F7]. The Axiom of Choice is used through the finite-CW model [F6] and its countable-choice consumption, which full AC supplies by [F8]. [F6, F7, F8, step 2.1] ∎
