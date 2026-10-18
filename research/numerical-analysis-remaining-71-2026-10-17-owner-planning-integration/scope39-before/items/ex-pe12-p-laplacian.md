---
id: ex-pe12-p-laplacian
kind: example
title: The p-Laplacian is an admissible monotone diffusion
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe12-monotone-diffusion-flux, def-pe12-stable-conforming-fem-family, lem-pe12-w1p-compact-l2-embedding, thm-pe12-monotone-fem-limit, def-axiom-of-choice, thm-pe12-l2-projector-w1p-stability]
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^d$ be a nonempty
bounded open set, $d\ge1$, and let $p>\max(1,2d/(d+2))$. The flux
$a(x,\xi)=|\xi|^{p-2}\xi$, with $a(x,0)=0$, satisfies the coercivity,
monotonicity, $p$-growth and operator-continuity hypotheses in
[[def-pe12-monotone-diffusion-flux]]. Its zero-boundary space embeds
compactly into $L^2(\Omega)$. In particular, on the nonempty interval
$\Omega=(0,1)$ for $d=1$, or the nonempty unit cube $\Omega=(0,1)^d$ for
$d\ge2$, the explicit fixed-degree interval or Kuhn/Freudenthal meshes and
any independent time partitions with vanishing maximum step satisfy the
projector hypotheses. The convergence theorem
[[thm-pe12-monotone-fem-limit]] therefore applies on those concrete meshes
for every load and initial datum in its stated classes; no projector
condition remains outstanding in this example.

## Facts & Assumptions

**Given:** The Axiom of Choice, the stated $\Omega,d,p$, and the definitions
of the flux and convergence hypotheses.

[F1] An admissible flux is Carathéodory, has $p$-growth and coercivity,
induces a bounded map $V\to V^*$, and is required to induce a norm-continuous
map for the finite-dimensional existence proof
([[def-pe12-monotone-diffusion-flux]]).

[F2] For the stated strict exponent threshold,
$W_0^{1,p}(\Omega)\Subset L^2(\Omega)$
([[lem-pe12-w1p-compact-l2-embedding]]).

[F3] Under Choice, the nonlinear FEM convergence theorem gives subsequential
strong $L^r(H)$ convergence and identifies the weak flux limit, conditional
on the stable projector interface
([[thm-pe12-monotone-fem-limit]],
[[def-pe12-stable-conforming-fem-family]]).

[F4] The fixed-degree uniform interval and cube meshes have $L^2$ projectors
uniformly bounded on $W_0^{1,p}$ and strongly approximating there and in
$L^2$; their time partitions may refine independently
([[thm-pe12-l2-projector-w1p-stability]]).

[A1] The Axiom of Choice is assumed by the concrete flux-space definition
and its compact Sobolev embedding interface
([[def-axiom-of-choice]], [[def-pe12-monotone-diffusion-flux]],
[[lem-pe12-w1p-compact-l2-embedding]]).

## Proof

1.1 Let $J_p(\xi)=|\xi|^{p-2}\xi$ and $\Phi(\xi)=|\xi|^p/p$. The function $\Phi$ is convex: the triangle inequality gives $|\theta\xi+(1-\theta)\eta|\le\theta|\xi|+(1-\theta)|\eta|$, and $r\mapsto r^p$ is increasing and convex for $r\ge0$. It is differentiable with $\nabla\Phi=J_p$, including at zero because $p>1$. For a differentiable convex function, restriction to the segment from $\eta$ to $\xi$ gives the tangent inequalities $$\Phi(\xi)\ge\Phi(\eta)+J_p(\eta)\cdot(\xi-\eta),\qquad \Phi(\eta)\ge\Phi(\xi)+J_p(\xi)\cdot(\eta-\xi).$$ Adding them yields $(J_p(\xi)-J_p(\eta))\cdot(\xi-\eta)\ge0$. Also $J_p(\xi)\cdot\xi=|\xi|^p$ and $|J_p(\xi)|=|\xi|^{p-1}$, giving monotonicity, coercivity with $\alpha=1,h=0$, and growth with $C=1,g=0$. [F1, given, algebra]

1.2 For $p\ge2$, the derivative of $J_p$ has operator norm at most $(p-1)|z|^{p-2}$. Integrating it along the segment from $\eta$ to $\xi$ gives $$|J_p(\xi)-J_p(\eta)| \le(p-1)(|\xi|+|\eta|)^{p-2}|\xi-\eta|.$$ For $1<p<2$, put $d_0=|\xi-\eta|$ and $M_0=\max(|\xi|,|\eta|)$. If $d_0\ge M_0/2$, then $|J_p(\xi)-J_p(\eta)|\le2M_0^{p-1}\le2^{p}d_0^{p-1}$. If $0<d_0<M_0/2$, every point on the segment has norm at least $M_0/2$; there the derivative norm is at most $(M_0/2)^{p-2}$. Hence $$|J_p(\xi)-J_p(\eta)| \le (M_0/2)^{p-2}d_0\le C_p d_0^{p-1},$$ because $(d_0/M_0)^{2-p}\le1$. The case $d_0=0$ is immediate. Thus for $1<p<2$ the global estimate $|J_p(\xi)-J_p(\eta)|\le C_p|\xi-\eta|^{p-1}$ holds. [F1, given, algebra]

2.1 If $z_n\to z$ in $V$, then $\nabla z_n\to\nabla z$ in $L^p$. For $p\ge2$, Hölder applied to the first estimate of step 1.2 gives $$\|J_p(\nabla z_n)-J_p(\nabla z)\|_{L^{p'}} \le(p-1)(\|\nabla z_n\|_p+\|\nabla z\|_p)^{p-2} \|\nabla z_n-\nabla z\|_p\to0.$$ For $1<p<2$, the second estimate and $(p-1)p'=p$ give $$\|J_p(\nabla z_n)-J_p(\nabla z)\|_{L^{p'}} \le C_p\|\nabla z_n-\nabla z\|_p^{p-1}\to0.$$ For any $w\in V$, Hölder bounds $|\langle A(z_n)-A(z),w\rangle| \le\|J_p(\nabla z_n)-J_p(\nabla z)\|_{p'}\|w\|_V$. Therefore $A:V\to V^*$ is norm-continuous as required by [F1]. [F1, step 1.2, given, algebra]

3.1 The threshold and [F2] supply the required dense compact $V\Subset L^2(\Omega)$ inclusion, and step 1.1 verifies the pointwise flux conditions. Step 2.1 verifies the additional norm continuity. Hence the flux meets all hypotheses of [F1]. [A1, F1, F2, step 1.1, step 2.1, given]

4.1 On $\Omega=(0,1)$ in $d=1$ the threshold is $p>1$, while on the unit cube in $d\ge2$ it is exactly the stated strict threshold. For either domain, [F4] supplies an explicit fixed-degree spatial family and time partitions satisfying the definition in [F3]. Applying the convergence theorem [F3] to the flux verified in step 3.1 gives the concrete subsequential FEM convergence assertion in the Statement, with all original data and exponent hypotheses retained. [F3, F4, step 3.1, given] ∎
