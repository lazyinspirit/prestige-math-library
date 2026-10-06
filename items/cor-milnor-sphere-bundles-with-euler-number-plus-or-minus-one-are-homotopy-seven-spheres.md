---
id: cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres
kind: corollary
title: "Euler number $\\pm1$ makes the Milnor sphere bundle a homotopy seven-sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere, lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected, thm-whitehead-theorem, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, thm-relative-hurewicz-theorem, thm-absolute-hurewicz-theorem, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice, thm-cellular-approximation-for-maps-of-cw-pairs, lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-long-exact-sequence-of-relative-homotopy-groups]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 402-403, the bundles with h+j = 1; the local Gysin and homotopy-recognition proofs also cover h+j = -1"
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 505-506, homotopy spheres and the homology Whitehead criterion"
---

## Statement

Assume the Axiom of Choice as inherited from the Gysin calculation. If
$h+j=\pm1$, then the Milnor sphere bundle $M_{h,j}$ is a smooth homotopy
seven-sphere: it is a closed connected smooth seven-manifold homotopy
equivalent to $S^7$.

## Facts & Assumptions

**Given:** Integers $h,j$ with $h+j=\pm1$ and the closed smooth seven-manifold $M_{h,j}$ of [[def-milnor-sphere-bundle-m-h-j]].

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]); in particular $\mathrm{AC}_\omega$ follows ([[thm-choice-implies-dependent-implies-countable-choice]]).

[L1] If $h+j=\pm1$, then $H_k(M_{h,j};\mathbb Z)\cong H_k(S^7;\mathbb Z)$ for every $k$ ([[thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere]]), and $M_{h,j}$ is closed, connected and simply connected ([[lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected]], [[def-milnor-sphere-bundle-m-h-j]]).

[L2] Under $\mathrm{AC}_\omega$ a compact smooth manifold has the homotopy type of a finite CW complex ([[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]).

[L3] Assume AC. For $r\ge2$, an $(r-1)$-connected space with a supplied homotopy equivalence to a CW complex satisfies $\pi_r(X)\cong H_r(X;\mathbb Z)$ by the absolute Hurewicz homomorphism; any class in $H_r$ therefore has a preimage represented by a based map $S^r\to X$ ([[thm-absolute-hurewicz-theorem]]).

[L4] Under AC, a homology equivalence $f:X\to Y$ between simply connected finite CW complexes is a homotopy equivalence. Indeed, cellular approximation and the finite mapping cylinder give a simply connected CW pair $(M_f,X)$ with zero relative homology by the homology pair sequence. Starting with its $1$-connectivity, relative Hurewicz inductively gives $\pi_r(M_f,X)=H_r(M_f,X)=0$ for every $r\ge2$. The relative homotopy sequence makes $f$ a weak equivalence, and finite Whitehead makes it a homotopy equivalence ([[thm-cellular-approximation-for-maps-of-cw-pairs]], [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-relative-hurewicz-theorem]], [[thm-long-exact-sequence-of-relative-homotopy-groups]], [[thm-whitehead-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the manifold $M_{h,j}$ is closed, connected, simply connected and has the integral homology of $S^7$; by [L2] and [A1] both $M_{h,j}$ and $S^7$ have finite CW models. [L1, L2, A1]

2.1 Starting with simple connectivity, induct on $r=2,\ldots,6$. If $M_{h,j}$ is $(r-1)$-connected, Hurewicz [L3] gives $\pi_r(M_{h,j})\cong H_r(M_{h,j})=0$; thus it is $r$-connected. It is therefore $6$-connected. Hurewicz in degree seven now identifies $\pi_7(M_{h,j})$ with $H_7(M_{h,j})=\mathbb Z$. Choose the preimage of an oriented generator and a representing based map $f:S^7\to M_{h,j}$. Its homology map is an isomorphism in degree seven and in degree zero, and all other groups vanish. The CW-type hypothesis is supplied by step 1.1, and AC is in [A1]. [step 1.1, L1, L3, A1, choose]

3.1 Transporting along the finite CW models of [L2], the map $f$ becomes a map of simply connected finite CW complexes inducing integral homology isomorphisms, so by the simply connected homology Whitehead criterion [L4] $f$ is a homotopy equivalence; hence $M_{h,j}$ is a smooth homotopy seven-sphere. [step 2.1, L2, L4] ∎
