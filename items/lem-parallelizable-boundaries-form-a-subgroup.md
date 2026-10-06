---
id: lem-parallelizable-boundaries-form-a-subgroup
kind: lemma
title: "Parallelizable boundaries form a subgroup"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres, lem-theta-n-connected-sum-operation-is-well-defined, lem-orientation-reversal-is-inverse-in-theta-n, thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five, def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, def-attaching-a-smooth-handle-with-corner-rounding, def-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 20
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 507-510, the subgroup of homotopy spheres bounding parallelizable manifolds"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge5$, the classes in $\Theta_n$ represented
by boundaries of compact oriented parallelizable smooth $(n+1)$-manifolds
form a subgroup of $\Theta_n$.

## Facts & Assumptions

**Given:** The group $\Theta_n$ of [[def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres]] and the set of classes represented by parallelizable fillings.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] Two oriented homotopy $n$-spheres are oriented h-cobordant if and only if they are orientation-preservingly diffeomorphic for $n\ge5$ ([[thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five]]).

[L2] Connected sum and orientation reversal are the group laws of $\Theta_n$ ([[lem-theta-n-connected-sum-operation-is-well-defined]], [[lem-orientation-reversal-is-inverse-in-theta-n]]). Under $\mathrm{AC}_\omega$, smooth boundary collars exist ([[thm-collar-neighborhood-theorem]], [[def-smooth-collar-of-a-manifold-boundary]]). A smooth handle attachment along an embedding of its attaching region that extends to a neighborhood of the disk factor uses these product collars and a smooth monotone rounding of the codimension-two corner ([[def-attaching-a-smooth-handle-with-corner-rounding]]).

## Proof

**Proof technique:** direct.

1.1 Representative independence: if oriented homotopy spheres $\Sigma,\Sigma'$ represent the same class of $\Theta_n$ and $\Sigma=\partial V$ for a compact oriented parallelizable filling $V$, then [L1] gives an orientation-preserving diffeomorphism $f:\Sigma\to\Sigma'$; transporting the tangent trivialization along a collar and pulling $V$ back across $f$ produces a compact oriented parallelizable filling of $\Sigma'$. [L1, A1, given]

2.1 Closure under addition: if $\Sigma=\partial V$ and $\Sigma'=\partial V'$ with $V,V'$ compact oriented parallelizable, choose small boundary coordinate $n$-disks whose parametrizations extend to slightly larger disks. Attach the $1$-handle $[-1,1]\times D^n$ to $V\sqcup V'$ at its two feet, using product collars and rounding as in [L2]. Choose the disk identifications so the handle orientation extends both filling orientations. The attaching disks disappear from the boundary and are replaced by $[-1,1]\times S^{n-1}$, joining the two punctured boundaries by the standard orientation-reversing disk-coordinate identification. Absorbing the intervening collars therefore gives boundary $\Sigma\#\Sigma'$. The attachment is compact. [step 1.1, L2, construct]

3.1 Take positively oriented tangent frames on the fillings. In collar coordinates near each attaching disk, each frame is a smooth map to $GL^+_{n+1}(\mathbb R)$. Shrink the disk and use radial contraction on a slightly larger coordinate neighborhood to deform that map to its value at the centre, keeping the frame unchanged off that neighborhood. Any positive frame is joined to the coordinate frame: Gram–Schmidt deforms its positive upper-triangular factor to the identity, and a product of plane rotations deforms its orthogonal factor to the identity. Make these deformations constant near their ends and use smooth collar cutoffs to match both frames to the product frame on the $1$-handle. They then agree on neighborhoods of the attaching regions, including their edges, and extend in the ambient product coordinates used for rounding. Restricting those frames to the rounded region gives a smooth tangent trivialization. Thus the new filling is parallelizable. [step 2.1, L2, construct]

4.1 Inverses and identity: $-V$ is parallelizable with $\partial(-V)=-\Sigma$, so the inverse class stays in the set, and the standard sphere $S^n=\partial D^{n+1}$ bounds the parallelizable disk, giving the zero class. [step 3.1, L2]

5.1 Steps 1.1-4.1 prove representative independence, closure under addition, closure under inverse and membership of the zero class, hence the classes represented by parallelizable boundaries form a subgroup of $\Theta_n$. [step 4.1] ∎
