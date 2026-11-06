---
id: def-gts-finite-classifying-approximation-input
kind: definition
title: Finite classifying-approximation and coherence input
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-axiom-of-choice
  - lem-transgression-between-two-connections-is-exact
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-transgression-between-two-connections-is-exact: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.3, Theorem 3.42 proof, PDF pp. 43–44.
---

## Definition

Write $U(r)=\{U\in M_r(\mathbb C):U^*U=I\}$ and $\mathfrak u(r)=\{X\in M_r(\mathbb C):X^*+X=0\}$. A smooth Hermitian rank-$r$ bundle is a smooth rank-$r$ complex vector bundle with a smoothly varying positive Hermitian inner product; its topological version uses a continuous bundle and continuous metric. A unitary connection is a complex-linear connection satisfying the Leibniz rule and $X\langle s,t\rangle=\langle\nabla_Xs,t\rangle+\langle s,\nabla_Xt\rangle$ for smooth sections $s,t$ and vector fields $X$. Write $\nabla_Xs=(\nabla s)(X)$; its curvature is the $\operatorname{End}(E)$-valued two-form $F_\nabla(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$. A symmetric polynomial of degree $m$ is a symmetric $m$-linear form on $\mathfrak u(r)$, invariant here under simultaneous conjugation by $U(r)$; evaluation on curvature means $p_c(F_\nabla,\ldots,F_\nabla)$ using exterior products and the stated normalization. A unitary bundle isomorphism is a smooth complex-linear fiberwise isometry (or a continuous one for topological bundles). Let $BU(r)=\mathrm{Gr}_r(\mathbb C^\infty)$ be the direct limit of finite complex Grassmannians with its direct-limit CW topology, and let $\gamma_r\to BU(r)$ be the universal topological Hermitian rank-$r$ bundle. For a finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary of dimension $d$, integers $r,m\ge1$, and a real-valued symmetric $U(r)$-invariant $m$-linear form $p_c:\mathfrak u(r)^m\to\mathbb R$ with a specified characteristic normalization, a **finite classifying-approximation and coherence input** consists of the following data. The normalization includes every required $2\pi i$ factor. For unitary connections $\nabla_0,\nabla_1$ on the same Hermitian bundle, use the affine path $\nabla_t=\nabla_0+t(\nabla_1-\nabla_0)$ and the transgression convention
$$\operatorname{CS}_{p_c}(\nabla_0,\nabla_1)=m\int_0^1p_c(\nabla_1-\nabla_0,F_{\nabla_t},\ldots,F_{\nabla_t})\,dt,$$
which satisfies $d\operatorname{CS}_{p_c}=p_c(F_{\nabla_1})-p_c(F_{\nabla_0})$ by [[lem-transgression-between-two-connections-is-exact]].

First, it includes a finite-dimensional smooth manifold $N$, a smooth Hermitian rank-$r$ bundle $F\to N$ with unitary connection $\nabla_F$, and a continuous map $u:N\to BU(r)$ inducing isomorphisms on $\pi_j$ for $j\le d$ and a surjection on $\pi_{d+1}$ (with chosen basepoints). A specified unitary isomorphism of topological bundles $F\cong u^*\gamma_r$ makes $u$ a classifying map for $F$. For every supplied smooth Hermitian bundle $E\to M$ with unitary connection $\nabla$, it includes a smooth map $f:M\to N$ and a unitary bundle isomorphism $E\cong f^*F$.

Second, for every two such presentations $(N_0,F_0,\nabla_{F_0},u_0,f_0)$ and $(N_1,F_1,\nabla_{F_1},u_1,f_1)$ of the same $(E,\nabla)$, it includes a finite-dimensional smooth common approximation $N'$ with a $(d+1)$-connected continuous classifying map $u':N'\to BU(r)$, a smooth Hermitian bundle $F'\to N'$ whose underlying bundle is isomorphic to $u'^*\gamma_r$, and a unitary connection $\nabla'$ on $F'$. It includes smooth comparison maps $a_i:N_i\to N'$ and unitary bundle isomorphisms $F_i\cong a_i^*F'$. Put $\nabla_i^E=(a_i\circ f_i)^*\nabla'$ using these isomorphisms. The data further include a smooth homotopy $h:M\times[0,1]\to N'$ from $a_0f_0$ to $a_1f_1$ and a unitary isomorphism $h^*F'\cong\operatorname{pr}_M^*E$ whose endpoint identifications are the given presentations. Transport the pullback connection $h^*\nabla'$ through this isomorphism to a connection $\widetilde\nabla$ on $\operatorname{pr}_M^*E$, and write $\nabla_t$ for its restriction to $M\times\{t\}$. Put $T_h=\int_0^1p_c(F_{\widetilde\nabla})$, contracting with $\partial_t$ and integrating in the increasing $t$ direction. For every unitary connection $\nabla$ on $E$, the supplied coherence form $\lambda\in\Omega^{2m-2}(M)$ satisfies the exact equation
$$-T_h+\operatorname{CS}_{p_c}(\nabla_0^E,\nabla)-\operatorname{CS}_{p_c}(\nabla_1^E,\nabla)=d\lambda,$$
where $\operatorname{CS}_{p_c}$ is the normalized path transgression of [[lem-transgression-between-two-connections-is-exact]]. If $2m-1>d$, all forms of degree $2m-1$ on $M$ vanish, so this identity is automatic with zero left side.

Finally, each approximation used when $2m-1\le d$ satisfies $H^{2m-1}(N;\mathbb R)=0$. When $2m-1>d$, the corresponding group on $M$ vanishes by dimension; no vanishing of $H^{2m-1}(N;\mathbb R)$ is required. These are explicitly supplied inputs for the conditional construction and uniqueness argument; this definition does not assert that they exist for every $M,E$.

## Definition references

[[def-smooth-manifold]]

[[def-axiom-of-choice]]

## Remarks

The existence of the finite approximations, the common-refinement system, the odd-degree cohomology vanishing and the coherent transgression comparison are not proved by this definition. The differential-refinement item remains escalated until these inputs are supplied with a local existence argument.
