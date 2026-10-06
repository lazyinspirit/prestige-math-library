---
id: lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction
kind: lemma
title: A normal summand of rank at least two realizes every framing-loop obstruction
deps:
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
- def-countable-choice
- ex-orthogonal-and-special-orthogonal-lie-groups
- thm-relative-whitney-approximation-for-manifold-valued-maps
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery, Theorem 7.27(ii), proof and Lemma 7.28, printed pp.
      138–140
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: 'Printed pp. 139–140: collared disk outside f(N), correction of one normal summand, and alteration
      of only one source sheet.'
proof_strategy: direct
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. For N > r >= 2, the standard block inclusion SO(r) into SO(N) is surjective on fundamental groups. Hence a loop discrepancy of a total normal frame can be killed by a loop supported in a single rank-r orthogonal summand, leaving its subspace and designated corner values fixed.

## Facts & Assumptions

[F1] Real orthonormal frame spaces with complement rank at least two are simply connected; their smooth disk fillings admit explicit radial complement transport. [[lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected]]

[F2] Under Countable Choice, continuous manifold-valued maps smooth near a closed set can be smoothed through a homotopy fixed near that set. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F3] A linear matrix initial-value problem with continuous coefficients has a unique solution on the prescribed compact interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F4] Jointly smooth finite-dimensional ODE coefficients give smooth local solution dependence on parameters; uniqueness permits composition along a compact solution interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F5] Orthogonal and special orthogonal Lie groups. [[ex-orthogonal-and-special-orthogonal-lie-groups]]

## Proof


**Given:** Countable choice, integers $N>r\ge2$, and the block inclusion $SO(r)\subset SO(N)$ fixing the first $k=N-r$ coordinate vectors.

1.1 Let $\gamma$ be an arbitrary based continuous loop in $SO(N)$. By relative Whitney approximation after a basepoint-preserving reparametrization constant on a basepoint arc, represent its class by a smooth based loop, still denoted $\gamma$. Taking the first $k$ columns gives a smooth loop $F_\partial$ in $V_k(\mathbb R^N)$. The earlier local Stiefel lemma supplies a continuous disk filling, since $N-k=r\ge2$. Its proof also gives the explicit relative smoothing procedure: make the filling radial-constant on an outer annulus, extend it beyond the unit disk, and apply relative Whitney approximation in the embedded Stiefel manifold while fixing a closed exterior annulus. We thus obtain a smooth filling $F:D^2\to V_k(\mathbb R^N)$ with exactly the prescribed boundary columns. [given, construct, F1, F2]

2.1 Put $P(z)=I_N-F(z)F(z)^T$. This is a smooth rank-$r$ orthogonal projection. Along $tz$ solve $U_z'=[\dot P_z,P_z]U_z$, $U_z(0)=I_N$. The linear ODE existence and parameter-dependence suppliers give a unique solution smooth in $z$ on the whole interval. The commutator is skew symmetric, so $U_z$ is orthogonal; the identities $[ [\dot P_z,P_z],P_z]=\dot P_z$ and uniqueness give $U_zP(0)U_z^T=P_z$. Transport an orthonormal basis of $\operatorname{im}P(0)$ to obtain a smooth complementary frame $C(z)$. Choose its initial orientation so $S(z)=(F(z),C(z))$ has determinant one at the centre. Its determinant is continuous and takes values in $\{1,-1\}$, so is one throughout the disk. At the selected boundary basepoint $z_*$, $F(z_*)$ is the standard first $k$ columns and $S(z_*)=\operatorname{diag}(I_k,B)$ for some $B\in SO(r)$. Replace $S$ by $S\operatorname{diag}(I_k,B^{-1})$; it remains a disk completion and now equals $I_N$ at $z_*$. [step 1.1, construct, algebra, F3, F4]

3.1 On the boundary write $\gamma=S\operatorname{diag}(I_k,h)$, where $h=C^T(\text{last }r\text{ columns of }\gamma)\in SO(r)$ uses the normalized complementary frame. Orthogonality and determinant one ensure $h\in SO(r)$, and normalization ensures $h(z_*)=I_r$. The based loop $S|_{\partial D^2}$ extends over the disk by $S$, so is based-nullhomotopic: compose the disk extension with the contraction of the disk to $z_*$, which fixes $z_*$. Multiplication of based loops in a topological group gives their fundamental-group product, as seen from the square $(s,t)\mapsto g(s)h(t)$; equivalently multiply this based nullhomotopy by the fixed loop $\operatorname{diag}(I_k,h)$. Thus $[\gamma]$ is the image of $[h]$, proving surjectivity. To kill a framing discrepancy, choose a loop in the summand representing its inverse class and reparametrize it to be constant outside the interior of one chosen boundary arc. Acting by this loop preserves the summand subspace, the other summand, and the corner frame values; the corrected loop is nullhomotopic and extends over the disk. This corrects an adjustable admissible frame and asserts no extension of every previously prescribed frame. [step 1.1, step 2.1, construct, F5] ∎
