---
id: lem-ip-riemannian-green-boundary-traces-and-wave-lifting
kind: lemma
title: "Riemannian Green identity, boundary trace, and wave lifting"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - def-double-of-a-smooth-manifold-with-boundary
  - thm-the-double-has-a-well-defined-smooth-structure
  - cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-closed-subspace-of-a-compact-space-is-compact
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - thm-euclidean-inverse-function-theorem
  - def-riemannian-divergence
  - thm-determinant-differential-and-jacobis-formula
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, full author lecture notes"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.1, complete proof of Lemma 3.4, PDF pp. 23–24: Riemannian Green calculation for forward and terminal wave solutions."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs, full lecture notes"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§2.4 and 3.3, PDF pp. 9 and 17–18: integration by parts for wave data and Riemannian boundary pairing."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, nonempty smooth Riemannian manifold with smooth boundary, let $T>0$, set $Q=(0,T)\times M$ and $\Sigma=(0,T)\times\partial M$, and let $\nu_{\mathrm{out}}$ be the outward unit normal. Write $\nabla_g u$ for the metric gradient, $\Delta_g u=\operatorname{div}_g\nabla_g u$, $dV_g$ for Riemannian volume, and $dS_g$ for the induced boundary measure. The $C^1$ norms below are computed in any fixed finite smooth atlas of the indicated compact sets. For $u,v\in C^2([0,T]\times M)$,
$$\int_Q\big((\partial_t^2-\Delta_g)u\,v-u(\partial_t^2-\Delta_g)v\big)\,dV_gdt =\int_\Sigma\big(u\,\partial_{\nu_{\mathrm{out}}}v-v\,\partial_{\nu_{\mathrm{out}}}u\big)\,dS_gdt +\int_M[\partial_tu\,v-u\,\partial_tv]_{t=0}^{t=T}\,dV_g.$$
For every $h\in C_c^\infty(\Sigma)$ there is a smooth lift $H$ on $[0,T]\times M$ with $H|_\Sigma=h$, supported in a fixed boundary collar and zero near $t=0,T$, such that $\|H\|_{C^1([0,T]\times M)}\le C\|h\|_{C^1(\Sigma)}$. For every $u\in C^1([0,T]\times M)$ the classical normal trace obeys
$$\|\partial_{\nu_{\mathrm{out}}}u\|_{L^2(\Sigma)}\le \big(T\,\operatorname{area}_g(\partial M)\big)^{1/2}\|\nabla_g u\|_{C^0([0,T]\times M)}.$$

## Statement references

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]

[[def-double-of-a-smooth-manifold-with-boundary]]

[[thm-the-double-has-a-well-defined-smooth-structure]]

[[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]]

[[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]

[[thm-closed-subspace-of-a-compact-space-is-compact]]

[[cor-euclidean-closed-balls-and-spheres-are-compact]]

[[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]

[[thm-euclidean-inverse-function-theorem]]

[[def-riemannian-divergence]]

[[thm-determinant-differential-and-jacobis-formula]]

## Facts & Assumptions

**Given:** A compact smooth Riemannian manifold $(M,g)$ with smooth boundary, $T>0$, the outward unit normal, and $u,v\in C^2([0,T]\times M)$; for the lifting assertion also $h\in C_c^\infty(\Sigma)$.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: $g$ is smooth, symmetric, and positive definite on each nonzero tangent vector; smoothness is understood up to the boundary where stated.

[F2] [[def-riemannian-volume-density]]: in coordinates with metric matrix $G$, $dV_g=\sqrt{\det G}\,|dx^1\cdots dx^n|$.

[F3] [[def-double-of-a-smooth-manifold-with-boundary]] and the local seam-model clause of [[thm-the-double-has-a-well-defined-smooth-structure]] provide boundaryless charts across $\partial M$. The local extension result [[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]] extends the metric tensor across each seam point. Symmetrizing the local extension preserves its restriction to $M$, and after shrinking a chart it is positive definite by continuity.

[F4] [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]] makes $\partial M$ closed, hence compact as a closed subset of compact $M$ by [[thm-closed-subspace-of-a-compact-space-is-compact]]. The Euclidean closed-ball compactness and bump suppliers [[cor-euclidean-closed-balls-and-spheres-are-compact]] and [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] give finite smooth partitions on compact chart covers: shrink a finite chart cover, choose a bump equal to one on each smaller chart closure and supported in its assigned chart, and divide by their positive finite sum. The same finite chart-bump construction gives a smooth cutoff equal to one near a compact set and supported in any prescribed open neighborhood.

[F5] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the unique metric-compatible, torsion-free Levi–Civita connection and its coordinate Christoffel formula. [[def-riemannian-divergence]] defines divergence by the Lie derivative of the Riemannian volume density, and [[thm-determinant-differential-and-jacobis-formula]] gives the derivative of $\det G$ on the positive-definite locus.

[F6] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] gives local geodesic ODE solutions on the boundaryless open metric neighborhood in the double, with smooth dependence on initial data. [[thm-euclidean-inverse-function-theorem]] gives the local inverse charts used for the collar.


## Proof

1.1 Let $DM$ be the labelled double. Around each $x\in\partial M$, [F3] supplies a smooth local extension of $g$ as a covariant two-tensor. Symmetrizing it preserves its restriction to $M$, and continuity of positive definiteness at the seam lets us shrink the chart so that this symmetric extension $g_x$ is positive definite. Compactness of $\partial M$ gives finitely many smaller seam coordinate balls $B_i$ covering it, with compact closures inside metric-extension charts $U_i$. By [F4], choose nonnegative smooth bumps $\psi_i$ equal to one on $\overline{B_i}$ and supported in $U_i$. Put $\sigma=\sum_i\psi_i$ and $W=\{\sigma>0\}$. By [F4], choose a smooth cutoff $\eta$ equal to one on an open neighborhood $W_0$ of $\partial M$ and supported in $W$. Define $\phi_i=\eta\psi_i/\sigma$ on $W$ and zero outside; these are smooth and supported in $U_i$, and $\sum_i\phi_i=1$ on $W_0$. Extend each $\phi_i g_i$ by zero outside $U_i$ and put $\widetilde g=\sum_i\phi_i g_i$ on $W_0$. This is positive definite as a convex combination, and it equals $g$ on $W_0\cap M$ because every $g_i$ restricts to $g$ there. Thus $\widetilde g$ is a positive smooth metric on an open neighborhood of $\partial M$ in the boundaryless double. Apply [F6] to its geodesic ODE. For small $s\ge0$, set $E(x,s)=\exp_x(-s\nu_{\mathrm{out}}(x))$. At $s=0$ its differential sends $(w,a)\in T_x\partial M\oplus\mathbb R$ to $w-a\nu_{\mathrm{out}}$, an isomorphism, so [F6] gives a local collar chart. The inward normal velocity points into $M$, so these images lie in $M^\circ$ for small positive $s$. Compactness gives a uniform collar width and local invertibility on $\partial M\times[0,\epsilon)$. If no positive width made $E$ injective, there would be distinct $(x_k,s_k)$ and $(y_k,r_k)$ with equal images and $s_k,r_k\downarrow0$. Compactness gives convergent subsequences $x_k\to x$ and $y_k\to y$; continuity and equality of the images imply $x=y$. Both parameter sequences then lie in one local inverse chart at $(x,0)$, contradicting local injectivity. Hence $E$ is a diffeomorphism from $\partial M\times[0,\epsilon)$ onto a collar. [F1, F3, F4, F6, given]

1.2 In a coordinate chart write $G=(g_{ij})$, $\rho=\sqrt{\det G}$, and let $\Gamma^k_{ij}$ be the Levi–Civita symbols. Applying the Koszul formula from [F5] to coordinate vector fields (whose brackets vanish) and raising the last index gives
$$\Gamma^k_{ij}=\tfrac12 g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$
By [F5], divergence is the coefficient of the Lie derivative of $\rho|dx^1\cdots dx^n|$, and the coordinate Lie derivative gives
$$\mathcal L_W(\rho|dx^1\cdots dx^n|)=\partial_i(\rho W^i)|dx^1\cdots dx^n|,$$
so $\operatorname{div}_gW=\rho^{-1}\partial_i(\rho W^i)$. The connection trace is $\partial_iW^i+\Gamma^i_{ik}W^k$. Its Christoffel trace is
$$\Gamma^i_{ik}=\tfrac12 g^{i\ell}(\partial_i g_{k\ell}+\partial_k g_{i\ell}-\partial_\ell g_{ik})=\tfrac12 g^{i\ell}\partial_k g_{i\ell}=\partial_k\log\rho.$$
In the middle equality, relabeling $i$ and $\ell$ makes the first and third terms cancel; the last equality is the determinant differential formula in [F5]. Hence the connection trace is also
$$\partial_iW^i+\Gamma^i_{ik}W^k=\rho^{-1}\partial_i(\rho W^i).$$
These two formulas establish the required coordinate divergence identity. Use the finite smooth partition of unity from [F4]. For a field supported in an interior chart, integrating each coordinate derivative gives zero. In a boundary chart flattened to $x_n\ge0$, tangential derivatives integrate to zero because the field is supported away from the chart sides, while the normal derivative integrates to $-\sqrt{\det G}\,W^n$ at $x_n=0$. The induced boundary density and outward conormal satisfy $g(W,\nu_{\mathrm{out}})dS_g=-\sqrt{\det G}\,W^n dx^1\cdots dx^{n-1}$ there, so summing the chart identities gives $\int_M\operatorname{div}_gW\,dV_g=\int_{\partial M}g(W,\nu_{\mathrm{out}})dS_g$. With $W=u\nabla_gv-v\nabla_gu$, the product rule gives $\operatorname{div}_gW=u\Delta_gv-v\Delta_gu$, hence $$\int_M((-\Delta_g u)v+u\Delta_gv)\,dV_g=\int_{\partial M}(u\partial_{\nu_{\mathrm{out}}}v-v\partial_{\nu_{\mathrm{out}}}u)\,dS_g.$$ [F1, F2, F4, F5, given, algebra]

2.1 Choose $\chi\in C_c^\infty([0,\epsilon))$ equal to $1$ near $0$. Define $H(E(x,s),t)=\chi(s)h(x,t)$ in the collar and set $H=0$ outside it. The time support of $h$ and the normal cutoff make this a smooth function vanishing near $t=0,T$. The collar map and inverse have bounded first derivatives on a smaller compact collar, so the chain rule gives $\|H\|_{C^1([0,T]\times M)}\le C\|h\|_{C^1(\Sigma)}$. [step 1.1, given, construct, algebra]

2.2 For each fixed $x$, one-dimensional integration by parts gives $\int_0^T(u_{tt}v-u v_{tt})dt=[u_tv-u v_t]_0^T$. Integrating over $M$ and adding the spatial identity in step 1.2 yields the stated space-time Green identity. [step 1.2, given, algebra]

3.1 Since $|\partial_{\nu_{\mathrm{out}}}u|=|g(\nabla_gu,\nu_{\mathrm{out}})|\le |\nabla_gu|$, integration over the finite-measure compact boundary gives $\|\partial_{\nu_{\mathrm{out}}}u\|_{L^2(\Sigma)}^2\le T\operatorname{area}_g(\partial M)\|\nabla_gu\|_{C^0}^2$. Taking square roots proves the normal-trace estimate. [F1, given, algebra] ∎
