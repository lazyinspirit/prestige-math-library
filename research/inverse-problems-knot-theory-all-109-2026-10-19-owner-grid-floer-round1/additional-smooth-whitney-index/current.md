---
id: lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
kind: lemma
title: "Smooth relative Whitney homotopies preserve actual strip Fredholm index"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-geometric-strip-linearization-frame-and-fredholm-index
  - lem-relative-strip-maslov-determinant-excision-and-local-models
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Section3.2, relative disk class indices; the smooth relative-homotopy and concatenation proof is supplied locally"
---

## Statement

Assume countable choice. Let $X$ be a compact smooth manifold with a smooth path $J_t$ of almost complex structures, and let $L_0,L_1$ be compact submanifolds totally real for $J_0,J_1$, respectively. Suppose their intersection is finite and transverse. At each intersection point choose a target chart in which $L_0=\mathbb R^m$, $L_1=i\mathbb R^m$ and $J_t=i$ for every $t$. Retain those same charts and structures throughout.

A smooth fixed-end representative from $x$ to $y$ is a smooth map $u:\mathbb R\times[0,1]\to X$ with boundary on $L_0,L_1$, identically $x$ on one full negative tail and identically $y$ on one full positive tail. Its covariant Cauchy–Riemann linearization on fixed-end $H^1\to L^2$ spaces is Fredholm. Its real index is independent of the chosen smooth connection and of the representative under any smooth relative homotopy $H(h,s,t)$ with those boundary conditions, fixed endpoints, and one common pair of constant tails for all $h\in[0,1]$.

These indices add under concatenating two such representatives at their common endpoint, are zero for a constant representative, and change sign when $u(s,t)$ is replaced by $u(-s,t)$. Thus they define an integer index on smooth fixed-end representatives modulo the stated smooth relative homotopies, with concatenation and reversal laws. This result includes nonholomorphic representatives. It does not assume that a nonlinear moduli space exists or is regular.

A further relative smoothing and end-flattening argument is required to identify this smooth quotient with a Whitney-class set defined initially by arbitrary continuous disk maps and continuous relative homotopies. No such identification, domain Euler formula, or arbitrary-class representativity theorem is asserted here.

## Statement references

[[def-countable-choice]]

[[lem-geometric-strip-linearization-frame-and-fredholm-index]]

[[lem-relative-strip-maslov-determinant-excision-and-local-models]]

## Facts & Assumptions

**Given:** The fixed target data, exact product generator charts, actual smooth representatives, or the actual smooth relative homotopy with common constant tails, as specified in the Statement.

[F1] [[lem-geometric-strip-linearization-frame-and-fredholm-index]] proves Fredholmness for every actual smooth complex strip bundle with totally real boundary subbundles and an operator with Cauchy–Riemann symbol and exact product ends. Its proof constructs finite-chart complex embeddings, smooth image projections and global frames by an explicit matrix commutator ODE; its general Statement is not limited to nonlinear holomorphic zeros.

[F2] [[lem-relative-strip-maslov-determinant-excision-and-local-models]] identifies that actual index with the winding of the squared determinant phase of the boundary planes, using the specified positive quarter-turn vertical caps. The winding is unchanged by loop homotopies and global frame changes. Matching exact-end linear problems have additive indices.

## Proof

1.1 Choose any smooth connection $\nabla$ on $TX$ to express the actual covariant linearization of the Cauchy–Riemann section at $u$, including when its value is nonzero. Its formula is $$P_u\xi=\nabla_s\xi+J_t(u)\nabla_t\xi+(\nabla_\xi J_t)(u)u_t.$$ This follows by differentiating the section using that connection on its target bundle; a torsion-free connection gives the displayed formula, and any other connection alters it by a smooth zeroth-order term only. One can instead define this displayed Cauchy–Riemann-symbol operator directly with a torsion-free connection; the index conclusion for all such choices is the same. A smooth connection needed here is supplied by a finite target-chart partition on compact $X$: take flat torsion-free chart connections and their finite smooth partition sum. It is torsion-free because torsion is affine in a connection, and it obeys the connection rule because the weights sum to one. On a constant tail $du=0$, its expression in the fixed target chart is exactly $\partial_s+i\partial_t$. Its symbol is $P_u(f\xi)=fP_u\xi+f_s\xi+f_tJ_t(u)\xi$. The pulled-back horizontal tangent bundles are totally real by the endpoint hypotheses on $J_0,J_1$. Thus the general bundle-operator theorem [F1] applies and proves actual Fredholmness on the fixed-end completion. [F1, given, construct, algebra]

1.2 Consider the stated smooth homotopy. On the compact box $[0,1]_h\times[-R,R]_s\times[0,1]_t$ containing all nonconstant parts, $H^*TX$ with complex structure $J_t(H)$ has a global smooth complex frame. Here are the parameter details of the finite construction in [F1]. Choose finitely many complex local frames and supported smooth scalar bumps whose squared sum is positive, and embed a fiber by the list of its bump-weighted frame coordinates into one fixed $\mathbb C^N$. This has smooth image projection $Q=V(V^*V)^{-1}V^*$ in every local image-column matrix $V$. Along the straight radial segments from one point of the box, transport an initial complex basis by $Z'=[Q',Q]Z$. Differentiating $Q^2=Q$ shows that this transport preserves the image and inner products. The iterated-integral series has bounds $M^n/n!$; every fixed parameter derivative adds only polynomial factors in $n$, so it converges smoothly in all three parameters on this compact box. Pull the transported vectors back to obtain the asserted joint frame. This supplies one family of frames on the entire homotopy, instead of choosing unrelated frames for uncountably many slices. [F1, given, construct, algebra]

2.1 Its index is the boundary-phase winding in [F2]. The boundary planes and the product end caps depend on $u,J_t,L_j$, not on the connection. Changing the connection changes no one of these planes or caps and hence leaves this winding unchanged. All such operators satisfy the exact end hypothesis in step 1.1, so this proves connection independence by their actual Fredholm index formula. It does not infer smoothness of a nonlinear count or use an index formula for a formal region chain. [F2, step 1.1, construct, algebra]

2.2 For each $h$, complete the horizontal tangent subbundles around the same rectangle by the product-chart vertical caps $e^{i\pi\rho(t)/2}\mathbb R^m$ from [F2]. These caps are the same geometric planes for every $h$, since the ends and their charts were fixed. In the joint frame of step 1.2 the squared determinant phase is one continuous map from $[0,1]\times\partial Q$ to $S^1$. It is well defined even without orienting the horizontal real bundles: a real basis change has nonzero real determinant, whose normalized square is one. Local real frames exist smoothly in both variables by their local bundle coordinates. The phase therefore gives a genuine loop homotopy. Homotopy invariance of winding in [F2] makes its integer constant in $h$. The actual index formula applied separately at each slice proves index invariance for this actual smooth homotopy. [F2, step 1.1, step 1.2, construct, algebra]

3.1 Concatenate representatives $u:x\to y$ and $v:y\to z$ by translating their nonconstant cores into successive intervals and identifying their constant $y$ collars. They agree with all derivatives on the joined constant region, so the result is smooth, with the original boundary conditions and exact outer tails. The actual bundle operators of step 1.1 also agree with $D_0$ in their common generator chart there. The exact-end linear gluing assertion [F2] therefore makes the index of this concatenation the sum of the two indices. Extending or deleting a finite constant collar inserts or removes boundary planes and matching caps with opposite phase changes, so it does not change the integer. At a constant representative all horizontal planes are constant in its single product chart; the two vertical cap phase changes cancel, giving winding and index zero. [F2, step 1.1, step 2.1, construct, algebra]

4.1 The reversed representative $\bar u(s,t)=u(-s,t)$ satisfies the same totally real boundary conditions with ends interchanged. Choose a frame for $u$ on a large rectangle and pull it back by $(s,t)\mapsto(-s,t)$ for $\bar u$. Its completed boundary loop is exactly the original loop precomposed with this orientation-reversing reflection: the positive and negative vertical caps are exchanged with their geometric product frames, while the horizontal plane data are reflected. A positively oriented boundary traversal therefore makes the opposite total phase change. Thus [F2] gives $\operatorname{ind}P_{\bar u}=-\operatorname{ind}P_u$. Together with steps 2.2 and 3.1 this proves all the smooth quotient, constant, concatenation and reversal assertions. No step asserted that an arbitrary continuous relative class had already been smoothed, or equated this integer with a domain Euler/corner expression. Those remain separate prerequisites for a full continuous Whitney-class comparison. [F2, step 2.2, step 3.1, construct, algebra] ∎
