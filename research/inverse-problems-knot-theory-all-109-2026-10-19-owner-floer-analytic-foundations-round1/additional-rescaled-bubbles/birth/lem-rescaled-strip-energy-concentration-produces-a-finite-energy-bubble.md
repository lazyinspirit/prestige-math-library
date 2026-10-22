---
id: lem-rescaled-strip-energy-concentration-produces-a-finite-energy-bubble
kind: lemma
title: "Derivative concentration produces a finite-energy plane or half-plane bubble"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, lem-boundary-energy-regularity-for-totally-real-strips, lem-local-sobolev-bootstrap-for-almost-complex-strips, lem-smooth-strip-compactness-away-from-energy-concentration]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, rescaling near a bubbling point"
      url: "https://bookstore.ams.org/coll-52"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §10"
      url: "https://arxiv.org/pdf/math/0101206"
---

## Statement

Assume Countable Choice. Use a compact target $(X,g)$, fixed compact totally real boundary submanifolds, and smooth strip equations $J_n$ with uniform bounds of every order, fixed boundary complex structures, and local $C^\infty$ convergence to $J_\infty$. Let smooth solutions $u_n$ have energies at most $E_0$. Suppose $p_n\to p$ in the strip, including its boundary, and $|du_n(p_n)|_g\to\infty$.

After taking a subsequence, translations and positive conformal dilations about points tending to $p$ give a nonconstant smooth map $v$ on either $\mathbb C$ or the closed upper half-plane, satisfying the autonomous equation $v_s+J_\infty(p,v)v_t=0$, with energy at most $E_0$. In the half-plane case its real-axis boundary lies in the boundary submanifold at $p$. Its derivative has norm one at some finite point, and its derivative norm is at most two everywhere. There is a constant $\hbar>0$ depending only on the uniform geometric data, independent of the sequence, such that $E(v)\ge\hbar$.

At the upper strip edge an orientation-preserving half-plane coordinate is used. No extension of $v$ over infinity, sphere or disk compactification, energy identity, or bubble-tree statement is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the compact geometric data and families, bounded-energy solutions, and derivative concentration in the statement.

[F1] The local interior and boundary small-energy gradient estimates are [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and [[lem-boundary-energy-regularity-for-totally-real-strips]], with uniform comparison to the fixed metric $g$.

[F2] Uniform coordinate $C^1$ bounds give all local derivative bounds by [[lem-local-sobolev-bootstrap-for-almost-complex-strips]]. The explicit target-chart construction and countable dense-point and derivative diagonal extractions are proved in [[lem-smooth-strip-compactness-away-from-energy-concentration]].

## Proof

1.1 Choose a flat source coordinate about $p$, centered there, with domain a disk or an upper half-disk. At the lower strip edge use the usual coordinate; at the upper edge use $z\mapsto i-z$, so both coordinates are orientation preserving and preserve the form of the equation. Write $f_n=|du_n|_g$ in this coordinate and $M_n=f_n(p_n)\to\infty$. After a tail, choose radii $$r_n=\sqrt{|p_n-p|+M_n^{-1}}$$ smaller than a fixed coordinate radius. Then $r_n\to0$, $|p_n-p|/r_n\to0$, and $r_nM_n\to\infty$. On the compact disk or half-disk of radius $r_n$ maximize $(r_n-|z|)f_n(z)$, and let $q_n$ be a maximum point. Put $\lambda_n=f_n(q_n)$ and $\delta_n=(r_n-|q_n|)/2$. The maximum is at least $(r_n-|p_n|)M_n$, so $\lambda_n\delta_n\to\infty$, and in particular $\lambda_n\to\infty$. On $B_{\delta_n}(q_n)$ intersected with the physical source half-plane, maximality gives $f_n\le2\lambda_n$. All selected points tend to $p$. [given, construct, algebra]

2.1 If $p$ is interior, rescale by $z\mapsto q_n+z/\lambda_n$. The domains contain disks about zero of radii $\lambda_n\delta_n\to\infty$; the rescaled derivatives are at most two there and have norm one at zero. If $p$ is a boundary point, write $h_n=\lambda_n\operatorname{Im}q_n\ge0$. Pass either to $h_n\to\infty$ or to a bounded sequence converging to $h\ge0$. In the first case use the same center rescaling; its boundary recedes to height $-h_n$, so the limit domain is the plane. In the second case rescale about the boundary foot $\operatorname{Re}q_n$, obtaining upper half-plane domains on which the derivative bound holds on expanding disks centered at $ih_n$. Every fixed compact upper-half-plane set eventually lies in these disks, and the derivative norm is one at $ih_n$. The boundary values remain on the original fixed submanifold. In all cases the rescaled almost complex structures converge locally smoothly to $J_*(x)=J_\infty(p,x)$: each positive source derivative gains a factor $\lambda_n^{-1}$ and the unscaled source points tend to $p$. [step 1.1, given, construct, algebra]

3.1 These rescaled maps have a subsequence converging smoothly on compact subsets of their limiting plane or half-plane. Here the details of [F2] apply without removing points: the global derivative bound two already gives local equicontinuity everywhere. Compact target finite nets and a countable dense subset of the limiting domain give a locally uniform subsequence. In a small disk about each limiting source point choose the fixed target coordinates of [F2], normalizing $J_*$ to $i$ at the center; at boundary points use its explicit totally real chart. Locally uniform convergence and smooth coefficient convergence then give the coefficient bound $\|J-i\|\le1/2$ and uniform coordinate $C^1$ bounds on a smaller fixed patch. The bootstrap in [F2] gives bounds of every order there. Its countable derivative diagonal construction yields local $C^\infty$ convergence on an exhaustion of the entire limiting domain, including boundary derivatives. Thus no concentration point remains in this selected scale. [F2, step 2.1, construct]

4.1 Let $v$ be the limit. The equation and boundary condition pass to the limit. Its derivative norm is one at zero in the plane-center case, and at $ih$ in the bounded-height case: convergence is $C^1$ on a fixed compact neighborhood of those moving points. Its derivative norm is at most two by the same convergence, so it is nonconstant. A translation and dilation of a two-dimensional source preserves Dirichlet energy, since the squared derivative scaling cancels the area scaling. Therefore every compact-region energy of the rescaled maps is at most $E_0$, and passage to the smooth limit followed by exhaustion gives $E(v)\le E_0$. [step 2.1, step 3.1, algebra]

5.1 Finally choose fixed constants $r_*>0$, $\varepsilon_*>0$, and $C_*>0$ giving the interior center and boundary half-radius supremum estimates of [F1] in the metric $g$, uniformly for every possible autonomous limit $J_*$. This is possible from the uniform coefficient bounds and the two fixed boundary structures; decrease $r_*$ below $1/4$ if necessary. If a derivative-norm-one point of $v$ in the plane, or in the half-plane at height at least $r_*/4$, is considered, apply the interior estimate on a radius-$r_*/8$ disk about it. If its half-plane height is below $r_*/4$, apply the boundary supremum estimate on the radius-$r_*$ half-disk centered at its boundary foot. If total energy is at least $\varepsilon_*$ there is already a positive lower bound. Otherwise the relevant small-energy estimate gives $$1\le\frac{64C_*}{r_*^2}E(v).$$ Consequently $$\hbar=\min\{\varepsilon_*,r_*^2/(64C_*)\}>0$$ is a uniform lower bound for the energy of this nonconstant bubble. This proves exactly the asserted plane or half-plane result, without filling its point at infinity. [F1, step 4.1, construct, algebra] ∎
